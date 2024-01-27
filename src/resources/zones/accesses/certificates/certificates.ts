// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as CertificatesAPI from 'cloudflare/resources/zones/accesses/certificates/certificates';
import * as SettingsAPI from 'cloudflare/resources/zones/accesses/certificates/settings';

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
    return this._client.get(`/zones/${identifier}/access/certificates/${uuid}`, options);
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
    return this._client.put(`/zones/${identifier}/access/certificates/${uuid}`, { body, ...options });
  }

  /**
   * Lists all mTLS certificates.
   */
  list(identifier: string, options?: Core.RequestOptions): Core.APIPromise<CertificateListResponse> {
    return this._client.get(`/zones/${identifier}/access/certificates`, options);
  }

  /**
   * Deletes an mTLS certificate.
   */
  delete(
    identifier: string,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CertificateDeleteResponse> {
    return this._client.delete(`/zones/${identifier}/access/certificates/${uuid}`, options);
  }

  /**
   * Adds a new mTLS root certificate to Access.
   */
  add(
    identifier: string,
    body: CertificateAddParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CertificateAddResponse> {
    return this._client.post(`/zones/${identifier}/access/certificates`, { body, ...options });
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

export interface CertificateListResponse {
  errors?: Array<CertificateListResponse.Error>;

  messages?: Array<CertificateListResponse.Message>;

  result?: Array<CertificateListResponse.Result>;

  result_info?: CertificateListResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace CertificateListResponse {
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

export interface CertificateAddResponse {
  errors?: Array<CertificateAddResponse.Error>;

  messages?: Array<CertificateAddResponse.Message>;

  result?: CertificateAddResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace CertificateAddResponse {
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

export interface CertificateAddParams {
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
  export import CertificateListResponse = CertificatesAPI.CertificateListResponse;
  export import CertificateDeleteResponse = CertificatesAPI.CertificateDeleteResponse;
  export import CertificateAddResponse = CertificatesAPI.CertificateAddResponse;
  export import CertificateUpdateParams = CertificatesAPI.CertificateUpdateParams;
  export import CertificateAddParams = CertificatesAPI.CertificateAddParams;
  export import Settings = SettingsAPI.Settings;
  export import SettingListResponse = SettingsAPI.SettingListResponse;
}
