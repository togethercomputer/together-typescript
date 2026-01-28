// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Queue extends APIResource {
  /**
   * Cancel a pending or running job. Returns the job status after the cancellation
   * attempt.
   */
  cancel(body: QueueCancelParams, options?: RequestOptions): APIPromise<QueueCancelResponse> {
    return this._client.post('/queue/cancel', { body, ...options });
  }

  /**
   * Get the current queue statistics including pending and running job counts.
   */
  getMetrics(query: QueueGetMetricsParams, options?: RequestOptions): APIPromise<QueueGetMetricsResponse> {
    return this._client.get('/queue/metrics', { query, ...options });
  }

  /**
   * Check the status of a job using request_id and model query parameters.
   */
  getStatus(query: QueueGetStatusParams, options?: RequestOptions): APIPromise<QueueGetStatusResponse> {
    return this._client.get('/queue/status', { query, ...options });
  }

  /**
   * Submit a new job to the queue. Returns a request ID that can be used to check
   * status.
   */
  submit(body: QueueSubmitParams, options?: RequestOptions): APIPromise<QueueSubmitResponse> {
    return this._client.post('/queue/submit', { body, ...options });
  }
}

export interface QueueCancelResponse {
  status?: string;
}

export type QueueGetMetricsResponse = { [key: string]: unknown };

export interface QueueGetStatusResponse {
  claimed_at?: string;

  created_at?: string;

  done_at?: string;

  info?: { [key: string]: unknown };

  inputs?: { [key: string]: unknown };

  model?: string;

  outputs?: { [key: string]: unknown };

  /**
   * Additional fields for test compatibility
   */
  priority?: number;

  request_id?: string;

  retries?: number;

  /**
   * this should be the enum, but isn't for backwards compatability
   */
  status?: string;

  warnings?: Array<string>;
}

export interface QueueSubmitResponse {
  error?: QueueSubmitResponse.Error;

  requestId?: string;
}

export namespace QueueSubmitResponse {
  export interface Error {
    code?: string;

    message?: string;

    param?: string;

    type?: string;
  }
}

export interface QueueCancelParams {
  model: string;

  request_id: string;
}

export interface QueueGetMetricsParams {
  /**
   * Model name to get metrics for
   */
  model: string;
}

export interface QueueGetStatusParams {
  /**
   * Model name
   */
  model: string;

  /**
   * Request ID
   */
  request_id: string;
}

export interface QueueSubmitParams {
  /**
   * Required model identifier
   */
  model: string;

  payload: { [key: string]: unknown };

  info?: { [key: string]: unknown };

  priority?: number;
}

export declare namespace Queue {
  export {
    type QueueCancelResponse as QueueCancelResponse,
    type QueueGetMetricsResponse as QueueGetMetricsResponse,
    type QueueGetStatusResponse as QueueGetStatusResponse,
    type QueueSubmitResponse as QueueSubmitResponse,
    type QueueCancelParams as QueueCancelParams,
    type QueueGetMetricsParams as QueueGetMetricsParams,
    type QueueGetStatusParams as QueueGetStatusParams,
    type QueueSubmitParams as QueueSubmitParams,
  };
}
