// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Hardware extends APIResource {
  /**
   * Retrieves the GPU resources, pricing, regional availability, and best-effort
   * capacity headroom for one inference instance type.
   *
   * @example
   * ```ts
   * const inferenceInstanceType =
   *   await client.beta.endpoints.hardware.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<InferenceInstanceType> {
    return this._client.get(path`/public/inference-instance-types/${id}`, {
      defaultBaseURL: 'https://api.together.ai/v2',
      ...options,
    });
  }

  /**
   * Lists hardware instance types currently available to inference deployments,
   * including GPU resources, pricing, regions, and best-effort capacity headroom.
   *
   * @example
   * ```ts
   * const hardware =
   *   await client.beta.endpoints.hardware.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<HardwareListResponse> {
    return this._client.get('/public/inference-instance-types', {
      defaultBaseURL: 'https://api.together.ai/v2',
      ...options,
    });
  }
}

/**
 * GPU hardware configuration on which one inference replica can run.
 */
export interface InferenceInstanceType {
  /**
   * Stable hardware instance type identifier used by deployment configs.
   */
  id: string;

  /**
   * Human-readable summary of the hardware configuration.
   */
  description: string;

  /**
   * Number of GPUs in one replica of this instance type.
   */
  gpuCount: number;

  /**
   * Memory available on each GPU, in GiB.
   */
  gpuMemoryGib: number;

  /**
   * GPU accelerator model, such as `H100` or `B200`.
   */
  gpuType: string;

  /**
   * Human-readable instance type name.
   */
  name: string;

  /**
   * On-demand price for one running replica, in US cents per hour.
   */
  priceCentsPerHour: number;

  /**
   * Regions where this instance type is offered.
   */
  regions: Array<InferenceInstanceType.Region>;
}

export namespace InferenceInstanceType {
  /**
   * Region where an instance type is offered.
   */
  export interface Region {
    /**
     * Region name where an instance type is offered.
     */
    name: string;

    /**
     * Best-effort estimate of how many additional replicas currently fit in a region.
     */
    headroom?: Region.Headroom;
  }

  export namespace Region {
    /**
     * Best-effort estimate of how many additional replicas currently fit in a region.
     */
    export interface Headroom {
      /**
       * Whether the value is exact or a lower bound.
       */
      relation: 'RELATION_EQ' | 'RELATION_GTE';

      /**
       * Capped count of replicas that currently fit.
       */
      value?: number;
    }
  }
}

/**
 * Hardware instance types available for inference deployments.
 */
export interface HardwareListResponse {
  /**
   * Instance types available for inference.
   */
  data: Array<InferenceInstanceType>;

  /**
   * Object type. Always `list`.
   */
  object: 'list';

  /**
   * Cursor for the next page. Always null today because this catalog is returned in
   * full.
   */
  next_cursor?: string;
}

export declare namespace Hardware {
  export {
    type InferenceInstanceType as InferenceInstanceType,
    type HardwareListResponse as HardwareListResponse,
  };
}
