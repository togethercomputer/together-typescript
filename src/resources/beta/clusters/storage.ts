// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Storage extends APIResource {
  /**
   * Create a shared volume.
   */
  create(body: StorageCreateParams, options?: RequestOptions): APIPromise<StorageCreateResponse> {
    return this._client.post('/clusters/storages', { body, ...options });
  }

  /**
   * Get shared volume by volume Id.
   */
  retrieve(volumeID: string, options?: RequestOptions): APIPromise<ClusterStorage> {
    return this._client.get(path`/clusters/storages/${volumeID}`, options);
  }

  /**
   * Update a shared volume.
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
   * Delete shared volume by volume id.
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
