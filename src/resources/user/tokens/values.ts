// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ValuesAPI from 'cloudflare/resources/user/tokens/values';

export class Values extends APIResource {
  /**
   * Roll the token secret.
   */
  userAPITokensRollToken(
    identifier: unknown,
    body: ValueUserAPITokensRollTokenParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ValueUserAPITokensRollTokenResponse> {
    return this._client.put(`/user/tokens/${identifier}/value`, { body, ...options });
  }
}

export interface ValueUserAPITokensRollTokenResponse {
  errors?: Array<ValueUserAPITokensRollTokenResponse.Error>;

  messages?: Array<ValueUserAPITokensRollTokenResponse.Message>;

  /**
   * The token value.
   */
  result?: string;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ValueUserAPITokensRollTokenResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export type ValueUserAPITokensRollTokenParams = unknown;

export namespace Values {
  export import ValueUserAPITokensRollTokenResponse = ValuesAPI.ValueUserAPITokensRollTokenResponse;
  export import ValueUserAPITokensRollTokenParams = ValuesAPI.ValueUserAPITokensRollTokenParams;
}
