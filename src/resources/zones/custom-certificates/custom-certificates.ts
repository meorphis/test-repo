// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as CustomCertificatesAPI from 'cloudflare/resources/zones/custom-certificates/custom-certificates';
import * as PrioritizesAPI from 'cloudflare/resources/zones/custom-certificates/prioritizes';
import { Page } from 'cloudflare/pagination';

export class CustomCertificates extends APIResource {
  prioritizes: PrioritizesAPI.Prioritizes = new PrioritizesAPI.Prioritizes(this._client);

  /**
   * SSL Configuration Details
   */
  retrieve(
    zoneIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomCertificateRetrieveResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/custom_certificates/${identifier}`, options);
  }

  /**
   * Upload a new private key and/or PEM/CRT for the SSL certificate. Note: PATCHing
   * a configuration for sni_custom certificates will result in a new resource id
   * being returned, and the previous one being deleted.
   */
  update(
    zoneIdentifier: string,
    identifier: string,
    body: CustomCertificateUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomCertificateUpdateResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/custom_certificates/${identifier}`, {
      body,
      ...options,
    });
  }

  /**
   * Remove a SSL certificate from a zone.
   */
  delete(
    zoneIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomCertificateDeleteResponse> {
    return this._client.delete(`/zones/${zoneIdentifier}/custom_certificates/${identifier}`, options);
  }

  /**
   * Upload a new SSL certificate for a zone.
   */
  customSslForAZoneCreateSslConfiguration(
    zoneIdentifier: string,
    body: CustomCertificateCustomSslForAZoneCreateSslConfigurationParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomCertificateCustomSslForAZoneCreateSslConfigurationResponse> {
    return this._client.post(`/zones/${zoneIdentifier}/custom_certificates`, { body, ...options });
  }

  /**
   * List, search, and filter all of your custom SSL certificates. The higher
   * priority will break ties across overlapping 'legacy_custom' certificates, but
   * 'legacy_custom' certificates will always supercede 'sni_custom' certificates.
   */
  customSslForAZoneListSslConfigurations(
    zoneIdentifier: string,
    query?: CustomCertificateCustomSslForAZoneListSslConfigurationsParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    CustomCertificateCustomSslForAZoneListSslConfigurationsResponsesPage,
    CustomCertificateCustomSslForAZoneListSslConfigurationsResponse
  >;
  customSslForAZoneListSslConfigurations(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    CustomCertificateCustomSslForAZoneListSslConfigurationsResponsesPage,
    CustomCertificateCustomSslForAZoneListSslConfigurationsResponse
  >;
  customSslForAZoneListSslConfigurations(
    zoneIdentifier: string,
    query: CustomCertificateCustomSslForAZoneListSslConfigurationsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    CustomCertificateCustomSslForAZoneListSslConfigurationsResponsesPage,
    CustomCertificateCustomSslForAZoneListSslConfigurationsResponse
  > {
    if (isRequestOptions(query)) {
      return this.customSslForAZoneListSslConfigurations(zoneIdentifier, {}, query);
    }
    return this._client.getAPIList(
      `/zones/${zoneIdentifier}/custom_certificates`,
      CustomCertificateCustomSslForAZoneListSslConfigurationsResponsesPage,
      { query, ...options },
    );
  }
}

export class CustomCertificateCustomSslForAZoneListSslConfigurationsResponsesPage extends Page<CustomCertificateCustomSslForAZoneListSslConfigurationsResponse> {}

export interface CustomCertificateRetrieveResponse {
  errors?: Array<CustomCertificateRetrieveResponse.Error>;

  messages?: Array<CustomCertificateRetrieveResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace CustomCertificateRetrieveResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface CustomCertificateUpdateResponse {
  errors?: Array<CustomCertificateUpdateResponse.Error>;

  messages?: Array<CustomCertificateUpdateResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace CustomCertificateUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface CustomCertificateDeleteResponse {
  errors?: Array<CustomCertificateDeleteResponse.Error>;

  messages?: Array<CustomCertificateDeleteResponse.Message>;

  result?: CustomCertificateDeleteResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace CustomCertificateDeleteResponse {
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

export interface CustomCertificateCustomSslForAZoneCreateSslConfigurationResponse {
  errors?: Array<CustomCertificateCustomSslForAZoneCreateSslConfigurationResponse.Error>;

  messages?: Array<CustomCertificateCustomSslForAZoneCreateSslConfigurationResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace CustomCertificateCustomSslForAZoneCreateSslConfigurationResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface CustomCertificateCustomSslForAZoneListSslConfigurationsResponse {
  /**
   * Identifier
   */
  id: string;

  /**
   * A ubiquitous bundle has the highest probability of being verified everywhere,
   * even by clients using outdated or unusual trust stores. An optimal bundle uses
   * the shortest chain and newest intermediates. And the force bundle verifies the
   * chain, but does not otherwise modify it.
   */
  bundle_method: 'ubiquitous' | 'optimal' | 'force';

  /**
   * When the certificate from the authority expires.
   */
  expires_on: string;

  hosts: Array<string>;

  /**
   * The certificate authority that issued the certificate.
   */
  issuer: string;

  /**
   * When the certificate was last modified.
   */
  modified_on: string;

  /**
   * The order/priority in which the certificate will be used in a request. The
   * higher priority will break ties across overlapping 'legacy_custom' certificates,
   * but 'legacy_custom' certificates will always supercede 'sni_custom'
   * certificates.
   */
  priority: number;

  /**
   * The type of hash used for the certificate.
   */
  signature: string;

  /**
   * Status of the zone's custom SSL.
   */
  status: 'active' | 'expired' | 'deleted' | 'pending' | 'initializing';

  /**
   * When the certificate was uploaded to Cloudflare.
   */
  uploaded_on: string;

  /**
   * Identifier
   */
  zone_id: string;

  /**
   * Specify the region where your private key can be held locally for optimal TLS
   * performance. HTTPS connections to any excluded data center will still be fully
   * encrypted, but will incur some latency while Keyless SSL is used to complete the
   * handshake with the nearest allowed data center. Options allow distribution to
   * only to U.S. data centers, only to E.U. data centers, or only to highest
   * security data centers. Default distribution is to all Cloudflare datacenters,
   * for optimal performance.
   */
  geo_restrictions?: CustomCertificateCustomSslForAZoneListSslConfigurationsResponse.GeoRestrictions;

  keyless_server?: CustomCertificateCustomSslForAZoneListSslConfigurationsResponse.KeylessServer;

  /**
   * Specify the policy that determines the region where your private key will be
   * held locally. HTTPS connections to any excluded data center will still be fully
   * encrypted, but will incur some latency while Keyless SSL is used to complete the
   * handshake with the nearest allowed data center. Any combination of countries,
   * specified by their two letter country code
   * (https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements)
   * can be chosen, such as 'country: IN', as well as 'region: EU' which refers to
   * the EU region. If there are too few data centers satisfying the policy, it will
   * be rejected.
   */
  policy?: string;
}

export namespace CustomCertificateCustomSslForAZoneListSslConfigurationsResponse {
  /**
   * Specify the region where your private key can be held locally for optimal TLS
   * performance. HTTPS connections to any excluded data center will still be fully
   * encrypted, but will incur some latency while Keyless SSL is used to complete the
   * handshake with the nearest allowed data center. Options allow distribution to
   * only to U.S. data centers, only to E.U. data centers, or only to highest
   * security data centers. Default distribution is to all Cloudflare datacenters,
   * for optimal performance.
   */
  export interface GeoRestrictions {
    label?: 'us' | 'eu' | 'highest_security';
  }

  export interface KeylessServer {
    /**
     * Keyless certificate identifier tag.
     */
    id: string;

    /**
     * When the Keyless SSL was created.
     */
    created_on: string;

    /**
     * Whether or not the Keyless SSL is on or off.
     */
    enabled: boolean;

    /**
     * The keyless SSL name.
     */
    host: string;

    /**
     * When the Keyless SSL was last modified.
     */
    modified_on: string;

    /**
     * The keyless SSL name.
     */
    name: string;

    /**
     * Available permissions for the Keyless SSL for the current user requesting the
     * item.
     */
    permissions: Array<unknown>;

    /**
     * The keyless SSL port used to communicate between Cloudflare and the client's
     * Keyless SSL server.
     */
    port: number;

    /**
     * Status of the Keyless SSL.
     */
    status: 'active' | 'deleted';

    /**
     * Configuration for using Keyless SSL through a Cloudflare Tunnel
     */
    tunnel?: KeylessServer.Tunnel;
  }

  export namespace KeylessServer {
    /**
     * Configuration for using Keyless SSL through a Cloudflare Tunnel
     */
    export interface Tunnel {
      /**
       * Private IP of the Key Server Host
       */
      private_ip: string;

      /**
       * Cloudflare Tunnel Virtual Network ID
       */
      vnet_id: string;
    }
  }
}

export interface CustomCertificateUpdateParams {
  /**
   * A ubiquitous bundle has the highest probability of being verified everywhere,
   * even by clients using outdated or unusual trust stores. An optimal bundle uses
   * the shortest chain and newest intermediates. And the force bundle verifies the
   * chain, but does not otherwise modify it.
   */
  bundle_method?: 'ubiquitous' | 'optimal' | 'force';

  /**
   * The zone's SSL certificate or certificate and the intermediate(s).
   */
  certificate?: string;

  /**
   * Specify the region where your private key can be held locally for optimal TLS
   * performance. HTTPS connections to any excluded data center will still be fully
   * encrypted, but will incur some latency while Keyless SSL is used to complete the
   * handshake with the nearest allowed data center. Options allow distribution to
   * only to U.S. data centers, only to E.U. data centers, or only to highest
   * security data centers. Default distribution is to all Cloudflare datacenters,
   * for optimal performance.
   */
  geo_restrictions?: CustomCertificateUpdateParams.GeoRestrictions;

  /**
   * Specify the policy that determines the region where your private key will be
   * held locally. HTTPS connections to any excluded data center will still be fully
   * encrypted, but will incur some latency while Keyless SSL is used to complete the
   * handshake with the nearest allowed data center. Any combination of countries,
   * specified by their two letter country code
   * (https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements)
   * can be chosen, such as 'country: IN', as well as 'region: EU' which refers to
   * the EU region. If there are too few data centers satisfying the policy, it will
   * be rejected.
   */
  policy?: string;

  /**
   * The zone's private key.
   */
  private_key?: string;
}

export namespace CustomCertificateUpdateParams {
  /**
   * Specify the region where your private key can be held locally for optimal TLS
   * performance. HTTPS connections to any excluded data center will still be fully
   * encrypted, but will incur some latency while Keyless SSL is used to complete the
   * handshake with the nearest allowed data center. Options allow distribution to
   * only to U.S. data centers, only to E.U. data centers, or only to highest
   * security data centers. Default distribution is to all Cloudflare datacenters,
   * for optimal performance.
   */
  export interface GeoRestrictions {
    label?: 'us' | 'eu' | 'highest_security';
  }
}

export interface CustomCertificateCustomSslForAZoneCreateSslConfigurationParams {
  /**
   * The zone's SSL certificate or certificate and the intermediate(s).
   */
  certificate: string;

  /**
   * The zone's private key.
   */
  private_key: string;

  /**
   * A ubiquitous bundle has the highest probability of being verified everywhere,
   * even by clients using outdated or unusual trust stores. An optimal bundle uses
   * the shortest chain and newest intermediates. And the force bundle verifies the
   * chain, but does not otherwise modify it.
   */
  bundle_method?: 'ubiquitous' | 'optimal' | 'force';

  /**
   * Specify the region where your private key can be held locally for optimal TLS
   * performance. HTTPS connections to any excluded data center will still be fully
   * encrypted, but will incur some latency while Keyless SSL is used to complete the
   * handshake with the nearest allowed data center. Options allow distribution to
   * only to U.S. data centers, only to E.U. data centers, or only to highest
   * security data centers. Default distribution is to all Cloudflare datacenters,
   * for optimal performance.
   */
  geo_restrictions?: CustomCertificateCustomSslForAZoneCreateSslConfigurationParams.GeoRestrictions;

  /**
   * Specify the policy that determines the region where your private key will be
   * held locally. HTTPS connections to any excluded data center will still be fully
   * encrypted, but will incur some latency while Keyless SSL is used to complete the
   * handshake with the nearest allowed data center. Any combination of countries,
   * specified by their two letter country code
   * (https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements)
   * can be chosen, such as 'country: IN', as well as 'region: EU' which refers to
   * the EU region. If there are too few data centers satisfying the policy, it will
   * be rejected.
   */
  policy?: string;

  /**
   * The type 'legacy_custom' enables support for legacy clients which do not include
   * SNI in the TLS handshake.
   */
  type?: 'legacy_custom' | 'sni_custom';
}

export namespace CustomCertificateCustomSslForAZoneCreateSslConfigurationParams {
  /**
   * Specify the region where your private key can be held locally for optimal TLS
   * performance. HTTPS connections to any excluded data center will still be fully
   * encrypted, but will incur some latency while Keyless SSL is used to complete the
   * handshake with the nearest allowed data center. Options allow distribution to
   * only to U.S. data centers, only to E.U. data centers, or only to highest
   * security data centers. Default distribution is to all Cloudflare datacenters,
   * for optimal performance.
   */
  export interface GeoRestrictions {
    label?: 'us' | 'eu' | 'highest_security';
  }
}

export interface CustomCertificateCustomSslForAZoneListSslConfigurationsParams {
  /**
   * Whether to match all search requirements or at least one (any).
   */
  match?: 'any' | 'all';

  /**
   * Page number of paginated results.
   */
  page?: number;

  /**
   * Number of zones per page.
   */
  per_page?: number;
}

export namespace CustomCertificates {
  export import CustomCertificateRetrieveResponse = CustomCertificatesAPI.CustomCertificateRetrieveResponse;
  export import CustomCertificateUpdateResponse = CustomCertificatesAPI.CustomCertificateUpdateResponse;
  export import CustomCertificateDeleteResponse = CustomCertificatesAPI.CustomCertificateDeleteResponse;
  export import CustomCertificateCustomSslForAZoneCreateSslConfigurationResponse = CustomCertificatesAPI.CustomCertificateCustomSslForAZoneCreateSslConfigurationResponse;
  export import CustomCertificateCustomSslForAZoneListSslConfigurationsResponse = CustomCertificatesAPI.CustomCertificateCustomSslForAZoneListSslConfigurationsResponse;
  export import CustomCertificateCustomSslForAZoneListSslConfigurationsResponsesPage = CustomCertificatesAPI.CustomCertificateCustomSslForAZoneListSslConfigurationsResponsesPage;
  export import CustomCertificateUpdateParams = CustomCertificatesAPI.CustomCertificateUpdateParams;
  export import CustomCertificateCustomSslForAZoneCreateSslConfigurationParams = CustomCertificatesAPI.CustomCertificateCustomSslForAZoneCreateSslConfigurationParams;
  export import CustomCertificateCustomSslForAZoneListSslConfigurationsParams = CustomCertificatesAPI.CustomCertificateCustomSslForAZoneListSslConfigurationsParams;
  export import Prioritizes = PrioritizesAPI.Prioritizes;
  export import PrioritizeCustomSslForAZoneRePrioritizeSslCertificatesResponse = PrioritizesAPI.PrioritizeCustomSslForAZoneRePrioritizeSslCertificatesResponse;
  export import PrioritizeCustomSslForAZoneRePrioritizeSslCertificatesParams = PrioritizesAPI.PrioritizeCustomSslForAZoneRePrioritizeSslCertificatesParams;
}
