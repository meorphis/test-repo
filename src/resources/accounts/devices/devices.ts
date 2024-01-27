// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DevicesAPI from 'cloudflare/resources/accounts/devices/devices';
import * as DexTestsAPI from 'cloudflare/resources/accounts/devices/dex-tests';
import * as NetworksAPI from 'cloudflare/resources/accounts/devices/networks';
import * as OverrideCodesAPI from 'cloudflare/resources/accounts/devices/override-codes';
import * as RevokesAPI from 'cloudflare/resources/accounts/devices/revokes';
import * as SettingsAPI from 'cloudflare/resources/accounts/devices/settings';
import * as UnrevokesAPI from 'cloudflare/resources/accounts/devices/unrevokes';
import * as PoliciesAPI from 'cloudflare/resources/accounts/devices/policies/policies';
import * as PosturesAPI from 'cloudflare/resources/accounts/devices/postures/postures';

export class Devices extends APIResource {
  dexTests: DexTestsAPI.DexTests = new DexTestsAPI.DexTests(this._client);
  networks: NetworksAPI.Networks = new NetworksAPI.Networks(this._client);
  policies: PoliciesAPI.Policies = new PoliciesAPI.Policies(this._client);
  postures: PosturesAPI.Postures = new PosturesAPI.Postures(this._client);
  revokes: RevokesAPI.Revokes = new RevokesAPI.Revokes(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
  unrevokes: UnrevokesAPI.Unrevokes = new UnrevokesAPI.Unrevokes(this._client);
  overrideCodes: OverrideCodesAPI.OverrideCodes = new OverrideCodesAPI.OverrideCodes(this._client);

  /**
   * Fetches details for a single device.
   */
  retrieve(
    identifier: unknown,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DeviceRetrieveResponse> {
    return this._client.get(`/accounts/${identifier}/devices/${uuid}`, options);
  }

  /**
   * Fetches a list of enrolled devices.
   */
  devicesListDevices(
    identifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DeviceDevicesListDevicesResponse> {
    return this._client.get(`/accounts/${identifier}/devices`, options);
  }
}

export interface DeviceRetrieveResponse {
  errors?: Array<DeviceRetrieveResponse.Error>;

  messages?: Array<DeviceRetrieveResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful.
   */
  success?: true;
}

export namespace DeviceRetrieveResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface DeviceDevicesListDevicesResponse {
  errors?: Array<DeviceDevicesListDevicesResponse.Error>;

  messages?: Array<DeviceDevicesListDevicesResponse.Message>;

  result?: Array<DeviceDevicesListDevicesResponse.Result>;

  result_info?: DeviceDevicesListDevicesResponse.ResultInfo;

  /**
   * Whether the API call was successful.
   */
  success?: true;
}

export namespace DeviceDevicesListDevicesResponse {
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
     * Device ID.
     */
    id?: string;

    /**
     * When the device was created.
     */
    created?: string;

    /**
     * True if the device was deleted.
     */
    deleted?: boolean;

    device_type?: 'windows' | 'mac' | 'linux' | 'android' | 'ios';

    /**
     * IPv4 or IPv6 address.
     */
    ip?: string;

    /**
     * The device's public key.
     */
    key?: string;

    /**
     * When the device last connected to Cloudflare services.
     */
    last_seen?: string;

    /**
     * The device mac address.
     */
    mac_address?: string;

    /**
     * The device manufacturer name.
     */
    manufacturer?: string;

    /**
     * The device model name.
     */
    model?: string;

    /**
     * The device name.
     */
    name?: string;

    /**
     * The Linux distro name.
     */
    os_distro_name?: string;

    /**
     * The Linux distro revision.
     */
    os_distro_revision?: string;

    /**
     * The operating system version.
     */
    os_version?: string;

    /**
     * The operating system version extra parameter.
     */
    os_version_extra?: string;

    /**
     * When the device was revoked.
     */
    revoked_at?: string;

    /**
     * The device serial number.
     */
    serial_number?: string;

    /**
     * When the device was updated.
     */
    updated?: string;

    user?: Result.User;

    /**
     * The WARP client version.
     */
    version?: string;
  }

  export namespace Result {
    export interface User {
      /**
       * UUID
       */
      id?: string;

      /**
       * The contact email address of the user.
       */
      email?: string;

      /**
       * The enrolled device user's name.
       */
      name?: string;
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

export namespace Devices {
  export import DeviceRetrieveResponse = DevicesAPI.DeviceRetrieveResponse;
  export import DeviceDevicesListDevicesResponse = DevicesAPI.DeviceDevicesListDevicesResponse;
  export import DexTests = DexTestsAPI.DexTests;
  export import DexTestRetrieveResponse = DexTestsAPI.DexTestRetrieveResponse;
  export import DexTestUpdateResponse = DexTestsAPI.DexTestUpdateResponse;
  export import DexTestDeleteResponse = DexTestsAPI.DexTestDeleteResponse;
  export import DexTestDeviceDexTestCreateDeviceDexTestResponse = DexTestsAPI.DexTestDeviceDexTestCreateDeviceDexTestResponse;
  export import DexTestDeviceDexTestDetailsResponse = DexTestsAPI.DexTestDeviceDexTestDetailsResponse;
  export import DexTestUpdateParams = DexTestsAPI.DexTestUpdateParams;
  export import DexTestDeviceDexTestCreateDeviceDexTestParams = DexTestsAPI.DexTestDeviceDexTestCreateDeviceDexTestParams;
  export import Networks = NetworksAPI.Networks;
  export import NetworkRetrieveResponse = NetworksAPI.NetworkRetrieveResponse;
  export import NetworkUpdateResponse = NetworksAPI.NetworkUpdateResponse;
  export import NetworkDeleteResponse = NetworksAPI.NetworkDeleteResponse;
  export import NetworkDeviceManagedNetworksCreateDeviceManagedNetworkResponse = NetworksAPI.NetworkDeviceManagedNetworksCreateDeviceManagedNetworkResponse;
  export import NetworkDeviceManagedNetworksListDeviceManagedNetworksResponse = NetworksAPI.NetworkDeviceManagedNetworksListDeviceManagedNetworksResponse;
  export import NetworkUpdateParams = NetworksAPI.NetworkUpdateParams;
  export import NetworkDeviceManagedNetworksCreateDeviceManagedNetworkParams = NetworksAPI.NetworkDeviceManagedNetworksCreateDeviceManagedNetworkParams;
  export import Policies = PoliciesAPI.Policies;
  export import PolicyRetrieveResponse = PoliciesAPI.PolicyRetrieveResponse;
  export import PolicyUpdateResponse = PoliciesAPI.PolicyUpdateResponse;
  export import PolicyDeleteResponse = PoliciesAPI.PolicyDeleteResponse;
  export import PolicyDevicesCreateDeviceSettingsPolicyResponse = PoliciesAPI.PolicyDevicesCreateDeviceSettingsPolicyResponse;
  export import PolicyDevicesGetDefaultDeviceSettingsPolicyResponse = PoliciesAPI.PolicyDevicesGetDefaultDeviceSettingsPolicyResponse;
  export import PolicyDevicesListDeviceSettingsPoliciesResponse = PoliciesAPI.PolicyDevicesListDeviceSettingsPoliciesResponse;
  export import PolicyDevicesUpdateDefaultDeviceSettingsPolicyResponse = PoliciesAPI.PolicyDevicesUpdateDefaultDeviceSettingsPolicyResponse;
  export import PolicyUpdateParams = PoliciesAPI.PolicyUpdateParams;
  export import PolicyDevicesCreateDeviceSettingsPolicyParams = PoliciesAPI.PolicyDevicesCreateDeviceSettingsPolicyParams;
  export import PolicyDevicesUpdateDefaultDeviceSettingsPolicyParams = PoliciesAPI.PolicyDevicesUpdateDefaultDeviceSettingsPolicyParams;
  export import Postures = PosturesAPI.Postures;
  export import PostureRetrieveResponse = PosturesAPI.PostureRetrieveResponse;
  export import PostureUpdateResponse = PosturesAPI.PostureUpdateResponse;
  export import PostureDeleteResponse = PosturesAPI.PostureDeleteResponse;
  export import PostureDevicePostureRulesCreateDevicePostureRuleResponse = PosturesAPI.PostureDevicePostureRulesCreateDevicePostureRuleResponse;
  export import PostureDevicePostureRulesListDevicePostureRulesResponse = PosturesAPI.PostureDevicePostureRulesListDevicePostureRulesResponse;
  export import PostureUpdateParams = PosturesAPI.PostureUpdateParams;
  export import PostureDevicePostureRulesCreateDevicePostureRuleParams = PosturesAPI.PostureDevicePostureRulesCreateDevicePostureRuleParams;
  export import Revokes = RevokesAPI.Revokes;
  export import RevokeDevicesRevokeDevicesResponse = RevokesAPI.RevokeDevicesRevokeDevicesResponse;
  export import RevokeDevicesRevokeDevicesParams = RevokesAPI.RevokeDevicesRevokeDevicesParams;
  export import Settings = SettingsAPI.Settings;
  export import SettingZeroTrustAccountsGetDeviceSettingsForZeroTrustAccountResponse = SettingsAPI.SettingZeroTrustAccountsGetDeviceSettingsForZeroTrustAccountResponse;
  export import SettingZeroTrustAccountsUpdateDeviceSettingsForTheZeroTrustAccountResponse = SettingsAPI.SettingZeroTrustAccountsUpdateDeviceSettingsForTheZeroTrustAccountResponse;
  export import SettingZeroTrustAccountsUpdateDeviceSettingsForTheZeroTrustAccountParams = SettingsAPI.SettingZeroTrustAccountsUpdateDeviceSettingsForTheZeroTrustAccountParams;
  export import Unrevokes = UnrevokesAPI.Unrevokes;
  export import UnrevokeDevicesUnrevokeDevicesResponse = UnrevokesAPI.UnrevokeDevicesUnrevokeDevicesResponse;
  export import UnrevokeDevicesUnrevokeDevicesParams = UnrevokesAPI.UnrevokeDevicesUnrevokeDevicesParams;
  export import OverrideCodes = OverrideCodesAPI.OverrideCodes;
  export import OverrideCodeDevicesListAdminOverrideCodeForDeviceResponse = OverrideCodesAPI.OverrideCodeDevicesListAdminOverrideCodeForDeviceResponse;
}
