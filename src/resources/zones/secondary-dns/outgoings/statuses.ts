// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as StatusesAPI from 'cloudflare/resources/zones/secondary-dns/outgoings/statuses';

export class Statuses extends APIResource {
  /**
   * Get primary zone transfer status.
   */
  secondaryDNSPrimaryZoneGetOutgoingZoneTransferStatus(
    zoneIdentifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StatusSecondaryDNSPrimaryZoneGetOutgoingZoneTransferStatusResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/secondary_dns/outgoing/status`, options);
  }
}

export interface StatusSecondaryDNSPrimaryZoneGetOutgoingZoneTransferStatusResponse {
  errors?: Array<StatusSecondaryDNSPrimaryZoneGetOutgoingZoneTransferStatusResponse.Error>;

  messages?: Array<StatusSecondaryDNSPrimaryZoneGetOutgoingZoneTransferStatusResponse.Message>;

  /**
   * The zone transfer status of a primary zone
   */
  result?: string;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace StatusSecondaryDNSPrimaryZoneGetOutgoingZoneTransferStatusResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export namespace Statuses {
  export import StatusSecondaryDNSPrimaryZoneGetOutgoingZoneTransferStatusResponse = StatusesAPI.StatusSecondaryDNSPrimaryZoneGetOutgoingZoneTransferStatusResponse;
}
