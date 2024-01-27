// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as RuleAPI from 'cloudflare/resources/accounts/rum/v2/rule';

export class RuleResource extends APIResource {
  /**
   * Updates a rule in a Web Analytics ruleset.
   */
  update(
    accountIdentifier: string,
    rulesetIdentifier: string,
    ruleIdentifier: string,
    body: RuleUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Rule> {
    return this._client.put(
      `/accounts/${accountIdentifier}/rum/v2/${rulesetIdentifier}/rule/${ruleIdentifier}`,
      { body, ...options },
    );
  }
}

export interface Rule {
  errors?: Array<Rule.Error>;

  messages?: Array<Rule.Message>;

  result?: Rule.Result;

  /**
   * Whether the API call was successful.
   */
  success?: boolean;
}

export namespace Rule {
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
}

export interface RuleUpdateParams {
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

export namespace RuleResource {
  export import Rule = RuleAPI.Rule;
  export import RuleUpdateParams = RuleAPI.RuleUpdateParams;
}
