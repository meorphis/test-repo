// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DisablesAPI from 'cloudflare/resources/zones/secondary-dns/outgoings/disables';

export class Disables extends APIResource {
  /**
   * Disable outgoing zone transfers for primary zone and clears IXFR backlog of
   * primary zone.
   */
  secondaryDNSPrimaryZoneDisableOutgoingZoneTransfers(
    zoneIdentifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DisableSecondaryDNSPrimaryZoneDisableOutgoingZoneTransfersResponse> {
    return this._client.post(`/zones/${zoneIdentifier}/secondary_dns/outgoing/disable`, options);
  }
}

export interface DisableSecondaryDNSPrimaryZoneDisableOutgoingZoneTransfersResponse {
  errors?: Array<DisableSecondaryDNSPrimaryZoneDisableOutgoingZoneTransfersResponse.Error>;

  messages?: Array<DisableSecondaryDNSPrimaryZoneDisableOutgoingZoneTransfersResponse.Message>;

  /**
   * The zone transfer status of a primary zone
   */
  result?: string;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace DisableSecondaryDNSPrimaryZoneDisableOutgoingZoneTransfersResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export namespace Disables {
  export import DisableSecondaryDNSPrimaryZoneDisableOutgoingZoneTransfersResponse = DisablesAPI.DisableSecondaryDNSPrimaryZoneDisableOutgoingZoneTransfersResponse;
}
