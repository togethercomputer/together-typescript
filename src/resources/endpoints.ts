// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Endpoints extends APIResource {
  /**
   * Creates a new dedicated endpoint for serving models. The endpoint will
   * automatically start after creation. You can deploy any supported model on
   * hardware configurations that meet the model's requirements.
   *
   * @example
   * ```ts
   * const endpoint = await client.endpoints.create({
   *   autoscaling: { max_replicas: 5, min_replicas: 2 },
   *   hardware: '1x_nvidia_a100_80gb_sxm',
   *   model: 'meta-llama/Llama-3-8b-chat-hf',
   * });
   * ```
   */
  create(body: EndpointCreateParams, options?: RequestOptions): APIPromise<EndpointCreateResponse> {
    return this._client.post('/endpoints', { body, ...options });
  }

  /**
   * Retrieves details about a specific endpoint, including its current state,
   * configuration, and scaling settings.
   *
   * @example
   * ```ts
   * const endpoint = await client.endpoints.retrieve(
   *   'endpoint-d23901de-ef8f-44bf-b3e7-de9c1ca8f2d7',
   * );
   * ```
   */
  retrieve(endpointID: string, options?: RequestOptions): APIPromise<EndpointRetrieveResponse> {
    return this._client.get(path`/endpoints/${endpointID}`, options);
  }

  /**
   * Updates an existing endpoint's configuration. You can modify the display name,
   * autoscaling settings, or change the endpoint's state (start/stop).
   *
   * @example
   * ```ts
   * const endpoint = await client.endpoints.update(
   *   'endpoint-d23901de-ef8f-44bf-b3e7-de9c1ca8f2d7',
   * );
   * ```
   */
  update(
    endpointID: string,
    body: EndpointUpdateParams,
    options?: RequestOptions,
  ): APIPromise<EndpointUpdateResponse> {
    return this._client.patch(path`/endpoints/${endpointID}`, { body, ...options });
  }

  /**
   * Returns a list of all endpoints associated with your account. You can filter the
   * results by type (dedicated or serverless).
   *
   * @example
   * ```ts
   * const endpoints = await client.endpoints.list();
   * ```
   */
  list(
    query: EndpointListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EndpointListResponse> {
    return this._client.get('/endpoints', { query, ...options });
  }

  /**
   * Permanently deletes an endpoint. This action cannot be undone.
   *
   * @example
   * ```ts
   * await client.endpoints.delete(
   *   'endpoint-d23901de-ef8f-44bf-b3e7-de9c1ca8f2d7',
   * );
   * ```
   */
  delete(endpointID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/endpoints/${endpointID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * Configuration for automatic scaling of replicas based on demand.
 */
export interface Autoscaling {
  /**
   * The maximum number of replicas to scale up to under load
   */
  max_replicas: number;

  /**
   * The minimum number of replicas to maintain, even when there is no load
   */
  min_replicas: number;
}

/**
 * Details about a dedicated endpoint deployment
 */
export interface EndpointCreateResponse {
  /**
   * Unique identifier for the endpoint
   */
  id: string;

  /**
   * Configuration for automatic scaling of the endpoint
   */
  autoscaling: Autoscaling;

  /**
   * Timestamp when the endpoint was created
   */
  created_at: string;

  /**
   * Human-readable name for the endpoint
   */
  display_name: string;

  /**
   * The hardware configuration used for this endpoint
   */
  hardware: string;

  /**
   * The model deployed on this endpoint
   */
  model: string;

  /**
   * System name for the endpoint
   */
  name: string;

  /**
   * The type of object
   */
  object: 'endpoint';

  /**
   * The owner of this endpoint
   */
  owner: string;

  /**
   * Current state of the endpoint
   */
  state: 'PENDING' | 'STARTING' | 'STARTED' | 'STOPPING' | 'STOPPED' | 'ERROR';

  /**
   * The type of endpoint
   */
  type: 'dedicated';
}

/**
 * Details about a dedicated endpoint deployment
 */
export interface EndpointRetrieveResponse {
  /**
   * Unique identifier for the endpoint
   */
  id: string;

  /**
   * Configuration for automatic scaling of the endpoint
   */
  autoscaling: Autoscaling;

  /**
   * Timestamp when the endpoint was created
   */
  created_at: string;

  /**
   * Human-readable name for the endpoint
   */
  display_name: string;

  /**
   * The hardware configuration used for this endpoint
   */
  hardware: string;

  /**
   * The model deployed on this endpoint
   */
  model: string;

  /**
   * System name for the endpoint
   */
  name: string;

  /**
   * The type of object
   */
  object: 'endpoint';

  /**
   * The owner of this endpoint
   */
  owner: string;

  /**
   * Current state of the endpoint
   */
  state: 'PENDING' | 'STARTING' | 'STARTED' | 'STOPPING' | 'STOPPED' | 'ERROR';

  /**
   * The type of endpoint
   */
  type: 'dedicated';
}

/**
 * Details about a dedicated endpoint deployment
 */
export interface EndpointUpdateResponse {
  /**
   * Unique identifier for the endpoint
   */
  id: string;

  /**
   * Configuration for automatic scaling of the endpoint
   */
  autoscaling: Autoscaling;

  /**
   * Timestamp when the endpoint was created
   */
  created_at: string;

  /**
   * Human-readable name for the endpoint
   */
  display_name: string;

  /**
   * The hardware configuration used for this endpoint
   */
  hardware: string;

  /**
   * The model deployed on this endpoint
   */
  model: string;

  /**
   * System name for the endpoint
   */
  name: string;

  /**
   * The type of object
   */
  object: 'endpoint';

  /**
   * The owner of this endpoint
   */
  owner: string;

  /**
   * Current state of the endpoint
   */
  state: 'PENDING' | 'STARTING' | 'STARTED' | 'STOPPING' | 'STOPPED' | 'ERROR';

  /**
   * The type of endpoint
   */
  type: 'dedicated';
}

export interface EndpointListResponse {
  data: Array<EndpointListResponse.Data>;

  object: 'list';
}

export namespace EndpointListResponse {
  /**
   * Details about an endpoint when listed via the list endpoint
   */
  export interface Data {
    /**
     * Unique identifier for the endpoint
     */
    id: string;

    /**
     * Timestamp when the endpoint was created
     */
    created_at: string;

    /**
     * The model deployed on this endpoint
     */
    model: string;

    /**
     * System name for the endpoint
     */
    name: string;

    /**
     * The type of object
     */
    object: 'endpoint';

    /**
     * The owner of this endpoint
     */
    owner: string;

    /**
     * Current state of the endpoint
     */
    state: 'PENDING' | 'STARTING' | 'STARTED' | 'STOPPING' | 'STOPPED' | 'ERROR';

    /**
     * The type of endpoint
     */
    type: 'serverless' | 'dedicated';
  }
}

export interface EndpointCreateParams {
  /**
   * Configuration for automatic scaling of the endpoint
   */
  autoscaling: Autoscaling;

  /**
   * The hardware configuration to use for this endpoint
   */
  hardware: string;

  /**
   * The model to deploy on this endpoint
   */
  model: string;

  /**
   * Whether to disable the prompt cache for this endpoint
   */
  disable_prompt_cache?: boolean;

  /**
   * Whether to disable speculative decoding for this endpoint
   */
  disable_speculative_decoding?: boolean;

  /**
   * A human-readable name for the endpoint
   */
  display_name?: string;

  /**
   * The number of minutes of inactivity after which the endpoint will be
   * automatically stopped. Set to null, omit or set to 0 to disable automatic
   * timeout.
   */
  inactive_timeout?: number | null;

  /**
   * The desired state of the endpoint
   */
  state?: 'STARTED' | 'STOPPED';
}

export interface EndpointUpdateParams {
  /**
   * New autoscaling configuration for the endpoint
   */
  autoscaling?: Autoscaling;

  /**
   * A human-readable name for the endpoint
   */
  display_name?: string;

  /**
   * The number of minutes of inactivity after which the endpoint will be
   * automatically stopped. Set to 0 to disable automatic timeout.
   */
  inactive_timeout?: number | null;

  /**
   * The desired state of the endpoint
   */
  state?: 'STARTED' | 'STOPPED';
}

export interface EndpointListParams {
  /**
   * Filter endpoints by type
   */
  type?: 'dedicated' | 'serverless';
}

export declare namespace Endpoints {
  export {
    type Autoscaling as Autoscaling,
    type EndpointCreateResponse as EndpointCreateResponse,
    type EndpointRetrieveResponse as EndpointRetrieveResponse,
    type EndpointUpdateResponse as EndpointUpdateResponse,
    type EndpointListResponse as EndpointListResponse,
    type EndpointCreateParams as EndpointCreateParams,
    type EndpointUpdateParams as EndpointUpdateParams,
    type EndpointListParams as EndpointListParams,
  };
}
