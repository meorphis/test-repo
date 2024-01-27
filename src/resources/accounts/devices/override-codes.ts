// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as OverrideCodesAPI from 'cloudflare/resources/accounts/devices/override-codes';

export class OverrideCodes extends APIResource {
  /**
   * Fetches a one-time use admin override code for a device. This relies on the
   * **Admin Override** setting being enabled in your device configuration.
   */
  devicesListAdminOverrideCodeForDevice(
    identifier: unknown,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OverrideCodeDevicesListAdminOverrideCodeForDeviceResponse> {
    return this._client.get(`/accounts/${identifier}/devices/${uuid}/override_codes`, options);
  }
}

export interface OverrideCodeDevicesListAdminOverrideCodeForDeviceResponse {
  errors?: Array<OverrideCodeDevicesListAdminOverrideCodeForDeviceResponse.Error>;

  messages?: Array<OverrideCodeDevicesListAdminOverrideCodeForDeviceResponse.Message>;

  result?: OverrideCodeDevicesListAdminOverrideCodeForDeviceResponse.Result;

  result_info?: OverrideCodeDevicesListAdminOverrideCodeForDeviceResponse.ResultInfo;

  /**
   * Whether the API call was successful.
   */
  success?: true;
}

export namespace OverrideCodeDevicesListAdminOverrideCodeForDeviceResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    disable_for_time?: Result.DisableForTime;
  }

  export namespace Result {
    export interface DisableForTime {
      /**
       * Override code that is valid for 1 hour.
       */
      '1'?: unknown;

      /**
       * Override code that is valid for 12 hour2.
       */
      '12'?: unknown;

      /**
       * Override code that is valid for 24 hour.2.
       */
      '24'?: unknown;

      /**
       * Override code that is valid for 3 hours.
       */
      '3'?: unknown;

      /**
       * Override code that is valid for 6 hours.
       */
      '6'?: unknown;
    }
  }

  export interface ResultInfo {
    /**
     * Total number of results for the requested service
     */
    count?: number;

    /**
     * Current page within paginated list of results
     */
    page?: number;

    /**
     * Number of results per page of results
     */
    per_page?: number;

    /**
     * Total results available without any search parameters
     */
    total_count?: number;
  }
}

export namespace OverrideCodes {
  export import OverrideCodeDevicesListAdminOverrideCodeForDeviceResponse = OverrideCodesAPI.OverrideCodeDevicesListAdminOverrideCodeForDeviceResponse;
}
