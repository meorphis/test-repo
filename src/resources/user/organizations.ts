// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as OrganizationsAPI from 'cloudflare/resources/user/organizations';
import { Page } from 'cloudflare/pagination';

export class Organizations extends APIResource {
  /**
   * Gets a specific organization the user is associated with.
   */
  retrieve(identifier: string, options?: Core.RequestOptions): Core.APIPromise<OrganizationRetrieveResponse> {
    return this._client.get(`/user/organizations/${identifier}`, options);
  }

  /**
   * Removes association to an organization.
   */
  delete(identifier: string, options?: Core.RequestOptions): Core.APIPromise<OrganizationDeleteResponse> {
    return this._client.delete(`/user/organizations/${identifier}`, options);
  }

  /**
   * Lists organizations the user is associated with.
   */
  userSOrganizationsListOrganizations(
    query?: OrganizationUserSOrganizationsListOrganizationsParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    OrganizationUserSOrganizationsListOrganizationsResponsesPage,
    OrganizationUserSOrganizationsListOrganizationsResponse
  >;
  userSOrganizationsListOrganizations(
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    OrganizationUserSOrganizationsListOrganizationsResponsesPage,
    OrganizationUserSOrganizationsListOrganizationsResponse
  >;
  userSOrganizationsListOrganizations(
    query: OrganizationUserSOrganizationsListOrganizationsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    OrganizationUserSOrganizationsListOrganizationsResponsesPage,
    OrganizationUserSOrganizationsListOrganizationsResponse
  > {
    if (isRequestOptions(query)) {
      return this.userSOrganizationsListOrganizations({}, query);
    }
    return this._client.getAPIList(
      '/user/organizations',
      OrganizationUserSOrganizationsListOrganizationsResponsesPage,
      { query, ...options },
    );
  }
}

export class OrganizationUserSOrganizationsListOrganizationsResponsesPage extends Page<OrganizationUserSOrganizationsListOrganizationsResponse> {}

export interface OrganizationRetrieveResponse {
  errors?: Array<OrganizationRetrieveResponse.Error>;

  messages?: Array<OrganizationRetrieveResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace OrganizationRetrieveResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface OrganizationDeleteResponse {
  /**
   * Identifier
   */
  id?: string;
}

export interface OrganizationUserSOrganizationsListOrganizationsResponse {
  /**
   * Identifier
   */
  id?: string;

  /**
   * Organization name.
   */
  name?: string;

  /**
   * Access permissions for this User.
   */
  permissions?: Array<string>;

  /**
   * List of roles that a user has within an organization.
   */
  roles?: Array<string>;

  /**
   * Whether the user is a member of the organization or has an inivitation pending.
   */
  status?: 'member' | 'invited';
}

export interface OrganizationUserSOrganizationsListOrganizationsParams {
  /**
   * Direction to order organizations.
   */
  direction?: 'asc' | 'desc';

  /**
   * Whether to match all search requirements or at least one (any).
   */
  match?: 'any' | 'all';

  /**
   * Organization name.
   */
  name?: string;

  /**
   * Field to order organizations by.
   */
  order?: 'id' | 'name' | 'status';

  /**
   * Page number of paginated results.
   */
  page?: number;

  /**
   * Number of organizations per page.
   */
  per_page?: number;

  /**
   * Whether the user is a member of the organization or has an inivitation pending.
   */
  status?: 'member' | 'invited';
}

export namespace Organizations {
  export import OrganizationRetrieveResponse = OrganizationsAPI.OrganizationRetrieveResponse;
  export import OrganizationDeleteResponse = OrganizationsAPI.OrganizationDeleteResponse;
  export import OrganizationUserSOrganizationsListOrganizationsResponse = OrganizationsAPI.OrganizationUserSOrganizationsListOrganizationsResponse;
  export import OrganizationUserSOrganizationsListOrganizationsResponsesPage = OrganizationsAPI.OrganizationUserSOrganizationsListOrganizationsResponsesPage;
  export import OrganizationUserSOrganizationsListOrganizationsParams = OrganizationsAPI.OrganizationUserSOrganizationsListOrganizationsParams;
}
