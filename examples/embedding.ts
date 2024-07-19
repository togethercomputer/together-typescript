#!/usr/bin/env -S npm run tsn -T

import Together from 'together-ai';

const together = new Together();

async function main() {
  const embeddings = await together.embeddings.create({
    input: 'A cat',
    model: 'togethercomputer/m2-bert-80M-8k-retrieval',
  });

  if (embeddings.data && embeddings.data[0]) {
    console.log(embeddings.data[0].embedding);
  }
}

main();
