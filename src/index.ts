// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as Core from './core';
import * as Errors from './error';
import * as Uploads from './uploads';
import * as API from './resources/index';
import * as TopLevelAPI from './resources/top-level';
import { RerankParams, RerankResponse } from './resources/top-level';
import {
  BatchCreateParams,
  BatchCreateResponse,
  BatchListResponse,
  BatchRetrieveResponse,
  Batches,
} from './resources/batches';
import {
  Completion,
  CompletionChunk,
  CompletionCreateParams,
  CompletionCreateParamsNonStreaming,
  CompletionCreateParamsStreaming,
  Completions,
  LogProbs,
  ToolChoice,
  Tools,
} from './resources/completions';
import { Embedding, EmbeddingCreateParams, Embeddings } from './resources/embeddings';
import {
  Autoscaling,
  EndpointCreateParams,
  EndpointCreateResponse,
  EndpointListParams,
  EndpointListResponse,
  EndpointRetrieveResponse,
  EndpointUpdateParams,
  EndpointUpdateResponse,
  Endpoints,
} from './resources/endpoints';
import {
  FileDeleteResponse,
  FileListResponse,
  FileObject,
  FilePurpose,
  FileRetrieveResponse,
  FileType,
  FileUploadParams,
  FileUploadResponse,
  Files,
} from './resources/files';
import {
  CosineLrSchedulerArgs,
  FineTune,
  FineTuneCancelResponse,
  FineTuneCreateParams,
  FineTuneCreateResponse,
  FineTuneDownloadParams,
  FineTuneDownloadResponse,
  FineTuneEvent,
  FineTuneListEventsResponse,
  FineTuneListResponse,
  FineTuneResource,
  FineTuneRetrieveCheckpointsResponse,
  FullTrainingType,
  LinearLrSchedulerArgs,
  LoRaTrainingType,
  LrScheduler,
  TrainingMethodDpo,
  TrainingMethodSft,
} from './resources/fine-tune';
import { Hardware, HardwareListParams, HardwareListResponse } from './resources/hardware';
import { ImageCreateParams, ImageDataB64, ImageDataURL, ImageFile, Images } from './resources/images';
import { JobListResponse, JobRetrieveResponse, Jobs } from './resources/jobs';
import { ModelListResponse, ModelUploadParams, ModelUploadResponse, Models } from './resources/models';
import {
  Audio,
  AudioCreateParams,
  AudioCreateParamsNonStreaming,
  AudioCreateParamsStreaming,
  AudioFile,
  AudioSpeechStreamChunk,
} from './resources/audio/audio';
import { Chat } from './resources/chat/chat';
import {
  CodeInterpreter,
  CodeInterpreterExecuteParams,
  ExecuteResponse,
} from './resources/code-interpreter/code-interpreter';

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
   *
   * @unit milliseconds
   */
  timeout?: number | undefined;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent | undefined;

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
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery | undefined;
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
      baseURLOverridden: baseURL ? baseURL !== 'https://api.together.xyz/v1' : false,
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
  codeInterpreter: API.CodeInterpreter = new API.CodeInterpreter(this);
  images: API.Images = new API.Images(this);
  audio: API.Audio = new API.Audio(this);
  models: API.Models = new API.Models(this);
  jobs: API.Jobs = new API.Jobs(this);
  endpoints: API.Endpoints = new API.Endpoints(this);
  hardware: API.Hardware = new API.Hardware(this);
  batches: API.Batches = new API.Batches(this);

  /**
   * Check whether the base URL is set to its default.
   */
  #baseURLOverridden(): boolean {
    return this.baseURL !== 'https://api.together.xyz/v1';
  }

  /**
   * Query a reranker model
   *
   * @example
   * ```ts
   * const response = await client.rerank({
   *   documents: [
   *     { title: 'bar', text: 'bar' },
   *     { title: 'bar', text: 'bar' },
   *     { title: 'bar', text: 'bar' },
   *     { title: 'bar', text: 'bar' },
   *   ],
   *   model: 'Salesforce/Llama-Rank-V1',
   *   query: 'What animals can I find near Peru?',
   * });
   * ```
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

Together.Chat = Chat;
Together.Completions = Completions;
Together.Embeddings = Embeddings;
Together.Files = Files;
Together.FineTuneResource = FineTuneResource;
Together.CodeInterpreter = CodeInterpreter;
Together.Images = Images;
Together.Audio = Audio;
Together.Models = Models;
Together.Jobs = Jobs;
Together.Endpoints = Endpoints;
Together.Hardware = Hardware;
Together.Batches = Batches;
export declare namespace Together {
  export type RequestOptions = Core.RequestOptions;

  export { type RerankResponse as RerankResponse, type RerankParams as RerankParams };

  export { Chat as Chat };

  export {
    Completions as Completions,
    type Completion as Completion,
    type CompletionChunk as CompletionChunk,
    type LogProbs as LogProbs,
    type ToolChoice as ToolChoice,
    type Tools as Tools,
    type CompletionCreateParams as CompletionCreateParams,
    type CompletionCreateParamsNonStreaming as CompletionCreateParamsNonStreaming,
    type CompletionCreateParamsStreaming as CompletionCreateParamsStreaming,
  };

  export {
    Embeddings as Embeddings,
    type Embedding as Embedding,
    type EmbeddingCreateParams as EmbeddingCreateParams,
  };

  export {
    Files as Files,
    type FileObject as FileObject,
    type FilePurpose as FilePurpose,
    type FileType as FileType,
    type FileRetrieveResponse as FileRetrieveResponse,
    type FileListResponse as FileListResponse,
    type FileDeleteResponse as FileDeleteResponse,
    type FileUploadResponse as FileUploadResponse,
    type FileUploadParams as FileUploadParams,
  };

  export {
    FineTuneResource as FineTuneResource,
    type CosineLrSchedulerArgs as CosineLrSchedulerArgs,
    type FineTune as FineTune,
    type FineTuneEvent as FineTuneEvent,
    type FullTrainingType as FullTrainingType,
    type LinearLrSchedulerArgs as LinearLrSchedulerArgs,
    type LoRaTrainingType as LoRaTrainingType,
    type LrScheduler as LrScheduler,
    type TrainingMethodDpo as TrainingMethodDpo,
    type TrainingMethodSft as TrainingMethodSft,
    type FineTuneCreateResponse as FineTuneCreateResponse,
    type FineTuneListResponse as FineTuneListResponse,
    type FineTuneCancelResponse as FineTuneCancelResponse,
    type FineTuneDownloadResponse as FineTuneDownloadResponse,
    type FineTuneListEventsResponse as FineTuneListEventsResponse,
    type FineTuneRetrieveCheckpointsResponse as FineTuneRetrieveCheckpointsResponse,
    type FineTuneCreateParams as FineTuneCreateParams,
    type FineTuneDownloadParams as FineTuneDownloadParams,
  };

  export {
    CodeInterpreter as CodeInterpreter,
    type ExecuteResponse as ExecuteResponse,
    type CodeInterpreterExecuteParams as CodeInterpreterExecuteParams,
  };

  export {
    Images as Images,
    type ImageDataB64 as ImageDataB64,
    type ImageDataURL as ImageDataURL,
    type ImageFile as ImageFile,
    type ImageCreateParams as ImageCreateParams,
  };

  export {
    Audio as Audio,
    type AudioFile as AudioFile,
    type AudioSpeechStreamChunk as AudioSpeechStreamChunk,
    type AudioCreateParams as AudioCreateParams,
    type AudioCreateParamsNonStreaming as AudioCreateParamsNonStreaming,
    type AudioCreateParamsStreaming as AudioCreateParamsStreaming,
  };

  export {
    Models as Models,
    type ModelListResponse as ModelListResponse,
    type ModelUploadResponse as ModelUploadResponse,
    type ModelUploadParams as ModelUploadParams,
  };

  export {
    Jobs as Jobs,
    type JobRetrieveResponse as JobRetrieveResponse,
    type JobListResponse as JobListResponse,
  };

  export {
    Endpoints as Endpoints,
    type Autoscaling as Autoscaling,
    type EndpointCreateResponse as EndpointCreateResponse,
    type EndpointRetrieveResponse as EndpointRetrieveResponse,
    type EndpointUpdateResponse as EndpointUpdateResponse,
    type EndpointListResponse as EndpointListResponse,
    type EndpointCreateParams as EndpointCreateParams,
    type EndpointUpdateParams as EndpointUpdateParams,
    type EndpointListParams as EndpointListParams,
  };

  export {
    Hardware as Hardware,
    type HardwareListResponse as HardwareListResponse,
    type HardwareListParams as HardwareListParams,
  };

  export {
    Batches as Batches,
    type BatchCreateResponse as BatchCreateResponse,
    type BatchRetrieveResponse as BatchRetrieveResponse,
    type BatchListResponse as BatchListResponse,
    type BatchCreateParams as BatchCreateParams,
  };
}

export { toFile, fileFromPath } from './uploads';
export {
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
} from './error';

export default Together;
