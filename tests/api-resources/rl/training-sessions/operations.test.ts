// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Together from 'together-ai';

const client = new Together({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource operations', () => {
  test('retrieveForwardBackward: only required params', async () => {
    const responsePromise = client.rl.trainingSessions.operations.retrieveForwardBackward('operation_id', {
      session_id: 'session_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveForwardBackward: required and optional params', async () => {
    const response = await client.rl.trainingSessions.operations.retrieveForwardBackward('operation_id', {
      session_id: 'session_id',
    });
  });

  test('retrieveOptimStep: only required params', async () => {
    const responsePromise = client.rl.trainingSessions.operations.retrieveOptimStep('operation_id', {
      session_id: 'session_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveOptimStep: required and optional params', async () => {
    const response = await client.rl.trainingSessions.operations.retrieveOptimStep('operation_id', {
      session_id: 'session_id',
    });
  });
});
