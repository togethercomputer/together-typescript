#!/usr/bin/env -S npm run tsn -T

// Example of uploading a file
import { upload } from 'together-ai/lib/upload';

async function main() {
  // Upload a file
  const file = await upload('./examples/coqa.jsonl');
  console.log('Uploaded file');
  console.log(file);
}

main();
