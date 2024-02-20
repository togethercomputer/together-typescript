// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'together-ai/resource';
import * as CompletionsAPI from 'together-ai/resources/chat/completions';

export class Chat extends APIResource {
  completions: CompletionsAPI.Completions = new CompletionsAPI.Completions(this._client);
}

export namespace Chat {
  export import Completions = CompletionsAPI.Completions;
  export import ChatCompletion = CompletionsAPI.ChatCompletion;
  export import ChatCompletionChunk = CompletionsAPI.ChatCompletionChunk;
  export import Usage = CompletionsAPI.Usage;
  export import CompletionCreateParams = CompletionsAPI.CompletionCreateParams;
  export import CompletionCreateParamsNonStreaming = CompletionsAPI.CompletionCreateParamsNonStreaming;
  export import CompletionCreateParamsStreaming = CompletionsAPI.CompletionCreateParamsStreaming;
}
