// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Errors from './error';
import * as Uploads from './uploads';
import { type Agent } from './_shims/index';
import * as Core from './core';
import * as API from './resources/index';
import * as TopLevelAPI from './resources/top-level';

export interface ClientOptions {
  /**
   * Defaults to process.env['TOGETHER_API_KEY'].
   */
  apiKey?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['TOGETHER_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 5
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/**
 * API Client for interfacing with the Together API.
 */
export class Together extends Core.APIClient {
  apiKey: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Together API.
   *
   * @param {string | undefined} [opts.apiKey=process.env['TOGETHER_API_KEY'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['TOGETHER_BASE_URL'] ?? https://api.together.xyz/v1] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=5] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('TOGETHER_BASE_URL'),
    apiKey = Core.readEnv('TOGETHER_API_KEY'),
    ...opts
  }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Errors.TogetherError(
        "The TOGETHER_API_KEY environment variable is missing or empty; either provide it, or instantiate the Together client with an apiKey option, like new Together({ apiKey: 'My API Key' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      ...opts,
      baseURL: baseURL || `https://api.together.xyz/v1`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.apiKey = apiKey;
  }

  chat: API.Chat = new API.Chat(this);
  completions: API.Completions = new API.Completions(this);
  embeddings: API.Embeddings = new API.Embeddings(this);
  files: API.Files = new API.Files(this);
  fineTune: API.FineTuneResource = new API.FineTuneResource(this);
  images: API.Images = new API.Images(this);
  models: API.Models = new API.Models(this);

  /**
   * Query a reranker model
   */
  rerank(
    body: TopLevelAPI.RerankParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TopLevelAPI.RerankResponse> {
    return this.post('/rerank', { body, ...options });
  }

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return { Authorization: `Bearer ${this.apiKey}` };
  }

  static Together = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static TogetherError = Errors.TogetherError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

export const {
  TogetherError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} = Errors;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

export namespace Together {
  export import RequestOptions = Core.RequestOptions;

  export import RerankResponse = API.RerankResponse;
  export import RerankParams = API.RerankParams;

  export import Chat = API.Chat;

  export import Completions = API.Completions;
  export import Completion = API.Completion;
  export import LogProbs = API.LogProbs;
  export import ToolChoice = API.ToolChoice;
  export import Tools = API.Tools;
  export import CompletionCreateParams = API.CompletionCreateParams;
  export import CompletionCreateParamsNonStreaming = API.CompletionCreateParamsNonStreaming;
  export import CompletionCreateParamsStreaming = API.CompletionCreateParamsStreaming;

  export import Embeddings = API.Embeddings;
  export import Embedding = API.Embedding;
  export import EmbeddingCreateParams = API.EmbeddingCreateParams;

  export import Files = API.Files;
  export import FileObject = API.FileObject;
  export import FileRetrieveResponse = API.FileRetrieveResponse;
  export import FileListResponse = API.FileListResponse;
  export import FileDeleteResponse = API.FileDeleteResponse;

  export import FineTuneResource = API.FineTuneResource;
  export import FineTune = API.FineTune;
  export import FineTuneEvent = API.FineTuneEvent;
  export import FineTuneListResponse = API.FineTuneListResponse;
  export import FineTuneDownloadResponse = API.FineTuneDownloadResponse;
  export import FineTuneCreateParams = API.FineTuneCreateParams;
  export import FineTuneDownloadParams = API.FineTuneDownloadParams;

  export import Images = API.Images;
  export import ImageFile = API.ImageFile;
  export import ImageCreateParams = API.ImageCreateParams;

  export import Models = API.Models;
  export import ModelListResponse = API.ModelListResponse;
}

export default Together;
