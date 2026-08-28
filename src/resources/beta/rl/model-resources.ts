// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class ModelResources extends APIResource {
  /**
   * Provisions a standalone model resource that training sessions can attach to.
   *
   * @example
   * ```ts
   * const modelResources =
   *   await client.beta.rl.modelResources.create({
   *     base_model: 'Qwen/Qwen3-0.6B',
   *   });
   * ```
   */
  create(body: ModelResourceCreateParams, options?: RequestOptions): APIPromise<ModelResources> {
    return this._client.post('/rl/model-resources', { body, ...options });
  }

  /**
   * Gets a model resource by its ID and returns its details.
   *
   * @example
   * ```ts
   * const modelResources =
   *   await client.beta.rl.modelResources.retrieve(
   *     'model_resources_id',
   *   );
   * ```
   */
  retrieve(modelResourcesID: string, options?: RequestOptions): APIPromise<ModelResources> {
    return this._client.get(path`/rl/model-resources/${modelResourcesID}`, options);
  }

  /**
   * Lists the caller's model resources.
   *
   * @example
   * ```ts
   * const modelResourcesListResponse =
   *   await client.beta.rl.modelResources.list();
   * ```
   */
  list(
    query: ModelResourceListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ModelResourcesListResponse> {
    return this._client.get('/rl/model-resources', { query, ...options });
  }

  /**
   * Estimates a model resource's on-demand hourly price without creating it.
   *
   * @example
   * ```ts
   * const modelResourcesEstimateCostResponse =
   *   await client.beta.rl.modelResources.estimateCost({
   *     base_model: 'Qwen/Qwen3-0.6B',
   *   });
   * ```
   */
  estimateCost(
    body: ModelResourceEstimateCostParams,
    options?: RequestOptions,
  ): APIPromise<ModelResourcesEstimateCostResponse> {
    return this._client.post('/rl/model-resources/estimate-cost', { body, ...options });
  }

  /**
   * Stops every session attached to the resource and tears down its GPU pods.
   *
   * @example
   * ```ts
   * const modelResources =
   *   await client.beta.rl.modelResources.stop(
   *     'model_resources_id',
   *   );
   * ```
   */
  stop(
    modelResourcesID: string,
    params: ModelResourceStopParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ModelResources> {
    const { force } = params ?? {};
    return this._client.post(path`/rl/model-resources/${modelResourcesID}/stop`, {
      query: { force },
      ...options,
    });
  }
}

/**
 * AdamW optimizer configuration
 */
export interface AdamwOptimizerConfig {}

/**
 * Allocated GPU resources that training sessions attach to
 */
export interface ModelResources {
  /**
   * Unique identifier for the model resource
   */
  id: string;

  /**
   * Base model the resource is provisioned for
   */
  base_model: string;

  /**
   * Compute layout provisioned for the resource.
   */
  compute_config: ModelResources.ComputeConfig;

  /**
   * Timestamp when the model resource was created
   */
  created_at: string;

  /**
   * ID of the user who created the model resource
   */
  created_by: string;

  /**
   * Whether the resource hosts LoRA sessions or a full-weight session
   */
  lora_enabled: boolean;

  /**
   * Optimizer configuration for this resource.
   */
  optimizer_config: OptimizerConfig;

  /**
   * Lifecycle status of the model resource
   */
  status: ModelResourcesStatus;

  /**
   * Timestamp when the model resource was last updated
   */
  updated_at: string;

  /**
   * Structured detail for the model resource's current error. Set when the resource
   * is in an error state.
   */
  error?: ModelResourcesError;
}

export namespace ModelResources {
  /**
   * Compute layout provisioned for the resource.
   */
  export interface ComputeConfig {
    /**
     * Number of generator replicas. 0 means the resource runs the trainer only, with
     * no generator.
     */
    num_generator_replicas: number;

    /**
     * GPU type selected for this resource.
     */
    gpu_type?: 'H100-80GB' | 'B200-SXM';
  }
}

/**
 * Structured detail for the model resource's current error
 */
export interface ModelResourcesError {
  /**
   * Finite machine-readable reason code for UI branching
   */
  code: ModelResourcesErrorCode;

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
 * Finite machine-readable model resource lifecycle error code
 */
export type ModelResourcesErrorCode =
  | 'MODEL_RESOURCES_ERROR_CODE_CAPACITY_WAIT_TIMEOUT'
  | 'MODEL_RESOURCES_ERROR_CODE_PROVISIONING_FAILED';

export interface ModelResourcesEstimateCostResponse {
  /**
   * ISO 4217 currency code.
   */
  currency: string;

  /**
   * Estimated on-demand price per hour in the currency's major unit.
   */
  price_per_hour: number;
}

/**
 * Paginated list of model resources
 */
export interface ModelResourcesListResponse {
  /**
   * List of model resources
   */
  data: Array<ModelResources>;

  /**
   * Pagination metadata
   */
  meta: ModelResourcesListResponse.Meta;
}

export namespace ModelResourcesListResponse {
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
 * Lifecycle status of a model resource
 */
export type ModelResourcesStatus =
  | 'MODEL_RESOURCES_STATUS_PENDING'
  | 'MODEL_RESOURCES_STATUS_CREATING'
  | 'MODEL_RESOURCES_STATUS_READY'
  | 'MODEL_RESOURCES_STATUS_ERROR'
  | 'MODEL_RESOURCES_STATUS_STOPPED'
  | 'MODEL_RESOURCES_STATUS_STOPPING';

/**
 * Advanced configuration for the Muon optimizer.
 */
export interface MuonOptimizerConfig {
  /**
   * Scaling strategy for the Muon optimizer.
   */
  scaling_strategy?: MuonScalingStrategy;
}

export type MuonScalingStrategy =
  | 'MUON_SCALING_STRATEGY_UNSPECIFIED'
  | 'MUON_SCALING_STRATEGY_MATCH_ADAMW'
  | 'MUON_SCALING_STRATEGY_ORIGINAL';

/**
 * Optimizer configuration
 */
export interface OptimizerConfig {
  /**
   * Use the AdamW optimizer.
   */
  adamw?: AdamwOptimizerConfig;

  /**
   * Use the Muon optimizer.
   */
  muon?: MuonOptimizerConfig;
}

export interface ModelResourceCreateParams {
  /**
   * Base model to provision the resource for
   */
  base_model: string;

  /**
   * Compute layout to provision.
   */
  compute_config?: ModelResourceCreateParams.ComputeConfig;

  /**
   * Whether the resource hosts LoRA sessions or a single full-weight session
   */
  lora_enabled?: boolean;

  /**
   * Optimizer configuration for this resource.
   */
  optimizer_config?: OptimizerConfig;
}

export namespace ModelResourceCreateParams {
  /**
   * Compute layout to provision.
   */
  export interface ComputeConfig {
    /**
     * GPU type to provision. Omit to use the model's default GPU type.
     */
    gpu_type?: 'H100-80GB' | 'B200-SXM';

    /**
     * Number of generator replicas. 0 runs the trainer only, with no generator.
     */
    num_generator_replicas?: number;
  }
}

export interface ModelResourceListParams {
  /**
   * Cursor for pagination
   */
  after?: string;

  /**
   * Filter resources in the current project by the creator ID. Pass "me" to show
   * resources you created.
   */
  created_by?: string;

  /**
   * Maximum number of resources to return (1-100)
   */
  limit?: number;

  /**
   * Status filters. When omitted, resources in any status are returned.
   */
  status?: Array<
    | 'MODEL_RESOURCES_STATUS_PENDING'
    | 'MODEL_RESOURCES_STATUS_CREATING'
    | 'MODEL_RESOURCES_STATUS_READY'
    | 'MODEL_RESOURCES_STATUS_ERROR'
    | 'MODEL_RESOURCES_STATUS_STOPPED'
    | 'MODEL_RESOURCES_STATUS_STOPPING'
  >;
}

export interface ModelResourceEstimateCostParams {
  /**
   * Base model to provision the resource for
   */
  base_model: string;

  /**
   * Compute layout to provision.
   */
  compute_config?: ModelResourceEstimateCostParams.ComputeConfig;

  /**
   * Whether the resource hosts LoRA sessions or a single full-weight session
   */
  lora_enabled?: boolean;

  /**
   * Optimizer configuration for this resource.
   */
  optimizer_config?: OptimizerConfig;
}

export namespace ModelResourceEstimateCostParams {
  /**
   * Compute layout to provision.
   */
  export interface ComputeConfig {
    /**
     * GPU type to provision. Omit to use the model's default GPU type.
     */
    gpu_type?: 'H100-80GB' | 'B200-SXM';

    /**
     * Number of generator replicas. 0 runs the trainer only, with no generator.
     */
    num_generator_replicas?: number;
  }
}

export interface ModelResourceStopParams {
  /**
   * Stop the resource even if active training sessions are attached
   */
  force?: boolean;
}

export declare namespace ModelResources {
  export {
    type AdamwOptimizerConfig as AdamwOptimizerConfig,
    type ModelResources as ModelResources,
    type ModelResourcesError as ModelResourcesError,
    type ModelResourcesErrorCode as ModelResourcesErrorCode,
    type ModelResourcesEstimateCostResponse as ModelResourcesEstimateCostResponse,
    type ModelResourcesListResponse as ModelResourcesListResponse,
    type ModelResourcesStatus as ModelResourcesStatus,
    type MuonOptimizerConfig as MuonOptimizerConfig,
    type MuonScalingStrategy as MuonScalingStrategy,
    type OptimizerConfig as OptimizerConfig,
    type ModelResourceCreateParams as ModelResourceCreateParams,
    type ModelResourceListParams as ModelResourceListParams,
    type ModelResourceEstimateCostParams as ModelResourceEstimateCostParams,
    type ModelResourceStopParams as ModelResourceStopParams,
  };
}
