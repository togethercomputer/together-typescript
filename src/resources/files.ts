// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as FilesAPI from './files';
import { type Response } from '../_shims/index';

export class Files extends APIResource {
  /**
   * List the metadata for a single uploaded data file.
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<FileRetrieveResponse> {
    return this._client.get(`/files/${id}`, options);
  }

  /**
   * List the metadata for all uploaded data files.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<FileListResponse> {
    return this._client.get('/files', options);
  }

  /**
   * Delete a previously uploaded data file.
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<FileDeleteResponse> {
    return this._client.delete(`/files/${id}`, options);
  }

  /**
   * Get the contents of a single uploaded data file.
   */
  content(id: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get(`/files/${id}/content`, {
      ...options,
      headers: { Accept: 'application/binary', ...options?.headers },
      __binaryResponse: true,
    });
  }
}

export interface FileObject {
  id?: string;

  filename?: string;

  object?: string;

  size?: number;
}

export type FilePurpose = 'fine-tune';

export type FileType = 'jsonl' | 'parquet';

export interface FileRetrieveResponse {
  id: string;

  bytes: number;

  created_at: number;

  filename: string;

  FileType: FileType;

  LineCount: number;

  object: string;

  Processed: boolean;

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

    FileType: FilesAPI.FileType;

    LineCount: number;

    object: string;

    Processed: boolean;

    purpose: FilesAPI.FilePurpose;
  }
}

export interface FileDeleteResponse {
  id?: string;

  deleted?: boolean;
}

export declare namespace Files {
  export {
    type FileObject as FileObject,
    type FilePurpose as FilePurpose,
    type FileType as FileType,
    type FileRetrieveResponse as FileRetrieveResponse,
    type FileListResponse as FileListResponse,
    type FileDeleteResponse as FileDeleteResponse,
  };
}
