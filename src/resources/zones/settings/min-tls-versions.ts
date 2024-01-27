// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as MinTlsVersionsAPI from 'cloudflare/resources/zones/settings/min-tls-versions';

export class MinTlsVersions extends APIResource {
  /**
   * Changes Minimum TLS Version setting.
   */
  update(
    zoneIdentifier: string,
    body: MinTlsVersionUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MinTlsVersionUpdateResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/settings/min_tls_version`, { body, ...options });
  }

  /**
   * Gets Minimum TLS Version setting.
   */
  list(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<MinTlsVersionListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/settings/min_tls_version`, options);
  }
}

export interface MinTlsVersionUpdateResponse {
  errors?: Array<MinTlsVersionUpdateResponse.Error>;

  messages?: Array<MinTlsVersionUpdateResponse.Message>;

  /**
   * Only accepts HTTPS requests that use at least the TLS protocol version
   * specified. For example, if TLS 1.1 is selected, TLS 1.0 connections will be
   * rejected, while 1.1, 1.2, and 1.3 (if enabled) will be permitted.
   */
  result?: MinTlsVersionUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace MinTlsVersionUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Only accepts HTTPS requests that use at least the TLS protocol version
   * specified. For example, if TLS 1.1 is selected, TLS 1.0 connections will be
   * rejected, while 1.1, 1.2, and 1.3 (if enabled) will be permitted.
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'min_tls_version';

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
    value?: '1.0' | '1.1' | '1.2' | '1.3';
  }
}

export interface MinTlsVersionListResponse {
  errors?: Array<MinTlsVersionListResponse.Error>;

  messages?: Array<MinTlsVersionListResponse.Message>;

  /**
   * Only accepts HTTPS requests that use at least the TLS protocol version
   * specified. For example, if TLS 1.1 is selected, TLS 1.0 connections will be
   * rejected, while 1.1, 1.2, and 1.3 (if enabled) will be permitted.
   */
  result?: MinTlsVersionListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace MinTlsVersionListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Only accepts HTTPS requests that use at least the TLS protocol version
   * specified. For example, if TLS 1.1 is selected, TLS 1.0 connections will be
   * rejected, while 1.1, 1.2, and 1.3 (if enabled) will be permitted.
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'min_tls_version';

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
    value?: '1.0' | '1.1' | '1.2' | '1.3';
  }
}

export interface MinTlsVersionUpdateParams {
  /**
   * Value of the zone setting.
   */
  value: '1.0' | '1.1' | '1.2' | '1.3';
}

export namespace MinTlsVersions {
  export import MinTlsVersionUpdateResponse = MinTlsVersionsAPI.MinTlsVersionUpdateResponse;
  export import MinTlsVersionListResponse = MinTlsVersionsAPI.MinTlsVersionListResponse;
  export import MinTlsVersionUpdateParams = MinTlsVersionsAPI.MinTlsVersionUpdateParams;
}
