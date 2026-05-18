// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Secrets extends APIResource {
  /**
   * Create a new secret to store sensitive configuration values
   *
   * @example
   * ```ts
   * const secret = await client.beta.jig.secrets.create({
   *   name: 'x',
   *   value: 'x',
   * });
   * ```
   */
  create(body: SecretCreateParams, options?: RequestOptions): APIPromise<Secret> {
    return this._client.post('/deployments/secrets', { body, ...options });
  }

  /**
   * Retrieve details of a specific secret by its ID or name
   *
   * @example
   * ```ts
   * const secret = await client.beta.jig.secrets.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Secret> {
    return this._client.get(path`/deployments/secrets/${id}`, options);
  }

  /**
   * Update an existing secret's value or metadata
   *
   * @example
   * ```ts
   * const secret = await client.beta.jig.secrets.update('id');
   * ```
   */
  update(id: string, body: SecretUpdateParams, options?: RequestOptions): APIPromise<Secret> {
    return this._client.patch(path`/deployments/secrets/${id}`, { body, ...options });
  }

  /**
   * Retrieve all secrets in your project
   *
   * @example
   * ```ts
   * const secrets = await client.beta.jig.secrets.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<SecretListResponse> {
    return this._client.get('/deployments/secrets', options);
  }

  /**
   * Delete an existing secret
   *
   * @example
   * ```ts
   * const secret = await client.beta.jig.secrets.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.delete(path`/deployments/secrets/${id}`, options);
  }
}

export interface Secret {
  /**
   * ID is the unique identifier for this secret
   */
  id?: string;

  /**
   * CreatedAt is the ISO8601 timestamp when this secret was created
   */
  created_at?: string;

  /**
   * CreatedBy is the identifier of who created this secret.
   */
  created_by?: string;

  /**
   * Description is a human-readable description of the secret's purpose
   */
  description?: string;

  /**
   * LastUpdatedBy is the identifier of who last updated this secret.
   */
  last_updated_by?: string;

  /**
   * Name is the name/key of the secret
   */
  name?: string;

  /**
   * The object type, which is always `secret`.
   */
  object?: 'secret';

  /**
   * UpdatedAt is the ISO8601 timestamp when this secret was last updated
   */
  updated_at?: string;
}

export interface SecretListResponse {
  /**
   * Data is the array of secret items
   */
  data?: Array<Secret>;

  /**
   * The object type, which is always `list`.
   */
  object?: 'list';
}

export type SecretDeleteResponse = unknown;

export interface SecretCreateParams {
  /**
   * Name is the unique identifier for the secret. Can contain alphanumeric
   * characters, underscores, hyphens, forward slashes, and periods (1-100
   * characters)
   */
  name: string;

  /**
   * Value is the sensitive data to store securely (e.g., API keys, passwords,
   * tokens). Encrypted at rest.
   */
  value: string;

  /**
   * Description is an optional human-readable description of the secret's purpose
   * (max 500 characters)
   */
  description?: string;

  /**
   * ProjectID is ignored - the project is automatically determined from your
   * authentication
   */
  project_id?: string;
}

export interface SecretUpdateParams {
  /**
   * Description is an optional human-readable description of the secret's purpose
   * (max 500 characters)
   */
  description?: string;

  /**
   * Name is the new unique identifier for the secret. Can contain alphanumeric
   * characters, underscores, hyphens, forward slashes, and periods (1-100
   * characters)
   */
  name?: string;

  /**
   * ProjectID is ignored - the project is automatically determined from your
   * authentication
   */
  project_id?: string;

  /**
   * Value is the new sensitive data to store securely. Updating this replaces the
   * existing secret value.
   */
  value?: string;
}

export declare namespace Secrets {
  export {
    type Secret as Secret,
    type SecretListResponse as SecretListResponse,
    type SecretDeleteResponse as SecretDeleteResponse,
    type SecretCreateParams as SecretCreateParams,
    type SecretUpdateParams as SecretUpdateParams,
  };
}
