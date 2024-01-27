// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ExistsAPI from 'cloudflare/resources/accounts/logpushes/validates/destinations/exists';

export class Exists extends APIResource {
  /**
   * Checks if there is an existing job with a destination.
   */
  deleteAccountsAccountIdentifierLogpushValidateDestinationExists(
    accountIdentifier: string,
    body: ExistDeleteAccountsAccountIdentifierLogpushValidateDestinationExistsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExistDeleteAccountsAccountIdentifierLogpushValidateDestinationExistsResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/logpush/validate/destination/exists`, {
      body,
      ...options,
    });
  }
}

export interface ExistDeleteAccountsAccountIdentifierLogpushValidateDestinationExistsResponse {
  errors?: Array<ExistDeleteAccountsAccountIdentifierLogpushValidateDestinationExistsResponse.Error>;

  messages?: Array<ExistDeleteAccountsAccountIdentifierLogpushValidateDestinationExistsResponse.Message>;

  result?: ExistDeleteAccountsAccountIdentifierLogpushValidateDestinationExistsResponse.Result | null;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ExistDeleteAccountsAccountIdentifierLogpushValidateDestinationExistsResponse {
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

export interface ExistDeleteAccountsAccountIdentifierLogpushValidateDestinationExistsParams {
  /**
   * Uniquely identifies a resource (such as an s3 bucket) where data will be pushed.
   * Additional configuration parameters supported by the destination may be
   * included.
   */
  destination_conf: string;
}

export namespace Exists {
  export import ExistDeleteAccountsAccountIdentifierLogpushValidateDestinationExistsResponse = ExistsAPI.ExistDeleteAccountsAccountIdentifierLogpushValidateDestinationExistsResponse;
  export import ExistDeleteAccountsAccountIdentifierLogpushValidateDestinationExistsParams = ExistsAPI.ExistDeleteAccountsAccountIdentifierLogpushValidateDestinationExistsParams;
}
