// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ZonesAPI from 'cloudflare/resources/accounts/addresses/address-maps/zones';

export class Zones extends APIResource {
  /**
   * Add a zone as a member of a particular address map.
   */
  update(
    accountIdentifier: string,
    addressMapIdentifier: string,
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZoneUpdateResponse> {
    return this._client.put(
      `/accounts/${accountIdentifier}/addressing/address_maps/${addressMapIdentifier}/zones/${zoneIdentifier}`,
      options,
    );
  }

  /**
   * Remove a zone as a member of a particular address map.
   */
  delete(
    accountIdentifier: string,
    addressMapIdentifier: string,
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZoneDeleteResponse> {
    return this._client.delete(
      `/accounts/${accountIdentifier}/addressing/address_maps/${addressMapIdentifier}/zones/${zoneIdentifier}`,
      options,
    );
  }
}

export interface ZoneUpdateResponse {
  errors?: Array<ZoneUpdateResponse.Error>;

  messages?: Array<ZoneUpdateResponse.Message>;

  result?: Array<unknown> | null;

  result_info?: ZoneUpdateResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ZoneUpdateResponse {
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

export interface ZoneDeleteResponse {
  errors?: Array<ZoneDeleteResponse.Error>;

  messages?: Array<ZoneDeleteResponse.Message>;

  result?: Array<unknown> | null;

  result_info?: ZoneDeleteResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ZoneDeleteResponse {
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

export namespace Zones {
  export import ZoneUpdateResponse = ZonesAPI.ZoneUpdateResponse;
  export import ZoneDeleteResponse = ZonesAPI.ZoneDeleteResponse;
}
