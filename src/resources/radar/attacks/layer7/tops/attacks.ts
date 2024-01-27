// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as AttacksAPI from 'cloudflare/resources/radar/attacks/layer7/tops/attacks';

export class Attacks extends APIResource {
  /**
   * Get the top attacks from origin to target location. Values are a percentage out
   * of the total layer 7 attacks (with billing country). The attack magnitude can be
   * defined by the number of mitigated requests or by the number of zones affected.
   * You can optionally limit the number of attacks per origin/target location
   * (useful if all the top attacks are from or to the same location).
   */
  list(query?: AttackListParams, options?: Core.RequestOptions): Core.APIPromise<AttackListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<AttackListResponse>;
  list(
    query: AttackListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AttackListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/radar/attacks/layer7/top/attacks', { query, ...options });
  }
}

export interface AttackListResponse {
  result: AttackListResponse.Result;

  success: boolean;
}

export namespace AttackListResponse {
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
      originCountryAlpha2: string;

      originCountryName: string;

      targetCountryAlpha2: string;

      targetCountryName: string;

      value: string;
    }
  }
}

export interface AttackListParams {
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
   * Array of attack origin/target location attack limits. Together with
   * `limitPerLocation`, limits how many objects will be fetched per origin/target
   * location.
   */
  limitDirection?: 'ORIGIN' | 'TARGET';

  /**
   * Limit the number of attacks per origin/target (refer to `limitDirection`
   * parameter) location.
   */
  limitPerLocation?: number;

  /**
   * Array of comma separated list of locations (alpha-2 country codes). Start with
   * `-` to exclude from results. For example, `-US,PT` excludes results from the US,
   * but includes results from PT.
   */
  location?: Array<string>;

  /**
   * Attack magnitude can be defined by total requests mitigated or by total zones
   * attacked.
   */
  magnitude?: 'AFFECTED_ZONES' | 'MITIGATED_REQUESTS';

  /**
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;
}

export namespace Attacks {
  export import AttackListResponse = AttacksAPI.AttackListResponse;
  export import AttackListParams = AttacksAPI.AttackListParams;
}
