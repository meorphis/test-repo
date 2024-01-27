// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as RulesAPI from 'cloudflare/resources/zones/firewalls/access-rules/rules';

export class AccessRules extends APIResource {
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
}

export namespace AccessRules {
  export import Rules = RulesAPI.Rules;
  export import RuleUpdateResponse = RulesAPI.RuleUpdateResponse;
  export import RuleDeleteResponse = RulesAPI.RuleDeleteResponse;
  export import RuleIPAccessRulesForAZoneCreateAnIPAccessRuleResponse = RulesAPI.RuleIPAccessRulesForAZoneCreateAnIPAccessRuleResponse;
  export import RuleIPAccessRulesForAZoneListIPAccessRulesResponse = RulesAPI.RuleIPAccessRulesForAZoneListIPAccessRulesResponse;
  export import RuleIPAccessRulesForAZoneListIPAccessRulesResponsesPage = RulesAPI.RuleIPAccessRulesForAZoneListIPAccessRulesResponsesPage;
  export import RuleUpdateParams = RulesAPI.RuleUpdateParams;
  export import RuleDeleteParams = RulesAPI.RuleDeleteParams;
  export import RuleIPAccessRulesForAZoneCreateAnIPAccessRuleParams = RulesAPI.RuleIPAccessRulesForAZoneCreateAnIPAccessRuleParams;
  export import RuleIPAccessRulesForAZoneListIPAccessRulesParams = RulesAPI.RuleIPAccessRulesForAZoneListIPAccessRulesParams;
}
