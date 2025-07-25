// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Together, { toFile } from 'together-ai';

const client = new Together({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource transcriptions', () => {
  test('create: only required params', async () => {
    const responsePromise = client.audio.transcriptions.create({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.audio.transcriptions.create({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      language: 'en',
      model: 'openai/whisper-large-v3',
      prompt: 'prompt',
      response_format: 'json',
      temperature: 0,
      timestamp_granularities: ['word', 'segment'],
    });
  });
});
