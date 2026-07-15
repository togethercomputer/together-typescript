// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { CursorPagination, type CursorPaginationParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Configs extends APIResource {
  /**
   * Retrieves a model configuration revision by ID, including its runtime selectors
   * and certifications.
   *
   * @example
   * ```ts
   * const config = await client.beta.models.configs.retrieve(
   *   'id',
   *   { projectId: 'projectId' },
   * );
   * ```
   */
  retrieve(
    id: string,
    params: ConfigRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Config> {
    const { projectId = this._client.projectID } = params ?? {};
    return this._client.get(path`/projects/${projectId}/configs/${id}`, {
      defaultBaseURL: 'https://api.together.ai/v2',
      ...options,
    });
  }

  /**
   * Lists production-ready configuration revisions compatible with a reference
   * model. Specify the model with `referenceModel` or the deprecated
   * `referenceModelId`; if both are supplied, they must identify the same model.
   * Results include public configurations and configurations owned by the specified
   * project.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const config of client.beta.models.configs.list({
   *   projectId: 'projectId',
   * })) {
   *   // ...
   * }
   * ```
   */
  list(
    params: ConfigListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ConfigsCursorPagination, Config> {
    const { projectId = this._client.projectID, ...query } = params ?? {};
    return this._client.getAPIList(path`/projects/${projectId}/configs`, CursorPagination<Config>, {
      query,
      defaultBaseURL: 'https://api.together.ai/v2',
      ...options,
    });
  }
}

export type ConfigsCursorPagination = CursorPagination<Config>;

/**
 * Immutable, user-facing configuration revision that defines how a compatible
 * model runs, including engine and hardware selectors.
 */
export interface Config {
  /**
   * Config revision identifier.
   */
  id: string;

  /**
   * Model, hardware, and runtime combinations certified for this config revision.
   */
  certifications: Array<Config.Certification>;

  /**
   * ID of the project that owns the config revision. Public configs may be owned by
   * a different project than the deployment.
   */
  projectId: string;

  /**
   * Resource name of the referenced model, using
   * `projects/{modelProject}/models/{modelId}`.
   */
  referenceModel: string;

  /**
   * Deprecated. Use `referenceModel`. Reference model identifier.
   */
  referenceModelId: string;

  /**
   * Hardware and runtime selectors used to place and configure replicas.
   */
  selectors: Array<Config.Selector>;

  /**
   * Resource name of the draft model, using
   * `projects/{draftProject}/models/{modelId}`; empty when speculative decoding is
   * not enabled.
   */
  draftModel?: string;
}

export namespace Config {
  /**
   * Certification result for a model, config, and optional draft-model combination.
   */
  export interface Certification {
    /**
     * Whether the model and config combination passed certification.
     */
    certificationType: 'CERTIFICATION_TYPE_CERTIFIED' | 'CERTIFICATION_TYPE_UNCERTIFIED';

    /**
     * Time when the certification decision was recorded.
     */
    certifiedAt: string;

    /**
     * Service or reviewer that recorded the certification.
     */
    certifiedBy: string;

    /**
     * Resource name of the certified model.
     */
    model: string;

    /**
     * Revision identifier of the certified model.
     */
    modelRevisionId: string;

    /**
     * Product or serving environment for which the combination was evaluated.
     */
    target: 'CERTIFICATION_TARGET_DE_SERVERLESS' | 'CERTIFICATION_TARGET_MRE';

    /**
     * Resource name of the certified draft model.
     */
    draftModel?: string;

    /**
     * Revision identifier of the certified draft model.
     */
    draftModelRevisionId?: string;

    /**
     * Human-readable certification notes or limitations.
     */
    notes?: string;
  }

  /**
   * Hardware or runtime requirement expressed as a key-value pair.
   */
  export interface Selector {
    /**
     * Selector name, such as GPU type, GPU count, or optimization profile.
     */
    key: string;

    /**
     * Required value for the selector.
     */
    value: string;
  }
}

export interface ConfigRetrieveParams {
  /**
   * Project identifier.
   */
  projectId?: string;
}

export interface ConfigListParams extends CursorPaginationParams {
  /**
   * Path param: Project identifier.
   */
  projectId?: string;

  /**
   * Query param: Model resource-name filter using
   * `projects/{projectId}/models/{modelId}`; alternative to `referenceModelId`. If
   * both are set, they must agree.
   */
  referenceModel?: string;

  /**
   * Query param: Deprecated. Use `referenceModel`. Reference model identifier
   * filter; if both are set, they must agree.
   */
  referenceModelId?: string;
}

export declare namespace Configs {
  export {
    type Config as Config,
    type ConfigsCursorPagination as ConfigsCursorPagination,
    type ConfigRetrieveParams as ConfigRetrieveParams,
    type ConfigListParams as ConfigListParams,
  };
}
