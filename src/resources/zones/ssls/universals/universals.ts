// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as SettingsAPI from 'cloudflare/resources/zones/ssls/universals/settings';

export class Universals extends APIResource {
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
}

export namespace Universals {
  export import Settings = SettingsAPI.Settings;
  export import SettingUniversalSslSettingsForAZoneEditUniversalSslSettingsResponse = SettingsAPI.SettingUniversalSslSettingsForAZoneEditUniversalSslSettingsResponse;
  export import SettingUniversalSslSettingsForAZoneUniversalSslSettingsDetailsResponse = SettingsAPI.SettingUniversalSslSettingsForAZoneUniversalSslSettingsDetailsResponse;
  export import SettingUniversalSslSettingsForAZoneEditUniversalSslSettingsParams = SettingsAPI.SettingUniversalSslSettingsForAZoneEditUniversalSslSettingsParams;
}
