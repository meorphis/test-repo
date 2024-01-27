// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as FieldsAPI from 'cloudflare/resources/zones/logpushes/datasets/fields';

export class Fields extends APIResource {
  /**
   * Lists all fields available for a dataset. The response result is an object with
   * key-value pairs, where keys are field names, and values are descriptions.
   */
  getZonesZoneIdentifierLogpushDatasetsDatasetFields(
    zoneIdentifier: string,
    dataset: string | null,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FieldGetZonesZoneIdentifierLogpushDatasetsDatasetFieldsResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/logpush/datasets/${dataset}/fields`, options);
  }
}

export interface FieldGetZonesZoneIdentifierLogpushDatasetsDatasetFieldsResponse {
  errors?: Array<FieldGetZonesZoneIdentifierLogpushDatasetsDatasetFieldsResponse.Error>;

  messages?: Array<FieldGetZonesZoneIdentifierLogpushDatasetsDatasetFieldsResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace FieldGetZonesZoneIdentifierLogpushDatasetsDatasetFieldsResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export namespace Fields {
  export import FieldGetZonesZoneIdentifierLogpushDatasetsDatasetFieldsResponse = FieldsAPI.FieldGetZonesZoneIdentifierLogpushDatasetsDatasetFieldsResponse;
}
