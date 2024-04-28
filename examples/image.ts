#!/usr/bin/env -S npm run tsn -T

import TogetherAI from 'together-ai';
import fs from 'fs';

const togetherAI = new TogetherAI();

async function main() {

  //Request the image generation
  const image = await togetherAI.images.create({
    model: 'runwayml/stable-diffusion-v1-5',
    prompt: 'space robots',
    n: 1,
  });

  if (image.data && image.data[0] && image.data[0].b64_json) {
    let image_data = image.data[0].b64_json;

    //Write the image to a file
    const buffer = Buffer.from(image_data, 'base64');
    fs.writeFileSync('image.jpg', buffer, { encoding: 'base64' });
  }
}

main();
