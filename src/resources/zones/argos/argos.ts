// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as SmartRoutingsAPI from 'cloudflare/resources/zones/argos/smart-routings';
import * as TieredCachingAPI from 'cloudflare/resources/zones/argos/tiered-caching';

export class Argos extends APIResource {
  smartRoutings: SmartRoutingsAPI.SmartRoutings = new SmartRoutingsAPI.SmartRoutings(this._client);
  tieredCaching: TieredCachingAPI.TieredCaching = new TieredCachingAPI.TieredCaching(this._client);
}

export namespace Argos {
  export import SmartRoutings = SmartRoutingsAPI.SmartRoutings;
  export import SmartRoutingArgoSmartRoutingGetArgoSmartRoutingSettingResponse = SmartRoutingsAPI.SmartRoutingArgoSmartRoutingGetArgoSmartRoutingSettingResponse;
  export import SmartRoutingArgoSmartRoutingPatchArgoSmartRoutingSettingResponse = SmartRoutingsAPI.SmartRoutingArgoSmartRoutingPatchArgoSmartRoutingSettingResponse;
  export import SmartRoutingArgoSmartRoutingPatchArgoSmartRoutingSettingParams = SmartRoutingsAPI.SmartRoutingArgoSmartRoutingPatchArgoSmartRoutingSettingParams;
  export import TieredCaching = TieredCachingAPI.TieredCaching;
  export import TieredCachingTieredCachingGetTieredCachingSettingResponse = TieredCachingAPI.TieredCachingTieredCachingGetTieredCachingSettingResponse;
  export import TieredCachingTieredCachingPatchTieredCachingSettingResponse = TieredCachingAPI.TieredCachingTieredCachingPatchTieredCachingSettingResponse;
  export import TieredCachingTieredCachingPatchTieredCachingSettingParams = TieredCachingAPI.TieredCachingTieredCachingPatchTieredCachingSettingParams;
}
