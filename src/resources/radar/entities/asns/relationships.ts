// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as RelationshipsAPI from 'cloudflare/resources/radar/entities/asns/relationships';

export class Relationships extends APIResource {
  /**
   * Get AS-level relationship for given networks.
   */
  list(
    asn: number,
    query?: RelationshipListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RelationshipListResponse>;
  list(asn: number, options?: Core.RequestOptions): Core.APIPromise<RelationshipListResponse>;
  list(
    asn: number,
    query: RelationshipListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RelationshipListResponse> {
    if (isRequestOptions(query)) {
      return this.list(asn, {}, query);
    }
    return this._client.get(`/radar/entities/asns/${asn}/rel`, { query, ...options });
  }
}

export interface RelationshipListResponse {
  result: RelationshipListResponse.Result;

  success: boolean;
}

export namespace RelationshipListResponse {
  export interface Result {
    meta: Result.Meta;

    rels: Array<Result.Rel>;
  }

  export namespace Result {
    export interface Meta {
      data_time: string;

      query_time: string;

      total_peers: number;
    }

    export interface Rel {
      asn1: number;

      asn1_country: string;

      asn1_name: string;

      asn2: number;

      asn2_country: string;

      asn2_name: string;

      rel: string;
    }
  }
}

export interface RelationshipListParams {
  /**
   * Get the AS relationship of ASN2 with respect to the given ASN
   */
  asn2?: number;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';
}

export namespace Relationships {
  export import RelationshipListResponse = RelationshipsAPI.RelationshipListResponse;
  export import RelationshipListParams = RelationshipsAPI.RelationshipListParams;
}
