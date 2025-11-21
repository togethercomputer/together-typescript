// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Together from 'together-ai';

const client = new Together({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource evals', () => {
  test.skip('create: only required params', async () => {
    const responsePromise = client.evals.create({
      parameters: {
        input_data_file_path: 'file-1234-aefd',
        judge: {
          model: 'meta-llama/Llama-3-70B-Instruct-Turbo',
          model_source: 'serverless',
          system_template: 'Imagine you are a helpful assistant',
        },
        labels: ['yes', 'no'],
        pass_labels: ['yes'],
      },
      type: 'classify',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test.skip('create: required and optional params', async () => {
    const response = await client.evals.create({
      parameters: {
        input_data_file_path: 'file-1234-aefd',
        judge: {
          model: 'meta-llama/Llama-3-70B-Instruct-Turbo',
          model_source: 'serverless',
          system_template: 'Imagine you are a helpful assistant',
          external_api_token: 'external_api_token',
          external_base_url: 'external_base_url',
        },
        labels: ['yes', 'no'],
        pass_labels: ['yes'],
        model_to_evaluate: 'string',
      },
      type: 'classify',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.evals.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update', async () => {
    const responsePromise = client.evals.update('id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = client.evals.list();
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
      client.evals.list(
        { limit: 0, status: 'status', userId: 'userId' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Together.NotFoundError);
  });

  test('status', async () => {
    const responsePromise = client.evals.status('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
