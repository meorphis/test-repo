// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as SiteInfoAPI from 'cloudflare/resources/accounts/rum/site-info';
import * as V2API from 'cloudflare/resources/accounts/rum/v2/v2';

export class Rum extends APIResource {
  siteInfo: SiteInfoAPI.SiteInfo = new SiteInfoAPI.SiteInfo(this._client);
  v2: V2API.V2 = new V2API.V2(this._client);
}

export namespace Rum {
  export import SiteInfo = SiteInfoAPI.SiteInfo;
  export import SiteInfoCreateResponse = SiteInfoAPI.SiteInfoCreateResponse;
  export import SiteInfoCreateParams = SiteInfoAPI.SiteInfoCreateParams;
  export import V2 = V2API.V2;
}
