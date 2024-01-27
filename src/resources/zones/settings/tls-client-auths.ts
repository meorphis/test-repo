// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as TlsClientAuthsAPI from 'cloudflare/resources/zones/settings/tls-client-auths';

export class TlsClientAuths extends APIResource {
  /**
   * TLS Client Auth requires Cloudflare to connect to your origin server using a
   * client certificate (Enterprise Only).
   */
  update(
    zoneIdentifier: string,
    body: TlsClientAuthUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TlsClientAuthUpdateResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/settings/tls_client_auth`, { body, ...options });
  }

  /**
   * TLS Client Auth requires Cloudflare to connect to your origin server using a
   * client certificate (Enterprise Only).
   */
  list(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<TlsClientAuthListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/settings/tls_client_auth`, options);
  }
}

export interface TlsClientAuthUpdateResponse {
  errors?: Array<TlsClientAuthUpdateResponse.Error>;

  messages?: Array<TlsClientAuthUpdateResponse.Message>;

  /**
   * TLS Client Auth requires Cloudflare to connect to your origin server using a
   * client certificate (Enterprise Only).
   */
  result?: TlsClientAuthUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace TlsClientAuthUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * TLS Client Auth requires Cloudflare to connect to your origin server using a
   * client certificate (Enterprise Only).
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'tls_client_auth';

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
     * value of the zone setting.
     */
    value?: 'on' | 'off';
  }
}

export interface TlsClientAuthListResponse {
  errors?: Array<TlsClientAuthListResponse.Error>;

  messages?: Array<TlsClientAuthListResponse.Message>;

  /**
   * TLS Client Auth requires Cloudflare to connect to your origin server using a
   * client certificate (Enterprise Only).
   */
  result?: TlsClientAuthListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace TlsClientAuthListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * TLS Client Auth requires Cloudflare to connect to your origin server using a
   * client certificate (Enterprise Only).
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'tls_client_auth';

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
     * value of the zone setting.
     */
    value?: 'on' | 'off';
  }
}

export interface TlsClientAuthUpdateParams {
  /**
   * value of the zone setting.
   */
  value: 'on' | 'off';
}

export namespace TlsClientAuths {
  export import TlsClientAuthUpdateResponse = TlsClientAuthsAPI.TlsClientAuthUpdateResponse;
  export import TlsClientAuthListResponse = TlsClientAuthsAPI.TlsClientAuthListResponse;
  export import TlsClientAuthUpdateParams = TlsClientAuthsAPI.TlsClientAuthUpdateParams;
}
