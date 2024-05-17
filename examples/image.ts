#!/usr/bin/env -S npm run tsn -T

//An example to generate an image and save to a file

import  Together from 'together';
import fs from 'fs';

const together = new Together();

async function main() {
  //Request the image generation
  const image = await together.images.create({
    model: 'runwayml/stable-diffusion-v1-5',
    prompt: 'space robots',
    n: 1,
  });

  //Write the image to a file
  if (image.data && image.data[0] && image.data[0].b64_json) {
    let image_data = image.data[0].b64_json;

    const buffer = Buffer.from(image_data, 'base64');
    fs.writeFileSync('image.jpg', buffer, { encoding: 'base64' });
  }
}

main();
