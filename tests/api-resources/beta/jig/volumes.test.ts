// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Jig } from 'together-ai/resources/beta/jig/jig';
import { BaseVolumes } from 'together-ai/resources/beta/jig/volumes';

import Together from 'together-ai';
import { createClient, type PartialTogether } from 'together-ai/tree-shakable';

const client = new Together({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseVolumes],
});

const parentPartialClient = createClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Jig],
});

const runTests = (client: PartialTogether<{ beta: { jig: { volumes: BaseVolumes } } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.beta.jig.volumes.create({
      content: {},
      name: 'x',
      type: 'readOnly',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.beta.jig.volumes.create({
      content: {
        origin: {
          s3: {
            role_arn: 'arn:aws:iam::123456789012:role/together-volumes',
            uri: 's3://my-bucket/models/custom-weights',
          },
        },
        source_prefix: 'models/',
        type: 'files',
      },
      name: 'x',
      type: 'readOnly',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.beta.jig.volumes.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.beta.jig.volumes.retrieve('id', { version: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Together.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = client.beta.jig.volumes.update('id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = client.beta.jig.volumes.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete', async () => {
    const responsePromise = client.beta.jig.volumes.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource volumes', () => runTests(client));
describe('resource volumes (tree shakable, base)', () => runTests(partialClient));
describe('resource volumes (tree shakable, subresource)', () => runTests(parentPartialClient));
