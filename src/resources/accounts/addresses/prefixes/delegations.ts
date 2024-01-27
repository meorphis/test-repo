// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DelegationsAPI from 'cloudflare/resources/accounts/addresses/prefixes/delegations';

export class Delegations extends APIResource {
  /**
   * Delete an account delegation for a given IP prefix.
   */
  delete(
    accountIdentifier: string,
    prefixIdentifier: string,
    delegationIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DelegationDeleteResponse> {
    return this._client.delete(
      `/accounts/${accountIdentifier}/addressing/prefixes/${prefixIdentifier}/delegations/${delegationIdentifier}`,
      options,
    );
  }

  /**
   * Create a new account delegation for a given IP prefix.
   */
  ipAddressManagementPrefixDelegationCreatePrefixDelegation(
    accountIdentifier: string,
    prefixIdentifier: string,
    body: DelegationIPAddressManagementPrefixDelegationCreatePrefixDelegationParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DelegationIPAddressManagementPrefixDelegationCreatePrefixDelegationResponse> {
    return this._client.post(
      `/accounts/${accountIdentifier}/addressing/prefixes/${prefixIdentifier}/delegations`,
      { body, ...options },
    );
  }

  /**
   * List all delegations for a given account IP prefix.
   */
  ipAddressManagementPrefixDelegationListPrefixDelegations(
    accountIdentifier: string,
    prefixIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DelegationIPAddressManagementPrefixDelegationListPrefixDelegationsResponse> {
    return this._client.get(
      `/accounts/${accountIdentifier}/addressing/prefixes/${prefixIdentifier}/delegations`,
      options,
    );
  }
}

export interface DelegationDeleteResponse {
  errors?: Array<DelegationDeleteResponse.Error>;

  messages?: Array<DelegationDeleteResponse.Message>;

  result?: DelegationDeleteResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace DelegationDeleteResponse {
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
     * Delegation identifier tag.
     */
    id?: string;
  }
}

export interface DelegationIPAddressManagementPrefixDelegationCreatePrefixDelegationResponse {
  errors?: Array<DelegationIPAddressManagementPrefixDelegationCreatePrefixDelegationResponse.Error>;

  messages?: Array<DelegationIPAddressManagementPrefixDelegationCreatePrefixDelegationResponse.Message>;

  result?: DelegationIPAddressManagementPrefixDelegationCreatePrefixDelegationResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace DelegationIPAddressManagementPrefixDelegationCreatePrefixDelegationResponse {
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
     * Delegation identifier tag.
     */
    id?: string;

    /**
     * IP Prefix in Classless Inter-Domain Routing format.
     */
    cidr?: string;

    created_at?: string;

    /**
     * Account identifier for the account to which prefix is being delegated.
     */
    delegated_account_id?: string;

    modified_at?: string;

    /**
     * Identifier
     */
    parent_prefix_id?: string;
  }
}

export interface DelegationIPAddressManagementPrefixDelegationListPrefixDelegationsResponse {
  errors?: Array<DelegationIPAddressManagementPrefixDelegationListPrefixDelegationsResponse.Error>;

  messages?: Array<DelegationIPAddressManagementPrefixDelegationListPrefixDelegationsResponse.Message>;

  result?: Array<DelegationIPAddressManagementPrefixDelegationListPrefixDelegationsResponse.Result>;

  result_info?: DelegationIPAddressManagementPrefixDelegationListPrefixDelegationsResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace DelegationIPAddressManagementPrefixDelegationListPrefixDelegationsResponse {
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
     * Delegation identifier tag.
     */
    id?: string;

    /**
     * IP Prefix in Classless Inter-Domain Routing format.
     */
    cidr?: string;

    created_at?: string;

    /**
     * Account identifier for the account to which prefix is being delegated.
     */
    delegated_account_id?: string;

    modified_at?: string;

    /**
     * Identifier
     */
    parent_prefix_id?: string;
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

export interface DelegationIPAddressManagementPrefixDelegationCreatePrefixDelegationParams {
  /**
   * IP Prefix in Classless Inter-Domain Routing format.
   */
  cidr: string;

  /**
   * Account identifier for the account to which prefix is being delegated.
   */
  delegated_account_id: string;
}

export namespace Delegations {
  export import DelegationDeleteResponse = DelegationsAPI.DelegationDeleteResponse;
  export import DelegationIPAddressManagementPrefixDelegationCreatePrefixDelegationResponse = DelegationsAPI.DelegationIPAddressManagementPrefixDelegationCreatePrefixDelegationResponse;
  export import DelegationIPAddressManagementPrefixDelegationListPrefixDelegationsResponse = DelegationsAPI.DelegationIPAddressManagementPrefixDelegationListPrefixDelegationsResponse;
  export import DelegationIPAddressManagementPrefixDelegationCreatePrefixDelegationParams = DelegationsAPI.DelegationIPAddressManagementPrefixDelegationCreatePrefixDelegationParams;
}
