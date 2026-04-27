// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Sessions extends APIResource {
  /**
   * Lists all your currently active sessions.
   *
   * @example
   * ```ts
   * const sessionListResponse =
   *   await client.codeInterpreter.sessions.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<SessionListResponse> {
    return this._client.get('/tci/sessions', options);
  }
}

export interface SessionListResponse {
  data?: SessionListResponse.Data;

  errors?: Array<string | { [key: string]: unknown }>;
}

export namespace SessionListResponse {
  export interface Data {
    sessions: Array<Data.Session>;
  }

  export namespace Data {
    export interface Session {
      /**
       * Session Identifier. Used to make follow-up calls.
       */
      id: string;

      execute_count: number;

      expires_at: string;

      last_execute_at: string;

      started_at: string;
    }
  }
}

export declare namespace Sessions {
  export { type SessionListResponse as SessionListResponse };
}
