// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as AvailablePlansAPI from 'cloudflare/resources/zones/available-plans';

export class AvailablePlans extends APIResource {
  /**
   * Details of the available plan that the zone can subscribe to.
   */
  retrieve(
    zoneIdentifier: string,
    planIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AvailablePlanRetrieveResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/available_plans/${planIdentifier}`, options);
  }

  /**
   * Lists available plans the zone can subscribe to.
   */
  list(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<AvailablePlanListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/available_plans`, options);
  }
}

export interface AvailablePlanRetrieveResponse {
  errors?: Array<AvailablePlanRetrieveResponse.Error>;

  messages?: Array<AvailablePlanRetrieveResponse.Message>;

  result?: AvailablePlanRetrieveResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace AvailablePlanRetrieveResponse {
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
     * Identifier
     */
    id?: string;

    /**
     * Indicates whether you can subscribe to this plan.
     */
    can_subscribe?: boolean;

    /**
     * The monetary unit in which pricing information is displayed.
     */
    currency?: string;

    /**
     * Indicates whether this plan is managed externally.
     */
    externally_managed?: boolean;

    /**
     * The frequency at which you will be billed for this plan.
     */
    frequency?: 'weekly' | 'monthly' | 'quarterly' | 'yearly';

    /**
     * Indicates whether you are currently subscribed to this plan.
     */
    is_subscribed?: boolean;

    /**
     * Indicates whether this plan has a legacy discount applied.
     */
    legacy_discount?: boolean;

    /**
     * The legacy identifier for this rate plan, if any.
     */
    legacy_id?: string;

    /**
     * The plan name.
     */
    name?: string;

    /**
     * The amount you will be billed for this plan.
     */
    price?: number;
  }
}

export interface AvailablePlanListResponse {
  errors?: Array<AvailablePlanListResponse.Error>;

  messages?: Array<AvailablePlanListResponse.Message>;

  result?: Array<AvailablePlanListResponse.Result>;

  result_info?: AvailablePlanListResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace AvailablePlanListResponse {
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
     * Identifier
     */
    id?: string;

    /**
     * Indicates whether you can subscribe to this plan.
     */
    can_subscribe?: boolean;

    /**
     * The monetary unit in which pricing information is displayed.
     */
    currency?: string;

    /**
     * Indicates whether this plan is managed externally.
     */
    externally_managed?: boolean;

    /**
     * The frequency at which you will be billed for this plan.
     */
    frequency?: 'weekly' | 'monthly' | 'quarterly' | 'yearly';

    /**
     * Indicates whether you are currently subscribed to this plan.
     */
    is_subscribed?: boolean;

    /**
     * Indicates whether this plan has a legacy discount applied.
     */
    legacy_discount?: boolean;

    /**
     * The legacy identifier for this rate plan, if any.
     */
    legacy_id?: string;

    /**
     * The plan name.
     */
    name?: string;

    /**
     * The amount you will be billed for this plan.
     */
    price?: number;
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

export namespace AvailablePlans {
  export import AvailablePlanRetrieveResponse = AvailablePlansAPI.AvailablePlanRetrieveResponse;
  export import AvailablePlanListResponse = AvailablePlansAPI.AvailablePlanListResponse;
}
