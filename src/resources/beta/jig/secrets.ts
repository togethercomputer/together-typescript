// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Secrets extends APIResource {
  /**
   * Create a new secret to store sensitive configuration values
   */
  create(body: SecretCreateParams, options?: RequestOptions): APIPromise<Secret> {
    return this._client.post('/deployments/secrets', { body, ...options });
  }

  /**
   * Retrieve details of a specific secret by its ID or name
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Secret> {
    return this._client.get(path`/deployments/secrets/${id}`, options);
  }

  /**
   * Update an existing secret's value or metadata
   */
  update(id: string, body: SecretUpdateParams, options?: RequestOptions): APIPromise<Secret> {
    return this._client.patch(path`/deployments/secrets/${id}`, { body, ...options });
  }

  /**
   * Retrieve all secrets in your project
   */
  list(options?: RequestOptions): APIPromise<SecretListResponse> {
    return this._client.get('/deployments/secrets', options);
  }

  /**
   * Delete an existing secret
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
   * CreatedBy is the identifier of the user who created this secret
   */
  created_by?: string;

  /**
   * Description is a human-readable description of the secret's purpose
   */
  description?: string;

  /**
   * LastUpdatedBy is the identifier of the user who last updated this secret
   */
  last_updated_by?: string;

  /**
   * Name is the name/key of the secret
   */
  name?: string;

  /**
   * Object is the type identifier for this response (always "secret")
   */
  object?: string;

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
   * Object is the type identifier for this response (always "list")
   */
  object?: string;
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
   * tokens). This value will be encrypted at rest
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
   * Value is the new sensitive data to store securely. Updating this will replace
   * the existing secret value
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
