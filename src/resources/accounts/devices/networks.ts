// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as NetworksAPI from 'cloudflare/resources/accounts/devices/networks';

export class Networks extends APIResource {
  /**
   * Fetches details for a single managed network.
   */
  retrieve(
    identifier: unknown,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NetworkRetrieveResponse> {
    return this._client.get(`/accounts/${identifier}/devices/networks/${uuid}`, options);
  }

  /**
   * Updates a configured device managed network.
   */
  update(
    identifier: unknown,
    uuid: string,
    body: NetworkUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NetworkUpdateResponse> {
    return this._client.put(`/accounts/${identifier}/devices/networks/${uuid}`, { body, ...options });
  }

  /**
   * Deletes a device managed network and fetches a list of the remaining device
   * managed networks for an account.
   */
  delete(
    identifier: unknown,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NetworkDeleteResponse> {
    return this._client.delete(`/accounts/${identifier}/devices/networks/${uuid}`, options);
  }

  /**
   * Creates a new device managed network.
   */
  deviceManagedNetworksCreateDeviceManagedNetwork(
    identifier: unknown,
    body: NetworkDeviceManagedNetworksCreateDeviceManagedNetworkParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NetworkDeviceManagedNetworksCreateDeviceManagedNetworkResponse> {
    return this._client.post(`/accounts/${identifier}/devices/networks`, { body, ...options });
  }

  /**
   * Fetches a list of managed networks for an account.
   */
  deviceManagedNetworksListDeviceManagedNetworks(
    identifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NetworkDeviceManagedNetworksListDeviceManagedNetworksResponse> {
    return this._client.get(`/accounts/${identifier}/devices/networks`, options);
  }
}

export interface NetworkRetrieveResponse {
  errors?: Array<NetworkRetrieveResponse.Error>;

  messages?: Array<NetworkRetrieveResponse.Message>;

  result?: NetworkRetrieveResponse.Result;

  /**
   * Whether the API call was successful.
   */
  success?: true;
}

export namespace NetworkRetrieveResponse {
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
     * The configuration object containing information for the WARP client to detect
     * the managed network.
     */
    config?: Result.Config;

    /**
     * The name of the device managed network. This name must be unique.
     */
    name?: string;

    /**
     * API UUID.
     */
    network_id?: string;

    /**
     * The type of device managed network.
     */
    type?: 'tls';
  }

  export namespace Result {
    /**
     * The configuration object containing information for the WARP client to detect
     * the managed network.
     */
    export interface Config {
      /**
       * A network address of the form "host:port" that the WARP client will use to
       * detect the presence of a TLS host.
       */
      tls_sockaddr: string;

      /**
       * The SHA-256 hash of the TLS certificate presented by the host found at
       * tls_sockaddr. If absent, regular certificate verification (trusted roots, valid
       * timestamp, etc) will be used to validate the certificate.
       */
      sha256?: string;
    }
  }
}

export interface NetworkUpdateResponse {
  errors?: Array<NetworkUpdateResponse.Error>;

  messages?: Array<NetworkUpdateResponse.Message>;

  result?: NetworkUpdateResponse.Result;

  /**
   * Whether the API call was successful.
   */
  success?: true;
}

export namespace NetworkUpdateResponse {
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
     * The configuration object containing information for the WARP client to detect
     * the managed network.
     */
    config?: Result.Config;

    /**
     * The name of the device managed network. This name must be unique.
     */
    name?: string;

    /**
     * API UUID.
     */
    network_id?: string;

    /**
     * The type of device managed network.
     */
    type?: 'tls';
  }

  export namespace Result {
    /**
     * The configuration object containing information for the WARP client to detect
     * the managed network.
     */
    export interface Config {
      /**
       * A network address of the form "host:port" that the WARP client will use to
       * detect the presence of a TLS host.
       */
      tls_sockaddr: string;

      /**
       * The SHA-256 hash of the TLS certificate presented by the host found at
       * tls_sockaddr. If absent, regular certificate verification (trusted roots, valid
       * timestamp, etc) will be used to validate the certificate.
       */
      sha256?: string;
    }
  }
}

export interface NetworkDeleteResponse {
  errors?: Array<NetworkDeleteResponse.Error>;

  messages?: Array<NetworkDeleteResponse.Message>;

  result?: Array<NetworkDeleteResponse.Result>;

  result_info?: NetworkDeleteResponse.ResultInfo;

  /**
   * Whether the API call was successful.
   */
  success?: true;
}

export namespace NetworkDeleteResponse {
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
     * The configuration object containing information for the WARP client to detect
     * the managed network.
     */
    config?: Result.Config;

    /**
     * The name of the device managed network. This name must be unique.
     */
    name?: string;

    /**
     * API UUID.
     */
    network_id?: string;

    /**
     * The type of device managed network.
     */
    type?: 'tls';
  }

  export namespace Result {
    /**
     * The configuration object containing information for the WARP client to detect
     * the managed network.
     */
    export interface Config {
      /**
       * A network address of the form "host:port" that the WARP client will use to
       * detect the presence of a TLS host.
       */
      tls_sockaddr: string;

      /**
       * The SHA-256 hash of the TLS certificate presented by the host found at
       * tls_sockaddr. If absent, regular certificate verification (trusted roots, valid
       * timestamp, etc) will be used to validate the certificate.
       */
      sha256?: string;
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

export interface NetworkDeviceManagedNetworksCreateDeviceManagedNetworkResponse {
  errors?: Array<NetworkDeviceManagedNetworksCreateDeviceManagedNetworkResponse.Error>;

  messages?: Array<NetworkDeviceManagedNetworksCreateDeviceManagedNetworkResponse.Message>;

  result?: NetworkDeviceManagedNetworksCreateDeviceManagedNetworkResponse.Result;

  /**
   * Whether the API call was successful.
   */
  success?: true;
}

export namespace NetworkDeviceManagedNetworksCreateDeviceManagedNetworkResponse {
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
     * The configuration object containing information for the WARP client to detect
     * the managed network.
     */
    config?: Result.Config;

    /**
     * The name of the device managed network. This name must be unique.
     */
    name?: string;

    /**
     * API UUID.
     */
    network_id?: string;

    /**
     * The type of device managed network.
     */
    type?: 'tls';
  }

  export namespace Result {
    /**
     * The configuration object containing information for the WARP client to detect
     * the managed network.
     */
    export interface Config {
      /**
       * A network address of the form "host:port" that the WARP client will use to
       * detect the presence of a TLS host.
       */
      tls_sockaddr: string;

      /**
       * The SHA-256 hash of the TLS certificate presented by the host found at
       * tls_sockaddr. If absent, regular certificate verification (trusted roots, valid
       * timestamp, etc) will be used to validate the certificate.
       */
      sha256?: string;
    }
  }
}

export interface NetworkDeviceManagedNetworksListDeviceManagedNetworksResponse {
  errors?: Array<NetworkDeviceManagedNetworksListDeviceManagedNetworksResponse.Error>;

  messages?: Array<NetworkDeviceManagedNetworksListDeviceManagedNetworksResponse.Message>;

  result?: Array<NetworkDeviceManagedNetworksListDeviceManagedNetworksResponse.Result>;

  result_info?: NetworkDeviceManagedNetworksListDeviceManagedNetworksResponse.ResultInfo;

  /**
   * Whether the API call was successful.
   */
  success?: true;
}

export namespace NetworkDeviceManagedNetworksListDeviceManagedNetworksResponse {
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
     * The configuration object containing information for the WARP client to detect
     * the managed network.
     */
    config?: Result.Config;

    /**
     * The name of the device managed network. This name must be unique.
     */
    name?: string;

    /**
     * API UUID.
     */
    network_id?: string;

    /**
     * The type of device managed network.
     */
    type?: 'tls';
  }

  export namespace Result {
    /**
     * The configuration object containing information for the WARP client to detect
     * the managed network.
     */
    export interface Config {
      /**
       * A network address of the form "host:port" that the WARP client will use to
       * detect the presence of a TLS host.
       */
      tls_sockaddr: string;

      /**
       * The SHA-256 hash of the TLS certificate presented by the host found at
       * tls_sockaddr. If absent, regular certificate verification (trusted roots, valid
       * timestamp, etc) will be used to validate the certificate.
       */
      sha256?: string;
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

export interface NetworkUpdateParams {
  /**
   * The configuration object containing information for the WARP client to detect
   * the managed network.
   */
  config?: NetworkUpdateParams.Config;

  /**
   * The name of the device managed network. This name must be unique.
   */
  name?: string;

  /**
   * The type of device managed network.
   */
  type?: 'tls';
}

export namespace NetworkUpdateParams {
  /**
   * The configuration object containing information for the WARP client to detect
   * the managed network.
   */
  export interface Config {
    /**
     * A network address of the form "host:port" that the WARP client will use to
     * detect the presence of a TLS host.
     */
    tls_sockaddr: string;

    /**
     * The SHA-256 hash of the TLS certificate presented by the host found at
     * tls_sockaddr. If absent, regular certificate verification (trusted roots, valid
     * timestamp, etc) will be used to validate the certificate.
     */
    sha256?: string;
  }
}

export interface NetworkDeviceManagedNetworksCreateDeviceManagedNetworkParams {
  /**
   * The configuration object containing information for the WARP client to detect
   * the managed network.
   */
  config: NetworkDeviceManagedNetworksCreateDeviceManagedNetworkParams.Config;

  /**
   * The name of the device managed network. This name must be unique.
   */
  name: string;

  /**
   * The type of device managed network.
   */
  type: 'tls';
}

export namespace NetworkDeviceManagedNetworksCreateDeviceManagedNetworkParams {
  /**
   * The configuration object containing information for the WARP client to detect
   * the managed network.
   */
  export interface Config {
    /**
     * A network address of the form "host:port" that the WARP client will use to
     * detect the presence of a TLS host.
     */
    tls_sockaddr: string;

    /**
     * The SHA-256 hash of the TLS certificate presented by the host found at
     * tls_sockaddr. If absent, regular certificate verification (trusted roots, valid
     * timestamp, etc) will be used to validate the certificate.
     */
    sha256?: string;
  }
}

export namespace Networks {
  export import NetworkRetrieveResponse = NetworksAPI.NetworkRetrieveResponse;
  export import NetworkUpdateResponse = NetworksAPI.NetworkUpdateResponse;
  export import NetworkDeleteResponse = NetworksAPI.NetworkDeleteResponse;
  export import NetworkDeviceManagedNetworksCreateDeviceManagedNetworkResponse = NetworksAPI.NetworkDeviceManagedNetworksCreateDeviceManagedNetworkResponse;
  export import NetworkDeviceManagedNetworksListDeviceManagedNetworksResponse = NetworksAPI.NetworkDeviceManagedNetworksListDeviceManagedNetworksResponse;
  export import NetworkUpdateParams = NetworksAPI.NetworkUpdateParams;
  export import NetworkDeviceManagedNetworksCreateDeviceManagedNetworkParams = NetworksAPI.NetworkDeviceManagedNetworksCreateDeviceManagedNetworkParams;
}
