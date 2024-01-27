// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as AutomaticPlatformOptimizationsAPI from 'cloudflare/resources/zones/settings/automatic-platform-optimizations';

export class AutomaticPlatformOptimizations extends APIResource {
  /**
   * [Automatic Platform Optimization for WordPress](https://developers.cloudflare.com/automatic-platform-optimization/)
   * serves your WordPress site from Cloudflare's edge network and caches third-party
   * fonts.
   */
  update(
    zoneIdentifier: string,
    body: AutomaticPlatformOptimizationUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AutomaticPlatformOptimizationUpdateResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/settings/automatic_platform_optimization`, {
      body,
      ...options,
    });
  }

  /**
   * [Automatic Platform Optimization for WordPress](https://developers.cloudflare.com/automatic-platform-optimization/)
   * serves your WordPress site from Cloudflare's edge network and caches third-party
   * fonts.
   */
  list(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AutomaticPlatformOptimizationListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/settings/automatic_platform_optimization`, options);
  }
}

export interface AutomaticPlatformOptimizationUpdateResponse {
  errors?: Array<AutomaticPlatformOptimizationUpdateResponse.Error>;

  messages?: Array<AutomaticPlatformOptimizationUpdateResponse.Message>;

  result?: AutomaticPlatformOptimizationUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace AutomaticPlatformOptimizationUpdateResponse {
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
     * Indicates whether or not
     * [cache by device type](https://developers.cloudflare.com/automatic-platform-optimization/reference/cache-device-type/)
     * is enabled.
     */
    cache_by_device_type: boolean;

    /**
     * Indicates whether or not Cloudflare proxy is enabled.
     */
    cf: boolean;

    /**
     * Indicates whether or not Automatic Platform Optimization is enabled.
     */
    enabled: boolean;

    /**
     * An array of hostnames where Automatic Platform Optimization for WordPress is
     * activated.
     */
    hostnames: Array<string>;

    /**
     * Indicates whether or not site is powered by WordPress.
     */
    wordpress: boolean;

    /**
     * Indicates whether or not
     * [Cloudflare for WordPress plugin](https://wordpress.org/plugins/cloudflare/) is
     * installed.
     */
    wp_plugin: boolean;
  }
}

export interface AutomaticPlatformOptimizationListResponse {
  errors?: Array<AutomaticPlatformOptimizationListResponse.Error>;

  messages?: Array<AutomaticPlatformOptimizationListResponse.Message>;

  result?: AutomaticPlatformOptimizationListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace AutomaticPlatformOptimizationListResponse {
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
     * Indicates whether or not
     * [cache by device type](https://developers.cloudflare.com/automatic-platform-optimization/reference/cache-device-type/)
     * is enabled.
     */
    cache_by_device_type: boolean;

    /**
     * Indicates whether or not Cloudflare proxy is enabled.
     */
    cf: boolean;

    /**
     * Indicates whether or not Automatic Platform Optimization is enabled.
     */
    enabled: boolean;

    /**
     * An array of hostnames where Automatic Platform Optimization for WordPress is
     * activated.
     */
    hostnames: Array<string>;

    /**
     * Indicates whether or not site is powered by WordPress.
     */
    wordpress: boolean;

    /**
     * Indicates whether or not
     * [Cloudflare for WordPress plugin](https://wordpress.org/plugins/cloudflare/) is
     * installed.
     */
    wp_plugin: boolean;
  }
}

export interface AutomaticPlatformOptimizationUpdateParams {
  value: AutomaticPlatformOptimizationUpdateParams.Value;
}

export namespace AutomaticPlatformOptimizationUpdateParams {
  export interface Value {
    /**
     * Indicates whether or not
     * [cache by device type](https://developers.cloudflare.com/automatic-platform-optimization/reference/cache-device-type/)
     * is enabled.
     */
    cache_by_device_type: boolean;

    /**
     * Indicates whether or not Cloudflare proxy is enabled.
     */
    cf: boolean;

    /**
     * Indicates whether or not Automatic Platform Optimization is enabled.
     */
    enabled: boolean;

    /**
     * An array of hostnames where Automatic Platform Optimization for WordPress is
     * activated.
     */
    hostnames: Array<string>;

    /**
     * Indicates whether or not site is powered by WordPress.
     */
    wordpress: boolean;

    /**
     * Indicates whether or not
     * [Cloudflare for WordPress plugin](https://wordpress.org/plugins/cloudflare/) is
     * installed.
     */
    wp_plugin: boolean;
  }
}

export namespace AutomaticPlatformOptimizations {
  export import AutomaticPlatformOptimizationUpdateResponse = AutomaticPlatformOptimizationsAPI.AutomaticPlatformOptimizationUpdateResponse;
  export import AutomaticPlatformOptimizationListResponse = AutomaticPlatformOptimizationsAPI.AutomaticPlatformOptimizationListResponse;
  export import AutomaticPlatformOptimizationUpdateParams = AutomaticPlatformOptimizationsAPI.AutomaticPlatformOptimizationUpdateParams;
}
