// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PercentilesAPI from 'cloudflare/resources/accounts/dex/http-tests/percentiles';

export class Percentiles extends APIResource {
  /**
   * Get percentiles for an http test for a given time period between 1 hour and 7
   * days.
   */
  list(
    accountIdentifier: string,
    testId: string,
    query: PercentileListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PercentileListResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/dex/http-tests/${testId}/percentiles`, {
      query,
      ...options,
    });
  }
}

export interface PercentileListResponse {
  errors?: Array<PercentileListResponse.Error>;

  messages?: Array<PercentileListResponse.Message>;

  result?: PercentileListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace PercentileListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    dnsResponseTimeMs?: Result.DNSResponseTimeMs;

    resourceFetchTimeMs?: Result.ResourceFetchTimeMs;

    serverResponseTimeMs?: Result.ServerResponseTimeMs;
  }

  export namespace Result {
    export interface DNSResponseTimeMs {
      /**
       * p50 observed in the time period
       */
      p50?: number | null;

      /**
       * p90 observed in the time period
       */
      p90?: number | null;

      /**
       * p95 observed in the time period
       */
      p95?: number | null;

      /**
       * p99 observed in the time period
       */
      p99?: number | null;
    }

    export interface ResourceFetchTimeMs {
      /**
       * p50 observed in the time period
       */
      p50?: number | null;

      /**
       * p90 observed in the time period
       */
      p90?: number | null;

      /**
       * p95 observed in the time period
       */
      p95?: number | null;

      /**
       * p99 observed in the time period
       */
      p99?: number | null;
    }

    export interface ServerResponseTimeMs {
      /**
       * p50 observed in the time period
       */
      p50?: number | null;

      /**
       * p90 observed in the time period
       */
      p90?: number | null;

      /**
       * p95 observed in the time period
       */
      p95?: number | null;

      /**
       * p99 observed in the time period
       */
      p99?: number | null;
    }
  }
}

export interface PercentileListParams {
  /**
   * End time for aggregate metrics in ISO format
   */
  timeEnd: string;

  /**
   * Start time for aggregate metrics in ISO format
   */
  timeStart: string;

  /**
   * Optionally filter result stats to a Cloudflare colo. Cannot be used in
   * combination with deviceId param.
   */
  colo?: string;

  /**
   * Optionally filter result stats to a specific device(s). Cannot be used in
   * combination with colo param.
   */
  deviceId?: Array<string>;
}

export namespace Percentiles {
  export import PercentileListResponse = PercentilesAPI.PercentileListResponse;
  export import PercentileListParams = PercentilesAPI.PercentileListParams;
}
