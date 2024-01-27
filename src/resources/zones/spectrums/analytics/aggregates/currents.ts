// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as CurrentsAPI from 'cloudflare/resources/zones/spectrums/analytics/aggregates/currents';

export class Currents extends APIResource {
  /**
   * Retrieves analytics aggregated from the last minute of usage on Spectrum
   * applications underneath a given zone.
   */
  spectrumAggregateAnalyticsGetCurrentAggregatedAnalytics(
    zone: string,
    query?: CurrentSpectrumAggregateAnalyticsGetCurrentAggregatedAnalyticsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CurrentSpectrumAggregateAnalyticsGetCurrentAggregatedAnalyticsResponse>;
  spectrumAggregateAnalyticsGetCurrentAggregatedAnalytics(
    zone: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CurrentSpectrumAggregateAnalyticsGetCurrentAggregatedAnalyticsResponse>;
  spectrumAggregateAnalyticsGetCurrentAggregatedAnalytics(
    zone: string,
    query: CurrentSpectrumAggregateAnalyticsGetCurrentAggregatedAnalyticsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CurrentSpectrumAggregateAnalyticsGetCurrentAggregatedAnalyticsResponse> {
    if (isRequestOptions(query)) {
      return this.spectrumAggregateAnalyticsGetCurrentAggregatedAnalytics(zone, {}, query);
    }
    return this._client.get(`/zones/${zone}/spectrum/analytics/aggregate/current`, { query, ...options });
  }
}

export interface CurrentSpectrumAggregateAnalyticsGetCurrentAggregatedAnalyticsResponse {
  errors?: Array<CurrentSpectrumAggregateAnalyticsGetCurrentAggregatedAnalyticsResponse.Error>;

  messages?: Array<CurrentSpectrumAggregateAnalyticsGetCurrentAggregatedAnalyticsResponse.Message>;

  result?: Array<unknown>;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace CurrentSpectrumAggregateAnalyticsGetCurrentAggregatedAnalyticsResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface CurrentSpectrumAggregateAnalyticsGetCurrentAggregatedAnalyticsParams {
  /**
   * Comma-delimited list of Spectrum Application Id(s). If provided, the response
   * will be limited to Spectrum Application Id(s) that match.
   */
  app_id_param?: string;

  /**
   * Comma-delimited list of Spectrum Application Id(s). If provided, the response
   * will be limited to Spectrum Application Id(s) that match.
   */
  appID?: string;

  /**
   * Co-location identifier.
   */
  colo_name?: string;
}

export namespace Currents {
  export import CurrentSpectrumAggregateAnalyticsGetCurrentAggregatedAnalyticsResponse = CurrentsAPI.CurrentSpectrumAggregateAnalyticsGetCurrentAggregatedAnalyticsResponse;
  export import CurrentSpectrumAggregateAnalyticsGetCurrentAggregatedAnalyticsParams = CurrentsAPI.CurrentSpectrumAggregateAnalyticsGetCurrentAggregatedAnalyticsParams;
}
