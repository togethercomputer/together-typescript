// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Together from 'together-ai';

const client = new Together({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource operations', () => {
  test('createInferenceCheckpoint', async () => {
    const responsePromise = client.beta.rl.operations.createInferenceCheckpoint('session_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createTrainingCheckpoint', async () => {
    const responsePromise = client.beta.rl.operations.createTrainingCheckpoint('session_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('customForwardBackward: only required params', async () => {
    const responsePromise = client.beta.rl.operations.customForwardBackward('session_id', {
      gradients: [{ data: [-0.1, 0.05, -0.08, 0.12, -0.03] }],
      samples: [
        {
          loss_fn_inputs: { foo: { data: [1, 2, 3], dtype: 'int64' } },
          model_input: { chunks: [{ encoded_text: { tokens: [123, 456, 789] } }] },
        },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('customForwardBackward: required and optional params', async () => {
    const response = await client.beta.rl.operations.customForwardBackward('session_id', {
      gradients: [{ data: [-0.1, 0.05, -0.08, 0.12, -0.03], dtype: 'D_TYPE_FLOAT32' }],
      samples: [
        {
          loss_fn_inputs: {
            foo: {
              data: [1, 2, 3],
              dtype: 'int64',
              shape: [3],
              sparse_col_indices: [0, 2],
              sparse_crow_indices: [0, 2],
            },
          },
          model_input: { chunks: [{ encoded_text: { tokens: [123, 456, 789] } }] },
          routed_experts: {
            shape: ['512', '64', '8'],
            data: 'U3RhaW5sZXNzIHJvY2tz',
            object_uri: 'https://example.com',
          },
        },
      ],
    });
  });

  test('forward: only required params', async () => {
    const responsePromise = client.beta.rl.operations.forward('session_id', {
      samples: [
        {
          loss_fn_inputs: { foo: { data: [1, 2, 3], dtype: 'int64' } },
          model_input: { chunks: [{ encoded_text: { tokens: [123, 456, 789] } }] },
        },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('forward: required and optional params', async () => {
    const response = await client.beta.rl.operations.forward('session_id', {
      samples: [
        {
          loss_fn_inputs: {
            foo: {
              data: [1, 2, 3],
              dtype: 'int64',
              shape: [3],
              sparse_col_indices: [0, 2],
              sparse_crow_indices: [0, 2],
            },
          },
          model_input: { chunks: [{ encoded_text: { tokens: [123, 456, 789] } }] },
          routed_experts: {
            shape: ['512', '64', '8'],
            data: 'U3RhaW5sZXNzIHJvY2tz',
            object_uri: 'https://example.com',
          },
        },
      ],
    });
  });

  test('forwardBackward: only required params', async () => {
    const responsePromise = client.beta.rl.operations.forwardBackward('session_id', {
      loss: { type: 'LOSS_TYPE_GRPO' },
      samples: [
        {
          loss_fn_inputs: { foo: { data: [1, 2, 3], dtype: 'int64' } },
          model_input: { chunks: [{ encoded_text: { tokens: [123, 456, 789] } }] },
        },
      ],
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
    const response = await client.beta.rl.operations.forwardBackward('session_id', {
      loss: {
        type: 'LOSS_TYPE_GRPO',
        cispo_params: { clip_high_threshold: 4, clip_low_threshold: 0 },
        cross_entropy_params: {},
        dro_params: { beta: 0.05 },
        grpo_params: {
          agg_type: 'GRPO_LOSS_AGGREGATION_TYPE_FIXED_HORIZON',
          beta: 0.1,
          clip_high_threshold: 1.2,
          clip_low_threshold: 0.8,
          ratio_type: 'GRPO_LOSS_RATIO_TYPE_TOKEN',
        },
        ppo_params: { clip_high_threshold: 1.2, clip_low_threshold: 0.8 },
      },
      samples: [
        {
          loss_fn_inputs: {
            foo: {
              data: [1, 2, 3],
              dtype: 'int64',
              shape: [3],
              sparse_col_indices: [0, 2],
              sparse_crow_indices: [0, 2],
            },
          },
          model_input: { chunks: [{ encoded_text: { tokens: [123, 456, 789] } }] },
          routed_experts: {
            shape: ['512', '64', '8'],
            data: 'U3RhaW5sZXNzIHJvY2tz',
            object_uri: 'https://example.com',
          },
        },
      ],
    });
  });

  test('optimStep', async () => {
    const responsePromise = client.beta.rl.operations.optimStep('session_id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveCustomForwardBackward: only required params', async () => {
    const responsePromise = client.beta.rl.operations.retrieveCustomForwardBackward('operation_id', {
      session_id: 'session_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveCustomForwardBackward: required and optional params', async () => {
    const response = await client.beta.rl.operations.retrieveCustomForwardBackward('operation_id', {
      session_id: 'session_id',
    });
  });

  test('retrieveForward: only required params', async () => {
    const responsePromise = client.beta.rl.operations.retrieveForward('operation_id', {
      session_id: 'session_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveForward: required and optional params', async () => {
    const response = await client.beta.rl.operations.retrieveForward('operation_id', {
      session_id: 'session_id',
    });
  });

  test('retrieveForwardBackward: only required params', async () => {
    const responsePromise = client.beta.rl.operations.retrieveForwardBackward('operation_id', {
      session_id: 'session_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveForwardBackward: required and optional params', async () => {
    const response = await client.beta.rl.operations.retrieveForwardBackward('operation_id', {
      session_id: 'session_id',
    });
  });

  test('retrieveInferenceCheckpoint: only required params', async () => {
    const responsePromise = client.beta.rl.operations.retrieveInferenceCheckpoint('operation_id', {
      session_id: 'session_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveInferenceCheckpoint: required and optional params', async () => {
    const response = await client.beta.rl.operations.retrieveInferenceCheckpoint('operation_id', {
      session_id: 'session_id',
    });
  });

  test('retrieveOptimStep: only required params', async () => {
    const responsePromise = client.beta.rl.operations.retrieveOptimStep('operation_id', {
      session_id: 'session_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveOptimStep: required and optional params', async () => {
    const response = await client.beta.rl.operations.retrieveOptimStep('operation_id', {
      session_id: 'session_id',
    });
  });

  test('retrieveSample: only required params', async () => {
    const responsePromise = client.beta.rl.operations.retrieveSample('operation_id', {
      session_id: 'session_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveSample: required and optional params', async () => {
    const response = await client.beta.rl.operations.retrieveSample('operation_id', {
      session_id: 'session_id',
    });
  });

  test('retrieveTrainingCheckpoint: only required params', async () => {
    const responsePromise = client.beta.rl.operations.retrieveTrainingCheckpoint('operation_id', {
      session_id: 'session_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveTrainingCheckpoint: required and optional params', async () => {
    const response = await client.beta.rl.operations.retrieveTrainingCheckpoint('operation_id', {
      session_id: 'session_id',
    });
  });

  test('retrieveWeightsSync: only required params', async () => {
    const responsePromise = client.beta.rl.operations.retrieveWeightsSync('operation_id', {
      session_id: 'session_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveWeightsSync: required and optional params', async () => {
    const response = await client.beta.rl.operations.retrieveWeightsSync('operation_id', {
      session_id: 'session_id',
    });
  });

  test('sample: only required params', async () => {
    const responsePromise = client.beta.rl.operations.sample('session_id', {
      model_inputs: [{ chunks: [{ encoded_text: { tokens: [123, 456, 789] } }] }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('sample: required and optional params', async () => {
    const response = await client.beta.rl.operations.sample('session_id', {
      model_inputs: [{ chunks: [{ encoded_text: { tokens: [123, 456, 789] } }] }],
      num_samples: 1,
      prompt_logprobs: false,
      return_routed_experts: false,
      return_routed_experts_object_uri: false,
      sampling_params: {
        max_tokens: 512,
        seed: '42',
        stop: ['\n', 'END'],
        temperature: 1,
        top_k: -1,
        top_p: 1,
      },
      topk_prompt_logprobs: 0,
    });
  });

  test('weightsSync: only required params', async () => {
    const responsePromise = client.beta.rl.operations.weightsSync('session_id', {
      weight_sync_type: 'WEIGHT_SYNC_TYPE_SYNCHRONOUS',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('weightsSync: required and optional params', async () => {
    const response = await client.beta.rl.operations.weightsSync('session_id', {
      weight_sync_type: 'WEIGHT_SYNC_TYPE_SYNCHRONOUS',
    });
  });
});
