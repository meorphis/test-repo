// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as M2m100_1_2bAPI from 'cloudflare/resources/ai/model/translation/m2m100-1-2b';

export class Translation extends APIResource {
  m2m100_1_2b: M2m100_1_2bAPI.M2m100_1_2b = new M2m100_1_2bAPI.M2m100_1_2b(this._client);
}

export namespace Translation {
  export import M2m100_1_2b = M2m100_1_2bAPI.M2m100_1_2b;
  export import M2m100_1_2bRunResponse = M2m100_1_2bAPI.M2m100_1_2bRunResponse;
  export import M2m100_1_2bRunParams = M2m100_1_2bAPI.M2m100_1_2bRunParams;
}
