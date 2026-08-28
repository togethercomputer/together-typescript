// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Sessions extends APIResource {
  /**
   * Creates a training session and returns its details.
   *
   * @example
   * ```ts
   * const session = await client.beta.rl.sessions.create({
   *   model_resources_id:
   *     '123e4567-e89b-12d3-a456-426614174000',
   * });
   * ```
   */
  create(body: SessionCreateParams, options?: RequestOptions): APIPromise<Session> {
    return this._client.post('/rl/training-sessions', { body, ...options });
  }

  /**
   * Gets a training session by its ID and returns its details.
   *
   * @example
   * ```ts
   * const session = await client.beta.rl.sessions.retrieve(
   *   'session_id',
   * );
   * ```
   */
  retrieve(sessionID: string, options?: RequestOptions): APIPromise<Session> {
    return this._client.get(path`/rl/training-sessions/${sessionID}`, options);
  }

  /**
   * Lists all training sessions.
   *
   * @example
   * ```ts
   * const sessionsListResponse =
   *   await client.beta.rl.sessions.list();
   * ```
   */
  list(
    query: SessionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SessionsListResponse> {
    return this._client.get('/rl/training-sessions', { query, ...options });
  }

  /**
   * Stops a training session.
   *
   * @example
   * ```ts
   * const session = await client.beta.rl.sessions.stop(
   *   'session_id',
   * );
   * ```
   */
  stop(sessionID: string, options?: RequestOptions): APIPromise<Session> {
    return this._client.post(path`/rl/training-sessions/${sessionID}/stop`, options);
  }
}

/**
 * Saved inference checkpoint
 */
export interface InferenceCheckpoint {
  /**
   * Unique identifier for the checkpoint
   */
  id: string;

  /**
   * Timestamp when the checkpoint was created
   */
  created_at: string;

  /**
   * Training step at time of save
   */
  step: string | number;

  /**
   * Model registration details
   */
  registration?: InferenceCheckpoint.Registration;
}

export namespace InferenceCheckpoint {
  /**
   * Model registration details
   */
  export interface Registration {
    /**
     * Registered model name for downloading the checkpoint
     */
    model_name: string;

    /**
     * Timestamp when the model was registered
     */
    registered_at: string;

    /**
     * Together model registry object ID for the adapter checkpoint (e.g. `ml_...`),
     * set on LoRA training sessions
     */
    adapter_object_id?: string;

    /**
     * Together model registry revision ID for the adapter checkpoint (e.g. `rv_...`)
     */
    adapter_object_revision_id?: string;

    /**
     * Together model registry object ID for the model checkpoint (e.g. `ml_...`), set
     * on full-weight training sessions
     */
    model_object_id?: string;

    /**
     * Together model registry revision ID for the model checkpoint (e.g. `rv_...`)
     */
    model_object_revision_id?: string;
  }
}

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

  /**
   * Random seed for initializing LoRA adapter weights. Ignored when LoRA is disabled
   * or the session resumes from a checkpoint.
   */
  seed?: string | number;

  /**
   * Whether to also train a LoRA adapter on the output head. Defaults to true.
   */
  train_unembed?: boolean;
}

/**
 * A training session and its current state
 */
export interface Session {
  /**
   * ID of the training session
   */
  id: string;

  /**
   * Base model the session trains, taken from the model resource it is attached to
   */
  base_model: string;

  /**
   * Timestamp when the training session was created
   */
  created_at: string;

  /**
   * ID of the user who created the training session
   */
  created_by: string;

  /**
   * List of saved inference checkpoints for this session
   */
  inference_checkpoints: Array<InferenceCheckpoint>;

  /**
   * Auxiliary metadata associated with the training session
   */
  metadata: SessionMetadata;

  /**
   * Model resource this session is attached to. The session runs on that resource's
   * GPU pods.
   */
  model_resources_id: string;

  /**
   * Session-scoped policy and weight versions for this session
   */
  policy_state: Session.PolicyState;

  /**
   * Status of the training session
   */
  status: SessionStatus;

  /**
   * Current training step
   */
  step: string | number;

  /**
   * List of saved training checkpoints for this session
   */
  training_checkpoints: Array<TrainingCheckpoint>;

  /**
   * Timestamp when the training session was last updated
   */
  updated_at: string;

  /**
   * Display name used to identify the training session
   */
  display_name?: string;

  /**
   * Structured detail for the training session's current error. Set when the session
   * is in an error state.
   */
  error?: SessionError;

  /**
   * LoRA adapter configuration. Present only for sessions running on a LoRA-enabled
   * model resource.
   */
  lora_config?: LoraConfig;

  /**
   * Checkpoint ID this session was resumed from
   */
  resume_from_checkpoint_id?: string;
}

export namespace Session {
  /**
   * Session-scoped policy and weight versions for this session
   */
  export interface PolicyState {
    /**
     * Policy version successfully applied to the generator for this session.
     */
    applied_weights_version: string | number;

    /**
     * True when a generator publish has been requested but has not finished.
     */
    pending_publish: boolean;

    /**
     * Policy version promised to the generator by the latest weights-sync.
     */
    target_weights_version: string | number;

    /**
     * Policy version produced by the last completed optimizer step. Distinct from
     * `TrainingSession.step`, which is the durable optimizer-step counter.
     */
    trainer_step: string | number;
  }
}

/**
 * Structured detail for the training session's current error
 */
export interface SessionError {
  /**
   * Finite machine-readable reason code for UI branching
   */
  code: SessionErrorCode;

  /**
   * User-safe human-readable detail for the current status
   */
  message: string;

  /**
   * Timestamp when this error was reported
   */
  occurred_at: string;
}

/**
 * Finite machine-readable training session lifecycle error code
 */
export type SessionErrorCode =
  | 'TRAINING_SESSION_ERROR_CODE_RESOURCE_UNAVAILABLE'
  | 'TRAINING_SESSION_ERROR_CODE_RESOURCE_AT_CAPACITY'
  | 'TRAINING_SESSION_ERROR_CODE_TIMED_OUT'
  | 'TRAINING_SESSION_ERROR_CODE_SESSION_FAILED';

/**
 * Auxiliary metadata associated with a training session
 */
export interface SessionMetadata {
  /**
   * Weights & Biases details associated with the training session
   */
  wandb?: WandbMetadata;
}

/**
 * Status of the training session
 */
export type SessionStatus =
  | 'TRAINING_SESSION_STATUS_UNSPECIFIED'
  | 'TRAINING_SESSION_STATUS_CREATING'
  | 'TRAINING_SESSION_STATUS_RUNNING'
  | 'TRAINING_SESSION_STATUS_STOPPED'
  | 'TRAINING_SESSION_STATUS_STOPPING'
  | 'TRAINING_SESSION_STATUS_ERROR'
  | 'TRAINING_SESSION_STATUS_EXPIRED';

/**
 * Paginated list of training sessions
 */
export interface SessionsListResponse {
  /**
   * List of training sessions
   */
  data?: Array<Session>;

  /**
   * Pagination metadata
   */
  meta?: SessionsListResponse.Meta;
}

export namespace SessionsListResponse {
  /**
   * Pagination metadata
   */
  export interface Meta {
    /**
     * Whether more items exist beyond this page
     */
    has_more?: boolean;

    /**
     * Maximum number of items returned per page
     */
    limit?: number;

    /**
     * Cursor to use as the 'after' parameter for the next page. Empty when has_more is
     * false.
     */
    next_cursor?: string;
  }
}

/**
 * Saved training checkpoint
 */
export interface TrainingCheckpoint {
  /**
   * Unique identifier for the checkpoint
   */
  id: string;

  /**
   * Timestamp when the checkpoint was created
   */
  created_at: string;

  /**
   * Training step at time of save
   */
  step: string | number;

  /**
   * Together model registry details, set when the checkpoint was uploaded to the
   * registry
   */
  registration?: TrainingCheckpoint.Registration;
}

export namespace TrainingCheckpoint {
  /**
   * Together model registry details, set when the checkpoint was uploaded to the
   * registry
   */
  export interface Registration {
    /**
     * Together model registry object ID for the training checkpoint artifact (e.g.
     * `ml_...`)
     */
    object_id: string;

    /**
     * Together model registry revision ID for the training checkpoint artifact (e.g.
     * `rv_...`), empty when the upload reported no revision
     */
    object_revision_id?: string;
  }
}

/**
 * Details that associate a training session with a Weights & Biases run
 */
export interface WandbMetadata {
  /**
   * Weights & Biases username or team that owns the project
   */
  entity?: string;

  /**
   * Weights & Biases group used to organize related runs
   */
  group?: string;

  /**
   * Weights & Biases project containing the run
   */
  project?: string;

  /**
   * Unique identifier assigned to the run by Weights & Biases
   */
  run_id?: string;

  /**
   * Human-readable name of the Weights & Biases run
   */
  run_name?: string;

  /**
   * HTTPS URL for the Weights & Biases run
   */
  url?: string;
}

export interface SessionCreateParams {
  /**
   * Model resource to attach the session to. The session runs on that resource's GPU
   * pods.
   */
  model_resources_id: string;

  /**
   * Optional display name used to identify the training session
   */
  display_name?: string;

  /**
   * Whether to restore optimizer state and step from a training checkpoint. Omitted
   * or true restores them; false loads weights only with a fresh optimizer and
   * step 0. Not valid for inference or HuggingFace checkpoints, which have no
   * optimizer state.
   */
  load_optimizer?: boolean;

  /**
   * LoRA adapter configuration for the session
   */
  lora_config?: LoraConfig;

  /**
   * Optional auxiliary metadata to associate with the training session
   */
  metadata?: SessionMetadata;

  /**
   * Checkpoint ID to resume from
   */
  resume_from_checkpoint_id?: string;

  /**
   * HuggingFace repo (or hf://) to resume model weights from. Accepts either a full
   * model or a PEFT adapter directory. Mutually exclusive with
   * resume_from_checkpoint_id.
   */
  resume_from_hf_checkpoint?: string;
}

export interface SessionListParams {
  /**
   * Cursor for pagination (ID of the last session from the previous page)
   */
  after?: string;

  /**
   * Filter sessions in the current project by the creator ID. Pass "me" to show
   * sessions you created.
   */
  created_by?: string;

  /**
   * Maximum number of sessions to return (1-100)
   */
  limit?: number;

  /**
   * Filter sessions by the model resource they are attached to
   */
  model_resources_id?: string;

  /**
   * Status filters. When omitted, sessions in any status are returned.
   */
  status?: Array<
    | 'TRAINING_SESSION_STATUS_CREATING'
    | 'TRAINING_SESSION_STATUS_RUNNING'
    | 'TRAINING_SESSION_STATUS_STOPPED'
    | 'TRAINING_SESSION_STATUS_STOPPING'
    | 'TRAINING_SESSION_STATUS_ERROR'
    | 'TRAINING_SESSION_STATUS_EXPIRED'
  >;
}

export declare namespace Sessions {
  export {
    type InferenceCheckpoint as InferenceCheckpoint,
    type LoraConfig as LoraConfig,
    type Session as Session,
    type SessionError as SessionError,
    type SessionErrorCode as SessionErrorCode,
    type SessionMetadata as SessionMetadata,
    type SessionStatus as SessionStatus,
    type SessionsListResponse as SessionsListResponse,
    type TrainingCheckpoint as TrainingCheckpoint,
    type WandbMetadata as WandbMetadata,
    type SessionCreateParams as SessionCreateParams,
    type SessionListParams as SessionListParams,
  };
}
