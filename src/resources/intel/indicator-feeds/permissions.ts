// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PermissionsAPI from 'cloudflare/resources/intel/indicator-feeds/permissions';

export class Permissions extends APIResource {
  /**
   * Grant permission to indicator feed
   */
  add(
    accountIdentifier: string,
    body: PermissionAddParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PermissionAddResponse> {
    return this._client.put(`/accounts/${accountIdentifier}/intel/indicator-feeds/permissions/add`, {
      body,
      ...options,
    });
  }
}

export interface PermissionAddResponse {
  errors?: Array<PermissionAddResponse.Error>;

  messages?: Array<PermissionAddResponse.Message>;

  result?: PermissionAddResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace PermissionAddResponse {
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

export interface PermissionAddParams {
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
  export import PermissionAddResponse = PermissionsAPI.PermissionAddResponse;
  export import PermissionAddParams = PermissionsAPI.PermissionAddParams;
}
