// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ColosAPI from 'cloudflare/resources/zones/analytics/latencies/colos';

export class Colos extends APIResource {
  /**
   * Argo Analytics for a zone at different PoPs
   */
  argoAnalyticsForGeolocationArgoAnalyticsForAZoneAtDifferentPoPs(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ColoArgoAnalyticsForGeolocationArgoAnalyticsForAZoneAtDifferentPoPsResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/analytics/latency/colos`, options);
  }
}

export interface ColoArgoAnalyticsForGeolocationArgoAnalyticsForAZoneAtDifferentPoPsResponse {
  errors?: Array<ColoArgoAnalyticsForGeolocationArgoAnalyticsForAZoneAtDifferentPoPsResponse.Error>;

  messages?: Array<ColoArgoAnalyticsForGeolocationArgoAnalyticsForAZoneAtDifferentPoPsResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ColoArgoAnalyticsForGeolocationArgoAnalyticsForAZoneAtDifferentPoPsResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export namespace Colos {
  export import ColoArgoAnalyticsForGeolocationArgoAnalyticsForAZoneAtDifferentPoPsResponse = ColosAPI.ColoArgoAnalyticsForGeolocationArgoAnalyticsForAZoneAtDifferentPoPsResponse;
}
