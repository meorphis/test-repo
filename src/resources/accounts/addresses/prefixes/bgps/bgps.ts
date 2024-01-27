// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as StatusesAPI from 'cloudflare/resources/accounts/addresses/prefixes/bgps/statuses';

export class Bgps extends APIResource {
  statuses: StatusesAPI.Statuses = new StatusesAPI.Statuses(this._client);
}

export namespace Bgps {
  export import Statuses = StatusesAPI.Statuses;
  export import StatusIPAddressManagementDynamicAdvertisementGetAdvertisementStatusResponse = StatusesAPI.StatusIPAddressManagementDynamicAdvertisementGetAdvertisementStatusResponse;
  export import StatusIPAddressManagementDynamicAdvertisementUpdatePrefixDynamicAdvertisementStatusResponse = StatusesAPI.StatusIPAddressManagementDynamicAdvertisementUpdatePrefixDynamicAdvertisementStatusResponse;
  export import StatusIPAddressManagementDynamicAdvertisementUpdatePrefixDynamicAdvertisementStatusParams = StatusesAPI.StatusIPAddressManagementDynamicAdvertisementUpdatePrefixDynamicAdvertisementStatusParams;
}
