// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SecurityLevelsAPI from 'cloudflare/resources/zones/settings/security-levels';

export class SecurityLevels extends APIResource {
  /**
   * Choose the appropriate security profile for your website, which will
   * automatically adjust each of the security settings. If you choose to customize
   * an individual security setting, the profile will become Custom.
   * (https://support.cloudflare.com/hc/en-us/articles/200170056).
   */
  update(
    zoneIdentifier: string,
    body: SecurityLevelUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SecurityLevelUpdateResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/settings/security_level`, { body, ...options });
  }

  /**
   * Choose the appropriate security profile for your website, which will
   * automatically adjust each of the security settings. If you choose to customize
   * an individual security setting, the profile will become Custom.
   * (https://support.cloudflare.com/hc/en-us/articles/200170056).
   */
  list(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<SecurityLevelListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/settings/security_level`, options);
  }
}

export interface SecurityLevelUpdateResponse {
  errors?: Array<SecurityLevelUpdateResponse.Error>;

  messages?: Array<SecurityLevelUpdateResponse.Message>;

  /**
   * Choose the appropriate security profile for your website, which will
   * automatically adjust each of the security settings. If you choose to customize
   * an individual security setting, the profile will become Custom.
   * (https://support.cloudflare.com/hc/en-us/articles/200170056).
   */
  result?: SecurityLevelUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace SecurityLevelUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Choose the appropriate security profile for your website, which will
   * automatically adjust each of the security settings. If you choose to customize
   * an individual security setting, the profile will become Custom.
   * (https://support.cloudflare.com/hc/en-us/articles/200170056).
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'security_level';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'off' | 'essentially_off' | 'low' | 'medium' | 'high' | 'under_attack';
  }
}

export interface SecurityLevelListResponse {
  errors?: Array<SecurityLevelListResponse.Error>;

  messages?: Array<SecurityLevelListResponse.Message>;

  /**
   * Choose the appropriate security profile for your website, which will
   * automatically adjust each of the security settings. If you choose to customize
   * an individual security setting, the profile will become Custom.
   * (https://support.cloudflare.com/hc/en-us/articles/200170056).
   */
  result?: SecurityLevelListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace SecurityLevelListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Choose the appropriate security profile for your website, which will
   * automatically adjust each of the security settings. If you choose to customize
   * an individual security setting, the profile will become Custom.
   * (https://support.cloudflare.com/hc/en-us/articles/200170056).
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'security_level';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: 'off' | 'essentially_off' | 'low' | 'medium' | 'high' | 'under_attack';
  }
}

export interface SecurityLevelUpdateParams {
  /**
   * Value of the zone setting.
   */
  value: 'off' | 'essentially_off' | 'low' | 'medium' | 'high' | 'under_attack';
}

export namespace SecurityLevels {
  export import SecurityLevelUpdateResponse = SecurityLevelsAPI.SecurityLevelUpdateResponse;
  export import SecurityLevelListResponse = SecurityLevelsAPI.SecurityLevelListResponse;
  export import SecurityLevelUpdateParams = SecurityLevelsAPI.SecurityLevelUpdateParams;
}
