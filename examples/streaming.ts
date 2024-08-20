import TogetherAI from 'together-ai';

const togetherAI = new TogetherAI();

async function main() {
  const stream = await togetherAI.chat.completions.create({
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
