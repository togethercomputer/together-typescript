// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Hardware extends APIResource {
  /**
   * Returns a list of available hardware configurations for deploying models. When a
   * model parameter is provided, it returns only hardware configurations compatible
   * with that model, including their current availability status.
   */
  list(query?: HardwareListParams, options?: Core.RequestOptions): Core.APIPromise<HardwareListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<HardwareListResponse>;
  list(
    query: HardwareListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<HardwareListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/hardware', { query, ...options });
  }
}

export interface HardwareListResponse {
  data: Array<HardwareListResponse.Data>;

  object: 'list';
}

export namespace HardwareListResponse {
  /**
   * Hardware configuration details with optional availability status
   */
  export interface Data {
    /**
     * Unique identifier for the hardware configuration
     */
    id: string;

    object: 'hardware';

    /**
     * Pricing details for using an endpoint
     */
    pricing: Data.Pricing;

    /**
     * Detailed specifications of a hardware configuration
     */
    specs: Data.Specs;

    /**
     * Timestamp of when the hardware status was last updated
     */
    updated_at: string;

    /**
     * Indicates the current availability status of a hardware configuration
     */
    availability?: Data.Availability;
  }

  export namespace Data {
    /**
     * Pricing details for using an endpoint
     */
    export interface Pricing {
      /**
       * Cost per minute of endpoint uptime in cents
       */
      cents_per_minute: number;
    }

    /**
     * Detailed specifications of a hardware configuration
     */
    export interface Specs {
      /**
       * Number of GPUs in this configuration
       */
      gpu_count: number;

      /**
       * The GPU interconnect technology
       */
      gpu_link: string;

      /**
       * Amount of GPU memory in GB
       */
      gpu_memory: number;

      /**
       * The type/model of GPU
       */
      gpu_type: string;
    }

    /**
     * Indicates the current availability status of a hardware configuration
     */
    export interface Availability {
      /**
       * The availability status of the hardware configuration
       */
      status: 'available' | 'unavailable' | 'insufficient';
    }
  }
}

export interface HardwareListParams {
  /**
   * Filter hardware configurations by model compatibility. When provided, the
   * response includes availability status for each compatible configuration.
   */
  model?: string;
}

export declare namespace Hardware {
  export { type HardwareListResponse as HardwareListResponse, type HardwareListParams as HardwareListParams };
}
