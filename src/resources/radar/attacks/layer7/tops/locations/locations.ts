// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as OriginsAPI from 'cloudflare/resources/radar/attacks/layer7/tops/locations/origins';
import * as TargetsAPI from 'cloudflare/resources/radar/attacks/layer7/tops/locations/targets';

export class Locations extends APIResource {
  origins: OriginsAPI.Origins = new OriginsAPI.Origins(this._client);
  targets: TargetsAPI.Targets = new TargetsAPI.Targets(this._client);
}

export namespace Locations {
  export import Origins = OriginsAPI.Origins;
  export import OriginListResponse = OriginsAPI.OriginListResponse;
  export import OriginListParams = OriginsAPI.OriginListParams;
  export import Targets = TargetsAPI.Targets;
  export import TargetListResponse = TargetsAPI.TargetListResponse;
  export import TargetListParams = TargetsAPI.TargetListParams;
}
