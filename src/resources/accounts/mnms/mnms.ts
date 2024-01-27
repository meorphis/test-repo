// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as ConfigsAPI from 'cloudflare/resources/accounts/mnms/configs/configs';
import * as RulesAPI from 'cloudflare/resources/accounts/mnms/rules/rules';

export class Mnms extends APIResource {
  configs: ConfigsAPI.Configs = new ConfigsAPI.Configs(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
}

export namespace Mnms {
  export import Configs = ConfigsAPI.Configs;
  export import ConfigDeleteResponse = ConfigsAPI.ConfigDeleteResponse;
  export import ConfigMagicNetworkMonitoringConfigurationCreateAccountConfigurationResponse = ConfigsAPI.ConfigMagicNetworkMonitoringConfigurationCreateAccountConfigurationResponse;
  export import ConfigMagicNetworkMonitoringConfigurationListAccountConfigurationResponse = ConfigsAPI.ConfigMagicNetworkMonitoringConfigurationListAccountConfigurationResponse;
  export import ConfigMagicNetworkMonitoringConfigurationUpdateAccountConfigurationFieldsResponse = ConfigsAPI.ConfigMagicNetworkMonitoringConfigurationUpdateAccountConfigurationFieldsResponse;
  export import ConfigMagicNetworkMonitoringConfigurationUpdateAnEntireAccountConfigurationResponse = ConfigsAPI.ConfigMagicNetworkMonitoringConfigurationUpdateAnEntireAccountConfigurationResponse;
  export import Rules = RulesAPI.Rules;
  export import RuleRetrieveResponse = RulesAPI.RuleRetrieveResponse;
  export import RuleUpdateResponse = RulesAPI.RuleUpdateResponse;
  export import RuleDeleteResponse = RulesAPI.RuleDeleteResponse;
  export import RuleMagicNetworkMonitoringRulesCreateRulesResponse = RulesAPI.RuleMagicNetworkMonitoringRulesCreateRulesResponse;
  export import RuleMagicNetworkMonitoringRulesListRulesResponse = RulesAPI.RuleMagicNetworkMonitoringRulesListRulesResponse;
  export import RuleMagicNetworkMonitoringRulesUpdateRulesResponse = RulesAPI.RuleMagicNetworkMonitoringRulesUpdateRulesResponse;
}
