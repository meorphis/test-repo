// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SettingsAPI from 'cloudflare/resources/hostnames/settings';

export class Settings extends APIResource {
  /**
   * List the requested TLS setting for the hostnames under this zone.
   */
  list(
    zoneIdentifier: string,
    tlsSetting: 'ciphers' | 'min_tls_version' | 'http2',
    options?: Core.RequestOptions,
  ): Core.APIPromise<SettingListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/hostnames/settings/${tlsSetting}`, options);
  }

  /**
   * Delete the tls setting value for the hostname.
   */
  delete(
    zoneIdentifier: string,
    tlsSetting: 'ciphers' | 'min_tls_version' | 'http2',
    hostname: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SettingDeleteResponse> {
    return this._client.delete(
      `/zones/${zoneIdentifier}/hostnames/settings/${tlsSetting}/${hostname}`,
      options,
    );
  }

  /**
   * Update the tls setting value for the hostname.
   */
  add(
    zoneIdentifier: string,
    tlsSetting: 'ciphers' | 'min_tls_version' | 'http2',
    hostname: string,
    body: SettingAddParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SettingAddResponse> {
    return this._client.put(`/zones/${zoneIdentifier}/hostnames/settings/${tlsSetting}/${hostname}`, {
      body,
      ...options,
    });
  }
}

export interface SettingListResponse {
  errors?: Array<SettingListResponse.Error>;

  messages?: Array<SettingListResponse.Message>;

  result?: Array<SettingListResponse.Result>;

  result_info?: SettingListResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace SettingListResponse {
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
     * This is the time the tls setting was originally created for this hostname.
     */
    created_at?: string;

    /**
     * The hostname for which the tls settings are set.
     */
    hostname?: string;

    /**
     * Deployment status for the given tls setting.
     */
    status?: string;

    /**
     * This is the time the tls setting was updated.
     */
    updated_at?: string;

    /**
     * The tls setting value.
     */
    value?: number | string | Array<string>;
  }

  export interface ResultInfo {
    count?: unknown;

    page?: unknown;

    per_page?: unknown;

    total_count?: unknown;

    /**
     * Total pages available of results
     */
    total_pages?: number;
  }
}

export interface SettingDeleteResponse {
  errors?: Array<SettingDeleteResponse.Error>;

  messages?: Array<SettingDeleteResponse.Message>;

  result?: SettingDeleteResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace SettingDeleteResponse {
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
     * This is the time the tls setting was originally created for this hostname.
     */
    created_at?: string;

    /**
     * The hostname for which the tls settings are set.
     */
    hostname?: string;

    status?: unknown;

    /**
     * This is the time the tls setting was updated.
     */
    updated_at?: string;

    value?: unknown;
  }
}

export interface SettingAddResponse {
  errors?: Array<SettingAddResponse.Error>;

  messages?: Array<SettingAddResponse.Message>;

  result?: SettingAddResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace SettingAddResponse {
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
     * This is the time the tls setting was originally created for this hostname.
     */
    created_at?: string;

    /**
     * The hostname for which the tls settings are set.
     */
    hostname?: string;

    /**
     * Deployment status for the given tls setting.
     */
    status?: string;

    /**
     * This is the time the tls setting was updated.
     */
    updated_at?: string;

    /**
     * The tls setting value.
     */
    value?: number | string | Array<string>;
  }
}

export interface SettingAddParams {
  /**
   * The tls setting value.
   */
  value: number | string | Array<string>;
}

export namespace Settings {
  export import SettingListResponse = SettingsAPI.SettingListResponse;
  export import SettingDeleteResponse = SettingsAPI.SettingDeleteResponse;
  export import SettingAddResponse = SettingsAPI.SettingAddResponse;
  export import SettingAddParams = SettingsAPI.SettingAddParams;
}
