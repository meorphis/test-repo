// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as TimeseriesGroupsAPI from 'cloudflare/resources/radar/attacks/layer7/timeseries-groups';

export class TimeseriesGroups extends APIResource {
  /**
   * Get a time series of the percentual distribution of mitigation techniques, over
   * time.
   */
  list(
    query?: TimeseriesGroupListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupListResponse>;
  list(
    query: TimeseriesGroupListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/radar/attacks/layer7/timeseries_groups', { query, ...options });
  }
}

export interface TimeseriesGroupListResponse {
  result: TimeseriesGroupListResponse.Result;

  success: boolean;
}

export namespace TimeseriesGroupListResponse {
  export interface Result {
    meta: Result.Meta;

    serie_0: Result.Serie0;
  }

  export namespace Result {
    export interface Meta {
      aggInterval: string;

      dateRange: Array<Meta.DateRange>;

      lastUpdated: string;

      confidenceInfo?: Meta.ConfidenceInfo;
    }

    export namespace Meta {
      export interface DateRange {
        /**
         * Adjusted end of date range.
         */
        endTime: string;

        /**
         * Adjusted start of date range.
         */
        startTime: string;
      }

      export interface ConfidenceInfo {
        annotations?: Array<ConfidenceInfo.Annotation>;

        level?: number;
      }

      export namespace ConfidenceInfo {
        export interface Annotation {
          dataSource: string;

          description: string;

          eventType: string;

          isInstantaneous: unknown;

          endTime?: string;

          linkedUrl?: string;

          startTime?: string;
        }
      }
    }

    export interface Serie0 {
      ACCESS_RULES: Array<string>;

      API_SHIELD: Array<string>;

      BOT_MANAGEMENT: Array<string>;

      DATA_LOSS_PREVENTION: Array<string>;

      DDOS: Array<string>;

      IP_REPUTATION: Array<string>;

      timestamps: Array<string>;

      WAF: Array<string>;
    }
  }
}

export interface TimeseriesGroupListParams {
  /**
   * Aggregation interval results should be returned in (for example, in 15 minutes
   * or 1 hour intervals). Refer to
   * [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).
   */
  aggInterval?: '15m' | '1h' | '1d' | '1w';

  /**
   * Array of comma separated list of ASNs, start with `-` to exclude from results.
   * For example, `-174, 3356` excludes results from AS174, but includes results from
   * AS3356.
   */
  asn?: Array<string>;

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
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

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
}

export namespace TimeseriesGroups {
  export import TimeseriesGroupListResponse = TimeseriesGroupsAPI.TimeseriesGroupListResponse;
  export import TimeseriesGroupListParams = TimeseriesGroupsAPI.TimeseriesGroupListParams;
}
