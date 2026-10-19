// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Clusters } from 'together-ai/resources/clusters/clusters';
import { BaseStorage } from 'together-ai/resources/clusters/storage';

import Together from 'together-ai';
import { createClient, type PartialTogether } from 'together-ai/tree-shakable';

const client = new Together({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseStorage],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Clusters],
});

const runTests = (client: PartialTogether<{ clusters: { storage: BaseStorage } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.clusters.storage.create({
      region: 'region',
      size_tib: 0,
      volume_name: 'volume_name',
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
    const response = await client.clusters.storage.create({
      region: 'region',
      size_tib: 0,
      volume_name: 'volume_name',
      instance_cluster_id: 'instance_cluster_id',
      is_lifecycle_independent: true,
      project_id: 'project_id',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.clusters.storage.retrieve('volume_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: only required params', async () => {
    const responsePromise = client.clusters.storage.update({ volume_id: 'volume_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.clusters.storage.update({ volume_id: 'volume_id', size_tib: 0 });
  });

  test('list', async () => {
    const responsePromise = client.clusters.storage.list();
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
      client.clusters.storage.list({ projectId: 'projectId' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Together.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.clusters.storage.delete('volume_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource storage', () => runTests(client));
describe('resource storage (tree shakable, base)', () => runTests(partialClient));
describe('resource storage (tree shakable, subresource)', () => runTests(parentPartialClient));
