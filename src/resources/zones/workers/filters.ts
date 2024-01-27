// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as FiltersAPI from 'cloudflare/resources/zones/workers/filters';

export class Filters extends APIResource {
  /**
   * Update Filter
   */
  update(
    zoneId: string,
    filterId: string,
    body: FilterUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FilterUpdateResponse> {
    return this._client.put(`/zones/${zoneId}/workers/filters/${filterId}`, { body, ...options });
  }

  /**
   * Delete Filter
   */
  delete(
    zoneId: string,
    filterId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FilterDeleteResponse> {
    return this._client.delete(`/zones/${zoneId}/workers/filters/${filterId}`, options);
  }

  /**
   * Create Filter
   */
  workerFiltersDeprecatedCreateFilter(
    zoneId: string,
    body: FilterWorkerFiltersDeprecatedCreateFilterParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FilterWorkerFiltersDeprecatedCreateFilterResponse> {
    return this._client.post(`/zones/${zoneId}/workers/filters`, { body, ...options });
  }

  /**
   * List Filters
   */
  workerFiltersDeprecatedListFilters(
    zoneId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FilterWorkerFiltersDeprecatedListFiltersResponse> {
    return this._client.get(`/zones/${zoneId}/workers/filters`, options);
  }
}

export interface FilterUpdateResponse {
  errors?: Array<FilterUpdateResponse.Error>;

  messages?: Array<FilterUpdateResponse.Message>;

  result?: FilterUpdateResponse.Result;

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
     * Identifier
     */
    id: string;

    enabled: boolean;

    pattern: string;
  }
}

export interface FilterDeleteResponse {
  errors?: Array<FilterDeleteResponse.Error>;

  messages?: Array<FilterDeleteResponse.Message>;

  result?: FilterDeleteResponse.Result | null;

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
     * Identifier
     */
    id: string;
  }
}

export interface FilterWorkerFiltersDeprecatedCreateFilterResponse {
  errors?: Array<FilterWorkerFiltersDeprecatedCreateFilterResponse.Error>;

  messages?: Array<FilterWorkerFiltersDeprecatedCreateFilterResponse.Message>;

  result?: FilterWorkerFiltersDeprecatedCreateFilterResponse.Result | null;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace FilterWorkerFiltersDeprecatedCreateFilterResponse {
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
  }
}

export interface FilterWorkerFiltersDeprecatedListFiltersResponse {
  errors?: Array<FilterWorkerFiltersDeprecatedListFiltersResponse.Error>;

  messages?: Array<FilterWorkerFiltersDeprecatedListFiltersResponse.Message>;

  result?: Array<FilterWorkerFiltersDeprecatedListFiltersResponse.Result>;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace FilterWorkerFiltersDeprecatedListFiltersResponse {
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

    enabled: boolean;

    pattern: string;
  }
}

export interface FilterUpdateParams {
  enabled: boolean;

  pattern: string;
}

export interface FilterWorkerFiltersDeprecatedCreateFilterParams {
  enabled: boolean;

  pattern: string;
}

export namespace Filters {
  export import FilterUpdateResponse = FiltersAPI.FilterUpdateResponse;
  export import FilterDeleteResponse = FiltersAPI.FilterDeleteResponse;
  export import FilterWorkerFiltersDeprecatedCreateFilterResponse = FiltersAPI.FilterWorkerFiltersDeprecatedCreateFilterResponse;
  export import FilterWorkerFiltersDeprecatedListFiltersResponse = FiltersAPI.FilterWorkerFiltersDeprecatedListFiltersResponse;
  export import FilterUpdateParams = FiltersAPI.FilterUpdateParams;
  export import FilterWorkerFiltersDeprecatedCreateFilterParams = FiltersAPI.FilterWorkerFiltersDeprecatedCreateFilterParams;
}
