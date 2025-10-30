// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { type Uploadable } from '../../core/uploads';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';

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
  create(body: TranslationCreateParams, options?: RequestOptions): APIPromise<TranslationCreateResponse> {
    return this._client.post(
      '/audio/translations',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
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

      /**
       * The speaker id for the word (only when diarize is enabled)
       */
      speaker_id?: string;
    }
  }
}

export interface TranslationCreateParams {
  /**
   * Audio file to translate
   */
  file: Uploadable;

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
   * response_format is verbose_json. Can be a single granularity or an array to get
   * multiple levels.
   */
  timestamp_granularities?: 'segment' | 'word' | Array<'segment' | 'word'>;
}

export declare namespace Translations {
  export {
    type TranslationCreateResponse as TranslationCreateResponse,
    type TranslationCreateParams as TranslationCreateParams,
  };
}
