// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as ScriptsAPI from 'cloudflare/resources/accounts/workers/dispatch/namespaces/scripts/scripts';

export class Namespaces extends APIResource {
  scripts: ScriptsAPI.Scripts = new ScriptsAPI.Scripts(this._client);
}

export namespace Namespaces {
  export import Scripts = ScriptsAPI.Scripts;
  export import ScriptCreateResponse = ScriptsAPI.ScriptCreateResponse;
  export import ScriptRetrieveResponse = ScriptsAPI.ScriptRetrieveResponse;
  export import ScriptCreateParams = ScriptsAPI.ScriptCreateParams;
  export import ScriptDeleteParams = ScriptsAPI.ScriptDeleteParams;
}
