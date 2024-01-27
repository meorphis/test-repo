// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as CertificatesAPI from 'cloudflare/resources/accounts/access/certificates/certificates';
import * as SettingsAPI from 'cloudflare/resources/accounts/access/certificates/settings';

export class Certificates extends APIResource {
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);

  /**
   * Fetches a single mTLS certificate.
   */
  retrieve(
    identifier: string,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CertificateRetrieveResponse> {
    return this._client.get(`/accounts/${identifier}/access/certificates/${uuid}`, options);
  }

  /**
   * Updates a configured mTLS certificate.
   */
  update(
    identifier: string,
    uuid: string,
    body: CertificateUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CertificateUpdateResponse> {
    return this._client.put(`/accounts/${identifier}/access/certificates/${uuid}`, { body, ...options });
  }

  /**
   * Deletes an mTLS certificate.
   */
  delete(
    identifier: string,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CertificateDeleteResponse> {
    return this._client.delete(`/accounts/${identifier}/access/certificates/${uuid}`, options);
  }

  /**
   * Adds a new mTLS root certificate to Access.
   */
  accessMTlsAuthenticationAddAnMTlsCertificate(
    identifier: string,
    body: CertificateAccessMTlsAuthenticationAddAnMTlsCertificateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CertificateAccessMTlsAuthenticationAddAnMTlsCertificateResponse> {
    return this._client.post(`/accounts/${identifier}/access/certificates`, { body, ...options });
  }

  /**
   * Lists all mTLS root certificates.
   */
  accessMTlsAuthenticationListMTlsCertificates(
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CertificateAccessMTlsAuthenticationListMTlsCertificatesResponse> {
    return this._client.get(`/accounts/${identifier}/access/certificates`, options);
  }
}

export interface CertificateRetrieveResponse {
  errors?: Array<CertificateRetrieveResponse.Error>;

  messages?: Array<CertificateRetrieveResponse.Message>;

  result?: CertificateRetrieveResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace CertificateRetrieveResponse {
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
     * The ID of the application that will use this certificate.
     */
    id?: unknown;

    /**
     * The hostnames of the applications that will use this certificate.
     */
    associated_hostnames?: Array<string>;

    created_at?: string;

    expires_on?: string;

    /**
     * The MD5 fingerprint of the certificate.
     */
    fingerprint?: string;

    /**
     * The name of the certificate.
     */
    name?: string;

    updated_at?: string;
  }
}

export interface CertificateUpdateResponse {
  errors?: Array<CertificateUpdateResponse.Error>;

  messages?: Array<CertificateUpdateResponse.Message>;

  result?: CertificateUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace CertificateUpdateResponse {
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
     * The ID of the application that will use this certificate.
     */
    id?: unknown;

    /**
     * The hostnames of the applications that will use this certificate.
     */
    associated_hostnames?: Array<string>;

    created_at?: string;

    expires_on?: string;

    /**
     * The MD5 fingerprint of the certificate.
     */
    fingerprint?: string;

    /**
     * The name of the certificate.
     */
    name?: string;

    updated_at?: string;
  }
}

export interface CertificateDeleteResponse {
  errors?: Array<CertificateDeleteResponse.Error>;

  messages?: Array<CertificateDeleteResponse.Message>;

  result?: CertificateDeleteResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace CertificateDeleteResponse {
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
     * UUID
     */
    id?: string;
  }
}

export interface CertificateAccessMTlsAuthenticationAddAnMTlsCertificateResponse {
  errors?: Array<CertificateAccessMTlsAuthenticationAddAnMTlsCertificateResponse.Error>;

  messages?: Array<CertificateAccessMTlsAuthenticationAddAnMTlsCertificateResponse.Message>;

  result?: CertificateAccessMTlsAuthenticationAddAnMTlsCertificateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace CertificateAccessMTlsAuthenticationAddAnMTlsCertificateResponse {
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
     * The ID of the application that will use this certificate.
     */
    id?: unknown;

    /**
     * The hostnames of the applications that will use this certificate.
     */
    associated_hostnames?: Array<string>;

    created_at?: string;

    expires_on?: string;

    /**
     * The MD5 fingerprint of the certificate.
     */
    fingerprint?: string;

    /**
     * The name of the certificate.
     */
    name?: string;

    updated_at?: string;
  }
}

export interface CertificateAccessMTlsAuthenticationListMTlsCertificatesResponse {
  errors?: Array<CertificateAccessMTlsAuthenticationListMTlsCertificatesResponse.Error>;

  messages?: Array<CertificateAccessMTlsAuthenticationListMTlsCertificatesResponse.Message>;

  result?: Array<CertificateAccessMTlsAuthenticationListMTlsCertificatesResponse.Result>;

  result_info?: CertificateAccessMTlsAuthenticationListMTlsCertificatesResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace CertificateAccessMTlsAuthenticationListMTlsCertificatesResponse {
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
     * The ID of the application that will use this certificate.
     */
    id?: unknown;

    /**
     * The hostnames of the applications that will use this certificate.
     */
    associated_hostnames?: Array<string>;

    created_at?: string;

    expires_on?: string;

    /**
     * The MD5 fingerprint of the certificate.
     */
    fingerprint?: string;

    /**
     * The name of the certificate.
     */
    name?: string;

    updated_at?: string;
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

export interface CertificateUpdateParams {
  /**
   * The hostnames of the applications that will use this certificate.
   */
  associated_hostnames: Array<string>;

  /**
   * The name of the certificate.
   */
  name?: string;
}

export interface CertificateAccessMTlsAuthenticationAddAnMTlsCertificateParams {
  /**
   * The certificate content.
   */
  certificate: string;

  /**
   * The name of the certificate.
   */
  name: string;

  /**
   * The hostnames of the applications that will use this certificate.
   */
  associated_hostnames?: Array<string>;
}

export namespace Certificates {
  export import CertificateRetrieveResponse = CertificatesAPI.CertificateRetrieveResponse;
  export import CertificateUpdateResponse = CertificatesAPI.CertificateUpdateResponse;
  export import CertificateDeleteResponse = CertificatesAPI.CertificateDeleteResponse;
  export import CertificateAccessMTlsAuthenticationAddAnMTlsCertificateResponse = CertificatesAPI.CertificateAccessMTlsAuthenticationAddAnMTlsCertificateResponse;
  export import CertificateAccessMTlsAuthenticationListMTlsCertificatesResponse = CertificatesAPI.CertificateAccessMTlsAuthenticationListMTlsCertificatesResponse;
  export import CertificateUpdateParams = CertificatesAPI.CertificateUpdateParams;
  export import CertificateAccessMTlsAuthenticationAddAnMTlsCertificateParams = CertificatesAPI.CertificateAccessMTlsAuthenticationAddAnMTlsCertificateParams;
  export import Settings = SettingsAPI.Settings;
  export import SettingUpdateResponse = SettingsAPI.SettingUpdateResponse;
  export import SettingListResponse = SettingsAPI.SettingListResponse;
  export import SettingUpdateParams = SettingsAPI.SettingUpdateParams;
}
