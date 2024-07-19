#!/usr/bin/env -S npm run tsn -T

import Together from 'together-ai';

const together = new Together();
async function main() {
  const runner = together.chat.completions
    .stream({
      model: 'mistralai/Mixtral-8x7B-Instruct-v0.1',
      messages: [{ role: 'user', content: 'Say this is a test' }],
    })
    .on('message', (msg) => console.log(msg))
    .on('content', (diff) => process.stdout.write(diff));

  for await (const chunk of runner) {
    // Note: comment out the next line to print chunks as they are streamed from the API
    // console.log('chunk', chunk);
  }

  const result = await runner.finalMessage();
  console.log(result);
}

main();
