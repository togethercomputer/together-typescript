// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Embeddings extends APIResource {
  /**
   * Query an embedding model for a given string of text.
   *
   * @example
   * ```ts
   * const embedding = await client.embeddings.create({
   *   input:
   *     'Our solar system orbits the Milky Way galaxy at about 515,000 mph',
   *   model: 'togethercomputer/m2-bert-80M-8k-retrieval',
   * });
   * ```
   */
  create(body: EmbeddingCreateParams, options?: RequestOptions): APIPromise<Embedding> {
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
  input: string | Array<string>;

  /**
   * The name of the embedding model to use.
   *
   * [See all of Together AI's embedding models](https://docs.together.ai/docs/serverless-models#embedding-models)
   */
  model:
    | 'WhereIsAI/UAE-Large-V1'
    | 'BAAI/bge-large-en-v1.5'
    | 'BAAI/bge-base-en-v1.5'
    | 'togethercomputer/m2-bert-80M-8k-retrieval'
    | (string & {});
}

export declare namespace Embeddings {
  export { type Embedding as Embedding, type EmbeddingCreateParams as EmbeddingCreateParams };
}
