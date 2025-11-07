#!/usr/bin/env bun

// eslint-disable-next-line unicorn/prefer-top-level-await
(async () => {
  const oclif = await import('@oclif/core')
  await oclif.execute({dir: __dirname})
})()
