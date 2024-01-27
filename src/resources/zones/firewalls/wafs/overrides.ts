// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as OverridesAPI from 'cloudflare/resources/zones/firewalls/wafs/overrides';
import { Page } from 'cloudflare/pagination';

export class Overrides extends APIResource {
  /**
   * Fetches the details of a URI-based WAF override.
   *
   * **Note:** Applies only to the
   * [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
   */
  retrieve(
    zoneIdentifier: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OverrideRetrieveResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/firewall/waf/overrides/${id}`, options);
  }

  /**
   * Updates an existing URI-based WAF override.
   *
   * **Note:** Applies only to the
   * [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
   */
  update(
    zoneIdentifier: string,
    id: string,
    body: OverrideUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OverrideUpdateResponse> {
    return this._client.put(`/zones/${zoneIdentifier}/firewall/waf/overrides/${id}`, { body, ...options });
  }

  /**
   * Deletes an existing URI-based WAF override.
   *
   * **Note:** Applies only to the
   * [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
   */
  delete(
    zoneIdentifier: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OverrideDeleteResponse> {
    return this._client.delete(`/zones/${zoneIdentifier}/firewall/waf/overrides/${id}`, options);
  }

  /**
   * Creates a URI-based WAF override for a zone.
   *
   * **Note:** Applies only to the
   * [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
   */
  wafOverridesCreateAWafOverride(
    zoneIdentifier: string,
    body: OverrideWafOverridesCreateAWafOverrideParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OverrideWafOverridesCreateAWafOverrideResponse> {
    return this._client.post(`/zones/${zoneIdentifier}/firewall/waf/overrides`, { body, ...options });
  }

  /**
   * Fetches the URI-based WAF overrides in a zone.
   *
   * **Note:** Applies only to the
   * [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
   */
  wafOverridesListWafOverrides(
    zoneIdentifier: string,
    query?: OverrideWafOverridesListWafOverridesParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    OverrideWafOverridesListWafOverridesResponsesPage,
    OverrideWafOverridesListWafOverridesResponse
  >;
  wafOverridesListWafOverrides(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    OverrideWafOverridesListWafOverridesResponsesPage,
    OverrideWafOverridesListWafOverridesResponse
  >;
  wafOverridesListWafOverrides(
    zoneIdentifier: string,
    query: OverrideWafOverridesListWafOverridesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    OverrideWafOverridesListWafOverridesResponsesPage,
    OverrideWafOverridesListWafOverridesResponse
  > {
    if (isRequestOptions(query)) {
      return this.wafOverridesListWafOverrides(zoneIdentifier, {}, query);
    }
    return this._client.getAPIList(
      `/zones/${zoneIdentifier}/firewall/waf/overrides`,
      OverrideWafOverridesListWafOverridesResponsesPage,
      { query, ...options },
    );
  }
}

export class OverrideWafOverridesListWafOverridesResponsesPage extends Page<OverrideWafOverridesListWafOverridesResponse> {}

export interface OverrideRetrieveResponse {
  errors?: Array<OverrideRetrieveResponse.Error>;

  messages?: Array<OverrideRetrieveResponse.Message>;

  result?: OverrideRetrieveResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace OverrideRetrieveResponse {
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
     * The unique identifier of the WAF override.
     */
    id?: string;

    /**
     * An informative summary of the current URI-based WAF override.
     */
    description?: string | null;

    /**
     * An object that allows you to enable or disable WAF rule groups for the current
     * WAF override. Each key of this object must be the ID of a WAF rule group, and
     * each value must be a valid WAF action (usually `default` or `disable`). When
     * creating a new URI-based WAF override, you must provide a `groups` object or a
     * `rules` object.
     */
    groups?: unknown;

    /**
     * When true, indicates that the WAF package is currently paused.
     */
    paused?: boolean;

    /**
     * The relative priority of the current URI-based WAF override when multiple
     * overrides match a single URL. A lower number indicates higher priority. Higher
     * priority overrides may overwrite values set by lower priority overrides.
     */
    priority?: number;

    /**
     * Specifies that, when a WAF rule matches, its configured action will be replaced
     * by the action configured in this object.
     */
    rewrite_action?: Result.RewriteAction;

    /**
     * An object that allows you to override the action of specific WAF rules. Each key
     * of this object must be the ID of a WAF rule, and each value must be a valid WAF
     * action. Unless you are disabling a rule, ensure that you also enable the rule
     * group that this WAF rule belongs to. When creating a new URI-based WAF override,
     * you must provide a `groups` object or a `rules` object.
     */
    rules?: unknown;

    /**
     * The URLs to include in the current WAF override. You can use wildcards. Each
     * entered URL will be escaped before use, which means you can only use simple
     * wildcard patterns.
     */
    urls?: Array<string>;
  }

  export namespace Result {
    /**
     * Specifies that, when a WAF rule matches, its configured action will be replaced
     * by the action configured in this object.
     */
    export interface RewriteAction {
      /**
       * The WAF rule action to apply.
       */
      block?: 'challenge' | 'block' | 'simulate' | 'disable' | 'default';

      challenge?: unknown;

      default?: unknown;

      /**
       * The WAF rule action to apply.
       */
      disable?: 'challenge' | 'block' | 'simulate' | 'disable' | 'default';

      simulate?: unknown;
    }
  }
}

export interface OverrideUpdateResponse {
  errors?: Array<OverrideUpdateResponse.Error>;

  messages?: Array<OverrideUpdateResponse.Message>;

  result?: OverrideUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace OverrideUpdateResponse {
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
     * The unique identifier of the WAF override.
     */
    id?: string;

    /**
     * An informative summary of the current URI-based WAF override.
     */
    description?: string | null;

    /**
     * An object that allows you to enable or disable WAF rule groups for the current
     * WAF override. Each key of this object must be the ID of a WAF rule group, and
     * each value must be a valid WAF action (usually `default` or `disable`). When
     * creating a new URI-based WAF override, you must provide a `groups` object or a
     * `rules` object.
     */
    groups?: unknown;

    /**
     * When true, indicates that the WAF package is currently paused.
     */
    paused?: boolean;

    /**
     * The relative priority of the current URI-based WAF override when multiple
     * overrides match a single URL. A lower number indicates higher priority. Higher
     * priority overrides may overwrite values set by lower priority overrides.
     */
    priority?: number;

    /**
     * Specifies that, when a WAF rule matches, its configured action will be replaced
     * by the action configured in this object.
     */
    rewrite_action?: Result.RewriteAction;

    /**
     * An object that allows you to override the action of specific WAF rules. Each key
     * of this object must be the ID of a WAF rule, and each value must be a valid WAF
     * action. Unless you are disabling a rule, ensure that you also enable the rule
     * group that this WAF rule belongs to. When creating a new URI-based WAF override,
     * you must provide a `groups` object or a `rules` object.
     */
    rules?: unknown;

    /**
     * The URLs to include in the current WAF override. You can use wildcards. Each
     * entered URL will be escaped before use, which means you can only use simple
     * wildcard patterns.
     */
    urls?: Array<string>;
  }

  export namespace Result {
    /**
     * Specifies that, when a WAF rule matches, its configured action will be replaced
     * by the action configured in this object.
     */
    export interface RewriteAction {
      /**
       * The WAF rule action to apply.
       */
      block?: 'challenge' | 'block' | 'simulate' | 'disable' | 'default';

      challenge?: unknown;

      default?: unknown;

      /**
       * The WAF rule action to apply.
       */
      disable?: 'challenge' | 'block' | 'simulate' | 'disable' | 'default';

      simulate?: unknown;
    }
  }
}

export interface OverrideDeleteResponse {
  result?: OverrideDeleteResponse.Result;
}

export namespace OverrideDeleteResponse {
  export interface Result {
    /**
     * The unique identifier of the WAF override.
     */
    id?: string;
  }
}

export interface OverrideWafOverridesCreateAWafOverrideResponse {
  errors?: Array<OverrideWafOverridesCreateAWafOverrideResponse.Error>;

  messages?: Array<OverrideWafOverridesCreateAWafOverrideResponse.Message>;

  result?: OverrideWafOverridesCreateAWafOverrideResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace OverrideWafOverridesCreateAWafOverrideResponse {
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
     * The unique identifier of the WAF override.
     */
    id?: string;

    /**
     * An informative summary of the current URI-based WAF override.
     */
    description?: string | null;

    /**
     * An object that allows you to enable or disable WAF rule groups for the current
     * WAF override. Each key of this object must be the ID of a WAF rule group, and
     * each value must be a valid WAF action (usually `default` or `disable`). When
     * creating a new URI-based WAF override, you must provide a `groups` object or a
     * `rules` object.
     */
    groups?: unknown;

    /**
     * When true, indicates that the WAF package is currently paused.
     */
    paused?: boolean;

    /**
     * The relative priority of the current URI-based WAF override when multiple
     * overrides match a single URL. A lower number indicates higher priority. Higher
     * priority overrides may overwrite values set by lower priority overrides.
     */
    priority?: number;

    /**
     * Specifies that, when a WAF rule matches, its configured action will be replaced
     * by the action configured in this object.
     */
    rewrite_action?: Result.RewriteAction;

    /**
     * An object that allows you to override the action of specific WAF rules. Each key
     * of this object must be the ID of a WAF rule, and each value must be a valid WAF
     * action. Unless you are disabling a rule, ensure that you also enable the rule
     * group that this WAF rule belongs to. When creating a new URI-based WAF override,
     * you must provide a `groups` object or a `rules` object.
     */
    rules?: unknown;

    /**
     * The URLs to include in the current WAF override. You can use wildcards. Each
     * entered URL will be escaped before use, which means you can only use simple
     * wildcard patterns.
     */
    urls?: Array<string>;
  }

  export namespace Result {
    /**
     * Specifies that, when a WAF rule matches, its configured action will be replaced
     * by the action configured in this object.
     */
    export interface RewriteAction {
      /**
       * The WAF rule action to apply.
       */
      block?: 'challenge' | 'block' | 'simulate' | 'disable' | 'default';

      challenge?: unknown;

      default?: unknown;

      /**
       * The WAF rule action to apply.
       */
      disable?: 'challenge' | 'block' | 'simulate' | 'disable' | 'default';

      simulate?: unknown;
    }
  }
}

export interface OverrideWafOverridesListWafOverridesResponse {
  /**
   * The unique identifier of the WAF override.
   */
  id?: string;

  /**
   * An informative summary of the current URI-based WAF override.
   */
  description?: string | null;

  /**
   * An object that allows you to enable or disable WAF rule groups for the current
   * WAF override. Each key of this object must be the ID of a WAF rule group, and
   * each value must be a valid WAF action (usually `default` or `disable`). When
   * creating a new URI-based WAF override, you must provide a `groups` object or a
   * `rules` object.
   */
  groups?: unknown;

  /**
   * When true, indicates that the WAF package is currently paused.
   */
  paused?: boolean;

  /**
   * The relative priority of the current URI-based WAF override when multiple
   * overrides match a single URL. A lower number indicates higher priority. Higher
   * priority overrides may overwrite values set by lower priority overrides.
   */
  priority?: number;

  /**
   * Specifies that, when a WAF rule matches, its configured action will be replaced
   * by the action configured in this object.
   */
  rewrite_action?: OverrideWafOverridesListWafOverridesResponse.RewriteAction;

  /**
   * An object that allows you to override the action of specific WAF rules. Each key
   * of this object must be the ID of a WAF rule, and each value must be a valid WAF
   * action. Unless you are disabling a rule, ensure that you also enable the rule
   * group that this WAF rule belongs to. When creating a new URI-based WAF override,
   * you must provide a `groups` object or a `rules` object.
   */
  rules?: unknown;

  /**
   * The URLs to include in the current WAF override. You can use wildcards. Each
   * entered URL will be escaped before use, which means you can only use simple
   * wildcard patterns.
   */
  urls?: Array<string>;
}

export namespace OverrideWafOverridesListWafOverridesResponse {
  /**
   * Specifies that, when a WAF rule matches, its configured action will be replaced
   * by the action configured in this object.
   */
  export interface RewriteAction {
    /**
     * The WAF rule action to apply.
     */
    block?: 'challenge' | 'block' | 'simulate' | 'disable' | 'default';

    challenge?: unknown;

    default?: unknown;

    /**
     * The WAF rule action to apply.
     */
    disable?: 'challenge' | 'block' | 'simulate' | 'disable' | 'default';

    simulate?: unknown;
  }
}

export type OverrideUpdateParams = unknown;

export type OverrideWafOverridesCreateAWafOverrideParams = unknown;

export interface OverrideWafOverridesListWafOverridesParams {
  /**
   * The page number of paginated results.
   */
  page?: number;

  /**
   * The number of WAF overrides per page.
   */
  per_page?: number;
}

export namespace Overrides {
  export import OverrideRetrieveResponse = OverridesAPI.OverrideRetrieveResponse;
  export import OverrideUpdateResponse = OverridesAPI.OverrideUpdateResponse;
  export import OverrideDeleteResponse = OverridesAPI.OverrideDeleteResponse;
  export import OverrideWafOverridesCreateAWafOverrideResponse = OverridesAPI.OverrideWafOverridesCreateAWafOverrideResponse;
  export import OverrideWafOverridesListWafOverridesResponse = OverridesAPI.OverrideWafOverridesListWafOverridesResponse;
  export import OverrideWafOverridesListWafOverridesResponsesPage = OverridesAPI.OverrideWafOverridesListWafOverridesResponsesPage;
  export import OverrideUpdateParams = OverridesAPI.OverrideUpdateParams;
  export import OverrideWafOverridesCreateAWafOverrideParams = OverridesAPI.OverrideWafOverridesCreateAWafOverrideParams;
  export import OverrideWafOverridesListWafOverridesParams = OverridesAPI.OverrideWafOverridesListWafOverridesParams;
}
