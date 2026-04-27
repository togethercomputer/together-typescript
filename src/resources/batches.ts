// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Batches extends APIResource {
  /**
   * Create a new batch job with the given input file and endpoint
   *
   * @example
   * ```ts
   * const batch = await client.batches.create({
   *   endpoint: '/v1/chat/completions',
   *   input_file_id: 'file-abc123def456ghi789',
   * });
   * ```
   */
  create(body: BatchCreateParams, options?: RequestOptions): APIPromise<BatchCreateResponse> {
    return this._client.post('/batches', { body, ...options });
  }

  /**
   * Get details of a batch job by ID
   *
   * @example
   * ```ts
   * const batchJob = await client.batches.retrieve(
   *   'batch_job_abc123def456',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<BatchJob> {
    return this._client.get(path`/batches/${id}`, options);
  }

  /**
   * List all batch jobs for the authenticated user
   *
   * @example
   * ```ts
   * const batchJobs = await client.batches.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<BatchListResponse> {
    return this._client.get('/batches', options);
  }

  /**
   * Cancel a batch job by ID
   *
   * @example
   * ```ts
   * const batchJob = await client.batches.cancel(
   *   'batch_job_abc123def456',
   * );
   * ```
   */
  cancel(id: string, options?: RequestOptions): APIPromise<BatchJob> {
    return this._client.post(path`/batches/${id}/cancel`, options);
  }
}

export interface BatchJob {
  id?: string;

  completed_at?: string;

  created_at?: string;

  endpoint?: string;

  error?: string;

  error_file_id?: string;

  /**
   * Size of input file in bytes
   */
  file_size_bytes?: number;

  input_file_id?: string;

  job_deadline?: string;

  /**
   * Model used for processing requests
   */
  model_id?: string;

  output_file_id?: string;

  /**
   * Completion progress (0.0 to 100)
   */
  progress?: number;

  /**
   * Current status of the batch job
   */
  status?: 'VALIDATING' | 'IN_PROGRESS' | 'COMPLETED' | 'FAILED' | 'EXPIRED' | 'CANCELLED';

  user_id?: string;
}

export interface BatchCreateResponse {
  job?: BatchJob;

  warning?: string;
}

export type BatchListResponse = Array<BatchJob>;

export interface BatchCreateParams {
  /**
   * The endpoint to use for batch processing
   */
  endpoint: string;

  /**
   * ID of the uploaded input file containing batch requests
   */
  input_file_id: string;

  /**
   * Time window for batch completion (optional)
   */
  completion_window?: string;

  /**
   * Model to use for processing batch requests
   */
  model_id?: string;

  /**
   * Priority for batch processing (optional)
   */
  priority?: number;
}

export declare namespace Batches {
  export {
    type BatchJob as BatchJob,
    type BatchCreateResponse as BatchCreateResponse,
    type BatchListResponse as BatchListResponse,
    type BatchCreateParams as BatchCreateParams,
  };
}
