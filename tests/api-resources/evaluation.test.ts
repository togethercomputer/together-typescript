// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Together from 'together-ai';

const client = new Together({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource evaluation', () => {
  test('create: only required params', async () => {
    const responsePromise = client.evaluation.create({
      parameters: {
        input_data_file_path: 'file-abcd-1234',
        judge: {
          model_name: 'meta-llama/Llama-3-70B-Instruct-Turbo',
          system_template: 'You are a helpful assistant that classifies text.',
        },
        labels: ['Toxic', 'Non-Toxic'],
        pass_labels: ['Non-Toxic'],
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

  test('create: required and optional params', async () => {
    const response = await client.evaluation.create({
      parameters: {
        input_data_file_path: 'file-abcd-1234',
        judge: {
          model_name: 'meta-llama/Llama-3-70B-Instruct-Turbo',
          system_template: 'You are a helpful assistant that classifies text.',
        },
        labels: ['Toxic', 'Non-Toxic'],
        pass_labels: ['Non-Toxic'],
        model_to_evaluate: 'output_column',
      },
      type: 'classify',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.evaluation.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getStatus', async () => {
    const responsePromise = client.evaluation.getStatus('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateStatus: only required params', async () => {
    const responsePromise = client.evaluation.updateStatus('id', { status: 'completed' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateStatus: required and optional params', async () => {
    const response = await client.evaluation.updateStatus('id', {
      status: 'completed',
      error: 'error',
      results: {},
    });
  });
});
