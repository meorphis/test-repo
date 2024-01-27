// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as ConfigsAPI from 'cloudflare/resources/accounts/hyperdrive/configs';

export class Hyperdrive extends APIResource {
  configs: ConfigsAPI.Configs = new ConfigsAPI.Configs(this._client);
}

export namespace Hyperdrive {
  export import Configs = ConfigsAPI.Configs;
  export import ConfigCreateResponse = ConfigsAPI.ConfigCreateResponse;
  export import ConfigListResponse = ConfigsAPI.ConfigListResponse;
  export import ConfigCreateParams = ConfigsAPI.ConfigCreateParams;
}
