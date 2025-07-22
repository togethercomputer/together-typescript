// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Together } from '../client';

export abstract class APIResource {
  protected _client: Together;

  constructor(client: Together) {
    this._client = client;
  }
}
