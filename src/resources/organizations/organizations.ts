// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as OrganizationsAPI from 'cloudflare/resources/organizations/organizations';
import * as InvitesAPI from 'cloudflare/resources/organizations/invites';
import * as MembersAPI from 'cloudflare/resources/organizations/members';
import * as RolesAPI from 'cloudflare/resources/organizations/roles';
import * as RailgunsAPI from 'cloudflare/resources/organizations/railguns/railguns';

export class Organizations extends APIResource {
  invites: InvitesAPI.Invites = new InvitesAPI.Invites(this._client);
  members: MembersAPI.Members = new MembersAPI.Members(this._client);
  railguns: RailgunsAPI.Railguns = new RailgunsAPI.Railguns(this._client);
  roles: RolesAPI.Roles = new RolesAPI.Roles(this._client);

  /**
   * Get information about a specific organization that you are a member of.
   */
  retrieve(identifier: string, options?: Core.RequestOptions): Core.APIPromise<OrganizationRetrieveResponse> {
    return this._client.get(`/organizations/${identifier}`, options);
  }

  /**
   * Update an existing Organization.
   */
  update(
    identifier: string,
    body: OrganizationUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrganizationUpdateResponse> {
    return this._client.patch(`/organizations/${identifier}`, { body, ...options });
  }
}

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

export interface OrganizationUpdateResponse {
  errors?: Array<OrganizationUpdateResponse.Error>;

  messages?: Array<OrganizationUpdateResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace OrganizationUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface OrganizationUpdateParams {
  /**
   * Organization name.
   */
  name?: string;
}

export namespace Organizations {
  export import OrganizationRetrieveResponse = OrganizationsAPI.OrganizationRetrieveResponse;
  export import OrganizationUpdateResponse = OrganizationsAPI.OrganizationUpdateResponse;
  export import OrganizationUpdateParams = OrganizationsAPI.OrganizationUpdateParams;
  export import Invites = InvitesAPI.Invites;
  export import InviteRetrieveResponse = InvitesAPI.InviteRetrieveResponse;
  export import InviteUpdateResponse = InvitesAPI.InviteUpdateResponse;
  export import InviteDeleteResponse = InvitesAPI.InviteDeleteResponse;
  export import InviteOrganizationInvitesCreateInvitationResponse = InvitesAPI.InviteOrganizationInvitesCreateInvitationResponse;
  export import InviteOrganizationInvitesListInvitationsResponse = InvitesAPI.InviteOrganizationInvitesListInvitationsResponse;
  export import InviteUpdateParams = InvitesAPI.InviteUpdateParams;
  export import InviteOrganizationInvitesCreateInvitationParams = InvitesAPI.InviteOrganizationInvitesCreateInvitationParams;
  export import Members = MembersAPI.Members;
  export import MemberRetrieveResponse = MembersAPI.MemberRetrieveResponse;
  export import MemberUpdateResponse = MembersAPI.MemberUpdateResponse;
  export import MemberDeleteResponse = MembersAPI.MemberDeleteResponse;
  export import MemberOrganizationMembersListMembersResponse = MembersAPI.MemberOrganizationMembersListMembersResponse;
  export import MemberUpdateParams = MembersAPI.MemberUpdateParams;
  export import Railguns = RailgunsAPI.Railguns;
  export import RailgunRetrieveResponse = RailgunsAPI.RailgunRetrieveResponse;
  export import RailgunUpdateResponse = RailgunsAPI.RailgunUpdateResponse;
  export import RailgunDeleteResponse = RailgunsAPI.RailgunDeleteResponse;
  export import RailgunOrganizationRailgunCreateRailgunResponse = RailgunsAPI.RailgunOrganizationRailgunCreateRailgunResponse;
  export import RailgunOrganizationRailgunListRailgunsResponse = RailgunsAPI.RailgunOrganizationRailgunListRailgunsResponse;
  export import RailgunOrganizationRailgunListRailgunsResponsesPage = RailgunsAPI.RailgunOrganizationRailgunListRailgunsResponsesPage;
  export import RailgunUpdateParams = RailgunsAPI.RailgunUpdateParams;
  export import RailgunOrganizationRailgunCreateRailgunParams = RailgunsAPI.RailgunOrganizationRailgunCreateRailgunParams;
  export import RailgunOrganizationRailgunListRailgunsParams = RailgunsAPI.RailgunOrganizationRailgunListRailgunsParams;
  export import Roles = RolesAPI.Roles;
  export import RoleRetrieveResponse = RolesAPI.RoleRetrieveResponse;
  export import RoleOrganizationRolesListRolesResponse = RolesAPI.RoleOrganizationRolesListRolesResponse;
}
