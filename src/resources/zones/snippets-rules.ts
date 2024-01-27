// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as SnippetsRulesAPI from 'cloudflare/resources/zones/snippets-rules';

export class SnippetsRules extends APIResource {
  /**
   * Put Rules
   */
  update(
    zoneIdentifier: string,
    body?: SnippetsRuleUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SnippetsRuleUpdateResponse>;
  update(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<SnippetsRuleUpdateResponse>;
  update(
    zoneIdentifier: string,
    body: SnippetsRuleUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SnippetsRuleUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update(zoneIdentifier, {}, body);
    }
    return this._client.put(`/zones/${zoneIdentifier}/snippets/snippet_rules`, { body, ...options });
  }

  /**
   * Rules
   */
  list(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<SnippetsRuleListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/snippets/snippet_rules`, options);
  }
}

export interface SnippetsRuleUpdateResponse {
  errors?: Array<SnippetsRuleUpdateResponse.Error>;

  messages?: Array<SnippetsRuleUpdateResponse.Message>;

  /**
   * List of snippet rules
   */
  result?: Array<SnippetsRuleUpdateResponse.Result>;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace SnippetsRuleUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    description?: string;

    enabled?: boolean;

    expression?: string;

    /**
     * Snippet identifying name
     */
    snippet_name?: string;
  }
}

export interface SnippetsRuleListResponse {
  errors?: Array<SnippetsRuleListResponse.Error>;

  messages?: Array<SnippetsRuleListResponse.Message>;

  /**
   * List of snippet rules
   */
  result?: Array<SnippetsRuleListResponse.Result>;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace SnippetsRuleListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    description?: string;

    enabled?: boolean;

    expression?: string;

    /**
     * Snippet identifying name
     */
    snippet_name?: string;
  }
}

export interface SnippetsRuleUpdateParams {
  /**
   * List of snippet rules
   */
  rules?: Array<SnippetsRuleUpdateParams.Rule>;
}

export namespace SnippetsRuleUpdateParams {
  export interface Rule {
    description?: string;

    enabled?: boolean;

    expression?: string;

    /**
     * Snippet identifying name
     */
    snippet_name?: string;
  }
}

export namespace SnippetsRules {
  export import SnippetsRuleUpdateResponse = SnippetsRulesAPI.SnippetsRuleUpdateResponse;
  export import SnippetsRuleListResponse = SnippetsRulesAPI.SnippetsRuleListResponse;
  export import SnippetsRuleUpdateParams = SnippetsRulesAPI.SnippetsRuleUpdateParams;
}
