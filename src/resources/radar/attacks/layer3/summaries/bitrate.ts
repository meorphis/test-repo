// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as BitrateAPI from 'cloudflare/resources/radar/attacks/layer3/summaries/bitrate';

export class Bitrate extends APIResource {
  /**
   * Percentage distribution of attacks by bitrate.
   */
  retrieve(
    query?: BitrateRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BitrateRetrieveResponse>;
  retrieve(options?: Core.RequestOptions): Core.APIPromise<BitrateRetrieveResponse>;
  retrieve(
    query: BitrateRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BitrateRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve({}, query);
    }
    return this._client.get('/radar/attacks/layer3/summary/bitrate', { query, ...options });
  }
}

export interface BitrateRetrieveResponse {
  result: BitrateRetrieveResponse.Result;

  success: boolean;
}

export namespace BitrateRetrieveResponse {
  export interface Result {
    meta: Result.Meta;

    summary_0: Result.Summary0;
  }

  export namespace Result {
    export interface Meta {
      dateRange: Array<Meta.DateRange>;

      lastUpdated: string;

      normalization: string;

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

    export interface Summary0 {
      _1_GBPS_TO_10_GBPS: string;

      _10_GBPS_TO_100_GBPS: string;

      _500_MBPS_TO_1_GBPS: string;

      OVER_100_GBPS: string;

      UNDER_500_MBPS: string;
    }
  }
}

export interface BitrateRetrieveParams {
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
   * Array of L3/4 attack types.
   */
  protocol?: Array<'UDP' | 'TCP' | 'ICMP' | 'GRE'>;
}

export namespace Bitrate {
  export import BitrateRetrieveResponse = BitrateAPI.BitrateRetrieveResponse;
  export import BitrateRetrieveParams = BitrateAPI.BitrateRetrieveParams;
}
