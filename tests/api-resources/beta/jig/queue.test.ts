// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Jig } from 'together-ai/resources/beta/jig/jig';
import { BaseQueue } from 'together-ai/resources/beta/jig/queue';

import Together from 'together-ai';
import { createClient, type PartialTogether } from 'together-ai/tree-shakable';

const client = new Together({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseQueue],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Jig],
});

const runTests = (client: PartialTogether<{ beta: { jig: { queue: BaseQueue } } }>) => {
  test('retrieve: only required params', async () => {
    const responsePromise = client.beta.jig.queue.retrieve({ model: 'model', request_id: 'request_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.beta.jig.queue.retrieve({ model: 'model', request_id: 'request_id' });
  });

  test('cancel: only required params', async () => {
    const responsePromise = client.beta.jig.queue.cancel({ model: 'model', request_id: 'request_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('cancel: required and optional params', async () => {
    const response = await client.beta.jig.queue.cancel({ model: 'model', request_id: 'request_id' });
  });

  test('clear: only required params', async () => {
    const responsePromise = client.beta.jig.queue.clear({ model: 'model' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('clear: required and optional params', async () => {
    const response = await client.beta.jig.queue.clear({ model: 'model' });
  });

  test('metrics: only required params', async () => {
    const responsePromise = client.beta.jig.queue.metrics({ model: 'model' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('metrics: required and optional params', async () => {
    const response = await client.beta.jig.queue.metrics({ model: 'model' });
  });

  test('submit: only required params', async () => {
    const responsePromise = client.beta.jig.queue.submit({
      model: 'my-queue-model',
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
    const response = await client.beta.jig.queue.submit({
      model: 'my-queue-model',
      payload: { foo: 'bar' },
      info: { foo: 'bar' },
      priority: 0,
    });
  });
};
describe('resource queue', () => runTests(client));
describe('resource queue (tree shakable, base)', () => runTests(partialClient));
describe('resource queue (tree shakable, subresource)', () => runTests(parentPartialClient));
