// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SortQueryStringForCachesAPI from 'cloudflare/resources/zones/settings/sort-query-string-for-caches';

export class SortQueryStringForCaches extends APIResource {
  /**
   * Cloudflare will treat files with the same query strings as the same file in
   * cache, regardless of the order of the query strings. This is limited to
   * Enterprise Zones.
   */
  update(
    zoneIdentifier: string,
    body: SortQueryStringForCachUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SortQueryStringForCachUpdateResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/settings/sort_query_string_for_cache`, {
      body,
      ...options,
    });
  }

  /**
   * Cloudflare will treat files with the same query strings as the same file in
   * cache, regardless of the order of the query strings. This is limited to
   * Enterprise Zones.
   */
  list(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SortQueryStringForCachListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/settings/sort_query_string_for_cache`, options);
  }
}

export interface SortQueryStringForCachUpdateResponse {
  errors?: Array<SortQueryStringForCachUpdateResponse.Error>;

  messages?: Array<SortQueryStringForCachUpdateResponse.Message>;

  /**
   * Cloudflare will treat files with the same query strings as the same file in
   * cache, regardless of the order of the query strings. This is limited to
   * Enterprise Zones.
   */
  result?: SortQueryStringForCachUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace SortQueryStringForCachUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Cloudflare will treat files with the same query strings as the same file in
   * cache, regardless of the order of the query strings. This is limited to
   * Enterprise Zones.
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'sort_query_string_for_cache';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }
}

export interface SortQueryStringForCachListResponse {
  errors?: Array<SortQueryStringForCachListResponse.Error>;

  messages?: Array<SortQueryStringForCachListResponse.Message>;

  /**
   * Cloudflare will treat files with the same query strings as the same file in
   * cache, regardless of the order of the query strings. This is limited to
   * Enterprise Zones.
   */
  result?: SortQueryStringForCachListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace SortQueryStringForCachListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Cloudflare will treat files with the same query strings as the same file in
   * cache, regardless of the order of the query strings. This is limited to
   * Enterprise Zones.
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'sort_query_string_for_cache';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }
}

export interface SortQueryStringForCachUpdateParams {
  /**
   * Value of the zone setting.
   */
  value: 'on' | 'off';
}

export namespace SortQueryStringForCaches {
  export import SortQueryStringForCachUpdateResponse = SortQueryStringForCachesAPI.SortQueryStringForCachUpdateResponse;
  export import SortQueryStringForCachListResponse = SortQueryStringForCachesAPI.SortQueryStringForCachListResponse;
  export import SortQueryStringForCachUpdateParams = SortQueryStringForCachesAPI.SortQueryStringForCachUpdateParams;
}
