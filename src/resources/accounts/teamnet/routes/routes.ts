// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as RoutesAPI from 'cloudflare/resources/accounts/teamnet/routes/routes';
import * as IPsAPI from 'cloudflare/resources/accounts/teamnet/routes/ips';
import * as NetworksAPI from 'cloudflare/resources/accounts/teamnet/routes/networks';
import { Page } from 'cloudflare/pagination';

export class Routes extends APIResource {
  ips: IPsAPI.IPs = new IPsAPI.IPs(this._client);
  networks: NetworksAPI.Networks = new NetworksAPI.Networks(this._client);

  /**
   * Routes a private network through a Cloudflare Tunnel.
   */
  create(
    accountIdentifier: string,
    body: RouteCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RouteCreateResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/teamnet/routes`, { body, ...options });
  }

  /**
   * Updates an existing private network route in an account. The fields that are
   * meant to be updated should be provided in the body of the request.
   */
  update(
    accountIdentifier: string,
    routeId: string,
    body: RouteUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RouteUpdateResponse> {
    return this._client.patch(`/accounts/${accountIdentifier}/teamnet/routes/${routeId}`, {
      body,
      ...options,
    });
  }

  /**
   * Deletes a private network route from an account.
   */
  delete(
    accountIdentifier: string,
    routeId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RouteDeleteResponse> {
    return this._client.delete(`/accounts/${accountIdentifier}/teamnet/routes/${routeId}`, options);
  }

  /**
   * Lists and filters private network routes in an account.
   */
  tunnelRouteListTunnelRoutes(
    accountIdentifier: string,
    query?: RouteTunnelRouteListTunnelRoutesParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    RouteTunnelRouteListTunnelRoutesResponsesPage,
    RouteTunnelRouteListTunnelRoutesResponse
  >;
  tunnelRouteListTunnelRoutes(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    RouteTunnelRouteListTunnelRoutesResponsesPage,
    RouteTunnelRouteListTunnelRoutesResponse
  >;
  tunnelRouteListTunnelRoutes(
    accountIdentifier: string,
    query: RouteTunnelRouteListTunnelRoutesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    RouteTunnelRouteListTunnelRoutesResponsesPage,
    RouteTunnelRouteListTunnelRoutesResponse
  > {
    if (isRequestOptions(query)) {
      return this.tunnelRouteListTunnelRoutes(accountIdentifier, {}, query);
    }
    return this._client.getAPIList(
      `/accounts/${accountIdentifier}/teamnet/routes`,
      RouteTunnelRouteListTunnelRoutesResponsesPage,
      { query, ...options },
    );
  }
}

export class RouteTunnelRouteListTunnelRoutesResponsesPage extends Page<RouteTunnelRouteListTunnelRoutesResponse> {}

export interface RouteCreateResponse {
  errors?: Array<RouteCreateResponse.Error>;

  messages?: Array<RouteCreateResponse.Message>;

  result?: RouteCreateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace RouteCreateResponse {
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
     * UUID of the route.
     */
    id?: string;

    /**
     * Optional remark describing the route.
     */
    comment?: string;

    /**
     * Timestamp of when the route was created.
     */
    created_at?: unknown;

    /**
     * Timestamp of when the route was deleted. If `null`, the route has not been
     * deleted.
     */
    deleted_at?: string | null;

    /**
     * The private IPv4 or IPv6 range connected by the route, in CIDR notation.
     */
    network?: string;

    /**
     * UUID of the Cloudflare Tunnel serving the route.
     */
    tunnel_id?: unknown;

    /**
     * UUID of the Tunnel Virtual Network this route belongs to. If no virtual networks
     * are configured, the route is assigned to the default virtual network of the
     * account.
     */
    virtual_network_id?: unknown;
  }
}

export interface RouteUpdateResponse {
  errors?: Array<RouteUpdateResponse.Error>;

  messages?: Array<RouteUpdateResponse.Message>;

  result?: RouteUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace RouteUpdateResponse {
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
     * UUID of the route.
     */
    id?: string;

    /**
     * Optional remark describing the route.
     */
    comment?: string;

    /**
     * Timestamp of when the route was created.
     */
    created_at?: unknown;

    /**
     * Timestamp of when the route was deleted. If `null`, the route has not been
     * deleted.
     */
    deleted_at?: string | null;

    /**
     * The private IPv4 or IPv6 range connected by the route, in CIDR notation.
     */
    network?: string;

    /**
     * UUID of the Cloudflare Tunnel serving the route.
     */
    tunnel_id?: unknown;

    /**
     * UUID of the Tunnel Virtual Network this route belongs to. If no virtual networks
     * are configured, the route is assigned to the default virtual network of the
     * account.
     */
    virtual_network_id?: unknown;
  }
}

export interface RouteDeleteResponse {
  errors?: Array<RouteDeleteResponse.Error>;

  messages?: Array<RouteDeleteResponse.Message>;

  result?: RouteDeleteResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace RouteDeleteResponse {
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
     * UUID of the route.
     */
    id?: string;

    /**
     * Optional remark describing the route.
     */
    comment?: string;

    /**
     * Timestamp of when the route was created.
     */
    created_at?: unknown;

    /**
     * Timestamp of when the route was deleted. If `null`, the route has not been
     * deleted.
     */
    deleted_at?: string | null;

    /**
     * The private IPv4 or IPv6 range connected by the route, in CIDR notation.
     */
    network?: string;

    /**
     * UUID of the Cloudflare Tunnel serving the route.
     */
    tunnel_id?: unknown;

    /**
     * UUID of the Tunnel Virtual Network this route belongs to. If no virtual networks
     * are configured, the route is assigned to the default virtual network of the
     * account.
     */
    virtual_network_id?: unknown;
  }
}

export interface RouteTunnelRouteListTunnelRoutesResponse {
  /**
   * UUID of the route.
   */
  id?: string;

  /**
   * Optional remark describing the route.
   */
  comment?: string;

  /**
   * Timestamp of when the route was created.
   */
  created_at?: unknown;

  /**
   * Timestamp of when the route was deleted. If `null`, the route has not been
   * deleted.
   */
  deleted_at?: string | null;

  /**
   * The private IPv4 or IPv6 range connected by the route, in CIDR notation.
   */
  network?: string;

  /**
   * The type of tunnel.
   */
  tun_type?: 'cfd_tunnel' | 'warp_connector' | 'ip_sec' | 'gre' | 'cni';

  /**
   * UUID of the Cloudflare Tunnel serving the route.
   */
  tunnel_id?: unknown;

  /**
   * The user-friendly name of the Cloudflare Tunnel serving the route.
   */
  tunnel_name?: unknown;

  /**
   * UUID of the Tunnel Virtual Network this route belongs to. If no virtual networks
   * are configured, the route is assigned to the default virtual network of the
   * account.
   */
  virtual_network_id?: unknown;

  /**
   * A user-friendly name for the virtual network.
   */
  virtual_network_name?: string;
}

export interface RouteCreateParams {
  /**
   * The private IPv4 or IPv6 range connected by the route, in CIDR notation.
   */
  ip_network: string;

  /**
   * Optional remark describing the route.
   */
  comment?: string;

  /**
   * UUID of the Tunnel Virtual Network this route belongs to. If no virtual networks
   * are configured, the route is assigned to the default virtual network of the
   * account.
   */
  virtual_network_id?: unknown;
}

export interface RouteUpdateParams {
  /**
   * Optional remark describing the route.
   */
  comment?: string;

  /**
   * The private IPv4 or IPv6 range connected by the route, in CIDR notation.
   */
  network?: string;

  /**
   * The type of tunnel.
   */
  tun_type?: 'cfd_tunnel' | 'warp_connector' | 'ip_sec' | 'gre' | 'cni';

  /**
   * UUID of the Cloudflare Tunnel serving the route.
   */
  tunnel_id?: unknown;

  /**
   * UUID of the Tunnel Virtual Network this route belongs to. If no virtual networks
   * are configured, the route is assigned to the default virtual network of the
   * account.
   */
  virtual_network_id?: unknown;
}

export interface RouteTunnelRouteListTunnelRoutesParams {
  /**
   * Optional remark describing the route.
   */
  comment?: string;

  /**
   * If provided, include only routes that were created (and not deleted) before this
   * time.
   */
  existed_at?: unknown;

  /**
   * If `true`, only include deleted routes. If `false`, exclude deleted routes. If
   * empty, all routes will be included.
   */
  is_deleted?: unknown;

  /**
   * If set, only list routes that are contained within this IP range.
   */
  network_subset?: unknown;

  /**
   * If set, only list routes that contain this IP range.
   */
  network_superset?: unknown;

  /**
   * Page number of paginated results.
   */
  page?: number;

  /**
   * Number of results to display.
   */
  per_page?: number;

  /**
   * The types of tunnels to filter separated by a comma.
   */
  tun_types?: string;

  /**
   * UUID of the Cloudflare Tunnel serving the route.
   */
  tunnel_id?: unknown;

  /**
   * UUID of the Tunnel Virtual Network this route belongs to. If no virtual networks
   * are configured, the route is assigned to the default virtual network of the
   * account.
   */
  virtual_network_id?: unknown;
}

export namespace Routes {
  export import RouteCreateResponse = RoutesAPI.RouteCreateResponse;
  export import RouteUpdateResponse = RoutesAPI.RouteUpdateResponse;
  export import RouteDeleteResponse = RoutesAPI.RouteDeleteResponse;
  export import RouteTunnelRouteListTunnelRoutesResponse = RoutesAPI.RouteTunnelRouteListTunnelRoutesResponse;
  export import RouteTunnelRouteListTunnelRoutesResponsesPage = RoutesAPI.RouteTunnelRouteListTunnelRoutesResponsesPage;
  export import RouteCreateParams = RoutesAPI.RouteCreateParams;
  export import RouteUpdateParams = RoutesAPI.RouteUpdateParams;
  export import RouteTunnelRouteListTunnelRoutesParams = RoutesAPI.RouteTunnelRouteListTunnelRoutesParams;
  export import IPs = IPsAPI.IPs;
  export import IPRetrieveResponse = IPsAPI.IPRetrieveResponse;
  export import IPRetrieveParams = IPsAPI.IPRetrieveParams;
  export import Networks = NetworksAPI.Networks;
  export import NetworkUpdateResponse = NetworksAPI.NetworkUpdateResponse;
  export import NetworkDeleteResponse = NetworksAPI.NetworkDeleteResponse;
  export import NetworkUpdateParams = NetworksAPI.NetworkUpdateParams;
  export import NetworkDeleteParams = NetworksAPI.NetworkDeleteParams;
}
