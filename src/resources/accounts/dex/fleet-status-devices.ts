// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as FleetStatusDevicesAPI from 'cloudflare/resources/accounts/dex/fleet-status-devices';
import { Page } from 'cloudflare/pagination';

export class FleetStatusDevices extends APIResource {
  /**
   * List details for devices using WARP
   */
  list(
    accountIdentifier: string,
    query: FleetStatusDeviceListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<FleetStatusDeviceListResponsesPage, FleetStatusDeviceListResponse> {
    return this._client.getAPIList(
      `/accounts/${accountIdentifier}/dex/fleet-status/devices`,
      FleetStatusDeviceListResponsesPage,
      { query, ...options },
    );
  }
}

export class FleetStatusDeviceListResponsesPage extends Page<FleetStatusDeviceListResponse> {}

export interface FleetStatusDeviceListResponse {
  /**
   * Cloudflare colo
   */
  colo: string;

  /**
   * Device identifier (UUID v4)
   */
  deviceId: string;

  /**
   * Operating system
   */
  platform: string;

  /**
   * Network status
   */
  status: string;

  /**
   * WARP client version
   */
  version: string;

  /**
   * Device identifier (human readable)
   */
  deviceName?: string;

  /**
   * User contact email address
   */
  personEmail?: string;
}

export interface FleetStatusDeviceListParams {
  /**
   * Page number of paginated results
   */
  page: number;

  /**
   * Number of items per page
   */
  per_page: number;

  /**
   * Timestamp in ISO format
   */
  time_end: string;

  /**
   * Timestamp in ISO format
   */
  time_start: string;

  /**
   * Cloudflare colo
   */
  colo?: string;

  /**
   * Device-specific ID, given as UUID v4
   */
  device_id?: string;

  /**
   * The mode under which the WARP client is run
   */
  mode?: string;

  /**
   * Operating system
   */
  platform?: string;

  /**
   * Dimension to sort results by
   */
  sort_by?: 'colo' | 'device_id' | 'mode' | 'platform' | 'status' | 'timestamp' | 'version';

  /**
   * Network status
   */
  status?: string;

  /**
   * WARP client version
   */
  version?: string;
}

export namespace FleetStatusDevices {
  export import FleetStatusDeviceListResponse = FleetStatusDevicesAPI.FleetStatusDeviceListResponse;
  export import FleetStatusDeviceListResponsesPage = FleetStatusDevicesAPI.FleetStatusDeviceListResponsesPage;
  export import FleetStatusDeviceListParams = FleetStatusDevicesAPI.FleetStatusDeviceListParams;
}
