// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as OriginTlsClientAuthsAPI from 'cloudflare/resources/zones/origin-tls-client-auths/origin-tls-client-auths';
import * as SettingsAPI from 'cloudflare/resources/zones/origin-tls-client-auths/settings';
import * as HostnamesAPI from 'cloudflare/resources/zones/origin-tls-client-auths/hostnames/hostnames';

export class OriginTlsClientAuths extends APIResource {
  hostnames: HostnamesAPI.Hostnames = new HostnamesAPI.Hostnames(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);

  /**
   * Get Certificate Details
   */
  retrieve(
    zoneIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OriginTlsClientAuthRetrieveResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/origin_tls_client_auth/${identifier}`, options);
  }

  /**
   * Delete Certificate
   */
  delete(
    zoneIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OriginTlsClientAuthDeleteResponse> {
    return this._client.delete(`/zones/${zoneIdentifier}/origin_tls_client_auth/${identifier}`, options);
  }

  /**
   * List Certificates
   */
  zoneLevelAuthenticatedOriginPullsListCertificates(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OriginTlsClientAuthZoneLevelAuthenticatedOriginPullsListCertificatesResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/origin_tls_client_auth`, options);
  }

  /**
   * Upload your own certificate you want Cloudflare to use for edge-to-origin
   * communication to override the shared certificate. Please note that it is
   * important to keep only one certificate active. Also, make sure to enable
   * zone-level authenticated origin pulls by making a PUT call to settings endpoint
   * to see the uploaded certificate in use.
   */
  zoneLevelAuthenticatedOriginPullsUploadCertificate(
    zoneIdentifier: string,
    body: OriginTlsClientAuthZoneLevelAuthenticatedOriginPullsUploadCertificateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OriginTlsClientAuthZoneLevelAuthenticatedOriginPullsUploadCertificateResponse> {
    return this._client.post(`/zones/${zoneIdentifier}/origin_tls_client_auth`, { body, ...options });
  }
}

export interface OriginTlsClientAuthRetrieveResponse {
  errors?: Array<OriginTlsClientAuthRetrieveResponse.Error>;

  messages?: Array<OriginTlsClientAuthRetrieveResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace OriginTlsClientAuthRetrieveResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface OriginTlsClientAuthDeleteResponse {
  errors?: Array<OriginTlsClientAuthDeleteResponse.Error>;

  messages?: Array<OriginTlsClientAuthDeleteResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace OriginTlsClientAuthDeleteResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface OriginTlsClientAuthZoneLevelAuthenticatedOriginPullsListCertificatesResponse {
  errors?: Array<OriginTlsClientAuthZoneLevelAuthenticatedOriginPullsListCertificatesResponse.Error>;

  messages?: Array<OriginTlsClientAuthZoneLevelAuthenticatedOriginPullsListCertificatesResponse.Message>;

  result?: Array<OriginTlsClientAuthZoneLevelAuthenticatedOriginPullsListCertificatesResponse.Result>;

  result_info?: OriginTlsClientAuthZoneLevelAuthenticatedOriginPullsListCertificatesResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace OriginTlsClientAuthZoneLevelAuthenticatedOriginPullsListCertificatesResponse {
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
     * The zone's leaf certificate.
     */
    certificate?: string;

    /**
     * When the certificate from the authority expires.
     */
    expires_on?: string;

    /**
     * The certificate authority that issued the certificate.
     */
    issuer?: string;

    /**
     * The type of hash used for the certificate.
     */
    signature?: string;

    /**
     * Status of the certificate activation.
     */
    status?:
      | 'initializing'
      | 'pending_deployment'
      | 'pending_deletion'
      | 'active'
      | 'deleted'
      | 'deployment_timed_out'
      | 'deletion_timed_out';

    /**
     * This is the time the certificate was uploaded.
     */
    uploaded_on?: string;
  }

  export interface ResultInfo {
    /**
     * Total number of results for the requested service
     */
    count?: number;

    /**
     * Current page within paginated list of results
     */
    page?: number;

    /**
     * Number of results per page of results
     */
    per_page?: number;

    /**
     * Total results available without any search parameters
     */
    total_count?: number;
  }
}

export interface OriginTlsClientAuthZoneLevelAuthenticatedOriginPullsUploadCertificateResponse {
  errors?: Array<OriginTlsClientAuthZoneLevelAuthenticatedOriginPullsUploadCertificateResponse.Error>;

  messages?: Array<OriginTlsClientAuthZoneLevelAuthenticatedOriginPullsUploadCertificateResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace OriginTlsClientAuthZoneLevelAuthenticatedOriginPullsUploadCertificateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface OriginTlsClientAuthZoneLevelAuthenticatedOriginPullsUploadCertificateParams {
  /**
   * The zone's leaf certificate.
   */
  certificate: string;

  /**
   * The zone's private key.
   */
  private_key: string;
}

export namespace OriginTlsClientAuths {
  export import OriginTlsClientAuthRetrieveResponse = OriginTlsClientAuthsAPI.OriginTlsClientAuthRetrieveResponse;
  export import OriginTlsClientAuthDeleteResponse = OriginTlsClientAuthsAPI.OriginTlsClientAuthDeleteResponse;
  export import OriginTlsClientAuthZoneLevelAuthenticatedOriginPullsListCertificatesResponse = OriginTlsClientAuthsAPI.OriginTlsClientAuthZoneLevelAuthenticatedOriginPullsListCertificatesResponse;
  export import OriginTlsClientAuthZoneLevelAuthenticatedOriginPullsUploadCertificateResponse = OriginTlsClientAuthsAPI.OriginTlsClientAuthZoneLevelAuthenticatedOriginPullsUploadCertificateResponse;
  export import OriginTlsClientAuthZoneLevelAuthenticatedOriginPullsUploadCertificateParams = OriginTlsClientAuthsAPI.OriginTlsClientAuthZoneLevelAuthenticatedOriginPullsUploadCertificateParams;
  export import Hostnames = HostnamesAPI.Hostnames;
  export import HostnameRetrieveResponse = HostnamesAPI.HostnameRetrieveResponse;
  export import HostnamePerHostnameAuthenticatedOriginPullEnableOrDisableAHostnameForClientAuthenticationResponse = HostnamesAPI.HostnamePerHostnameAuthenticatedOriginPullEnableOrDisableAHostnameForClientAuthenticationResponse;
  export import HostnamePerHostnameAuthenticatedOriginPullEnableOrDisableAHostnameForClientAuthenticationParams = HostnamesAPI.HostnamePerHostnameAuthenticatedOriginPullEnableOrDisableAHostnameForClientAuthenticationParams;
  export import Settings = SettingsAPI.Settings;
  export import SettingZoneLevelAuthenticatedOriginPullsGetEnablementSettingForZoneResponse = SettingsAPI.SettingZoneLevelAuthenticatedOriginPullsGetEnablementSettingForZoneResponse;
  export import SettingZoneLevelAuthenticatedOriginPullsSetEnablementForZoneResponse = SettingsAPI.SettingZoneLevelAuthenticatedOriginPullsSetEnablementForZoneResponse;
  export import SettingZoneLevelAuthenticatedOriginPullsSetEnablementForZoneParams = SettingsAPI.SettingZoneLevelAuthenticatedOriginPullsSetEnablementForZoneParams;
}
