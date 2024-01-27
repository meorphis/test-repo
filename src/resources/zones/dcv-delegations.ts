// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DcvDelegationsAPI from 'cloudflare/resources/zones/dcv-delegations';

export class DcvDelegations extends APIResource {
  /**
   * Retrieve the account and zone specific unique identifier used as part of the
   * CNAME target for DCV Delegation.
   */
  uuid(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<DcvDelegationUuidResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/dcv_delegation/uuid`, options);
  }
}

export interface DcvDelegationUuidResponse {
  errors?: Array<DcvDelegationUuidResponse.Error>;

  messages?: Array<DcvDelegationUuidResponse.Message>;

  result?: DcvDelegationUuidResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace DcvDelegationUuidResponse {
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
     * The DCV Delegation unique identifier.
     */
    uuid?: string;
  }
}

export namespace DcvDelegations {
  export import DcvDelegationUuidResponse = DcvDelegationsAPI.DcvDelegationUuidResponse;
}
