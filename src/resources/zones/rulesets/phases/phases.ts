// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as EntrypointsAPI from 'cloudflare/resources/zones/rulesets/phases/entrypoints/entrypoints';

export class Phases extends APIResource {
  entrypoints: EntrypointsAPI.Entrypoints = new EntrypointsAPI.Entrypoints(this._client);
}

export namespace Phases {
  export import Entrypoints = EntrypointsAPI.Entrypoints;
  export import EntrypointTransformRulesListTransformRulesResponse = EntrypointsAPI.EntrypointTransformRulesListTransformRulesResponse;
  export import EntrypointTransformRulesUpdateTransformRulesResponse = EntrypointsAPI.EntrypointTransformRulesUpdateTransformRulesResponse;
  export import EntrypointTransformRulesUpdateTransformRulesParams = EntrypointsAPI.EntrypointTransformRulesUpdateTransformRulesParams;
}
