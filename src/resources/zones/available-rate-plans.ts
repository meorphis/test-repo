// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as AvailableRatePlansAPI from 'cloudflare/resources/zones/available-rate-plans';

export class AvailableRatePlans extends APIResource {
  /**
   * Lists all rate plans the zone can subscribe to.
   */
  zoneRatePlanListAvailableRatePlans(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AvailableRatePlanZoneRatePlanListAvailableRatePlansResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/available_rate_plans`, options);
  }
}

export interface AvailableRatePlanZoneRatePlanListAvailableRatePlansResponse {
  errors?: Array<AvailableRatePlanZoneRatePlanListAvailableRatePlansResponse.Error>;

  messages?: Array<AvailableRatePlanZoneRatePlanListAvailableRatePlansResponse.Message>;

  result?: Array<AvailableRatePlanZoneRatePlanListAvailableRatePlansResponse.Result>;

  result_info?: AvailableRatePlanZoneRatePlanListAvailableRatePlansResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace AvailableRatePlanZoneRatePlanListAvailableRatePlansResponse {
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
     * Plan identifier tag.
     */
    id?: string;

    /**
     * Array of available components values for the plan.
     */
    components?: Array<Result.Component>;

    /**
     * The monetary unit in which pricing information is displayed.
     */
    currency?: string;

    /**
     * The duration of the plan subscription.
     */
    duration?: number;

    /**
     * The frequency at which you will be billed for this plan.
     */
    frequency?: 'weekly' | 'monthly' | 'quarterly' | 'yearly';

    /**
     * The plan name.
     */
    name?: string;
  }

  export namespace Result {
    export interface Component {
      /**
       * The default amount allocated.
       */
      default?: number;

      /**
       * The unique component.
       */
      name?: 'zones' | 'page_rules' | 'dedicated_certificates' | 'dedicated_certificates_custom';

      /**
       * The unit price of the addon.
       */
      unit_price?: number;
    }
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

export namespace AvailableRatePlans {
  export import AvailableRatePlanZoneRatePlanListAvailableRatePlansResponse = AvailableRatePlansAPI.AvailableRatePlanZoneRatePlanListAvailableRatePlansResponse;
}
