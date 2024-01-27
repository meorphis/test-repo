// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as RulesAPI from 'cloudflare/resources/accounts/firewalls/access-rules/rules';
import { Page } from 'cloudflare/pagination';

export class Rules extends APIResource {
  /**
   * Fetches the details of an IP Access rule defined at the account level.
   */
  retrieve(
    accountIdentifier: unknown,
    identifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleRetrieveResponse> {
    return this._client.get(
      `/accounts/${accountIdentifier}/firewall/access_rules/rules/${identifier}`,
      options,
    );
  }

  /**
   * Updates an IP Access rule defined at the account level.
   *
   * Note: This operation will affect all zones in the account.
   */
  update(
    accountIdentifier: unknown,
    identifier: unknown,
    body: RuleUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleUpdateResponse> {
    return this._client.patch(`/accounts/${accountIdentifier}/firewall/access_rules/rules/${identifier}`, {
      body,
      ...options,
    });
  }

  /**
   * Deletes an existing IP Access rule defined at the account level.
   *
   * Note: This operation will affect all zones in the account.
   */
  delete(
    accountIdentifier: unknown,
    identifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleDeleteResponse> {
    return this._client.delete(
      `/accounts/${accountIdentifier}/firewall/access_rules/rules/${identifier}`,
      options,
    );
  }

  /**
   * Creates a new IP Access rule for an account. The rule will apply to all zones in
   * the account.
   *
   * Note: To create an IP Access rule that applies to a single zone, refer to the
   * [IP Access rules for a zone](#ip-access-rules-for-a-zone) endpoints.
   */
  ipAccessRulesForAnAccountCreateAnIPAccessRule(
    accountIdentifier: unknown,
    body: RuleIPAccessRulesForAnAccountCreateAnIPAccessRuleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleIPAccessRulesForAnAccountCreateAnIPAccessRuleResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/firewall/access_rules/rules`, {
      body,
      ...options,
    });
  }

  /**
   * Fetches IP Access rules of an account. These rules apply to all the zones in the
   * account. You can filter the results using several optional parameters.
   */
  ipAccessRulesForAnAccountListIPAccessRules(
    accountIdentifier: unknown,
    query?: RuleIPAccessRulesForAnAccountListIPAccessRulesParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    RuleIPAccessRulesForAnAccountListIPAccessRulesResponsesPage,
    RuleIPAccessRulesForAnAccountListIPAccessRulesResponse
  >;
  ipAccessRulesForAnAccountListIPAccessRules(
    accountIdentifier: unknown,
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    RuleIPAccessRulesForAnAccountListIPAccessRulesResponsesPage,
    RuleIPAccessRulesForAnAccountListIPAccessRulesResponse
  >;
  ipAccessRulesForAnAccountListIPAccessRules(
    accountIdentifier: unknown,
    query: RuleIPAccessRulesForAnAccountListIPAccessRulesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    RuleIPAccessRulesForAnAccountListIPAccessRulesResponsesPage,
    RuleIPAccessRulesForAnAccountListIPAccessRulesResponse
  > {
    if (isRequestOptions(query)) {
      return this.ipAccessRulesForAnAccountListIPAccessRules(accountIdentifier, {}, query);
    }
    return this._client.getAPIList(
      `/accounts/${accountIdentifier}/firewall/access_rules/rules`,
      RuleIPAccessRulesForAnAccountListIPAccessRulesResponsesPage,
      { query, ...options },
    );
  }
}

export class RuleIPAccessRulesForAnAccountListIPAccessRulesResponsesPage extends Page<RuleIPAccessRulesForAnAccountListIPAccessRulesResponse> {}

export interface RuleRetrieveResponse {
  errors?: Array<RuleRetrieveResponse.Error>;

  messages?: Array<RuleRetrieveResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace RuleRetrieveResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface RuleUpdateResponse {
  errors?: Array<RuleUpdateResponse.Error>;

  messages?: Array<RuleUpdateResponse.Message>;

  result?: unknown;

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
}

export interface RuleDeleteResponse {
  errors?: Array<RuleDeleteResponse.Error>;

  messages?: Array<RuleDeleteResponse.Message>;

  result?: RuleDeleteResponse.Result | null;

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
     * Identifier
     */
    id: string;
  }
}

export interface RuleIPAccessRulesForAnAccountCreateAnIPAccessRuleResponse {
  errors?: Array<RuleIPAccessRulesForAnAccountCreateAnIPAccessRuleResponse.Error>;

  messages?: Array<RuleIPAccessRulesForAnAccountCreateAnIPAccessRuleResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace RuleIPAccessRulesForAnAccountCreateAnIPAccessRuleResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export type RuleIPAccessRulesForAnAccountListIPAccessRulesResponse = unknown;

export interface RuleUpdateParams {
  /**
   * The rule configuration.
   */
  configuration:
    | RuleUpdateParams.DZw70ubTIPConfiguration
    | RuleUpdateParams.DZw70ubTIpv6Configuration
    | RuleUpdateParams.DZw70ubTCidrConfiguration
    | RuleUpdateParams.DZw70ubTASNConfiguration
    | RuleUpdateParams.DZw70ubTCountryConfiguration;

  /**
   * The action to apply to a matched request.
   */
  mode: 'block' | 'challenge' | 'whitelist' | 'js_challenge' | 'managed_challenge';

  /**
   * An informative summary of the rule, typically used as a reminder or explanation.
   */
  notes?: string;
}

export namespace RuleUpdateParams {
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

export interface RuleIPAccessRulesForAnAccountCreateAnIPAccessRuleParams {
  /**
   * The rule configuration.
   */
  configuration:
    | RuleIPAccessRulesForAnAccountCreateAnIPAccessRuleParams.DZw70ubTIPConfiguration
    | RuleIPAccessRulesForAnAccountCreateAnIPAccessRuleParams.DZw70ubTIpv6Configuration
    | RuleIPAccessRulesForAnAccountCreateAnIPAccessRuleParams.DZw70ubTCidrConfiguration
    | RuleIPAccessRulesForAnAccountCreateAnIPAccessRuleParams.DZw70ubTASNConfiguration
    | RuleIPAccessRulesForAnAccountCreateAnIPAccessRuleParams.DZw70ubTCountryConfiguration;

  /**
   * The action to apply to a matched request.
   */
  mode: 'block' | 'challenge' | 'whitelist' | 'js_challenge' | 'managed_challenge';

  /**
   * An informative summary of the rule, typically used as a reminder or explanation.
   */
  notes?: string;
}

export namespace RuleIPAccessRulesForAnAccountCreateAnIPAccessRuleParams {
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

export interface RuleIPAccessRulesForAnAccountListIPAccessRulesParams {
  /**
   * The direction used to sort returned rules.
   */
  direction?: 'asc' | 'desc';

  'egs-pagination'?: RuleIPAccessRulesForAnAccountListIPAccessRulesParams.EgsPagination;

  filters?: RuleIPAccessRulesForAnAccountListIPAccessRulesParams.Filters;

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

export namespace RuleIPAccessRulesForAnAccountListIPAccessRulesParams {
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
