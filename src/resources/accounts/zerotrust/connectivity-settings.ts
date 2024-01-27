// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ConnectivitySettingsAPI from 'cloudflare/resources/accounts/zerotrust/connectivity-settings';

export class ConnectivitySettings extends APIResource {
  /**
   * Updates the Zero Trust Connectivity Settings for the given account.
   */
  update(
    accountIdentifier: string,
    body: ConnectivitySettingUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectivitySettingUpdateResponse> {
    return this._client.patch(`/accounts/${accountIdentifier}/zerotrust/connectivity_settings`, {
      body,
      ...options,
    });
  }

  /**
   * Gets the Zero Trust Connectivity Settings for the given account.
   */
  list(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectivitySettingListResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/zerotrust/connectivity_settings`, options);
  }
}

export interface ConnectivitySettingUpdateResponse {
  errors?: Array<ConnectivitySettingUpdateResponse.Error>;

  messages?: Array<ConnectivitySettingUpdateResponse.Message>;

  result?: ConnectivitySettingUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ConnectivitySettingUpdateResponse {
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
     * A flag to enable the ICMP proxy for the account network.
     */
    icmp_proxy_enabled?: boolean;

    /**
     * A flag to enable WARP to WARP traffic.
     */
    offramp_warp_enabled?: boolean;
  }
}

export interface ConnectivitySettingListResponse {
  errors?: Array<ConnectivitySettingListResponse.Error>;

  messages?: Array<ConnectivitySettingListResponse.Message>;

  result?: ConnectivitySettingListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ConnectivitySettingListResponse {
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
     * A flag to enable the ICMP proxy for the account network.
     */
    icmp_proxy_enabled?: boolean;

    /**
     * A flag to enable WARP to WARP traffic.
     */
    offramp_warp_enabled?: boolean;
  }
}

export interface ConnectivitySettingUpdateParams {
  /**
   * A flag to enable the ICMP proxy for the account network.
   */
  icmp_proxy_enabled?: boolean;

  /**
   * A flag to enable WARP to WARP traffic.
   */
  offramp_warp_enabled?: boolean;
}

export namespace ConnectivitySettings {
  export import ConnectivitySettingUpdateResponse = ConnectivitySettingsAPI.ConnectivitySettingUpdateResponse;
  export import ConnectivitySettingListResponse = ConnectivitySettingsAPI.ConnectivitySettingListResponse;
  export import ConnectivitySettingUpdateParams = ConnectivitySettingsAPI.ConnectivitySettingUpdateParams;
}
