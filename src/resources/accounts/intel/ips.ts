// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as IPsAPI from 'cloudflare/resources/accounts/intel/ips';

export class IPs extends APIResource {
  /**
   * Get IP Overview
   */
  ipIntelligenceGetIPOverview(
    accountIdentifier: string,
    query?: IPIPIntelligenceGetIPOverviewParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IPIPIntelligenceGetIPOverviewResponse>;
  ipIntelligenceGetIPOverview(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IPIPIntelligenceGetIPOverviewResponse>;
  ipIntelligenceGetIPOverview(
    accountIdentifier: string,
    query: IPIPIntelligenceGetIPOverviewParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<IPIPIntelligenceGetIPOverviewResponse> {
    if (isRequestOptions(query)) {
      return this.ipIntelligenceGetIPOverview(accountIdentifier, {}, query);
    }
    return this._client.get(`/accounts/${accountIdentifier}/intel/ip`, { query, ...options });
  }
}

export interface IPIPIntelligenceGetIPOverviewResponse {
  errors?: Array<IPIPIntelligenceGetIPOverviewResponse.Error>;

  messages?: Array<IPIPIntelligenceGetIPOverviewResponse.Message>;

  result?: Array<IPIPIntelligenceGetIPOverviewResponse.Result>;

  result_info?: IPIPIntelligenceGetIPOverviewResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace IPIPIntelligenceGetIPOverviewResponse {
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
     * Specifies a reference to the autonomous systems (AS) that the IP address belongs
     * to.
     */
    belongs_to_ref?: Result.BelongsToRef;

    ip?: string | string;

    risk_types?: unknown;
  }

  export namespace Result {
    /**
     * Specifies a reference to the autonomous systems (AS) that the IP address belongs
     * to.
     */
    export interface BelongsToRef {
      id?: unknown;

      country?: string;

      description?: string;

      /**
       * Infrastructure type of this ASN.
       */
      type?: 'hosting_provider' | 'isp' | 'organization';

      value?: string;
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

export interface IPIPIntelligenceGetIPOverviewParams {
  ipv4?: string;

  ipv6?: string;
}

export namespace IPs {
  export import IPIPIntelligenceGetIPOverviewResponse = IPsAPI.IPIPIntelligenceGetIPOverviewResponse;
  export import IPIPIntelligenceGetIPOverviewParams = IPsAPI.IPIPIntelligenceGetIPOverviewParams;
}
