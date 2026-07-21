// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EndpointsAPI from './endpoints';
import { EndpointDeploymentsCursorPagination } from './endpoints';
import { APIPromise } from '../../../core/api-promise';
import { CursorPagination, type CursorPaginationParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Deployments extends APIResource {
  /**
   * Creates a model deployment under an endpoint. The deployment provisions
   * asynchronously; monitor its status before routing live traffic to it.
   *
   * @example
   * ```ts
   * const endpointDeployment =
   *   await client.beta.endpoints.deployments.create(
   *     'endpointId',
   *     {
   *       projectId: 'projectId',
   *       autoscaling: {},
   *       name: 'name',
   *     },
   *   );
   * ```
   */
  create(
    endpointID: string,
    params: DeploymentCreateParams,
    options?: RequestOptions,
  ): APIPromise<EndpointsAPI.EndpointDeployment> {
    const { projectId = this._client.projectID, validateOnly, ...body } = params;
    return this._client.post(path`/projects/${projectId}/endpoints/${endpointID}/deployments`, {
      query: { validateOnly },
      body,
      defaultBaseURL: 'https://api.together.ai/v2',
      ...options,
    });
  }

  /**
   * Retrieves a deployment's desired configuration, placement, runtime information,
   * and current provisioning status.
   *
   * @example
   * ```ts
   * const endpointDeployment =
   *   await client.beta.endpoints.deployments.retrieve('id', {
   *     projectId: 'projectId',
   *     endpointId: 'endpointId',
   *   });
   * ```
   */
  retrieve(
    id: string,
    params: DeploymentRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<EndpointsAPI.EndpointDeployment> {
    const { projectId = this._client.projectID, endpointId } = params;
    return this._client.get(path`/projects/${projectId}/endpoints/${endpointId}/deployments/${id}`, {
      defaultBaseURL: 'https://api.together.ai/v2',
      ...options,
    });
  }

  /**
   * Updates mutable deployment fields such as its model, configuration, autoscaling
   * bounds, or LoRA support. Changes that affect serving may trigger asynchronous
   * reprovisioning.
   *
   * @example
   * ```ts
   * const endpointDeployment =
   *   await client.beta.endpoints.deployments.update('id', {
   *     projectId: 'projectId',
   *     endpointId: 'endpointId',
   *   });
   * ```
   */
  update(
    id: string,
    params: DeploymentUpdateParams,
    options?: RequestOptions,
  ): APIPromise<EndpointsAPI.EndpointDeployment> {
    const { projectId = this._client.projectID, endpointId, updateMask, ...body } = params;
    return this._client.patch(path`/projects/${projectId}/endpoints/${endpointId}/deployments/${id}`, {
      query: { updateMask },
      body,
      defaultBaseURL: 'https://api.together.ai/v2',
      ...options,
    });
  }

  /**
   * Lists the deployments attached to an endpoint, including their model,
   * configuration, scaling settings, placement, and current status.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const endpointDeployment of client.beta.endpoints.deployments.list(
   *   'endpointId',
   *   { projectId: 'projectId' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    endpointID: string,
    params: DeploymentListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<EndpointDeploymentsCursorPagination, EndpointsAPI.EndpointDeployment> {
    const { projectId = this._client.projectID, ...query } = params ?? {};
    return this._client.getAPIList(
      path`/projects/${projectId}/endpoints/${endpointID}/deployments`,
      CursorPagination<EndpointsAPI.EndpointDeployment>,
      { query, defaultBaseURL: 'https://api.together.ai/v2', ...options },
    );
  }

  /**
   * Permanently deletes a deployment from its endpoint. Remove the deployment from
   * live traffic first; use `etag` to reject the request if it changed after it was
   * read.
   *
   * @example
   * ```ts
   * const deployment =
   *   await client.beta.endpoints.deployments.delete('id', {
   *     projectId: 'projectId',
   *     endpointId: 'endpointId',
   *   });
   * ```
   */
  delete(
    id: string,
    params: DeploymentDeleteParams,
    options?: RequestOptions,
  ): APIPromise<DeploymentDeleteResponse> {
    const { projectId = this._client.projectID, endpointId, etag } = params;
    return this._client.delete(path`/projects/${projectId}/endpoints/${endpointId}/deployments/${id}`, {
      query: { etag },
      defaultBaseURL: 'https://api.together.ai/v2',
      ...options,
    });
  }
}

/**
 * Empty response returned after a successful delete operation.
 */
export interface DeploymentDeleteResponse {}

export interface DeploymentCreateParams {
  /**
   * Path param: ID of the project that owns the endpoint.
   */
  projectId?: string;

  /**
   * Body param: Autoscaling configuration for a deployment.
   */
  autoscaling: EndpointsAPI.DeploymentAutoscaling;

  /**
   * Body param: Name for the deployment within its endpoint. Returned as a
   * fully-qualified endpoint string.
   */
  name: string;

  /**
   * Query param: When true, validates the request without creating or provisioning a
   * deployment.
   */
  validateOnly?: boolean;

  /**
   * Body param: Immutable config revision in the form
   * `projects/{projectId}/configs/{configRevisionId}`. The config must be compatible
   * with the model.
   */
  config?: string;

  /**
   * Body param: Deprecated. Use `config`. Config revision identifier to deploy,
   * accepted when `config` is unset.
   */
  configId?: string;

  /**
   * Body param: Enables dynamic loading of LoRA adapters on the deployment.
   */
  enableLora?: boolean;

  /**
   * Body param: Model resource name in the form
   * `projects/{projectId}/models/{modelId}[/revisions/{revisionId}]`. Omit the
   * revision segment to pin the latest revision at creation time.
   */
  model?: string;

  /**
   * Body param: Deprecated. Use `model`. Model identifier to serve, accepted when
   * `model` is unset.
   */
  modelId?: string;

  /**
   * Body param: Deprecated. Use `model` with a /revisions/{revisionId} segment. If
   * omitted, the latest revision is resolved at creation.
   */
  modelRevisionId?: string;

  /**
   * Body param: Placement controls where a deployment is scheduled.
   */
  placement?: DeploymentCreateParams.Inline | DeploymentCreateParams.Profile;
}

export namespace DeploymentCreateParams {
  export interface Inline {
    /**
     * Inline placement parameters expanded into scheduling rules by the server.
     */
    inline: EndpointsAPI.DeploymentPlacementConfig;
  }

  export interface Profile {
    /**
     * UID of a saved placement profile.
     */
    profile: string;
  }
}

export interface DeploymentRetrieveParams {
  /**
   * Project identifier.
   */
  projectId?: string;

  /**
   * Endpoint identifier.
   */
  endpointId: string;
}

export interface DeploymentUpdateParams {
  /**
   * Path param: Project identifier.
   */
  projectId?: string;

  /**
   * Path param: Endpoint identifier.
   */
  endpointId: string;

  /**
   * Query param: Fields to update. If not set, the fields populated on `deployment`
   * are updated.
   */
  updateMask?: string;

  /**
   * Body param: Autoscaling configuration for a deployment.
   */
  autoscaling?: EndpointsAPI.DeploymentAutoscaling;

  /**
   * Body param: Current deployment version. The update is rejected if this value no
   * longer matches.
   */
  etag?: string;

  /**
   * Body param: Updated endpoint string.
   */
  name?: string;
}

export interface DeploymentListParams extends CursorPaginationParams {
  /**
   * Path param: ID of the project that owns the endpoint.
   */
  projectId?: string;

  /**
   * Query param: Filter expression using `name`, `state`, `model`, `created_at`, or
   * `updated_at` with comparison operators and AND/OR/NOT; `state` takes a
   * DeploymentState enum name and `model` takes a model resource name. `name`
   * supports substring matching with `:` and prefix/suffix wildcards with `*`, and
   * accepts a bare deployment name or
   * `<project_slug>/<endpoint_name>/<deployment_name>`.
   */
  filter?: string;

  /**
   * Query param: Sort field for the results. Supports `created_at` or `updated_at`,
   * optionally followed by `asc` or `desc`.
   */
  orderBy?: string;
}

export interface DeploymentDeleteParams {
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

export declare namespace Deployments {
  export {
    type DeploymentDeleteResponse as DeploymentDeleteResponse,
    type DeploymentCreateParams as DeploymentCreateParams,
    type DeploymentRetrieveParams as DeploymentRetrieveParams,
    type DeploymentUpdateParams as DeploymentUpdateParams,
    type DeploymentListParams as DeploymentListParams,
    type DeploymentDeleteParams as DeploymentDeleteParams,
  };
}

export { type EndpointDeploymentsCursorPagination };
