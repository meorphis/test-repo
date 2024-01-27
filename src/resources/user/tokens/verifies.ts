// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as VerifiesAPI from 'cloudflare/resources/user/tokens/verifies';

export class Verifies extends APIResource {
  /**
   * Test whether a token works.
   */
  userAPITokensVerifyToken(
    options?: Core.RequestOptions,
  ): Core.APIPromise<VerifyUserAPITokensVerifyTokenResponse> {
    return this._client.get('/user/tokens/verify', options);
  }
}

export interface VerifyUserAPITokensVerifyTokenResponse {
  errors?: Array<VerifyUserAPITokensVerifyTokenResponse.Error>;

  messages?: Array<VerifyUserAPITokensVerifyTokenResponse.Message>;

  result?: VerifyUserAPITokensVerifyTokenResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace VerifyUserAPITokensVerifyTokenResponse {
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
     * Token identifier tag.
     */
    id: string;

    /**
     * Status of the token.
     */
    status: 'active' | 'disabled' | 'expired';

    /**
     * The expiration time on or after which the JWT MUST NOT be accepted for
     * processing.
     */
    expires_on?: string;

    /**
     * The time before which the token MUST NOT be accepted for processing.
     */
    not_before?: string;
  }
}

export namespace Verifies {
  export import VerifyUserAPITokensVerifyTokenResponse = VerifiesAPI.VerifyUserAPITokensVerifyTokenResponse;
}
