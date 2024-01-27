// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as RevokeUsersAPI from 'cloudflare/resources/accounts/access/organizations/revoke-users';

export class RevokeUsers extends APIResource {
  /**
   * Revokes a user's access across all applications.
   */
  zeroTrustOrganizationRevokeAllAccessTokensForAUser(
    identifier: string,
    body: RevokeUserZeroTrustOrganizationRevokeAllAccessTokensForAUserParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RevokeUserZeroTrustOrganizationRevokeAllAccessTokensForAUserResponse> {
    return this._client.post(`/accounts/${identifier}/access/organizations/revoke_user`, {
      body,
      ...options,
    });
  }
}

export interface RevokeUserZeroTrustOrganizationRevokeAllAccessTokensForAUserResponse {
  result?: true | false;

  success?: true | false;
}

export interface RevokeUserZeroTrustOrganizationRevokeAllAccessTokensForAUserParams {
  /**
   * The email of the user to revoke.
   */
  email: string;
}

export namespace RevokeUsers {
  export import RevokeUserZeroTrustOrganizationRevokeAllAccessTokensForAUserResponse = RevokeUsersAPI.RevokeUserZeroTrustOrganizationRevokeAllAccessTokensForAUserResponse;
  export import RevokeUserZeroTrustOrganizationRevokeAllAccessTokensForAUserParams = RevokeUsersAPI.RevokeUserZeroTrustOrganizationRevokeAllAccessTokensForAUserParams;
}
