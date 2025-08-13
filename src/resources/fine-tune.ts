// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as FineTuneAPI from './fine-tune';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class FineTuneResource extends APIResource {
  /**
   * Create a fine-tuning job with the provided model and training data.
   *
   * @example
   * ```ts
   * const fineTune = await client.fineTune.create({
   *   model: 'model',
   *   training_file: 'training_file',
   * });
   * ```
   */
  create(body: FineTuneCreateParams, options?: RequestOptions): APIPromise<FineTuneCreateResponse> {
    return this._client.post('/fine-tunes', { body, ...options });
  }

  /**
   * List the metadata for a single fine-tuning job.
   *
   * @example
   * ```ts
   * const fineTune = await client.fineTune.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<FineTune> {
    return this._client.get(path`/fine-tunes/${id}`, options);
  }

  /**
   * List the metadata for all fine-tuning jobs. Returns a list of
   * FinetuneResponseTruncated objects.
   *
   * @example
   * ```ts
   * const fineTunes = await client.fineTune.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<FineTuneListResponse> {
    return this._client.get('/fine-tunes', options);
  }

  /**
   * Cancel a currently running fine-tuning job. Returns a FinetuneResponseTruncated
   * object.
   *
   * @example
   * ```ts
   * const response = await client.fineTune.cancel('id');
   * ```
   */
  cancel(id: string, options?: RequestOptions): APIPromise<FineTuneCancelResponse> {
    return this._client.post(path`/fine-tunes/${id}/cancel`, options);
  }

  /**
   * Download a compressed fine-tuned model or checkpoint to local disk.
   *
   * @example
   * ```ts
   * const response = await client.fineTune.download({
   *   ft_id: 'ft_id',
   * });
   * ```
   */
  download(query: FineTuneDownloadParams, options?: RequestOptions): APIPromise<FineTuneDownloadResponse> {
    return this._client.get('/finetune/download', { query, ...options });
  }

  /**
   * List the events for a single fine-tuning job.
   *
   * @example
   * ```ts
   * const response = await client.fineTune.listEvents('id');
   * ```
   */
  listEvents(id: string, options?: RequestOptions): APIPromise<FineTuneListEventsResponse> {
    return this._client.get(path`/fine-tunes/${id}/events`, options);
  }

  /**
   * List the checkpoints for a single fine-tuning job.
   *
   * @example
   * ```ts
   * const response = await client.fineTune.retrieveCheckpoints(
   *   'id',
   * );
   * ```
   */
  retrieveCheckpoints(id: string, options?: RequestOptions): APIPromise<FineTuneRetrieveCheckpointsResponse> {
    return this._client.get(path`/fine-tunes/${id}/checkpoints`, options);
  }
}

export interface CosineLrSchedulerArgs {
  /**
   * The ratio of the final learning rate to the peak learning rate
   */
  min_lr_ratio: number;

  /**
   * Number or fraction of cycles for the cosine learning rate scheduler
   */
  num_cycles: number;
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

  batch_size?: number | 'max';

  created_at?: string;

  epochs_completed?: number;

  eval_steps?: number;

  events?: Array<FineTuneEvent>;

  from_checkpoint?: string;

  from_hf_model?: string;

  hf_model_revision?: string;

  job_id?: string;

  learning_rate?: number;

  lr_scheduler?: LrScheduler;

  max_grad_norm?: number;

  model?: string;

  model_output_name?: string;

  model_output_path?: string;

  n_checkpoints?: number;

  n_epochs?: number;

  n_evals?: number;

  param_count?: number;

  queue_depth?: number;

  token_count?: number;

  total_price?: number;

  train_on_inputs?: boolean | 'auto';

  training_file?: string;

  training_method?: TrainingMethodSft | TrainingMethodDpo;

  training_type?: FullTrainingType | LoRaTrainingType;

  trainingfile_numlines?: number;

  trainingfile_size?: number;

  updated_at?: string;

  validation_file?: string;

  wandb_project_name?: string;

  wandb_url?: string;

  warmup_ratio?: number;

  weight_decay?: number;
}

export interface FineTuneEvent {
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

  level?: 'info' | 'warning' | 'error' | 'legacy_info' | 'legacy_iwarning' | 'legacy_ierror' | null;
}

export interface FullTrainingType {
  type: 'Full';
}

export interface LinearLrSchedulerArgs {
  /**
   * The ratio of the final learning rate to the peak learning rate
   */
  min_lr_ratio?: number;
}

export interface LoRaTrainingType {
  lora_alpha: number;

  lora_r: number;

  type: 'Lora';

  lora_dropout?: number;

  lora_trainable_modules?: string;
}

export interface LrScheduler {
  lr_scheduler_type: 'linear' | 'cosine';

  lr_scheduler_args?: LinearLrSchedulerArgs | CosineLrSchedulerArgs;
}

export interface TrainingMethodDpo {
  method: 'dpo';

  dpo_beta?: number;

  dpo_normalize_logratios_by_length?: boolean;

  dpo_reference_free?: boolean;

  rpo_alpha?: number;

  simpo_gamma?: number;
}

export interface TrainingMethodSft {
  method: 'sft';

  /**
   * Whether to mask the user messages in conversational data or prompts in
   * instruction data.
   */
  train_on_inputs: boolean | 'auto';
}

/**
 * A truncated version of the fine-tune response, used for POST /fine-tunes, GET
 * /fine-tunes and POST /fine-tunes/{id}/cancel endpoints
 */
export interface FineTuneCreateResponse {
  /**
   * Unique identifier for the fine-tune job
   */
  id: string;

  /**
   * Creation timestamp of the fine-tune job
   */
  created_at: string;

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

  /**
   * Last update timestamp of the fine-tune job
   */
  updated_at: string;

  /**
   * Batch size used for training
   */
  batch_size?: number;

  /**
   * Events related to this fine-tune job
   */
  events?: Array<FineTuneEvent>;

  /**
   * Checkpoint used to continue training
   */
  from_checkpoint?: string;

  /**
   * Hugging Face Hub repo to start training from
   */
  from_hf_model?: string;

  /**
   * The revision of the Hugging Face Hub model to continue training from
   */
  hf_model_revision?: string;

  /**
   * Learning rate used for training
   */
  learning_rate?: number;

  /**
   * Learning rate scheduler configuration
   */
  lr_scheduler?: LrScheduler;

  /**
   * Maximum gradient norm for clipping
   */
  max_grad_norm?: number;

  /**
   * Base model used for fine-tuning
   */
  model?: string;

  model_output_name?: string;

  /**
   * Number of checkpoints saved during training
   */
  n_checkpoints?: number;

  /**
   * Number of training epochs
   */
  n_epochs?: number;

  /**
   * Number of evaluations during training
   */
  n_evals?: number;

  /**
   * Owner address information
   */
  owner_address?: string;

  /**
   * Suffix added to the fine-tuned model name
   */
  suffix?: string;

  /**
   * Count of tokens processed
   */
  token_count?: number;

  /**
   * Total price for the fine-tuning job
   */
  total_price?: number;

  /**
   * File-ID of the training file
   */
  training_file?: string;

  /**
   * Method of training used
   */
  training_method?: TrainingMethodSft | TrainingMethodDpo;

  /**
   * Type of training used (full or LoRA)
   */
  training_type?: FullTrainingType | LoRaTrainingType;

  /**
   * Identifier for the user who created the job
   */
  user_id?: string;

  /**
   * File-ID of the validation file
   */
  validation_file?: string;

  /**
   * Weights & Biases run name
   */
  wandb_name?: string;

  /**
   * Weights & Biases project name
   */
  wandb_project_name?: string;

  /**
   * Ratio of warmup steps
   */
  warmup_ratio?: number;

  /**
   * Weight decay value used
   */
  weight_decay?: number;
}

export interface FineTuneListResponse {
  data: Array<FineTuneListResponse.Data>;
}

export namespace FineTuneListResponse {
  /**
   * A truncated version of the fine-tune response, used for POST /fine-tunes, GET
   * /fine-tunes and POST /fine-tunes/{id}/cancel endpoints
   */
  export interface Data {
    /**
     * Unique identifier for the fine-tune job
     */
    id: string;

    /**
     * Creation timestamp of the fine-tune job
     */
    created_at: string;

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

    /**
     * Last update timestamp of the fine-tune job
     */
    updated_at: string;

    /**
     * Batch size used for training
     */
    batch_size?: number;

    /**
     * Events related to this fine-tune job
     */
    events?: Array<FineTuneAPI.FineTuneEvent>;

    /**
     * Checkpoint used to continue training
     */
    from_checkpoint?: string;

    /**
     * Hugging Face Hub repo to start training from
     */
    from_hf_model?: string;

    /**
     * The revision of the Hugging Face Hub model to continue training from
     */
    hf_model_revision?: string;

    /**
     * Learning rate used for training
     */
    learning_rate?: number;

    /**
     * Learning rate scheduler configuration
     */
    lr_scheduler?: FineTuneAPI.LrScheduler;

    /**
     * Maximum gradient norm for clipping
     */
    max_grad_norm?: number;

    /**
     * Base model used for fine-tuning
     */
    model?: string;

    model_output_name?: string;

    /**
     * Number of checkpoints saved during training
     */
    n_checkpoints?: number;

    /**
     * Number of training epochs
     */
    n_epochs?: number;

    /**
     * Number of evaluations during training
     */
    n_evals?: number;

    /**
     * Owner address information
     */
    owner_address?: string;

    /**
     * Suffix added to the fine-tuned model name
     */
    suffix?: string;

    /**
     * Count of tokens processed
     */
    token_count?: number;

    /**
     * Total price for the fine-tuning job
     */
    total_price?: number;

    /**
     * File-ID of the training file
     */
    training_file?: string;

    /**
     * Method of training used
     */
    training_method?: FineTuneAPI.TrainingMethodSft | FineTuneAPI.TrainingMethodDpo;

    /**
     * Type of training used (full or LoRA)
     */
    training_type?: FineTuneAPI.FullTrainingType | FineTuneAPI.LoRaTrainingType;

    /**
     * Identifier for the user who created the job
     */
    user_id?: string;

    /**
     * File-ID of the validation file
     */
    validation_file?: string;

    /**
     * Weights & Biases run name
     */
    wandb_name?: string;

    /**
     * Weights & Biases project name
     */
    wandb_project_name?: string;

    /**
     * Ratio of warmup steps
     */
    warmup_ratio?: number;

    /**
     * Weight decay value used
     */
    weight_decay?: number;
  }
}

/**
 * A truncated version of the fine-tune response, used for POST /fine-tunes, GET
 * /fine-tunes and POST /fine-tunes/{id}/cancel endpoints
 */
export interface FineTuneCancelResponse {
  /**
   * Unique identifier for the fine-tune job
   */
  id: string;

  /**
   * Creation timestamp of the fine-tune job
   */
  created_at: string;

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

  /**
   * Last update timestamp of the fine-tune job
   */
  updated_at: string;

  /**
   * Batch size used for training
   */
  batch_size?: number;

  /**
   * Events related to this fine-tune job
   */
  events?: Array<FineTuneEvent>;

  /**
   * Checkpoint used to continue training
   */
  from_checkpoint?: string;

  /**
   * Hugging Face Hub repo to start training from
   */
  from_hf_model?: string;

  /**
   * The revision of the Hugging Face Hub model to continue training from
   */
  hf_model_revision?: string;

  /**
   * Learning rate used for training
   */
  learning_rate?: number;

  /**
   * Learning rate scheduler configuration
   */
  lr_scheduler?: LrScheduler;

  /**
   * Maximum gradient norm for clipping
   */
  max_grad_norm?: number;

  /**
   * Base model used for fine-tuning
   */
  model?: string;

  model_output_name?: string;

  /**
   * Number of checkpoints saved during training
   */
  n_checkpoints?: number;

  /**
   * Number of training epochs
   */
  n_epochs?: number;

  /**
   * Number of evaluations during training
   */
  n_evals?: number;

  /**
   * Owner address information
   */
  owner_address?: string;

  /**
   * Suffix added to the fine-tuned model name
   */
  suffix?: string;

  /**
   * Count of tokens processed
   */
  token_count?: number;

  /**
   * Total price for the fine-tuning job
   */
  total_price?: number;

  /**
   * File-ID of the training file
   */
  training_file?: string;

  /**
   * Method of training used
   */
  training_method?: TrainingMethodSft | TrainingMethodDpo;

  /**
   * Type of training used (full or LoRA)
   */
  training_type?: FullTrainingType | LoRaTrainingType;

  /**
   * Identifier for the user who created the job
   */
  user_id?: string;

  /**
   * File-ID of the validation file
   */
  validation_file?: string;

  /**
   * Weights & Biases run name
   */
  wandb_name?: string;

  /**
   * Weights & Biases project name
   */
  wandb_project_name?: string;

  /**
   * Ratio of warmup steps
   */
  warmup_ratio?: number;

  /**
   * Weight decay value used
   */
  weight_decay?: number;
}

export interface FineTuneDownloadResponse {
  id?: string;

  checkpoint_step?: number;

  filename?: string;

  object?: 'local' | null;

  size?: number;
}

export interface FineTuneListEventsResponse {
  data: Array<FineTuneEvent>;
}

export interface FineTuneRetrieveCheckpointsResponse {
  data: Array<FineTuneRetrieveCheckpointsResponse.Data>;
}

export namespace FineTuneRetrieveCheckpointsResponse {
  export interface Data {
    checkpoint_type: string;

    created_at: string;

    path: string;

    step: number;
  }
}

export interface FineTuneCreateParams {
  /**
   * Name of the base model to run fine-tune job on
   */
  model: string;

  /**
   * File-ID of a training file uploaded to the Together API
   */
  training_file: string;

  /**
   * Number of training examples processed together (larger batches use more memory
   * but may train faster). Defaults to "max". We use training optimizations like
   * packing, so the effective batch size may be different than the value you set.
   */
  batch_size?: number | 'max';

  /**
   * The checkpoint identifier to continue training from a previous fine-tuning job.
   * Format is `{$JOB_ID}` or `{$OUTPUT_MODEL_NAME}` or `{$JOB_ID}:{$STEP}` or
   * `{$OUTPUT_MODEL_NAME}:{$STEP}`. The step value is optional; without it, the
   * final checkpoint will be used.
   */
  from_checkpoint?: string;

  /**
   * The Hugging Face Hub repo to start training from. Should be as close as possible
   * to the base model (specified by the `model` argument) in terms of architecture
   * and size.
   */
  from_hf_model?: string;

  /**
   * The API token for the Hugging Face Hub.
   */
  hf_api_token?: string;

  /**
   * The revision of the Hugging Face Hub model to continue training from. E.g.,
   * hf_model_revision=main (default, used if the argument is not provided) or
   * hf_model_revision='607a30d783dfa663caf39e06633721c8d4cfcd7e' (specific commit).
   */
  hf_model_revision?: string;

  /**
   * The name of the Hugging Face repository to upload the fine-tuned model to.
   */
  hf_output_repo_name?: string;

  /**
   * Controls how quickly the model adapts to new information (too high may cause
   * instability, too low may slow convergence)
   */
  learning_rate?: number;

  /**
   * The learning rate scheduler to use. It specifies how the learning rate is
   * adjusted during training.
   */
  lr_scheduler?: LrScheduler;

  /**
   * Max gradient norm to be used for gradient clipping. Set to 0 to disable.
   */
  max_grad_norm?: number;

  /**
   * Number of intermediate model versions saved during training for evaluation
   */
  n_checkpoints?: number;

  /**
   * Number of complete passes through the training dataset (higher values may
   * improve results but increase cost and risk of overfitting)
   */
  n_epochs?: number;

  /**
   * Number of evaluations to be run on a given validation set during training
   */
  n_evals?: number;

  /**
   * Suffix that will be added to your fine-tuned model name
   */
  suffix?: string;

  /**
   * @deprecated Whether to mask the user messages in conversational data or prompts
   * in instruction data.
   */
  train_on_inputs?: boolean | 'auto';

  /**
   * The training method to use. 'sft' for Supervised Fine-Tuning or 'dpo' for Direct
   * Preference Optimization.
   */
  training_method?: TrainingMethodSft | TrainingMethodDpo;

  training_type?: FullTrainingType | LoRaTrainingType;

  /**
   * File-ID of a validation file uploaded to the Together API
   */
  validation_file?: string;

  /**
   * Integration key for tracking experiments and model metrics on W&B platform
   */
  wandb_api_key?: string;

  /**
   * The base URL of a dedicated Weights & Biases instance.
   */
  wandb_base_url?: string;

  /**
   * The Weights & Biases name for your run.
   */
  wandb_name?: string;

  /**
   * The Weights & Biases project for your run. If not specified, will use `together`
   * as the project name.
   */
  wandb_project_name?: string;

  /**
   * The percent of steps at the start of training to linearly increase the learning
   * rate.
   */
  warmup_ratio?: number;

  /**
   * Weight decay. Regularization parameter for the optimizer.
   */
  weight_decay?: number;
}

export interface FineTuneDownloadParams {
  /**
   * Fine-tune ID to download. A string that starts with `ft-`.
   */
  ft_id: string;

  /**
   * Specifies checkpoint type to download - `merged` vs `adapter`. This field is
   * required if the checkpoint_step is not set.
   */
  checkpoint?: 'merged' | 'adapter';

  /**
   * Specifies step number for checkpoint to download. Ignores `checkpoint` value if
   * set.
   */
  checkpoint_step?: number;

  /**
   * Specifies output file name for downloaded model. Defaults to
   * `$PWD/{model_name}.{extension}`.
   */
  output?: string;
}

export declare namespace FineTuneResource {
  export {
    type CosineLrSchedulerArgs as CosineLrSchedulerArgs,
    type FineTune as FineTune,
    type FineTuneEvent as FineTuneEvent,
    type FullTrainingType as FullTrainingType,
    type LinearLrSchedulerArgs as LinearLrSchedulerArgs,
    type LoRaTrainingType as LoRaTrainingType,
    type LrScheduler as LrScheduler,
    type TrainingMethodDpo as TrainingMethodDpo,
    type TrainingMethodSft as TrainingMethodSft,
    type FineTuneCreateResponse as FineTuneCreateResponse,
    type FineTuneListResponse as FineTuneListResponse,
    type FineTuneCancelResponse as FineTuneCancelResponse,
    type FineTuneDownloadResponse as FineTuneDownloadResponse,
    type FineTuneListEventsResponse as FineTuneListEventsResponse,
    type FineTuneRetrieveCheckpointsResponse as FineTuneRetrieveCheckpointsResponse,
    type FineTuneCreateParams as FineTuneCreateParams,
    type FineTuneDownloadParams as FineTuneDownloadParams,
  };
}
