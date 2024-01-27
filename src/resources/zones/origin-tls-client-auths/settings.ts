// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SettingsAPI from 'cloudflare/resources/zones/origin-tls-client-auths/settings';

export class Settings extends APIResource {
  /**
   * Get whether zone-level authenticated origin pulls is enabled or not. It is false
   * by default.
   */
  zoneLevelAuthenticatedOriginPullsGetEnablementSettingForZone(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SettingZoneLevelAuthenticatedOriginPullsGetEnablementSettingForZoneResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/origin_tls_client_auth/settings`, options);
  }

  /**
   * Enable or disable zone-level authenticated origin pulls. 'enabled' should be set
   * true either before/after the certificate is uploaded to see the certificate in
   * use.
   */
  zoneLevelAuthenticatedOriginPullsSetEnablementForZone(
    zoneIdentifier: string,
    body: SettingZoneLevelAuthenticatedOriginPullsSetEnablementForZoneParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SettingZoneLevelAuthenticatedOriginPullsSetEnablementForZoneResponse> {
    return this._client.put(`/zones/${zoneIdentifier}/origin_tls_client_auth/settings`, { body, ...options });
  }
}

export interface SettingZoneLevelAuthenticatedOriginPullsGetEnablementSettingForZoneResponse {
  errors?: Array<SettingZoneLevelAuthenticatedOriginPullsGetEnablementSettingForZoneResponse.Error>;

  messages?: Array<SettingZoneLevelAuthenticatedOriginPullsGetEnablementSettingForZoneResponse.Message>;

  result?: SettingZoneLevelAuthenticatedOriginPullsGetEnablementSettingForZoneResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace SettingZoneLevelAuthenticatedOriginPullsGetEnablementSettingForZoneResponse {
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
     * Indicates whether zone-level authenticated origin pulls is enabled.
     */
    enabled?: boolean;
  }
}

export interface SettingZoneLevelAuthenticatedOriginPullsSetEnablementForZoneResponse {
  errors?: Array<SettingZoneLevelAuthenticatedOriginPullsSetEnablementForZoneResponse.Error>;

  messages?: Array<SettingZoneLevelAuthenticatedOriginPullsSetEnablementForZoneResponse.Message>;

  result?: SettingZoneLevelAuthenticatedOriginPullsSetEnablementForZoneResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace SettingZoneLevelAuthenticatedOriginPullsSetEnablementForZoneResponse {
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
     * Indicates whether zone-level authenticated origin pulls is enabled.
     */
    enabled?: boolean;
  }
}

export interface SettingZoneLevelAuthenticatedOriginPullsSetEnablementForZoneParams {
  /**
   * Indicates whether zone-level authenticated origin pulls is enabled.
   */
  enabled: boolean;
}

export namespace Settings {
  export import SettingZoneLevelAuthenticatedOriginPullsGetEnablementSettingForZoneResponse = SettingsAPI.SettingZoneLevelAuthenticatedOriginPullsGetEnablementSettingForZoneResponse;
  export import SettingZoneLevelAuthenticatedOriginPullsSetEnablementForZoneResponse = SettingsAPI.SettingZoneLevelAuthenticatedOriginPullsSetEnablementForZoneResponse;
  export import SettingZoneLevelAuthenticatedOriginPullsSetEnablementForZoneParams = SettingsAPI.SettingZoneLevelAuthenticatedOriginPullsSetEnablementForZoneParams;
}
