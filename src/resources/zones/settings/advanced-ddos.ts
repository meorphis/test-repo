// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as AdvancedDdosAPI from 'cloudflare/resources/zones/settings/advanced-ddos';

export class AdvancedDdos extends APIResource {
  /**
   * Advanced protection from Distributed Denial of Service (DDoS) attacks on your
   * website. This is an uneditable value that is 'on' in the case of Business and
   * Enterprise zones.
   */
  list(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<AdvancedDdoListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/settings/advanced_ddos`, options);
  }
}

export interface AdvancedDdoListResponse {
  errors?: Array<AdvancedDdoListResponse.Error>;

  messages?: Array<AdvancedDdoListResponse.Message>;

  /**
   * Advanced protection from Distributed Denial of Service (DDoS) attacks on your
   * website. This is an uneditable value that is 'on' in the case of Business and
   * Enterprise zones.
   */
  result?: AdvancedDdoListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace AdvancedDdoListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Advanced protection from Distributed Denial of Service (DDoS) attacks on your
   * website. This is an uneditable value that is 'on' in the case of Business and
   * Enterprise zones.
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'advanced_ddos';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting. Notes: Defaults to on for Business+ plans
     */
    value?: 'on' | 'off';
  }
}

export namespace AdvancedDdos {
  export import AdvancedDdoListResponse = AdvancedDdosAPI.AdvancedDdoListResponse;
}
