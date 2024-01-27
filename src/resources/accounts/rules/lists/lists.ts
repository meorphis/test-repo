// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ListsAPI from 'cloudflare/resources/accounts/rules/lists/lists';
import * as BulkOperationsAPI from 'cloudflare/resources/accounts/rules/lists/bulk-operations';
import * as ItemsAPI from 'cloudflare/resources/accounts/rules/lists/items';

export class Lists extends APIResource {
  bulkOperations: BulkOperationsAPI.BulkOperations = new BulkOperationsAPI.BulkOperations(this._client);
  items: ItemsAPI.Items = new ItemsAPI.Items(this._client);

  /**
   * Fetches the details of a list.
   */
  retrieve(
    accountIdentifier: string,
    listId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListRetrieveResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/rules/lists/${listId}`, options);
  }

  /**
   * Updates the description of a list.
   */
  update(
    accountIdentifier: string,
    listId: string,
    body: ListUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListUpdateResponse> {
    return this._client.put(`/accounts/${accountIdentifier}/rules/lists/${listId}`, { body, ...options });
  }

  /**
   * Deletes a specific list and all its items.
   */
  delete(
    accountIdentifier: string,
    listId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListDeleteResponse> {
    return this._client.delete(`/accounts/${accountIdentifier}/rules/lists/${listId}`, options);
  }

  /**
   * Creates a new list of the specified type.
   */
  listsCreateAList(
    accountIdentifier: string,
    body: ListListsCreateAListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListListsCreateAListResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/rules/lists`, { body, ...options });
  }

  /**
   * Fetches all lists in the account.
   */
  listsGetLists(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListListsGetListsResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/rules/lists`, options);
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
     * The unique ID of the list.
     */
    id?: string;

    /**
     * The RFC 3339 timestamp of when the list was created.
     */
    created_on?: string;

    /**
     * An informative summary of the list.
     */
    description?: string;

    /**
     * The type of the list. Each type supports specific list items (IP addresses,
     * ASNs, hostnames or redirects).
     */
    kind?: 'ip' | 'redirect' | 'hostname' | 'asn';

    /**
     * The RFC 3339 timestamp of when the list was last modified.
     */
    modified_on?: string;

    /**
     * An informative name for the list. Use this name in filter and rule expressions.
     */
    name?: string;

    /**
     * The number of items in the list.
     */
    num_items?: number;

    /**
     * The number of [filters](#filters) referencing the list.
     */
    num_referencing_filters?: number;
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
     * The unique ID of the list.
     */
    id?: string;

    /**
     * The RFC 3339 timestamp of when the list was created.
     */
    created_on?: string;

    /**
     * An informative summary of the list.
     */
    description?: string;

    /**
     * The type of the list. Each type supports specific list items (IP addresses,
     * ASNs, hostnames or redirects).
     */
    kind?: 'ip' | 'redirect' | 'hostname' | 'asn';

    /**
     * The RFC 3339 timestamp of when the list was last modified.
     */
    modified_on?: string;

    /**
     * An informative name for the list. Use this name in filter and rule expressions.
     */
    name?: string;

    /**
     * The number of items in the list.
     */
    num_items?: number;

    /**
     * The number of [filters](#filters) referencing the list.
     */
    num_referencing_filters?: number;
  }
}

export interface ListDeleteResponse {
  errors?: Array<ListDeleteResponse.Error>;

  messages?: Array<ListDeleteResponse.Message>;

  result?: ListDeleteResponse.Result;

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

  export interface Result {
    /**
     * The unique ID of the item in the List.
     */
    id?: string;
  }
}

export interface ListListsCreateAListResponse {
  errors?: Array<ListListsCreateAListResponse.Error>;

  messages?: Array<ListListsCreateAListResponse.Message>;

  result?: ListListsCreateAListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ListListsCreateAListResponse {
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
     * The unique ID of the list.
     */
    id?: string;

    /**
     * The RFC 3339 timestamp of when the list was created.
     */
    created_on?: string;

    /**
     * An informative summary of the list.
     */
    description?: string;

    /**
     * The type of the list. Each type supports specific list items (IP addresses,
     * ASNs, hostnames or redirects).
     */
    kind?: 'ip' | 'redirect' | 'hostname' | 'asn';

    /**
     * The RFC 3339 timestamp of when the list was last modified.
     */
    modified_on?: string;

    /**
     * An informative name for the list. Use this name in filter and rule expressions.
     */
    name?: string;

    /**
     * The number of items in the list.
     */
    num_items?: number;

    /**
     * The number of [filters](#filters) referencing the list.
     */
    num_referencing_filters?: number;
  }
}

export interface ListListsGetListsResponse {
  errors?: Array<ListListsGetListsResponse.Error>;

  messages?: Array<ListListsGetListsResponse.Message>;

  result?: Array<ListListsGetListsResponse.Result>;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ListListsGetListsResponse {
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
     * The unique ID of the list.
     */
    id?: string;

    /**
     * The RFC 3339 timestamp of when the list was created.
     */
    created_on?: string;

    /**
     * An informative summary of the list.
     */
    description?: string;

    /**
     * The type of the list. Each type supports specific list items (IP addresses,
     * ASNs, hostnames or redirects).
     */
    kind?: 'ip' | 'redirect' | 'hostname' | 'asn';

    /**
     * The RFC 3339 timestamp of when the list was last modified.
     */
    modified_on?: string;

    /**
     * An informative name for the list. Use this name in filter and rule expressions.
     */
    name?: string;

    /**
     * The number of items in the list.
     */
    num_items?: number;

    /**
     * The number of [filters](#filters) referencing the list.
     */
    num_referencing_filters?: number;
  }
}

export interface ListUpdateParams {
  /**
   * An informative summary of the list.
   */
  description?: string;
}

export interface ListListsCreateAListParams {
  /**
   * The type of the list. Each type supports specific list items (IP addresses,
   * ASNs, hostnames or redirects).
   */
  kind: 'ip' | 'redirect' | 'hostname' | 'asn';

  /**
   * An informative name for the list. Use this name in filter and rule expressions.
   */
  name: string;

  /**
   * An informative summary of the list.
   */
  description?: string;
}

export namespace Lists {
  export import ListRetrieveResponse = ListsAPI.ListRetrieveResponse;
  export import ListUpdateResponse = ListsAPI.ListUpdateResponse;
  export import ListDeleteResponse = ListsAPI.ListDeleteResponse;
  export import ListListsCreateAListResponse = ListsAPI.ListListsCreateAListResponse;
  export import ListListsGetListsResponse = ListsAPI.ListListsGetListsResponse;
  export import ListUpdateParams = ListsAPI.ListUpdateParams;
  export import ListListsCreateAListParams = ListsAPI.ListListsCreateAListParams;
  export import BulkOperations = BulkOperationsAPI.BulkOperations;
  export import BulkOperationRetrieveResponse = BulkOperationsAPI.BulkOperationRetrieveResponse;
  export import Items = ItemsAPI.Items;
  export import ItemRetrieveResponse = ItemsAPI.ItemRetrieveResponse;
  export import ItemDeleteResponse = ItemsAPI.ItemDeleteResponse;
  export import ItemListsCreateListItemsResponse = ItemsAPI.ItemListsCreateListItemsResponse;
  export import ItemListsGetListItemsResponse = ItemsAPI.ItemListsGetListItemsResponse;
  export import ItemListsUpdateAllListItemsResponse = ItemsAPI.ItemListsUpdateAllListItemsResponse;
  export import ItemDeleteParams = ItemsAPI.ItemDeleteParams;
  export import ItemListsCreateListItemsParams = ItemsAPI.ItemListsCreateListItemsParams;
  export import ItemListsGetListItemsParams = ItemsAPI.ItemListsGetListItemsParams;
  export import ItemListsUpdateAllListItemsParams = ItemsAPI.ItemListsUpdateAllListItemsParams;
}
