// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as CertificatesAPI from 'cloudflare/resources/zones/origin-tls-client-auths/hostnames/certificates';

export class Certificates extends APIResource {
  /**
   * Get the certificate by ID to be used for client authentication on a hostname.
   */
  retrieve(
    zoneIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CertificateRetrieveResponse> {
    return this._client.get(
      `/zones/${zoneIdentifier}/origin_tls_client_auth/hostnames/certificates/${identifier}`,
      options,
    );
  }

  /**
   * Delete Hostname Client Certificate
   */
  delete(
    zoneIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CertificateDeleteResponse> {
    return this._client.delete(
      `/zones/${zoneIdentifier}/origin_tls_client_auth/hostnames/certificates/${identifier}`,
      options,
    );
  }

  /**
   * List Certificates
   */
  perHostnameAuthenticatedOriginPullListCertificates(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CertificatePerHostnameAuthenticatedOriginPullListCertificatesResponse> {
    return this._client.get(
      `/zones/${zoneIdentifier}/origin_tls_client_auth/hostnames/certificates`,
      options,
    );
  }

  /**
   * Upload a certificate to be used for client authentication on a hostname. 10
   * hostname certificates per zone are allowed.
   */
  perHostnameAuthenticatedOriginPullUploadAHostnameClientCertificate(
    zoneIdentifier: string,
    body: CertificatePerHostnameAuthenticatedOriginPullUploadAHostnameClientCertificateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CertificatePerHostnameAuthenticatedOriginPullUploadAHostnameClientCertificateResponse> {
    return this._client.post(`/zones/${zoneIdentifier}/origin_tls_client_auth/hostnames/certificates`, {
      body,
      ...options,
    });
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
     * Identifier
     */
    id?: string;

    /**
     * The hostname certificate.
     */
    certificate?: string;

    /**
     * The date when the certificate expires.
     */
    expires_on?: string;

    /**
     * The certificate authority that issued the certificate.
     */
    issuer?: string;

    /**
     * The serial number on the uploaded certificate.
     */
    serial_number?: string;

    /**
     * The type of hash used for the certificate.
     */
    signature?: string;

    /**
     * Status of the certificate or the association.
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
     * The time when the certificate was uploaded.
     */
    uploaded_on?: string;
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

    /**
     * The hostname certificate.
     */
    certificate?: string;

    /**
     * The date when the certificate expires.
     */
    expires_on?: string;

    /**
     * The certificate authority that issued the certificate.
     */
    issuer?: string;

    /**
     * The serial number on the uploaded certificate.
     */
    serial_number?: string;

    /**
     * The type of hash used for the certificate.
     */
    signature?: string;

    /**
     * Status of the certificate or the association.
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
     * The time when the certificate was uploaded.
     */
    uploaded_on?: string;
  }
}

export interface CertificatePerHostnameAuthenticatedOriginPullListCertificatesResponse {
  errors?: Array<CertificatePerHostnameAuthenticatedOriginPullListCertificatesResponse.Error>;

  messages?: Array<CertificatePerHostnameAuthenticatedOriginPullListCertificatesResponse.Message>;

  result?: Array<CertificatePerHostnameAuthenticatedOriginPullListCertificatesResponse.Result>;

  result_info?: CertificatePerHostnameAuthenticatedOriginPullListCertificatesResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace CertificatePerHostnameAuthenticatedOriginPullListCertificatesResponse {
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
    cert_id?: string;

    /**
     * Status of the certificate or the association.
     */
    cert_status?:
      | 'initializing'
      | 'pending_deployment'
      | 'pending_deletion'
      | 'active'
      | 'deleted'
      | 'deployment_timed_out'
      | 'deletion_timed_out';

    /**
     * The time when the certificate was updated.
     */
    cert_updated_at?: string;

    /**
     * The time when the certificate was uploaded.
     */
    cert_uploaded_on?: string;

    /**
     * The hostname certificate.
     */
    certificate?: string;

    /**
     * The time when the certificate was created.
     */
    created_at?: string;

    /**
     * Indicates whether hostname-level authenticated origin pulls is enabled. A null
     * value voids the association.
     */
    enabled?: boolean | null;

    /**
     * The date when the certificate expires.
     */
    expires_on?: string;

    /**
     * The hostname on the origin for which the client certificate uploaded will be
     * used.
     */
    hostname?: string;

    /**
     * The certificate authority that issued the certificate.
     */
    issuer?: string;

    /**
     * The serial number on the uploaded certificate.
     */
    serial_number?: string;

    /**
     * The type of hash used for the certificate.
     */
    signature?: string;

    /**
     * Status of the certificate or the association.
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
     * The time when the certificate was updated.
     */
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

export interface CertificatePerHostnameAuthenticatedOriginPullUploadAHostnameClientCertificateResponse {
  errors?: Array<CertificatePerHostnameAuthenticatedOriginPullUploadAHostnameClientCertificateResponse.Error>;

  messages?: Array<CertificatePerHostnameAuthenticatedOriginPullUploadAHostnameClientCertificateResponse.Message>;

  result?: CertificatePerHostnameAuthenticatedOriginPullUploadAHostnameClientCertificateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace CertificatePerHostnameAuthenticatedOriginPullUploadAHostnameClientCertificateResponse {
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
     * The hostname certificate.
     */
    certificate?: string;

    /**
     * The date when the certificate expires.
     */
    expires_on?: string;

    /**
     * The certificate authority that issued the certificate.
     */
    issuer?: string;

    /**
     * The serial number on the uploaded certificate.
     */
    serial_number?: string;

    /**
     * The type of hash used for the certificate.
     */
    signature?: string;

    /**
     * Status of the certificate or the association.
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
     * The time when the certificate was uploaded.
     */
    uploaded_on?: string;
  }
}

export interface CertificatePerHostnameAuthenticatedOriginPullUploadAHostnameClientCertificateParams {
  /**
   * The hostname certificate.
   */
  certificate: string;

  /**
   * The hostname certificate's private key.
   */
  private_key: string;
}

export namespace Certificates {
  export import CertificateRetrieveResponse = CertificatesAPI.CertificateRetrieveResponse;
  export import CertificateDeleteResponse = CertificatesAPI.CertificateDeleteResponse;
  export import CertificatePerHostnameAuthenticatedOriginPullListCertificatesResponse = CertificatesAPI.CertificatePerHostnameAuthenticatedOriginPullListCertificatesResponse;
  export import CertificatePerHostnameAuthenticatedOriginPullUploadAHostnameClientCertificateResponse = CertificatesAPI.CertificatePerHostnameAuthenticatedOriginPullUploadAHostnameClientCertificateResponse;
  export import CertificatePerHostnameAuthenticatedOriginPullUploadAHostnameClientCertificateParams = CertificatesAPI.CertificatePerHostnameAuthenticatedOriginPullUploadAHostnameClientCertificateParams;
}
