// Upload file to server using /files API

import { FilePurpose, FileResponse } from '../resources';
import { createReadStream, stat, extname } from './node-unsafe-imports';
import { BaseTogether } from '../client';
import { APIPromise } from '../core/api-promise';

export interface ErrorResponse {
  message: string;
}

const failedUploadMessage = {
  message: 'failed to upload file',
};

export function upload(
  client: BaseTogether,
  fileName: string,
  purpose: FilePurpose,
): APIPromise<FileResponse> {
  return new APIPromise<FileResponse>(
    client,
    new Promise(async (resolve, reject) => {
      let fileSize = 0;

      try {
        const stats = await stat(fileName);
        fileSize = stats.size;
      } catch {
        reject(new Error('File does not exists'));
      }

      const fileType = extname(fileName).replace('.', '');
      if (fileType !== 'jsonl' && fileType !== 'parquet' && fileType !== 'csv') {
        return {
          message: 'File type must be either .jsonl, .parquet, or .csv',
        };
      }

      try {
        const params = new URLSearchParams({
          file_name: fileName,
          file_type: fileType,
          purpose: purpose,
        });
        const fullUrl = `${client.baseURL}/v1/files?${params}`;
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
          return reject(failedUploadMessage);
        }

        const uploadUrl = r.headers.get('location') || '';
        if (!uploadUrl || uploadUrl === '') {
          return reject(failedUploadMessage);
        }
        const fileId = r.headers.get('x-together-file-id') || '';
        if (!fileId || fileId === '') {
          return reject(failedUploadMessage);
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
        });

        if (uploadResponse.status !== 200) {
          return reject({
            message: `failed to upload file (${uploadResponse.statusText}) status code ${uploadResponse.status}`,
          });
        }

        const data = await client.get(`/v1/files/${fileId}`).asResponse();

        // Forcing the shape into the APIResponse interface
        resolve({
          controller: new AbortController(),
          requestLogID: '',
          retryOfRequestLogID: undefined,
          startTime: Date.now(),
          options: {
            method: 'post',
            path: '/v1/files',
          },
          response: data,
        });
      } catch (error) {
        reject(error);
      }
    }),
  );
}
