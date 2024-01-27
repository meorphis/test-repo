// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as OrangeToOrangesAPI from 'cloudflare/resources/zones/settings/orange-to-oranges';

export class OrangeToOranges extends APIResource {
  /**
   * Orange to Orange (O2O) allows zones on Cloudflare to CNAME to other zones also
   * on Cloudflare.
   */
  update(
    zoneIdentifier: string,
    body: OrangeToOrangeUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrangeToOrangeUpdateResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/settings/orange_to_orange`, { body, ...options });
  }

  /**
   * Orange to Orange (O2O) allows zones on Cloudflare to CNAME to other zones also
   * on Cloudflare.
   */
  list(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<OrangeToOrangeListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/settings/orange_to_orange`, options);
  }
}

export interface OrangeToOrangeUpdateResponse {
  errors?: Array<OrangeToOrangeUpdateResponse.Error>;

  messages?: Array<OrangeToOrangeUpdateResponse.Message>;

  /**
   * Orange to Orange (O2O) allows zones on Cloudflare to CNAME to other zones also
   * on Cloudflare.
   */
  result?: OrangeToOrangeUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace OrangeToOrangeUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Orange to Orange (O2O) allows zones on Cloudflare to CNAME to other zones also
   * on Cloudflare.
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'orange_to_orange';

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
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }
}

export interface OrangeToOrangeListResponse {
  errors?: Array<OrangeToOrangeListResponse.Error>;

  messages?: Array<OrangeToOrangeListResponse.Message>;

  /**
   * Orange to Orange (O2O) allows zones on Cloudflare to CNAME to other zones also
   * on Cloudflare.
   */
  result?: OrangeToOrangeListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace OrangeToOrangeListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Orange to Orange (O2O) allows zones on Cloudflare to CNAME to other zones also
   * on Cloudflare.
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'orange_to_orange';

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
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }
}

export interface OrangeToOrangeUpdateParams {
  /**
   * Orange to Orange (O2O) allows zones on Cloudflare to CNAME to other zones also
   * on Cloudflare.
   */
  value: OrangeToOrangeUpdateParams.Value;
}

export namespace OrangeToOrangeUpdateParams {
  /**
   * Orange to Orange (O2O) allows zones on Cloudflare to CNAME to other zones also
   * on Cloudflare.
   */
  export interface Value {
    /**
     * ID of the zone setting.
     */
    id?: 'orange_to_orange';

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }
}

export namespace OrangeToOranges {
  export import OrangeToOrangeUpdateResponse = OrangeToOrangesAPI.OrangeToOrangeUpdateResponse;
  export import OrangeToOrangeListResponse = OrangeToOrangesAPI.OrangeToOrangeListResponse;
  export import OrangeToOrangeUpdateParams = OrangeToOrangesAPI.OrangeToOrangeUpdateParams;
}
