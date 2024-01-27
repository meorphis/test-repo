// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ServicesAPI from 'cloudflare/resources/accounts/addressing/services';

export class Services extends APIResource {
  /**
   * Bring-Your-Own IP (BYOIP) prefixes onboarded to Cloudflare must be bound to a
   * service running on the Cloudflare network to enable a Cloudflare product on the
   * IP addresses. This endpoint can be used as a reference of available services on
   * the Cloudflare network, and their service IDs.
   */
  list(accountIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<ServiceListResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/addressing/services`, options);
  }
}

export interface ServiceListResponse {
  errors?: Array<ServiceListResponse.Error>;

  messages?: Array<ServiceListResponse.Message>;

  result?: Array<ServiceListResponse.Result>;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ServiceListResponse {
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

    /**
     * Name of a service running on the Cloudflare network
     */
    name?: string;
  }
}

export namespace Services {
  export import ServiceListResponse = ServicesAPI.ServiceListResponse;
}
