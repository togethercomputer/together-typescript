// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Operations extends APIResource {
  /**
   * Retrieves the current status and result of a forward-backward operation.
   */
  retrieveForwardBackward(
    operationID: string,
    params: OperationRetrieveForwardBackwardParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { session_id } = params;
    return this._client.get(
      path`/rl/training-sessions/${session_id}/operations/forward-backward/${operationID}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * Retrieves the current status and result of an optim-step operation.
   */
  retrieveOptimStep(
    operationID: string,
    params: OperationRetrieveOptimStepParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { session_id } = params;
    return this._client.get(path`/rl/training-sessions/${session_id}/operations/optim-step/${operationID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface OperationRetrieveForwardBackwardParams {
  /**
   * Training session ID
   */
  session_id: string;
}

export interface OperationRetrieveOptimStepParams {
  /**
   * Training session ID
   */
  session_id: string;
}

export declare namespace Operations {
  export {
    type OperationRetrieveForwardBackwardParams as OperationRetrieveForwardBackwardParams,
    type OperationRetrieveOptimStepParams as OperationRetrieveOptimStepParams,
  };
}
