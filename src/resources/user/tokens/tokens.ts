// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as TokensAPI from 'cloudflare/resources/user/tokens/tokens';
import * as PermissionGroupsAPI from 'cloudflare/resources/user/tokens/permission-groups';
import * as ValuesAPI from 'cloudflare/resources/user/tokens/values';
import * as VerifiesAPI from 'cloudflare/resources/user/tokens/verifies';
import { Page } from 'cloudflare/pagination';

export class Tokens extends APIResource {
  permissionGroups: PermissionGroupsAPI.PermissionGroups = new PermissionGroupsAPI.PermissionGroups(
    this._client,
  );
  verifies: VerifiesAPI.Verifies = new VerifiesAPI.Verifies(this._client);
  values: ValuesAPI.Values = new ValuesAPI.Values(this._client);

  /**
   * Get information about a specific token.
   */
  retrieve(identifier: unknown, options?: Core.RequestOptions): Core.APIPromise<TokenRetrieveResponse> {
    return this._client.get(`/user/tokens/${identifier}`, options);
  }

  /**
   * Update an existing token.
   */
  update(
    identifier: unknown,
    body: TokenUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TokenUpdateResponse> {
    return this._client.put(`/user/tokens/${identifier}`, { body, ...options });
  }

  /**
   * Destroy a token.
   */
  delete(identifier: unknown, options?: Core.RequestOptions): Core.APIPromise<TokenDeleteResponse> {
    return this._client.delete(`/user/tokens/${identifier}`, options);
  }

  /**
   * Create a new access token.
   */
  userAPITokensCreateToken(
    body: TokenUserAPITokensCreateTokenParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TokenUserAPITokensCreateTokenResponse> {
    return this._client.post('/user/tokens', { body, ...options });
  }

  /**
   * List all access tokens you created.
   */
  userAPITokensListTokens(
    query?: TokenUserAPITokensListTokensParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<TokenUserAPITokensListTokensResponsesPage, TokenUserAPITokensListTokensResponse>;
  userAPITokensListTokens(
    options?: Core.RequestOptions,
  ): Core.PagePromise<TokenUserAPITokensListTokensResponsesPage, TokenUserAPITokensListTokensResponse>;
  userAPITokensListTokens(
    query: TokenUserAPITokensListTokensParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<TokenUserAPITokensListTokensResponsesPage, TokenUserAPITokensListTokensResponse> {
    if (isRequestOptions(query)) {
      return this.userAPITokensListTokens({}, query);
    }
    return this._client.getAPIList('/user/tokens', TokenUserAPITokensListTokensResponsesPage, {
      query,
      ...options,
    });
  }
}

export class TokenUserAPITokensListTokensResponsesPage extends Page<TokenUserAPITokensListTokensResponse> {}

export interface TokenRetrieveResponse {
  errors?: Array<TokenRetrieveResponse.Error>;

  messages?: Array<TokenRetrieveResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace TokenRetrieveResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface TokenUpdateResponse {
  errors?: Array<TokenUpdateResponse.Error>;

  messages?: Array<TokenUpdateResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace TokenUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface TokenDeleteResponse {
  errors?: Array<TokenDeleteResponse.Error>;

  messages?: Array<TokenDeleteResponse.Message>;

  result?: TokenDeleteResponse.Result | null;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace TokenDeleteResponse {
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
     * Identifier
     */
    id: string;
  }
}

export interface TokenUserAPITokensCreateTokenResponse {
  errors?: Array<TokenUserAPITokensCreateTokenResponse.Error>;

  messages?: Array<TokenUserAPITokensCreateTokenResponse.Message>;

  result?: TokenUserAPITokensCreateTokenResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace TokenUserAPITokensCreateTokenResponse {
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
     * The token value.
     */
    value?: string;
  }
}

export type TokenUserAPITokensListTokensResponse = unknown;

export interface TokenUpdateParams {
  /**
   * Token name.
   */
  name: string;

  /**
   * List of access policies assigned to the token.
   */
  policies: Array<TokenUpdateParams.Policy>;

  /**
   * Status of the token.
   */
  status: 'active' | 'disabled' | 'expired';

  condition?: TokenUpdateParams.Condition;

  /**
   * The expiration time on or after which the JWT MUST NOT be accepted for
   * processing.
   */
  expires_on?: string;

  /**
   * The time before which the token MUST NOT be accepted for processing.
   */
  not_before?: string;
}

export namespace TokenUpdateParams {
  export interface Policy {
    /**
     * Allow or deny operations against the resources.
     */
    effect: 'allow' | 'deny';

    /**
     * A set of permission groups that are specified to the policy.
     */
    permission_groups: Array<Policy.PermissionGroup>;

    /**
     * A list of resource names that the policy applies to.
     */
    resources: unknown;
  }

  export namespace Policy {
    /**
     * A named group of permissions that map to a group of operations against
     * resources.
     */
    export interface PermissionGroup {}
  }

  export interface Condition {
    /**
     * Client IP restrictions.
     */
    'request.ip'?: Condition.RequestIP;
  }

  export namespace Condition {
    /**
     * Client IP restrictions.
     */
    export interface RequestIP {
      /**
       * List of IPv4/IPv6 CIDR addresses.
       */
      in?: Array<string>;

      /**
       * List of IPv4/IPv6 CIDR addresses.
       */
      not_in?: Array<string>;
    }
  }
}

export interface TokenUserAPITokensCreateTokenParams {
  /**
   * Token name.
   */
  name: string;

  /**
   * List of access policies assigned to the token.
   */
  policies: Array<TokenUserAPITokensCreateTokenParams.Policy>;

  condition?: TokenUserAPITokensCreateTokenParams.Condition;

  /**
   * The expiration time on or after which the JWT MUST NOT be accepted for
   * processing.
   */
  expires_on?: string;

  /**
   * The time before which the token MUST NOT be accepted for processing.
   */
  not_before?: string;
}

export namespace TokenUserAPITokensCreateTokenParams {
  export interface Policy {
    /**
     * Allow or deny operations against the resources.
     */
    effect: 'allow' | 'deny';

    /**
     * A set of permission groups that are specified to the policy.
     */
    permission_groups: Array<Policy.PermissionGroup>;

    /**
     * A list of resource names that the policy applies to.
     */
    resources: unknown;
  }

  export namespace Policy {
    /**
     * A named group of permissions that map to a group of operations against
     * resources.
     */
    export interface PermissionGroup {}
  }

  export interface Condition {
    /**
     * Client IP restrictions.
     */
    'request.ip'?: Condition.RequestIP;
  }

  export namespace Condition {
    /**
     * Client IP restrictions.
     */
    export interface RequestIP {
      /**
       * List of IPv4/IPv6 CIDR addresses.
       */
      in?: Array<string>;

      /**
       * List of IPv4/IPv6 CIDR addresses.
       */
      not_in?: Array<string>;
    }
  }
}

export interface TokenUserAPITokensListTokensParams {
  /**
   * Direction to order results.
   */
  direction?: 'asc' | 'desc';

  /**
   * Page number of paginated results.
   */
  page?: number;

  /**
   * Maximum number of results per page.
   */
  per_page?: number;
}

export namespace Tokens {
  export import TokenRetrieveResponse = TokensAPI.TokenRetrieveResponse;
  export import TokenUpdateResponse = TokensAPI.TokenUpdateResponse;
  export import TokenDeleteResponse = TokensAPI.TokenDeleteResponse;
  export import TokenUserAPITokensCreateTokenResponse = TokensAPI.TokenUserAPITokensCreateTokenResponse;
  export import TokenUserAPITokensListTokensResponse = TokensAPI.TokenUserAPITokensListTokensResponse;
  export import TokenUserAPITokensListTokensResponsesPage = TokensAPI.TokenUserAPITokensListTokensResponsesPage;
  export import TokenUpdateParams = TokensAPI.TokenUpdateParams;
  export import TokenUserAPITokensCreateTokenParams = TokensAPI.TokenUserAPITokensCreateTokenParams;
  export import TokenUserAPITokensListTokensParams = TokensAPI.TokenUserAPITokensListTokensParams;
  export import PermissionGroups = PermissionGroupsAPI.PermissionGroups;
  export import PermissionGroupPermissionGroupsListPermissionGroupsResponse = PermissionGroupsAPI.PermissionGroupPermissionGroupsListPermissionGroupsResponse;
  export import Verifies = VerifiesAPI.Verifies;
  export import VerifyUserAPITokensVerifyTokenResponse = VerifiesAPI.VerifyUserAPITokensVerifyTokenResponse;
  export import Values = ValuesAPI.Values;
  export import ValueUserAPITokensRollTokenResponse = ValuesAPI.ValueUserAPITokensRollTokenResponse;
  export import ValueUserAPITokensRollTokenParams = ValuesAPI.ValueUserAPITokensRollTokenParams;
}
