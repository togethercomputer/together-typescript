// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Together from 'together-ai';

const client = new Together({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource trainingSessions', () => {
  test('create: only required params', async () => {
    const responsePromise = client.rl.trainingSessions.create({
      body: { base_model: 'meta-llama/Meta-Llama-3-8B-Instruct' },
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
    const response = await client.rl.trainingSessions.create({
      body: {
        base_model: 'meta-llama/Meta-Llama-3-8B-Instruct',
        checkpoint_id: 'checkpoint-123',
        lora_config: {
          alpha: 0,
          dropout: 0,
          rank: 0,
        },
        lr_scheduler_config: { linear: { params: { lr_min: 0, warmup_steps: 0 } } },
        optimizer_config: {
          adamw: {
            params: {
              beta1: 0,
              beta2: 0,
              eps: 0,
              lr: 0,
              weight_decay: 0,
            },
          },
          max_grad_norm: 0,
        },
      },
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.rl.trainingSessions.retrieve('session_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = client.rl.trainingSessions.list();
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
      client.rl.trainingSessions.list(
        {
          limit: 'limit',
          offset: 'offset',
          status: 'status',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Together.NotFoundError);
  });

  test('forwardBackward: only required params', async () => {
    const responsePromise = client.rl.trainingSessions.forwardBackward('session_id', {
      body: {
        loss_fn: 'LOSS_FN_GRPO',
        samples: [
          {
            loss_fn_inputs: {
              target_tokens: { data: [123, 456, 789] },
              weights: { data: [0.1, 0.2, 0.3] },
            },
            model_input: { chunks: [{}] },
          },
        ],
      },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('forwardBackward: required and optional params', async () => {
    const response = await client.rl.trainingSessions.forwardBackward('session_id', {
      body: {
        loss_fn: 'LOSS_FN_GRPO',
        samples: [
          {
            loss_fn_inputs: {
              target_tokens: { data: [123, 456, 789], dtype: 'D_TYPE_INT64' },
              weights: { data: [0.1, 0.2, 0.3], dtype: 'D_TYPE_FLOAT32' },
            },
            model_input: { chunks: [{ encoded_text: { tokens: [123, 456, 789] } }] },
          },
        ],
      },
    });
  });

  test('optimStep: only required params', async () => {
    const responsePromise = client.rl.trainingSessions.optimStep('session_id', { body: {} });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('optimStep: required and optional params', async () => {
    const response = await client.rl.trainingSessions.optimStep('session_id', { body: {} });
  });

  test('stop', async () => {
    const responsePromise = client.rl.trainingSessions.stop('session_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
