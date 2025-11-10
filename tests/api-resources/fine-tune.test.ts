// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Together from 'together-ai';

const client = new Together({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource fineTune', () => {
  test('create: only required params', async () => {
    const responsePromise = client.fineTune.create({ model: 'model', training_file: 'training_file' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.fineTune.create({
      model: 'model',
      training_file: 'training_file',
      batch_size: 0,
      from_checkpoint: 'from_checkpoint',
      from_hf_model: 'from_hf_model',
      hf_api_token: 'hf_api_token',
      hf_model_revision: 'hf_model_revision',
      hf_output_repo_name: 'hf_output_repo_name',
      learning_rate: 0,
      lr_scheduler: { lr_scheduler_type: 'linear', lr_scheduler_args: { min_lr_ratio: 0 } },
      max_grad_norm: 0,
      n_checkpoints: 0,
      n_epochs: 0,
      n_evals: 0,
      suffix: 'suffix',
      train_on_inputs: true,
      training_method: { method: 'sft', train_on_inputs: true },
      training_type: { type: 'Full' },
      validation_file: 'validation_file',
      wandb_api_key: 'wandb_api_key',
      wandb_base_url: 'wandb_base_url',
      wandb_name: 'wandb_name',
      wandb_project_name: 'wandb_project_name',
      warmup_ratio: 0,
      weight_decay: 0,
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.fineTune.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = client.fineTune.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: only required params', async () => {
    const responsePromise = client.fineTune.delete('id', { force: true });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.fineTune.delete('id', { force: true });
  });

  test('cancel', async () => {
    const responsePromise = client.fineTune.cancel('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('download: only required params', async () => {
    const responsePromise = client.fineTune.download({ ft_id: 'ft_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('download: required and optional params', async () => {
    const response = await client.fineTune.download({
      ft_id: 'ft_id',
      checkpoint: 'merged',
      checkpoint_step: 0,
      output: 'output',
    });
  });

  test('listEvents', async () => {
    const responsePromise = client.fineTune.listEvents('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveCheckpoints', async () => {
    const responsePromise = client.fineTune.retrieveCheckpoints('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
