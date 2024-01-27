// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as UsersAPI from 'cloudflare/resources/accounts/access/users/users';
import * as ActiveSessionsAPI from 'cloudflare/resources/accounts/access/users/active-sessions';
import * as FailedLoginsAPI from 'cloudflare/resources/accounts/access/users/failed-logins';
import * as LastSeenIdentityAPI from 'cloudflare/resources/accounts/access/users/last-seen-identity';

export class Users extends APIResource {
  activeSessions: ActiveSessionsAPI.ActiveSessions = new ActiveSessionsAPI.ActiveSessions(this._client);
  lastSeenIdentity: LastSeenIdentityAPI.LastSeenIdentity = new LastSeenIdentityAPI.LastSeenIdentity(
    this._client,
  );
  failedLogins: FailedLoginsAPI.FailedLogins = new FailedLoginsAPI.FailedLogins(this._client);

  /**
   * Gets a list of users for an account.
   */
  zeroTrustUsersGetUsers(
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserZeroTrustUsersGetUsersResponse> {
    return this._client.get(`/accounts/${identifier}/access/users`, options);
  }
}

export interface UserZeroTrustUsersGetUsersResponse {
  errors?: Array<UserZeroTrustUsersGetUsersResponse.Error>;

  messages?: Array<UserZeroTrustUsersGetUsersResponse.Message>;

  result?: Array<UserZeroTrustUsersGetUsersResponse.Result>;

  result_info?: UserZeroTrustUsersGetUsersResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace UserZeroTrustUsersGetUsersResponse {
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
     * UUID
     */
    id?: string;

    /**
     * True if the user has authenticated with Cloudflare Access.
     */
    access_seat?: boolean;

    /**
     * The number of active devices registered to the user.
     */
    active_device_count?: number;

    created_at?: string;

    /**
     * The email of the user.
     */
    email?: string;

    /**
     * True if the user has logged into the WARP client.
     */
    gateway_seat?: boolean;

    /**
     * The time at which the user last successfully logged in.
     */
    last_successful_login?: string;

    /**
     * The name of the user.
     */
    name?: string;

    /**
     * The unique API identifier for the Zero Trust seat.
     */
    seat_uid?: unknown;

    /**
     * The unique API identifier for the user.
     */
    uid?: unknown;

    updated_at?: string;
  }

  export interface ResultInfo {
    count?: unknown;

    page?: unknown;

    per_page?: unknown;

    total_count?: unknown;
  }
}

export namespace Users {
  export import UserZeroTrustUsersGetUsersResponse = UsersAPI.UserZeroTrustUsersGetUsersResponse;
  export import ActiveSessions = ActiveSessionsAPI.ActiveSessions;
  export import ActiveSessionListResponse = ActiveSessionsAPI.ActiveSessionListResponse;
  export import ActiveSessionRetrieveActiveSessionResponse = ActiveSessionsAPI.ActiveSessionRetrieveActiveSessionResponse;
  export import LastSeenIdentity = LastSeenIdentityAPI.LastSeenIdentity;
  export import LastSeenIdentityRetrieveResponse = LastSeenIdentityAPI.LastSeenIdentityRetrieveResponse;
  export import FailedLogins = FailedLoginsAPI.FailedLogins;
  export import FailedLoginZeroTrustUsersGetFailedLoginsResponse = FailedLoginsAPI.FailedLoginZeroTrustUsersGetFailedLoginsResponse;
}
