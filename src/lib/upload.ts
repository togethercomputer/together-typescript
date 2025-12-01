// Upload file to server using /files API

import { readEnv } from '../internal/utils/env';
import { FilePurpose, FileResponse } from '../resources';
import { checkFile } from './check-file';
import { Together } from '../client';
import { APIPromise } from '../core/api-promise';
import { makeReadableStream } from '../internal/shims';

export interface ErrorResponse {
  message: string;
}

const failedUploadMessage = {
  message: 'failed to upload file',
};

const baseURL = readEnv('TOGETHER_API_BASE_URL') || 'https://api.together.xyz/v1';

export function upload(
  client: Together,
  file: File,
  purpose: FilePurpose,
  check: boolean = true,
): APIPromise<FileResponse> {
  return new APIPromise<FileResponse>(
    client,
    new Promise(async (resolve, reject) => {
      const fileSize = file.size;

      const fileType = _extensionFromFileName(file.name);
      if (fileType !== 'jsonl' && fileType !== 'parquet' && fileType !== 'csv') {
        return {
          message: 'File type must be either .jsonl, .parquet, or .csv',
        };
      }

      if (check) {
        const checkResponse = await checkFile(file, fileType, purpose);
        if (!checkResponse.is_check_passed) {
          console.log(checkResponse);
          reject(checkResponse.message || `verification of ${file.name} failed with some unknown reason`);
        }
      }

      try {
        const params = new URLSearchParams({
          file_name: file.name,
          file_type: fileType,
          purpose: purpose,
        });
        const fullUrl = `${baseURL}/files?${params}`;
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

        const fileStream = makeReadableStream(file.stream());

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

function _extensionFromFileName(fileName: string): string {
  const lastDotIndex = fileName.lastIndexOf('.');
  if (lastDotIndex === -1 || lastDotIndex === 0 || lastDotIndex === fileName.length - 1) {
    return '';
  }
  console.log(fileName.slice(lastDotIndex + 1));
  return fileName.slice(lastDotIndex + 1);
}
