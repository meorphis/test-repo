// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as DomainHistoriesAPI from 'cloudflare/resources/accounts/intel/domain-histories';

export class DomainHistories extends APIResource {
  /**
   * Get Domain History
   */
  list(
    accountIdentifier: string,
    query?: DomainHistoryListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainHistoryListResponse>;
  list(accountIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<DomainHistoryListResponse>;
  list(
    accountIdentifier: string,
    query: DomainHistoryListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainHistoryListResponse> {
    if (isRequestOptions(query)) {
      return this.list(accountIdentifier, {}, query);
    }
    return this._client.get(`/accounts/${accountIdentifier}/intel/domain-history`, { query, ...options });
  }
}

export interface DomainHistoryListResponse {
  errors?: Array<DomainHistoryListResponse.Error>;

  messages?: Array<DomainHistoryListResponse.Message>;

  result?: Array<DomainHistoryListResponse.Result>;

  result_info?: DomainHistoryListResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace DomainHistoryListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    categorizations?: Array<Result.Categorization>;

    domain?: string;
  }

  export namespace Result {
    export interface Categorization {
      categories?: unknown;

      end?: string;

      start?: string;
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

export interface DomainHistoryListParams {
  domain?: unknown;
}

export namespace DomainHistories {
  export import DomainHistoryListResponse = DomainHistoriesAPI.DomainHistoryListResponse;
  export import DomainHistoryListParams = DomainHistoriesAPI.DomainHistoryListParams;
}
