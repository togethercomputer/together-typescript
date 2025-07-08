// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as AudioAPI from './audio';
import * as TranscriptionsAPI from './transcriptions';
import { TranscriptionCreateParams, TranscriptionCreateResponse, Transcriptions } from './transcriptions';
import * as TranslationsAPI from './translations';
import { TranslationCreateParams, TranslationCreateResponse, Translations } from './translations';
import { Stream } from '../../streaming';
import { type Response } from '../../_shims/index';

export class Audio extends APIResource {
  transcriptions: TranscriptionsAPI.Transcriptions = new TranscriptionsAPI.Transcriptions(this._client);
  translations: TranslationsAPI.Translations = new TranslationsAPI.Translations(this._client);

  /**
   * Generate audio from input text
   *
   * @example
   * ```ts
   * const audio = await client.audio.create({
   *   input: 'input',
   *   model: 'cartesia/sonic',
   *   voice: 'laidback woman',
   * });
   *
   * const content = await audio.blob();
   * console.log(content);
   * ```
   */
  create(body: AudioCreateParamsNonStreaming, options?: Core.RequestOptions): APIPromise<Response>;
  create(
    body: AudioCreateParamsStreaming,
    options?: Core.RequestOptions,
  ): APIPromise<Stream<AudioSpeechStreamChunk>>;
  create(
    body: AudioCreateParamsBase,
    options?: Core.RequestOptions,
  ): APIPromise<Stream<AudioSpeechStreamChunk> | Response>;
  create(
    body: AudioCreateParams,
    options?: Core.RequestOptions,
  ): APIPromise<Response> | APIPromise<Stream<AudioSpeechStreamChunk>> {
    return this._client.post('/audio/speech', {
      body,
      ...options,
      headers: { Accept: 'application/octet-stream', ...options?.headers },
      stream: body.stream ?? false,
      __binaryResponse: true,
    }) as APIPromise<Response> | APIPromise<Stream<AudioSpeechStreamChunk>>;
  }
}

export type AudioFile = AudioFile.AudioSpeechStreamEvent | AudioFile.StreamSentinel;

export namespace AudioFile {
  export interface AudioSpeechStreamEvent {
    data: AudioAPI.AudioSpeechStreamChunk;
  }

  export interface StreamSentinel {
    data: '[DONE]';
  }
}

export interface AudioSpeechStreamChunk {
  /**
   * base64 encoded audio stream
   */
  b64: string;

  model: string;

  object: 'audio.tts.chunk';
}

export type AudioCreateParams = AudioCreateParamsNonStreaming | AudioCreateParamsStreaming;

export interface AudioCreateParamsBase {
  /**
   * Input text to generate the audio for
   */
  input: string;

  /**
   * The name of the model to query.
   *
   * [See all of Together AI's chat models](https://docs.together.ai/docs/serverless-models#audio-models)
   */
  model: 'cartesia/sonic' | (string & {});

  /**
   * The voice to use for generating the audio.
   * [View all supported voices here](https://docs.together.ai/docs/text-to-speech#voices-available).
   */
  voice: 'laidback woman' | 'polite man' | 'storyteller lady' | 'friendly sidekick' | (string & {});

  /**
   * Language of input text
   */
  language?:
    | 'en'
    | 'de'
    | 'fr'
    | 'es'
    | 'hi'
    | 'it'
    | 'ja'
    | 'ko'
    | 'nl'
    | 'pl'
    | 'pt'
    | 'ru'
    | 'sv'
    | 'tr'
    | 'zh';

  /**
   * Audio encoding of response
   */
  response_encoding?: 'pcm_f32le' | 'pcm_s16le' | 'pcm_mulaw' | 'pcm_alaw';

  /**
   * The format of audio output
   */
  response_format?: 'mp3' | 'wav' | 'raw';

  /**
   * Sampling rate to use for the output audio
   */
  sample_rate?: number;

  /**
   * If true, output is streamed for several characters at a time instead of waiting
   * for the full response. The stream terminates with `data: [DONE]`. If false,
   * return the encoded audio as octet stream
   */
  stream?: boolean;
}

export namespace AudioCreateParams {
  export type AudioCreateParamsNonStreaming = AudioAPI.AudioCreateParamsNonStreaming;
  export type AudioCreateParamsStreaming = AudioAPI.AudioCreateParamsStreaming;
}

export interface AudioCreateParamsNonStreaming extends AudioCreateParamsBase {
  /**
   * If true, output is streamed for several characters at a time instead of waiting
   * for the full response. The stream terminates with `data: [DONE]`. If false,
   * return the encoded audio as octet stream
   */
  stream?: false;
}

export interface AudioCreateParamsStreaming extends AudioCreateParamsBase {
  /**
   * If true, output is streamed for several characters at a time instead of waiting
   * for the full response. The stream terminates with `data: [DONE]`. If false,
   * return the encoded audio as octet stream
   */
  stream: true;
}

Audio.Transcriptions = Transcriptions;
Audio.Translations = Translations;

export declare namespace Audio {
  export {
    type AudioFile as AudioFile,
    type AudioSpeechStreamChunk as AudioSpeechStreamChunk,
    type AudioCreateParams as AudioCreateParams,
    type AudioCreateParamsNonStreaming as AudioCreateParamsNonStreaming,
    type AudioCreateParamsStreaming as AudioCreateParamsStreaming,
  };

  export {
    Transcriptions as Transcriptions,
    type TranscriptionCreateResponse as TranscriptionCreateResponse,
    type TranscriptionCreateParams as TranscriptionCreateParams,
  };

  export {
    Translations as Translations,
    type TranslationCreateResponse as TranslationCreateResponse,
    type TranslationCreateParams as TranslationCreateParams,
  };
}
