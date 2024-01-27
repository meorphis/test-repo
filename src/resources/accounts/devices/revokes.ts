// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as RevokesAPI from 'cloudflare/resources/accounts/devices/revokes';

export class Revokes extends APIResource {
  /**
   * Revokes a list of devices.
   */
  devicesRevokeDevices(
    identifier: unknown,
    body: RevokeDevicesRevokeDevicesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RevokeDevicesRevokeDevicesResponse> {
    return this._client.post(`/accounts/${identifier}/devices/revoke`, { body, ...options });
  }
}

export interface RevokeDevicesRevokeDevicesResponse {
  errors?: Array<RevokeDevicesRevokeDevicesResponse.Error>;

  messages?: Array<RevokeDevicesRevokeDevicesResponse.Message>;

  result?: unknown | string | null;

  /**
   * Whether the API call was successful.
   */
  success?: true;
}

export namespace RevokeDevicesRevokeDevicesResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export type RevokeDevicesRevokeDevicesParams = Array<string>;

export namespace Revokes {
  export import RevokeDevicesRevokeDevicesResponse = RevokesAPI.RevokeDevicesRevokeDevicesResponse;
  export import RevokeDevicesRevokeDevicesParams = RevokesAPI.RevokeDevicesRevokeDevicesParams;
}
