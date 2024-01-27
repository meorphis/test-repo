// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ItemsAPI from 'cloudflare/resources/accounts/gateway/lists/items';

export class Items extends APIResource {
  /**
   * Fetches all items in a single Zero Trust list.
   */
  zeroTrustListsZeroTrustListItems(
    identifier: unknown,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ItemZeroTrustListsZeroTrustListItemsResponse> {
    return this._client.get(`/accounts/${identifier}/gateway/lists/${uuid}/items`, options);
  }
}

export interface ItemZeroTrustListsZeroTrustListItemsResponse {
  errors?: Array<ItemZeroTrustListsZeroTrustListItemsResponse.Error>;

  messages?: Array<ItemZeroTrustListsZeroTrustListItemsResponse.Message>;

  result?: Array<Array<ItemZeroTrustListsZeroTrustListItemsResponse.Result>>;

  result_info?: ItemZeroTrustListsZeroTrustListItemsResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ItemZeroTrustListsZeroTrustListItemsResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    created_at?: string;

    /**
     * The value of the item in a list.
     */
    value?: string;
  }

  export interface ResultInfo {
    /**
     * Total results returned based on your search parameters.
     */
    count?: number;

    /**
     * Current page within paginated list of results.
     */
    page?: number;

    /**
     * Number of results per page of results.
     */
    per_page?: number;

    /**
     * Total results available without any search parameters.
     */
    total_count?: number;
  }
}

export namespace Items {
  export import ItemZeroTrustListsZeroTrustListItemsResponse = ItemsAPI.ItemZeroTrustListsZeroTrustListItemsResponse;
}
