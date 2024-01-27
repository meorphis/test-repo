// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as EventsAPI from 'cloudflare/resources/user/load-balancing-analytics/events';

export class Events extends APIResource {
  /**
   * List origin health changes.
   */
  loadBalancerHealthcheckEventsListHealthcheckEvents(
    query?: EventLoadBalancerHealthcheckEventsListHealthcheckEventsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EventLoadBalancerHealthcheckEventsListHealthcheckEventsResponse>;
  loadBalancerHealthcheckEventsListHealthcheckEvents(
    options?: Core.RequestOptions,
  ): Core.APIPromise<EventLoadBalancerHealthcheckEventsListHealthcheckEventsResponse>;
  loadBalancerHealthcheckEventsListHealthcheckEvents(
    query: EventLoadBalancerHealthcheckEventsListHealthcheckEventsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<EventLoadBalancerHealthcheckEventsListHealthcheckEventsResponse> {
    if (isRequestOptions(query)) {
      return this.loadBalancerHealthcheckEventsListHealthcheckEvents({}, query);
    }
    return this._client.get('/user/load_balancing_analytics/events', { query, ...options });
  }
}

export interface EventLoadBalancerHealthcheckEventsListHealthcheckEventsResponse {
  errors?: Array<EventLoadBalancerHealthcheckEventsListHealthcheckEventsResponse.Error>;

  messages?: Array<EventLoadBalancerHealthcheckEventsListHealthcheckEventsResponse.Message>;

  result?: Array<EventLoadBalancerHealthcheckEventsListHealthcheckEventsResponse.Result>;

  result_info?: EventLoadBalancerHealthcheckEventsListHealthcheckEventsResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace EventLoadBalancerHealthcheckEventsListHealthcheckEventsResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    id?: number;

    origins?: Array<unknown>;

    pool?: unknown;

    timestamp?: string;
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

export interface EventLoadBalancerHealthcheckEventsListHealthcheckEventsParams {
  identifier?: string;

  /**
   * If true, filter events where the origin status is healthy. If false, filter
   * events where the origin status is unhealthy.
   */
  origin_healthy?: boolean;

  /**
   * The name for the origin to filter.
   */
  origin_name?: string;

  /**
   * If true, filter events where the pool status is healthy. If false, filter events
   * where the pool status is unhealthy.
   */
  pool_healthy?: boolean;

  /**
   * The name for the pool to filter.
   */
  pool_name?: string;

  /**
   * Start date and time of requesting data period in the ISO8601 format.
   */
  since?: string;

  /**
   * End date and time of requesting data period in the ISO8601 format.
   */
  until?: string;
}

export namespace Events {
  export import EventLoadBalancerHealthcheckEventsListHealthcheckEventsResponse = EventsAPI.EventLoadBalancerHealthcheckEventsListHealthcheckEventsResponse;
  export import EventLoadBalancerHealthcheckEventsListHealthcheckEventsParams = EventsAPI.EventLoadBalancerHealthcheckEventsListHealthcheckEventsParams;
}
