// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ForceNotifiesAPI from 'cloudflare/resources/zones/secondary-dns/outgoings/force-notifies';

export class ForceNotifies extends APIResource {
  /**
   * Notifies the secondary nameserver(s) and clears IXFR backlog of primary zone.
   */
  secondaryDNSPrimaryZoneForceDNSNotify(
    zoneIdentifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ForceNotifySecondaryDNSPrimaryZoneForceDNSNotifyResponse> {
    return this._client.post(`/zones/${zoneIdentifier}/secondary_dns/outgoing/force_notify`, options);
  }
}

export interface ForceNotifySecondaryDNSPrimaryZoneForceDNSNotifyResponse {
  errors?: Array<ForceNotifySecondaryDNSPrimaryZoneForceDNSNotifyResponse.Error>;

  messages?: Array<ForceNotifySecondaryDNSPrimaryZoneForceDNSNotifyResponse.Message>;

  /**
   * When force_notify query parameter is set to true, the response is a simple
   * string
   */
  result?: string;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ForceNotifySecondaryDNSPrimaryZoneForceDNSNotifyResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export namespace ForceNotifies {
  export import ForceNotifySecondaryDNSPrimaryZoneForceDNSNotifyResponse = ForceNotifiesAPI.ForceNotifySecondaryDNSPrimaryZoneForceDNSNotifyResponse;
}
