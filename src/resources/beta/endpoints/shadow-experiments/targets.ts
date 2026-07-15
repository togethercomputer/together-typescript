// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { CursorPagination, type CursorPaginationParams, PagePromise } from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Targets extends APIResource {
  /**
   * Adds a deployment under the same endpoint as a target for mirrored requests.
   *
   * @example
   * ```ts
   * const shadowExperimentTarget =
   *   await client.beta.endpoints.shadowExperiments.targets.create(
   *     {
   *       projectId: 'projectId',
   *       endpointId: 'endpointId',
   *       experimentId: 'experimentId',
   *       name: 'name',
   *       targetDeploymentId: 'targetDeploymentId',
   *     },
   *   );
   * ```
   */
  create(params: TargetCreateParams, options?: RequestOptions): APIPromise<ShadowExperimentTarget> {
    const { projectId = this._client.projectID, endpointId, experimentId, ...body } = params;
    return this._client.post(
      path`/projects/${projectId}/endpoints/${endpointId}/shadowExperiments/${experimentId}/targets`,
      { body, defaultBaseURL: 'https://api.together.ai/v2', ...options },
    );
  }

  /**
   * Retrieves one target configured to receive mirrored requests from a shadow
   * experiment.
   *
   * @example
   * ```ts
   * const shadowExperimentTarget =
   *   await client.beta.endpoints.shadowExperiments.targets.retrieve(
   *     'id',
   *     {
   *       projectId: 'projectId',
   *       endpointId: 'endpointId',
   *       experimentId: 'experimentId',
   *     },
   *   );
   * ```
   */
  retrieve(
    id: string,
    params: TargetRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ShadowExperimentTarget> {
    const { projectId = this._client.projectID, endpointId, experimentId } = params;
    return this._client.get(
      path`/projects/${projectId}/endpoints/${endpointId}/shadowExperiments/${experimentId}/targets/${id}`,
      { defaultBaseURL: 'https://api.together.ai/v2', ...options },
    );
  }

  /**
   * Updates a shadow target's name, deployment, or description. `updateMask` is
   * required and must select at least one mutable field.
   *
   * @example
   * ```ts
   * const shadowExperimentTarget =
   *   await client.beta.endpoints.shadowExperiments.targets.update(
   *     'id',
   *     {
   *       projectId: 'projectId',
   *       endpointId: 'endpointId',
   *       experimentId: 'experimentId',
   *       updateMask: 'updateMask',
   *     },
   *   );
   * ```
   */
  update(
    id: string,
    params: TargetUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ShadowExperimentTarget> {
    const { projectId = this._client.projectID, endpointId, experimentId, updateMask, ...body } = params;
    return this._client.patch(
      path`/projects/${projectId}/endpoints/${endpointId}/shadowExperiments/${experimentId}/targets/${id}`,
      { query: { updateMask }, body, defaultBaseURL: 'https://api.together.ai/v2', ...options },
    );
  }

  /**
   * Lists the deployments that receive mirrored requests from a shadow experiment.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const shadowExperimentTarget of client.beta.endpoints.shadowExperiments.targets.list(
   *   'endpointId',
   *   'experimentId',
   *   { projectId: 'projectId' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    endpointID: string,
    experimentID: string,
    params: TargetListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ShadowExperimentTargetsCursorPagination, ShadowExperimentTarget> {
    const { projectId = this._client.projectID, ...query } = params ?? {};
    return this._client.getAPIList(
      path`/projects/${projectId}/endpoints/${endpointID}/shadowExperiments/${experimentID}/targets`,
      CursorPagination<ShadowExperimentTarget>,
      { query, defaultBaseURL: 'https://api.together.ai/v2', ...options },
    );
  }

  /**
   * Removes a target from a shadow experiment without deleting the underlying
   * deployment.
   *
   * @example
   * ```ts
   * const target =
   *   await client.beta.endpoints.shadowExperiments.targets.delete(
   *     'id',
   *     {
   *       projectId: 'projectId',
   *       endpointId: 'endpointId',
   *       experimentId: 'experimentId',
   *     },
   *   );
   * ```
   */
  delete(id: string, params: TargetDeleteParams, options?: RequestOptions): APIPromise<TargetDeleteResponse> {
    const { projectId = this._client.projectID, endpointId, experimentId, etag } = params;
    return this._client.delete(
      path`/projects/${projectId}/endpoints/${endpointId}/shadowExperiments/${experimentId}/targets/${id}`,
      { query: { etag }, defaultBaseURL: 'https://api.together.ai/v2', ...options },
    );
  }
}

export type ShadowExperimentTargetsCursorPagination = CursorPagination<ShadowExperimentTarget>;

/**
 * Deployment that receives mirrored traffic for a shadow experiment.
 */
export interface ShadowExperimentTarget {
  /**
   * Output only. Unique shadow experiment target identifier.
   */
  id: string;

  /**
   * Output only. Timestamp when the target was created.
   */
  createdAt: string;

  /**
   * Opaque version tag for optimistic concurrency control. Returned on read; set it
   * on update or delete requests for consistent read-modify-write.
   */
  etag: string;

  /**
   * Output only. Shadow experiment this target belongs to.
   */
  experimentId: string;

  /**
   * Human-readable target name, unique within the shadow experiment. At most 256
   * characters.
   */
  name: string;

  /**
   * Deployment under the parent endpoint that receives mirrored traffic. Shadow
   * targets should be excluded from the endpoint's live traffic split.
   */
  targetDeploymentId: string;

  /**
   * Output only. Timestamp when the target was last updated.
   */
  updatedAt: string;

  /**
   * Optional free-form target description.
   */
  description?: string;
}

/**
 * Empty response returned after a successful delete operation.
 */
export interface TargetDeleteResponse {}

export interface TargetCreateParams {
  /**
   * Path param: Project identifier.
   */
  projectId?: string;

  /**
   * Path param: Endpoint identifier.
   */
  endpointId: string;

  /**
   * Path param: Shadow experiment identifier.
   */
  experimentId: string;

  /**
   * Body param: Human-readable target name, unique within the shadow experiment. At
   * most 256 characters.
   */
  name: string;

  /**
   * Body param: Deployment under the parent endpoint that receives mirrored traffic.
   * Exclude it from the endpoint's live traffic split.
   */
  targetDeploymentId: string;

  /**
   * Body param: Optional free-form target description.
   */
  description?: string;
}

export interface TargetRetrieveParams {
  /**
   * Project identifier.
   */
  projectId?: string;

  /**
   * Endpoint identifier.
   */
  endpointId: string;

  /**
   * Shadow experiment identifier.
   */
  experimentId: string;
}

export interface TargetUpdateParams {
  /**
   * Path param: Project identifier.
   */
  projectId?: string;

  /**
   * Path param: Endpoint identifier.
   */
  endpointId: string;

  /**
   * Path param: Shadow experiment identifier.
   */
  experimentId: string;

  /**
   * Query param: Comma-separated fields to update. Supported fields are `name`,
   * `targetDeploymentId`, and `description`.
   */
  updateMask: string;

  /**
   * Body param: Updated free-form target description.
   */
  description?: string;

  /**
   * Body param: Opaque version tag from a prior read for optimistic concurrency.
   */
  etag?: string;

  /**
   * Body param: Updated human-readable target name.
   */
  name?: string;

  /**
   * Body param: Replacement deployment under the parent endpoint. Exclude it from
   * the endpoint's live traffic split.
   */
  targetDeploymentId?: string;
}

export interface TargetListParams extends CursorPaginationParams {
  /**
   * Path param: Project identifier.
   */
  projectId?: string;
}

export interface TargetDeleteParams {
  /**
   * Path param: Project identifier.
   */
  projectId?: string;

  /**
   * Path param: Endpoint identifier.
   */
  endpointId: string;

  /**
   * Path param: Shadow experiment identifier.
   */
  experimentId: string;

  /**
   * Query param: Etag for optimistic concurrency.
   */
  etag?: string;
}

export declare namespace Targets {
  export {
    type ShadowExperimentTarget as ShadowExperimentTarget,
    type TargetDeleteResponse as TargetDeleteResponse,
    type ShadowExperimentTargetsCursorPagination as ShadowExperimentTargetsCursorPagination,
    type TargetCreateParams as TargetCreateParams,
    type TargetRetrieveParams as TargetRetrieveParams,
    type TargetUpdateParams as TargetUpdateParams,
    type TargetListParams as TargetListParams,
    type TargetDeleteParams as TargetDeleteParams,
  };
}
