// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Together from 'together-ai';

const client = new Together({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource clusters', () => {
  test('create: only required params', async () => {
    const responsePromise = client.beta.clusters.create({
    billing_type: 'RESERVED',
    cluster_name: 'cluster_name',
    cuda_version: 'cuda_version',
    gpu_type: 'H100_SXM',
    num_gpus: 0,
    nvidia_driver_version: 'nvidia_driver_version',
    region: 'region',
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
    const response = await client.beta.clusters.create({
    billing_type: 'RESERVED',
    cluster_name: 'cluster_name',
    cuda_version: 'cuda_version',
    gpu_type: 'H100_SXM',
    num_gpus: 0,
    nvidia_driver_version: 'nvidia_driver_version',
    region: 'region',
    auto_scale_max_gpus: 0,
    auto_scaled: true,
    capacity_pool_id: 'capacity_pool_id',
    cluster_type: 'KUBERNETES',
    duration_days: 0,
    gpu_node_failover_enabled: true,
    install_traefik: true,
    reservation_end_time: '2019-12-27T18:11:19.117Z',
    reservation_start_time: '2019-12-27T18:11:19.117Z',
    shared_volume: {
    region: 'region',
    size_tib: 0,
    volume_name: 'volume_name',
  },
    slurm_image: 'slurm_image',
    slurm_shm_size_gib: 0,
    volume_id: 'volume_id',
  });
  });

  test('retrieve', async () => {
    const responsePromise = client.beta.clusters.retrieve('cluster_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update', async () => {
    const responsePromise = client.beta.clusters.update('cluster_id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = client.beta.clusters.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete', async () => {
    const responsePromise = client.beta.clusters.delete('cluster_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listRegions', async () => {
    const responsePromise = client.beta.clusters.listRegions();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
