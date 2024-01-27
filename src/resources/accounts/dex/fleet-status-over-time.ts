// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as FleetStatusOverTimeAPI from 'cloudflare/resources/accounts/dex/fleet-status-over-time';

export class FleetStatusOverTime extends APIResource {
  /**
   * List details for devices using WARP, up to 7 days
   */
  list(
    accountIdentifier: string,
    query: FleetStatusOverTimeListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.get(`/accounts/${accountIdentifier}/dex/fleet-status/over-time`, {
      query,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface FleetStatusOverTimeListParams {
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
}

export namespace FleetStatusOverTime {
  export import FleetStatusOverTimeListParams = FleetStatusOverTimeAPI.FleetStatusOverTimeListParams;
}
