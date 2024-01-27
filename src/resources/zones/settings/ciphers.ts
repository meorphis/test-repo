// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as CiphersAPI from 'cloudflare/resources/zones/settings/ciphers';

export class Ciphers extends APIResource {
  /**
   * Changes ciphers setting.
   */
  update(
    zoneIdentifier: string,
    body: CipherUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CipherUpdateResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/settings/ciphers`, { body, ...options });
  }

  /**
   * Gets ciphers setting.
   */
  list(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<CipherListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/settings/ciphers`, options);
  }
}

export interface CipherUpdateResponse {
  errors?: Array<CipherUpdateResponse.Error>;

  messages?: Array<CipherUpdateResponse.Message>;

  /**
   * An allowlist of ciphers for TLS termination. These ciphers must be in the
   * BoringSSL format.
   */
  result?: CipherUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace CipherUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * An allowlist of ciphers for TLS termination. These ciphers must be in the
   * BoringSSL format.
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'ciphers';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: Array<string>;
  }
}

export interface CipherListResponse {
  errors?: Array<CipherListResponse.Error>;

  messages?: Array<CipherListResponse.Message>;

  /**
   * An allowlist of ciphers for TLS termination. These ciphers must be in the
   * BoringSSL format.
   */
  result?: CipherListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace CipherListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * An allowlist of ciphers for TLS termination. These ciphers must be in the
   * BoringSSL format.
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'ciphers';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: Array<string>;
  }
}

export interface CipherUpdateParams {
  /**
   * Value of the zone setting.
   */
  value: Array<string>;
}

export namespace Ciphers {
  export import CipherUpdateResponse = CiphersAPI.CipherUpdateResponse;
  export import CipherListResponse = CiphersAPI.CipherListResponse;
  export import CipherUpdateParams = CiphersAPI.CipherUpdateParams;
}
