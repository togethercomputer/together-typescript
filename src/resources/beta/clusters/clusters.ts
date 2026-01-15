// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as StorageAPI from './storage';
import {
  ClusterStorage,
  Storage,
  StorageCreateParams,
  StorageDeleteResponse,
  StorageListResponse,
  StorageUpdateParams,
} from './storage';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Clusters extends APIResource {
  storage: StorageAPI.Storage = new StorageAPI.Storage(this._client);

  /**
   * Create an Instant Cluster on Together's high-performance GPU clusters. With
   * features like on-demand scaling, long-lived resizable high-bandwidth shared
   * DC-local storage, Kubernetes and Slurm cluster flavors, a REST API, and
   * Terraform support, you can run workloads flexibly without complex infrastructure
   * management.
   */
  create(body: ClusterCreateParams, options?: RequestOptions): APIPromise<Cluster> {
    return this._client.post('/clusters', { body, ...options });
  }

  /**
   * Retrieve information about a specific GPU cluster.
   */
  retrieve(clusterID: string, options?: RequestOptions): APIPromise<Cluster> {
    return this._client.get(path`/clusters/${clusterID}`, options);
  }

  /**
   * Update the configuration of an existing GPU cluster.
   */
  update(clusterID: string, body: ClusterUpdateParams, options?: RequestOptions): APIPromise<Cluster> {
    return this._client.put(path`/clusters/${clusterID}`, { body, ...options });
  }

  /**
   * List all GPU clusters.
   */
  list(options?: RequestOptions): APIPromise<ClusterListResponse> {
    return this._client.get('/clusters', options);
  }

  /**
   * Delete a GPU cluster by cluster ID.
   */
  delete(clusterID: string, options?: RequestOptions): APIPromise<ClusterDeleteResponse> {
    return this._client.delete(path`/clusters/${clusterID}`, options);
  }

  /**
   * List regions and corresponding supported driver versions
   */
  listRegions(options?: RequestOptions): APIPromise<ClusterListRegionsResponse> {
    return this._client.get('/clusters/regions', options);
  }
}

export interface Cluster {
  cluster_id: string;

  cluster_name: string;

  cluster_type: 'KUBERNETES' | 'SLURM';

  control_plane_nodes: Array<Cluster.ControlPlaneNode>;

  driver_version: 'CUDA_12_5_555' | 'CUDA_12_6_560' | 'CUDA_12_6_565' | 'CUDA_12_8_570';

  duration_hours: number;

  gpu_type: 'H100_SXM' | 'H200_SXM' | 'RTX_6000_PCI' | 'L40_PCIE' | 'B200_SXM' | 'H100_SXM_INF';

  gpu_worker_nodes: Array<Cluster.GPUWorkerNode>;

  kube_config: string;

  num_gpus: number;

  region: string;

  /**
   * Current status of the GPU cluster.
   */
  status:
    | 'WaitingForControlPlaneNodes'
    | 'WaitingForDataPlaneNodes'
    | 'WaitingForSubnet'
    | 'WaitingForSharedVolume'
    | 'InstallingDrivers'
    | 'RunningAcceptanceTests'
    | 'Paused'
    | 'OnDemandComputePaused'
    | 'Ready'
    | 'Degraded'
    | 'Deleting';

  volumes: Array<Cluster.Volume>;
}

export namespace Cluster {
  export interface ControlPlaneNode {
    host_name: string;

    memory_gib: number;

    network: string;

    node_id: string;

    node_name: string;

    num_cpu_cores: number;

    status: string;
  }

  export interface GPUWorkerNode {
    host_name: string;

    memory_gib: number;

    networks: Array<string>;

    node_id: string;

    node_name: string;

    num_cpu_cores: number;

    num_gpus: number;

    status: string;
  }

  export interface Volume {
    size_tib: number;

    status: string;

    volume_id: string;

    volume_name: string;
  }
}

export interface ClusterListResponse {
  clusters: Array<Cluster>;
}

export interface ClusterDeleteResponse {
  cluster_id: string;
}

export interface ClusterListRegionsResponse {
  regions: Array<ClusterListRegionsResponse.Region>;
}

export namespace ClusterListRegionsResponse {
  export interface Region {
    id: string;

    availability_zones: Array<string>;

    driver_versions: Array<string>;

    name: string;
  }
}

export interface ClusterCreateParams {
  billing_type: 'RESERVED' | 'ON_DEMAND';

  /**
   * Name of the GPU cluster.
   */
  cluster_name: string;

  /**
   * NVIDIA driver version to use in the cluster.
   */
  driver_version: 'CUDA_12_5_555' | 'CUDA_12_6_560' | 'CUDA_12_6_565' | 'CUDA_12_8_570';

  /**
   * Type of GPU to use in the cluster
   */
  gpu_type: 'H100_SXM' | 'H200_SXM' | 'RTX_6000_PCI' | 'L40_PCIE' | 'B200_SXM' | 'H100_SXM_INF';

  /**
   * Number of GPUs to allocate in the cluster. This must be multiple of 8. For
   * example, 8, 16 or 24
   */
  num_gpus: number;

  /**
   * Region to create the GPU cluster in. Valid values are us-central-8 and
   * us-central-4.
   */
  region: 'us-central-8' | 'us-central-4';

  cluster_type?: 'KUBERNETES' | 'SLURM';

  /**
   * Duration in days to keep the cluster running.
   */
  duration_days?: number;

  shared_volume?: ClusterCreateParams.SharedVolume;

  volume_id?: string;
}

export namespace ClusterCreateParams {
  export interface SharedVolume {
    /**
     * Region name. Usable regions can be found from `client.clusters.list_regions()`
     */
    region: string;

    /**
     * Volume size in whole tebibytes (TiB).
     */
    size_tib: number;

    volume_name: string;
  }
}

export interface ClusterUpdateParams {
  cluster_type?: 'KUBERNETES' | 'SLURM';

  num_gpus?: number;
}

Clusters.Storage = Storage;

export declare namespace Clusters {
  export {
    type Cluster as Cluster,
    type ClusterListResponse as ClusterListResponse,
    type ClusterDeleteResponse as ClusterDeleteResponse,
    type ClusterListRegionsResponse as ClusterListRegionsResponse,
    type ClusterCreateParams as ClusterCreateParams,
    type ClusterUpdateParams as ClusterUpdateParams,
  };

  export {
    Storage as Storage,
    type ClusterStorage as ClusterStorage,
    type StorageListResponse as StorageListResponse,
    type StorageDeleteResponse as StorageDeleteResponse,
    type StorageCreateParams as StorageCreateParams,
    type StorageUpdateParams as StorageUpdateParams,
  };
}
