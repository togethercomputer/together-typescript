// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Together from 'together-ai';

const client = new Together({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource codeInterpreter', () => {
  // Prism doesn't support callbacks yet
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

  // Prism doesn't support callbacks yet
  test.skip('execute: required and optional params', async () => {
    const response = await client.codeInterpreter.execute({
      code: "print('Hello, world!')",
      language: 'python',
      files: [{ content: 'content', encoding: 'string', name: 'name' }],
      session_id: 'ses_abcDEF123',
    });
  });
});
