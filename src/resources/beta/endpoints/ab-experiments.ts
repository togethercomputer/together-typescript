// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EndpointsAPI from './endpoints';
import { APIPromise } from '../../../core/api-promise';
import { CursorPagination, type CursorPaginationParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class AbExperiments extends APIResource {
  /**
   * Creates a managed control/variant split across two to 20 deployments under the
   * same endpoint. Exactly one member is the control, member percentages must add up
   * to 100, and the split applies only to traffic that the endpoint would otherwise
   * send to the control.
   *
   * @example
   * ```ts
   * const abExperiment =
   *   await client.beta.endpoints.abExperiments.create(
   *     'endpointId',
   *     {
   *       projectId: 'projectId',
   *       members: [
   *         {
   *           deploymentId: 'deploymentId',
   *           percent: 0,
   *           role: 'AB_EXPERIMENT_MEMBER_ROLE_CONTROL',
   *         },
   *       ],
   *       name: 'name',
   *     },
   *   );
   * ```
   */
  create(
    endpointID: string,
    params: AbExperimentCreateParams,
    options?: RequestOptions,
  ): APIPromise<AbExperiment> {
    const { projectId = this._client.projectID, ...body } = params;
    return this._client.post(path`/projects/${projectId}/endpoints/${endpointID}/abExperiments`, {
      body,
      defaultBaseURL: 'https://api.together.ai/v2',
      ...options,
    });
  }

  /**
   * Retrieves an A/B experiment and its participating deployments, roles, and
   * traffic percentages.
   *
   * @example
   * ```ts
   * const abExperiment =
   *   await client.beta.endpoints.abExperiments.retrieve('id', {
   *     projectId: 'projectId',
   *     endpointId: 'endpointId',
   *   });
   * ```
   */
  retrieve(
    id: string,
    params: AbExperimentRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<AbExperiment> {
    const { projectId = this._client.projectID, endpointId } = params;
    return this._client.get(path`/projects/${projectId}/endpoints/${endpointId}/abExperiments/${id}`, {
      defaultBaseURL: 'https://api.together.ai/v2',
      ...options,
    });
  }

  /**
   * Updates an experiment's description or member traffic percentages. Use the
   * experiment etag for optimistic concurrency.
   *
   * @example
   * ```ts
   * const abExperiment =
   *   await client.beta.endpoints.abExperiments.update('id', {
   *     projectId: 'projectId',
   *     endpointId: 'endpointId',
   *   });
   * ```
   */
  update(id: string, params: AbExperimentUpdateParams, options?: RequestOptions): APIPromise<AbExperiment> {
    const { projectId = this._client.projectID, endpointId, updateMask, ...body } = params;
    return this._client.patch(path`/projects/${projectId}/endpoints/${endpointId}/abExperiments/${id}`, {
      query: { updateMask },
      body,
      defaultBaseURL: 'https://api.together.ai/v2',
      ...options,
    });
  }

  /**
   * Lists the managed live-traffic experiments configured for an endpoint.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const abExperiment of client.beta.endpoints.abExperiments.list(
   *   'endpointId',
   *   { projectId: 'projectId' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    endpointID: string,
    params: AbExperimentListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AbExperimentsCursorPagination, AbExperiment> {
    const { projectId = this._client.projectID, ...query } = params ?? {};
    return this._client.getAPIList(
      path`/projects/${projectId}/endpoints/${endpointID}/abExperiments`,
      CursorPagination<AbExperiment>,
      { query, defaultBaseURL: 'https://api.together.ai/v2', ...options },
    );
  }

  /**
   * Deletes an A/B experiment and removes its managed traffic split. The deployments
   * themselves are not deleted.
   *
   * @example
   * ```ts
   * const abExperiment =
   *   await client.beta.endpoints.abExperiments.delete('id', {
   *     projectId: 'projectId',
   *     endpointId: 'endpointId',
   *   });
   * ```
   */
  delete(
    id: string,
    params: AbExperimentDeleteParams,
    options?: RequestOptions,
  ): APIPromise<AbExperimentDeleteResponse> {
    const { projectId = this._client.projectID, endpointId, etag } = params;
    return this._client.delete(path`/projects/${projectId}/endpoints/${endpointId}/abExperiments/${id}`, {
      query: { etag },
      defaultBaseURL: 'https://api.together.ai/v2',
      ...options,
    });
  }
}

export type AbExperimentsCursorPagination = CursorPagination<AbExperiment>;

/**
 * Managed cohort split that subdivides a control deployment's live traffic among
 * the control and one or more variants.
 */
export interface AbExperiment {
  /**
   * Output only. Unique A/B experiment identifier.
   */
  id: string;

  /**
   * Output only. Timestamp when the A/B experiment was created.
   */
  createdAt: string;

  /**
   * Output only. Identifier of the principal that created the A/B experiment.
   */
  createdBy: string;

  /**
   * Output only. Endpoint this A/B experiment belongs to.
   */
  endpointId: string;

  /**
   * Optional opaque version tag for optimistic concurrency control.
   */
  etag: string;

  /**
   * Two to 20 participating deployments with exactly one control and percentages
   * that add up to 100.
   */
  members: Array<EndpointsAPI.AbMember>;

  /**
   * Human-readable A/B experiment name, unique within the endpoint.
   */
  name: string;

  /**
   * Output only. Project that owns the parent endpoint.
   */
  projectId: string;

  /**
   * Output only. Timestamp when the A/B experiment was last updated.
   */
  updatedAt: string;

  /**
   * Optional free-form description.
   */
  description?: string;
}

/**
 * Empty response returned after a successful delete operation.
 */
export interface AbExperimentDeleteResponse {}

export interface AbExperimentCreateParams {
  /**
   * Path param: Project identifier.
   */
  projectId?: string;

  /**
   * Body param: Two to 20 participating deployments with exactly one control.
   * Integer traffic percentages across all members must add up to 100.
   */
  members: Array<EndpointsAPI.AbMember>;

  /**
   * Body param: Human-readable A/B experiment name, unique within the endpoint.
   */
  name: string;

  /**
   * Body param: Optional free-form description.
   */
  description?: string;
}

export interface AbExperimentRetrieveParams {
  /**
   * Project identifier.
   */
  projectId?: string;

  /**
   * Endpoint identifier.
   */
  endpointId: string;
}

export interface AbExperimentUpdateParams {
  /**
   * Path param: Project identifier.
   */
  projectId?: string;

  /**
   * Path param: Endpoint identifier.
   */
  endpointId: string;

  /**
   * Query param: Fields to update. If omitted, all mutable fields are overwritten.
   */
  updateMask?: string;

  /**
   * Body param: Updated free-form description.
   */
  description?: string;

  /**
   * Body param: Opaque version tag from a prior read for optimistic concurrency.
   */
  etag?: string;

  /**
   * Body param: Complete replacement member set. Requires two to 20 deployments,
   * exactly one control, and percentages that add up to 100.
   */
  members?: Array<EndpointsAPI.AbMember>;
}

export interface AbExperimentListParams extends CursorPaginationParams {
  /**
   * Path param: Project identifier.
   */
  projectId?: string;
}

export interface AbExperimentDeleteParams {
  /**
   * Path param: Project identifier.
   */
  projectId?: string;

  /**
   * Path param: Endpoint identifier.
   */
  endpointId: string;

  /**
   * Query param: Etag for optimistic concurrency. If set, the delete is rejected if
   * the current etag does not match.
   */
  etag?: string;
}

export declare namespace AbExperiments {
  export {
    type AbExperiment as AbExperiment,
    type AbExperimentDeleteResponse as AbExperimentDeleteResponse,
    type AbExperimentsCursorPagination as AbExperimentsCursorPagination,
    type AbExperimentCreateParams as AbExperimentCreateParams,
    type AbExperimentRetrieveParams as AbExperimentRetrieveParams,
    type AbExperimentUpdateParams as AbExperimentUpdateParams,
    type AbExperimentListParams as AbExperimentListParams,
    type AbExperimentDeleteParams as AbExperimentDeleteParams,
  };
}
