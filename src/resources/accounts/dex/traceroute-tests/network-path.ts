// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as NetworkPathAPI from 'cloudflare/resources/accounts/dex/traceroute-tests/network-path';

export class NetworkPath extends APIResource {
  /**
   * Get a breakdown of metrics by hop for individual traceroute test runs
   */
  list(
    accountIdentifier: string,
    testId: string,
    query: NetworkPathListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NetworkPathListResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/dex/traceroute-tests/${testId}/network-path`, {
      query,
      ...options,
    });
  }
}

export interface NetworkPathListResponse {
  errors?: Array<NetworkPathListResponse.Error>;

  messages?: Array<NetworkPathListResponse.Message>;

  result?: NetworkPathListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace NetworkPathListResponse {
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
     * API Resource UUID tag.
     */
    id: string;

    deviceName?: string;

    /**
     * The interval at which the Traceroute synthetic application test is set to run.
     */
    interval?: string;

    kind?: 'traceroute';

    name?: string;

    networkPath?: Result.NetworkPath | null;

    /**
     * The host of the Traceroute synthetic application test
     */
    url?: string;
  }

  export namespace Result {
    export interface NetworkPath {
      slots: Array<NetworkPath.Slot>;

      /**
       * Specifies the sampling applied, if any, to the slots response. When sampled,
       * results shown represent the first test run to the start of each sampling
       * interval.
       */
      sampling?: NetworkPath.Sampling | null;
    }

    export namespace NetworkPath {
      export interface Slot {
        /**
         * API Resource UUID tag.
         */
        id: string;

        /**
         * Round trip time in ms of the client to app mile
         */
        clientToAppRttMs: number | null;

        /**
         * Round trip time in ms of the client to Cloudflare egress mile
         */
        clientToCfEgressRttMs: number | null;

        /**
         * Round trip time in ms of the client to Cloudflare ingress mile
         */
        clientToCfIngressRttMs: number | null;

        timestamp: string;

        /**
         * Round trip time in ms of the client to ISP mile
         */
        clientToIspRttMs?: number | null;
      }

      /**
       * Specifies the sampling applied, if any, to the slots response. When sampled,
       * results shown represent the first test run to the start of each sampling
       * interval.
       */
      export interface Sampling {
        unit: 'hours';

        value: number;
      }
    }
  }
}

export interface NetworkPathListParams {
  /**
   * Device to filter tracroute result runs to
   */
  deviceId: string;

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
}

export namespace NetworkPath {
  export import NetworkPathListResponse = NetworkPathAPI.NetworkPathListResponse;
  export import NetworkPathListParams = NetworkPathAPI.NetworkPathListParams;
}
