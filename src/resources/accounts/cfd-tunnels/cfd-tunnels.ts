// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as CfdTunnelsAPI from 'cloudflare/resources/accounts/cfd-tunnels/cfd-tunnels';
import * as ConfigurationsAPI from 'cloudflare/resources/accounts/cfd-tunnels/configurations';
import * as ConnectionsAPI from 'cloudflare/resources/accounts/cfd-tunnels/connections';
import * as ConnectorsAPI from 'cloudflare/resources/accounts/cfd-tunnels/connectors';
import * as ManagementAPI from 'cloudflare/resources/accounts/cfd-tunnels/management';
import * as TokensAPI from 'cloudflare/resources/accounts/cfd-tunnels/tokens';
import { Page } from 'cloudflare/pagination';

export class CfdTunnels extends APIResource {
  configurations: ConfigurationsAPI.Configurations = new ConfigurationsAPI.Configurations(this._client);
  connections: ConnectionsAPI.Connections = new ConnectionsAPI.Connections(this._client);
  connectors: ConnectorsAPI.Connectors = new ConnectorsAPI.Connectors(this._client);
  management: ManagementAPI.Management = new ManagementAPI.Management(this._client);
  tokens: TokensAPI.Tokens = new TokensAPI.Tokens(this._client);

  /**
   * Fetches a single Cloudflare Tunnel.
   */
  retrieve(
    accountIdentifier: string,
    tunnelId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CfdTunnelRetrieveResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/cfd_tunnel/${tunnelId}`, options);
  }

  /**
   * Updates an existing Cloudflare Tunnel.
   */
  update(
    accountIdentifier: string,
    tunnelId: string,
    body: CfdTunnelUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CfdTunnelUpdateResponse> {
    return this._client.patch(`/accounts/${accountIdentifier}/cfd_tunnel/${tunnelId}`, { body, ...options });
  }

  /**
   * Deletes a Cloudflare Tunnel from an account.
   */
  delete(
    accountIdentifier: string,
    tunnelId: string,
    body: CfdTunnelDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CfdTunnelDeleteResponse> {
    return this._client.delete(`/accounts/${accountIdentifier}/cfd_tunnel/${tunnelId}`, { body, ...options });
  }

  /**
   * Creates a new Cloudflare Tunnel in an account.
   */
  cloudflareTunnelCreateACloudflareTunnel(
    accountIdentifier: string,
    body: CfdTunnelCloudflareTunnelCreateACloudflareTunnelParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CfdTunnelCloudflareTunnelCreateACloudflareTunnelResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/cfd_tunnel`, { body, ...options });
  }

  /**
   * Lists and filters Cloudflare Tunnels in an account.
   */
  cloudflareTunnelListCloudflareTunnels(
    accountIdentifier: string,
    query?: CfdTunnelCloudflareTunnelListCloudflareTunnelsParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    CfdTunnelCloudflareTunnelListCloudflareTunnelsResponsesPage,
    CfdTunnelCloudflareTunnelListCloudflareTunnelsResponse
  >;
  cloudflareTunnelListCloudflareTunnels(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    CfdTunnelCloudflareTunnelListCloudflareTunnelsResponsesPage,
    CfdTunnelCloudflareTunnelListCloudflareTunnelsResponse
  >;
  cloudflareTunnelListCloudflareTunnels(
    accountIdentifier: string,
    query: CfdTunnelCloudflareTunnelListCloudflareTunnelsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    CfdTunnelCloudflareTunnelListCloudflareTunnelsResponsesPage,
    CfdTunnelCloudflareTunnelListCloudflareTunnelsResponse
  > {
    if (isRequestOptions(query)) {
      return this.cloudflareTunnelListCloudflareTunnels(accountIdentifier, {}, query);
    }
    return this._client.getAPIList(
      `/accounts/${accountIdentifier}/cfd_tunnel`,
      CfdTunnelCloudflareTunnelListCloudflareTunnelsResponsesPage,
      { query, ...options },
    );
  }
}

export class CfdTunnelCloudflareTunnelListCloudflareTunnelsResponsesPage extends Page<CfdTunnelCloudflareTunnelListCloudflareTunnelsResponse> {}

export interface CfdTunnelRetrieveResponse {
  errors?: Array<CfdTunnelRetrieveResponse.Error>;

  messages?: Array<CfdTunnelRetrieveResponse.Message>;

  /**
   * A Cloudflare Tunnel that connects your origin to Cloudflare's edge.
   */
  result?:
    | CfdTunnelRetrieveResponse.Xk6JhoizCfdTunnel
    | CfdTunnelRetrieveResponse.Xk6JhoizWarpConnectorTunnel;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace CfdTunnelRetrieveResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

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

export interface CfdTunnelUpdateResponse {
  errors?: Array<CfdTunnelUpdateResponse.Error>;

  messages?: Array<CfdTunnelUpdateResponse.Message>;

  /**
   * A Cloudflare Tunnel that connects your origin to Cloudflare's edge.
   */
  result?: CfdTunnelUpdateResponse.Xk6JhoizCfdTunnel | CfdTunnelUpdateResponse.Xk6JhoizWarpConnectorTunnel;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace CfdTunnelUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

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

export interface CfdTunnelDeleteResponse {
  errors?: Array<CfdTunnelDeleteResponse.Error>;

  messages?: Array<CfdTunnelDeleteResponse.Message>;

  /**
   * A Cloudflare Tunnel that connects your origin to Cloudflare's edge.
   */
  result?: CfdTunnelDeleteResponse.Xk6JhoizCfdTunnel | CfdTunnelDeleteResponse.Xk6JhoizWarpConnectorTunnel;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace CfdTunnelDeleteResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

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

export interface CfdTunnelCloudflareTunnelCreateACloudflareTunnelResponse {
  errors?: Array<CfdTunnelCloudflareTunnelCreateACloudflareTunnelResponse.Error>;

  messages?: Array<CfdTunnelCloudflareTunnelCreateACloudflareTunnelResponse.Message>;

  /**
   * A Cloudflare Tunnel that connects your origin to Cloudflare's edge.
   */
  result?:
    | CfdTunnelCloudflareTunnelCreateACloudflareTunnelResponse.Xk6JhoizCfdTunnel
    | CfdTunnelCloudflareTunnelCreateACloudflareTunnelResponse.Xk6JhoizWarpConnectorTunnel;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace CfdTunnelCloudflareTunnelCreateACloudflareTunnelResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

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

/**
 * A Cloudflare Tunnel that connects your origin to Cloudflare's edge.
 */
export type CfdTunnelCloudflareTunnelListCloudflareTunnelsResponse =
  | CfdTunnelCloudflareTunnelListCloudflareTunnelsResponse.Xk6JhoizCfdTunnel
  | CfdTunnelCloudflareTunnelListCloudflareTunnelsResponse.Xk6JhoizWarpConnectorTunnel;

export namespace CfdTunnelCloudflareTunnelListCloudflareTunnelsResponse {
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

export interface CfdTunnelUpdateParams {
  /**
   * A user-friendly name for the tunnel.
   */
  name?: string;

  /**
   * Sets the password required to run a locally-managed tunnel. Must be at least 32
   * bytes and encoded as a base64 string.
   */
  tunnel_secret?: string;
}

export type CfdTunnelDeleteParams = unknown;

export interface CfdTunnelCloudflareTunnelCreateACloudflareTunnelParams {
  /**
   * A user-friendly name for the tunnel.
   */
  name: string;

  /**
   * Indicates if this is a locally or remotely configured tunnel. If `local`, manage
   * the tunnel using a YAML file on the origin machine. If `cloudflare`, manage the
   * tunnel on the Zero Trust dashboard or using the
   * [Cloudflare Tunnel configuration](https://api.cloudflare.com/#cloudflare-tunnel-configuration-properties)
   * endpoint.
   */
  config_src?: 'local' | 'cloudflare';

  /**
   * Sets the password required to run a locally-managed tunnel. Must be at least 32
   * bytes and encoded as a base64 string.
   */
  tunnel_secret?: string;
}

export interface CfdTunnelCloudflareTunnelListCloudflareTunnelsParams {
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

  was_active_at?: string;

  was_inactive_at?: string;
}

export namespace CfdTunnels {
  export import CfdTunnelRetrieveResponse = CfdTunnelsAPI.CfdTunnelRetrieveResponse;
  export import CfdTunnelUpdateResponse = CfdTunnelsAPI.CfdTunnelUpdateResponse;
  export import CfdTunnelDeleteResponse = CfdTunnelsAPI.CfdTunnelDeleteResponse;
  export import CfdTunnelCloudflareTunnelCreateACloudflareTunnelResponse = CfdTunnelsAPI.CfdTunnelCloudflareTunnelCreateACloudflareTunnelResponse;
  export import CfdTunnelCloudflareTunnelListCloudflareTunnelsResponse = CfdTunnelsAPI.CfdTunnelCloudflareTunnelListCloudflareTunnelsResponse;
  export import CfdTunnelCloudflareTunnelListCloudflareTunnelsResponsesPage = CfdTunnelsAPI.CfdTunnelCloudflareTunnelListCloudflareTunnelsResponsesPage;
  export import CfdTunnelUpdateParams = CfdTunnelsAPI.CfdTunnelUpdateParams;
  export import CfdTunnelDeleteParams = CfdTunnelsAPI.CfdTunnelDeleteParams;
  export import CfdTunnelCloudflareTunnelCreateACloudflareTunnelParams = CfdTunnelsAPI.CfdTunnelCloudflareTunnelCreateACloudflareTunnelParams;
  export import CfdTunnelCloudflareTunnelListCloudflareTunnelsParams = CfdTunnelsAPI.CfdTunnelCloudflareTunnelListCloudflareTunnelsParams;
  export import Configurations = ConfigurationsAPI.Configurations;
  export import ConfigurationCloudflareTunnelConfigurationGetConfigurationResponse = ConfigurationsAPI.ConfigurationCloudflareTunnelConfigurationGetConfigurationResponse;
  export import ConfigurationCloudflareTunnelConfigurationPutConfigurationResponse = ConfigurationsAPI.ConfigurationCloudflareTunnelConfigurationPutConfigurationResponse;
  export import ConfigurationCloudflareTunnelConfigurationPutConfigurationParams = ConfigurationsAPI.ConfigurationCloudflareTunnelConfigurationPutConfigurationParams;
  export import Connections = ConnectionsAPI.Connections;
  export import ConnectionDeleteResponse = ConnectionsAPI.ConnectionDeleteResponse;
  export import ConnectionCloudflareTunnelListCloudflareTunnelConnectionsResponse = ConnectionsAPI.ConnectionCloudflareTunnelListCloudflareTunnelConnectionsResponse;
  export import ConnectionDeleteParams = ConnectionsAPI.ConnectionDeleteParams;
  export import Connectors = ConnectorsAPI.Connectors;
  export import ConnectorRetrieveResponse = ConnectorsAPI.ConnectorRetrieveResponse;
  export import Management = ManagementAPI.Management;
  export import ManagementListResponse = ManagementAPI.ManagementListResponse;
  export import ManagementListParams = ManagementAPI.ManagementListParams;
  export import Tokens = TokensAPI.Tokens;
  export import TokenCloudflareTunnelGetACloudflareTunnelTokenResponse = TokensAPI.TokenCloudflareTunnelGetACloudflareTunnelTokenResponse;
}
