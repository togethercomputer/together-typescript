// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as StorageAPI from '../beta/clusters/storage';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Storages extends APIResource {
  /**
   * Create a shared volume.
   *
   * @example
   * ```ts
   * const response =
   *   await client.endpoints.storages.createSharedVolume({
   *     region: 'region',
   *     size_tib: 0,
   *     volume_name: 'volume_name',
   *   });
   * ```
   */
  createSharedVolume(
    body: StorageCreateSharedVolumeParams,
    options?: RequestOptions,
  ): APIPromise<StorageCreateSharedVolumeResponse> {
    return this._client.post('/clusters/storages', { body, ...options });
  }

  /**
   * Delete shared volume by volume id.
   *
   * @example
   * ```ts
   * const response =
   *   await client.endpoints.storages.deleteSharedVolume(
   *     'volume_id',
   *   );
   * ```
   */
  deleteSharedVolume(
    volumeID: string,
    options?: RequestOptions,
  ): APIPromise<StorageDeleteSharedVolumeResponse> {
    return this._client.delete(path`/clusters/storages/${volumeID}`, options);
  }

  /**
   * List all shared volumes.
   *
   * @example
   * ```ts
   * const response =
   *   await client.endpoints.storages.listSharedVolumes();
   * ```
   */
  listSharedVolumes(options?: RequestOptions): APIPromise<StorageListSharedVolumesResponse> {
    return this._client.get('/clusters/storages', options);
  }

  /**
   * Get shared volume by volume Id.
   *
   * @example
   * ```ts
   * const clusterStorage =
   *   await client.endpoints.storages.retrieveSharedVolume(
   *     'volume_id',
   *   );
   * ```
   */
  retrieveSharedVolume(volumeID: string, options?: RequestOptions): APIPromise<StorageAPI.ClusterStorage> {
    return this._client.get(path`/clusters/storages/${volumeID}`, options);
  }

  /**
   * Update a shared volume.
   *
   * @example
   * ```ts
   * const clusterStorage =
   *   await client.endpoints.storages.updateSharedVolume();
   * ```
   */
  updateSharedVolume(
    body: StorageUpdateSharedVolumeParams,
    options?: RequestOptions,
  ): APIPromise<StorageAPI.ClusterStorage> {
    return this._client.put('/clusters/storages', { body, ...options });
  }
}

export interface StorageCreateSharedVolumeResponse {
  volume_id: string;
}

export interface StorageDeleteSharedVolumeResponse {
  success: boolean;
}

export interface StorageListSharedVolumesResponse {
  volumes: Array<StorageAPI.ClusterStorage>;
}

export interface StorageCreateSharedVolumeParams {
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

export interface StorageUpdateSharedVolumeParams {
  size_tib?: number;

  volume_id?: string;
}

export declare namespace Storages {
  export {
    type StorageCreateSharedVolumeResponse as StorageCreateSharedVolumeResponse,
    type StorageDeleteSharedVolumeResponse as StorageDeleteSharedVolumeResponse,
    type StorageListSharedVolumesResponse as StorageListSharedVolumesResponse,
    type StorageCreateSharedVolumeParams as StorageCreateSharedVolumeParams,
    type StorageUpdateSharedVolumeParams as StorageUpdateSharedVolumeParams,
  };
}
