// Upload file to server using /files API

import { readEnv } from '../internal/utils/env';
import fs from 'fs';
import * as path from 'path';
import { FilePurpose } from '../resources';
import { checkFile } from './check-file';

export interface FileResponse {
  id: string;
  object: string;
  type: 'jsonl' | 'parquet';
  purpose: 'fine-tune';
  filename: string;
  bytes: number;
  line_count: number;
  processed: boolean;
}

export interface ErrorResponse {
  message: string;
}

const failedUploadMessage = {
  message: 'failed to upload file',
};

const baseURL = readEnv('TOGETHER_API_BASE_URL') || 'https://api.together.xyz/v1';

export async function upload(
  fileName: string,
  purpose: FilePurpose,
  check: boolean = true,
): Promise<FileResponse | ErrorResponse> {
  if (!fs.existsSync(fileName)) {
    return {
      message: 'File does not exists',
    };
  }

  const fileType = path.extname(fileName);
  if (fileType !== '.jsonl' && fileType !== '.parquet') {
    return {
      message: 'File type must be either .jsonl or .parquet',
    };
  }

  if (check) {
    const checkResponse = await checkFile(fileName, purpose);
    if (!checkResponse.is_check_passed) {
      return {
        message: checkResponse.message || `verification of ${fileName} failed with some unknown reason`,
      };
    }
  }

  // steps to do
  // 1. check if file exists
  // 2. get signed upload url
  // 3. upload file
  const apiKey = readEnv('TOGETHER_API_KEY');

  if (!apiKey) {
    return {
      message: 'API key is required',
    };
  }

  const getSigned = baseURL + '/files';

  try {
    const params = new URLSearchParams({
      file_name: fileName,
      purpose: purpose,
    });
    const fullUrl = `${getSigned}?${params}`;
    const r = await fetch(fullUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${apiKey}`,
      },
      redirect: 'manual',
      body: params.toString(),
    });

    if (r.status !== 302) {
      return failedUploadMessage;
    }

    const uploadUrl = r.headers.get('location') || '';
    if (!uploadUrl || uploadUrl === '') {
      return failedUploadMessage;
    }
    const fileId = r.headers.get('x-together-file-id') || '';
    if (!fileId || fileId === '') {
      return failedUploadMessage;
    }

    const fileStream = fs.createReadStream(fileName);
    const fileSize = fs.statSync(fileName).size;

    // upload the file to uploadUrl
    const uploadResponse = await fetch(uploadUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/octet-stream',
        'Content-Length': `${fileSize}`,
      },
      body: fileStream,
    });

    if (uploadResponse.status !== 200) {
      return {
        message: `failed to upload file (${uploadResponse.statusText}) status code ${uploadResponse.status}`,
      };
    }

    return {
      id: fileId,
      object: 'file',
      type: 'jsonl',
      purpose: 'fine-tune',
      filename: fileName,
      bytes: fileSize,
      line_count: 0,
      processed: true,
    };
  } catch (error) {
    if (error instanceof Error && 'status' in error && error.status) {
      return {
        message: `failed to upload file with status ${error.status}`,
      };
    }

    return {
      message: 'failed to upload file',
    };
  }
}
