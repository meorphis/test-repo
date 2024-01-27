// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as CertificatesAPI from 'cloudflare/resources/certificates';

export class Certificates extends APIResource {
  /**
   * Create an Origin CA certificate. Use your Origin CA Key as your User Service Key
   * when calling this endpoint ([see above](#requests)).
   */
  create(
    body: CertificateCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CertificateCreateResponse> {
    return this._client.post('/certificates', { body, ...options });
  }

  /**
   * Get an existing Origin CA certificate by its serial number. Use your Origin CA
   * Key as your User Service Key when calling this endpoint
   * ([see above](#requests)).
   */
  retrieve(identifier: string, options?: Core.RequestOptions): Core.APIPromise<CertificateRetrieveResponse> {
    return this._client.get(`/certificates/${identifier}`, options);
  }

  /**
   * List all existing Origin CA certificates for a given zone. Use your Origin CA
   * Key as your User Service Key when calling this endpoint
   * ([see above](#requests)).
   */
  list(options?: Core.RequestOptions): Core.APIPromise<CertificateListResponse> {
    return this._client.get('/certificates', options);
  }

  /**
   * Revoke an existing Origin CA certificate by its serial number. Use your Origin
   * CA Key as your User Service Key when calling this endpoint
   * ([see above](#requests)).
   */
  delete(identifier: string, options?: Core.RequestOptions): Core.APIPromise<CertificateDeleteResponse> {
    return this._client.delete(`/certificates/${identifier}`, options);
  }
}

export interface CertificateCreateResponse {
  errors?: Array<CertificateCreateResponse.Error>;

  messages?: Array<CertificateCreateResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace CertificateCreateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface CertificateRetrieveResponse {
  errors?: Array<CertificateRetrieveResponse.Error>;

  messages?: Array<CertificateRetrieveResponse.Message>;

  result?: unknown;

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
     * The Certificate Signing Request (CSR). Must be newline-encoded.
     */
    csr: string;

    /**
     * Array of hostnames or wildcard names (e.g., \*.example.com) bound to the
     * certificate.
     */
    hostnames: Array<unknown>;

    /**
     * Signature type desired on certificate ("origin-rsa" (rsa), "origin-ecc" (ecdsa),
     * or "keyless-certificate" (for Keyless SSL servers).
     */
    request_type: 'origin-rsa' | 'origin-ecc' | 'keyless-certificate';

    /**
     * The number of days for which the certificate should be valid.
     */
    requested_validity: 7 | 30 | 90 | 365 | 730 | 1095 | 5475;

    /**
     * Identifier
     */
    id?: string;

    /**
     * The Origin CA certificate. Will be newline-encoded.
     */
    certificate?: string;

    /**
     * When the certificate will expire.
     */
    expires_on?: string;
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
     * Identifier
     */
    id?: string;
  }
}

export interface CertificateCreateParams {
  /**
   * The Certificate Signing Request (CSR). Must be newline-encoded.
   */
  csr?: string;

  /**
   * Array of hostnames or wildcard names (e.g., \*.example.com) bound to the
   * certificate.
   */
  hostnames?: Array<unknown>;

  /**
   * Signature type desired on certificate ("origin-rsa" (rsa), "origin-ecc" (ecdsa),
   * or "keyless-certificate" (for Keyless SSL servers).
   */
  request_type?: 'origin-rsa' | 'origin-ecc' | 'keyless-certificate';

  /**
   * The number of days for which the certificate should be valid.
   */
  requested_validity?: 7 | 30 | 90 | 365 | 730 | 1095 | 5475;
}

export namespace Certificates {
  export import CertificateCreateResponse = CertificatesAPI.CertificateCreateResponse;
  export import CertificateRetrieveResponse = CertificatesAPI.CertificateRetrieveResponse;
  export import CertificateListResponse = CertificatesAPI.CertificateListResponse;
  export import CertificateDeleteResponse = CertificatesAPI.CertificateDeleteResponse;
  export import CertificateCreateParams = CertificatesAPI.CertificateCreateParams;
}
