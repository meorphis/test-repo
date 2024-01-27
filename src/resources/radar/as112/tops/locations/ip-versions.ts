// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as IPVersionsAPI from 'cloudflare/resources/radar/as112/tops/locations/ip-versions';

export class IPVersions extends APIResource {
  /**
   * Get the top locations by DNS queries IP version to AS112.
   */
  retrieve(
    ipVersion: 'IPv4' | 'IPv6',
    query?: IPVersionRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IPVersionRetrieveResponse>;
  retrieve(
    ipVersion: 'IPv4' | 'IPv6',
    options?: Core.RequestOptions,
  ): Core.APIPromise<IPVersionRetrieveResponse>;
  retrieve(
    ipVersion: 'IPv4' | 'IPv6',
    query: IPVersionRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<IPVersionRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(ipVersion, {}, query);
    }
    return this._client.get(`/radar/as112/top/locations/ip_version/${ipVersion}`, { query, ...options });
  }
}

export interface IPVersionRetrieveResponse {
  result: IPVersionRetrieveResponse.Result;

  success: boolean;
}

export namespace IPVersionRetrieveResponse {
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
      clientCountryAlpha2: string;

      clientCountryName: string;

      value: string;
    }
  }
}

export interface IPVersionRetrieveParams {
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

export namespace IPVersions {
  export import IPVersionRetrieveResponse = IPVersionsAPI.IPVersionRetrieveResponse;
  export import IPVersionRetrieveParams = IPVersionsAPI.IPVersionRetrieveParams;
}
