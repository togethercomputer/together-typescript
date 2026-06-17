// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Adapters extends APIResource {
  /**
   * Returns all LoRA adapters bound to the specified dedicated endpoint.
   *
   * @example
   * ```ts
   * const adapters = await client.endpoints.adapters.list(
   *   'endpointId',
   * );
   * ```
   */
  list(endpointID: string, options?: RequestOptions): APIPromise<AdapterListResponse> {
    return this._client.get(path`/endpoints/${endpointID}/adapters`, options);
  }

  /**
   * Adds a LoRA adapter model to a dedicated endpoint. After this call, inference
   * requests to the adapter model name will be routed to the specified endpoint. The
   * endpoint must have LoRA enabled, and the adapter's base model must be compatible
   * with the endpoint's model. The endpoint name prefix in model_id must match the
   * resolved endpoint.
   *
   * @example
   * ```ts
   * const response = await client.endpoints.adapters.add(
   *   'endpointId',
   *   {
   *     model_id:
   *       'username/Meta-Llama-3.1-8B-Instruct-def456:username/my-adapter-abc123',
   *   },
   * );
   * ```
   */
  add(endpointID: string, body: AdapterAddParams, options?: RequestOptions): APIPromise<AdapterAddResponse> {
    return this._client.post(path`/endpoints/${endpointID}/adapters`, { body, ...options });
  }

  /**
   * Removes the routing rule that binds an adapter to an endpoint. The adapter must
   * be currently bound to this specific endpoint.
   *
   * @example
   * ```ts
   * const adapter = await client.endpoints.adapters.remove(
   *   'endpointId',
   *   { model_id: 'model_id' },
   * );
   * ```
   */
  remove(
    endpointID: string,
    body: AdapterRemoveParams,
    options?: RequestOptions,
  ): APIPromise<AdapterRemoveResponse> {
    return this._client.delete(path`/endpoints/${endpointID}/adapters`, { body, ...options });
  }
}

export interface AdapterListResponse {
  data?: Array<AdapterListResponse.Data>;

  object?: string;
}

export namespace AdapterListResponse {
  export interface Data {
    adapter_name?: string;

    endpoint_name?: string;

    /**
     * Combined endpoint:adapter identifier
     */
    model_id?: string;
  }
}

export interface AdapterAddResponse {
  model_id?: string;
}

export interface AdapterRemoveResponse {
  deleted?: boolean;

  model_id?: string;
}

export interface AdapterAddParams {
  /**
   * Combined identifier in format "endpoint_name:adapter_model_name".
   */
  model_id: string;
}

export interface AdapterRemoveParams {
  /**
   * Combined identifier in format "endpoint_name:adapter_model_name".
   */
  model_id: string;
}

export declare namespace Adapters {
  export {
    type AdapterListResponse as AdapterListResponse,
    type AdapterAddResponse as AdapterAddResponse,
    type AdapterRemoveResponse as AdapterRemoveResponse,
    type AdapterAddParams as AdapterAddParams,
    type AdapterRemoveParams as AdapterRemoveParams,
  };
}
