// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ProfilesAPI from 'cloudflare/resources/accounts/dlp/profiles/profiles';
import * as CustomsAPI from 'cloudflare/resources/accounts/dlp/profiles/customs';
import * as PredefinedsAPI from 'cloudflare/resources/accounts/dlp/profiles/predefineds';

export class Profiles extends APIResource {
  customs: CustomsAPI.Customs = new CustomsAPI.Customs(this._client);
  predefineds: PredefinedsAPI.Predefineds = new PredefinedsAPI.Predefineds(this._client);

  /**
   * Fetches a DLP profile by ID. Supports both predefined and custom profiles
   */
  retrieve(
    accountIdentifier: string,
    profileId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProfileRetrieveResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/dlp/profiles/${profileId}`, options);
  }

  /**
   * Lists all DLP profiles in an account.
   */
  list(accountIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<ProfileListResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/dlp/profiles`, options);
  }
}

export interface ProfileRetrieveResponse {
  errors?: Array<ProfileRetrieveResponse.Error>;

  messages?: Array<ProfileRetrieveResponse.Message>;

  result?:
    | ProfileRetrieveResponse.DlpPredefinedProfile
    | ProfileRetrieveResponse.DlpCustomProfile
    | ProfileRetrieveResponse.DlpIntegrationProfile;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ProfileRetrieveResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface DlpPredefinedProfile {
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
    entries?: Array<DlpPredefinedProfile.Entry>;

    /**
     * The name of the profile.
     */
    name?: string;

    /**
     * The type of the profile.
     */
    type?: 'predefined';
  }

  export namespace DlpPredefinedProfile {
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

  export interface DlpCustomProfile {
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
    entries?: Array<DlpCustomProfile.Entry>;

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

  export namespace DlpCustomProfile {
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

  export interface DlpIntegrationProfile {
    /**
     * UUID
     */
    id?: string;

    created_at?: string;

    /**
     * The description of the profile.
     */
    description?: string;

    /**
     * The entries for this profile.
     */
    entries?: Array<DlpIntegrationProfile.Entry>;

    /**
     * The name of the profile.
     */
    name?: string;

    /**
     * The type of the profile.
     */
    type?: 'integration';

    updated_at?: string;
  }

  export namespace DlpIntegrationProfile {
    /**
     * An entry derived from an integration
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
       * ID of the parent profile
       */
      profile_id?: unknown;

      updated_at?: string;
    }
  }
}

export interface ProfileListResponse {
  errors?: Array<ProfileListResponse.Error>;

  messages?: Array<ProfileListResponse.Message>;

  result?: Array<
    | ProfileListResponse.DlpPredefinedProfile
    | ProfileListResponse.DlpCustomProfile
    | ProfileListResponse.DlpIntegrationProfile
  >;

  result_info?: ProfileListResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ProfileListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface DlpPredefinedProfile {
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
    entries?: Array<DlpPredefinedProfile.Entry>;

    /**
     * The name of the profile.
     */
    name?: string;

    /**
     * The type of the profile.
     */
    type?: 'predefined';
  }

  export namespace DlpPredefinedProfile {
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

  export interface DlpCustomProfile {
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
    entries?: Array<DlpCustomProfile.Entry>;

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

  export namespace DlpCustomProfile {
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

  export interface DlpIntegrationProfile {
    /**
     * UUID
     */
    id?: string;

    created_at?: string;

    /**
     * The description of the profile.
     */
    description?: string;

    /**
     * The entries for this profile.
     */
    entries?: Array<DlpIntegrationProfile.Entry>;

    /**
     * The name of the profile.
     */
    name?: string;

    /**
     * The type of the profile.
     */
    type?: 'integration';

    updated_at?: string;
  }

  export namespace DlpIntegrationProfile {
    /**
     * An entry derived from an integration
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
       * ID of the parent profile
       */
      profile_id?: unknown;

      updated_at?: string;
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

export namespace Profiles {
  export import ProfileRetrieveResponse = ProfilesAPI.ProfileRetrieveResponse;
  export import ProfileListResponse = ProfilesAPI.ProfileListResponse;
  export import Customs = CustomsAPI.Customs;
  export import CustomRetrieveResponse = CustomsAPI.CustomRetrieveResponse;
  export import CustomUpdateResponse = CustomsAPI.CustomUpdateResponse;
  export import CustomDeleteResponse = CustomsAPI.CustomDeleteResponse;
  export import CustomDlpProfilesCreateCustomProfilesResponse = CustomsAPI.CustomDlpProfilesCreateCustomProfilesResponse;
  export import CustomUpdateParams = CustomsAPI.CustomUpdateParams;
  export import CustomDlpProfilesCreateCustomProfilesParams = CustomsAPI.CustomDlpProfilesCreateCustomProfilesParams;
  export import Predefineds = PredefinedsAPI.Predefineds;
  export import PredefinedRetrieveResponse = PredefinedsAPI.PredefinedRetrieveResponse;
  export import PredefinedUpdateResponse = PredefinedsAPI.PredefinedUpdateResponse;
  export import PredefinedUpdateParams = PredefinedsAPI.PredefinedUpdateParams;
}
