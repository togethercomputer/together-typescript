#!/usr/bin/env -S npm run tsn -T

//An example to request a list of models and print them.

import Together from 'together-ai';

const together = new Together();

async function main() {
  //Request the list of all models and print them
  const models = await together.models.list();
  for (const model of models) {
    console.log(model);
  }
}

main();
