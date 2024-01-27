// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as OwnershipsAPI from 'cloudflare/resources/zones/logpushes/ownerships/ownerships';
import * as ValidatesAPI from 'cloudflare/resources/zones/logpushes/ownerships/validates';

export class Ownerships extends APIResource {
  validates: ValidatesAPI.Validates = new ValidatesAPI.Validates(this._client);

  /**
   * Gets a new ownership challenge sent to your destination.
   */
  postZonesZoneIdentifierLogpushOwnership(
    zoneIdentifier: string,
    body: OwnershipPostZonesZoneIdentifierLogpushOwnershipParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OwnershipPostZonesZoneIdentifierLogpushOwnershipResponse> {
    return this._client.post(`/zones/${zoneIdentifier}/logpush/ownership`, { body, ...options });
  }
}

export interface OwnershipPostZonesZoneIdentifierLogpushOwnershipResponse {
  errors?: Array<OwnershipPostZonesZoneIdentifierLogpushOwnershipResponse.Error>;

  messages?: Array<OwnershipPostZonesZoneIdentifierLogpushOwnershipResponse.Message>;

  result?: OwnershipPostZonesZoneIdentifierLogpushOwnershipResponse.Result | null;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace OwnershipPostZonesZoneIdentifierLogpushOwnershipResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    filename?: string;

    message?: string;

    valid?: boolean;
  }
}

export interface OwnershipPostZonesZoneIdentifierLogpushOwnershipParams {
  /**
   * Uniquely identifies a resource (such as an s3 bucket) where data will be pushed.
   * Additional configuration parameters supported by the destination may be
   * included.
   */
  destination_conf: string;
}

export namespace Ownerships {
  export import OwnershipPostZonesZoneIdentifierLogpushOwnershipResponse = OwnershipsAPI.OwnershipPostZonesZoneIdentifierLogpushOwnershipResponse;
  export import OwnershipPostZonesZoneIdentifierLogpushOwnershipParams = OwnershipsAPI.OwnershipPostZonesZoneIdentifierLogpushOwnershipParams;
  export import Validates = ValidatesAPI.Validates;
  export import ValidatePostZonesZoneIdentifierLogpushOwnershipValidateResponse = ValidatesAPI.ValidatePostZonesZoneIdentifierLogpushOwnershipValidateResponse;
  export import ValidatePostZonesZoneIdentifierLogpushOwnershipValidateParams = ValidatesAPI.ValidatePostZonesZoneIdentifierLogpushOwnershipValidateParams;
}
