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

export interface ModelListResponse {
  id?: string;

  context_length?: number;

  created?: number;

  display_name?: string;

  license?: string;

  link?: string;

  object?: string;

  organization?: string;

  pricing?: ModelListResponse.Pricing;

  type?: string;
}

export namespace ModelListResponse {
  export interface Pricing {
    base?: number;

    finetune?: number;

    hourly?: number;

    input?: number;

    output?: number;
  }
}

export namespace Models {
  export import ModelListResponse = ModelsAPI.ModelListResponse;
}
