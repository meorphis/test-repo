// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PermissionGroupsAPI from 'cloudflare/resources/user/tokens/permission-groups';

export class PermissionGroups extends APIResource {
  /**
   * Find all available permission groups.
   */
  permissionGroupsListPermissionGroups(
    options?: Core.RequestOptions,
  ): Core.APIPromise<PermissionGroupPermissionGroupsListPermissionGroupsResponse> {
    return this._client.get('/user/tokens/permission_groups', options);
  }
}

export interface PermissionGroupPermissionGroupsListPermissionGroupsResponse {
  errors?: Array<PermissionGroupPermissionGroupsListPermissionGroupsResponse.Error>;

  messages?: Array<PermissionGroupPermissionGroupsListPermissionGroupsResponse.Message>;

  result?: Array<unknown>;

  result_info?: PermissionGroupPermissionGroupsListPermissionGroupsResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace PermissionGroupPermissionGroupsListPermissionGroupsResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
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

export namespace PermissionGroups {
  export import PermissionGroupPermissionGroupsListPermissionGroupsResponse = PermissionGroupsAPI.PermissionGroupPermissionGroupsListPermissionGroupsResponse;
}
