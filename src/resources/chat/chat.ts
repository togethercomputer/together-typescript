// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CompletionsAPI from './completions';
import {
  ChatCompletion,
  ChatCompletionChunk,
  ChatCompletionStructuredMessageImageURL,
  ChatCompletionStructuredMessageText,
  ChatCompletionStructuredMessageVideoURL,
  ChatCompletionUsage,
  ChatCompletionWarning,
  CompletionCreateParams,
  CompletionCreateParamsNonStreaming,
  CompletionCreateParamsStreaming,
  Completions,
} from './completions';

export class Chat extends APIResource {
  completions: CompletionsAPI.Completions = new CompletionsAPI.Completions(this._client);
}

Chat.Completions = Completions;

export declare namespace Chat {
  export {
    Completions as Completions,
    type ChatCompletion as ChatCompletion,
    type ChatCompletionChunk as ChatCompletionChunk,
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
