// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as SearchesAPI from 'cloudflare/resources/accounts/load-balancers/searches';

export class Searches extends APIResource {
  /**
   * Search for Load Balancing resources.
   */
  list(
    accountIdentifier: string,
    query?: SearchListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SearchListResponse>;
  list(accountIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<SearchListResponse>;
  list(
    accountIdentifier: string,
    query: SearchListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SearchListResponse> {
    if (isRequestOptions(query)) {
      return this.list(accountIdentifier, {}, query);
    }
    return this._client.get(`/accounts/${accountIdentifier}/load_balancers/search`, { query, ...options });
  }
}

export interface SearchListResponse {
  errors?: Array<SearchListResponse.Error>;

  messages?: Array<SearchListResponse.Message>;

  result?: SearchListResponse.Result;

  result_info?: SearchListResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace SearchListResponse {
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
     * A list of resources matching the search query.
     */
    resources?: Array<Result.Resource>;
  }

  export namespace Result {
    /**
     * A reference to a load balancer resource.
     */
    export interface Resource {
      /**
       * When listed as a reference, the type (direction) of the reference.
       */
      reference_type?: 'referral' | 'referrer';

      /**
       * A list of references to (referrer) or from (referral) this resource.
       */
      references?: Array<unknown>;

      resource_id?: unknown;

      /**
       * The human-identifiable name of the resource.
       */
      resource_name?: string;

      /**
       * The type of the resource.
       */
      resource_type?: 'load_balancer' | 'monitor' | 'pool';
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

export interface SearchListParams {
  page?: unknown;

  per_page?: unknown;

  search_params?: SearchListParams.SearchParams;
}

export namespace SearchListParams {
  export interface SearchParams {
    /**
     * Search query term.
     */
    query?: string;

    /**
     * The type of references to include ("\*" for all).
     */
    references?: '' | '*' | 'referral' | 'referrer';
  }
}

export namespace Searches {
  export import SearchListResponse = SearchesAPI.SearchListResponse;
  export import SearchListParams = SearchesAPI.SearchListParams;
}
