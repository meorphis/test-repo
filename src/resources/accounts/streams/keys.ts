// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as KeysAPI from 'cloudflare/resources/accounts/streams/keys';

export class Keys extends APIResource {
  /**
   * Deletes signing keys and revokes all signed URLs generated with the key.
   */
  delete(
    accountIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<KeyDeleteResponse> {
    return this._client.delete(`/accounts/${accountIdentifier}/stream/keys/${identifier}`, options);
  }

  /**
   * Creates an RSA private key in PEM and JWK formats. Key files are only displayed
   * once after creation. Keys are created, used, and deleted independently of
   * videos, and every key can sign any video.
   */
  streamSigningKeysCreateSigningKeys(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<KeyStreamSigningKeysCreateSigningKeysResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/stream/keys`, options);
  }

  /**
   * Lists the video ID and creation date and time when a signing key was created.
   */
  streamSigningKeysListSigningKeys(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<KeyStreamSigningKeysListSigningKeysResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/stream/keys`, options);
  }
}

export interface KeyDeleteResponse {
  errors?: Array<KeyDeleteResponse.Error>;

  messages?: Array<KeyDeleteResponse.Message>;

  result?: string;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace KeyDeleteResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface KeyStreamSigningKeysCreateSigningKeysResponse {
  errors?: Array<KeyStreamSigningKeysCreateSigningKeysResponse.Error>;

  messages?: Array<KeyStreamSigningKeysCreateSigningKeysResponse.Message>;

  result?: KeyStreamSigningKeysCreateSigningKeysResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace KeyStreamSigningKeysCreateSigningKeysResponse {
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
     * Identifier
     */
    id?: string;

    /**
     * The date and time a signing key was created.
     */
    created?: string;

    /**
     * The signing key in JWK format.
     */
    jwk?: string;

    /**
     * The signing key in PEM format.
     */
    pem?: string;
  }
}

export interface KeyStreamSigningKeysListSigningKeysResponse {
  errors?: Array<KeyStreamSigningKeysListSigningKeysResponse.Error>;

  messages?: Array<KeyStreamSigningKeysListSigningKeysResponse.Message>;

  result?: Array<KeyStreamSigningKeysListSigningKeysResponse.Result>;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace KeyStreamSigningKeysListSigningKeysResponse {
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
     * Identifier
     */
    id?: string;

    /**
     * The date and time a signing key was created.
     */
    created?: string;
  }
}

export namespace Keys {
  export import KeyDeleteResponse = KeysAPI.KeyDeleteResponse;
  export import KeyStreamSigningKeysCreateSigningKeysResponse = KeysAPI.KeyStreamSigningKeysCreateSigningKeysResponse;
  export import KeyStreamSigningKeysListSigningKeysResponse = KeysAPI.KeyStreamSigningKeysListSigningKeysResponse;
}
