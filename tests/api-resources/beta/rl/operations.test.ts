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
          loss_inputs: { target_tokens: { data: [123, 456, 789] } },
          model_input: { chunks: [{}] },
          policy_segments: [{ start_token: 0, version: 5 }],
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
          loss_inputs: {
            target_tokens: { data: [123, 456, 789], dtype: 'D_TYPE_INT64' },
            cispo_inputs: {
              advantages: { data: [0.5, 0.5], dtype: 'D_TYPE_FLOAT32' },
              generator_logprobs: { data: [-1.2, -0.8], dtype: 'D_TYPE_FLOAT32' },
            },
            dro_inputs: {
              advantages: { data: [0.5, 0.5], dtype: 'D_TYPE_FLOAT32' },
              generator_logprobs: { data: [-1.2, -0.8], dtype: 'D_TYPE_FLOAT32' },
            },
            grpo_inputs: {
              advantages: { data: [0.5, 0.5], dtype: 'D_TYPE_FLOAT32' },
              generator_logprobs: { data: [-1.2, -0.8], dtype: 'D_TYPE_FLOAT32' },
              reference_logprobs: { data: [-1.2, -0.8], dtype: 'D_TYPE_FLOAT32' },
            },
            importance_sampling_inputs: {
              advantages: { data: [0.5, 0.5], dtype: 'D_TYPE_FLOAT32' },
              generator_logprobs: { data: [-1.2, -0.8], dtype: 'D_TYPE_FLOAT32' },
            },
            loss_mask: { data: [0, 0, 1], dtype: 'D_TYPE_INT64' },
            ppo_inputs: {
              advantages: { data: [0.5, 0.5], dtype: 'D_TYPE_FLOAT32' },
              generator_logprobs: { data: [-1.2, -0.8], dtype: 'D_TYPE_FLOAT32' },
            },
          },
          model_input: { chunks: [{ encoded_text: { tokens: [123, 456, 789] } }] },
          policy_segments: [{ start_token: 0, version: 5 }],
        },
      ],
    });
  });

  test('forward: only required params', async () => {
    const responsePromise = client.beta.rl.operations.forward('session_id', {
      samples: [
        {
          loss_inputs: { target_tokens: { data: [123, 456, 789] } },
          model_input: { chunks: [{}] },
          policy_segments: [{ start_token: 0, version: 5 }],
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
          loss_inputs: {
            target_tokens: { data: [123, 456, 789], dtype: 'D_TYPE_INT64' },
            cispo_inputs: {
              advantages: { data: [0.5, 0.5], dtype: 'D_TYPE_FLOAT32' },
              generator_logprobs: { data: [-1.2, -0.8], dtype: 'D_TYPE_FLOAT32' },
            },
            dro_inputs: {
              advantages: { data: [0.5, 0.5], dtype: 'D_TYPE_FLOAT32' },
              generator_logprobs: { data: [-1.2, -0.8], dtype: 'D_TYPE_FLOAT32' },
            },
            grpo_inputs: {
              advantages: { data: [0.5, 0.5], dtype: 'D_TYPE_FLOAT32' },
              generator_logprobs: { data: [-1.2, -0.8], dtype: 'D_TYPE_FLOAT32' },
              reference_logprobs: { data: [-1.2, -0.8], dtype: 'D_TYPE_FLOAT32' },
            },
            importance_sampling_inputs: {
              advantages: { data: [0.5, 0.5], dtype: 'D_TYPE_FLOAT32' },
              generator_logprobs: { data: [-1.2, -0.8], dtype: 'D_TYPE_FLOAT32' },
            },
            loss_mask: { data: [0, 0, 1], dtype: 'D_TYPE_INT64' },
            ppo_inputs: {
              advantages: { data: [0.5, 0.5], dtype: 'D_TYPE_FLOAT32' },
              generator_logprobs: { data: [-1.2, -0.8], dtype: 'D_TYPE_FLOAT32' },
            },
          },
          model_input: { chunks: [{ encoded_text: { tokens: [123, 456, 789] } }] },
          policy_segments: [{ start_token: 0, version: 5 }],
        },
      ],
    });
  });

  test('forwardBackward: only required params', async () => {
    const responsePromise = client.beta.rl.operations.forwardBackward('session_id', {
      loss: { type: 'LOSS_TYPE_GRPO' },
      samples: [
        {
          loss_inputs: { target_tokens: { data: [123, 456, 789] } },
          model_input: { chunks: [{}] },
          policy_segments: [{ start_token: 0, version: 5 }],
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
          loss_inputs: {
            target_tokens: { data: [123, 456, 789], dtype: 'D_TYPE_INT64' },
            cispo_inputs: {
              advantages: { data: [0.5, 0.5], dtype: 'D_TYPE_FLOAT32' },
              generator_logprobs: { data: [-1.2, -0.8], dtype: 'D_TYPE_FLOAT32' },
            },
            dro_inputs: {
              advantages: { data: [0.5, 0.5], dtype: 'D_TYPE_FLOAT32' },
              generator_logprobs: { data: [-1.2, -0.8], dtype: 'D_TYPE_FLOAT32' },
            },
            grpo_inputs: {
              advantages: { data: [0.5, 0.5], dtype: 'D_TYPE_FLOAT32' },
              generator_logprobs: { data: [-1.2, -0.8], dtype: 'D_TYPE_FLOAT32' },
              reference_logprobs: { data: [-1.2, -0.8], dtype: 'D_TYPE_FLOAT32' },
            },
            importance_sampling_inputs: {
              advantages: { data: [0.5, 0.5], dtype: 'D_TYPE_FLOAT32' },
              generator_logprobs: { data: [-1.2, -0.8], dtype: 'D_TYPE_FLOAT32' },
            },
            loss_mask: { data: [0, 0, 1], dtype: 'D_TYPE_INT64' },
            ppo_inputs: {
              advantages: { data: [0.5, 0.5], dtype: 'D_TYPE_FLOAT32' },
              generator_logprobs: { data: [-1.2, -0.8], dtype: 'D_TYPE_FLOAT32' },
            },
          },
          model_input: { chunks: [{ encoded_text: { tokens: [123, 456, 789] } }] },
          policy_segments: [{ start_token: 0, version: 5 }],
        },
      ],
    });
  });

  test('optimStep: only required params', async () => {
    const responsePromise = client.beta.rl.operations.optimStep('session_id', {
      weight_sync_type: 'WEIGHT_SYNC_TYPE_UNSPECIFIED',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('optimStep: required and optional params', async () => {
    const response = await client.beta.rl.operations.optimStep('session_id', {
      weight_sync_type: 'WEIGHT_SYNC_TYPE_UNSPECIFIED',
      adamw_params: {
        beta1: 0.9,
        beta2: 0.95,
        eps: 1e-8,
        learning_rate: 0.0001,
        weight_decay: 0.1,
      },
      max_grad_norm: 10,
      muon_params: {
        adamw: {
          beta1: 0.9,
          beta2: 0.95,
          eps: 1e-8,
          learning_rate: 0.0001,
          weight_decay: 0.1,
        },
        learning_rate: 0.02,
        momentum: 0.95,
        newton_schulz_steps: 5,
        weight_decay: 0,
      },
    });
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

  test('sample: only required params', async () => {
    const responsePromise = client.beta.rl.operations.sample('session_id', {
      model_inputs: [{ chunks: [{}] }],
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
      sampling_params: {
        max_tokens: 512,
        return_prompt_logprobs: false,
        seed: '42',
        stop: ['\n', 'END'],
        temperature: 1,
        top_k: -1,
        top_p: 1,
      },
    });
  });
});
