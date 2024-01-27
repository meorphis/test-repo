// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as MitigationProductsAPI from 'cloudflare/resources/radar/attacks/layer7/mitigation-products';

export class MitigationProducts extends APIResource {
  /**
   * Percentage distribution of attacks by mitigation product used.
   */
  list(
    query?: MitigationProductListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MitigationProductListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<MitigationProductListResponse>;
  list(
    query: MitigationProductListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<MitigationProductListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/radar/attacks/layer7/summary/mitigation_product', { query, ...options });
  }

  /**
   * Percentage distribution of attacks by mitigation product used over time.
   */
  listTimeseriesGroups(
    query?: MitigationProductListTimeseriesGroupsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MitigationProductListTimeseriesGroupsResponse>;
  listTimeseriesGroups(
    options?: Core.RequestOptions,
  ): Core.APIPromise<MitigationProductListTimeseriesGroupsResponse>;
  listTimeseriesGroups(
    query: MitigationProductListTimeseriesGroupsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<MitigationProductListTimeseriesGroupsResponse> {
    if (isRequestOptions(query)) {
      return this.listTimeseriesGroups({}, query);
    }
    return this._client.get('/radar/attacks/layer7/timeseries_groups/mitigation_product', {
      query,
      ...options,
    });
  }
}

export interface MitigationProductListResponse {
  result: MitigationProductListResponse.Result;

  success: boolean;
}

export namespace MitigationProductListResponse {
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
      DDOS: string;

      WAF: string;
    }
  }
}

export interface MitigationProductListTimeseriesGroupsResponse {
  result: MitigationProductListTimeseriesGroupsResponse.Result;

  success: boolean;
}

export namespace MitigationProductListTimeseriesGroupsResponse {
  export interface Result {
    meta: unknown;

    serie_0: Result.Serie0;
  }

  export namespace Result {
    export interface Serie0 {
      DDOS: Array<string>;

      timestamps: Array<string>;
    }
  }
}

export interface MitigationProductListParams {
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
   * Filter for http method.
   */
  httpMethod?: Array<
    | 'GET'
    | 'POST'
    | 'DELETE'
    | 'PUT'
    | 'HEAD'
    | 'PURGE'
    | 'OPTIONS'
    | 'PROPFIND'
    | 'MKCOL'
    | 'PATCH'
    | 'ACL'
    | 'BCOPY'
    | 'BDELETE'
    | 'BMOVE'
    | 'BPROPFIND'
    | 'BPROPPATCH'
    | 'CHECKIN'
    | 'CHECKOUT'
    | 'CONNECT'
    | 'COPY'
    | 'LABEL'
    | 'LOCK'
    | 'MERGE'
    | 'MKACTIVITY'
    | 'MKWORKSPACE'
    | 'MOVE'
    | 'NOTIFY'
    | 'ORDERPATCH'
    | 'POLL'
    | 'PROPPATCH'
    | 'REPORT'
    | 'SEARCH'
    | 'SUBSCRIBE'
    | 'TRACE'
    | 'UNCHECKOUT'
    | 'UNLOCK'
    | 'UNSUBSCRIBE'
    | 'UPDATE'
    | 'VERSIONCONTROL'
    | 'BASELINECONTROL'
    | 'XMSENUMATTS'
    | 'RPC_OUT_DATA'
    | 'RPC_IN_DATA'
    | 'JSON'
    | 'COOK'
    | 'TRACK'
  >;

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
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;
}

export interface MitigationProductListTimeseriesGroupsParams {
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
   * Filter for http method.
   */
  httpMethod?: Array<
    | 'GET'
    | 'POST'
    | 'DELETE'
    | 'PUT'
    | 'HEAD'
    | 'PURGE'
    | 'OPTIONS'
    | 'PROPFIND'
    | 'MKCOL'
    | 'PATCH'
    | 'ACL'
    | 'BCOPY'
    | 'BDELETE'
    | 'BMOVE'
    | 'BPROPFIND'
    | 'BPROPPATCH'
    | 'CHECKIN'
    | 'CHECKOUT'
    | 'CONNECT'
    | 'COPY'
    | 'LABEL'
    | 'LOCK'
    | 'MERGE'
    | 'MKACTIVITY'
    | 'MKWORKSPACE'
    | 'MOVE'
    | 'NOTIFY'
    | 'ORDERPATCH'
    | 'POLL'
    | 'PROPPATCH'
    | 'REPORT'
    | 'SEARCH'
    | 'SUBSCRIBE'
    | 'TRACE'
    | 'UNCHECKOUT'
    | 'UNLOCK'
    | 'UNSUBSCRIBE'
    | 'UPDATE'
    | 'VERSIONCONTROL'
    | 'BASELINECONTROL'
    | 'XMSENUMATTS'
    | 'RPC_OUT_DATA'
    | 'RPC_IN_DATA'
    | 'JSON'
    | 'COOK'
    | 'TRACK'
  >;

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
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;

  /**
   * Normalization method applied. Refer to
   * [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization/).
   */
  normalization?: 'PERCENTAGE' | 'MIN0_MAX';
}

export namespace MitigationProducts {
  export import MitigationProductListResponse = MitigationProductsAPI.MitigationProductListResponse;
  export import MitigationProductListTimeseriesGroupsResponse = MitigationProductsAPI.MitigationProductListTimeseriesGroupsResponse;
  export import MitigationProductListParams = MitigationProductsAPI.MitigationProductListParams;
  export import MitigationProductListTimeseriesGroupsParams = MitigationProductsAPI.MitigationProductListTimeseriesGroupsParams;
}
