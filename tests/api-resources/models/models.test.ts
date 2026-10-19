// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseModels } from 'together-ai/resources/models/models';

import Together from 'together-ai';
import { createClient, type PartialTogether } from 'together-ai/tree-shakable';

const client = new Together({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseModels],
});

const runTests = (client: PartialTogether<{ models: BaseModels }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.models.create({
      projectId: 'projectId',
      baseModelId: 'baseModelId',
      name: 'name',
      type: 'type',
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
    const response = await client.models.create({
      projectId: 'projectId',
      baseModelId: 'baseModelId',
      name: 'name',
      type: 'type',
      description: 'description',
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.models.retrieve('id', { projectId: 'projectId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.models.retrieve('id', { projectId: 'projectId' });
  });

  test('update: only required params', async () => {
    const responsePromise = client.models.update('id', { projectId: 'projectId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.models.update('id', {
      projectId: 'projectId',
      updateMask: 'updateMask',
      description: 'description',
      name: 'name',
      visibility: 'VISIBILITY_PRIVATE',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.models.list({ projectId: 'projectId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.models.list({
      projectId: 'projectId',
      after: 'after',
      limit: 0,
      organizationId: 'organizationId',
      visibility: 'VISIBILITY_PRIVATE',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.models.delete('id', { projectId: 'projectId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.models.delete('id', { projectId: 'projectId' });
  });

  test('listFiles: only required params', async () => {
    const responsePromise = client.models.listFiles('id', { projectId: 'projectId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listFiles: required and optional params', async () => {
    const response = await client.models.listFiles('id', {
      projectId: 'projectId',
      revisionId: 'revisionId',
    });
  });

  test('listOrgScoped', async () => {
    const responsePromise = client.models.listOrgScoped('organizationId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listOrgScoped: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.models.listOrgScoped(
        'organizationId',
        { after: 'after', limit: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Together.NotFoundError);
  });

  test('listRevisions: only required params', async () => {
    const responsePromise = client.models.listRevisions('id', { projectId: 'projectId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listRevisions: required and optional params', async () => {
    const response = await client.models.listRevisions('id', { projectId: 'projectId' });
  });

  test('listSupported', async () => {
    const responsePromise = client.models.listSupported();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listSupported: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.models.listSupported(
        {
          adapterMode: 'ADAPTER_MODE_FIXED',
          after: 'after',
          limit: 0,
          modality: 'MODALITY_TEXT',
          product: 'PRODUCT_SERVERLESS',
          search: 'search',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Together.NotFoundError);
  });

  test('retrieveSupported', async () => {
    const responsePromise = client.models.retrieveSupported('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource models', () => runTests(client));
describe('resource models (tree shakable, base)', () => runTests(partialClient));
