// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as ItemsAPI from 'cloudflare/resources/accounts/rules/lists/items';

export class Items extends APIResource {
  /**
   * Fetches a list item in the list.
   */
  retrieve(
    accountIdentifier: string,
    listId: string,
    itemId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ItemRetrieveResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/rules/lists/${listId}/items/${itemId}`, options);
  }

  /**
   * Removes one or more items from a list.
   *
   * This operation is asynchronous. To get current the operation status, invoke the
   * [Get bulk operation status](#lists-get-bulk-operation-status) endpoint with the
   * returned `operation_id`.
   */
  delete(
    accountIdentifier: string,
    listId: string,
    body: ItemDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ItemDeleteResponse> {
    return this._client.delete(`/accounts/${accountIdentifier}/rules/lists/${listId}/items`, {
      body,
      ...options,
    });
  }

  /**
   * Appends new items to the list.
   *
   * This operation is asynchronous. To get current the operation status, invoke the
   * [Get bulk operation status](#lists-get-bulk-operation-status) endpoint with the
   * returned `operation_id`.
   */
  listsCreateListItems(
    accountIdentifier: string,
    listId: string,
    body: ItemListsCreateListItemsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ItemListsCreateListItemsResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/rules/lists/${listId}/items`, {
      body,
      ...options,
    });
  }

  /**
   * Fetches all the items in the list.
   */
  listsGetListItems(
    accountIdentifier: string,
    listId: string,
    query?: ItemListsGetListItemsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ItemListsGetListItemsResponse>;
  listsGetListItems(
    accountIdentifier: string,
    listId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ItemListsGetListItemsResponse>;
  listsGetListItems(
    accountIdentifier: string,
    listId: string,
    query: ItemListsGetListItemsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ItemListsGetListItemsResponse> {
    if (isRequestOptions(query)) {
      return this.listsGetListItems(accountIdentifier, listId, {}, query);
    }
    return this._client.get(`/accounts/${accountIdentifier}/rules/lists/${listId}/items`, {
      query,
      ...options,
    });
  }

  /**
   * Removes all existing items from the list and adds the provided items to the
   * list.
   *
   * This operation is asynchronous. To get current the operation status, invoke the
   * [Get bulk operation status](#lists-get-bulk-operation-status) endpoint with the
   * returned `operation_id`.
   */
  listsUpdateAllListItems(
    accountIdentifier: string,
    listId: string,
    body: ItemListsUpdateAllListItemsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ItemListsUpdateAllListItemsResponse> {
    return this._client.put(`/accounts/${accountIdentifier}/rules/lists/${listId}/items`, {
      body,
      ...options,
    });
  }
}

export interface ItemRetrieveResponse {
  errors?: Array<ItemRetrieveResponse.Error>;

  messages?: Array<ItemRetrieveResponse.Message>;

  /**
   * An IPv4 address, an IPv4 CIDR, or an IPv6 CIDR. IPv6 CIDRs are limited to a
   * maximum of /64.
   */
  result?:
    | ItemRetrieveResponse.PeciSksBItemIP
    | ItemRetrieveResponse.PeciSksBItemRedirect
    | ItemRetrieveResponse.PeciSksBItemHostname
    | ItemRetrieveResponse.PeciSksBItemASN;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ItemRetrieveResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * An IPv4 address, an IPv4 CIDR, or an IPv6 CIDR. IPv6 CIDRs are limited to a
   * maximum of /64.
   */
  export interface PeciSksBItemIP {
    /**
     * The unique ID of the list.
     */
    id?: string;

    /**
     * A non-negative 32 bit integer
     */
    asn?: number;

    /**
     * An informative summary of the list item.
     */
    comment?: string;

    /**
     * The RFC 3339 timestamp of when the item was created.
     */
    created_on?: string;

    /**
     * Valid characters for hostnames are ASCII(7) letters from a to z, the digits from
     * 0 to 9, wildcards (\*), and the hyphen (-).
     */
    hostname?: PeciSksBItemIP.Hostname;

    /**
     * An IPv4 address, an IPv4 CIDR, or an IPv6 CIDR. IPv6 CIDRs are limited to a
     * maximum of /64.
     */
    ip?: string;

    /**
     * The RFC 3339 timestamp of when the item was last modified.
     */
    modified_on?: string;

    /**
     * The definition of the redirect.
     */
    redirect?: PeciSksBItemIP.Redirect;
  }

  export namespace PeciSksBItemIP {
    /**
     * Valid characters for hostnames are ASCII(7) letters from a to z, the digits from
     * 0 to 9, wildcards (\*), and the hyphen (-).
     */
    export interface Hostname {
      url_hostname: string;
    }

    /**
     * The definition of the redirect.
     */
    export interface Redirect {
      source_url: string;

      target_url: string;

      include_subdomains?: boolean;

      preserve_path_suffix?: boolean;

      preserve_query_string?: boolean;

      status_code?: 301 | 302 | 307 | 308;

      subpath_matching?: boolean;
    }
  }

  /**
   * The definition of the redirect.
   */
  export interface PeciSksBItemRedirect {
    /**
     * The unique ID of the list.
     */
    id?: string;

    /**
     * A non-negative 32 bit integer
     */
    asn?: number;

    /**
     * An informative summary of the list item.
     */
    comment?: string;

    /**
     * The RFC 3339 timestamp of when the item was created.
     */
    created_on?: string;

    /**
     * Valid characters for hostnames are ASCII(7) letters from a to z, the digits from
     * 0 to 9, wildcards (\*), and the hyphen (-).
     */
    hostname?: PeciSksBItemRedirect.Hostname;

    /**
     * An IPv4 address, an IPv4 CIDR, or an IPv6 CIDR. IPv6 CIDRs are limited to a
     * maximum of /64.
     */
    ip?: string;

    /**
     * The RFC 3339 timestamp of when the item was last modified.
     */
    modified_on?: string;

    /**
     * The definition of the redirect.
     */
    redirect?: PeciSksBItemRedirect.Redirect;
  }

  export namespace PeciSksBItemRedirect {
    /**
     * Valid characters for hostnames are ASCII(7) letters from a to z, the digits from
     * 0 to 9, wildcards (\*), and the hyphen (-).
     */
    export interface Hostname {
      url_hostname: string;
    }

    /**
     * The definition of the redirect.
     */
    export interface Redirect {
      source_url: string;

      target_url: string;

      include_subdomains?: boolean;

      preserve_path_suffix?: boolean;

      preserve_query_string?: boolean;

      status_code?: 301 | 302 | 307 | 308;

      subpath_matching?: boolean;
    }
  }

  /**
   * Valid characters for hostnames are ASCII(7) letters from a to z, the digits from
   * 0 to 9, wildcards (\*), and the hyphen (-).
   */
  export interface PeciSksBItemHostname {
    /**
     * The unique ID of the list.
     */
    id?: string;

    /**
     * A non-negative 32 bit integer
     */
    asn?: number;

    /**
     * An informative summary of the list item.
     */
    comment?: string;

    /**
     * The RFC 3339 timestamp of when the item was created.
     */
    created_on?: string;

    /**
     * Valid characters for hostnames are ASCII(7) letters from a to z, the digits from
     * 0 to 9, wildcards (\*), and the hyphen (-).
     */
    hostname?: PeciSksBItemHostname.Hostname;

    /**
     * An IPv4 address, an IPv4 CIDR, or an IPv6 CIDR. IPv6 CIDRs are limited to a
     * maximum of /64.
     */
    ip?: string;

    /**
     * The RFC 3339 timestamp of when the item was last modified.
     */
    modified_on?: string;

    /**
     * The definition of the redirect.
     */
    redirect?: PeciSksBItemHostname.Redirect;
  }

  export namespace PeciSksBItemHostname {
    /**
     * Valid characters for hostnames are ASCII(7) letters from a to z, the digits from
     * 0 to 9, wildcards (\*), and the hyphen (-).
     */
    export interface Hostname {
      url_hostname: string;
    }

    /**
     * The definition of the redirect.
     */
    export interface Redirect {
      source_url: string;

      target_url: string;

      include_subdomains?: boolean;

      preserve_path_suffix?: boolean;

      preserve_query_string?: boolean;

      status_code?: 301 | 302 | 307 | 308;

      subpath_matching?: boolean;
    }
  }

  /**
   * A non-negative 32 bit integer
   */
  export interface PeciSksBItemASN {
    /**
     * The unique ID of the list.
     */
    id?: string;

    /**
     * A non-negative 32 bit integer
     */
    asn?: number;

    /**
     * An informative summary of the list item.
     */
    comment?: string;

    /**
     * The RFC 3339 timestamp of when the item was created.
     */
    created_on?: string;

    /**
     * Valid characters for hostnames are ASCII(7) letters from a to z, the digits from
     * 0 to 9, wildcards (\*), and the hyphen (-).
     */
    hostname?: PeciSksBItemASN.Hostname;

    /**
     * An IPv4 address, an IPv4 CIDR, or an IPv6 CIDR. IPv6 CIDRs are limited to a
     * maximum of /64.
     */
    ip?: string;

    /**
     * The RFC 3339 timestamp of when the item was last modified.
     */
    modified_on?: string;

    /**
     * The definition of the redirect.
     */
    redirect?: PeciSksBItemASN.Redirect;
  }

  export namespace PeciSksBItemASN {
    /**
     * Valid characters for hostnames are ASCII(7) letters from a to z, the digits from
     * 0 to 9, wildcards (\*), and the hyphen (-).
     */
    export interface Hostname {
      url_hostname: string;
    }

    /**
     * The definition of the redirect.
     */
    export interface Redirect {
      source_url: string;

      target_url: string;

      include_subdomains?: boolean;

      preserve_path_suffix?: boolean;

      preserve_query_string?: boolean;

      status_code?: 301 | 302 | 307 | 308;

      subpath_matching?: boolean;
    }
  }
}

export interface ItemDeleteResponse {
  errors?: Array<ItemDeleteResponse.Error>;

  messages?: Array<ItemDeleteResponse.Message>;

  result?: ItemDeleteResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ItemDeleteResponse {
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
     * The unique operation ID of the asynchronous action.
     */
    operation_id?: string;
  }
}

export interface ItemListsCreateListItemsResponse {
  errors?: Array<ItemListsCreateListItemsResponse.Error>;

  messages?: Array<ItemListsCreateListItemsResponse.Message>;

  result?: ItemListsCreateListItemsResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ItemListsCreateListItemsResponse {
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
     * The unique operation ID of the asynchronous action.
     */
    operation_id?: string;
  }
}

export interface ItemListsGetListItemsResponse {
  errors?: Array<ItemListsGetListItemsResponse.Error>;

  messages?: Array<ItemListsGetListItemsResponse.Message>;

  result?: Array<
    | ItemListsGetListItemsResponse.PeciSksBItemIP
    | ItemListsGetListItemsResponse.PeciSksBItemRedirect
    | ItemListsGetListItemsResponse.PeciSksBItemHostname
    | ItemListsGetListItemsResponse.PeciSksBItemASN
  >;

  result_info?: ItemListsGetListItemsResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ItemListsGetListItemsResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * An IPv4 address, an IPv4 CIDR, or an IPv6 CIDR. IPv6 CIDRs are limited to a
   * maximum of /64.
   */
  export interface PeciSksBItemIP {
    /**
     * The unique ID of the list.
     */
    id?: string;

    /**
     * A non-negative 32 bit integer
     */
    asn?: number;

    /**
     * An informative summary of the list item.
     */
    comment?: string;

    /**
     * The RFC 3339 timestamp of when the item was created.
     */
    created_on?: string;

    /**
     * Valid characters for hostnames are ASCII(7) letters from a to z, the digits from
     * 0 to 9, wildcards (\*), and the hyphen (-).
     */
    hostname?: PeciSksBItemIP.Hostname;

    /**
     * An IPv4 address, an IPv4 CIDR, or an IPv6 CIDR. IPv6 CIDRs are limited to a
     * maximum of /64.
     */
    ip?: string;

    /**
     * The RFC 3339 timestamp of when the item was last modified.
     */
    modified_on?: string;

    /**
     * The definition of the redirect.
     */
    redirect?: PeciSksBItemIP.Redirect;
  }

  export namespace PeciSksBItemIP {
    /**
     * Valid characters for hostnames are ASCII(7) letters from a to z, the digits from
     * 0 to 9, wildcards (\*), and the hyphen (-).
     */
    export interface Hostname {
      url_hostname: string;
    }

    /**
     * The definition of the redirect.
     */
    export interface Redirect {
      source_url: string;

      target_url: string;

      include_subdomains?: boolean;

      preserve_path_suffix?: boolean;

      preserve_query_string?: boolean;

      status_code?: 301 | 302 | 307 | 308;

      subpath_matching?: boolean;
    }
  }

  /**
   * The definition of the redirect.
   */
  export interface PeciSksBItemRedirect {
    /**
     * The unique ID of the list.
     */
    id?: string;

    /**
     * A non-negative 32 bit integer
     */
    asn?: number;

    /**
     * An informative summary of the list item.
     */
    comment?: string;

    /**
     * The RFC 3339 timestamp of when the item was created.
     */
    created_on?: string;

    /**
     * Valid characters for hostnames are ASCII(7) letters from a to z, the digits from
     * 0 to 9, wildcards (\*), and the hyphen (-).
     */
    hostname?: PeciSksBItemRedirect.Hostname;

    /**
     * An IPv4 address, an IPv4 CIDR, or an IPv6 CIDR. IPv6 CIDRs are limited to a
     * maximum of /64.
     */
    ip?: string;

    /**
     * The RFC 3339 timestamp of when the item was last modified.
     */
    modified_on?: string;

    /**
     * The definition of the redirect.
     */
    redirect?: PeciSksBItemRedirect.Redirect;
  }

  export namespace PeciSksBItemRedirect {
    /**
     * Valid characters for hostnames are ASCII(7) letters from a to z, the digits from
     * 0 to 9, wildcards (\*), and the hyphen (-).
     */
    export interface Hostname {
      url_hostname: string;
    }

    /**
     * The definition of the redirect.
     */
    export interface Redirect {
      source_url: string;

      target_url: string;

      include_subdomains?: boolean;

      preserve_path_suffix?: boolean;

      preserve_query_string?: boolean;

      status_code?: 301 | 302 | 307 | 308;

      subpath_matching?: boolean;
    }
  }

  /**
   * Valid characters for hostnames are ASCII(7) letters from a to z, the digits from
   * 0 to 9, wildcards (\*), and the hyphen (-).
   */
  export interface PeciSksBItemHostname {
    /**
     * The unique ID of the list.
     */
    id?: string;

    /**
     * A non-negative 32 bit integer
     */
    asn?: number;

    /**
     * An informative summary of the list item.
     */
    comment?: string;

    /**
     * The RFC 3339 timestamp of when the item was created.
     */
    created_on?: string;

    /**
     * Valid characters for hostnames are ASCII(7) letters from a to z, the digits from
     * 0 to 9, wildcards (\*), and the hyphen (-).
     */
    hostname?: PeciSksBItemHostname.Hostname;

    /**
     * An IPv4 address, an IPv4 CIDR, or an IPv6 CIDR. IPv6 CIDRs are limited to a
     * maximum of /64.
     */
    ip?: string;

    /**
     * The RFC 3339 timestamp of when the item was last modified.
     */
    modified_on?: string;

    /**
     * The definition of the redirect.
     */
    redirect?: PeciSksBItemHostname.Redirect;
  }

  export namespace PeciSksBItemHostname {
    /**
     * Valid characters for hostnames are ASCII(7) letters from a to z, the digits from
     * 0 to 9, wildcards (\*), and the hyphen (-).
     */
    export interface Hostname {
      url_hostname: string;
    }

    /**
     * The definition of the redirect.
     */
    export interface Redirect {
      source_url: string;

      target_url: string;

      include_subdomains?: boolean;

      preserve_path_suffix?: boolean;

      preserve_query_string?: boolean;

      status_code?: 301 | 302 | 307 | 308;

      subpath_matching?: boolean;
    }
  }

  /**
   * A non-negative 32 bit integer
   */
  export interface PeciSksBItemASN {
    /**
     * The unique ID of the list.
     */
    id?: string;

    /**
     * A non-negative 32 bit integer
     */
    asn?: number;

    /**
     * An informative summary of the list item.
     */
    comment?: string;

    /**
     * The RFC 3339 timestamp of when the item was created.
     */
    created_on?: string;

    /**
     * Valid characters for hostnames are ASCII(7) letters from a to z, the digits from
     * 0 to 9, wildcards (\*), and the hyphen (-).
     */
    hostname?: PeciSksBItemASN.Hostname;

    /**
     * An IPv4 address, an IPv4 CIDR, or an IPv6 CIDR. IPv6 CIDRs are limited to a
     * maximum of /64.
     */
    ip?: string;

    /**
     * The RFC 3339 timestamp of when the item was last modified.
     */
    modified_on?: string;

    /**
     * The definition of the redirect.
     */
    redirect?: PeciSksBItemASN.Redirect;
  }

  export namespace PeciSksBItemASN {
    /**
     * Valid characters for hostnames are ASCII(7) letters from a to z, the digits from
     * 0 to 9, wildcards (\*), and the hyphen (-).
     */
    export interface Hostname {
      url_hostname: string;
    }

    /**
     * The definition of the redirect.
     */
    export interface Redirect {
      source_url: string;

      target_url: string;

      include_subdomains?: boolean;

      preserve_path_suffix?: boolean;

      preserve_query_string?: boolean;

      status_code?: 301 | 302 | 307 | 308;

      subpath_matching?: boolean;
    }
  }

  export interface ResultInfo {
    cursors?: ResultInfo.Cursors;
  }

  export namespace ResultInfo {
    export interface Cursors {
      after?: string;

      before?: string;
    }
  }
}

export interface ItemListsUpdateAllListItemsResponse {
  errors?: Array<ItemListsUpdateAllListItemsResponse.Error>;

  messages?: Array<ItemListsUpdateAllListItemsResponse.Message>;

  result?: ItemListsUpdateAllListItemsResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ItemListsUpdateAllListItemsResponse {
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
     * The unique operation ID of the asynchronous action.
     */
    operation_id?: string;
  }
}

export interface ItemDeleteParams {
  items?: Array<ItemDeleteParams.Item>;
}

export namespace ItemDeleteParams {
  export interface Item {
    /**
     * The unique ID of the item in the List.
     */
    id?: string;
  }
}

export type ItemListsCreateListItemsParams = Array<ItemListsCreateListItemsParams.Body>;

export namespace ItemListsCreateListItemsParams {
  export interface Body {
    /**
     * A non-negative 32 bit integer
     */
    asn?: number;

    /**
     * An informative summary of the list item.
     */
    comment?: string;

    /**
     * Valid characters for hostnames are ASCII(7) letters from a to z, the digits from
     * 0 to 9, wildcards (\*), and the hyphen (-).
     */
    hostname?: Body.Hostname;

    /**
     * An IPv4 address, an IPv4 CIDR, or an IPv6 CIDR. IPv6 CIDRs are limited to a
     * maximum of /64.
     */
    ip?: string;

    /**
     * The definition of the redirect.
     */
    redirect?: Body.Redirect;
  }

  export namespace Body {
    /**
     * Valid characters for hostnames are ASCII(7) letters from a to z, the digits from
     * 0 to 9, wildcards (\*), and the hyphen (-).
     */
    export interface Hostname {
      url_hostname: string;
    }

    /**
     * The definition of the redirect.
     */
    export interface Redirect {
      source_url: string;

      target_url: string;

      include_subdomains?: boolean;

      preserve_path_suffix?: boolean;

      preserve_query_string?: boolean;

      status_code?: 301 | 302 | 307 | 308;

      subpath_matching?: boolean;
    }
  }
}

export interface ItemListsGetListItemsParams {
  /**
   * The pagination cursor. An opaque string token indicating the position from which
   * to continue when requesting the next/previous set of records. Cursor values are
   * provided under `result_info.cursors` in the response. You should make no
   * assumptions about a cursor's content or length.
   */
  cursor?: string;

  /**
   * Amount of results to include in each paginated response. A non-negative 32 bit
   * integer.
   */
  per_page?: number;

  /**
   * A search query to filter returned items. Its meaning depends on the list type:
   * IP addresses must start with the provided string, hostnames and bulk redirects
   * must contain the string, and ASNs must match the string exactly.
   */
  search?: string;
}

export type ItemListsUpdateAllListItemsParams = Array<ItemListsUpdateAllListItemsParams.Body>;

export namespace ItemListsUpdateAllListItemsParams {
  export interface Body {
    /**
     * A non-negative 32 bit integer
     */
    asn?: number;

    /**
     * An informative summary of the list item.
     */
    comment?: string;

    /**
     * Valid characters for hostnames are ASCII(7) letters from a to z, the digits from
     * 0 to 9, wildcards (\*), and the hyphen (-).
     */
    hostname?: Body.Hostname;

    /**
     * An IPv4 address, an IPv4 CIDR, or an IPv6 CIDR. IPv6 CIDRs are limited to a
     * maximum of /64.
     */
    ip?: string;

    /**
     * The definition of the redirect.
     */
    redirect?: Body.Redirect;
  }

  export namespace Body {
    /**
     * Valid characters for hostnames are ASCII(7) letters from a to z, the digits from
     * 0 to 9, wildcards (\*), and the hyphen (-).
     */
    export interface Hostname {
      url_hostname: string;
    }

    /**
     * The definition of the redirect.
     */
    export interface Redirect {
      source_url: string;

      target_url: string;

      include_subdomains?: boolean;

      preserve_path_suffix?: boolean;

      preserve_query_string?: boolean;

      status_code?: 301 | 302 | 307 | 308;

      subpath_matching?: boolean;
    }
  }
}

export namespace Items {
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
