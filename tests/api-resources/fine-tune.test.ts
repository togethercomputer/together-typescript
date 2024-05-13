// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TogetherAI from 'together-ai';
import { Response } from 'node-fetch';

const togetherAI = new TogetherAI({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource fineTune', () => {
  test('create: only required params', async () => {
    const responsePromise = togetherAI.fineTune.create({ model: 'string', training_file: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await togetherAI.fineTune.create({
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
    const responsePromise = togetherAI.fineTune.retrieve('string');
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
    await expect(
      togetherAI.fineTune.retrieve('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(TogetherAI.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = togetherAI.fineTune.list();
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
    await expect(togetherAI.fineTune.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      TogetherAI.NotFoundError,
    );
  });

  test('cancel', async () => {
    const responsePromise = togetherAI.fineTune.cancel('string');
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
    await expect(togetherAI.fineTune.cancel('string', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      TogetherAI.NotFoundError,
    );
  });

  test('listEvents', async () => {
    const responsePromise = togetherAI.fineTune.listEvents('string');
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
      togetherAI.fineTune.listEvents('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(TogetherAI.NotFoundError);
  });
});
