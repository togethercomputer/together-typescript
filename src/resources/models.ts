// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as ModelsAPI from './models';

export class Models extends APIResource {
  /**
   * Lists all of Together's open-source models
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

    type: 'chat' | 'language' | 'code' | 'image' | 'embedding' | 'moderation' | 'rerank';

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
