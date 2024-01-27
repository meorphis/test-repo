// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ConfigAPI from 'cloudflare/resources/zones/settings/zaraz/config';

export class Default extends APIResource {
  /**
   * Gets default Zaraz configuration for a zone.
   */
  retrieve(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConfigAPI.ZarazConfigResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/settings/zaraz/v2/default`, options);
  }
}
