// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ListsAPI from 'cloudflare/resources/accounts/gateway/lists/lists';
import * as ItemsAPI from 'cloudflare/resources/accounts/gateway/lists/items';

export class Lists extends APIResource {
  items: ItemsAPI.Items = new ItemsAPI.Items(this._client);

  /**
   * Fetches a single Zero Trust list.
   */
  retrieve(
    identifier: unknown,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListRetrieveResponse> {
    return this._client.get(`/accounts/${identifier}/gateway/lists/${uuid}`, options);
  }

  /**
   * Updates a configured Zero Trust list.
   */
  update(
    identifier: unknown,
    uuid: string,
    body: ListUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListUpdateResponse> {
    return this._client.put(`/accounts/${identifier}/gateway/lists/${uuid}`, { body, ...options });
  }

  /**
   * Deletes a Zero Trust list.
   */
  delete(
    identifier: unknown,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListDeleteResponse> {
    return this._client.delete(`/accounts/${identifier}/gateway/lists/${uuid}`, options);
  }

  /**
   * Appends or removes an item from a configured Zero Trust list.
   */
  patch(
    identifier: unknown,
    uuid: string,
    body: ListPatchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListPatchResponse> {
    return this._client.patch(`/accounts/${identifier}/gateway/lists/${uuid}`, { body, ...options });
  }

  /**
   * Creates a new Zero Trust list.
   */
  zeroTrustListsCreateZeroTrustList(
    identifier: unknown,
    body: ListZeroTrustListsCreateZeroTrustListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListZeroTrustListsCreateZeroTrustListResponse> {
    return this._client.post(`/accounts/${identifier}/gateway/lists`, { body, ...options });
  }

  /**
   * Fetches all Zero Trust lists for an account.
   */
  zeroTrustListsListZeroTrustLists(
    identifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListZeroTrustListsListZeroTrustListsResponse> {
    return this._client.get(`/accounts/${identifier}/gateway/lists`, options);
  }
}

export interface ListRetrieveResponse {
  errors?: Array<ListRetrieveResponse.Error>;

  messages?: Array<ListRetrieveResponse.Message>;

  result?: ListRetrieveResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ListRetrieveResponse {
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
     * API Resource UUID tag.
     */
    id?: string;

    /**
     * The number of items in the list.
     */
    count?: number;

    created_at?: string;

    /**
     * The description of the list.
     */
    description?: string;

    /**
     * The name of the list.
     */
    name?: string;

    /**
     * The type of list.
     */
    type?: 'SERIAL' | 'URL' | 'DOMAIN' | 'EMAIL' | 'IP';

    updated_at?: string;
  }
}

export interface ListUpdateResponse {
  errors?: Array<ListUpdateResponse.Error>;

  messages?: Array<ListUpdateResponse.Message>;

  result?: ListUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ListUpdateResponse {
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
     * API Resource UUID tag.
     */
    id?: string;

    /**
     * The number of items in the list.
     */
    count?: number;

    created_at?: string;

    /**
     * The description of the list.
     */
    description?: string;

    /**
     * The name of the list.
     */
    name?: string;

    /**
     * The type of list.
     */
    type?: 'SERIAL' | 'URL' | 'DOMAIN' | 'EMAIL' | 'IP';

    updated_at?: string;
  }
}

export interface ListDeleteResponse {
  errors?: Array<ListDeleteResponse.Error>;

  messages?: Array<ListDeleteResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ListDeleteResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface ListPatchResponse {
  errors?: Array<ListPatchResponse.Error>;

  messages?: Array<ListPatchResponse.Message>;

  result?: ListPatchResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ListPatchResponse {
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
     * API Resource UUID tag.
     */
    id?: string;

    /**
     * The number of items in the list.
     */
    count?: number;

    created_at?: string;

    /**
     * The description of the list.
     */
    description?: string;

    /**
     * The name of the list.
     */
    name?: string;

    /**
     * The type of list.
     */
    type?: 'SERIAL' | 'URL' | 'DOMAIN' | 'EMAIL' | 'IP';

    updated_at?: string;
  }
}

export interface ListZeroTrustListsCreateZeroTrustListResponse {
  errors?: Array<ListZeroTrustListsCreateZeroTrustListResponse.Error>;

  messages?: Array<ListZeroTrustListsCreateZeroTrustListResponse.Message>;

  result?: ListZeroTrustListsCreateZeroTrustListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ListZeroTrustListsCreateZeroTrustListResponse {
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
     * API Resource UUID tag.
     */
    id?: string;

    created_at?: string;

    /**
     * The description of the list.
     */
    description?: string;

    /**
     * The items in the list.
     */
    items?: Array<Result.Item>;

    /**
     * The name of the list.
     */
    name?: string;

    /**
     * The type of list.
     */
    type?: 'SERIAL' | 'URL' | 'DOMAIN' | 'EMAIL' | 'IP';

    updated_at?: string;
  }

  export namespace Result {
    export interface Item {
      created_at?: string;

      /**
       * The value of the item in a list.
       */
      value?: string;
    }
  }
}

export interface ListZeroTrustListsListZeroTrustListsResponse {
  errors?: Array<ListZeroTrustListsListZeroTrustListsResponse.Error>;

  messages?: Array<ListZeroTrustListsListZeroTrustListsResponse.Message>;

  result?: Array<ListZeroTrustListsListZeroTrustListsResponse.Result>;

  result_info?: ListZeroTrustListsListZeroTrustListsResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ListZeroTrustListsListZeroTrustListsResponse {
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
     * API Resource UUID tag.
     */
    id?: string;

    /**
     * The number of items in the list.
     */
    count?: number;

    created_at?: string;

    /**
     * The description of the list.
     */
    description?: string;

    /**
     * The name of the list.
     */
    name?: string;

    /**
     * The type of list.
     */
    type?: 'SERIAL' | 'URL' | 'DOMAIN' | 'EMAIL' | 'IP';

    updated_at?: string;
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

export interface ListUpdateParams {
  /**
   * The name of the list.
   */
  name: string;

  /**
   * The description of the list.
   */
  description?: string;
}

export interface ListPatchParams {
  /**
   * The items in the list.
   */
  append?: Array<ListPatchParams.Append>;

  /**
   * A list of the item values you want to remove.
   */
  remove?: Array<string>;
}

export namespace ListPatchParams {
  export interface Append {
    /**
     * The value of the item in a list.
     */
    value?: string;
  }
}

export interface ListZeroTrustListsCreateZeroTrustListParams {
  /**
   * The name of the list.
   */
  name: string;

  /**
   * The type of list.
   */
  type: 'SERIAL' | 'URL' | 'DOMAIN' | 'EMAIL' | 'IP';

  /**
   * The description of the list.
   */
  description?: string;

  /**
   * The items in the list.
   */
  items?: Array<ListZeroTrustListsCreateZeroTrustListParams.Item>;
}

export namespace ListZeroTrustListsCreateZeroTrustListParams {
  export interface Item {
    /**
     * The value of the item in a list.
     */
    value?: string;
  }
}

export namespace Lists {
  export import ListRetrieveResponse = ListsAPI.ListRetrieveResponse;
  export import ListUpdateResponse = ListsAPI.ListUpdateResponse;
  export import ListDeleteResponse = ListsAPI.ListDeleteResponse;
  export import ListPatchResponse = ListsAPI.ListPatchResponse;
  export import ListZeroTrustListsCreateZeroTrustListResponse = ListsAPI.ListZeroTrustListsCreateZeroTrustListResponse;
  export import ListZeroTrustListsListZeroTrustListsResponse = ListsAPI.ListZeroTrustListsListZeroTrustListsResponse;
  export import ListUpdateParams = ListsAPI.ListUpdateParams;
  export import ListPatchParams = ListsAPI.ListPatchParams;
  export import ListZeroTrustListsCreateZeroTrustListParams = ListsAPI.ListZeroTrustListsCreateZeroTrustListParams;
  export import Items = ItemsAPI.Items;
  export import ItemZeroTrustListsZeroTrustListItemsResponse = ItemsAPI.ItemZeroTrustListsZeroTrustListItemsResponse;
}
