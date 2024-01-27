// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PoliciesAPI from 'cloudflare/resources/zones/page-shield/policies';

export class Policies extends APIResource {
  /**
   * Create a Page Shield policy.
   */
  create(
    zoneId: string,
    body: PolicyCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PolicyCreateResponse> {
    return this._client.post(`/zones/${zoneId}/page_shield/policies`, { body, ...options });
  }

  /**
   * Fetches a Page Shield policy by ID.
   */
  retrieve(
    zoneId: string,
    policyId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PolicyRetrieveResponse> {
    return this._client.get(`/zones/${zoneId}/page_shield/policies/${policyId}`, options);
  }

  /**
   * Update a Page Shield policy by ID.
   */
  update(
    zoneId: string,
    policyId: string,
    body: PolicyUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PolicyUpdateResponse> {
    return this._client.put(`/zones/${zoneId}/page_shield/policies/${policyId}`, { body, ...options });
  }

  /**
   * Lists all Page Shield policies.
   */
  list(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<PolicyListResponse> {
    return this._client.get(`/zones/${zoneId}/page_shield/policies`, options);
  }

  /**
   * Delete a Page Shield policy by ID.
   */
  delete(zoneId: string, policyId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/zones/${zoneId}/page_shield/policies/${policyId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface PolicyCreateResponse {
  /**
   * The ID of the policy
   */
  id?: string;

  /**
   * The action to take if the expression matches
   */
  action?: 'allow' | 'log';

  /**
   * A description for the policy
   */
  description?: string;

  /**
   * Whether the policy is enabled
   */
  enabled?: boolean;

  /**
   * The expression which must match for the policy to be applied, using the
   * Cloudflare Firewall rule expression syntax
   */
  expression?: string;

  /**
   * The policy which will be applied
   */
  value?: string;
}

export interface PolicyRetrieveResponse {
  /**
   * The ID of the policy
   */
  id?: string;

  /**
   * The action to take if the expression matches
   */
  action?: 'allow' | 'log';

  /**
   * A description for the policy
   */
  description?: string;

  /**
   * Whether the policy is enabled
   */
  enabled?: boolean;

  /**
   * The expression which must match for the policy to be applied, using the
   * Cloudflare Firewall rule expression syntax
   */
  expression?: string;

  /**
   * The policy which will be applied
   */
  value?: string;
}

export interface PolicyUpdateResponse {
  /**
   * The ID of the policy
   */
  id?: string;

  /**
   * The action to take if the expression matches
   */
  action?: 'allow' | 'log';

  /**
   * A description for the policy
   */
  description?: string;

  /**
   * Whether the policy is enabled
   */
  enabled?: boolean;

  /**
   * The expression which must match for the policy to be applied, using the
   * Cloudflare Firewall rule expression syntax
   */
  expression?: string;

  /**
   * The policy which will be applied
   */
  value?: string;
}

export interface PolicyListResponse {
  errors?: Array<PolicyListResponse.Error>;

  messages?: Array<PolicyListResponse.Message>;

  result?: Array<PolicyListResponse.Result>;

  result_info?: PolicyListResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace PolicyListResponse {
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
     * The ID of the policy
     */
    id?: string;

    /**
     * The action to take if the expression matches
     */
    action?: 'allow' | 'log';

    /**
     * A description for the policy
     */
    description?: string;

    /**
     * Whether the policy is enabled
     */
    enabled?: boolean;

    /**
     * The expression which must match for the policy to be applied, using the
     * Cloudflare Firewall rule expression syntax
     */
    expression?: string;

    /**
     * The policy which will be applied
     */
    value?: string;
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

export interface PolicyCreateParams {
  /**
   * The action to take if the expression matches
   */
  action?: 'allow' | 'log';

  /**
   * A description for the policy
   */
  description?: string;

  /**
   * Whether the policy is enabled
   */
  enabled?: boolean;

  /**
   * The expression which must match for the policy to be applied, using the
   * Cloudflare Firewall rule expression syntax
   */
  expression?: string;

  /**
   * The policy which will be applied
   */
  value?: string;
}

export interface PolicyUpdateParams {
  /**
   * The action to take if the expression matches
   */
  action?: 'allow' | 'log';

  /**
   * A description for the policy
   */
  description?: string;

  /**
   * Whether the policy is enabled
   */
  enabled?: boolean;

  /**
   * The expression which must match for the policy to be applied, using the
   * Cloudflare Firewall rule expression syntax
   */
  expression?: string;

  /**
   * The policy which will be applied
   */
  value?: string;
}

export namespace Policies {
  export import PolicyCreateResponse = PoliciesAPI.PolicyCreateResponse;
  export import PolicyRetrieveResponse = PoliciesAPI.PolicyRetrieveResponse;
  export import PolicyUpdateResponse = PoliciesAPI.PolicyUpdateResponse;
  export import PolicyListResponse = PoliciesAPI.PolicyListResponse;
  export import PolicyCreateParams = PoliciesAPI.PolicyCreateParams;
  export import PolicyUpdateParams = PoliciesAPI.PolicyUpdateParams;
}
