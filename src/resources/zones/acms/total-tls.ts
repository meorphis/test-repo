// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as TotalTlsAPI from 'cloudflare/resources/zones/acms/total-tls';

export class TotalTls extends APIResource {
  /**
   * Set Total TLS Settings or disable the feature for a Zone.
   */
  totalTlsEnableOrDisableTotalTls(
    zoneIdentifier: string,
    body: TotalTlTotalTlsEnableOrDisableTotalTlsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TotalTlTotalTlsEnableOrDisableTotalTlsResponse> {
    return this._client.post(`/zones/${zoneIdentifier}/acm/total_tls`, { body, ...options });
  }

  /**
   * Get Total TLS Settings for a Zone.
   */
  totalTlsTotalTlsSettingsDetails(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TotalTlTotalTlsTotalTlsSettingsDetailsResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/acm/total_tls`, options);
  }
}

export interface TotalTlTotalTlsEnableOrDisableTotalTlsResponse {
  errors?: Array<TotalTlTotalTlsEnableOrDisableTotalTlsResponse.Error>;

  messages?: Array<TotalTlTotalTlsEnableOrDisableTotalTlsResponse.Message>;

  result?: TotalTlTotalTlsEnableOrDisableTotalTlsResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace TotalTlTotalTlsEnableOrDisableTotalTlsResponse {
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
     * The Certificate Authority that Total TLS certificates will be issued through.
     */
    certificate_authority?: 'google' | 'lets_encrypt';

    /**
     * If enabled, Total TLS will order a hostname specific TLS certificate for any
     * proxied A, AAAA, or CNAME record in your zone.
     */
    enabled?: boolean;

    /**
     * The validity period in days for the certificates ordered via Total TLS.
     */
    validity_days?: 90;
  }
}

export interface TotalTlTotalTlsTotalTlsSettingsDetailsResponse {
  errors?: Array<TotalTlTotalTlsTotalTlsSettingsDetailsResponse.Error>;

  messages?: Array<TotalTlTotalTlsTotalTlsSettingsDetailsResponse.Message>;

  result?: TotalTlTotalTlsTotalTlsSettingsDetailsResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace TotalTlTotalTlsTotalTlsSettingsDetailsResponse {
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
     * The Certificate Authority that Total TLS certificates will be issued through.
     */
    certificate_authority?: 'google' | 'lets_encrypt';

    /**
     * If enabled, Total TLS will order a hostname specific TLS certificate for any
     * proxied A, AAAA, or CNAME record in your zone.
     */
    enabled?: boolean;

    /**
     * The validity period in days for the certificates ordered via Total TLS.
     */
    validity_days?: 90;
  }
}

export interface TotalTlTotalTlsEnableOrDisableTotalTlsParams {
  /**
   * If enabled, Total TLS will order a hostname specific TLS certificate for any
   * proxied A, AAAA, or CNAME record in your zone.
   */
  enabled: boolean;

  /**
   * The Certificate Authority that Total TLS certificates will be issued through.
   */
  certificate_authority?: 'google' | 'lets_encrypt';
}

export namespace TotalTls {
  export import TotalTlTotalTlsEnableOrDisableTotalTlsResponse = TotalTlsAPI.TotalTlTotalTlsEnableOrDisableTotalTlsResponse;
  export import TotalTlTotalTlsTotalTlsSettingsDetailsResponse = TotalTlsAPI.TotalTlTotalTlsTotalTlsSettingsDetailsResponse;
  export import TotalTlTotalTlsEnableOrDisableTotalTlsParams = TotalTlsAPI.TotalTlTotalTlsEnableOrDisableTotalTlsParams;
}
