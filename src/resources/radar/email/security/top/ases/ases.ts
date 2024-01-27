// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as AsesAPI from 'cloudflare/resources/radar/email/security/top/ases/ases';
import * as ArcAPI from 'cloudflare/resources/radar/email/security/top/ases/arc';
import * as DkimAPI from 'cloudflare/resources/radar/email/security/top/ases/dkim';
import * as DmarcAPI from 'cloudflare/resources/radar/email/security/top/ases/dmarc';
import * as MaliciousAPI from 'cloudflare/resources/radar/email/security/top/ases/malicious';
import * as SpamAPI from 'cloudflare/resources/radar/email/security/top/ases/spam';
import * as SpfAPI from 'cloudflare/resources/radar/email/security/top/ases/spf';

export class Ases extends APIResource {
  arc: ArcAPI.Arc = new ArcAPI.Arc(this._client);
  dkim: DkimAPI.Dkim = new DkimAPI.Dkim(this._client);
  dmarc: DmarcAPI.Dmarc = new DmarcAPI.Dmarc(this._client);
  malicious: MaliciousAPI.Malicious = new MaliciousAPI.Malicious(this._client);
  spam: SpamAPI.Spam = new SpamAPI.Spam(this._client);
  spf: SpfAPI.Spf = new SpfAPI.Spf(this._client);

  /**
   * Get the top autonomous systems (AS) by email messages. Values are a percentage
   * out of the total emails.
   */
  list(query?: AseListParams, options?: Core.RequestOptions): Core.APIPromise<AseListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<AseListResponse>;
  list(
    query: AseListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AseListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/radar/email/security/top/ases', { query, ...options });
  }
}

export interface AseListResponse {
  result: AseListResponse.Result;

  success: boolean;
}

export namespace AseListResponse {
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
      clientASN: number;

      clientASName: string;

      value: string;
    }
  }
}

export interface AseListParams {
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

export namespace Ases {
  export import AseListResponse = AsesAPI.AseListResponse;
  export import AseListParams = AsesAPI.AseListParams;
  export import Arc = ArcAPI.Arc;
  export import ArcRetrieveResponse = ArcAPI.ArcRetrieveResponse;
  export import ArcRetrieveParams = ArcAPI.ArcRetrieveParams;
  export import Dkim = DkimAPI.Dkim;
  export import DkimRetrieveResponse = DkimAPI.DkimRetrieveResponse;
  export import DkimRetrieveParams = DkimAPI.DkimRetrieveParams;
  export import Dmarc = DmarcAPI.Dmarc;
  export import DmarcRetrieveResponse = DmarcAPI.DmarcRetrieveResponse;
  export import DmarcRetrieveParams = DmarcAPI.DmarcRetrieveParams;
  export import Malicious = MaliciousAPI.Malicious;
  export import MaliciousRetrieveResponse = MaliciousAPI.MaliciousRetrieveResponse;
  export import MaliciousRetrieveParams = MaliciousAPI.MaliciousRetrieveParams;
  export import Spam = SpamAPI.Spam;
  export import SpamRetrieveResponse = SpamAPI.SpamRetrieveResponse;
  export import SpamRetrieveParams = SpamAPI.SpamRetrieveParams;
  export import Spf = SpfAPI.Spf;
  export import SpfRetrieveResponse = SpfAPI.SpfRetrieveResponse;
  export import SpfRetrieveParams = SpfAPI.SpfRetrieveParams;
}
