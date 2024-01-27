// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as RotatesAPI from 'cloudflare/resources/accounts/access/keys/rotates';

export class Rotates extends APIResource {
  /**
   * Perfoms a key rotation for an account.
   */
  accessKeyConfigurationRotateAccessKeys(
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RotateAccessKeyConfigurationRotateAccessKeysResponse> {
    return this._client.post(`/accounts/${identifier}/access/keys/rotate`, options);
  }
}

export interface RotateAccessKeyConfigurationRotateAccessKeysResponse {
  /**
   * The number of days until the next key rotation.
   */
  days_until_next_rotation?: number;

  errors?: Array<RotateAccessKeyConfigurationRotateAccessKeysResponse.Error>;

  /**
   * The number of days between key rotations.
   */
  key_rotation_interval_days?: number;

  /**
   * The timestamp of the previous key rotation.
   */
  last_key_rotation_at?: string;

  messages?: Array<RotateAccessKeyConfigurationRotateAccessKeysResponse.Message>;

  result?: unknown | string;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace RotateAccessKeyConfigurationRotateAccessKeysResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export namespace Rotates {
  export import RotateAccessKeyConfigurationRotateAccessKeysResponse = RotatesAPI.RotateAccessKeyConfigurationRotateAccessKeysResponse;
}
