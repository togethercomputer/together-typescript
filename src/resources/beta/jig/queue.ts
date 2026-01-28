// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Queue extends APIResource {
  /**
   * Check the status of a job using request_id and model query parameters.
   */
  retrieve(query: QueueRetrieveParams, options?: RequestOptions): APIPromise<QueueRetrieveResponse> {
    return this._client.get('/queue/status', { query, ...options });
  }

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
  metrics(query: QueueMetricsParams, options?: RequestOptions): APIPromise<QueueMetricsResponse> {
    return this._client.get('/queue/metrics', { query, ...options });
  }

  /**
   * Submit a new job to the queue. Returns a request ID that can be used to check
   * status.
   */
  submit(body: QueueSubmitParams, options?: RequestOptions): APIPromise<QueueSubmitResponse> {
    return this._client.post('/queue/submit', { body, ...options });
  }
}

export interface QueueRetrieveResponse {
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

export interface QueueCancelResponse {
  status?: string;
}

export type QueueMetricsResponse = { [key: string]: unknown };

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

export interface QueueRetrieveParams {
  /**
   * Model name
   */
  model: string;

  /**
   * Request ID
   */
  request_id: string;
}

export interface QueueCancelParams {
  model: string;

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

  payload: { [key: string]: unknown };

  info?: { [key: string]: unknown };

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
