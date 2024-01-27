// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as BucketsAPI from 'cloudflare/resources/accounts/r2/buckets';

export class Buckets extends APIResource {
  /**
   * Gets metadata for an existing R2 bucket.
   */
  retrieve(
    accountIdentifier: string,
    bucketName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BucketRetrieveResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/r2/buckets/${bucketName}`, options);
  }

  /**
   * Deletes an existing R2 bucket.
   */
  delete(
    accountIdentifier: string,
    bucketName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BucketDeleteResponse> {
    return this._client.delete(`/accounts/${accountIdentifier}/r2/buckets/${bucketName}`, options);
  }

  /**
   * Creates a new R2 bucket.
   */
  r2BucketCreateBucket(
    accountIdentifier: string,
    body: BucketR2BucketCreateBucketParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BucketR2BucketCreateBucketResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/r2/buckets`, { body, ...options });
  }

  /**
   * Lists all R2 buckets on your account
   */
  r2BucketListBuckets(
    accountIdentifier: string,
    query?: BucketR2BucketListBucketsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BucketR2BucketListBucketsResponse>;
  r2BucketListBuckets(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BucketR2BucketListBucketsResponse>;
  r2BucketListBuckets(
    accountIdentifier: string,
    query: BucketR2BucketListBucketsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BucketR2BucketListBucketsResponse> {
    if (isRequestOptions(query)) {
      return this.r2BucketListBuckets(accountIdentifier, {}, query);
    }
    return this._client.get(`/accounts/${accountIdentifier}/r2/buckets`, { query, ...options });
  }
}

export interface BucketRetrieveResponse {
  errors?: Array<BucketRetrieveResponse.Error>;

  messages?: Array<string>;

  /**
   * A single R2 bucket
   */
  result?: BucketRetrieveResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace BucketRetrieveResponse {
  export interface Error {
    code: number;

    message: string;
  }

  /**
   * A single R2 bucket
   */
  export interface Result {
    /**
     * Creation timestamp
     */
    creation_date?: string;

    /**
     * Location of the bucket
     */
    location?: 'apac' | 'eeur' | 'enam' | 'weur' | 'wnam';

    /**
     * Name of the bucket
     */
    name?: string;
  }
}

export interface BucketDeleteResponse {
  errors: Array<BucketDeleteResponse.Error>;

  messages: Array<string>;

  result: unknown;

  /**
   * Whether the API call was successful
   */
  success: true;
}

export namespace BucketDeleteResponse {
  export interface Error {
    code: number;

    message: string;
  }
}

export interface BucketR2BucketCreateBucketResponse {
  errors?: Array<BucketR2BucketCreateBucketResponse.Error>;

  messages?: Array<string>;

  /**
   * A single R2 bucket
   */
  result?: BucketR2BucketCreateBucketResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace BucketR2BucketCreateBucketResponse {
  export interface Error {
    code: number;

    message: string;
  }

  /**
   * A single R2 bucket
   */
  export interface Result {
    /**
     * Creation timestamp
     */
    creation_date?: string;

    /**
     * Location of the bucket
     */
    location?: 'apac' | 'eeur' | 'enam' | 'weur' | 'wnam';

    /**
     * Name of the bucket
     */
    name?: string;
  }
}

export interface BucketR2BucketListBucketsResponse {
  errors?: Array<BucketR2BucketListBucketsResponse.Error>;

  messages?: Array<string>;

  result?: Array<BucketR2BucketListBucketsResponse.Result>;

  result_info?: BucketR2BucketListBucketsResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace BucketR2BucketListBucketsResponse {
  export interface Error {
    code: number;

    message: string;
  }

  /**
   * A single R2 bucket
   */
  export interface Result {
    /**
     * Creation timestamp
     */
    creation_date?: string;

    /**
     * Location of the bucket
     */
    location?: 'apac' | 'eeur' | 'enam' | 'weur' | 'wnam';

    /**
     * Name of the bucket
     */
    name?: string;
  }

  export interface ResultInfo {
    /**
     * A continuation token that should be used to fetch the next page of results
     */
    cursor?: string;

    /**
     * Maximum number of results on this page
     */
    per_page?: number;
  }
}

export interface BucketR2BucketCreateBucketParams {
  /**
   * Name of the bucket
   */
  name: string;

  /**
   * Location of the bucket
   */
  locationHint?: 'apac' | 'eeur' | 'enam' | 'weur' | 'wnam';
}

export interface BucketR2BucketListBucketsParams {
  /**
   * Pagination cursor received during the last List Buckets call. R2 buckets are
   * paginated using cursors instead of page numbers.
   */
  cursor?: string;

  /**
   * Direction to order buckets
   */
  direction?: 'asc' | 'desc';

  /**
   * Bucket names to filter by. Only buckets with this phrase in their name will be
   * returned.
   */
  name_contains?: string;

  /**
   * Field to order buckets by
   */
  order?: 'name';

  /**
   * Maximum number of buckets to return in a single call
   */
  per_page?: number;

  /**
   * Bucket name to start searching after. Buckets are ordered lexicographically.
   */
  start_after?: string;
}

export namespace Buckets {
  export import BucketRetrieveResponse = BucketsAPI.BucketRetrieveResponse;
  export import BucketDeleteResponse = BucketsAPI.BucketDeleteResponse;
  export import BucketR2BucketCreateBucketResponse = BucketsAPI.BucketR2BucketCreateBucketResponse;
  export import BucketR2BucketListBucketsResponse = BucketsAPI.BucketR2BucketListBucketsResponse;
  export import BucketR2BucketCreateBucketParams = BucketsAPI.BucketR2BucketCreateBucketParams;
  export import BucketR2BucketListBucketsParams = BucketsAPI.BucketR2BucketListBucketsParams;
}
