// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Checkpoints extends APIResource {
  /**
   * Returns presigned URLs for downloading a checkpoint's model files. Only
   * inference checkpoints support downloading.
   *
   * @example
   * ```ts
   * const checkpointDownloadResponse =
   *   await client.beta.rl.checkpoints.download('id', {
   *     variant: 'CHECKPOINT_VARIANT_UNSPECIFIED',
   *   });
   * ```
   */
  download(
    id: string,
    query: CheckpointDownloadParams,
    options?: RequestOptions,
  ): APIPromise<CheckpointDownloadResponse> {
    return this._client.get(path`/rl/checkpoints/${id}/download`, { query, ...options });
  }
}

/**
 * Presigned download URLs for a checkpoint's files
 */
export interface CheckpointDownloadResponse {
  /**
   * List of files with presigned download URLs
   */
  data: Array<CheckpointFile>;
}

/**
 * A downloadable file within a checkpoint
 */
export interface CheckpointFile {
  /**
   * Name of the file
   */
  filename: string;

  /**
   * File size in bytes
   */
  size: string | number;

  /**
   * Presigned URL for downloading the file
   */
  url: string;
}

/**
 * Checkpoint variant: merged (full model) or adapter (LoRA weights only)
 */
export type CheckpointVariant =
  | 'CHECKPOINT_VARIANT_UNSPECIFIED'
  | 'CHECKPOINT_VARIANT_MERGED'
  | 'CHECKPOINT_VARIANT_ADAPTER';

export interface CheckpointDownloadParams {
  /**
   * Checkpoint variant to download: merged (full model) or adapter (LoRA weights
   * only)
   */
  variant: CheckpointVariant;
}

export declare namespace Checkpoints {
  export {
    type CheckpointDownloadResponse as CheckpointDownloadResponse,
    type CheckpointFile as CheckpointFile,
    type CheckpointVariant as CheckpointVariant,
    type CheckpointDownloadParams as CheckpointDownloadParams,
  };
}
