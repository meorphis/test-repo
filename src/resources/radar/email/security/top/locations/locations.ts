// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as LocationsAPI from 'cloudflare/resources/radar/email/security/top/locations/locations';
import * as ArcAPI from 'cloudflare/resources/radar/email/security/top/locations/arc';
import * as ByDkimAPI from 'cloudflare/resources/radar/email/security/top/locations/by-dkim';
import * as ByDmarcAPI from 'cloudflare/resources/radar/email/security/top/locations/by-dmarc';
import * as ByMaliciousAPI from 'cloudflare/resources/radar/email/security/top/locations/by-malicious';
import * as BySpamAPI from 'cloudflare/resources/radar/email/security/top/locations/by-spam';
import * as BySpfAPI from 'cloudflare/resources/radar/email/security/top/locations/by-spf';

export class Locations extends APIResource {
  arc: ArcAPI.Arc = new ArcAPI.Arc(this._client);
  byDkim: ByDkimAPI.ByDkim = new ByDkimAPI.ByDkim(this._client);
  byDmarc: ByDmarcAPI.ByDmarc = new ByDmarcAPI.ByDmarc(this._client);
  byMalicious: ByMaliciousAPI.ByMalicious = new ByMaliciousAPI.ByMalicious(this._client);
  bySpam: BySpamAPI.BySpam = new BySpamAPI.BySpam(this._client);
  bySpf: BySpfAPI.BySpf = new BySpfAPI.BySpf(this._client);

  /**
   * Get the top locations by email messages. Values are a percentage out of the
   * total emails.
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
    return this._client.get('/radar/email/security/top/locations', { query, ...options });
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
   * Filter for arc (Authenticated Received Chain).
   */
  arc?: Array<'PASS' | 'NONE' | 'FAIL'>;

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
   * Filter for dkim.
   */
  dkim?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Filter for dmarc.
   */
  dmarc?: Array<'PASS' | 'NONE' | 'FAIL'>;

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

  /**
   * Filter for spf.
   */
  spf?: Array<'PASS' | 'NONE' | 'FAIL'>;
}

export namespace Locations {
  export import LocationListResponse = LocationsAPI.LocationListResponse;
  export import LocationListParams = LocationsAPI.LocationListParams;
  export import Arc = ArcAPI.Arc;
  export import ArcRetrieveResponse = ArcAPI.ArcRetrieveResponse;
  export import ArcRetrieveParams = ArcAPI.ArcRetrieveParams;
  export import ByDkim = ByDkimAPI.ByDkim;
  export import ByDkimListResponse = ByDkimAPI.ByDkimListResponse;
  export import ByDkimListParams = ByDkimAPI.ByDkimListParams;
  export import ByDmarc = ByDmarcAPI.ByDmarc;
  export import ByDmarcListResponse = ByDmarcAPI.ByDmarcListResponse;
  export import ByDmarcListParams = ByDmarcAPI.ByDmarcListParams;
  export import ByMalicious = ByMaliciousAPI.ByMalicious;
  export import ByMaliciousListResponse = ByMaliciousAPI.ByMaliciousListResponse;
  export import ByMaliciousListParams = ByMaliciousAPI.ByMaliciousListParams;
  export import BySpam = BySpamAPI.BySpam;
  export import BySpamListResponse = BySpamAPI.BySpamListResponse;
  export import BySpamListParams = BySpamAPI.BySpamListParams;
  export import BySpf = BySpfAPI.BySpf;
  export import BySpfListResponse = BySpfAPI.BySpfListResponse;
  export import BySpfListParams = BySpfAPI.BySpfListParams;
}
