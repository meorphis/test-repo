// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ExistsAPI from 'cloudflare/resources/zones/logpushes/validates/destinations/exists';

export class Exists extends APIResource {
  /**
   * Checks if there is an existing job with a destination.
   */
  postZonesZoneIdentifierLogpushValidateDestinationExists(
    zoneIdentifier: string,
    body: ExistPostZonesZoneIdentifierLogpushValidateDestinationExistsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExistPostZonesZoneIdentifierLogpushValidateDestinationExistsResponse> {
    return this._client.post(`/zones/${zoneIdentifier}/logpush/validate/destination/exists`, {
      body,
      ...options,
    });
  }
}

export interface ExistPostZonesZoneIdentifierLogpushValidateDestinationExistsResponse {
  errors?: Array<ExistPostZonesZoneIdentifierLogpushValidateDestinationExistsResponse.Error>;

  messages?: Array<ExistPostZonesZoneIdentifierLogpushValidateDestinationExistsResponse.Message>;

  result?: ExistPostZonesZoneIdentifierLogpushValidateDestinationExistsResponse.Result | null;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ExistPostZonesZoneIdentifierLogpushValidateDestinationExistsResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    exists?: boolean;
  }
}

export interface ExistPostZonesZoneIdentifierLogpushValidateDestinationExistsParams {
  /**
   * Uniquely identifies a resource (such as an s3 bucket) where data will be pushed.
   * Additional configuration parameters supported by the destination may be
   * included.
   */
  destination_conf: string;
}

export namespace Exists {
  export import ExistPostZonesZoneIdentifierLogpushValidateDestinationExistsResponse = ExistsAPI.ExistPostZonesZoneIdentifierLogpushValidateDestinationExistsResponse;
  export import ExistPostZonesZoneIdentifierLogpushValidateDestinationExistsParams = ExistsAPI.ExistPostZonesZoneIdentifierLogpushValidateDestinationExistsParams;
}
