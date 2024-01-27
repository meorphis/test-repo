// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as LocationsAPI from 'cloudflare/resources/radar/as112/tops/locations/locations';
import * as DnssecsAPI from 'cloudflare/resources/radar/as112/tops/locations/dnssecs';
import * as EdnsAPI from 'cloudflare/resources/radar/as112/tops/locations/edns';
import * as IPVersionsAPI from 'cloudflare/resources/radar/as112/tops/locations/ip-versions';

export class Locations extends APIResource {
  dnssecs: DnssecsAPI.Dnssecs = new DnssecsAPI.Dnssecs(this._client);
  edns: EdnsAPI.Edns = new EdnsAPI.Edns(this._client);
  ipVersions: IPVersionsAPI.IPVersions = new IPVersionsAPI.IPVersions(this._client);

  /**
   * Get the top locations by AS112 DNS queries. Values are a percentage out of the
   * total queries.
   */
  list(query?: LocationListParams, options?: Core.RequestOptions): Core.APIPromise<LocationListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<LocationListResponse>;
  list(
    query: LocationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LocationListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/radar/as112/top/locations', { query, ...options });
  }
}

export interface LocationListResponse {
  result: LocationListResponse.Result;

  success: boolean;
}

export namespace LocationListResponse {
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

export interface LocationListParams {
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

export namespace Locations {
  export import LocationListResponse = LocationsAPI.LocationListResponse;
  export import LocationListParams = LocationsAPI.LocationListParams;
  export import Dnssecs = DnssecsAPI.Dnssecs;
  export import DnssecRetrieveResponse = DnssecsAPI.DnssecRetrieveResponse;
  export import DnssecRetrieveParams = DnssecsAPI.DnssecRetrieveParams;
  export import Edns = EdnsAPI.Edns;
  export import EdnRetrieveResponse = EdnsAPI.EdnRetrieveResponse;
  export import EdnRetrieveParams = EdnsAPI.EdnRetrieveParams;
  export import IPVersions = IPVersionsAPI.IPVersions;
  export import IPVersionRetrieveResponse = IPVersionsAPI.IPVersionRetrieveResponse;
  export import IPVersionRetrieveParams = IPVersionsAPI.IPVersionRetrieveParams;
}
