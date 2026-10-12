// CUSTOM CODE. DO NOT LET STAINLESS REMOVE.
//
// Regression tests for `src/lib/upload.ts`. These are hermetic: the client and
// the upload helper are both driven through a mocked `fetch`, so no mock server
// (`./scripts/mock`) is required.

import fs from 'fs';
import os from 'os';
import path from 'path';
import Together from '../../src/index';

describe('files.upload', () => {
  let tmpDir: string;
  const originalFetch = globalThis.fetch;
  let fetchMock: jest.Mock;

  const makeClient = (baseURL: string = 'http://localhost:8080/v1') =>
    new Together({ apiKey: 'test-key', baseURL, fetch: fetchMock as any });

  beforeEach(() => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'upload-test-'));
    fetchMock = jest.fn();
    // `src/lib/upload.ts` uses the global `fetch` for the signed URL request and
    // the file upload itself, while the rest of the SDK uses `client.fetch`.
    globalThis.fetch = fetchMock as any;
  });

  afterEach(() => {
    globalThis.fetch = originalFetch;
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  it('rejects unsupported file extensions instead of hanging', async () => {
    const file = path.join(tmpDir, 'data.txt');
    fs.writeFileSync(file, 'hello');

    const promise = makeClient().files.upload(file, 'fine-tune', false);

    await expect(promise).rejects.toThrow(/Unknown extension of file/);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('rejects when the file does not exist', async () => {
    const promise = makeClient().files.upload(path.join(tmpDir, 'missing.jsonl'), 'fine-tune', false);

    await expect(promise).rejects.toThrow(/does not exist/);
  });

  it('rejects with an Error carrying the check report message', async () => {
    const file = path.join(tmpDir, 'invalid.jsonl');
    fs.writeFileSync(file, JSON.stringify({ not_a_valid_column: true }));

    const promise = makeClient().files.upload(file, 'fine-tune');

    await expect(promise).rejects.toThrow(/Could not detect a format/);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('uses the client baseURL and sends only the file basename', async () => {
    const file = path.join(tmpDir, 'nested-name.jsonl');
    fs.writeFileSync(file, JSON.stringify({ text: 'hello' }));
    fetchMock.mockRejectedValueOnce(new Error('stop before uploading'));

    await makeClient('http://my-proxy.local/v1')
      .files.upload(file, 'fine-tune', false)
      .catch(() => {});

    expect(fetchMock).toHaveBeenCalledTimes(1);
    const url = new URL(String(fetchMock.mock.calls[0][0]));
    expect(url.origin + url.pathname).toBe('http://my-proxy.local/v1/files');
    expect(url.searchParams.get('file_name')).toBe('nested-name.jsonl');
  });

  it('uploads a file and resolves with the file metadata', async () => {
    const file = path.join(tmpDir, 'valid.jsonl');
    fs.writeFileSync(file, JSON.stringify({ text: 'hello' }));

    fetchMock
      // signed URL request
      .mockResolvedValueOnce(
        new Response('', {
          status: 302,
          headers: { location: 'https://bucket.example.com/signed', 'x-together-file-id': 'file-123' },
        }),
      )
      // file upload
      .mockImplementationOnce(async (_url: string, init?: any) => {
        // The SDK streams the file as the request body. Drain it so the file
        // descriptor is released before the temp directory is removed, instead
        // of leaking an asynchronous `error` event into a later test.
        const body = init?.body;
        if (body) {
          await new Promise<void>((resolve, reject) => {
            body.on('data', () => {});
            body.on('end', () => resolve());
            body.on('close', () => resolve());
            body.on('error', reject);
          });
        }
        return new Response('', { status: 200 });
      })
      // files.retrieve
      .mockResolvedValueOnce(
        new Response(JSON.stringify({ id: 'file-123', filename: 'valid.jsonl', purpose: 'fine-tune' }), {
          status: 200,
          headers: { 'content-type': 'application/json' },
        }),
      );

    const response = await makeClient().files.upload(file, 'fine-tune', false);

    expect(response).toMatchObject({ id: 'file-123', filename: 'valid.jsonl' });

    const uploadCall = fetchMock.mock.calls[1];
    expect(uploadCall[0]).toBe('https://bucket.example.com/signed');
    expect(uploadCall[1]).toMatchObject({
      method: 'PUT',
      headers: expect.objectContaining({ 'Content-Length': String(fs.statSync(file).size) }),
      // Node's `fetch` refuses a streamed body without this.
      duplex: 'half',
    });
  });

  it('skips fine-tuning validation for non fine-tune purposes', async () => {
    const file = path.join(tmpDir, 'batch.jsonl');
    // A batch API file is valid, but is not one of the fine-tuning dataset formats.
    fs.writeFileSync(
      file,
      [
        { custom_id: '1', method: 'POST', url: '/v1/chat/completions', body: { model: 'm' } },
        { custom_id: '2', method: 'POST', url: '/v1/chat/completions', body: { model: 'm' } },
      ]
        .map((item) => JSON.stringify(item))
        .join('\n'),
    );
    fetchMock.mockRejectedValueOnce(new Error('reached the network'));

    // Validation would reject this file before any request is made.
    await expect(makeClient().files.upload(file, 'batch-api')).rejects.toThrow('reached the network');
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it('does not validate eval files as fine-tuning datasets', async () => {
    const file = path.join(tmpDir, 'eval.csv');
    fs.writeFileSync(file, 'custom_id,body\n1,{}\n');
    fetchMock.mockRejectedValueOnce(new Error('reached the network'));

    await expect(makeClient().files.upload(file, 'eval')).rejects.toThrow('reached the network');
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});
