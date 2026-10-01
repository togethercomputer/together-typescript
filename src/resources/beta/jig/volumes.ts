// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as VolumesAPI from './volumes';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Volumes extends APIResource {
  /**
   * Create a new volume to preload files in deployments
   *
   * @example
   * ```ts
   * const volume = await client.beta.jig.volumes.create({
   *   content: {},
   *   name: 'x',
   *   type: 'readOnly',
   * });
   * ```
   */
  create(body: VolumeCreateParams, options?: RequestOptions): APIPromise<Volume> {
    return this._client.post('/deployments/storage/volumes', { body, ...options });
  }

  /**
   * Retrieve details of a specific volume by its ID or name
   *
   * @example
   * ```ts
   * const volume = await client.beta.jig.volumes.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: VolumeRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Volume> {
    return this._client.get(path`/deployments/storage/volumes/${id}`, { query, ...options });
  }

  /**
   * Update an existing volume's configuration or contents
   *
   * @example
   * ```ts
   * const volume = await client.beta.jig.volumes.update('id');
   * ```
   */
  update(id: string, body: VolumeUpdateParams, options?: RequestOptions): APIPromise<Volume> {
    return this._client.patch(path`/deployments/storage/volumes/${id}`, { body, ...options });
  }

  /**
   * Retrieve all volumes in your project
   *
   * @example
   * ```ts
   * const volumes = await client.beta.jig.volumes.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<VolumeListResponse> {
    return this._client.get('/deployments/storage/volumes', options);
  }

  /**
   * Delete an existing volume
   *
   * @example
   * ```ts
   * const volume = await client.beta.jig.volumes.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.delete(path`/deployments/storage/volumes/${id}`, options);
  }
}

/**
 * S3 source configuration for volume sync.
 */
export interface S3Origin {
  /**
   * IAM role ARN Together assumes to read the S3 bucket or prefix.
   */
  role_arn: string;

  /**
   * S3 bucket or prefix to copy into the volume.
   */
  uri: string;
}

export interface Volume {
  /**
   * ID is the unique identifier for this volume
   */
  id?: string;

  /**
   * Content currently available on a volume version.
   */
  content?: Volume.Content;

  /**
   * CreatedAt is the ISO8601 timestamp when this volume was created
   */
  created_at?: string;

  /**
   * CurrentVersion is the current version number of this volume
   */
  current_version?: number;

  /**
   * MountedBy is the list of deployment IDs currently mounting current volume
   * version
   */
  mounted_by?: Array<string>;

  /**
   * Name is the name of the volume
   */
  name?: string;

  /**
   * Object is the type identifier for this response (always "volume")
   */
  object?: string;

  /**
   * Status of the current volume version.
   */
  status?: VolumeStatus;

  /**
   * Message explaining why the current volume version failed, when applicable.
   */
  status_message?: string;

  type?: 'readOnly';

  /**
   * UpdatedAt is the ISO8601 timestamp when this volume was last updated
   */
  updated_at?: string;

  /**
   * VersionHistory contains previous versions of this volume, keyed by version
   * number
   */
  version_history?: { [key: string]: Volume.VersionHistory };
}

export namespace Volume {
  /**
   * Content currently available on a volume version.
   */
  export interface Content {
    /**
     * Files is the list of files to preload into the volume, if the volume content
     * type is "files".
     */
    files?: Array<Content.File>;

    /**
     * External source Together copied into this volume version.
     */
    origin?: VolumesAPI.VolumeOrigin;

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

  export namespace Content {
    export interface File {
      /**
       * LastModified is the timestamp when the file was last modified
       */
      last_modified?: string;

      /**
       * Name is the filename including extension (e.g., "model_weights.bin")
       */
      name?: string;

      /**
       * Size is the file size in bytes
       */
      size?: number;
    }
  }

  /**
   * Metadata for a previous volume version.
   */
  export interface VersionHistory {
    /**
     * Content configuration used to create this version.
     */
    content?: VersionHistory.Content;

    /**
     * Deployment IDs currently mounting this version.
     */
    mounted_by?: Array<string>;

    /**
     * Status of this volume version.
     */
    status?: VolumesAPI.VolumeStatus;

    /**
     * Message explaining why this volume version failed, when applicable.
     */
    status_message?: string;

    /**
     * Numeric version identifier for this volume content.
     */
    version?: number;
  }

  export namespace VersionHistory {
    /**
     * Content configuration used to create this version.
     */
    export interface Content {
      /**
       * External source Together copies into a new volume version; mutually exclusive
       * with source_prefix.
       */
      origin?: VolumesAPI.VolumeOrigin;

      /**
       * SourcePrefix is the file path prefix for the content to be preloaded into the
       * volume. Mutually exclusive with Origin
       */
      source_prefix?: string;

      /**
       * Type is the content type (currently only "files" is supported which allows
       * preloading files uploaded via Files API into the volume)
       */
      type?: 'files';
    }
  }
}

/**
 * External source Together copies into a new volume version.
 */
export interface VolumeOrigin {
  /**
   * S3 bucket or prefix source for the volume sync.
   */
  s3: S3Origin;
}

/**
 * Status of a volume version. Only ready versions can be mounted.
 */
export type VolumeStatus = 'ready' | 'pending' | 'syncing' | 'failed';

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
   * Content specifies the new content to preload to this volume.
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
   * Content specifies the new content to preload to this volume.
   */
  export interface Content {
    /**
     * External source Together copies into a new volume version; mutually exclusive
     * with source_prefix.
     */
    origin?: VolumesAPI.VolumeOrigin;

    /**
     * SourcePrefix is the file path prefix for the content to be preloaded into the
     * volume. Mutually exclusive with Origin
     */
    source_prefix?: string;

    /**
     * Type is the content type (currently only "files" is supported which allows
     * preloading files uploaded via Files API into the volume)
     */
    type?: 'files';
  }
}

export interface VolumeRetrieveParams {
  /**
   * Volume version to describe (defaults to current version)
   */
  version?: number;
}

export interface VolumeUpdateParams {
  /**
   * Content specifies the new content to preload to this volume.
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
   * Content specifies the new content to preload to this volume.
   */
  export interface Content {
    /**
     * External source Together copies into a new volume version; mutually exclusive
     * with source_prefix.
     */
    origin?: VolumesAPI.VolumeOrigin;

    /**
     * SourcePrefix is the file path prefix for the content to be preloaded into the
     * volume. Mutually exclusive with Origin
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
    type S3Origin as S3Origin,
    type Volume as Volume,
    type VolumeOrigin as VolumeOrigin,
    type VolumeStatus as VolumeStatus,
    type VolumeListResponse as VolumeListResponse,
    type VolumeDeleteResponse as VolumeDeleteResponse,
    type VolumeCreateParams as VolumeCreateParams,
    type VolumeRetrieveParams as VolumeRetrieveParams,
    type VolumeUpdateParams as VolumeUpdateParams,
  };
}
