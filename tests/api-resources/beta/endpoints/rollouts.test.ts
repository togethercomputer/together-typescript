// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Together from 'together-ai';

const client = new Together({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource rollouts', () => {
  test('create: only required params', async () => {
    const responsePromise = client.beta.endpoints.rollouts.create('endpointId', {
      projectId: 'projectId',
      sourceDeploymentId: 'dep_source123',
      targetDeploymentId: 'dep_target456',
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
    const response = await client.beta.endpoints.rollouts.create('endpointId', {
      projectId: 'projectId',
      sourceDeploymentId: 'dep_source123',
      targetDeploymentId: 'dep_target456',
      blueGreen: {},
      canary: {
        stepInterval: '300s',
        steps: [
          { traffic: 25, replicas: 0 },
          { traffic: 50, replicas: 0 },
          { traffic: 100, replicas: 0 },
        ],
      },
      finalSourceReplicas: 0,
      finalTargetReplicas: 0,
      metrics: [
        {
          name: 'serving_latency',
          stat: 'METRIC_STAT_TYPE_PERCENTILE',
          percentile: 95,
          regressionCheck: { direction: 'REGRESSION_DIRECTION_HIGHER_IS_WORSE', maxRegressionPercent: 0 },
          thresholdCheck: { operator: 'THRESHOLD_OPERATOR_LT', value: 30000 },
          window: '300s',
        },
      ],
      rolling: {},
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.beta.endpoints.rollouts.retrieve('id', {
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
    const response = await client.beta.endpoints.rollouts.retrieve('id', {
      projectId: 'projectId',
      endpointId: 'endpointId',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.beta.endpoints.rollouts.list('endpointId', { projectId: 'projectId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.beta.endpoints.rollouts.list('endpointId', {
      projectId: 'projectId',
      after: 'after',
      filter: 'ROLLOUT_FILTER_ACTIVE',
      limit: 0,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.beta.endpoints.rollouts.delete('id', {
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
    const response = await client.beta.endpoints.rollouts.delete('id', {
      projectId: 'projectId',
      endpointId: 'endpointId',
      etag: 'etag',
    });
  });

  test('cancel: only required params', async () => {
    const responsePromise = client.beta.endpoints.rollouts.cancel('id', {
      projectId: 'projectId',
      endpointId: 'endpointId',
      reason: 'reason',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('cancel: required and optional params', async () => {
    const response = await client.beta.endpoints.rollouts.cancel('id', {
      projectId: 'projectId',
      endpointId: 'endpointId',
      reason: 'reason',
      disposition: 'CANCEL_DISPOSITION_FREEZE',
      etag: 'etag',
    });
  });

  test('pause: only required params', async () => {
    const responsePromise = client.beta.endpoints.rollouts.pause('id', {
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

  test('pause: required and optional params', async () => {
    const response = await client.beta.endpoints.rollouts.pause('id', {
      projectId: 'projectId',
      endpointId: 'endpointId',
      etag: 'etag',
      reason: 'reason',
    });
  });

  test('previewDefaults: only required params', async () => {
    const responsePromise = client.beta.endpoints.rollouts.previewDefaults('endpointId', {
      projectId: 'projectId',
      sourceDeploymentId: 'sourceDeploymentId',
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

  test('previewDefaults: required and optional params', async () => {
    const response = await client.beta.endpoints.rollouts.previewDefaults('endpointId', {
      projectId: 'projectId',
      sourceDeploymentId: 'sourceDeploymentId',
      targetDeploymentId: 'targetDeploymentId',
      blueGreen: {},
      canary: { stepInterval: '-160513s', steps: [{ traffic: 0, replicas: 0 }] },
      finalSourceReplicas: 0,
      finalTargetReplicas: 0,
      metrics: [
        {
          name: 'inflight_requests',
          stat: 'METRIC_STAT_TYPE_AVG',
          percentile: 0,
          regressionCheck: { direction: 'REGRESSION_DIRECTION_HIGHER_IS_WORSE', maxRegressionPercent: 0 },
          thresholdCheck: { operator: 'THRESHOLD_OPERATOR_GT', value: 0 },
          window: '-160513s',
        },
      ],
      rolling: {},
    });
  });

  test('promote: only required params', async () => {
    const responsePromise = client.beta.endpoints.rollouts.promote('id', {
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

  test('promote: required and optional params', async () => {
    const response = await client.beta.endpoints.rollouts.promote('id', {
      projectId: 'projectId',
      endpointId: 'endpointId',
      etag: 'etag',
    });
  });

  test('resume: only required params', async () => {
    const responsePromise = client.beta.endpoints.rollouts.resume('id', {
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

  test('resume: required and optional params', async () => {
    const response = await client.beta.endpoints.rollouts.resume('id', {
      projectId: 'projectId',
      endpointId: 'endpointId',
      etag: 'etag',
    });
  });

  test('start: only required params', async () => {
    const responsePromise = client.beta.endpoints.rollouts.start('id', {
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

  test('start: required and optional params', async () => {
    const response = await client.beta.endpoints.rollouts.start('id', {
      projectId: 'projectId',
      endpointId: 'endpointId',
    });
  });
});
