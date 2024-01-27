// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as MtlsCertificatesAPI from 'cloudflare/resources/accounts/mtls-certificates/mtls-certificates';
import * as AssociationsAPI from 'cloudflare/resources/accounts/mtls-certificates/associations';

export class MtlsCertificates extends APIResource {
  associations: AssociationsAPI.Associations = new AssociationsAPI.Associations(this._client);

  /**
   * Fetches a single mTLS certificate.
   */
  retrieve(
    accountIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MtlsCertificateRetrieveResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/mtls_certificates/${identifier}`, options);
  }

  /**
   * Deletes the mTLS certificate unless the certificate is in use by one or more
   * Cloudflare services.
   */
  delete(
    accountIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MtlsCertificateDeleteResponse> {
    return this._client.delete(`/accounts/${accountIdentifier}/mtls_certificates/${identifier}`, options);
  }

  /**
   * Lists all mTLS certificates.
   */
  mTlsCertificateManagementListMTlsCertificates(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MtlsCertificateMTlsCertificateManagementListMTlsCertificatesResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/mtls_certificates`, options);
  }

  /**
   * Upload a certificate that you want to use with mTLS-enabled Cloudflare services.
   */
  mTlsCertificateManagementUploadMTlsCertificate(
    accountIdentifier: string,
    body: MtlsCertificateMTlsCertificateManagementUploadMTlsCertificateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MtlsCertificateMTlsCertificateManagementUploadMTlsCertificateResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/mtls_certificates`, { body, ...options });
  }
}

export interface MtlsCertificateRetrieveResponse {
  errors?: Array<MtlsCertificateRetrieveResponse.Error>;

  messages?: Array<MtlsCertificateRetrieveResponse.Message>;

  result?: MtlsCertificateRetrieveResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace MtlsCertificateRetrieveResponse {
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
     * Indicates whether the certificate is a CA or leaf certificate.
     */
    ca?: boolean;

    /**
     * The uploaded root CA certificate.
     */
    certificates?: string;

    /**
     * When the certificate expires.
     */
    expires_on?: string;

    /**
     * The certificate authority that issued the certificate.
     */
    issuer?: string;

    /**
     * Optional unique name for the certificate. Only used for human readability.
     */
    name?: string;

    /**
     * The certificate serial number.
     */
    serial_number?: string;

    /**
     * The type of hash used for the certificate.
     */
    signature?: string;

    /**
     * This is the time the certificate was uploaded.
     */
    uploaded_on?: string;
  }
}

export interface MtlsCertificateDeleteResponse {
  errors?: Array<MtlsCertificateDeleteResponse.Error>;

  messages?: Array<MtlsCertificateDeleteResponse.Message>;

  result?: MtlsCertificateDeleteResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace MtlsCertificateDeleteResponse {
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
     * Indicates whether the certificate is a CA or leaf certificate.
     */
    ca?: boolean;

    /**
     * The uploaded root CA certificate.
     */
    certificates?: string;

    /**
     * When the certificate expires.
     */
    expires_on?: string;

    /**
     * The certificate authority that issued the certificate.
     */
    issuer?: string;

    /**
     * Optional unique name for the certificate. Only used for human readability.
     */
    name?: string;

    /**
     * The certificate serial number.
     */
    serial_number?: string;

    /**
     * The type of hash used for the certificate.
     */
    signature?: string;

    /**
     * This is the time the certificate was uploaded.
     */
    uploaded_on?: string;
  }
}

export interface MtlsCertificateMTlsCertificateManagementListMTlsCertificatesResponse {
  errors?: Array<MtlsCertificateMTlsCertificateManagementListMTlsCertificatesResponse.Error>;

  messages?: Array<MtlsCertificateMTlsCertificateManagementListMTlsCertificatesResponse.Message>;

  result?: Array<MtlsCertificateMTlsCertificateManagementListMTlsCertificatesResponse.Result>;

  result_info?: MtlsCertificateMTlsCertificateManagementListMTlsCertificatesResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace MtlsCertificateMTlsCertificateManagementListMTlsCertificatesResponse {
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
     * Indicates whether the certificate is a CA or leaf certificate.
     */
    ca?: boolean;

    /**
     * The uploaded root CA certificate.
     */
    certificates?: string;

    /**
     * When the certificate expires.
     */
    expires_on?: string;

    /**
     * The certificate authority that issued the certificate.
     */
    issuer?: string;

    /**
     * Optional unique name for the certificate. Only used for human readability.
     */
    name?: string;

    /**
     * The certificate serial number.
     */
    serial_number?: string;

    /**
     * The type of hash used for the certificate.
     */
    signature?: string;

    /**
     * This is the time the certificate was uploaded.
     */
    uploaded_on?: string;
  }

  export interface ResultInfo {
    count?: unknown;

    page?: unknown;

    per_page?: unknown;

    total_count?: unknown;

    total_pages?: unknown;
  }
}

export interface MtlsCertificateMTlsCertificateManagementUploadMTlsCertificateResponse {
  errors?: Array<MtlsCertificateMTlsCertificateManagementUploadMTlsCertificateResponse.Error>;

  messages?: Array<MtlsCertificateMTlsCertificateManagementUploadMTlsCertificateResponse.Message>;

  result?: MtlsCertificateMTlsCertificateManagementUploadMTlsCertificateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace MtlsCertificateMTlsCertificateManagementUploadMTlsCertificateResponse {
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
     * Indicates whether the certificate is a CA or leaf certificate.
     */
    ca?: boolean;

    /**
     * The uploaded root CA certificate.
     */
    certificates?: string;

    /**
     * When the certificate expires.
     */
    expires_on?: string;

    /**
     * The certificate authority that issued the certificate.
     */
    issuer?: string;

    /**
     * Optional unique name for the certificate. Only used for human readability.
     */
    name?: string;

    /**
     * The certificate serial number.
     */
    serial_number?: string;

    /**
     * The type of hash used for the certificate.
     */
    signature?: string;

    /**
     * This is the time the certificate was updated.
     */
    updated_at?: string;

    /**
     * This is the time the certificate was uploaded.
     */
    uploaded_on?: string;
  }
}

export interface MtlsCertificateMTlsCertificateManagementUploadMTlsCertificateParams {
  /**
   * Indicates whether the certificate is a CA or leaf certificate.
   */
  ca: boolean;

  /**
   * The uploaded root CA certificate.
   */
  certificates: string;

  /**
   * Optional unique name for the certificate. Only used for human readability.
   */
  name?: string;

  /**
   * The private key for the certificate
   */
  private_key?: string;
}

export namespace MtlsCertificates {
  export import MtlsCertificateRetrieveResponse = MtlsCertificatesAPI.MtlsCertificateRetrieveResponse;
  export import MtlsCertificateDeleteResponse = MtlsCertificatesAPI.MtlsCertificateDeleteResponse;
  export import MtlsCertificateMTlsCertificateManagementListMTlsCertificatesResponse = MtlsCertificatesAPI.MtlsCertificateMTlsCertificateManagementListMTlsCertificatesResponse;
  export import MtlsCertificateMTlsCertificateManagementUploadMTlsCertificateResponse = MtlsCertificatesAPI.MtlsCertificateMTlsCertificateManagementUploadMTlsCertificateResponse;
  export import MtlsCertificateMTlsCertificateManagementUploadMTlsCertificateParams = MtlsCertificatesAPI.MtlsCertificateMTlsCertificateManagementUploadMTlsCertificateParams;
  export import Associations = AssociationsAPI.Associations;
  export import AssociationMTlsCertificateManagementListMTlsCertificateAssociationsResponse = AssociationsAPI.AssociationMTlsCertificateManagementListMTlsCertificateAssociationsResponse;
}
