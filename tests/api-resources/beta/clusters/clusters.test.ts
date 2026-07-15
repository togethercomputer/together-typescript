// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Together from 'together-ai';

const client = new Together({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

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
      acceptance_tests_params: {
        dcgm_diag_level: 'DCGM_DIAG_LEVEL_SHORT',
        dcgm_diag_skipped: true,
        enabled: true,
        gpu_burn_duration: 0,
        gpu_burn_skipped: true,
        nccl_multi_node_skipped: true,
        nccl_single_node_skipped: true,
        storage_skipped: true,
      },
      add_ons: [
        {
          add_on_type: 'add_on_type',
          name: 'name',
          config: {
            dashboard: { enabled: true },
            ingress: { enabled: true },
            torchpass: { enabled: true },
          },
        },
      ],
      auto_scale: true,
      auto_scale_max_gpus: 0,
      auto_scaled: true,
      capacity_pool_id: 'capacity_pool_id',
      cluster_config: {
        load_balancer: 'NONE',
        gpu_operator_version: 'gpu_operator_version',
        ingress: { enabled: true },
        jumphost_enabled: true,
        kubernetes_dashboard_enabled: true,
        network_operator_version: 'network_operator_version',
        observability: { enabled: true },
        slurm_startup_scripts: {
          controller_epilog: 'controller_epilog',
          controller_prolog: 'controller_prolog',
          extra_slurm_conf: 'extra_slurm_conf',
          login_init_script: 'login_init_script',
          nodeset_init_script: 'nodeset_init_script',
          worker_epilog: 'worker_epilog',
          worker_prolog: 'worker_prolog',
        },
        ssh_ca_enabled: true,
      },
      cluster_type: 'KUBERNETES',
      duration_days: 0,
      install_traefik: true,
      num_capacity_pool_gpus: 0,
      num_preemptible_gpus: 0,
      num_reserved_gpus: 0,
      oidc_config: {
        client_id: 'client_id',
        group_claim: 'group_claim',
        group_prefix: 'group_prefix',
        issuer_url: 'issuer_url',
        username_claim: 'username_claim',
        username_prefix: 'username_prefix',
        ca_cert: 'ca_cert',
      },
      project_id: 'project_id',
      reservation_end_time: '2019-12-27T18:11:19.117Z',
      reservation_start_time: '2019-12-27T18:11:19.117Z',
      shared_volume: {
        region: 'region',
        size_tib: 0,
        volume_name: 'volume_name',
        is_lifecycle_independent: true,
        project_id: 'project_id',
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

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.beta.clusters.list({ projectId: 'projectId' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Together.NotFoundError);
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
