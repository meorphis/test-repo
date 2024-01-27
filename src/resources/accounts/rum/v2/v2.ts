// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as RuleAPI from 'cloudflare/resources/accounts/rum/v2/rule';

export class V2 extends APIResource {
  rule: RuleAPI.RuleResource = new RuleAPI.RuleResource(this._client);
}

export namespace V2 {
  export import RuleResource = RuleAPI.RuleResource;
  export import Rule = RuleAPI.Rule;
  export import RuleUpdateParams = RuleAPI.RuleUpdateParams;
}
