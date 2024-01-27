// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as LockdownsAPI from 'cloudflare/resources/zones/firewalls/lockdowns';
import { Page } from 'cloudflare/pagination';

export class Lockdowns extends APIResource {
  /**
   * Fetches the details of a Zone Lockdown rule.
   */
  retrieve(
    zoneIdentifier: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LockdownRetrieveResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/firewall/lockdowns/${id}`, options);
  }

  /**
   * Updates an existing Zone Lockdown rule.
   */
  update(
    zoneIdentifier: string,
    id: string,
    body: LockdownUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LockdownUpdateResponse> {
    return this._client.put(`/zones/${zoneIdentifier}/firewall/lockdowns/${id}`, { body, ...options });
  }

  /**
   * Deletes an existing Zone Lockdown rule.
   */
  delete(
    zoneIdentifier: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LockdownDeleteResponse> {
    return this._client.delete(`/zones/${zoneIdentifier}/firewall/lockdowns/${id}`, options);
  }

  /**
   * Creates a new Zone Lockdown rule.
   */
  zoneLockdownCreateAZoneLockdownRule(
    zoneIdentifier: string,
    body: LockdownZoneLockdownCreateAZoneLockdownRuleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LockdownZoneLockdownCreateAZoneLockdownRuleResponse> {
    return this._client.post(`/zones/${zoneIdentifier}/firewall/lockdowns`, { body, ...options });
  }

  /**
   * Fetches Zone Lockdown rules. You can filter the results using several optional
   * parameters.
   */
  zoneLockdownListZoneLockdownRules(
    zoneIdentifier: string,
    query?: LockdownZoneLockdownListZoneLockdownRulesParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    LockdownZoneLockdownListZoneLockdownRulesResponsesPage,
    LockdownZoneLockdownListZoneLockdownRulesResponse
  >;
  zoneLockdownListZoneLockdownRules(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    LockdownZoneLockdownListZoneLockdownRulesResponsesPage,
    LockdownZoneLockdownListZoneLockdownRulesResponse
  >;
  zoneLockdownListZoneLockdownRules(
    zoneIdentifier: string,
    query: LockdownZoneLockdownListZoneLockdownRulesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    LockdownZoneLockdownListZoneLockdownRulesResponsesPage,
    LockdownZoneLockdownListZoneLockdownRulesResponse
  > {
    if (isRequestOptions(query)) {
      return this.zoneLockdownListZoneLockdownRules(zoneIdentifier, {}, query);
    }
    return this._client.getAPIList(
      `/zones/${zoneIdentifier}/firewall/lockdowns`,
      LockdownZoneLockdownListZoneLockdownRulesResponsesPage,
      { query, ...options },
    );
  }
}

export class LockdownZoneLockdownListZoneLockdownRulesResponsesPage extends Page<LockdownZoneLockdownListZoneLockdownRulesResponse> {}

export interface LockdownRetrieveResponse {
  errors?: Array<LockdownRetrieveResponse.Error>;

  messages?: Array<LockdownRetrieveResponse.Message>;

  result?: LockdownRetrieveResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace LockdownRetrieveResponse {
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
     * The unique identifier of the Zone Lockdown rule.
     */
    id: string;

    /**
     * A list of IP addresses or CIDR ranges that will be allowed to access the URLs
     * specified in the Zone Lockdown rule. You can include any number of `ip` or
     * `ip_range` configurations.
     */
    configurations: Result.DZw70ubTSchemasIPConfiguration | Result.DZw70ubTSchemasCidrConfiguration;

    /**
     * The timestamp of when the rule was created.
     */
    created_on: string;

    /**
     * An informative summary of the rule.
     */
    description: string;

    /**
     * The timestamp of when the rule was last modified.
     */
    modified_on: string;

    /**
     * When true, indicates that the rule is currently paused.
     */
    paused: boolean;

    /**
     * The URLs to include in the rule definition. You can use wildcards. Each entered
     * URL will be escaped before use, which means you can only use simple wildcard
     * patterns.
     */
    urls: Array<string>;
  }

  export namespace Result {
    export interface DZw70ubTSchemasIPConfiguration {
      /**
       * The configuration target. You must set the target to `ip` when specifying an IP
       * address in the Zone Lockdown rule.
       */
      target?: 'ip';

      /**
       * The IP address to match. This address will be compared to the IP address of
       * incoming requests.
       */
      value?: string;
    }

    export interface DZw70ubTSchemasCidrConfiguration {
      /**
       * The configuration target. You must set the target to `ip_range` when specifying
       * an IP address range in the Zone Lockdown rule.
       */
      target?: 'ip_range';

      /**
       * The IP address range to match. You can only use prefix lengths `/16` and `/24`.
       */
      value?: string;
    }
  }
}

export interface LockdownUpdateResponse {
  errors?: Array<LockdownUpdateResponse.Error>;

  messages?: Array<LockdownUpdateResponse.Message>;

  result?: LockdownUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace LockdownUpdateResponse {
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
     * The unique identifier of the Zone Lockdown rule.
     */
    id: string;

    /**
     * A list of IP addresses or CIDR ranges that will be allowed to access the URLs
     * specified in the Zone Lockdown rule. You can include any number of `ip` or
     * `ip_range` configurations.
     */
    configurations: Result.DZw70ubTSchemasIPConfiguration | Result.DZw70ubTSchemasCidrConfiguration;

    /**
     * The timestamp of when the rule was created.
     */
    created_on: string;

    /**
     * An informative summary of the rule.
     */
    description: string;

    /**
     * The timestamp of when the rule was last modified.
     */
    modified_on: string;

    /**
     * When true, indicates that the rule is currently paused.
     */
    paused: boolean;

    /**
     * The URLs to include in the rule definition. You can use wildcards. Each entered
     * URL will be escaped before use, which means you can only use simple wildcard
     * patterns.
     */
    urls: Array<string>;
  }

  export namespace Result {
    export interface DZw70ubTSchemasIPConfiguration {
      /**
       * The configuration target. You must set the target to `ip` when specifying an IP
       * address in the Zone Lockdown rule.
       */
      target?: 'ip';

      /**
       * The IP address to match. This address will be compared to the IP address of
       * incoming requests.
       */
      value?: string;
    }

    export interface DZw70ubTSchemasCidrConfiguration {
      /**
       * The configuration target. You must set the target to `ip_range` when specifying
       * an IP address range in the Zone Lockdown rule.
       */
      target?: 'ip_range';

      /**
       * The IP address range to match. You can only use prefix lengths `/16` and `/24`.
       */
      value?: string;
    }
  }
}

export interface LockdownDeleteResponse {
  result?: LockdownDeleteResponse.Result;
}

export namespace LockdownDeleteResponse {
  export interface Result {
    /**
     * The unique identifier of the Zone Lockdown rule.
     */
    id?: string;
  }
}

export interface LockdownZoneLockdownCreateAZoneLockdownRuleResponse {
  errors?: Array<LockdownZoneLockdownCreateAZoneLockdownRuleResponse.Error>;

  messages?: Array<LockdownZoneLockdownCreateAZoneLockdownRuleResponse.Message>;

  result?: LockdownZoneLockdownCreateAZoneLockdownRuleResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace LockdownZoneLockdownCreateAZoneLockdownRuleResponse {
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
     * The unique identifier of the Zone Lockdown rule.
     */
    id: string;

    /**
     * A list of IP addresses or CIDR ranges that will be allowed to access the URLs
     * specified in the Zone Lockdown rule. You can include any number of `ip` or
     * `ip_range` configurations.
     */
    configurations: Result.DZw70ubTSchemasIPConfiguration | Result.DZw70ubTSchemasCidrConfiguration;

    /**
     * The timestamp of when the rule was created.
     */
    created_on: string;

    /**
     * An informative summary of the rule.
     */
    description: string;

    /**
     * The timestamp of when the rule was last modified.
     */
    modified_on: string;

    /**
     * When true, indicates that the rule is currently paused.
     */
    paused: boolean;

    /**
     * The URLs to include in the rule definition. You can use wildcards. Each entered
     * URL will be escaped before use, which means you can only use simple wildcard
     * patterns.
     */
    urls: Array<string>;
  }

  export namespace Result {
    export interface DZw70ubTSchemasIPConfiguration {
      /**
       * The configuration target. You must set the target to `ip` when specifying an IP
       * address in the Zone Lockdown rule.
       */
      target?: 'ip';

      /**
       * The IP address to match. This address will be compared to the IP address of
       * incoming requests.
       */
      value?: string;
    }

    export interface DZw70ubTSchemasCidrConfiguration {
      /**
       * The configuration target. You must set the target to `ip_range` when specifying
       * an IP address range in the Zone Lockdown rule.
       */
      target?: 'ip_range';

      /**
       * The IP address range to match. You can only use prefix lengths `/16` and `/24`.
       */
      value?: string;
    }
  }
}

export interface LockdownZoneLockdownListZoneLockdownRulesResponse {
  /**
   * The unique identifier of the Zone Lockdown rule.
   */
  id: string;

  /**
   * A list of IP addresses or CIDR ranges that will be allowed to access the URLs
   * specified in the Zone Lockdown rule. You can include any number of `ip` or
   * `ip_range` configurations.
   */
  configurations:
    | LockdownZoneLockdownListZoneLockdownRulesResponse.DZw70ubTSchemasIPConfiguration
    | LockdownZoneLockdownListZoneLockdownRulesResponse.DZw70ubTSchemasCidrConfiguration;

  /**
   * The timestamp of when the rule was created.
   */
  created_on: string;

  /**
   * An informative summary of the rule.
   */
  description: string;

  /**
   * The timestamp of when the rule was last modified.
   */
  modified_on: string;

  /**
   * When true, indicates that the rule is currently paused.
   */
  paused: boolean;

  /**
   * The URLs to include in the rule definition. You can use wildcards. Each entered
   * URL will be escaped before use, which means you can only use simple wildcard
   * patterns.
   */
  urls: Array<string>;
}

export namespace LockdownZoneLockdownListZoneLockdownRulesResponse {
  export interface DZw70ubTSchemasIPConfiguration {
    /**
     * The configuration target. You must set the target to `ip` when specifying an IP
     * address in the Zone Lockdown rule.
     */
    target?: 'ip';

    /**
     * The IP address to match. This address will be compared to the IP address of
     * incoming requests.
     */
    value?: string;
  }

  export interface DZw70ubTSchemasCidrConfiguration {
    /**
     * The configuration target. You must set the target to `ip_range` when specifying
     * an IP address range in the Zone Lockdown rule.
     */
    target?: 'ip_range';

    /**
     * The IP address range to match. You can only use prefix lengths `/16` and `/24`.
     */
    value?: string;
  }
}

export type LockdownUpdateParams = unknown;

export type LockdownZoneLockdownCreateAZoneLockdownRuleParams = unknown;

export interface LockdownZoneLockdownListZoneLockdownRulesParams {
  /**
   * A string to search for in the description of existing rules.
   */
  description?: string;

  /**
   * A string to search for in the description of existing rules.
   */
  description_search?: string;

  /**
   * A single IP address to search for in existing rules.
   */
  ip?: string;

  /**
   * A single IP address range to search for in existing rules.
   */
  ip_range_search?: string;

  /**
   * A single IP address to search for in existing rules.
   */
  ip_search?: string;

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
   * The priority of the rule to control the processing order. A lower number
   * indicates higher priority. If not provided, any rules with a configured priority
   * will be processed before rules without a priority.
   */
  priority?: number;

  /**
   * A single URI to search for in the list of URLs of existing rules.
   */
  uri_search?: string;
}

export namespace Lockdowns {
  export import LockdownRetrieveResponse = LockdownsAPI.LockdownRetrieveResponse;
  export import LockdownUpdateResponse = LockdownsAPI.LockdownUpdateResponse;
  export import LockdownDeleteResponse = LockdownsAPI.LockdownDeleteResponse;
  export import LockdownZoneLockdownCreateAZoneLockdownRuleResponse = LockdownsAPI.LockdownZoneLockdownCreateAZoneLockdownRuleResponse;
  export import LockdownZoneLockdownListZoneLockdownRulesResponse = LockdownsAPI.LockdownZoneLockdownListZoneLockdownRulesResponse;
  export import LockdownZoneLockdownListZoneLockdownRulesResponsesPage = LockdownsAPI.LockdownZoneLockdownListZoneLockdownRulesResponsesPage;
  export import LockdownUpdateParams = LockdownsAPI.LockdownUpdateParams;
  export import LockdownZoneLockdownCreateAZoneLockdownRuleParams = LockdownsAPI.LockdownZoneLockdownCreateAZoneLockdownRuleParams;
  export import LockdownZoneLockdownListZoneLockdownRulesParams = LockdownsAPI.LockdownZoneLockdownListZoneLockdownRulesParams;
}
