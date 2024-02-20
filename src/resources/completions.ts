// File generated from our OpenAPI spec by Stainless.

import * as Core from '/core';
import { APIResource } from '/resource';
import * as CompletionsAPI from '/resources/completions';

export class Completions extends APIResource {
  /**
   * Creates a completion for the provided prompt and parameters
   */
  create(body: CompletionCreateParams, options?: Core.RequestOptions): Core.APIPromise<CompletionResponse> {
    return this._client.post('/completions', { body, ...options });
  }
}

export interface CompletionResponse {
  id: string;

  choices: Array<CompletionResponse.Choice>;

  created: number;

  model: string;

  object: 'text_completion';

  usage: CompletionResponse.Usage;

  prompt?: Array<CompletionResponse.Prompt>;
}

export namespace CompletionResponse {
  export interface Choice {
    finish_reason?: 'stop' | 'eos' | 'length' | 'tool_calls';

    logprobs?: Choice.Logprobs | null;

    text?: string;
  }

  export namespace Choice {
    export interface Logprobs {
      /**
       * List of token log probabilities
       */
      token_logprobs?: Array<number>;

      /**
       * List of token strings
       */
      tokens?: Array<string>;
    }
  }

  export interface Usage {
    completion_tokens?: number;

    prompt_tokens?: number;

    total_tokens?: number;
  }

  export interface Prompt {
    logprobs?: Prompt.Logprobs;

    text?: string;
  }

  export namespace Prompt {
    export interface Logprobs {
      /**
       * List of token log probabilities
       */
      token_logprobs?: Array<number>;

      /**
       * List of token strings
       */
      tokens?: Array<string>;
    }
  }
}

export interface CompletionCreateParams {
  /**
   * The name of the model to query.
   */
  model: string;

  /**
   * A string providing context for the model to complete.
   */
  prompt: string;

  /**
   * If set, the response will contain the prompt, and will also return prompt
   * logprobs if set with logprobs.
   */
  echo?: boolean;

  /**
   * Determines the number of most likely tokens to return at each token position log
   * probabilities to return
   */
  logprobs?: number;

  /**
   * The maximum number of tokens to generate.
   */
  max_tokens?: number;

  /**
   * Number of generations to return
   */
  n?: number;

  /**
   * A number that controls the diversity of generated text by reducing the
   * likelihood of repeated sequences. Higher values decrease repetition.
   */
  repetition_penalty?: number;

  /**
   * A list of string sequences that will truncate (stop) inference text output.
   */
  stop?: Array<string>;

  /**
   * If set, tokens are returned as Server-Sent Events as they are made available.
   * Stream terminates with `data: [DONE]`
   */
  stream?: boolean;

  /**
   * Determines the degree of randomness in the response.
   */
  temperature?: number;

  /**
   * The `top_k` parameter is used to limit the number of choices for the next
   * predicted word or token.
   */
  top_k?: number;

  /**
   * The `top_p` (nucleus) parameter is used to dynamically adjust the number of
   * choices for each predicted token based on the cumulative probabilities.
   */
  top_p?: number;
}

export namespace Completions {
  export import CompletionResponse = CompletionsAPI.CompletionResponse;
  export import CompletionCreateParams = CompletionsAPI.CompletionCreateParams;
}
