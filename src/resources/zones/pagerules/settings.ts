// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SettingsAPI from 'cloudflare/resources/zones/pagerules/settings';

export class Settings extends APIResource {
  /**
   * Returns a list of settings (and their details) that Page Rules can apply to
   * matching requests.
   */
  availablePageRulesSettingsListAvailablePageRulesSettings(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SettingAvailablePageRulesSettingsListAvailablePageRulesSettingsResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/pagerules/settings`, options);
  }
}

export interface SettingAvailablePageRulesSettingsListAvailablePageRulesSettingsResponse {
  errors?: Array<SettingAvailablePageRulesSettingsListAvailablePageRulesSettingsResponse.Error>;

  messages?: Array<SettingAvailablePageRulesSettingsListAvailablePageRulesSettingsResponse.Message>;

  /**
   * Settings available for the zone.
   */
  result?: Array<unknown>;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace SettingAvailablePageRulesSettingsListAvailablePageRulesSettingsResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export namespace Settings {
  export import SettingAvailablePageRulesSettingsListAvailablePageRulesSettingsResponse = SettingsAPI.SettingAvailablePageRulesSettingsListAvailablePageRulesSettingsResponse;
}
