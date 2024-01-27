// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as IndicatorFeedsAPI from 'cloudflare/resources/intel/indicator-feeds/indicator-feeds';
import * as PermissionsAPI from 'cloudflare/resources/intel/indicator-feeds/permissions';
import { multipartFormRequestOptions } from 'cloudflare/core';

export class IndicatorFeeds extends APIResource {
  permissions: PermissionsAPI.Permissions = new PermissionsAPI.Permissions(this._client);

  /**
   * Create new indicator feed
   */
  create(
    accountIdentifier: string,
    body: IndicatorFeedCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IndicatorFeedCreateResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/intel/indicator-feeds`, { body, ...options });
  }

  /**
   * Get indicator feed metadata
   */
  retrieve(
    accountIdentifier: string,
    feedId: number,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IndicatorFeedRetrieveResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/intel/indicator-feeds/${feedId}`, options);
  }

  /**
   * Get indicator feeds owned by this account
   */
  list(accountIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<IndicatorFeedListResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/intel/indicator-feeds`, options);
  }

  /**
   * Get indicator feed data
   */
  data(accountIdentifier: string, feedId: number, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get(`/accounts/${accountIdentifier}/intel/indicator-feeds/${feedId}/data`, {
      ...options,
      headers: { Accept: 'text/csv', ...options?.headers },
    });
  }

  /**
   * Update indicator feed data
   */
  snapshot(
    accountIdentifier: string,
    feedId: number,
    body: IndicatorFeedSnapshotParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IndicatorFeedSnapshotResponse> {
    return this._client.put(
      `/accounts/${accountIdentifier}/intel/indicator-feeds/${feedId}/snapshot`,
      multipartFormRequestOptions({ body, ...options }),
    );
  }
}

export interface IndicatorFeedCreateResponse {
  errors?: Array<IndicatorFeedCreateResponse.Error>;

  messages?: Array<IndicatorFeedCreateResponse.Message>;

  result?: IndicatorFeedCreateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace IndicatorFeedCreateResponse {
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
     * The unique identifier for the indicator feed
     */
    id?: number;

    /**
     * The date and time when the data entry was created
     */
    created_on?: string;

    /**
     * The description of the example test
     */
    description?: string;

    /**
     * The date and time when the data entry was last modified
     */
    modified_on?: string;

    /**
     * The name of the indicator feed
     */
    name?: string;
  }
}

export interface IndicatorFeedRetrieveResponse {
  errors?: Array<IndicatorFeedRetrieveResponse.Error>;

  messages?: Array<IndicatorFeedRetrieveResponse.Message>;

  result?: IndicatorFeedRetrieveResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace IndicatorFeedRetrieveResponse {
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
     * The unique identifier for the indicator feed
     */
    id?: number;

    /**
     * The date and time when the data entry was created
     */
    created_on?: string;

    /**
     * The description of the example test
     */
    description?: string;

    /**
     * Status of the latest snapshot uploaded
     */
    latest_upload_status?: 'Mirroring' | 'Unifying' | 'Loading' | 'Provisioning' | 'Complete' | 'Error';

    /**
     * The date and time when the data entry was last modified
     */
    modified_on?: string;

    /**
     * The name of the indicator feed
     */
    name?: string;
  }
}

export interface IndicatorFeedListResponse {
  errors?: Array<IndicatorFeedListResponse.Error>;

  messages?: Array<IndicatorFeedListResponse.Message>;

  result?: Array<IndicatorFeedListResponse.Result>;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace IndicatorFeedListResponse {
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
     * The unique identifier for the indicator feed
     */
    id?: number;

    /**
     * The date and time when the data entry was created
     */
    created_on?: string;

    /**
     * The description of the example test
     */
    description?: string;

    /**
     * The date and time when the data entry was last modified
     */
    modified_on?: string;

    /**
     * The name of the indicator feed
     */
    name?: string;
  }
}

export type IndicatorFeedDataResponse = string;

export interface IndicatorFeedSnapshotResponse {
  errors?: Array<IndicatorFeedSnapshotResponse.Error>;

  messages?: Array<IndicatorFeedSnapshotResponse.Message>;

  result?: IndicatorFeedSnapshotResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace IndicatorFeedSnapshotResponse {
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
     * Feed id
     */
    file_id?: number;

    /**
     * Name of the file unified in our system
     */
    filename?: string;

    /**
     * Current status of upload, should be unified
     */
    status?: string;
  }
}

export interface IndicatorFeedCreateParams {
  /**
   * The description of the example test
   */
  description?: string;

  /**
   * The name of the indicator feed
   */
  name?: string;
}

export interface IndicatorFeedSnapshotParams {
  /**
   * The file to upload
   */
  source?: string;
}

export namespace IndicatorFeeds {
  export import IndicatorFeedCreateResponse = IndicatorFeedsAPI.IndicatorFeedCreateResponse;
  export import IndicatorFeedRetrieveResponse = IndicatorFeedsAPI.IndicatorFeedRetrieveResponse;
  export import IndicatorFeedListResponse = IndicatorFeedsAPI.IndicatorFeedListResponse;
  export import IndicatorFeedDataResponse = IndicatorFeedsAPI.IndicatorFeedDataResponse;
  export import IndicatorFeedSnapshotResponse = IndicatorFeedsAPI.IndicatorFeedSnapshotResponse;
  export import IndicatorFeedCreateParams = IndicatorFeedsAPI.IndicatorFeedCreateParams;
  export import IndicatorFeedSnapshotParams = IndicatorFeedsAPI.IndicatorFeedSnapshotParams;
  export import Permissions = PermissionsAPI.Permissions;
  export import PermissionAddResponse = PermissionsAPI.PermissionAddResponse;
  export import PermissionAddParams = PermissionsAPI.PermissionAddParams;
}
