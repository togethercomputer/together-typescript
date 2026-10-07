// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { CursorPagination, type CursorPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

export class Projects extends APIResource {
  /**
   * Retrieve a list of accessible projects.
   */
  list(
    query: ProjectListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ProjectsCursorPagination, Project> {
    return this._client.getAPIList('/projects', CursorPagination<Project>, { query, ...options });
  }
}

export type ProjectsCursorPagination = CursorPagination<Project>;

/**
 * A project the authenticated caller can access.
 */
export interface Project {
  /**
   * Unique project identifier.
   */
  id: string;

  /**
   * Display name of the project.
   */
  name: string;

  /**
   * ID of the organization that owns the project.
   */
  organization_id: string;

  /**
   * Display name of the organization that owns the project.
   */
  organization_name: string;

  /**
   * Customer-facing project slug.
   */
  slug: string;
}

export interface ProjectListParams extends CursorPaginationParams {}

export declare namespace Projects {
  export {
    type Project as Project,
    type ProjectsCursorPagination as ProjectsCursorPagination,
    type ProjectListParams as ProjectListParams,
  };
}
