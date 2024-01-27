// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as MembershipsAPI from 'cloudflare/resources/memberships';
import { Page } from 'cloudflare/pagination';

export class Memberships extends APIResource {
  /**
   * Get a specific membership.
   */
  retrieve(identifier: string, options?: Core.RequestOptions): Core.APIPromise<MembershipRetrieveResponse> {
    return this._client.get(`/memberships/${identifier}`, options);
  }

  /**
   * Accept or reject this account invitation.
   */
  update(
    identifier: string,
    body: MembershipUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MembershipUpdateResponse> {
    return this._client.put(`/memberships/${identifier}`, { body, ...options });
  }

  /**
   * Remove the associated member from an account.
   */
  delete(identifier: string, options?: Core.RequestOptions): Core.APIPromise<MembershipDeleteResponse> {
    return this._client.delete(`/memberships/${identifier}`, options);
  }

  /**
   * List memberships of accounts the user can access.
   */
  userSAccountMembershipsListMemberships(
    query?: MembershipUserSAccountMembershipsListMembershipsParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    MembershipUserSAccountMembershipsListMembershipsResponsesPage,
    MembershipUserSAccountMembershipsListMembershipsResponse
  >;
  userSAccountMembershipsListMemberships(
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    MembershipUserSAccountMembershipsListMembershipsResponsesPage,
    MembershipUserSAccountMembershipsListMembershipsResponse
  >;
  userSAccountMembershipsListMemberships(
    query: MembershipUserSAccountMembershipsListMembershipsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    MembershipUserSAccountMembershipsListMembershipsResponsesPage,
    MembershipUserSAccountMembershipsListMembershipsResponse
  > {
    if (isRequestOptions(query)) {
      return this.userSAccountMembershipsListMemberships({}, query);
    }
    return this._client.getAPIList(
      '/memberships',
      MembershipUserSAccountMembershipsListMembershipsResponsesPage,
      { query, ...options },
    );
  }
}

export class MembershipUserSAccountMembershipsListMembershipsResponsesPage extends Page<MembershipUserSAccountMembershipsListMembershipsResponse> {}

export interface MembershipRetrieveResponse {
  errors?: Array<MembershipRetrieveResponse.Error>;

  messages?: Array<MembershipRetrieveResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace MembershipRetrieveResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface MembershipUpdateResponse {
  errors?: Array<MembershipUpdateResponse.Error>;

  messages?: Array<MembershipUpdateResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace MembershipUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface MembershipDeleteResponse {
  errors?: Array<MembershipDeleteResponse.Error>;

  messages?: Array<MembershipDeleteResponse.Message>;

  result?: MembershipDeleteResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace MembershipDeleteResponse {
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
     * Membership identifier tag.
     */
    id?: string;
  }
}

export interface MembershipUserSAccountMembershipsListMembershipsResponse {
  /**
   * Membership identifier tag.
   */
  id?: string;

  account?: MembershipUserSAccountMembershipsListMembershipsResponse.Account;

  /**
   * Enterprise only. Indicates whether or not API access is enabled specifically for
   * this user on a given account.
   */
  api_access_enabled?: boolean | null;

  /**
   * The unique activation code for the account membership.
   */
  code?: string;

  permissions?: MembershipUserSAccountMembershipsListMembershipsResponse.Permissions;

  /**
   * List of role names for the user at the account.
   */
  roles?: Array<string>;

  /**
   * Status of this membership.
   */
  status?: 'accepted' | 'pending' | 'rejected';
}

export namespace MembershipUserSAccountMembershipsListMembershipsResponse {
  export interface Account {
    /**
     * Identifier
     */
    id: string;

    /**
     * Account name
     */
    name: string;

    /**
     * Timestamp for the creation of the account
     */
    created_on?: string;

    /**
     * Account settings
     */
    settings?: Account.Settings;
  }

  export namespace Account {
    /**
     * Account settings
     */
    export interface Settings {
      /**
       * Specifies the default nameservers to be used for new zones added to this
       * account.
       *
       * - `cloudflare.standard` for Cloudflare-branded nameservers
       * - `custom.account` for account custom nameservers
       * - `custom.tenant` for tenant custom nameservers
       *
       * See
       * [Custom Nameservers](https://developers.cloudflare.com/dns/additional-options/custom-nameservers/)
       * for more information.
       */
      default_nameservers?: 'cloudflare.standard' | 'custom.account' | 'custom.tenant';

      /**
       * Indicates whether membership in this account requires that Two-Factor
       * Authentication is enabled
       */
      enforce_twofactor?: boolean;

      /**
       * Indicates whether new zones should use the account-level custom nameservers by
       * default
       */
      use_account_custom_ns_by_default?: boolean;
    }
  }

  export interface Permissions {
    analytics?: Permissions.Analytics;

    billing?: Permissions.Billing;

    cache_purge?: Permissions.CachePurge;

    dns?: Permissions.DNS;

    dns_records?: Permissions.DNSRecords;

    lb?: Permissions.Lb;

    logs?: Permissions.Logs;

    organization?: Permissions.Organization;

    ssl?: Permissions.Ssl;

    waf?: Permissions.Waf;

    zone_settings?: Permissions.ZoneSettings;

    zones?: Permissions.Zones;
  }

  export namespace Permissions {
    export interface Analytics {
      read?: boolean;

      write?: boolean;
    }

    export interface Billing {
      read?: boolean;

      write?: boolean;
    }

    export interface CachePurge {
      read?: boolean;

      write?: boolean;
    }

    export interface DNS {
      read?: boolean;

      write?: boolean;
    }

    export interface DNSRecords {
      read?: boolean;

      write?: boolean;
    }

    export interface Lb {
      read?: boolean;

      write?: boolean;
    }

    export interface Logs {
      read?: boolean;

      write?: boolean;
    }

    export interface Organization {
      read?: boolean;

      write?: boolean;
    }

    export interface Ssl {
      read?: boolean;

      write?: boolean;
    }

    export interface Waf {
      read?: boolean;

      write?: boolean;
    }

    export interface ZoneSettings {
      read?: boolean;

      write?: boolean;
    }

    export interface Zones {
      read?: boolean;

      write?: boolean;
    }
  }
}

export interface MembershipUpdateParams {
  /**
   * Whether to accept or reject this account invitation.
   */
  status: 'accepted' | 'rejected';
}

export interface MembershipUserSAccountMembershipsListMembershipsParams {
  account?: MembershipUserSAccountMembershipsListMembershipsParams.Account;

  /**
   * Direction to order memberships.
   */
  direction?: 'asc' | 'desc';

  /**
   * Account name
   */
  name?: string;

  /**
   * Field to order memberships by.
   */
  order?: 'id' | 'account.name' | 'status';

  /**
   * Page number of paginated results.
   */
  page?: number;

  /**
   * Number of memberships per page.
   */
  per_page?: number;

  /**
   * Status of this membership.
   */
  status?: 'accepted' | 'pending' | 'rejected';
}

export namespace MembershipUserSAccountMembershipsListMembershipsParams {
  export interface Account {
    /**
     * Account name
     */
    name?: string;
  }
}

export namespace Memberships {
  export import MembershipRetrieveResponse = MembershipsAPI.MembershipRetrieveResponse;
  export import MembershipUpdateResponse = MembershipsAPI.MembershipUpdateResponse;
  export import MembershipDeleteResponse = MembershipsAPI.MembershipDeleteResponse;
  export import MembershipUserSAccountMembershipsListMembershipsResponse = MembershipsAPI.MembershipUserSAccountMembershipsListMembershipsResponse;
  export import MembershipUserSAccountMembershipsListMembershipsResponsesPage = MembershipsAPI.MembershipUserSAccountMembershipsListMembershipsResponsesPage;
  export import MembershipUpdateParams = MembershipsAPI.MembershipUpdateParams;
  export import MembershipUserSAccountMembershipsListMembershipsParams = MembershipsAPI.MembershipUserSAccountMembershipsListMembershipsParams;
}
