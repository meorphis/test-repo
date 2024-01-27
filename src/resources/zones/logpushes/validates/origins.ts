// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as OriginsAPI from 'cloudflare/resources/zones/logpushes/validates/origins';

export class Origins extends APIResource {
  /**
   * Validates logpull origin with logpull_options.
   */
  postZonesZoneIdentifierLogpushValidateOrigin(
    zoneIdentifier: string,
    body: OriginPostZonesZoneIdentifierLogpushValidateOriginParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OriginPostZonesZoneIdentifierLogpushValidateOriginResponse> {
    return this._client.post(`/zones/${zoneIdentifier}/logpush/validate/origin`, { body, ...options });
  }
}

export interface OriginPostZonesZoneIdentifierLogpushValidateOriginResponse {
  errors?: Array<OriginPostZonesZoneIdentifierLogpushValidateOriginResponse.Error>;

  messages?: Array<OriginPostZonesZoneIdentifierLogpushValidateOriginResponse.Message>;

  result?: OriginPostZonesZoneIdentifierLogpushValidateOriginResponse.Result | null;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace OriginPostZonesZoneIdentifierLogpushValidateOriginResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    message?: string;

    valid?: boolean;
  }
}

export interface OriginPostZonesZoneIdentifierLogpushValidateOriginParams {
  /**
   * Configuration string. It specifies things like requested fields and timestamp
   * formats. If migrating from the logpull api, copy the url (full url or just the
   * query string) of your call here, and logpush will keep on making this call for
   * you, setting start and end times appropriately.
   */
  logpull_options: string | null;
}

export namespace Origins {
  export import OriginPostZonesZoneIdentifierLogpushValidateOriginResponse = OriginsAPI.OriginPostZonesZoneIdentifierLogpushValidateOriginResponse;
  export import OriginPostZonesZoneIdentifierLogpushValidateOriginParams = OriginsAPI.OriginPostZonesZoneIdentifierLogpushValidateOriginParams;
}
