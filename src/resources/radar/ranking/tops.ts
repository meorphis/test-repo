// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as TopsAPI from 'cloudflare/resources/radar/ranking/tops';

export class Tops extends APIResource {
  /**
   * Get top or trending domains based on their rank. Popular domains are domains of
   * broad appeal based on how people use the Internet. Trending domains are domains
   * that are generating a surge in interest. For more information on top domains,
   * see https://blog.cloudflare.com/radar-domain-rankings/.
   */
  list(query?: TopListParams, options?: Core.RequestOptions): Core.APIPromise<TopListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<TopListResponse>;
  list(
    query: TopListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TopListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/radar/ranking/top', { query, ...options });
  }
}

export interface TopListResponse {
  result: TopListResponse.Result;

  success: boolean;
}

export namespace TopListResponse {
  export interface Result {
    meta: Result.Meta;

    top_0: Array<Result.Top0>;
  }

  export namespace Result {
    export interface Meta {
      top_0: Meta.Top0;
    }

    export namespace Meta {
      export interface Top0 {
        date: string;
      }
    }

    export interface Top0 {
      categories: Array<Top0.Category>;

      domain: string;

      rank: number;

      /**
       * Only available in TRENDING rankings.
       */
      pctRankChange?: number;
    }

    export namespace Top0 {
      export interface Category {
        id: number;

        name: string;

        superCategoryId: number;
      }
    }
  }
}

export interface TopListParams {
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
   * Array of locations (alpha-2 country codes).
   */
  location?: Array<string>;

  /**
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;

  /**
   * The ranking type.
   */
  rankingType?: 'POPULAR' | 'TRENDING_RISE' | 'TRENDING_STEADY';
}

export namespace Tops {
  export import TopListResponse = TopsAPI.TopListResponse;
  export import TopListParams = TopsAPI.TopListParams;
}
