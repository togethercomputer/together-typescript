#!/usr/bin/env -S npm run tsn -T

// Example of listing and retrieving files

import Together from 'together';

const together = new Together();

async function main() {
  console.log('Listing all files');

  //Print all files
  const files = await together.files.list();
  for (const file of files.data) {
    console.log(file);
  }

  //Retrieve a file
  if (files.data && files.data[0]) {
    console.log('Retrieving a file');

    const fileId = files.data[0].id;

    const file = await together.files.retrieve(fileId);

    console.log(file);
  }
}

main();
