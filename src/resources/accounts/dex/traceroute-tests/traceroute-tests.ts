// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as TracerouteTestsAPI from 'cloudflare/resources/accounts/dex/traceroute-tests/traceroute-tests';
import * as NetworkPathAPI from 'cloudflare/resources/accounts/dex/traceroute-tests/network-path';

export class TracerouteTests extends APIResource {
  networkPath: NetworkPathAPI.NetworkPath = new NetworkPathAPI.NetworkPath(this._client);

  /**
   * Get test details and aggregate performance metrics for an traceroute test for a
   * given time period between 1 hour and 7 days.
   */
  retrieve(
    accountIdentifier: string,
    testId: string,
    query: TracerouteTestRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TracerouteTestRetrieveResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/dex/traceroute-tests/${testId}`, {
      query,
      ...options,
    });
  }

  /**
   * Get percentiles for a traceroute test for a given time period between 1 hour and
   * 7 days.
   */
  percentiles(
    accountIdentifier: string,
    testId: string,
    query: TracerouteTestPercentilesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TracerouteTestPercentilesResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/dex/traceroute-tests/${testId}/percentiles`, {
      query,
      ...options,
    });
  }
}

export interface TracerouteTestRetrieveResponse {
  errors?: Array<TracerouteTestRetrieveResponse.Error>;

  messages?: Array<TracerouteTestRetrieveResponse.Message>;

  result?: TracerouteTestRetrieveResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace TracerouteTestRetrieveResponse {
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
     * The host of the Traceroute synthetic application test
     */
    host: string;

    /**
     * The interval at which the Traceroute synthetic application test is set to run.
     */
    interval: string;

    kind: 'traceroute';

    /**
     * The name of the Traceroute synthetic application test
     */
    name: string;

    tracerouteStats?: Result.TracerouteStats | null;

    tracerouteStatsByColo?: Array<Result.TracerouteStatsByColo>;
  }

  export namespace Result {
    export interface TracerouteStats {
      availabilityPct: TracerouteStats.AvailabilityPct;

      hopsCount: TracerouteStats.HopsCount;

      packetLossPct: TracerouteStats.PacketLossPct;

      roundTripTimeMs: TracerouteStats.RoundTripTimeMs;

      /**
       * Count of unique devices that have run this test in the given time period
       */
      uniqueDevicesTotal: number;
    }

    export namespace TracerouteStats {
      export interface AvailabilityPct {
        slots: Array<AvailabilityPct.Slot>;

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

      export namespace AvailabilityPct {
        export interface Slot {
          timestamp: string;

          value: number;
        }
      }

      export interface HopsCount {
        slots: Array<HopsCount.Slot>;

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

      export namespace HopsCount {
        export interface Slot {
          timestamp: string;

          value: number;
        }
      }

      export interface PacketLossPct {
        slots: Array<PacketLossPct.Slot>;

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

      export namespace PacketLossPct {
        export interface Slot {
          timestamp: string;

          value: number;
        }
      }

      export interface RoundTripTimeMs {
        slots: Array<RoundTripTimeMs.Slot>;

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

      export namespace RoundTripTimeMs {
        export interface Slot {
          timestamp: string;

          value: number;
        }
      }
    }

    export interface TracerouteStatsByColo {
      availabilityPct: TracerouteStatsByColo.AvailabilityPct;

      colo: string;

      hopsCount: TracerouteStatsByColo.HopsCount;

      packetLossPct: TracerouteStatsByColo.PacketLossPct;

      roundTripTimeMs: TracerouteStatsByColo.RoundTripTimeMs;

      /**
       * Count of unique devices that have run this test in the given time period
       */
      uniqueDevicesTotal: number;
    }

    export namespace TracerouteStatsByColo {
      export interface AvailabilityPct {
        slots: Array<AvailabilityPct.Slot>;

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

      export namespace AvailabilityPct {
        export interface Slot {
          timestamp: string;

          value: number;
        }
      }

      export interface HopsCount {
        slots: Array<HopsCount.Slot>;

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

      export namespace HopsCount {
        export interface Slot {
          timestamp: string;

          value: number;
        }
      }

      export interface PacketLossPct {
        slots: Array<PacketLossPct.Slot>;

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

      export namespace PacketLossPct {
        export interface Slot {
          timestamp: string;

          value: number;
        }
      }

      export interface RoundTripTimeMs {
        slots: Array<RoundTripTimeMs.Slot>;

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

      export namespace RoundTripTimeMs {
        export interface Slot {
          timestamp: string;

          value: number;
        }
      }
    }
  }
}

export interface TracerouteTestPercentilesResponse {
  errors?: Array<TracerouteTestPercentilesResponse.Error>;

  messages?: Array<TracerouteTestPercentilesResponse.Message>;

  result?: TracerouteTestPercentilesResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace TracerouteTestPercentilesResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    hopsCount?: Result.HopsCount;

    packetLossPct?: Result.PacketLossPct;

    roundTripTimeMs?: Result.RoundTripTimeMs;
  }

  export namespace Result {
    export interface HopsCount {
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

    export interface PacketLossPct {
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

    export interface RoundTripTimeMs {
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

export interface TracerouteTestRetrieveParams {
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

export interface TracerouteTestPercentilesParams {
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

export namespace TracerouteTests {
  export import TracerouteTestRetrieveResponse = TracerouteTestsAPI.TracerouteTestRetrieveResponse;
  export import TracerouteTestPercentilesResponse = TracerouteTestsAPI.TracerouteTestPercentilesResponse;
  export import TracerouteTestRetrieveParams = TracerouteTestsAPI.TracerouteTestRetrieveParams;
  export import TracerouteTestPercentilesParams = TracerouteTestsAPI.TracerouteTestPercentilesParams;
  export import NetworkPath = NetworkPathAPI.NetworkPath;
  export import NetworkPathListResponse = NetworkPathAPI.NetworkPathListResponse;
  export import NetworkPathListParams = NetworkPathAPI.NetworkPathListParams;
}
