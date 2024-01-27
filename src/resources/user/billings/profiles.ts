// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ProfilesAPI from 'cloudflare/resources/user/billings/profiles';

export class Profiles extends APIResource {
  /**
   * Accesses your billing profile object.
   */
  userBillingProfileBillingProfileDetails(
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProfileUserBillingProfileBillingProfileDetailsResponse> {
    return this._client.get('/user/billing/profile', options);
  }
}

export interface ProfileUserBillingProfileBillingProfileDetailsResponse {
  errors?: Array<ProfileUserBillingProfileBillingProfileDetailsResponse.Error>;

  messages?: Array<ProfileUserBillingProfileBillingProfileDetailsResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ProfileUserBillingProfileBillingProfileDetailsResponse {
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
  export import ProfileUserBillingProfileBillingProfileDetailsResponse = ProfilesAPI.ProfileUserBillingProfileBillingProfileDetailsResponse;
}
