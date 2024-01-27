// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ValidatesAPI from 'cloudflare/resources/accounts/pcaps/ownerships/validates';

export class Validates extends APIResource {
  /**
   * Validates buckets added to the packet captures API.
   */
  magicPcapCollectionValidateBucketsForFullPacketCaptures(
    accountIdentifier: string,
    body: ValidateMagicPcapCollectionValidateBucketsForFullPacketCapturesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ValidateMagicPcapCollectionValidateBucketsForFullPacketCapturesResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/pcaps/ownership/validate`, { body, ...options });
  }
}

export interface ValidateMagicPcapCollectionValidateBucketsForFullPacketCapturesResponse {
  errors?: Array<ValidateMagicPcapCollectionValidateBucketsForFullPacketCapturesResponse.Error>;

  messages?: Array<ValidateMagicPcapCollectionValidateBucketsForFullPacketCapturesResponse.Message>;

  result?: ValidateMagicPcapCollectionValidateBucketsForFullPacketCapturesResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ValidateMagicPcapCollectionValidateBucketsForFullPacketCapturesResponse {
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

export interface ValidateMagicPcapCollectionValidateBucketsForFullPacketCapturesParams {
  /**
   * The full URI for the bucket. This field only applies to `full` packet captures.
   */
  destination_conf: string;

  /**
   * The ownership challenge filename stored in the bucket.
   */
  ownership_challenge: string;
}

export namespace Validates {
  export import ValidateMagicPcapCollectionValidateBucketsForFullPacketCapturesResponse = ValidatesAPI.ValidateMagicPcapCollectionValidateBucketsForFullPacketCapturesResponse;
  export import ValidateMagicPcapCollectionValidateBucketsForFullPacketCapturesParams = ValidatesAPI.ValidateMagicPcapCollectionValidateBucketsForFullPacketCapturesParams;
}
