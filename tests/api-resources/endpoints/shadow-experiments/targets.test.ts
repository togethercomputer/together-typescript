// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { ShadowExperiments } from 'together-ai/resources/endpoints/shadow-experiments/shadow-experiments';
import { BaseTargets } from 'together-ai/resources/endpoints/shadow-experiments/targets';

import Together from 'together-ai';
import { createClient, type PartialTogether } from 'together-ai/tree-shakable';

const client = new Together({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseTargets],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [ShadowExperiments],
});

const runTests = (
  client: PartialTogether<{ endpoints: { shadowExperiments: { targets: BaseTargets } } }>,
) => {
  test('create: only required params', async () => {
    const responsePromise = client.endpoints.shadowExperiments.targets.create({
      projectId: 'projectId',
      endpointId: 'endpointId',
      experimentId: 'experimentId',
      name: 'name',
      targetDeploymentId: 'targetDeploymentId',
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
    const response = await client.endpoints.shadowExperiments.targets.create({
      projectId: 'projectId',
      endpointId: 'endpointId',
      experimentId: 'experimentId',
      name: 'name',
      targetDeploymentId: 'targetDeploymentId',
      description: 'description',
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.endpoints.shadowExperiments.targets.retrieve('id', {
      projectId: 'projectId',
      endpointId: 'endpointId',
      experimentId: 'experimentId',
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
    const response = await client.endpoints.shadowExperiments.targets.retrieve('id', {
      projectId: 'projectId',
      endpointId: 'endpointId',
      experimentId: 'experimentId',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.endpoints.shadowExperiments.targets.update('id', {
      projectId: 'projectId',
      endpointId: 'endpointId',
      experimentId: 'experimentId',
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
    const response = await client.endpoints.shadowExperiments.targets.update('id', {
      projectId: 'projectId',
      endpointId: 'endpointId',
      experimentId: 'experimentId',
      updateMask: 'updateMask',
      description: 'description',
      etag: 'etag',
      name: 'name',
      targetDeploymentId: 'targetDeploymentId',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.endpoints.shadowExperiments.targets.list('endpointId', 'experimentId', {
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
    const response = await client.endpoints.shadowExperiments.targets.list('endpointId', 'experimentId', {
      projectId: 'projectId',
      after: 'after',
      limit: 0,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.endpoints.shadowExperiments.targets.delete('id', {
      projectId: 'projectId',
      endpointId: 'endpointId',
      experimentId: 'experimentId',
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
    const response = await client.endpoints.shadowExperiments.targets.delete('id', {
      projectId: 'projectId',
      endpointId: 'endpointId',
      experimentId: 'experimentId',
      etag: 'etag',
    });
  });
};
describe('resource targets', () => runTests(client));
describe('resource targets (tree shakable, base)', () => runTests(partialClient));
describe('resource targets (tree shakable, subresource)', () => runTests(parentPartialClient));
