// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as EmbeddingsAPI from './embeddings';

export class Embeddings extends APIResource {
  /**
   * Creates an embedding vector representing the input text
   */
  create(body: EmbeddingCreateParams, options?: Core.RequestOptions): Core.APIPromise<Embedding> {
    return this._client.post('/embeddings', { body, ...options });
  }
}

export interface Embedding {
  data: Array<Embedding.Data>;

  model: string;

  object: 'list';
}

export namespace Embedding {
  export interface Data {
    embedding: Array<number>;

    index: number;

    object: 'embedding';
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
  export import Embedding = EmbeddingsAPI.Embedding;
  export import EmbeddingCreateParams = EmbeddingsAPI.EmbeddingCreateParams;
}
