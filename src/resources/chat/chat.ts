// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as CompletionsAPI from './completions';

export class Chat extends APIResource {
  completions: CompletionsAPI.Completions = new CompletionsAPI.Completions(this._client);
}

export namespace Chat {
  export import Completions = CompletionsAPI.Completions;
  export import ChatCompletion = CompletionsAPI.ChatCompletion;
  export import ChatCompletionAssistantMessageParam = CompletionsAPI.ChatCompletionAssistantMessageParam;
  export import ChatCompletionChunk = CompletionsAPI.ChatCompletionChunk;
  export import ChatCompletionFunctionMessageParam = CompletionsAPI.ChatCompletionFunctionMessageParam;
  export import ChatCompletionMessage = CompletionsAPI.ChatCompletionMessage;
  export import ChatCompletionMessageParam = CompletionsAPI.ChatCompletionMessageParam;
  export import ChatCompletionSystemMessageParam = CompletionsAPI.ChatCompletionSystemMessageParam;
  export import ChatCompletionTool = CompletionsAPI.ChatCompletionTool;
  export import ChatCompletionToolMessageParam = CompletionsAPI.ChatCompletionToolMessageParam;
  export import ChatCompletionUsage = CompletionsAPI.ChatCompletionUsage;
  export import ChatCompletionUserMessageParam = CompletionsAPI.ChatCompletionUserMessageParam;
  export import CompletionCreateParams = CompletionsAPI.CompletionCreateParams;
  export import CompletionCreateParamsNonStreaming = CompletionsAPI.CompletionCreateParamsNonStreaming;
  export import CompletionCreateParamsStreaming = CompletionsAPI.CompletionCreateParamsStreaming;
}
