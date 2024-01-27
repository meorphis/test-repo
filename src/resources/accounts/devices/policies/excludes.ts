// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ExcludesAPI from 'cloudflare/resources/accounts/devices/policies/excludes';

export class Excludes extends APIResource {
  /**
   * Fetches the list of routes excluded from the WARP client's tunnel.
   */
  devicesGetSplitTunnelExcludeList(
    identifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExcludeDevicesGetSplitTunnelExcludeListResponse> {
    return this._client.get(`/accounts/${identifier}/devices/policy/exclude`, options);
  }

  /**
   * Fetches the list of routes excluded from the WARP client's tunnel for a specific
   * device settings profile.
   */
  devicesGetSplitTunnelExcludeListForADeviceSettingsPolicy(
    identifier: unknown,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExcludeDevicesGetSplitTunnelExcludeListForADeviceSettingsPolicyResponse> {
    return this._client.get(`/accounts/${identifier}/devices/policy/${uuid}/exclude`, options);
  }

  /**
   * Sets the list of routes excluded from the WARP client's tunnel.
   */
  devicesSetSplitTunnelExcludeList(
    identifier: unknown,
    body: ExcludeDevicesSetSplitTunnelExcludeListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExcludeDevicesSetSplitTunnelExcludeListResponse> {
    return this._client.put(`/accounts/${identifier}/devices/policy/exclude`, { body, ...options });
  }

  /**
   * Sets the list of routes excluded from the WARP client's tunnel for a specific
   * device settings profile.
   */
  devicesSetSplitTunnelExcludeListForADeviceSettingsPolicy(
    identifier: unknown,
    uuid: string,
    body: ExcludeDevicesSetSplitTunnelExcludeListForADeviceSettingsPolicyParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExcludeDevicesSetSplitTunnelExcludeListForADeviceSettingsPolicyResponse> {
    return this._client.put(`/accounts/${identifier}/devices/policy/${uuid}/exclude`, { body, ...options });
  }
}

export interface ExcludeDevicesGetSplitTunnelExcludeListResponse {
  errors?: Array<ExcludeDevicesGetSplitTunnelExcludeListResponse.Error>;

  messages?: Array<ExcludeDevicesGetSplitTunnelExcludeListResponse.Message>;

  result?: Array<ExcludeDevicesGetSplitTunnelExcludeListResponse.Result>;

  result_info?: ExcludeDevicesGetSplitTunnelExcludeListResponse.ResultInfo;

  /**
   * Whether the API call was successful.
   */
  success?: true;
}

export namespace ExcludeDevicesGetSplitTunnelExcludeListResponse {
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
     * The address in CIDR format to exclude from the tunnel. If `address` is present,
     * `host` must not be present.
     */
    address: string;

    /**
     * A description of the Split Tunnel item, displayed in the client UI.
     */
    description: string;

    /**
     * The domain name to exclude from the tunnel. If `host` is present, `address` must
     * not be present.
     */
    host?: string;
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

export interface ExcludeDevicesGetSplitTunnelExcludeListForADeviceSettingsPolicyResponse {
  errors?: Array<ExcludeDevicesGetSplitTunnelExcludeListForADeviceSettingsPolicyResponse.Error>;

  messages?: Array<ExcludeDevicesGetSplitTunnelExcludeListForADeviceSettingsPolicyResponse.Message>;

  result?: Array<ExcludeDevicesGetSplitTunnelExcludeListForADeviceSettingsPolicyResponse.Result>;

  result_info?: ExcludeDevicesGetSplitTunnelExcludeListForADeviceSettingsPolicyResponse.ResultInfo;

  /**
   * Whether the API call was successful.
   */
  success?: true;
}

export namespace ExcludeDevicesGetSplitTunnelExcludeListForADeviceSettingsPolicyResponse {
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
     * The address in CIDR format to exclude from the tunnel. If `address` is present,
     * `host` must not be present.
     */
    address: string;

    /**
     * A description of the Split Tunnel item, displayed in the client UI.
     */
    description: string;

    /**
     * The domain name to exclude from the tunnel. If `host` is present, `address` must
     * not be present.
     */
    host?: string;
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

export interface ExcludeDevicesSetSplitTunnelExcludeListResponse {
  errors?: Array<ExcludeDevicesSetSplitTunnelExcludeListResponse.Error>;

  messages?: Array<ExcludeDevicesSetSplitTunnelExcludeListResponse.Message>;

  result?: Array<ExcludeDevicesSetSplitTunnelExcludeListResponse.Result>;

  result_info?: ExcludeDevicesSetSplitTunnelExcludeListResponse.ResultInfo;

  /**
   * Whether the API call was successful.
   */
  success?: true;
}

export namespace ExcludeDevicesSetSplitTunnelExcludeListResponse {
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
     * The address in CIDR format to exclude from the tunnel. If `address` is present,
     * `host` must not be present.
     */
    address: string;

    /**
     * A description of the Split Tunnel item, displayed in the client UI.
     */
    description: string;

    /**
     * The domain name to exclude from the tunnel. If `host` is present, `address` must
     * not be present.
     */
    host?: string;
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

export interface ExcludeDevicesSetSplitTunnelExcludeListForADeviceSettingsPolicyResponse {
  errors?: Array<ExcludeDevicesSetSplitTunnelExcludeListForADeviceSettingsPolicyResponse.Error>;

  messages?: Array<ExcludeDevicesSetSplitTunnelExcludeListForADeviceSettingsPolicyResponse.Message>;

  result?: Array<ExcludeDevicesSetSplitTunnelExcludeListForADeviceSettingsPolicyResponse.Result>;

  result_info?: ExcludeDevicesSetSplitTunnelExcludeListForADeviceSettingsPolicyResponse.ResultInfo;

  /**
   * Whether the API call was successful.
   */
  success?: true;
}

export namespace ExcludeDevicesSetSplitTunnelExcludeListForADeviceSettingsPolicyResponse {
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
     * The address in CIDR format to exclude from the tunnel. If `address` is present,
     * `host` must not be present.
     */
    address: string;

    /**
     * A description of the Split Tunnel item, displayed in the client UI.
     */
    description: string;

    /**
     * The domain name to exclude from the tunnel. If `host` is present, `address` must
     * not be present.
     */
    host?: string;
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

export type ExcludeDevicesSetSplitTunnelExcludeListParams =
  Array<ExcludeDevicesSetSplitTunnelExcludeListParams.Body>;

export namespace ExcludeDevicesSetSplitTunnelExcludeListParams {
  export interface Body {
    /**
     * The address in CIDR format to exclude from the tunnel. If `address` is present,
     * `host` must not be present.
     */
    address: string;

    /**
     * A description of the Split Tunnel item, displayed in the client UI.
     */
    description: string;

    /**
     * The domain name to exclude from the tunnel. If `host` is present, `address` must
     * not be present.
     */
    host?: string;
  }
}

export type ExcludeDevicesSetSplitTunnelExcludeListForADeviceSettingsPolicyParams =
  Array<ExcludeDevicesSetSplitTunnelExcludeListForADeviceSettingsPolicyParams.Body>;

export namespace ExcludeDevicesSetSplitTunnelExcludeListForADeviceSettingsPolicyParams {
  export interface Body {
    /**
     * The address in CIDR format to exclude from the tunnel. If `address` is present,
     * `host` must not be present.
     */
    address: string;

    /**
     * A description of the Split Tunnel item, displayed in the client UI.
     */
    description: string;

    /**
     * The domain name to exclude from the tunnel. If `host` is present, `address` must
     * not be present.
     */
    host?: string;
  }
}

export namespace Excludes {
  export import ExcludeDevicesGetSplitTunnelExcludeListResponse = ExcludesAPI.ExcludeDevicesGetSplitTunnelExcludeListResponse;
  export import ExcludeDevicesGetSplitTunnelExcludeListForADeviceSettingsPolicyResponse = ExcludesAPI.ExcludeDevicesGetSplitTunnelExcludeListForADeviceSettingsPolicyResponse;
  export import ExcludeDevicesSetSplitTunnelExcludeListResponse = ExcludesAPI.ExcludeDevicesSetSplitTunnelExcludeListResponse;
  export import ExcludeDevicesSetSplitTunnelExcludeListForADeviceSettingsPolicyResponse = ExcludesAPI.ExcludeDevicesSetSplitTunnelExcludeListForADeviceSettingsPolicyResponse;
  export import ExcludeDevicesSetSplitTunnelExcludeListParams = ExcludesAPI.ExcludeDevicesSetSplitTunnelExcludeListParams;
  export import ExcludeDevicesSetSplitTunnelExcludeListForADeviceSettingsPolicyParams = ExcludesAPI.ExcludeDevicesSetSplitTunnelExcludeListForADeviceSettingsPolicyParams;
}
