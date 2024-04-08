// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'together-ai/core';
import { APIResource } from 'together-ai/resource';
import * as FineTunesAPI from 'together-ai/resources/fine-tunes';

export class FineTunes extends APIResource {
  /**
   * Create a fine-tuning job
   */
  create(body: FineTuneCreateParams, options?: Core.RequestOptions): Core.APIPromise<FineTunes> {
    return this._client.post('/fine-tunes', { body, ...options });
  }

  /**
   * Retrieve fine-tune job details
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<FineTunes> {
    return this._client.get(`/fine-tunes/${id}`, options);
  }

  /**
   * List fine-tune job history
   */
  list(options?: Core.RequestOptions): Core.APIPromise<FineTuneListResponse> {
    return this._client.get('/fine-tunes', options);
  }

  /**
   * Cancels a running fine-tuning job.
   */
  cancel(id: string, options?: Core.RequestOptions): Core.APIPromise<FineTunes> {
    return this._client.post(`/fine-tunes/${id}/cancel`, options);
  }

  /**
   * Downloads a compressed fine-tuned model or checkpoint to local disk.
   */
  download(
    query: FineTuneDownloadParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FineTuneDownloadResponse> {
    return this._client.get('/fine-tunes/download', { query, ...options });
  }

  /**
   * List events of a fine-tune job
   */
  listEvents(id: string, options?: Core.RequestOptions): Core.APIPromise<FineTuneListEventsResponse> {
    return this._client.get(`/fine-tunes/${id}/events`, options);
  }
}

export interface FineTunes {
  id?: string;

  batch_size?: number;

  created_at?: string;

  epochs_completed?: number;

  eval_steps?: number;

  events?: Array<FineTunes.Event>;

  job_id?: string;

  learning_rate?: number;

  lora?: boolean;

  lora_alpha?: number;

  lora_dropout?: number;

  lora_r?: number;

  model?: string;

  n_checkpoints?: number;

  n_epochs?: number;

  output_name?: string;

  param_count?: number;

  queue_depth?: number;

  status?:
    | 'pending'
    | 'queued'
    | 'running'
    | 'compressing'
    | 'uploading'
    | 'cancel_requested'
    | 'cancelled'
    | 'error'
    | 'completed';

  token_count?: number;

  total_price?: number;

  training_file?: string;

  training_file_num_lines?: number;

  training_file_size?: number;

  updated_at?: string;

  validation_file?: string;

  wandb_project_name?: string;

  wandb_url?: string;
}

export namespace FineTunes {
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

export type FineTuneListResponse = Array<FineTunes>;

export interface FineTuneDownloadResponse {
  id?: string;

  checkpoint_step?: number;

  filename?: string;

  object?: string;

  size?: number;
}

export type FineTuneListEventsResponse = Array<FineTuneListEventsResponse.FineTuneListEventsResponseItem>;

export namespace FineTuneListEventsResponse {
  export interface FineTuneListEventsResponseItem {
    details?: Record<string, unknown>;

    event?: string;

    timestamp?: number;
  }
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
   * Specifies step number for checkpoint to download. Defaults to -1 (download the
   * final model).
   */
  checkpoint_step?: number;

  /**
   * Specifies output file name for downloaded model. Defaults to
   * `$PWD/{model_name}.{extension}`.
   */
  output?: string;
}

export namespace FineTunes {
  export import FineTunes = FineTunesAPI.FineTunes;
  export import FineTuneListResponse = FineTunesAPI.FineTuneListResponse;
  export import FineTuneDownloadResponse = FineTunesAPI.FineTuneDownloadResponse;
  export import FineTuneListEventsResponse = FineTunesAPI.FineTuneListEventsResponse;
  export import FineTuneCreateParams = FineTunesAPI.FineTuneCreateParams;
  export import FineTuneDownloadParams = FineTunesAPI.FineTuneDownloadParams;
}
