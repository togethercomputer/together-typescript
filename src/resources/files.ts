// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import { type Response } from '../_shims/index';
import * as FilesAPI from './files';

export class Files extends APIResource {
  /**
   * Retrieve a file
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<FileRetrieveResponse> {
    return this._client.get(`/files/${id}`, options);
  }

  /**
   * List all files
   */
  list(options?: Core.RequestOptions): Core.APIPromise<FileListResponse> {
    return this._client.get('/files', options);
  }

  /**
   * Delete a file
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<FileDeleteResponse> {
    return this._client.delete(`/files/${id}`, options);
  }

  /**
   * Retrieve file content
   */
  content(id: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get(`/files/${id}/content`, { ...options, __binaryResponse: true });
  }
}

export interface FileObject {
  id?: string;

  filename?: string;

  object?: string;

  size?: number;
}

export interface FileRetrieveResponse {
  id: string;

  bytes: number;

  created_at: number;

  filename: string;

  FileType: 'jsonl' | 'parquet';

  LineCount: number;

  object: string;

  Processed: boolean;

  purpose: 'fine-tune';
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

    FileType: 'jsonl' | 'parquet';

    LineCount: number;

    object: string;

    Processed: boolean;

    purpose: 'fine-tune';
  }
}

export interface FileDeleteResponse {
  id?: string;

  deleted?: boolean;
}

export namespace Files {
  export import FileObject = FilesAPI.FileObject;
  export import FileRetrieveResponse = FilesAPI.FileRetrieveResponse;
  export import FileListResponse = FilesAPI.FileListResponse;
  export import FileDeleteResponse = FilesAPI.FileDeleteResponse;
}
