// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as ContentAPI from 'cloudflare/resources/accounts/workers/services/environments/content';
import * as SettingsAPI from 'cloudflare/resources/accounts/workers/services/environments/settings';

export class Environments extends APIResource {
  content: ContentAPI.Content = new ContentAPI.Content(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
}

export namespace Environments {
  export import Content = ContentAPI.Content;
  export import ContentUpdateResponse = ContentAPI.ContentUpdateResponse;
  export import ContentUpdateParams = ContentAPI.ContentUpdateParams;
  export import Settings = SettingsAPI.Settings;
  export import SettingRetrieveResponse = SettingsAPI.SettingRetrieveResponse;
  export import SettingUpdateResponse = SettingsAPI.SettingUpdateResponse;
  export import SettingUpdateParams = SettingsAPI.SettingUpdateParams;
}
