// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as OperationsAPI from './operations';
import {
  OperationRetrieveForwardBackwardParams,
  OperationRetrieveOptimStepParams,
  Operations,
} from './operations';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class TrainingSessions extends APIResource {
  operations: OperationsAPI.Operations = new OperationsAPI.Operations(this._client);

  /**
   * Creates a training session and returns its details.
   */
  create(body: TrainingSessionCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/rl/training-sessions', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Gets a training session by its ID and returns its details.
   */
  retrieve(sessionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/rl/training-sessions/${sessionID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Lists all training sessions.
   */
  list(query: TrainingSessionListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/rl/training-sessions', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Submits a forward-backward pass operation that will asynchronously compute
   * gradients via backpropagation.
   */
  forwardBackward(
    sessionID: string,
    body: TrainingSessionForwardBackwardParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post(path`/rl/training-sessions/${sessionID}:forward-backward`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Submits an optimizer step operation that will asynchronously apply accumulated
   * gradients to update model parameters.
   */
  optimStep(
    sessionID: string,
    body: TrainingSessionOptimStepParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post(path`/rl/training-sessions/${sessionID}:optim-step`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Stops a training session.
   */
  stop(sessionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/rl/training-sessions/${sessionID}:stop`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface TrainingSessionCreateParams {
  body: TrainingSessionCreateParams.Body;
}

export namespace TrainingSessionCreateParams {
  export interface Body {
    /**
     * Base model to use for the training session
     */
    base_model: string;

    /**
     * Checkpoint ID to use for the training session
     */
    checkpoint_id?: string;

    /**
     * LoRA adapter configuration
     */
    lora_config?: Body.LoraConfig;

    /**
     * Learning rate scheduler configuration
     */
    lr_scheduler_config?: Body.LrSchedulerConfig;

    /**
     * Optimizer configuration. If omitted, defaults to AdamW with default parameters.
     */
    optimizer_config?: Body.OptimizerConfig;
  }

  export namespace Body {
    /**
     * LoRA adapter configuration
     */
    export interface LoraConfig {
      /**
       * Alpha of the LoRA adapter
       */
      alpha?: number;

      /**
       * Dropout of the LoRA adapter
       */
      dropout?: number;

      /**
       * Rank of the LoRA adapter
       */
      rank?: number;
    }

    /**
     * Learning rate scheduler configuration
     */
    export interface LrSchedulerConfig {
      /**
       * Linear learning rate scheduler configuration
       */
      linear?: LrSchedulerConfig.Linear;
    }

    export namespace LrSchedulerConfig {
      /**
       * Linear learning rate scheduler configuration
       */
      export interface Linear {
        /**
         * Linear learning rate scheduler parameters
         */
        params?: Linear.Params;
      }

      export namespace Linear {
        /**
         * Linear learning rate scheduler parameters
         */
        export interface Params {
          /**
           * Minimum learning rate at the end of linear decay
           */
          lr_min?: number;

          /**
           * Number of warmup steps
           */
          warmup_steps?: number;
        }
      }
    }

    /**
     * Optimizer configuration. If omitted, defaults to AdamW with default parameters.
     */
    export interface OptimizerConfig {
      /**
       * AdamW optimizer configuration
       */
      adamw?: OptimizerConfig.Adamw;

      /**
       * Maximum gradient norm for gradient clipping. Applies to all optimizer types.
       */
      max_grad_norm?: number;
    }

    export namespace OptimizerConfig {
      /**
       * AdamW optimizer configuration
       */
      export interface Adamw {
        /**
         * AdamW optimizer parameters
         */
        params?: Adamw.Params;
      }

      export namespace Adamw {
        /**
         * AdamW optimizer parameters
         */
        export interface Params {
          /**
           * First moment decay rate
           */
          beta1?: number;

          /**
           * Second moment decay rate
           */
          beta2?: number;

          /**
           * Epsilon for numerical stability
           */
          eps?: number;

          /**
           * Learning rate
           */
          lr?: number;

          /**
           * Weight decay coefficient
           */
          weight_decay?: number;
        }
      }
    }
  }
}

export interface TrainingSessionListParams {
  /**
   * Maximum number of sessions to return (1-100)
   */
  limit?: string;

  /**
   * Number of sessions to skip
   */
  offset?: string;

  status?: string;
}

export interface TrainingSessionForwardBackwardParams {
  body: TrainingSessionForwardBackwardParams.Body;
}

export namespace TrainingSessionForwardBackwardParams {
  export interface Body {
    /**
     * Loss function to use for gradient computation
     */
    loss_fn: 'LOSS_FN_UNSPECIFIED' | 'LOSS_FN_GRPO';

    /**
     * Batch of training samples to process
     */
    samples: Array<Body.Sample>;
  }

  export namespace Body {
    export interface Sample {
      /**
       * Loss function inputs
       */
      loss_fn_inputs: Sample.LossFnInputs;

      /**
       * Model input
       */
      model_input: Sample.ModelInput;
    }

    export namespace Sample {
      /**
       * Loss function inputs
       */
      export interface LossFnInputs {
        /**
         * Target tokens for loss computation
         */
        target_tokens: LossFnInputs.TargetTokens;

        /**
         * Per-token weights
         */
        weights: LossFnInputs.Weights;
      }

      export namespace LossFnInputs {
        /**
         * Target tokens for loss computation
         */
        export interface TargetTokens {
          /**
           * Integer array of target tokens
           */
          data: Array<number>;

          /**
           * Data type of the integer array
           */
          dtype?: 'D_TYPE_UNSPECIFIED' | 'D_TYPE_INT64' | 'D_TYPE_FLOAT32' | 'D_TYPE_BFLOAT16';
        }

        /**
         * Per-token weights
         */
        export interface Weights {
          /**
           * Float array of per-token weights
           */
          data: Array<number>;

          /**
           * Data type of the float array
           */
          dtype?: 'D_TYPE_UNSPECIFIED' | 'D_TYPE_INT64' | 'D_TYPE_FLOAT32' | 'D_TYPE_BFLOAT16';
        }
      }

      /**
       * Model input
       */
      export interface ModelInput {
        /**
         * Input chunks for the model
         */
        chunks: Array<ModelInput.Chunk>;
      }

      export namespace ModelInput {
        export interface Chunk {
          encoded_text?: Chunk.EncodedText;
        }

        export namespace Chunk {
          export interface EncodedText {
            /**
             * Pre-tokenized text input
             */
            tokens?: Array<number>;
          }
        }
      }
    }
  }
}

export interface TrainingSessionOptimStepParams {
  body: unknown;
}

TrainingSessions.Operations = Operations;

export declare namespace TrainingSessions {
  export {
    type TrainingSessionCreateParams as TrainingSessionCreateParams,
    type TrainingSessionListParams as TrainingSessionListParams,
    type TrainingSessionForwardBackwardParams as TrainingSessionForwardBackwardParams,
    type TrainingSessionOptimStepParams as TrainingSessionOptimStepParams,
  };

  export {
    Operations as Operations,
    type OperationRetrieveForwardBackwardParams as OperationRetrieveForwardBackwardParams,
    type OperationRetrieveOptimStepParams as OperationRetrieveOptimStepParams,
  };
}
