// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as FiltersAPI from 'cloudflare/resources/zones/filters';
import { Page } from 'cloudflare/pagination';

export class Filters extends APIResource {
  /**
   * Fetches the details of a filter.
   */
  retrieve(
    zoneIdentifier: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FilterRetrieveResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/filters/${id}`, options);
  }

  /**
   * Updates an existing filter.
   */
  update(
    zoneIdentifier: string,
    id: string,
    body: FilterUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FilterUpdateResponse> {
    return this._client.put(`/zones/${zoneIdentifier}/filters/${id}`, { body, ...options });
  }

  /**
   * Deletes an existing filter.
   */
  delete(
    zoneIdentifier: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FilterDeleteResponse> {
    return this._client.delete(`/zones/${zoneIdentifier}/filters/${id}`, options);
  }

  /**
   * Creates one or more filters.
   */
  filtersCreateFilters(
    zoneIdentifier: string,
    body: FilterFiltersCreateFiltersParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FilterFiltersCreateFiltersResponse> {
    return this._client.post(`/zones/${zoneIdentifier}/filters`, { body, ...options });
  }

  /**
   * Fetches filters in a zone. You can filter the results using several optional
   * parameters.
   */
  filtersListFilters(
    zoneIdentifier: string,
    query?: FilterFiltersListFiltersParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<FilterFiltersListFiltersResponsesPage, FilterFiltersListFiltersResponse>;
  filtersListFilters(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<FilterFiltersListFiltersResponsesPage, FilterFiltersListFiltersResponse>;
  filtersListFilters(
    zoneIdentifier: string,
    query: FilterFiltersListFiltersParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<FilterFiltersListFiltersResponsesPage, FilterFiltersListFiltersResponse> {
    if (isRequestOptions(query)) {
      return this.filtersListFilters(zoneIdentifier, {}, query);
    }
    return this._client.getAPIList(
      `/zones/${zoneIdentifier}/filters`,
      FilterFiltersListFiltersResponsesPage,
      { query, ...options },
    );
  }

  /**
   * Updates one or more existing filters.
   */
  filtersUpdateFilters(
    zoneIdentifier: string,
    body: FilterFiltersUpdateFiltersParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FilterFiltersUpdateFiltersResponse> {
    return this._client.put(`/zones/${zoneIdentifier}/filters`, { body, ...options });
  }
}

export class FilterFiltersListFiltersResponsesPage extends Page<FilterFiltersListFiltersResponse> {}

export interface FilterRetrieveResponse {
  errors?: Array<FilterRetrieveResponse.Error>;

  messages?: Array<FilterRetrieveResponse.Message>;

  result?: FilterRetrieveResponse.Result | null;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace FilterRetrieveResponse {
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
}

export interface FilterUpdateResponse {
  errors?: Array<FilterUpdateResponse.Error>;

  messages?: Array<FilterUpdateResponse.Message>;

  result?: FilterUpdateResponse.Result | null;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace FilterUpdateResponse {
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
}

export interface FilterDeleteResponse {
  errors?: Array<FilterDeleteResponse.Error>;

  messages?: Array<FilterDeleteResponse.Message>;

  result?: FilterDeleteResponse.Result;

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
}

export interface FilterFiltersCreateFiltersResponse {
  errors?: Array<FilterFiltersCreateFiltersResponse.Error>;

  messages?: Array<FilterFiltersCreateFiltersResponse.Message>;

  result?: Array<FilterFiltersCreateFiltersResponse.Result>;

  result_info?: FilterFiltersCreateFiltersResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace FilterFiltersCreateFiltersResponse {
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

export interface FilterFiltersListFiltersResponse {
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

export interface FilterFiltersUpdateFiltersResponse {
  errors?: Array<FilterFiltersUpdateFiltersResponse.Error>;

  messages?: Array<FilterFiltersUpdateFiltersResponse.Message>;

  result?: Array<FilterFiltersUpdateFiltersResponse.Result>;

  result_info?: FilterFiltersUpdateFiltersResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace FilterFiltersUpdateFiltersResponse {
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

export type FilterUpdateParams = unknown;

export type FilterFiltersCreateFiltersParams = unknown;

export interface FilterFiltersListFiltersParams {
  /**
   * A case-insensitive string to find in the description.
   */
  description?: string;

  /**
   * A case-insensitive string to find in the expression.
   */
  expression?: string;

  /**
   * Page number of paginated results.
   */
  page?: number;

  /**
   * When true, indicates that the filter is currently paused.
   */
  paused?: boolean;

  /**
   * Number of filters per page.
   */
  per_page?: number;

  /**
   * The filter ref (a short reference tag) to search for. Must be an exact match.
   */
  ref?: string;
}

export type FilterFiltersUpdateFiltersParams = unknown;

export namespace Filters {
  export import FilterRetrieveResponse = FiltersAPI.FilterRetrieveResponse;
  export import FilterUpdateResponse = FiltersAPI.FilterUpdateResponse;
  export import FilterDeleteResponse = FiltersAPI.FilterDeleteResponse;
  export import FilterFiltersCreateFiltersResponse = FiltersAPI.FilterFiltersCreateFiltersResponse;
  export import FilterFiltersListFiltersResponse = FiltersAPI.FilterFiltersListFiltersResponse;
  export import FilterFiltersUpdateFiltersResponse = FiltersAPI.FilterFiltersUpdateFiltersResponse;
  export import FilterFiltersListFiltersResponsesPage = FiltersAPI.FilterFiltersListFiltersResponsesPage;
  export import FilterUpdateParams = FiltersAPI.FilterUpdateParams;
  export import FilterFiltersCreateFiltersParams = FiltersAPI.FilterFiltersCreateFiltersParams;
  export import FilterFiltersListFiltersParams = FiltersAPI.FilterFiltersListFiltersParams;
  export import FilterFiltersUpdateFiltersParams = FiltersAPI.FilterFiltersUpdateFiltersParams;
}
