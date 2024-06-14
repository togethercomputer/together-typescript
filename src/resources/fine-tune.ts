// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as FineTuneAPI from './fine-tune';

export class FineTuneResource extends APIResource {
  /**
   * Use a model to create a fine-tuning job.
   */
  create(body: FineTuneCreateParams, options?: Core.RequestOptions): Core.APIPromise<FineTune> {
    return this._client.post('/fine-tunes', { body, ...options });
  }

  /**
   * List the metadata for a single fine-tuning job.
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<FineTune> {
    return this._client.get(`/fine-tunes/${id}`, options);
  }

  /**
   * List the metadata for all fine-tuning jobs.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<FineTuneListResponse> {
    return this._client.get('/fine-tunes', options);
  }

  /**
   * Cancel a currently running fine-tuning job.
   */
  cancel(id: string, options?: Core.RequestOptions): Core.APIPromise<FineTune> {
    return this._client.post(`/fine-tunes/${id}/cancel`, options);
  }

  /**
   * Download a compressed fine-tuned model or checkpoint to local disk.
   */
  download(
    query: FineTuneDownloadParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FineTuneDownloadResponse> {
    return this._client.get('/finetune/download', { query, ...options });
  }

  /**
   * List the events for a single fine-tuning job.
   */
  listEvents(id: string, options?: Core.RequestOptions): Core.APIPromise<FineTuneEvent> {
    return this._client.get(`/fine-tunes/${id}/events`, options);
  }
}

export interface FineTune {
  id: string;

  status:
    | 'pending'
    | 'queued'
    | 'running'
    | 'compressing'
    | 'uploading'
    | 'cancel_requested'
    | 'cancelled'
    | 'error'
    | 'completed';

  batch_size?: number;

  created_at?: string;

  epochs_completed?: number;

  eval_steps?: number;

  events?: Array<FineTune.Event>;

  job_id?: string;

  learning_rate?: number;

  lora?: boolean;

  lora_alpha?: number;

  lora_dropout?: number;

  lora_r?: number;

  model?: string;

  model_output_name?: string;

  model_output_path?: string;

  n_checkpoints?: number;

  n_epochs?: number;

  param_count?: number;

  queue_depth?: number;

  token_count?: number;

  total_price?: number;

  training_file?: string;

  TrainingFileNumLines?: number;

  TrainingFileSize?: number;

  updated_at?: string;

  validation_file?: string;

  wandb_project_name?: string;

  wandb_url?: string;
}

export namespace FineTune {
  export interface Event {
    created_at?: string;

    hash?: string;

    level?: 'info' | 'warning' | 'error' | 'legacy_info' | 'legacy_iwarning' | 'legacy_ierror' | null;

    message?: string;

    object?: 'FinetuneEvent';

    param_count?: number;

    token_count?: number;

    type?:
      | 'job_pending'
      | 'job_start'
      | 'job_stopped'
      | 'model_downloading'
      | 'model_download_complete'
      | 'training_data_downloading'
      | 'training_data_download_complete'
      | 'validation_data_downloading'
      | 'validation_data_download_complete'
      | 'wandb_init'
      | 'training_start'
      | 'checkpoint_save'
      | 'billing_limit'
      | 'epoch_complete'
      | 'training_complete'
      | 'model_compressing'
      | 'model_compression_complete'
      | 'model_uploading'
      | 'model_upload_complete'
      | 'job_complete'
      | 'job_error'
      | 'cancel_requested'
      | 'job_restarted'
      | 'refund'
      | 'warning';

    wandb_url?: string;
  }
}

export interface FineTuneEvent {
  data: Array<FineTuneEvent.Data>;
}

export namespace FineTuneEvent {
  export interface Data {
    checkpoint_path: string;

    created_at: string;

    hash: string;

    message: string;

    model_path: string;

    object: 'fine-tune-event';

    param_count: number;

    step: number;

    token_count: number;

    total_steps: number;

    training_offset: number;

    type:
      | 'job_pending'
      | 'job_start'
      | 'job_stopped'
      | 'model_downloading'
      | 'model_download_complete'
      | 'training_data_downloading'
      | 'training_data_download_complete'
      | 'validation_data_downloading'
      | 'validation_data_download_complete'
      | 'wandb_init'
      | 'training_start'
      | 'checkpoint_save'
      | 'billing_limit'
      | 'epoch_complete'
      | 'training_complete'
      | 'model_compressing'
      | 'model_compression_complete'
      | 'model_uploading'
      | 'model_upload_complete'
      | 'job_complete'
      | 'job_error'
      | 'cancel_requested'
      | 'job_restarted'
      | 'refund'
      | 'warning';

    wandb_url: string;

    level?: unknown;
  }
}

export interface FineTuneListResponse {
  data: Array<FineTune>;
}

export interface FineTuneDownloadResponse {
  id?: string;

  checkpoint_step?: number;

  filename?: string;

  object?: unknown;

  size?: number;
}

export interface FineTuneCreateParams {
  /**
   * Name of the base model to run fine-tune job on
   */
  model: string;

  /**
   * File-ID of a file uploaded to the Together API
   */
  training_file: string;

  /**
   * Batch size for fine-tuning
   */
  batch_size?: number;

  /**
   * Learning rate multiplier to use for training
   */
  learning_rate?: number;

  /**
   * Number of checkpoints to save during fine-tuning
   */
  n_checkpoints?: number;

  /**
   * Number of epochs for fine-tuning
   */
  n_epochs?: number;

  /**
   * Suffix that will be added to your fine-tuned model name
   */
  suffix?: string;

  /**
   * API key for Weights & Biases integration
   */
  wandb_api_key?: string;
}

export interface FineTuneDownloadParams {
  /**
   * Fine-tune ID to download. A string that starts with `ft-`.
   */
  ft_id: string;

  /**
   * Specifies step number for checkpoint to download.
   */
  checkpoint_step?: number;

  /**
   * Specifies output file name for downloaded model. Defaults to
   * `$PWD/{model_name}.{extension}`.
   */
  output?: string;
}

export namespace FineTuneResource {
  export import FineTune = FineTuneAPI.FineTune;
  export import FineTuneEvent = FineTuneAPI.FineTuneEvent;
  export import FineTuneListResponse = FineTuneAPI.FineTuneListResponse;
  export import FineTuneDownloadResponse = FineTuneAPI.FineTuneDownloadResponse;
  export import FineTuneCreateParams = FineTuneAPI.FineTuneCreateParams;
  export import FineTuneDownloadParams = FineTuneAPI.FineTuneDownloadParams;
}
