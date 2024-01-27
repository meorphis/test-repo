// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as StatusesAPI from 'cloudflare/resources/accounts/addresses/prefixes/bgps/statuses';

export class Statuses extends APIResource {
  /**
   * List the current advertisement state for a prefix.
   */
  ipAddressManagementDynamicAdvertisementGetAdvertisementStatus(
    accountIdentifier: string,
    prefixIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StatusIPAddressManagementDynamicAdvertisementGetAdvertisementStatusResponse> {
    return this._client.get(
      `/accounts/${accountIdentifier}/addressing/prefixes/${prefixIdentifier}/bgp/status`,
      options,
    );
  }

  /**
   * Advertise or withdraw BGP route for a prefix.
   */
  ipAddressManagementDynamicAdvertisementUpdatePrefixDynamicAdvertisementStatus(
    accountIdentifier: string,
    prefixIdentifier: string,
    body: StatusIPAddressManagementDynamicAdvertisementUpdatePrefixDynamicAdvertisementStatusParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StatusIPAddressManagementDynamicAdvertisementUpdatePrefixDynamicAdvertisementStatusResponse> {
    return this._client.patch(
      `/accounts/${accountIdentifier}/addressing/prefixes/${prefixIdentifier}/bgp/status`,
      { body, ...options },
    );
  }
}

export interface StatusIPAddressManagementDynamicAdvertisementGetAdvertisementStatusResponse {
  errors?: Array<StatusIPAddressManagementDynamicAdvertisementGetAdvertisementStatusResponse.Error>;

  messages?: Array<StatusIPAddressManagementDynamicAdvertisementGetAdvertisementStatusResponse.Message>;

  result?: StatusIPAddressManagementDynamicAdvertisementGetAdvertisementStatusResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace StatusIPAddressManagementDynamicAdvertisementGetAdvertisementStatusResponse {
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
     * Enablement of prefix advertisement to the Internet.
     */
    advertised?: boolean;

    /**
     * Last time the advertisement status was changed. This field is only not 'null' if
     * on demand is enabled.
     */
    advertised_modified_at?: string | null;
  }
}

export interface StatusIPAddressManagementDynamicAdvertisementUpdatePrefixDynamicAdvertisementStatusResponse {
  errors?: Array<StatusIPAddressManagementDynamicAdvertisementUpdatePrefixDynamicAdvertisementStatusResponse.Error>;

  messages?: Array<StatusIPAddressManagementDynamicAdvertisementUpdatePrefixDynamicAdvertisementStatusResponse.Message>;

  result?: StatusIPAddressManagementDynamicAdvertisementUpdatePrefixDynamicAdvertisementStatusResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace StatusIPAddressManagementDynamicAdvertisementUpdatePrefixDynamicAdvertisementStatusResponse {
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
     * Enablement of prefix advertisement to the Internet.
     */
    advertised?: boolean;

    /**
     * Last time the advertisement status was changed. This field is only not 'null' if
     * on demand is enabled.
     */
    advertised_modified_at?: string | null;
  }
}

export interface StatusIPAddressManagementDynamicAdvertisementUpdatePrefixDynamicAdvertisementStatusParams {
  /**
   * Enablement of prefix advertisement to the Internet.
   */
  advertised: boolean;
}

export namespace Statuses {
  export import StatusIPAddressManagementDynamicAdvertisementGetAdvertisementStatusResponse = StatusesAPI.StatusIPAddressManagementDynamicAdvertisementGetAdvertisementStatusResponse;
  export import StatusIPAddressManagementDynamicAdvertisementUpdatePrefixDynamicAdvertisementStatusResponse = StatusesAPI.StatusIPAddressManagementDynamicAdvertisementUpdatePrefixDynamicAdvertisementStatusResponse;
  export import StatusIPAddressManagementDynamicAdvertisementUpdatePrefixDynamicAdvertisementStatusParams = StatusesAPI.StatusIPAddressManagementDynamicAdvertisementUpdatePrefixDynamicAdvertisementStatusParams;
}
