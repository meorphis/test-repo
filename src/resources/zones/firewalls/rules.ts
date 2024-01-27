// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as RulesAPI from 'cloudflare/resources/zones/firewalls/rules';
import { Page } from 'cloudflare/pagination';

export class Rules extends APIResource {
  /**
   * Fetches the details of a firewall rule.
   */
  retrieve(
    zoneIdentifier: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleRetrieveResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/firewall/rules/${id}`, options);
  }

  /**
   * Updates an existing firewall rule.
   */
  update(
    zoneIdentifier: string,
    id: string,
    body: RuleUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleUpdateResponse> {
    return this._client.put(`/zones/${zoneIdentifier}/firewall/rules/${id}`, { body, ...options });
  }

  /**
   * Deletes an existing firewall rule.
   */
  delete(
    zoneIdentifier: string,
    id: string,
    body: RuleDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleDeleteResponse> {
    return this._client.delete(`/zones/${zoneIdentifier}/firewall/rules/${id}`, { body, ...options });
  }

  /**
   * Create one or more firewall rules.
   */
  firewallRulesCreateFirewallRules(
    zoneIdentifier: string,
    body: RuleFirewallRulesCreateFirewallRulesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleFirewallRulesCreateFirewallRulesResponse> {
    return this._client.post(`/zones/${zoneIdentifier}/firewall/rules`, { body, ...options });
  }

  /**
   * Fetches firewall rules in a zone. You can filter the results using several
   * optional parameters.
   */
  firewallRulesListFirewallRules(
    zoneIdentifier: string,
    query?: RuleFirewallRulesListFirewallRulesParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    RuleFirewallRulesListFirewallRulesResponsesPage,
    RuleFirewallRulesListFirewallRulesResponse
  >;
  firewallRulesListFirewallRules(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    RuleFirewallRulesListFirewallRulesResponsesPage,
    RuleFirewallRulesListFirewallRulesResponse
  >;
  firewallRulesListFirewallRules(
    zoneIdentifier: string,
    query: RuleFirewallRulesListFirewallRulesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    RuleFirewallRulesListFirewallRulesResponsesPage,
    RuleFirewallRulesListFirewallRulesResponse
  > {
    if (isRequestOptions(query)) {
      return this.firewallRulesListFirewallRules(zoneIdentifier, {}, query);
    }
    return this._client.getAPIList(
      `/zones/${zoneIdentifier}/firewall/rules`,
      RuleFirewallRulesListFirewallRulesResponsesPage,
      { query, ...options },
    );
  }

  /**
   * Updates one or more existing firewall rules.
   */
  firewallRulesUpdateFirewallRules(
    zoneIdentifier: string,
    body: RuleFirewallRulesUpdateFirewallRulesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleFirewallRulesUpdateFirewallRulesResponse> {
    return this._client.put(`/zones/${zoneIdentifier}/firewall/rules`, { body, ...options });
  }

  /**
   * Updates the priority of existing firewall rules.
   */
  firewallRulesUpdatePriorityOfFirewallRules(
    zoneIdentifier: string,
    body: RuleFirewallRulesUpdatePriorityOfFirewallRulesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleFirewallRulesUpdatePriorityOfFirewallRulesResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/firewall/rules`, { body, ...options });
  }
}

export class RuleFirewallRulesListFirewallRulesResponsesPage extends Page<RuleFirewallRulesListFirewallRulesResponse> {}

export interface RuleRetrieveResponse {
  errors?: Array<RuleRetrieveResponse.Error>;

  messages?: Array<RuleRetrieveResponse.Message>;

  result?: RuleRetrieveResponse.Result;

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

  export interface Result {
    /**
     * The unique identifier of the firewall rule.
     */
    id?: string;

    /**
     * The action to apply to a matched request. The `log` action is only available on
     * an Enterprise plan.
     */
    action?: 'block' | 'challenge' | 'js_challenge' | 'managed_challenge' | 'allow' | 'log' | 'bypass';

    /**
     * An informative summary of the firewall rule.
     */
    description?: string;

    filter?: Result.DZw70ubTFilter | Result.DZw70ubTDeletedFilter;

    /**
     * When true, indicates that the firewall rule is currently paused.
     */
    paused?: boolean;

    /**
     * The priority of the rule. Optional value used to define the processing order. A
     * lower number indicates a higher priority. If not provided, rules with a defined
     * priority will be processed before rules without a priority.
     */
    priority?: number;

    products?: Array<'zoneLockdown' | 'uaBlock' | 'bic' | 'hot' | 'securityLevel' | 'rateLimit' | 'waf'>;

    /**
     * A short reference tag. Allows you to select related firewall rules.
     */
    ref?: string;
  }

  export namespace Result {
    export interface DZw70ubTFilter {
      /**
       * The unique identifier of the filter.
       */
      id?: string;

      /**
       * An informative summary of the filter.
       */
      description?: string;

      /**
       * The filter expression. For more information, refer to
       * [Expressions](https://developers.cloudflare.com/ruleset-engine/rules-language/expressions/).
       */
      expression?: string;

      /**
       * When true, indicates that the filter is currently paused.
       */
      paused?: boolean;

      /**
       * A short reference tag. Allows you to select related filters.
       */
      ref?: string;
    }

    export interface DZw70ubTDeletedFilter {
      /**
       * The unique identifier of the filter.
       */
      id: string;

      /**
       * When true, indicates that the firewall rule was deleted.
       */
      deleted: boolean;
    }
  }
}

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
     * The unique identifier of the firewall rule.
     */
    id?: string;

    /**
     * The action to apply to a matched request. The `log` action is only available on
     * an Enterprise plan.
     */
    action?: 'block' | 'challenge' | 'js_challenge' | 'managed_challenge' | 'allow' | 'log' | 'bypass';

    /**
     * An informative summary of the firewall rule.
     */
    description?: string;

    filter?: Result.DZw70ubTFilter | Result.DZw70ubTDeletedFilter;

    /**
     * When true, indicates that the firewall rule is currently paused.
     */
    paused?: boolean;

    /**
     * The priority of the rule. Optional value used to define the processing order. A
     * lower number indicates a higher priority. If not provided, rules with a defined
     * priority will be processed before rules without a priority.
     */
    priority?: number;

    products?: Array<'zoneLockdown' | 'uaBlock' | 'bic' | 'hot' | 'securityLevel' | 'rateLimit' | 'waf'>;

    /**
     * A short reference tag. Allows you to select related firewall rules.
     */
    ref?: string;
  }

  export namespace Result {
    export interface DZw70ubTFilter {
      /**
       * The unique identifier of the filter.
       */
      id?: string;

      /**
       * An informative summary of the filter.
       */
      description?: string;

      /**
       * The filter expression. For more information, refer to
       * [Expressions](https://developers.cloudflare.com/ruleset-engine/rules-language/expressions/).
       */
      expression?: string;

      /**
       * When true, indicates that the filter is currently paused.
       */
      paused?: boolean;

      /**
       * A short reference tag. Allows you to select related filters.
       */
      ref?: string;
    }

    export interface DZw70ubTDeletedFilter {
      /**
       * The unique identifier of the filter.
       */
      id: string;

      /**
       * When true, indicates that the firewall rule was deleted.
       */
      deleted: boolean;
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
     * The unique identifier of the firewall rule.
     */
    id?: string;

    /**
     * The action to apply to a matched request. The `log` action is only available on
     * an Enterprise plan.
     */
    action?: 'block' | 'challenge' | 'js_challenge' | 'managed_challenge' | 'allow' | 'log' | 'bypass';

    /**
     * An informative summary of the firewall rule.
     */
    description?: string;

    filter?: Result.DZw70ubTFilter | Result.DZw70ubTDeletedFilter;

    /**
     * When true, indicates that the firewall rule is currently paused.
     */
    paused?: boolean;

    /**
     * The priority of the rule. Optional value used to define the processing order. A
     * lower number indicates a higher priority. If not provided, rules with a defined
     * priority will be processed before rules without a priority.
     */
    priority?: number;

    products?: Array<'zoneLockdown' | 'uaBlock' | 'bic' | 'hot' | 'securityLevel' | 'rateLimit' | 'waf'>;

    /**
     * A short reference tag. Allows you to select related firewall rules.
     */
    ref?: string;
  }

  export namespace Result {
    export interface DZw70ubTFilter {
      /**
       * The unique identifier of the filter.
       */
      id?: string;

      /**
       * An informative summary of the filter.
       */
      description?: string;

      /**
       * The filter expression. For more information, refer to
       * [Expressions](https://developers.cloudflare.com/ruleset-engine/rules-language/expressions/).
       */
      expression?: string;

      /**
       * When true, indicates that the filter is currently paused.
       */
      paused?: boolean;

      /**
       * A short reference tag. Allows you to select related filters.
       */
      ref?: string;
    }

    export interface DZw70ubTDeletedFilter {
      /**
       * The unique identifier of the filter.
       */
      id: string;

      /**
       * When true, indicates that the firewall rule was deleted.
       */
      deleted: boolean;
    }
  }
}

export interface RuleFirewallRulesCreateFirewallRulesResponse {
  errors?: Array<RuleFirewallRulesCreateFirewallRulesResponse.Error>;

  messages?: Array<RuleFirewallRulesCreateFirewallRulesResponse.Message>;

  result?: Array<RuleFirewallRulesCreateFirewallRulesResponse.Result>;

  result_info?: RuleFirewallRulesCreateFirewallRulesResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace RuleFirewallRulesCreateFirewallRulesResponse {
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
     * The unique identifier of the firewall rule.
     */
    id?: string;

    /**
     * The action to apply to a matched request. The `log` action is only available on
     * an Enterprise plan.
     */
    action?: 'block' | 'challenge' | 'js_challenge' | 'managed_challenge' | 'allow' | 'log' | 'bypass';

    /**
     * An informative summary of the firewall rule.
     */
    description?: string;

    filter?: Result.DZw70ubTFilter | Result.DZw70ubTDeletedFilter;

    /**
     * When true, indicates that the firewall rule is currently paused.
     */
    paused?: boolean;

    /**
     * The priority of the rule. Optional value used to define the processing order. A
     * lower number indicates a higher priority. If not provided, rules with a defined
     * priority will be processed before rules without a priority.
     */
    priority?: number;

    products?: Array<'zoneLockdown' | 'uaBlock' | 'bic' | 'hot' | 'securityLevel' | 'rateLimit' | 'waf'>;

    /**
     * A short reference tag. Allows you to select related firewall rules.
     */
    ref?: string;
  }

  export namespace Result {
    export interface DZw70ubTFilter {
      /**
       * The unique identifier of the filter.
       */
      id?: string;

      /**
       * An informative summary of the filter.
       */
      description?: string;

      /**
       * The filter expression. For more information, refer to
       * [Expressions](https://developers.cloudflare.com/ruleset-engine/rules-language/expressions/).
       */
      expression?: string;

      /**
       * When true, indicates that the filter is currently paused.
       */
      paused?: boolean;

      /**
       * A short reference tag. Allows you to select related filters.
       */
      ref?: string;
    }

    export interface DZw70ubTDeletedFilter {
      /**
       * The unique identifier of the filter.
       */
      id: string;

      /**
       * When true, indicates that the firewall rule was deleted.
       */
      deleted: boolean;
    }
  }

  export interface ResultInfo {
    /**
     * Total number of results for the requested service
     */
    count?: number;

    /**
     * Current page within paginated list of results
     */
    page?: number;

    /**
     * Number of results per page of results
     */
    per_page?: number;

    /**
     * Total results available without any search parameters
     */
    total_count?: number;
  }
}

export interface RuleFirewallRulesListFirewallRulesResponse {
  /**
   * The unique identifier of the firewall rule.
   */
  id?: string;

  /**
   * The action to apply to a matched request. The `log` action is only available on
   * an Enterprise plan.
   */
  action?: 'block' | 'challenge' | 'js_challenge' | 'managed_challenge' | 'allow' | 'log' | 'bypass';

  /**
   * An informative summary of the firewall rule.
   */
  description?: string;

  filter?:
    | RuleFirewallRulesListFirewallRulesResponse.DZw70ubTFilter
    | RuleFirewallRulesListFirewallRulesResponse.DZw70ubTDeletedFilter;

  /**
   * When true, indicates that the firewall rule is currently paused.
   */
  paused?: boolean;

  /**
   * The priority of the rule. Optional value used to define the processing order. A
   * lower number indicates a higher priority. If not provided, rules with a defined
   * priority will be processed before rules without a priority.
   */
  priority?: number;

  products?: Array<'zoneLockdown' | 'uaBlock' | 'bic' | 'hot' | 'securityLevel' | 'rateLimit' | 'waf'>;

  /**
   * A short reference tag. Allows you to select related firewall rules.
   */
  ref?: string;
}

export namespace RuleFirewallRulesListFirewallRulesResponse {
  export interface DZw70ubTFilter {
    /**
     * The unique identifier of the filter.
     */
    id?: string;

    /**
     * An informative summary of the filter.
     */
    description?: string;

    /**
     * The filter expression. For more information, refer to
     * [Expressions](https://developers.cloudflare.com/ruleset-engine/rules-language/expressions/).
     */
    expression?: string;

    /**
     * When true, indicates that the filter is currently paused.
     */
    paused?: boolean;

    /**
     * A short reference tag. Allows you to select related filters.
     */
    ref?: string;
  }

  export interface DZw70ubTDeletedFilter {
    /**
     * The unique identifier of the filter.
     */
    id: string;

    /**
     * When true, indicates that the firewall rule was deleted.
     */
    deleted: boolean;
  }
}

export interface RuleFirewallRulesUpdateFirewallRulesResponse {
  errors?: Array<RuleFirewallRulesUpdateFirewallRulesResponse.Error>;

  messages?: Array<RuleFirewallRulesUpdateFirewallRulesResponse.Message>;

  result?: Array<RuleFirewallRulesUpdateFirewallRulesResponse.Result>;

  result_info?: RuleFirewallRulesUpdateFirewallRulesResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace RuleFirewallRulesUpdateFirewallRulesResponse {
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
     * The unique identifier of the firewall rule.
     */
    id?: string;

    /**
     * The action to apply to a matched request. The `log` action is only available on
     * an Enterprise plan.
     */
    action?: 'block' | 'challenge' | 'js_challenge' | 'managed_challenge' | 'allow' | 'log' | 'bypass';

    /**
     * An informative summary of the firewall rule.
     */
    description?: string;

    filter?: Result.DZw70ubTFilter | Result.DZw70ubTDeletedFilter;

    /**
     * When true, indicates that the firewall rule is currently paused.
     */
    paused?: boolean;

    /**
     * The priority of the rule. Optional value used to define the processing order. A
     * lower number indicates a higher priority. If not provided, rules with a defined
     * priority will be processed before rules without a priority.
     */
    priority?: number;

    products?: Array<'zoneLockdown' | 'uaBlock' | 'bic' | 'hot' | 'securityLevel' | 'rateLimit' | 'waf'>;

    /**
     * A short reference tag. Allows you to select related firewall rules.
     */
    ref?: string;
  }

  export namespace Result {
    export interface DZw70ubTFilter {
      /**
       * The unique identifier of the filter.
       */
      id?: string;

      /**
       * An informative summary of the filter.
       */
      description?: string;

      /**
       * The filter expression. For more information, refer to
       * [Expressions](https://developers.cloudflare.com/ruleset-engine/rules-language/expressions/).
       */
      expression?: string;

      /**
       * When true, indicates that the filter is currently paused.
       */
      paused?: boolean;

      /**
       * A short reference tag. Allows you to select related filters.
       */
      ref?: string;
    }

    export interface DZw70ubTDeletedFilter {
      /**
       * The unique identifier of the filter.
       */
      id: string;

      /**
       * When true, indicates that the firewall rule was deleted.
       */
      deleted: boolean;
    }
  }

  export interface ResultInfo {
    /**
     * Total number of results for the requested service
     */
    count?: number;

    /**
     * Current page within paginated list of results
     */
    page?: number;

    /**
     * Number of results per page of results
     */
    per_page?: number;

    /**
     * Total results available without any search parameters
     */
    total_count?: number;
  }
}

export interface RuleFirewallRulesUpdatePriorityOfFirewallRulesResponse {
  errors?: Array<RuleFirewallRulesUpdatePriorityOfFirewallRulesResponse.Error>;

  messages?: Array<RuleFirewallRulesUpdatePriorityOfFirewallRulesResponse.Message>;

  result?: Array<RuleFirewallRulesUpdatePriorityOfFirewallRulesResponse.Result>;

  result_info?: RuleFirewallRulesUpdatePriorityOfFirewallRulesResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace RuleFirewallRulesUpdatePriorityOfFirewallRulesResponse {
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
     * The unique identifier of the firewall rule.
     */
    id?: string;

    /**
     * The action to apply to a matched request. The `log` action is only available on
     * an Enterprise plan.
     */
    action?: 'block' | 'challenge' | 'js_challenge' | 'managed_challenge' | 'allow' | 'log' | 'bypass';

    /**
     * An informative summary of the firewall rule.
     */
    description?: string;

    filter?: Result.DZw70ubTFilter | Result.DZw70ubTDeletedFilter;

    /**
     * When true, indicates that the firewall rule is currently paused.
     */
    paused?: boolean;

    /**
     * The priority of the rule. Optional value used to define the processing order. A
     * lower number indicates a higher priority. If not provided, rules with a defined
     * priority will be processed before rules without a priority.
     */
    priority?: number;

    products?: Array<'zoneLockdown' | 'uaBlock' | 'bic' | 'hot' | 'securityLevel' | 'rateLimit' | 'waf'>;

    /**
     * A short reference tag. Allows you to select related firewall rules.
     */
    ref?: string;
  }

  export namespace Result {
    export interface DZw70ubTFilter {
      /**
       * The unique identifier of the filter.
       */
      id?: string;

      /**
       * An informative summary of the filter.
       */
      description?: string;

      /**
       * The filter expression. For more information, refer to
       * [Expressions](https://developers.cloudflare.com/ruleset-engine/rules-language/expressions/).
       */
      expression?: string;

      /**
       * When true, indicates that the filter is currently paused.
       */
      paused?: boolean;

      /**
       * A short reference tag. Allows you to select related filters.
       */
      ref?: string;
    }

    export interface DZw70ubTDeletedFilter {
      /**
       * The unique identifier of the filter.
       */
      id: string;

      /**
       * When true, indicates that the firewall rule was deleted.
       */
      deleted: boolean;
    }
  }

  export interface ResultInfo {
    /**
     * Total number of results for the requested service
     */
    count?: number;

    /**
     * Current page within paginated list of results
     */
    page?: number;

    /**
     * Number of results per page of results
     */
    per_page?: number;

    /**
     * Total results available without any search parameters
     */
    total_count?: number;
  }
}

export type RuleUpdateParams = unknown;

export interface RuleDeleteParams {
  /**
   * When true, indicates that Cloudflare should also delete the associated filter if
   * there are no other firewall rules referencing the filter.
   */
  delete_filter_if_unused?: boolean;
}

export type RuleFirewallRulesCreateFirewallRulesParams = unknown;

export interface RuleFirewallRulesListFirewallRulesParams {
  /**
   * The action to search for. Must be an exact match.
   */
  action?: string;

  /**
   * A case-insensitive string to find in the description.
   */
  description?: string;

  /**
   * Page number of paginated results.
   */
  page?: number;

  /**
   * When true, indicates that the firewall rule is currently paused.
   */
  paused?: boolean;

  /**
   * Number of firewall rules per page.
   */
  per_page?: number;
}

export type RuleFirewallRulesUpdateFirewallRulesParams = unknown;

export type RuleFirewallRulesUpdatePriorityOfFirewallRulesParams = unknown;

export namespace Rules {
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
}
