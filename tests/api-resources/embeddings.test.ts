// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseEmbeddings } from 'together-ai/resources/embeddings';

import Together from 'together-ai';
import { createClient, type PartialTogether } from 'together-ai/tree-shakable';

const client = new Together({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseEmbeddings],
});

const runTests = (client: PartialTogether<{ embeddings: BaseEmbeddings }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.embeddings.create({
      input: 'Our solar system orbits the Milky Way galaxy at about 515,000 mph',
      model: 'togethercomputer/m2-bert-80M-8k-retrieval',
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
    const response = await client.embeddings.create({
      input: 'Our solar system orbits the Milky Way galaxy at about 515,000 mph',
      model: 'togethercomputer/m2-bert-80M-8k-retrieval',
    });
  });
};
describe('resource embeddings', () => runTests(client));
describe('resource embeddings (tree shakable, base)', () => runTests(partialClient));
