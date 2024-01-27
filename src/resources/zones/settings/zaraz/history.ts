// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as HistoryAPI from 'cloudflare/resources/zones/settings/zaraz/history';
import * as ConfigAPI from 'cloudflare/resources/zones/settings/zaraz/config';

export class History extends APIResource {
  /**
   * Restores a historical published Zaraz configuration by ID for a zone.
   */
  update(
    zoneIdentifier: string,
    body: HistoryUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConfigAPI.ZarazConfigResponse> {
    return this._client.put(`/zones/${zoneIdentifier}/settings/zaraz/v2/history`, { body, ...options });
  }

  /**
   * Lists a history of published Zaraz configuration records for a zone.
   */
  list(
    zoneIdentifier: string,
    query?: HistoryListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HistoryListResponse>;
  list(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<HistoryListResponse>;
  list(
    zoneIdentifier: string,
    query: HistoryListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<HistoryListResponse> {
    if (isRequestOptions(query)) {
      return this.list(zoneIdentifier, {}, query);
    }
    return this._client.get(`/zones/${zoneIdentifier}/settings/zaraz/v2/history`, { query, ...options });
  }
}

export interface HistoryListResponse {
  errors?: Array<HistoryListResponse.Error>;

  messages?: Array<HistoryListResponse.Message>;

  result?: Array<HistoryListResponse.Result>;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace HistoryListResponse {
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
     * ID of the configuration
     */
    id?: number;

    /**
     * Date and time the configuration was created
     */
    createdAt?: string;

    /**
     * Configuration description provided by the user who published this configuration
     */
    description?: string;

    /**
     * Date and time the configuration was last updated
     */
    updatedAt?: string;

    /**
     * Alpha-numeric ID of the account user who published the configuration
     */
    userId?: string;
  }
}

export type HistoryUpdateParams = number;

export interface HistoryListParams {
  /**
   * Maximum amount of results to list. Default value is 10.
   */
  limit?: number;

  /**
   * Ordinal number to start listing the results with. Default value is 0.
   */
  offset?: number;

  /**
   * The field to sort by. Default is updated_at.
   */
  sortField?: 'id' | 'user_id' | 'description' | 'created_at' | 'updated_at';

  /**
   * Sorting order. Default is DESC.
   */
  sortOrder?: 'DESC' | 'ASC';
}

export namespace History {
  export import HistoryListResponse = HistoryAPI.HistoryListResponse;
  export import HistoryUpdateParams = HistoryAPI.HistoryUpdateParams;
  export import HistoryListParams = HistoryAPI.HistoryListParams;
}
