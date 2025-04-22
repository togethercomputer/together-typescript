#!/usr/bin/env -S npm run tsn -T

// Example of uploading a file
import { upload, ErrorResponse, FileResponse } from 'together-ai/lib/upload';
import fetch from 'node-fetch';
import * as core from 'together-ai/core';

async function main() {
  // Upload a file
  const file: ErrorResponse | FileResponse = await upload('./examples/coqa.jsonl');
  console.log('Uploaded file');
  console.log(file);

  if ('message' in file) {
    console.error(file.message);
    return;
  }

  // Check if the file has any contents (https://docs.together.ai/reference/get_files-id-content)
  // @ts-ignore
  const baseUrl = core.readEnv('TOGETHER_API_BASE_URL') || 'https://api.together.ai/v1';
  const url = `${baseUrl}/files/${file.id}/content`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      authorization: `Bearer ${process.env['TOGETHER_API_KEY']}`,
    },
  };

  const res = await fetch(url, options);
  console.log(await res.text());
}

main();
