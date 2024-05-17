#!/usr/bin/env -S npm run tsn -T

import  Together from 'together';

const together = new Together();

async function main() {
  //Uploaded separately
  const fileId = 'file-bf72b951-fa1a-41af-a152-fe385dca0201';

  //Create a model
  const fineTuneModel = await together.fineTune.create({
    model: 'mistralai/Mixtral-8x7B-Instruct-v0.1',
    training_file: fileId,
  });

  console.log(fineTuneModel);

  // const ftId = 'ft-0b1d5942-d8f1-42ab-b0e9-af1528403740';

  //List the model events
  const modelEvents = await together.fineTune.listEvents(fineTuneModel.id);
  for (const e of modelEvents.data) {
    console.log(e);
  }

  const down = await together.fineTune.download({
    ft_id: fineTuneModel.id,
  });
  console.log(JSON.stringify(down));
}

main();
