// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as NetworkPathAPI from 'cloudflare/resources/accounts/dex/traceroute-test-results/network-path';

export class NetworkPath extends APIResource {
  /**
   * Get a breakdown of hops and performance metrics for a specific traceroute test
   * run
   */
  list(
    accountIdentifier: string,
    testResultId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NetworkPathListResponse> {
    return this._client.get(
      `/accounts/${accountIdentifier}/dex/traceroute-test-results/${testResultId}/network-path`,
      options,
    );
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
     * an array of the hops taken by the device to reach the end destination
     */
    hops: Array<Result.Hop>;

    /**
     * API Resource UUID tag.
     */
    resultId: string;

    /**
     * date time of this traceroute test
     */
    time_start: string;

    /**
     * name of the device associated with this network path response
     */
    deviceName?: string;

    /**
     * API Resource UUID tag.
     */
    testId?: string;

    /**
     * name of the tracroute test
     */
    testName?: string;
  }

  export namespace Result {
    export interface Hop {
      ttl: number;

      asn?: number | null;

      aso?: string | null;

      ipAddress?: string | null;

      location?: Hop.Location | null;

      mile?: 'client-to-app' | 'client-to-cf-egress' | 'client-to-cf-ingress' | 'client-to-isp' | null;

      name?: string | null;

      packetLossPct?: number | null;

      rttMs?: number | null;
    }

    export namespace Hop {
      export interface Location {
        city?: string | null;

        state?: string | null;

        zip?: string | null;
      }
    }
  }
}

export namespace NetworkPath {
  export import NetworkPathListResponse = NetworkPathAPI.NetworkPathListResponse;
}
