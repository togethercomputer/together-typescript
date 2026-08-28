// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Checkpoints extends APIResource {
  /**
   * Returns metadata for a checkpoint: type, base model, LoRA rank, step, and owning
   * session.
   *
   * @example
   * ```ts
   * const checkpoint =
   *   await client.beta.rl.checkpoints.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Checkpoint> {
    return this._client.get(path`/rl/checkpoints/${id}`, options);
  }

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
 * Metadata for a saved checkpoint
 */
export interface Checkpoint {
  /**
   * Unique identifier for the checkpoint
   */
  id: string;

  /**
   * Base model the checkpoint was trained from
   */
  base_model: string;

  /**
   * Timestamp when the checkpoint was created
   */
  created_at: string;

  /**
   * Training session that produced the checkpoint
   */
  session_id: string;

  /**
   * Training step at time of save
   */
  step: string | number;

  /**
   * Whether this is a training checkpoint or an inference checkpoint
   */
  type: CheckpointType;

  /**
   * LoRA rank of the session that produced this checkpoint. Absent for full-weight
   * sessions and for checkpoints saved before this field was recorded.
   */
  lora_rank?: number;
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
 * Whether a checkpoint is saved for training resume or inference download.
 */
export type CheckpointType = 'CHECKPOINT_TYPE_TRAINING' | 'CHECKPOINT_TYPE_INFERENCE';

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
    type Checkpoint as Checkpoint,
    type CheckpointDownloadResponse as CheckpointDownloadResponse,
    type CheckpointFile as CheckpointFile,
    type CheckpointType as CheckpointType,
    type CheckpointVariant as CheckpointVariant,
    type CheckpointDownloadParams as CheckpointDownloadParams,
  };
}
