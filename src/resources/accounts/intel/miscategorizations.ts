// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as MiscategorizationsAPI from 'cloudflare/resources/accounts/intel/miscategorizations';

export class Miscategorizations extends APIResource {
  /**
   * Create Miscategorization
   */
  miscategorizationCreateMiscategorization(
    accountIdentifier: string,
    body: MiscategorizationMiscategorizationCreateMiscategorizationParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MiscategorizationMiscategorizationCreateMiscategorizationResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/intel/miscategorization`, { body, ...options });
  }
}

export interface MiscategorizationMiscategorizationCreateMiscategorizationResponse {
  errors?: Array<MiscategorizationMiscategorizationCreateMiscategorizationResponse.Error>;

  messages?: Array<MiscategorizationMiscategorizationCreateMiscategorizationResponse.Message>;

  result?: unknown | string;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace MiscategorizationMiscategorizationCreateMiscategorizationResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface MiscategorizationMiscategorizationCreateMiscategorizationParams {
  /**
   * Content category IDs to add.
   */
  content_adds?: unknown;

  /**
   * Content category IDs to remove.
   */
  content_removes?: unknown;

  indicator_type?: 'domain' | 'ipv4' | 'ipv6' | 'url';

  /**
   * Provide only if indicator_type is `ipv4` or `ipv6`.
   */
  ip?: unknown;

  /**
   * Security category IDs to add.
   */
  security_adds?: unknown;

  /**
   * Security category IDs to remove.
   */
  security_removes?: unknown;

  /**
   * Provide only if indicator_type is `domain` or `url`. Example if indicator_type
   * is `domain`: `example.com`. Example if indicator_type is `url`:
   * `https://example.com/news/`.
   */
  url?: string;
}

export namespace Miscategorizations {
  export import MiscategorizationMiscategorizationCreateMiscategorizationResponse = MiscategorizationsAPI.MiscategorizationMiscategorizationCreateMiscategorizationResponse;
  export import MiscategorizationMiscategorizationCreateMiscategorizationParams = MiscategorizationsAPI.MiscategorizationMiscategorizationCreateMiscategorizationParams;
}
