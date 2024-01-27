// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as RulesAPI from 'cloudflare/resources/accounts/firewalls/access-rules/rules';

export class AccessRules extends APIResource {
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
}

export namespace AccessRules {
  export import Rules = RulesAPI.Rules;
  export import RuleRetrieveResponse = RulesAPI.RuleRetrieveResponse;
  export import RuleUpdateResponse = RulesAPI.RuleUpdateResponse;
  export import RuleDeleteResponse = RulesAPI.RuleDeleteResponse;
  export import RuleIPAccessRulesForAnAccountCreateAnIPAccessRuleResponse = RulesAPI.RuleIPAccessRulesForAnAccountCreateAnIPAccessRuleResponse;
  export import RuleIPAccessRulesForAnAccountListIPAccessRulesResponse = RulesAPI.RuleIPAccessRulesForAnAccountListIPAccessRulesResponse;
  export import RuleIPAccessRulesForAnAccountListIPAccessRulesResponsesPage = RulesAPI.RuleIPAccessRulesForAnAccountListIPAccessRulesResponsesPage;
  export import RuleUpdateParams = RulesAPI.RuleUpdateParams;
  export import RuleIPAccessRulesForAnAccountCreateAnIPAccessRuleParams = RulesAPI.RuleIPAccessRulesForAnAccountCreateAnIPAccessRuleParams;
  export import RuleIPAccessRulesForAnAccountListIPAccessRulesParams = RulesAPI.RuleIPAccessRulesForAnAccountListIPAccessRulesParams;
}
