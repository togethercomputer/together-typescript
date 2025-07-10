// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Translations extends APIResource {
  /**
   * Translates audio into English
   *
   * @example
   * ```ts
   * const translation = await client.audio.translations.create({
   *   file: fs.createReadStream('path/to/file'),
   * });
   * ```
   */
  create(
    body: TranslationCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TranslationCreateResponse> {
    return this._client.post('/audio/translations', Core.multipartFormRequestOptions({ body, ...options }));
  }
}

export type TranslationCreateResponse =
  | TranslationCreateResponse.AudioTranslationJsonResponse
  | TranslationCreateResponse.AudioTranslationVerboseJsonResponse;

export namespace TranslationCreateResponse {
  export interface AudioTranslationJsonResponse {
    /**
     * The translated text
     */
    text: string;
  }

  export interface AudioTranslationVerboseJsonResponse {
    /**
     * The duration of the audio in seconds
     */
    duration: number;

    /**
     * The target language of the translation
     */
    language: string;

    /**
     * Array of translation segments
     */
    segments: Array<AudioTranslationVerboseJsonResponse.Segment>;

    /**
     * The task performed
     */
    task: 'transcribe' | 'translate';

    /**
     * The translated text
     */
    text: string;

    /**
     * Array of translation words (only when timestamp_granularities includes 'word')
     */
    words?: Array<AudioTranslationVerboseJsonResponse.Word>;
  }

  export namespace AudioTranslationVerboseJsonResponse {
    export interface Segment {
      /**
       * Unique identifier for the segment
       */
      id: number;

      /**
       * End time of the segment in seconds
       */
      end: number;

      /**
       * Start time of the segment in seconds
       */
      start: number;

      /**
       * The text content of the segment
       */
      text: string;
    }

    export interface Word {
      /**
       * End time of the word in seconds
       */
      end: number;

      /**
       * Start time of the word in seconds
       */
      start: number;

      /**
       * The word
       */
      word: string;
    }
  }
}

export interface TranslationCreateParams {
  /**
   * Audio file to translate
   */
  file: Core.Uploadable;

  /**
   * Target output language. Optional ISO 639-1 language code. If omitted, language
   * is set to English.
   */
  language?: string;

  /**
   * Model to use for translation
   */
  model?: 'openai/whisper-large-v3';

  /**
   * Optional text to bias decoding.
   */
  prompt?: string;

  /**
   * The format of the response
   */
  response_format?: 'json' | 'verbose_json';

  /**
   * Sampling temperature between 0.0 and 1.0
   */
  temperature?: number;

  /**
   * Controls level of timestamp detail in verbose_json. Only used when
   * response_format is verbose_json.
   */
  timestamp_granularities?: 'segment' | 'word';
}

export declare namespace Translations {
  export {
    type TranslationCreateResponse as TranslationCreateResponse,
    type TranslationCreateParams as TranslationCreateParams,
  };
}
