// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as ByDeviceTypeAPI from 'cloudflare/resources/radar/http/timeseries-groups/by-device-type';

export class ByDeviceType extends APIResource {
  /**
   * Get a time series of the percentage distribution of traffic per device type.
   */
  list(
    query?: ByDeviceTypeListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ByDeviceTypeListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<ByDeviceTypeListResponse>;
  list(
    query: ByDeviceTypeListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ByDeviceTypeListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/radar/http/timeseries_groups/device_type', { query, ...options });
  }
}

export interface ByDeviceTypeListResponse {
  result: ByDeviceTypeListResponse.Result;

  success: boolean;
}

export namespace ByDeviceTypeListResponse {
  export interface Result {
    meta: unknown;

    serie_0: Result.Serie0;
  }

  export namespace Result {
    export interface Serie0 {
      desktop: Array<string>;

      mobile: Array<string>;

      other: Array<string>;

      timestamps: Array<string>;
    }
  }
}

export interface ByDeviceTypeListParams {
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
   * Filter for bot class. Refer to
   * [Bot classes](https://developers.cloudflare.com/radar/concepts/bot-classes/).
   */
  botClass?: Array<'LIKELY_AUTOMATED' | 'LIKELY_HUMAN'>;

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
   * Filter for http protocol.
   */
  httpProtocol?: Array<'HTTP' | 'HTTPS'>;

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
   * Filter for os name.
   */
  os?: Array<'WINDOWS' | 'MACOSX' | 'IOS' | 'ANDROID' | 'CHROMEOS' | 'LINUX' | 'SMART_TV'>;

  /**
   * Filter for tls version.
   */
  tlsVersion?: Array<'TLSv1_0' | 'TLSv1_1' | 'TLSv1_2' | 'TLSv1_3' | 'TLSvQUIC'>;
}

export namespace ByDeviceType {
  export import ByDeviceTypeListResponse = ByDeviceTypeAPI.ByDeviceTypeListResponse;
  export import ByDeviceTypeListParams = ByDeviceTypeAPI.ByDeviceTypeListParams;
}
