// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as ClientCertificatesAPI from 'cloudflare/resources/zones/client-certificates';
import { Page } from 'cloudflare/pagination';

export class ClientCertificates extends APIResource {
  /**
   * Get Details for a single mTLS API Shield Client Certificate
   */
  retrieve(
    zoneIdentifier: string,
    clientCertificateIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ClientCertificateRetrieveResponse> {
    return this._client.get(
      `/zones/${zoneIdentifier}/client_certificates/${clientCertificateIdentifier}`,
      options,
    );
  }

  /**
   * If a API Shield mTLS Client Certificate is in a pending_revocation state, you
   * may reactivate it with this endpoint.
   */
  update(
    zoneIdentifier: string,
    clientCertificateIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ClientCertificateUpdateResponse> {
    return this._client.patch(
      `/zones/${zoneIdentifier}/client_certificates/${clientCertificateIdentifier}`,
      options,
    );
  }

  /**
   * Set a API Shield mTLS Client Certificate to pending_revocation status for
   * processing to revoked status.
   */
  delete(
    zoneIdentifier: string,
    clientCertificateIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ClientCertificateDeleteResponse> {
    return this._client.delete(
      `/zones/${zoneIdentifier}/client_certificates/${clientCertificateIdentifier}`,
      options,
    );
  }

  /**
   * Create a new API Shield mTLS Client Certificate
   */
  clientCertificateForAZoneCreateClientCertificate(
    zoneIdentifier: string,
    body: ClientCertificateClientCertificateForAZoneCreateClientCertificateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ClientCertificateClientCertificateForAZoneCreateClientCertificateResponse> {
    return this._client.post(`/zones/${zoneIdentifier}/client_certificates`, { body, ...options });
  }

  /**
   * List all of your Zone's API Shield mTLS Client Certificates by Status and/or
   * using Pagination
   */
  clientCertificateForAZoneListClientCertificates(
    zoneIdentifier: string,
    query?: ClientCertificateClientCertificateForAZoneListClientCertificatesParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    ClientCertificateClientCertificateForAZoneListClientCertificatesResponsesPage,
    ClientCertificateClientCertificateForAZoneListClientCertificatesResponse
  >;
  clientCertificateForAZoneListClientCertificates(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    ClientCertificateClientCertificateForAZoneListClientCertificatesResponsesPage,
    ClientCertificateClientCertificateForAZoneListClientCertificatesResponse
  >;
  clientCertificateForAZoneListClientCertificates(
    zoneIdentifier: string,
    query: ClientCertificateClientCertificateForAZoneListClientCertificatesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    ClientCertificateClientCertificateForAZoneListClientCertificatesResponsesPage,
    ClientCertificateClientCertificateForAZoneListClientCertificatesResponse
  > {
    if (isRequestOptions(query)) {
      return this.clientCertificateForAZoneListClientCertificates(zoneIdentifier, {}, query);
    }
    return this._client.getAPIList(
      `/zones/${zoneIdentifier}/client_certificates`,
      ClientCertificateClientCertificateForAZoneListClientCertificatesResponsesPage,
      { query, ...options },
    );
  }
}

export class ClientCertificateClientCertificateForAZoneListClientCertificatesResponsesPage extends Page<ClientCertificateClientCertificateForAZoneListClientCertificatesResponse> {}

export interface ClientCertificateRetrieveResponse {
  errors?: Array<ClientCertificateRetrieveResponse.Error>;

  messages?: Array<ClientCertificateRetrieveResponse.Message>;

  result?: ClientCertificateRetrieveResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ClientCertificateRetrieveResponse {
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
     * The Client Certificate PEM
     */
    certificate?: string;

    /**
     * Certificate Authority used to issue the Client Certificate
     */
    certificate_authority?: Result.CertificateAuthority;

    /**
     * Common Name of the Client Certificate
     */
    common_name?: string;

    /**
     * Country, provided by the CSR
     */
    country?: string;

    /**
     * The Certificate Signing Request (CSR). Must be newline-encoded.
     */
    csr?: string;

    /**
     * Date that the Client Certificate expires
     */
    expires_on?: string;

    /**
     * Unique identifier of the Client Certificate
     */
    fingerprint_sha256?: string;

    /**
     * Date that the Client Certificate was issued by the Certificate Authority
     */
    issued_on?: string;

    /**
     * Location, provided by the CSR
     */
    location?: string;

    /**
     * Organization, provided by the CSR
     */
    organization?: string;

    /**
     * Organizational Unit, provided by the CSR
     */
    organizational_unit?: string;

    /**
     * The serial number on the created Client Certificate.
     */
    serial_number?: string;

    /**
     * The type of hash used for the Client Certificate..
     */
    signature?: string;

    /**
     * Subject Key Identifier
     */
    ski?: string;

    /**
     * State, provided by the CSR
     */
    state?: string;

    /**
     * Client Certificates may be active or revoked, and the pending_reactivation or
     * pending_revocation represent in-progress asynchronous transitions
     */
    status?: 'active' | 'pending_reactivation' | 'pending_revocation' | 'revoked';

    /**
     * The number of days the Client Certificate will be valid after the issued_on date
     */
    validity_days?: number;
  }

  export namespace Result {
    /**
     * Certificate Authority used to issue the Client Certificate
     */
    export interface CertificateAuthority {
      id?: string;

      name?: string;
    }
  }
}

export interface ClientCertificateUpdateResponse {
  errors?: Array<ClientCertificateUpdateResponse.Error>;

  messages?: Array<ClientCertificateUpdateResponse.Message>;

  result?: ClientCertificateUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ClientCertificateUpdateResponse {
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
     * The Client Certificate PEM
     */
    certificate?: string;

    /**
     * Certificate Authority used to issue the Client Certificate
     */
    certificate_authority?: Result.CertificateAuthority;

    /**
     * Common Name of the Client Certificate
     */
    common_name?: string;

    /**
     * Country, provided by the CSR
     */
    country?: string;

    /**
     * The Certificate Signing Request (CSR). Must be newline-encoded.
     */
    csr?: string;

    /**
     * Date that the Client Certificate expires
     */
    expires_on?: string;

    /**
     * Unique identifier of the Client Certificate
     */
    fingerprint_sha256?: string;

    /**
     * Date that the Client Certificate was issued by the Certificate Authority
     */
    issued_on?: string;

    /**
     * Location, provided by the CSR
     */
    location?: string;

    /**
     * Organization, provided by the CSR
     */
    organization?: string;

    /**
     * Organizational Unit, provided by the CSR
     */
    organizational_unit?: string;

    /**
     * The serial number on the created Client Certificate.
     */
    serial_number?: string;

    /**
     * The type of hash used for the Client Certificate..
     */
    signature?: string;

    /**
     * Subject Key Identifier
     */
    ski?: string;

    /**
     * State, provided by the CSR
     */
    state?: string;

    /**
     * Client Certificates may be active or revoked, and the pending_reactivation or
     * pending_revocation represent in-progress asynchronous transitions
     */
    status?: 'active' | 'pending_reactivation' | 'pending_revocation' | 'revoked';

    /**
     * The number of days the Client Certificate will be valid after the issued_on date
     */
    validity_days?: number;
  }

  export namespace Result {
    /**
     * Certificate Authority used to issue the Client Certificate
     */
    export interface CertificateAuthority {
      id?: string;

      name?: string;
    }
  }
}

export interface ClientCertificateDeleteResponse {
  errors?: Array<ClientCertificateDeleteResponse.Error>;

  messages?: Array<ClientCertificateDeleteResponse.Message>;

  result?: ClientCertificateDeleteResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ClientCertificateDeleteResponse {
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
     * The Client Certificate PEM
     */
    certificate?: string;

    /**
     * Certificate Authority used to issue the Client Certificate
     */
    certificate_authority?: Result.CertificateAuthority;

    /**
     * Common Name of the Client Certificate
     */
    common_name?: string;

    /**
     * Country, provided by the CSR
     */
    country?: string;

    /**
     * The Certificate Signing Request (CSR). Must be newline-encoded.
     */
    csr?: string;

    /**
     * Date that the Client Certificate expires
     */
    expires_on?: string;

    /**
     * Unique identifier of the Client Certificate
     */
    fingerprint_sha256?: string;

    /**
     * Date that the Client Certificate was issued by the Certificate Authority
     */
    issued_on?: string;

    /**
     * Location, provided by the CSR
     */
    location?: string;

    /**
     * Organization, provided by the CSR
     */
    organization?: string;

    /**
     * Organizational Unit, provided by the CSR
     */
    organizational_unit?: string;

    /**
     * The serial number on the created Client Certificate.
     */
    serial_number?: string;

    /**
     * The type of hash used for the Client Certificate..
     */
    signature?: string;

    /**
     * Subject Key Identifier
     */
    ski?: string;

    /**
     * State, provided by the CSR
     */
    state?: string;

    /**
     * Client Certificates may be active or revoked, and the pending_reactivation or
     * pending_revocation represent in-progress asynchronous transitions
     */
    status?: 'active' | 'pending_reactivation' | 'pending_revocation' | 'revoked';

    /**
     * The number of days the Client Certificate will be valid after the issued_on date
     */
    validity_days?: number;
  }

  export namespace Result {
    /**
     * Certificate Authority used to issue the Client Certificate
     */
    export interface CertificateAuthority {
      id?: string;

      name?: string;
    }
  }
}

export interface ClientCertificateClientCertificateForAZoneCreateClientCertificateResponse {
  errors?: Array<ClientCertificateClientCertificateForAZoneCreateClientCertificateResponse.Error>;

  messages?: Array<ClientCertificateClientCertificateForAZoneCreateClientCertificateResponse.Message>;

  result?: ClientCertificateClientCertificateForAZoneCreateClientCertificateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ClientCertificateClientCertificateForAZoneCreateClientCertificateResponse {
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
     * The Client Certificate PEM
     */
    certificate?: string;

    /**
     * Certificate Authority used to issue the Client Certificate
     */
    certificate_authority?: Result.CertificateAuthority;

    /**
     * Common Name of the Client Certificate
     */
    common_name?: string;

    /**
     * Country, provided by the CSR
     */
    country?: string;

    /**
     * The Certificate Signing Request (CSR). Must be newline-encoded.
     */
    csr?: string;

    /**
     * Date that the Client Certificate expires
     */
    expires_on?: string;

    /**
     * Unique identifier of the Client Certificate
     */
    fingerprint_sha256?: string;

    /**
     * Date that the Client Certificate was issued by the Certificate Authority
     */
    issued_on?: string;

    /**
     * Location, provided by the CSR
     */
    location?: string;

    /**
     * Organization, provided by the CSR
     */
    organization?: string;

    /**
     * Organizational Unit, provided by the CSR
     */
    organizational_unit?: string;

    /**
     * The serial number on the created Client Certificate.
     */
    serial_number?: string;

    /**
     * The type of hash used for the Client Certificate..
     */
    signature?: string;

    /**
     * Subject Key Identifier
     */
    ski?: string;

    /**
     * State, provided by the CSR
     */
    state?: string;

    /**
     * Client Certificates may be active or revoked, and the pending_reactivation or
     * pending_revocation represent in-progress asynchronous transitions
     */
    status?: 'active' | 'pending_reactivation' | 'pending_revocation' | 'revoked';

    /**
     * The number of days the Client Certificate will be valid after the issued_on date
     */
    validity_days?: number;
  }

  export namespace Result {
    /**
     * Certificate Authority used to issue the Client Certificate
     */
    export interface CertificateAuthority {
      id?: string;

      name?: string;
    }
  }
}

export interface ClientCertificateClientCertificateForAZoneListClientCertificatesResponse {
  /**
   * Identifier
   */
  id?: string;

  /**
   * The Client Certificate PEM
   */
  certificate?: string;

  /**
   * Certificate Authority used to issue the Client Certificate
   */
  certificate_authority?: ClientCertificateClientCertificateForAZoneListClientCertificatesResponse.CertificateAuthority;

  /**
   * Common Name of the Client Certificate
   */
  common_name?: string;

  /**
   * Country, provided by the CSR
   */
  country?: string;

  /**
   * The Certificate Signing Request (CSR). Must be newline-encoded.
   */
  csr?: string;

  /**
   * Date that the Client Certificate expires
   */
  expires_on?: string;

  /**
   * Unique identifier of the Client Certificate
   */
  fingerprint_sha256?: string;

  /**
   * Date that the Client Certificate was issued by the Certificate Authority
   */
  issued_on?: string;

  /**
   * Location, provided by the CSR
   */
  location?: string;

  /**
   * Organization, provided by the CSR
   */
  organization?: string;

  /**
   * Organizational Unit, provided by the CSR
   */
  organizational_unit?: string;

  /**
   * The serial number on the created Client Certificate.
   */
  serial_number?: string;

  /**
   * The type of hash used for the Client Certificate..
   */
  signature?: string;

  /**
   * Subject Key Identifier
   */
  ski?: string;

  /**
   * State, provided by the CSR
   */
  state?: string;

  /**
   * Client Certificates may be active or revoked, and the pending_reactivation or
   * pending_revocation represent in-progress asynchronous transitions
   */
  status?: 'active' | 'pending_reactivation' | 'pending_revocation' | 'revoked';

  /**
   * The number of days the Client Certificate will be valid after the issued_on date
   */
  validity_days?: number;
}

export namespace ClientCertificateClientCertificateForAZoneListClientCertificatesResponse {
  /**
   * Certificate Authority used to issue the Client Certificate
   */
  export interface CertificateAuthority {
    id?: string;

    name?: string;
  }
}

export interface ClientCertificateClientCertificateForAZoneCreateClientCertificateParams {
  /**
   * The Certificate Signing Request (CSR). Must be newline-encoded.
   */
  csr: string;

  /**
   * The number of days the Client Certificate will be valid after the issued_on date
   */
  validity_days: number;
}

export interface ClientCertificateClientCertificateForAZoneListClientCertificatesParams {
  /**
   * Limit to the number of records returned.
   */
  limit?: number;

  /**
   * Offset the results
   */
  offset?: number;

  /**
   * Page number of paginated results.
   */
  page?: number;

  /**
   * Number of records per page.
   */
  per_page?: number;

  /**
   * Client Certitifcate Status to filter results by.
   */
  status?: 'all' | 'active' | 'pending_reactivation' | 'pending_revocation' | 'revoked';
}

export namespace ClientCertificates {
  export import ClientCertificateRetrieveResponse = ClientCertificatesAPI.ClientCertificateRetrieveResponse;
  export import ClientCertificateUpdateResponse = ClientCertificatesAPI.ClientCertificateUpdateResponse;
  export import ClientCertificateDeleteResponse = ClientCertificatesAPI.ClientCertificateDeleteResponse;
  export import ClientCertificateClientCertificateForAZoneCreateClientCertificateResponse = ClientCertificatesAPI.ClientCertificateClientCertificateForAZoneCreateClientCertificateResponse;
  export import ClientCertificateClientCertificateForAZoneListClientCertificatesResponse = ClientCertificatesAPI.ClientCertificateClientCertificateForAZoneListClientCertificatesResponse;
  export import ClientCertificateClientCertificateForAZoneListClientCertificatesResponsesPage = ClientCertificatesAPI.ClientCertificateClientCertificateForAZoneListClientCertificatesResponsesPage;
  export import ClientCertificateClientCertificateForAZoneCreateClientCertificateParams = ClientCertificatesAPI.ClientCertificateClientCertificateForAZoneCreateClientCertificateParams;
  export import ClientCertificateClientCertificateForAZoneListClientCertificatesParams = ClientCertificatesAPI.ClientCertificateClientCertificateForAZoneListClientCertificatesParams;
}
