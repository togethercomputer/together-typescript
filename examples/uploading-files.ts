#!/usr/bin/env -S npm run tsn -T

// Example of uploading a file
import Together from 'together-ai';

const together = new Together();

async function main() {
  // Upload a file. Validation failures (unsupported extension, malformed
  // dataset, ...) reject with an `Error`.
  const file = await together.files.upload('./examples/coqa-small.jsonl', 'fine-tune');
  console.log('Uploaded file');
  console.log(file);

  // Check if the file has any contents (https://docs.together.ai/reference/get_files-id-content)
  const res = await together.files.content(file.id);
  console.log(await res.text());
}

main();
