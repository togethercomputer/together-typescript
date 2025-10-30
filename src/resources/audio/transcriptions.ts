// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { type Uploadable } from '../../core/uploads';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';

export class Transcriptions extends APIResource {
  /**
   * Transcribes audio into text
   *
   * @example
   * ```ts
   * const transcription =
   *   await client.audio.transcriptions.create({
   *     file: fs.createReadStream('path/to/file'),
   *   });
   * ```
   */
  create(body: TranscriptionCreateParams, options?: RequestOptions): APIPromise<TranscriptionCreateResponse> {
    return this._client.post(
      '/audio/transcriptions',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

export type TranscriptionCreateResponse =
  | TranscriptionCreateResponse.AudioTranscriptionJsonResponse
  | TranscriptionCreateResponse.AudioTranscriptionVerboseJsonResponse;

export namespace TranscriptionCreateResponse {
  export interface AudioTranscriptionJsonResponse {
    /**
     * The transcribed text
     */
    text: string;
  }

  export interface AudioTranscriptionVerboseJsonResponse {
    /**
     * The duration of the audio in seconds
     */
    duration: number;

    /**
     * The language of the audio
     */
    language: string;

    /**
     * Array of transcription segments
     */
    segments: Array<AudioTranscriptionVerboseJsonResponse.Segment>;

    /**
     * The task performed
     */
    task: 'transcribe' | 'translate';

    /**
     * The transcribed text
     */
    text: string;

    /**
     * Array of transcription speaker segments (only when diarize is enabled)
     */
    speaker_segments?: Array<AudioTranscriptionVerboseJsonResponse.SpeakerSegment>;

    /**
     * Array of transcription words (only when timestamp_granularities includes 'word')
     */
    words?: Array<AudioTranscriptionVerboseJsonResponse.Word>;
  }

  export namespace AudioTranscriptionVerboseJsonResponse {
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

    export interface SpeakerSegment {
      /**
       * Unique identifier for the speaker segment
       */
      id: number;

      /**
       * End time of the speaker segment in seconds
       */
      end: number;

      /**
       * The speaker identifier
       */
      speaker_id: string;

      /**
       * Start time of the speaker segment in seconds
       */
      start: number;

      /**
       * The full text spoken by this speaker in this segment
       */
      text: string;

      /**
       * Array of words spoken by this speaker in this segment
       */
      words: Array<SpeakerSegment.Word>;
    }

    export namespace SpeakerSegment {
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

export interface TranscriptionCreateParams {
  /**
   * Audio file to transcribe
   */
  file: Uploadable;

  /**
   * Whether to enable speaker diarization. When enabled, you will get the speaker id
   * for each word in the transcription. In the response, in the words array, you
   * will get the speaker id for each word. In addition, we also return the
   * speaker_segments array which contains the speaker id for each speaker segment
   * along with the start and end time of the segment along with all the words in the
   * segment.
   *
   * For eg - ... "speaker_segments": [ "speaker_id": "SPEAKER_00", "start": 0,
   * "end": 30.02, "words": [ { "id": 0, "word": "Tijana", "start": 0, "end": 11.475,
   * "speaker_id": "SPEAKER_00" }, ...
   */
  diarize?: boolean;

  /**
   * Optional ISO 639-1 language code. If `auto` is provided, language is
   * auto-detected.
   */
  language?: string;

  /**
   * Model to use for transcription
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

export declare namespace Transcriptions {
  export {
    type TranscriptionCreateResponse as TranscriptionCreateResponse,
    type TranscriptionCreateParams as TranscriptionCreateParams,
  };
}
