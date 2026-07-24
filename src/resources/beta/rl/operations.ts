// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as OperationsAPI from './operations';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Operations extends APIResource {
  /**
   * Submits an operation that will asynchronously save the current LoRA adapter as
   * an inference checkpoint and upload it to object storage.
   *
   * @example
   * ```ts
   * const inferenceCheckpointOperation =
   *   await client.beta.rl.operations.createInferenceCheckpoint(
   *     'session_id',
   *   );
   * ```
   */
  createInferenceCheckpoint(
    sessionID: string,
    options?: RequestOptions,
  ): APIPromise<InferenceCheckpointOperation> {
    return this._client.post(
      path`/rl/training-sessions/${sessionID}/operations/inference-checkpoint`,
      options,
    );
  }

  /**
   * Submits an operation that will asynchronously save the full training state
   * (adapter + optimizer + step).
   *
   * @example
   * ```ts
   * const trainingCheckpointOperation =
   *   await client.beta.rl.operations.createTrainingCheckpoint(
   *     'session_id',
   *   );
   * ```
   */
  createTrainingCheckpoint(
    sessionID: string,
    options?: RequestOptions,
  ): APIPromise<TrainingCheckpointOperation> {
    return this._client.post(
      path`/rl/training-sessions/${sessionID}/operations/training-checkpoint`,
      options,
    );
  }

  /**
   * Submits a forward-backward pass driven by externally computed gradients of the
   * loss with respect to per-token log-probabilities.
   *
   * @example
   * ```ts
   * const customForwardBackwardOperation =
   *   await client.beta.rl.operations.customForwardBackward(
   *     'session_id',
   *     {
   *       gradients: [
   *         { data: [-0.1, 0.05, -0.08, 0.12, -0.03] },
   *       ],
   *       samples: [
   *         {
   *           loss_inputs: {
   *             target_tokens: { data: [123, 456, 789] },
   *           },
   *           model_input: { chunks: [{}] },
   *           policy_segments: [{ start_token: 0, version: 5 }],
   *         },
   *       ],
   *     },
   *   );
   * ```
   */
  customForwardBackward(
    sessionID: string,
    body: OperationCustomForwardBackwardParams,
    options?: RequestOptions,
  ): APIPromise<CustomForwardBackwardOperation> {
    return this._client.post(path`/rl/training-sessions/${sessionID}/operations/custom-forward-backward`, {
      body,
      ...options,
    });
  }

  /**
   * Submits a forward operation that will asynchronously run a no-grad forward pass
   * and return per-token log-probabilities for each sample.
   *
   * @example
   * ```ts
   * const forwardOperation =
   *   await client.beta.rl.operations.forward('session_id', {
   *     samples: [
   *       {
   *         loss_inputs: {
   *           target_tokens: { data: [123, 456, 789] },
   *         },
   *         model_input: { chunks: [{}] },
   *         policy_segments: [{ start_token: 0, version: 5 }],
   *       },
   *     ],
   *   });
   * ```
   */
  forward(
    sessionID: string,
    body: OperationForwardParams,
    options?: RequestOptions,
  ): APIPromise<ForwardOperation> {
    return this._client.post(path`/rl/training-sessions/${sessionID}/operations/forward`, {
      body,
      ...options,
    });
  }

  /**
   * Submits a forward-backward pass operation that will asynchronously compute
   * gradients via backpropagation.
   *
   * @example
   * ```ts
   * const forwardBackwardOperation =
   *   await client.beta.rl.operations.forwardBackward(
   *     'session_id',
   *     {
   *       loss: { type: 'LOSS_TYPE_GRPO' },
   *       samples: [
   *         {
   *           loss_inputs: {
   *             target_tokens: { data: [123, 456, 789] },
   *           },
   *           model_input: { chunks: [{}] },
   *           policy_segments: [{ start_token: 0, version: 5 }],
   *         },
   *       ],
   *     },
   *   );
   * ```
   */
  forwardBackward(
    sessionID: string,
    body: OperationForwardBackwardParams,
    options?: RequestOptions,
  ): APIPromise<ForwardBackwardOperation> {
    return this._client.post(path`/rl/training-sessions/${sessionID}/operations/forward-backward`, {
      body,
      ...options,
    });
  }

  /**
   * Submits an optimizer step operation that will asynchronously apply accumulated
   * gradients to update model parameters.
   *
   * @example
   * ```ts
   * const optimStepOperation =
   *   await client.beta.rl.operations.optimStep('session_id', {
   *     weight_sync_type: 'WEIGHT_SYNC_TYPE_UNSPECIFIED',
   *   });
   * ```
   */
  optimStep(
    sessionID: string,
    body: OperationOptimStepParams,
    options?: RequestOptions,
  ): APIPromise<OptimStepOperation> {
    return this._client.post(path`/rl/training-sessions/${sessionID}/operations/optim-step`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieves the current status and result of a custom forward-backward operation.
   *
   * @example
   * ```ts
   * const customForwardBackwardOperation =
   *   await client.beta.rl.operations.retrieveCustomForwardBackward(
   *     'operation_id',
   *     { session_id: 'session_id' },
   *   );
   * ```
   */
  retrieveCustomForwardBackward(
    operationID: string,
    params: OperationRetrieveCustomForwardBackwardParams,
    options?: RequestOptions,
  ): APIPromise<CustomForwardBackwardOperation> {
    const { session_id } = params;
    return this._client.get(
      path`/rl/training-sessions/${session_id}/operations/custom-forward-backward/${operationID}`,
      options,
    );
  }

  /**
   * Retrieves the current status and result of a forward operation.
   *
   * @example
   * ```ts
   * const forwardOperation =
   *   await client.beta.rl.operations.retrieveForward(
   *     'operation_id',
   *     { session_id: 'session_id' },
   *   );
   * ```
   */
  retrieveForward(
    operationID: string,
    params: OperationRetrieveForwardParams,
    options?: RequestOptions,
  ): APIPromise<ForwardOperation> {
    const { session_id } = params;
    return this._client.get(
      path`/rl/training-sessions/${session_id}/operations/forward/${operationID}`,
      options,
    );
  }

  /**
   * Retrieves the current status and result of a forward-backward operation.
   *
   * @example
   * ```ts
   * const forwardBackwardOperation =
   *   await client.beta.rl.operations.retrieveForwardBackward(
   *     'operation_id',
   *     { session_id: 'session_id' },
   *   );
   * ```
   */
  retrieveForwardBackward(
    operationID: string,
    params: OperationRetrieveForwardBackwardParams,
    options?: RequestOptions,
  ): APIPromise<ForwardBackwardOperation> {
    const { session_id } = params;
    return this._client.get(
      path`/rl/training-sessions/${session_id}/operations/forward-backward/${operationID}`,
      options,
    );
  }

  /**
   * Retrieves the current status and result of an inference checkpoint operation.
   *
   * @example
   * ```ts
   * const inferenceCheckpointOperation =
   *   await client.beta.rl.operations.retrieveInferenceCheckpoint(
   *     'operation_id',
   *     { session_id: 'session_id' },
   *   );
   * ```
   */
  retrieveInferenceCheckpoint(
    operationID: string,
    params: OperationRetrieveInferenceCheckpointParams,
    options?: RequestOptions,
  ): APIPromise<InferenceCheckpointOperation> {
    const { session_id } = params;
    return this._client.get(
      path`/rl/training-sessions/${session_id}/operations/inference-checkpoint/${operationID}`,
      options,
    );
  }

  /**
   * Retrieves the current status and result of an optim-step operation.
   *
   * @example
   * ```ts
   * const optimStepOperation =
   *   await client.beta.rl.operations.retrieveOptimStep(
   *     'operation_id',
   *     { session_id: 'session_id' },
   *   );
   * ```
   */
  retrieveOptimStep(
    operationID: string,
    params: OperationRetrieveOptimStepParams,
    options?: RequestOptions,
  ): APIPromise<OptimStepOperation> {
    const { session_id } = params;
    return this._client.get(
      path`/rl/training-sessions/${session_id}/operations/optim-step/${operationID}`,
      options,
    );
  }

  /**
   * Retrieves the current status and result of a sample operation.
   *
   * @example
   * ```ts
   * const sampleOperation =
   *   await client.beta.rl.operations.retrieveSample(
   *     'operation_id',
   *     { session_id: 'session_id' },
   *   );
   * ```
   */
  retrieveSample(
    operationID: string,
    params: OperationRetrieveSampleParams,
    options?: RequestOptions,
  ): APIPromise<SampleOperation> {
    const { session_id } = params;
    return this._client.get(
      path`/rl/training-sessions/${session_id}/operations/sample/${operationID}`,
      options,
    );
  }

  /**
   * Retrieves the current status and result of a save training checkpoint operation.
   *
   * @example
   * ```ts
   * const trainingCheckpointOperation =
   *   await client.beta.rl.operations.retrieveTrainingCheckpoint(
   *     'operation_id',
   *     { session_id: 'session_id' },
   *   );
   * ```
   */
  retrieveTrainingCheckpoint(
    operationID: string,
    params: OperationRetrieveTrainingCheckpointParams,
    options?: RequestOptions,
  ): APIPromise<TrainingCheckpointOperation> {
    const { session_id } = params;
    return this._client.get(
      path`/rl/training-sessions/${session_id}/operations/training-checkpoint/${operationID}`,
      options,
    );
  }

  /**
   * Submits a sample operation that will asynchronously generate text completions
   * with logprobs.
   *
   * @example
   * ```ts
   * const sampleOperation =
   *   await client.beta.rl.operations.sample('session_id', {
   *     model_inputs: [{ chunks: [{}] }],
   *   });
   * ```
   */
  sample(
    sessionID: string,
    body: OperationSampleParams,
    options?: RequestOptions,
  ): APIPromise<SampleOperation> {
    return this._client.post(path`/rl/training-sessions/${sessionID}/operations/sample`, {
      body,
      ...options,
    });
  }
}

/**
 * Per-step AdamW optimizer overrides.
 */
export interface AdamwOptimizerParams {
  /**
   * Exponential decay rate for the first-moment estimate
   */
  beta1?: number;

  /**
   * Exponential decay rate for the second-moment estimate
   */
  beta2?: number;

  /**
   * Epsilon for numerical stability
   */
  eps?: number;

  /**
   * Learning rate for the AdamW-tuned parameters
   */
  learning_rate?: number;

  /**
   * Weight decay coefficient
   */
  weight_decay?: number;
}

export interface CispoLossInputs {
  /**
   * Per-token advantages for CISPO
   */
  advantages: LossAdvantages;

  /**
   * Generator log probabilities for CISPO
   */
  generator_logprobs: LossLogprobs;
}

export interface CispoLossParams {
  /**
   * Upper absolute bound for the importance ratio; the clipped ratio is applied as a
   * detached coefficient
   */
  clip_high_threshold?: number;

  /**
   * Lower absolute bound for the importance ratio; the clipped ratio is applied as a
   * detached coefficient
   */
  clip_low_threshold?: number;
}

/**
 * Cross-entropy loss parameters (currently empty).
 */
export type CrossEntropyLossParams = unknown;

/**
 * Async custom forward-backward pass operation
 */
export interface CustomForwardBackwardOperation {
  /**
   * Operation ID
   */
  id: string;

  /**
   * Operation status
   */
  status: TrainingOperationStatus;

  /**
   * Error details on failure
   */
  error?: TrainingOperationError;

  /**
   * Result on success
   */
  output?: CustomForwardBackwardResult;
}

/**
 * Result of a custom forward-backward pass operation
 */
export type CustomForwardBackwardResult = unknown;

export type DType = 'D_TYPE_UNSPECIFIED' | 'D_TYPE_INT64' | 'D_TYPE_FLOAT32' | 'D_TYPE_BFLOAT16';

export interface DroLossInputs {
  /**
   * Per-token advantages for DRO
   */
  advantages: LossAdvantages;

  /**
   * Generator log probabilities for DRO
   */
  generator_logprobs: LossLogprobs;
}

export interface DroLossParams {
  /**
   * Coefficient on the quadratic log-ratio penalty. Required; there is no default.
   */
  beta: number;
}

/**
 * Async forward-backward pass operation
 */
export interface ForwardBackwardOperation {
  /**
   * Operation ID
   */
  id: string;

  /**
   * Operation status
   */
  status: TrainingOperationStatus;

  /**
   * Error details on failure
   */
  error?: TrainingOperationError;

  /**
   * Result on success
   */
  output?: ForwardBackwardResult;
}

/**
 * Result of a forward-backward pass operation
 */
export interface ForwardBackwardResult {
  /**
   * Loss value
   */
  loss: number;

  /**
   * Loss-specific metrics (e.g., KL divergence, clip fraction for GRPO)
   */
  metrics?: { [key: string]: number };
}

/**
 * Async forward pass operation
 */
export interface ForwardOperation {
  /**
   * Operation ID
   */
  id: string;

  /**
   * Operation status
   */
  status: TrainingOperationStatus;

  /**
   * Error details on failure
   */
  error?: TrainingOperationError;

  /**
   * Result on success
   */
  output?: ForwardResult;
}

/**
 * Result of a forward pass operation
 */
export interface ForwardResult {
  /**
   * Per-sample per-token log-probabilities
   */
  logprobs: Array<ForwardResult.Logprob>;
}

export namespace ForwardResult {
  /**
   * Per-token log-probabilities from the target model
   */
  export interface Logprob {
    /**
     * Float array of per-token log probabilities
     */
    data: Array<number>;
  }
}

export type GrpoLossAggregationType =
  | 'GRPO_LOSS_AGGREGATION_TYPE_UNSPECIFIED'
  | 'GRPO_LOSS_AGGREGATION_TYPE_FIXED_HORIZON'
  | 'GRPO_LOSS_AGGREGATION_TYPE_TOKEN_MEAN'
  | 'GRPO_LOSS_AGGREGATION_TYPE_SEQUENCE_MEAN';

export interface GrpoLossInputs {
  /**
   * Per-token advantages for GRPO
   */
  advantages: LossAdvantages;

  /**
   * Generator log probabilities for GRPO
   */
  generator_logprobs: LossLogprobs;

  /**
   * Reference model log probabilities (required if beta > 0)
   */
  reference_logprobs?: LossLogprobs;
}

export interface GrpoLossParams {
  /**
   * Aggregation type for loss computation
   */
  agg_type?: GrpoLossAggregationType;

  /**
   * KL penalty coefficient
   */
  beta?: number;

  /**
   * Upper clip threshold for the importance-sampling ratio. The ratio is clamped to
   * this bound; tighter clipping makes policy updates more conservative. Must
   * be >= 1.
   */
  clip_high_threshold?: number;

  /**
   * Lower clip threshold for the importance-sampling ratio. The ratio is clamped to
   * this bound; tighter clipping makes policy updates more conservative. Must be
   * <= 1.
   */
  clip_low_threshold?: number;

  /**
   * Controls how the importance-sampling ratio is computed in GRPO loss. Defaults to
   * token-level ratios, which is the standard GRPO behavior. Use sequence-level
   * ratios to enable GSPO-style loss calculation instead.
   */
  ratio_type?: GrpoLossRatioType;
}

/**
 * Controls whether GRPO loss uses token-level or sequence-level importance ratios.
 */
export type GrpoLossRatioType = 'GRPO_LOSS_RATIO_TYPE_TOKEN' | 'GRPO_LOSS_RATIO_TYPE_SEQUENCE';

/**
 * Loss inputs for unclipped importance-sampling policy-gradient updates.
 */
export interface ImportanceSamplingLossInputs {
  /**
   * Per-token advantages for importance sampling
   */
  advantages: LossAdvantages;

  /**
   * Generator log probabilities for importance sampling
   */
  generator_logprobs: LossLogprobs;
}

/**
 * Async inference checkpoint operation
 */
export interface InferenceCheckpointOperation {
  /**
   * Operation ID
   */
  id: string;

  /**
   * Operation status
   */
  status: TrainingOperationStatus;

  /**
   * Error details on failure
   */
  error?: TrainingOperationError;

  /**
   * Result on success
   */
  output?: InferenceCheckpointResult;
}

/**
 * Result of an inference checkpoint operation
 */
export interface InferenceCheckpointResult {
  /**
   * Registered model name for downloading the checkpoint
   */
  model_name: string;
}

export interface LossAdvantages {
  /**
   * Float array of per-token advantages
   */
  data: Array<number>;

  /**
   * Data type of the float array (D_TYPE_FLOAT32 or D_TYPE_BFLOAT16)
   */
  dtype?: DType;
}

export interface LossConfig {
  /**
   * Type of loss function to use
   */
  type: LossType;

  cispo_params?: CispoLossParams;

  /**
   * Cross-entropy loss parameters (currently empty).
   */
  cross_entropy_params?: CrossEntropyLossParams;

  dro_params?: DroLossParams;

  grpo_params?: GrpoLossParams;

  ppo_params?: PpoLossParams;
}

/**
 * Token-level inputs used to compute the loss for one training sample.
 */
export interface LossInputs {
  /**
   * Target tokens for loss computation
   */
  target_tokens: LossTargetTokens;

  cispo_inputs?: CispoLossInputs;

  dro_inputs?: DroLossInputs;

  /**
   * Inputs required when the loss type is GRPO
   */
  grpo_inputs?: GrpoLossInputs;

  /**
   * Inputs required when the loss type is importance sampling
   */
  importance_sampling_inputs?: ImportanceSamplingLossInputs;

  /**
   * Per-token loss mask (1=compute loss, 0=ignore). Required for cross-entropy
   * forward-backward; optional for forward and advantage-based losses, where
   * omission includes all tokens.
   */
  loss_mask?: LossMask;

  ppo_inputs?: PpoLossInputs;
}

export interface LossLogprobs {
  /**
   * Float array of per-token log probabilities
   */
  data: Array<number>;

  /**
   * Data type of the float array (D_TYPE_FLOAT32 or D_TYPE_BFLOAT16)
   */
  dtype?: DType;
}

/**
 * Per-token loss mask (1=compute loss, 0=ignore)
 */
export interface LossMask {
  /**
   * Integer array of per-token mask values (0s and 1s)
   */
  data: Array<string | number>;

  /**
   * Data type of the integer array (must be D_TYPE_INT64)
   */
  dtype?: DType;
}

export interface LossTargetTokens {
  /**
   * Integer array of target tokens
   */
  data: Array<string | number>;

  /**
   * Data type of the integer array
   */
  dtype?: DType;
}

/**
 * Type of loss function used for RL training.
 */
export type LossType =
  | 'LOSS_TYPE_UNSPECIFIED'
  | 'LOSS_TYPE_CROSS_ENTROPY'
  | 'LOSS_TYPE_GRPO'
  | 'LOSS_TYPE_IMPORTANCE_SAMPLING'
  | 'LOSS_TYPE_PPO'
  | 'LOSS_TYPE_CISPO'
  | 'LOSS_TYPE_DRO';

/**
 * Per-step Muon optimizer overrides
 */
export interface MuonOptimizerParams {
  /**
   * Per-step AdamW optimizer overrides for the AdamW-tuned parameters in a
   * Muon-tuned optimizer session.
   */
  adamw?: AdamwOptimizerParams;

  /**
   * Learning rate for this Muon optimizer step.
   */
  learning_rate?: number;

  /**
   * Momentum coefficient
   */
  momentum?: number;

  /**
   * Number of Newton-Schulz iterations
   */
  newton_schulz_steps?: number;

  /**
   * Weight decay coefficient
   */
  weight_decay?: number;
}

/**
 * Async optimizer step operation
 */
export interface OptimStepOperation {
  /**
   * Operation ID
   */
  id: string;

  /**
   * Operation status
   */
  status: TrainingOperationStatus;

  /**
   * Error details on failure
   */
  error?: TrainingOperationError;

  /**
   * Result on success
   */
  output?: OptimStepResult;
}

/**
 * Result of an optimizer step operation
 */
export interface OptimStepResult {
  /**
   * Step number
   */
  step: string | number;
}

/**
 * A (policy version, starting token) span within a rollout. Version 0 is the
 * initial model; each optim_step call increments the version by 1.
 */
export interface PolicyVersionSegment {
  /**
   * Index of the first token of this segment within the rollout's token sequence.
   * Always 0 for the first segment.
   */
  start_token: number;

  /**
   * Model version under which this segment of tokens was generated
   */
  version: number;
}

export interface PpoLossInputs {
  /**
   * Per-token advantages for PPO
   */
  advantages: LossAdvantages;

  /**
   * Generator log probabilities for PPO
   */
  generator_logprobs: LossLogprobs;
}

export interface PpoLossParams {
  /**
   * Upper absolute bound for the importance ratio in the clipped surrogate. Must
   * be >= 1.
   */
  clip_high_threshold?: number;

  /**
   * Lower absolute bound for the importance ratio in the clipped surrogate. Must be
   * <= 1.
   */
  clip_low_threshold?: number;
}

/**
 * Async sample operation
 */
export interface SampleOperation {
  /**
   * Operation ID
   */
  id: string;

  /**
   * Operation status
   */
  status: TrainingOperationStatus;

  /**
   * Error details on failure
   */
  error?: TrainingOperationError;

  /**
   * Result on success
   */
  output?: SampleOperation.Output;
}

export namespace SampleOperation {
  /**
   * Result on success
   */
  export interface Output {
    /**
     * One result per model input
     */
    results: Array<OperationsAPI.SampleResult>;
  }
}

/**
 * Completions generated for a single model input
 */
export interface SampleResult {
  /**
   * Policy versions that produced these completions
   */
  policy_segments: Array<PolicyVersionSegment>;

  /**
   * Generated completions
   */
  sequences: Array<SampleResult.Sequence>;

  /**
   * Teacher-forced log-probabilities for the model input tokens, one per token after
   * the first (log P(token*i | token*<i)). Present only when return_prompt_logprobs
   * was set on the request.
   */
  prompt_logprobs?: Array<number>;
}

export namespace SampleResult {
  /**
   * A single generated completion sequence with tokens and logprobs
   */
  export interface Sequence {
    /**
     * Reason for stopping generation
     */
    stop_reason: 'STOP_REASON_LENGTH' | 'STOP_REASON_STOP';

    /**
     * Generated token IDs
     */
    tokens: Array<string | number>;

    /**
     * Log probabilities for each generated token
     */
    logprobs?: Array<number>;
  }
}

/**
 * Async save training checkpoint operation
 */
export interface TrainingCheckpointOperation {
  /**
   * Operation ID
   */
  id: string;

  /**
   * Operation status
   */
  status: TrainingOperationStatus;

  /**
   * Error details on failure
   */
  error?: TrainingOperationError;

  /**
   * Result on success
   */
  output?: TrainingCheckpointResult;
}

/**
 * Result of a save training checkpoint operation
 */
export interface TrainingCheckpointResult {
  /**
   * ID of the saved training checkpoint (use for resume via Start)
   */
  checkpoint_id: string;
}

/**
 * Error details for a failed training operation
 */
export interface TrainingOperationError {
  /**
   * Application error code
   */
  code?: TrainingOperationErrorCode;

  /**
   * Human-readable error message
   */
  message?: string;
}

export type TrainingOperationErrorCode =
  | 'TRAINING_OPERATION_ERROR_CODE_UNSPECIFIED'
  | 'TRAINING_OPERATION_ERROR_CODE_RESOURCE_EXHAUSTED'
  | 'TRAINING_OPERATION_ERROR_CODE_TIMEOUT'
  | 'TRAINING_OPERATION_ERROR_CODE_INTERNAL_ERROR'
  | 'TRAINING_OPERATION_ERROR_CODE_SESSION_NOT_ACTIVE'
  | 'TRAINING_OPERATION_ERROR_CODE_INVALID_INPUT';

export type TrainingOperationStatus =
  | 'TRAINING_OPERATION_STATUS_UNSPECIFIED'
  | 'TRAINING_OPERATION_STATUS_PENDING'
  | 'TRAINING_OPERATION_STATUS_RUNNING'
  | 'TRAINING_OPERATION_STATUS_COMPLETED'
  | 'TRAINING_OPERATION_STATUS_FAILED';

/**
 * How the trainer's updated weights are propagated to the generator after an
 * optimizer step. SYNCHRONOUS publishes inline before the step returns;
 * BACKGROUND_PUBLISH returns immediately and publishes once in-flight rollouts
 * drain; PIPELINE overlaps the publish with in-flight rollouts so they continue
 * decoding under the new weights.
 */
export type WeightSyncType =
  | 'WEIGHT_SYNC_TYPE_UNSPECIFIED'
  | 'WEIGHT_SYNC_TYPE_SYNCHRONOUS'
  | 'WEIGHT_SYNC_TYPE_BACKGROUND_PUBLISH'
  | 'WEIGHT_SYNC_TYPE_PIPELINE';

export interface OperationCustomForwardBackwardParams {
  /**
   * Per-sample per-token gradients of the loss with respect to log-probabilities
   */
  gradients: Array<OperationCustomForwardBackwardParams.Gradient>;

  /**
   * Batch of training samples
   */
  samples: Array<OperationCustomForwardBackwardParams.Sample>;
}

export namespace OperationCustomForwardBackwardParams {
  /**
   * Per-token gradients of the loss with respect to target log-probabilities
   */
  export interface Gradient {
    /**
     * Float array of per-token gradients (d loss / d log p)
     */
    data: Array<number>;

    /**
     * Data type of the float array
     */
    dtype?: OperationsAPI.DType;
  }

  export interface Sample {
    /**
     * Loss function inputs
     */
    loss_inputs: OperationsAPI.LossInputs;

    /**
     * Model input
     */
    model_input: Sample.ModelInput;

    /**
     * Policy versions associated with this sample's tokens
     */
    policy_segments: Array<OperationsAPI.PolicyVersionSegment>;
  }

  export namespace Sample {
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
          tokens: Array<string | number>;
        }
      }
    }
  }
}

export interface OperationForwardParams {
  /**
   * Batch of training samples for which to compute per-token log-probabilities
   */
  samples: Array<OperationForwardParams.Sample>;
}

export namespace OperationForwardParams {
  export interface Sample {
    /**
     * Loss function inputs
     */
    loss_inputs: OperationsAPI.LossInputs;

    /**
     * Model input
     */
    model_input: Sample.ModelInput;

    /**
     * Policy versions associated with this sample's tokens
     */
    policy_segments: Array<OperationsAPI.PolicyVersionSegment>;
  }

  export namespace Sample {
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
          tokens: Array<string | number>;
        }
      }
    }
  }
}

export interface OperationForwardBackwardParams {
  /**
   * Loss function configuration
   */
  loss: LossConfig;

  /**
   * Batch of training samples to process
   */
  samples: Array<OperationForwardBackwardParams.Sample>;
}

export namespace OperationForwardBackwardParams {
  export interface Sample {
    /**
     * Loss function inputs
     */
    loss_inputs: OperationsAPI.LossInputs;

    /**
     * Model input
     */
    model_input: Sample.ModelInput;

    /**
     * Policy versions associated with this sample's tokens
     */
    policy_segments: Array<OperationsAPI.PolicyVersionSegment>;
  }

  export namespace Sample {
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
          tokens: Array<string | number>;
        }
      }
    }
  }
}

export interface OperationOptimStepParams {
  /**
   * How the trainer's updated weights are propagated to the generator after this
   * optimizer step. See `WeightSyncType` for accepted values.
   */
  weight_sync_type: WeightSyncType;

  /**
   * Per-step AdamW optimizer overrides.
   */
  adamw_params?: AdamwOptimizerParams;

  /**
   * Maximum gradient norm for this step, gradients across all model parameters are
   * clipped to this value.
   */
  max_grad_norm?: number;

  /**
   * Per-step Muon optimizer overrides
   */
  muon_params?: MuonOptimizerParams;
}

export interface OperationRetrieveCustomForwardBackwardParams {
  /**
   * Training session ID
   */
  session_id: string;
}

export interface OperationRetrieveForwardParams {
  /**
   * Training session ID
   */
  session_id: string;
}

export interface OperationRetrieveForwardBackwardParams {
  /**
   * Training session ID
   */
  session_id: string;
}

export interface OperationRetrieveInferenceCheckpointParams {
  /**
   * Training session ID
   */
  session_id: string;
}

export interface OperationRetrieveOptimStepParams {
  /**
   * Training session ID
   */
  session_id: string;
}

export interface OperationRetrieveSampleParams {
  /**
   * Training session ID
   */
  session_id: string;
}

export interface OperationRetrieveTrainingCheckpointParams {
  /**
   * Training session ID
   */
  session_id: string;
}

export interface OperationSampleParams {
  /**
   * Model inputs to sample from
   */
  model_inputs: Array<OperationSampleParams.ModelInput>;

  /**
   * Number of completions to generate per prompt
   */
  num_samples?: number;

  /**
   * Optional sampling parameters
   */
  sampling_params?: OperationSampleParams.SamplingParams;
}

export namespace OperationSampleParams {
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
        tokens: Array<string | number>;
      }
    }
  }

  /**
   * Optional sampling parameters
   */
  export interface SamplingParams {
    /**
     * Maximum number of tokens to generate per completion
     */
    max_tokens?: number;

    /**
     * When true, also return teacher-forced log-probabilities for the model input
     * tokens in `SampleResult.prompt_logprobs`.
     */
    return_prompt_logprobs?: boolean;

    /**
     * Random seed for reproducibility
     */
    seed?: string | number;

    /**
     * Generation stops when any of these strings is produced
     */
    stop?: Array<string>;

    /**
     * Sampling temperature
     */
    temperature?: number;

    /**
     * Top-k sampling limit
     */
    top_k?: number;

    /**
     * Nucleus sampling probability threshold
     */
    top_p?: number;
  }
}

export declare namespace Operations {
  export {
    type AdamwOptimizerParams as AdamwOptimizerParams,
    type CispoLossInputs as CispoLossInputs,
    type CispoLossParams as CispoLossParams,
    type CrossEntropyLossParams as CrossEntropyLossParams,
    type CustomForwardBackwardOperation as CustomForwardBackwardOperation,
    type CustomForwardBackwardResult as CustomForwardBackwardResult,
    type DType as DType,
    type DroLossInputs as DroLossInputs,
    type DroLossParams as DroLossParams,
    type ForwardBackwardOperation as ForwardBackwardOperation,
    type ForwardBackwardResult as ForwardBackwardResult,
    type ForwardOperation as ForwardOperation,
    type ForwardResult as ForwardResult,
    type GrpoLossAggregationType as GrpoLossAggregationType,
    type GrpoLossInputs as GrpoLossInputs,
    type GrpoLossParams as GrpoLossParams,
    type GrpoLossRatioType as GrpoLossRatioType,
    type ImportanceSamplingLossInputs as ImportanceSamplingLossInputs,
    type InferenceCheckpointOperation as InferenceCheckpointOperation,
    type InferenceCheckpointResult as InferenceCheckpointResult,
    type LossAdvantages as LossAdvantages,
    type LossConfig as LossConfig,
    type LossInputs as LossInputs,
    type LossLogprobs as LossLogprobs,
    type LossMask as LossMask,
    type LossTargetTokens as LossTargetTokens,
    type LossType as LossType,
    type MuonOptimizerParams as MuonOptimizerParams,
    type OptimStepOperation as OptimStepOperation,
    type OptimStepResult as OptimStepResult,
    type PolicyVersionSegment as PolicyVersionSegment,
    type PpoLossInputs as PpoLossInputs,
    type PpoLossParams as PpoLossParams,
    type SampleOperation as SampleOperation,
    type SampleResult as SampleResult,
    type TrainingCheckpointOperation as TrainingCheckpointOperation,
    type TrainingCheckpointResult as TrainingCheckpointResult,
    type TrainingOperationError as TrainingOperationError,
    type TrainingOperationErrorCode as TrainingOperationErrorCode,
    type TrainingOperationStatus as TrainingOperationStatus,
    type WeightSyncType as WeightSyncType,
    type OperationCustomForwardBackwardParams as OperationCustomForwardBackwardParams,
    type OperationForwardParams as OperationForwardParams,
    type OperationForwardBackwardParams as OperationForwardBackwardParams,
    type OperationOptimStepParams as OperationOptimStepParams,
    type OperationRetrieveCustomForwardBackwardParams as OperationRetrieveCustomForwardBackwardParams,
    type OperationRetrieveForwardParams as OperationRetrieveForwardParams,
    type OperationRetrieveForwardBackwardParams as OperationRetrieveForwardBackwardParams,
    type OperationRetrieveInferenceCheckpointParams as OperationRetrieveInferenceCheckpointParams,
    type OperationRetrieveOptimStepParams as OperationRetrieveOptimStepParams,
    type OperationRetrieveSampleParams as OperationRetrieveSampleParams,
    type OperationRetrieveTrainingCheckpointParams as OperationRetrieveTrainingCheckpointParams,
    type OperationSampleParams as OperationSampleParams,
  };
}
