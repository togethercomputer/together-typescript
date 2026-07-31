// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Together from 'together-ai';

const client = new Together({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource checkpoints', () => {
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
