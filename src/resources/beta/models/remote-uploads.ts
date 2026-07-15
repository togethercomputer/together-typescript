// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { CursorPagination, type CursorPaginationParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class RemoteUploads extends APIResource {
  /**
   * Starts an asynchronous job that imports model files from Hugging Face or a
   * presigned URL into a registered model and creates a model revision when the
   * import completes.
   *
   * @example
   * ```ts
   * const remoteUpload =
   *   await client.beta.models.remoteUploads.create({
   *     projectId: 'projectId',
   *     modelId: 'modelId',
   *     remoteUrl: 'remoteUrl',
   *   });
   * ```
   */
  create(params: RemoteUploadCreateParams, options?: RequestOptions): APIPromise<RemoteUploadCreateResponse> {
    const { projectId = this._client.projectID, ...body } = params;
    return this._client.post(path`/projects/${projectId}/models/uploads`, {
      body,
      defaultBaseURL: 'https://api.together.ai/v2',
      ...options,
    });
  }

  /**
   * Retrieves the status, progress details, retry counts, and timestamps for a
   * remote model import job.
   *
   * @example
   * ```ts
   * const remoteUpload =
   *   await client.beta.models.remoteUploads.retrieve('id', {
   *     projectId: 'projectId',
   *   });
   * ```
   */
  retrieve(
    id: string,
    params: RemoteUploadRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RemoteUploadRetrieveResponse> {
    const { projectId = this._client.projectID } = params ?? {};
    return this._client.get(path`/projects/${projectId}/models/uploads/${id}`, {
      defaultBaseURL: 'https://api.together.ai/v2',
      ...options,
    });
  }

  /**
   * Lists asynchronous jobs that import model files from Hugging Face or a presigned
   * remote URL.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const remoteUploadListResponse of client.beta.models.remoteUploads.list(
   *   { projectId: 'projectId' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: RemoteUploadListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<RemoteUploadListResponsesCursorPagination, RemoteUploadListResponse> {
    const { projectId = this._client.projectID, ...query } = params ?? {};
    return this._client.getAPIList(
      path`/projects/${projectId}/models/uploads`,
      CursorPagination<RemoteUploadListResponse>,
      { query, defaultBaseURL: 'https://api.together.ai/v2', ...options },
    );
  }

  /**
   * Lists progress and diagnostic events for a remote model import job.
   *
   * @example
   * ```ts
   * const response =
   *   await client.beta.models.remoteUploads.events('id', {
   *     projectId: 'projectId',
   *   });
   * ```
   */
  events(
    id: string,
    params: RemoteUploadEventsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RemoteUploadEventsResponse> {
    const { projectId = this._client.projectID, ...query } = params ?? {};
    return this._client.get(path`/projects/${projectId}/models/uploads/${id}/events`, {
      query,
      defaultBaseURL: 'https://api.together.ai/v2',
      ...options,
    });
  }
}

export type RemoteUploadListResponsesCursorPagination = CursorPagination<RemoteUploadListResponse>;

/**
 * Asynchronous job that imports remote files into a registered model and creates a
 * model revision.
 */
export interface RemoteUploadCreateResponse {
  /**
   * Unique ID of the remote model import job.
   */
  id: string;

  /**
   * Time when the import job was created.
   */
  createdAt: string;

  /**
   * ID of the registered model receiving the imported files.
   */
  modelId: string;

  /**
   * ID of the project that owns the import job.
   */
  projectId: string;

  /**
   * Hugging Face repository or presigned URL being imported.
   */
  remoteUrl: string;

  /**
   * Current lifecycle state of the asynchronous import job.
   */
  status:
    | 'REMOTE_UPLOAD_STATUS_PENDING'
    | 'REMOTE_UPLOAD_STATUS_RUNNING'
    | 'REMOTE_UPLOAD_STATUS_ERROR'
    | 'REMOTE_UPLOAD_STATUS_SUCCEEDED'
    | 'REMOTE_UPLOAD_STATUS_FAILED';

  /**
   * Maximum worker restarts allowed before the job fails permanently.
   */
  maxRestarts?: number;

  /**
   * Number of times the import worker has restarted this job.
   */
  restartCount?: number;

  /**
   * Human-readable progress or failure detail for the current status.
   */
  statusMessage?: string;

  /**
   * Time when the import job was last updated.
   */
  updatedAt?: string;
}

/**
 * Asynchronous job that imports remote files into a registered model and creates a
 * model revision.
 */
export interface RemoteUploadRetrieveResponse {
  /**
   * Unique ID of the remote model import job.
   */
  id: string;

  /**
   * Time when the import job was created.
   */
  createdAt: string;

  /**
   * ID of the registered model receiving the imported files.
   */
  modelId: string;

  /**
   * ID of the project that owns the import job.
   */
  projectId: string;

  /**
   * Hugging Face repository or presigned URL being imported.
   */
  remoteUrl: string;

  /**
   * Current lifecycle state of the asynchronous import job.
   */
  status:
    | 'REMOTE_UPLOAD_STATUS_PENDING'
    | 'REMOTE_UPLOAD_STATUS_RUNNING'
    | 'REMOTE_UPLOAD_STATUS_ERROR'
    | 'REMOTE_UPLOAD_STATUS_SUCCEEDED'
    | 'REMOTE_UPLOAD_STATUS_FAILED';

  /**
   * Maximum worker restarts allowed before the job fails permanently.
   */
  maxRestarts?: number;

  /**
   * Number of times the import worker has restarted this job.
   */
  restartCount?: number;

  /**
   * Human-readable progress or failure detail for the current status.
   */
  statusMessage?: string;

  /**
   * Time when the import job was last updated.
   */
  updatedAt?: string;
}

/**
 * Asynchronous job that imports remote files into a registered model and creates a
 * model revision.
 */
export interface RemoteUploadListResponse {
  /**
   * Unique ID of the remote model import job.
   */
  id: string;

  /**
   * Time when the import job was created.
   */
  createdAt: string;

  /**
   * ID of the registered model receiving the imported files.
   */
  modelId: string;

  /**
   * ID of the project that owns the import job.
   */
  projectId: string;

  /**
   * Hugging Face repository or presigned URL being imported.
   */
  remoteUrl: string;

  /**
   * Current lifecycle state of the asynchronous import job.
   */
  status:
    | 'REMOTE_UPLOAD_STATUS_PENDING'
    | 'REMOTE_UPLOAD_STATUS_RUNNING'
    | 'REMOTE_UPLOAD_STATUS_ERROR'
    | 'REMOTE_UPLOAD_STATUS_SUCCEEDED'
    | 'REMOTE_UPLOAD_STATUS_FAILED';

  /**
   * Maximum worker restarts allowed before the job fails permanently.
   */
  maxRestarts?: number;

  /**
   * Number of times the import worker has restarted this job.
   */
  restartCount?: number;

  /**
   * Human-readable progress or failure detail for the current status.
   */
  statusMessage?: string;

  /**
   * Time when the import job was last updated.
   */
  updatedAt?: string;
}

/**
 * Status and diagnostic events for a remote model import job.
 */
export interface RemoteUploadEventsResponse {
  /**
   * Events for the remote upload.
   */
  data: Array<RemoteUploadEventsResponse.Data>;

  /**
   * Object type. Always `list`.
   */
  object: 'list';

  /**
   * Cursor for the next page. Null if there are no more results.
   */
  next_cursor?: string;
}

export namespace RemoteUploadEventsResponse {
  /**
   * Progress or diagnostic event emitted while importing remote model files.
   */
  export interface Data {
    /**
     * Unique event identifier.
     */
    id: string;

    /**
     * Time when the event was recorded.
     */
    createdAt: string;

    /**
     * Severity of the event.
     */
    level: 'LEVEL_DEBUG' | 'LEVEL_INFO' | 'LEVEL_WARN' | 'LEVEL_ERROR';

    /**
     * Human-readable progress or diagnostic message.
     */
    message: string;

    /**
     * Stable event type emitted by the importer, such as `download.started`.
     */
    type: string;
  }
}

export interface RemoteUploadCreateParams {
  /**
   * Path param: Project identifier.
   */
  projectId?: string;

  /**
   * Body param: ID of the registered model that will receive the imported files.
   */
  modelId: string;

  /**
   * Body param: Hugging Face repository URL or presigned archive URL to import.
   */
  remoteUrl: string;

  /**
   * Body param: Optional source credential used to access a private remote location.
   * The value is write-only and is not returned.
   */
  token?: string;
}

export interface RemoteUploadRetrieveParams {
  /**
   * Project identifier.
   */
  projectId?: string;
}

export interface RemoteUploadListParams extends CursorPaginationParams {
  /**
   * Path param: Project identifier.
   */
  projectId?: string;
}

export interface RemoteUploadEventsParams {
  /**
   * Path param: Project identifier.
   */
  projectId?: string;

  /**
   * Query param: Cursor from a previous remote upload event list response.
   */
  after?: string;

  /**
   * Query param: Maximum number of events to return.
   */
  limit?: number;
}

export declare namespace RemoteUploads {
  export {
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
}
