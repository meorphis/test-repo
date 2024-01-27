// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as IPsAPI from 'cloudflare/resources/accounts/teamnet/routes/ips';

export class IPs extends APIResource {
  /**
   * Fetches routes that contain the given IP address.
   */
  retrieve(
    accountIdentifier: string,
    ip: string,
    query?: IPRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IPRetrieveResponse>;
  retrieve(
    accountIdentifier: string,
    ip: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IPRetrieveResponse>;
  retrieve(
    accountIdentifier: string,
    ip: string,
    query: IPRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<IPRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(accountIdentifier, ip, {}, query);
    }
    return this._client.get(`/accounts/${accountIdentifier}/teamnet/routes/ip/${ip}`, { query, ...options });
  }
}

export interface IPRetrieveResponse {
  errors?: Array<IPRetrieveResponse.Error>;

  messages?: Array<IPRetrieveResponse.Message>;

  result?: IPRetrieveResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace IPRetrieveResponse {
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
}

export interface IPRetrieveParams {
  /**
   * UUID of the Tunnel Virtual Network this route belongs to. If no virtual networks
   * are configured, the route is assigned to the default virtual network of the
   * account.
   */
  virtual_network_id?: unknown;
}

export namespace IPs {
  export import IPRetrieveResponse = IPsAPI.IPRetrieveResponse;
  export import IPRetrieveParams = IPsAPI.IPRetrieveParams;
}
