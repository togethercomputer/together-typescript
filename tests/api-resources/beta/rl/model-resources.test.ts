// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Together from 'together-ai';

const client = new Together({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource modelResources', () => {
  test('create: only required params', async () => {
    const responsePromise = client.beta.rl.modelResources.create({ base_model: 'Qwen/Qwen3-0.6B' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.beta.rl.modelResources.create({
      base_model: 'Qwen/Qwen3-0.6B',
      compute_config: { gpu_type: 'B200-SXM', num_generator_replicas: 2 },
      lora_enabled: true,
      optimizer_config: {
        adamw: {},
        muon: { scaling_strategy: 'MUON_SCALING_STRATEGY_ORIGINAL' },
      },
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.beta.rl.modelResources.retrieve('model_resources_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = client.beta.rl.modelResources.list();
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
      client.beta.rl.modelResources.list(
        {
          after: 'after',
          created_by: 'created_by',
          limit: 0,
          status: ['MODEL_RESOURCES_STATUS_PENDING'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Together.NotFoundError);
  });

  test('estimateCost: only required params', async () => {
    const responsePromise = client.beta.rl.modelResources.estimateCost({ base_model: 'Qwen/Qwen3-0.6B' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('estimateCost: required and optional params', async () => {
    const response = await client.beta.rl.modelResources.estimateCost({
      base_model: 'Qwen/Qwen3-0.6B',
      compute_config: { gpu_type: 'B200-SXM', num_generator_replicas: 2 },
      lora_enabled: true,
      optimizer_config: {
        adamw: {},
        muon: { scaling_strategy: 'MUON_SCALING_STRATEGY_ORIGINAL' },
      },
    });
  });

  test('stop', async () => {
    const responsePromise = client.beta.rl.modelResources.stop('model_resources_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('stop: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.beta.rl.modelResources.stop(
        'model_resources_id',
        { force: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Together.NotFoundError);
  });
});
