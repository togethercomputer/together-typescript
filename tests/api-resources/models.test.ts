// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Together from 'together-ai';

const client = new Together({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource models', () => {
  test('list', async () => {
    const responsePromise = client.models.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('upload: only required params', async () => {
    const responsePromise = client.models.upload({
      model_name: 'Qwen2.5-72B-Instruct',
      model_source: 'unsloth/Qwen2.5-72B-Instruct',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('upload: required and optional params', async () => {
    const response = await client.models.upload({
      model_name: 'Qwen2.5-72B-Instruct',
      model_source: 'unsloth/Qwen2.5-72B-Instruct',
      base_model: 'Qwen/Qwen2.5-72B-Instruct',
      description: 'Finetuned Qwen2.5-72B-Instruct by Unsloth',
      hf_token: 'hf_examplehuggingfacetoken',
      lora_model: 'my_username/Qwen2.5-72B-Instruct-lora',
      model_type: 'model',
    });
  });
});
