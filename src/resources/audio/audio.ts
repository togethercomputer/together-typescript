// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AudioAPI from './audio';
import * as SpeechAPI from './speech';
import {
  Speech,
  SpeechCreateParams,
  SpeechCreateParamsNonStreaming,
  SpeechCreateParamsStreaming,
} from './speech';
import * as TranscriptionsAPI from './transcriptions';
import { TranscriptionCreateParams, TranscriptionCreateResponse, Transcriptions } from './transcriptions';
import * as TranslationsAPI from './translations';
import { TranslationCreateParams, TranslationCreateResponse, Translations } from './translations';
import * as VoicesAPI from './voices';
import { VoiceListResponse, Voices } from './voices';

export class Audio extends APIResource {
  speech: SpeechAPI.Speech = new SpeechAPI.Speech(this._client);
  voices: VoicesAPI.Voices = new VoicesAPI.Voices(this._client);
  transcriptions: TranscriptionsAPI.Transcriptions = new TranscriptionsAPI.Transcriptions(this._client);
  translations: TranslationsAPI.Translations = new TranslationsAPI.Translations(this._client);
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

Audio.Speech = Speech;
Audio.Voices = Voices;
Audio.Transcriptions = Transcriptions;
Audio.Translations = Translations;

export declare namespace Audio {
  export { type AudioFile as AudioFile, type AudioSpeechStreamChunk as AudioSpeechStreamChunk };

  export {
    Speech as Speech,
    type SpeechCreateParams as SpeechCreateParams,
    type SpeechCreateParamsNonStreaming as SpeechCreateParamsNonStreaming,
    type SpeechCreateParamsStreaming as SpeechCreateParamsStreaming,
  };

  export { Voices as Voices, type VoiceListResponse as VoiceListResponse };

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
