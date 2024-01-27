// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SinkholesAPI from 'cloudflare/resources/accounts/intel/sinkholes';

export class Sinkholes extends APIResource {
  /**
   * List sinkholes owned by this account
   */
  list(accountIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<SinkholeListResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/intel/sinkholes`, options);
  }
}

export interface SinkholeListResponse {
  errors?: Array<SinkholeListResponse.Error>;

  messages?: Array<SinkholeListResponse.Message>;

  result?: Array<SinkholeListResponse.Result>;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace SinkholeListResponse {
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
     * The unique identifier for the sinkhole
     */
    id?: number;

    /**
     * The account tag that owns this sinkhole
     */
    account_tag?: string;

    /**
     * The date and time when the sinkhole was created
     */
    created_on?: string;

    /**
     * The date and time when the sinkhole was last modified
     */
    modified_on?: string;

    /**
     * The name of the sinkhole
     */
    name?: string;

    /**
     * The name of the R2 bucket to store results
     */
    r2_bucket?: string;

    /**
     * The id of the R2 instance
     */
    r2_id?: string;
  }
}

export namespace Sinkholes {
  export import SinkholeListResponse = SinkholesAPI.SinkholeListResponse;
}
