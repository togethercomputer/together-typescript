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
   *           loss_fn_inputs: {
   *             foo: { data: [1, 2, 3], dtype: 'int64' },
   *           },
   *           model_input: {
   *             chunks: [
   *               { encoded_text: { tokens: [123, 456, 789] } },
   *             ],
   *           },
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
   *         loss_fn_inputs: {
   *           foo: { data: [1, 2, 3], dtype: 'int64' },
   *         },
   *         model_input: {
   *           chunks: [
   *             { encoded_text: { tokens: [123, 456, 789] } },
   *           ],
   *         },
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
   *           loss_fn_inputs: {
   *             foo: { data: [1, 2, 3], dtype: 'int64' },
   *           },
   *           model_input: {
   *             chunks: [
   *               { encoded_text: { tokens: [123, 456, 789] } },
   *             ],
   *           },
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
   * gradients to update model parameters. Does not make the updated parameters
   * available for sampling; call `weights-sync` afterwards when you want subsequent
   * samples to use the updated policy.
   *
   * @example
   * ```ts
   * const optimStepOperation =
   *   await client.beta.rl.operations.optimStep('session_id');
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
   * Retrieves the current status and result of a weights-sync operation.
   *
   * @example
   * ```ts
   * const weightsSyncOperation =
   *   await client.beta.rl.operations.retrieveWeightsSync(
   *     'operation_id',
   *     { session_id: 'session_id' },
   *   );
   * ```
   */
  retrieveWeightsSync(
    operationID: string,
    params: OperationRetrieveWeightsSyncParams,
    options?: RequestOptions,
  ): APIPromise<WeightsSyncOperation> {
    const { session_id } = params;
    return this._client.get(
      path`/rl/training-sessions/${session_id}/operations/weights-sync/${operationID}`,
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
   *     model_inputs: [
   *       {
   *         chunks: [
   *           { encoded_text: { tokens: [123, 456, 789] } },
   *         ],
   *       },
   *     ],
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

  /**
   * Submits a weights-sync operation that makes the session's current trained
   * parameters available for sampling. Call this after `optim-step` when you want
   * subsequent samples to use the updated policy.
   *
   * @example
   * ```ts
   * const weightsSyncOperation =
   *   await client.beta.rl.operations.weightsSync(
   *     'session_id',
   *     { weight_sync_type: 'WEIGHT_SYNC_TYPE_SYNCHRONOUS' },
   *   );
   * ```
   */
  weightsSync(
    sessionID: string,
    body: OperationWeightsSyncParams,
    options?: RequestOptions,
  ): APIPromise<WeightsSyncOperation> {
    return this._client.post(path`/rl/training-sessions/${sessionID}/operations/weights-sync`, {
      body,
      ...options,
    });
  }
}

/**
 * Per-step Adam optimizer overrides.
 */
export interface AdamParams {
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
   * Maximum gradient norm for this step, gradients across all model parameters are
   * clipped to this value. Set to 0 to disable gradient clipping. When unset,
   * gradients are clipped to the session default (1.0).
   */
  grad_clip_norm?: number;

  /**
   * Learning rate for the Adam-tuned parameters
   */
  learning_rate?: number;

  /**
   * Weight decay coefficient
   */
  weight_decay?: number;
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
export interface CrossEntropyLossParams {}

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
  status: OperationStatus;

  /**
   * Error details on failure
   */
  error?: OperationError;

  /**
   * Result on success
   */
  output?: CustomForwardBackwardResult;
}

/**
 * Result of a custom forward-backward pass operation
 */
export interface CustomForwardBackwardResult {}

export type DType = 'D_TYPE_UNSPECIFIED' | 'D_TYPE_INT64' | 'D_TYPE_FLOAT32' | 'D_TYPE_BFLOAT16';

export interface DroLossParams {
  /**
   * Coefficient on the quadratic log-ratio penalty. Required; there is no default.
   */
  beta: number;
}

/**
 * Pre-tokenized text content for a model input chunk.
 */
export interface EncodedTextChunk {
  /**
   * Pre-tokenized text input
   */
  tokens: Array<string | number>;
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
  status: OperationStatus;

  /**
   * Error details on failure
   */
  error?: OperationError;

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
  status: OperationStatus;

  /**
   * Error details on failure
   */
  error?: OperationError;

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
  status: OperationStatus;

  /**
   * Error details on failure
   */
  error?: OperationError;

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

export interface ModelInput {
  /**
   * Input chunks for the model
   */
  chunks: Array<ModelInputChunk>;
}

/**
 * A single chunk of model input content.
 */
export interface ModelInputChunk {
  /**
   * Pre-tokenized text content for this input chunk.
   */
  encoded_text: EncodedTextChunk;
}

/**
 * Per-step Muon optimizer overrides
 */
export interface MuonParams {
  /**
   * Per-step Adam optimizer overrides for the Adam-tuned parameters in a Muon-tuned
   * optimizer session.
   */
  adam?: AdamParams;

  /**
   * Maximum gradient norm for this step, gradients across all model parameters are
   * clipped to this value. Set to 0 to disable gradient clipping. When unset,
   * gradients are clipped to the session default (1.0).
   */
  grad_clip_norm?: number;

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
 * Error details for a failed training operation
 */
export interface OperationError {
  /**
   * Application error code
   */
  code?: OperationErrorCode;

  /**
   * Human-readable error message
   */
  message?: string;
}

/**
 * Application error code for a failed training operation
 */
export type OperationErrorCode =
  | 'TRAINING_OPERATION_ERROR_CODE_UNSPECIFIED'
  | 'TRAINING_OPERATION_ERROR_CODE_RESOURCE_EXHAUSTED'
  | 'TRAINING_OPERATION_ERROR_CODE_TIMEOUT'
  | 'TRAINING_OPERATION_ERROR_CODE_INTERNAL_ERROR'
  | 'TRAINING_OPERATION_ERROR_CODE_SESSION_NOT_ACTIVE'
  | 'TRAINING_OPERATION_ERROR_CODE_INVALID_INPUT'
  | 'TRAINING_OPERATION_ERROR_CODE_NON_FINITE_LOSS';

export type OperationStatus =
  | 'TRAINING_OPERATION_STATUS_UNSPECIFIED'
  | 'TRAINING_OPERATION_STATUS_PENDING'
  | 'TRAINING_OPERATION_STATUS_RUNNING'
  | 'TRAINING_OPERATION_STATUS_COMPLETED'
  | 'TRAINING_OPERATION_STATUS_FAILED';

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
  status: OperationStatus;

  /**
   * Error details on failure
   */
  error?: OperationError;

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
 * A (policy version, starting token) span within a sampled sequence. Version 0 is
 * the initial model; each optim_step call increments the version by 1.
 */
export interface PolicyVersionSegment {
  /**
   * Index of the first token of this segment within the sampled sequence. Always 0
   * for the first segment.
   */
  start_token: number;

  /**
   * Model version under which this segment of tokens was generated
   */
  version: number;
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
 * The most likely alternative tokens at a single prompt position, as two parallel
 * arrays of equal length. Both are empty for a position with no conditioning
 * context, such as position 0.
 */
export interface PromptTopLogprobs {
  /**
   * Log-probability of each alternative in `token_ids`, at the same index.
   */
  logprobs?: Array<number>;

  /**
   * Token IDs of the alternatives, ordered by descending log-probability.
   */
  token_ids?: Array<number>;
}

/**
 * Mixture-of-experts routing decisions captured while generating, so training can
 * reuse the same expert selection. Exactly one source is set—legacy inline `data`,
 * or a backend-owned `object_uri` that the manager hydrates before training. The
 * contiguous int32 buffer is reshaped by `shape`, which is always
 * `[num_tokens, num_layers, width]`; packed buffers carry fp32-bitcast routing
 * weights in the trailing top-k columns.
 */
export interface RoutedExperts {
  /**
   * Buffer shape as `[num_tokens, num_layers, width]`.
   */
  shape: Array<string | number>;

  /**
   * Legacy base64-encoded contiguous int32 routing buffer, row-major over (token,
   * layer, width).
   */
  data?: string;

  /**
   * Backend-owned S3/R2 object URI containing the contiguous int32 routing buffer.
   * Clients relay this URI unchanged; the manager validates and downloads it before
   * training.
   */
  object_uri?: string;
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
  status: OperationStatus;

  /**
   * Error details on failure
   */
  error?: OperationError;

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
  sequences: Array<SampledSequence>;

  /**
   * Teacher-forced log-probability of each model input token. Full prompt length;
   * entry i corresponds to prompt token i. Entry 0 is always 0 as a placeholder: the
   * first prompt token has no conditioning context, so it has no log-probability.
   * Present only when prompt_logprobs was set on the request.
   */
  prompt_logprobs?: Array<number>;

  /**
   * The most likely alternative tokens at each model input token, up to
   * `topk_prompt_logprobs` per position. Full prompt length; entry i corresponds to
   * prompt token i, and entry 0 is empty. Present only when topk_prompt_logprobs was
   * set on the request.
   */
  topk_prompt_logprobs?: Array<PromptTopLogprobs>;
}

/**
 * A single generated completion sequence with tokens and logprobs
 */
export interface SampledSequence {
  /**
   * Number of model input tokens served from the prefix cache while generating this
   * sequence.
   */
  prompt_cache_hit_tokens: number;

  /**
   * Reason for stopping generation
   */
  stop_reason: StopReason;

  /**
   * Generated token IDs
   */
  tokens: Array<string | number>;

  /**
   * Log probabilities for each generated token
   */
  logprobs?: Array<number>;

  /**
   * MoE per-token routing decisions captured during generation; absent for dense
   * models or when capture is disabled.
   */
  routed_experts?: RoutedExperts;
}

export interface SamplingParams {
  /**
   * Maximum number of tokens to generate per completion
   */
  max_tokens?: number;

  /**
   * Random seed for reproducible sampling for the same prompt and model state.
   * Per-completion seeds remain stable if the request is split across generator
   * replicas.
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

/**
 * Reason generation stopped.
 */
export type StopReason = 'STOP_REASON_LENGTH' | 'STOP_REASON_STOP';

/**
 * A tensor encoded as flattened row-major values, with an optional shape.
 */
export interface TensorData {
  /**
   * Flattened one-dimensional values encoded as JSON numbers.
   */
  data: Array<number>;

  /**
   * Tensor element type, either `int64` or `float32`.
   */
  dtype: 'int64' | 'float32';

  /**
   * Optional tensor shape; training operations accept one-dimensional tensors only,
   * and the dimension must match the data length.
   */
  shape?: Array<number>;

  /**
   * Reserved for Tinker schema compatibility; current training operations reject
   * sparse tensors.
   */
  sparse_col_indices?: Array<number>;

  /**
   * Reserved for Tinker schema compatibility; current training operations reject
   * sparse tensors.
   */
  sparse_crow_indices?: Array<number>;
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
  status: OperationStatus;

  /**
   * Error details on failure
   */
  error?: OperationError;

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
 * How updated policy parameters are made available for sampling. SYNCHRONOUS waits
 * for the policy update before returning; BACKGROUND_PUBLISH returns after
 * scheduling the update; PIPELINE overlaps the update with in-flight sampling when
 * possible.
 */
export type WeightSyncType =
  | 'WEIGHT_SYNC_TYPE_SYNCHRONOUS'
  | 'WEIGHT_SYNC_TYPE_BACKGROUND_PUBLISH'
  | 'WEIGHT_SYNC_TYPE_PIPELINE';

/**
 * Async weights-sync operation
 */
export interface WeightsSyncOperation {
  /**
   * Operation ID
   */
  id: string;

  /**
   * Operation status
   */
  status: OperationStatus;

  /**
   * Error details on failure
   */
  error?: OperationError;

  /**
   * Result on success
   */
  output?: WeightsSyncResult;
}

/**
 * Result of a weights-sync operation
 */
export interface WeightsSyncResult {
  /**
   * Policy version now available for sampling, or queued to become available for
   * deferred sync modes. Comparable to `policy_segments[].version` on sample
   * results.
   */
  weights_version: string | number;
}

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
     * Per-token loss tensors keyed by name. Include `target_tokens` and the inputs
     * required by the selected loss. Each tensor must declare `int64` or `float32`, be
     * one-dimensional, and have the same length.
     */
    loss_fn_inputs: { [key: string]: OperationsAPI.TensorData };

    /**
     * Model input
     */
    model_input: OperationsAPI.ModelInput;

    /**
     * Optional MoE per-token routing captured at sample time. Replayed on every
     * training operation, so expert selection matches the one used at sample time.
     * Must cover the whole sample, or all but its last token.
     */
    routed_experts?: OperationsAPI.RoutedExperts;
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
     * Per-token loss tensors keyed by name. Include `target_tokens` and the inputs
     * required by the selected loss. Each tensor must declare `int64` or `float32`, be
     * one-dimensional, and have the same length.
     */
    loss_fn_inputs: { [key: string]: OperationsAPI.TensorData };

    /**
     * Model input
     */
    model_input: OperationsAPI.ModelInput;

    /**
     * Optional MoE per-token routing captured at sample time. Replayed on every
     * training operation, so expert selection matches the one used at sample time.
     * Must cover the whole sample, or all but its last token.
     */
    routed_experts?: OperationsAPI.RoutedExperts;
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
     * Per-token loss tensors keyed by name. Include `target_tokens` and the inputs
     * required by the selected loss. Each tensor must declare `int64` or `float32`, be
     * one-dimensional, and have the same length.
     */
    loss_fn_inputs: { [key: string]: OperationsAPI.TensorData };

    /**
     * Model input
     */
    model_input: OperationsAPI.ModelInput;

    /**
     * Optional MoE per-token routing captured at sample time. Replayed on every
     * training operation, so expert selection matches the one used at sample time.
     * Must cover the whole sample, or all but its last token.
     */
    routed_experts?: OperationsAPI.RoutedExperts;
  }
}

export interface OperationOptimStepParams {
  /**
   * Adam optimizer overrides for this step.
   */
  adam_params?: AdamParams;

  /**
   * Muon optimizer overrides for this step.
   */
  muon_params?: MuonParams;
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

export interface OperationRetrieveWeightsSyncParams {
  /**
   * Training session ID
   */
  session_id: string;
}

export interface OperationSampleParams {
  /**
   * Model inputs to sample from
   */
  model_inputs: Array<ModelInput>;

  /**
   * Number of completions to generate per prompt
   */
  num_samples?: number;

  /**
   * When true, also compute teacher-forced log-probabilities for the model input
   * tokens and return them in `SampleResult.prompt_logprobs`.
   */
  prompt_logprobs?: boolean;

  /**
   * When true, capture the mixture-of-experts routing decisions made while
   * generating and return them in `SampledSequence.routed_experts`, so training can
   * reuse the same expert selection. Only available on mixture-of-experts models;
   * ignored otherwise. The captured buffer scales with sequence length, so leave it
   * off unless you replay routing during training.
   */
  return_routed_experts?: boolean;

  /**
   * When true together with `return_routed_experts`, return each routing capture as
   * a backend-owned `object_uri` plus shape instead of inline base64 data. Clients
   * that do not opt in keep the legacy inline response.
   */
  return_routed_experts_object_uri?: boolean;

  /**
   * Optional sampling parameters
   */
  sampling_params?: SamplingParams;

  /**
   * Number of most likely alternative tokens to return per model input token in
   * `SampleResult.topk_prompt_logprobs`. 0 disables top-k prompt log-probabilities.
   * Maximum 20.
   */
  topk_prompt_logprobs?: number;
}

export interface OperationWeightsSyncParams {
  /**
   * How updated parameters are made available for sampling. See `WeightSyncType` for
   * accepted values.
   */
  weight_sync_type: WeightSyncType;
}

export declare namespace Operations {
  export {
    type AdamParams as AdamParams,
    type CispoLossParams as CispoLossParams,
    type CrossEntropyLossParams as CrossEntropyLossParams,
    type CustomForwardBackwardOperation as CustomForwardBackwardOperation,
    type CustomForwardBackwardResult as CustomForwardBackwardResult,
    type DType as DType,
    type DroLossParams as DroLossParams,
    type EncodedTextChunk as EncodedTextChunk,
    type ForwardBackwardOperation as ForwardBackwardOperation,
    type ForwardBackwardResult as ForwardBackwardResult,
    type ForwardOperation as ForwardOperation,
    type ForwardResult as ForwardResult,
    type GrpoLossAggregationType as GrpoLossAggregationType,
    type GrpoLossParams as GrpoLossParams,
    type GrpoLossRatioType as GrpoLossRatioType,
    type InferenceCheckpointOperation as InferenceCheckpointOperation,
    type InferenceCheckpointResult as InferenceCheckpointResult,
    type LossConfig as LossConfig,
    type LossType as LossType,
    type ModelInput as ModelInput,
    type ModelInputChunk as ModelInputChunk,
    type MuonParams as MuonParams,
    type OperationError as OperationError,
    type OperationErrorCode as OperationErrorCode,
    type OperationStatus as OperationStatus,
    type OptimStepOperation as OptimStepOperation,
    type OptimStepResult as OptimStepResult,
    type PolicyVersionSegment as PolicyVersionSegment,
    type PpoLossParams as PpoLossParams,
    type PromptTopLogprobs as PromptTopLogprobs,
    type RoutedExperts as RoutedExperts,
    type SampleOperation as SampleOperation,
    type SampleResult as SampleResult,
    type SampledSequence as SampledSequence,
    type SamplingParams as SamplingParams,
    type StopReason as StopReason,
    type TensorData as TensorData,
    type TrainingCheckpointOperation as TrainingCheckpointOperation,
    type TrainingCheckpointResult as TrainingCheckpointResult,
    type WeightSyncType as WeightSyncType,
    type WeightsSyncOperation as WeightsSyncOperation,
    type WeightsSyncResult as WeightsSyncResult,
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
    type OperationRetrieveWeightsSyncParams as OperationRetrieveWeightsSyncParams,
    type OperationSampleParams as OperationSampleParams,
    type OperationWeightsSyncParams as OperationWeightsSyncParams,
  };
}
