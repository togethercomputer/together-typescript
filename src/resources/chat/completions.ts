// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as ChatCompletionsAPI from './completions';
import * as CompletionsAPI from '../completions';
import { Stream } from '../../streaming';

export class Completions extends APIResource {
  /**
   * Query a chat model.
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
  id: string;

  choices: Array<ChatCompletion.Choice>;

  created: number;

  model: string;

  object: 'chat.completion';

  usage?: ChatCompletionUsage | null;
}

export namespace ChatCompletion {
  export interface Choice {
    finish_reason?: 'stop' | 'eos' | 'length' | 'tool_calls' | 'function_call';

    index?: number;

    logprobs?: CompletionsAPI.LogProbs | null;

    message?: Choice.Message;

    seed?: number;

    text?: string;
  }

  export namespace Choice {
    export interface Message {
      content: string | null;

      role: 'assistant';

      /**
       * @deprecated
       */
      function_call?: Message.FunctionCall;

      tool_calls?: Array<CompletionsAPI.ToolChoice>;
    }

    export namespace Message {
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

export interface ChatCompletionChunk {
  id: string;

  choices: Array<ChatCompletionChunk.Choice>;

  created: number;

  model: string;

  object: 'chat.completion.chunk';

  system_fingerprint?: string;

  usage?: ChatCompletionUsage | null;
}

export namespace ChatCompletionChunk {
  export interface Choice {
    delta: Choice.Delta;

    finish_reason: 'stop' | 'eos' | 'length' | 'tool_calls' | 'function_call';

    index: number;

    logprobs?: CompletionsAPI.LogProbs;
  }

  export namespace Choice {
    export interface Delta {
      content?: string | null;

      /**
       * @deprecated
       */
      function_call?: Delta.FunctionCall | null;

      role?: 'system' | 'user' | 'assistant' | 'function' | 'tool';

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

export interface ChatCompletionUsage {
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
   * If true, the response will contain the prompt. Can be used with `logprobs` to
   * return prompt logprobs.
   */
  echo?: boolean;

  /**
   * A number between -2.0 and 2.0 where a positive value decreases the likelihood of
   * repeating tokens that have already been mentioned.
   */
  frequency_penalty?: number;

  function_call?: 'none' | 'auto' | CompletionCreateParams.Name;

  /**
   * Adjusts the likelihood of specific tokens appearing in the generated output.
   */
  logit_bias?: Record<string, number>;

  /**
   * Determines the number of most likely tokens to return at each token position log
   * probabilities to return.
   */
  logprobs?: number;

  /**
   * The maximum number of tokens to generate.
   */
  max_tokens?: number;

  /**
   * A number between 0 and 1 that can be used as an alternative to temperature.
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
   * An object specifying the format that the model must output.
   */
  response_format?: CompletionCreateParams.ResponseFormat;

  /**
   * The name of the moderation model used to validate tokens. Choose from the
   * available moderation models found
   * [here](https://docs.together.ai/docs/inference-models#moderation-models).
   */
  safety_model?: string;

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
   * Controls which (if any) function is called by the model. By default uses `auto`,
   * which lets the model pick between generating a message or calling a function.
   */
  tool_choice?: string | CompletionsAPI.ToolChoice;

  /**
   * A list of tools the model may call. Currently, only functions are supported as a
   * tool. Use this to provide a list of functions the model may generate JSON inputs
   * for.
   */
  tools?: Array<CompletionsAPI.Tools>;

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

  export interface Name {
    name: string;
  }

  /**
   * An object specifying the format that the model must output.
   */
  export interface ResponseFormat {
    /**
     * The schema of the response format.
     */
    schema?: Record<string, string>;

    /**
     * The type of the response format.
     */
    type?: string;
  }

  export type CompletionCreateParamsNonStreaming = ChatCompletionsAPI.CompletionCreateParamsNonStreaming;
  export type CompletionCreateParamsStreaming = ChatCompletionsAPI.CompletionCreateParamsStreaming;
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

export namespace Completions {
  export import ChatCompletion = ChatCompletionsAPI.ChatCompletion;
  export import ChatCompletionChunk = ChatCompletionsAPI.ChatCompletionChunk;
  export import ChatCompletionUsage = ChatCompletionsAPI.ChatCompletionUsage;
  export import CompletionCreateParams = ChatCompletionsAPI.CompletionCreateParams;
  export import CompletionCreateParamsNonStreaming = ChatCompletionsAPI.CompletionCreateParamsNonStreaming;
  export import CompletionCreateParamsStreaming = ChatCompletionsAPI.CompletionCreateParamsStreaming;
}
