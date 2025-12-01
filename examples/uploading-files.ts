#!/usr/bin/env -S npm run tsn -T

// Example of uploading a file
import { createReadStream } from 'fs';
import Together, { toFile } from 'together-ai';

const together = new Together();

async function main() {
  const file = await toFile(createReadStream('./examples/coqa-small.jsonl'), undefined, {
    type: 'application/json',
  });
  // Upload a file
  const upload = await together.files.upload(file, 'fine-tune');
  console.log('Uploaded file');
  console.log(upload);

  if ('message' in upload) {
    console.error(upload.message);
    return;
  }

  // Check if the file has any contents (https://docs.together.ai/reference/get_files-id-content)
  const res = await together.files.content(upload.id);
  console.log(await res.text());
}

main();
