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
}

export interface FinetuneEvent {
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

  type: FinetuneEventType;

  wandb_url: string;

  level?: 'info' | 'warning' | 'error' | 'legacy_info' | 'legacy_iwarning' | 'legacy_ierror' | null;
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
  | 'warning';

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

  batch_size?: number | 'max';

  created_at?: string;

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
   * Batch size used for training
   */
  batch_size?: number;

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
  training_method?: FineTuningCreateResponse.TrainingMethodSft | FineTuningCreateResponse.TrainingMethodDpo;

  /**
   * Type of training used (full or LoRA)
   */
  training_type?: FineTuningCreateResponse.FullTrainingType | FineTuningCreateResponse.LoRaTrainingType;

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
     * Batch size used for training
     */
    batch_size?: number;

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
   * Batch size used for training
   */
  batch_size?: number;

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
  training_method?: FineTuningCancelResponse.TrainingMethodSft | FineTuningCancelResponse.TrainingMethodDpo;

  /**
   * Type of training used (full or LoRA)
   */
  training_type?: FineTuningCancelResponse.FullTrainingType | FineTuningCancelResponse.LoRaTrainingType;

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

    lora_trainable_modules?: string;
  }
}

export interface FineTuningListCheckpointsResponse {
  data: Array<FineTuningListCheckpointsResponse.Data>;
}

export namespace FineTuningListCheckpointsResponse {
  export interface Data {
    checkpoint_type: string;

    created_at: string;

    path: string;

    step: number;
  }
}

export interface FineTuningListEventsResponse {
  data: Array<FinetuneEvent>;
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
  lr_scheduler?: FineTuningCreateParams.LrScheduler;

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
  training_method?: FineTuningCreateParams.TrainingMethodSft | FineTuningCreateParams.TrainingMethodDpo;

  training_type?: FineTuningCreateParams.FullTrainingType | FineTuningCreateParams.LoRaTrainingType;

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

    lora_trainable_modules?: string;
  }
}

export interface FineTuningDeleteParams {
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
   * Specifies step number for checkpoint to download. Ignores `checkpoint` value if
   * set.
   */
  checkpoint_step?: number;
}

export declare namespace FineTuning {
  export {
    type FinetuneEvent as FinetuneEvent,
    type FinetuneEventType as FinetuneEventType,
    type FinetuneResponse as FinetuneResponse,
    type FineTuningCreateResponse as FineTuningCreateResponse,
    type FineTuningListResponse as FineTuningListResponse,
    type FineTuningDeleteResponse as FineTuningDeleteResponse,
    type FineTuningCancelResponse as FineTuningCancelResponse,
    type FineTuningListCheckpointsResponse as FineTuningListCheckpointsResponse,
    type FineTuningListEventsResponse as FineTuningListEventsResponse,
    type FineTuningCreateParams as FineTuningCreateParams,
    type FineTuningDeleteParams as FineTuningDeleteParams,
    type FineTuningContentParams as FineTuningContentParams,
  };
}
