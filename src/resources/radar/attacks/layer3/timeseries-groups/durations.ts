// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as DurationsAPI from 'cloudflare/resources/radar/attacks/layer3/timeseries-groups/durations';

export class Durations extends APIResource {
  /**
   * Percentage distribution of attacks by duration over time.
   */
  list(query?: DurationListParams, options?: Core.RequestOptions): Core.APIPromise<DurationListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<DurationListResponse>;
  list(
    query: DurationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DurationListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/radar/attacks/layer3/timeseries_groups/duration', { query, ...options });
  }
}

export interface DurationListResponse {
  result: DurationListResponse.Result;

  success: boolean;
}

export namespace DurationListResponse {
  export interface Result {
    meta: unknown;

    serie_0: Result.Serie0;
  }

  export namespace Result {
    export interface Serie0 {
      _1_HOUR_TO_3_HOURS: Array<string>;

      _10_MINS_TO_20_MINS: Array<string>;

      _20_MINS_TO_40_MINS: Array<string>;

      _40_MINS_TO_1_HOUR: Array<string>;

      OVER_3_HOURS: Array<string>;

      timestamps: Array<string>;

      UNDER_10_MINS: Array<string>;
    }
  }
}

export interface DurationListParams {
  /**
   * Aggregation interval results should be returned in (for example, in 15 minutes
   * or 1 hour intervals). Refer to
   * [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).
   */
  aggInterval?: '15m' | '1h' | '1d' | '1w';

  /**
   * End of the date range (inclusive).
   */
  dateEnd?: Array<string>;

  /**
   * For example, use `7d` and `7dControl` to compare this week with the previous
   * week. Use this parameter or set specific start and end dates (`dateStart` and
   * `dateEnd` parameters).
   */
  dateRange?: Array<
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
    | '24wControl'
  >;

  /**
   * Array of datetimes to filter the start of a series.
   */
  dateStart?: Array<string>;

  /**
   * Together with the `location` parameter, will apply the filter to origin or
   * target location.
   */
  direction?: 'ORIGIN' | 'TARGET';

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filter for ip version.
   */
  ipVersion?: Array<'IPv4' | 'IPv6'>;

  /**
   * Array of comma separated list of locations (alpha-2 country codes). Start with
   * `-` to exclude from results. For example, `-US,PT` excludes results from the US,
   * but includes results from PT.
   */
  location?: Array<string>;

  /**
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;

  /**
   * Normalization method applied. Refer to
   * [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization/).
   */
  normalization?: 'PERCENTAGE' | 'MIN0_MAX';

  /**
   * Array of L3/4 attack types.
   */
  protocol?: Array<'UDP' | 'TCP' | 'ICMP' | 'GRE'>;
}

export namespace Durations {
  export import DurationListResponse = DurationsAPI.DurationListResponse;
  export import DurationListParams = DurationsAPI.DurationListParams;
}
