// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Storage extends APIResource {
  /**
   * Instant Clusters supports long-lived, resizable in-DC shared storage with user
   * data persistence. You can dynamically create and attach volumes to your cluster
   * at cluster creation time, and resize as your data grows. All shared storage is
   * backed by multi-NIC bare metal paths, ensuring high-throughput and low-latency
   * performance for shared storage.
   *
   * @example
   * ```ts
   * const clusterStorage =
   *   await client.beta.clusters.storage.create({
   *     region: 'region',
   *     size_tib: 0,
   *     volume_name: 'volume_name',
   *   });
   * ```
   */
  create(body: StorageCreateParams, options?: RequestOptions): APIPromise<ClusterStorage> {
    return this._client.post('/compute/clusters/storage/volumes', { body, ...options });
  }

  /**
   * Retrieve information about a specific shared volume.
   *
   * @example
   * ```ts
   * const clusterStorage =
   *   await client.beta.clusters.storage.retrieve('volume_id');
   * ```
   */
  retrieve(volumeID: string, options?: RequestOptions): APIPromise<ClusterStorage> {
    return this._client.get(path`/compute/clusters/storage/volumes/${volumeID}`, options);
  }

  /**
   * Update the configuration of an existing shared volume.
   *
   * @example
   * ```ts
   * const clusterStorage =
   *   await client.beta.clusters.storage.update({
   *     volume_id: 'volume_id',
   *   });
   * ```
   */
  update(body: StorageUpdateParams, options?: RequestOptions): APIPromise<ClusterStorage> {
    return this._client.put('/compute/clusters/storage/volumes', { body, ...options });
  }

  /**
   * List all shared volumes.
   *
   * @example
   * ```ts
   * const storages = await client.beta.clusters.storage.list();
   * ```
   */
  list(
    query: StorageListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StorageListResponse> {
    return this._client.get('/compute/clusters/storage/volumes', { query, ...options });
  }

  /**
   * Delete a shared volume. Note that if this volume is attached to a cluster,
   * deleting will fail.
   *
   * @example
   * ```ts
   * const storage = await client.beta.clusters.storage.delete(
   *   'volume_id',
   * );
   * ```
   */
  delete(volumeID: string, options?: RequestOptions): APIPromise<StorageDeleteResponse> {
    return this._client.delete(path`/compute/clusters/storage/volumes/${volumeID}`, options);
  }
}

export interface ClusterStorage {
  /**
   * Size of the volume in TiB.
   */
  size_tib: number;

  /**
   * Current status of the shared volume.
   */
  status:
    | 'scheduled'
    | 'available'
    | 'bound'
    | 'provisioning'
    | 'deleting'
    | 'failed'
    | 'access_revoked'
    | 'unknown';

  /**
   * ID of the volume.
   */
  volume_id: string;

  /**
   * User provided name of the volume.
   */
  volume_name: string;
}

export interface StorageListResponse {
  volumes: Array<ClusterStorage>;
}

export interface StorageDeleteResponse {
  success: boolean;
}

export interface StorageCreateParams {
  /**
   * Region name. Usable regions can be found from `clusters.list_regions()`
   */
  region: string;

  /**
   * Volume size in whole tebibytes (TiB).
   */
  size_tib: number;

  /**
   * User provided name of the volume.
   */
  volume_name: string;

  /**
   * When true, the shared volume is not deleted when the cluster is decommissioned.
   */
  is_lifecycle_independent?: boolean;

  /**
   * Project ID that will own the volume. When omitted, the caller's default project
   * is used.
   */
  project_id?: string;
}

export interface StorageUpdateParams {
  /**
   * ID of the volume.
   */
  volume_id: string;

  /**
   * Size of the volume in TiB.
   */
  size_tib?: number;
}

export interface StorageListParams {
  /**
   * Optional UMS project ID to filter volumes by. When set, only volumes belonging
   * to this project are returned. The caller must be a member of the project;
   * otherwise the result set will be empty.
   */
  project_id?: string;
}

export declare namespace Storage {
  export {
    type ClusterStorage as ClusterStorage,
    type StorageListResponse as StorageListResponse,
    type StorageDeleteResponse as StorageDeleteResponse,
    type StorageCreateParams as StorageCreateParams,
    type StorageUpdateParams as StorageUpdateParams,
    type StorageListParams as StorageListParams,
  };
}
