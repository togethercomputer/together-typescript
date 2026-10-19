// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseAdapters } from 'together-ai/resources/endpoints/adapters';
import { Endpoints } from 'together-ai/resources/endpoints/endpoints';

import Together from 'together-ai';
import { createClient, type PartialTogether } from 'together-ai/tree-shakable';

const client = new Together({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseAdapters],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Endpoints],
});

const runTests = (client: PartialTogether<{ endpoints: { adapters: BaseAdapters } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.endpoints.adapters.create({
      projectId: 'projectId',
      endpointId: 'endpointId',
      deploymentId: 'deploymentId',
      adapterModelId: 'adapterModelId',
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
    const response = await client.endpoints.adapters.create({
      projectId: 'projectId',
      endpointId: 'endpointId',
      deploymentId: 'deploymentId',
      adapterModelId: 'adapterModelId',
      adapterRevisionId: 'adapterRevisionId',
      force: true,
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.endpoints.adapters.retrieve('id', {
      projectId: 'projectId',
      endpointId: 'endpointId',
      deploymentId: 'deploymentId',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.endpoints.adapters.retrieve('id', {
      projectId: 'projectId',
      endpointId: 'endpointId',
      deploymentId: 'deploymentId',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.endpoints.adapters.update('id', {
      projectId: 'projectId',
      endpointId: 'endpointId',
      deploymentId: 'deploymentId',
      adapterRevisionId: 'adapterRevisionId',
      etag: 'etag',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.endpoints.adapters.update('id', {
      projectId: 'projectId',
      endpointId: 'endpointId',
      deploymentId: 'deploymentId',
      adapterRevisionId: 'adapterRevisionId',
      etag: 'etag',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.endpoints.adapters.list('endpointId', 'deploymentId', {
      projectId: 'projectId',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.endpoints.adapters.list('endpointId', 'deploymentId', {
      projectId: 'projectId',
      after: 'after',
      limit: 0,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.endpoints.adapters.delete('id', {
      projectId: 'projectId',
      endpointId: 'endpointId',
      deploymentId: 'deploymentId',
      etag: 'etag',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.endpoints.adapters.delete('id', {
      projectId: 'projectId',
      endpointId: 'endpointId',
      deploymentId: 'deploymentId',
      etag: 'etag',
    });
  });
};
describe('resource adapters', () => runTests(client));
describe('resource adapters (tree shakable, base)', () => runTests(partialClient));
describe('resource adapters (tree shakable, subresource)', () => runTests(parentPartialClient));
