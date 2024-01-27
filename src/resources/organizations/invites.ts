// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as InvitesAPI from 'cloudflare/resources/organizations/invites';

export class Invites extends APIResource {
  /**
   * Get the details of an invitation.
   */
  retrieve(
    organizationIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InviteRetrieveResponse> {
    return this._client.get(`/organizations/${organizationIdentifier}/invites/${identifier}`, options);
  }

  /**
   * Change the Roles of a Pending Invite.
   */
  update(
    organizationIdentifier: string,
    identifier: string,
    body: InviteUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InviteUpdateResponse> {
    return this._client.patch(`/organizations/${organizationIdentifier}/invites/${identifier}`, {
      body,
      ...options,
    });
  }

  /**
   * Cancel an existing invitation.
   */
  delete(
    organizationIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InviteDeleteResponse> {
    return this._client.delete(`/organizations/${organizationIdentifier}/invites/${identifier}`, options);
  }

  /**
   * Invite a User to become a Member of an Organization.
   */
  organizationInvitesCreateInvitation(
    organizationIdentifier: string,
    body: InviteOrganizationInvitesCreateInvitationParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InviteOrganizationInvitesCreateInvitationResponse> {
    return this._client.post(`/organizations/${organizationIdentifier}/invites`, { body, ...options });
  }

  /**
   * List all invitations associated with an organization.
   */
  organizationInvitesListInvitations(
    organizationIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InviteOrganizationInvitesListInvitationsResponse> {
    return this._client.get(`/organizations/${organizationIdentifier}/invites`, options);
  }
}

export interface InviteRetrieveResponse {
  errors?: Array<InviteRetrieveResponse.Error>;

  messages?: Array<InviteRetrieveResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace InviteRetrieveResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface InviteUpdateResponse {
  errors?: Array<InviteUpdateResponse.Error>;

  messages?: Array<InviteUpdateResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace InviteUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface InviteDeleteResponse {
  /**
   * Invite identifier tag.
   */
  id?: string;
}

export interface InviteOrganizationInvitesCreateInvitationResponse {
  errors?: Array<InviteOrganizationInvitesCreateInvitationResponse.Error>;

  messages?: Array<InviteOrganizationInvitesCreateInvitationResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace InviteOrganizationInvitesCreateInvitationResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface InviteOrganizationInvitesListInvitationsResponse {
  errors?: Array<InviteOrganizationInvitesListInvitationsResponse.Error>;

  messages?: Array<InviteOrganizationInvitesListInvitationsResponse.Message>;

  result?: Array<InviteOrganizationInvitesListInvitationsResponse.Result>;

  result_info?: InviteOrganizationInvitesListInvitationsResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace InviteOrganizationInvitesListInvitationsResponse {
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
     * Invite identifier tag.
     */
    id?: string;

    /**
     * When the invite is no longer active.
     */
    expires_on?: string;

    /**
     * The email address of the user who created the invite.
     */
    invited_by?: string;

    /**
     * Email address of the user to add to the organization.
     */
    invited_member_email?: string;

    /**
     * ID of the user to add to the organization.
     */
    invited_member_id?: string | null;

    /**
     * When the invite was sent.
     */
    invited_on?: string;

    /**
     * ID of the organization the user will be added to.
     */
    organization_id?: string;

    /**
     * Current status of two-factor enforcement on the organization.
     */
    organization_is_enforcing_twofactor?: boolean;

    /**
     * Organization name.
     */
    organization_name?: string;

    /**
     * Roles to be assigned to this user.
     */
    roles?: Array<Result.Role>;

    /**
     * Current status of the invitation.
     */
    status?: 'pending' | 'accepted' | 'rejected' | 'canceled' | 'left' | 'expired';
  }

  export namespace Result {
    export interface Role {
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

export interface InviteUpdateParams {
  /**
   * Array of Roles associated with the invited user.
   */
  roles?: Array<string>;
}

export interface InviteOrganizationInvitesCreateInvitationParams {
  /**
   * Email address of the user to add to the organization.
   */
  invited_member_email: string;

  /**
   * Array of Roles associated with the invited user.
   */
  roles: Array<InviteOrganizationInvitesCreateInvitationParams.Role>;

  /**
   * When present and set to true, allows for the invited user to be automatically
   * accepted to the organization. No invitation is sent.
   */
  auto_accept?: boolean;
}

export namespace InviteOrganizationInvitesCreateInvitationParams {
  export interface Role {
    /**
     * Role identifier tag.
     */
    id: string;
  }
}

export namespace Invites {
  export import InviteRetrieveResponse = InvitesAPI.InviteRetrieveResponse;
  export import InviteUpdateResponse = InvitesAPI.InviteUpdateResponse;
  export import InviteDeleteResponse = InvitesAPI.InviteDeleteResponse;
  export import InviteOrganizationInvitesCreateInvitationResponse = InvitesAPI.InviteOrganizationInvitesCreateInvitationResponse;
  export import InviteOrganizationInvitesListInvitationsResponse = InvitesAPI.InviteOrganizationInvitesListInvitationsResponse;
  export import InviteUpdateParams = InvitesAPI.InviteUpdateParams;
  export import InviteOrganizationInvitesCreateInvitationParams = InvitesAPI.InviteOrganizationInvitesCreateInvitationParams;
}
