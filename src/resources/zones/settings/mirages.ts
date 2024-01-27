// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as MiragesAPI from 'cloudflare/resources/zones/settings/mirages';

export class Mirages extends APIResource {
  /**
   * Automatically optimize image loading for website visitors on mobile devices.
   * Refer to our
   * [blog post](http://blog.cloudflare.com/mirage2-solving-mobile-speed) for more
   * information.
   */
  update(
    zoneIdentifier: string,
    body: MirageUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MirageUpdateResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/settings/mirage`, { body, ...options });
  }

  /**
   * Automatically optimize image loading for website visitors on mobile devices.
   * Refer to our
   * [blog post](http://blog.cloudflare.com/mirage2-solving-mobile-speed) for more
   * information.
   */
  list(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<MirageListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/settings/mirage`, options);
  }
}

export interface MirageUpdateResponse {
  errors?: Array<MirageUpdateResponse.Error>;

  messages?: Array<MirageUpdateResponse.Message>;

  /**
   * Automatically optimize image loading for website visitors on mobile devices.
   * Refer to
   * [our blog post](http://blog.cloudflare.com/mirage2-solving-mobile-speed) for
   * more information.
   */
  result?: MirageUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace MirageUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Automatically optimize image loading for website visitors on mobile devices.
   * Refer to
   * [our blog post](http://blog.cloudflare.com/mirage2-solving-mobile-speed) for
   * more information.
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'mirage';

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

export interface MirageListResponse {
  errors?: Array<MirageListResponse.Error>;

  messages?: Array<MirageListResponse.Message>;

  /**
   * Automatically optimize image loading for website visitors on mobile devices.
   * Refer to
   * [our blog post](http://blog.cloudflare.com/mirage2-solving-mobile-speed) for
   * more information.
   */
  result?: MirageListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace MirageListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Automatically optimize image loading for website visitors on mobile devices.
   * Refer to
   * [our blog post](http://blog.cloudflare.com/mirage2-solving-mobile-speed) for
   * more information.
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'mirage';

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

export interface MirageUpdateParams {
  /**
   * Value of the zone setting.
   */
  value: 'on' | 'off';
}

export namespace Mirages {
  export import MirageUpdateResponse = MiragesAPI.MirageUpdateResponse;
  export import MirageListResponse = MiragesAPI.MirageListResponse;
  export import MirageUpdateParams = MiragesAPI.MirageUpdateParams;
}
