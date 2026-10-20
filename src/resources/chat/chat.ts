// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CompletionsAPI from './completions';
import {
  BaseCompletions,
  ChatCompletion,
  ChatCompletionAssistantMessageParam,
  ChatCompletionChunk,
  ChatCompletionMessage,
  ChatCompletionMessageParam,
  ChatCompletionPrompt,
  ChatCompletionStructuredMessageImageURL,
  ChatCompletionStructuredMessageText,
  ChatCompletionStructuredMessageVideoURL,
  ChatCompletionSystemMessageParam,
  ChatCompletionTool,
  ChatCompletionToolMessageParam,
  ChatCompletionUsage,
  ChatCompletionUserMessageParam,
  ChatCompletionWarning,
  CompletionCreateParams,
  CompletionCreateParamsNonStreaming,
  CompletionCreateParamsStreaming,
  Completions,
} from './completions';

export class BaseChat extends APIResource {
  static override readonly _key: readonly ['chat'] = Object.freeze(['chat'] as const);
}
export class Chat extends BaseChat {
  completions: CompletionsAPI.Completions = new CompletionsAPI.Completions(this._client);
}

Chat.Completions = Completions;
Chat.BaseCompletions = BaseCompletions;

export declare namespace Chat {
  export {
    Completions as Completions,
    BaseCompletions as BaseCompletions,
    type ChatCompletion as ChatCompletion,
    type ChatCompletionAssistantMessageParam as ChatCompletionAssistantMessageParam,
    type ChatCompletionChunk as ChatCompletionChunk,
    type ChatCompletionMessage as ChatCompletionMessage,
    type ChatCompletionMessageParam as ChatCompletionMessageParam,
    type ChatCompletionPrompt as ChatCompletionPrompt,
    type ChatCompletionStructuredMessageImageURL as ChatCompletionStructuredMessageImageURL,
    type ChatCompletionStructuredMessageText as ChatCompletionStructuredMessageText,
    type ChatCompletionStructuredMessageVideoURL as ChatCompletionStructuredMessageVideoURL,
    type ChatCompletionSystemMessageParam as ChatCompletionSystemMessageParam,
    type ChatCompletionTool as ChatCompletionTool,
    type ChatCompletionToolMessageParam as ChatCompletionToolMessageParam,
    type ChatCompletionUsage as ChatCompletionUsage,
    type ChatCompletionUserMessageParam as ChatCompletionUserMessageParam,
    type ChatCompletionWarning as ChatCompletionWarning,
    type CompletionCreateParams as CompletionCreateParams,
    type CompletionCreateParamsNonStreaming as CompletionCreateParamsNonStreaming,
    type CompletionCreateParamsStreaming as CompletionCreateParamsStreaming,
  };
}
