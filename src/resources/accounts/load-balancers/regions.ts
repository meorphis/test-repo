// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as RegionsAPI from 'cloudflare/resources/accounts/load-balancers/regions';

export class Regions extends APIResource {
  /**
   * Get a single region mapping.
   */
  retrieve(
    accountIdentifier: string,
    regionCode:
      | 'WNAM'
      | 'ENAM'
      | 'WEU'
      | 'EEU'
      | 'NSAM'
      | 'SSAM'
      | 'OC'
      | 'ME'
      | 'NAF'
      | 'SAF'
      | 'SAS'
      | 'SEAS'
      | 'NEAS',
    options?: Core.RequestOptions,
  ): Core.APIPromise<RegionRetrieveResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/load_balancers/regions/${regionCode}`, options);
  }

  /**
   * List all region mappings.
   */
  loadBalancerRegionsListRegions(
    accountIdentifier: string,
    query?: RegionLoadBalancerRegionsListRegionsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RegionLoadBalancerRegionsListRegionsResponse>;
  loadBalancerRegionsListRegions(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RegionLoadBalancerRegionsListRegionsResponse>;
  loadBalancerRegionsListRegions(
    accountIdentifier: string,
    query: RegionLoadBalancerRegionsListRegionsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RegionLoadBalancerRegionsListRegionsResponse> {
    if (isRequestOptions(query)) {
      return this.loadBalancerRegionsListRegions(accountIdentifier, {}, query);
    }
    return this._client.get(`/accounts/${accountIdentifier}/load_balancers/regions`, { query, ...options });
  }
}

export interface RegionRetrieveResponse {
  errors?: Array<RegionRetrieveResponse.Error>;

  messages?: Array<RegionRetrieveResponse.Message>;

  /**
   * A list of countries and subdivisions mapped to a region.
   */
  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace RegionRetrieveResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface RegionLoadBalancerRegionsListRegionsResponse {
  errors?: Array<RegionLoadBalancerRegionsListRegionsResponse.Error>;

  messages?: Array<RegionLoadBalancerRegionsListRegionsResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace RegionLoadBalancerRegionsListRegionsResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface RegionLoadBalancerRegionsListRegionsParams {
  /**
   * Two-letter alpha-2 country code followed in ISO 3166-1.
   */
  country_code_a2?: string;

  /**
   * Two-letter subdivision code followed in ISO 3166-2.
   */
  subdivision_code?: string;

  /**
   * Two-letter subdivision code followed in ISO 3166-2.
   */
  subdivision_code_a2?: string;
}

export namespace Regions {
  export import RegionRetrieveResponse = RegionsAPI.RegionRetrieveResponse;
  export import RegionLoadBalancerRegionsListRegionsResponse = RegionsAPI.RegionLoadBalancerRegionsListRegionsResponse;
  export import RegionLoadBalancerRegionsListRegionsParams = RegionsAPI.RegionLoadBalancerRegionsListRegionsParams;
}
