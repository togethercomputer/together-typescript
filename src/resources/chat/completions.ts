// File generated from our OpenAPI spec by Stainless.

import * as Core from '/core';
import { APIPromise } from '/core';
import { APIResource } from '/resource';
import { isRequestOptions } from '/core';
import { type Response } from '/_shims/index';
import * as CompletionsAPI from '/resources/chat/completions';
import { Stream } from '/streaming';

export class Completions extends APIResource {
  /**
   * Creates a model response for the given chat conversation.
   */
  create(body: CompletionCreateParamsNonStreaming, options?: Core.RequestOptions): APIPromise<ChatCompletionResponse>
  create(body: CompletionCreateParamsNonStreaming, options?: Core.RequestOptions): APIPromise<ChatCompletionResponse>
  create(body: CompletionCreateParamsBase, options?: Core.RequestOptions): APIPromise<Stream<ChatCompletionResponse> | ChatCompletionResponse>
  create(body: CompletionCreateParams, options?: Core.RequestOptions): APIPromise<ChatCompletionResponse> | APIPromise<Stream<ChatCompletionResponse>> {
    return this._client.post('/chat/completions', { body, ...options, true }) as APIPromise<ChatCompletionResponse> | APIPromise<Stream<ChatCompletionResponse>>;
  }
}

export interface ChatCompletionResponse {
  id?: string;

  choices?: Array<ChatCompletionResponse.Choice>;

  created?: number;

  model?: string;

  object?: 'chat.completion';

  usage?: ChatCompletionResponse.Usage;
}

export namespace ChatCompletionResponse {
  export interface Choice {
    finish_reason?: 'stop' | 'eos' | 'length' | 'tool_calls';

    logprobs?: Choice.Logprobs | null;

    message?: Choice.Message;
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

    export interface Message {
      content?: string;

      role?: string;
    }
  }

  export interface Usage {
    completion_tokens?: number;

    prompt_tokens?: number;

    total_tokens?: number;
  }
}

export type CompletionCreateParams = CompletionCreateParamsNonStreaming | CompletionCreateParamsNonStreaming

export interface CompletionCreateParamsBase {
  /**
   * A list of messages comprising the conversation so far.
   */
  messages: Array<CompletionCreateParams.Message>;

  /**
   * The name of the model to query.
   */
  model: string;

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

export namespace CompletionCreateParams {
  export interface Message {
    /**
     * The contents of the message.
     */
    content: string;

    /**
     * The role of the messages author. Choice between: system, user, or assistant.
     */
    role: 'system' | 'user' | 'assistant';
  }

  export type CompletionCreateParamsNonStreaming = CompletionsAPI.CompletionCreateParamsNonStreaming
  export type CompletionCreateParamsNonStreaming = CompletionsAPI.CompletionCreateParamsNonStreaming
}

export interface CompletionCreateParamsNonStreaming extends CompletionCreateParamsBase {
}

export interface CompletionCreateParamsNonStreaming extends CompletionCreateParamsBase {
}

export namespace Completions {
  export import ChatCompletionResponse = CompletionsAPI.ChatCompletionResponse;
  export import CompletionCreateParams = CompletionsAPI.CompletionCreateParams;
  export import CompletionCreateParamsNonStreaming = CompletionsAPI.CompletionCreateParamsNonStreaming;
}
