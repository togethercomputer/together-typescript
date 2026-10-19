// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export interface WhoamiAPIKey {
  /**
   * The authenticated API key identifier.
   */
  id: string;
}

export interface WhoamiOrgAPIKey {
  api_key: WhoamiAPIKey;

  organization: WhoamiOrganization;

  /**
   * Always `org_api_key`.
   */
  type: 'org_api_key';
}

export interface WhoamiOrganization {
  /**
   * Organization identifier.
   */
  id: string;

  /**
   * Organization display name.
   */
  name: string;
}

export interface WhoamiProject {
  /**
   * Project identifier.
   */
  id: string;

  /**
   * Project display name.
   */
  name: string;

  /**
   * DNS-friendly project identifier. Used with an endpoint slug as
   * `<project_slug>/<endpoint_slug>` to form the `model` value in dedicated endpoint
   * inference calls.
   */
  slug: string;
}

export interface WhoamiProjectAPIKey {
  api_key: WhoamiAPIKey;

  organization: WhoamiOrganization;

  project: WhoamiProject;

  /**
   * Always `project_api_key`.
   */
  type: 'project_api_key';
}

/**
 * The caller. `type` names the variant and which fields are present.
 */
export type WhoamiResponse =
  | WhoamiProjectAPIKey
  | WhoamiOrgAPIKey
  | WhoamiUserJwt
  | WhoamiUserOrgJwt
  | WhoamiUserOrgProjectJwt;

export interface WhoamiUser {
  /**
   * Authenticated user identifier.
   */
  id: string;
}

export interface WhoamiUserJwt {
  /**
   * Always `user_jwt`.
   */
  type: 'user_jwt';

  user: WhoamiUser;
}

export interface WhoamiUserOrgJwt {
  organization: WhoamiOrganization;

  /**
   * Always `user_org_jwt`.
   */
  type: 'user_org_jwt';

  user: WhoamiUser;
}

export interface WhoamiUserOrgProjectJwt {
  organization: WhoamiOrganization;

  project: WhoamiProject;

  /**
   * Always `user_org_project_jwt`.
   */
  type: 'user_org_project_jwt';

  user: WhoamiUser;
}

export declare namespace TopLevel {
  export {
    type WhoamiAPIKey as WhoamiAPIKey,
    type WhoamiOrgAPIKey as WhoamiOrgAPIKey,
    type WhoamiOrganization as WhoamiOrganization,
    type WhoamiProject as WhoamiProject,
    type WhoamiProjectAPIKey as WhoamiProjectAPIKey,
    type WhoamiResponse as WhoamiResponse,
    type WhoamiUser as WhoamiUser,
    type WhoamiUserJwt as WhoamiUserJwt,
    type WhoamiUserOrgJwt as WhoamiUserOrgJwt,
    type WhoamiUserOrgProjectJwt as WhoamiUserOrgProjectJwt,
  };
}
