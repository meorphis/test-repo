// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as HostnameAssociationsAPI from 'cloudflare/resources/zones/certificate-authorities/hostname-associations';

export class HostnameAssociations extends APIResource {
  /**
   * List Hostname Associations
   */
  clientCertificateForAZoneListHostnameAssociations(
    zoneIdentifier: string,
    query?: HostnameAssociationClientCertificateForAZoneListHostnameAssociationsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HostnameAssociationClientCertificateForAZoneListHostnameAssociationsResponse>;
  clientCertificateForAZoneListHostnameAssociations(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HostnameAssociationClientCertificateForAZoneListHostnameAssociationsResponse>;
  clientCertificateForAZoneListHostnameAssociations(
    zoneIdentifier: string,
    query:
      | HostnameAssociationClientCertificateForAZoneListHostnameAssociationsParams
      | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<HostnameAssociationClientCertificateForAZoneListHostnameAssociationsResponse> {
    if (isRequestOptions(query)) {
      return this.clientCertificateForAZoneListHostnameAssociations(zoneIdentifier, {}, query);
    }
    return this._client.get(`/zones/${zoneIdentifier}/certificate_authorities/hostname_associations`, {
      query,
      ...options,
    });
  }

  /**
   * Replace Hostname Associations
   */
  clientCertificateForAZonePutHostnameAssociations(
    zoneIdentifier: string,
    body: HostnameAssociationClientCertificateForAZonePutHostnameAssociationsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HostnameAssociationClientCertificateForAZonePutHostnameAssociationsResponse> {
    return this._client.put(`/zones/${zoneIdentifier}/certificate_authorities/hostname_associations`, {
      body,
      ...options,
    });
  }
}

export interface HostnameAssociationClientCertificateForAZoneListHostnameAssociationsResponse {
  errors?: Array<HostnameAssociationClientCertificateForAZoneListHostnameAssociationsResponse.Error>;

  messages?: Array<HostnameAssociationClientCertificateForAZoneListHostnameAssociationsResponse.Message>;

  result?: HostnameAssociationClientCertificateForAZoneListHostnameAssociationsResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace HostnameAssociationClientCertificateForAZoneListHostnameAssociationsResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    hostnames?: Array<string>;

    /**
     * The UUID for a certificate that was uploaded to the mTLS Certificate Management
     * endpoint. If no mtls_certificate_id is given, the hostnames will be associated
     * to your active Cloudflare Managed CA.
     */
    mtls_certificate_id?: string;
  }
}

export interface HostnameAssociationClientCertificateForAZonePutHostnameAssociationsResponse {
  errors?: Array<HostnameAssociationClientCertificateForAZonePutHostnameAssociationsResponse.Error>;

  messages?: Array<HostnameAssociationClientCertificateForAZonePutHostnameAssociationsResponse.Message>;

  result?: HostnameAssociationClientCertificateForAZonePutHostnameAssociationsResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace HostnameAssociationClientCertificateForAZonePutHostnameAssociationsResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    hostnames?: Array<string>;

    /**
     * The UUID for a certificate that was uploaded to the mTLS Certificate Management
     * endpoint. If no mtls_certificate_id is given, the hostnames will be associated
     * to your active Cloudflare Managed CA.
     */
    mtls_certificate_id?: string;
  }
}

export interface HostnameAssociationClientCertificateForAZoneListHostnameAssociationsParams {
  /**
   * The UUID to match against for a certificate that was uploaded to the mTLS
   * Certificate Management endpoint. If no mtls_certificate_id is given, the results
   * will be the hostnames associated to your active Cloudflare Managed CA.
   */
  mtls_certificate_id?: string;
}

export interface HostnameAssociationClientCertificateForAZonePutHostnameAssociationsParams {
  hostnames?: Array<string>;

  /**
   * The UUID for a certificate that was uploaded to the mTLS Certificate Management
   * endpoint. If no mtls_certificate_id is given, the hostnames will be associated
   * to your active Cloudflare Managed CA.
   */
  mtls_certificate_id?: string;
}

export namespace HostnameAssociations {
  export import HostnameAssociationClientCertificateForAZoneListHostnameAssociationsResponse = HostnameAssociationsAPI.HostnameAssociationClientCertificateForAZoneListHostnameAssociationsResponse;
  export import HostnameAssociationClientCertificateForAZonePutHostnameAssociationsResponse = HostnameAssociationsAPI.HostnameAssociationClientCertificateForAZonePutHostnameAssociationsResponse;
  export import HostnameAssociationClientCertificateForAZoneListHostnameAssociationsParams = HostnameAssociationsAPI.HostnameAssociationClientCertificateForAZoneListHostnameAssociationsParams;
  export import HostnameAssociationClientCertificateForAZonePutHostnameAssociationsParams = HostnameAssociationsAPI.HostnameAssociationClientCertificateForAZonePutHostnameAssociationsParams;
}
