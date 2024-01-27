// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as TunnelsAPI from 'cloudflare/resources/accounts/tunnels/tunnels';
import * as ConnectionsAPI from 'cloudflare/resources/accounts/tunnels/connections';
import { Page } from 'cloudflare/pagination';

export class Tunnels extends APIResource {
  connections: ConnectionsAPI.Connections = new ConnectionsAPI.Connections(this._client);

  /**
   * Fetches a single Argo Tunnel.
   */
  retrieve(
    accountIdentifier: string,
    tunnelId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TunnelRetrieveResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/tunnels/${tunnelId}`, options);
  }

  /**
   * Deletes an Argo Tunnel from an account.
   */
  delete(
    accountIdentifier: string,
    tunnelId: string,
    body: TunnelDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TunnelDeleteResponse> {
    return this._client.delete(`/accounts/${accountIdentifier}/tunnels/${tunnelId}`, { body, ...options });
  }

  /**
   * Creates a new Argo Tunnel in an account.
   */
  argoTunnelCreateAnArgoTunnel(
    accountIdentifier: string,
    body: TunnelArgoTunnelCreateAnArgoTunnelParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TunnelArgoTunnelCreateAnArgoTunnelResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/tunnels`, { body, ...options });
  }

  /**
   * Lists and filters all types of Tunnels in an account.
   */
  argoTunnelListArgoTunnels(
    accountIdentifier: string,
    query?: TunnelArgoTunnelListArgoTunnelsParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<TunnelArgoTunnelListArgoTunnelsResponsesPage, TunnelArgoTunnelListArgoTunnelsResponse>;
  argoTunnelListArgoTunnels(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<TunnelArgoTunnelListArgoTunnelsResponsesPage, TunnelArgoTunnelListArgoTunnelsResponse>;
  argoTunnelListArgoTunnels(
    accountIdentifier: string,
    query: TunnelArgoTunnelListArgoTunnelsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<TunnelArgoTunnelListArgoTunnelsResponsesPage, TunnelArgoTunnelListArgoTunnelsResponse> {
    if (isRequestOptions(query)) {
      return this.argoTunnelListArgoTunnels(accountIdentifier, {}, query);
    }
    return this._client.getAPIList(
      `/accounts/${accountIdentifier}/tunnels`,
      TunnelArgoTunnelListArgoTunnelsResponsesPage,
      { query, ...options },
    );
  }
}

export class TunnelArgoTunnelListArgoTunnelsResponsesPage extends Page<TunnelArgoTunnelListArgoTunnelsResponse> {}

export interface TunnelRetrieveResponse {
  errors?: Array<TunnelRetrieveResponse.Error>;

  messages?: Array<TunnelRetrieveResponse.Message>;

  result?: TunnelRetrieveResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace TunnelRetrieveResponse {
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
     * UUID of the tunnel.
     */
    id: string;

    /**
     * The tunnel connections between your origin and Cloudflare's edge.
     */
    connections: Array<Result.Connection>;

    /**
     * Timestamp of when the tunnel was created.
     */
    created_at: string;

    /**
     * A user-friendly name for the tunnel.
     */
    name: string;

    /**
     * Timestamp of when the tunnel was deleted. If `null`, the tunnel has not been
     * deleted.
     */
    deleted_at?: string | null;
  }

  export namespace Result {
    export interface Connection {
      /**
       * The Cloudflare data center used for this connection.
       */
      colo_name?: string;

      /**
       * Cloudflare continues to track connections for several minutes after they
       * disconnect. This is an optimization to improve latency and reliability of
       * reconnecting. If `true`, the connection has disconnected but is still being
       * tracked. If `false`, the connection is actively serving traffic.
       */
      is_pending_reconnect?: boolean;

      /**
       * UUID of the Cloudflare Tunnel connection.
       */
      uuid?: string;
    }
  }
}

export interface TunnelDeleteResponse {
  errors?: Array<TunnelDeleteResponse.Error>;

  messages?: Array<TunnelDeleteResponse.Message>;

  result?: TunnelDeleteResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace TunnelDeleteResponse {
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
     * UUID of the tunnel.
     */
    id: string;

    /**
     * The tunnel connections between your origin and Cloudflare's edge.
     */
    connections: Array<Result.Connection>;

    /**
     * Timestamp of when the tunnel was created.
     */
    created_at: string;

    /**
     * A user-friendly name for the tunnel.
     */
    name: string;

    /**
     * Timestamp of when the tunnel was deleted. If `null`, the tunnel has not been
     * deleted.
     */
    deleted_at?: string | null;
  }

  export namespace Result {
    export interface Connection {
      /**
       * The Cloudflare data center used for this connection.
       */
      colo_name?: string;

      /**
       * Cloudflare continues to track connections for several minutes after they
       * disconnect. This is an optimization to improve latency and reliability of
       * reconnecting. If `true`, the connection has disconnected but is still being
       * tracked. If `false`, the connection is actively serving traffic.
       */
      is_pending_reconnect?: boolean;

      /**
       * UUID of the Cloudflare Tunnel connection.
       */
      uuid?: string;
    }
  }
}

export interface TunnelArgoTunnelCreateAnArgoTunnelResponse {
  errors?: Array<TunnelArgoTunnelCreateAnArgoTunnelResponse.Error>;

  messages?: Array<TunnelArgoTunnelCreateAnArgoTunnelResponse.Message>;

  result?: TunnelArgoTunnelCreateAnArgoTunnelResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace TunnelArgoTunnelCreateAnArgoTunnelResponse {
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
     * UUID of the tunnel.
     */
    id: string;

    /**
     * The tunnel connections between your origin and Cloudflare's edge.
     */
    connections: Array<Result.Connection>;

    /**
     * Timestamp of when the tunnel was created.
     */
    created_at: string;

    /**
     * A user-friendly name for the tunnel.
     */
    name: string;

    /**
     * Timestamp of when the tunnel was deleted. If `null`, the tunnel has not been
     * deleted.
     */
    deleted_at?: string | null;
  }

  export namespace Result {
    export interface Connection {
      /**
       * The Cloudflare data center used for this connection.
       */
      colo_name?: string;

      /**
       * Cloudflare continues to track connections for several minutes after they
       * disconnect. This is an optimization to improve latency and reliability of
       * reconnecting. If `true`, the connection has disconnected but is still being
       * tracked. If `false`, the connection is actively serving traffic.
       */
      is_pending_reconnect?: boolean;

      /**
       * UUID of the Cloudflare Tunnel connection.
       */
      uuid?: string;
    }
  }
}

/**
 * A Cloudflare Tunnel that connects your origin to Cloudflare's edge.
 */
export type TunnelArgoTunnelListArgoTunnelsResponse =
  | TunnelArgoTunnelListArgoTunnelsResponse.Xk6JhoizCfdTunnel
  | TunnelArgoTunnelListArgoTunnelsResponse.Xk6JhoizWarpConnectorTunnel;

export namespace TunnelArgoTunnelListArgoTunnelsResponse {
  /**
   * A Cloudflare Tunnel that connects your origin to Cloudflare's edge.
   */
  export interface Xk6JhoizCfdTunnel {
    /**
     * UUID of the tunnel.
     */
    id?: string;

    /**
     * Cloudflare account ID
     */
    account_tag?: string;

    /**
     * The Cloudflare Tunnel connections between your origin and Cloudflare's edge.
     */
    connections?: Array<Xk6JhoizCfdTunnel.Connection>;

    /**
     * Timestamp of when the tunnel established at least one connection to Cloudflare's
     * edge. If `null`, the tunnel is inactive.
     */
    conns_active_at?: string | null;

    /**
     * Timestamp of when the tunnel became inactive (no connections to Cloudflare's
     * edge). If `null`, the tunnel is active.
     */
    conns_inactive_at?: string | null;

    /**
     * Timestamp of when the tunnel was created.
     */
    created_at?: string;

    /**
     * Timestamp of when the tunnel was deleted. If `null`, the tunnel has not been
     * deleted.
     */
    deleted_at?: string | null;

    /**
     * Metadata associated with the tunnel.
     */
    metadata?: unknown;

    /**
     * A user-friendly name for the tunnel.
     */
    name?: string;

    /**
     * If `true`, the tunnel can be configured remotely from the Zero Trust dashboard.
     * If `false`, the tunnel must be configured locally on the origin machine.
     */
    remote_config?: boolean;

    /**
     * The status of the tunnel. Valid values are `inactive` (tunnel has never been
     * run), `degraded` (tunnel is active and able to serve traffic but in an unhealthy
     * state), `healthy` (tunnel is active and able to serve traffic), or `down`
     * (tunnel can not serve traffic as it has no connections to the Cloudflare Edge).
     */
    status?: string;

    /**
     * The type of tunnel.
     */
    tun_type?: 'cfd_tunnel' | 'warp_connector' | 'ip_sec' | 'gre' | 'cni';
  }

  export namespace Xk6JhoizCfdTunnel {
    export interface Connection {
      /**
       * UUID of the Cloudflare Tunnel connection.
       */
      id?: string;

      /**
       * UUID of the cloudflared instance.
       */
      client_id?: unknown;

      /**
       * The cloudflared version used to establish this connection.
       */
      client_version?: string;

      /**
       * The Cloudflare data center used for this connection.
       */
      colo_name?: string;

      /**
       * Cloudflare continues to track connections for several minutes after they
       * disconnect. This is an optimization to improve latency and reliability of
       * reconnecting. If `true`, the connection has disconnected but is still being
       * tracked. If `false`, the connection is actively serving traffic.
       */
      is_pending_reconnect?: boolean;

      /**
       * Timestamp of when the connection was established.
       */
      opened_at?: string;

      /**
       * The public IP address of the host running cloudflared.
       */
      origin_ip?: string;

      /**
       * UUID of the Cloudflare Tunnel connection.
       */
      uuid?: string;
    }
  }

  /**
   * A Warp Connector Tunnel that connects your origin to Cloudflare's edge.
   */
  export interface Xk6JhoizWarpConnectorTunnel {
    /**
     * UUID of the tunnel.
     */
    id?: string;

    /**
     * Cloudflare account ID
     */
    account_tag?: string;

    /**
     * The Cloudflare Tunnel connections between your origin and Cloudflare's edge.
     */
    connections?: Array<Xk6JhoizWarpConnectorTunnel.Connection>;

    /**
     * Timestamp of when the tunnel established at least one connection to Cloudflare's
     * edge. If `null`, the tunnel is inactive.
     */
    conns_active_at?: string | null;

    /**
     * Timestamp of when the tunnel became inactive (no connections to Cloudflare's
     * edge). If `null`, the tunnel is active.
     */
    conns_inactive_at?: string | null;

    /**
     * Timestamp of when the tunnel was created.
     */
    created_at?: string;

    /**
     * Timestamp of when the tunnel was deleted. If `null`, the tunnel has not been
     * deleted.
     */
    deleted_at?: string | null;

    /**
     * Metadata associated with the tunnel.
     */
    metadata?: unknown;

    /**
     * A user-friendly name for the tunnel.
     */
    name?: string;

    /**
     * The status of the tunnel. Valid values are `inactive` (tunnel has never been
     * run), `degraded` (tunnel is active and able to serve traffic but in an unhealthy
     * state), `healthy` (tunnel is active and able to serve traffic), or `down`
     * (tunnel can not serve traffic as it has no connections to the Cloudflare Edge).
     */
    status?: string;

    /**
     * The type of tunnel.
     */
    tun_type?: 'cfd_tunnel' | 'warp_connector' | 'ip_sec' | 'gre' | 'cni';
  }

  export namespace Xk6JhoizWarpConnectorTunnel {
    export interface Connection {
      /**
       * UUID of the Cloudflare Tunnel connection.
       */
      id?: string;

      /**
       * UUID of the cloudflared instance.
       */
      client_id?: unknown;

      /**
       * The cloudflared version used to establish this connection.
       */
      client_version?: string;

      /**
       * The Cloudflare data center used for this connection.
       */
      colo_name?: string;

      /**
       * Cloudflare continues to track connections for several minutes after they
       * disconnect. This is an optimization to improve latency and reliability of
       * reconnecting. If `true`, the connection has disconnected but is still being
       * tracked. If `false`, the connection is actively serving traffic.
       */
      is_pending_reconnect?: boolean;

      /**
       * Timestamp of when the connection was established.
       */
      opened_at?: string;

      /**
       * The public IP address of the host running cloudflared.
       */
      origin_ip?: string;

      /**
       * UUID of the Cloudflare Tunnel connection.
       */
      uuid?: string;
    }
  }
}

export type TunnelDeleteParams = unknown;

export interface TunnelArgoTunnelCreateAnArgoTunnelParams {
  /**
   * A user-friendly name for the tunnel.
   */
  name: string;

  /**
   * Sets the password required to run the tunnel. Must be at least 32 bytes and
   * encoded as a base64 string.
   */
  tunnel_secret: unknown;
}

export interface TunnelArgoTunnelListArgoTunnelsParams {
  exclude_prefix?: string;

  /**
   * If provided, include only tunnels that were created (and not deleted) before
   * this time.
   */
  existed_at?: string;

  include_prefix?: string;

  /**
   * If `true`, only include deleted tunnels. If `false`, exclude deleted tunnels. If
   * empty, all tunnels will be included.
   */
  is_deleted?: boolean;

  /**
   * A user-friendly name for the tunnel.
   */
  name?: string;

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

  was_active_at?: string;

  was_inactive_at?: string;
}

export namespace Tunnels {
  export import TunnelRetrieveResponse = TunnelsAPI.TunnelRetrieveResponse;
  export import TunnelDeleteResponse = TunnelsAPI.TunnelDeleteResponse;
  export import TunnelArgoTunnelCreateAnArgoTunnelResponse = TunnelsAPI.TunnelArgoTunnelCreateAnArgoTunnelResponse;
  export import TunnelArgoTunnelListArgoTunnelsResponse = TunnelsAPI.TunnelArgoTunnelListArgoTunnelsResponse;
  export import TunnelArgoTunnelListArgoTunnelsResponsesPage = TunnelsAPI.TunnelArgoTunnelListArgoTunnelsResponsesPage;
  export import TunnelDeleteParams = TunnelsAPI.TunnelDeleteParams;
  export import TunnelArgoTunnelCreateAnArgoTunnelParams = TunnelsAPI.TunnelArgoTunnelCreateAnArgoTunnelParams;
  export import TunnelArgoTunnelListArgoTunnelsParams = TunnelsAPI.TunnelArgoTunnelListArgoTunnelsParams;
  export import Connections = ConnectionsAPI.Connections;
  export import ConnectionDeleteResponse = ConnectionsAPI.ConnectionDeleteResponse;
  export import ConnectionDeleteParams = ConnectionsAPI.ConnectionDeleteParams;
}
