// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Together from 'together-ai';

const client = new Together({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource codeInterpreter', () => {
  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('execute: only required params', async () => {
    const responsePromise = client.codeInterpreter.execute({
      code: "print('Hello, world!')",
      language: 'python',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('execute: required and optional params', async () => {
    const response = await client.codeInterpreter.execute({
      code: "print('Hello, world!')",
      language: 'python',
      files: [{ content: 'content', encoding: 'string', name: 'name' }],
      session_id: 'ses_abcDEF123',
    });
  });
});
