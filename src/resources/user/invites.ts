// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as InvitesAPI from 'cloudflare/resources/user/invites';

export class Invites extends APIResource {
  /**
   * Gets the details of an invitation.
   */
  retrieve(identifier: string, options?: Core.RequestOptions): Core.APIPromise<InviteRetrieveResponse> {
    return this._client.get(`/user/invites/${identifier}`, options);
  }

  /**
   * Responds to an invitation.
   */
  update(
    identifier: string,
    body: InviteUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InviteUpdateResponse> {
    return this._client.patch(`/user/invites/${identifier}`, { body, ...options });
  }

  /**
   * Lists all invitations associated with my user.
   */
  userSInvitesListInvitations(
    options?: Core.RequestOptions,
  ): Core.APIPromise<InviteUserSInvitesListInvitationsResponse> {
    return this._client.get('/user/invites', options);
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

export interface InviteUserSInvitesListInvitationsResponse {
  errors?: Array<InviteUserSInvitesListInvitationsResponse.Error>;

  messages?: Array<InviteUserSInvitesListInvitationsResponse.Message>;

  result?: Array<InviteUserSInvitesListInvitationsResponse.Result>;

  result_info?: InviteUserSInvitesListInvitationsResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace InviteUserSInvitesListInvitationsResponse {
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
    status?: 'pending' | 'accepted' | 'rejected' | 'expired';
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
   * Status of your response to the invitation (rejected or accepted).
   */
  status: 'accepted' | 'rejected';
}

export namespace Invites {
  export import InviteRetrieveResponse = InvitesAPI.InviteRetrieveResponse;
  export import InviteUpdateResponse = InvitesAPI.InviteUpdateResponse;
  export import InviteUserSInvitesListInvitationsResponse = InvitesAPI.InviteUserSInvitesListInvitationsResponse;
  export import InviteUpdateParams = InvitesAPI.InviteUpdateParams;
}
