// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as FiltersAPI from 'cloudflare/resources/filters';

export class Filters extends APIResource {
  /**
   * Deletes one or more existing filters.
   */
  delete(
    zoneIdentifier: string,
    body: FilterDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FilterDeleteResponse> {
    return this._client.delete(`/zones/${zoneIdentifier}/filters`, { body, ...options });
  }
}

export interface FilterDeleteResponse {
  errors?: Array<FilterDeleteResponse.Error>;

  messages?: Array<FilterDeleteResponse.Message>;

  result?: Array<FilterDeleteResponse.Result>;

  result_info?: FilterDeleteResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace FilterDeleteResponse {
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
     * The unique identifier of the filter.
     */
    id?: string;

    /**
     * An informative summary of the filter.
     */
    description?: string;

    /**
     * The filter expression. For more information, refer to
     * [Expressions](https://developers.cloudflare.com/ruleset-engine/rules-language/expressions/).
     */
    expression?: string;

    /**
     * When true, indicates that the filter is currently paused.
     */
    paused?: boolean;

    /**
     * A short reference tag. Allows you to select related filters.
     */
    ref?: string;
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

export interface FilterDeleteParams {}

export namespace Filters {
  export import FilterDeleteResponse = FiltersAPI.FilterDeleteResponse;
  export import FilterDeleteParams = FiltersAPI.FilterDeleteParams;
}
