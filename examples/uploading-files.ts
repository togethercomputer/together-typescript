#!/usr/bin/env -S npm run tsn -T

// Example of uploading a file

import Together from 'together-ai';

const together = new Together();

async function main() {
  //Upload a file
  const file = await together.files.upload('./examples/sample_finetuning.jsonl');
  console.log('Uploaded file');
  console.log(file);
}

main();
