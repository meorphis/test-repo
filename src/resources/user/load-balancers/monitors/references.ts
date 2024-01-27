// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ReferencesAPI from 'cloudflare/resources/user/load-balancers/monitors/references';

export class References extends APIResource {
  /**
   * Get the list of resources that reference the provided monitor.
   */
  loadBalancerMonitorsListMonitorReferences(
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ReferenceLoadBalancerMonitorsListMonitorReferencesResponse> {
    return this._client.get(`/user/load_balancers/monitors/${identifier}/references`, options);
  }
}

export interface ReferenceLoadBalancerMonitorsListMonitorReferencesResponse {
  errors?: Array<ReferenceLoadBalancerMonitorsListMonitorReferencesResponse.Error>;

  messages?: Array<ReferenceLoadBalancerMonitorsListMonitorReferencesResponse.Message>;

  /**
   * List of resources that reference a given monitor.
   */
  result?: Array<ReferenceLoadBalancerMonitorsListMonitorReferencesResponse.Result>;

  result_info?: ReferenceLoadBalancerMonitorsListMonitorReferencesResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ReferenceLoadBalancerMonitorsListMonitorReferencesResponse {
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
  export import ReferenceLoadBalancerMonitorsListMonitorReferencesResponse = ReferencesAPI.ReferenceLoadBalancerMonitorsListMonitorReferencesResponse;
}
