// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Endpoints } from 'together-ai/resources/endpoints/endpoints';
import { BasePlacementProfiles } from 'together-ai/resources/endpoints/placement-profiles';

import Together from 'together-ai';
import { createClient, type PartialTogether } from 'together-ai/tree-shakable';

const client = new Together({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BasePlacementProfiles],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Endpoints],
});

const runTests = (client: PartialTogether<{ endpoints: { placementProfiles: BasePlacementProfiles } }>) => {
  test('retrieve: only required params', async () => {
    const responsePromise = client.endpoints.placementProfiles.retrieve('id', { projectId: 'projectId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.endpoints.placementProfiles.retrieve('id', { projectId: 'projectId' });
  });

  test('list: only required params', async () => {
    const responsePromise = client.endpoints.placementProfiles.list({ projectId: 'projectId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.endpoints.placementProfiles.list({
      projectId: 'projectId',
      after: 'after',
      limit: 0,
    });
  });
};
describe('resource placementProfiles', () => runTests(client));
describe('resource placementProfiles (tree shakable, base)', () => runTests(partialClient));
describe('resource placementProfiles (tree shakable, subresource)', () => runTests(parentPartialClient));
