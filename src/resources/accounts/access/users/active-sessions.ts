// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ActiveSessionsAPI from 'cloudflare/resources/accounts/access/users/active-sessions';

export class ActiveSessions extends APIResource {
  /**
   * Get active sessions for a single user.
   */
  list(
    identifier: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActiveSessionListResponse> {
    return this._client.get(`/accounts/${identifier}/access/users/${id}/active_sessions`, options);
  }

  /**
   * Get an active session for a single user.
   */
  retrieveActiveSession(
    identifier: string,
    id: string,
    nonce: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActiveSessionRetrieveActiveSessionResponse> {
    return this._client.get(`/accounts/${identifier}/access/users/${id}/active_sessions/${nonce}`, options);
  }
}

export interface ActiveSessionListResponse {
  errors?: Array<ActiveSessionListResponse.Error>;

  messages?: Array<ActiveSessionListResponse.Message>;

  result?: Array<ActiveSessionListResponse.Result>;

  result_info?: ActiveSessionListResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ActiveSessionListResponse {
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

    metadata?: Result.Metadata;

    name?: string;
  }

  export namespace Result {
    export interface Metadata {
      apps?: unknown;

      expires?: number;

      iat?: number;

      nonce?: string;

      ttl?: number;
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

export interface ActiveSessionRetrieveActiveSessionResponse {
  errors?: Array<ActiveSessionRetrieveActiveSessionResponse.Error>;

  messages?: Array<ActiveSessionRetrieveActiveSessionResponse.Message>;

  result?: ActiveSessionRetrieveActiveSessionResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ActiveSessionRetrieveActiveSessionResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    account_id?: string;

    auth_status?: string;

    common_name?: string;

    device_id?: string;

    device_sessions?: unknown;

    devicePosture?: unknown;

    email?: string;

    geo?: Result.Geo;

    iat?: number;

    idp?: Result.Idp;

    ip?: string;

    is_gateway?: boolean;

    is_warp?: boolean;

    isActive?: boolean;

    mtls_auth?: Result.MtlsAuth;

    service_token_id?: string;

    service_token_status?: boolean;

    user_uuid?: string;

    version?: number;
  }

  export namespace Result {
    export interface Geo {
      country?: string;
    }

    export interface Idp {
      id?: string;

      type?: string;
    }

    export interface MtlsAuth {
      auth_status?: string;

      cert_issuer_dn?: string;

      cert_issuer_ski?: string;

      cert_presented?: boolean;

      cert_serial?: string;
    }
  }
}

export namespace ActiveSessions {
  export import ActiveSessionListResponse = ActiveSessionsAPI.ActiveSessionListResponse;
  export import ActiveSessionRetrieveActiveSessionResponse = ActiveSessionsAPI.ActiveSessionRetrieveActiveSessionResponse;
}
