// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PermissionsAPI from 'cloudflare/resources/accounts/intel/indicator-feeds/permissions';

export class Permissions extends APIResource {
  /**
   * Revoke permission to indicator feed
   */
  remove(
    accountIdentifier: string,
    body: PermissionRemoveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PermissionRemoveResponse> {
    return this._client.put(`/accounts/${accountIdentifier}/intel/indicator-feeds/permissions/remove`, {
      body,
      ...options,
    });
  }

  /**
   * List indicator feed permissions
   */
  view(accountIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<PermissionViewResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/intel/indicator-feeds/permissions/view`, options);
  }
}

export interface PermissionRemoveResponse {
  errors?: Array<PermissionRemoveResponse.Error>;

  messages?: Array<PermissionRemoveResponse.Message>;

  result?: PermissionRemoveResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace PermissionRemoveResponse {
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
     * Whether the update succeeded or not
     */
    success?: boolean;
  }
}

export interface PermissionViewResponse {
  errors?: Array<PermissionViewResponse.Error>;

  messages?: Array<PermissionViewResponse.Message>;

  result?: Array<PermissionViewResponse.Result>;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace PermissionViewResponse {
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
     * The unique identifier for the indicator feed
     */
    id?: number;

    /**
     * The description of the example test
     */
    description?: string;

    /**
     * The name of the indicator feed
     */
    name?: string;
  }
}

export interface PermissionRemoveParams {
  /**
   * The Cloudflare account tag of the account to change permissions on
   */
  account_tag?: string;

  /**
   * The ID of the feed to add/remove permissions on
   */
  feed_id?: number;
}

export namespace Permissions {
  export import PermissionRemoveResponse = PermissionsAPI.PermissionRemoveResponse;
  export import PermissionViewResponse = PermissionsAPI.PermissionViewResponse;
  export import PermissionRemoveParams = PermissionsAPI.PermissionRemoveParams;
}
