// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Together from 'together-ai';

const client = new Together({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource audio', () => {
  test('create: required and optional params', async () => {
    const response = await client.audio.create({
      input: 'input',
      model: 'cartesia/sonic',
      voice: 'laidback woman',
      language: 'en',
      response_encoding: 'pcm_f32le',
      response_format: 'mp3',
      sample_rate: 0,
      stream: true,
    });
  });
});
