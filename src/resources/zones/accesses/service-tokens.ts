// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ServiceTokensAPI from 'cloudflare/resources/zones/accesses/service-tokens';

export class ServiceTokens extends APIResource {
  /**
   * Updates a configured service token.
   */
  update(
    identifier: string,
    uuid: string,
    body: ServiceTokenUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ServiceTokenUpdateResponse> {
    return this._client.put(`/zones/${identifier}/access/service_tokens/${uuid}`, { body, ...options });
  }

  /**
   * Deletes a service token.
   */
  delete(
    identifier: string,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ServiceTokenDeleteResponse> {
    return this._client.delete(`/zones/${identifier}/access/service_tokens/${uuid}`, options);
  }

  /**
   * Generates a new service token. **Note:** This is the only time you can get the
   * Client Secret. If you lose the Client Secret, you will have to create a new
   * service token.
   */
  zoneLevelAccessServiceTokensCreateAServiceToken(
    identifier: string,
    body: ServiceTokenZoneLevelAccessServiceTokensCreateAServiceTokenParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ServiceTokenZoneLevelAccessServiceTokensCreateAServiceTokenResponse> {
    return this._client.post(`/zones/${identifier}/access/service_tokens`, { body, ...options });
  }

  /**
   * Lists all service tokens.
   */
  zoneLevelAccessServiceTokensListServiceTokens(
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ServiceTokenZoneLevelAccessServiceTokensListServiceTokensResponse> {
    return this._client.get(`/zones/${identifier}/access/service_tokens`, options);
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

export interface ServiceTokenZoneLevelAccessServiceTokensCreateAServiceTokenResponse {
  errors?: Array<ServiceTokenZoneLevelAccessServiceTokensCreateAServiceTokenResponse.Error>;

  messages?: Array<ServiceTokenZoneLevelAccessServiceTokensCreateAServiceTokenResponse.Message>;

  result?: ServiceTokenZoneLevelAccessServiceTokensCreateAServiceTokenResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ServiceTokenZoneLevelAccessServiceTokensCreateAServiceTokenResponse {
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

export interface ServiceTokenZoneLevelAccessServiceTokensListServiceTokensResponse {
  errors?: Array<ServiceTokenZoneLevelAccessServiceTokensListServiceTokensResponse.Error>;

  messages?: Array<ServiceTokenZoneLevelAccessServiceTokensListServiceTokensResponse.Message>;

  result?: Array<ServiceTokenZoneLevelAccessServiceTokensListServiceTokensResponse.Result>;

  result_info?: ServiceTokenZoneLevelAccessServiceTokensListServiceTokensResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ServiceTokenZoneLevelAccessServiceTokensListServiceTokensResponse {
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

export interface ServiceTokenZoneLevelAccessServiceTokensCreateAServiceTokenParams {
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
  export import ServiceTokenZoneLevelAccessServiceTokensCreateAServiceTokenResponse = ServiceTokensAPI.ServiceTokenZoneLevelAccessServiceTokensCreateAServiceTokenResponse;
  export import ServiceTokenZoneLevelAccessServiceTokensListServiceTokensResponse = ServiceTokensAPI.ServiceTokenZoneLevelAccessServiceTokensListServiceTokensResponse;
  export import ServiceTokenUpdateParams = ServiceTokensAPI.ServiceTokenUpdateParams;
  export import ServiceTokenZoneLevelAccessServiceTokensCreateAServiceTokenParams = ServiceTokensAPI.ServiceTokenZoneLevelAccessServiceTokensCreateAServiceTokenParams;
}
