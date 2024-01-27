// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as IPsAPI from 'cloudflare/resources/radar/entities/asns/ips';

export class IPs extends APIResource {
  /**
   * Get the requested autonomous system information based on IP address. Population
   * estimates come from APNIC (refer to https://labs.apnic.net/?p=526).
   */
  list(query: IPListParams, options?: Core.RequestOptions): Core.APIPromise<IPListResponse> {
    return this._client.get('/radar/entities/asns/ip', { query, ...options });
  }
}

export interface IPListResponse {
  result: IPListResponse.Result;

  success: boolean;
}

export namespace IPListResponse {
  export interface Result {
    asn: Result.ASN;
  }

  export namespace Result {
    export interface ASN {
      asn: number;

      country: string;

      countryName: string;

      estimatedUsers: ASN.EstimatedUsers;

      name: string;

      orgName: string;

      related: Array<ASN.Related>;

      /**
       * Regional Internet Registry
       */
      source: string;

      website: string;

      aka?: string;

      /**
       * Deprecated field. Please use 'aka'.
       */
      nameLong?: string;
    }

    export namespace ASN {
      export interface EstimatedUsers {
        locations: Array<EstimatedUsers.Location>;

        /**
         * Total estimated users
         */
        estimatedUsers?: number;
      }

      export namespace EstimatedUsers {
        export interface Location {
          locationAlpha2: string;

          locationName: string;

          /**
           * Estimated users per location
           */
          estimatedUsers?: number;
        }
      }

      export interface Related {
        asn: number;

        name: string;

        aka?: string;

        /**
         * Total estimated users
         */
        estimatedUsers?: number;
      }
    }
  }
}

export interface IPListParams {
  /**
   * IP address.
   */
  ip: string;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';
}

export namespace IPs {
  export import IPListResponse = IPsAPI.IPListResponse;
  export import IPListParams = IPsAPI.IPListParams;
}
