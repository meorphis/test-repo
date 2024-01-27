// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as CustomsAPI from 'cloudflare/resources/accounts/dlp/profiles/customs';

export class Customs extends APIResource {
  /**
   * Fetches a custom DLP profile.
   */
  retrieve(
    accountIdentifier: string,
    profileId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomRetrieveResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/dlp/profiles/custom/${profileId}`, options);
  }

  /**
   * Updates a DLP custom profile.
   */
  update(
    accountIdentifier: string,
    profileId: string,
    body: CustomUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomUpdateResponse> {
    return this._client.put(`/accounts/${accountIdentifier}/dlp/profiles/custom/${profileId}`, {
      body,
      ...options,
    });
  }

  /**
   * Deletes a DLP custom profile.
   */
  delete(
    accountIdentifier: string,
    profileId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomDeleteResponse> {
    return this._client.delete(`/accounts/${accountIdentifier}/dlp/profiles/custom/${profileId}`, options);
  }

  /**
   * Creates a set of DLP custom profiles.
   */
  dlpProfilesCreateCustomProfiles(
    accountIdentifier: string,
    body: CustomDlpProfilesCreateCustomProfilesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomDlpProfilesCreateCustomProfilesResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/dlp/profiles/custom`, { body, ...options });
  }
}

export interface CustomRetrieveResponse {
  errors?: Array<CustomRetrieveResponse.Error>;

  messages?: Array<CustomRetrieveResponse.Message>;

  result?: CustomRetrieveResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace CustomRetrieveResponse {
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

    created_at?: string;

    /**
     * The description of the profile.
     */
    description?: string;

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
    type?: 'custom';

    updated_at?: string;
  }

  export namespace Result {
    /**
     * A custom entry that matches a profile
     */
    export interface Entry {
      /**
       * UUID
       */
      id?: string;

      created_at?: string;

      /**
       * Whether the entry is enabled or not.
       */
      enabled?: boolean;

      /**
       * The name of the entry.
       */
      name?: string;

      /**
       * A pattern that matches an entry
       */
      pattern?: Entry.Pattern;

      /**
       * ID of the parent profile
       */
      profile_id?: unknown;

      updated_at?: string;
    }

    export namespace Entry {
      /**
       * A pattern that matches an entry
       */
      export interface Pattern {
        /**
         * The regex pattern.
         */
        regex: string;

        /**
         * Validation algorithm for the pattern. This algorithm will get run on potential
         * matches, and if it returns false, the entry will not be matched.
         */
        validation?: 'luhn';
      }
    }
  }
}

export interface CustomUpdateResponse {
  /**
   * UUID
   */
  id?: string;

  /**
   * Related DLP policies will trigger when the match count exceeds the number set.
   */
  allowed_match_count?: number;

  created_at?: string;

  /**
   * The description of the profile.
   */
  description?: string;

  /**
   * The entries for this profile.
   */
  entries?: Array<CustomUpdateResponse.Entry>;

  /**
   * The name of the profile.
   */
  name?: string;

  /**
   * The type of the profile.
   */
  type?: 'custom';

  updated_at?: string;
}

export namespace CustomUpdateResponse {
  /**
   * A custom entry that matches a profile
   */
  export interface Entry {
    /**
     * UUID
     */
    id?: string;

    created_at?: string;

    /**
     * Whether the entry is enabled or not.
     */
    enabled?: boolean;

    /**
     * The name of the entry.
     */
    name?: string;

    /**
     * A pattern that matches an entry
     */
    pattern?: Entry.Pattern;

    /**
     * ID of the parent profile
     */
    profile_id?: unknown;

    updated_at?: string;
  }

  export namespace Entry {
    /**
     * A pattern that matches an entry
     */
    export interface Pattern {
      /**
       * The regex pattern.
       */
      regex: string;

      /**
       * Validation algorithm for the pattern. This algorithm will get run on potential
       * matches, and if it returns false, the entry will not be matched.
       */
      validation?: 'luhn';
    }
  }
}

export interface CustomDeleteResponse {
  errors?: Array<CustomDeleteResponse.Error>;

  messages?: Array<CustomDeleteResponse.Message>;

  result?: unknown | string | null;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace CustomDeleteResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface CustomDlpProfilesCreateCustomProfilesResponse {
  errors?: Array<CustomDlpProfilesCreateCustomProfilesResponse.Error>;

  messages?: Array<CustomDlpProfilesCreateCustomProfilesResponse.Message>;

  result?: Array<CustomDlpProfilesCreateCustomProfilesResponse.Result>;

  result_info?: CustomDlpProfilesCreateCustomProfilesResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace CustomDlpProfilesCreateCustomProfilesResponse {
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

    created_at?: string;

    /**
     * The description of the profile.
     */
    description?: string;

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
    type?: 'custom';

    updated_at?: string;
  }

  export namespace Result {
    /**
     * A custom entry that matches a profile
     */
    export interface Entry {
      /**
       * UUID
       */
      id?: string;

      created_at?: string;

      /**
       * Whether the entry is enabled or not.
       */
      enabled?: boolean;

      /**
       * The name of the entry.
       */
      name?: string;

      /**
       * A pattern that matches an entry
       */
      pattern?: Entry.Pattern;

      /**
       * ID of the parent profile
       */
      profile_id?: unknown;

      updated_at?: string;
    }

    export namespace Entry {
      /**
       * A pattern that matches an entry
       */
      export interface Pattern {
        /**
         * The regex pattern.
         */
        regex: string;

        /**
         * Validation algorithm for the pattern. This algorithm will get run on potential
         * matches, and if it returns false, the entry will not be matched.
         */
        validation?: 'luhn';
      }
    }
  }

  export interface ResultInfo {
    /**
     * Total number of results for the requested service
     */
    count?: number;

    /**
     * Current page within paginated list of results
     */
    page?: number;

    /**
     * Number of results per page of results
     */
    per_page?: number;

    /**
     * Total results available without any search parameters
     */
    total_count?: number;
  }
}

export interface CustomUpdateParams {
  /**
   * Related DLP policies will trigger when the match count exceeds the number set.
   */
  allowed_match_count?: number;

  /**
   * The description of the profile.
   */
  description?: string;

  /**
   * The custom entries for this profile. Array elements with IDs are modifying the
   * existing entry with that ID. Elements without ID will create new entries. Any
   * entry not in the list will be deleted.
   */
  entries?: Array<CustomUpdateParams.Entry>;

  /**
   * The name of the profile.
   */
  name?: string;

  /**
   * Entries from other profiles (e.g. pre-defined Cloudflare profiles, or your
   * Microsoft Information Protection profiles).
   */
  shared_entries?: Array<
    CustomUpdateParams.DlpSharedEntryUpdatePredefined | CustomUpdateParams.DlpSharedEntryUpdateIntegration
  >;
}

export namespace CustomUpdateParams {
  /**
   * A custom entry that matches a profile
   */
  export interface Entry {
    /**
     * Whether the entry is enabled or not.
     */
    enabled?: boolean;

    /**
     * The name of the entry.
     */
    name?: string;

    /**
     * A pattern that matches an entry
     */
    pattern?: Entry.Pattern;

    /**
     * ID of the parent profile
     */
    profile_id?: unknown;
  }

  export namespace Entry {
    /**
     * A pattern that matches an entry
     */
    export interface Pattern {
      /**
       * The regex pattern.
       */
      regex: string;

      /**
       * Validation algorithm for the pattern. This algorithm will get run on potential
       * matches, and if it returns false, the entry will not be matched.
       */
      validation?: 'luhn';
    }
  }

  /**
   * Properties of a predefined entry in a custom profile
   */
  export interface DlpSharedEntryUpdatePredefined {
    /**
     * Whether the entry is enabled or not.
     */
    enabled?: boolean;
  }

  /**
   * Properties of an integration entry in a custom profile
   */
  export interface DlpSharedEntryUpdateIntegration {
    /**
     * Whether the entry is enabled or not.
     */
    enabled?: boolean;
  }
}

export interface CustomDlpProfilesCreateCustomProfilesParams {
  profiles: Array<CustomDlpProfilesCreateCustomProfilesParams.Profile>;
}

export namespace CustomDlpProfilesCreateCustomProfilesParams {
  export interface Profile {
    /**
     * Related DLP policies will trigger when the match count exceeds the number set.
     */
    allowed_match_count?: number;

    /**
     * The description of the profile.
     */
    description?: string;

    /**
     * The entries for this profile.
     */
    entries?: Array<Profile.Entry>;

    /**
     * The name of the profile.
     */
    name?: string;
  }

  export namespace Profile {
    /**
     * A custom entry create payload
     */
    export interface Entry {
      /**
       * Whether the entry is enabled or not.
       */
      enabled: boolean;

      /**
       * The name of the entry.
       */
      name: string;

      /**
       * A pattern that matches an entry
       */
      pattern: Entry.Pattern;
    }

    export namespace Entry {
      /**
       * A pattern that matches an entry
       */
      export interface Pattern {
        /**
         * The regex pattern.
         */
        regex: string;

        /**
         * Validation algorithm for the pattern. This algorithm will get run on potential
         * matches, and if it returns false, the entry will not be matched.
         */
        validation?: 'luhn';
      }
    }
  }
}

export namespace Customs {
  export import CustomRetrieveResponse = CustomsAPI.CustomRetrieveResponse;
  export import CustomUpdateResponse = CustomsAPI.CustomUpdateResponse;
  export import CustomDeleteResponse = CustomsAPI.CustomDeleteResponse;
  export import CustomDlpProfilesCreateCustomProfilesResponse = CustomsAPI.CustomDlpProfilesCreateCustomProfilesResponse;
  export import CustomUpdateParams = CustomsAPI.CustomUpdateParams;
  export import CustomDlpProfilesCreateCustomProfilesParams = CustomsAPI.CustomDlpProfilesCreateCustomProfilesParams;
}
