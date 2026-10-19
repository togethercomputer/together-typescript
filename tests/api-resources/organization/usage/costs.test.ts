// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseCosts } from 'together-ai/resources/organization/usage/costs';
import { Usage } from 'together-ai/resources/organization/usage/usage';

import Together from 'together-ai';
import { createClient, type PartialTogether } from 'together-ai/tree-shakable';

const client = new Together({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseCosts],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Usage],
});

const runTests = (client: PartialTogether<{ organization: { usage: { costs: BaseCosts } } }>) => {
  test('list', async () => {
    const responsePromise = client.organization.usage.costs.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.organization.usage.costs.list(
        {
          after: 'after',
          granularity: 'day',
          limit: 1,
          month: '7321-06',
          organization_id: 'x',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Together.NotFoundError);
  });
};
describe('resource costs', () => runTests(client));
describe('resource costs (tree shakable, base)', () => runTests(partialClient));
describe('resource costs (tree shakable, subresource)', () => runTests(parentPartialClient));
