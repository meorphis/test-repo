// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as RulesAPI from 'cloudflare/resources/zones/firewalls/access-rules/rules';
import { Page } from 'cloudflare/pagination';

export class Rules extends APIResource {
  /**
   * Updates an IP Access rule defined at the zone level. You can only update the
   * rule action (`mode` parameter) and notes.
   */
  update(
    zoneId: string,
    identifier: string,
    body: RuleUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleUpdateResponse> {
    return this._client.patch(`/zones/${zoneId}/firewall/access_rules/rules/${identifier}`, {
      body,
      ...options,
    });
  }

  /**
   * Deletes an IP Access rule defined at the zone level.
   *
   * Optionally, you can use the `cascade` property to specify that you wish to
   * delete similar rules in other zones managed by the same zone owner.
   */
  delete(
    zoneId: string,
    identifier: string,
    body: RuleDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleDeleteResponse> {
    return this._client.delete(`/zones/${zoneId}/firewall/access_rules/rules/${identifier}`, {
      body,
      ...options,
    });
  }

  /**
   * Creates a new IP Access rule for a zone.
   *
   * Note: To create an IP Access rule that applies to multiple zones, refer to
   * [IP Access rules for a user](#ip-access-rules-for-a-user) or
   * [IP Access rules for an account](#ip-access-rules-for-an-account) as
   * appropriate.
   */
  ipAccessRulesForAZoneCreateAnIPAccessRule(
    zoneId: string,
    body: RuleIPAccessRulesForAZoneCreateAnIPAccessRuleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleIPAccessRulesForAZoneCreateAnIPAccessRuleResponse> {
    return this._client.post(`/zones/${zoneId}/firewall/access_rules/rules`, { body, ...options });
  }

  /**
   * Fetches IP Access rules of a zone. You can filter the results using several
   * optional parameters.
   */
  ipAccessRulesForAZoneListIPAccessRules(
    zoneId: string,
    query?: RuleIPAccessRulesForAZoneListIPAccessRulesParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    RuleIPAccessRulesForAZoneListIPAccessRulesResponsesPage,
    RuleIPAccessRulesForAZoneListIPAccessRulesResponse
  >;
  ipAccessRulesForAZoneListIPAccessRules(
    zoneId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    RuleIPAccessRulesForAZoneListIPAccessRulesResponsesPage,
    RuleIPAccessRulesForAZoneListIPAccessRulesResponse
  >;
  ipAccessRulesForAZoneListIPAccessRules(
    zoneId: string,
    query: RuleIPAccessRulesForAZoneListIPAccessRulesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    RuleIPAccessRulesForAZoneListIPAccessRulesResponsesPage,
    RuleIPAccessRulesForAZoneListIPAccessRulesResponse
  > {
    if (isRequestOptions(query)) {
      return this.ipAccessRulesForAZoneListIPAccessRules(zoneId, {}, query);
    }
    return this._client.getAPIList(
      `/zones/${zoneId}/firewall/access_rules/rules`,
      RuleIPAccessRulesForAZoneListIPAccessRulesResponsesPage,
      { query, ...options },
    );
  }
}

export class RuleIPAccessRulesForAZoneListIPAccessRulesResponsesPage extends Page<RuleIPAccessRulesForAZoneListIPAccessRulesResponse> {}

export interface RuleUpdateResponse {
  errors?: Array<RuleUpdateResponse.Error>;

  messages?: Array<RuleUpdateResponse.Message>;

  result?: RuleUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace RuleUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    /**
     * The unique identifier of the IP Access rule.
     */
    id: string;

    /**
     * The available actions that a rule can apply to a matched request.
     */
    allowed_modes: Array<'block' | 'challenge' | 'whitelist' | 'js_challenge' | 'managed_challenge'>;

    /**
     * The rule configuration.
     */
    configuration:
      | Result.DZw70ubTIPConfiguration
      | Result.DZw70ubTIpv6Configuration
      | Result.DZw70ubTCidrConfiguration
      | Result.DZw70ubTASNConfiguration
      | Result.DZw70ubTCountryConfiguration;

    /**
     * The action to apply to a matched request.
     */
    mode: 'block' | 'challenge' | 'whitelist' | 'js_challenge' | 'managed_challenge';

    /**
     * The timestamp of when the rule was created.
     */
    created_on?: string;

    /**
     * The timestamp of when the rule was last modified.
     */
    modified_on?: string;

    /**
     * An informative summary of the rule, typically used as a reminder or explanation.
     */
    notes?: string;
  }

  export namespace Result {
    export interface DZw70ubTIPConfiguration {
      /**
       * The configuration target. You must set the target to `ip` when specifying an IP
       * address in the rule.
       */
      target?: 'ip';

      /**
       * The IP address to match. This address will be compared to the IP address of
       * incoming requests.
       */
      value?: string;
    }

    export interface DZw70ubTIpv6Configuration {
      /**
       * The configuration target. You must set the target to `ip6` when specifying an
       * IPv6 address in the rule.
       */
      target?: 'ip6';

      /**
       * The IPv6 address to match.
       */
      value?: string;
    }

    export interface DZw70ubTCidrConfiguration {
      /**
       * The configuration target. You must set the target to `ip_range` when specifying
       * an IP address range in the rule.
       */
      target?: 'ip_range';

      /**
       * The IP address range to match. You can only use prefix lengths `/16` and `/24`
       * for IPv4 ranges, and prefix lengths `/32`, `/48`, and `/64` for IPv6 ranges.
       */
      value?: string;
    }

    export interface DZw70ubTASNConfiguration {
      /**
       * The configuration target. You must set the target to `asn` when specifying an
       * Autonomous System Number (ASN) in the rule.
       */
      target?: 'asn';

      /**
       * The AS number to match.
       */
      value?: string;
    }

    export interface DZw70ubTCountryConfiguration {
      /**
       * The configuration target. You must set the target to `country` when specifying a
       * country code in the rule.
       */
      target?: 'country';

      /**
       * The two-letter ISO-3166-1 alpha-2 code to match. For more information, refer to
       * [IP Access rules: Parameters](https://developers.cloudflare.com/waf/tools/ip-access-rules/parameters/#country).
       */
      value?: string;
    }
  }
}

export interface RuleDeleteResponse {
  errors?: Array<RuleDeleteResponse.Error>;

  messages?: Array<RuleDeleteResponse.Message>;

  result?: RuleDeleteResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace RuleDeleteResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    /**
     * The unique identifier of the IP Access rule.
     */
    id?: string;
  }
}

export interface RuleIPAccessRulesForAZoneCreateAnIPAccessRuleResponse {
  errors?: Array<RuleIPAccessRulesForAZoneCreateAnIPAccessRuleResponse.Error>;

  messages?: Array<RuleIPAccessRulesForAZoneCreateAnIPAccessRuleResponse.Message>;

  result?: RuleIPAccessRulesForAZoneCreateAnIPAccessRuleResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace RuleIPAccessRulesForAZoneCreateAnIPAccessRuleResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    /**
     * The unique identifier of the IP Access rule.
     */
    id: string;

    /**
     * The available actions that a rule can apply to a matched request.
     */
    allowed_modes: Array<'block' | 'challenge' | 'whitelist' | 'js_challenge' | 'managed_challenge'>;

    /**
     * The rule configuration.
     */
    configuration:
      | Result.DZw70ubTIPConfiguration
      | Result.DZw70ubTIpv6Configuration
      | Result.DZw70ubTCidrConfiguration
      | Result.DZw70ubTASNConfiguration
      | Result.DZw70ubTCountryConfiguration;

    /**
     * The action to apply to a matched request.
     */
    mode: 'block' | 'challenge' | 'whitelist' | 'js_challenge' | 'managed_challenge';

    /**
     * The timestamp of when the rule was created.
     */
    created_on?: string;

    /**
     * The timestamp of when the rule was last modified.
     */
    modified_on?: string;

    /**
     * An informative summary of the rule, typically used as a reminder or explanation.
     */
    notes?: string;
  }

  export namespace Result {
    export interface DZw70ubTIPConfiguration {
      /**
       * The configuration target. You must set the target to `ip` when specifying an IP
       * address in the rule.
       */
      target?: 'ip';

      /**
       * The IP address to match. This address will be compared to the IP address of
       * incoming requests.
       */
      value?: string;
    }

    export interface DZw70ubTIpv6Configuration {
      /**
       * The configuration target. You must set the target to `ip6` when specifying an
       * IPv6 address in the rule.
       */
      target?: 'ip6';

      /**
       * The IPv6 address to match.
       */
      value?: string;
    }

    export interface DZw70ubTCidrConfiguration {
      /**
       * The configuration target. You must set the target to `ip_range` when specifying
       * an IP address range in the rule.
       */
      target?: 'ip_range';

      /**
       * The IP address range to match. You can only use prefix lengths `/16` and `/24`
       * for IPv4 ranges, and prefix lengths `/32`, `/48`, and `/64` for IPv6 ranges.
       */
      value?: string;
    }

    export interface DZw70ubTASNConfiguration {
      /**
       * The configuration target. You must set the target to `asn` when specifying an
       * Autonomous System Number (ASN) in the rule.
       */
      target?: 'asn';

      /**
       * The AS number to match.
       */
      value?: string;
    }

    export interface DZw70ubTCountryConfiguration {
      /**
       * The configuration target. You must set the target to `country` when specifying a
       * country code in the rule.
       */
      target?: 'country';

      /**
       * The two-letter ISO-3166-1 alpha-2 code to match. For more information, refer to
       * [IP Access rules: Parameters](https://developers.cloudflare.com/waf/tools/ip-access-rules/parameters/#country).
       */
      value?: string;
    }
  }
}

export interface RuleIPAccessRulesForAZoneListIPAccessRulesResponse {
  /**
   * The unique identifier of the IP Access rule.
   */
  id: string;

  /**
   * The available actions that a rule can apply to a matched request.
   */
  allowed_modes: Array<'block' | 'challenge' | 'whitelist' | 'js_challenge' | 'managed_challenge'>;

  /**
   * The rule configuration.
   */
  configuration:
    | RuleIPAccessRulesForAZoneListIPAccessRulesResponse.DZw70ubTIPConfiguration
    | RuleIPAccessRulesForAZoneListIPAccessRulesResponse.DZw70ubTIpv6Configuration
    | RuleIPAccessRulesForAZoneListIPAccessRulesResponse.DZw70ubTCidrConfiguration
    | RuleIPAccessRulesForAZoneListIPAccessRulesResponse.DZw70ubTASNConfiguration
    | RuleIPAccessRulesForAZoneListIPAccessRulesResponse.DZw70ubTCountryConfiguration;

  /**
   * The action to apply to a matched request.
   */
  mode: 'block' | 'challenge' | 'whitelist' | 'js_challenge' | 'managed_challenge';

  /**
   * The timestamp of when the rule was created.
   */
  created_on?: string;

  /**
   * The timestamp of when the rule was last modified.
   */
  modified_on?: string;

  /**
   * An informative summary of the rule, typically used as a reminder or explanation.
   */
  notes?: string;
}

export namespace RuleIPAccessRulesForAZoneListIPAccessRulesResponse {
  export interface DZw70ubTIPConfiguration {
    /**
     * The configuration target. You must set the target to `ip` when specifying an IP
     * address in the rule.
     */
    target?: 'ip';

    /**
     * The IP address to match. This address will be compared to the IP address of
     * incoming requests.
     */
    value?: string;
  }

  export interface DZw70ubTIpv6Configuration {
    /**
     * The configuration target. You must set the target to `ip6` when specifying an
     * IPv6 address in the rule.
     */
    target?: 'ip6';

    /**
     * The IPv6 address to match.
     */
    value?: string;
  }

  export interface DZw70ubTCidrConfiguration {
    /**
     * The configuration target. You must set the target to `ip_range` when specifying
     * an IP address range in the rule.
     */
    target?: 'ip_range';

    /**
     * The IP address range to match. You can only use prefix lengths `/16` and `/24`
     * for IPv4 ranges, and prefix lengths `/32`, `/48`, and `/64` for IPv6 ranges.
     */
    value?: string;
  }

  export interface DZw70ubTASNConfiguration {
    /**
     * The configuration target. You must set the target to `asn` when specifying an
     * Autonomous System Number (ASN) in the rule.
     */
    target?: 'asn';

    /**
     * The AS number to match.
     */
    value?: string;
  }

  export interface DZw70ubTCountryConfiguration {
    /**
     * The configuration target. You must set the target to `country` when specifying a
     * country code in the rule.
     */
    target?: 'country';

    /**
     * The two-letter ISO-3166-1 alpha-2 code to match. For more information, refer to
     * [IP Access rules: Parameters](https://developers.cloudflare.com/waf/tools/ip-access-rules/parameters/#country).
     */
    value?: string;
  }
}

export interface RuleUpdateParams {
  /**
   * The action to apply to a matched request.
   */
  mode?: 'block' | 'challenge' | 'whitelist' | 'js_challenge' | 'managed_challenge';

  /**
   * An informative summary of the rule, typically used as a reminder or explanation.
   */
  notes?: string;
}

export interface RuleDeleteParams {
  /**
   * The level to attempt to delete similar rules defined for other zones with the
   * same owner. The default value is `none`, which will only delete the current
   * rule. Using `basic` will delete rules that match the same action (mode) and
   * configuration, while using `aggressive` will delete rules that match the same
   * configuration.
   */
  cascade?: 'none' | 'basic' | 'aggressive';
}

export interface RuleIPAccessRulesForAZoneCreateAnIPAccessRuleParams {
  /**
   * The rule configuration.
   */
  configuration:
    | RuleIPAccessRulesForAZoneCreateAnIPAccessRuleParams.DZw70ubTIPConfiguration
    | RuleIPAccessRulesForAZoneCreateAnIPAccessRuleParams.DZw70ubTIpv6Configuration
    | RuleIPAccessRulesForAZoneCreateAnIPAccessRuleParams.DZw70ubTCidrConfiguration
    | RuleIPAccessRulesForAZoneCreateAnIPAccessRuleParams.DZw70ubTASNConfiguration
    | RuleIPAccessRulesForAZoneCreateAnIPAccessRuleParams.DZw70ubTCountryConfiguration;

  /**
   * The action to apply to a matched request.
   */
  mode: 'block' | 'challenge' | 'whitelist' | 'js_challenge' | 'managed_challenge';

  /**
   * An informative summary of the rule, typically used as a reminder or explanation.
   */
  notes: string;
}

export namespace RuleIPAccessRulesForAZoneCreateAnIPAccessRuleParams {
  export interface DZw70ubTIPConfiguration {
    /**
     * The configuration target. You must set the target to `ip` when specifying an IP
     * address in the rule.
     */
    target?: 'ip';

    /**
     * The IP address to match. This address will be compared to the IP address of
     * incoming requests.
     */
    value?: string;
  }

  export interface DZw70ubTIpv6Configuration {
    /**
     * The configuration target. You must set the target to `ip6` when specifying an
     * IPv6 address in the rule.
     */
    target?: 'ip6';

    /**
     * The IPv6 address to match.
     */
    value?: string;
  }

  export interface DZw70ubTCidrConfiguration {
    /**
     * The configuration target. You must set the target to `ip_range` when specifying
     * an IP address range in the rule.
     */
    target?: 'ip_range';

    /**
     * The IP address range to match. You can only use prefix lengths `/16` and `/24`
     * for IPv4 ranges, and prefix lengths `/32`, `/48`, and `/64` for IPv6 ranges.
     */
    value?: string;
  }

  export interface DZw70ubTASNConfiguration {
    /**
     * The configuration target. You must set the target to `asn` when specifying an
     * Autonomous System Number (ASN) in the rule.
     */
    target?: 'asn';

    /**
     * The AS number to match.
     */
    value?: string;
  }

  export interface DZw70ubTCountryConfiguration {
    /**
     * The configuration target. You must set the target to `country` when specifying a
     * country code in the rule.
     */
    target?: 'country';

    /**
     * The two-letter ISO-3166-1 alpha-2 code to match. For more information, refer to
     * [IP Access rules: Parameters](https://developers.cloudflare.com/waf/tools/ip-access-rules/parameters/#country).
     */
    value?: string;
  }
}

export interface RuleIPAccessRulesForAZoneListIPAccessRulesParams {
  /**
   * The direction used to sort returned rules.
   */
  direction?: 'asc' | 'desc';

  'egs-pagination'?: RuleIPAccessRulesForAZoneListIPAccessRulesParams.EgsPagination;

  filters?: RuleIPAccessRulesForAZoneListIPAccessRulesParams.Filters;

  /**
   * The field used to sort returned rules.
   */
  order?: 'configuration.target' | 'configuration.value' | 'mode';

  /**
   * Requested page within paginated list of results.
   */
  page?: number;

  /**
   * Maximum number of results requested.
   */
  per_page?: number;
}

export namespace RuleIPAccessRulesForAZoneListIPAccessRulesParams {
  export interface EgsPagination {
    json?: EgsPagination.Json;
  }

  export namespace EgsPagination {
    export interface Json {
      /**
       * The page number of paginated results.
       */
      page?: number;

      /**
       * The maximum number of results per page. You can only set the value to `1` or to
       * a multiple of 5 such as `5`, `10`, `15`, or `20`.
       */
      per_page?: number;
    }
  }

  export interface Filters {
    /**
     * The target to search in existing rules.
     */
    'configuration.target'?: 'ip' | 'ip_range' | 'asn' | 'country';

    /**
     * The target value to search for in existing rules: an IP address, an IP address
     * range, or a country code, depending on the provided `configuration.target`.
     * Notes: You can search for a single IPv4 address, an IP address range with a
     * subnet of '/16' or '/24', or a two-letter ISO-3166-1 alpha-2 country code.
     */
    'configuration.value'?: string;

    /**
     * When set to `all`, all the search requirements must match. When set to `any`,
     * only one of the search requirements has to match.
     */
    match?: 'any' | 'all';

    /**
     * The action to apply to a matched request.
     */
    mode?: 'block' | 'challenge' | 'whitelist' | 'js_challenge' | 'managed_challenge';

    /**
     * The string to search for in the notes of existing IP Access rules. Notes: For
     * example, the string 'attack' would match IP Access rules with notes 'Attack
     * 26/02' and 'Attack 27/02'. The search is case insensitive.
     */
    notes?: string;
  }
}

export namespace Rules {
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
