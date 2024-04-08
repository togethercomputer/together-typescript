// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'together-ai/core';
import { APIResource } from 'together-ai/resource';
import * as FilesAPI from 'together-ai/resources/files';

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
}

export interface FileRetrieveResponse {
  id?: string;

  context_length?: number;

  created?: number;

  display_name?: string;

  license?: string;

  link?: string;

  object?: string;

  organization?: string;

  pricing?: FileRetrieveResponse.Pricing;

  type?: string;
}

export namespace FileRetrieveResponse {
  export interface Pricing {
    base?: number;

    finetune?: number;

    hourly?: number;

    input?: number;

    output?: number;
  }
}

export type FileListResponse = Array<FileListResponse.FileListResponseItem>;

export namespace FileListResponse {
  export interface FileListResponseItem {
    id?: string;

    context_length?: number;

    created?: number;

    display_name?: string;

    license?: string;

    link?: string;

    object?: string;

    organization?: string;

    pricing?: FileListResponseItem.Pricing;

    type?: string;
  }

  export namespace FileListResponseItem {
    export interface Pricing {
      base?: number;

      finetune?: number;

      hourly?: number;

      input?: number;

      output?: number;
    }
  }
}

export namespace Files {
  export import FileRetrieveResponse = FilesAPI.FileRetrieveResponse;
  export import FileListResponse = FilesAPI.FileListResponse;
}
