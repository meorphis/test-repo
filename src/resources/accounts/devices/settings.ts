// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SettingsAPI from 'cloudflare/resources/accounts/devices/settings';

export class Settings extends APIResource {
  /**
   * Describes the current device settings for a Zero Trust account.
   */
  zeroTrustAccountsGetDeviceSettingsForZeroTrustAccount(
    identifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SettingZeroTrustAccountsGetDeviceSettingsForZeroTrustAccountResponse> {
    return this._client.get(`/accounts/${identifier}/devices/settings`, options);
  }

  /**
   * Updates the current device settings for a Zero Trust account.
   */
  zeroTrustAccountsUpdateDeviceSettingsForTheZeroTrustAccount(
    identifier: unknown,
    body: SettingZeroTrustAccountsUpdateDeviceSettingsForTheZeroTrustAccountParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SettingZeroTrustAccountsUpdateDeviceSettingsForTheZeroTrustAccountResponse> {
    return this._client.put(`/accounts/${identifier}/devices/settings`, { body, ...options });
  }
}

export interface SettingZeroTrustAccountsGetDeviceSettingsForZeroTrustAccountResponse {
  errors?: Array<SettingZeroTrustAccountsGetDeviceSettingsForZeroTrustAccountResponse.Error>;

  messages?: Array<SettingZeroTrustAccountsGetDeviceSettingsForZeroTrustAccountResponse.Message>;

  result?: SettingZeroTrustAccountsGetDeviceSettingsForZeroTrustAccountResponse.Result;

  /**
   * Whether the API call was successful.
   */
  success?: true;
}

export namespace SettingZeroTrustAccountsGetDeviceSettingsForZeroTrustAccountResponse {
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
     * Enable gateway proxy filtering on TCP.
     */
    gateway_proxy_enabled?: boolean;

    /**
     * Enable gateway proxy filtering on UDP.
     */
    gateway_udp_proxy_enabled?: boolean;

    /**
     * Enable installation of cloudflare managed root certificate.
     */
    root_certificate_installation_enabled?: boolean;

    /**
     * Enable using CGNAT virtual IPv4.
     */
    use_zt_virtual_ip?: boolean;
  }
}

export interface SettingZeroTrustAccountsUpdateDeviceSettingsForTheZeroTrustAccountResponse {
  errors?: Array<SettingZeroTrustAccountsUpdateDeviceSettingsForTheZeroTrustAccountResponse.Error>;

  messages?: Array<SettingZeroTrustAccountsUpdateDeviceSettingsForTheZeroTrustAccountResponse.Message>;

  result?: SettingZeroTrustAccountsUpdateDeviceSettingsForTheZeroTrustAccountResponse.Result;

  /**
   * Whether the API call was successful.
   */
  success?: true;
}

export namespace SettingZeroTrustAccountsUpdateDeviceSettingsForTheZeroTrustAccountResponse {
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
     * Enable gateway proxy filtering on TCP.
     */
    gateway_proxy_enabled?: boolean;

    /**
     * Enable gateway proxy filtering on UDP.
     */
    gateway_udp_proxy_enabled?: boolean;

    /**
     * Enable installation of cloudflare managed root certificate.
     */
    root_certificate_installation_enabled?: boolean;

    /**
     * Enable using CGNAT virtual IPv4.
     */
    use_zt_virtual_ip?: boolean;
  }
}

export interface SettingZeroTrustAccountsUpdateDeviceSettingsForTheZeroTrustAccountParams {
  /**
   * Enable gateway proxy filtering on TCP.
   */
  gateway_proxy_enabled?: boolean;

  /**
   * Enable gateway proxy filtering on UDP.
   */
  gateway_udp_proxy_enabled?: boolean;

  /**
   * Enable installation of cloudflare managed root certificate.
   */
  root_certificate_installation_enabled?: boolean;

  /**
   * Enable using CGNAT virtual IPv4.
   */
  use_zt_virtual_ip?: boolean;
}

export namespace Settings {
  export import SettingZeroTrustAccountsGetDeviceSettingsForZeroTrustAccountResponse = SettingsAPI.SettingZeroTrustAccountsGetDeviceSettingsForZeroTrustAccountResponse;
  export import SettingZeroTrustAccountsUpdateDeviceSettingsForTheZeroTrustAccountResponse = SettingsAPI.SettingZeroTrustAccountsUpdateDeviceSettingsForTheZeroTrustAccountResponse;
  export import SettingZeroTrustAccountsUpdateDeviceSettingsForTheZeroTrustAccountParams = SettingsAPI.SettingZeroTrustAccountsUpdateDeviceSettingsForTheZeroTrustAccountParams;
}
