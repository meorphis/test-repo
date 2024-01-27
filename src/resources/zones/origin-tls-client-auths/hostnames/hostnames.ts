// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as HostnamesAPI from 'cloudflare/resources/zones/origin-tls-client-auths/hostnames/hostnames';
import * as CertificatesAPI from 'cloudflare/resources/zones/origin-tls-client-auths/hostnames/certificates';

export class Hostnames extends APIResource {
  certificates: CertificatesAPI.Certificates = new CertificatesAPI.Certificates(this._client);

  /**
   * Get the Hostname Status for Client Authentication
   */
  retrieve(
    zoneIdentifier: string,
    hostname: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HostnameRetrieveResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/origin_tls_client_auth/hostnames/${hostname}`, options);
  }

  /**
   * Associate a hostname to a certificate and enable, disable or invalidate the
   * association. If disabled, client certificate will not be sent to the hostname
   * even if activated at the zone level. 100 maximum associations on a single
   * certificate are allowed. Note: Use a null value for parameter _enabled_ to
   * invalidate the association.
   */
  perHostnameAuthenticatedOriginPullEnableOrDisableAHostnameForClientAuthentication(
    zoneIdentifier: string,
    body: HostnamePerHostnameAuthenticatedOriginPullEnableOrDisableAHostnameForClientAuthenticationParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HostnamePerHostnameAuthenticatedOriginPullEnableOrDisableAHostnameForClientAuthenticationResponse> {
    return this._client.put(`/zones/${zoneIdentifier}/origin_tls_client_auth/hostnames`, {
      body,
      ...options,
    });
  }
}

export interface HostnameRetrieveResponse {
  errors?: Array<HostnameRetrieveResponse.Error>;

  messages?: Array<HostnameRetrieveResponse.Message>;

  result?: HostnameRetrieveResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace HostnameRetrieveResponse {
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
}

export interface HostnamePerHostnameAuthenticatedOriginPullEnableOrDisableAHostnameForClientAuthenticationResponse {
  errors?: Array<HostnamePerHostnameAuthenticatedOriginPullEnableOrDisableAHostnameForClientAuthenticationResponse.Error>;

  messages?: Array<HostnamePerHostnameAuthenticatedOriginPullEnableOrDisableAHostnameForClientAuthenticationResponse.Message>;

  result?: Array<HostnamePerHostnameAuthenticatedOriginPullEnableOrDisableAHostnameForClientAuthenticationResponse.Result>;

  result_info?: HostnamePerHostnameAuthenticatedOriginPullEnableOrDisableAHostnameForClientAuthenticationResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace HostnamePerHostnameAuthenticatedOriginPullEnableOrDisableAHostnameForClientAuthenticationResponse {
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

export interface HostnamePerHostnameAuthenticatedOriginPullEnableOrDisableAHostnameForClientAuthenticationParams {
  config: Array<HostnamePerHostnameAuthenticatedOriginPullEnableOrDisableAHostnameForClientAuthenticationParams.Config>;
}

export namespace HostnamePerHostnameAuthenticatedOriginPullEnableOrDisableAHostnameForClientAuthenticationParams {
  export interface Config {
    /**
     * Certificate identifier tag.
     */
    cert_id?: string;

    /**
     * Indicates whether hostname-level authenticated origin pulls is enabled. A null
     * value voids the association.
     */
    enabled?: boolean | null;

    /**
     * The hostname on the origin for which the client certificate uploaded will be
     * used.
     */
    hostname?: string;
  }
}

export namespace Hostnames {
  export import HostnameRetrieveResponse = HostnamesAPI.HostnameRetrieveResponse;
  export import HostnamePerHostnameAuthenticatedOriginPullEnableOrDisableAHostnameForClientAuthenticationResponse = HostnamesAPI.HostnamePerHostnameAuthenticatedOriginPullEnableOrDisableAHostnameForClientAuthenticationResponse;
  export import HostnamePerHostnameAuthenticatedOriginPullEnableOrDisableAHostnameForClientAuthenticationParams = HostnamesAPI.HostnamePerHostnameAuthenticatedOriginPullEnableOrDisableAHostnameForClientAuthenticationParams;
  export import Certificates = CertificatesAPI.Certificates;
  export import CertificateRetrieveResponse = CertificatesAPI.CertificateRetrieveResponse;
  export import CertificateDeleteResponse = CertificatesAPI.CertificateDeleteResponse;
  export import CertificatePerHostnameAuthenticatedOriginPullListCertificatesResponse = CertificatesAPI.CertificatePerHostnameAuthenticatedOriginPullListCertificatesResponse;
  export import CertificatePerHostnameAuthenticatedOriginPullUploadAHostnameClientCertificateResponse = CertificatesAPI.CertificatePerHostnameAuthenticatedOriginPullUploadAHostnameClientCertificateResponse;
  export import CertificatePerHostnameAuthenticatedOriginPullUploadAHostnameClientCertificateParams = CertificatesAPI.CertificatePerHostnameAuthenticatedOriginPullUploadAHostnameClientCertificateParams;
}
