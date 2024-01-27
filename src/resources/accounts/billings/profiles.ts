// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ProfilesAPI from 'cloudflare/resources/accounts/billings/profiles';

export class Profiles extends APIResource {
  /**
   * Gets the current billing profile for the account.
   */
  accountBillingProfileBillingProfileDetails(
    accountIdentifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProfileAccountBillingProfileBillingProfileDetailsResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/billing/profile`, options);
  }
}

export interface ProfileAccountBillingProfileBillingProfileDetailsResponse {
  errors?: Array<ProfileAccountBillingProfileBillingProfileDetailsResponse.Error>;

  messages?: Array<ProfileAccountBillingProfileBillingProfileDetailsResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ProfileAccountBillingProfileBillingProfileDetailsResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export namespace Profiles {
  export import ProfileAccountBillingProfileBillingProfileDetailsResponse = ProfilesAPI.ProfileAccountBillingProfileBillingProfileDetailsResponse;
}
