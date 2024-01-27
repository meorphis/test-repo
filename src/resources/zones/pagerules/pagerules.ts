// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as PagerulesAPI from 'cloudflare/resources/zones/pagerules/pagerules';
import * as SettingsAPI from 'cloudflare/resources/zones/pagerules/settings';

export class Pagerules extends APIResource {
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);

  /**
   * Fetches the details of a Page Rule.
   */
  retrieve(
    zoneIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PageruleResponseSingle> {
    return this._client.get(`/zones/${zoneIdentifier}/pagerules/${identifier}`, options);
  }

  /**
   * Replaces the configuration of an existing Page Rule. The configuration of the
   * updated Page Rule will exactly match the data passed in the API request.
   */
  update(
    zoneIdentifier: string,
    identifier: string,
    body: PageruleUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PageruleResponseSingle> {
    return this._client.put(`/zones/${zoneIdentifier}/pagerules/${identifier}`, { body, ...options });
  }

  /**
   * Deletes an existing Page Rule.
   */
  delete(
    zoneIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PageruleDeleteResponse> {
    return this._client.delete(`/zones/${zoneIdentifier}/pagerules/${identifier}`, options);
  }

  /**
   * Creates a new Page Rule.
   */
  pageRulesCreateAPageRule(
    zoneIdentifier: string,
    body: PagerulePageRulesCreateAPageRuleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PageruleResponseSingle> {
    return this._client.post(`/zones/${zoneIdentifier}/pagerules`, { body, ...options });
  }

  /**
   * Fetches Page Rules in a zone.
   */
  pageRulesListPageRules(
    zoneIdentifier: string,
    query?: PagerulePageRulesListPageRulesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PagerulePageRulesListPageRulesResponse>;
  pageRulesListPageRules(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PagerulePageRulesListPageRulesResponse>;
  pageRulesListPageRules(
    zoneIdentifier: string,
    query: PagerulePageRulesListPageRulesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PagerulePageRulesListPageRulesResponse> {
    if (isRequestOptions(query)) {
      return this.pageRulesListPageRules(zoneIdentifier, {}, query);
    }
    return this._client.get(`/zones/${zoneIdentifier}/pagerules`, { query, ...options });
  }
}

export interface PageruleResponseSingle {
  errors?: Array<PageruleResponseSingle.Error>;

  messages?: Array<PageruleResponseSingle.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace PageruleResponseSingle {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface PageruleDeleteResponse {
  errors?: Array<PageruleDeleteResponse.Error>;

  messages?: Array<PageruleDeleteResponse.Message>;

  result?: PageruleDeleteResponse.Result | null;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace PageruleDeleteResponse {
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

export interface PagerulePageRulesListPageRulesResponse {
  errors?: Array<PagerulePageRulesListPageRulesResponse.Error>;

  messages?: Array<PagerulePageRulesListPageRulesResponse.Message>;

  result?: Array<PagerulePageRulesListPageRulesResponse.Result>;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace PagerulePageRulesListPageRulesResponse {
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

    /**
     * The set of actions to perform if the targets of this rule match the request.
     * Actions can redirect to another URL or override settings, but not both.
     */
    actions: Array<Result.Action>;

    /**
     * The timestamp of when the Page Rule was created.
     */
    created_on: string;

    /**
     * The timestamp of when the Page Rule was last modified.
     */
    modified_on: string;

    /**
     * The priority of the rule, used to define which Page Rule is processed over
     * another. A higher number indicates a higher priority. For example, if you have a
     * catch-all Page Rule (rule A: `/images/*`) but want a more specific Page Rule to
     * take precedence (rule B: `/images/special/*`), specify a higher priority for
     * rule B so it overrides rule A.
     */
    priority: number;

    /**
     * The status of the Page Rule.
     */
    status: 'active' | 'disabled';

    /**
     * The rule targets to evaluate on each request.
     */
    targets: Array<Result.Target>;
  }

  export namespace Result {
    export interface Action {
      /**
       * The timestamp of when the override was last modified.
       */
      modified_on?: string;

      /**
       * The type of route.
       */
      name?: 'forward_url';

      value?: Action.Value;
    }

    export namespace Action {
      export interface Value {
        /**
         * The response type for the URL redirect.
         */
        type?: 'temporary' | 'permanent';

        /**
         * The URL to redirect the request to. Notes: ${num} refers to the position of '\*'
         * in the constraint value.
         */
        url?: string;
      }
    }

    /**
     * A request condition target.
     */
    export interface Target {
      /**
       * The constraint of a target.
       */
      constraint: Target.Constraint;

      /**
       * A target based on the URL of the request.
       */
      target: 'url';
    }

    export namespace Target {
      /**
       * The constraint of a target.
       */
      export interface Constraint {
        /**
         * The matches operator can use asterisks and pipes as wildcard and 'or' operators.
         */
        operator?: 'matches' | 'contains' | 'equals' | 'not_equal' | 'not_contain';

        /**
         * The URL pattern to match against the current request. The pattern may contain up
         * to four asterisks ('\*') as placeholders.
         */
        value?: string;
      }
    }
  }
}

export interface PageruleUpdateParams {
  /**
   * The set of actions to perform if the targets of this rule match the request.
   * Actions can redirect to another URL or override settings, but not both.
   */
  actions: Array<PageruleUpdateParams.Action>;

  /**
   * The rule targets to evaluate on each request.
   */
  targets: Array<PageruleUpdateParams.Target>;

  /**
   * The priority of the rule, used to define which Page Rule is processed over
   * another. A higher number indicates a higher priority. For example, if you have a
   * catch-all Page Rule (rule A: `/images/*`) but want a more specific Page Rule to
   * take precedence (rule B: `/images/special/*`), specify a higher priority for
   * rule B so it overrides rule A.
   */
  priority?: number;

  /**
   * The status of the Page Rule.
   */
  status?: 'active' | 'disabled';
}

export namespace PageruleUpdateParams {
  export interface Action {
    /**
     * The type of route.
     */
    name?: 'forward_url';

    value?: Action.Value;
  }

  export namespace Action {
    export interface Value {
      /**
       * The response type for the URL redirect.
       */
      type?: 'temporary' | 'permanent';

      /**
       * The URL to redirect the request to. Notes: ${num} refers to the position of '\*'
       * in the constraint value.
       */
      url?: string;
    }
  }

  /**
   * A request condition target.
   */
  export interface Target {
    /**
     * The constraint of a target.
     */
    constraint: Target.Constraint;

    /**
     * A target based on the URL of the request.
     */
    target: 'url';
  }

  export namespace Target {
    /**
     * The constraint of a target.
     */
    export interface Constraint {
      /**
       * The matches operator can use asterisks and pipes as wildcard and 'or' operators.
       */
      operator?: 'matches' | 'contains' | 'equals' | 'not_equal' | 'not_contain';

      /**
       * The URL pattern to match against the current request. The pattern may contain up
       * to four asterisks ('\*') as placeholders.
       */
      value?: string;
    }
  }
}

export interface PagerulePageRulesCreateAPageRuleParams {
  /**
   * The set of actions to perform if the targets of this rule match the request.
   * Actions can redirect to another URL or override settings, but not both.
   */
  actions: Array<PagerulePageRulesCreateAPageRuleParams.Action>;

  /**
   * The rule targets to evaluate on each request.
   */
  targets: Array<PagerulePageRulesCreateAPageRuleParams.Target>;

  /**
   * The priority of the rule, used to define which Page Rule is processed over
   * another. A higher number indicates a higher priority. For example, if you have a
   * catch-all Page Rule (rule A: `/images/*`) but want a more specific Page Rule to
   * take precedence (rule B: `/images/special/*`), specify a higher priority for
   * rule B so it overrides rule A.
   */
  priority?: number;

  /**
   * The status of the Page Rule.
   */
  status?: 'active' | 'disabled';
}

export namespace PagerulePageRulesCreateAPageRuleParams {
  export interface Action {
    /**
     * The type of route.
     */
    name?: 'forward_url';

    value?: Action.Value;
  }

  export namespace Action {
    export interface Value {
      /**
       * The response type for the URL redirect.
       */
      type?: 'temporary' | 'permanent';

      /**
       * The URL to redirect the request to. Notes: ${num} refers to the position of '\*'
       * in the constraint value.
       */
      url?: string;
    }
  }

  /**
   * A request condition target.
   */
  export interface Target {
    /**
     * The constraint of a target.
     */
    constraint: Target.Constraint;

    /**
     * A target based on the URL of the request.
     */
    target: 'url';
  }

  export namespace Target {
    /**
     * The constraint of a target.
     */
    export interface Constraint {
      /**
       * The matches operator can use asterisks and pipes as wildcard and 'or' operators.
       */
      operator?: 'matches' | 'contains' | 'equals' | 'not_equal' | 'not_contain';

      /**
       * The URL pattern to match against the current request. The pattern may contain up
       * to four asterisks ('\*') as placeholders.
       */
      value?: string;
    }
  }
}

export interface PagerulePageRulesListPageRulesParams {
  /**
   * The direction used to sort returned Page Rules.
   */
  direction?: 'asc' | 'desc';

  /**
   * When set to `all`, all the search requirements must match. When set to `any`,
   * only one of the search requirements has to match.
   */
  match?: 'any' | 'all';

  /**
   * The field used to sort returned Page Rules.
   */
  order?: 'status' | 'priority';

  /**
   * The status of the Page Rule.
   */
  status?: 'active' | 'disabled';
}

export namespace Pagerules {
  export import PageruleResponseSingle = PagerulesAPI.PageruleResponseSingle;
  export import PageruleDeleteResponse = PagerulesAPI.PageruleDeleteResponse;
  export import PagerulePageRulesListPageRulesResponse = PagerulesAPI.PagerulePageRulesListPageRulesResponse;
  export import PageruleUpdateParams = PagerulesAPI.PageruleUpdateParams;
  export import PagerulePageRulesCreateAPageRuleParams = PagerulesAPI.PagerulePageRulesCreateAPageRuleParams;
  export import PagerulePageRulesListPageRulesParams = PagerulesAPI.PagerulePageRulesListPageRulesParams;
  export import Settings = SettingsAPI.Settings;
  export import SettingAvailablePageRulesSettingsListAvailablePageRulesSettingsResponse = SettingsAPI.SettingAvailablePageRulesSettingsListAvailablePageRulesSettingsResponse;
}
