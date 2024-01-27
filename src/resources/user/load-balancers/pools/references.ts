// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ReferencesAPI from 'cloudflare/resources/user/load-balancers/pools/references';

export class References extends APIResource {
  /**
   * Get the list of resources that reference the provided pool.
   */
  loadBalancerPoolsListPoolReferences(
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ReferenceLoadBalancerPoolsListPoolReferencesResponse> {
    return this._client.get(`/user/load_balancers/pools/${identifier}/references`, options);
  }
}

export interface ReferenceLoadBalancerPoolsListPoolReferencesResponse {
  errors?: Array<ReferenceLoadBalancerPoolsListPoolReferencesResponse.Error>;

  messages?: Array<ReferenceLoadBalancerPoolsListPoolReferencesResponse.Message>;

  /**
   * List of resources that reference a given pool.
   */
  result?: Array<ReferenceLoadBalancerPoolsListPoolReferencesResponse.Result>;

  result_info?: ReferenceLoadBalancerPoolsListPoolReferencesResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ReferenceLoadBalancerPoolsListPoolReferencesResponse {
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
  export import ReferenceLoadBalancerPoolsListPoolReferencesResponse = ReferencesAPI.ReferenceLoadBalancerPoolsListPoolReferencesResponse;
}
