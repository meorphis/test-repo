// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as HTTPMethodsAPI from 'cloudflare/resources/radar/attacks/layer7/http-methods';

export class HTTPMethods extends APIResource {
  /**
   * Percentage distribution of attacks by http method used over time.
   */
  listTimeseriesGroups(
    query?: HTTPMethodListTimeseriesGroupsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HTTPMethodListTimeseriesGroupsResponse>;
  listTimeseriesGroups(
    options?: Core.RequestOptions,
  ): Core.APIPromise<HTTPMethodListTimeseriesGroupsResponse>;
  listTimeseriesGroups(
    query: HTTPMethodListTimeseriesGroupsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<HTTPMethodListTimeseriesGroupsResponse> {
    if (isRequestOptions(query)) {
      return this.listTimeseriesGroups({}, query);
    }
    return this._client.get('/radar/attacks/layer7/timeseries_groups/http_method', { query, ...options });
  }
}

export interface HTTPMethodListTimeseriesGroupsResponse {
  result: HTTPMethodListTimeseriesGroupsResponse.Result;

  success: boolean;
}

export namespace HTTPMethodListTimeseriesGroupsResponse {
  export interface Result {
    meta: unknown;

    serie_0: Result.Serie0;
  }

  export namespace Result {
    export interface Serie0 {
      GET: Array<string>;

      timestamps: Array<string>;
    }
  }
}

export interface HTTPMethodListTimeseriesGroupsParams {
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

  /**
   * Normalization method applied. Refer to
   * [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization/).
   */
  normalization?: 'PERCENTAGE' | 'MIN0_MAX';
}

export namespace HTTPMethods {
  export import HTTPMethodListTimeseriesGroupsResponse = HTTPMethodsAPI.HTTPMethodListTimeseriesGroupsResponse;
  export import HTTPMethodListTimeseriesGroupsParams = HTTPMethodsAPI.HTTPMethodListTimeseriesGroupsParams;
}
