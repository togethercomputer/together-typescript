// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Together from 'together-ai';

const client = new Together({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sessions', () => {
  test('create: only required params', async () => {
    const responsePromise = client.beta.rl.sessions.create({
      model_resources_id: '123e4567-e89b-12d3-a456-426614174000',
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
    const response = await client.beta.rl.sessions.create({
      model_resources_id: '123e4567-e89b-12d3-a456-426614174000',
      display_name: 'gsm8k-experiment-2',
      lora_config: {
        alpha: 64,
        dropout: 0,
        rank: 32,
      },
      metadata: {
        wandb: {
          entity: 'example-org',
          group: 'gsm8k-35b-sweep',
          project: 'grpo-gsm8k',
          run_id: 'abc123',
          run_name: 'exp2-thinking-4k-ctx',
          url: 'https://wandb.ai/example-org/example-project/runs/run-id',
        },
      },
      resume_from_checkpoint_id: '123e4567-e89b-12d3-a456-426614174000',
      resume_from_hf_checkpoint: 'your-org/llama-3-8b-finetuned',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.beta.rl.sessions.retrieve('session_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = client.beta.rl.sessions.list();
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
      client.beta.rl.sessions.list(
        {
          after: 'after',
          created_by: 'created_by',
          limit: 0,
          model_resources_id: 'model_resources_id',
          status: ['TRAINING_SESSION_STATUS_CREATING'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Together.NotFoundError);
  });

  test('stop', async () => {
    const responsePromise = client.beta.rl.sessions.stop('session_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
