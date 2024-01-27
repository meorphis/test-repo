// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as V3API from 'cloudflare/resources/alerting/v3/v3';

export class Alerting extends APIResource {
  v3: V3API.V3 = new V3API.V3(this._client);
}

export namespace Alerting {
  export import V3 = V3API.V3;
}
