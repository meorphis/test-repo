// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ValidatesAPI from 'cloudflare/resources/zones/logpushes/ownerships/validates';

export class Validates extends APIResource {
  /**
   * Validates ownership challenge of the destination.
   */
  postZonesZoneIdentifierLogpushOwnershipValidate(
    zoneIdentifier: string,
    body: ValidatePostZonesZoneIdentifierLogpushOwnershipValidateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ValidatePostZonesZoneIdentifierLogpushOwnershipValidateResponse> {
    return this._client.post(`/zones/${zoneIdentifier}/logpush/ownership/validate`, { body, ...options });
  }
}

export interface ValidatePostZonesZoneIdentifierLogpushOwnershipValidateResponse {
  errors?: Array<ValidatePostZonesZoneIdentifierLogpushOwnershipValidateResponse.Error>;

  messages?: Array<ValidatePostZonesZoneIdentifierLogpushOwnershipValidateResponse.Message>;

  result?: ValidatePostZonesZoneIdentifierLogpushOwnershipValidateResponse.Result | null;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ValidatePostZonesZoneIdentifierLogpushOwnershipValidateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    valid?: boolean;
  }
}

export interface ValidatePostZonesZoneIdentifierLogpushOwnershipValidateParams {
  /**
   * Uniquely identifies a resource (such as an s3 bucket) where data will be pushed.
   * Additional configuration parameters supported by the destination may be
   * included.
   */
  destination_conf: string;

  /**
   * Ownership challenge token to prove destination ownership.
   */
  ownership_challenge: string;
}

export namespace Validates {
  export import ValidatePostZonesZoneIdentifierLogpushOwnershipValidateResponse = ValidatesAPI.ValidatePostZonesZoneIdentifierLogpushOwnershipValidateResponse;
  export import ValidatePostZonesZoneIdentifierLogpushOwnershipValidateParams = ValidatesAPI.ValidatePostZonesZoneIdentifierLogpushOwnershipValidateParams;
}
