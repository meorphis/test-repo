// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as SummariesAPI from 'cloudflare/resources/radar/attacks/layer7/summaries/summaries';
import * as HTTPMethodAPI from 'cloudflare/resources/radar/attacks/layer7/summaries/http-method';
import * as HTTPVersionAPI from 'cloudflare/resources/radar/attacks/layer7/summaries/http-version';
import * as IPVersionAPI from 'cloudflare/resources/radar/attacks/layer7/summaries/ip-version';
import * as ManagedRulesAPI from 'cloudflare/resources/radar/attacks/layer7/summaries/managed-rules';

export class Summaries extends APIResource {
  httpMethod: HTTPMethodAPI.HTTPMethod = new HTTPMethodAPI.HTTPMethod(this._client);
  httpVersion: HTTPVersionAPI.HTTPVersion = new HTTPVersionAPI.HTTPVersion(this._client);
  ipVersion: IPVersionAPI.IPVersion = new IPVersionAPI.IPVersion(this._client);
  managedRules: ManagedRulesAPI.ManagedRules = new ManagedRulesAPI.ManagedRules(this._client);

  /**
   * Percentage distribution of mitigation techniques in Layer 7 attacks.
   */
  list(query?: SummaryListParams, options?: Core.RequestOptions): Core.APIPromise<SummaryListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<SummaryListResponse>;
  list(
    query: SummaryListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SummaryListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/radar/attacks/layer7/summary', { query, ...options });
  }
}

export interface SummaryListResponse {
  result: SummaryListResponse.Result;

  success: boolean;
}

export namespace SummaryListResponse {
  export interface Result {
    meta: Result.Meta;

    summary_0: Result.Summary0;
  }

  export namespace Result {
    export interface Meta {
      dateRange: Array<Meta.DateRange>;

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
      ACCESS_RULES: string;

      API_SHIELD: string;

      BOT_MANAGEMENT: string;

      DATA_LOSS_PREVENTION: string;

      DDOS: string;

      IP_REPUTATION: string;

      WAF: string;
    }
  }
}

export interface SummaryListParams {
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

export namespace Summaries {
  export import SummaryListResponse = SummariesAPI.SummaryListResponse;
  export import SummaryListParams = SummariesAPI.SummaryListParams;
  export import HTTPMethod = HTTPMethodAPI.HTTPMethod;
  export import HTTPMethodListResponse = HTTPMethodAPI.HTTPMethodListResponse;
  export import HTTPMethodListParams = HTTPMethodAPI.HTTPMethodListParams;
  export import HTTPVersion = HTTPVersionAPI.HTTPVersion;
  export import HTTPVersionListResponse = HTTPVersionAPI.HTTPVersionListResponse;
  export import HTTPVersionListParams = HTTPVersionAPI.HTTPVersionListParams;
  export import IPVersion = IPVersionAPI.IPVersion;
  export import IPVersionListResponse = IPVersionAPI.IPVersionListResponse;
  export import IPVersionListParams = IPVersionAPI.IPVersionListParams;
  export import ManagedRules = ManagedRulesAPI.ManagedRules;
  export import ManagedRuleListResponse = ManagedRulesAPI.ManagedRuleListResponse;
  export import ManagedRuleListParams = ManagedRulesAPI.ManagedRuleListParams;
}
