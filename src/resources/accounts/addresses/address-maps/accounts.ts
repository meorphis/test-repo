// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as AccountsAPI from 'cloudflare/resources/accounts/addresses/address-maps/accounts';

export class Accounts extends APIResource {
  /**
   * Add an account as a member of a particular address map.
   */
  update(
    accountIdentifier1: string,
    addressMapIdentifier: string,
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountUpdateResponse> {
    return this._client.put(
      `/accounts/${accountIdentifier1}/addressing/address_maps/${addressMapIdentifier}/accounts/${accountIdentifier}`,
      options,
    );
  }

  /**
   * Remove an account as a member of a particular address map.
   */
  delete(
    accountIdentifier1: string,
    addressMapIdentifier: string,
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountDeleteResponse> {
    return this._client.delete(
      `/accounts/${accountIdentifier1}/addressing/address_maps/${addressMapIdentifier}/accounts/${accountIdentifier}`,
      options,
    );
  }
}

export interface AccountUpdateResponse {
  errors?: Array<AccountUpdateResponse.Error>;

  messages?: Array<AccountUpdateResponse.Message>;

  result?: Array<unknown> | null;

  result_info?: AccountUpdateResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace AccountUpdateResponse {
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

export interface AccountDeleteResponse {
  errors?: Array<AccountDeleteResponse.Error>;

  messages?: Array<AccountDeleteResponse.Message>;

  result?: Array<unknown> | null;

  result_info?: AccountDeleteResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace AccountDeleteResponse {
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

export namespace Accounts {
  export import AccountUpdateResponse = AccountsAPI.AccountUpdateResponse;
  export import AccountDeleteResponse = AccountsAPI.AccountDeleteResponse;
}
