// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as UniqueDevicesAPI from 'cloudflare/resources/accounts/dex/tests/unique-devices';

export class UniqueDevices extends APIResource {
  /**
   * Returns unique count of devices that have run synthetic application monitoring
   * tests in the past 7 days.
   */
  list(
    accountIdentifier: string,
    query?: UniqueDeviceListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UniqueDeviceListResponse>;
  list(accountIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<UniqueDeviceListResponse>;
  list(
    accountIdentifier: string,
    query: UniqueDeviceListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<UniqueDeviceListResponse> {
    if (isRequestOptions(query)) {
      return this.list(accountIdentifier, {}, query);
    }
    return this._client.get(`/accounts/${accountIdentifier}/dex/tests/unique-devices`, { query, ...options });
  }
}

export interface UniqueDeviceListResponse {
  errors?: Array<UniqueDeviceListResponse.Error>;

  messages?: Array<UniqueDeviceListResponse.Message>;

  result?: UniqueDeviceListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace UniqueDeviceListResponse {
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
     * total number of unique devices
     */
    uniqueDevicesTotal: number;
  }
}

export interface UniqueDeviceListParams {
  /**
   * Optionally filter result stats to a specific device(s). Cannot be used in
   * combination with colo param.
   */
  deviceId?: Array<string>;

  /**
   * Optionally filter results by test name
   */
  testName?: string;
}

export namespace UniqueDevices {
  export import UniqueDeviceListResponse = UniqueDevicesAPI.UniqueDeviceListResponse;
  export import UniqueDeviceListParams = UniqueDevicesAPI.UniqueDeviceListParams;
}
