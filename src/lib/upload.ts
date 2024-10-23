// Upload file to server using /files API

import * as core from '../core';
import { isAxiosError } from 'axios';
import fs from 'fs';
import fetch from 'node-fetch';
import * as path from 'path';
import progress from 'progress-stream';

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

export async function upload(fileName: string, check: boolean): Promise<FileResponse | ErrorResponse> {
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
  // steps to do
  // 1. check if file exists
  // 2. get signed upload url
  // 3. upload file
  const baseUrl = core.readEnv('TOGETHER_API_BASE_URL') || 'https://api.together.ai/v1';
  const apiKey = core.readEnv('TOGETHER_API_KEY');

  if (!apiKey) {
    return {
      message: 'API key is required',
    };
  }

  const getSigned = baseUrl + '/files';

  try {
    const params = new URLSearchParams({
      file_name: fileName,
      purpose: 'fine-tune',
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

    const progressStream = progress({
      length: fileSize,
      time: 100, // Emit progress events every 100ms
    });

    // Listen to progress events and log them
    progressStream.on('progress', (progress) => {
      displayProgress(progress.percentage);
    });

    let uploadedBytes = 0;
    // upload the file to uploadUrl
    const uploadResponse = await fetch(uploadUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/octet-stream',
      },
      body: fileStream.pipe(progressStream),
    });

    displayProgress(100);
    process.stdout.write('\n');

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
    if (isAxiosError(error)) {
      // handle axios error here
      if (error.status) {
        return {
          message: `failed to upload file with status ${error.status}`,
        };
      }
    }

    return {
      message: 'failed to upload file',
    };
  }
}

async function displayProgress(progress: number) {
  const barWidth = 40; // Number of characters for the progress bar
  const completedBars = Math.round((progress / 100) * barWidth);
  let remainingBars = barWidth - completedBars;
  if (remainingBars < 0) {
    remainingBars = 0;
  }
  const progressBar = `[${'='.repeat(completedBars)}${' '.repeat(remainingBars)}] ${progress.toFixed(2)}%`;

  // Clear the line and write progress
  //process.stdout.clearLine(0); //clean entire line
  process.stdout.cursorTo(0);
  process.stdout.write(progressBar, () => {});
  await sleep(2000);
}

async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
