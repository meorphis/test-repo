// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as EntriesAPI from 'cloudflare/resources/zones/web3s/hostnames/ipfs-universal-paths/content-lists/entries';

export class Entries extends APIResource {
  /**
   * IPFS Universal Path Gateway Content List Entry Details
   */
  retrieve(
    zoneIdentifier: string,
    identifier: string,
    contentListEntryIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EntryRetrieveResponse> {
    return this._client.get(
      `/zones/${zoneIdentifier}/web3/hostnames/${identifier}/ipfs_universal_path/content_list/entries/${contentListEntryIdentifier}`,
      options,
    );
  }

  /**
   * Edit IPFS Universal Path Gateway Content List Entry
   */
  update(
    zoneIdentifier: string,
    identifier: string,
    contentListEntryIdentifier: string,
    body: EntryUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EntryUpdateResponse> {
    return this._client.put(
      `/zones/${zoneIdentifier}/web3/hostnames/${identifier}/ipfs_universal_path/content_list/entries/${contentListEntryIdentifier}`,
      { body, ...options },
    );
  }

  /**
   * Delete IPFS Universal Path Gateway Content List Entry
   */
  delete(
    zoneIdentifier: string,
    identifier: string,
    contentListEntryIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EntryDeleteResponse> {
    return this._client.delete(
      `/zones/${zoneIdentifier}/web3/hostnames/${identifier}/ipfs_universal_path/content_list/entries/${contentListEntryIdentifier}`,
      options,
    );
  }

  /**
   * Create IPFS Universal Path Gateway Content List Entry
   */
  web3HostnameCreateIpfsUniversalPathGatewayContentListEntry(
    zoneIdentifier: string,
    identifier: string,
    body: EntryWeb3HostnameCreateIpfsUniversalPathGatewayContentListEntryParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EntryWeb3HostnameCreateIpfsUniversalPathGatewayContentListEntryResponse> {
    return this._client.post(
      `/zones/${zoneIdentifier}/web3/hostnames/${identifier}/ipfs_universal_path/content_list/entries`,
      { body, ...options },
    );
  }

  /**
   * List IPFS Universal Path Gateway Content List Entries
   */
  web3HostnameListIpfsUniversalPathGatewayContentListEntries(
    zoneIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EntryWeb3HostnameListIpfsUniversalPathGatewayContentListEntriesResponse> {
    return this._client.get(
      `/zones/${zoneIdentifier}/web3/hostnames/${identifier}/ipfs_universal_path/content_list/entries`,
      options,
    );
  }
}

export interface EntryRetrieveResponse {
  errors?: Array<EntryRetrieveResponse.Error>;

  messages?: Array<EntryRetrieveResponse.Message>;

  /**
   * Content list entry to be blocked.
   */
  result?: EntryRetrieveResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace EntryRetrieveResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Content list entry to be blocked.
   */
  export interface Result {
    /**
     * Identifier
     */
    id?: string;

    /**
     * CID or content path of content to block.
     */
    content?: string;

    created_on?: string;

    /**
     * An optional description of the content list entry.
     */
    description?: string;

    modified_on?: string;

    /**
     * Type of content list entry to block.
     */
    type?: 'cid' | 'content_path';
  }
}

export interface EntryUpdateResponse {
  errors?: Array<EntryUpdateResponse.Error>;

  messages?: Array<EntryUpdateResponse.Message>;

  /**
   * Content list entry to be blocked.
   */
  result?: EntryUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace EntryUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Content list entry to be blocked.
   */
  export interface Result {
    /**
     * Identifier
     */
    id?: string;

    /**
     * CID or content path of content to block.
     */
    content?: string;

    created_on?: string;

    /**
     * An optional description of the content list entry.
     */
    description?: string;

    modified_on?: string;

    /**
     * Type of content list entry to block.
     */
    type?: 'cid' | 'content_path';
  }
}

export interface EntryDeleteResponse {
  errors?: Array<EntryDeleteResponse.Error>;

  messages?: Array<EntryDeleteResponse.Message>;

  result?: EntryDeleteResponse.Result | null;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace EntryDeleteResponse {
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

export interface EntryWeb3HostnameCreateIpfsUniversalPathGatewayContentListEntryResponse {
  errors?: Array<EntryWeb3HostnameCreateIpfsUniversalPathGatewayContentListEntryResponse.Error>;

  messages?: Array<EntryWeb3HostnameCreateIpfsUniversalPathGatewayContentListEntryResponse.Message>;

  /**
   * Content list entry to be blocked.
   */
  result?: EntryWeb3HostnameCreateIpfsUniversalPathGatewayContentListEntryResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace EntryWeb3HostnameCreateIpfsUniversalPathGatewayContentListEntryResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Content list entry to be blocked.
   */
  export interface Result {
    /**
     * Identifier
     */
    id?: string;

    /**
     * CID or content path of content to block.
     */
    content?: string;

    created_on?: string;

    /**
     * An optional description of the content list entry.
     */
    description?: string;

    modified_on?: string;

    /**
     * Type of content list entry to block.
     */
    type?: 'cid' | 'content_path';
  }
}

export interface EntryWeb3HostnameListIpfsUniversalPathGatewayContentListEntriesResponse {
  errors?: Array<EntryWeb3HostnameListIpfsUniversalPathGatewayContentListEntriesResponse.Error>;

  messages?: Array<EntryWeb3HostnameListIpfsUniversalPathGatewayContentListEntriesResponse.Message>;

  result?: EntryWeb3HostnameListIpfsUniversalPathGatewayContentListEntriesResponse.Result;

  result_info?: EntryWeb3HostnameListIpfsUniversalPathGatewayContentListEntriesResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace EntryWeb3HostnameListIpfsUniversalPathGatewayContentListEntriesResponse {
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
     * Content list entries.
     */
    entries?: Array<Result.Entry>;
  }

  export namespace Result {
    /**
     * Content list entry to be blocked.
     */
    export interface Entry {
      /**
       * Identifier
       */
      id?: string;

      /**
       * CID or content path of content to block.
       */
      content?: string;

      created_on?: string;

      /**
       * An optional description of the content list entry.
       */
      description?: string;

      modified_on?: string;

      /**
       * Type of content list entry to block.
       */
      type?: 'cid' | 'content_path';
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

export interface EntryUpdateParams {
  /**
   * CID or content path of content to block.
   */
  content: string;

  /**
   * Type of content list entry to block.
   */
  type: 'cid' | 'content_path';

  /**
   * An optional description of the content list entry.
   */
  description?: string;
}

export interface EntryWeb3HostnameCreateIpfsUniversalPathGatewayContentListEntryParams {
  /**
   * CID or content path of content to block.
   */
  content: string;

  /**
   * Type of content list entry to block.
   */
  type: 'cid' | 'content_path';

  /**
   * An optional description of the content list entry.
   */
  description?: string;
}

export namespace Entries {
  export import EntryRetrieveResponse = EntriesAPI.EntryRetrieveResponse;
  export import EntryUpdateResponse = EntriesAPI.EntryUpdateResponse;
  export import EntryDeleteResponse = EntriesAPI.EntryDeleteResponse;
  export import EntryWeb3HostnameCreateIpfsUniversalPathGatewayContentListEntryResponse = EntriesAPI.EntryWeb3HostnameCreateIpfsUniversalPathGatewayContentListEntryResponse;
  export import EntryWeb3HostnameListIpfsUniversalPathGatewayContentListEntriesResponse = EntriesAPI.EntryWeb3HostnameListIpfsUniversalPathGatewayContentListEntriesResponse;
  export import EntryUpdateParams = EntriesAPI.EntryUpdateParams;
  export import EntryWeb3HostnameCreateIpfsUniversalPathGatewayContentListEntryParams = EntriesAPI.EntryWeb3HostnameCreateIpfsUniversalPathGatewayContentListEntryParams;
}
