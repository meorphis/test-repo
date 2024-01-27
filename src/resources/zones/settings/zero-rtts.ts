// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ZeroRttsAPI from 'cloudflare/resources/zones/settings/zero-rtts';

export class ZeroRtts extends APIResource {
  /**
   * Gets 0-RTT session resumption setting.
   */
  list(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<ZeroRttListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/settings/0rtt`, options);
  }

  /**
   * Changes the 0-RTT session resumption setting.
   */
  zoneSettingsChange0RttSessionResumptionSetting(
    zoneIdentifier: string,
    body: ZeroRttZoneSettingsChange0RttSessionResumptionSettingParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZeroRttZoneSettingsChange0RttSessionResumptionSettingResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/settings/0rtt`, { body, ...options });
  }
}

export interface ZeroRttListResponse {
  errors?: Array<ZeroRttListResponse.Error>;

  messages?: Array<ZeroRttListResponse.Message>;

  /**
   * 0-RTT session resumption enabled for this zone.
   */
  result?: ZeroRttListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace ZeroRttListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * 0-RTT session resumption enabled for this zone.
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: '0rtt';

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
     * Value of the 0-RTT setting.
     */
    value?: 'on' | 'off';
  }
}

export interface ZeroRttZoneSettingsChange0RttSessionResumptionSettingResponse {
  errors?: Array<ZeroRttZoneSettingsChange0RttSessionResumptionSettingResponse.Error>;

  messages?: Array<ZeroRttZoneSettingsChange0RttSessionResumptionSettingResponse.Message>;

  /**
   * 0-RTT session resumption enabled for this zone.
   */
  result?: ZeroRttZoneSettingsChange0RttSessionResumptionSettingResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace ZeroRttZoneSettingsChange0RttSessionResumptionSettingResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * 0-RTT session resumption enabled for this zone.
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: '0rtt';

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
     * Value of the 0-RTT setting.
     */
    value?: 'on' | 'off';
  }
}

export interface ZeroRttZoneSettingsChange0RttSessionResumptionSettingParams {
  /**
   * Value of the 0-RTT setting.
   */
  value: 'on' | 'off';
}

export namespace ZeroRtts {
  export import ZeroRttListResponse = ZeroRttsAPI.ZeroRttListResponse;
  export import ZeroRttZoneSettingsChange0RttSessionResumptionSettingResponse = ZeroRttsAPI.ZeroRttZoneSettingsChange0RttSessionResumptionSettingResponse;
  export import ZeroRttZoneSettingsChange0RttSessionResumptionSettingParams = ZeroRttsAPI.ZeroRttZoneSettingsChange0RttSessionResumptionSettingParams;
}
