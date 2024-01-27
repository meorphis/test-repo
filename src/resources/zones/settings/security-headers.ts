// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SecurityHeadersAPI from 'cloudflare/resources/zones/settings/security-headers';

export class SecurityHeaders extends APIResource {
  /**
   * Cloudflare security header for a zone.
   */
  update(
    zoneIdentifier: string,
    body: SecurityHeaderUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SecurityHeaderUpdateResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/settings/security_header`, { body, ...options });
  }

  /**
   * Cloudflare security header for a zone.
   */
  list(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<SecurityHeaderListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/settings/security_header`, options);
  }
}

export interface SecurityHeaderUpdateResponse {
  errors?: Array<SecurityHeaderUpdateResponse.Error>;

  messages?: Array<SecurityHeaderUpdateResponse.Message>;

  /**
   * Cloudflare security header for a zone.
   */
  result?: SecurityHeaderUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace SecurityHeaderUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Cloudflare security header for a zone.
   */
  export interface Result {
    /**
     * ID of the zone's security header.
     */
    id?: 'security_header';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    value?: Result.Value;
  }

  export namespace Result {
    export interface Value {
      /**
       * Strict Transport Security.
       */
      strict_transport_security?: Value.StrictTransportSecurity;
    }

    export namespace Value {
      /**
       * Strict Transport Security.
       */
      export interface StrictTransportSecurity {
        /**
         * Whether or not strict transport security is enabled.
         */
        enabled?: boolean;

        /**
         * Include all subdomains for strict transport security.
         */
        include_subdomains?: boolean;

        /**
         * Max age in seconds of the strict transport security.
         */
        max_age?: number;

        /**
         * Whether or not to include 'X-Content-Type-Options: nosniff' header.
         */
        nosniff?: boolean;
      }
    }
  }
}

export interface SecurityHeaderListResponse {
  errors?: Array<SecurityHeaderListResponse.Error>;

  messages?: Array<SecurityHeaderListResponse.Message>;

  /**
   * Cloudflare security header for a zone.
   */
  result?: SecurityHeaderListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace SecurityHeaderListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Cloudflare security header for a zone.
   */
  export interface Result {
    /**
     * ID of the zone's security header.
     */
    id?: 'security_header';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    value?: Result.Value;
  }

  export namespace Result {
    export interface Value {
      /**
       * Strict Transport Security.
       */
      strict_transport_security?: Value.StrictTransportSecurity;
    }

    export namespace Value {
      /**
       * Strict Transport Security.
       */
      export interface StrictTransportSecurity {
        /**
         * Whether or not strict transport security is enabled.
         */
        enabled?: boolean;

        /**
         * Include all subdomains for strict transport security.
         */
        include_subdomains?: boolean;

        /**
         * Max age in seconds of the strict transport security.
         */
        max_age?: number;

        /**
         * Whether or not to include 'X-Content-Type-Options: nosniff' header.
         */
        nosniff?: boolean;
      }
    }
  }
}

export interface SecurityHeaderUpdateParams {
  value: SecurityHeaderUpdateParams.Value;
}

export namespace SecurityHeaderUpdateParams {
  export interface Value {
    /**
     * Strict Transport Security.
     */
    strict_transport_security?: Value.StrictTransportSecurity;
  }

  export namespace Value {
    /**
     * Strict Transport Security.
     */
    export interface StrictTransportSecurity {
      /**
       * Whether or not strict transport security is enabled.
       */
      enabled?: boolean;

      /**
       * Include all subdomains for strict transport security.
       */
      include_subdomains?: boolean;

      /**
       * Max age in seconds of the strict transport security.
       */
      max_age?: number;

      /**
       * Whether or not to include 'X-Content-Type-Options: nosniff' header.
       */
      nosniff?: boolean;
    }
  }
}

export namespace SecurityHeaders {
  export import SecurityHeaderUpdateResponse = SecurityHeadersAPI.SecurityHeaderUpdateResponse;
  export import SecurityHeaderListResponse = SecurityHeadersAPI.SecurityHeaderListResponse;
  export import SecurityHeaderUpdateParams = SecurityHeadersAPI.SecurityHeaderUpdateParams;
}
