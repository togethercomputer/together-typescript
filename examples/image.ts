#!/usr/bin/env -S npm run tsn -T

//An example to generate an image and save to a file

import Together from 'together-ai';

const together = new Together();

async function main() {
  // Request the image generation
  const response = await together.images.create({
    prompt: 'a flying cat',
    model: 'black-forest-labs/FLUX.1-schnell',
    steps: 4,
  });

  console.log(response);

  // console.log(response.data[0]?.url);
}

main();
