// Upload file to server using /files API

import { FilePurpose, FileResponse } from '../resources';
import { checkFile } from './check-file';
import { createReadStream, stat, extname, basename } from './node-unsafe-imports';
import { Together } from '../client';
import { APIPromise } from '../core/api-promise';

/**
 * @deprecated File uploads no longer resolve this shape. A rejected upload now
 * rejects with an `Error` (check failures carry the check report message).
 */
export interface ErrorResponse {
  message: string;
}

const SUPPORTED_FILE_TYPES = ['jsonl', 'parquet', 'csv'];

export function upload(
  client: Together,
  fileName: string,
  purpose: FilePurpose,
  check: boolean = true,
): APIPromise<FileResponse> {
  return new APIPromise<FileResponse>(
    client,
    new Promise(async (resolve, reject) => {
      const fileType = extname(fileName).replace('.', '');
      if (!SUPPORTED_FILE_TYPES.includes(fileType)) {
        reject(
          new Error(
            `Unknown extension of file ${fileName}. Only files with extensions ${SUPPORTED_FILE_TYPES.map(
              (type) => `.${type}`,
            ).join(', ')} are supported.`,
          ),
        );
        return;
      }

      let fileSize = 0;
      try {
        const stats = await stat(fileName);
        fileSize = stats.size;
      } catch {
        reject(new Error(`File does not exist: ${fileName}`));
        return;
      }

      if (check && purpose === 'fine-tune') {
        const checkResponse = await checkFile(fileName, purpose);
        if (!checkResponse.is_check_passed) {
          reject(
            new Error(checkResponse.message || `verification of ${fileName} failed with some unknown reason`),
          );
          return;
        }
      }

      try {
        const params = new URLSearchParams({
          // Send only the file name, not the local path it was read from.
          file_name: basename(fileName),
          file_type: fileType,
          purpose: purpose,
        });
        const fullUrl = `${client.baseURL}/files?${params}`;
        const r = await fetch(fullUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Bearer ${client.apiKey}`,
          },
          redirect: 'manual',
          body: params.toString(),
        });

        if (r.status !== 302) {
          return reject(new Error('failed to upload file'));
        }

        const uploadUrl = r.headers.get('location') || '';
        if (!uploadUrl || uploadUrl === '') {
          return reject(new Error('failed to upload file'));
        }
        const fileId = r.headers.get('x-together-file-id') || '';
        if (!fileId || fileId === '') {
          return reject(new Error('failed to upload file'));
        }

        const fileStream = createReadStream(fileName);

        // upload the file to uploadUrl
        const uploadResponse = await fetch(uploadUrl, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/octet-stream',
            'Content-Length': fileSize.toString(),
          },
          body: fileStream,
          // Node's `fetch` requires this whenever the body is an async iterable
          // (a `ReadStream` is), otherwise it throws
          // `TypeError: RequestInit: duplex option is required when sending a body`.
          duplex: 'half',
        });

        if (uploadResponse.status !== 200) {
          return reject(
            new Error(
              `failed to upload file (${uploadResponse.statusText}) status code ${uploadResponse.status}`,
            ),
          );
        }

        const data = await client.files.retrieve(fileId).asResponse();

        // Forcing the shape into the APIResponse interface
        resolve({
          controller: new AbortController(),
          requestLogID: '',
          retryOfRequestLogID: undefined,
          startTime: Date.now(),
          options: {
            method: 'post',
            path: '/files',
          },
          response: data,
        });
      } catch (error) {
        reject(error);
      }
    }),
  );
}
