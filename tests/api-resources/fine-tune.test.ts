// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Together from 'together';
import { Response } from 'node-fetch';

const together = new Together({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource fineTune', () => {
  test('create: only required params', async () => {
    const responsePromise = together.fineTune.create({ model: 'string', training_file: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await together.fineTune.create({
      model: 'string',
      training_file: 'string',
      batch_size: 0,
      learning_rate: 0,
      n_checkpoints: 0,
      n_epochs: 0,
      suffix: 'string',
      wandb_api_key: 'string',
    });
  });

  test('retrieve', async () => {
    const responsePromise = together.fineTune.retrieve('string');
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
    await expect(together.fineTune.retrieve('string', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Together.NotFoundError,
    );
  });

  test('list', async () => {
    const responsePromise = together.fineTune.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(together.fineTune.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Together.NotFoundError,
    );
  });

  test('cancel', async () => {
    const responsePromise = together.fineTune.cancel('string');
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
    await expect(together.fineTune.cancel('string', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Together.NotFoundError,
    );
  });

  test('download: only required params', async () => {
    const responsePromise = together.fineTune.download({ ft_id: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('download: required and optional params', async () => {
    const response = await together.fineTune.download({
      ft_id: 'string',
      checkpoint_step: 0,
      output: 'string',
    });
  });

  test('listEvents', async () => {
    const responsePromise = together.fineTune.listEvents('string');
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
    await expect(
      together.fineTune.listEvents('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Together.NotFoundError);
  });
});
