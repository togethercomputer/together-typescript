// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'together-ai/core';
import { APIResource } from 'together-ai/resource';
import * as ModelsAPI from 'together-ai/resources/models';

export class Models extends APIResource {
  /**
   * Lists all the available models
   */
  list(options?: Core.RequestOptions): Core.APIPromise<ModelListResponse> {
    return this._client.get('/models', options);
  }
}

export type ModelListResponse = Array<ModelListResponse.ModelListResponseItem>;

export namespace ModelListResponse {
  export interface ModelListResponseItem {
    id: string;

    created: number;

    object: string;

    type: string;

    context_length?: number;

    display_name?: string;

    license?: string;

    link?: string;

    organization?: string;

    pricing?: ModelListResponseItem.Pricing;
  }

  export namespace ModelListResponseItem {
    export interface Pricing {
      base: number;

      finetune: number;

      hourly: number;

      input: number;

      output: number;
    }
  }
}

export namespace Models {
  export import ModelListResponse = ModelsAPI.ModelListResponse;
}
