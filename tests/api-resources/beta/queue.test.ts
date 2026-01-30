// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Together from 'together-ai';

const client = new Together({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource queue', () => {
  test('retrieve: only required params', async () => {
    const responsePromise = client.beta.queue.retrieve({ model: 'model', request_id: 'request_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.beta.queue.retrieve({ model: 'model', request_id: 'request_id' });
  });

  test('cancel: only required params', async () => {
    const responsePromise = client.beta.queue.cancel({ model: 'model', request_id: 'request_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('cancel: required and optional params', async () => {
    const response = await client.beta.queue.cancel({ model: 'model', request_id: 'request_id' });
  });

  test('metrics: only required params', async () => {
    const responsePromise = client.beta.queue.metrics({ model: 'model' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('metrics: required and optional params', async () => {
    const response = await client.beta.queue.metrics({ model: 'model' });
  });

  test('submit: only required params', async () => {
    const responsePromise = client.beta.queue.submit({
      model: 'model',
      payload: { foo: 'bar' },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('submit: required and optional params', async () => {
    const response = await client.beta.queue.submit({
      model: 'model',
      payload: { foo: 'bar' },
      info: { foo: 'bar' },
      priority: 0,
    });
  });
});
