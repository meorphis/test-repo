// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as KeysAPI from 'cloudflare/resources/accounts/images/v1s/keys';

export class Keys extends APIResource {
  /**
   * Lists your signing keys. These can be found on your Cloudflare Images dashboard.
   */
  cloudflareImagesKeysListSigningKeys(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<KeyCloudflareImagesKeysListSigningKeysResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/images/v1/keys`, options);
  }
}

export interface KeyCloudflareImagesKeysListSigningKeysResponse {
  errors?: Array<KeyCloudflareImagesKeysListSigningKeysResponse.Error>;

  messages?: Array<KeyCloudflareImagesKeysListSigningKeysResponse.Message>;

  result?: KeyCloudflareImagesKeysListSigningKeysResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace KeyCloudflareImagesKeysListSigningKeysResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    keys?: Array<Result.Key>;
  }

  export namespace Result {
    export interface Key {
      /**
       * Key name.
       */
      name?: string;

      /**
       * Key value.
       */
      value?: string;
    }
  }
}

export namespace Keys {
  export import KeyCloudflareImagesKeysListSigningKeysResponse = KeysAPI.KeyCloudflareImagesKeysListSigningKeysResponse;
}
