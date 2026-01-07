// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Together from 'together-ai';

const client = new Together({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource endpoints', () => {
  test('create: only required params', async () => {
    const responsePromise = client.endpoints.create({
      autoscaling: { max_replicas: 5, min_replicas: 2 },
      hardware: '1x_nvidia_a100_80gb_sxm',
      model: 'meta-llama/Llama-3-8b-chat-hf',
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
    const response = await client.endpoints.create({
      autoscaling: { max_replicas: 5, min_replicas: 2 },
      hardware: '1x_nvidia_a100_80gb_sxm',
      model: 'meta-llama/Llama-3-8b-chat-hf',
      availability_zone: 'availability_zone',
      disable_prompt_cache: true,
      disable_speculative_decoding: true,
      display_name: 'My Llama3 70b endpoint',
      inactive_timeout: 60,
      state: 'STARTED',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.endpoints.retrieve('endpoint-d23901de-ef8f-44bf-b3e7-de9c1ca8f2d7');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update', async () => {
    const responsePromise = client.endpoints.update('endpoint-d23901de-ef8f-44bf-b3e7-de9c1ca8f2d7', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = client.endpoints.list();
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
      client.endpoints.list(
        {
          mine: true,
          type: 'dedicated',
          usage_type: 'on-demand',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Together.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.endpoints.delete('endpoint-d23901de-ef8f-44bf-b3e7-de9c1ca8f2d7');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createCluster: only required params', async () => {
    const responsePromise = client.endpoints.createCluster({
      billing_type: 'RESERVED',
      cluster_name: 'cluster_name',
      driver_version: 'CUDA_12_5_555',
      duration_days: 0,
      gpu_type: 'H100_SXM',
      num_gpus: 0,
      region: 'us-central-8',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createCluster: required and optional params', async () => {
    const response = await client.endpoints.createCluster({
      billing_type: 'RESERVED',
      cluster_name: 'cluster_name',
      driver_version: 'CUDA_12_5_555',
      duration_days: 0,
      gpu_type: 'H100_SXM',
      num_gpus: 0,
      region: 'us-central-8',
      cluster_type: 'KUBERNETES',
      shared_volume: {
        region: 'region',
        size_tib: 0,
        volume_name: 'volume_name',
      },
      volume_id: 'volume_id',
    });
  });

  test('deleteCluster', async () => {
    const responsePromise = client.endpoints.deleteCluster('cluster_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listAvzones', async () => {
    const responsePromise = client.endpoints.listAvzones();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listClusters', async () => {
    const responsePromise = client.endpoints.listClusters();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listRegions', async () => {
    const responsePromise = client.endpoints.listRegions();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveCluster', async () => {
    const responsePromise = client.endpoints.retrieveCluster('cluster_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateCluster', async () => {
    const responsePromise = client.endpoints.updateCluster('cluster_id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
