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
   */
  create(body: StorageCreateParams, options?: RequestOptions): APIPromise<ClusterStorage> {
    return this._client.post('/compute/clusters/storage/volumes', { body, ...options });
  }

  /**
   * Retrieve information about a specific shared volume.
   */
  retrieve(volumeID: string, options?: RequestOptions): APIPromise<ClusterStorage> {
    return this._client.get(path`/compute/clusters/storage/volumes/${volumeID}`, options);
  }

  /**
   * Update the configuration of an existing shared volume.
   */
  update(body: StorageUpdateParams, options?: RequestOptions): APIPromise<ClusterStorage> {
    return this._client.put('/compute/clusters/storage/volumes', { body, ...options });
  }

  /**
   * List all shared volumes.
   */
  list(options?: RequestOptions): APIPromise<StorageListResponse> {
    return this._client.get('/compute/clusters/storage/volumes', options);
  }

  /**
   * Delete a shared volume. Note that if this volume is attached to a cluster,
   * deleting will fail.
   */
  delete(volumeID: string, options?: RequestOptions): APIPromise<StorageDeleteResponse> {
    return this._client.delete(path`/compute/clusters/storage/volumes/${volumeID}`, options);
  }
}

export interface ClusterStorage {
  /**
   * Size of the volume in whole tebibytes (TiB).
   */
  size_tib: number;

  /**
   * Deployment status of the volume.
   */
  status: 'available' | 'bound' | 'provisioning';

  /**
   * ID of the volume.
   */
  volume_id: string;

  /**
   * Provided name of the volume.
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

export interface StorageUpdateParams {
  /**
   * Size of the volume in whole tebibytes (TiB).
   */
  size_tib?: number;

  /**
   * ID of the volume to update.
   */
  volume_id?: string;
}

export declare namespace Storage {
  export {
    type ClusterStorage as ClusterStorage,
    type StorageListResponse as StorageListResponse,
    type StorageDeleteResponse as StorageDeleteResponse,
    type StorageCreateParams as StorageCreateParams,
    type StorageUpdateParams as StorageUpdateParams,
  };
}
