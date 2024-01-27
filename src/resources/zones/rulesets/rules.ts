// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as RulesAPI from 'cloudflare/resources/zones/rulesets/rules';

export class Rules extends APIResource {
  /**
   * Updates an existing rule in a zone ruleset.
   */
  update(
    zoneId: string,
    rulesetId: string,
    ruleId: string,
    body: RuleUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleUpdateResponse> {
    return this._client.patch(`/zones/${zoneId}/rulesets/${rulesetId}/rules/${ruleId}`, { body, ...options });
  }

  /**
   * Deletes an existing rule from a zone ruleset.
   */
  delete(
    zoneId: string,
    rulesetId: string,
    ruleId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleDeleteResponse> {
    return this._client.delete(`/zones/${zoneId}/rulesets/${rulesetId}/rules/${ruleId}`, options);
  }

  /**
   * Adds a new rule to a zone ruleset. The rule will be added to the end of the
   * existing list of rules in the ruleset by default.
   */
  zoneRulesetsCreateAZoneRulesetRule(
    zoneId: string,
    rulesetId: string,
    body: RuleZoneRulesetsCreateAZoneRulesetRuleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleZoneRulesetsCreateAZoneRulesetRuleResponse> {
    return this._client.post(`/zones/${zoneId}/rulesets/${rulesetId}/rules`, { body, ...options });
  }
}

export interface RuleUpdateResponse {
  errors?: unknown;

  /**
   * A list of warning messages.
   */
  messages?: Array<RuleUpdateResponse.Message>;

  result?: RuleUpdateResponse.Result;

  /**
   * Whether the API call was successful.
   */
  success?: true;
}

export namespace RuleUpdateResponse {
  /**
   * A message.
   */
  export interface Message {
    /**
     * A text description of this message.
     */
    message: string;

    /**
     * A unique code for this message.
     */
    code?: number;

    /**
     * The source of this message.
     */
    source?: Message.Source;
  }

  export namespace Message {
    /**
     * The source of this message.
     */
    export interface Source {
      /**
       * A JSON pointer to the field that is the source of the message.
       */
      pointer: string;
    }
  }

  export interface Result {
    id?: unknown;

    /**
     * An informative description of the ruleset.
     */
    description?: string;

    /**
     * The kind of the ruleset.
     */
    kind?: 'managed' | 'custom' | 'root' | 'zone';

    /**
     * The timestamp of when the ruleset was last modified.
     */
    last_updated?: string;

    /**
     * The human-readable name of the ruleset.
     */
    name?: string;

    /**
     * The phase of the ruleset.
     */
    phase?:
      | 'ddos_l4'
      | 'ddos_l7'
      | 'http_config_settings'
      | 'http_custom_errors'
      | 'http_log_custom_fields'
      | 'http_ratelimit'
      | 'http_request_cache_settings'
      | 'http_request_dynamic_redirect'
      | 'http_request_firewall_custom'
      | 'http_request_firewall_managed'
      | 'http_request_late_transform'
      | 'http_request_origin'
      | 'http_request_redirect'
      | 'http_request_sanitize'
      | 'http_request_sbfm'
      | 'http_request_select_configuration'
      | 'http_request_transform'
      | 'http_response_compression'
      | 'http_response_firewall_managed'
      | 'http_response_headers_transform'
      | 'magic_transit'
      | 'magic_transit_ids_managed'
      | 'magic_transit_managed';

    /**
     * The list of rules in the ruleset.
     */
    rules?: Array<unknown>;

    /**
     * The version of the ruleset.
     */
    version?: string;
  }
}

export interface RuleDeleteResponse {
  errors?: unknown;

  /**
   * A list of warning messages.
   */
  messages?: Array<RuleDeleteResponse.Message>;

  result?: RuleDeleteResponse.Result;

  /**
   * Whether the API call was successful.
   */
  success?: true;
}

export namespace RuleDeleteResponse {
  /**
   * A message.
   */
  export interface Message {
    /**
     * A text description of this message.
     */
    message: string;

    /**
     * A unique code for this message.
     */
    code?: number;

    /**
     * The source of this message.
     */
    source?: Message.Source;
  }

  export namespace Message {
    /**
     * The source of this message.
     */
    export interface Source {
      /**
       * A JSON pointer to the field that is the source of the message.
       */
      pointer: string;
    }
  }

  export interface Result {
    id?: unknown;

    /**
     * An informative description of the ruleset.
     */
    description?: string;

    /**
     * The kind of the ruleset.
     */
    kind?: 'managed' | 'custom' | 'root' | 'zone';

    /**
     * The timestamp of when the ruleset was last modified.
     */
    last_updated?: string;

    /**
     * The human-readable name of the ruleset.
     */
    name?: string;

    /**
     * The phase of the ruleset.
     */
    phase?:
      | 'ddos_l4'
      | 'ddos_l7'
      | 'http_config_settings'
      | 'http_custom_errors'
      | 'http_log_custom_fields'
      | 'http_ratelimit'
      | 'http_request_cache_settings'
      | 'http_request_dynamic_redirect'
      | 'http_request_firewall_custom'
      | 'http_request_firewall_managed'
      | 'http_request_late_transform'
      | 'http_request_origin'
      | 'http_request_redirect'
      | 'http_request_sanitize'
      | 'http_request_sbfm'
      | 'http_request_select_configuration'
      | 'http_request_transform'
      | 'http_response_compression'
      | 'http_response_firewall_managed'
      | 'http_response_headers_transform'
      | 'magic_transit'
      | 'magic_transit_ids_managed'
      | 'magic_transit_managed';

    /**
     * The list of rules in the ruleset.
     */
    rules?: Array<unknown>;

    /**
     * The version of the ruleset.
     */
    version?: string;
  }
}

export interface RuleZoneRulesetsCreateAZoneRulesetRuleResponse {
  errors?: unknown;

  /**
   * A list of warning messages.
   */
  messages?: Array<RuleZoneRulesetsCreateAZoneRulesetRuleResponse.Message>;

  result?: RuleZoneRulesetsCreateAZoneRulesetRuleResponse.Result;

  /**
   * Whether the API call was successful.
   */
  success?: true;
}

export namespace RuleZoneRulesetsCreateAZoneRulesetRuleResponse {
  /**
   * A message.
   */
  export interface Message {
    /**
     * A text description of this message.
     */
    message: string;

    /**
     * A unique code for this message.
     */
    code?: number;

    /**
     * The source of this message.
     */
    source?: Message.Source;
  }

  export namespace Message {
    /**
     * The source of this message.
     */
    export interface Source {
      /**
       * A JSON pointer to the field that is the source of the message.
       */
      pointer: string;
    }
  }

  export interface Result {
    id?: unknown;

    /**
     * An informative description of the ruleset.
     */
    description?: string;

    /**
     * The kind of the ruleset.
     */
    kind?: 'managed' | 'custom' | 'root' | 'zone';

    /**
     * The timestamp of when the ruleset was last modified.
     */
    last_updated?: string;

    /**
     * The human-readable name of the ruleset.
     */
    name?: string;

    /**
     * The phase of the ruleset.
     */
    phase?:
      | 'ddos_l4'
      | 'ddos_l7'
      | 'http_config_settings'
      | 'http_custom_errors'
      | 'http_log_custom_fields'
      | 'http_ratelimit'
      | 'http_request_cache_settings'
      | 'http_request_dynamic_redirect'
      | 'http_request_firewall_custom'
      | 'http_request_firewall_managed'
      | 'http_request_late_transform'
      | 'http_request_origin'
      | 'http_request_redirect'
      | 'http_request_sanitize'
      | 'http_request_sbfm'
      | 'http_request_select_configuration'
      | 'http_request_transform'
      | 'http_response_compression'
      | 'http_response_firewall_managed'
      | 'http_response_headers_transform'
      | 'magic_transit'
      | 'magic_transit_ids_managed'
      | 'magic_transit_managed';

    /**
     * The list of rules in the ruleset.
     */
    rules?: Array<unknown>;

    /**
     * The version of the ruleset.
     */
    version?: string;
  }
}

export interface RuleUpdateParams {
  position?: RuleUpdateParams.Before | RuleUpdateParams.After | RuleUpdateParams.Index;
}

export namespace RuleUpdateParams {
  export interface Before {
    /**
     * The ID of another rule to place the rule before. An empty value causes the rule
     * to be placed at the top.
     */
    before?: string;
  }

  export interface After {
    /**
     * The ID of another rule to place the rule after. An empty value causes the rule
     * to be placed at the bottom.
     */
    after?: string;
  }

  export interface Index {
    /**
     * An index at which to place the rule, where index 1 is the first rule.
     */
    index?: number;
  }
}

export interface RuleZoneRulesetsCreateAZoneRulesetRuleParams {
  position?:
    | RuleZoneRulesetsCreateAZoneRulesetRuleParams.Before
    | RuleZoneRulesetsCreateAZoneRulesetRuleParams.After
    | RuleZoneRulesetsCreateAZoneRulesetRuleParams.Index;
}

export namespace RuleZoneRulesetsCreateAZoneRulesetRuleParams {
  export interface Before {
    /**
     * The ID of another rule to place the rule before. An empty value causes the rule
     * to be placed at the top.
     */
    before?: string;
  }

  export interface After {
    /**
     * The ID of another rule to place the rule after. An empty value causes the rule
     * to be placed at the bottom.
     */
    after?: string;
  }

  export interface Index {
    /**
     * An index at which to place the rule, where index 1 is the first rule.
     */
    index?: number;
  }
}

export namespace Rules {
  export import RuleUpdateResponse = RulesAPI.RuleUpdateResponse;
  export import RuleDeleteResponse = RulesAPI.RuleDeleteResponse;
  export import RuleZoneRulesetsCreateAZoneRulesetRuleResponse = RulesAPI.RuleZoneRulesetsCreateAZoneRulesetRuleResponse;
  export import RuleUpdateParams = RulesAPI.RuleUpdateParams;
  export import RuleZoneRulesetsCreateAZoneRulesetRuleParams = RulesAPI.RuleZoneRulesetsCreateAZoneRulesetRuleParams;
}
