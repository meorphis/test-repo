// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as IPsAPI from 'cloudflare/resources/accounts/addresses/address-maps/ips';

export class IPs extends APIResource {
  /**
   * Add an IP from a prefix owned by the account to a particular address map.
   */
  update(
    accountIdentifier: string,
    addressMapIdentifier: string,
    ipAddress: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IPUpdateResponse> {
    return this._client.put(
      `/accounts/${accountIdentifier}/addressing/address_maps/${addressMapIdentifier}/ips/${ipAddress}`,
      options,
    );
  }

  /**
   * Remove an IP from a particular address map.
   */
  delete(
    accountIdentifier: string,
    addressMapIdentifier: string,
    ipAddress: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IPDeleteResponse> {
    return this._client.delete(
      `/accounts/${accountIdentifier}/addressing/address_maps/${addressMapIdentifier}/ips/${ipAddress}`,
      options,
    );
  }
}

export interface IPUpdateResponse {
  errors?: Array<IPUpdateResponse.Error>;

  messages?: Array<IPUpdateResponse.Message>;

  result?: Array<unknown> | null;

  result_info?: IPUpdateResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace IPUpdateResponse {
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

export interface IPDeleteResponse {
  errors?: Array<IPDeleteResponse.Error>;

  messages?: Array<IPDeleteResponse.Message>;

  result?: Array<unknown> | null;

  result_info?: IPDeleteResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace IPDeleteResponse {
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

export namespace IPs {
  export import IPUpdateResponse = IPsAPI.IPUpdateResponse;
  export import IPDeleteResponse = IPsAPI.IPDeleteResponse;
}
