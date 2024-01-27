// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as RulesAPI from 'cloudflare/resources/zones/emails/routings/rules/rules';
import * as CatchAllsAPI from 'cloudflare/resources/zones/emails/routings/rules/catch-alls';
import { Page } from 'cloudflare/pagination';

export class Rules extends APIResource {
  catchAlls: CatchAllsAPI.CatchAlls = new CatchAllsAPI.CatchAlls(this._client);

  /**
   * Get information for a specific routing rule already created.
   */
  retrieve(
    zoneIdentifier: string,
    ruleIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleRetrieveResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/email/routing/rules/${ruleIdentifier}`, options);
  }

  /**
   * Update actions and matches, or enable/disable specific routing rules.
   */
  update(
    zoneIdentifier: string,
    ruleIdentifier: string,
    body: RuleUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleUpdateResponse> {
    return this._client.put(`/zones/${zoneIdentifier}/email/routing/rules/${ruleIdentifier}`, {
      body,
      ...options,
    });
  }

  /**
   * Delete a specific routing rule.
   */
  delete(
    zoneIdentifier: string,
    ruleIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleDeleteResponse> {
    return this._client.delete(`/zones/${zoneIdentifier}/email/routing/rules/${ruleIdentifier}`, options);
  }

  /**
   * Rules consist of a set of criteria for matching emails (such as an email being
   * sent to a specific custom email address) plus a set of actions to take on the
   * email (like forwarding it to a specific destination address).
   */
  emailRoutingRoutingRulesCreateRoutingRule(
    zoneIdentifier: string,
    body: RuleEmailRoutingRoutingRulesCreateRoutingRuleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleEmailRoutingRoutingRulesCreateRoutingRuleResponse> {
    return this._client.post(`/zones/${zoneIdentifier}/email/routing/rules`, { body, ...options });
  }

  /**
   * Lists existing routing rules.
   */
  emailRoutingRoutingRulesListRoutingRules(
    zoneIdentifier: string,
    query?: RuleEmailRoutingRoutingRulesListRoutingRulesParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    RuleEmailRoutingRoutingRulesListRoutingRulesResponsesPage,
    RuleEmailRoutingRoutingRulesListRoutingRulesResponse
  >;
  emailRoutingRoutingRulesListRoutingRules(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    RuleEmailRoutingRoutingRulesListRoutingRulesResponsesPage,
    RuleEmailRoutingRoutingRulesListRoutingRulesResponse
  >;
  emailRoutingRoutingRulesListRoutingRules(
    zoneIdentifier: string,
    query: RuleEmailRoutingRoutingRulesListRoutingRulesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    RuleEmailRoutingRoutingRulesListRoutingRulesResponsesPage,
    RuleEmailRoutingRoutingRulesListRoutingRulesResponse
  > {
    if (isRequestOptions(query)) {
      return this.emailRoutingRoutingRulesListRoutingRules(zoneIdentifier, {}, query);
    }
    return this._client.getAPIList(
      `/zones/${zoneIdentifier}/email/routing/rules`,
      RuleEmailRoutingRoutingRulesListRoutingRulesResponsesPage,
      { query, ...options },
    );
  }
}

export class RuleEmailRoutingRoutingRulesListRoutingRulesResponsesPage extends Page<RuleEmailRoutingRoutingRulesListRoutingRulesResponse> {}

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
     * List actions patterns.
     */
    actions?: Array<Result.Action>;

    /**
     * Routing rule status.
     */
    enabled?: true | false;

    /**
     * Matching patterns to forward to your actions.
     */
    matchers?: Array<Result.Matcher>;

    /**
     * Routing rule name.
     */
    name?: string;

    /**
     * Priority of the routing rule.
     */
    priority?: number;

    /**
     * Routing rule identifier.
     */
    tag?: string;
  }

  export namespace Result {
    /**
     * Actions pattern.
     */
    export interface Action {
      /**
       * Type of supported action.
       */
      type: 'drop' | 'forward' | 'worker';

      value: Array<string>;
    }

    /**
     * Matching pattern to forward your actions.
     */
    export interface Matcher {
      /**
       * Field for type matcher.
       */
      field: 'to';

      /**
       * Type of matcher.
       */
      type: 'literal';

      /**
       * Value for matcher.
       */
      value: string;
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
     * List actions patterns.
     */
    actions?: Array<Result.Action>;

    /**
     * Routing rule status.
     */
    enabled?: true | false;

    /**
     * Matching patterns to forward to your actions.
     */
    matchers?: Array<Result.Matcher>;

    /**
     * Routing rule name.
     */
    name?: string;

    /**
     * Priority of the routing rule.
     */
    priority?: number;

    /**
     * Routing rule identifier.
     */
    tag?: string;
  }

  export namespace Result {
    /**
     * Actions pattern.
     */
    export interface Action {
      /**
       * Type of supported action.
       */
      type: 'drop' | 'forward' | 'worker';

      value: Array<string>;
    }

    /**
     * Matching pattern to forward your actions.
     */
    export interface Matcher {
      /**
       * Field for type matcher.
       */
      field: 'to';

      /**
       * Type of matcher.
       */
      type: 'literal';

      /**
       * Value for matcher.
       */
      value: string;
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
     * List actions patterns.
     */
    actions?: Array<Result.Action>;

    /**
     * Routing rule status.
     */
    enabled?: true | false;

    /**
     * Matching patterns to forward to your actions.
     */
    matchers?: Array<Result.Matcher>;

    /**
     * Routing rule name.
     */
    name?: string;

    /**
     * Priority of the routing rule.
     */
    priority?: number;

    /**
     * Routing rule identifier.
     */
    tag?: string;
  }

  export namespace Result {
    /**
     * Actions pattern.
     */
    export interface Action {
      /**
       * Type of supported action.
       */
      type: 'drop' | 'forward' | 'worker';

      value: Array<string>;
    }

    /**
     * Matching pattern to forward your actions.
     */
    export interface Matcher {
      /**
       * Field for type matcher.
       */
      field: 'to';

      /**
       * Type of matcher.
       */
      type: 'literal';

      /**
       * Value for matcher.
       */
      value: string;
    }
  }
}

export interface RuleEmailRoutingRoutingRulesCreateRoutingRuleResponse {
  errors?: Array<RuleEmailRoutingRoutingRulesCreateRoutingRuleResponse.Error>;

  messages?: Array<RuleEmailRoutingRoutingRulesCreateRoutingRuleResponse.Message>;

  result?: RuleEmailRoutingRoutingRulesCreateRoutingRuleResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace RuleEmailRoutingRoutingRulesCreateRoutingRuleResponse {
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
     * List actions patterns.
     */
    actions?: Array<Result.Action>;

    /**
     * Routing rule status.
     */
    enabled?: true | false;

    /**
     * Matching patterns to forward to your actions.
     */
    matchers?: Array<Result.Matcher>;

    /**
     * Routing rule name.
     */
    name?: string;

    /**
     * Priority of the routing rule.
     */
    priority?: number;

    /**
     * Routing rule identifier.
     */
    tag?: string;
  }

  export namespace Result {
    /**
     * Actions pattern.
     */
    export interface Action {
      /**
       * Type of supported action.
       */
      type: 'drop' | 'forward' | 'worker';

      value: Array<string>;
    }

    /**
     * Matching pattern to forward your actions.
     */
    export interface Matcher {
      /**
       * Field for type matcher.
       */
      field: 'to';

      /**
       * Type of matcher.
       */
      type: 'literal';

      /**
       * Value for matcher.
       */
      value: string;
    }
  }
}

export interface RuleEmailRoutingRoutingRulesListRoutingRulesResponse {
  /**
   * List actions patterns.
   */
  actions?: Array<RuleEmailRoutingRoutingRulesListRoutingRulesResponse.Action>;

  /**
   * Routing rule status.
   */
  enabled?: true | false;

  /**
   * Matching patterns to forward to your actions.
   */
  matchers?: Array<RuleEmailRoutingRoutingRulesListRoutingRulesResponse.Matcher>;

  /**
   * Routing rule name.
   */
  name?: string;

  /**
   * Priority of the routing rule.
   */
  priority?: number;

  /**
   * Routing rule identifier.
   */
  tag?: string;
}

export namespace RuleEmailRoutingRoutingRulesListRoutingRulesResponse {
  /**
   * Actions pattern.
   */
  export interface Action {
    /**
     * Type of supported action.
     */
    type: 'drop' | 'forward' | 'worker';

    value: Array<string>;
  }

  /**
   * Matching pattern to forward your actions.
   */
  export interface Matcher {
    /**
     * Field for type matcher.
     */
    field: 'to';

    /**
     * Type of matcher.
     */
    type: 'literal';

    /**
     * Value for matcher.
     */
    value: string;
  }
}

export interface RuleUpdateParams {
  /**
   * List actions patterns.
   */
  actions: Array<RuleUpdateParams.Action>;

  /**
   * Matching patterns to forward to your actions.
   */
  matchers: Array<RuleUpdateParams.Matcher>;

  /**
   * Routing rule status.
   */
  enabled?: true | false;

  /**
   * Routing rule name.
   */
  name?: string;

  /**
   * Priority of the routing rule.
   */
  priority?: number;
}

export namespace RuleUpdateParams {
  /**
   * Actions pattern.
   */
  export interface Action {
    /**
     * Type of supported action.
     */
    type: 'drop' | 'forward' | 'worker';

    value: Array<string>;
  }

  /**
   * Matching pattern to forward your actions.
   */
  export interface Matcher {
    /**
     * Field for type matcher.
     */
    field: 'to';

    /**
     * Type of matcher.
     */
    type: 'literal';

    /**
     * Value for matcher.
     */
    value: string;
  }
}

export interface RuleEmailRoutingRoutingRulesCreateRoutingRuleParams {
  /**
   * List actions patterns.
   */
  actions: Array<RuleEmailRoutingRoutingRulesCreateRoutingRuleParams.Action>;

  /**
   * Matching patterns to forward to your actions.
   */
  matchers: Array<RuleEmailRoutingRoutingRulesCreateRoutingRuleParams.Matcher>;

  /**
   * Routing rule status.
   */
  enabled?: true | false;

  /**
   * Routing rule name.
   */
  name?: string;

  /**
   * Priority of the routing rule.
   */
  priority?: number;
}

export namespace RuleEmailRoutingRoutingRulesCreateRoutingRuleParams {
  /**
   * Actions pattern.
   */
  export interface Action {
    /**
     * Type of supported action.
     */
    type: 'drop' | 'forward' | 'worker';

    value: Array<string>;
  }

  /**
   * Matching pattern to forward your actions.
   */
  export interface Matcher {
    /**
     * Field for type matcher.
     */
    field: 'to';

    /**
     * Type of matcher.
     */
    type: 'literal';

    /**
     * Value for matcher.
     */
    value: string;
  }
}

export interface RuleEmailRoutingRoutingRulesListRoutingRulesParams {
  /**
   * Filter by enabled routing rules.
   */
  enabled?: true | false;

  /**
   * Page number of paginated results.
   */
  page?: number;

  /**
   * Maximum number of results per page.
   */
  per_page?: number;
}

export namespace Rules {
  export import RuleRetrieveResponse = RulesAPI.RuleRetrieveResponse;
  export import RuleUpdateResponse = RulesAPI.RuleUpdateResponse;
  export import RuleDeleteResponse = RulesAPI.RuleDeleteResponse;
  export import RuleEmailRoutingRoutingRulesCreateRoutingRuleResponse = RulesAPI.RuleEmailRoutingRoutingRulesCreateRoutingRuleResponse;
  export import RuleEmailRoutingRoutingRulesListRoutingRulesResponse = RulesAPI.RuleEmailRoutingRoutingRulesListRoutingRulesResponse;
  export import RuleEmailRoutingRoutingRulesListRoutingRulesResponsesPage = RulesAPI.RuleEmailRoutingRoutingRulesListRoutingRulesResponsesPage;
  export import RuleUpdateParams = RulesAPI.RuleUpdateParams;
  export import RuleEmailRoutingRoutingRulesCreateRoutingRuleParams = RulesAPI.RuleEmailRoutingRoutingRulesCreateRoutingRuleParams;
  export import RuleEmailRoutingRoutingRulesListRoutingRulesParams = RulesAPI.RuleEmailRoutingRoutingRulesListRoutingRulesParams;
  export import CatchAlls = CatchAllsAPI.CatchAlls;
  export import CatchAllEmailRoutingRoutingRulesGetCatchAllRuleResponse = CatchAllsAPI.CatchAllEmailRoutingRoutingRulesGetCatchAllRuleResponse;
  export import CatchAllEmailRoutingRoutingRulesUpdateCatchAllRuleResponse = CatchAllsAPI.CatchAllEmailRoutingRoutingRulesUpdateCatchAllRuleResponse;
  export import CatchAllEmailRoutingRoutingRulesUpdateCatchAllRuleParams = CatchAllsAPI.CatchAllEmailRoutingRoutingRulesUpdateCatchAllRuleParams;
}
