// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as OriginsAPI from 'cloudflare/resources/accounts/logpushes/validates/origins';

export class Origins extends APIResource {
  /**
   * Validates logpull origin with logpull_options.
   */
  postAccountsAccountIdentifierLogpushValidateOrigin(
    accountIdentifier: string,
    body: OriginPostAccountsAccountIdentifierLogpushValidateOriginParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OriginPostAccountsAccountIdentifierLogpushValidateOriginResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/logpush/validate/origin`, { body, ...options });
  }
}

export interface OriginPostAccountsAccountIdentifierLogpushValidateOriginResponse {
  errors?: Array<OriginPostAccountsAccountIdentifierLogpushValidateOriginResponse.Error>;

  messages?: Array<OriginPostAccountsAccountIdentifierLogpushValidateOriginResponse.Message>;

  result?: OriginPostAccountsAccountIdentifierLogpushValidateOriginResponse.Result | null;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace OriginPostAccountsAccountIdentifierLogpushValidateOriginResponse {
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

export interface OriginPostAccountsAccountIdentifierLogpushValidateOriginParams {
  /**
   * Configuration string. It specifies things like requested fields and timestamp
   * formats. If migrating from the logpull api, copy the url (full url or just the
   * query string) of your call here, and logpush will keep on making this call for
   * you, setting start and end times appropriately.
   */
  logpull_options: string | null;
}

export namespace Origins {
  export import OriginPostAccountsAccountIdentifierLogpushValidateOriginResponse = OriginsAPI.OriginPostAccountsAccountIdentifierLogpushValidateOriginResponse;
  export import OriginPostAccountsAccountIdentifierLogpushValidateOriginParams = OriginsAPI.OriginPostAccountsAccountIdentifierLogpushValidateOriginParams;
}
