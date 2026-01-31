// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Together from 'together-ai';

const client = new Together({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource jig', () => {
  test('retrieve', async () => {
    const responsePromise = client.beta.jig.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update', async () => {
    const responsePromise = client.beta.jig.update('id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = client.beta.jig.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('deploy: only required params', async () => {
    const responsePromise = client.beta.jig.deploy({
      gpu_type: 'h100-80gb',
      image: 'image',
      name: 'x',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('deploy: required and optional params', async () => {
    const response = await client.beta.jig.deploy({
      gpu_type: 'h100-80gb',
      image: 'image',
      name: 'x',
      args: ['string'],
      autoscaling: { foo: 'string' },
      command: ['string'],
      cpu: 0.1,
      description: 'description',
      environment_variables: [
        {
          name: 'name',
          value: 'value',
          value_from_secret: 'value_from_secret',
        },
      ],
      gpu_count: 0,
      health_check_path: 'health_check_path',
      max_replicas: 0,
      memory: 0.1,
      min_replicas: 0,
      port: 0,
      storage: 0,
      termination_grace_period_seconds: 0,
      volumes: [{ mount_path: 'mount_path', name: 'name' }],
    });
  });

  test('destroy', async () => {
    const responsePromise = client.beta.jig.destroy('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveLogs', async () => {
    const responsePromise = client.beta.jig.retrieveLogs('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveLogs: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.beta.jig.retrieveLogs('id', { replica_id: 'replica_id' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Together.NotFoundError);
  });
});
