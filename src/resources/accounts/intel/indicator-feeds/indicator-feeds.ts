// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as PermissionsAPI from 'cloudflare/resources/accounts/intel/indicator-feeds/permissions';

export class IndicatorFeeds extends APIResource {
  permissions: PermissionsAPI.Permissions = new PermissionsAPI.Permissions(this._client);
}

export namespace IndicatorFeeds {
  export import Permissions = PermissionsAPI.Permissions;
  export import PermissionRemoveResponse = PermissionsAPI.PermissionRemoveResponse;
  export import PermissionViewResponse = PermissionsAPI.PermissionViewResponse;
  export import PermissionRemoveParams = PermissionsAPI.PermissionRemoveParams;
}
