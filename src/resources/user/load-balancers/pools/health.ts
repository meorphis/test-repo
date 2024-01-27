// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as HealthAPI from 'cloudflare/resources/user/load-balancers/pools/health';

export class Health extends APIResource {
  /**
   * Fetch the latest pool health status for a single pool.
   */
  loadBalancerPoolsPoolHealthDetails(
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HealthLoadBalancerPoolsPoolHealthDetailsResponse> {
    return this._client.get(`/user/load_balancers/pools/${identifier}/health`, options);
  }
}

export interface HealthLoadBalancerPoolsPoolHealthDetailsResponse {
  errors?: Array<HealthLoadBalancerPoolsPoolHealthDetailsResponse.Error>;

  messages?: Array<HealthLoadBalancerPoolsPoolHealthDetailsResponse.Message>;

  /**
   * A list of regions from which to run health checks. Null means every Cloudflare
   * data center.
   */
  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace HealthLoadBalancerPoolsPoolHealthDetailsResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export namespace Health {
  export import HealthLoadBalancerPoolsPoolHealthDetailsResponse = HealthAPI.HealthLoadBalancerPoolsPoolHealthDetailsResponse;
}
