// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as MembersAPI from 'cloudflare/resources/accounts/members';
import { Page } from 'cloudflare/pagination';

export class Members extends APIResource {
  /**
   * Get information about a specific member of an account.
   */
  retrieve(
    accountIdentifier: unknown,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MemberRetrieveResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/members/${identifier}`, options);
  }

  /**
   * Modify an account member.
   */
  update(
    accountIdentifier: unknown,
    identifier: string,
    body: MemberUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MemberUpdateResponse> {
    return this._client.put(`/accounts/${accountIdentifier}/members/${identifier}`, { body, ...options });
  }

  /**
   * Remove a member from an account.
   */
  delete(
    accountIdentifier: unknown,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MemberDeleteResponse> {
    return this._client.delete(`/accounts/${accountIdentifier}/members/${identifier}`, options);
  }

  /**
   * Add a user to the list of members for this account.
   */
  accountMembersAddMember(
    accountIdentifier: unknown,
    body: MemberAccountMembersAddMemberParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MemberAccountMembersAddMemberResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/members`, { body, ...options });
  }

  /**
   * List all members of an account.
   */
  accountMembersListMembers(
    accountIdentifier: unknown,
    query?: MemberAccountMembersListMembersParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MemberAccountMembersListMembersResponsesPage, MemberAccountMembersListMembersResponse>;
  accountMembersListMembers(
    accountIdentifier: unknown,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MemberAccountMembersListMembersResponsesPage, MemberAccountMembersListMembersResponse>;
  accountMembersListMembers(
    accountIdentifier: unknown,
    query: MemberAccountMembersListMembersParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<MemberAccountMembersListMembersResponsesPage, MemberAccountMembersListMembersResponse> {
    if (isRequestOptions(query)) {
      return this.accountMembersListMembers(accountIdentifier, {}, query);
    }
    return this._client.getAPIList(
      `/accounts/${accountIdentifier}/members`,
      MemberAccountMembersListMembersResponsesPage,
      { query, ...options },
    );
  }
}

export class MemberAccountMembersListMembersResponsesPage extends Page<MemberAccountMembersListMembersResponse> {}

export interface MemberRetrieveResponse {
  errors?: Array<MemberRetrieveResponse.Error>;

  messages?: Array<MemberRetrieveResponse.Message>;

  result?: MemberRetrieveResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace MemberRetrieveResponse {
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
    id: string;

    /**
     * Roles assigned to this member.
     */
    roles: Array<Result.Role>;

    status: unknown;

    user: Result.User;
  }

  export namespace Result {
    export interface Role {
      /**
       * Role identifier tag.
       */
      id: string;

      /**
       * Description of role's permissions.
       */
      description: string;

      /**
       * Role name.
       */
      name: string;

      permissions: Role.Permissions;
    }

    export namespace Role {
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

    export interface User {
      /**
       * The contact email address of the user.
       */
      email: string;

      /**
       * Identifier
       */
      id?: string;

      /**
       * User's first name
       */
      first_name?: string | null;

      /**
       * User's last name
       */
      last_name?: string | null;

      /**
       * Indicates whether two-factor authentication is enabled for the user account.
       * Does not apply to API authentication.
       */
      two_factor_authentication_enabled?: boolean;
    }
  }
}

export interface MemberUpdateResponse {
  errors?: Array<MemberUpdateResponse.Error>;

  messages?: Array<MemberUpdateResponse.Message>;

  result?: MemberUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace MemberUpdateResponse {
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
    id: string;

    /**
     * Roles assigned to this member.
     */
    roles: Array<Result.Role>;

    status: unknown;

    user: Result.User;
  }

  export namespace Result {
    export interface Role {
      /**
       * Role identifier tag.
       */
      id: string;

      /**
       * Description of role's permissions.
       */
      description: string;

      /**
       * Role name.
       */
      name: string;

      permissions: Role.Permissions;
    }

    export namespace Role {
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

    export interface User {
      /**
       * The contact email address of the user.
       */
      email: string;

      /**
       * Identifier
       */
      id?: string;

      /**
       * User's first name
       */
      first_name?: string | null;

      /**
       * User's last name
       */
      last_name?: string | null;

      /**
       * Indicates whether two-factor authentication is enabled for the user account.
       * Does not apply to API authentication.
       */
      two_factor_authentication_enabled?: boolean;
    }
  }
}

export interface MemberDeleteResponse {
  errors?: Array<MemberDeleteResponse.Error>;

  messages?: Array<MemberDeleteResponse.Message>;

  result?: MemberDeleteResponse.Result | null;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace MemberDeleteResponse {
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
     * Identifier
     */
    id: string;
  }
}

export interface MemberAccountMembersAddMemberResponse {
  errors?: Array<MemberAccountMembersAddMemberResponse.Error>;

  messages?: Array<MemberAccountMembersAddMemberResponse.Message>;

  result?: MemberAccountMembersAddMemberResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace MemberAccountMembersAddMemberResponse {
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

    /**
     * The unique activation code for the account membership.
     */
    code?: string;

    /**
     * Roles assigned to this member.
     */
    roles?: Array<Result.Role>;

    status?: unknown;

    user?: Result.User;
  }

  export namespace Result {
    export interface Role {
      /**
       * Role identifier tag.
       */
      id: string;

      /**
       * Description of role's permissions.
       */
      description: string;

      /**
       * Role name.
       */
      name: string;

      permissions: Role.Permissions;
    }

    export namespace Role {
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

    export interface User {
      /**
       * The contact email address of the user.
       */
      email: string;

      /**
       * Identifier
       */
      id?: string;

      /**
       * User's first name
       */
      first_name?: string | null;

      /**
       * User's last name
       */
      last_name?: string | null;

      /**
       * Indicates whether two-factor authentication is enabled for the user account.
       * Does not apply to API authentication.
       */
      two_factor_authentication_enabled?: boolean;
    }
  }
}

export interface MemberAccountMembersListMembersResponse {
  /**
   * Identifier
   */
  id: string;

  /**
   * The contact email address of the user.
   */
  email: string;

  /**
   * Member Name.
   */
  name: string | null;

  /**
   * Roles assigned to this Member.
   */
  roles: Array<MemberAccountMembersListMembersResponse.Role>;

  /**
   * A member's status in the organization.
   */
  status: 'accepted' | 'invited';
}

export namespace MemberAccountMembersListMembersResponse {
  export interface Role {
    /**
     * Role identifier tag.
     */
    id: string;

    /**
     * Description of role's permissions.
     */
    description: string;

    /**
     * Role Name.
     */
    name: string;

    /**
     * Access permissions for this User.
     */
    permissions: Array<string>;
  }
}

export interface MemberUpdateParams {
  /**
   * Roles assigned to this member.
   */
  roles: Array<MemberUpdateParams.Role>;
}

export namespace MemberUpdateParams {
  export interface Role {
    /**
     * Role identifier tag.
     */
    id: string;

    permissions: Role.Permissions;
  }

  export namespace Role {
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
}

export interface MemberAccountMembersAddMemberParams {
  /**
   * The contact email address of the user.
   */
  email: string;

  /**
   * Array of roles associated with this member.
   */
  roles: Array<string>;

  status?: 'accepted' | 'pending';
}

export interface MemberAccountMembersListMembersParams {
  /**
   * Direction to order results.
   */
  direction?: 'asc' | 'desc';

  /**
   * Field to order results by.
   */
  order?: 'user.first_name' | 'user.last_name' | 'user.email' | 'status';

  /**
   * Page number of paginated results.
   */
  page?: number;

  /**
   * Maximum number of results per page.
   */
  per_page?: number;

  /**
   * A member's status in the account.
   */
  status?: 'accepted' | 'pending' | 'rejected';
}

export namespace Members {
  export import MemberRetrieveResponse = MembersAPI.MemberRetrieveResponse;
  export import MemberUpdateResponse = MembersAPI.MemberUpdateResponse;
  export import MemberDeleteResponse = MembersAPI.MemberDeleteResponse;
  export import MemberAccountMembersAddMemberResponse = MembersAPI.MemberAccountMembersAddMemberResponse;
  export import MemberAccountMembersListMembersResponse = MembersAPI.MemberAccountMembersListMembersResponse;
  export import MemberAccountMembersListMembersResponsesPage = MembersAPI.MemberAccountMembersListMembersResponsesPage;
  export import MemberUpdateParams = MembersAPI.MemberUpdateParams;
  export import MemberAccountMembersAddMemberParams = MembersAPI.MemberAccountMembersAddMemberParams;
  export import MemberAccountMembersListMembersParams = MembersAPI.MemberAccountMembersListMembersParams;
}
