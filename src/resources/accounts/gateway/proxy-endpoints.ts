// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ProxyEndpointsAPI from 'cloudflare/resources/accounts/gateway/proxy-endpoints';

export class ProxyEndpoints extends APIResource {
  /**
   * Fetches all Zero Trust Gateway proxy endpoints for an account.
   */
  retrieve(
    identifier: unknown,
    uuid: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProxyEndpointRetrieveResponse> {
    return this._client.get(`/accounts/${identifier}/gateway/proxy_endpoints/${uuid}`, options);
  }

  /**
   * Updates a configured Zero Trust Gateway proxy endpoint.
   */
  update(
    identifier: unknown,
    uuid: unknown,
    body: ProxyEndpointUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProxyEndpointUpdateResponse> {
    return this._client.patch(`/accounts/${identifier}/gateway/proxy_endpoints/${uuid}`, {
      body,
      ...options,
    });
  }

  /**
   * Deletes a configured Zero Trust Gateway proxy endpoint.
   */
  delete(
    identifier: unknown,
    uuid: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProxyEndpointDeleteResponse> {
    return this._client.delete(`/accounts/${identifier}/gateway/proxy_endpoints/${uuid}`, options);
  }

  /**
   * Creates a new Zero Trust Gateway proxy endpoint.
   */
  zeroTrustGatewayProxyEndpointsCreateProxyEndpoint(
    identifier: unknown,
    body: ProxyEndpointZeroTrustGatewayProxyEndpointsCreateProxyEndpointParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProxyEndpointZeroTrustGatewayProxyEndpointsCreateProxyEndpointResponse> {
    return this._client.post(`/accounts/${identifier}/gateway/proxy_endpoints`, { body, ...options });
  }

  /**
   * Fetches a single Zero Trust Gateway proxy endpoint.
   */
  zeroTrustGatewayProxyEndpointsListProxyEndpoints(
    identifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProxyEndpointZeroTrustGatewayProxyEndpointsListProxyEndpointsResponse> {
    return this._client.get(`/accounts/${identifier}/gateway/proxy_endpoints`, options);
  }
}

export interface ProxyEndpointRetrieveResponse {
  errors?: Array<ProxyEndpointRetrieveResponse.Error>;

  messages?: Array<ProxyEndpointRetrieveResponse.Message>;

  result?: ProxyEndpointRetrieveResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ProxyEndpointRetrieveResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    id?: unknown;

    created_at?: string;

    /**
     * A list of CIDRs to restrict ingress connections.
     */
    ips?: Array<string>;

    /**
     * The name of the proxy endpoint.
     */
    name?: string;

    /**
     * The subdomain to be used as the destination in the proxy client.
     */
    subdomain?: string;

    updated_at?: string;
  }
}

export interface ProxyEndpointUpdateResponse {
  errors?: Array<ProxyEndpointUpdateResponse.Error>;

  messages?: Array<ProxyEndpointUpdateResponse.Message>;

  result?: ProxyEndpointUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ProxyEndpointUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    id?: unknown;

    created_at?: string;

    /**
     * A list of CIDRs to restrict ingress connections.
     */
    ips?: Array<string>;

    /**
     * The name of the proxy endpoint.
     */
    name?: string;

    /**
     * The subdomain to be used as the destination in the proxy client.
     */
    subdomain?: string;

    updated_at?: string;
  }
}

export interface ProxyEndpointDeleteResponse {
  errors?: Array<ProxyEndpointDeleteResponse.Error>;

  messages?: Array<ProxyEndpointDeleteResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ProxyEndpointDeleteResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface ProxyEndpointZeroTrustGatewayProxyEndpointsCreateProxyEndpointResponse {
  errors?: Array<ProxyEndpointZeroTrustGatewayProxyEndpointsCreateProxyEndpointResponse.Error>;

  messages?: Array<ProxyEndpointZeroTrustGatewayProxyEndpointsCreateProxyEndpointResponse.Message>;

  result?: ProxyEndpointZeroTrustGatewayProxyEndpointsCreateProxyEndpointResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ProxyEndpointZeroTrustGatewayProxyEndpointsCreateProxyEndpointResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    id?: unknown;

    created_at?: string;

    /**
     * A list of CIDRs to restrict ingress connections.
     */
    ips?: Array<string>;

    /**
     * The name of the proxy endpoint.
     */
    name?: string;

    /**
     * The subdomain to be used as the destination in the proxy client.
     */
    subdomain?: string;

    updated_at?: string;
  }
}

export interface ProxyEndpointZeroTrustGatewayProxyEndpointsListProxyEndpointsResponse {
  errors?: Array<ProxyEndpointZeroTrustGatewayProxyEndpointsListProxyEndpointsResponse.Error>;

  messages?: Array<ProxyEndpointZeroTrustGatewayProxyEndpointsListProxyEndpointsResponse.Message>;

  result?: Array<ProxyEndpointZeroTrustGatewayProxyEndpointsListProxyEndpointsResponse.Result>;

  result_info?: ProxyEndpointZeroTrustGatewayProxyEndpointsListProxyEndpointsResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ProxyEndpointZeroTrustGatewayProxyEndpointsListProxyEndpointsResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    id?: unknown;

    created_at?: string;

    /**
     * A list of CIDRs to restrict ingress connections.
     */
    ips?: Array<string>;

    /**
     * The name of the proxy endpoint.
     */
    name?: string;

    /**
     * The subdomain to be used as the destination in the proxy client.
     */
    subdomain?: string;

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

export interface ProxyEndpointUpdateParams {
  /**
   * A list of CIDRs to restrict ingress connections.
   */
  ips?: Array<string>;

  /**
   * The name of the proxy endpoint.
   */
  name?: string;

  /**
   * The subdomain to be used as the destination in the proxy client.
   */
  subdomain?: string;
}

export interface ProxyEndpointZeroTrustGatewayProxyEndpointsCreateProxyEndpointParams {
  /**
   * A list of CIDRs to restrict ingress connections.
   */
  ips: Array<string>;

  /**
   * The name of the proxy endpoint.
   */
  name: string;

  /**
   * The subdomain to be used as the destination in the proxy client.
   */
  subdomain?: string;
}

export namespace ProxyEndpoints {
  export import ProxyEndpointRetrieveResponse = ProxyEndpointsAPI.ProxyEndpointRetrieveResponse;
  export import ProxyEndpointUpdateResponse = ProxyEndpointsAPI.ProxyEndpointUpdateResponse;
  export import ProxyEndpointDeleteResponse = ProxyEndpointsAPI.ProxyEndpointDeleteResponse;
  export import ProxyEndpointZeroTrustGatewayProxyEndpointsCreateProxyEndpointResponse = ProxyEndpointsAPI.ProxyEndpointZeroTrustGatewayProxyEndpointsCreateProxyEndpointResponse;
  export import ProxyEndpointZeroTrustGatewayProxyEndpointsListProxyEndpointsResponse = ProxyEndpointsAPI.ProxyEndpointZeroTrustGatewayProxyEndpointsListProxyEndpointsResponse;
  export import ProxyEndpointUpdateParams = ProxyEndpointsAPI.ProxyEndpointUpdateParams;
  export import ProxyEndpointZeroTrustGatewayProxyEndpointsCreateProxyEndpointParams = ProxyEndpointsAPI.ProxyEndpointZeroTrustGatewayProxyEndpointsCreateProxyEndpointParams;
}
