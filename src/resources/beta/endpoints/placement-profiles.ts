// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { CursorPagination, type CursorPaginationParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class PlacementProfiles extends APIResource {
  /**
   * Retrieves a reusable placement profile and its ordered region preferences.
   *
   * @example
   * ```ts
   * const placementProfile =
   *   await client.beta.endpoints.placementProfiles.retrieve(
   *     'id',
   *     { projectId: 'projectId' },
   *   );
   * ```
   */
  retrieve(
    id: string,
    params: PlacementProfileRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PlacementProfile> {
    const { projectId = this._client.projectID } = params ?? {};
    return this._client.get(path`/projects/${projectId}/placement-profiles/${id}`, {
      defaultBaseURL: 'https://api.together.ai/v2',
      ...options,
    });
  }

  /**
   * Lists reusable, project-visible placement policies that control the regions
   * where deployments may be scheduled.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const placementProfile of client.beta.endpoints.placementProfiles.list(
   *   { projectId: 'projectId' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: PlacementProfileListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PlacementProfilesCursorPagination, PlacementProfile> {
    const { projectId = this._client.projectID, ...query } = params ?? {};
    return this._client.getAPIList(
      path`/projects/${projectId}/placement-profiles`,
      CursorPagination<PlacementProfile>,
      { query, defaultBaseURL: 'https://api.together.ai/v2', ...options },
    );
  }
}

export type PlacementProfilesCursorPagination = CursorPagination<PlacementProfile>;

/**
 * Reusable ordered region preferences for scheduling a project's deployments.
 */
export interface PlacementProfile {
  /**
   * Unique placement profile identifier.
   */
  id: string;

  /**
   * Human-readable placement profile name.
   */
  name: string;

  /**
   * Organization that owns the placement profile.
   */
  organizationId: string;

  /**
   * Preferred deployment regions in descending priority order.
   */
  preferredRegions: Array<string>;

  /**
   * Project that owns the placement profile.
   */
  projectId: string;
}

export interface PlacementProfileRetrieveParams {
  /**
   * Project identifier.
   */
  projectId?: string;
}

export interface PlacementProfileListParams extends CursorPaginationParams {
  /**
   * Path param: Project identifier.
   */
  projectId?: string;
}

export declare namespace PlacementProfiles {
  export {
    type PlacementProfile as PlacementProfile,
    type PlacementProfilesCursorPagination as PlacementProfilesCursorPagination,
    type PlacementProfileRetrieveParams as PlacementProfileRetrieveParams,
    type PlacementProfileListParams as PlacementProfileListParams,
  };
}
