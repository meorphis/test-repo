// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as IncludesAPI from 'cloudflare/resources/accounts/devices/policies/includes';

export class Includes extends APIResource {
  /**
   * Fetches the list of routes included in the WARP client's tunnel.
   */
  devicesGetSplitTunnelIncludeList(
    identifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IncludeDevicesGetSplitTunnelIncludeListResponse> {
    return this._client.get(`/accounts/${identifier}/devices/policy/include`, options);
  }

  /**
   * Fetches the list of routes included in the WARP client's tunnel for a specific
   * device settings profile.
   */
  devicesGetSplitTunnelIncludeListForADeviceSettingsPolicy(
    identifier: unknown,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IncludeDevicesGetSplitTunnelIncludeListForADeviceSettingsPolicyResponse> {
    return this._client.get(`/accounts/${identifier}/devices/policy/${uuid}/include`, options);
  }

  /**
   * Sets the list of routes included in the WARP client's tunnel.
   */
  devicesSetSplitTunnelIncludeList(
    identifier: unknown,
    body: IncludeDevicesSetSplitTunnelIncludeListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IncludeDevicesSetSplitTunnelIncludeListResponse> {
    return this._client.put(`/accounts/${identifier}/devices/policy/include`, { body, ...options });
  }

  /**
   * Sets the list of routes included in the WARP client's tunnel for a specific
   * device settings profile.
   */
  devicesSetSplitTunnelIncludeListForADeviceSettingsPolicy(
    identifier: unknown,
    uuid: string,
    body: IncludeDevicesSetSplitTunnelIncludeListForADeviceSettingsPolicyParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IncludeDevicesSetSplitTunnelIncludeListForADeviceSettingsPolicyResponse> {
    return this._client.put(`/accounts/${identifier}/devices/policy/${uuid}/include`, { body, ...options });
  }
}

export interface IncludeDevicesGetSplitTunnelIncludeListResponse {
  errors?: Array<IncludeDevicesGetSplitTunnelIncludeListResponse.Error>;

  messages?: Array<IncludeDevicesGetSplitTunnelIncludeListResponse.Message>;

  result?: Array<IncludeDevicesGetSplitTunnelIncludeListResponse.Result>;

  result_info?: IncludeDevicesGetSplitTunnelIncludeListResponse.ResultInfo;

  /**
   * Whether the API call was successful.
   */
  success?: true;
}

export namespace IncludeDevicesGetSplitTunnelIncludeListResponse {
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
     * The address in CIDR format to include in the tunnel. If address is present, host
     * must not be present.
     */
    address: string;

    /**
     * A description of the split tunnel item, displayed in the client UI.
     */
    description: string;

    /**
     * The domain name to include in the tunnel. If host is present, address must not
     * be present.
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

export interface IncludeDevicesGetSplitTunnelIncludeListForADeviceSettingsPolicyResponse {
  errors?: Array<IncludeDevicesGetSplitTunnelIncludeListForADeviceSettingsPolicyResponse.Error>;

  messages?: Array<IncludeDevicesGetSplitTunnelIncludeListForADeviceSettingsPolicyResponse.Message>;

  result?: Array<IncludeDevicesGetSplitTunnelIncludeListForADeviceSettingsPolicyResponse.Result>;

  result_info?: IncludeDevicesGetSplitTunnelIncludeListForADeviceSettingsPolicyResponse.ResultInfo;

  /**
   * Whether the API call was successful.
   */
  success?: true;
}

export namespace IncludeDevicesGetSplitTunnelIncludeListForADeviceSettingsPolicyResponse {
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
     * The address in CIDR format to include in the tunnel. If address is present, host
     * must not be present.
     */
    address: string;

    /**
     * A description of the split tunnel item, displayed in the client UI.
     */
    description: string;

    /**
     * The domain name to include in the tunnel. If host is present, address must not
     * be present.
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

export interface IncludeDevicesSetSplitTunnelIncludeListResponse {
  errors?: Array<IncludeDevicesSetSplitTunnelIncludeListResponse.Error>;

  messages?: Array<IncludeDevicesSetSplitTunnelIncludeListResponse.Message>;

  result?: Array<IncludeDevicesSetSplitTunnelIncludeListResponse.Result>;

  result_info?: IncludeDevicesSetSplitTunnelIncludeListResponse.ResultInfo;

  /**
   * Whether the API call was successful.
   */
  success?: true;
}

export namespace IncludeDevicesSetSplitTunnelIncludeListResponse {
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
     * The address in CIDR format to include in the tunnel. If address is present, host
     * must not be present.
     */
    address: string;

    /**
     * A description of the split tunnel item, displayed in the client UI.
     */
    description: string;

    /**
     * The domain name to include in the tunnel. If host is present, address must not
     * be present.
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

export interface IncludeDevicesSetSplitTunnelIncludeListForADeviceSettingsPolicyResponse {
  errors?: Array<IncludeDevicesSetSplitTunnelIncludeListForADeviceSettingsPolicyResponse.Error>;

  messages?: Array<IncludeDevicesSetSplitTunnelIncludeListForADeviceSettingsPolicyResponse.Message>;

  result?: Array<IncludeDevicesSetSplitTunnelIncludeListForADeviceSettingsPolicyResponse.Result>;

  result_info?: IncludeDevicesSetSplitTunnelIncludeListForADeviceSettingsPolicyResponse.ResultInfo;

  /**
   * Whether the API call was successful.
   */
  success?: true;
}

export namespace IncludeDevicesSetSplitTunnelIncludeListForADeviceSettingsPolicyResponse {
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
     * The address in CIDR format to include in the tunnel. If address is present, host
     * must not be present.
     */
    address: string;

    /**
     * A description of the split tunnel item, displayed in the client UI.
     */
    description: string;

    /**
     * The domain name to include in the tunnel. If host is present, address must not
     * be present.
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

export type IncludeDevicesSetSplitTunnelIncludeListParams =
  Array<IncludeDevicesSetSplitTunnelIncludeListParams.Body>;

export namespace IncludeDevicesSetSplitTunnelIncludeListParams {
  export interface Body {
    /**
     * The address in CIDR format to include in the tunnel. If address is present, host
     * must not be present.
     */
    address: string;

    /**
     * A description of the split tunnel item, displayed in the client UI.
     */
    description: string;

    /**
     * The domain name to include in the tunnel. If host is present, address must not
     * be present.
     */
    host?: string;
  }
}

export type IncludeDevicesSetSplitTunnelIncludeListForADeviceSettingsPolicyParams =
  Array<IncludeDevicesSetSplitTunnelIncludeListForADeviceSettingsPolicyParams.Body>;

export namespace IncludeDevicesSetSplitTunnelIncludeListForADeviceSettingsPolicyParams {
  export interface Body {
    /**
     * The address in CIDR format to include in the tunnel. If address is present, host
     * must not be present.
     */
    address: string;

    /**
     * A description of the split tunnel item, displayed in the client UI.
     */
    description: string;

    /**
     * The domain name to include in the tunnel. If host is present, address must not
     * be present.
     */
    host?: string;
  }
}

export namespace Includes {
  export import IncludeDevicesGetSplitTunnelIncludeListResponse = IncludesAPI.IncludeDevicesGetSplitTunnelIncludeListResponse;
  export import IncludeDevicesGetSplitTunnelIncludeListForADeviceSettingsPolicyResponse = IncludesAPI.IncludeDevicesGetSplitTunnelIncludeListForADeviceSettingsPolicyResponse;
  export import IncludeDevicesSetSplitTunnelIncludeListResponse = IncludesAPI.IncludeDevicesSetSplitTunnelIncludeListResponse;
  export import IncludeDevicesSetSplitTunnelIncludeListForADeviceSettingsPolicyResponse = IncludesAPI.IncludeDevicesSetSplitTunnelIncludeListForADeviceSettingsPolicyResponse;
  export import IncludeDevicesSetSplitTunnelIncludeListParams = IncludesAPI.IncludeDevicesSetSplitTunnelIncludeListParams;
  export import IncludeDevicesSetSplitTunnelIncludeListForADeviceSettingsPolicyParams = IncludesAPI.IncludeDevicesSetSplitTunnelIncludeListForADeviceSettingsPolicyParams;
}
