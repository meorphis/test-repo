// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as GreTunnelsAPI from 'cloudflare/resources/accounts/magic/gre-tunnels';

export class GreTunnels extends APIResource {
  /**
   * Lists informtion for a specific GRE tunnel.
   */
  retrieve(
    accountIdentifier: string,
    tunnelIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GreTunnelRetrieveResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/magic/gre_tunnels/${tunnelIdentifier}`, options);
  }

  /**
   * Updates a specific GRE tunnel. Use `?validate_only=true` as an optional query
   * parameter to only run validation without persisting changes.
   */
  update(
    accountIdentifier: string,
    tunnelIdentifier: string,
    body: GreTunnelUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GreTunnelUpdateResponse> {
    return this._client.put(`/accounts/${accountIdentifier}/magic/gre_tunnels/${tunnelIdentifier}`, {
      body,
      ...options,
    });
  }

  /**
   * Disables and removes a specific static GRE tunnel. Use `?validate_only=true` as
   * an optional query parameter to only run validation without persisting changes.
   */
  delete(
    accountIdentifier: string,
    tunnelIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GreTunnelDeleteResponse> {
    return this._client.delete(
      `/accounts/${accountIdentifier}/magic/gre_tunnels/${tunnelIdentifier}`,
      options,
    );
  }

  /**
   * Creates new GRE tunnels. Use `?validate_only=true` as an optional query
   * parameter to only run validation without persisting changes.
   */
  magicGreTunnelsCreateGreTunnels(
    accountIdentifier: string,
    body: GreTunnelMagicGreTunnelsCreateGreTunnelsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GreTunnelMagicGreTunnelsCreateGreTunnelsResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/magic/gre_tunnels`, { body, ...options });
  }

  /**
   * Lists GRE tunnels associated with an account.
   */
  magicGreTunnelsListGreTunnels(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GreTunnelMagicGreTunnelsListGreTunnelsResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/magic/gre_tunnels`, options);
  }

  /**
   * Updates multiple GRE tunnels. Use `?validate_only=true` as an optional query
   * parameter to only run validation without persisting changes.
   */
  magicGreTunnelsUpdateMultipleGreTunnels(
    accountIdentifier: string,
    body: GreTunnelMagicGreTunnelsUpdateMultipleGreTunnelsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GreTunnelMagicGreTunnelsUpdateMultipleGreTunnelsResponse> {
    return this._client.put(`/accounts/${accountIdentifier}/magic/gre_tunnels`, { body, ...options });
  }
}

export interface GreTunnelRetrieveResponse {
  errors?: Array<GreTunnelRetrieveResponse.Error>;

  messages?: Array<GreTunnelRetrieveResponse.Message>;

  result?: GreTunnelRetrieveResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace GreTunnelRetrieveResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    gre_tunnel?: unknown;
  }
}

export interface GreTunnelUpdateResponse {
  errors?: Array<GreTunnelUpdateResponse.Error>;

  messages?: Array<GreTunnelUpdateResponse.Message>;

  result?: GreTunnelUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace GreTunnelUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    modified?: boolean;

    modified_gre_tunnel?: unknown;
  }
}

export interface GreTunnelDeleteResponse {
  errors?: Array<GreTunnelDeleteResponse.Error>;

  messages?: Array<GreTunnelDeleteResponse.Message>;

  result?: GreTunnelDeleteResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace GreTunnelDeleteResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    deleted?: boolean;

    deleted_gre_tunnel?: unknown;
  }
}

export interface GreTunnelMagicGreTunnelsCreateGreTunnelsResponse {
  errors?: Array<GreTunnelMagicGreTunnelsCreateGreTunnelsResponse.Error>;

  messages?: Array<GreTunnelMagicGreTunnelsCreateGreTunnelsResponse.Message>;

  result?: GreTunnelMagicGreTunnelsCreateGreTunnelsResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace GreTunnelMagicGreTunnelsCreateGreTunnelsResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    gre_tunnels?: Array<Result.GreTunnel>;
  }

  export namespace Result {
    export interface GreTunnel {
      /**
       * The IP address assigned to the Cloudflare side of the GRE tunnel.
       */
      cloudflare_gre_endpoint: string;

      /**
       * The IP address assigned to the customer side of the GRE tunnel.
       */
      customer_gre_endpoint: string;

      /**
       * A 31-bit prefix (/31 in CIDR notation) supporting two hosts, one for each side
       * of the tunnel. Select the subnet from the following private IP space:
       * 10.0.0.0–10.255.255.255, 172.16.0.0–172.31.255.255, 192.168.0.0–192.168.255.255.
       */
      interface_address: string;

      /**
       * The name of the tunnel. The name cannot contain spaces or special characters,
       * must be 15 characters or less, and cannot share a name with another GRE tunnel.
       */
      name: string;

      /**
       * Tunnel identifier tag.
       */
      id?: string;

      /**
       * The date and time the tunnel was created.
       */
      created_on?: string;

      /**
       * An optional description of the GRE tunnel.
       */
      description?: string;

      health_check?: GreTunnel.HealthCheck;

      /**
       * The date and time the tunnel was last modified.
       */
      modified_on?: string;

      /**
       * Maximum Transmission Unit (MTU) in bytes for the GRE tunnel. The minimum value
       * is 576.
       */
      mtu?: number;

      /**
       * Time To Live (TTL) in number of hops of the GRE tunnel.
       */
      ttl?: number;
    }

    export namespace GreTunnel {
      export interface HealthCheck {
        /**
         * The direction of the flow of the healthcheck. Either unidirectional, where the
         * probe comes to you via the tunnel and the result comes back to Cloudflare via
         * the open Internet, or bidirectional where both the probe and result come and go
         * via the tunnel.
         */
        direction?: 'unidirectional' | 'bidirectional';

        /**
         * Determines whether to run healthchecks for a tunnel.
         */
        enabled?: boolean;

        /**
         * How frequent the health check is run. The default value is `mid`.
         */
        rate?: 'low' | 'mid' | 'high';

        /**
         * The destination address in a request type health check. After the healthcheck is
         * decapsulated at the customer end of the tunnel, the ICMP echo will be forwarded
         * to this address. This field defaults to `customer_gre_endpoint address`.
         */
        target?: string;

        /**
         * The type of healthcheck to run, reply or request. The default value is `reply`.
         */
        type?: 'reply' | 'request';
      }
    }
  }
}

export interface GreTunnelMagicGreTunnelsListGreTunnelsResponse {
  errors?: Array<GreTunnelMagicGreTunnelsListGreTunnelsResponse.Error>;

  messages?: Array<GreTunnelMagicGreTunnelsListGreTunnelsResponse.Message>;

  result?: GreTunnelMagicGreTunnelsListGreTunnelsResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace GreTunnelMagicGreTunnelsListGreTunnelsResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    gre_tunnels?: Array<Result.GreTunnel>;
  }

  export namespace Result {
    export interface GreTunnel {
      /**
       * The IP address assigned to the Cloudflare side of the GRE tunnel.
       */
      cloudflare_gre_endpoint: string;

      /**
       * The IP address assigned to the customer side of the GRE tunnel.
       */
      customer_gre_endpoint: string;

      /**
       * A 31-bit prefix (/31 in CIDR notation) supporting two hosts, one for each side
       * of the tunnel. Select the subnet from the following private IP space:
       * 10.0.0.0–10.255.255.255, 172.16.0.0–172.31.255.255, 192.168.0.0–192.168.255.255.
       */
      interface_address: string;

      /**
       * The name of the tunnel. The name cannot contain spaces or special characters,
       * must be 15 characters or less, and cannot share a name with another GRE tunnel.
       */
      name: string;

      /**
       * Tunnel identifier tag.
       */
      id?: string;

      /**
       * The date and time the tunnel was created.
       */
      created_on?: string;

      /**
       * An optional description of the GRE tunnel.
       */
      description?: string;

      health_check?: GreTunnel.HealthCheck;

      /**
       * The date and time the tunnel was last modified.
       */
      modified_on?: string;

      /**
       * Maximum Transmission Unit (MTU) in bytes for the GRE tunnel. The minimum value
       * is 576.
       */
      mtu?: number;

      /**
       * Time To Live (TTL) in number of hops of the GRE tunnel.
       */
      ttl?: number;
    }

    export namespace GreTunnel {
      export interface HealthCheck {
        /**
         * The direction of the flow of the healthcheck. Either unidirectional, where the
         * probe comes to you via the tunnel and the result comes back to Cloudflare via
         * the open Internet, or bidirectional where both the probe and result come and go
         * via the tunnel.
         */
        direction?: 'unidirectional' | 'bidirectional';

        /**
         * Determines whether to run healthchecks for a tunnel.
         */
        enabled?: boolean;

        /**
         * How frequent the health check is run. The default value is `mid`.
         */
        rate?: 'low' | 'mid' | 'high';

        /**
         * The destination address in a request type health check. After the healthcheck is
         * decapsulated at the customer end of the tunnel, the ICMP echo will be forwarded
         * to this address. This field defaults to `customer_gre_endpoint address`.
         */
        target?: string;

        /**
         * The type of healthcheck to run, reply or request. The default value is `reply`.
         */
        type?: 'reply' | 'request';
      }
    }
  }
}

export interface GreTunnelMagicGreTunnelsUpdateMultipleGreTunnelsResponse {
  errors?: Array<GreTunnelMagicGreTunnelsUpdateMultipleGreTunnelsResponse.Error>;

  messages?: Array<GreTunnelMagicGreTunnelsUpdateMultipleGreTunnelsResponse.Message>;

  result?: GreTunnelMagicGreTunnelsUpdateMultipleGreTunnelsResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace GreTunnelMagicGreTunnelsUpdateMultipleGreTunnelsResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    modified?: boolean;

    modified_gre_tunnels?: Array<Result.ModifiedGreTunnel>;
  }

  export namespace Result {
    export interface ModifiedGreTunnel {
      /**
       * The IP address assigned to the Cloudflare side of the GRE tunnel.
       */
      cloudflare_gre_endpoint: string;

      /**
       * The IP address assigned to the customer side of the GRE tunnel.
       */
      customer_gre_endpoint: string;

      /**
       * A 31-bit prefix (/31 in CIDR notation) supporting two hosts, one for each side
       * of the tunnel. Select the subnet from the following private IP space:
       * 10.0.0.0–10.255.255.255, 172.16.0.0–172.31.255.255, 192.168.0.0–192.168.255.255.
       */
      interface_address: string;

      /**
       * The name of the tunnel. The name cannot contain spaces or special characters,
       * must be 15 characters or less, and cannot share a name with another GRE tunnel.
       */
      name: string;

      /**
       * Tunnel identifier tag.
       */
      id?: string;

      /**
       * The date and time the tunnel was created.
       */
      created_on?: string;

      /**
       * An optional description of the GRE tunnel.
       */
      description?: string;

      health_check?: ModifiedGreTunnel.HealthCheck;

      /**
       * The date and time the tunnel was last modified.
       */
      modified_on?: string;

      /**
       * Maximum Transmission Unit (MTU) in bytes for the GRE tunnel. The minimum value
       * is 576.
       */
      mtu?: number;

      /**
       * Time To Live (TTL) in number of hops of the GRE tunnel.
       */
      ttl?: number;
    }

    export namespace ModifiedGreTunnel {
      export interface HealthCheck {
        /**
         * The direction of the flow of the healthcheck. Either unidirectional, where the
         * probe comes to you via the tunnel and the result comes back to Cloudflare via
         * the open Internet, or bidirectional where both the probe and result come and go
         * via the tunnel.
         */
        direction?: 'unidirectional' | 'bidirectional';

        /**
         * Determines whether to run healthchecks for a tunnel.
         */
        enabled?: boolean;

        /**
         * How frequent the health check is run. The default value is `mid`.
         */
        rate?: 'low' | 'mid' | 'high';

        /**
         * The destination address in a request type health check. After the healthcheck is
         * decapsulated at the customer end of the tunnel, the ICMP echo will be forwarded
         * to this address. This field defaults to `customer_gre_endpoint address`.
         */
        target?: string;

        /**
         * The type of healthcheck to run, reply or request. The default value is `reply`.
         */
        type?: 'reply' | 'request';
      }
    }
  }
}

export interface GreTunnelUpdateParams {
  /**
   * The IP address assigned to the Cloudflare side of the GRE tunnel.
   */
  cloudflare_gre_endpoint: string;

  /**
   * The IP address assigned to the customer side of the GRE tunnel.
   */
  customer_gre_endpoint: string;

  /**
   * A 31-bit prefix (/31 in CIDR notation) supporting two hosts, one for each side
   * of the tunnel. Select the subnet from the following private IP space:
   * 10.0.0.0–10.255.255.255, 172.16.0.0–172.31.255.255, 192.168.0.0–192.168.255.255.
   */
  interface_address: string;

  /**
   * The name of the tunnel. The name cannot contain spaces or special characters,
   * must be 15 characters or less, and cannot share a name with another GRE tunnel.
   */
  name: string;

  /**
   * An optional description of the GRE tunnel.
   */
  description?: string;

  health_check?: GreTunnelUpdateParams.HealthCheck;

  /**
   * Maximum Transmission Unit (MTU) in bytes for the GRE tunnel. The minimum value
   * is 576.
   */
  mtu?: number;

  /**
   * Time To Live (TTL) in number of hops of the GRE tunnel.
   */
  ttl?: number;
}

export namespace GreTunnelUpdateParams {
  export interface HealthCheck {
    /**
     * The direction of the flow of the healthcheck. Either unidirectional, where the
     * probe comes to you via the tunnel and the result comes back to Cloudflare via
     * the open Internet, or bidirectional where both the probe and result come and go
     * via the tunnel.
     */
    direction?: 'unidirectional' | 'bidirectional';

    /**
     * Determines whether to run healthchecks for a tunnel.
     */
    enabled?: boolean;

    /**
     * How frequent the health check is run. The default value is `mid`.
     */
    rate?: 'low' | 'mid' | 'high';

    /**
     * The destination address in a request type health check. After the healthcheck is
     * decapsulated at the customer end of the tunnel, the ICMP echo will be forwarded
     * to this address. This field defaults to `customer_gre_endpoint address`.
     */
    target?: string;

    /**
     * The type of healthcheck to run, reply or request. The default value is `reply`.
     */
    type?: 'reply' | 'request';
  }
}

export type GreTunnelMagicGreTunnelsCreateGreTunnelsParams = unknown;

export type GreTunnelMagicGreTunnelsUpdateMultipleGreTunnelsParams = unknown;

export namespace GreTunnels {
  export import GreTunnelRetrieveResponse = GreTunnelsAPI.GreTunnelRetrieveResponse;
  export import GreTunnelUpdateResponse = GreTunnelsAPI.GreTunnelUpdateResponse;
  export import GreTunnelDeleteResponse = GreTunnelsAPI.GreTunnelDeleteResponse;
  export import GreTunnelMagicGreTunnelsCreateGreTunnelsResponse = GreTunnelsAPI.GreTunnelMagicGreTunnelsCreateGreTunnelsResponse;
  export import GreTunnelMagicGreTunnelsListGreTunnelsResponse = GreTunnelsAPI.GreTunnelMagicGreTunnelsListGreTunnelsResponse;
  export import GreTunnelMagicGreTunnelsUpdateMultipleGreTunnelsResponse = GreTunnelsAPI.GreTunnelMagicGreTunnelsUpdateMultipleGreTunnelsResponse;
  export import GreTunnelUpdateParams = GreTunnelsAPI.GreTunnelUpdateParams;
  export import GreTunnelMagicGreTunnelsCreateGreTunnelsParams = GreTunnelsAPI.GreTunnelMagicGreTunnelsCreateGreTunnelsParams;
  export import GreTunnelMagicGreTunnelsUpdateMultipleGreTunnelsParams = GreTunnelsAPI.GreTunnelMagicGreTunnelsUpdateMultipleGreTunnelsParams;
}
