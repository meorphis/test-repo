// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as FallbackDomainsAPI from 'cloudflare/resources/accounts/devices/policies/fallback-domains';

export class FallbackDomains extends APIResource {
  /**
   * Fetches a list of domains to bypass Gateway DNS resolution. These domains will
   * use the specified local DNS resolver instead.
   */
  devicesGetLocalDomainFallbackList(
    identifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FallbackDomainDevicesGetLocalDomainFallbackListResponse> {
    return this._client.get(`/accounts/${identifier}/devices/policy/fallback_domains`, options);
  }

  /**
   * Fetches the list of domains to bypass Gateway DNS resolution from a specified
   * device settings profile. These domains will use the specified local DNS resolver
   * instead.
   */
  devicesGetLocalDomainFallbackListForADeviceSettingsPolicy(
    identifier: unknown,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FallbackDomainDevicesGetLocalDomainFallbackListForADeviceSettingsPolicyResponse> {
    return this._client.get(`/accounts/${identifier}/devices/policy/${uuid}/fallback_domains`, options);
  }

  /**
   * Sets the list of domains to bypass Gateway DNS resolution. These domains will
   * use the specified local DNS resolver instead.
   */
  devicesSetLocalDomainFallbackList(
    identifier: unknown,
    body: FallbackDomainDevicesSetLocalDomainFallbackListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FallbackDomainDevicesSetLocalDomainFallbackListResponse> {
    return this._client.put(`/accounts/${identifier}/devices/policy/fallback_domains`, { body, ...options });
  }

  /**
   * Sets the list of domains to bypass Gateway DNS resolution. These domains will
   * use the specified local DNS resolver instead. This will only apply to the
   * specified device settings profile.
   */
  devicesSetLocalDomainFallbackListForADeviceSettingsPolicy(
    identifier: unknown,
    uuid: string,
    body: FallbackDomainDevicesSetLocalDomainFallbackListForADeviceSettingsPolicyParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FallbackDomainDevicesSetLocalDomainFallbackListForADeviceSettingsPolicyResponse> {
    return this._client.put(`/accounts/${identifier}/devices/policy/${uuid}/fallback_domains`, {
      body,
      ...options,
    });
  }
}

export interface FallbackDomainDevicesGetLocalDomainFallbackListResponse {
  errors?: Array<FallbackDomainDevicesGetLocalDomainFallbackListResponse.Error>;

  messages?: Array<FallbackDomainDevicesGetLocalDomainFallbackListResponse.Message>;

  result?: Array<FallbackDomainDevicesGetLocalDomainFallbackListResponse.Result>;

  result_info?: FallbackDomainDevicesGetLocalDomainFallbackListResponse.ResultInfo;

  /**
   * Whether the API call was successful.
   */
  success?: true;
}

export namespace FallbackDomainDevicesGetLocalDomainFallbackListResponse {
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
     * The domain suffix to match when resolving locally.
     */
    suffix: string;

    /**
     * A description of the fallback domain, displayed in the client UI.
     */
    description?: string;

    /**
     * A list of IP addresses to handle domain resolution.
     */
    dns_server?: Array<unknown>;
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

export interface FallbackDomainDevicesGetLocalDomainFallbackListForADeviceSettingsPolicyResponse {
  errors?: Array<FallbackDomainDevicesGetLocalDomainFallbackListForADeviceSettingsPolicyResponse.Error>;

  messages?: Array<FallbackDomainDevicesGetLocalDomainFallbackListForADeviceSettingsPolicyResponse.Message>;

  result?: Array<FallbackDomainDevicesGetLocalDomainFallbackListForADeviceSettingsPolicyResponse.Result>;

  result_info?: FallbackDomainDevicesGetLocalDomainFallbackListForADeviceSettingsPolicyResponse.ResultInfo;

  /**
   * Whether the API call was successful.
   */
  success?: true;
}

export namespace FallbackDomainDevicesGetLocalDomainFallbackListForADeviceSettingsPolicyResponse {
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
     * The domain suffix to match when resolving locally.
     */
    suffix: string;

    /**
     * A description of the fallback domain, displayed in the client UI.
     */
    description?: string;

    /**
     * A list of IP addresses to handle domain resolution.
     */
    dns_server?: Array<unknown>;
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

export interface FallbackDomainDevicesSetLocalDomainFallbackListResponse {
  errors?: Array<FallbackDomainDevicesSetLocalDomainFallbackListResponse.Error>;

  messages?: Array<FallbackDomainDevicesSetLocalDomainFallbackListResponse.Message>;

  result?: Array<FallbackDomainDevicesSetLocalDomainFallbackListResponse.Result>;

  result_info?: FallbackDomainDevicesSetLocalDomainFallbackListResponse.ResultInfo;

  /**
   * Whether the API call was successful.
   */
  success?: true;
}

export namespace FallbackDomainDevicesSetLocalDomainFallbackListResponse {
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
     * The domain suffix to match when resolving locally.
     */
    suffix: string;

    /**
     * A description of the fallback domain, displayed in the client UI.
     */
    description?: string;

    /**
     * A list of IP addresses to handle domain resolution.
     */
    dns_server?: Array<unknown>;
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

export interface FallbackDomainDevicesSetLocalDomainFallbackListForADeviceSettingsPolicyResponse {
  errors?: Array<FallbackDomainDevicesSetLocalDomainFallbackListForADeviceSettingsPolicyResponse.Error>;

  messages?: Array<FallbackDomainDevicesSetLocalDomainFallbackListForADeviceSettingsPolicyResponse.Message>;

  result?: Array<FallbackDomainDevicesSetLocalDomainFallbackListForADeviceSettingsPolicyResponse.Result>;

  result_info?: FallbackDomainDevicesSetLocalDomainFallbackListForADeviceSettingsPolicyResponse.ResultInfo;

  /**
   * Whether the API call was successful.
   */
  success?: true;
}

export namespace FallbackDomainDevicesSetLocalDomainFallbackListForADeviceSettingsPolicyResponse {
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
     * The domain suffix to match when resolving locally.
     */
    suffix: string;

    /**
     * A description of the fallback domain, displayed in the client UI.
     */
    description?: string;

    /**
     * A list of IP addresses to handle domain resolution.
     */
    dns_server?: Array<unknown>;
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

export type FallbackDomainDevicesSetLocalDomainFallbackListParams =
  Array<FallbackDomainDevicesSetLocalDomainFallbackListParams.Body>;

export namespace FallbackDomainDevicesSetLocalDomainFallbackListParams {
  export interface Body {
    /**
     * The domain suffix to match when resolving locally.
     */
    suffix: string;

    /**
     * A description of the fallback domain, displayed in the client UI.
     */
    description?: string;

    /**
     * A list of IP addresses to handle domain resolution.
     */
    dns_server?: Array<unknown>;
  }
}

export type FallbackDomainDevicesSetLocalDomainFallbackListForADeviceSettingsPolicyParams =
  Array<FallbackDomainDevicesSetLocalDomainFallbackListForADeviceSettingsPolicyParams.Body>;

export namespace FallbackDomainDevicesSetLocalDomainFallbackListForADeviceSettingsPolicyParams {
  export interface Body {
    /**
     * The domain suffix to match when resolving locally.
     */
    suffix: string;

    /**
     * A description of the fallback domain, displayed in the client UI.
     */
    description?: string;

    /**
     * A list of IP addresses to handle domain resolution.
     */
    dns_server?: Array<unknown>;
  }
}

export namespace FallbackDomains {
  export import FallbackDomainDevicesGetLocalDomainFallbackListResponse = FallbackDomainsAPI.FallbackDomainDevicesGetLocalDomainFallbackListResponse;
  export import FallbackDomainDevicesGetLocalDomainFallbackListForADeviceSettingsPolicyResponse = FallbackDomainsAPI.FallbackDomainDevicesGetLocalDomainFallbackListForADeviceSettingsPolicyResponse;
  export import FallbackDomainDevicesSetLocalDomainFallbackListResponse = FallbackDomainsAPI.FallbackDomainDevicesSetLocalDomainFallbackListResponse;
  export import FallbackDomainDevicesSetLocalDomainFallbackListForADeviceSettingsPolicyResponse = FallbackDomainsAPI.FallbackDomainDevicesSetLocalDomainFallbackListForADeviceSettingsPolicyResponse;
  export import FallbackDomainDevicesSetLocalDomainFallbackListParams = FallbackDomainsAPI.FallbackDomainDevicesSetLocalDomainFallbackListParams;
  export import FallbackDomainDevicesSetLocalDomainFallbackListForADeviceSettingsPolicyParams = FallbackDomainsAPI.FallbackDomainDevicesSetLocalDomainFallbackListForADeviceSettingsPolicyParams;
}
