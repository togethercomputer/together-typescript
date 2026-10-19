// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Audio } from 'together-ai/resources/audio/audio';
import { BaseTranscriptions } from 'together-ai/resources/audio/transcriptions';

import Together, { toFile } from 'together-ai';
import { createClient, type PartialTogether } from 'together-ai/tree-shakable';

const client = new Together({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseTranscriptions],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Audio],
});

const runTests = (client: PartialTogether<{ audio: { transcriptions: BaseTranscriptions } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.audio.transcriptions.create({
      file: await toFile(Buffer.from('Example data'), 'README.md'),
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO Blaine: Fix this test
  test.skip('create: required and optional params', async () => {
    const response = await client.audio.transcriptions.create({
      file: await toFile(Buffer.from('Example data'), 'README.md'),
      diarize: true,
      language: 'en',
      max_speakers: 0,
      min_speakers: 0,
      model: 'openai/whisper-large-v3',
      prompt: 'prompt',
      response_format: 'json',
      temperature: 0,
      timestamp_granularities: ['word', 'segment'],
    });
  });
};
describe('resource transcriptions', () => runTests(client));
describe('resource transcriptions (tree shakable, base)', () => runTests(partialClient));
describe('resource transcriptions (tree shakable, subresource)', () => runTests(parentPartialClient));
