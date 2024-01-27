// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as Tls1_3sAPI from 'cloudflare/resources/zones/settings/tls-1-3s';

export class Tls1_3s extends APIResource {
  /**
   * Changes TLS 1.3 setting.
   */
  update(
    zoneIdentifier: string,
    body: Tls1_3UpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Tls1_3UpdateResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/settings/tls_1_3`, { body, ...options });
  }

  /**
   * Gets TLS 1.3 setting enabled for a zone.
   */
  list(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<Tls1_3ListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/settings/tls_1_3`, options);
  }
}

export interface Tls1_3UpdateResponse {
  errors?: Array<Tls1_3UpdateResponse.Error>;

  messages?: Array<Tls1_3UpdateResponse.Message>;

  /**
   * Enables Crypto TLS 1.3 feature for a zone.
   */
  result?: Tls1_3UpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace Tls1_3UpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Enables Crypto TLS 1.3 feature for a zone.
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'tls_1_3';

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
     * Value of the zone setting. Notes: Default value depends on the zone's plan
     * level.
     */
    value?: 'on' | 'off' | 'zrt';
  }
}

export interface Tls1_3ListResponse {
  errors?: Array<Tls1_3ListResponse.Error>;

  messages?: Array<Tls1_3ListResponse.Message>;

  /**
   * Enables Crypto TLS 1.3 feature for a zone.
   */
  result?: Tls1_3ListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace Tls1_3ListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Enables Crypto TLS 1.3 feature for a zone.
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'tls_1_3';

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
     * Value of the zone setting. Notes: Default value depends on the zone's plan
     * level.
     */
    value?: 'on' | 'off' | 'zrt';
  }
}

export interface Tls1_3UpdateParams {
  /**
   * Value of the zone setting. Notes: Default value depends on the zone's plan
   * level.
   */
  value: 'on' | 'off' | 'zrt';
}

export namespace Tls1_3s {
  export import Tls1_3UpdateResponse = Tls1_3sAPI.Tls1_3UpdateResponse;
  export import Tls1_3ListResponse = Tls1_3sAPI.Tls1_3ListResponse;
  export import Tls1_3UpdateParams = Tls1_3sAPI.Tls1_3UpdateParams;
}
