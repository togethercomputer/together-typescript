// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as FineTuningAPI from './fine-tuning';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class FineTuning extends APIResource {
  /**
   * Create a fine-tuning job with the provided model and training data.
   *
   * @example
   * ```ts
   * const fineTuning = await client.fineTuning.create({
   *   model: 'model',
   *   training_file: 'training_file',
   * });
   * ```
   */
  create(body: FineTuningCreateParams, options?: RequestOptions): APIPromise<FineTuningCreateResponse> {
    return this._client.post('/fine-tunes', { body, ...options });
  }

  /**
   * List the metadata for a single fine-tuning job.
   *
   * @example
   * ```ts
   * const finetuneResponse = await client.fineTuning.retrieve(
   *   'id',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<FinetuneResponse> {
    return this._client.get(path`/fine-tunes/${id}`, options);
  }

  /**
   * List the metadata for all fine-tuning jobs. Returns a list of
   * FinetuneResponseTruncated objects.
   *
   * @example
   * ```ts
   * const fineTunings = await client.fineTuning.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<FineTuningListResponse> {
    return this._client.get('/fine-tunes', options);
  }

  /**
   * Delete a fine-tuning job.
   *
   * @example
   * ```ts
   * const fineTuning = await client.fineTuning.delete('id');
   * ```
   */
  delete(
    id: string,
    params: FineTuningDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FineTuningDeleteResponse> {
    const { force } = params ?? {};
    return this._client.delete(path`/fine-tunes/${id}`, { query: { force }, ...options });
  }

  /**
   * Cancel a currently running fine-tuning job. Returns a FinetuneResponseTruncated
   * object.
   *
   * @example
   * ```ts
   * const response = await client.fineTuning.cancel('id');
   * ```
   */
  cancel(id: string, options?: RequestOptions): APIPromise<FineTuningCancelResponse> {
    return this._client.post(path`/fine-tunes/${id}/cancel`, options);
  }

  /**
   * Receive a compressed fine-tuned model or checkpoint.
   *
   * @example
   * ```ts
   * const response = await client.fineTuning.content({
   *   ft_id: 'ft_id',
   * });
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  content(query: FineTuningContentParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/finetune/download', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/octet-stream' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Estimate the price of a fine-tuning job.
   *
   * @example
   * ```ts
   * const response = await client.fineTuning.estimatePrice({
   *   training_file: 'training_file',
   * });
   * ```
   */
  estimatePrice(
    body: FineTuningEstimatePriceParams,
    options?: RequestOptions,
  ): APIPromise<FineTuningEstimatePriceResponse> {
    return this._client.post('/fine-tunes/estimate-price', { body, ...options });
  }

  /**
   * List the checkpoints for a single fine-tuning job.
   *
   * @example
   * ```ts
   * const response = await client.fineTuning.listCheckpoints(
   *   'id',
   * );
   * ```
   */
  listCheckpoints(id: string, options?: RequestOptions): APIPromise<FineTuningListCheckpointsResponse> {
    return this._client.get(path`/fine-tunes/${id}/checkpoints`, options);
  }

  /**
   * List the events for a single fine-tuning job.
   *
   * @example
   * ```ts
   * const response = await client.fineTuning.listEvents('id');
   * ```
   */
  listEvents(id: string, options?: RequestOptions): APIPromise<FineTuningListEventsResponse> {
    return this._client.get(path`/fine-tunes/${id}/events`, options);
  }

  /**
   * Retrieves recorded training metrics for a fine-tuning job in chronological
   * order. All query parameters are optional: omit them to retrieve all metrics.
   *
   * @example
   * ```ts
   * const response = await client.fineTuning.listMetrics('id');
   * ```
   */
  listMetrics(
    id: string,
    query: FineTuningListMetricsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FineTuningListMetricsResponse> {
    return this._client.get(path`/fine-tunes/${id}/metrics`, { query, ...options });
  }

  /**
   * Get model limits for a specific fine-tuning model.
   *
   * @example
   * ```ts
   * const finetuneModelLimits =
   *   await client.fineTuning.modelLimits({
   *     model_name: 'model_name',
   *   });
   * ```
   */
  modelLimits(query: FineTuningModelLimitsParams, options?: RequestOptions): APIPromise<FinetuneModelLimits> {
    return this._client.get('/fine-tunes/models/limits', { query, ...options });
  }

  /**
   * Preview how sampled rows from a fine-tuning training file will be tokenized
   * before packing.
   *
   * @example
   * ```ts
   * const fineTunePreviewResponse =
   *   await client.fineTuning.preview({
   *     model: 'model',
   *     training_file: 'training_file',
   *   });
   * ```
   */
  preview(body: FineTuningPreviewParams, options?: RequestOptions): APIPromise<FineTunePreviewResponse> {
    return this._client.post('/fine-tunes/preview', { body, ...options });
  }
}

/**
 * Tokenized preview for sampled rows from a fine-tuning training file.
 */
export interface FineTunePreviewResponse {
  /**
   * Detected SFT dataset format for the sampled rows.
   */
  dataset_format: 'general' | 'conversation' | 'instruction';

  /**
   * Maximum sequence length configured for the requested model.
   */
  max_seq_length: number;

  /**
   * Name of the base model used to tokenize the sampled rows.
   */
  model: string;

  /**
   * Tokenized preview rows, in the same order as the sampled training file rows.
   */
  rows: Array<FineTunePreviewRow>;

  /**
   * Whether prompt or user-message tokens contribute to training loss.
   */
  train_on_inputs: boolean;
}

/**
 * Tokenized representation of one sampled fine-tuning row.
 */
export interface FineTunePreviewRow {
  /**
   * Token IDs produced for the sampled row.
   */
  input_ids: Array<number>;

  /**
   * Training labels for each token; masked tokens use -100.
   */
  labels: Array<number>;

  /**
   * Total number of tokens in the preview row after truncation.
   */
  num_tokens: number;

  /**
   * Number of tokens in the row that contribute to training loss.
   */
  num_trained_tokens: number;

  /**
   * Raw token strings produced for the sampled row.
   */
  tokens: Array<string>;

  /**
   * Half-open token index ranges that contribute to training loss.
   */
  trained_spans: Array<Array<number>>;

  /**
   * Whether the row was truncated to the model maximum sequence length.
   */
  truncated: boolean;
}

export interface FinetuneEvent {
  created_at: string;

  message: string;

  /**
   * The object type, which is always `fine-tune-event`.
   */
  object: 'fine-tune-event';

  type: FinetuneEventType;

  checkpoint_path?: string;

  /**
   * For early_stopped events, the best validation loss observed. Null if no
   * improving evaluation was recorded.
   */
  early_stopping_best_metric_value?: number | null;

  /**
   * For early_stopped events, the selected best-checkpoint step when a finite best
   * metric exists. If early_stopping_best_metric_value is null, this is the halt
   * step.
   */
  early_stopping_best_step?: number | null;

  level?: 'info' | 'warning' | 'error' | 'legacy_info' | 'legacy_iwarning' | 'legacy_ierror' | null;

  model_path?: string;

  param_count?: number;

  step?: number;

  token_count?: number;

  total_steps?: number;

  wandb_url?: string;
}

export type FinetuneEventType =
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
  | 'warning'
  | 'early_stopped';

/**
 * Model limits for fine-tuning.
 */
export interface FinetuneModelLimits {
  /**
   * Default gradient accumulation steps used when a fine-tune request omits the
   * value or sets it to 0.
   */
  default_gradient_accumulation_steps: number;

  /**
   * Limits for LoRA training.
   */
  lora_training: FinetuneModelLimits.LoraTraining;

  /**
   * Maximum learning rate.
   */
  max_learning_rate: number;

  /**
   * Maximum number of checkpoints that can be saved during a fine-tuning job.
   */
  max_num_checkpoints: number;

  /**
   * Maximum number of training epochs.
   */
  max_num_epochs: number;

  /**
   * Maximum number of evaluations.
   */
  max_num_evals: number;

  /**
   * Maximum sequence length supported for DPO training.
   */
  max_seq_length_dpo: number;

  /**
   * Maximum sequence length supported for SFT training.
   */
  max_seq_length_sft: number;

  /**
   * Whether a merged checkpoint (the base model with the trained LoRA adapter fused
   * in) is produced for LoRA fine-tunes of this model, in addition to the standalone
   * adapter.
   */
  merge_output_lora: boolean;

  /**
   * Minimum learning rate.
   */
  min_learning_rate: number;

  /**
   * Minimum value allowed for the max_seq_length hyperparameter.
   */
  min_max_seq_length: number;

  /**
   * The name of the model.
   */
  model_name: string;

  /**
   * Whether the model supports full (non-LoRA) fine-tuning. When false, only LoRA
   * fine-tuning is available and the full_training limits are reported as zero.
   */
  supports_full_training: boolean;

  /**
   * Whether the model supports reasoning.
   */
  supports_reasoning: boolean;

  /**
   * Whether the model supports tool/function calling.
   */
  supports_tools: boolean;

  /**
   * Whether the model supports vision/multimodal inputs.
   */
  supports_vision: boolean;

  /**
   * Limits for full training.
   */
  full_training?: FinetuneModelLimits.FullTraining;
}

export namespace FinetuneModelLimits {
  /**
   * Limits for LoRA training.
   */
  export interface LoraTraining {
    /**
     * Maximum batch size for SFT LoRA training.
     */
    max_batch_size: number;

    /**
     * Maximum batch size for DPO LoRA training.
     */
    max_batch_size_dpo: number;

    /**
     * Maximum LoRA rank.
     */
    max_rank: number;

    /**
     * Minimum batch size for LoRA training.
     */
    min_batch_size: number;

    /**
     * Available target modules for LoRA.
     */
    target_modules: Array<string>;
  }

  /**
   * Limits for full training.
   */
  export interface FullTraining {
    /**
     * Maximum batch size for SFT full training.
     */
    max_batch_size: number;

    /**
     * Maximum batch size for DPO full training.
     */
    max_batch_size_dpo: number;

    /**
     * Minimum batch size for full training.
     */
    min_batch_size: number;
  }
}

export interface FinetuneResponse {
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

  /**
   * ID of the user who owns the fine-tune job.
   */
  user_id: string;

  /**
   * Together model registry object ID for the final adapter weights on LoRA jobs.
   */
  adapter_object_id?: string;

  /**
   * Together model registry name for the final adapter weights on LoRA jobs,
   * formatted as `<project_slug>/<model_name>-adapter`.
   */
  adapter_object_name?: string;

  /**
   * Together model registry revision ID for the final adapter weights on LoRA jobs.
   */
  adapter_object_revision_id?: string;

  batch_size?: number | 'max';

  created_at?: string;

  /**
   * Whether the early-stopping criterion triggered.
   */
  early_stopped?: boolean;

  /**
   * Best validation loss observed, corresponding to early_stopping_best_step. Null
   * if no improving evaluation was recorded (for example, a non-finite first
   * evaluation).
   */
  early_stopping_best_metric?: number | null;

  /**
   * Step associated with the selected early-stopping artifact. When
   * early_stopping_best_metric is null, no finite best metric was recorded; this is
   * the halt step, not a best-checkpoint step.
   */
  early_stopping_best_step?: number;

  epochs_completed?: number;

  eval_steps?: number;

  events?: Array<FinetuneEvent>;

  from_checkpoint?: string;

  from_hf_model?: string;

  hf_model_revision?: string;

  job_id?: string;

  learning_rate?: number;

  lr_scheduler?: FinetuneResponse.LrScheduler;

  max_grad_norm?: number;

  model?: string;

  /**
   * Together model registry object ID for the final model weights (e.g. `ml_...`).
   */
  model_object_id?: string;

  /**
   * Together model registry name for the final model weights, formatted as
   * `<project_slug>/<model_name>`.
   */
  model_object_name?: string;

  /**
   * Together model registry revision ID for the final model weights (e.g. `rv_...`).
   */
  model_object_revision_id?: string;

  model_output_name?: string;

  model_output_path?: string;

  multimodal_params?: FinetuneResponse.MultimodalParams;

  n_checkpoints?: number;

  n_epochs?: number;

  n_evals?: number;

  param_count?: number;

  /**
   * Progress information for a fine-tuning job
   */
  progress?: FinetuneResponse.Progress;

  queue_depth?: number;

  started_at?: string;

  token_count?: number;

  total_price?: number;

  train_on_inputs?: boolean | 'auto';

  training_file?: string;

  training_method?: FinetuneResponse.TrainingMethodSft | FinetuneResponse.TrainingMethodDpo;

  training_type?: FinetuneResponse.FullTrainingType | FinetuneResponse.LoRaTrainingType;

  trainingfile_numlines?: number;

  trainingfile_size?: number;

  updated_at?: string;

  validation_file?: string;

  wandb_project_name?: string;

  wandb_url?: string;

  warmup_ratio?: number;

  weight_decay?: number;
}

export namespace FinetuneResponse {
  export interface LrScheduler {
    lr_scheduler_type: 'linear' | 'cosine';

    lr_scheduler_args?: LrScheduler.LinearLrSchedulerArgs | LrScheduler.CosineLrSchedulerArgs;
  }

  export namespace LrScheduler {
    export interface LinearLrSchedulerArgs {
      /**
       * The ratio of the final learning rate to the peak learning rate
       */
      min_lr_ratio?: number;
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
  }

  export interface MultimodalParams {
    /**
     * Whether to train the vision encoder of the model. Only available for multimodal
     * models.
     */
    train_vision?: boolean;
  }

  /**
   * Progress information for a fine-tuning job
   */
  export interface Progress {
    /**
     * Whether time estimate is available
     */
    estimate_available: boolean;

    /**
     * Estimated time remaining in seconds for the fine-tuning job to next state
     */
    seconds_remaining: number;
  }

  export interface TrainingMethodSft {
    method: 'sft';

    /**
     * Whether to mask user messages in conversational data or prompts in instruction
     * data.
     */
    train_on_inputs: boolean | 'auto';
  }

  export interface TrainingMethodDpo {
    method: 'dpo';

    dpo_beta?: number;

    dpo_normalize_logratios_by_length?: boolean;

    dpo_reference_free?: boolean;

    rpo_alpha?: number;

    simpo_gamma?: number;
  }

  export interface FullTrainingType {
    type: 'Full';
  }

  export interface LoRaTrainingType {
    lora_alpha: number;

    lora_r: number;

    type: 'Lora';

    lora_dropout?: number;

    /**
     * Comma-separated LoRA target modules. Use `all-linear` for model defaults; MoE
     * expert modules (`w_up`, `w_gate`, `w_down`) are supported on compatible models
     * and cannot be mixed with attention modules.
     */
    lora_trainable_modules?: string;
  }
}

/**
 * A truncated version of the fine-tune response, used for POST /fine-tunes, GET
 * /fine-tunes and POST /fine-tunes/{id}/cancel endpoints
 */
export interface FineTuningCreateResponse {
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
   * ID of the user who owns the fine-tune job.
   */
  user_id: string;

  /**
   * Batch size used for training
   */
  batch_size?: number;

  /**
   * Whether the early-stopping criterion triggered.
   */
  early_stopped?: boolean;

  /**
   * Best validation loss observed, corresponding to early_stopping_best_step. Null
   * if no improving evaluation was recorded.
   */
  early_stopping_best_metric?: number | null;

  /**
   * Step associated with the selected early-stopping artifact. When
   * early_stopping_best_metric is null, no finite best metric was recorded; this is
   * the halt step, not a best-checkpoint step.
   */
  early_stopping_best_step?: number;

  /**
   * Events related to this fine-tune job
   */
  events?: Array<FinetuneEvent>;

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
  lr_scheduler?: FineTuningCreateResponse.LrScheduler;

  /**
   * Maximum gradient norm for clipping
   */
  max_grad_norm?: number;

  /**
   * Maximum sequence length to use for training. If not specified, uses the maximum
   * allowed for the model and training method.
   */
  max_seq_length?: number;

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
   * Whether sequence packing is being used for training.
   */
  packing?: boolean;

  /**
   * Progress information for the fine-tuning job
   */
  progress?: FineTuningCreateResponse.Progress;

  /**
   * Random seed used for training. Integer when set; null if not stored (e.g. legacy
   * jobs) or no explicit seed was recorded.
   */
  random_seed?: number | null;

  /**
   * Start timestamp of the current stage of the fine-tune job
   */
  started_at?: string;

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
  training_method?: FineTuningCreateResponse.TrainingMethodSft | FineTuningCreateResponse.TrainingMethodDpo;

  /**
   * Type of training used (full or LoRA)
   */
  training_type?: FineTuningCreateResponse.FullTrainingType | FineTuningCreateResponse.LoRaTrainingType;

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

export namespace FineTuningCreateResponse {
  /**
   * Learning rate scheduler configuration
   */
  export interface LrScheduler {
    lr_scheduler_type: 'linear' | 'cosine';

    lr_scheduler_args?: LrScheduler.LinearLrSchedulerArgs | LrScheduler.CosineLrSchedulerArgs;
  }

  export namespace LrScheduler {
    export interface LinearLrSchedulerArgs {
      /**
       * The ratio of the final learning rate to the peak learning rate
       */
      min_lr_ratio?: number;
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
  }

  /**
   * Progress information for the fine-tuning job
   */
  export interface Progress {
    /**
     * Whether time estimate is available
     */
    estimate_available: boolean;

    /**
     * Estimated time remaining in seconds for the fine-tuning job to next state
     */
    seconds_remaining: number;
  }

  export interface TrainingMethodSft {
    method: 'sft';

    /**
     * Whether to mask user messages in conversational data or prompts in instruction
     * data.
     */
    train_on_inputs: boolean | 'auto';
  }

  export interface TrainingMethodDpo {
    method: 'dpo';

    dpo_beta?: number;

    dpo_normalize_logratios_by_length?: boolean;

    dpo_reference_free?: boolean;

    rpo_alpha?: number;

    simpo_gamma?: number;
  }

  export interface FullTrainingType {
    type: 'Full';
  }

  export interface LoRaTrainingType {
    lora_alpha: number;

    lora_r: number;

    type: 'Lora';

    lora_dropout?: number;

    /**
     * Comma-separated LoRA target modules. Use `all-linear` for model defaults; MoE
     * expert modules (`w_up`, `w_gate`, `w_down`) are supported on compatible models
     * and cannot be mixed with attention modules.
     */
    lora_trainable_modules?: string;
  }
}

export interface FineTuningListResponse {
  data: Array<FineTuningListResponse.Data>;
}

export namespace FineTuningListResponse {
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
     * ID of the user who owns the fine-tune job.
     */
    user_id: string;

    /**
     * Batch size used for training
     */
    batch_size?: number;

    /**
     * Whether the early-stopping criterion triggered.
     */
    early_stopped?: boolean;

    /**
     * Best validation loss observed, corresponding to early_stopping_best_step. Null
     * if no improving evaluation was recorded.
     */
    early_stopping_best_metric?: number | null;

    /**
     * Step associated with the selected early-stopping artifact. When
     * early_stopping_best_metric is null, no finite best metric was recorded; this is
     * the halt step, not a best-checkpoint step.
     */
    early_stopping_best_step?: number;

    /**
     * Events related to this fine-tune job
     */
    events?: Array<FineTuningAPI.FinetuneEvent>;

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
    lr_scheduler?: Data.LrScheduler;

    /**
     * Maximum gradient norm for clipping
     */
    max_grad_norm?: number;

    /**
     * Maximum sequence length to use for training. If not specified, uses the maximum
     * allowed for the model and training method.
     */
    max_seq_length?: number;

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
     * Whether sequence packing is being used for training.
     */
    packing?: boolean;

    /**
     * Progress information for the fine-tuning job
     */
    progress?: Data.Progress;

    /**
     * Random seed used for training. Integer when set; null if not stored (e.g. legacy
     * jobs) or no explicit seed was recorded.
     */
    random_seed?: number | null;

    /**
     * Start timestamp of the current stage of the fine-tune job
     */
    started_at?: string;

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
    training_method?: Data.TrainingMethodSft | Data.TrainingMethodDpo;

    /**
     * Type of training used (full or LoRA)
     */
    training_type?: Data.FullTrainingType | Data.LoRaTrainingType;

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

  export namespace Data {
    /**
     * Learning rate scheduler configuration
     */
    export interface LrScheduler {
      lr_scheduler_type: 'linear' | 'cosine';

      lr_scheduler_args?: LrScheduler.LinearLrSchedulerArgs | LrScheduler.CosineLrSchedulerArgs;
    }

    export namespace LrScheduler {
      export interface LinearLrSchedulerArgs {
        /**
         * The ratio of the final learning rate to the peak learning rate
         */
        min_lr_ratio?: number;
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
    }

    /**
     * Progress information for the fine-tuning job
     */
    export interface Progress {
      /**
       * Whether time estimate is available
       */
      estimate_available: boolean;

      /**
       * Estimated time remaining in seconds for the fine-tuning job to next state
       */
      seconds_remaining: number;
    }

    export interface TrainingMethodSft {
      method: 'sft';

      /**
       * Whether to mask user messages in conversational data or prompts in instruction
       * data.
       */
      train_on_inputs: boolean | 'auto';
    }

    export interface TrainingMethodDpo {
      method: 'dpo';

      dpo_beta?: number;

      dpo_normalize_logratios_by_length?: boolean;

      dpo_reference_free?: boolean;

      rpo_alpha?: number;

      simpo_gamma?: number;
    }

    export interface FullTrainingType {
      type: 'Full';
    }

    export interface LoRaTrainingType {
      lora_alpha: number;

      lora_r: number;

      type: 'Lora';

      lora_dropout?: number;

      /**
       * Comma-separated LoRA target modules. Use `all-linear` for model defaults; MoE
       * expert modules (`w_up`, `w_gate`, `w_down`) are supported on compatible models
       * and cannot be mixed with attention modules.
       */
      lora_trainable_modules?: string;
    }
  }
}

export interface FineTuningDeleteResponse {
  /**
   * Message indicating the result of the deletion
   */
  message?: string;
}

/**
 * A truncated version of the fine-tune response, used for POST /fine-tunes, GET
 * /fine-tunes and POST /fine-tunes/{id}/cancel endpoints
 */
export interface FineTuningCancelResponse {
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
   * ID of the user who owns the fine-tune job.
   */
  user_id: string;

  /**
   * Batch size used for training
   */
  batch_size?: number;

  /**
   * Whether the early-stopping criterion triggered.
   */
  early_stopped?: boolean;

  /**
   * Best validation loss observed, corresponding to early_stopping_best_step. Null
   * if no improving evaluation was recorded.
   */
  early_stopping_best_metric?: number | null;

  /**
   * Step associated with the selected early-stopping artifact. When
   * early_stopping_best_metric is null, no finite best metric was recorded; this is
   * the halt step, not a best-checkpoint step.
   */
  early_stopping_best_step?: number;

  /**
   * Events related to this fine-tune job
   */
  events?: Array<FinetuneEvent>;

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
  lr_scheduler?: FineTuningCancelResponse.LrScheduler;

  /**
   * Maximum gradient norm for clipping
   */
  max_grad_norm?: number;

  /**
   * Maximum sequence length to use for training. If not specified, uses the maximum
   * allowed for the model and training method.
   */
  max_seq_length?: number;

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
   * Whether sequence packing is being used for training.
   */
  packing?: boolean;

  /**
   * Progress information for the fine-tuning job
   */
  progress?: FineTuningCancelResponse.Progress;

  /**
   * Random seed used for training. Integer when set; null if not stored (e.g. legacy
   * jobs) or no explicit seed was recorded.
   */
  random_seed?: number | null;

  /**
   * Start timestamp of the current stage of the fine-tune job
   */
  started_at?: string;

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
  training_method?: FineTuningCancelResponse.TrainingMethodSft | FineTuningCancelResponse.TrainingMethodDpo;

  /**
   * Type of training used (full or LoRA)
   */
  training_type?: FineTuningCancelResponse.FullTrainingType | FineTuningCancelResponse.LoRaTrainingType;

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

export namespace FineTuningCancelResponse {
  /**
   * Learning rate scheduler configuration
   */
  export interface LrScheduler {
    lr_scheduler_type: 'linear' | 'cosine';

    lr_scheduler_args?: LrScheduler.LinearLrSchedulerArgs | LrScheduler.CosineLrSchedulerArgs;
  }

  export namespace LrScheduler {
    export interface LinearLrSchedulerArgs {
      /**
       * The ratio of the final learning rate to the peak learning rate
       */
      min_lr_ratio?: number;
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
  }

  /**
   * Progress information for the fine-tuning job
   */
  export interface Progress {
    /**
     * Whether time estimate is available
     */
    estimate_available: boolean;

    /**
     * Estimated time remaining in seconds for the fine-tuning job to next state
     */
    seconds_remaining: number;
  }

  export interface TrainingMethodSft {
    method: 'sft';

    /**
     * Whether to mask user messages in conversational data or prompts in instruction
     * data.
     */
    train_on_inputs: boolean | 'auto';
  }

  export interface TrainingMethodDpo {
    method: 'dpo';

    dpo_beta?: number;

    dpo_normalize_logratios_by_length?: boolean;

    dpo_reference_free?: boolean;

    rpo_alpha?: number;

    simpo_gamma?: number;
  }

  export interface FullTrainingType {
    type: 'Full';
  }

  export interface LoRaTrainingType {
    lora_alpha: number;

    lora_r: number;

    type: 'Lora';

    lora_dropout?: number;

    /**
     * Comma-separated LoRA target modules. Use `all-linear` for model defaults; MoE
     * expert modules (`w_up`, `w_gate`, `w_down`) are supported on compatible models
     * and cannot be mixed with attention modules.
     */
    lora_trainable_modules?: string;
  }
}

export type FineTuningEstimatePriceResponse =
  | FineTuningEstimatePriceResponse.AvailableEstimate
  | FineTuningEstimatePriceResponse.UnavailableEstimate;

export namespace FineTuningEstimatePriceResponse {
  export interface AvailableEstimate {
    /**
     * Whether price estimation is available for the requested fine-tune job.
     */
    estimation_available: true;

    /**
     * Whether you are allowed to proceed with the fine-tuning job.
     */
    allowed_to_proceed?: boolean;

    /**
     * The estimated number of tokens for evaluation
     */
    estimated_eval_token_count?: number;

    /**
     * The price of the fine-tuning job
     */
    estimated_total_price?: number;

    /**
     * The estimated number of tokens to be trained
     */
    estimated_train_token_count?: number;

    /**
     * Your credit limit in dollars.
     */
    user_limit?: number;
  }

  export interface UnavailableEstimate {
    /**
     * Whether price estimation is available for the requested fine-tune job.
     */
    estimation_available: false;

    /**
     * Reason price estimation is unavailable for the requested fine-tune job.
     */
    unavailable_reason:
      | 'multimodal_dataset'
      | 'train_file_not_validated'
      | 'eval_file_not_validated'
      | 'train_file_invalid'
      | 'eval_file_invalid';
  }
}

export interface FineTuningListCheckpointsResponse {
  data: Array<FineTuningListCheckpointsResponse.Data>;
}

export namespace FineTuningListCheckpointsResponse {
  /**
   * A checkpoint available for a fine-tuning job.
   */
  export interface Data {
    /**
     * Display label for the checkpoint, including the final or intermediate checkpoint
     * step.
     */
    checkpoint_type: string;

    /**
     * Timestamp when the checkpoint was created.
     */
    created_at: string;

    /**
     * Storage path for the checkpoint artifact.
     */
    path: string;

    /**
     * Step represented by the checkpoint; final checkpoints use the shipped model
     * step.
     */
    step: number;

    /**
     * Canonical artifact selector for checkpoint download requests.
     */
    checkpoint?: 'model' | 'adapter';

    /**
     * Together model registry object ID for the checkpoint artifact (e.g. `ml_...`).
     */
    object_id?: string;

    /**
     * Together model registry name for the checkpoint artifact, formatted as
     * `<project_slug>/<checkpoint_name>`.
     */
    object_name?: string;

    /**
     * Together model registry revision ID for the checkpoint artifact (e.g. `rv_...`).
     */
    object_revision_id?: string;
  }
}

export interface FineTuningListEventsResponse {
  data: Array<FinetuneEvent>;
}

export interface FineTuningListMetricsResponse {
  metrics?: Array<{ [key: string]: number }>;
}

export interface FineTuningCreateParams {
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
   * Whether to stop training early when validation loss stops improving. Requires a
   * validation_file, and n_evals must be at least early_stopping_patience +
   * early_stopping_warmup_evals + 1 so a plateau can be detected.
   */
  early_stopping_enabled?: boolean;

  /**
   * Minimum decrease in validation loss for an evaluation to count as an
   * improvement. Larger values treat small gains as non-improvements, causing
   * training to stop sooner. Only applies when early_stopping_enabled is true.
   */
  early_stopping_min_delta?: number;

  /**
   * Number of consecutive evaluations with no improvement in validation loss to
   * allow before stopping. Only applies when early_stopping_enabled is true.
   */
  early_stopping_patience?: number;

  /**
   * Number of initial evaluations excluded from the early-stopping decision. These
   * still establish the baseline validation loss but do not count toward patience.
   * Set to 0 to disable warmup; if omitted, defaults to 1. Only applies when
   * early_stopping_enabled is true.
   */
  early_stopping_warmup_evals?: number | null;

  /**
   * The checkpoint identifier to continue training from a previous fine-tuning job.
   * Format is `{$JOB_ID}` or `{$OUTPUT_MODEL_NAME}` or `{$JOB_ID}:{$STEP}` or
   * `{$OUTPUT_MODEL_NAME}:{$STEP}`. The step value is optional; without it, uses the
   * final checkpoint.
   */
  from_checkpoint?: string;

  /**
   * The Hugging Face Hub repo to start training from. Should be as close as possible
   * to the base model (specified by the `model` argument) in terms of architecture
   * and size.
   */
  from_hf_model?: string;

  /**
   * Number of steps to accumulate gradients before performing a weight update. If
   * omitted or set to 0, the model default is used.
   */
  gradient_accumulation_steps?: number;

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
  lr_scheduler?: FineTuningCreateParams.LrScheduler;

  /**
   * Max gradient norm to be used for gradient clipping. Set to 0 to disable.
   */
  max_grad_norm?: number;

  /**
   * Maximum sequence length to use for training. If not specified, the maximum
   * allowed for the model and training method will be used.
   */
  max_seq_length?: number;

  multimodal_params?: FineTuningCreateParams.MultimodalParams;

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
   * Whether to use sequence packing for training. This flag has no effect if the
   * training data is in Parquet format.
   */
  packing?: boolean;

  /**
   * Random seed for reproducible training. When set, the same seed produces the same
   * run (e.g. data shuffle, init). If omitted or null, the server applies its
   * default seed (e.g. 42).
   */
  random_seed?: number | null;

  /**
   * Suffix to add to your fine-tuned model name. Must be at most 64 characters long.
   */
  suffix?: string;

  /**
   * @deprecated Whether to mask user messages in conversational data or prompts in
   * instruction data.
   */
  train_on_inputs?: boolean | 'auto';

  /**
   * The training method to use. 'sft' for Supervised Fine-Tuning or 'dpo' for Direct
   * Preference Optimization.
   */
  training_method?: FineTuningCreateParams.TrainingMethodSft | FineTuningCreateParams.TrainingMethodDpo;

  /**
   * The training type to use. Defaults to LoRA if not provided.
   */
  training_type?: FineTuningCreateParams.FullTrainingType | FineTuningCreateParams.LoRaTrainingType | null;

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
   * The Weights & Biases entity for your run.
   */
  wandb_entity?: string;

  /**
   * The Weights & Biases name for your run.
   */
  wandb_name?: string;

  /**
   * The Weights & Biases project for your run. If not specified, uses `together` as
   * the project name.
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

export namespace FineTuningCreateParams {
  /**
   * The learning rate scheduler to use. It specifies how the learning rate is
   * adjusted during training.
   */
  export interface LrScheduler {
    lr_scheduler_type: 'linear' | 'cosine';

    lr_scheduler_args?: LrScheduler.LinearLrSchedulerArgs | LrScheduler.CosineLrSchedulerArgs;
  }

  export namespace LrScheduler {
    export interface LinearLrSchedulerArgs {
      /**
       * The ratio of the final learning rate to the peak learning rate
       */
      min_lr_ratio?: number;
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
  }

  export interface MultimodalParams {
    /**
     * Whether to train the vision encoder of the model. Only available for multimodal
     * models.
     */
    train_vision?: boolean;
  }

  export interface TrainingMethodSft {
    method: 'sft';

    /**
     * Whether to mask user messages in conversational data or prompts in instruction
     * data.
     */
    train_on_inputs: boolean | 'auto';
  }

  export interface TrainingMethodDpo {
    method: 'dpo';

    dpo_beta?: number;

    dpo_normalize_logratios_by_length?: boolean;

    dpo_reference_free?: boolean;

    rpo_alpha?: number;

    simpo_gamma?: number;
  }

  export interface FullTrainingType {
    type: 'Full';
  }

  export interface LoRaTrainingType {
    lora_alpha: number;

    lora_r: number;

    type: 'Lora';

    lora_dropout?: number;

    /**
     * Comma-separated LoRA target modules. Use `all-linear` for model defaults; MoE
     * expert modules (`w_up`, `w_gate`, `w_down`) are supported on compatible models
     * and cannot be mixed with attention modules.
     */
    lora_trainable_modules?: string;
  }
}

export interface FineTuningDeleteParams {
  /**
   * Deprecated and unused parameter.
   */
  force?: boolean;
}

export interface FineTuningContentParams {
  /**
   * Fine-tune ID to download. A string that starts with `ft-`.
   */
  ft_id: string;

  /**
   * Specifies checkpoint type to download - `merged` vs `adapter`. This field is
   * required if the checkpoint_step is not set.
   */
  checkpoint?: 'merged' | 'adapter' | 'model_output_path';

  /**
   * Specifies the checkpoint step to download from the list checkpoints response. A
   * final checkpoint step downloads the final model; 0 or omitted downloads the
   * final model by default. Ignores `checkpoint` value if set.
   */
  checkpoint_step?: number;
}

export interface FineTuningEstimatePriceParams {
  /**
   * File-ID of a training file uploaded to the Together API
   */
  training_file: string;

  /**
   * The checkpoint identifier to continue training from a previous fine-tuning job.
   * Format is `{$JOB_ID}` or `{$OUTPUT_MODEL_NAME}` or `{$JOB_ID}:{$STEP}` or
   * `{$OUTPUT_MODEL_NAME}:{$STEP}`. The step value is optional; without it, uses the
   * final checkpoint.
   */
  from_checkpoint?: string;

  /**
   * Name of the base model to run fine-tune job on
   */
  model?: string;

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
   * The training method to use. 'sft' for Supervised Fine-Tuning or 'dpo' for Direct
   * Preference Optimization.
   */
  training_method?:
    | FineTuningEstimatePriceParams.TrainingMethodSft
    | FineTuningEstimatePriceParams.TrainingMethodDpo;

  /**
   * The training type to use. Defaults to LoRA if not provided.
   */
  training_type?:
    | FineTuningEstimatePriceParams.FullTrainingType
    | FineTuningEstimatePriceParams.LoRaTrainingType
    | null;

  /**
   * File-ID of a validation file uploaded to the Together API
   */
  validation_file?: string;
}

export namespace FineTuningEstimatePriceParams {
  export interface TrainingMethodSft {
    method: 'sft';

    /**
     * Whether to mask user messages in conversational data or prompts in instruction
     * data.
     */
    train_on_inputs: boolean | 'auto';
  }

  export interface TrainingMethodDpo {
    method: 'dpo';

    dpo_beta?: number;

    dpo_normalize_logratios_by_length?: boolean;

    dpo_reference_free?: boolean;

    rpo_alpha?: number;

    simpo_gamma?: number;
  }

  export interface FullTrainingType {
    type: 'Full';
  }

  export interface LoRaTrainingType {
    lora_alpha: number;

    lora_r: number;

    type: 'Lora';

    lora_dropout?: number;

    /**
     * Comma-separated LoRA target modules. Use `all-linear` for model defaults; MoE
     * expert modules (`w_up`, `w_gate`, `w_down`) are supported on compatible models
     * and cannot be mixed with attention modules.
     */
    lora_trainable_modules?: string;
  }
}

export interface FineTuningListMetricsParams {
  /**
   * Return only metrics with global_step >= this value.
   */
  global_step_from?: number;

  /**
   * Return only metrics with global_step <= this value.
   */
  global_step_to?: number;

  /**
   * Return only metrics logged at or after this ISO-8601 timestamp.
   */
  logged_at_from?: string;

  /**
   * Return only metrics logged at or before this ISO-8601 timestamp.
   */
  logged_at_to?: string;

  /**
   * Number of (uniformly sampled) train metrics to return.
   */
  resolution?: number;
}

export interface FineTuningModelLimitsParams {
  /**
   * The model name to get limits for.
   */
  model_name: string;
}

export interface FineTuningPreviewParams {
  /**
   * Name of the base model whose tokenizer and chat template will be used.
   */
  model: string;

  /**
   * File-ID of the uploaded JSONL training file to sample for preview.
   */
  training_file: string;

  /**
   * Maximum number of rows from the start of the training file to tokenize.
   */
  top_k?: number;

  /**
   * Whether prompt or user-message tokens should contribute to training loss in the
   * preview.
   */
  train_on_inputs?: boolean;

  /**
   * Fine-tuning method to preview. Only supervised fine-tuning is currently
   * supported.
   */
  training_method?: 'sft';
}

export declare namespace FineTuning {
  export {
    type FineTunePreviewResponse as FineTunePreviewResponse,
    type FineTunePreviewRow as FineTunePreviewRow,
    type FinetuneEvent as FinetuneEvent,
    type FinetuneEventType as FinetuneEventType,
    type FinetuneModelLimits as FinetuneModelLimits,
    type FinetuneResponse as FinetuneResponse,
    type FineTuningCreateResponse as FineTuningCreateResponse,
    type FineTuningListResponse as FineTuningListResponse,
    type FineTuningDeleteResponse as FineTuningDeleteResponse,
    type FineTuningCancelResponse as FineTuningCancelResponse,
    type FineTuningEstimatePriceResponse as FineTuningEstimatePriceResponse,
    type FineTuningListCheckpointsResponse as FineTuningListCheckpointsResponse,
    type FineTuningListEventsResponse as FineTuningListEventsResponse,
    type FineTuningListMetricsResponse as FineTuningListMetricsResponse,
    type FineTuningCreateParams as FineTuningCreateParams,
    type FineTuningDeleteParams as FineTuningDeleteParams,
    type FineTuningContentParams as FineTuningContentParams,
    type FineTuningEstimatePriceParams as FineTuningEstimatePriceParams,
    type FineTuningListMetricsParams as FineTuningListMetricsParams,
    type FineTuningModelLimitsParams as FineTuningModelLimitsParams,
    type FineTuningPreviewParams as FineTuningPreviewParams,
  };
}
