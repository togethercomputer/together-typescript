// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseConfigs } from 'together-ai/resources/models/configs';
import { Models } from 'together-ai/resources/models/models';

import Together from 'together-ai';
import { createClient, type PartialTogether } from 'together-ai/tree-shakable';

const client = new Together({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseConfigs],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Models],
});

const runTests = (client: PartialTogether<{ models: { configs: BaseConfigs } }>) => {
  test('retrieve: only required params', async () => {
    const responsePromise = client.models.configs.retrieve('id', { projectId: 'projectId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.models.configs.retrieve('id', { projectId: 'projectId' });
  });

  test('list: only required params', async () => {
    const responsePromise = client.models.configs.list({ projectId: 'projectId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.models.configs.list({
      projectId: 'projectId',
      after: 'after',
      limit: 0,
      referenceModel: 'referenceModel',
      referenceModelId: 'referenceModelId',
    });
  });
};
describe('resource configs', () => runTests(client));
describe('resource configs (tree shakable, base)', () => runTests(partialClient));
describe('resource configs (tree shakable, subresource)', () => runTests(parentPartialClient));
