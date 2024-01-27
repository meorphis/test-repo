// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as ASNsAPI from 'cloudflare/resources/radar/entities/asns/asns';
import * as IPsAPI from 'cloudflare/resources/radar/entities/asns/ips';
import * as RelationshipsAPI from 'cloudflare/resources/radar/entities/asns/relationships';

export class ASNs extends APIResource {
  ips: IPsAPI.IPs = new IPsAPI.IPs(this._client);
  relationships: RelationshipsAPI.Relationships = new RelationshipsAPI.Relationships(this._client);

  /**
   * Get the requested autonomous system information. A confidence level below `5`
   * indicates a low level of confidence in the traffic data - normally this happens
   * because Cloudflare has a small amount of traffic from/to this AS). Population
   * estimates come from APNIC (refer to https://labs.apnic.net/?p=526).
   */
  retrieve(
    asn: number,
    query?: ASNRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ASNRetrieveResponse>;
  retrieve(asn: number, options?: Core.RequestOptions): Core.APIPromise<ASNRetrieveResponse>;
  retrieve(
    asn: number,
    query: ASNRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ASNRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(asn, {}, query);
    }
    return this._client.get(`/radar/entities/asns/${asn}`, { query, ...options });
  }

  /**
   * Gets a list of autonomous systems (AS).
   */
  list(query?: ASNListParams, options?: Core.RequestOptions): Core.APIPromise<ASNListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<ASNListResponse>;
  list(
    query: ASNListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ASNListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/radar/entities/asns', { query, ...options });
  }
}

export interface ASNRetrieveResponse {
  result: ASNRetrieveResponse.Result;

  success: boolean;
}

export namespace ASNRetrieveResponse {
  export interface Result {
    asn: Result.ASN;
  }

  export namespace Result {
    export interface ASN {
      asn: number;

      confidenceLevel: number;

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

export interface ASNListResponse {
  result: ASNListResponse.Result;

  success: boolean;
}

export namespace ASNListResponse {
  export interface Result {
    asns: Array<Result.ASN>;
  }

  export namespace Result {
    export interface ASN {
      asn: number;

      country: string;

      countryName: string;

      name: string;

      aka?: string;

      /**
       * Deprecated field. Please use 'aka'.
       */
      nameLong?: string;

      orgName?: string;

      website?: string;
    }
  }
}

export interface ASNRetrieveParams {
  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';
}

export interface ASNListParams {
  /**
   * Comma separated list of ASNs.
   */
  asn?: string;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Limit the number of objects in the response.
   */
  limit?: number;

  /**
   * Location Alpha2 to filter results.
   */
  location?: string;

  /**
   * Number of objects to skip before grabbing results.
   */
  offset?: number;

  /**
   * Order asn list.
   */
  orderBy?: 'ASN' | 'POPULATION';
}

export namespace ASNs {
  export import ASNRetrieveResponse = ASNsAPI.ASNRetrieveResponse;
  export import ASNListResponse = ASNsAPI.ASNListResponse;
  export import ASNRetrieveParams = ASNsAPI.ASNRetrieveParams;
  export import ASNListParams = ASNsAPI.ASNListParams;
  export import IPs = IPsAPI.IPs;
  export import IPListResponse = IPsAPI.IPListResponse;
  export import IPListParams = IPsAPI.IPListParams;
  export import Relationships = RelationshipsAPI.Relationships;
  export import RelationshipListResponse = RelationshipsAPI.RelationshipListResponse;
  export import RelationshipListParams = RelationshipsAPI.RelationshipListParams;
}
