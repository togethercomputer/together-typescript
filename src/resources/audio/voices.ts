// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Voices extends APIResource {
  /**
   * Fetch available voices for each model
   *
   * @example
   * ```ts
   * const voices = await client.audio.voices.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<VoiceListResponse> {
    return this._client.get('/voices', options);
  }
}

/**
 * Response containing a list of models and their available voices.
 */
export interface VoiceListResponse {
  data: Array<VoiceListResponse.Data>;
}

export namespace VoiceListResponse {
  /**
   * Represents a model with its available voices.
   */
  export interface Data {
    model: string;

    voices: Array<Data.Voice>;
  }

  export namespace Data {
    export interface Voice {
      id: string;

      name: string;
    }
  }
}

export declare namespace Voices {
  export { type VoiceListResponse as VoiceListResponse };
}
