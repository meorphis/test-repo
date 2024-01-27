// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as FirewallRulesAPI from 'cloudflare/resources/firewall-rules';

export class FirewallRules extends APIResource {
  /**
   * Updates the priority of an existing firewall rule.
   */
  update(
    zoneIdentifier: string,
    id: string,
    body: FirewallRuleUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FirewallRuleUpdateResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/firewall/rules/${id}`, { body, ...options });
  }

  /**
   * Deletes existing firewall rules.
   */
  delete(
    zoneIdentifier: string,
    body: FirewallRuleDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FirewallRuleDeleteResponse> {
    return this._client.delete(`/zones/${zoneIdentifier}/firewall/rules`, { body, ...options });
  }
}

export interface FirewallRuleUpdateResponse {
  errors?: Array<FirewallRuleUpdateResponse.Error>;

  messages?: Array<FirewallRuleUpdateResponse.Message>;

  result?: Array<FirewallRuleUpdateResponse.Result>;

  result_info?: FirewallRuleUpdateResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace FirewallRuleUpdateResponse {
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

export interface FirewallRuleDeleteResponse {
  errors?: Array<FirewallRuleDeleteResponse.Error>;

  messages?: Array<FirewallRuleDeleteResponse.Message>;

  result?: Array<FirewallRuleDeleteResponse.Result>;

  result_info?: FirewallRuleDeleteResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace FirewallRuleDeleteResponse {
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

export type FirewallRuleUpdateParams = unknown;

export interface FirewallRuleDeleteParams {}

export namespace FirewallRules {
  export import FirewallRuleUpdateResponse = FirewallRulesAPI.FirewallRuleUpdateResponse;
  export import FirewallRuleDeleteResponse = FirewallRulesAPI.FirewallRuleDeleteResponse;
  export import FirewallRuleUpdateParams = FirewallRulesAPI.FirewallRuleUpdateParams;
  export import FirewallRuleDeleteParams = FirewallRulesAPI.FirewallRuleDeleteParams;
}
