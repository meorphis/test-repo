// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as KeylessCertificatesAPI from 'cloudflare/resources/zones/keyless-certificates';

export class KeylessCertificates extends APIResource {
  /**
   * Get details for one Keyless SSL configuration.
   */
  retrieve(
    zoneIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<KeylessCertificateRetrieveResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/keyless_certificates/${identifier}`, options);
  }

  /**
   * This will update attributes of a Keyless SSL. Consists of one or more of the
   * following: host,name,port.
   */
  update(
    zoneIdentifier: string,
    identifier: string,
    body: KeylessCertificateUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<KeylessCertificateUpdateResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/keyless_certificates/${identifier}`, {
      body,
      ...options,
    });
  }

  /**
   * Delete Keyless SSL Configuration
   */
  delete(
    zoneIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<KeylessCertificateDeleteResponse> {
    return this._client.delete(`/zones/${zoneIdentifier}/keyless_certificates/${identifier}`, options);
  }

  /**
   * Create Keyless SSL Configuration
   */
  keylessSslForAZoneCreateKeylessSslConfiguration(
    zoneIdentifier: string,
    body: KeylessCertificateKeylessSslForAZoneCreateKeylessSslConfigurationParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<KeylessCertificateKeylessSslForAZoneCreateKeylessSslConfigurationResponse> {
    return this._client.post(`/zones/${zoneIdentifier}/keyless_certificates`, { body, ...options });
  }

  /**
   * List all Keyless SSL configurations for a given zone.
   */
  keylessSslForAZoneListKeylessSslConfigurations(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<KeylessCertificateKeylessSslForAZoneListKeylessSslConfigurationsResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/keyless_certificates`, options);
  }
}

export interface KeylessCertificateRetrieveResponse {
  errors?: Array<KeylessCertificateRetrieveResponse.Error>;

  messages?: Array<KeylessCertificateRetrieveResponse.Message>;

  result?: KeylessCertificateRetrieveResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace KeylessCertificateRetrieveResponse {
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
     * Keyless certificate identifier tag.
     */
    id: string;

    /**
     * When the Keyless SSL was created.
     */
    created_on: string;

    /**
     * Whether or not the Keyless SSL is on or off.
     */
    enabled: boolean;

    /**
     * The keyless SSL name.
     */
    host: string;

    /**
     * When the Keyless SSL was last modified.
     */
    modified_on: string;

    /**
     * The keyless SSL name.
     */
    name: string;

    /**
     * Available permissions for the Keyless SSL for the current user requesting the
     * item.
     */
    permissions: Array<unknown>;

    /**
     * The keyless SSL port used to communicate between Cloudflare and the client's
     * Keyless SSL server.
     */
    port: number;

    /**
     * Status of the Keyless SSL.
     */
    status: 'active' | 'deleted';

    /**
     * Configuration for using Keyless SSL through a Cloudflare Tunnel
     */
    tunnel?: Result.Tunnel;
  }

  export namespace Result {
    /**
     * Configuration for using Keyless SSL through a Cloudflare Tunnel
     */
    export interface Tunnel {
      /**
       * Private IP of the Key Server Host
       */
      private_ip: string;

      /**
       * Cloudflare Tunnel Virtual Network ID
       */
      vnet_id: string;
    }
  }
}

export interface KeylessCertificateUpdateResponse {
  errors?: Array<KeylessCertificateUpdateResponse.Error>;

  messages?: Array<KeylessCertificateUpdateResponse.Message>;

  result?: KeylessCertificateUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace KeylessCertificateUpdateResponse {
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
     * Keyless certificate identifier tag.
     */
    id: string;

    /**
     * When the Keyless SSL was created.
     */
    created_on: string;

    /**
     * Whether or not the Keyless SSL is on or off.
     */
    enabled: boolean;

    /**
     * The keyless SSL name.
     */
    host: string;

    /**
     * When the Keyless SSL was last modified.
     */
    modified_on: string;

    /**
     * The keyless SSL name.
     */
    name: string;

    /**
     * Available permissions for the Keyless SSL for the current user requesting the
     * item.
     */
    permissions: Array<unknown>;

    /**
     * The keyless SSL port used to communicate between Cloudflare and the client's
     * Keyless SSL server.
     */
    port: number;

    /**
     * Status of the Keyless SSL.
     */
    status: 'active' | 'deleted';

    /**
     * Configuration for using Keyless SSL through a Cloudflare Tunnel
     */
    tunnel?: Result.Tunnel;
  }

  export namespace Result {
    /**
     * Configuration for using Keyless SSL through a Cloudflare Tunnel
     */
    export interface Tunnel {
      /**
       * Private IP of the Key Server Host
       */
      private_ip: string;

      /**
       * Cloudflare Tunnel Virtual Network ID
       */
      vnet_id: string;
    }
  }
}

export interface KeylessCertificateDeleteResponse {
  errors?: Array<KeylessCertificateDeleteResponse.Error>;

  messages?: Array<KeylessCertificateDeleteResponse.Message>;

  result?: KeylessCertificateDeleteResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace KeylessCertificateDeleteResponse {
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
     * Identifier
     */
    id?: string;
  }
}

export interface KeylessCertificateKeylessSslForAZoneCreateKeylessSslConfigurationResponse {
  errors?: Array<KeylessCertificateKeylessSslForAZoneCreateKeylessSslConfigurationResponse.Error>;

  messages?: Array<KeylessCertificateKeylessSslForAZoneCreateKeylessSslConfigurationResponse.Message>;

  result?: KeylessCertificateKeylessSslForAZoneCreateKeylessSslConfigurationResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace KeylessCertificateKeylessSslForAZoneCreateKeylessSslConfigurationResponse {
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
     * Keyless certificate identifier tag.
     */
    id: string;

    /**
     * When the Keyless SSL was created.
     */
    created_on: string;

    /**
     * Whether or not the Keyless SSL is on or off.
     */
    enabled: boolean;

    /**
     * The keyless SSL name.
     */
    host: string;

    /**
     * When the Keyless SSL was last modified.
     */
    modified_on: string;

    /**
     * The keyless SSL name.
     */
    name: string;

    /**
     * Available permissions for the Keyless SSL for the current user requesting the
     * item.
     */
    permissions: Array<unknown>;

    /**
     * The keyless SSL port used to communicate between Cloudflare and the client's
     * Keyless SSL server.
     */
    port: number;

    /**
     * Status of the Keyless SSL.
     */
    status: 'active' | 'deleted';

    /**
     * Configuration for using Keyless SSL through a Cloudflare Tunnel
     */
    tunnel?: Result.Tunnel;
  }

  export namespace Result {
    /**
     * Configuration for using Keyless SSL through a Cloudflare Tunnel
     */
    export interface Tunnel {
      /**
       * Private IP of the Key Server Host
       */
      private_ip: string;

      /**
       * Cloudflare Tunnel Virtual Network ID
       */
      vnet_id: string;
    }
  }
}

export interface KeylessCertificateKeylessSslForAZoneListKeylessSslConfigurationsResponse {
  errors?: Array<KeylessCertificateKeylessSslForAZoneListKeylessSslConfigurationsResponse.Error>;

  messages?: Array<KeylessCertificateKeylessSslForAZoneListKeylessSslConfigurationsResponse.Message>;

  result?: Array<KeylessCertificateKeylessSslForAZoneListKeylessSslConfigurationsResponse.Result>;

  result_info?: KeylessCertificateKeylessSslForAZoneListKeylessSslConfigurationsResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace KeylessCertificateKeylessSslForAZoneListKeylessSslConfigurationsResponse {
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
     * Keyless certificate identifier tag.
     */
    id: string;

    /**
     * When the Keyless SSL was created.
     */
    created_on: string;

    /**
     * Whether or not the Keyless SSL is on or off.
     */
    enabled: boolean;

    /**
     * The keyless SSL name.
     */
    host: string;

    /**
     * When the Keyless SSL was last modified.
     */
    modified_on: string;

    /**
     * The keyless SSL name.
     */
    name: string;

    /**
     * Available permissions for the Keyless SSL for the current user requesting the
     * item.
     */
    permissions: Array<unknown>;

    /**
     * The keyless SSL port used to communicate between Cloudflare and the client's
     * Keyless SSL server.
     */
    port: number;

    /**
     * Status of the Keyless SSL.
     */
    status: 'active' | 'deleted';

    /**
     * Configuration for using Keyless SSL through a Cloudflare Tunnel
     */
    tunnel?: Result.Tunnel;
  }

  export namespace Result {
    /**
     * Configuration for using Keyless SSL through a Cloudflare Tunnel
     */
    export interface Tunnel {
      /**
       * Private IP of the Key Server Host
       */
      private_ip: string;

      /**
       * Cloudflare Tunnel Virtual Network ID
       */
      vnet_id: string;
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

export interface KeylessCertificateUpdateParams {
  /**
   * Whether or not the Keyless SSL is on or off.
   */
  enabled?: boolean;

  /**
   * The keyless SSL name.
   */
  host?: string;

  /**
   * The keyless SSL name.
   */
  name?: string;

  /**
   * The keyless SSL port used to communicate between Cloudflare and the client's
   * Keyless SSL server.
   */
  port?: number;

  /**
   * Configuration for using Keyless SSL through a Cloudflare Tunnel
   */
  tunnel?: KeylessCertificateUpdateParams.Tunnel;
}

export namespace KeylessCertificateUpdateParams {
  /**
   * Configuration for using Keyless SSL through a Cloudflare Tunnel
   */
  export interface Tunnel {
    /**
     * Private IP of the Key Server Host
     */
    private_ip: string;

    /**
     * Cloudflare Tunnel Virtual Network ID
     */
    vnet_id: string;
  }
}

export interface KeylessCertificateKeylessSslForAZoneCreateKeylessSslConfigurationParams {
  /**
   * The zone's SSL certificate or SSL certificate and intermediate(s).
   */
  certificate: string;

  /**
   * The keyless SSL name.
   */
  host: string;

  /**
   * The keyless SSL port used to communicate between Cloudflare and the client's
   * Keyless SSL server.
   */
  port: number;

  /**
   * A ubiquitous bundle has the highest probability of being verified everywhere,
   * even by clients using outdated or unusual trust stores. An optimal bundle uses
   * the shortest chain and newest intermediates. And the force bundle verifies the
   * chain, but does not otherwise modify it.
   */
  bundle_method?: 'ubiquitous' | 'optimal' | 'force';

  /**
   * The keyless SSL name.
   */
  name?: string;

  /**
   * Configuration for using Keyless SSL through a Cloudflare Tunnel
   */
  tunnel?: KeylessCertificateKeylessSslForAZoneCreateKeylessSslConfigurationParams.Tunnel;
}

export namespace KeylessCertificateKeylessSslForAZoneCreateKeylessSslConfigurationParams {
  /**
   * Configuration for using Keyless SSL through a Cloudflare Tunnel
   */
  export interface Tunnel {
    /**
     * Private IP of the Key Server Host
     */
    private_ip: string;

    /**
     * Cloudflare Tunnel Virtual Network ID
     */
    vnet_id: string;
  }
}

export namespace KeylessCertificates {
  export import KeylessCertificateRetrieveResponse = KeylessCertificatesAPI.KeylessCertificateRetrieveResponse;
  export import KeylessCertificateUpdateResponse = KeylessCertificatesAPI.KeylessCertificateUpdateResponse;
  export import KeylessCertificateDeleteResponse = KeylessCertificatesAPI.KeylessCertificateDeleteResponse;
  export import KeylessCertificateKeylessSslForAZoneCreateKeylessSslConfigurationResponse = KeylessCertificatesAPI.KeylessCertificateKeylessSslForAZoneCreateKeylessSslConfigurationResponse;
  export import KeylessCertificateKeylessSslForAZoneListKeylessSslConfigurationsResponse = KeylessCertificatesAPI.KeylessCertificateKeylessSslForAZoneListKeylessSslConfigurationsResponse;
  export import KeylessCertificateUpdateParams = KeylessCertificatesAPI.KeylessCertificateUpdateParams;
  export import KeylessCertificateKeylessSslForAZoneCreateKeylessSslConfigurationParams = KeylessCertificatesAPI.KeylessCertificateKeylessSslForAZoneCreateKeylessSslConfigurationParams;
}
