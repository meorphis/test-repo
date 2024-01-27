// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as HTTPTestsAPI from 'cloudflare/resources/accounts/dex/http-tests/http-tests';
import * as PercentilesAPI from 'cloudflare/resources/accounts/dex/http-tests/percentiles';

export class HTTPTests extends APIResource {
  percentiles: PercentilesAPI.Percentiles = new PercentilesAPI.Percentiles(this._client);

  /**
   * Get test details and aggregate performance metrics for an http test for a given
   * time period between 1 hour and 7 days.
   */
  retrieve(
    accountIdentifier: string,
    testId: string,
    query: HTTPTestRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HTTPTestRetrieveResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/dex/http-tests/${testId}`, { query, ...options });
  }
}

export interface HTTPTestRetrieveResponse {
  errors?: Array<HTTPTestRetrieveResponse.Error>;

  messages?: Array<HTTPTestRetrieveResponse.Message>;

  result?: HTTPTestRetrieveResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace HTTPTestRetrieveResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    /**
     * The url of the HTTP synthetic application test
     */
    host?: string;

    httpStats?: Result.HTTPStats | null;

    httpStatsByColo?: Array<Result.HTTPStatsByColo>;

    /**
     * The interval at which the HTTP synthetic application test is set to run.
     */
    interval?: string;

    kind?: 'http';

    /**
     * The HTTP method to use when running the test
     */
    method?: string;

    /**
     * The name of the HTTP synthetic application test
     */
    name?: string;
  }

  export namespace Result {
    export interface HTTPStats {
      dnsResponseTimeMs: HTTPStats.DNSResponseTimeMs;

      httpStatusCode: Array<HTTPStats.HTTPStatusCode>;

      resourceFetchTimeMs: HTTPStats.ResourceFetchTimeMs;

      serverResponseTimeMs: HTTPStats.ServerResponseTimeMs;

      /**
       * Count of unique devices that have run this test in the given time period
       */
      uniqueDevicesTotal: number;
    }

    export namespace HTTPStats {
      export interface DNSResponseTimeMs {
        slots: Array<DNSResponseTimeMs.Slot>;

        /**
         * average observed in the time period
         */
        avg?: number | null;

        /**
         * highest observed in the time period
         */
        max?: number | null;

        /**
         * lowest observed in the time period
         */
        min?: number | null;
      }

      export namespace DNSResponseTimeMs {
        export interface Slot {
          timestamp: string;

          value: number;
        }
      }

      export interface HTTPStatusCode {
        status200: number;

        status300: number;

        status400: number;

        status500: number;

        timestamp: string;
      }

      export interface ResourceFetchTimeMs {
        slots: Array<ResourceFetchTimeMs.Slot>;

        /**
         * average observed in the time period
         */
        avg?: number | null;

        /**
         * highest observed in the time period
         */
        max?: number | null;

        /**
         * lowest observed in the time period
         */
        min?: number | null;
      }

      export namespace ResourceFetchTimeMs {
        export interface Slot {
          timestamp: string;

          value: number;
        }
      }

      export interface ServerResponseTimeMs {
        slots: Array<ServerResponseTimeMs.Slot>;

        /**
         * average observed in the time period
         */
        avg?: number | null;

        /**
         * highest observed in the time period
         */
        max?: number | null;

        /**
         * lowest observed in the time period
         */
        min?: number | null;
      }

      export namespace ServerResponseTimeMs {
        export interface Slot {
          timestamp: string;

          value: number;
        }
      }
    }

    export interface HTTPStatsByColo {
      colo: string;

      dnsResponseTimeMs: HTTPStatsByColo.DNSResponseTimeMs;

      httpStatusCode: Array<HTTPStatsByColo.HTTPStatusCode>;

      resourceFetchTimeMs: HTTPStatsByColo.ResourceFetchTimeMs;

      serverResponseTimeMs: HTTPStatsByColo.ServerResponseTimeMs;

      /**
       * Count of unique devices that have run this test in the given time period
       */
      uniqueDevicesTotal: number;
    }

    export namespace HTTPStatsByColo {
      export interface DNSResponseTimeMs {
        slots: Array<DNSResponseTimeMs.Slot>;

        /**
         * average observed in the time period
         */
        avg?: number | null;

        /**
         * highest observed in the time period
         */
        max?: number | null;

        /**
         * lowest observed in the time period
         */
        min?: number | null;
      }

      export namespace DNSResponseTimeMs {
        export interface Slot {
          timestamp: string;

          value: number;
        }
      }

      export interface HTTPStatusCode {
        status200: number;

        status300: number;

        status400: number;

        status500: number;

        timestamp: string;
      }

      export interface ResourceFetchTimeMs {
        slots: Array<ResourceFetchTimeMs.Slot>;

        /**
         * average observed in the time period
         */
        avg?: number | null;

        /**
         * highest observed in the time period
         */
        max?: number | null;

        /**
         * lowest observed in the time period
         */
        min?: number | null;
      }

      export namespace ResourceFetchTimeMs {
        export interface Slot {
          timestamp: string;

          value: number;
        }
      }

      export interface ServerResponseTimeMs {
        slots: Array<ServerResponseTimeMs.Slot>;

        /**
         * average observed in the time period
         */
        avg?: number | null;

        /**
         * highest observed in the time period
         */
        max?: number | null;

        /**
         * lowest observed in the time period
         */
        min?: number | null;
      }

      export namespace ServerResponseTimeMs {
        export interface Slot {
          timestamp: string;

          value: number;
        }
      }
    }
  }
}

export interface HTTPTestRetrieveParams {
  /**
   * Time interval for aggregate time slots.
   */
  interval: 'minute' | 'hour';

  /**
   * End time for aggregate metrics in ISO ms
   */
  timeEnd: string;

  /**
   * Start time for aggregate metrics in ISO ms
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

export namespace HTTPTests {
  export import HTTPTestRetrieveResponse = HTTPTestsAPI.HTTPTestRetrieveResponse;
  export import HTTPTestRetrieveParams = HTTPTestsAPI.HTTPTestRetrieveParams;
  export import Percentiles = PercentilesAPI.Percentiles;
  export import PercentileListResponse = PercentilesAPI.PercentileListResponse;
  export import PercentileListParams = PercentilesAPI.PercentileListParams;
}
