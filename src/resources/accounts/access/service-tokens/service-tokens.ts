// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ServiceTokensAPI from 'cloudflare/resources/accounts/access/service-tokens/service-tokens';
import * as RefreshesAPI from 'cloudflare/resources/accounts/access/service-tokens/refreshes';
import * as RotatesAPI from 'cloudflare/resources/accounts/access/service-tokens/rotates';

export class ServiceTokens extends APIResource {
  refreshes: RefreshesAPI.Refreshes = new RefreshesAPI.Refreshes(this._client);
  rotates: RotatesAPI.Rotates = new RotatesAPI.Rotates(this._client);

  /**
   * Updates a configured service token.
   */
  update(
    identifier: string,
    uuid: string,
    body: ServiceTokenUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ServiceTokenUpdateResponse> {
    return this._client.put(`/accounts/${identifier}/access/service_tokens/${uuid}`, { body, ...options });
  }

  /**
   * Deletes a service token.
   */
  delete(
    identifier: string,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ServiceTokenDeleteResponse> {
    return this._client.delete(`/accounts/${identifier}/access/service_tokens/${uuid}`, options);
  }

  /**
   * Generates a new service token. **Note:** This is the only time you can get the
   * Client Secret. If you lose the Client Secret, you will have to rotate the Client
   * Secret or create a new service token.
   */
  accessServiceTokensCreateAServiceToken(
    identifier: string,
    body: ServiceTokenAccessServiceTokensCreateAServiceTokenParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ServiceTokenAccessServiceTokensCreateAServiceTokenResponse> {
    return this._client.post(`/accounts/${identifier}/access/service_tokens`, { body, ...options });
  }

  /**
   * Lists all service tokens.
   */
  accessServiceTokensListServiceTokens(
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ServiceTokenAccessServiceTokensListServiceTokensResponse> {
    return this._client.get(`/accounts/${identifier}/access/service_tokens`, options);
  }
}

export interface ServiceTokenUpdateResponse {
  errors?: Array<ServiceTokenUpdateResponse.Error>;

  messages?: Array<ServiceTokenUpdateResponse.Message>;

  result?: ServiceTokenUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ServiceTokenUpdateResponse {
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
     * The ID of the service token.
     */
    id?: unknown;

    /**
     * The Client ID for the service token. Access will check for this value in the
     * `CF-Access-Client-ID` request header.
     */
    client_id?: string;

    created_at?: string;

    /**
     * The duration for how long the service token will be valid. Must be in the format
     * `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m, h. The
     * default is 1 year in hours (8760h).
     */
    duration?: string;

    /**
     * The name of the service token.
     */
    name?: string;

    updated_at?: string;
  }
}

export interface ServiceTokenDeleteResponse {
  errors?: Array<ServiceTokenDeleteResponse.Error>;

  messages?: Array<ServiceTokenDeleteResponse.Message>;

  result?: ServiceTokenDeleteResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ServiceTokenDeleteResponse {
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
     * The ID of the service token.
     */
    id?: unknown;

    /**
     * The Client ID for the service token. Access will check for this value in the
     * `CF-Access-Client-ID` request header.
     */
    client_id?: string;

    created_at?: string;

    /**
     * The duration for how long the service token will be valid. Must be in the format
     * `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m, h. The
     * default is 1 year in hours (8760h).
     */
    duration?: string;

    /**
     * The name of the service token.
     */
    name?: string;

    updated_at?: string;
  }
}

export interface ServiceTokenAccessServiceTokensCreateAServiceTokenResponse {
  errors?: Array<ServiceTokenAccessServiceTokensCreateAServiceTokenResponse.Error>;

  messages?: Array<ServiceTokenAccessServiceTokensCreateAServiceTokenResponse.Message>;

  result?: ServiceTokenAccessServiceTokensCreateAServiceTokenResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ServiceTokenAccessServiceTokensCreateAServiceTokenResponse {
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
     * The ID of the service token.
     */
    id?: unknown;

    /**
     * The Client ID for the service token. Access will check for this value in the
     * `CF-Access-Client-ID` request header.
     */
    client_id?: string;

    /**
     * The Client Secret for the service token. Access will check for this value in the
     * `CF-Access-Client-Secret` request header.
     */
    client_secret?: string;

    created_at?: string;

    /**
     * The duration for how long the service token will be valid. Must be in the format
     * `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m, h. The
     * default is 1 year in hours (8760h).
     */
    duration?: string;

    /**
     * The name of the service token.
     */
    name?: string;

    updated_at?: string;
  }
}

export interface ServiceTokenAccessServiceTokensListServiceTokensResponse {
  errors?: Array<ServiceTokenAccessServiceTokensListServiceTokensResponse.Error>;

  messages?: Array<ServiceTokenAccessServiceTokensListServiceTokensResponse.Message>;

  result?: Array<ServiceTokenAccessServiceTokensListServiceTokensResponse.Result>;

  result_info?: ServiceTokenAccessServiceTokensListServiceTokensResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ServiceTokenAccessServiceTokensListServiceTokensResponse {
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
     * The ID of the service token.
     */
    id?: unknown;

    /**
     * The Client ID for the service token. Access will check for this value in the
     * `CF-Access-Client-ID` request header.
     */
    client_id?: string;

    created_at?: string;

    /**
     * The duration for how long the service token will be valid. Must be in the format
     * `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m, h. The
     * default is 1 year in hours (8760h).
     */
    duration?: string;

    /**
     * The name of the service token.
     */
    name?: string;

    updated_at?: string;
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

export interface ServiceTokenUpdateParams {
  /**
   * The duration for how long the service token will be valid. Must be in the format
   * `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m, h. The
   * default is 1 year in hours (8760h).
   */
  duration?: string;

  /**
   * The name of the service token.
   */
  name?: string;
}

export interface ServiceTokenAccessServiceTokensCreateAServiceTokenParams {
  /**
   * The name of the service token.
   */
  name: string;

  /**
   * The duration for how long the service token will be valid. Must be in the format
   * `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m, h. The
   * default is 1 year in hours (8760h).
   */
  duration?: string;
}

export namespace ServiceTokens {
  export import ServiceTokenUpdateResponse = ServiceTokensAPI.ServiceTokenUpdateResponse;
  export import ServiceTokenDeleteResponse = ServiceTokensAPI.ServiceTokenDeleteResponse;
  export import ServiceTokenAccessServiceTokensCreateAServiceTokenResponse = ServiceTokensAPI.ServiceTokenAccessServiceTokensCreateAServiceTokenResponse;
  export import ServiceTokenAccessServiceTokensListServiceTokensResponse = ServiceTokensAPI.ServiceTokenAccessServiceTokensListServiceTokensResponse;
  export import ServiceTokenUpdateParams = ServiceTokensAPI.ServiceTokenUpdateParams;
  export import ServiceTokenAccessServiceTokensCreateAServiceTokenParams = ServiceTokensAPI.ServiceTokenAccessServiceTokensCreateAServiceTokenParams;
  export import Refreshes = RefreshesAPI.Refreshes;
  export import RefreshAccessServiceTokensRefreshAServiceTokenResponse = RefreshesAPI.RefreshAccessServiceTokensRefreshAServiceTokenResponse;
  export import Rotates = RotatesAPI.Rotates;
  export import RotateAccessServiceTokensRotateAServiceTokenResponse = RotatesAPI.RotateAccessServiceTokensRotateAServiceTokenResponse;
}
