// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Together from 'together-ai';

const client = new Together({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource fineTuning', () => {
  test('create: only required params', async () => {
    const responsePromise = client.fineTuning.create({ model: 'model', training_file: 'training_file' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.fineTuning.create({
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
    const responsePromise = client.fineTuning.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = client.fineTuning.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete', async () => {
    const responsePromise = client.fineTuning.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.fineTuning.delete('id', { force: true }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Together.NotFoundError);
  });

  test('cancel', async () => {
    const responsePromise = client.fineTuning.cancel('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('content: required and optional params', async () => {
    const response = await client.fineTuning.content({
      ft_id: 'ft_id',
      checkpoint: 'merged',
      checkpoint_step: 0,
    });
  });

  test('estimatePrice: only required params', async () => {
    const responsePromise = client.fineTuning.estimatePrice({ training_file: 'training_file' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('estimatePrice: required and optional params', async () => {
    const response = await client.fineTuning.estimatePrice({
      training_file: 'training_file',
      from_checkpoint: 'from_checkpoint',
      model: 'model',
      n_epochs: 0,
      n_evals: 0,
      training_method: { method: 'sft', train_on_inputs: true },
      training_type: { type: 'Full' },
      validation_file: 'validation_file',
    });
  });

  test('listCheckpoints', async () => {
    const responsePromise = client.fineTuning.listCheckpoints('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listEvents', async () => {
    const responsePromise = client.fineTuning.listEvents('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
