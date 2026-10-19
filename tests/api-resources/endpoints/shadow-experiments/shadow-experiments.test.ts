// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Endpoints } from 'together-ai/resources/endpoints/endpoints';
import { BaseShadowExperiments } from 'together-ai/resources/endpoints/shadow-experiments/shadow-experiments';

import Together from 'together-ai';
import { createClient, type PartialTogether } from 'together-ai/tree-shakable';

const client = new Together({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseShadowExperiments],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Endpoints],
});

const runTests = (client: PartialTogether<{ endpoints: { shadowExperiments: BaseShadowExperiments } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.endpoints.shadowExperiments.create('endpointId', {
      projectId: 'projectId',
      name: 'name',
      source: { endpoint: { sampling: { uniform: { rate: 0 } } } },
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
    const response = await client.endpoints.shadowExperiments.create('endpointId', {
      projectId: 'projectId',
      name: 'name',
      source: { endpoint: { sampling: { uniform: { rate: 0 } } } },
      targets: [
        {
          name: 'name',
          targetDeploymentId: 'targetDeploymentId',
          description: 'description',
        },
      ],
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.endpoints.shadowExperiments.retrieve('id', {
      projectId: 'projectId',
      endpointId: 'endpointId',
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
    const response = await client.endpoints.shadowExperiments.retrieve('id', {
      projectId: 'projectId',
      endpointId: 'endpointId',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.endpoints.shadowExperiments.update('id', {
      projectId: 'projectId',
      endpointId: 'endpointId',
      updateMask: 'updateMask',
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
    const response = await client.endpoints.shadowExperiments.update('id', {
      projectId: 'projectId',
      endpointId: 'endpointId',
      updateMask: 'updateMask',
      description: 'description',
      etag: 'etag',
      source: { endpoint: { sampling: { uniform: { rate: 0 } } } },
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.endpoints.shadowExperiments.list('endpointId', { projectId: 'projectId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.endpoints.shadowExperiments.list('endpointId', {
      projectId: 'projectId',
      after: 'after',
      includeTargets: true,
      limit: 0,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.endpoints.shadowExperiments.delete('id', {
      projectId: 'projectId',
      endpointId: 'endpointId',
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
    const response = await client.endpoints.shadowExperiments.delete('id', {
      projectId: 'projectId',
      endpointId: 'endpointId',
      etag: 'etag',
    });
  });
};
describe('resource shadowExperiments', () => runTests(client));
describe('resource shadowExperiments (tree shakable, base)', () => runTests(partialClient));
describe('resource shadowExperiments (tree shakable, subresource)', () => runTests(parentPartialClient));
