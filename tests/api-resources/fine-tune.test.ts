// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Together from 'together-ai';
import { Response } from 'node-fetch';

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
      dpo_beta: 0,
      from_checkpoint: 'from_checkpoint',
      learning_rate: 0,
      lr_scheduler: { lr_scheduler_type: 'linear', lr_scheduler_args: { min_lr_ratio: 0 } },
      max_grad_norm: 0,
      n_checkpoints: 0,
      n_epochs: 0,
      n_evals: 0,
      suffix: 'suffix',
      train_on_inputs: true,
      training_method: 'sft',
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

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.fineTune.retrieve('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Together.NotFoundError,
    );
  });

  // invalid oneOf in required props
  test.skip('list', async () => {
    const responsePromise = client.fineTune.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // invalid oneOf in required props
  test.skip('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.fineTune.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Together.NotFoundError,
    );
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

  test('cancel: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.fineTune.cancel('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Together.NotFoundError,
    );
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

  test('listEvents: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.fineTune.listEvents('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Together.NotFoundError,
    );
  });
});
