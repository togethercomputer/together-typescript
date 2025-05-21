// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

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
  create(body: FineTuneCreateParams, options?: Core.RequestOptions): Core.APIPromise<FineTuneCreateResponse> {
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
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<FineTune> {
    return this._client.get(`/fine-tunes/${id}`, options);
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
  list(options?: Core.RequestOptions): Core.APIPromise<FineTuneListResponse> {
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
  cancel(id: string, options?: Core.RequestOptions): Core.APIPromise<FineTuneCancelResponse> {
    return this._client.post(`/fine-tunes/${id}/cancel`, options);
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
  download(
    query: FineTuneDownloadParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FineTuneDownloadResponse> {
    return this._client.get('/finetune/download', { query, ...options });
  }

  /**
   * List the events for a single fine-tuning job.
   *
   * @example
   * ```ts
   * const fineTuneEvent = await client.fineTune.listEvents(
   *   'id',
   * );
   * ```
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

  batch_size?: number | 'max';

  created_at?: string;

  epochs_completed?: number;

  eval_steps?: number;

  events?: Array<FineTune.Event>;

  from_checkpoint?: string;

  job_id?: string;

  learning_rate?: number;

  lr_scheduler?: FineTune.LrScheduler;

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

  training_method?: FineTune.TrainingMethodSft | FineTune.TrainingMethodDpo;

  training_type?: FineTune.FullTrainingType | FineTune.LoRaTrainingType;

  trainingfile_numlines?: number;

  trainingfile_size?: number;

  updated_at?: string;

  validation_file?: string;

  wandb_project_name?: string;

  wandb_url?: string;

  warmup_ratio?: number;

  weight_decay?: number;
}

export namespace FineTune {
  export interface Event {
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
      min_lr_ratio?: number;

      /**
       * Number or fraction of cycles for the cosine learning rate scheduler
       */
      num_cycles?: number;
    }
  }

  export interface TrainingMethodSft {
    method: 'sft';

    /**
     * Whether to mask the user messages in conversational data or prompts in
     * instruction data.
     */
    train_on_inputs: boolean | 'auto';
  }

  export interface TrainingMethodDpo {
    method: 'dpo';

    dpo_beta?: number;
  }

  export interface FullTrainingType {
    type: 'Full';
  }

  export interface LoRaTrainingType {
    lora_alpha: number;

    lora_r: number;

    type: 'Lora';

    lora_dropout?: number;

    lora_trainable_modules?: string;
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

    level?: 'info' | 'warning' | 'error' | 'legacy_info' | 'legacy_iwarning' | 'legacy_ierror' | null;
  }
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
  events?: Array<FineTuneCreateResponse.Event>;

  /**
   * Checkpoint used to continue training
   */
  from_checkpoint?: string;

  /**
   * Learning rate used for training
   */
  learning_rate?: number;

  /**
   * Learning rate scheduler configuration
   */
  lr_scheduler?: FineTuneCreateResponse.LrScheduler;

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
  training_method?: FineTuneCreateResponse.TrainingMethodSft | FineTuneCreateResponse.TrainingMethodDpo;

  /**
   * Type of training used (full or LoRA)
   */
  training_type?: FineTuneCreateResponse.FullTrainingType | FineTuneCreateResponse.LoRaTrainingType;

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

export namespace FineTuneCreateResponse {
  export interface Event {
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
      min_lr_ratio?: number;

      /**
       * Number or fraction of cycles for the cosine learning rate scheduler
       */
      num_cycles?: number;
    }
  }

  export interface TrainingMethodSft {
    method: 'sft';

    /**
     * Whether to mask the user messages in conversational data or prompts in
     * instruction data.
     */
    train_on_inputs: boolean | 'auto';
  }

  export interface TrainingMethodDpo {
    method: 'dpo';

    dpo_beta?: number;
  }

  export interface FullTrainingType {
    type: 'Full';
  }

  export interface LoRaTrainingType {
    lora_alpha: number;

    lora_r: number;

    type: 'Lora';

    lora_dropout?: number;

    lora_trainable_modules?: string;
  }
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
    events?: Array<Data.Event>;

    /**
     * Checkpoint used to continue training
     */
    from_checkpoint?: string;

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
    training_method?: Data.TrainingMethodSft | Data.TrainingMethodDpo;

    /**
     * Type of training used (full or LoRA)
     */
    training_type?: Data.FullTrainingType | Data.LoRaTrainingType;

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

  export namespace Data {
    export interface Event {
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
        min_lr_ratio?: number;

        /**
         * Number or fraction of cycles for the cosine learning rate scheduler
         */
        num_cycles?: number;
      }
    }

    export interface TrainingMethodSft {
      method: 'sft';

      /**
       * Whether to mask the user messages in conversational data or prompts in
       * instruction data.
       */
      train_on_inputs: boolean | 'auto';
    }

    export interface TrainingMethodDpo {
      method: 'dpo';

      dpo_beta?: number;
    }

    export interface FullTrainingType {
      type: 'Full';
    }

    export interface LoRaTrainingType {
      lora_alpha: number;

      lora_r: number;

      type: 'Lora';

      lora_dropout?: number;

      lora_trainable_modules?: string;
    }
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
  events?: Array<FineTuneCancelResponse.Event>;

  /**
   * Checkpoint used to continue training
   */
  from_checkpoint?: string;

  /**
   * Learning rate used for training
   */
  learning_rate?: number;

  /**
   * Learning rate scheduler configuration
   */
  lr_scheduler?: FineTuneCancelResponse.LrScheduler;

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
  training_method?: FineTuneCancelResponse.TrainingMethodSft | FineTuneCancelResponse.TrainingMethodDpo;

  /**
   * Type of training used (full or LoRA)
   */
  training_type?: FineTuneCancelResponse.FullTrainingType | FineTuneCancelResponse.LoRaTrainingType;

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

export namespace FineTuneCancelResponse {
  export interface Event {
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
      min_lr_ratio?: number;

      /**
       * Number or fraction of cycles for the cosine learning rate scheduler
       */
      num_cycles?: number;
    }
  }

  export interface TrainingMethodSft {
    method: 'sft';

    /**
     * Whether to mask the user messages in conversational data or prompts in
     * instruction data.
     */
    train_on_inputs: boolean | 'auto';
  }

  export interface TrainingMethodDpo {
    method: 'dpo';

    dpo_beta?: number;
  }

  export interface FullTrainingType {
    type: 'Full';
  }

  export interface LoRaTrainingType {
    lora_alpha: number;

    lora_r: number;

    type: 'Lora';

    lora_dropout?: number;

    lora_trainable_modules?: string;
  }
}

export interface FineTuneDownloadResponse {
  id?: string;

  checkpoint_step?: number;

  filename?: string;

  object?: 'local' | null;

  size?: number;
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
   * Controls how quickly the model adapts to new information (too high may cause
   * instability, too low may slow convergence)
   */
  learning_rate?: number;

  /**
   * The learning rate scheduler to use. It specifies how the learning rate is
   * adjusted during training.
   */
  lr_scheduler?: FineTuneCreateParams.LrScheduler;

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
  training_method?: FineTuneCreateParams.TrainingMethodSft | FineTuneCreateParams.TrainingMethodDpo;

  training_type?: FineTuneCreateParams.FullTrainingType | FineTuneCreateParams.LoRaTrainingType;

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

export namespace FineTuneCreateParams {
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
      min_lr_ratio?: number;

      /**
       * Number or fraction of cycles for the cosine learning rate scheduler
       */
      num_cycles?: number;
    }
  }

  export interface TrainingMethodSft {
    method: 'sft';

    /**
     * Whether to mask the user messages in conversational data or prompts in
     * instruction data.
     */
    train_on_inputs: boolean | 'auto';
  }

  export interface TrainingMethodDpo {
    method: 'dpo';

    dpo_beta?: number;
  }

  export interface FullTrainingType {
    type: 'Full';
  }

  export interface LoRaTrainingType {
    lora_alpha: number;

    lora_r: number;

    type: 'Lora';

    lora_dropout?: number;

    lora_trainable_modules?: string;
  }
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
    type FineTune as FineTune,
    type FineTuneEvent as FineTuneEvent,
    type FineTuneCreateResponse as FineTuneCreateResponse,
    type FineTuneListResponse as FineTuneListResponse,
    type FineTuneCancelResponse as FineTuneCancelResponse,
    type FineTuneDownloadResponse as FineTuneDownloadResponse,
    type FineTuneCreateParams as FineTuneCreateParams,
    type FineTuneDownloadParams as FineTuneDownloadParams,
  };
}
