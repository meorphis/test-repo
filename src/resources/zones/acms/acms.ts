// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as TotalTlsAPI from 'cloudflare/resources/zones/acms/total-tls';

export class Acms extends APIResource {
  totalTls: TotalTlsAPI.TotalTls = new TotalTlsAPI.TotalTls(this._client);
}

export namespace Acms {
  export import TotalTls = TotalTlsAPI.TotalTls;
  export import TotalTlTotalTlsEnableOrDisableTotalTlsResponse = TotalTlsAPI.TotalTlTotalTlsEnableOrDisableTotalTlsResponse;
  export import TotalTlTotalTlsTotalTlsSettingsDetailsResponse = TotalTlsAPI.TotalTlTotalTlsTotalTlsSettingsDetailsResponse;
  export import TotalTlTotalTlsEnableOrDisableTotalTlsParams = TotalTlsAPI.TotalTlTotalTlsEnableOrDisableTotalTlsParams;
}
