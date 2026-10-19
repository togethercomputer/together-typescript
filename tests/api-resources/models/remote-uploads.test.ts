// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Models } from 'together-ai/resources/models/models';
import { BaseRemoteUploads } from 'together-ai/resources/models/remote-uploads';

import Together from 'together-ai';
import { createClient, type PartialTogether } from 'together-ai/tree-shakable';

const client = new Together({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseRemoteUploads],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Models],
});

const runTests = (client: PartialTogether<{ models: { remoteUploads: BaseRemoteUploads } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.models.remoteUploads.create({
      projectId: 'projectId',
      modelId: 'modelId',
      remoteUrl: 'remoteUrl',
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
    const response = await client.models.remoteUploads.create({
      projectId: 'projectId',
      modelId: 'modelId',
      remoteUrl: 'remoteUrl',
      token: 'token',
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.models.remoteUploads.retrieve('id', { projectId: 'projectId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.models.remoteUploads.retrieve('id', { projectId: 'projectId' });
  });

  test('list: only required params', async () => {
    const responsePromise = client.models.remoteUploads.list({ projectId: 'projectId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.models.remoteUploads.list({
      projectId: 'projectId',
      after: 'after',
      limit: 0,
    });
  });

  test('events: only required params', async () => {
    const responsePromise = client.models.remoteUploads.events('id', { projectId: 'projectId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('events: required and optional params', async () => {
    const response = await client.models.remoteUploads.events('id', {
      projectId: 'projectId',
      after: 'after',
      limit: 0,
    });
  });
};
describe('resource remoteUploads', () => runTests(client));
describe('resource remoteUploads (tree shakable, base)', () => runTests(partialClient));
describe('resource remoteUploads (tree shakable, subresource)', () => runTests(parentPartialClient));
