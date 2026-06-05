// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';
import { upload } from '../lib/upload';

export class Files extends APIResource {
  /**
   * Retrieve the metadata for a single uploaded data file.
   *
   * @example
   * ```ts
   * const fileResponse = await client.files.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<FileResponse> {
    return this._client.get(path`/files/${id}`, options);
  }

  /**
   * List the metadata for all uploaded data files.
   *
   * @example
   * ```ts
   * const fileList = await client.files.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<FileList> {
    return this._client.get('/files', options);
  }

  /**
   * Delete a previously uploaded data file.
   *
   * @example
   * ```ts
   * const file = await client.files.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<FileDeleteResponse> {
    return this._client.delete(path`/files/${id}`, options);
  }

  /**
   * Get the contents of a single uploaded data file.
   *
   * @example
   * ```ts
   * const response = await client.files.content('id');
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  content(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/files/${id}/content`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/binary' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Upload a file.
   * CUSTOM CODE. DO NOT LET STAINLESS REMOVE.
   */
  upload(file: string, purpose: FilePurpose, check: boolean = true): APIPromise<FileResponse> {
    return upload(this._client, file, purpose, check);
  }
}

export interface FileList {
  data: Array<FileResponse>;
}

/**
 * The purpose of the file
 */
export type FilePurpose = 'fine-tune' | 'eval' | 'batch-api';

/**
 * Structured information describing a file uploaded to Together.
 */
export interface FileResponse {
  /**
   * ID of the file.
   */
  id: string;

  /**
   * The number of bytes in the file.
   */
  bytes: number;

  /**
   * The timestamp when the file was created.
   */
  created_at: number;

  /**
   * The name of the file as it was uploaded.
   */
  filename: string;

  /**
   * The type of the file such as `jsonl`, `csv`, or `parquet`.
   */
  FileType: FileType;

  /**
   * The object type, which is always `file`.
   */
  object: 'file';

  /**
   * @deprecated Deprecated. Whether file has been fully uploaded.
   */
  Processed: boolean;

  /**
   * The purpose of the file as it was uploaded.
   */
  purpose: FilePurpose;

  /**
   * Lifecycle state of the file validation pipeline. Files for non-`fine-tune`
   * purposes skip validation.
   */
  processing_status?: 'PENDING' | 'QUEUED' | 'RUNNING' | 'COMPLETED' | 'FAILED' | 'INVALID_FORMAT';

  /**
   * Report produced by the file validation pipeline. Present once validation has
   * run; absent on files that bypassed validation (non-`fine-tune` purposes) or have
   * not yet been validated.
   */
  validation_report?: FileResponse.ValidationReport;
}

export namespace FileResponse {
  /**
   * Report produced by the file validation pipeline. Present once validation has
   * run; absent on files that bypassed validation (non-`fine-tune` purposes) or have
   * not yet been validated.
   */
  export interface ValidationReport {
    /**
     * Whether the file passed validation.
     */
    valid: boolean;

    /**
     * Detected dataset format (e.g. `CONVERSATION`, `INSTRUCTION`).
     */
    dataset_format?: string;

    /**
     * Whether the dataset carries per-message weights (only possible for
     * `CONVERSATION` format).
     */
    dataset_has_message_weights?: boolean;

    /**
     * Whether the dataset contains parallel tool-use messages.
     */
    dataset_has_parallel_tool_calls?: boolean;

    /**
     * Whether the dataset contains reasoning content.
     */
    dataset_has_reasoning?: boolean;

    /**
     * Whether the dataset carries per-sample weights.
     */
    dataset_has_sample_weights?: boolean;

    /**
     * Whether the dataset contains tool-use messages.
     */
    dataset_has_tools?: boolean;

    /**
     * Whether the dataset contains multimodal content.
     */
    dataset_is_multimodal?: boolean;

    /**
     * Human-readable validation error message. Only present when `error_type` is set
     * (i.e. user-correctable failures).
     */
    error?: string;

    /**
     * Category of validation failure.
     */
    error_type?: 'INVALID_FORMAT';

    /**
     * ID of the file this report describes.
     */
    file_id?: string;

    /**
     * Number of lines (records) in the dataset.
     */
    nlines?: number;
  }
}

/**
 * The type of the file
 */
export type FileType = 'csv' | 'jsonl' | 'parquet';

export interface FileDeleteResponse {
  id?: string;

  deleted?: boolean;
}

export declare namespace Files {
  export {
    type FileList as FileList,
    type FilePurpose as FilePurpose,
    type FileResponse as FileResponse,
    type FileType as FileType,
    type FileDeleteResponse as FileDeleteResponse,
  };
}
