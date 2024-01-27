// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as RulesAPI from 'cloudflare/resources/zones/waiting-rooms/rules';

export class Rules extends APIResource {
  /**
   * Patches a rule for a waiting room.
   */
  update(
    zoneIdentifier: string,
    waitingRoomId: unknown,
    ruleId: string,
    body: RuleUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleUpdateResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/waiting_rooms/${waitingRoomId}/rules/${ruleId}`, {
      body,
      ...options,
    });
  }

  /**
   * Deletes a rule for a waiting room.
   */
  delete(
    zoneIdentifier: string,
    waitingRoomId: unknown,
    ruleId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleDeleteResponse> {
    return this._client.delete(
      `/zones/${zoneIdentifier}/waiting_rooms/${waitingRoomId}/rules/${ruleId}`,
      options,
    );
  }

  /**
   * Only available for the Waiting Room Advanced subscription. Creates a rule for a
   * waiting room.
   */
  waitingRoomCreateWaitingRoomRule(
    zoneIdentifier: string,
    waitingRoomId: unknown,
    body: RuleWaitingRoomCreateWaitingRoomRuleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleWaitingRoomCreateWaitingRoomRuleResponse> {
    return this._client.post(`/zones/${zoneIdentifier}/waiting_rooms/${waitingRoomId}/rules`, {
      body,
      ...options,
    });
  }

  /**
   * Lists rules for a waiting room.
   */
  waitingRoomListWaitingRoomRules(
    zoneIdentifier: string,
    waitingRoomId: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleWaitingRoomListWaitingRoomRulesResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/waiting_rooms/${waitingRoomId}/rules`, options);
  }

  /**
   * Only available for the Waiting Room Advanced subscription. Replaces all rules
   * for a waiting room.
   */
  waitingRoomReplaceWaitingRoomRules(
    zoneIdentifier: string,
    waitingRoomId: unknown,
    body: RuleWaitingRoomReplaceWaitingRoomRulesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleWaitingRoomReplaceWaitingRoomRulesResponse> {
    return this._client.put(`/zones/${zoneIdentifier}/waiting_rooms/${waitingRoomId}/rules`, {
      body,
      ...options,
    });
  }
}

export interface RuleUpdateResponse {
  errors?: Array<RuleUpdateResponse.Error>;

  messages?: Array<RuleUpdateResponse.Message>;

  result?: Array<RuleUpdateResponse.Result>;

  result_info?: RuleUpdateResponse.ResultInfo;

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
     * The ID of the rule.
     */
    id?: string;

    /**
     * The action to take when the expression matches.
     */
    action?: 'bypass_waiting_room';

    /**
     * The description of the rule.
     */
    description?: string;

    /**
     * When set to true, the rule is enabled.
     */
    enabled?: boolean;

    /**
     * Criteria defining when there is a match for the current rule.
     */
    expression?: string;

    last_updated?: string;

    /**
     * The version of the rule.
     */
    version?: string;
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

export interface RuleDeleteResponse {
  errors?: Array<RuleDeleteResponse.Error>;

  messages?: Array<RuleDeleteResponse.Message>;

  result?: Array<RuleDeleteResponse.Result>;

  result_info?: RuleDeleteResponse.ResultInfo;

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
     * The ID of the rule.
     */
    id?: string;

    /**
     * The action to take when the expression matches.
     */
    action?: 'bypass_waiting_room';

    /**
     * The description of the rule.
     */
    description?: string;

    /**
     * When set to true, the rule is enabled.
     */
    enabled?: boolean;

    /**
     * Criteria defining when there is a match for the current rule.
     */
    expression?: string;

    last_updated?: string;

    /**
     * The version of the rule.
     */
    version?: string;
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

export interface RuleWaitingRoomCreateWaitingRoomRuleResponse {
  errors?: Array<RuleWaitingRoomCreateWaitingRoomRuleResponse.Error>;

  messages?: Array<RuleWaitingRoomCreateWaitingRoomRuleResponse.Message>;

  result?: Array<RuleWaitingRoomCreateWaitingRoomRuleResponse.Result>;

  result_info?: RuleWaitingRoomCreateWaitingRoomRuleResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace RuleWaitingRoomCreateWaitingRoomRuleResponse {
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
     * The ID of the rule.
     */
    id?: string;

    /**
     * The action to take when the expression matches.
     */
    action?: 'bypass_waiting_room';

    /**
     * The description of the rule.
     */
    description?: string;

    /**
     * When set to true, the rule is enabled.
     */
    enabled?: boolean;

    /**
     * Criteria defining when there is a match for the current rule.
     */
    expression?: string;

    last_updated?: string;

    /**
     * The version of the rule.
     */
    version?: string;
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

export interface RuleWaitingRoomListWaitingRoomRulesResponse {
  errors?: Array<RuleWaitingRoomListWaitingRoomRulesResponse.Error>;

  messages?: Array<RuleWaitingRoomListWaitingRoomRulesResponse.Message>;

  result?: Array<RuleWaitingRoomListWaitingRoomRulesResponse.Result>;

  result_info?: RuleWaitingRoomListWaitingRoomRulesResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace RuleWaitingRoomListWaitingRoomRulesResponse {
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
     * The ID of the rule.
     */
    id?: string;

    /**
     * The action to take when the expression matches.
     */
    action?: 'bypass_waiting_room';

    /**
     * The description of the rule.
     */
    description?: string;

    /**
     * When set to true, the rule is enabled.
     */
    enabled?: boolean;

    /**
     * Criteria defining when there is a match for the current rule.
     */
    expression?: string;

    last_updated?: string;

    /**
     * The version of the rule.
     */
    version?: string;
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

export interface RuleWaitingRoomReplaceWaitingRoomRulesResponse {
  errors?: Array<RuleWaitingRoomReplaceWaitingRoomRulesResponse.Error>;

  messages?: Array<RuleWaitingRoomReplaceWaitingRoomRulesResponse.Message>;

  result?: Array<RuleWaitingRoomReplaceWaitingRoomRulesResponse.Result>;

  result_info?: RuleWaitingRoomReplaceWaitingRoomRulesResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace RuleWaitingRoomReplaceWaitingRoomRulesResponse {
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
     * The ID of the rule.
     */
    id?: string;

    /**
     * The action to take when the expression matches.
     */
    action?: 'bypass_waiting_room';

    /**
     * The description of the rule.
     */
    description?: string;

    /**
     * When set to true, the rule is enabled.
     */
    enabled?: boolean;

    /**
     * Criteria defining when there is a match for the current rule.
     */
    expression?: string;

    last_updated?: string;

    /**
     * The version of the rule.
     */
    version?: string;
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

export interface RuleUpdateParams {
  /**
   * The action to take when the expression matches.
   */
  action: 'bypass_waiting_room';

  /**
   * Criteria defining when there is a match for the current rule.
   */
  expression: string;

  /**
   * The description of the rule.
   */
  description?: string;

  /**
   * When set to true, the rule is enabled.
   */
  enabled?: boolean;

  /**
   * Reorder the position of a rule
   */
  position?: RuleUpdateParams.Index | RuleUpdateParams.Before | RuleUpdateParams.After;
}

export namespace RuleUpdateParams {
  export interface Index {
    /**
     * Places the rule in the exact position specified by the integer number
     * <POSITION_NUMBER>. Position numbers start with 1. Existing rules in the ruleset
     * from the specified position number onward are shifted one position (no rule is
     * overwritten).
     */
    index?: number;
  }

  export interface Before {
    /**
     * Places the rule before rule <RULE_ID>. Use this argument with an empty rule ID
     * value ("") to set the rule as the first rule in the ruleset.
     */
    before?: string;
  }

  export interface After {
    /**
     * Places the rule after rule <RULE_ID>. Use this argument with an empty rule ID
     * value ("") to set the rule as the last rule in the ruleset.
     */
    after?: string;
  }
}

export interface RuleWaitingRoomCreateWaitingRoomRuleParams {
  /**
   * The action to take when the expression matches.
   */
  action: 'bypass_waiting_room';

  /**
   * Criteria defining when there is a match for the current rule.
   */
  expression: string;

  /**
   * The description of the rule.
   */
  description?: string;

  /**
   * When set to true, the rule is enabled.
   */
  enabled?: boolean;
}

export type RuleWaitingRoomReplaceWaitingRoomRulesParams =
  Array<RuleWaitingRoomReplaceWaitingRoomRulesParams.Body>;

export namespace RuleWaitingRoomReplaceWaitingRoomRulesParams {
  export interface Body {
    /**
     * The action to take when the expression matches.
     */
    action: 'bypass_waiting_room';

    /**
     * Criteria defining when there is a match for the current rule.
     */
    expression: string;

    /**
     * The description of the rule.
     */
    description?: string;

    /**
     * When set to true, the rule is enabled.
     */
    enabled?: boolean;
  }
}

export namespace Rules {
  export import RuleUpdateResponse = RulesAPI.RuleUpdateResponse;
  export import RuleDeleteResponse = RulesAPI.RuleDeleteResponse;
  export import RuleWaitingRoomCreateWaitingRoomRuleResponse = RulesAPI.RuleWaitingRoomCreateWaitingRoomRuleResponse;
  export import RuleWaitingRoomListWaitingRoomRulesResponse = RulesAPI.RuleWaitingRoomListWaitingRoomRulesResponse;
  export import RuleWaitingRoomReplaceWaitingRoomRulesResponse = RulesAPI.RuleWaitingRoomReplaceWaitingRoomRulesResponse;
  export import RuleUpdateParams = RulesAPI.RuleUpdateParams;
  export import RuleWaitingRoomCreateWaitingRoomRuleParams = RulesAPI.RuleWaitingRoomCreateWaitingRoomRuleParams;
  export import RuleWaitingRoomReplaceWaitingRoomRulesParams = RulesAPI.RuleWaitingRoomReplaceWaitingRoomRulesParams;
}
