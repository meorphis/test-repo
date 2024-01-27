// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DevelopmentModesAPI from 'cloudflare/resources/zones/settings/development-modes';

export class DevelopmentModes extends APIResource {
  /**
   * Development Mode temporarily allows you to enter development mode for your
   * websites if you need to make changes to your site. This will bypass Cloudflare's
   * accelerated cache and slow down your site, but is useful if you are making
   * changes to cacheable content (like images, css, or JavaScript) and would like to
   * see those changes right away. Once entered, development mode will last for 3
   * hours and then automatically toggle off.
   */
  update(
    zoneIdentifier: string,
    body: DevelopmentModeUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DevelopmentModeUpdateResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/settings/development_mode`, { body, ...options });
  }

  /**
   * Development Mode temporarily allows you to enter development mode for your
   * websites if you need to make changes to your site. This will bypass Cloudflare's
   * accelerated cache and slow down your site, but is useful if you are making
   * changes to cacheable content (like images, css, or JavaScript) and would like to
   * see those changes right away. Once entered, development mode will last for 3
   * hours and then automatically toggle off.
   */
  list(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<DevelopmentModeListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/settings/development_mode`, options);
  }
}

export interface DevelopmentModeUpdateResponse {
  errors?: Array<DevelopmentModeUpdateResponse.Error>;

  messages?: Array<DevelopmentModeUpdateResponse.Message>;

  /**
   * Development Mode temporarily allows you to enter development mode for your
   * websites if you need to make changes to your site. This will bypass Cloudflare's
   * accelerated cache and slow down your site, but is useful if you are making
   * changes to cacheable content (like images, css, or JavaScript) and would like to
   * see those changes right away. Once entered, development mode will last for 3
   * hours and then automatically toggle off.
   */
  result?: DevelopmentModeUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace DevelopmentModeUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Development Mode temporarily allows you to enter development mode for your
   * websites if you need to make changes to your site. This will bypass Cloudflare's
   * accelerated cache and slow down your site, but is useful if you are making
   * changes to cacheable content (like images, css, or JavaScript) and would like to
   * see those changes right away. Once entered, development mode will last for 3
   * hours and then automatically toggle off.
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'development_mode';

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
     * Value of the zone setting. Notes: The interval (in seconds) from when
     * development mode expires (positive integer) or last expired (negative integer)
     * for the domain. If development mode has never been enabled, this value is false.
     */
    time_remaining?: number;

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }
}

export interface DevelopmentModeListResponse {
  errors?: Array<DevelopmentModeListResponse.Error>;

  messages?: Array<DevelopmentModeListResponse.Message>;

  /**
   * Development Mode temporarily allows you to enter development mode for your
   * websites if you need to make changes to your site. This will bypass Cloudflare's
   * accelerated cache and slow down your site, but is useful if you are making
   * changes to cacheable content (like images, css, or JavaScript) and would like to
   * see those changes right away. Once entered, development mode will last for 3
   * hours and then automatically toggle off.
   */
  result?: DevelopmentModeListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace DevelopmentModeListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Development Mode temporarily allows you to enter development mode for your
   * websites if you need to make changes to your site. This will bypass Cloudflare's
   * accelerated cache and slow down your site, but is useful if you are making
   * changes to cacheable content (like images, css, or JavaScript) and would like to
   * see those changes right away. Once entered, development mode will last for 3
   * hours and then automatically toggle off.
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'development_mode';

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
     * Value of the zone setting. Notes: The interval (in seconds) from when
     * development mode expires (positive integer) or last expired (negative integer)
     * for the domain. If development mode has never been enabled, this value is false.
     */
    time_remaining?: number;

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }
}

export interface DevelopmentModeUpdateParams {
  /**
   * Value of the zone setting.
   */
  value: 'on' | 'off';
}

export namespace DevelopmentModes {
  export import DevelopmentModeUpdateResponse = DevelopmentModesAPI.DevelopmentModeUpdateResponse;
  export import DevelopmentModeListResponse = DevelopmentModesAPI.DevelopmentModeListResponse;
  export import DevelopmentModeUpdateParams = DevelopmentModesAPI.DevelopmentModeUpdateParams;
}
