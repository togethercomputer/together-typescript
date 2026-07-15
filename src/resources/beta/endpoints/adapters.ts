// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { CursorPagination, type CursorPaginationParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Adapters extends APIResource {
  /**
   * Attaches a LoRA adapter to a deployment. If the deployment is at adapter
   * capacity, force can evict the oldest adapter.
   *
   * @example
   * ```ts
   * const adapter = await client.beta.endpoints.adapters.create(
   *   {
   *     projectId: 'projectId',
   *     endpointId: 'endpointId',
   *     deploymentId: 'deploymentId',
   *     adapterModelId: 'adapterModelId',
   *   },
   * );
   * ```
   */
  create(params: AdapterCreateParams, options?: RequestOptions): APIPromise<AdapterCreateResponse> {
    const { projectId = this._client.projectID, endpointId, deploymentId, ...body } = params;
    return this._client.post(
      path`/projects/${projectId}/endpoints/${endpointId}/deployments/${deploymentId}/adapters`,
      { body, defaultBaseURL: 'https://api.together.ai/v2', ...options },
    );
  }

  /**
   * Gets an attached adapter and its per-cluster load state.
   *
   * @example
   * ```ts
   * const adapter =
   *   await client.beta.endpoints.adapters.retrieve('id', {
   *     projectId: 'projectId',
   *     endpointId: 'endpointId',
   *     deploymentId: 'deploymentId',
   *   });
   * ```
   */
  retrieve(
    id: string,
    params: AdapterRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<AdapterRetrieveResponse> {
    const { projectId = this._client.projectID, endpointId, deploymentId } = params;
    return this._client.get(
      path`/projects/${projectId}/endpoints/${endpointId}/deployments/${deploymentId}/adapters/${id}`,
      { defaultBaseURL: 'https://api.together.ai/v2', ...options },
    );
  }

  /**
   * Updates the pinned revision of an attached adapter using its row-level etag for
   * optimistic concurrency.
   *
   * @example
   * ```ts
   * const adapter = await client.beta.endpoints.adapters.update(
   *   'id',
   *   {
   *     projectId: 'projectId',
   *     endpointId: 'endpointId',
   *     deploymentId: 'deploymentId',
   *     adapterRevisionId: 'adapterRevisionId',
   *     etag: 'etag',
   *   },
   * );
   * ```
   */
  update(
    id: string,
    params: AdapterUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AdapterUpdateResponse> {
    const { projectId = this._client.projectID, endpointId, deploymentId, ...body } = params;
    return this._client.patch(
      path`/projects/${projectId}/endpoints/${endpointId}/deployments/${deploymentId}/adapters/${id}`,
      { body, defaultBaseURL: 'https://api.together.ai/v2', ...options },
    );
  }

  /**
   * Lists LoRA adapters attached to a deployment with per-cluster load state.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const adapterListResponse of client.beta.endpoints.adapters.list(
   *   'endpointId',
   *   'deploymentId',
   *   { projectId: 'projectId' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    endpointID: string,
    deploymentID: string,
    params: AdapterListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AdapterListResponsesCursorPagination, AdapterListResponse> {
    const { projectId = this._client.projectID, ...query } = params ?? {};
    return this._client.getAPIList(
      path`/projects/${projectId}/endpoints/${endpointID}/deployments/${deploymentID}/adapters`,
      CursorPagination<AdapterListResponse>,
      { query, defaultBaseURL: 'https://api.together.ai/v2', ...options },
    );
  }

  /**
   * Detaches an adapter from a deployment using its row-level etag for optimistic
   * concurrency.
   *
   * @example
   * ```ts
   * const adapter = await client.beta.endpoints.adapters.delete(
   *   'id',
   *   {
   *     projectId: 'projectId',
   *     endpointId: 'endpointId',
   *     deploymentId: 'deploymentId',
   *     etag: 'etag',
   *   },
   * );
   * ```
   */
  delete(
    id: string,
    params: AdapterDeleteParams,
    options?: RequestOptions,
  ): APIPromise<AdapterDeleteResponse> {
    const { projectId = this._client.projectID, endpointId, deploymentId, etag } = params;
    return this._client.delete(
      path`/projects/${projectId}/endpoints/${endpointId}/deployments/${deploymentId}/adapters/${id}`,
      { query: { etag }, defaultBaseURL: 'https://api.together.ai/v2', ...options },
    );
  }
}

export type AdapterListResponsesCursorPagination = CursorPagination<AdapterListResponse>;

/**
 * Adapter attached to a deployment with desired revision and observed load state.
 */
export interface AdapterCreateResponse {
  /**
   * Adapter model identifier attached to the deployment.
   */
  adapterModelId: string;

  /**
   * Adapter revision pinned on the deployment.
   */
  desiredRevisionId: string;

  /**
   * Row-level etag required for UpdateAdapter and RemoveAdapter.
   */
  etag: string;

  /**
   * Per-cluster adapter load state reported by the controller.
   */
  perCluster: Array<AdapterCreateResponse.PerCluster>;

  /**
   * Resource name of the adapter model, using
   * projects/{projectId}/models/{adapterModelId}.
   */
  adapterModel?: string;

  /**
   * Resource name of the adapter model revision pinned on the deployment, using
   * projects/{projectId}/models/{adapterModelId}/revisions/{revisionId}.
   */
  desiredRevision?: string;
}

export namespace AdapterCreateResponse {
  /**
   * Controller-reported load state for an adapter on one deployment cluster.
   */
  export interface PerCluster {
    /**
     * Adapter model identifier for this status row.
     */
    adapterModelId: string;

    /**
     * Cluster reporting this adapter status.
     */
    clusterId: string;

    /**
     * Number of pods that failed to load the adapter.
     */
    failedPodCount: number;

    /**
     * Number of pods with the adapter ready to serve.
     */
    readyPodCount: number;

    /**
     * Current adapter load state in this cluster.
     */
    state:
      | 'ADAPTER_LOAD_STATE_PENDING'
      | 'ADAPTER_LOAD_STATE_LOADING'
      | 'ADAPTER_LOAD_STATE_READY'
      | 'ADAPTER_LOAD_STATE_REMOVING'
      | 'ADAPTER_LOAD_STATE_FAILED';

    /**
     * Total pods expected to report adapter load state.
     */
    totalPodCount: number;

    /**
     * Resource name of the adapter model, using
     * projects/{projectId}/models/{adapterModelId}.
     */
    adapterModel?: string;

    /**
     * Time when the adapter first reached READY in this cluster.
     */
    loadedAt?: string;

    /**
     * Human-readable details about the current adapter state.
     */
    message?: string;

    /**
     * Adapter row etag observed by the controller when it wrote this status.
     */
    realizedEtag?: string;

    /**
     * Resource name of the adapter model revision currently loaded in this cluster,
     * using projects/{projectId}/models/{adapterModelId}/revisions/{revisionId}.
     */
    realizedRevision?: string;

    /**
     * Adapter revision currently loaded on pods in this cluster.
     */
    realizedRevisionId?: string;

    /**
     * Stable reason code for the current adapter state.
     */
    reason?: string;

    /**
     * Time when this adapter status was last updated.
     */
    updatedAt?: string;
  }
}

/**
 * Adapter attached to a deployment with desired revision and observed load state.
 */
export interface AdapterRetrieveResponse {
  /**
   * Adapter model identifier attached to the deployment.
   */
  adapterModelId: string;

  /**
   * Adapter revision pinned on the deployment.
   */
  desiredRevisionId: string;

  /**
   * Row-level etag required for UpdateAdapter and RemoveAdapter.
   */
  etag: string;

  /**
   * Per-cluster adapter load state reported by the controller.
   */
  perCluster: Array<AdapterRetrieveResponse.PerCluster>;

  /**
   * Resource name of the adapter model, using
   * projects/{projectId}/models/{adapterModelId}.
   */
  adapterModel?: string;

  /**
   * Resource name of the adapter model revision pinned on the deployment, using
   * projects/{projectId}/models/{adapterModelId}/revisions/{revisionId}.
   */
  desiredRevision?: string;
}

export namespace AdapterRetrieveResponse {
  /**
   * Controller-reported load state for an adapter on one deployment cluster.
   */
  export interface PerCluster {
    /**
     * Adapter model identifier for this status row.
     */
    adapterModelId: string;

    /**
     * Cluster reporting this adapter status.
     */
    clusterId: string;

    /**
     * Number of pods that failed to load the adapter.
     */
    failedPodCount: number;

    /**
     * Number of pods with the adapter ready to serve.
     */
    readyPodCount: number;

    /**
     * Current adapter load state in this cluster.
     */
    state:
      | 'ADAPTER_LOAD_STATE_PENDING'
      | 'ADAPTER_LOAD_STATE_LOADING'
      | 'ADAPTER_LOAD_STATE_READY'
      | 'ADAPTER_LOAD_STATE_REMOVING'
      | 'ADAPTER_LOAD_STATE_FAILED';

    /**
     * Total pods expected to report adapter load state.
     */
    totalPodCount: number;

    /**
     * Resource name of the adapter model, using
     * projects/{projectId}/models/{adapterModelId}.
     */
    adapterModel?: string;

    /**
     * Time when the adapter first reached READY in this cluster.
     */
    loadedAt?: string;

    /**
     * Human-readable details about the current adapter state.
     */
    message?: string;

    /**
     * Adapter row etag observed by the controller when it wrote this status.
     */
    realizedEtag?: string;

    /**
     * Resource name of the adapter model revision currently loaded in this cluster,
     * using projects/{projectId}/models/{adapterModelId}/revisions/{revisionId}.
     */
    realizedRevision?: string;

    /**
     * Adapter revision currently loaded on pods in this cluster.
     */
    realizedRevisionId?: string;

    /**
     * Stable reason code for the current adapter state.
     */
    reason?: string;

    /**
     * Time when this adapter status was last updated.
     */
    updatedAt?: string;
  }
}

/**
 * Adapter attached to a deployment with desired revision and observed load state.
 */
export interface AdapterUpdateResponse {
  /**
   * Adapter model identifier attached to the deployment.
   */
  adapterModelId: string;

  /**
   * Adapter revision pinned on the deployment.
   */
  desiredRevisionId: string;

  /**
   * Row-level etag required for UpdateAdapter and RemoveAdapter.
   */
  etag: string;

  /**
   * Per-cluster adapter load state reported by the controller.
   */
  perCluster: Array<AdapterUpdateResponse.PerCluster>;

  /**
   * Resource name of the adapter model, using
   * projects/{projectId}/models/{adapterModelId}.
   */
  adapterModel?: string;

  /**
   * Resource name of the adapter model revision pinned on the deployment, using
   * projects/{projectId}/models/{adapterModelId}/revisions/{revisionId}.
   */
  desiredRevision?: string;
}

export namespace AdapterUpdateResponse {
  /**
   * Controller-reported load state for an adapter on one deployment cluster.
   */
  export interface PerCluster {
    /**
     * Adapter model identifier for this status row.
     */
    adapterModelId: string;

    /**
     * Cluster reporting this adapter status.
     */
    clusterId: string;

    /**
     * Number of pods that failed to load the adapter.
     */
    failedPodCount: number;

    /**
     * Number of pods with the adapter ready to serve.
     */
    readyPodCount: number;

    /**
     * Current adapter load state in this cluster.
     */
    state:
      | 'ADAPTER_LOAD_STATE_PENDING'
      | 'ADAPTER_LOAD_STATE_LOADING'
      | 'ADAPTER_LOAD_STATE_READY'
      | 'ADAPTER_LOAD_STATE_REMOVING'
      | 'ADAPTER_LOAD_STATE_FAILED';

    /**
     * Total pods expected to report adapter load state.
     */
    totalPodCount: number;

    /**
     * Resource name of the adapter model, using
     * projects/{projectId}/models/{adapterModelId}.
     */
    adapterModel?: string;

    /**
     * Time when the adapter first reached READY in this cluster.
     */
    loadedAt?: string;

    /**
     * Human-readable details about the current adapter state.
     */
    message?: string;

    /**
     * Adapter row etag observed by the controller when it wrote this status.
     */
    realizedEtag?: string;

    /**
     * Resource name of the adapter model revision currently loaded in this cluster,
     * using projects/{projectId}/models/{adapterModelId}/revisions/{revisionId}.
     */
    realizedRevision?: string;

    /**
     * Adapter revision currently loaded on pods in this cluster.
     */
    realizedRevisionId?: string;

    /**
     * Stable reason code for the current adapter state.
     */
    reason?: string;

    /**
     * Time when this adapter status was last updated.
     */
    updatedAt?: string;
  }
}

/**
 * Adapter attached to a deployment with desired revision and observed load state.
 */
export interface AdapterListResponse {
  /**
   * Adapter model identifier attached to the deployment.
   */
  adapterModelId: string;

  /**
   * Adapter revision pinned on the deployment.
   */
  desiredRevisionId: string;

  /**
   * Row-level etag required for UpdateAdapter and RemoveAdapter.
   */
  etag: string;

  /**
   * Per-cluster adapter load state reported by the controller.
   */
  perCluster: Array<AdapterListResponse.PerCluster>;

  /**
   * Resource name of the adapter model, using
   * projects/{projectId}/models/{adapterModelId}.
   */
  adapterModel?: string;

  /**
   * Resource name of the adapter model revision pinned on the deployment, using
   * projects/{projectId}/models/{adapterModelId}/revisions/{revisionId}.
   */
  desiredRevision?: string;
}

export namespace AdapterListResponse {
  /**
   * Controller-reported load state for an adapter on one deployment cluster.
   */
  export interface PerCluster {
    /**
     * Adapter model identifier for this status row.
     */
    adapterModelId: string;

    /**
     * Cluster reporting this adapter status.
     */
    clusterId: string;

    /**
     * Number of pods that failed to load the adapter.
     */
    failedPodCount: number;

    /**
     * Number of pods with the adapter ready to serve.
     */
    readyPodCount: number;

    /**
     * Current adapter load state in this cluster.
     */
    state:
      | 'ADAPTER_LOAD_STATE_PENDING'
      | 'ADAPTER_LOAD_STATE_LOADING'
      | 'ADAPTER_LOAD_STATE_READY'
      | 'ADAPTER_LOAD_STATE_REMOVING'
      | 'ADAPTER_LOAD_STATE_FAILED';

    /**
     * Total pods expected to report adapter load state.
     */
    totalPodCount: number;

    /**
     * Resource name of the adapter model, using
     * projects/{projectId}/models/{adapterModelId}.
     */
    adapterModel?: string;

    /**
     * Time when the adapter first reached READY in this cluster.
     */
    loadedAt?: string;

    /**
     * Human-readable details about the current adapter state.
     */
    message?: string;

    /**
     * Adapter row etag observed by the controller when it wrote this status.
     */
    realizedEtag?: string;

    /**
     * Resource name of the adapter model revision currently loaded in this cluster,
     * using projects/{projectId}/models/{adapterModelId}/revisions/{revisionId}.
     */
    realizedRevision?: string;

    /**
     * Adapter revision currently loaded on pods in this cluster.
     */
    realizedRevisionId?: string;

    /**
     * Stable reason code for the current adapter state.
     */
    reason?: string;

    /**
     * Time when this adapter status was last updated.
     */
    updatedAt?: string;
  }
}

/**
 * Empty response returned after a successful delete operation.
 */
export interface AdapterDeleteResponse {}

export interface AdapterCreateParams {
  /**
   * Path param: Project identifier.
   */
  projectId?: string;

  /**
   * Path param: Endpoint identifier.
   */
  endpointId: string;

  /**
   * Path param: Deployment identifier.
   */
  deploymentId: string;

  /**
   * Body param: Adapter model identifier to attach.
   */
  adapterModelId: string;

  /**
   * Body param: Optional adapter revision to pin. If omitted, the latest revision is
   * resolved at request time.
   */
  adapterRevisionId?: string;

  /**
   * Body param: Whether to evict the oldest adapter if the deployment is at adapter
   * capacity.
   */
  force?: boolean;
}

export interface AdapterRetrieveParams {
  /**
   * Project identifier.
   */
  projectId?: string;

  /**
   * Endpoint identifier.
   */
  endpointId: string;

  /**
   * Deployment identifier.
   */
  deploymentId: string;
}

export interface AdapterUpdateParams {
  /**
   * Path param: Project identifier.
   */
  projectId?: string;

  /**
   * Path param: Endpoint identifier.
   */
  endpointId: string;

  /**
   * Path param: Deployment identifier.
   */
  deploymentId: string;

  /**
   * Body param: New adapter revision to pin.
   */
  adapterRevisionId: string;

  /**
   * Body param: Row-level etag from a prior AddAdapter, UpdateAdapter, GetAdapter,
   * or ListAdapters response.
   */
  etag: string;
}

export interface AdapterListParams extends CursorPaginationParams {
  /**
   * Path param: Project identifier.
   */
  projectId?: string;
}

export interface AdapterDeleteParams {
  /**
   * Path param: Project identifier.
   */
  projectId?: string;

  /**
   * Path param: Endpoint identifier.
   */
  endpointId: string;

  /**
   * Path param: Deployment identifier.
   */
  deploymentId: string;

  /**
   * Query param: Adapter etag from a previous add, update, get, or list response.
   * The removal is rejected if the adapter changed after that response.
   */
  etag: string;
}

export declare namespace Adapters {
  export {
    type AdapterCreateResponse as AdapterCreateResponse,
    type AdapterRetrieveResponse as AdapterRetrieveResponse,
    type AdapterUpdateResponse as AdapterUpdateResponse,
    type AdapterListResponse as AdapterListResponse,
    type AdapterDeleteResponse as AdapterDeleteResponse,
    type AdapterListResponsesCursorPagination as AdapterListResponsesCursorPagination,
    type AdapterCreateParams as AdapterCreateParams,
    type AdapterRetrieveParams as AdapterRetrieveParams,
    type AdapterUpdateParams as AdapterUpdateParams,
    type AdapterListParams as AdapterListParams,
    type AdapterDeleteParams as AdapterDeleteParams,
  };
}
