// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Audio } from 'together-ai/resources/audio/audio';
import { BaseSpeech } from 'together-ai/resources/audio/speech';

import Together from 'together-ai';
import { createClient, type PartialTogether } from 'together-ai/tree-shakable';

const client = new Together({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseSpeech],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Audio],
});

const runTests = (client: PartialTogether<{ audio: { speech: BaseSpeech } }>) => {
  test('create: required and optional params', async () => {
    const response = await client.audio.speech.create({
      input: 'input',
      model: 'canopylabs/orpheus-3b-0.1-ft',
      voice: 'voice',
      bit_rate: 32000,
      extra_params: { pronunciation_dict: ['omg/oh my god'] },
      language: 'en',
      response_encoding: 'pcm_f32le',
      response_format: 'mp3',
      sample_rate: 0,
      stream: false,
    });
  });
};
describe('resource speech', () => runTests(client));
describe('resource speech (tree shakable, base)', () => runTests(partialClient));
describe('resource speech (tree shakable, subresource)', () => runTests(parentPartialClient));
