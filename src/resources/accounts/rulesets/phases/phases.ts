// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as EntrypointsAPI from 'cloudflare/resources/accounts/rulesets/phases/entrypoints/entrypoints';

export class Phases extends APIResource {
  entrypoints: EntrypointsAPI.Entrypoints = new EntrypointsAPI.Entrypoints(this._client);
}

export namespace Phases {
  export import Entrypoints = EntrypointsAPI.Entrypoints;
  export import EntrypointAccountRulesetsGetAnAccountEntryPointRulesetResponse = EntrypointsAPI.EntrypointAccountRulesetsGetAnAccountEntryPointRulesetResponse;
  export import EntrypointAccountRulesetsUpdateAnAccountEntryPointRulesetResponse = EntrypointsAPI.EntrypointAccountRulesetsUpdateAnAccountEntryPointRulesetResponse;
  export import EntrypointAccountRulesetsUpdateAnAccountEntryPointRulesetParams = EntrypointsAPI.EntrypointAccountRulesetsUpdateAnAccountEntryPointRulesetParams;
}
