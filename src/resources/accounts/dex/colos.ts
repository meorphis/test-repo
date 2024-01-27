// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ColosAPI from 'cloudflare/resources/accounts/dex/colos';

export class Colos extends APIResource {
  /**
   * List Cloudflare colos that account's devices were connected to during a time
   * period, sorted by usage starting from the most used colo. Colos without traffic
   * are also returned and sorted alphabetically.
   */
  list(
    accountIdentifier: string,
    query: ColoListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ColoListResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/dex/colos`, { query, ...options });
  }
}

export interface ColoListResponse {
  errors?: Array<ColoListResponse.Error>;

  messages?: Array<ColoListResponse.Message>;

  /**
   * array of colos.
   */
  result?: Array<ColoListResponse.Result>;

  result_info?: ColoListResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ColoListResponse {
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
     * Airport code
     */
    airportCode: string;

    /**
     * City
     */
    city: string;

    /**
     * Country code
     */
    countryCode: string;
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

export interface ColoListParams {
  /**
   * End time for connection period in RFC3339 (ISO 8601) format.
   */
  timeEnd: string;

  /**
   * Start time for connection period in RFC3339 (ISO 8601) format.
   */
  timeStart: string;

  /**
   * Type of usage that colos should be sorted by. If unspecified, returns all
   * Cloudflare colos sorted alphabetically.
   */
  sortBy?: 'fleet-status-usage' | 'application-tests-usage';
}

export namespace Colos {
  export import ColoListResponse = ColosAPI.ColoListResponse;
  export import ColoListParams = ColosAPI.ColoListParams;
}
