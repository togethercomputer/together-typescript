// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Together from 'together-ai';

const client = new Together({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource checkpoints', () => {
  test('retrieve', async () => {
    const responsePromise = client.beta.rl.checkpoints.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = client.beta.rl.checkpoints.list();
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
      client.beta.rl.checkpoints.list(
        {
          after: 'after',
          base_model: 'base_model',
          limit: 0,
          session_id: 'session_id',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Together.NotFoundError);
  });

  test('download: only required params', async () => {
    const responsePromise = client.beta.rl.checkpoints.download('id', {
      variant: 'CHECKPOINT_VARIANT_UNSPECIFIED',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('download: required and optional params', async () => {
    const response = await client.beta.rl.checkpoints.download('id', {
      variant: 'CHECKPOINT_VARIANT_UNSPECIFIED',
    });
  });
});
