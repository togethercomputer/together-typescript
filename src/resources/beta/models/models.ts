// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ConfigsAPI from './configs';
import { Config, ConfigListParams, ConfigRetrieveParams, Configs, ConfigsCursorPagination } from './configs';
import * as RemoteUploadsAPI from './remote-uploads';
import {
  RemoteUploadCreateParams,
  RemoteUploadCreateResponse,
  RemoteUploadEventsParams,
  RemoteUploadEventsResponse,
  RemoteUploadListParams,
  RemoteUploadListResponse,
  RemoteUploadListResponsesCursorPagination,
  RemoteUploadRetrieveParams,
  RemoteUploadRetrieveResponse,
  RemoteUploads,
} from './remote-uploads';
import { APIPromise } from '../../../core/api-promise';
import { CursorPagination, type CursorPaginationParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Models extends APIResource {
  remoteUploads: RemoteUploadsAPI.RemoteUploads = new RemoteUploadsAPI.RemoteUploads(this._client);
  configs: ConfigsAPI.Configs = new ConfigsAPI.Configs(this._client);

  /**
   * Registers a custom model resource in the project. Registration creates the
   * model's metadata; upload or import model files separately before deploying it.
   *
   * @example
   * ```ts
   * const model = await client.beta.models.create({
   *   projectId: 'projectId',
   *   baseModelId: 'baseModelId',
   *   name: 'name',
   *   type: 'type',
   * });
   * ```
   */
  create(params: ModelCreateParams, options?: RequestOptions): APIPromise<Model> {
    const { projectId = this._client.projectID, ...body } = params;
    return this._client.post(path`/projects/${projectId}/models`, {
      body,
      defaultBaseURL: 'https://api.together.ai/v2',
      ...options,
    });
  }

  /**
   * Retrieves a custom model's metadata, visibility, weight information, and
   * base-model relationship.
   *
   * @example
   * ```ts
   * const model = await client.beta.models.retrieve('id', {
   *   projectId: 'projectId',
   * });
   * ```
   */
  retrieve(
    id: string,
    params: ModelRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Model> {
    const { projectId = this._client.projectID } = params ?? {};
    return this._client.get(path`/projects/${projectId}/models/${id}`, {
      defaultBaseURL: 'https://api.together.ai/v2',
      ...options,
    });
  }

  /**
   * Updates mutable model metadata such as its inference name, description, base
   * model, or visibility.
   *
   * @example
   * ```ts
   * const model = await client.beta.models.update('id', {
   *   projectId: 'projectId',
   * });
   * ```
   */
  update(id: string, params: ModelUpdateParams, options?: RequestOptions): APIPromise<Model> {
    const { projectId = this._client.projectID, updateMask, ...body } = params;
    return this._client.patch(path`/projects/${projectId}/models/${id}`, {
      query: { updateMask },
      body,
      defaultBaseURL: 'https://api.together.ai/v2',
      ...options,
    });
  }

  /**
   * Lists custom model resources owned by the specified project. Use the
   * organization endpoint to list models shared across projects or the
   * supported-model catalog to discover Together-hosted base models.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const model of client.beta.models.list({
   *   projectId: 'projectId',
   * })) {
   *   // ...
   * }
   * ```
   */
  list(
    params: ModelListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ModelsCursorPagination, Model> {
    const { projectId = this._client.projectID, ...query } = params ?? {};
    return this._client.getAPIList(path`/projects/${projectId}/models`, CursorPagination<Model>, {
      query,
      defaultBaseURL: 'https://api.together.ai/v2',
      ...options,
    });
  }

  /**
   * Permanently deletes a custom model resource. The model must not be in use by an
   * active deployment.
   *
   * @example
   * ```ts
   * const model = await client.beta.models.delete('id', {
   *   projectId: 'projectId',
   * });
   * ```
   */
  delete(
    id: string,
    params: ModelDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ModelDeleteResponse> {
    const { projectId = this._client.projectID } = params ?? {};
    return this._client.delete(path`/projects/${projectId}/models/${id}`, {
      defaultBaseURL: 'https://api.together.ai/v2',
      ...options,
    });
  }

  /**
   * Lists files in the latest or specified revision of a model, including paths,
   * sizes, and content hashes.
   *
   * @example
   * ```ts
   * const response = await client.beta.models.listFiles('id', {
   *   projectId: 'projectId',
   * });
   * ```
   */
  listFiles(
    id: string,
    params: ModelListFilesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ModelListFilesResponse> {
    const { projectId = this._client.projectID, ...query } = params ?? {};
    return this._client.get(path`/projects/${projectId}/models/${id}/files`, {
      query,
      defaultBaseURL: 'https://api.together.ai/v2',
      ...options,
    });
  }

  /**
   * Lists custom models shared with every project in the specified organization.
   * Project-private and public models are not included.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const model of client.beta.models.listOrgScoped(
   *   'organizationId',
   * )) {
   *   // ...
   * }
   * ```
   */
  listOrgScoped(
    organizationID: string,
    query: ModelListOrgScopedParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ModelsCursorPagination, Model> {
    return this._client.getAPIList(path`/organizations/${organizationID}/models`, CursorPagination<Model>, {
      query,
      defaultBaseURL: 'https://api.together.ai/v2',
      ...options,
    });
  }

  /**
   * Lists the immutable file revisions available for a custom model, newest first.
   *
   * @example
   * ```ts
   * const response = await client.beta.models.listRevisions(
   *   'id',
   *   { projectId: 'projectId' },
   * );
   * ```
   */
  listRevisions(
    id: string,
    params: ModelListRevisionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ModelListRevisionsResponse> {
    const { projectId = this._client.projectID } = params ?? {};
    return this._client.get(path`/projects/${projectId}/models/${id}/revisions`, {
      defaultBaseURL: 'https://api.together.ai/v2',
      ...options,
    });
  }

  /**
   * Lists Together-hosted base models that can be deployed for dedicated inference,
   * together with their capabilities and certified deployment profiles.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const supportedModel of client.beta.models.listSupported()) {
   *   // ...
   * }
   * ```
   */
  listSupported(
    query: ModelListSupportedParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SupportedModelsCursorPagination, SupportedModel> {
    return this._client.getAPIList('/supported-models', CursorPagination<SupportedModel>, {
      query,
      defaultBaseURL: 'https://api.together.ai/v2',
      ...options,
    });
  }

  /**
   * Retrieves a Together-hosted base model and the certified model, configuration,
   * hardware, and performance profiles available for deployment.
   *
   * @example
   * ```ts
   * const supportedModel =
   *   await client.beta.models.retrieveSupported('id');
   * ```
   */
  retrieveSupported(id: string, options?: RequestOptions): APIPromise<SupportedModel> {
    return this._client.get(path`/supported-models/${id}`, {
      defaultBaseURL: 'https://api.together.ai/v2',
      ...options,
    });
  }
}

export type ModelsCursorPagination = CursorPagination<Model>;

export type SupportedModelsCursorPagination = CursorPagination<SupportedModel>;

/**
 * Custom or derived model registered in a project and backed by versioned weight
 * files.
 */
export interface Model {
  /**
   * Unique model identifier.
   */
  id: string;

  /**
   * Project-qualified model name in the form `<project_slug>/<model_name>`. Create
   * and update requests may use the bare or qualified form.
   */
  name: string;

  /**
   * ID of the organization that owns the model's project.
   */
  organizationId: string;

  /**
   * ID of the project that owns the model.
   */
  projectId: string;

  /**
   * Who can discover the model. `VISIBILITY_PRIVATE` restricts it to the project;
   * `VISIBILITY_INTERNAL` shares it with the organization.
   */
  visibility: 'VISIBILITY_PRIVATE' | 'VISIBILITY_INTERNAL';

  /**
   * Architecture, size, precision, and speculative-decoding metadata derived from
   * the model files.
   */
  weights: Model.Weights;

  /**
   * Resource name of the base model, using
   * `projects/{baseProject}/models/{baseModelId}`; empty when the model has no base.
   */
  baseModel?: string;

  /**
   * ID of the supported or custom base model from which this model was derived.
   */
  baseModelId?: string;

  /**
   * Human-readable description of the model and its intended use.
   */
  description?: string;
}

export namespace Model {
  /**
   * Architecture, size, precision, and speculative-decoding metadata derived from
   * the model files.
   */
  export interface Weights {
    /**
     * Model architecture detected from the weight metadata.
     */
    architecture?: string;

    /**
     * Maximum context length reported by the model metadata.
     */
    contextLength?: string;

    /**
     * Draft-model speculator family for draft speculative decoding.
     */
    draftSpeculatorType?: 'DRAFT_SPECULATOR_TYPE_EAGLE' | 'DRAFT_SPECULATOR_TYPE_PHOENIX';

    /**
     * Total parameter count and breakdown by numerical data type.
     */
    parameters?: Weights.Parameters;

    /**
     * Speculative decoding mechanism for speculator weights.
     */
    speculatorMechanism?:
      | 'SPECULATOR_MECHANISM_DRAFT'
      | 'SPECULATOR_MECHANISM_LOOKAHEAD'
      | 'SPECULATOR_MECHANISM_MTP';

    /**
     * Role of the weights: full model, speculative draft model, or LoRA adapter.
     */
    type?: 'WEIGHTS_TYPE_DEFAULT' | 'WEIGHTS_TYPE_SPECULATOR' | 'WEIGHTS_TYPE_ADAPTER';
  }

  export namespace Weights {
    /**
     * Total parameter count and breakdown by numerical data type.
     */
    export interface Parameters {
      /**
       * Parameter counts grouped by numerical data type.
       */
      byDtype: Array<Parameters.ByDtype>;

      /**
       * Total number of parameters in the model weights.
       */
      total: string;
    }

    export namespace Parameters {
      /**
       * Number of model parameters stored in one numerical data type.
       */
      export interface ByDtype {
        /**
         * Number of model parameters stored with this data type.
         */
        count: string;

        /**
         * Numerical data type, such as `float16`, `bfloat16`, or `int8`.
         */
        dtype: string;
      }
    }
  }
}

/**
 * Curated catalog entry for a platform-supported model.
 */
export interface SupportedModel {
  /**
   * Unique ID of the deployable Together-hosted base model.
   */
  id: string;

  /**
   * Resource name for the base model as `projects/{projectId}/models/{modelId}`;
   * empty when unresolved.
   */
  baseModel: string;

  /**
   * Bare model ID for the architecture's base model; empty when no base model is
   * linked.
   */
  baseModelId: string;

  /**
   * High-level tasks the model supports.
   */
  capabilities: Array<
    | 'CAPABILITY_CHAT'
    | 'CAPABILITY_EMBEDDING'
    | 'CAPABILITY_RERANKING'
    | 'CAPABILITY_IMAGE_GENERATION'
    | 'CAPABILITY_VIDEO_GENERATION'
  >;

  /**
   * Timestamp when the catalog entry was created.
   */
  createdAt: string;

  /**
   * Certified deployment profiles available for the model.
   */
  deploymentProfiles: Array<SupportedModelDeploymentProfile>;

  /**
   * Catalog-controlled human-readable model name.
   */
  displayName: string;

  /**
   * UI-facing model type badge, such as chat, language, code, image, embedding,
   * rerank, moderation, audio, video, or transcribe.
   */
  displayType: string;

  /**
   * Input modalities supported by the model.
   */
  inputModalities: Array<'MODALITY_TEXT' | 'MODALITY_IMAGE' | 'MODALITY_AUDIO' | 'MODALITY_VIDEO'>;

  /**
   * Catalog-controlled HF model ID used for inference.
   */
  name: string;

  /**
   * Output modalities produced by the model.
   */
  outputModalities: Array<'MODALITY_TEXT' | 'MODALITY_IMAGE' | 'MODALITY_AUDIO' | 'MODALITY_VIDEO'>;

  /**
   * Product surfaces where the model is offered.
   */
  products: Array<'PRODUCT_SERVERLESS' | 'PRODUCT_DEDICATED' | 'PRODUCT_FINE_TUNING'>;

  /**
   * Organization or publisher associated with the model.
   */
  publisher: string;

  /**
   * Catalog recommendation status for the model.
   */
  status:
    | 'SUPPORTED_MODEL_STATUS_RECOMMENDED'
    | 'SUPPORTED_MODEL_STATUS_SUPPORTED'
    | 'SUPPORTED_MODEL_STATUS_DEPRECATED'
    | 'SUPPORTED_MODEL_STATUS_HIDDEN';

  /**
   * Timestamp when the catalog entry was last updated.
   */
  updatedAt: string;

  /**
   * Model architecture from the underlying weights metadata.
   */
  architecture?: string;

  /**
   * Maximum context length from the underlying weights metadata.
   */
  contextLength?: string;

  /**
   * Human-readable model description.
   */
  description?: string;

  /**
   * Model family identifier for related catalog entries.
   */
  familyId?: string;

  /**
   * Advanced features exposed by the model.
   */
  features?: Array<'FEATURE_TOOL_CALLING' | 'FEATURE_STRUCTURED_OUTPUT' | 'FEATURE_REASONING'>;

  /**
   * Preferred input format for the model.
   */
  inputFormat?: string;

  /**
   * Preferred output format for the model.
   */
  outputFormat?: string;

  /**
   * Serverless endpoint name for inference, if available.
   */
  serverlessEndpoint?: string;

  /**
   * Searchable catalog tags for the model.
   */
  tags?: Array<string>;
}

/**
 * Certified deployment profile for a supported model.
 */
export interface SupportedModelDeploymentProfile {
  /**
   * Certified configuration revision identifier.
   */
  certifiedConfigRevisionId: string;

  /**
   * Certified model weight revision identifier, if available.
   */
  certifiedModelRevisionId: string;

  /**
   * Certified config revision in the form
   * `projects/{projectId}/configs/{configRevisionId}`. Omitted when the profile does
   * not pin a config.
   */
  config: string;

  /**
   * Number of GPUs required by the profile.
   */
  gpuCount: number;

  /**
   * GPU instance type for the profile.
   */
  gpuType: string;

  /**
   * Deployable model resource in the form
   * `projects/{projectId}/models/{modelId}[/revisions/{revisionId}]`. Omitted when
   * the profile does not pin model weights.
   */
  model: string;

  /**
   * Free-form parallelism spec for the profile, such as TP8, TP4, EP, or PD;
   * supersedes tensor_parallel_size.
   */
  parallelism: string;

  /**
   * Performance benchmarks for the profile, if available.
   */
  performanceBenchmarks: SupportedModelPerformanceBenchmarks;

  /**
   * Stable profile identifier, usually the certified config id.
   */
  profileId: string;

  /**
   * Quantization method for the profile, if available.
   */
  quantization: string;

  /**
   * @deprecated Deprecated. Use `parallelism`. Legacy tensor-parallel shard count
   * for the profile.
   */
  tensorParallelSize?: number;
}

/**
 * Performance benchmark metrics for a supported model profile.
 */
export interface SupportedModelPerformanceBenchmarks {
  /**
   * Decoding throughput in tokens per second.
   */
  decodingSpeedTps?: number;

  /**
   * Maximum context length supported by the profile.
   */
  maxContextLength?: string;

  /**
   * Time to first token in milliseconds.
   */
  timeToFirstTokenMs?: number;
}

/**
 * Empty response returned after a successful delete operation.
 */
export interface ModelDeleteResponse {}

/**
 * Files and aggregate size information for one model revision.
 */
export interface ModelListFilesResponse {
  /**
   * Files in the selected model revision.
   */
  data: Array<ModelListFilesResponse.Data>;

  object: 'list';

  /**
   * Cursor for the next page. Null if there are no more results.
   */
  next_cursor?: string;

  /**
   * Time when the listed model revision was created.
   */
  revisionCreatedAt?: string;

  /**
   * ID of the model revision whose files are listed.
   */
  revisionId?: string;

  /**
   * Total size of all files in the revision, in bytes.
   */
  totalSizeBytes?: string;
}

export namespace ModelListFilesResponse {
  /**
   * Metadata for one file in a model revision.
   */
  export interface Data {
    /**
     * Content hash for integrity verification and upload deduplication.
     */
    hash?: string;

    /**
     * File path within the model revision.
     */
    path?: string;

    /**
     * File size in bytes.
     */
    sizeBytes?: string;
  }
}

/**
 * Immutable model revisions and pagination metadata.
 */
export interface ModelListRevisionsResponse {
  /**
   * Immutable revisions available for the model.
   */
  data?: Array<ModelListRevisionsResponse.Data>;

  /**
   * Cursor for the next page. Null if there are no more results.
   */
  next_cursor?: string;

  /**
   * Object type. Always `list`.
   */
  object?: 'list';
}

export namespace ModelListRevisionsResponse {
  /**
   * Revision metadata for a volume object.
   */
  export interface Data {
    /**
     * Timestamp when the revision was created.
     */
    createdAt: string;

    /**
     * Revision identifier.
     */
    revisionId: string;

    /**
     * Timestamp when validation most recently ran for the revision.
     */
    lastValidatedAt?: string;

    /**
     * Validation errors reported for the revision.
     */
    validationErrors?: Array<Data.ValidationError>;

    /**
     * Current validation status for the revision.
     */
    validationStatus?:
      | 'REVISION_VALIDATION_STATUS_PENDING'
      | 'REVISION_VALIDATION_STATUS_SUCCESS'
      | 'REVISION_VALIDATION_STATUS_FAILED'
      | 'REVISION_VALIDATION_STATUS_ERROR';
  }

  export namespace Data {
    /**
     * One validation error reported for a model revision.
     */
    export interface ValidationError {
      /**
       * Human-readable validation error message.
       */
      message?: string;

      /**
       * Validation rule that produced the error.
       */
      rule?: string;

      /**
       * Severity level reported by the validation rule.
       */
      severity?: string;
    }
  }
}

export interface ModelCreateParams {
  /**
   * Path param: Project identifier.
   */
  projectId?: string;

  /**
   * Body param: ID of the supported base model from which this model was derived.
   */
  baseModelId: string;

  /**
   * Body param: Name for the custom model. May be bare or qualified as
   * `<project_slug>/<model_name>`; a supplied project slug must match the project in
   * the request path.
   */
  name: string;

  /**
   * Body param: Volume type to create. Use `model` or `adapter`; plural `models` and
   * `adapters` are also accepted.
   */
  type: string;

  /**
   * Body param: Human-readable description of the model and its intended use.
   */
  description?: string;
}

export interface ModelRetrieveParams {
  /**
   * Project identifier.
   */
  projectId?: string;
}

export interface ModelUpdateParams {
  /**
   * Path param: Project identifier.
   */
  projectId?: string;

  /**
   * Query param: Fields to update. If omitted, all mutable fields are overwritten.
   */
  updateMask?: string;

  /**
   * Body param: Updated user-facing model description.
   */
  description?: string;

  /**
   * Body param: Updated inference-addressable model name.
   */
  name?: string;

  /**
   * Body param: Who can discover the model. `VISIBILITY_PRIVATE` restricts it to the
   * project; `VISIBILITY_INTERNAL` shares it with the organization.
   */
  visibility?: 'VISIBILITY_PRIVATE' | 'VISIBILITY_INTERNAL';
}

export interface ModelListParams extends CursorPaginationParams {
  /**
   * Path param: Project identifier.
   */
  projectId?: string;

  /**
   * Query param: Organization whose shared models should be included. Defaults to
   * the authenticated project's organization.
   */
  organizationId?: string;

  /**
   * Query param: Model visibility. Private means it is scoped to the project.
   * Internal means it is scoped to the organization.
   */
  visibility?: 'VISIBILITY_PRIVATE' | 'VISIBILITY_INTERNAL';
}

export interface ModelDeleteParams {
  /**
   * ID of the project that owns the model.
   */
  projectId?: string;
}

export interface ModelListFilesParams {
  /**
   * Path param: Project identifier.
   */
  projectId?: string;

  /**
   * Query param: Revision identifier to read from.
   */
  revisionId?: string;
}

export interface ModelListOrgScopedParams extends CursorPaginationParams {}

export interface ModelListRevisionsParams {
  /**
   * Project identifier.
   */
  projectId?: string;
}

export interface ModelListSupportedParams extends CursorPaginationParams {
  /**
   * Filter models by input modality.
   */
  modality?: 'MODALITY_TEXT' | 'MODALITY_IMAGE' | 'MODALITY_AUDIO' | 'MODALITY_VIDEO';

  /**
   * Filter models by product surface.
   */
  product?: 'PRODUCT_SERVERLESS' | 'PRODUCT_DEDICATED' | 'PRODUCT_FINE_TUNING';

  /**
   * Case-insensitive search across model IDs, names, and descriptions.
   */
  search?: string;
}

Models.RemoteUploads = RemoteUploads;
Models.Configs = Configs;

export declare namespace Models {
  export {
    type Model as Model,
    type SupportedModel as SupportedModel,
    type SupportedModelDeploymentProfile as SupportedModelDeploymentProfile,
    type SupportedModelPerformanceBenchmarks as SupportedModelPerformanceBenchmarks,
    type ModelDeleteResponse as ModelDeleteResponse,
    type ModelListFilesResponse as ModelListFilesResponse,
    type ModelListRevisionsResponse as ModelListRevisionsResponse,
    type ModelsCursorPagination as ModelsCursorPagination,
    type SupportedModelsCursorPagination as SupportedModelsCursorPagination,
    type ModelCreateParams as ModelCreateParams,
    type ModelRetrieveParams as ModelRetrieveParams,
    type ModelUpdateParams as ModelUpdateParams,
    type ModelListParams as ModelListParams,
    type ModelDeleteParams as ModelDeleteParams,
    type ModelListFilesParams as ModelListFilesParams,
    type ModelListOrgScopedParams as ModelListOrgScopedParams,
    type ModelListRevisionsParams as ModelListRevisionsParams,
    type ModelListSupportedParams as ModelListSupportedParams,
  };

  export {
    RemoteUploads as RemoteUploads,
    type RemoteUploadCreateResponse as RemoteUploadCreateResponse,
    type RemoteUploadRetrieveResponse as RemoteUploadRetrieveResponse,
    type RemoteUploadListResponse as RemoteUploadListResponse,
    type RemoteUploadEventsResponse as RemoteUploadEventsResponse,
    type RemoteUploadListResponsesCursorPagination as RemoteUploadListResponsesCursorPagination,
    type RemoteUploadCreateParams as RemoteUploadCreateParams,
    type RemoteUploadRetrieveParams as RemoteUploadRetrieveParams,
    type RemoteUploadListParams as RemoteUploadListParams,
    type RemoteUploadEventsParams as RemoteUploadEventsParams,
  };

  export {
    Configs as Configs,
    type Config as Config,
    type ConfigsCursorPagination as ConfigsCursorPagination,
    type ConfigRetrieveParams as ConfigRetrieveParams,
    type ConfigListParams as ConfigListParams,
  };
}
