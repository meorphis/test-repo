// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as KeysAPI from 'cloudflare/resources/accounts/access/keys/keys';
import * as RotatesAPI from 'cloudflare/resources/accounts/access/keys/rotates';

export class Keys extends APIResource {
  rotates: RotatesAPI.Rotates = new RotatesAPI.Rotates(this._client);

  /**
   * Gets the Access key rotation settings for an account.
   */
  accessKeyConfigurationGetTheAccessKeyConfiguration(
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<KeyAccessKeyConfigurationGetTheAccessKeyConfigurationResponse> {
    return this._client.get(`/accounts/${identifier}/access/keys`, options);
  }

  /**
   * Updates the Access key rotation settings for an account.
   */
  accessKeyConfigurationUpdateTheAccessKeyConfiguration(
    identifier: string,
    body: KeyAccessKeyConfigurationUpdateTheAccessKeyConfigurationParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<KeyAccessKeyConfigurationUpdateTheAccessKeyConfigurationResponse> {
    return this._client.put(`/accounts/${identifier}/access/keys`, { body, ...options });
  }
}

export interface KeyAccessKeyConfigurationGetTheAccessKeyConfigurationResponse {
  /**
   * The number of days until the next key rotation.
   */
  days_until_next_rotation?: number;

  errors?: Array<KeyAccessKeyConfigurationGetTheAccessKeyConfigurationResponse.Error>;

  /**
   * The number of days between key rotations.
   */
  key_rotation_interval_days?: number;

  /**
   * The timestamp of the previous key rotation.
   */
  last_key_rotation_at?: string;

  messages?: Array<KeyAccessKeyConfigurationGetTheAccessKeyConfigurationResponse.Message>;

  result?: unknown | string;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace KeyAccessKeyConfigurationGetTheAccessKeyConfigurationResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface KeyAccessKeyConfigurationUpdateTheAccessKeyConfigurationResponse {
  /**
   * The number of days until the next key rotation.
   */
  days_until_next_rotation?: number;

  errors?: Array<KeyAccessKeyConfigurationUpdateTheAccessKeyConfigurationResponse.Error>;

  /**
   * The number of days between key rotations.
   */
  key_rotation_interval_days?: number;

  /**
   * The timestamp of the previous key rotation.
   */
  last_key_rotation_at?: string;

  messages?: Array<KeyAccessKeyConfigurationUpdateTheAccessKeyConfigurationResponse.Message>;

  result?: unknown | string;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace KeyAccessKeyConfigurationUpdateTheAccessKeyConfigurationResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface KeyAccessKeyConfigurationUpdateTheAccessKeyConfigurationParams {
  /**
   * The number of days between key rotations.
   */
  key_rotation_interval_days: number;
}

export namespace Keys {
  export import KeyAccessKeyConfigurationGetTheAccessKeyConfigurationResponse = KeysAPI.KeyAccessKeyConfigurationGetTheAccessKeyConfigurationResponse;
  export import KeyAccessKeyConfigurationUpdateTheAccessKeyConfigurationResponse = KeysAPI.KeyAccessKeyConfigurationUpdateTheAccessKeyConfigurationResponse;
  export import KeyAccessKeyConfigurationUpdateTheAccessKeyConfigurationParams = KeysAPI.KeyAccessKeyConfigurationUpdateTheAccessKeyConfigurationParams;
  export import Rotates = RotatesAPI.Rotates;
  export import RotateAccessKeyConfigurationRotateAccessKeysResponse = RotatesAPI.RotateAccessKeyConfigurationRotateAccessKeysResponse;
}
