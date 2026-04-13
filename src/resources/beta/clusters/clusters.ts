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
    return this._client.post('/compute/clusters', { body, ...options });
  }

  /**
   * Retrieve information about a specific GPU cluster.
   */
  retrieve(clusterID: string, options?: RequestOptions): APIPromise<Cluster> {
    return this._client.get(path`/compute/clusters/${clusterID}`, options);
  }

  /**
   * Update the configuration of an existing GPU cluster.
   */
  update(clusterID: string, body: ClusterUpdateParams, options?: RequestOptions): APIPromise<Cluster> {
    return this._client.put(path`/compute/clusters/${clusterID}`, { body, ...options });
  }

  /**
   * List all GPU clusters.
   */
  list(options?: RequestOptions): APIPromise<ClusterListResponse> {
    return this._client.get('/compute/clusters', options);
  }

  /**
   * Delete a GPU cluster by cluster ID.
   */
  delete(clusterID: string, options?: RequestOptions): APIPromise<ClusterDeleteResponse> {
    return this._client.delete(path`/compute/clusters/${clusterID}`, options);
  }

  /**
   * List regions and corresponding supported driver versions
   */
  listRegions(options?: RequestOptions): APIPromise<ClusterListRegionsResponse> {
    return this._client.get('/compute/regions', options);
  }
}

export interface Cluster {
  cluster_id: string;

  cluster_name: string;

  /**
   * Type of cluster.
   */
  cluster_type: 'KUBERNETES' | 'SLURM';

  control_plane_nodes: Array<Cluster.ControlPlaneNode>;

  cuda_version: string;

  gpu_type: 'H100_SXM' | 'H200_SXM' | 'RTX_6000_PCI' | 'L40_PCIE' | 'B200_SXM' | 'H100_SXM_INF';

  gpu_worker_nodes: Array<Cluster.GPUWorkerNode>;

  kube_config: string;

  num_gpus: number;

  nvidia_driver_version: string;

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

  capacity_pool_id?: string;

  created_at?: string;

  duration_hours?: number;

  install_traefik?: boolean;

  reservation_end_time?: string;

  reservation_start_time?: string;

  slurm_shm_size_gib?: number;
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

    instance_id?: string;
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
    /**
     * List of supported identifiable cuda/nvidia driver versions pairs available in
     * the region.
     */
    driver_versions: Array<Region.DriverVersion>;

    /**
     * Identifiable name of the region.
     */
    name: string;

    /**
     * List of supported identifiable gpus available in the region.
     */
    supported_instance_types: Array<string>;
  }

  export namespace Region {
    /**
     * CUDA/NVIDIA driver versions pair available in the region to use in the create
     * cluster request.
     */
    export interface DriverVersion {
      /**
       * CUDA driver version.
       */
      cuda_driver_version: string;

      /**
       * NVIDIA driver version.
       */
      nvidia_driver_version: string;
    }
  }
}

export interface ClusterCreateParams {
  /**
   * RESERVED billing types allow you to specify the duration of the cluster
   * reservation via the duration_days field. ON_DEMAND billing types will give you
   * ownership of the cluster until you delete it.
   */
  billing_type: 'RESERVED' | 'ON_DEMAND' | 'SCHEDULED_CAPACITY';

  /**
   * Name of the GPU cluster.
   */
  cluster_name: string;

  /**
   * CUDA version for this cluster. For example, 12.5
   */
  cuda_version: string;

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
   * Nvidia driver version for this cluster. For example, 550. Only some combination
   * of cuda_version and nvidia_driver_version are supported.
   */
  nvidia_driver_version: string;

  /**
   * Region to create the GPU cluster in. Usable regions can be found from
   * `client.clusters.list_regions()`
   */
  region: string;

  /**
   * Maximum number of GPUs to which the cluster can be auto-scaled up. This field is
   * required if auto_scaled is true.
   */
  auto_scale_max_gpus?: number;

  /**
   * Whether GPU cluster should be auto-scaled based on the workload. By default, it
   * is not auto-scaled.
   */
  auto_scaled?: boolean;

  /**
   * ID of the capacity pool to use for the cluster. This field is optional and only
   * applicable if the cluster is created from a capacity pool.
   */
  capacity_pool_id?: string;

  /**
   * Type of cluster to create.
   */
  cluster_type?: 'KUBERNETES' | 'SLURM';

  /**
   * Duration in days to keep the cluster running.
   */
  duration_days?: number;

  /**
   * Whether automated GPU node failover should be enabled for this cluster. By
   * default, it is disabled.
   */
  gpu_node_failover_enabled?: boolean;

  /**
   * Whether to install Traefik ingress controller in the cluster. This field is only
   * applicable for Kubernetes clusters and is false by default.
   */
  install_traefik?: boolean;

  /**
   * Reservation end time of the cluster. This field is required for SCHEDULED
   * billing to specify the reservation end time for the cluster.
   */
  reservation_end_time?: string;

  /**
   * Reservation start time of the cluster. This field is required for SCHEDULED
   * billing to specify the reservation start time for the cluster. If not provided,
   * the cluster will be provisioned immediately.
   */
  reservation_start_time?: string;

  /**
   * Inline configuration to create a shared volume with the cluster creation.
   */
  shared_volume?: ClusterCreateParams.SharedVolume;

  /**
   * Custom Slurm image for Slurm clusters.
   */
  slurm_image?: string;

  /**
   * Shared memory size in GiB for Slurm cluster. This field is required if
   * cluster_type is SLURM.
   */
  slurm_shm_size_gib?: number;

  /**
   * ID of an existing volume to use with the cluster creation.
   */
  volume_id?: string;
}

export namespace ClusterCreateParams {
  /**
   * Inline configuration to create a shared volume with the cluster creation.
   */
  export interface SharedVolume {
    /**
     * Region name. Usable regions can be found from `client.clusters.list_regions()`
     */
    region: string;

    /**
     * Volume size in whole tebibytes (TiB).
     */
    size_tib: number;

    /**
     * Customizable name of the volume to create.
     */
    volume_name: string;
  }
}

export interface ClusterUpdateParams {
  /**
   * Type of cluster to update.
   */
  cluster_type?: 'KUBERNETES' | 'SLURM';

  /**
   * Number of GPUs to allocate in the cluster. This must be multiple of 8. For
   * example, 8, 16 or 24
   */
  num_gpus?: number;

  /**
   * Timestamp at which the cluster should be decommissioned. Only accepted for
   * prepaid clusters.
   */
  reservation_end_time?: string;
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
