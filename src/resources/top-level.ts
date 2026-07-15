// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export interface WhoamiResponse {
  /**
   * The ID of the API key that authenticated the request.
   */
  api_key_id: string;

  /**
   * The ID of the organization that owns the project.
   */
  organization_id: string;

  /**
   * Human-readable name of the organization.
   */
  organization_name: string;

  /**
   * The ID of the project the API key is scoped to.
   */
  project_id: string;

  /**
   * Human-readable name of the project.
   */
  project_name: string;

  /**
   * DNS-friendly project identifier. Used with an endpoint slug as
   * `<project_slug>/<endpoint_slug>` to form the `model` value in dedicated endpoint
   * inference calls.
   */
  project_slug: string;

  /**
   * The ID of the authenticated user, if available.
   */
  user_id?: string;
}

export declare namespace TopLevel {
  export { type WhoamiResponse as WhoamiResponse };
}
