// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Together from 'together-ai';

const client = new Together({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource deployments', () => {
  test('create: only required params', async () => {
    const responsePromise = client.beta.endpoints.deployments.create('endpointId', {
      projectId: 'projectId',
      autoscaling: {},
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
    const response = await client.beta.endpoints.deployments.create('endpointId', {
      projectId: 'projectId',
      autoscaling: {
        maxReplicas: 0,
        minReplicas: 0,
        scaleDownWindow: '-160513s',
        scaleToZeroWindow: '-160513s',
        scaleUpWindow: '-160513s',
        scalingMetrics: [
          {
            name: 'name',
            target: 0,
            type: 'METRIC_TARGET_TYPE_VALUE',
            percentile: 'percentile',
          },
        ],
      },
      name: 'name',
      validateOnly: true,
      config: 'config',
      configId: 'configId',
      enableLora: true,
      model: 'model',
      modelId: 'modelId',
      modelRevisionId: 'modelRevisionId',
      placement: { inline: { constraint: 'ENFORCEMENT_REQUIRED', regions: ['string'] } },
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.beta.endpoints.deployments.retrieve('id', {
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
    const response = await client.beta.endpoints.deployments.retrieve('id', {
      projectId: 'projectId',
      endpointId: 'endpointId',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.beta.endpoints.deployments.update('id', {
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
    const response = await client.beta.endpoints.deployments.update('id', {
      projectId: 'projectId',
      endpointId: 'endpointId',
      updateMask: 'updateMask',
      autoscaling: {
        maxReplicas: 0,
        minReplicas: 0,
        scaleDownWindow: '-160513s',
        scaleToZeroWindow: '-160513s',
        scaleUpWindow: '-160513s',
        scalingMetrics: [
          {
            name: 'name',
            target: 0,
            type: 'METRIC_TARGET_TYPE_VALUE',
            percentile: 'percentile',
          },
        ],
      },
      etag: 'etag',
      name: 'name',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.beta.endpoints.deployments.list('endpointId', { projectId: 'projectId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.beta.endpoints.deployments.list('endpointId', {
      projectId: 'projectId',
      after: 'after',
      filter: 'filter',
      limit: 0,
      orderBy: 'orderBy',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.beta.endpoints.deployments.delete('id', {
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
    const response = await client.beta.endpoints.deployments.delete('id', {
      projectId: 'projectId',
      endpointId: 'endpointId',
      etag: 'etag',
    });
  });
});
