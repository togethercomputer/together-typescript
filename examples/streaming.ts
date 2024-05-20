#!/usr/bin/env -S npm run tsn -T

import Together from 'together';

const together = new Together();

async function main() {
  const stream = await together.chat.completions.create({
    messages: [{ role: 'user', content: 'Say this is a test' }],
    model: 'mistralai/Mixtral-8x7B-Instruct-v0.1',
    stream: true,
  });
  for await (const chunk of stream) {
    const choice = chunk.choices?.[0];
    if (choice && choice.delta.content) {
      process.stdout.write(choice.delta.content);
    }
  }
  console.log();
}

main();
