#!/usr/bin/env -S npm run tsn -T

import Together from 'together-ai';

const together = new Together();

async function main() {
  //These files need to be uploaded separately. See the files example.
  const fileId = 'file-bf72b951-fa1a-41af-a152-fe385dca0201';

  // Create a model
  const fineTuneModel = await together.fineTuning.create({
    model: 'meta-llama/Meta-Llama-3-8B',
    training_file: fileId,
  });

  console.log(fineTuneModel);

  const fineTuneId = fineTuneModel.id;

  //Wait for completion
  while (true) {
    const fineTuneStatus = await together.fineTuning.retrieve(fineTuneId);
    if (fineTuneStatus.status === 'completed') {
      break;
    } else {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }

  //List the model events
  const modelEvents = await together.fineTuning.listEvents(fineTuneId);
  for (const e of modelEvents.data) {
    console.log(e);
  }

  //Download the model
  const down = await together.fineTuning.content({
    ft_id: fineTuneId,
  });
  console.log(JSON.stringify(down));
}

main();
