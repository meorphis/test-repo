// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ReferencesAPI from 'cloudflare/resources/accounts/load-balancers/pools/references';

export class References extends APIResource {
  /**
   * Get the list of resources that reference the provided pool.
   */
  accountLoadBalancerPoolsListPoolReferences(
    accountIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ReferenceAccountLoadBalancerPoolsListPoolReferencesResponse> {
    return this._client.get(
      `/accounts/${accountIdentifier}/load_balancers/pools/${identifier}/references`,
      options,
    );
  }
}

export interface ReferenceAccountLoadBalancerPoolsListPoolReferencesResponse {
  errors?: Array<ReferenceAccountLoadBalancerPoolsListPoolReferencesResponse.Error>;

  messages?: Array<ReferenceAccountLoadBalancerPoolsListPoolReferencesResponse.Message>;

  /**
   * List of resources that reference a given pool.
   */
  result?: Array<ReferenceAccountLoadBalancerPoolsListPoolReferencesResponse.Result>;

  result_info?: ReferenceAccountLoadBalancerPoolsListPoolReferencesResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ReferenceAccountLoadBalancerPoolsListPoolReferencesResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    reference_type?: '*' | 'referral' | 'referrer';

    resource_id?: string;

    resource_name?: string;

    resource_type?: string;
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

export namespace References {
  export import ReferenceAccountLoadBalancerPoolsListPoolReferencesResponse = ReferencesAPI.ReferenceAccountLoadBalancerPoolsListPoolReferencesResponse;
}
