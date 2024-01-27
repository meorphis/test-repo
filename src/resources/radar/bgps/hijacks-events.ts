// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as HijacksEventsAPI from 'cloudflare/resources/radar/bgps/hijacks-events';

export class HijacksEvents extends APIResource {
  /**
   * Get the BGP hijack events. (Beta)
   */
  list(
    query?: HijacksEventListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HijacksEventListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<HijacksEventListResponse>;
  list(
    query: HijacksEventListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<HijacksEventListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/radar/bgp/hijacks/events', { query, ...options });
  }
}

export interface HijacksEventListResponse {
  result: HijacksEventListResponse.Result;

  result_info: HijacksEventListResponse.ResultInfo;

  success: boolean;
}

export namespace HijacksEventListResponse {
  export interface Result {
    asn_info: Array<Result.ASNInfo>;

    events: Array<Result.Event>;

    total_monitors: number;
  }

  export namespace Result {
    export interface ASNInfo {
      asn: number;

      country_code: string;

      org_name: string;
    }

    export interface Event {
      id: number;

      confidence_score: number;

      duration: number;

      event_type: number;

      hijack_msgs_count: number;

      hijacker_asn: number;

      hijacker_country: string;

      is_stale: boolean;

      max_hijack_ts: string;

      max_msg_ts: string;

      min_hijack_ts: string;

      on_going_count: number;

      peer_asns: Array<number>;

      peer_ip_count: number;

      prefixes: Array<string>;

      tags: Array<Event.Tag>;

      victim_asns: Array<number>;

      victim_countries: Array<string>;
    }

    export namespace Event {
      export interface Tag {
        name: string;

        score: number;
      }
    }
  }

  export interface ResultInfo {
    count: number;

    page: number;

    per_page: number;

    total_count: number;
  }
}

export interface HijacksEventListParams {
  /**
   * End of the date range (inclusive).
   */
  dateEnd?: string;

  /**
   * Shorthand date ranges for the last X days - use when you don't need specific
   * start and end dates.
   */
  dateRange?:
    | '1d'
    | '2d'
    | '7d'
    | '14d'
    | '28d'
    | '12w'
    | '24w'
    | '52w'
    | '1dControl'
    | '2dControl'
    | '7dControl'
    | '14dControl'
    | '28dControl'
    | '12wControl'
    | '24wControl';

  /**
   * Start of the date range (inclusive).
   */
  dateStart?: string;

  /**
   * The unique identifier of a event
   */
  eventId?: number;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * The potential hijacker AS of a BGP hijack event
   */
  hijackerAsn?: number;

  /**
   * The potential hijacker or victim AS of a BGP hijack event
   */
  involvedAsn?: number;

  /**
   * The country code of the potential hijacker or victim AS of a BGP hijack event
   */
  involvedCountry?: string;

  /**
   * The maximum confidence score to filter events (1-4 low, 5-7 mid, 8+ high)
   */
  maxConfidence?: number;

  /**
   * The minimum confidence score to filter events (1-4 low, 5-7 mid, 8+ high)
   */
  minConfidence?: number;

  /**
   * Current page number, starting from 1
   */
  page?: number;

  /**
   * Number of entries per page
   */
  per_page?: number;

  /**
   * The prefix hijacked during a BGP hijack event
   */
  prefix?: string;

  /**
   * Sort events by field
   */
  sortBy?: 'ID' | 'TIME' | 'CONFIDENCE';

  /**
   * Sort order
   */
  sortOrder?: 'ASC' | 'DESC';

  /**
   * The potential victim AS of a BGP hijack event
   */
  victimAsn?: number;
}

export namespace HijacksEvents {
  export import HijacksEventListResponse = HijacksEventsAPI.HijacksEventListResponse;
  export import HijacksEventListParams = HijacksEventsAPI.HijacksEventListParams;
}
