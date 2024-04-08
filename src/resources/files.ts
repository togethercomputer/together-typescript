// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'together-ai/core';
import { APIResource } from 'together-ai/resource';
import * as FilesAPI from 'together-ai/resources/files';

export class Files extends APIResource {
  /**
   * List all files
   */
  list(options?: Core.RequestOptions): Core.APIPromise<FileListResponse> {
    return this._client.get('/files', options);
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
  export import FileListResponse = FilesAPI.FileListResponse;
}
