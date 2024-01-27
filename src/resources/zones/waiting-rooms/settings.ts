// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SettingsAPI from 'cloudflare/resources/zones/waiting-rooms/settings';
import * as Shared from 'cloudflare/resources/shared';

export class Settings extends APIResource {
  /**
   * Update zone-level Waiting Room settings
   */
  update(
    zoneIdentifier: string,
    body: SettingUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.WaitingRoomSettingsResponse> {
    return this._client.put(`/zones/${zoneIdentifier}/waiting_rooms/settings`, { body, ...options });
  }

  /**
   * Get zone-level Waiting Room settings
   */
  list(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.WaitingRoomSettingsResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/waiting_rooms/settings`, options);
  }

  /**
   * Patch zone-level Waiting Room settings
   */
  patch(
    zoneIdentifier: string,
    body: SettingPatchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.WaitingRoomSettingsResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/waiting_rooms/settings`, { body, ...options });
  }
}

export interface SettingUpdateParams {
  /**
   * Whether to allow verified search engine crawlers to bypass all waiting rooms on
   * this zone. Verified search engine crawlers will not be tracked or counted by the
   * waiting room system, and will not appear in waiting room analytics.
   */
  search_engine_crawler_bypass?: boolean;
}

export interface SettingPatchParams {
  /**
   * Whether to allow verified search engine crawlers to bypass all waiting rooms on
   * this zone. Verified search engine crawlers will not be tracked or counted by the
   * waiting room system, and will not appear in waiting room analytics.
   */
  search_engine_crawler_bypass?: boolean;
}

export namespace Settings {
  export import SettingUpdateParams = SettingsAPI.SettingUpdateParams;
  export import SettingPatchParams = SettingsAPI.SettingPatchParams;
}
