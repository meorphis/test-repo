// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as AvailabilitiesAPI from 'cloudflare/resources/accounts/custom-ns/availabilities';

export class Availabilities extends APIResource {
  /**
   * Get Eligible Zones for Account Custom Nameservers
   */
  accountLevelCustomNameserversGetEligibleZonesForAccountCustomNameservers(
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AvailabilityAccountLevelCustomNameserversGetEligibleZonesForAccountCustomNameserversResponse> {
    return this._client.get(`/accounts/${identifier}/custom_ns/availability`, options);
  }
}

export interface AvailabilityAccountLevelCustomNameserversGetEligibleZonesForAccountCustomNameserversResponse {
  errors?: Array<AvailabilityAccountLevelCustomNameserversGetEligibleZonesForAccountCustomNameserversResponse.Error>;

  messages?: Array<AvailabilityAccountLevelCustomNameserversGetEligibleZonesForAccountCustomNameserversResponse.Message>;

  result?: Array<string>;

  result_info?: AvailabilityAccountLevelCustomNameserversGetEligibleZonesForAccountCustomNameserversResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace AvailabilityAccountLevelCustomNameserversGetEligibleZonesForAccountCustomNameserversResponse {
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

export namespace Availabilities {
  export import AvailabilityAccountLevelCustomNameserversGetEligibleZonesForAccountCustomNameserversResponse = AvailabilitiesAPI.AvailabilityAccountLevelCustomNameserversGetEligibleZonesForAccountCustomNameserversResponse;
}
