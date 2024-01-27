// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as UnrevokesAPI from 'cloudflare/resources/accounts/devices/unrevokes';

export class Unrevokes extends APIResource {
  /**
   * Unrevokes a list of devices.
   */
  devicesUnrevokeDevices(
    identifier: unknown,
    body: UnrevokeDevicesUnrevokeDevicesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UnrevokeDevicesUnrevokeDevicesResponse> {
    return this._client.post(`/accounts/${identifier}/devices/unrevoke`, { body, ...options });
  }
}

export interface UnrevokeDevicesUnrevokeDevicesResponse {
  errors?: Array<UnrevokeDevicesUnrevokeDevicesResponse.Error>;

  messages?: Array<UnrevokeDevicesUnrevokeDevicesResponse.Message>;

  result?: unknown | string | null;

  /**
   * Whether the API call was successful.
   */
  success?: true;
}

export namespace UnrevokeDevicesUnrevokeDevicesResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export type UnrevokeDevicesUnrevokeDevicesParams = Array<string>;

export namespace Unrevokes {
  export import UnrevokeDevicesUnrevokeDevicesResponse = UnrevokesAPI.UnrevokeDevicesUnrevokeDevicesResponse;
  export import UnrevokeDevicesUnrevokeDevicesParams = UnrevokesAPI.UnrevokeDevicesUnrevokeDevicesParams;
}
