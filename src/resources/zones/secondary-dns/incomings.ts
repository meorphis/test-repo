// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as IncomingsAPI from 'cloudflare/resources/zones/secondary-dns/incomings';

export class Incomings extends APIResource {
  /**
   * Delete secondary zone configuration for incoming zone transfers.
   */
  delete(zoneIdentifier: unknown, options?: Core.RequestOptions): Core.APIPromise<IncomingDeleteResponse> {
    return this._client.delete(`/zones/${zoneIdentifier}/secondary_dns/incoming`, options);
  }

  /**
   * Create secondary zone configuration for incoming zone transfers.
   */
  secondaryDNSSecondaryZoneCreateSecondaryZoneConfiguration(
    zoneIdentifier: unknown,
    body: IncomingSecondaryDNSSecondaryZoneCreateSecondaryZoneConfigurationParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IncomingSecondaryDNSSecondaryZoneCreateSecondaryZoneConfigurationResponse> {
    return this._client.post(`/zones/${zoneIdentifier}/secondary_dns/incoming`, { body, ...options });
  }

  /**
   * Get secondary zone configuration for incoming zone transfers.
   */
  secondaryDNSSecondaryZoneSecondaryZoneConfigurationDetails(
    zoneIdentifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IncomingSecondaryDNSSecondaryZoneSecondaryZoneConfigurationDetailsResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/secondary_dns/incoming`, options);
  }

  /**
   * Update secondary zone configuration for incoming zone transfers.
   */
  secondaryDNSSecondaryZoneUpdateSecondaryZoneConfiguration(
    zoneIdentifier: unknown,
    body: IncomingSecondaryDNSSecondaryZoneUpdateSecondaryZoneConfigurationParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IncomingSecondaryDNSSecondaryZoneUpdateSecondaryZoneConfigurationResponse> {
    return this._client.put(`/zones/${zoneIdentifier}/secondary_dns/incoming`, { body, ...options });
  }
}

export interface IncomingDeleteResponse {
  errors?: Array<IncomingDeleteResponse.Error>;

  messages?: Array<IncomingDeleteResponse.Message>;

  result?: IncomingDeleteResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace IncomingDeleteResponse {
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
  }
}

export interface IncomingSecondaryDNSSecondaryZoneCreateSecondaryZoneConfigurationResponse {
  errors?: Array<IncomingSecondaryDNSSecondaryZoneCreateSecondaryZoneConfigurationResponse.Error>;

  messages?: Array<IncomingSecondaryDNSSecondaryZoneCreateSecondaryZoneConfigurationResponse.Message>;

  result?: IncomingSecondaryDNSSecondaryZoneCreateSecondaryZoneConfigurationResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace IncomingSecondaryDNSSecondaryZoneCreateSecondaryZoneConfigurationResponse {
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

    /**
     * How often should a secondary zone auto refresh regardless of DNS NOTIFY. Not
     * applicable for primary zones.
     */
    auto_refresh_seconds?: number;

    /**
     * The time for a specific event.
     */
    checked_time?: string;

    /**
     * The time for a specific event.
     */
    created_time?: string;

    /**
     * The time for a specific event.
     */
    modified_time?: string;

    /**
     * Zone name.
     */
    name?: string;

    /**
     * A list of peer tags.
     */
    peers?: Array<unknown>;

    /**
     * The serial number of the SOA for the given zone.
     */
    soa_serial?: number;
  }
}

export interface IncomingSecondaryDNSSecondaryZoneSecondaryZoneConfigurationDetailsResponse {
  errors?: Array<IncomingSecondaryDNSSecondaryZoneSecondaryZoneConfigurationDetailsResponse.Error>;

  messages?: Array<IncomingSecondaryDNSSecondaryZoneSecondaryZoneConfigurationDetailsResponse.Message>;

  result?: IncomingSecondaryDNSSecondaryZoneSecondaryZoneConfigurationDetailsResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace IncomingSecondaryDNSSecondaryZoneSecondaryZoneConfigurationDetailsResponse {
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

    /**
     * How often should a secondary zone auto refresh regardless of DNS NOTIFY. Not
     * applicable for primary zones.
     */
    auto_refresh_seconds?: number;

    /**
     * The time for a specific event.
     */
    checked_time?: string;

    /**
     * The time for a specific event.
     */
    created_time?: string;

    /**
     * The time for a specific event.
     */
    modified_time?: string;

    /**
     * Zone name.
     */
    name?: string;

    /**
     * A list of peer tags.
     */
    peers?: Array<unknown>;

    /**
     * The serial number of the SOA for the given zone.
     */
    soa_serial?: number;
  }
}

export interface IncomingSecondaryDNSSecondaryZoneUpdateSecondaryZoneConfigurationResponse {
  errors?: Array<IncomingSecondaryDNSSecondaryZoneUpdateSecondaryZoneConfigurationResponse.Error>;

  messages?: Array<IncomingSecondaryDNSSecondaryZoneUpdateSecondaryZoneConfigurationResponse.Message>;

  result?: IncomingSecondaryDNSSecondaryZoneUpdateSecondaryZoneConfigurationResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace IncomingSecondaryDNSSecondaryZoneUpdateSecondaryZoneConfigurationResponse {
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

    /**
     * How often should a secondary zone auto refresh regardless of DNS NOTIFY. Not
     * applicable for primary zones.
     */
    auto_refresh_seconds?: number;

    /**
     * The time for a specific event.
     */
    checked_time?: string;

    /**
     * The time for a specific event.
     */
    created_time?: string;

    /**
     * The time for a specific event.
     */
    modified_time?: string;

    /**
     * Zone name.
     */
    name?: string;

    /**
     * A list of peer tags.
     */
    peers?: Array<unknown>;

    /**
     * The serial number of the SOA for the given zone.
     */
    soa_serial?: number;
  }
}

export interface IncomingSecondaryDNSSecondaryZoneCreateSecondaryZoneConfigurationParams {
  /**
   * How often should a secondary zone auto refresh regardless of DNS NOTIFY. Not
   * applicable for primary zones.
   */
  auto_refresh_seconds: number;

  /**
   * Zone name.
   */
  name: string;

  /**
   * A list of peer tags.
   */
  peers: Array<unknown>;
}

export interface IncomingSecondaryDNSSecondaryZoneUpdateSecondaryZoneConfigurationParams {
  /**
   * How often should a secondary zone auto refresh regardless of DNS NOTIFY. Not
   * applicable for primary zones.
   */
  auto_refresh_seconds: number;

  /**
   * Zone name.
   */
  name: string;

  /**
   * A list of peer tags.
   */
  peers: Array<unknown>;
}

export namespace Incomings {
  export import IncomingDeleteResponse = IncomingsAPI.IncomingDeleteResponse;
  export import IncomingSecondaryDNSSecondaryZoneCreateSecondaryZoneConfigurationResponse = IncomingsAPI.IncomingSecondaryDNSSecondaryZoneCreateSecondaryZoneConfigurationResponse;
  export import IncomingSecondaryDNSSecondaryZoneSecondaryZoneConfigurationDetailsResponse = IncomingsAPI.IncomingSecondaryDNSSecondaryZoneSecondaryZoneConfigurationDetailsResponse;
  export import IncomingSecondaryDNSSecondaryZoneUpdateSecondaryZoneConfigurationResponse = IncomingsAPI.IncomingSecondaryDNSSecondaryZoneUpdateSecondaryZoneConfigurationResponse;
  export import IncomingSecondaryDNSSecondaryZoneCreateSecondaryZoneConfigurationParams = IncomingsAPI.IncomingSecondaryDNSSecondaryZoneCreateSecondaryZoneConfigurationParams;
  export import IncomingSecondaryDNSSecondaryZoneUpdateSecondaryZoneConfigurationParams = IncomingsAPI.IncomingSecondaryDNSSecondaryZoneUpdateSecondaryZoneConfigurationParams;
}
