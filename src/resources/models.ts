// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Models extends APIResource {
  /**
   * Lists all of Together's open-source models
   *
   * @example
   * ```ts
   * const models = await client.models.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<ModelListResponse> {
    return this._client.get('/models', options);
  }

  /**
   * Upload a custom model or adapter from Hugging Face or S3
   *
   * @example
   * ```ts
   * const response = await client.models.upload({
   *   model_name: 'Qwen2.5-72B-Instruct',
   *   model_source: 'unsloth/Qwen2.5-72B-Instruct',
   * });
   * ```
   */
  upload(body: ModelUploadParams, options?: RequestOptions): APIPromise<ModelUploadResponse> {
    return this._client.post('/models', { body, ...options });
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

export interface ModelUploadResponse {
  data: ModelUploadResponse.Data;

  message: string;
}

export namespace ModelUploadResponse {
  export interface Data {
    job_id: string;

    model_id: string;

    model_name: string;

    model_source: string;
  }
}

export interface ModelUploadParams {
  /**
   * The name to give to your uploaded model
   */
  model_name: string;

  /**
   * The source location of the model (Hugging Face repo or S3 path)
   */
  model_source: string;

  /**
   * The base model to use for an adapter if setting it to run against a serverless
   * pool. Only used for model_type `adapter`.
   */
  base_model?: string;

  /**
   * A description of your model
   */
  description?: string;

  /**
   * Hugging Face token (if uploading from Hugging Face)
   */
  hf_token?: string;

  /**
   * The lora pool to use for an adapter if setting it to run against, say, a
   * dedicated pool. Only used for model_type `adapter`.
   */
  lora_model?: string;

  /**
   * Whether the model is a full model or an adapter
   */
  model_type?: 'model' | 'adapter';
}

export declare namespace Models {
  export {
    type ModelListResponse as ModelListResponse,
    type ModelUploadResponse as ModelUploadResponse,
    type ModelUploadParams as ModelUploadParams,
  };
}
