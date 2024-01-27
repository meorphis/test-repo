// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as MembersAPI from 'cloudflare/resources/organizations/members';

export class Members extends APIResource {
  /**
   * Get information about a specific member of an organization.
   */
  retrieve(
    organizationIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MemberRetrieveResponse> {
    return this._client.get(`/organizations/${organizationIdentifier}/members/${identifier}`, options);
  }

  /**
   * Change the Roles of an Organization's Member.
   */
  update(
    organizationIdentifier: string,
    identifier: string,
    body: MemberUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MemberUpdateResponse> {
    return this._client.patch(`/organizations/${organizationIdentifier}/members/${identifier}`, {
      body,
      ...options,
    });
  }

  /**
   * Remove a member from an organization.
   */
  delete(
    organizationIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MemberDeleteResponse> {
    return this._client.delete(`/organizations/${organizationIdentifier}/members/${identifier}`, options);
  }

  /**
   * List all members of a organization.
   */
  organizationMembersListMembers(
    organizationIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MemberOrganizationMembersListMembersResponse> {
    return this._client.get(`/organizations/${organizationIdentifier}/members`, options);
  }
}

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
  /**
   * Identifier
   */
  id?: string;
}

export interface MemberOrganizationMembersListMembersResponse {
  errors?: Array<MemberOrganizationMembersListMembersResponse.Error>;

  messages?: Array<MemberOrganizationMembersListMembersResponse.Message>;

  result?: Array<MemberOrganizationMembersListMembersResponse.Result>;

  result_info?: MemberOrganizationMembersListMembersResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace MemberOrganizationMembersListMembersResponse {
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
    roles: Array<Result.Role>;

    /**
     * A member's status in the organization.
     */
    status: 'accepted' | 'invited';
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
       * Role Name.
       */
      name: string;

      /**
       * Access permissions for this User.
       */
      permissions: Array<string>;
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

export interface MemberUpdateParams {
  /**
   * Array of Roles associated with this Member.
   */
  roles?: Array<string>;
}

export namespace Members {
  export import MemberRetrieveResponse = MembersAPI.MemberRetrieveResponse;
  export import MemberUpdateResponse = MembersAPI.MemberUpdateResponse;
  export import MemberDeleteResponse = MembersAPI.MemberDeleteResponse;
  export import MemberOrganizationMembersListMembersResponse = MembersAPI.MemberOrganizationMembersListMembersResponse;
  export import MemberUpdateParams = MembersAPI.MemberUpdateParams;
}
