// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ChatCompletionsAPI from './completions';
import * as CompletionsAPI from '../completions';
import { APIPromise } from '../../core/api-promise';
import { Stream } from '../../core/streaming';
import { ChatCompletionStream, ChatCompletionStreamParams } from '../../lib/ChatCompletionStream';
import { RequestOptions } from '../../internal/request-options';

export class Completions extends APIResource {
  /**
   * Query a chat model.
   *
   * @example
   * ```ts
   * const chatCompletion = await client.chat.completions.create(
   *   {
   *     messages: [{ content: 'content', role: 'system' }],
   *     model: 'meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo',
   *   },
   * );
   * ```
   */
  create(body: CompletionCreateParamsNonStreaming, options?: RequestOptions): APIPromise<ChatCompletion>;
  create(
    body: CompletionCreateParamsStreaming,
    options?: RequestOptions,
  ): APIPromise<Stream<ChatCompletionChunk>>;
  create(
    body: CompletionCreateParamsBase,
    options?: RequestOptions,
  ): APIPromise<Stream<ChatCompletionChunk> | ChatCompletion>;
  create(
    body: CompletionCreateParams,
    options?: RequestOptions,
  ): APIPromise<ChatCompletion> | APIPromise<Stream<ChatCompletionChunk>> {
    return this._client.post('/chat/completions', { body, ...options, stream: body.stream ?? false }) as
      | APIPromise<ChatCompletion>
      | APIPromise<Stream<ChatCompletionChunk>>;
  }
  stream(body: ChatCompletionStreamParams, options?: RequestOptions): ChatCompletionStream {
    return ChatCompletionStream.createChatCompletion(this._client.chat.completions, body, options);
  }
}

export interface ChatCompletion {
  id: string;

  choices: Array<ChatCompletion.Choice>;

  created: number;

  model: string;

  object: 'chat.completion';

  usage?: ChatCompletionUsage | null;

  warnings?: Array<ChatCompletionWarning>;
}

export namespace ChatCompletion {
  export interface Choice {
    finish_reason?: 'stop' | 'eos' | 'length' | 'tool_calls' | 'function_call';

    index?: number;

    logprobs?: CompletionsAPI.LogProbs | null;

    message?: ChatCompletionsAPI.ChatCompletionMessage;

    seed?: number;

    text?: string;
  }

  export interface Warning {
    message?: string;
  }
}

export interface ChatCompletionAssistantMessageParam {
  role: 'assistant';

  content?: string | null;

  /**
   * @deprecated
   */
  function_call?: ChatCompletionAssistantMessageParam.FunctionCall;

  name?: string;

  tool_calls?: Array<CompletionsAPI.ToolChoice>;
}

export namespace ChatCompletionAssistantMessageParam {
  /**
   * @deprecated
   */
  export interface FunctionCall {
    arguments: string;

    name: string;
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

  warnings?: Array<ChatCompletionWarning>;
}

export namespace ChatCompletionChunk {
  export interface Choice {
    delta: Choice.Delta;

    finish_reason: 'stop' | 'eos' | 'length' | 'tool_calls' | 'function_call' | null;

    index: number;

    logprobs?: number | null;

    seed?: number | null;
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

/**
 * @deprecated
 */
export interface ChatCompletionFunctionMessageParam {
  content: string;

  name: string;

  role: 'function';
}

export interface ChatCompletionMessage {
  content: string | null;

  role: 'assistant';

  /**
   * @deprecated
   */
  function_call?: ChatCompletionMessage.FunctionCall;

  tool_calls?: Array<CompletionsAPI.ToolChoice>;
}

export namespace ChatCompletionMessage {
  /**
   * @deprecated
   */
  export interface FunctionCall {
    arguments: string;

    name: string;
  }
}

export type ChatCompletionMessageParam =
  | ChatCompletionSystemMessageParam
  | ChatCompletionUserMessageParam
  | ChatCompletionAssistantMessageParam
  | ChatCompletionToolMessageParam
  | ChatCompletionFunctionMessageParam;

export interface ChatCompletionSystemMessageParam {
  content: string;

  role: 'system';

  name?: string;
}

export interface ChatCompletionTool {
  function: ChatCompletionTool.Function;

  type: 'function';
}

export namespace ChatCompletionTool {
  export interface Function {
    name: string;

    description?: string;

    parameters?: Record<string, unknown>;
  }
}

export interface ChatCompletionToolMessageParam {
  content?: string;

  required?: unknown;

  role?: 'tool';

  tool_call_id?: string;
}

export interface ChatCompletionStructuredMessageImageURL {
  image_url?: ChatCompletionStructuredMessageImageURL.ImageURL;

  type?: 'image_url';
}

export namespace ChatCompletionStructuredMessageImageURL {
  export interface ImageURL {
    /**
     * The URL of the image
     */
    url: string;
  }
}

export interface ChatCompletionStructuredMessageText {
  text: string;

  type: 'text';
}

export interface ChatCompletionStructuredMessageVideoURL {
  type: 'video_url';

  video_url: ChatCompletionStructuredMessageVideoURL.VideoURL;
}

export namespace ChatCompletionStructuredMessageVideoURL {
  export interface VideoURL {
    /**
     * The URL of the video
     */
    url: string;
  }
}

export interface ChatCompletionUsage {
  completion_tokens: number;

  prompt_tokens: number;

  total_tokens: number;
}

export interface ChatCompletionUserMessageParam {
  content: string;

  role: 'user';

  name?: string;
}

export interface ChatCompletionWarning {
  message: string;
}

export type CompletionCreateParams = CompletionCreateParamsNonStreaming | CompletionCreateParamsStreaming;

export interface CompletionCreateParamsBase {
  /**
   * A list of messages comprising the conversation so far.
   */
  messages: Array<
    | CompletionCreateParams.ChatCompletionSystemMessageParam
    | CompletionCreateParams.ChatCompletionUserMessageParam
    | CompletionCreateParams.ChatCompletionAssistantMessageParam
    | CompletionCreateParams.ChatCompletionToolMessageParam
    | CompletionCreateParams.ChatCompletionFunctionMessageParam
  >;

  /**
   * The name of the model to query.
   *
   * [See all of Together AI's chat models](https://docs.together.ai/docs/serverless-models#chat-models)
   */
  model:
    | 'Qwen/Qwen2.5-72B-Instruct-Turbo'
    | 'Qwen/Qwen2.5-7B-Instruct-Turbo'
    | 'meta-llama/Meta-Llama-3.1-405B-Instruct-Turbo'
    | 'meta-llama/Meta-Llama-3.1-70B-Instruct-Turbo'
    | 'meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo'
    | (string & {});

  /**
   * Defined the behavior of the API when max_tokens exceed the maximum context
   * length of the model. When set to 'error', API will return 400 with appropriate
   * error message. When set to 'truncate', override the max_tokens with maximum
   * context length of the model.
   */
  context_length_exceeded_behavior?: 'truncate' | 'error';

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
   * A number between 0 and 1 that can be used as an alternative to top_p and top-k.
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
  export interface ChatCompletionSystemMessageParam {
    content: string;

    role: 'system';

    name?: string;
  }

  export interface ChatCompletionUserMessageParam {
    /**
     * The content of the message, which can either be a simple string or a structured
     * format.
     */
    content:
      | string
      | Array<
          | ChatCompletionsAPI.ChatCompletionStructuredMessageText
          | ChatCompletionsAPI.ChatCompletionStructuredMessageImageURL
          | ChatCompletionsAPI.ChatCompletionStructuredMessageVideoURL
          | ChatCompletionUserMessageParam.Audio
          | ChatCompletionUserMessageParam.InputAudio
        >;

    role: 'user';

    name?: string;
  }

  export namespace ChatCompletionUserMessageParam {
    export interface Audio {
      audio_url: Audio.AudioURL;

      type: 'audio_url';
    }

    export namespace Audio {
      export interface AudioURL {
        /**
         * The URL of the audio
         */
        url: string;
      }
    }

    export interface InputAudio {
      input_audio: InputAudio.InputAudio;

      type: 'input_audio';
    }

    export namespace InputAudio {
      export interface InputAudio {
        /**
         * The base64 encoded audio data
         */
        data: string;

        /**
         * The format of the audio data
         */
        format: 'wav';
      }
    }
  }

  export interface ChatCompletionAssistantMessageParam {
    role: 'assistant';

    content?: string | null;

    /**
     * @deprecated
     */
    function_call?: ChatCompletionAssistantMessageParam.FunctionCall;

    name?: string;

    tool_calls?: Array<CompletionsAPI.ToolChoice>;
  }

  export namespace ChatCompletionAssistantMessageParam {
    /**
     * @deprecated
     */
    export interface FunctionCall {
      arguments: string;

      name: string;
    }
  }

  export interface ChatCompletionToolMessageParam {
    content: string;

    role: 'tool';

    tool_call_id: string;
  }

  /**
   * @deprecated
   */
  export interface ChatCompletionFunctionMessageParam {
    content: string;

    name: string;

    role: 'function';
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
    schema?: { [key: string]: unknown };

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

export declare namespace Completions {
  export {
    type ChatCompletion as ChatCompletion,
    type ChatCompletionAssistantMessageParam as ChatCompletionAssistantMessageParam,
    type ChatCompletionChunk as ChatCompletionChunk,
    type ChatCompletionFunctionMessageParam as ChatCompletionFunctionMessageParam,
    type ChatCompletionMessage as ChatCompletionMessage,
    type ChatCompletionMessageParam as ChatCompletionMessageParam,
    type ChatCompletionSystemMessageParam as ChatCompletionSystemMessageParam,
    type ChatCompletionTool as ChatCompletionTool,
    type ChatCompletionToolMessageParam as ChatCompletionToolMessageParam,
    type ChatCompletionStructuredMessageImageURL as ChatCompletionStructuredMessageImageURL,
    type ChatCompletionStructuredMessageText as ChatCompletionStructuredMessageText,
    type ChatCompletionStructuredMessageVideoURL as ChatCompletionStructuredMessageVideoURL,
    type ChatCompletionUsage as ChatCompletionUsage,
    type ChatCompletionWarning as ChatCompletionWarning,
    type CompletionCreateParams as CompletionCreateParams,
    type CompletionCreateParamsNonStreaming as CompletionCreateParamsNonStreaming,
    type CompletionCreateParamsStreaming as CompletionCreateParamsStreaming,
  };
}
