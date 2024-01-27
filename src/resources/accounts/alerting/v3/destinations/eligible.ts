// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as EligibleAPI from 'cloudflare/resources/accounts/alerting/v3/destinations/eligible';

export class Eligible extends APIResource {
  /**
   * Get a list of all delivery mechanism types for which an account is eligible.
   */
  list(accountId: string, options?: Core.RequestOptions): Core.APIPromise<EligibleListResponse> {
    return this._client.get(`/accounts/${accountId}/alerting/v3/destinations/eligible`, options);
  }
}

export interface EligibleListResponse {
  errors?: Array<EligibleListResponse.Error>;

  messages?: Array<EligibleListResponse.Message>;

  result?: unknown;

  result_info?: EligibleListResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace EligibleListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
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

export namespace Eligible {
  export import EligibleListResponse = EligibleAPI.EligibleListResponse;
}
