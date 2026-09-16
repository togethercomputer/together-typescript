// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as EndpointsAPI from '../endpoints';
import * as TargetsAPI from './targets';
import {
  ShadowExperimentTarget,
  ShadowExperimentTargetsCursorPagination,
  TargetCreateParams,
  TargetDeleteParams,
  TargetDeleteResponse,
  TargetListParams,
  TargetRetrieveParams,
  TargetUpdateParams,
  Targets,
} from './targets';
import { APIPromise } from '../../../../core/api-promise';
import { CursorPagination, type CursorPaginationParams, PagePromise } from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class ShadowExperiments extends APIResource {
  targets: TargetsAPI.Targets = new TargetsAPI.Targets(this._client);

  /**
   * Creates an experiment that mirrors a sampled portion of endpoint traffic to one
   * or more target deployments without returning their responses to clients. Add a
   * description with the update operation after creation.
   *
   * @example
   * ```ts
   * const shadowExperiment =
   *   await client.beta.endpoints.shadowExperiments.create(
   *     'endpointId',
   *     {
   *       projectId: 'projectId',
   *       name: 'name',
   *       source: {
   *         endpoint: { sampling: { uniform: { rate: 0 } } },
   *       },
   *     },
   *   );
   * ```
   */
  create(
    endpointID: string,
    params: ShadowExperimentCreateParams,
    options?: RequestOptions,
  ): APIPromise<ShadowExperiment> {
    const { projectId = this._client.projectID, ...body } = params;
    return this._client.post(path`/projects/${projectId}/endpoints/${endpointID}/shadowExperiments`, {
      body,
      defaultBaseURL: 'https://api.together.ai/v2',
      ...options,
    });
  }

  /**
   * Retrieves a shadow experiment, including its sampling strategy and target
   * deployments.
   *
   * @example
   * ```ts
   * const shadowExperiment =
   *   await client.beta.endpoints.shadowExperiments.retrieve(
   *     'id',
   *     { projectId: 'projectId', endpointId: 'endpointId' },
   *   );
   * ```
   */
  retrieve(
    id: string,
    params: ShadowExperimentRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ShadowExperiment> {
    const { projectId = this._client.projectID, endpointId } = params;
    return this._client.get(path`/projects/${projectId}/endpoints/${endpointId}/shadowExperiments/${id}`, {
      defaultBaseURL: 'https://api.together.ai/v2',
      ...options,
    });
  }

  /**
   * Updates a shadow experiment's description or source sampling strategy.
   * `updateMask` is required; source changes also require the current `etag` in the
   * request body.
   *
   * @example
   * ```ts
   * const shadowExperiment =
   *   await client.beta.endpoints.shadowExperiments.update(
   *     'id',
   *     {
   *       projectId: 'projectId',
   *       endpointId: 'endpointId',
   *       updateMask: 'updateMask',
   *     },
   *   );
   * ```
   */
  update(
    id: string,
    params: ShadowExperimentUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ShadowExperiment> {
    const { projectId = this._client.projectID, endpointId, updateMask, ...body } = params;
    return this._client.patch(path`/projects/${projectId}/endpoints/${endpointId}/shadowExperiments/${id}`, {
      query: { updateMask },
      body,
      defaultBaseURL: 'https://api.together.ai/v2',
      ...options,
    });
  }

  /**
   * Lists experiments that mirror sampled endpoint traffic to target deployments
   * without affecting client responses. Set `includeTargets=true` to include target
   * details inline.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const shadowExperiment of client.beta.endpoints.shadowExperiments.list(
   *   'endpointId',
   *   { projectId: 'projectId' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    endpointID: string,
    params: ShadowExperimentListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ShadowExperimentsCursorPagination, ShadowExperiment> {
    const { projectId = this._client.projectID, ...query } = params ?? {};
    return this._client.getAPIList(
      path`/projects/${projectId}/endpoints/${endpointID}/shadowExperiments`,
      CursorPagination<ShadowExperiment>,
      { query, defaultBaseURL: 'https://api.together.ai/v2', ...options },
    );
  }

  /**
   * Deletes a shadow experiment and its target records. The underlying deployments
   * are not deleted.
   *
   * @example
   * ```ts
   * const shadowExperiment =
   *   await client.beta.endpoints.shadowExperiments.delete(
   *     'id',
   *     { projectId: 'projectId', endpointId: 'endpointId' },
   *   );
   * ```
   */
  delete(
    id: string,
    params: ShadowExperimentDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ShadowExperimentDeleteResponse> {
    const { projectId = this._client.projectID, endpointId, etag } = params;
    return this._client.delete(path`/projects/${projectId}/endpoints/${endpointId}/shadowExperiments/${id}`, {
      query: { etag },
      defaultBaseURL: 'https://api.together.ai/v2',
      ...options,
    });
  }
}

export type ShadowExperimentsCursorPagination = CursorPagination<ShadowExperiment>;

/**
 * Experiment that mirrors sampled endpoint requests to target deployments without
 * changing client responses.
 */
export interface ShadowExperiment {
  /**
   * Output only. Unique shadow experiment identifier.
   */
  id: string;

  /**
   * Timestamp when the experiment was created.
   */
  createdAt: string;

  /**
   * Identifier of the principal that created the experiment.
   */
  createdBy: string;

  /**
   * Output only. Endpoint whose traffic this experiment samples.
   */
  endpointId: string;

  /**
   * Opaque version tag for optimistic concurrency control. Returned on read; set it
   * on update or delete requests for consistent read-modify-write.
   */
  etag: string;

  /**
   * Human-readable shadow experiment name, unique within the endpoint. At most 256
   * characters.
   */
  name: string;

  /**
   * Output only. Project that owns the parent endpoint.
   */
  projectId: string;

  /**
   * Endpoint traffic source returned for a shadow experiment.
   */
  source: EndpointsAPI.ShadowSourceResponse;

  /**
   * Derived serving state, active when the experiment has at least one target.
   */
  state: 'SHADOW_EXPERIMENT_STATE_ACTIVE' | 'SHADOW_EXPERIMENT_STATE_INACTIVE';

  /**
   * Target deployments that receive mirrored traffic.
   */
  targets: Array<TargetsAPI.ShadowExperimentTarget>;

  /**
   * Timestamp when the experiment was last updated.
   */
  updatedAt: string;

  /**
   * User defined description.
   */
  description?: string;
}

/**
 * Empty response returned after a successful delete operation.
 */
export interface ShadowExperimentDeleteResponse {}

export interface ShadowExperimentCreateParams {
  /**
   * Path param: Project identifier.
   */
  projectId?: string;

  /**
   * Body param: Human-readable shadow experiment name, unique within the endpoint.
   * At most 256 characters.
   */
  name: string;

  /**
   * Body param: Traffic source for a shadow experiment. The public API supports
   * endpoint sources only.
   */
  source: EndpointsAPI.ShadowSource;

  /**
   * Body param: Optional initial target deployments. At most 100 targets; manage
   * later changes through the target APIs.
   */
  targets?: Array<ShadowExperimentCreateParams.Target>;
}

export namespace ShadowExperimentCreateParams {
  /**
   * Deployment under the parent endpoint that should receive mirrored requests from
   * a shadow experiment.
   */
  export interface Target {
    /**
     * Human-readable target name, unique within the shadow experiment. At most 256
     * characters.
     */
    name: string;

    /**
     * Deployment under the parent endpoint that receives mirrored traffic. It must not
     * be a live traffic-split member or the source or target of an active rollout;
     * traffic-split weight 0 warm-up targets are allowed.
     */
    targetDeploymentId: string;

    /**
     * Optional free-form target description.
     */
    description?: string;
  }
}

export interface ShadowExperimentRetrieveParams {
  /**
   * Project identifier.
   */
  projectId?: string;

  /**
   * Endpoint identifier.
   */
  endpointId: string;
}

export interface ShadowExperimentUpdateParams {
  /**
   * Path param: Project identifier.
   */
  projectId?: string;

  /**
   * Path param: Endpoint identifier.
   */
  endpointId: string;

  /**
   * Query param: Required fields to update, such as description or source.
   */
  updateMask: string;

  /**
   * Body param: Updated free-form description.
   */
  description?: string;

  /**
   * Body param: Opaque version tag from a prior read for optimistic concurrency.
   */
  etag?: string;

  /**
   * Body param: Traffic source for a shadow experiment. The public API supports
   * endpoint sources only.
   */
  source?: EndpointsAPI.ShadowSource;
}

export interface ShadowExperimentListParams extends CursorPaginationParams {
  /**
   * Path param: Project identifier.
   */
  projectId?: string;

  /**
   * Query param: Whether to include target deployments in each returned shadow
   * experiment.
   */
  includeTargets?: boolean;
}

export interface ShadowExperimentDeleteParams {
  /**
   * Path param: Project identifier.
   */
  projectId?: string;

  /**
   * Path param: Endpoint identifier.
   */
  endpointId: string;

  /**
   * Query param: Etag for optimistic concurrency.
   */
  etag?: string;
}

ShadowExperiments.Targets = Targets;

export declare namespace ShadowExperiments {
  export {
    type ShadowExperiment as ShadowExperiment,
    type ShadowExperimentDeleteResponse as ShadowExperimentDeleteResponse,
    type ShadowExperimentsCursorPagination as ShadowExperimentsCursorPagination,
    type ShadowExperimentCreateParams as ShadowExperimentCreateParams,
    type ShadowExperimentRetrieveParams as ShadowExperimentRetrieveParams,
    type ShadowExperimentUpdateParams as ShadowExperimentUpdateParams,
    type ShadowExperimentListParams as ShadowExperimentListParams,
    type ShadowExperimentDeleteParams as ShadowExperimentDeleteParams,
  };

  export {
    Targets as Targets,
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
