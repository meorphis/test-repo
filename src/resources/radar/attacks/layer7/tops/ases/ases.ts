// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as OriginsAPI from 'cloudflare/resources/radar/attacks/layer7/tops/ases/origins';

export class Ases extends APIResource {
  origins: OriginsAPI.Origins = new OriginsAPI.Origins(this._client);
}

export namespace Ases {
  export import Origins = OriginsAPI.Origins;
  export import OriginListResponse = OriginsAPI.OriginListResponse;
  export import OriginListParams = OriginsAPI.OriginListParams;
}
