// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as DomainsAPI from 'cloudflare/resources/radar/ranking/domains';

export class Domains extends APIResource {
  /**
   * Gets Domains Rank details. Cloudflare provides an ordered rank for the top 100
   * domains, but for the remainder it only provides ranking buckets like top 200
   * thousand, top one million, etc.. These are available through Radar datasets
   * endpoints.
   */
  retrieve(
    domain: string,
    query?: DomainRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainRetrieveResponse>;
  retrieve(domain: string, options?: Core.RequestOptions): Core.APIPromise<DomainRetrieveResponse>;
  retrieve(
    domain: string,
    query: DomainRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(domain, {}, query);
    }
    return this._client.get(`/radar/ranking/domain/${domain}`, { query, ...options });
  }
}

export interface DomainRetrieveResponse {
  result: DomainRetrieveResponse.Result;

  success: boolean;
}

export namespace DomainRetrieveResponse {
  export interface Result {
    details_0: Result.Details0;
  }

  export namespace Result {
    export interface Details0 {
      categories: Array<Details0.Category>;

      top_locations: Array<Details0.TopLocation>;

      /**
       * Only available in POPULAR ranking for the most recent ranking.
       */
      bucket?: string;

      rank?: number;
    }

    export namespace Details0 {
      export interface Category {
        id: number;

        name: string;

        superCategoryId: number;
      }

      export interface TopLocation {
        locationCode: string;

        locationName: string;

        rank: number;
      }
    }
  }
}

export interface DomainRetrieveParams {
  /**
   * Array of dates to filter the ranking.
   */
  date?: Array<string | null>;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Limit the number of objects in the response.
   */
  limit?: number;

  /**
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;

  /**
   * The ranking type.
   */
  rankingType?: 'POPULAR' | 'TRENDING_RISE' | 'TRENDING_STEADY';
}

export namespace Domains {
  export import DomainRetrieveResponse = DomainsAPI.DomainRetrieveResponse;
  export import DomainRetrieveParams = DomainsAPI.DomainRetrieveParams;
}
