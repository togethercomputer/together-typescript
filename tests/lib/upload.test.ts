// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as path from 'path';
import * as fs from 'fs/promises';
import { tmpdir } from 'os';
import Together from 'together-ai';

const client = new Together({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('Files', () => {
  const originalFetch = globalThis.fetch;
  const mockFetch = jest.fn();

  beforeEach(() => {
    mockFetch.mockReset();
    globalThis.fetch = mockFetch;
  });

  afterEach(() => {
    globalThis.fetch = originalFetch;
  });

  test('upload', async () => {
    const file = path.join(tmpdir(), 'valid.jsonl');
    const content = [{ text: 'Hello, world!' }, { text: 'How are you?' }];
    await fs.writeFile(file, content.map((item) => JSON.stringify(item)).join('\n'));

    // Mock the Signed URL Response
    mockFetch.mockResolvedValueOnce(
      new Response('', {
        status: 302,
        headers: {
          location: 's3://bucket/signed-url',
          'x-together-file-id': 'signed-url-file-id',
        },
      }),
    );

    // Actual file upload response is a 200
    mockFetch.mockResolvedValueOnce(
      new Response('', {
        status: 200,
      }),
    );

    const responsePromise = client.files.upload(file, 'fine-tune', false);

    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
