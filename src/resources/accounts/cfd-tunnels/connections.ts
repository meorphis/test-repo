// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ConnectionsAPI from 'cloudflare/resources/accounts/cfd-tunnels/connections';

export class Connections extends APIResource {
  /**
   * Removes a connection (aka Cloudflare Tunnel Connector) from a Cloudflare Tunnel
   * independently of its current state. If no connector id (client_id) is provided
   * all connectors will be removed. We recommend running this command after rotating
   * tokens.
   */
  delete(
    accountIdentifier: string,
    tunnelId: string,
    params: ConnectionDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectionDeleteResponse> {
    const { client_id, ...body } = params;
    return this._client.delete(`/accounts/${accountIdentifier}/cfd_tunnel/${tunnelId}/connections`, {
      query: { client_id },
      body,
      ...options,
    });
  }

  /**
   * Fetches connection details for a Cloudflare Tunnel.
   */
  cloudflareTunnelListCloudflareTunnelConnections(
    accountIdentifier: string,
    tunnelId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectionCloudflareTunnelListCloudflareTunnelConnectionsResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/cfd_tunnel/${tunnelId}/connections`, options);
  }
}

export interface ConnectionDeleteResponse {
  errors?: Array<ConnectionDeleteResponse.Error>;

  messages?: Array<ConnectionDeleteResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ConnectionDeleteResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface ConnectionCloudflareTunnelListCloudflareTunnelConnectionsResponse {
  errors?: Array<ConnectionCloudflareTunnelListCloudflareTunnelConnectionsResponse.Error>;

  messages?: Array<ConnectionCloudflareTunnelListCloudflareTunnelConnectionsResponse.Message>;

  result?: Array<ConnectionCloudflareTunnelListCloudflareTunnelConnectionsResponse.Result>;

  result_info?: ConnectionCloudflareTunnelListCloudflareTunnelConnectionsResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ConnectionCloudflareTunnelListCloudflareTunnelConnectionsResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * A client (typically cloudflared) that maintains connections to a Cloudflare data
   * center.
   */
  export interface Result {
    /**
     * UUID of the Cloudflare Tunnel connection.
     */
    id?: string;

    /**
     * The cloudflared OS architecture used to establish this connection.
     */
    arch?: string;

    /**
     * The version of the remote tunnel configuration. Used internally to sync
     * cloudflared with the Zero Trust dashboard.
     */
    config_version?: number;

    /**
     * The Cloudflare Tunnel connections between your origin and Cloudflare's edge.
     */
    conns?: Array<Result.Conn>;

    /**
     * Features enabled for the Cloudflare Tunnel.
     */
    features?: Array<string>;

    /**
     * Timestamp of when the tunnel connection was started.
     */
    run_at?: string;

    /**
     * The cloudflared version used to establish this connection.
     */
    version?: string;
  }

  export namespace Result {
    export interface Conn {
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

export interface ConnectionDeleteParams {
  /**
   * Query param: UUID of the Cloudflare Tunnel Connector to disconnect.
   */
  client_id?: string;
}

export namespace Connections {
  export import ConnectionDeleteResponse = ConnectionsAPI.ConnectionDeleteResponse;
  export import ConnectionCloudflareTunnelListCloudflareTunnelConnectionsResponse = ConnectionsAPI.ConnectionCloudflareTunnelListCloudflareTunnelConnectionsResponse;
  export import ConnectionDeleteParams = ConnectionsAPI.ConnectionDeleteParams;
}
