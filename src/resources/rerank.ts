// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as CompletionsAPI from './chat/completions';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Rerank extends APIResource {
  /**
   * Query a reranker model
   *
   * @example
   * ```ts
   * const rerank = await client.rerank.create({
   *   documents: [
   *     { title: 'bar', text: 'bar' },
   *     { title: 'bar', text: 'bar' },
   *     { title: 'bar', text: 'bar' },
   *     { title: 'bar', text: 'bar' },
   *   ],
   *   model: 'Salesforce/Llama-Rank-V1',
   *   query: 'What animals can I find near Peru?',
   * });
   * ```
   */
  create(body: RerankCreateParams, options?: RequestOptions): APIPromise<RerankCreateResponse> {
    return this._client.post('/rerank', { body, ...options });
  }
}

export interface RerankCreateResponse {
  /**
   * The model to be used for the rerank request.
   */
  model: string;

  /**
   * Object type
   */
  object: 'rerank';

  results: Array<RerankCreateResponse.Result>;

  /**
   * Request ID
   */
  id?: string;

  usage?: CompletionsAPI.ChatCompletionUsage | null;
}

export namespace RerankCreateResponse {
  export interface Result {
    document: Result.Document;

    index: number;

    relevance_score: number;
  }

  export namespace Result {
    export interface Document {
      text?: string | null;
    }
  }
}

export interface RerankCreateParams {
  /**
   * List of documents, which can be either strings or objects.
   */
  documents: Array<{ [key: string]: unknown }> | Array<string>;

  /**
   * The model to be used for the rerank request.
   *
   * [See all of Together AI's rerank models](https://docs.together.ai/docs/serverless-models#rerank-models)
   */
  model: 'Salesforce/Llama-Rank-v1' | (string & {});

  /**
   * The search query to be used for ranking.
   */
  query: string;

  /**
   * List of keys in the JSON Object document to rank by. Defaults to use all
   * supplied keys for ranking.
   */
  rank_fields?: Array<string>;

  /**
   * Whether to return supplied documents with the response.
   */
  return_documents?: boolean;

  /**
   * The number of top results to return.
   */
  top_n?: number;
}

export declare namespace Rerank {
  export { type RerankCreateResponse as RerankCreateResponse, type RerankCreateParams as RerankCreateParams };
}
