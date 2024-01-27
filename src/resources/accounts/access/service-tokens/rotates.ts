// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as RotatesAPI from 'cloudflare/resources/accounts/access/service-tokens/rotates';

export class Rotates extends APIResource {
  /**
   * Generates a new Client Secret for a service token and revokes the old one.
   */
  accessServiceTokensRotateAServiceToken(
    identifier: string,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RotateAccessServiceTokensRotateAServiceTokenResponse> {
    return this._client.post(`/accounts/${identifier}/access/service_tokens/${uuid}/rotate`, options);
  }
}

export interface RotateAccessServiceTokensRotateAServiceTokenResponse {
  errors?: Array<RotateAccessServiceTokensRotateAServiceTokenResponse.Error>;

  messages?: Array<RotateAccessServiceTokensRotateAServiceTokenResponse.Message>;

  result?: RotateAccessServiceTokensRotateAServiceTokenResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace RotateAccessServiceTokensRotateAServiceTokenResponse {
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
     * The ID of the service token.
     */
    id?: unknown;

    /**
     * The Client ID for the service token. Access will check for this value in the
     * `CF-Access-Client-ID` request header.
     */
    client_id?: string;

    /**
     * The Client Secret for the service token. Access will check for this value in the
     * `CF-Access-Client-Secret` request header.
     */
    client_secret?: string;

    created_at?: string;

    /**
     * The duration for how long the service token will be valid. Must be in the format
     * `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m, h. The
     * default is 1 year in hours (8760h).
     */
    duration?: string;

    /**
     * The name of the service token.
     */
    name?: string;

    updated_at?: string;
  }
}

export namespace Rotates {
  export import RotateAccessServiceTokensRotateAServiceTokenResponse = RotatesAPI.RotateAccessServiceTokensRotateAServiceTokenResponse;
}
