// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as OwnershipsAPI from 'cloudflare/resources/accounts/logpushes/ownerships/ownerships';
import * as ValidatesAPI from 'cloudflare/resources/accounts/logpushes/ownerships/validates';

export class Ownerships extends APIResource {
  validates: ValidatesAPI.Validates = new ValidatesAPI.Validates(this._client);

  /**
   * Gets a new ownership challenge sent to your destination.
   */
  postAccountsAccountIdentifierLogpushOwnership(
    accountIdentifier: string,
    body: OwnershipPostAccountsAccountIdentifierLogpushOwnershipParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OwnershipPostAccountsAccountIdentifierLogpushOwnershipResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/logpush/ownership`, { body, ...options });
  }
}

export interface OwnershipPostAccountsAccountIdentifierLogpushOwnershipResponse {
  errors?: Array<OwnershipPostAccountsAccountIdentifierLogpushOwnershipResponse.Error>;

  messages?: Array<OwnershipPostAccountsAccountIdentifierLogpushOwnershipResponse.Message>;

  result?: OwnershipPostAccountsAccountIdentifierLogpushOwnershipResponse.Result | null;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace OwnershipPostAccountsAccountIdentifierLogpushOwnershipResponse {
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

export interface OwnershipPostAccountsAccountIdentifierLogpushOwnershipParams {
  /**
   * Uniquely identifies a resource (such as an s3 bucket) where data will be pushed.
   * Additional configuration parameters supported by the destination may be
   * included.
   */
  destination_conf: string;
}

export namespace Ownerships {
  export import OwnershipPostAccountsAccountIdentifierLogpushOwnershipResponse = OwnershipsAPI.OwnershipPostAccountsAccountIdentifierLogpushOwnershipResponse;
  export import OwnershipPostAccountsAccountIdentifierLogpushOwnershipParams = OwnershipsAPI.OwnershipPostAccountsAccountIdentifierLogpushOwnershipParams;
  export import Validates = ValidatesAPI.Validates;
  export import ValidatePostAccountsAccountIdentifierLogpushOwnershipValidateResponse = ValidatesAPI.ValidatePostAccountsAccountIdentifierLogpushOwnershipValidateResponse;
  export import ValidatePostAccountsAccountIdentifierLogpushOwnershipValidateParams = ValidatesAPI.ValidatePostAccountsAccountIdentifierLogpushOwnershipValidateParams;
}
