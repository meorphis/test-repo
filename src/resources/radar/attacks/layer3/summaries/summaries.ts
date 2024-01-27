// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as SummariesAPI from 'cloudflare/resources/radar/attacks/layer3/summaries/summaries';
import * as BitrateAPI from 'cloudflare/resources/radar/attacks/layer3/summaries/bitrate';
import * as DurationsAPI from 'cloudflare/resources/radar/attacks/layer3/summaries/durations';
import * as IPVersionsAPI from 'cloudflare/resources/radar/attacks/layer3/summaries/ip-versions';
import * as ProtocolsAPI from 'cloudflare/resources/radar/attacks/layer3/summaries/protocols';
import * as VectorsAPI from 'cloudflare/resources/radar/attacks/layer3/summaries/vectors';

export class Summaries extends APIResource {
  bitrate: BitrateAPI.Bitrate = new BitrateAPI.Bitrate(this._client);
  durations: DurationsAPI.Durations = new DurationsAPI.Durations(this._client);
  ipVersions: IPVersionsAPI.IPVersions = new IPVersionsAPI.IPVersions(this._client);
  protocols: ProtocolsAPI.Protocols = new ProtocolsAPI.Protocols(this._client);
  vectors: VectorsAPI.Vectors = new VectorsAPI.Vectors(this._client);

  /**
   * Percentage distribution of network protocols in layer 3/4 attacks over a given
   * time period.
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
    return this._client.get('/radar/attacks/layer3/summary', { query, ...options });
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
      gre: string;

      icmp: string;

      tcp: string;

      udp: string;
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
  export import Bitrate = BitrateAPI.Bitrate;
  export import BitrateRetrieveResponse = BitrateAPI.BitrateRetrieveResponse;
  export import BitrateRetrieveParams = BitrateAPI.BitrateRetrieveParams;
  export import Durations = DurationsAPI.Durations;
  export import DurationListResponse = DurationsAPI.DurationListResponse;
  export import DurationListParams = DurationsAPI.DurationListParams;
  export import IPVersions = IPVersionsAPI.IPVersions;
  export import IPVersionListResponse = IPVersionsAPI.IPVersionListResponse;
  export import IPVersionListParams = IPVersionsAPI.IPVersionListParams;
  export import Protocols = ProtocolsAPI.Protocols;
  export import ProtocolListResponse = ProtocolsAPI.ProtocolListResponse;
  export import ProtocolListParams = ProtocolsAPI.ProtocolListParams;
  export import Vectors = VectorsAPI.Vectors;
  export import VectorListResponse = VectorsAPI.VectorListResponse;
  export import VectorListParams = VectorsAPI.VectorListParams;
}
