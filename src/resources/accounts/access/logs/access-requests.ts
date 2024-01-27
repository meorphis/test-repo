// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as AccessRequestsAPI from 'cloudflare/resources/accounts/access/logs/access-requests';

export class AccessRequests extends APIResource {
  /**
   * Gets a list of Access authentication audit logs for an account.
   */
  accessAuthenticationLogsGetAccessAuthenticationLogs(
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccessRequestAccessAuthenticationLogsGetAccessAuthenticationLogsResponse> {
    return this._client.get(`/accounts/${identifier}/access/logs/access_requests`, options);
  }
}

export interface AccessRequestAccessAuthenticationLogsGetAccessAuthenticationLogsResponse {
  errors?: Array<AccessRequestAccessAuthenticationLogsGetAccessAuthenticationLogsResponse.Error>;

  messages?: Array<AccessRequestAccessAuthenticationLogsGetAccessAuthenticationLogsResponse.Message>;

  result?: Array<AccessRequestAccessAuthenticationLogsGetAccessAuthenticationLogsResponse.Result>;

  result_info?: AccessRequestAccessAuthenticationLogsGetAccessAuthenticationLogsResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace AccessRequestAccessAuthenticationLogsGetAccessAuthenticationLogsResponse {
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
     * The event that occurred, such as a login attempt.
     */
    action?: string;

    /**
     * The result of the authentication event.
     */
    allowed?: boolean;

    /**
     * The URL of the Access application.
     */
    app_domain?: string;

    /**
     * The unique identifier for the Access application.
     */
    app_uid?: unknown;

    /**
     * The IdP used to authenticate.
     */
    connection?: string;

    created_at?: string;

    /**
     * The IP address of the authenticating user.
     */
    ip_address?: string;

    /**
     * The unique identifier for the request to Cloudflare.
     */
    ray_id?: string;

    /**
     * The email address of the authenticating user.
     */
    user_email?: string;
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

export namespace AccessRequests {
  export import AccessRequestAccessAuthenticationLogsGetAccessAuthenticationLogsResponse = AccessRequestsAPI.AccessRequestAccessAuthenticationLogsGetAccessAuthenticationLogsResponse;
}
