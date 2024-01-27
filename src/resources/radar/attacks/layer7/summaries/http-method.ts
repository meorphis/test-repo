// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as HTTPMethodAPI from 'cloudflare/resources/radar/attacks/layer7/summaries/http-method';

export class HTTPMethod extends APIResource {
  /**
   * Percentage distribution of attacks by http method used.
   */
  list(query?: HTTPMethodListParams, options?: Core.RequestOptions): Core.APIPromise<HTTPMethodListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<HTTPMethodListResponse>;
  list(
    query: HTTPMethodListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<HTTPMethodListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/radar/attacks/layer7/summary/http_method', { query, ...options });
  }
}

export interface HTTPMethodListResponse {
  result: HTTPMethodListResponse.Result;

  success: boolean;
}

export namespace HTTPMethodListResponse {
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
      GET: string;

      POST: string;
    }
  }
}

export interface HTTPMethodListParams {
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
   * Filter for http version.
   */
  httpVersion?: Array<'HTTPv1' | 'HTTPv2' | 'HTTPv3'>;

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
   * Array of L7 mitigation products.
   */
  mitigationProduct?: Array<
    | 'DDOS'
    | 'WAF'
    | 'BOT_MANAGEMENT'
    | 'ACCESS_RULES'
    | 'IP_REPUTATION'
    | 'API_SHIELD'
    | 'DATA_LOSS_PREVENTION'
  >;

  /**
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;
}

export namespace HTTPMethod {
  export import HTTPMethodListResponse = HTTPMethodAPI.HTTPMethodListResponse;
  export import HTTPMethodListParams = HTTPMethodAPI.HTTPMethodListParams;
}
