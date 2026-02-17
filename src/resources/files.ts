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
export type FilePurpose =
  | 'fine-tune'
  | 'eval'
  | 'eval-sample'
  | 'eval-output'
  | 'eval-summary'
  | 'batch-generated'
  | 'batch-api';

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
   * The number of lines in the file.
   */
  LineCount: number;

  /**
   * The object type, which is always `file`.
   */
  object: 'file';

  /**
   * Whether the file has been parsed and analyzed for correctness for fine-tuning.
   */
  Processed: boolean;

  /**
   * The purpose of the file as it was uploaded.
   */
  purpose: FilePurpose;
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
