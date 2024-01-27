// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as TimeseriesGroupsAPI from 'cloudflare/resources/radar/attacks/layer3/timeseries-groups/timeseries-groups';
import * as BitratesAPI from 'cloudflare/resources/radar/attacks/layer3/timeseries-groups/bitrates';
import * as DurationsAPI from 'cloudflare/resources/radar/attacks/layer3/timeseries-groups/durations';
import * as IndustriesAPI from 'cloudflare/resources/radar/attacks/layer3/timeseries-groups/industries';
import * as IPVersionsAPI from 'cloudflare/resources/radar/attacks/layer3/timeseries-groups/ip-versions';
import * as ProtocolsAPI from 'cloudflare/resources/radar/attacks/layer3/timeseries-groups/protocols';
import * as VectorsAPI from 'cloudflare/resources/radar/attacks/layer3/timeseries-groups/vectors';
import * as VerticalAPI from 'cloudflare/resources/radar/attacks/layer3/timeseries-groups/vertical';

export class TimeseriesGroups extends APIResource {
  bitrates: BitratesAPI.Bitrates = new BitratesAPI.Bitrates(this._client);
  durations: DurationsAPI.Durations = new DurationsAPI.Durations(this._client);
  industries: IndustriesAPI.Industries = new IndustriesAPI.Industries(this._client);
  ipVersions: IPVersionsAPI.IPVersions = new IPVersionsAPI.IPVersions(this._client);
  protocols: ProtocolsAPI.Protocols = new ProtocolsAPI.Protocols(this._client);
  vectors: VectorsAPI.Vectors = new VectorsAPI.Vectors(this._client);
  vertical: VerticalAPI.Vertical = new VerticalAPI.Vertical(this._client);

  /**
   * Get a timeseries of the percentage distribution of network protocols in Layer
   * 3/4 attacks.
   */
  list(
    query?: TimeseriesGroupListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupListResponse>;
  list(
    query: TimeseriesGroupListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/radar/attacks/layer3/timeseries_groups', { query, ...options });
  }
}

export interface TimeseriesGroupListResponse {
  result: TimeseriesGroupListResponse.Result;

  success: boolean;
}

export namespace TimeseriesGroupListResponse {
  export interface Result {
    meta: Result.Meta;

    serie_0: Result.Serie0;
  }

  export namespace Result {
    export interface Meta {
      aggInterval: string;

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

    export interface Serie0 {
      gre: Array<string>;

      icmp: Array<string>;

      tcp: Array<string>;

      timestamps: Array<string>;

      udp: Array<string>;
    }
  }
}

export interface TimeseriesGroupListParams {
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

export namespace TimeseriesGroups {
  export import TimeseriesGroupListResponse = TimeseriesGroupsAPI.TimeseriesGroupListResponse;
  export import TimeseriesGroupListParams = TimeseriesGroupsAPI.TimeseriesGroupListParams;
  export import Bitrates = BitratesAPI.Bitrates;
  export import BitrateListResponse = BitratesAPI.BitrateListResponse;
  export import BitrateListParams = BitratesAPI.BitrateListParams;
  export import Durations = DurationsAPI.Durations;
  export import DurationListResponse = DurationsAPI.DurationListResponse;
  export import DurationListParams = DurationsAPI.DurationListParams;
  export import Industries = IndustriesAPI.Industries;
  export import IndustryListResponse = IndustriesAPI.IndustryListResponse;
  export import IndustryListParams = IndustriesAPI.IndustryListParams;
  export import IPVersions = IPVersionsAPI.IPVersions;
  export import IPVersionListResponse = IPVersionsAPI.IPVersionListResponse;
  export import IPVersionListParams = IPVersionsAPI.IPVersionListParams;
  export import Protocols = ProtocolsAPI.Protocols;
  export import ProtocolListResponse = ProtocolsAPI.ProtocolListResponse;
  export import ProtocolListParams = ProtocolsAPI.ProtocolListParams;
  export import Vectors = VectorsAPI.Vectors;
  export import VectorListResponse = VectorsAPI.VectorListResponse;
  export import VectorListParams = VectorsAPI.VectorListParams;
  export import Vertical = VerticalAPI.Vertical;
  export import VerticalListResponse = VerticalAPI.VerticalListResponse;
  export import VerticalListParams = VerticalAPI.VerticalListParams;
}
