// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as RolesAPI from 'cloudflare/resources/organizations/roles';

export class Roles extends APIResource {
  /**
   * Get information about a specific role for an organization.
   */
  retrieve(
    organizationIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RoleRetrieveResponse> {
    return this._client.get(`/organizations/${organizationIdentifier}/roles/${identifier}`, options);
  }

  /**
   * Get all available roles for an organization.
   */
  organizationRolesListRoles(
    organizationIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RoleOrganizationRolesListRolesResponse> {
    return this._client.get(`/organizations/${organizationIdentifier}/roles`, options);
  }
}

export interface RoleRetrieveResponse {
  errors?: Array<RoleRetrieveResponse.Error>;

  messages?: Array<RoleRetrieveResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace RoleRetrieveResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface RoleOrganizationRolesListRolesResponse {
  errors?: Array<RoleOrganizationRolesListRolesResponse.Error>;

  messages?: Array<RoleOrganizationRolesListRolesResponse.Message>;

  result?: Array<RoleOrganizationRolesListRolesResponse.Result>;

  result_info?: RoleOrganizationRolesListRolesResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace RoleOrganizationRolesListRolesResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    /**
     * Role identifier tag.
     */
    id: string;

    /**
     * Description of role's permissions.
     */
    description: string;

    /**
     * Role Name.
     */
    name: string;

    /**
     * Access permissions for this User.
     */
    permissions: Array<string>;
  }

  export interface ResultInfo {
    /**
     * Total number of results for the requested service
     */
    count?: number;

    /**
     * Current page within paginated list of results
     */
    page?: number;

    /**
     * Number of results per page of results
     */
    per_page?: number;

    /**
     * Total results available without any search parameters
     */
    total_count?: number;
  }
}

export namespace Roles {
  export import RoleRetrieveResponse = RolesAPI.RoleRetrieveResponse;
  export import RoleOrganizationRolesListRolesResponse = RolesAPI.RoleOrganizationRolesListRolesResponse;
}
