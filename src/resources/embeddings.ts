// File generated from our OpenAPI spec by Stainless.

import * as Core from '/core';
import { APIResource } from '/resource';
import * as EmbeddingsAPI from '/resources/embeddings';

export class Embeddings extends APIResource {
  /**
   * Creates an embedding vector representing the input text
   */
  create(body: EmbeddingCreateParams, options?: Core.RequestOptions): Core.APIPromise<EmbeddingsResponse> {
    return this._client.post('/embeddings', { body, ...options });
  }
}

export interface EmbeddingsResponse {
  data: Array<EmbeddingsResponse.Data>;

  model: string;

  object: 'list';
}

export namespace EmbeddingsResponse {
  export interface Data {
    embedding?: Array<number>;

    index?: number;

    object?: 'embedding';
  }
}

export interface EmbeddingCreateParams {
  /**
   * A string providing the text for the model to embed.
   */
  input: string;

  /**
   * The name of the embedding model to use.
   */
  model: string;
}

export namespace Embeddings {
  export import EmbeddingsResponse = EmbeddingsAPI.EmbeddingsResponse;
  export import EmbeddingCreateParams = EmbeddingsAPI.EmbeddingCreateParams;
}
