// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SettingsAPI from 'cloudflare/resources/accounts/access/certificates/settings';

export class Settings extends APIResource {
  /**
   * Updates an mTLS certificate's hostname settings.
   */
  update(
    identifier: string,
    body: SettingUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SettingUpdateResponse> {
    return this._client.put(`/zones/${identifier}/access/certificates/settings`, { body, ...options });
  }

  /**
   * List all mTLS hostname settings for this account.
   */
  list(identifier: string, options?: Core.RequestOptions): Core.APIPromise<SettingListResponse> {
    return this._client.get(`/accounts/${identifier}/access/certificates/settings`, options);
  }
}

export interface SettingUpdateResponse {
  errors?: Array<SettingUpdateResponse.Error>;

  messages?: Array<SettingUpdateResponse.Message>;

  result?: Array<SettingUpdateResponse.Result>;

  result_info?: SettingUpdateResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace SettingUpdateResponse {
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
     * Request client certificates for this hostname in China. Can only be set to true
     * if this zone is china network enabled.
     */
    china_network: boolean;

    /**
     * Client Certificate Forwarding is a feature that takes the client cert provided
     * by the eyeball to the edge, and forwards it to the origin as a HTTP header to
     * allow logging on the origin.
     */
    client_certificate_forwarding: boolean;

    /**
     * The hostname that these settings apply to.
     */
    hostname: string;
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
     * Request client certificates for this hostname in China. Can only be set to true
     * if this zone is china network enabled.
     */
    china_network: boolean;

    /**
     * Client Certificate Forwarding is a feature that takes the client cert provided
     * by the eyeball to the edge, and forwards it to the origin as a HTTP header to
     * allow logging on the origin.
     */
    client_certificate_forwarding: boolean;

    /**
     * The hostname that these settings apply to.
     */
    hostname: string;
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

export interface SettingUpdateParams {
  settings: Array<SettingUpdateParams.Setting>;
}

export namespace SettingUpdateParams {
  export interface Setting {
    /**
     * Request client certificates for this hostname in China. Can only be set to true
     * if this zone is china network enabled.
     */
    china_network: boolean;

    /**
     * Client Certificate Forwarding is a feature that takes the client cert provided
     * by the eyeball to the edge, and forwards it to the origin as a HTTP header to
     * allow logging on the origin.
     */
    client_certificate_forwarding: boolean;

    /**
     * The hostname that these settings apply to.
     */
    hostname: string;
  }
}

export namespace Settings {
  export import SettingUpdateResponse = SettingsAPI.SettingUpdateResponse;
  export import SettingListResponse = SettingsAPI.SettingListResponse;
  export import SettingUpdateParams = SettingsAPI.SettingUpdateParams;
}
