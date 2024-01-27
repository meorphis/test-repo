// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as RetentionsAPI from 'cloudflare/resources/zones/logs/controls/retentions/retentions';

export class Controls extends APIResource {
  retentions: RetentionsAPI.Retentions = new RetentionsAPI.Retentions(this._client);
}

export namespace Controls {
  export import Retentions = RetentionsAPI.Retentions;
}
