// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as UaRulesAPI from 'cloudflare/resources/zones/firewalls/ua-rules';
import { Page } from 'cloudflare/pagination';

export class UaRules extends APIResource {
  /**
   * Fetches the details of a User Agent Blocking rule.
   */
  retrieve(
    zoneIdentifier: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UaRuleRetrieveResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/firewall/ua_rules/${id}`, options);
  }

  /**
   * Updates an existing User Agent Blocking rule.
   */
  update(
    zoneIdentifier: string,
    id: string,
    body: UaRuleUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UaRuleUpdateResponse> {
    return this._client.put(`/zones/${zoneIdentifier}/firewall/ua_rules/${id}`, { body, ...options });
  }

  /**
   * Deletes an existing User Agent Blocking rule.
   */
  delete(
    zoneIdentifier: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UaRuleDeleteResponse> {
    return this._client.delete(`/zones/${zoneIdentifier}/firewall/ua_rules/${id}`, options);
  }

  /**
   * Creates a new User Agent Blocking rule in a zone.
   */
  userAgentBlockingRulesCreateAUserAgentBlockingRule(
    zoneIdentifier: string,
    body: UaRuleUserAgentBlockingRulesCreateAUserAgentBlockingRuleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UaRuleUserAgentBlockingRulesCreateAUserAgentBlockingRuleResponse> {
    return this._client.post(`/zones/${zoneIdentifier}/firewall/ua_rules`, { body, ...options });
  }

  /**
   * Fetches User Agent Blocking rules in a zone. You can filter the results using
   * several optional parameters.
   */
  userAgentBlockingRulesListUserAgentBlockingRules(
    zoneIdentifier: string,
    query?: UaRuleUserAgentBlockingRulesListUserAgentBlockingRulesParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    UaRuleUserAgentBlockingRulesListUserAgentBlockingRulesResponsesPage,
    UaRuleUserAgentBlockingRulesListUserAgentBlockingRulesResponse
  >;
  userAgentBlockingRulesListUserAgentBlockingRules(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    UaRuleUserAgentBlockingRulesListUserAgentBlockingRulesResponsesPage,
    UaRuleUserAgentBlockingRulesListUserAgentBlockingRulesResponse
  >;
  userAgentBlockingRulesListUserAgentBlockingRules(
    zoneIdentifier: string,
    query: UaRuleUserAgentBlockingRulesListUserAgentBlockingRulesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    UaRuleUserAgentBlockingRulesListUserAgentBlockingRulesResponsesPage,
    UaRuleUserAgentBlockingRulesListUserAgentBlockingRulesResponse
  > {
    if (isRequestOptions(query)) {
      return this.userAgentBlockingRulesListUserAgentBlockingRules(zoneIdentifier, {}, query);
    }
    return this._client.getAPIList(
      `/zones/${zoneIdentifier}/firewall/ua_rules`,
      UaRuleUserAgentBlockingRulesListUserAgentBlockingRulesResponsesPage,
      { query, ...options },
    );
  }
}

export class UaRuleUserAgentBlockingRulesListUserAgentBlockingRulesResponsesPage extends Page<UaRuleUserAgentBlockingRulesListUserAgentBlockingRulesResponse> {}

export interface UaRuleRetrieveResponse {
  errors?: Array<UaRuleRetrieveResponse.Error>;

  messages?: Array<UaRuleRetrieveResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace UaRuleRetrieveResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface UaRuleUpdateResponse {
  errors?: Array<UaRuleUpdateResponse.Error>;

  messages?: Array<UaRuleUpdateResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace UaRuleUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface UaRuleDeleteResponse {
  errors?: Array<UaRuleDeleteResponse.Error>;

  messages?: Array<UaRuleDeleteResponse.Message>;

  result?: UaRuleDeleteResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace UaRuleDeleteResponse {
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
     * The unique identifier of the User Agent Blocking rule.
     */
    id?: string;
  }
}

export interface UaRuleUserAgentBlockingRulesCreateAUserAgentBlockingRuleResponse {
  errors?: Array<UaRuleUserAgentBlockingRulesCreateAUserAgentBlockingRuleResponse.Error>;

  messages?: Array<UaRuleUserAgentBlockingRulesCreateAUserAgentBlockingRuleResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace UaRuleUserAgentBlockingRulesCreateAUserAgentBlockingRuleResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface UaRuleUserAgentBlockingRulesListUserAgentBlockingRulesResponse {
  /**
   * The unique identifier of the User Agent Blocking rule.
   */
  id?: string;

  /**
   * The configuration object for the current rule.
   */
  configuration?: UaRuleUserAgentBlockingRulesListUserAgentBlockingRulesResponse.Configuration;

  /**
   * An informative summary of the rule.
   */
  description?: string;

  /**
   * The action to apply to a matched request.
   */
  mode?: 'block' | 'challenge' | 'js_challenge' | 'managed_challenge';

  /**
   * When true, indicates that the rule is currently paused.
   */
  paused?: boolean;
}

export namespace UaRuleUserAgentBlockingRulesListUserAgentBlockingRulesResponse {
  /**
   * The configuration object for the current rule.
   */
  export interface Configuration {
    /**
     * The configuration target for this rule. You must set the target to `ua` for User
     * Agent Blocking rules.
     */
    target?: string;

    /**
     * The exact user agent string to match. This value will be compared to the
     * received `User-Agent` HTTP header value.
     */
    value?: string;
  }
}

export type UaRuleUpdateParams = unknown;

export type UaRuleUserAgentBlockingRulesCreateAUserAgentBlockingRuleParams = unknown;

export interface UaRuleUserAgentBlockingRulesListUserAgentBlockingRulesParams {
  /**
   * A string to search for in the description of existing rules.
   */
  description?: string;

  /**
   * A string to search for in the description of existing rules.
   */
  description_search?: string;

  /**
   * Page number of paginated results.
   */
  page?: number;

  /**
   * The maximum number of results per page. You can only set the value to `1` or to
   * a multiple of 5 such as `5`, `10`, `15`, or `20`.
   */
  per_page?: number;

  /**
   * A string to search for in the user agent values of existing rules.
   */
  ua_search?: string;
}

export namespace UaRules {
  export import UaRuleRetrieveResponse = UaRulesAPI.UaRuleRetrieveResponse;
  export import UaRuleUpdateResponse = UaRulesAPI.UaRuleUpdateResponse;
  export import UaRuleDeleteResponse = UaRulesAPI.UaRuleDeleteResponse;
  export import UaRuleUserAgentBlockingRulesCreateAUserAgentBlockingRuleResponse = UaRulesAPI.UaRuleUserAgentBlockingRulesCreateAUserAgentBlockingRuleResponse;
  export import UaRuleUserAgentBlockingRulesListUserAgentBlockingRulesResponse = UaRulesAPI.UaRuleUserAgentBlockingRulesListUserAgentBlockingRulesResponse;
  export import UaRuleUserAgentBlockingRulesListUserAgentBlockingRulesResponsesPage = UaRulesAPI.UaRuleUserAgentBlockingRulesListUserAgentBlockingRulesResponsesPage;
  export import UaRuleUpdateParams = UaRulesAPI.UaRuleUpdateParams;
  export import UaRuleUserAgentBlockingRulesCreateAUserAgentBlockingRuleParams = UaRulesAPI.UaRuleUserAgentBlockingRulesCreateAUserAgentBlockingRuleParams;
  export import UaRuleUserAgentBlockingRulesListUserAgentBlockingRulesParams = UaRulesAPI.UaRuleUserAgentBlockingRulesListUserAgentBlockingRulesParams;
}
