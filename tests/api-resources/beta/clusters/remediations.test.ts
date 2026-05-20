// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Together from 'together-ai';

const client = new Together({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource remediations', () => {
  test('create: only required params', async () => {
    const responsePromise = client.beta.clusters.remediations.create('instance_id', {
      cluster_id: 'cluster_id',
      mode: 'REMEDIATION_MODE_VM_ONLY',
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
    const response = await client.beta.clusters.remediations.create('instance_id', {
      cluster_id: 'cluster_id',
      mode: 'REMEDIATION_MODE_VM_ONLY',
      remediation_id: 'remediation_id',
      reason: 'reason',
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.beta.clusters.remediations.retrieve('remediation_id', {
      cluster_id: 'cluster_id',
      instance_id: 'instance_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.beta.clusters.remediations.retrieve('remediation_id', {
      cluster_id: 'cluster_id',
      instance_id: 'instance_id',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.beta.clusters.remediations.list('instance_id', {
      cluster_id: 'cluster_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.beta.clusters.remediations.list('instance_id', {
      cluster_id: 'cluster_id',
      mode: ['REMEDIATION_MODE_VM_ONLY'],
      order_by: 'order_by',
      page_size: 0,
      page_token: 'page_token',
      state: ['PENDING_APPROVAL'],
      trigger: ['REMEDIATION_TRIGGER_MANUAL'],
    });
  });

  test('approve: only required params', async () => {
    const responsePromise = client.beta.clusters.remediations.approve('remediation_id', {
      cluster_id: 'cluster_id',
      instance_id: 'instance_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('approve: required and optional params', async () => {
    const response = await client.beta.clusters.remediations.approve('remediation_id', {
      cluster_id: 'cluster_id',
      instance_id: 'instance_id',
      comment: 'comment',
    });
  });

  test('cancel: only required params', async () => {
    const responsePromise = client.beta.clusters.remediations.cancel('remediation_id', {
      cluster_id: 'cluster_id',
      instance_id: 'instance_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('cancel: required and optional params', async () => {
    const response = await client.beta.clusters.remediations.cancel('remediation_id', {
      cluster_id: 'cluster_id',
      instance_id: 'instance_id',
    });
  });

  test('reject: only required params', async () => {
    const responsePromise = client.beta.clusters.remediations.reject('remediation_id', {
      cluster_id: 'cluster_id',
      instance_id: 'instance_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('reject: required and optional params', async () => {
    const response = await client.beta.clusters.remediations.reject('remediation_id', {
      cluster_id: 'cluster_id',
      instance_id: 'instance_id',
      comment: 'comment',
    });
  });
});
