// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as FilesAPI from './files';
import { type Response } from '../_shims/index';

export class Files extends APIResource {
  /**
   * List the metadata for a single uploaded data file.
   *
   * @example
   * ```ts
   * const file = await client.files.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<FileRetrieveResponse> {
    return this._client.get(`/files/${id}`, options);
  }

  /**
   * List the metadata for all uploaded data files.
   *
   * @example
   * ```ts
   * const files = await client.files.list();
   * ```
   */
  list(options?: Core.RequestOptions): Core.APIPromise<FileListResponse> {
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
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<FileDeleteResponse> {
    return this._client.delete(`/files/${id}`, options);
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
  content(id: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get(`/files/${id}/content`, {
      ...options,
      headers: { Accept: 'application/binary', ...options?.headers },
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
  file: Core.Uploadable;

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
