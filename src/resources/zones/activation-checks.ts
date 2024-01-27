// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ActivationChecksAPI from 'cloudflare/resources/zones/activation-checks';

export class ActivationChecks extends APIResource {
  /**
   * Triggeres a new activation check for a PENDING Zone. This can be triggered every
   * 5 min for paygo/ent customers, every hour for FREE Zones.
   */
  putZonesZoneIdActivationCheck(
    zoneId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActivationCheckPutZonesZoneIDActivationCheckResponse> {
    return this._client.put(`/zones/${zoneId}/activation_check`, options);
  }
}

export interface ActivationCheckPutZonesZoneIDActivationCheckResponse {
  errors?: Array<ActivationCheckPutZonesZoneIDActivationCheckResponse.Error>;

  messages?: Array<ActivationCheckPutZonesZoneIDActivationCheckResponse.Message>;

  result?: ActivationCheckPutZonesZoneIDActivationCheckResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ActivationCheckPutZonesZoneIDActivationCheckResponse {
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
  }
}

export namespace ActivationChecks {
  export import ActivationCheckPutZonesZoneIDActivationCheckResponse = ActivationChecksAPI.ActivationCheckPutZonesZoneIDActivationCheckResponse;
}
