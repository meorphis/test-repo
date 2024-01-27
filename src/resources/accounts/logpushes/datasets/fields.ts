// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as FieldsAPI from 'cloudflare/resources/accounts/logpushes/datasets/fields';

export class Fields extends APIResource {
  /**
   * Lists all fields available for a dataset. The response result is an object with
   * key-value pairs, where keys are field names, and values are descriptions.
   */
  getAccountsAccountIdentifierLogpushDatasetsDatasetFields(
    accountIdentifier: string,
    dataset: string | null,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FieldGetAccountsAccountIdentifierLogpushDatasetsDatasetFieldsResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/logpush/datasets/${dataset}/fields`, options);
  }
}

export interface FieldGetAccountsAccountIdentifierLogpushDatasetsDatasetFieldsResponse {
  errors?: Array<FieldGetAccountsAccountIdentifierLogpushDatasetsDatasetFieldsResponse.Error>;

  messages?: Array<FieldGetAccountsAccountIdentifierLogpushDatasetsDatasetFieldsResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace FieldGetAccountsAccountIdentifierLogpushDatasetsDatasetFieldsResponse {
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
  export import FieldGetAccountsAccountIdentifierLogpushDatasetsDatasetFieldsResponse = FieldsAPI.FieldGetAccountsAccountIdentifierLogpushDatasetsDatasetFieldsResponse;
}
