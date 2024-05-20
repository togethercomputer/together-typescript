// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIPromise } from '../core';
import { APIResource } from '../resource';
import * as CompletionsAPI from './completions';
import * as ChatCompletionsAPI from './chat/completions';
import { Stream } from '../streaming';

export class Completions extends APIResource {
  /**
   * Creates a completion for the provided prompt and parameters
   */
  create(body: CompletionCreateParamsNonStreaming, options?: Core.RequestOptions): APIPromise<Completion>;
  create(
    body: CompletionCreateParamsStreaming,
    options?: Core.RequestOptions,
  ): APIPromise<Stream<Completion>>;
  create(
    body: CompletionCreateParamsBase,
    options?: Core.RequestOptions,
  ): APIPromise<Stream<Completion> | Completion>;
  create(
    body: CompletionCreateParams,
    options?: Core.RequestOptions,
  ): APIPromise<Completion> | APIPromise<Stream<Completion>> {
    return this._client.post('/completions', { body, ...options, stream: body.stream ?? false }) as
      | APIPromise<Completion>
      | APIPromise<Stream<Completion>>;
  }
}

export interface Completion {
  id: string;

  choices: Array<Completion.Choice>;

  created: number;

  model: string;

  object: 'text_completion';

  usage: ChatCompletionsAPI.ChatCompletionUsage | null;

  prompt?: Array<Completion.Prompt>;
}

export namespace Completion {
  export interface Choice {
    finish_reason?: 'stop' | 'eos' | 'length' | 'tool_calls' | null;

    logprobs?: CompletionsAPI.LogProbs | null;

    text?: string;
  }

  export interface Prompt {
    logprobs?: CompletionsAPI.LogProbs;

    text?: string;
  }
}

export interface LogProbs {
  /**
   * List of token log probabilities
   */
  token_logprobs?: Array<number>;

  /**
   * List of token strings
   */
  tokens?: Array<string>;
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

export interface Tools {
  function?: Tools.Function;

  type?: string;
}

export namespace Tools {
  export interface Function {
    description?: string;

    name?: string;

    /**
     * A map of parameter names to their values.
     */
    parameters?: Record<string, unknown>;
  }
}

export type CompletionCreateParams = CompletionCreateParamsNonStreaming | CompletionCreateParamsStreaming;

export interface CompletionCreateParamsBase {
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
   * The `frequency_penalty` parameter is a number between -2.0 and 2.0 where a
   * positive value will decrease the likelihood of repeating tokens that were
   * mentioned prior.
   */
  frequency_penalty?: number;

  /**
   * The `logit_bias` parameter allows us to adjust the likelihood of specific tokens
   * appearing in the generated output.
   */
  logit_bias?: Record<string, unknown>;

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
  export import Completion = CompletionsAPI.Completion;
  export import LogProbs = CompletionsAPI.LogProbs;
  export import ToolChoice = CompletionsAPI.ToolChoice;
  export import Tools = CompletionsAPI.Tools;
  export import CompletionCreateParams = CompletionsAPI.CompletionCreateParams;
  export import CompletionCreateParamsNonStreaming = CompletionsAPI.CompletionCreateParamsNonStreaming;
  export import CompletionCreateParamsStreaming = CompletionsAPI.CompletionCreateParamsStreaming;
}
