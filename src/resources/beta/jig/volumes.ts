// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Volumes extends APIResource {
  /**
   * Create a new volume to preload files in deployments
   */
  create(body: VolumeCreateParams, options?: RequestOptions): APIPromise<Volume> {
    return this._client.post('/deployments/storage/volumes', { body, ...options });
  }

  /**
   * Retrieve details of a specific volume by its ID or name
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Volume> {
    return this._client.get(path`/deployments/storage/volumes/${id}`, options);
  }

  /**
   * Update an existing volume's configuration or contents
   */
  update(id: string, body: VolumeUpdateParams, options?: RequestOptions): APIPromise<Volume> {
    return this._client.patch(path`/deployments/storage/volumes/${id}`, { body, ...options });
  }

  /**
   * Retrieve all volumes in your project
   */
  list(options?: RequestOptions): APIPromise<VolumeListResponse> {
    return this._client.get('/deployments/storage/volumes', options);
  }

  /**
   * Delete an existing volume
   */
  delete(id: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.delete(path`/deployments/storage/volumes/${id}`, options);
  }
}

export interface Volume {
  /**
   * ID is the unique identifier for this volume
   */
  id?: string;

  /**
   * Content specifies the content that will be preloaded to this volume
   */
  content?: Volume.Content;

  /**
   * CreatedAt is the ISO8601 timestamp when this volume was created
   */
  created_at?: string;

  /**
   * Name is the name of the volume
   */
  name?: string;

  /**
   * The object type, which is always `volume`.
   */
  object?: 'volume';

  /**
   * Type is the volume type (e.g., "readOnly")
   */
  type?: 'readOnly';

  /**
   * UpdatedAt is the ISO8601 timestamp when this volume was last updated
   */
  updated_at?: string;
}

export namespace Volume {
  /**
   * Content specifies the content that will be preloaded to this volume
   */
  export interface Content {
    /**
     * SourcePrefix is the file path prefix for the content to be preloaded into the
     * volume
     */
    source_prefix?: string;

    /**
     * Type is the content type (currently only "files" is supported which allows
     * preloading files uploaded via Files API into the volume)
     */
    type?: 'files';
  }
}

export interface VolumeListResponse {
  /**
   * Data is the array of volume items
   */
  data?: Array<Volume>;

  /**
   * The object type, which is always `list`.
   */
  object?: 'list';
}

export type VolumeDeleteResponse = unknown;

export interface VolumeCreateParams {
  /**
   * Content specifies the content configuration for this volume
   */
  content: VolumeCreateParams.Content;

  /**
   * Name is the unique identifier for the volume within the project
   */
  name: string;

  /**
   * Type is the volume type (currently only "readOnly" is supported)
   */
  type: 'readOnly';
}

export namespace VolumeCreateParams {
  /**
   * Content specifies the content configuration for this volume
   */
  export interface Content {
    /**
     * SourcePrefix is the file path prefix for the content to be preloaded into the
     * volume
     */
    source_prefix?: string;

    /**
     * Type is the content type (currently only "files" is supported which allows
     * preloading files uploaded via Files API into the volume)
     */
    type?: 'files';
  }
}

export interface VolumeUpdateParams {
  /**
   * Content specifies the new content that will be preloaded to this volume
   */
  content?: VolumeUpdateParams.Content;

  /**
   * Name is the new unique identifier for the volume within the project
   */
  name?: string;

  /**
   * Type is the new volume type (currently only "readOnly" is supported)
   */
  type?: 'readOnly';
}

export namespace VolumeUpdateParams {
  /**
   * Content specifies the new content that will be preloaded to this volume
   */
  export interface Content {
    /**
     * SourcePrefix is the file path prefix for the content to be preloaded into the
     * volume
     */
    source_prefix?: string;

    /**
     * Type is the content type (currently only "files" is supported which allows
     * preloading files uploaded via Files API into the volume)
     */
    type?: 'files';
  }
}

export declare namespace Volumes {
  export {
    type Volume as Volume,
    type VolumeListResponse as VolumeListResponse,
    type VolumeDeleteResponse as VolumeDeleteResponse,
    type VolumeCreateParams as VolumeCreateParams,
    type VolumeUpdateParams as VolumeUpdateParams,
  };
}
