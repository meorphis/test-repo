// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as OwnershipsAPI from 'cloudflare/resources/accounts/pcaps/ownerships/ownerships';
import * as ValidatesAPI from 'cloudflare/resources/accounts/pcaps/ownerships/validates';

export class Ownerships extends APIResource {
  validates: ValidatesAPI.Validates = new ValidatesAPI.Validates(this._client);

  /**
   * Deletes buckets added to the packet captures API.
   */
  delete(
    accountIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.delete(`/accounts/${accountIdentifier}/pcaps/ownership/${identifier}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Adds an AWS or GCP bucket to use with full packet captures.
   */
  magicPcapCollectionAddBucketsForFullPacketCaptures(
    accountIdentifier: string,
    body: OwnershipMagicPcapCollectionAddBucketsForFullPacketCapturesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OwnershipMagicPcapCollectionAddBucketsForFullPacketCapturesResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/pcaps/ownership`, { body, ...options });
  }

  /**
   * List all buckets configured for use with PCAPs API.
   */
  magicPcapCollectionListPcaPsBucketOwnership(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OwnershipMagicPcapCollectionListPcaPsBucketOwnershipResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/pcaps/ownership`, options);
  }
}

export interface OwnershipMagicPcapCollectionAddBucketsForFullPacketCapturesResponse {
  errors?: Array<OwnershipMagicPcapCollectionAddBucketsForFullPacketCapturesResponse.Error>;

  messages?: Array<OwnershipMagicPcapCollectionAddBucketsForFullPacketCapturesResponse.Message>;

  result?: OwnershipMagicPcapCollectionAddBucketsForFullPacketCapturesResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace OwnershipMagicPcapCollectionAddBucketsForFullPacketCapturesResponse {
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
     * The bucket ID associated with the packet captures API.
     */
    id: string;

    /**
     * The full URI for the bucket. This field only applies to `full` packet captures.
     */
    destination_conf: string;

    /**
     * The ownership challenge filename stored in the bucket.
     */
    filename: string;

    /**
     * The status of the ownership challenge. Can be pending, success or failed.
     */
    status: 'pending' | 'success' | 'failed';

    /**
     * The RFC 3339 timestamp when the bucket was added to packet captures API.
     */
    submitted: string;

    /**
     * The RFC 3339 timestamp when the bucket was validated.
     */
    validated?: string;
  }
}

export interface OwnershipMagicPcapCollectionListPcaPsBucketOwnershipResponse {
  errors?: Array<OwnershipMagicPcapCollectionListPcaPsBucketOwnershipResponse.Error>;

  messages?: Array<OwnershipMagicPcapCollectionListPcaPsBucketOwnershipResponse.Message>;

  result?: Array<OwnershipMagicPcapCollectionListPcaPsBucketOwnershipResponse.Result> | null;

  result_info?: OwnershipMagicPcapCollectionListPcaPsBucketOwnershipResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace OwnershipMagicPcapCollectionListPcaPsBucketOwnershipResponse {
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
     * The bucket ID associated with the packet captures API.
     */
    id: string;

    /**
     * The full URI for the bucket. This field only applies to `full` packet captures.
     */
    destination_conf: string;

    /**
     * The ownership challenge filename stored in the bucket.
     */
    filename: string;

    /**
     * The status of the ownership challenge. Can be pending, success or failed.
     */
    status: 'pending' | 'success' | 'failed';

    /**
     * The RFC 3339 timestamp when the bucket was added to packet captures API.
     */
    submitted: string;

    /**
     * The RFC 3339 timestamp when the bucket was validated.
     */
    validated?: string;
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

export interface OwnershipMagicPcapCollectionAddBucketsForFullPacketCapturesParams {
  /**
   * The full URI for the bucket. This field only applies to `full` packet captures.
   */
  destination_conf: string;
}

export namespace Ownerships {
  export import OwnershipMagicPcapCollectionAddBucketsForFullPacketCapturesResponse = OwnershipsAPI.OwnershipMagicPcapCollectionAddBucketsForFullPacketCapturesResponse;
  export import OwnershipMagicPcapCollectionListPcaPsBucketOwnershipResponse = OwnershipsAPI.OwnershipMagicPcapCollectionListPcaPsBucketOwnershipResponse;
  export import OwnershipMagicPcapCollectionAddBucketsForFullPacketCapturesParams = OwnershipsAPI.OwnershipMagicPcapCollectionAddBucketsForFullPacketCapturesParams;
  export import Validates = ValidatesAPI.Validates;
  export import ValidateMagicPcapCollectionValidateBucketsForFullPacketCapturesResponse = ValidatesAPI.ValidateMagicPcapCollectionValidateBucketsForFullPacketCapturesResponse;
  export import ValidateMagicPcapCollectionValidateBucketsForFullPacketCapturesParams = ValidatesAPI.ValidateMagicPcapCollectionValidateBucketsForFullPacketCapturesParams;
}
