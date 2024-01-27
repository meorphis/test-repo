// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as EnablesAPI from 'cloudflare/resources/zones/secondary-dns/outgoings/enables';

export class Enables extends APIResource {
  /**
   * Enable outgoing zone transfers for primary zone.
   */
  secondaryDNSPrimaryZoneEnableOutgoingZoneTransfers(
    zoneIdentifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EnableSecondaryDNSPrimaryZoneEnableOutgoingZoneTransfersResponse> {
    return this._client.post(`/zones/${zoneIdentifier}/secondary_dns/outgoing/enable`, options);
  }
}

export interface EnableSecondaryDNSPrimaryZoneEnableOutgoingZoneTransfersResponse {
  errors?: Array<EnableSecondaryDNSPrimaryZoneEnableOutgoingZoneTransfersResponse.Error>;

  messages?: Array<EnableSecondaryDNSPrimaryZoneEnableOutgoingZoneTransfersResponse.Message>;

  /**
   * The zone transfer status of a primary zone
   */
  result?: string;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace EnableSecondaryDNSPrimaryZoneEnableOutgoingZoneTransfersResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export namespace Enables {
  export import EnableSecondaryDNSPrimaryZoneEnableOutgoingZoneTransfersResponse = EnablesAPI.EnableSecondaryDNSPrimaryZoneEnableOutgoingZoneTransfersResponse;
}
