// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as LatenciesAPI from 'cloudflare/resources/zones/analytics/latencies/latencies';
import * as ColosAPI from 'cloudflare/resources/zones/analytics/latencies/colos';

export class Latencies extends APIResource {
  colos: ColosAPI.Colos = new ColosAPI.Colos(this._client);

  /**
   * Argo Analytics for a zone
   */
  argoAnalyticsForZoneArgoAnalyticsForAZone(
    zoneIdentifier: string,
    query?: LatencyArgoAnalyticsForZoneArgoAnalyticsForAZoneParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LatencyArgoAnalyticsForZoneArgoAnalyticsForAZoneResponse>;
  argoAnalyticsForZoneArgoAnalyticsForAZone(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LatencyArgoAnalyticsForZoneArgoAnalyticsForAZoneResponse>;
  argoAnalyticsForZoneArgoAnalyticsForAZone(
    zoneIdentifier: string,
    query: LatencyArgoAnalyticsForZoneArgoAnalyticsForAZoneParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LatencyArgoAnalyticsForZoneArgoAnalyticsForAZoneResponse> {
    if (isRequestOptions(query)) {
      return this.argoAnalyticsForZoneArgoAnalyticsForAZone(zoneIdentifier, {}, query);
    }
    return this._client.get(`/zones/${zoneIdentifier}/analytics/latency`, { query, ...options });
  }
}

export interface LatencyArgoAnalyticsForZoneArgoAnalyticsForAZoneResponse {
  errors?: Array<LatencyArgoAnalyticsForZoneArgoAnalyticsForAZoneResponse.Error>;

  messages?: Array<LatencyArgoAnalyticsForZoneArgoAnalyticsForAZoneResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace LatencyArgoAnalyticsForZoneArgoAnalyticsForAZoneResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface LatencyArgoAnalyticsForZoneArgoAnalyticsForAZoneParams {
  bins?: string;
}

export namespace Latencies {
  export import LatencyArgoAnalyticsForZoneArgoAnalyticsForAZoneResponse = LatenciesAPI.LatencyArgoAnalyticsForZoneArgoAnalyticsForAZoneResponse;
  export import LatencyArgoAnalyticsForZoneArgoAnalyticsForAZoneParams = LatenciesAPI.LatencyArgoAnalyticsForZoneArgoAnalyticsForAZoneParams;
  export import Colos = ColosAPI.Colos;
  export import ColoArgoAnalyticsForGeolocationArgoAnalyticsForAZoneAtDifferentPoPsResponse = ColosAPI.ColoArgoAnalyticsForGeolocationArgoAnalyticsForAZoneAtDifferentPoPsResponse;
}
