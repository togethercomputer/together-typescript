// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIPromise } from '../../core';
import { APIResource } from '../../resource';
import * as CompletionsAPI from './completions';
import { Stream } from '../../streaming';

export class Completions extends APIResource {
  /**
   * Creates a model response for the given chat conversation.
   */
  create(body: CompletionCreateParamsNonStreaming, options?: Core.RequestOptions): APIPromise<ChatCompletion>;
  create(
    body: CompletionCreateParamsStreaming,
    options?: Core.RequestOptions,
  ): APIPromise<Stream<ChatCompletionChunk>>;
  create(
    body: CompletionCreateParamsBase,
    options?: Core.RequestOptions,
  ): APIPromise<Stream<ChatCompletionChunk> | ChatCompletion>;
  create(
    body: CompletionCreateParams,
    options?: Core.RequestOptions,
  ): APIPromise<ChatCompletion> | APIPromise<Stream<ChatCompletionChunk>> {
    return this._client.post('/chat/completions', { body, ...options, stream: body.stream ?? false }) as
      | APIPromise<ChatCompletion>
      | APIPromise<Stream<ChatCompletionChunk>>;
  }
}

export interface ChatCompletion {
  id?: string;

  choices?: Array<ChatCompletion.Choice>;

  created?: number;

  model?: string;

  object?: 'chat.completion';

  usage?: Usage | null;
}

export namespace ChatCompletion {
  export interface Choice {
    finish_reason?: 'stop' | 'eos' | 'length' | 'tool_calls' | null;

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
}

export interface ChatCompletionChunk {
  id: string;

  token: ChatCompletionChunk.Token;

  choices: Array<ChatCompletionChunk.Choice>;

  created: number;

  object: 'chat.completion.chunk';

  finish_reason?: 'stop' | 'eos' | 'length' | 'tool_calls' | null;

  usage?: Usage | null;
}

export namespace ChatCompletionChunk {
  export interface Token {
    id: number;

    logprob: number;

    special: boolean;

    text: string;
  }

  export interface Choice {
    delta: Choice.Delta;

    index: number;
  }

  export namespace Choice {
    export interface Delta {
      content: string;
    }
  }
}

export interface Usage {
  completion_tokens: number;

  prompt_tokens: number;

  total_tokens: number;
}

export type CompletionCreateParams = CompletionCreateParamsNonStreaming | CompletionCreateParamsStreaming;

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
   * The `frequency_penalty` parameter is a number between -2.0 and 2.0 where a
   * positive value will decrease the likelihood of repeating tokens that were
   * mentioned prior.
   */
  frequency_penalty?: number;

  /**
   * The `logit_bias` parameter allows us to adjust the likelihood of specific tokens
   * appearing in the generated output.
   */
  logit_bias?: unknown;

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
   * The `min_p` parameter is a number between 0 and 1 and an alternative to
   * `temperature`.
   */
  min_p?: number;

  /**
   * Number of generations to return
   */
  n?: number;

  /**
   * The `presence_penalty` parameter is a number between -2.0 and 2.0 where a
   * positive value will increase the likelihood of a model talking about new topics.
   */
  presence_penalty?: number;

  /**
   * A number that controls the diversity of generated text by reducing the
   * likelihood of repeated sequences. Higher values decrease repetition.
   */
  repetition_penalty?: number;

  /**
   * Specifies the format of the response.
   */
  response_format?: CompletionCreateParams.ResponseFormat;

  /**
   * The name of the safety model to use.
   */
  safety_model?: string;

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
   * The choice of tool to use.
   */
  tool_choice?: string | CompletionCreateParams.ToolChoice;

  /**
   * A list of tools to be used in the query.
   */
  tools?: Array<CompletionCreateParams.Tool>;

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

  /**
   * Specifies the format of the response.
   */
  export interface ResponseFormat {
    /**
     * The schema of the response format.
     */
    schema?: unknown;

    /**
     * The type of the response format.
     */
    type?: string;
  }

  export interface ToolChoice {
    function?: ToolChoice.Function;

    type?: string;
  }

  export namespace ToolChoice {
    export interface Function {
      name?: string;
    }
  }

  export interface Tool {
    function?: Tool.Function;

    type?: string;
  }

  export namespace Tool {
    export interface Function {
      description?: string;

      name?: string;

      /**
       * A map of parameter names to their values.
       */
      parameters?: Record<string, unknown>;
    }
  }

  export type CompletionCreateParamsNonStreaming = CompletionsAPI.CompletionCreateParamsNonStreaming;
  export type CompletionCreateParamsStreaming = CompletionsAPI.CompletionCreateParamsStreaming;
}

export interface CompletionCreateParamsNonStreaming extends CompletionCreateParamsBase {
  /**
   * If set, tokens are returned as Server-Sent Events as they are made available.
   * Stream terminates with `data: [DONE]`
   */
  stream?: false;
}

export interface CompletionCreateParamsStreaming extends CompletionCreateParamsBase {
  /**
   * If set, tokens are returned as Server-Sent Events as they are made available.
   * Stream terminates with `data: [DONE]`
   */
  stream: true;
}

export namespace Completions {
  export import ChatCompletion = CompletionsAPI.ChatCompletion;
  export import ChatCompletionChunk = CompletionsAPI.ChatCompletionChunk;
  export import Usage = CompletionsAPI.Usage;
  export import CompletionCreateParams = CompletionsAPI.CompletionCreateParams;
  export import CompletionCreateParamsNonStreaming = CompletionsAPI.CompletionCreateParamsNonStreaming;
  export import CompletionCreateParamsStreaming = CompletionsAPI.CompletionCreateParamsStreaming;
}
