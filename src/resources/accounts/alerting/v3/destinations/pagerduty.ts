// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PagerdutyAPI from 'cloudflare/resources/accounts/alerting/v3/destinations/pagerduty';

export class Pagerduty extends APIResource {
  /**
   * Get a list of all configured PagerDuty services.
   */
  list(accountId: string, options?: Core.RequestOptions): Core.APIPromise<PagerdutyListResponse> {
    return this._client.get(`/accounts/${accountId}/alerting/v3/destinations/pagerduty`, options);
  }

  /**
   * Deletes all the PagerDuty Services connected to the account.
   */
  delete(accountId: string, options?: Core.RequestOptions): Core.APIPromise<PagerdutyDeleteResponse> {
    return this._client.delete(`/accounts/${accountId}/alerting/v3/destinations/pagerduty`, options);
  }

  /**
   * Creates a new token for integrating with PagerDuty.
   */
  connect(accountId: string, options?: Core.RequestOptions): Core.APIPromise<PagerdutyConnectResponse> {
    return this._client.post(`/accounts/${accountId}/alerting/v3/destinations/pagerduty/connect`, options);
  }

  /**
   * Links PagerDuty with the account using the integration token.
   */
  link(
    accountId: string,
    tokenId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PagerdutyLinkResponse> {
    return this._client.get(
      `/accounts/${accountId}/alerting/v3/destinations/pagerduty/connect/${tokenId}`,
      options,
    );
  }
}

export interface PagerdutyListResponse {
  errors?: Array<PagerdutyListResponse.Error>;

  messages?: Array<PagerdutyListResponse.Message>;

  result?: Array<PagerdutyListResponse.Result>;

  result_info?: PagerdutyListResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace PagerdutyListResponse {
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
     * UUID
     */
    id?: string;

    /**
     * The name of the pagerduty service.
     */
    name?: string;
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

export interface PagerdutyDeleteResponse {
  errors?: Array<PagerdutyDeleteResponse.Error>;

  messages?: Array<PagerdutyDeleteResponse.Message>;

  result?: Array<unknown> | null;

  result_info?: PagerdutyDeleteResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace PagerdutyDeleteResponse {
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

export interface PagerdutyConnectResponse {
  errors?: Array<PagerdutyConnectResponse.Error>;

  messages?: Array<PagerdutyConnectResponse.Message>;

  result?: PagerdutyConnectResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace PagerdutyConnectResponse {
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
     * UUID
     */
    id?: string;
  }
}

export interface PagerdutyLinkResponse {
  errors?: Array<PagerdutyLinkResponse.Error>;

  messages?: Array<PagerdutyLinkResponse.Message>;

  result?: PagerdutyLinkResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace PagerdutyLinkResponse {
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
     * UUID
     */
    id?: string;
  }
}

export namespace Pagerduty {
  export import PagerdutyListResponse = PagerdutyAPI.PagerdutyListResponse;
  export import PagerdutyDeleteResponse = PagerdutyAPI.PagerdutyDeleteResponse;
  export import PagerdutyConnectResponse = PagerdutyAPI.PagerdutyConnectResponse;
  export import PagerdutyLinkResponse = PagerdutyAPI.PagerdutyLinkResponse;
}
