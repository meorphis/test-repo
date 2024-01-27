// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as LastSeenIdentityAPI from 'cloudflare/resources/accounts/access/users/last-seen-identity';

export class LastSeenIdentity extends APIResource {
  /**
   * Get last seen identity for a single user.
   */
  retrieve(
    identifier: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LastSeenIdentityRetrieveResponse> {
    return this._client.get(`/accounts/${identifier}/access/users/${id}/last_seen_identity`, options);
  }
}

export interface LastSeenIdentityRetrieveResponse {
  errors?: Array<LastSeenIdentityRetrieveResponse.Error>;

  messages?: Array<LastSeenIdentityRetrieveResponse.Message>;

  result?: LastSeenIdentityRetrieveResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace LastSeenIdentityRetrieveResponse {
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

export namespace LastSeenIdentity {
  export import LastSeenIdentityRetrieveResponse = LastSeenIdentityAPI.LastSeenIdentityRetrieveResponse;
}
