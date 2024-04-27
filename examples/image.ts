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

  // @ts-ignore: TODO: Fix model
  let image_data = image.data[0].b64_json;
//{"id":"87b0286a4c997c82-EWR","model":"runwayml/stable-diffusion-v1-5","object":"list","data":[{"index":0,"b64_json":"/9j/4AA...

  //Write the image to a file
  const buffer = Buffer.from(image_data, 'base64');
  fs.writeFileSync('image.jpg', buffer, { encoding: 'base64' });
}

main();
