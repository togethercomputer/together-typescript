// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SpeechAPI from './speech';
import * as AudioAPI from './audio';
import { APIPromise } from '../../core/api-promise';
import { Stream } from '../../core/streaming';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Speech extends APIResource {
  /**
   * Generate audio from input text
   *
   * @example
   * ```ts
   * const speech = await client.audio.speech.create({
   *   input: 'input',
   *   model: 'canopylabs/orpheus-3b-0.1-ft',
   *   voice: 'voice',
   * });
   *
   * const content = await speech.blob();
   * console.log(content);
   * ```
   */
  create(body: SpeechCreateParamsNonStreaming, options?: RequestOptions): APIPromise<Response>;
  create(
    body: SpeechCreateParamsStreaming,
    options?: RequestOptions,
  ): APIPromise<Stream<AudioAPI.AudioSpeechStreamChunk>>;
  create(
    body: SpeechCreateParamsBase,
    options?: RequestOptions,
  ): APIPromise<Stream<AudioAPI.AudioSpeechStreamChunk> | Response>;
  create(
    body: SpeechCreateParams,
    options?: RequestOptions,
  ): APIPromise<Response> | APIPromise<Stream<AudioAPI.AudioSpeechStreamChunk>> {
    return this._client.post('/audio/speech', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'application/octet-stream' }, options?.headers]),
      stream: body.stream ?? false,
      __binaryResponse: true,
    }) as APIPromise<Response> | APIPromise<Stream<AudioAPI.AudioSpeechStreamChunk>>;
  }
}

export type SpeechCreateParams = SpeechCreateParamsNonStreaming | SpeechCreateParamsStreaming;

export interface SpeechCreateParamsBase {
  /**
   * Input text to generate the audio for
   */
  input: string;

  /**
   * The name of the model to query.
   *
   * [See all of Together AI's chat models](https://docs.together.ai/docs/serverless-models#audio-models)
   * The current supported tts models are: - cartesia/sonic - hexgrad/Kokoro-82M -
   * canopylabs/orpheus-3b-0.1-ft
   */
  model: 'cartesia/sonic' | 'hexgrad/Kokoro-82M' | 'canopylabs/orpheus-3b-0.1-ft' | (string & {});

  /**
   * The voice to use for generating the audio. The voices supported are different
   * for each model. For eg - for canopylabs/orpheus-3b-0.1-ft, one of the voices
   * supported is tara, for hexgrad/Kokoro-82M, one of the voices supported is
   * af_alloy and for cartesia/sonic, one of the voices supported is "friendly
   * sidekick".
   *
   * You can view the voices supported for each model using the /v1/voices endpoint
   * sending the model name as the query parameter.
   * [View all supported voices here](https://docs.together.ai/docs/text-to-speech#voices-available).
   */
  voice: string;

  /**
   * Language of input text.
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
   * The format of audio output. Supported formats are mp3, wav, raw if streaming is
   * false. If streaming is true, the only supported format is raw.
   */
  response_format?: 'mp3' | 'wav' | 'raw';

  /**
   * Sampling rate to use for the output audio. The default sampling rate for
   * canopylabs/orpheus-3b-0.1-ft and hexgrad/Kokoro-82M is 24000 and for
   * cartesia/sonic is 44100.
   */
  sample_rate?: number;

  /**
   * If true, output is streamed for several characters at a time instead of waiting
   * for the full response. The stream terminates with `data: [DONE]`. If false,
   * return the encoded audio as octet stream
   */
  stream?: boolean;
}

export namespace SpeechCreateParams {
  export type SpeechCreateParamsNonStreaming = SpeechAPI.SpeechCreateParamsNonStreaming;
  export type SpeechCreateParamsStreaming = SpeechAPI.SpeechCreateParamsStreaming;
}

export interface SpeechCreateParamsNonStreaming extends SpeechCreateParamsBase {
  /**
   * If true, output is streamed for several characters at a time instead of waiting
   * for the full response. The stream terminates with `data: [DONE]`. If false,
   * return the encoded audio as octet stream
   */
  stream?: false;
}

export interface SpeechCreateParamsStreaming extends SpeechCreateParamsBase {
  /**
   * If true, output is streamed for several characters at a time instead of waiting
   * for the full response. The stream terminates with `data: [DONE]`. If false,
   * return the encoded audio as octet stream
   */
  stream: true;
}

export declare namespace Speech {
  export {
    type SpeechCreateParams as SpeechCreateParams,
    type SpeechCreateParamsNonStreaming as SpeechCreateParamsNonStreaming,
    type SpeechCreateParamsStreaming as SpeechCreateParamsStreaming,
  };
}
