// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Queue extends APIResource {
  /**
   * Poll the current status of a previously submitted job. Provide the request_id
   * and model as query parameters.
   *
   * @example
   * ```ts
   * const queue = await client.beta.jig.queue.retrieve({
   *   model: 'model',
   *   request_id: 'request_id',
   * });
   * ```
   */
  retrieve(query: QueueRetrieveParams, options?: RequestOptions): APIPromise<QueueRetrieveResponse> {
    return this._client.get('/queue/status', { query, ...options });
  }

  /**
   * Cancel a pending job. Only jobs in pending status can be canceled. Running jobs
   * cannot be stopped. Returns the job status after the attempt. If the job is not
   * pending, returns 409 with the current status unchanged.
   *
   * @example
   * ```ts
   * const response = await client.beta.jig.queue.cancel({
   *   model: 'model',
   *   request_id: 'request_id',
   * });
   * ```
   */
  cancel(body: QueueCancelParams, options?: RequestOptions): APIPromise<QueueCancelResponse> {
    return this._client.post('/queue/cancel', { body, ...options });
  }

  /**
   * Get the current queue statistics for a model, including pending and running job
   * counts.
   *
   * @example
   * ```ts
   * const response = await client.beta.jig.queue.metrics({
   *   model: 'model',
   * });
   * ```
   */
  metrics(query: QueueMetricsParams, options?: RequestOptions): APIPromise<QueueMetricsResponse> {
    return this._client.get('/queue/metrics', { query, ...options });
  }

  /**
   * Submit a new job to the queue for asynchronous processing. Jobs are processed in
   * strict priority order (higher priority first, FIFO within the same priority).
   * Returns a request ID that can be used to poll status or cancel the job.
   *
   * @example
   * ```ts
   * const response = await client.beta.jig.queue.submit({
   *   model: 'my-queue-model',
   *   payload: { foo: 'bar' },
   * });
   * ```
   */
  submit(body: QueueSubmitParams, options?: RequestOptions): APIPromise<QueueSubmitResponse> {
    return this._client.post('/queue/submit', { body, ...options });
  }
}

/**
 * Current status and metadata for a queued job.
 */
export interface QueueRetrieveResponse {
  /**
   * Model identifier the job was submitted to
   */
  model: string;

  /**
   * The request ID that was returned from the submit endpoint
   */
  request_id: string;

  /**
   * Current job status. Transitions: pending → running → done/failed. A pending job
   * may also be canceled.
   */
  status: 'pending' | 'running' | 'done' | 'failed' | 'canceled';

  /**
   * Timestamp when a worker claimed the job
   */
  claimed_at?: string;

  /**
   * Timestamp when the job was created
   */
  created_at?: string;

  /**
   * Timestamp when the job completed (done or failed)
   */
  done_at?: string;

  /**
   * Job metadata. Contains keys from the submit request, plus any modifications from
   * the model or system (e.g. progress, retry history).
   */
  info?: { [key: string]: unknown };

  /**
   * Freeform model input, as submitted
   */
  inputs?: { [key: string]: unknown };

  /**
   * Freeform model output, populated when the job reaches done status. Contents are
   * model-specific.
   */
  outputs?: { [key: string]: unknown };

  /**
   * Job priority. Higher values are processed first.
   */
  priority?: number;

  /**
   * Number of times this job has been retried. Workers set a claim timeout and must
   * send periodic status updates to keep the job alive. If no update is received
   * within the timeout, the job is returned to the queue and retried. After 3
   * retries the job is permanently failed. Jobs explicitly failed by the model are
   * not retried.
   */
  retries?: number;

  /**
   * Non-fatal messages about the request (e.g. deprecation notices)
   */
  warnings?: Array<string>;
}

/**
 * Status returned after a cancel attempt.
 */
export interface QueueCancelResponse {
  /**
   * Job status after the cancel attempt. Only pending jobs can be canceled. If the
   * job is already running, done, or failed, the status is returned unchanged.
   */
  status: 'canceled' | 'running' | 'done' | 'failed';
}

/**
 * Queue job counts for a model.
 */
export interface QueueMetricsResponse {
  /**
   * Number of jobs currently being processed
   */
  messages_running: number;

  /**
   * Number of jobs waiting to be claimed by a worker
   */
  messages_waiting: number;

  /**
   * Total number of active jobs (waiting + running)
   */
  total_jobs: number;
}

/**
 * Response returned after queueing a job.
 */
export interface QueueSubmitResponse {
  /**
   * Unique identifier for the submitted job. Use this to poll status or cancel.
   */
  requestId: string;
}

export interface QueueRetrieveParams {
  /**
   * Model name the job was submitted to
   */
  model: string;

  /**
   * Request ID returned from the submit endpoint
   */
  request_id: string;
}

export interface QueueCancelParams {
  /**
   * Model identifier the job was submitted to
   */
  model: string;

  /**
   * The request ID returned from the submit endpoint
   */
  request_id: string;
}

export interface QueueMetricsParams {
  /**
   * Model name to get metrics for
   */
  model: string;
}

export interface QueueSubmitParams {
  /**
   * Required model identifier
   */
  model: string;

  /**
   * Freeform model input. Passed unchanged to the model. Contents are
   * model-specific.
   */
  payload: { [key: string]: unknown };

  /**
   * Arbitrary JSON metadata stored with the job. Returned in status responses, where
   * the model and system may have added or modified keys (e.g. progress).
   */
  info?: { [key: string]: unknown };

  /**
   * Job priority. Higher values are processed first (strict priority ordering). Jobs
   * with equal priority are processed in submission order (FIFO).
   */
  priority?: number;
}

export declare namespace Queue {
  export {
    type QueueRetrieveResponse as QueueRetrieveResponse,
    type QueueCancelResponse as QueueCancelResponse,
    type QueueMetricsResponse as QueueMetricsResponse,
    type QueueSubmitResponse as QueueSubmitResponse,
    type QueueRetrieveParams as QueueRetrieveParams,
    type QueueCancelParams as QueueCancelParams,
    type QueueMetricsParams as QueueMetricsParams,
    type QueueSubmitParams as QueueSubmitParams,
  };
}
