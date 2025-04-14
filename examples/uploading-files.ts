#!/usr/bin/env -S npm run tsn -T

// Example of uploading a file
import { upload } from 'together-ai/lib/upload';
import fetch from 'node-fetch';

async function main() {
  // Upload a file
  const file = await upload('./examples/coqa.jsonl');
  console.log('Uploaded file');
  console.log(file);

  // Check if the file has any contents (https://docs.together.ai/reference/get_files-id-content)
  // @ts-ignore
  const url = `https://api.together.xyz/v1/files/${file.id}/content`;
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
