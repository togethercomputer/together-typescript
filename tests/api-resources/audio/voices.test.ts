// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Audio } from 'together-ai/resources/audio/audio';
import { BaseVoices } from 'together-ai/resources/audio/voices';

import Together from 'together-ai';
import { createClient, type PartialTogether } from 'together-ai/tree-shakable';

const client = new Together({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseVoices],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Audio],
});

const runTests = (client: PartialTogether<{ audio: { voices: BaseVoices } }>) => {
  test('list', async () => {
    const responsePromise = client.audio.voices.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource voices', () => runTests(client));
describe('resource voices (tree shakable, base)', () => runTests(partialClient));
describe('resource voices (tree shakable, subresource)', () => runTests(parentPartialClient));
