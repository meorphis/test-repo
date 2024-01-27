// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as LockdownsAPI from 'cloudflare/resources/zones/firewalls/lockdowns';
import * as RulesAPI from 'cloudflare/resources/zones/firewalls/rules';
import * as UaRulesAPI from 'cloudflare/resources/zones/firewalls/ua-rules';
import * as AccessRulesAPI from 'cloudflare/resources/zones/firewalls/access-rules/access-rules';
import * as WafsAPI from 'cloudflare/resources/zones/firewalls/wafs/wafs';

export class Firewalls extends APIResource {
  lockdowns: LockdownsAPI.Lockdowns = new LockdownsAPI.Lockdowns(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
  uaRules: UaRulesAPI.UaRules = new UaRulesAPI.UaRules(this._client);
  wafs: WafsAPI.Wafs = new WafsAPI.Wafs(this._client);
  accessRules: AccessRulesAPI.AccessRules = new AccessRulesAPI.AccessRules(this._client);
}

export namespace Firewalls {
  export import Lockdowns = LockdownsAPI.Lockdowns;
  export import LockdownRetrieveResponse = LockdownsAPI.LockdownRetrieveResponse;
  export import LockdownUpdateResponse = LockdownsAPI.LockdownUpdateResponse;
  export import LockdownDeleteResponse = LockdownsAPI.LockdownDeleteResponse;
  export import LockdownZoneLockdownCreateAZoneLockdownRuleResponse = LockdownsAPI.LockdownZoneLockdownCreateAZoneLockdownRuleResponse;
  export import LockdownZoneLockdownListZoneLockdownRulesResponse = LockdownsAPI.LockdownZoneLockdownListZoneLockdownRulesResponse;
  export import LockdownZoneLockdownListZoneLockdownRulesResponsesPage = LockdownsAPI.LockdownZoneLockdownListZoneLockdownRulesResponsesPage;
  export import LockdownUpdateParams = LockdownsAPI.LockdownUpdateParams;
  export import LockdownZoneLockdownCreateAZoneLockdownRuleParams = LockdownsAPI.LockdownZoneLockdownCreateAZoneLockdownRuleParams;
  export import LockdownZoneLockdownListZoneLockdownRulesParams = LockdownsAPI.LockdownZoneLockdownListZoneLockdownRulesParams;
  export import Rules = RulesAPI.Rules;
  export import RuleRetrieveResponse = RulesAPI.RuleRetrieveResponse;
  export import RuleUpdateResponse = RulesAPI.RuleUpdateResponse;
  export import RuleDeleteResponse = RulesAPI.RuleDeleteResponse;
  export import RuleFirewallRulesCreateFirewallRulesResponse = RulesAPI.RuleFirewallRulesCreateFirewallRulesResponse;
  export import RuleFirewallRulesListFirewallRulesResponse = RulesAPI.RuleFirewallRulesListFirewallRulesResponse;
  export import RuleFirewallRulesUpdateFirewallRulesResponse = RulesAPI.RuleFirewallRulesUpdateFirewallRulesResponse;
  export import RuleFirewallRulesUpdatePriorityOfFirewallRulesResponse = RulesAPI.RuleFirewallRulesUpdatePriorityOfFirewallRulesResponse;
  export import RuleFirewallRulesListFirewallRulesResponsesPage = RulesAPI.RuleFirewallRulesListFirewallRulesResponsesPage;
  export import RuleUpdateParams = RulesAPI.RuleUpdateParams;
  export import RuleDeleteParams = RulesAPI.RuleDeleteParams;
  export import RuleFirewallRulesCreateFirewallRulesParams = RulesAPI.RuleFirewallRulesCreateFirewallRulesParams;
  export import RuleFirewallRulesListFirewallRulesParams = RulesAPI.RuleFirewallRulesListFirewallRulesParams;
  export import RuleFirewallRulesUpdateFirewallRulesParams = RulesAPI.RuleFirewallRulesUpdateFirewallRulesParams;
  export import RuleFirewallRulesUpdatePriorityOfFirewallRulesParams = RulesAPI.RuleFirewallRulesUpdatePriorityOfFirewallRulesParams;
  export import UaRules = UaRulesAPI.UaRules;
  export import UaRuleRetrieveResponse = UaRulesAPI.UaRuleRetrieveResponse;
  export import UaRuleUpdateResponse = UaRulesAPI.UaRuleUpdateResponse;
  export import UaRuleDeleteResponse = UaRulesAPI.UaRuleDeleteResponse;
  export import UaRuleUserAgentBlockingRulesCreateAUserAgentBlockingRuleResponse = UaRulesAPI.UaRuleUserAgentBlockingRulesCreateAUserAgentBlockingRuleResponse;
  export import UaRuleUserAgentBlockingRulesListUserAgentBlockingRulesResponse = UaRulesAPI.UaRuleUserAgentBlockingRulesListUserAgentBlockingRulesResponse;
  export import UaRuleUserAgentBlockingRulesListUserAgentBlockingRulesResponsesPage = UaRulesAPI.UaRuleUserAgentBlockingRulesListUserAgentBlockingRulesResponsesPage;
  export import UaRuleUpdateParams = UaRulesAPI.UaRuleUpdateParams;
  export import UaRuleUserAgentBlockingRulesCreateAUserAgentBlockingRuleParams = UaRulesAPI.UaRuleUserAgentBlockingRulesCreateAUserAgentBlockingRuleParams;
  export import UaRuleUserAgentBlockingRulesListUserAgentBlockingRulesParams = UaRulesAPI.UaRuleUserAgentBlockingRulesListUserAgentBlockingRulesParams;
  export import Wafs = WafsAPI.Wafs;
  export import AccessRules = AccessRulesAPI.AccessRules;
}
