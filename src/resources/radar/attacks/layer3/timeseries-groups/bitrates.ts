// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as BitratesAPI from 'cloudflare/resources/radar/attacks/layer3/timeseries-groups/bitrates';

export class Bitrates extends APIResource {
  /**
   * Percentage distribution of attacks by bitrate over time.
   */
  list(query?: BitrateListParams, options?: Core.RequestOptions): Core.APIPromise<BitrateListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<BitrateListResponse>;
  list(
    query: BitrateListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BitrateListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/radar/attacks/layer3/timeseries_groups/bitrate', { query, ...options });
  }
}

export interface BitrateListResponse {
  result: BitrateListResponse.Result;

  success: boolean;
}

export namespace BitrateListResponse {
  export interface Result {
    meta: unknown;

    serie_0: Result.Serie0;
  }

  export namespace Result {
    export interface Serie0 {
      _1_GBPS_TO_10_GBPS: Array<string>;

      _10_GBPS_TO_100_GBPS: Array<string>;

      _500_MBPS_TO_1_GBPS: Array<string>;

      OVER_100_GBPS: Array<string>;

      timestamps: Array<string>;

      UNDER_500_MBPS: Array<string>;
    }
  }
}

export interface BitrateListParams {
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

export namespace Bitrates {
  export import BitrateListResponse = BitratesAPI.BitrateListResponse;
  export import BitrateListParams = BitratesAPI.BitrateListParams;
}
