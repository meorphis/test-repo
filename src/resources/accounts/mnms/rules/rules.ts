// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as RulesAPI from 'cloudflare/resources/accounts/mnms/rules/rules';
import * as AdvertisementsAPI from 'cloudflare/resources/accounts/mnms/rules/advertisements';

export class Rules extends APIResource {
  advertisements: AdvertisementsAPI.Advertisements = new AdvertisementsAPI.Advertisements(this._client);

  /**
   * List a single network monitoring rule for account.
   */
  retrieve(
    accountIdentifier: unknown,
    ruleIdentifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleRetrieveResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/mnm/rules/${ruleIdentifier}`, options);
  }

  /**
   * Update a network monitoring rule for account.
   */
  update(
    accountIdentifier: unknown,
    ruleIdentifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleUpdateResponse> {
    return this._client.patch(`/accounts/${accountIdentifier}/mnm/rules/${ruleIdentifier}`, options);
  }

  /**
   * Delete a network monitoring rule for account.
   */
  delete(
    accountIdentifier: unknown,
    ruleIdentifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleDeleteResponse> {
    return this._client.delete(`/accounts/${accountIdentifier}/mnm/rules/${ruleIdentifier}`, options);
  }

  /**
   * Create network monitoring rules for account. Currently only supports creating a
   * single rule per API request.
   */
  magicNetworkMonitoringRulesCreateRules(
    accountIdentifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleMagicNetworkMonitoringRulesCreateRulesResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/mnm/rules`, options);
  }

  /**
   * Lists network monitoring rules for account.
   */
  magicNetworkMonitoringRulesListRules(
    accountIdentifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleMagicNetworkMonitoringRulesListRulesResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/mnm/rules`, options);
  }

  /**
   * Update network monitoring rules for account.
   */
  magicNetworkMonitoringRulesUpdateRules(
    accountIdentifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleMagicNetworkMonitoringRulesUpdateRulesResponse> {
    return this._client.put(`/accounts/${accountIdentifier}/mnm/rules`, options);
  }
}

export interface RuleRetrieveResponse {
  errors?: Array<RuleRetrieveResponse.Error>;

  messages?: Array<RuleRetrieveResponse.Message>;

  result?: RuleRetrieveResponse.Result | null;

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
     * Toggle on if you would like Cloudflare to automatically advertise the IP
     * Prefixes within the rule via Magic Transit when the rule is triggered. Only
     * available for users of Magic Transit.
     */
    automatic_advertisement: boolean | null;

    /**
     * The amount of time that the rule threshold must be exceeded to send an alert
     * notification. The final value must be equivalent to one of the following 8
     * values ["1m","5m","10m","15m","20m","30m","45m","60m"]. The format is
     * AhBmCsDmsEusFns where A, B, C, D, E and F durations are optional; however at
     * least one unit must be provided.
     */
    duration: string;

    /**
     * The name of the rule. Must be unique. Supports characters A-Z, a-z, 0-9,
     * underscore (\_), dash (-), period (.), and tilde (~). You can’t have a space in
     * the rule name. Max 256 characters.
     */
    name: string;

    prefixes: Array<string>;

    id?: unknown;

    /**
     * The number of bits per second for the rule. When this value is exceeded for the
     * set duration, an alert notification is sent. Minimum of 1 and no maximum.
     */
    bandwidth_threshold?: number;

    /**
     * The number of packets per second for the rule. When this value is exceeded for
     * the set duration, an alert notification is sent. Minimum of 1 and no maximum.
     */
    packet_threshold?: number;
  }
}

export interface RuleUpdateResponse {
  errors?: Array<RuleUpdateResponse.Error>;

  messages?: Array<RuleUpdateResponse.Message>;

  result?: RuleUpdateResponse.Result | null;

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
     * Toggle on if you would like Cloudflare to automatically advertise the IP
     * Prefixes within the rule via Magic Transit when the rule is triggered. Only
     * available for users of Magic Transit.
     */
    automatic_advertisement: boolean | null;

    /**
     * The amount of time that the rule threshold must be exceeded to send an alert
     * notification. The final value must be equivalent to one of the following 8
     * values ["1m","5m","10m","15m","20m","30m","45m","60m"]. The format is
     * AhBmCsDmsEusFns where A, B, C, D, E and F durations are optional; however at
     * least one unit must be provided.
     */
    duration: string;

    /**
     * The name of the rule. Must be unique. Supports characters A-Z, a-z, 0-9,
     * underscore (\_), dash (-), period (.), and tilde (~). You can’t have a space in
     * the rule name. Max 256 characters.
     */
    name: string;

    prefixes: Array<string>;

    id?: unknown;

    /**
     * The number of bits per second for the rule. When this value is exceeded for the
     * set duration, an alert notification is sent. Minimum of 1 and no maximum.
     */
    bandwidth_threshold?: number;

    /**
     * The number of packets per second for the rule. When this value is exceeded for
     * the set duration, an alert notification is sent. Minimum of 1 and no maximum.
     */
    packet_threshold?: number;
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
     * Toggle on if you would like Cloudflare to automatically advertise the IP
     * Prefixes within the rule via Magic Transit when the rule is triggered. Only
     * available for users of Magic Transit.
     */
    automatic_advertisement: boolean | null;

    /**
     * The amount of time that the rule threshold must be exceeded to send an alert
     * notification. The final value must be equivalent to one of the following 8
     * values ["1m","5m","10m","15m","20m","30m","45m","60m"]. The format is
     * AhBmCsDmsEusFns where A, B, C, D, E and F durations are optional; however at
     * least one unit must be provided.
     */
    duration: string;

    /**
     * The name of the rule. Must be unique. Supports characters A-Z, a-z, 0-9,
     * underscore (\_), dash (-), period (.), and tilde (~). You can’t have a space in
     * the rule name. Max 256 characters.
     */
    name: string;

    prefixes: Array<string>;

    id?: unknown;

    /**
     * The number of bits per second for the rule. When this value is exceeded for the
     * set duration, an alert notification is sent. Minimum of 1 and no maximum.
     */
    bandwidth_threshold?: number;

    /**
     * The number of packets per second for the rule. When this value is exceeded for
     * the set duration, an alert notification is sent. Minimum of 1 and no maximum.
     */
    packet_threshold?: number;
  }
}

export interface RuleMagicNetworkMonitoringRulesCreateRulesResponse {
  errors?: Array<RuleMagicNetworkMonitoringRulesCreateRulesResponse.Error>;

  messages?: Array<RuleMagicNetworkMonitoringRulesCreateRulesResponse.Message>;

  result?: RuleMagicNetworkMonitoringRulesCreateRulesResponse.Result | null;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace RuleMagicNetworkMonitoringRulesCreateRulesResponse {
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
     * Toggle on if you would like Cloudflare to automatically advertise the IP
     * Prefixes within the rule via Magic Transit when the rule is triggered. Only
     * available for users of Magic Transit.
     */
    automatic_advertisement: boolean | null;

    /**
     * The amount of time that the rule threshold must be exceeded to send an alert
     * notification. The final value must be equivalent to one of the following 8
     * values ["1m","5m","10m","15m","20m","30m","45m","60m"]. The format is
     * AhBmCsDmsEusFns where A, B, C, D, E and F durations are optional; however at
     * least one unit must be provided.
     */
    duration: string;

    /**
     * The name of the rule. Must be unique. Supports characters A-Z, a-z, 0-9,
     * underscore (\_), dash (-), period (.), and tilde (~). You can’t have a space in
     * the rule name. Max 256 characters.
     */
    name: string;

    prefixes: Array<string>;

    id?: unknown;

    /**
     * The number of bits per second for the rule. When this value is exceeded for the
     * set duration, an alert notification is sent. Minimum of 1 and no maximum.
     */
    bandwidth_threshold?: number;

    /**
     * The number of packets per second for the rule. When this value is exceeded for
     * the set duration, an alert notification is sent. Minimum of 1 and no maximum.
     */
    packet_threshold?: number;
  }
}

export interface RuleMagicNetworkMonitoringRulesListRulesResponse {
  errors?: Array<RuleMagicNetworkMonitoringRulesListRulesResponse.Error>;

  messages?: Array<RuleMagicNetworkMonitoringRulesListRulesResponse.Message>;

  result?: Array<RuleMagicNetworkMonitoringRulesListRulesResponse.Result | null> | null;

  result_info?: RuleMagicNetworkMonitoringRulesListRulesResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace RuleMagicNetworkMonitoringRulesListRulesResponse {
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
     * Toggle on if you would like Cloudflare to automatically advertise the IP
     * Prefixes within the rule via Magic Transit when the rule is triggered. Only
     * available for users of Magic Transit.
     */
    automatic_advertisement: boolean | null;

    /**
     * The amount of time that the rule threshold must be exceeded to send an alert
     * notification. The final value must be equivalent to one of the following 8
     * values ["1m","5m","10m","15m","20m","30m","45m","60m"]. The format is
     * AhBmCsDmsEusFns where A, B, C, D, E and F durations are optional; however at
     * least one unit must be provided.
     */
    duration: string;

    /**
     * The name of the rule. Must be unique. Supports characters A-Z, a-z, 0-9,
     * underscore (\_), dash (-), period (.), and tilde (~). You can’t have a space in
     * the rule name. Max 256 characters.
     */
    name: string;

    prefixes: Array<string>;

    id?: unknown;

    /**
     * The number of bits per second for the rule. When this value is exceeded for the
     * set duration, an alert notification is sent. Minimum of 1 and no maximum.
     */
    bandwidth_threshold?: number;

    /**
     * The number of packets per second for the rule. When this value is exceeded for
     * the set duration, an alert notification is sent. Minimum of 1 and no maximum.
     */
    packet_threshold?: number;
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

export interface RuleMagicNetworkMonitoringRulesUpdateRulesResponse {
  errors?: Array<RuleMagicNetworkMonitoringRulesUpdateRulesResponse.Error>;

  messages?: Array<RuleMagicNetworkMonitoringRulesUpdateRulesResponse.Message>;

  result?: RuleMagicNetworkMonitoringRulesUpdateRulesResponse.Result | null;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace RuleMagicNetworkMonitoringRulesUpdateRulesResponse {
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
     * Toggle on if you would like Cloudflare to automatically advertise the IP
     * Prefixes within the rule via Magic Transit when the rule is triggered. Only
     * available for users of Magic Transit.
     */
    automatic_advertisement: boolean | null;

    /**
     * The amount of time that the rule threshold must be exceeded to send an alert
     * notification. The final value must be equivalent to one of the following 8
     * values ["1m","5m","10m","15m","20m","30m","45m","60m"]. The format is
     * AhBmCsDmsEusFns where A, B, C, D, E and F durations are optional; however at
     * least one unit must be provided.
     */
    duration: string;

    /**
     * The name of the rule. Must be unique. Supports characters A-Z, a-z, 0-9,
     * underscore (\_), dash (-), period (.), and tilde (~). You can’t have a space in
     * the rule name. Max 256 characters.
     */
    name: string;

    prefixes: Array<string>;

    id?: unknown;

    /**
     * The number of bits per second for the rule. When this value is exceeded for the
     * set duration, an alert notification is sent. Minimum of 1 and no maximum.
     */
    bandwidth_threshold?: number;

    /**
     * The number of packets per second for the rule. When this value is exceeded for
     * the set duration, an alert notification is sent. Minimum of 1 and no maximum.
     */
    packet_threshold?: number;
  }
}

export namespace Rules {
  export import RuleRetrieveResponse = RulesAPI.RuleRetrieveResponse;
  export import RuleUpdateResponse = RulesAPI.RuleUpdateResponse;
  export import RuleDeleteResponse = RulesAPI.RuleDeleteResponse;
  export import RuleMagicNetworkMonitoringRulesCreateRulesResponse = RulesAPI.RuleMagicNetworkMonitoringRulesCreateRulesResponse;
  export import RuleMagicNetworkMonitoringRulesListRulesResponse = RulesAPI.RuleMagicNetworkMonitoringRulesListRulesResponse;
  export import RuleMagicNetworkMonitoringRulesUpdateRulesResponse = RulesAPI.RuleMagicNetworkMonitoringRulesUpdateRulesResponse;
  export import Advertisements = AdvertisementsAPI.Advertisements;
  export import AdvertisementMagicNetworkMonitoringRulesUpdateAdvertisementForRuleResponse = AdvertisementsAPI.AdvertisementMagicNetworkMonitoringRulesUpdateAdvertisementForRuleResponse;
}
