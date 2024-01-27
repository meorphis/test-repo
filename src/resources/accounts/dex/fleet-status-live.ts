// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as FleetStatusLiveAPI from 'cloudflare/resources/accounts/dex/fleet-status-live';

export class FleetStatusLive extends APIResource {
  /**
   * List details for live (up to 60 minutes) devices using WARP
   */
  list(
    accountIdentifier: string,
    query: FleetStatusLiveListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FleetStatusLiveListResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/dex/fleet-status/live`, { query, ...options });
  }
}

export interface FleetStatusLiveListResponse {
  errors?: Array<FleetStatusLiveListResponse.Error>;

  messages?: Array<FleetStatusLiveListResponse.Message>;

  result?: FleetStatusLiveListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace FleetStatusLiveListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    deviceStats?: Result.DeviceStats;
  }

  export namespace Result {
    export interface DeviceStats {
      byColo?: Array<DeviceStats.ByColo> | null;

      byMode?: Array<DeviceStats.ByMode> | null;

      byPlatform?: Array<DeviceStats.ByPlatform> | null;

      byStatus?: Array<DeviceStats.ByStatus> | null;

      byVersion?: Array<DeviceStats.ByVersion> | null;

      /**
       * Number of unique devices
       */
      uniqueDevicesTotal?: number;
    }

    export namespace DeviceStats {
      export interface ByColo {
        /**
         * Number of unique devices
         */
        uniqueDevicesTotal?: number;

        value?: string;
      }

      export interface ByMode {
        /**
         * Number of unique devices
         */
        uniqueDevicesTotal?: number;

        value?: string;
      }

      export interface ByPlatform {
        /**
         * Number of unique devices
         */
        uniqueDevicesTotal?: number;

        value?: string;
      }

      export interface ByStatus {
        /**
         * Number of unique devices
         */
        uniqueDevicesTotal?: number;

        value?: string;
      }

      export interface ByVersion {
        /**
         * Number of unique devices
         */
        uniqueDevicesTotal?: number;

        value?: string;
      }
    }
  }
}

export interface FleetStatusLiveListParams {
  /**
   * Number of minutes before current time
   */
  since_minutes: number;
}

export namespace FleetStatusLive {
  export import FleetStatusLiveListResponse = FleetStatusLiveAPI.FleetStatusLiveListResponse;
  export import FleetStatusLiveListParams = FleetStatusLiveAPI.FleetStatusLiveListParams;
}
