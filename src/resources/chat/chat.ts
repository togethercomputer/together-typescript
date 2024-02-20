// File generated from our OpenAPI spec by Stainless.

import { APIResource } from '/resource';
import * as CompletionsAPI from '/resources/chat/completions';

export class Chat extends APIResource {
  completions: CompletionsAPI.Completions = new CompletionsAPI.Completions(this._client);
}

export namespace Chat {
  export import Completions = CompletionsAPI.Completions;
  export import ChatCompletionResponse = CompletionsAPI.ChatCompletionResponse;
  export import CompletionCreateParams = CompletionsAPI.CompletionCreateParams;
}
