// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as HealthAPI from 'cloudflare/resources/accounts/load-balancers/pools/health';

export class Health extends APIResource {
  /**
   * Fetch the latest pool health status for a single pool.
   */
  accountLoadBalancerPoolsPoolHealthDetails(
    accountIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HealthAccountLoadBalancerPoolsPoolHealthDetailsResponse> {
    return this._client.get(
      `/accounts/${accountIdentifier}/load_balancers/pools/${identifier}/health`,
      options,
    );
  }
}

export interface HealthAccountLoadBalancerPoolsPoolHealthDetailsResponse {
  errors?: Array<HealthAccountLoadBalancerPoolsPoolHealthDetailsResponse.Error>;

  messages?: Array<HealthAccountLoadBalancerPoolsPoolHealthDetailsResponse.Message>;

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

export namespace HealthAccountLoadBalancerPoolsPoolHealthDetailsResponse {
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
  export import HealthAccountLoadBalancerPoolsPoolHealthDetailsResponse = HealthAPI.HealthAccountLoadBalancerPoolsPoolHealthDetailsResponse;
}
