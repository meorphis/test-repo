// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PredefinedsAPI from 'cloudflare/resources/accounts/dlp/profiles/predefineds';

export class Predefineds extends APIResource {
  /**
   * Fetches a predefined DLP profile.
   */
  retrieve(
    accountIdentifier: string,
    profileId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PredefinedRetrieveResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/dlp/profiles/predefined/${profileId}`, options);
  }

  /**
   * Updates a DLP predefined profile. Only supports enabling/disabling entries.
   */
  update(
    accountIdentifier: string,
    profileId: string,
    body: PredefinedUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PredefinedUpdateResponse> {
    return this._client.put(`/accounts/${accountIdentifier}/dlp/profiles/predefined/${profileId}`, {
      body,
      ...options,
    });
  }
}

export interface PredefinedRetrieveResponse {
  errors?: Array<PredefinedRetrieveResponse.Error>;

  messages?: Array<PredefinedRetrieveResponse.Message>;

  result?: PredefinedRetrieveResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace PredefinedRetrieveResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    /**
     * UUID
     */
    id?: string;

    /**
     * Related DLP policies will trigger when the match count exceeds the number set.
     */
    allowed_match_count?: number;

    /**
     * The entries for this profile.
     */
    entries?: Array<Result.Entry>;

    /**
     * The name of the profile.
     */
    name?: string;

    /**
     * The type of the profile.
     */
    type?: 'predefined';
  }

  export namespace Result {
    /**
     * A predefined entry that matches a profile
     */
    export interface Entry {
      /**
       * UUID
       */
      id?: string;

      /**
       * Whether the entry is enabled or not.
       */
      enabled?: boolean;

      /**
       * The name of the entry.
       */
      name?: string;

      /**
       * ID of the parent profile
       */
      profile_id?: unknown;
    }
  }
}

export interface PredefinedUpdateResponse {
  /**
   * UUID
   */
  id?: string;

  /**
   * Related DLP policies will trigger when the match count exceeds the number set.
   */
  allowed_match_count?: number;

  /**
   * The entries for this profile.
   */
  entries?: Array<PredefinedUpdateResponse.Entry>;

  /**
   * The name of the profile.
   */
  name?: string;

  /**
   * The type of the profile.
   */
  type?: 'predefined';
}

export namespace PredefinedUpdateResponse {
  /**
   * A predefined entry that matches a profile
   */
  export interface Entry {
    /**
     * UUID
     */
    id?: string;

    /**
     * Whether the entry is enabled or not.
     */
    enabled?: boolean;

    /**
     * The name of the entry.
     */
    name?: string;

    /**
     * ID of the parent profile
     */
    profile_id?: unknown;
  }
}

export interface PredefinedUpdateParams {
  /**
   * Related DLP policies will trigger when the match count exceeds the number set.
   */
  allowed_match_count?: number;

  /**
   * The entries for this profile.
   */
  entries?: Array<PredefinedUpdateParams.Entry>;
}

export namespace PredefinedUpdateParams {
  export interface Entry {
    /**
     * Whether the entry is enabled or not.
     */
    enabled?: boolean;
  }
}

export namespace Predefineds {
  export import PredefinedRetrieveResponse = PredefinedsAPI.PredefinedRetrieveResponse;
  export import PredefinedUpdateResponse = PredefinedsAPI.PredefinedUpdateResponse;
  export import PredefinedUpdateParams = PredefinedsAPI.PredefinedUpdateParams;
}
