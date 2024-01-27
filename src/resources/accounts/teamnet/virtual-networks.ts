// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as VirtualNetworksAPI from 'cloudflare/resources/accounts/teamnet/virtual-networks';

export class VirtualNetworks extends APIResource {
  /**
   * Updates an existing virtual network.
   */
  update(
    accountIdentifier: string,
    vnetId: string,
    body: VirtualNetworkUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VirtualNetworkUpdateResponse> {
    return this._client.patch(`/accounts/${accountIdentifier}/teamnet/virtual_networks/${vnetId}`, {
      body,
      ...options,
    });
  }

  /**
   * Deletes an existing virtual network.
   */
  delete(
    accountIdentifier: string,
    vnetId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VirtualNetworkDeleteResponse> {
    return this._client.delete(`/accounts/${accountIdentifier}/teamnet/virtual_networks/${vnetId}`, options);
  }

  /**
   * Adds a new virtual network to an account.
   */
  tunnelVirtualNetworkCreateAVirtualNetwork(
    accountIdentifier: string,
    body: VirtualNetworkTunnelVirtualNetworkCreateAVirtualNetworkParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VirtualNetworkTunnelVirtualNetworkCreateAVirtualNetworkResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/teamnet/virtual_networks`, { body, ...options });
  }

  /**
   * Lists and filters virtual networks in an account.
   */
  tunnelVirtualNetworkListVirtualNetworks(
    accountIdentifier: string,
    query?: VirtualNetworkTunnelVirtualNetworkListVirtualNetworksParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VirtualNetworkTunnelVirtualNetworkListVirtualNetworksResponse>;
  tunnelVirtualNetworkListVirtualNetworks(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VirtualNetworkTunnelVirtualNetworkListVirtualNetworksResponse>;
  tunnelVirtualNetworkListVirtualNetworks(
    accountIdentifier: string,
    query: VirtualNetworkTunnelVirtualNetworkListVirtualNetworksParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<VirtualNetworkTunnelVirtualNetworkListVirtualNetworksResponse> {
    if (isRequestOptions(query)) {
      return this.tunnelVirtualNetworkListVirtualNetworks(accountIdentifier, {}, query);
    }
    return this._client.get(`/accounts/${accountIdentifier}/teamnet/virtual_networks`, { query, ...options });
  }
}

export interface VirtualNetworkUpdateResponse {
  errors?: Array<VirtualNetworkUpdateResponse.Error>;

  messages?: Array<VirtualNetworkUpdateResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace VirtualNetworkUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface VirtualNetworkDeleteResponse {
  errors?: Array<VirtualNetworkDeleteResponse.Error>;

  messages?: Array<VirtualNetworkDeleteResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace VirtualNetworkDeleteResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface VirtualNetworkTunnelVirtualNetworkCreateAVirtualNetworkResponse {
  errors?: Array<VirtualNetworkTunnelVirtualNetworkCreateAVirtualNetworkResponse.Error>;

  messages?: Array<VirtualNetworkTunnelVirtualNetworkCreateAVirtualNetworkResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace VirtualNetworkTunnelVirtualNetworkCreateAVirtualNetworkResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface VirtualNetworkTunnelVirtualNetworkListVirtualNetworksResponse {
  errors?: Array<VirtualNetworkTunnelVirtualNetworkListVirtualNetworksResponse.Error>;

  messages?: Array<VirtualNetworkTunnelVirtualNetworkListVirtualNetworksResponse.Message>;

  result?: Array<VirtualNetworkTunnelVirtualNetworkListVirtualNetworksResponse.Result>;

  result_info?: VirtualNetworkTunnelVirtualNetworkListVirtualNetworksResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace VirtualNetworkTunnelVirtualNetworkListVirtualNetworksResponse {
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
     * UUID of the virtual network.
     */
    id: string;

    /**
     * Optional remark describing the virtual network.
     */
    comment: string;

    /**
     * Timestamp of when the virtual network was created.
     */
    created_at: unknown;

    /**
     * If `true`, this virtual network is the default for the account.
     */
    is_default_network: boolean;

    /**
     * A user-friendly name for the virtual network.
     */
    name: string;

    /**
     * Timestamp of when the virtual network was deleted. If `null`, the virtual
     * network has not been deleted.
     */
    deleted_at?: unknown;
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

export interface VirtualNetworkUpdateParams {
  /**
   * Optional remark describing the virtual network.
   */
  comment?: string;

  /**
   * If `true`, this virtual network is the default for the account.
   */
  is_default_network?: boolean;

  /**
   * A user-friendly name for the virtual network.
   */
  name?: string;
}

export interface VirtualNetworkTunnelVirtualNetworkCreateAVirtualNetworkParams {
  /**
   * A user-friendly name for the virtual network.
   */
  name: string;

  /**
   * Optional remark describing the virtual network.
   */
  comment?: string;

  /**
   * If `true`, this virtual network is the default for the account.
   */
  is_default?: boolean;
}

export interface VirtualNetworkTunnelVirtualNetworkListVirtualNetworksParams {
  /**
   * If `true`, only include the default virtual network. If `false`, exclude the
   * default virtual network. If empty, all virtual networks will be included.
   */
  is_default?: unknown;

  /**
   * If `true`, only include deleted virtual networks. If `false`, exclude deleted
   * virtual networks. If empty, all virtual networks will be included.
   */
  is_deleted?: unknown;

  /**
   * A user-friendly name for the virtual network.
   */
  name?: string;

  /**
   * A user-friendly name for the virtual network.
   */
  vnet_name?: string;
}

export namespace VirtualNetworks {
  export import VirtualNetworkUpdateResponse = VirtualNetworksAPI.VirtualNetworkUpdateResponse;
  export import VirtualNetworkDeleteResponse = VirtualNetworksAPI.VirtualNetworkDeleteResponse;
  export import VirtualNetworkTunnelVirtualNetworkCreateAVirtualNetworkResponse = VirtualNetworksAPI.VirtualNetworkTunnelVirtualNetworkCreateAVirtualNetworkResponse;
  export import VirtualNetworkTunnelVirtualNetworkListVirtualNetworksResponse = VirtualNetworksAPI.VirtualNetworkTunnelVirtualNetworkListVirtualNetworksResponse;
  export import VirtualNetworkUpdateParams = VirtualNetworksAPI.VirtualNetworkUpdateParams;
  export import VirtualNetworkTunnelVirtualNetworkCreateAVirtualNetworkParams = VirtualNetworksAPI.VirtualNetworkTunnelVirtualNetworkCreateAVirtualNetworkParams;
  export import VirtualNetworkTunnelVirtualNetworkListVirtualNetworksParams = VirtualNetworksAPI.VirtualNetworkTunnelVirtualNetworkListVirtualNetworksParams;
}
