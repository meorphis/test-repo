// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as RulesAPI from 'cloudflare/resources/web-analytics/rules';
import * as RuleAPI from 'cloudflare/resources/accounts/rum/v2/rule';

export class Rules extends APIResource {
  /**
   * Creates a new rule in a Web Analytics ruleset.
   */
  create(
    accountIdentifier: string,
    rulesetIdentifier: string,
    body: RuleCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleAPI.Rule> {
    return this._client.post(`/accounts/${accountIdentifier}/rum/v2/${rulesetIdentifier}/rule`, {
      body,
      ...options,
    });
  }

  /**
   * Modifies one or more rules in a Web Analytics ruleset with a single request.
   */
  update(
    accountIdentifier: string,
    rulesetIdentifier: string,
    body: RuleUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleUpdateResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/rum/v2/${rulesetIdentifier}/rules`, {
      body,
      ...options,
    });
  }

  /**
   * Lists all the rules in a Web Analytics ruleset.
   */
  list(
    accountIdentifier: string,
    rulesetIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleListResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/rum/v2/${rulesetIdentifier}/rules`, options);
  }

  /**
   * Deletes an existing rule from a Web Analytics ruleset.
   */
  delete(
    accountIdentifier: string,
    rulesetIdentifier: string,
    ruleIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleDeleteResponse> {
    return this._client.delete(
      `/accounts/${accountIdentifier}/rum/v2/${rulesetIdentifier}/rule/${ruleIdentifier}`,
      options,
    );
  }
}

export interface RuleUpdateResponse {
  errors?: Array<RuleUpdateResponse.Error>;

  messages?: Array<RuleUpdateResponse.Message>;

  result?: RuleUpdateResponse.Result;

  /**
   * Whether the API call was successful.
   */
  success?: boolean;
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
     * A list of rules.
     */
    rules?: Array<Result.Rule>;

    ruleset?: Result.Ruleset;
  }

  export namespace Result {
    export interface Rule {
      /**
       * The Web Analytics rule identifier.
       */
      id?: string;

      created?: string;

      /**
       * The hostname the rule will be applied to.
       */
      host?: string;

      /**
       * Whether the rule includes or excludes traffic from being measured.
       */
      inclusive?: boolean;

      /**
       * Whether the rule is paused or not.
       */
      is_paused?: boolean;

      /**
       * The paths the rule will be applied to.
       */
      paths?: Array<string>;

      priority?: number;
    }

    export interface Ruleset {
      /**
       * The Web Analytics ruleset identifier.
       */
      id?: string;

      /**
       * Whether the ruleset is enabled.
       */
      enabled?: boolean;

      zone_name?: string;

      /**
       * The zone identifier.
       */
      zone_tag?: string;
    }
  }
}

export interface RuleListResponse {
  errors?: Array<RuleListResponse.Error>;

  messages?: Array<RuleListResponse.Message>;

  result?: RuleListResponse.Result;

  /**
   * Whether the API call was successful.
   */
  success?: boolean;
}

export namespace RuleListResponse {
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
     * A list of rules.
     */
    rules?: Array<Result.Rule>;

    ruleset?: Result.Ruleset;
  }

  export namespace Result {
    export interface Rule {
      /**
       * The Web Analytics rule identifier.
       */
      id?: string;

      created?: string;

      /**
       * The hostname the rule will be applied to.
       */
      host?: string;

      /**
       * Whether the rule includes or excludes traffic from being measured.
       */
      inclusive?: boolean;

      /**
       * Whether the rule is paused or not.
       */
      is_paused?: boolean;

      /**
       * The paths the rule will be applied to.
       */
      paths?: Array<string>;

      priority?: number;
    }

    export interface Ruleset {
      /**
       * The Web Analytics ruleset identifier.
       */
      id?: string;

      /**
       * Whether the ruleset is enabled.
       */
      enabled?: boolean;

      zone_name?: string;

      /**
       * The zone identifier.
       */
      zone_tag?: string;
    }
  }
}

export interface RuleDeleteResponse {
  errors?: Array<RuleDeleteResponse.Error>;

  messages?: Array<RuleDeleteResponse.Message>;

  result?: RuleDeleteResponse.Result;

  /**
   * Whether the API call was successful.
   */
  success?: boolean;
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
     * The Web Analytics rule identifier.
     */
    id?: string;
  }
}

export interface RuleCreateParams {
  host?: string;

  /**
   * Whether the rule includes or excludes traffic from being measured.
   */
  inclusive?: boolean;

  /**
   * Whether the rule is paused or not.
   */
  is_paused?: boolean;

  paths?: Array<string>;
}

export interface RuleUpdateParams {
  /**
   * A list of rule identifiers to delete.
   */
  delete_rules?: Array<string>;

  /**
   * A list of rules to create or update.
   */
  rules?: Array<RuleUpdateParams.Rule>;
}

export namespace RuleUpdateParams {
  export interface Rule {
    /**
     * The Web Analytics rule identifier.
     */
    id?: string;

    host?: string;

    inclusive?: boolean;

    is_paused?: boolean;

    paths?: Array<string>;
  }
}

export namespace Rules {
  export import RuleUpdateResponse = RulesAPI.RuleUpdateResponse;
  export import RuleListResponse = RulesAPI.RuleListResponse;
  export import RuleDeleteResponse = RulesAPI.RuleDeleteResponse;
  export import RuleCreateParams = RulesAPI.RuleCreateParams;
  export import RuleUpdateParams = RulesAPI.RuleUpdateParams;
}
