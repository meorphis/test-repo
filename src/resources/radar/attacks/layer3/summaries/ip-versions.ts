// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as IPVersionsAPI from 'cloudflare/resources/radar/attacks/layer3/summaries/ip-versions';

export class IPVersions extends APIResource {
  /**
   * Percentage distribution of attacks by ip version used.
   */
  list(query?: IPVersionListParams, options?: Core.RequestOptions): Core.APIPromise<IPVersionListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<IPVersionListResponse>;
  list(
    query: IPVersionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<IPVersionListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/radar/attacks/layer3/summary/ip_version', { query, ...options });
  }
}

export interface IPVersionListResponse {
  result: IPVersionListResponse.Result;

  success: boolean;
}

export namespace IPVersionListResponse {
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
      IPv4: string;

      IPv6: string;
    }
  }
}

export interface IPVersionListParams {
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

export namespace IPVersions {
  export import IPVersionListResponse = IPVersionsAPI.IPVersionListResponse;
  export import IPVersionListParams = IPVersionsAPI.IPVersionListParams;
}
