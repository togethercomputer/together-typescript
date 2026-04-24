// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Uploads extends APIResource {
  /**
   * Get the status of a specific job
   *
   * @example
   * ```ts
   * const response = await client.models.uploads.status(
   *   'job-a15dad11-8d8e-4007-97c5-a211304de284',
   * );
   * ```
   */
  status(jobID: string, options?: RequestOptions): APIPromise<UploadStatusResponse> {
    return this._client.get(path`/jobs/${jobID}`, options);
  }
}

export interface UploadStatusResponse {
  args: UploadStatusResponse.Args;

  created_at: string;

  job_id: string;

  status: 'Queued' | 'Running' | 'Complete' | 'Failed';

  status_updates: Array<UploadStatusResponse.StatusUpdate>;

  type: string;

  updated_at: string;
}

export namespace UploadStatusResponse {
  export interface Args {
    description?: string;

    modelName?: string;

    modelSource?: string;
  }

  export interface StatusUpdate {
    message: string;

    status: string;

    timestamp: string;
  }
}

export declare namespace Uploads {
  export {
    type UploadStatusResponse as UploadStatusResponse
  };
}
