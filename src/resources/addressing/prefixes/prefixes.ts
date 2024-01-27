// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as BgpAPI from 'cloudflare/resources/addressing/prefixes/bgp/bgp';

export class Prefixes extends APIResource {
  bgp: BgpAPI.Bgp = new BgpAPI.Bgp(this._client);
}

export namespace Prefixes {
  export import Bgp = BgpAPI.Bgp;
}
