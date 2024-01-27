// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ValidatesAPI from 'cloudflare/resources/accounts/logpushes/ownerships/validates';

export class Validates extends APIResource {
  /**
   * Validates ownership challenge of the destination.
   */
  postAccountsAccountIdentifierLogpushOwnershipValidate(
    accountIdentifier: string,
    body: ValidatePostAccountsAccountIdentifierLogpushOwnershipValidateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ValidatePostAccountsAccountIdentifierLogpushOwnershipValidateResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/logpush/ownership/validate`, {
      body,
      ...options,
    });
  }
}

export interface ValidatePostAccountsAccountIdentifierLogpushOwnershipValidateResponse {
  errors?: Array<ValidatePostAccountsAccountIdentifierLogpushOwnershipValidateResponse.Error>;

  messages?: Array<ValidatePostAccountsAccountIdentifierLogpushOwnershipValidateResponse.Message>;

  result?: ValidatePostAccountsAccountIdentifierLogpushOwnershipValidateResponse.Result | null;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ValidatePostAccountsAccountIdentifierLogpushOwnershipValidateResponse {
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

export interface ValidatePostAccountsAccountIdentifierLogpushOwnershipValidateParams {
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
  export import ValidatePostAccountsAccountIdentifierLogpushOwnershipValidateResponse = ValidatesAPI.ValidatePostAccountsAccountIdentifierLogpushOwnershipValidateResponse;
  export import ValidatePostAccountsAccountIdentifierLogpushOwnershipValidateParams = ValidatesAPI.ValidatePostAccountsAccountIdentifierLogpushOwnershipValidateParams;
}
