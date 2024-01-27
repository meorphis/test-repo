// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as OutgoingsAPI from 'cloudflare/resources/zones/secondary-dns/outgoings/outgoings';
import * as DisablesAPI from 'cloudflare/resources/zones/secondary-dns/outgoings/disables';
import * as EnablesAPI from 'cloudflare/resources/zones/secondary-dns/outgoings/enables';
import * as ForceNotifiesAPI from 'cloudflare/resources/zones/secondary-dns/outgoings/force-notifies';
import * as StatusesAPI from 'cloudflare/resources/zones/secondary-dns/outgoings/statuses';

export class Outgoings extends APIResource {
  disables: DisablesAPI.Disables = new DisablesAPI.Disables(this._client);
  enables: EnablesAPI.Enables = new EnablesAPI.Enables(this._client);
  forceNotifies: ForceNotifiesAPI.ForceNotifies = new ForceNotifiesAPI.ForceNotifies(this._client);
  statuses: StatusesAPI.Statuses = new StatusesAPI.Statuses(this._client);

  /**
   * Delete primary zone configuration for outgoing zone transfers.
   */
  delete(zoneIdentifier: unknown, options?: Core.RequestOptions): Core.APIPromise<OutgoingDeleteResponse> {
    return this._client.delete(`/zones/${zoneIdentifier}/secondary_dns/outgoing`, options);
  }

  /**
   * Create primary zone configuration for outgoing zone transfers.
   */
  secondaryDNSPrimaryZoneCreatePrimaryZoneConfiguration(
    zoneIdentifier: unknown,
    body: OutgoingSecondaryDNSPrimaryZoneCreatePrimaryZoneConfigurationParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OutgoingSecondaryDNSPrimaryZoneCreatePrimaryZoneConfigurationResponse> {
    return this._client.post(`/zones/${zoneIdentifier}/secondary_dns/outgoing`, { body, ...options });
  }

  /**
   * Get primary zone configuration for outgoing zone transfers.
   */
  secondaryDNSPrimaryZonePrimaryZoneConfigurationDetails(
    zoneIdentifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OutgoingSecondaryDNSPrimaryZonePrimaryZoneConfigurationDetailsResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/secondary_dns/outgoing`, options);
  }

  /**
   * Update primary zone configuration for outgoing zone transfers.
   */
  secondaryDNSPrimaryZoneUpdatePrimaryZoneConfiguration(
    zoneIdentifier: unknown,
    body: OutgoingSecondaryDNSPrimaryZoneUpdatePrimaryZoneConfigurationParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OutgoingSecondaryDNSPrimaryZoneUpdatePrimaryZoneConfigurationResponse> {
    return this._client.put(`/zones/${zoneIdentifier}/secondary_dns/outgoing`, { body, ...options });
  }
}

export interface OutgoingDeleteResponse {
  errors?: Array<OutgoingDeleteResponse.Error>;

  messages?: Array<OutgoingDeleteResponse.Message>;

  result?: OutgoingDeleteResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace OutgoingDeleteResponse {
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

export interface OutgoingSecondaryDNSPrimaryZoneCreatePrimaryZoneConfigurationResponse {
  errors?: Array<OutgoingSecondaryDNSPrimaryZoneCreatePrimaryZoneConfigurationResponse.Error>;

  messages?: Array<OutgoingSecondaryDNSPrimaryZoneCreatePrimaryZoneConfigurationResponse.Message>;

  result?: OutgoingSecondaryDNSPrimaryZoneCreatePrimaryZoneConfigurationResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace OutgoingSecondaryDNSPrimaryZoneCreatePrimaryZoneConfigurationResponse {
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
    last_transferred_time?: string;

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

export interface OutgoingSecondaryDNSPrimaryZonePrimaryZoneConfigurationDetailsResponse {
  errors?: Array<OutgoingSecondaryDNSPrimaryZonePrimaryZoneConfigurationDetailsResponse.Error>;

  messages?: Array<OutgoingSecondaryDNSPrimaryZonePrimaryZoneConfigurationDetailsResponse.Message>;

  result?: OutgoingSecondaryDNSPrimaryZonePrimaryZoneConfigurationDetailsResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace OutgoingSecondaryDNSPrimaryZonePrimaryZoneConfigurationDetailsResponse {
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
    last_transferred_time?: string;

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

export interface OutgoingSecondaryDNSPrimaryZoneUpdatePrimaryZoneConfigurationResponse {
  errors?: Array<OutgoingSecondaryDNSPrimaryZoneUpdatePrimaryZoneConfigurationResponse.Error>;

  messages?: Array<OutgoingSecondaryDNSPrimaryZoneUpdatePrimaryZoneConfigurationResponse.Message>;

  result?: OutgoingSecondaryDNSPrimaryZoneUpdatePrimaryZoneConfigurationResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace OutgoingSecondaryDNSPrimaryZoneUpdatePrimaryZoneConfigurationResponse {
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
    last_transferred_time?: string;

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

export interface OutgoingSecondaryDNSPrimaryZoneCreatePrimaryZoneConfigurationParams {
  /**
   * Zone name.
   */
  name: string;

  /**
   * A list of peer tags.
   */
  peers: Array<unknown>;
}

export interface OutgoingSecondaryDNSPrimaryZoneUpdatePrimaryZoneConfigurationParams {
  /**
   * Zone name.
   */
  name: string;

  /**
   * A list of peer tags.
   */
  peers: Array<unknown>;
}

export namespace Outgoings {
  export import OutgoingDeleteResponse = OutgoingsAPI.OutgoingDeleteResponse;
  export import OutgoingSecondaryDNSPrimaryZoneCreatePrimaryZoneConfigurationResponse = OutgoingsAPI.OutgoingSecondaryDNSPrimaryZoneCreatePrimaryZoneConfigurationResponse;
  export import OutgoingSecondaryDNSPrimaryZonePrimaryZoneConfigurationDetailsResponse = OutgoingsAPI.OutgoingSecondaryDNSPrimaryZonePrimaryZoneConfigurationDetailsResponse;
  export import OutgoingSecondaryDNSPrimaryZoneUpdatePrimaryZoneConfigurationResponse = OutgoingsAPI.OutgoingSecondaryDNSPrimaryZoneUpdatePrimaryZoneConfigurationResponse;
  export import OutgoingSecondaryDNSPrimaryZoneCreatePrimaryZoneConfigurationParams = OutgoingsAPI.OutgoingSecondaryDNSPrimaryZoneCreatePrimaryZoneConfigurationParams;
  export import OutgoingSecondaryDNSPrimaryZoneUpdatePrimaryZoneConfigurationParams = OutgoingsAPI.OutgoingSecondaryDNSPrimaryZoneUpdatePrimaryZoneConfigurationParams;
  export import Disables = DisablesAPI.Disables;
  export import DisableSecondaryDNSPrimaryZoneDisableOutgoingZoneTransfersResponse = DisablesAPI.DisableSecondaryDNSPrimaryZoneDisableOutgoingZoneTransfersResponse;
  export import Enables = EnablesAPI.Enables;
  export import EnableSecondaryDNSPrimaryZoneEnableOutgoingZoneTransfersResponse = EnablesAPI.EnableSecondaryDNSPrimaryZoneEnableOutgoingZoneTransfersResponse;
  export import ForceNotifies = ForceNotifiesAPI.ForceNotifies;
  export import ForceNotifySecondaryDNSPrimaryZoneForceDNSNotifyResponse = ForceNotifiesAPI.ForceNotifySecondaryDNSPrimaryZoneForceDNSNotifyResponse;
  export import Statuses = StatusesAPI.Statuses;
  export import StatusSecondaryDNSPrimaryZoneGetOutgoingZoneTransferStatusResponse = StatusesAPI.StatusSecondaryDNSPrimaryZoneGetOutgoingZoneTransferStatusResponse;
}
