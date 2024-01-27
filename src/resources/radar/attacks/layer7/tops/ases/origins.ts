// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as OriginsAPI from 'cloudflare/resources/radar/attacks/layer7/tops/ases/origins';

export class Origins extends APIResource {
  /**
   * Get the top origin Autonomous Systems of and by layer 7 attacks. Values are a
   * percentage out of the total layer 7 attacks. The origin Autonomous Systems is
   * determined by the client IP.
   */
  list(query?: OriginListParams, options?: Core.RequestOptions): Core.APIPromise<OriginListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<OriginListResponse>;
  list(
    query: OriginListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<OriginListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/radar/attacks/layer7/top/ases/origin', { query, ...options });
  }
}

export interface OriginListResponse {
  result: OriginListResponse.Result;

  success: boolean;
}

export namespace OriginListResponse {
  export interface Result {
    meta: Result.Meta;

    top_0: Array<Result.Top0>;
  }

  export namespace Result {
    export interface Meta {
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

    export interface Top0 {
      originAsn: string;

      originAsnName: string;

      rank: number;

      value: string;
    }
  }
}

export interface OriginListParams {
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
   * Limit the number of objects in the response.
   */
  limit?: number;

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

export namespace Origins {
  export import OriginListResponse = OriginsAPI.OriginListResponse;
  export import OriginListParams = OriginsAPI.OriginListParams;
}
