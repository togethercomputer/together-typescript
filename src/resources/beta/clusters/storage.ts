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
  create(body: StorageCreateParams, options?: RequestOptions): APIPromise<StorageCreateResponse> {
    return this._client.post('/clusters/storages', { body, ...options });
  }

  /**
   * Retrieve information about a specific shared volume.
   */
  retrieve(volumeID: string, options?: RequestOptions): APIPromise<ClusterStorage> {
    return this._client.get(path`/clusters/storages/${volumeID}`, options);
  }

  /**
   * Update the configuration of an existing shared volume.
   */
  update(body: StorageUpdateParams, options?: RequestOptions): APIPromise<ClusterStorage> {
    return this._client.put('/clusters/storages', { body, ...options });
  }

  /**
   * List all shared volumes.
   */
  list(options?: RequestOptions): APIPromise<StorageListResponse> {
    return this._client.get('/clusters/storages', options);
  }

  /**
   * Delete a shared volume. Note that if this volume is attached to a cluster,
   * deleting will fail.
   */
  delete(volumeID: string, options?: RequestOptions): APIPromise<StorageDeleteResponse> {
    return this._client.delete(path`/clusters/storages/${volumeID}`, options);
  }
}

export interface ClusterStorage {
  size_tib: number;

  volume_id: string;

  volume_name: string;
}

export interface StorageCreateResponse {
  volume_id: string;
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

  volume_name: string;
}

export interface StorageUpdateParams {
  size_tib?: number;

  volume_id?: string;
}

export declare namespace Storage {
  export {
    type ClusterStorage as ClusterStorage,
    type StorageCreateResponse as StorageCreateResponse,
    type StorageListResponse as StorageListResponse,
    type StorageDeleteResponse as StorageDeleteResponse,
    type StorageCreateParams as StorageCreateParams,
    type StorageUpdateParams as StorageUpdateParams,
  };
}
