// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ForceAxfrsAPI from 'cloudflare/resources/zones/secondary-dns/force-axfrs';

export class ForceAxfrs extends APIResource {
  /**
   * Sends AXFR zone transfer request to primary nameserver(s).
   */
  secondaryDNSSecondaryZoneForceAxfr(
    zoneIdentifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ForceAxfrSecondaryDNSSecondaryZoneForceAxfrResponse> {
    return this._client.post(`/zones/${zoneIdentifier}/secondary_dns/force_axfr`, options);
  }
}

export interface ForceAxfrSecondaryDNSSecondaryZoneForceAxfrResponse {
  errors?: Array<ForceAxfrSecondaryDNSSecondaryZoneForceAxfrResponse.Error>;

  messages?: Array<ForceAxfrSecondaryDNSSecondaryZoneForceAxfrResponse.Message>;

  /**
   * When force_axfr query parameter is set to true, the response is a simple string
   */
  result?: string;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ForceAxfrSecondaryDNSSecondaryZoneForceAxfrResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export namespace ForceAxfrs {
  export import ForceAxfrSecondaryDNSSecondaryZoneForceAxfrResponse = ForceAxfrsAPI.ForceAxfrSecondaryDNSSecondaryZoneForceAxfrResponse;
}
