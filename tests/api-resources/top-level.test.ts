// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Together from 'together-ai';

const client = new Together({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('top level methods', () => {
  test('rerank: only required params', async () => {
    const responsePromise = client.rerank({
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

  test('rerank: required and optional params', async () => {
    const response = await client.rerank({
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
});
