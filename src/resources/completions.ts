// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as CompletionsAPI from './completions';
import * as ChatCompletionsAPI from './chat/completions';
import { APIPromise } from '../core/api-promise';
import { Stream } from '../core/streaming';
import { RequestOptions } from '../internal/request-options';

export class Completions extends APIResource {
  /**
   * Query a language, code, or image model.
   *
   * @example
   * ```ts
   * const completion = await client.completions.create({
   *   model: 'mistralai/Mixtral-8x7B-Instruct-v0.1',
   *   prompt:
   *     '<s>[INST] What is the capital of France? [/INST]',
   * });
   * ```
   */
  create(body: CompletionCreateParamsNonStreaming, options?: RequestOptions): APIPromise<Completion>;
  create(
    body: CompletionCreateParamsStreaming,
    options?: RequestOptions,
  ): APIPromise<Stream<CompletionChunk>>;
  create(
    body: CompletionCreateParamsBase,
    options?: RequestOptions,
  ): APIPromise<Stream<CompletionChunk> | Completion>;
  create(
    body: CompletionCreateParams,
    options?: RequestOptions,
  ): APIPromise<Completion> | APIPromise<Stream<CompletionChunk>> {
    return this._client.post('/completions', { body, ...options, stream: body.stream ?? false }) as
      | APIPromise<Completion>
      | APIPromise<Stream<CompletionChunk>>;
  }
}

export interface Completion {
  id: string;

  choices: Array<Completion.Choice>;

  created: number;

  model: string;

  object: 'text.completion';

  usage: ChatCompletionsAPI.ChatCompletionUsage | null;

  prompt?: Array<Completion.Prompt>;
}

export namespace Completion {
  export interface Choice {
    finish_reason?: 'stop' | 'eos' | 'length' | 'tool_calls' | 'function_call';

    logprobs?: CompletionsAPI.LogProbs;

    seed?: number;

    text?: string;
  }

  export interface Prompt {
    logprobs?: CompletionsAPI.LogProbs;

    text?: string;
  }
}

export interface CompletionChunk {
  id: string;

  token: CompletionChunk.Token;

  choices: Array<CompletionChunk.Choice>;

  finish_reason: 'stop' | 'eos' | 'length' | 'tool_calls' | 'function_call' | null;

  usage: ChatCompletionsAPI.ChatCompletionUsage | null;

  created?: number;

  object?: 'completion.chunk';

  seed?: number;
}

export namespace CompletionChunk {
  export interface Token {
    id: number;

    logprob: number;

    special: boolean;

    text: string;
  }

  export interface Choice {
    index: number;

    delta?: Choice.Delta;

    text?: string;
  }

  export namespace Choice {
    export interface Delta {
      role: 'system' | 'user' | 'assistant' | 'function' | 'tool';

      content?: string | null;

      /**
       * @deprecated
       */
      function_call?: Delta.FunctionCall | null;

      token_id?: number;

      tool_calls?: Array<CompletionsAPI.ToolChoice>;
    }

    export namespace Delta {
      /**
       * @deprecated
       */
      export interface FunctionCall {
        arguments: string;

        name: string;
      }
    }
  }
}

export interface LogProbs {
  /**
   * List of token IDs corresponding to the logprobs
   */
  token_ids?: Array<number | null>;

  /**
   * List of token log probabilities
   */
  token_logprobs?: Array<number | null>;

  /**
   * List of token strings
   */
  tokens?: Array<string | null>;
}

export interface ToolChoice {
  id: string;

  function: ToolChoice.Function;

  index: number;

  type: 'function';
}

export namespace ToolChoice {
  export interface Function {
    arguments: string;

    name: string;
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
    parameters?: { [key: string]: unknown };
  }
}

export type CompletionCreateParams = CompletionCreateParamsNonStreaming | CompletionCreateParamsStreaming;

export interface CompletionCreateParamsBase {
  /**
   * The name of the model to query.
   *
   * [See all of Together AI's chat models](https://docs.together.ai/docs/serverless-models#chat-models)
   */
  model:
    | 'meta-llama/Llama-2-70b-hf'
    | 'mistralai/Mistral-7B-v0.1'
    | 'mistralai/Mixtral-8x7B-v0.1'
    | 'Meta-Llama/Llama-Guard-7b'
    | (string & {});

  /**
   * A string providing context for the model to complete.
   */
  prompt: string;

  /**
   * If true, the response will contain the prompt. Can be used with `logprobs` to
   * return prompt logprobs.
   */
  echo?: boolean;

  /**
   * A number between -2.0 and 2.0 where a positive value decreases the likelihood of
   * repeating tokens that have already been mentioned.
   */
  frequency_penalty?: number;

  /**
   * Adjusts the likelihood of specific tokens appearing in the generated output.
   */
  logit_bias?: { [key: string]: number };

  /**
   * An integer between 0 and 20 of the top k tokens to return log probabilities for
   * at each generation step, instead of just the sampled token. Log probabilities
   * help assess model confidence in token predictions.
   */
  logprobs?: number;

  /**
   * The maximum number of tokens to generate.
   */
  max_tokens?: number;

  /**
   * A number between 0 and 1 that can be used as an alternative to top-p and top-k.
   */
  min_p?: number;

  /**
   * The number of completions to generate for each prompt.
   */
  n?: number;

  /**
   * A number between -2.0 and 2.0 where a positive value increases the likelihood of
   * a model talking about new topics.
   */
  presence_penalty?: number;

  /**
   * A number that controls the diversity of generated text by reducing the
   * likelihood of repeated sequences. Higher values decrease repetition.
   */
  repetition_penalty?: number;

  /**
   * The name of the moderation model used to validate tokens. Choose from the
   * available moderation models found
   * [here](https://docs.together.ai/docs/inference-models#moderation-models).
   */
  safety_model?: 'Meta-Llama/Llama-Guard-7b' | (string & {});

  /**
   * Seed value for reproducibility.
   */
  seed?: number;

  /**
   * A list of string sequences that will truncate (stop) inference text output. For
   * example, "</s>" will stop generation as soon as the model generates the given
   * token.
   */
  stop?: Array<string>;

  /**
   * If true, stream tokens as Server-Sent Events as the model generates them instead
   * of waiting for the full model response. The stream terminates with
   * `data: [DONE]`. If false, return a single JSON object containing the results.
   */
  stream?: boolean;

  /**
   * A decimal number from 0-1 that determines the degree of randomness in the
   * response. A temperature less than 1 favors more correctness and is appropriate
   * for question answering or summarization. A value closer to 1 introduces more
   * randomness in the output.
   */
  temperature?: number;

  /**
   * An integer that's used to limit the number of choices for the next predicted
   * word or token. It specifies the maximum number of tokens to consider at each
   * step, based on their probability of occurrence. This technique helps to speed up
   * the generation process and can improve the quality of the generated text by
   * focusing on the most likely options.
   */
  top_k?: number;

  /**
   * A percentage (also called the nucleus parameter) that's used to dynamically
   * adjust the number of choices for each predicted token based on the cumulative
   * probabilities. It specifies a probability threshold below which all less likely
   * tokens are filtered out. This technique helps maintain diversity and generate
   * more fluent and natural-sounding text.
   */
  top_p?: number;
}

export namespace CompletionCreateParams {
  export type CompletionCreateParamsNonStreaming = CompletionsAPI.CompletionCreateParamsNonStreaming;
  export type CompletionCreateParamsStreaming = CompletionsAPI.CompletionCreateParamsStreaming;
}

export interface CompletionCreateParamsNonStreaming extends CompletionCreateParamsBase {
  /**
   * If true, stream tokens as Server-Sent Events as the model generates them instead
   * of waiting for the full model response. The stream terminates with
   * `data: [DONE]`. If false, return a single JSON object containing the results.
   */
  stream?: false;
}

export interface CompletionCreateParamsStreaming extends CompletionCreateParamsBase {
  /**
   * If true, stream tokens as Server-Sent Events as the model generates them instead
   * of waiting for the full model response. The stream terminates with
   * `data: [DONE]`. If false, return a single JSON object containing the results.
   */
  stream: true;
}

export declare namespace Completions {
  export {
    type Completion as Completion,
    type CompletionChunk as CompletionChunk,
    type LogProbs as LogProbs,
    type ToolChoice as ToolChoice,
    type Tools as Tools,
    type CompletionCreateParams as CompletionCreateParams,
    type CompletionCreateParamsNonStreaming as CompletionCreateParamsNonStreaming,
    type CompletionCreateParamsStreaming as CompletionCreateParamsStreaming,
  };
}
