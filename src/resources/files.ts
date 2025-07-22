// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as FilesAPI from './files';
import { APIPromise } from '../core/api-promise';
import { type Uploadable } from '../core/uploads';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Files extends APIResource {
  /**
   * List the metadata for a single uploaded data file.
   *
   * @example
   * ```ts
   * const file = await client.files.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<FileRetrieveResponse> {
    return this._client.get(path`/files/${id}`, options);
  }

  /**
   * List the metadata for all uploaded data files.
   *
   * @example
   * ```ts
   * const files = await client.files.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<FileListResponse> {
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
   */
  upload(_: string): Promise<void> {
    throw 'please use together-ai/lib/upload';
  }
}

export interface FileObject {
  id?: string;

  filename?: string;

  object?: string;

  size?: number;
}

/**
 * The purpose of the file
 */
export type FilePurpose =
  | 'fine-tune'
  | 'eval'
  | 'eval-sample'
  | 'eval-output'
  | 'eval-summary'
  | 'batch-generated'
  | 'batch-api';

/**
 * The type of the file
 */
export type FileType = 'csv' | 'jsonl' | 'parquet';

export interface FileRetrieveResponse {
  id: string;

  bytes: number;

  created_at: number;

  filename: string;

  /**
   * The type of the file
   */
  FileType: FileType;

  LineCount: number;

  object: string;

  Processed: boolean;

  /**
   * The purpose of the file
   */
  purpose: FilePurpose;
}

export interface FileListResponse {
  data: Array<FileListResponse.Data>;
}

export namespace FileListResponse {
  export interface Data {
    id: string;

    bytes: number;

    created_at: number;

    filename: string;

    /**
     * The type of the file
     */
    FileType: FilesAPI.FileType;

    LineCount: number;

    object: string;

    Processed: boolean;

    /**
     * The purpose of the file
     */
    purpose: FilesAPI.FilePurpose;
  }
}

export interface FileDeleteResponse {
  id?: string;

  deleted?: boolean;
}

export interface FileUploadResponse {
  id: string;

  bytes: number;

  created_at: number;

  filename: string;

  /**
   * The type of the file
   */
  FileType: FileType;

  LineCount: number;

  object: string;

  Processed: boolean;

  /**
   * The purpose of the file
   */
  purpose: FilePurpose;
}

export interface FileUploadParams {
  /**
   * The content of the file being uploaded
   */
  file: Uploadable;

  /**
   * The name of the file being uploaded
   */
  file_name: string;

  /**
   * The purpose of the file
   */
  purpose: FilePurpose;

  /**
   * The type of the file
   */
  file_type?: FileType;
}

export declare namespace Files {
  export {
    type FileObject as FileObject,
    type FilePurpose as FilePurpose,
    type FileType as FileType,
    type FileRetrieveResponse as FileRetrieveResponse,
    type FileListResponse as FileListResponse,
    type FileDeleteResponse as FileDeleteResponse,
    type FileUploadResponse as FileUploadResponse,
    type FileUploadParams as FileUploadParams,
  };
}
