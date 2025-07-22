// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Jobs extends APIResource {
  /**
   * Get the status of a specific job
   *
   * @example
   * ```ts
   * const job = await client.jobs.retrieve(
   *   'job-a15dad11-8d8e-4007-97c5-a211304de284',
   * );
   * ```
   */
  retrieve(jobID: string, options?: RequestOptions): APIPromise<JobRetrieveResponse> {
    return this._client.get(path`/jobs/${jobID}`, options);
  }

  /**
   * List all jobs and their statuses
   *
   * @example
   * ```ts
   * const jobs = await client.jobs.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<JobListResponse> {
    return this._client.get('/jobs', options);
  }
}

export interface JobRetrieveResponse {
  args: JobRetrieveResponse.Args;

  created_at: string;

  job_id: string;

  status: 'Queued' | 'Running' | 'Complete' | 'Failed';

  status_updates: Array<JobRetrieveResponse.StatusUpdate>;

  type: string;

  updated_at: string;
}

export namespace JobRetrieveResponse {
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

export interface JobListResponse {
  data: Array<JobListResponse.Data>;
}

export namespace JobListResponse {
  export interface Data {
    args: Data.Args;

    created_at: string;

    job_id: string;

    status: 'Queued' | 'Running' | 'Complete' | 'Failed';

    status_updates: Array<Data.StatusUpdate>;

    type: string;

    updated_at: string;
  }

  export namespace Data {
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
}

export declare namespace Jobs {
  export { type JobRetrieveResponse as JobRetrieveResponse, type JobListResponse as JobListResponse };
}
