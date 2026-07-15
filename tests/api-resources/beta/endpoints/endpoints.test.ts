// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Together from 'together-ai';

const client = new Together({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource endpoints', () => {
  test('create: only required params', async () => {
    const responsePromise = client.beta.endpoints.create({ projectId: 'projectId', name: 'name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.beta.endpoints.create({
      projectId: 'projectId',
      name: 'name',
      visibility: 'VISIBILITY_PRIVATE',
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.beta.endpoints.retrieve('id', { projectId: 'projectId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.beta.endpoints.retrieve('id', { projectId: 'projectId' });
  });

  test('update: only required params', async () => {
    const responsePromise = client.beta.endpoints.update('id', { projectId: 'projectId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.beta.endpoints.update('id', {
      projectId: 'projectId',
      updateMask: 'updateMask',
      etag: 'etag',
      name: 'name',
      trafficSplit: [{ deploymentId: 'deploymentId', weight: 0 }],
      visibility: 'VISIBILITY_PRIVATE',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.beta.endpoints.list({ projectId: 'projectId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.beta.endpoints.list({
      projectId: 'projectId',
      after: 'after',
      filter: 'filter',
      limit: 0,
      orderBy: 'orderBy',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.beta.endpoints.delete('id', { projectId: 'projectId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.beta.endpoints.delete('id', { projectId: 'projectId', etag: 'etag' });
  });

  test('analytics: only required params', async () => {
    const responsePromise = client.beta.endpoints.analytics('id', { projectId: 'projectId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('analytics: required and optional params', async () => {
    const response = await client.beta.endpoints.analytics('id', {
      projectId: 'projectId',
      deploymentId: 'deploymentId',
      endTime: '2019-12-27T18:11:19.117Z',
      granularity: 'granularity',
      includeTimeSeries: true,
      startTime: '2019-12-27T18:11:19.117Z',
    });
  });

  test('listEvents: only required params', async () => {
    const responsePromise = client.beta.endpoints.listEvents('id', { projectId: 'projectId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listEvents: required and optional params', async () => {
    const response = await client.beta.endpoints.listEvents('id', {
      projectId: 'projectId',
      after: 'after',
      deploymentIds: ['string'],
      limit: 0,
      minLevel: 'LEVEL_DEBUG',
      since: '2019-12-27T18:11:19.117Z',
      sourceKinds: ['SOURCE_KIND_ENDPOINT'],
      subjectId: 'subjectId',
      types: ['string'],
      until: '2019-12-27T18:11:19.117Z',
    });
  });

  test('listOrgScoped', async () => {
    const responsePromise = client.beta.endpoints.listOrgScoped('organizationId');
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
      client.beta.endpoints.listOrgScoped(
        'organizationId',
        {
          after: 'after',
          filter: 'filter',
          limit: 0,
          orderBy: 'orderBy',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Together.NotFoundError);
  });
});
