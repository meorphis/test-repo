// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as CmbAPI from 'cloudflare/resources/accounts/logs/controls/cmb/cmb';

export class Controls extends APIResource {
  cmb: CmbAPI.Cmb = new CmbAPI.Cmb(this._client);
}

export namespace Controls {
  export import Cmb = CmbAPI.Cmb;
}
