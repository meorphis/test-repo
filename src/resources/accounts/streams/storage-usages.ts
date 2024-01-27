// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as StorageUsagesAPI from 'cloudflare/resources/accounts/streams/storage-usages';

export class StorageUsages extends APIResource {
  /**
   * Returns information about an account's storage use.
   */
  retrieve(
    accountIdentifier: string,
    query?: StorageUsageRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StorageUsageRetrieveResponse>;
  retrieve(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StorageUsageRetrieveResponse>;
  retrieve(
    accountIdentifier: string,
    query: StorageUsageRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<StorageUsageRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(accountIdentifier, {}, query);
    }
    return this._client.get(`/accounts/${accountIdentifier}/stream/storage-usage`, { query, ...options });
  }
}

export interface StorageUsageRetrieveResponse {
  errors?: Array<StorageUsageRetrieveResponse.Error>;

  messages?: Array<StorageUsageRetrieveResponse.Message>;

  result?: StorageUsageRetrieveResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace StorageUsageRetrieveResponse {
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
     * A user-defined identifier for the media creator.
     */
    creator?: string;

    /**
     * The total minutes of video content stored in the account.
     */
    totalStorageMinutes?: number;

    /**
     * The storage capacity alloted for the account.
     */
    totalStorageMinutesLimit?: number;

    /**
     * The total count of videos associated with the account.
     */
    videoCount?: number;
  }
}

export interface StorageUsageRetrieveParams {
  /**
   * A user-defined identifier for the media creator.
   */
  creator?: string;
}

export namespace StorageUsages {
  export import StorageUsageRetrieveResponse = StorageUsagesAPI.StorageUsageRetrieveResponse;
  export import StorageUsageRetrieveParams = StorageUsagesAPI.StorageUsageRetrieveParams;
}
