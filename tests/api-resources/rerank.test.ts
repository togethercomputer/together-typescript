// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseRerank } from 'together-ai/resources/rerank';

import Together from 'together-ai';
import { createClient, type PartialTogether } from 'together-ai/tree-shakable';

const client = new Together({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseRerank],
});

const runTests = (client: PartialTogether<{ rerank: BaseRerank }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.rerank.create({
      documents: [
        { title: 'bar', text: 'bar' },
        { title: 'bar', text: 'bar' },
        { title: 'bar', text: 'bar' },
        { title: 'bar', text: 'bar' },
      ],
      model: 'Salesforce/Llama-Rank-V1',
      query: 'What animals can I find near Peru?',
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
    const response = await client.rerank.create({
      documents: [
        { title: 'bar', text: 'bar' },
        { title: 'bar', text: 'bar' },
        { title: 'bar', text: 'bar' },
        { title: 'bar', text: 'bar' },
      ],
      model: 'Salesforce/Llama-Rank-V1',
      query: 'What animals can I find near Peru?',
      rank_fields: ['title', 'text'],
      return_documents: true,
      top_n: 2,
    });
  });
};
describe('resource rerank', () => runTests(client));
describe('resource rerank (tree shakable, base)', () => runTests(partialClient));
