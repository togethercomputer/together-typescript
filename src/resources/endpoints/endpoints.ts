// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as StoragesAPI from './storages';
import {
  StorageCreateSharedVolumeParams,
  StorageCreateSharedVolumeResponse,
  StorageDeleteSharedVolumeResponse,
  StorageListSharedVolumesResponse,
  StorageUpdateSharedVolumeParams,
  Storages,
} from './storages';
import * as ClustersAPI from '../beta/clusters/clusters';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Endpoints extends APIResource {
  storages: StoragesAPI.Storages = new StoragesAPI.Storages(this._client);

  /**
   * Creates a new dedicated endpoint for serving models. The endpoint will
   * automatically start after creation. You can deploy any supported model on
   * hardware configurations that meet the model's requirements.
   *
   * @example
   * ```ts
   * const dedicatedEndpoint = await client.endpoints.create({
   *   autoscaling: { max_replicas: 5, min_replicas: 2 },
   *   hardware: '1x_nvidia_a100_80gb_sxm',
   *   model: 'meta-llama/Llama-3-8b-chat-hf',
   * });
   * ```
   */
  create(body: EndpointCreateParams, options?: RequestOptions): APIPromise<DedicatedEndpoint> {
    return this._client.post('/endpoints', { body, ...options });
  }

  /**
   * Retrieves details about a specific endpoint, including its current state,
   * configuration, and scaling settings.
   *
   * @example
   * ```ts
   * const dedicatedEndpoint = await client.endpoints.retrieve(
   *   'endpoint-d23901de-ef8f-44bf-b3e7-de9c1ca8f2d7',
   * );
   * ```
   */
  retrieve(endpointID: string, options?: RequestOptions): APIPromise<DedicatedEndpoint> {
    return this._client.get(path`/endpoints/${endpointID}`, options);
  }

  /**
   * Updates an existing endpoint's configuration. You can modify the display name,
   * autoscaling settings, or change the endpoint's state (start/stop).
   *
   * @example
   * ```ts
   * const dedicatedEndpoint = await client.endpoints.update(
   *   'endpoint-d23901de-ef8f-44bf-b3e7-de9c1ca8f2d7',
   * );
   * ```
   */
  update(
    endpointID: string,
    body: EndpointUpdateParams,
    options?: RequestOptions,
  ): APIPromise<DedicatedEndpoint> {
    return this._client.patch(path`/endpoints/${endpointID}`, { body, ...options });
  }

  /**
   * Returns a list of all endpoints associated with your account. You can filter the
   * results by type (dedicated or serverless).
   *
   * @example
   * ```ts
   * const endpoints = await client.endpoints.list();
   * ```
   */
  list(
    query: EndpointListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EndpointListResponse> {
    return this._client.get('/endpoints', { query, ...options });
  }

  /**
   * Permanently deletes an endpoint. This action cannot be undone.
   *
   * @example
   * ```ts
   * await client.endpoints.delete(
   *   'endpoint-d23901de-ef8f-44bf-b3e7-de9c1ca8f2d7',
   * );
   * ```
   */
  delete(endpointID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/endpoints/${endpointID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Create GPU Cluster
   *
   * @example
   * ```ts
   * const response = await client.endpoints.createCluster({
   *   billing_type: 'RESERVED',
   *   cluster_name: 'cluster_name',
   *   driver_version: 'CUDA_12_5_555',
   *   duration_days: 0,
   *   gpu_type: 'H100_SXM',
   *   num_gpus: 0,
   *   region: 'us-central-8',
   * });
   * ```
   */
  createCluster(
    body: EndpointCreateClusterParams,
    options?: RequestOptions,
  ): APIPromise<EndpointCreateClusterResponse> {
    return this._client.post('/clusters', { body, ...options });
  }

  /**
   * Delete GPU cluster by cluster ID
   *
   * @example
   * ```ts
   * const response = await client.endpoints.deleteCluster(
   *   'cluster_id',
   * );
   * ```
   */
  deleteCluster(clusterID: string, options?: RequestOptions): APIPromise<EndpointDeleteClusterResponse> {
    return this._client.delete(path`/clusters/${clusterID}`, options);
  }

  /**
   * List all available availability zones.
   *
   * @example
   * ```ts
   * const response = await client.endpoints.listAvzones();
   * ```
   */
  listAvzones(options?: RequestOptions): APIPromise<EndpointListAvzonesResponse> {
    return this._client.get('/clusters/availability-zones', options);
  }

  /**
   * List all GPU clusters.
   *
   * @example
   * ```ts
   * const response = await client.endpoints.listClusters();
   * ```
   */
  listClusters(options?: RequestOptions): APIPromise<EndpointListClustersResponse> {
    return this._client.get('/clusters', options);
  }

  /**
   * List regions and corresponding supported driver versions
   *
   * @example
   * ```ts
   * const response = await client.endpoints.listRegions();
   * ```
   */
  listRegions(options?: RequestOptions): APIPromise<EndpointListRegionsResponse> {
    return this._client.get('/clusters/regions', options);
  }

  /**
   * Get GPU cluster by cluster ID
   *
   * @example
   * ```ts
   * const cluster = await client.endpoints.retrieveCluster(
   *   'cluster_id',
   * );
   * ```
   */
  retrieveCluster(clusterID: string, options?: RequestOptions): APIPromise<ClustersAPI.Cluster> {
    return this._client.get(path`/clusters/${clusterID}`, options);
  }

  /**
   * Update a GPU Cluster.
   *
   * @example
   * ```ts
   * const response = await client.endpoints.updateCluster(
   *   'cluster_id',
   * );
   * ```
   */
  updateCluster(
    clusterID: string,
    body: EndpointUpdateClusterParams,
    options?: RequestOptions,
  ): APIPromise<EndpointUpdateClusterResponse> {
    return this._client.put(path`/clusters/${clusterID}`, { body, ...options });
  }
}

/**
 * Configuration for automatic scaling of replicas based on demand.
 */
export interface Autoscaling {
  /**
   * The maximum number of replicas to scale up to under load
   */
  max_replicas: number;

  /**
   * The minimum number of replicas to maintain, even when there is no load
   */
  min_replicas: number;
}

/**
 * Details about a dedicated endpoint deployment
 */
export interface DedicatedEndpoint {
  /**
   * Unique identifier for the endpoint
   */
  id: string;

  /**
   * Configuration for automatic scaling of the endpoint
   */
  autoscaling: Autoscaling;

  /**
   * Timestamp when the endpoint was created
   */
  created_at: string;

  /**
   * Human-readable name for the endpoint
   */
  display_name: string;

  /**
   * The hardware configuration used for this endpoint
   */
  hardware: string;

  /**
   * The model deployed on this endpoint
   */
  model: string;

  /**
   * System name for the endpoint
   */
  name: string;

  /**
   * The type of object
   */
  object: 'endpoint';

  /**
   * The owner of this endpoint
   */
  owner: string;

  /**
   * Current state of the endpoint
   */
  state: 'PENDING' | 'STARTING' | 'STARTED' | 'STOPPING' | 'STOPPED' | 'ERROR';

  /**
   * The type of endpoint
   */
  type: 'dedicated';
}

export interface EndpointListResponse {
  data: Array<EndpointListResponse.Data>;

  object: 'list';
}

export namespace EndpointListResponse {
  /**
   * Details about an endpoint when listed via the list endpoint
   */
  export interface Data {
    /**
     * Unique identifier for the endpoint
     */
    id: string;

    /**
     * Timestamp when the endpoint was created
     */
    created_at: string;

    /**
     * The model deployed on this endpoint
     */
    model: string;

    /**
     * System name for the endpoint
     */
    name: string;

    /**
     * The type of object
     */
    object: 'endpoint';

    /**
     * The owner of this endpoint
     */
    owner: string;

    /**
     * Current state of the endpoint
     */
    state: 'PENDING' | 'STARTING' | 'STARTED' | 'STOPPING' | 'STOPPED' | 'ERROR';

    /**
     * The type of endpoint
     */
    type: 'serverless' | 'dedicated';
  }
}

export interface EndpointCreateClusterResponse {
  cluster_id: string;
}

export interface EndpointDeleteClusterResponse {
  cluster_id: string;
}

/**
 * List of unique availability zones
 */
export interface EndpointListAvzonesResponse {
  avzones: Array<string>;
}

export interface EndpointListClustersResponse {
  clusters: Array<ClustersAPI.Cluster>;
}

export interface EndpointListRegionsResponse {
  regions: Array<EndpointListRegionsResponse.Region>;
}

export namespace EndpointListRegionsResponse {
  export interface Region {
    id: string;

    availability_zones: Array<string>;

    driver_versions: Array<string>;

    name: string;
  }
}

export interface EndpointUpdateClusterResponse {
  cluster_id: string;
}

export interface EndpointCreateParams {
  /**
   * Configuration for automatic scaling of the endpoint
   */
  autoscaling: Autoscaling;

  /**
   * The hardware configuration to use for this endpoint
   */
  hardware: string;

  /**
   * The model to deploy on this endpoint
   */
  model: string;

  /**
   * Create the endpoint in a specified availability zone (e.g., us-central-4b)
   */
  availability_zone?: string;

  /**
   * Whether to disable the prompt cache for this endpoint
   */
  disable_prompt_cache?: boolean;

  /**
   * Whether to disable speculative decoding for this endpoint
   */
  disable_speculative_decoding?: boolean;

  /**
   * A human-readable name for the endpoint
   */
  display_name?: string;

  /**
   * The number of minutes of inactivity after which the endpoint will be
   * automatically stopped. Set to null, omit or set to 0 to disable automatic
   * timeout.
   */
  inactive_timeout?: number | null;

  /**
   * The desired state of the endpoint
   */
  state?: 'STARTED' | 'STOPPED';
}

export interface EndpointUpdateParams {
  /**
   * New autoscaling configuration for the endpoint
   */
  autoscaling?: Autoscaling;

  /**
   * A human-readable name for the endpoint
   */
  display_name?: string;

  /**
   * The number of minutes of inactivity after which the endpoint will be
   * automatically stopped. Set to 0 to disable automatic timeout.
   */
  inactive_timeout?: number | null;

  /**
   * The desired state of the endpoint
   */
  state?: 'STARTED' | 'STOPPED';
}

export interface EndpointListParams {
  /**
   * If true, return only endpoints owned by the caller
   */
  mine?: boolean;

  /**
   * Filter endpoints by type
   */
  type?: 'dedicated' | 'serverless';

  /**
   * Filter endpoints by usage type
   */
  usage_type?: 'on-demand' | 'reserved';
}

export interface EndpointCreateClusterParams {
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
   * Duration in days to keep the cluster running.
   */
  duration_days: number;

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

  shared_volume?: EndpointCreateClusterParams.SharedVolume;

  volume_id?: string;
}

export namespace EndpointCreateClusterParams {
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

export interface EndpointUpdateClusterParams {
  cluster_type?: 'KUBERNETES' | 'SLURM';

  num_gpus?: number;
}

Endpoints.Storages = Storages;

export declare namespace Endpoints {
  export {
    type Autoscaling as Autoscaling,
    type DedicatedEndpoint as DedicatedEndpoint,
    type EndpointListResponse as EndpointListResponse,
    type EndpointCreateClusterResponse as EndpointCreateClusterResponse,
    type EndpointDeleteClusterResponse as EndpointDeleteClusterResponse,
    type EndpointListAvzonesResponse as EndpointListAvzonesResponse,
    type EndpointListClustersResponse as EndpointListClustersResponse,
    type EndpointListRegionsResponse as EndpointListRegionsResponse,
    type EndpointUpdateClusterResponse as EndpointUpdateClusterResponse,
    type EndpointCreateParams as EndpointCreateParams,
    type EndpointUpdateParams as EndpointUpdateParams,
    type EndpointListParams as EndpointListParams,
    type EndpointCreateClusterParams as EndpointCreateClusterParams,
    type EndpointUpdateClusterParams as EndpointUpdateClusterParams,
  };

  export {
    Storages as Storages,
    type StorageCreateSharedVolumeResponse as StorageCreateSharedVolumeResponse,
    type StorageDeleteSharedVolumeResponse as StorageDeleteSharedVolumeResponse,
    type StorageListSharedVolumesResponse as StorageListSharedVolumesResponse,
    type StorageCreateSharedVolumeParams as StorageCreateSharedVolumeParams,
    type StorageUpdateSharedVolumeParams as StorageUpdateSharedVolumeParams,
  };
}
