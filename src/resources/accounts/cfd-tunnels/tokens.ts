// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as TokensAPI from 'cloudflare/resources/accounts/cfd-tunnels/tokens';

export class Tokens extends APIResource {
  /**
   * Gets the token used to associate cloudflared with a specific tunnel.
   */
  cloudflareTunnelGetACloudflareTunnelToken(
    accountIdentifier: string,
    tunnelId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TokenCloudflareTunnelGetACloudflareTunnelTokenResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/cfd_tunnel/${tunnelId}/token`, options);
  }
}

export interface TokenCloudflareTunnelGetACloudflareTunnelTokenResponse {
  errors?: Array<TokenCloudflareTunnelGetACloudflareTunnelTokenResponse.Error>;

  messages?: Array<TokenCloudflareTunnelGetACloudflareTunnelTokenResponse.Message>;

  result?: string;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace TokenCloudflareTunnelGetACloudflareTunnelTokenResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export namespace Tokens {
  export import TokenCloudflareTunnelGetACloudflareTunnelTokenResponse = TokensAPI.TokenCloudflareTunnelGetACloudflareTunnelTokenResponse;
}
