// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as FailedLoginsAPI from 'cloudflare/resources/accounts/access/users/failed-logins';

export class FailedLogins extends APIResource {
  /**
   * Get all failed login attempts for a single user.
   */
  zeroTrustUsersGetFailedLogins(
    identifier: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FailedLoginZeroTrustUsersGetFailedLoginsResponse> {
    return this._client.get(`/accounts/${identifier}/access/users/${id}/failed_logins`, options);
  }
}

export interface FailedLoginZeroTrustUsersGetFailedLoginsResponse {
  errors?: Array<FailedLoginZeroTrustUsersGetFailedLoginsResponse.Error>;

  messages?: Array<FailedLoginZeroTrustUsersGetFailedLoginsResponse.Message>;

  result?: Array<FailedLoginZeroTrustUsersGetFailedLoginsResponse.Result>;

  result_info?: FailedLoginZeroTrustUsersGetFailedLoginsResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace FailedLoginZeroTrustUsersGetFailedLoginsResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    expiration?: number;

    metadata?: unknown;
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

export namespace FailedLogins {
  export import FailedLoginZeroTrustUsersGetFailedLoginsResponse = FailedLoginsAPI.FailedLoginZeroTrustUsersGetFailedLoginsResponse;
}
