// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Together from 'together-ai';

const client = new Together({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource abExperiments', () => {
  test('create: only required params', async () => {
    const responsePromise = client.beta.endpoints.abExperiments.create('endpointId', {
      projectId: 'projectId',
      members: [
        {
          deploymentId: 'deploymentId',
          percent: 0,
          role: 'AB_EXPERIMENT_MEMBER_ROLE_CONTROL',
        },
      ],
      name: 'name',
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
    const response = await client.beta.endpoints.abExperiments.create('endpointId', {
      projectId: 'projectId',
      members: [
        {
          deploymentId: 'deploymentId',
          percent: 0,
          role: 'AB_EXPERIMENT_MEMBER_ROLE_CONTROL',
        },
      ],
      name: 'name',
      description: 'description',
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.beta.endpoints.abExperiments.retrieve('id', {
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
    const response = await client.beta.endpoints.abExperiments.retrieve('id', {
      projectId: 'projectId',
      endpointId: 'endpointId',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.beta.endpoints.abExperiments.update('id', {
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

  test('update: required and optional params', async () => {
    const response = await client.beta.endpoints.abExperiments.update('id', {
      projectId: 'projectId',
      endpointId: 'endpointId',
      updateMask: 'updateMask',
      description: 'description',
      etag: 'etag',
      members: [
        {
          deploymentId: 'deploymentId',
          percent: 0,
          role: 'AB_EXPERIMENT_MEMBER_ROLE_CONTROL',
        },
      ],
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.beta.endpoints.abExperiments.list('endpointId', {
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
    const response = await client.beta.endpoints.abExperiments.list('endpointId', {
      projectId: 'projectId',
      after: 'after',
      limit: 0,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.beta.endpoints.abExperiments.delete('id', {
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
    const response = await client.beta.endpoints.abExperiments.delete('id', {
      projectId: 'projectId',
      endpointId: 'endpointId',
      etag: 'etag',
    });
  });
});
