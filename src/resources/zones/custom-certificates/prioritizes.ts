// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PrioritizesAPI from 'cloudflare/resources/zones/custom-certificates/prioritizes';

export class Prioritizes extends APIResource {
  /**
   * If a zone has multiple SSL certificates, you can set the order in which they
   * should be used during a request. The higher priority will break ties across
   * overlapping 'legacy_custom' certificates.
   */
  customSslForAZoneRePrioritizeSslCertificates(
    zoneIdentifier: string,
    body: PrioritizeCustomSslForAZoneRePrioritizeSslCertificatesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PrioritizeCustomSslForAZoneRePrioritizeSslCertificatesResponse> {
    return this._client.put(`/zones/${zoneIdentifier}/custom_certificates/prioritize`, { body, ...options });
  }
}

export interface PrioritizeCustomSslForAZoneRePrioritizeSslCertificatesResponse {
  errors?: Array<PrioritizeCustomSslForAZoneRePrioritizeSslCertificatesResponse.Error>;

  messages?: Array<PrioritizeCustomSslForAZoneRePrioritizeSslCertificatesResponse.Message>;

  result?: Array<PrioritizeCustomSslForAZoneRePrioritizeSslCertificatesResponse.Result>;

  result_info?: PrioritizeCustomSslForAZoneRePrioritizeSslCertificatesResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace PrioritizeCustomSslForAZoneRePrioritizeSslCertificatesResponse {
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
    geo_restrictions?: Result.GeoRestrictions;

    keyless_server?: Result.KeylessServer;

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

  export namespace Result {
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

export interface PrioritizeCustomSslForAZoneRePrioritizeSslCertificatesParams {
  /**
   * Array of ordered certificates.
   */
  certificates: Array<PrioritizeCustomSslForAZoneRePrioritizeSslCertificatesParams.Certificate>;
}

export namespace PrioritizeCustomSslForAZoneRePrioritizeSslCertificatesParams {
  export interface Certificate {
    /**
     * The order/priority in which the certificate will be used in a request. The
     * higher priority will break ties across overlapping 'legacy_custom' certificates,
     * but 'legacy_custom' certificates will always supercede 'sni_custom'
     * certificates.
     */
    priority?: number;
  }
}

export namespace Prioritizes {
  export import PrioritizeCustomSslForAZoneRePrioritizeSslCertificatesResponse = PrioritizesAPI.PrioritizeCustomSslForAZoneRePrioritizeSslCertificatesResponse;
  export import PrioritizeCustomSslForAZoneRePrioritizeSslCertificatesParams = PrioritizesAPI.PrioritizeCustomSslForAZoneRePrioritizeSslCertificatesParams;
}
