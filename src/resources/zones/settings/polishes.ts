// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PolishesAPI from 'cloudflare/resources/zones/settings/polishes';

export class Polishes extends APIResource {
  /**
   * Automatically optimize image loading for website visitors on mobile devices.
   * Refer to our [blog post](http://blog.cloudflare.com/polish-solving-mobile-speed)
   * for more information.
   */
  update(
    zoneIdentifier: string,
    body: PolishUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PolishUpdateResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/settings/polish`, { body, ...options });
  }

  /**
   * Automatically optimize image loading for website visitors on mobile devices.
   * Refer to our [blog post](http://blog.cloudflare.com/polish-solving-mobile-speed)
   * for more information.
   */
  list(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<PolishListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/settings/polish`, options);
  }
}

export interface PolishUpdateResponse {
  errors?: Array<PolishUpdateResponse.Error>;

  messages?: Array<PolishUpdateResponse.Message>;

  /**
   * Removes metadata and compresses your images for faster page load times. Basic
   * (Lossless): Reduce the size of PNG, JPEG, and GIF files - no impact on visual
   * quality. Basic + JPEG (Lossy): Further reduce the size of JPEG files for faster
   * image loading. Larger JPEGs are converted to progressive images, loading a
   * lower-resolution image first and ending in a higher-resolution version. Not
   * recommended for hi-res photography sites.
   */
  result?: PolishUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace PolishUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Removes metadata and compresses your images for faster page load times. Basic
   * (Lossless): Reduce the size of PNG, JPEG, and GIF files - no impact on visual
   * quality. Basic + JPEG (Lossy): Further reduce the size of JPEG files for faster
   * image loading. Larger JPEGs are converted to progressive images, loading a
   * lower-resolution image first and ending in a higher-resolution version. Not
   * recommended for hi-res photography sites.
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'polish';

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
    value?: 'off' | 'lossless' | 'lossy';
  }
}

export interface PolishListResponse {
  errors?: Array<PolishListResponse.Error>;

  messages?: Array<PolishListResponse.Message>;

  /**
   * Removes metadata and compresses your images for faster page load times. Basic
   * (Lossless): Reduce the size of PNG, JPEG, and GIF files - no impact on visual
   * quality. Basic + JPEG (Lossy): Further reduce the size of JPEG files for faster
   * image loading. Larger JPEGs are converted to progressive images, loading a
   * lower-resolution image first and ending in a higher-resolution version. Not
   * recommended for hi-res photography sites.
   */
  result?: PolishListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace PolishListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Removes metadata and compresses your images for faster page load times. Basic
   * (Lossless): Reduce the size of PNG, JPEG, and GIF files - no impact on visual
   * quality. Basic + JPEG (Lossy): Further reduce the size of JPEG files for faster
   * image loading. Larger JPEGs are converted to progressive images, loading a
   * lower-resolution image first and ending in a higher-resolution version. Not
   * recommended for hi-res photography sites.
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'polish';

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
    value?: 'off' | 'lossless' | 'lossy';
  }
}

export interface PolishUpdateParams {
  /**
   * Removes metadata and compresses your images for faster page load times. Basic
   * (Lossless): Reduce the size of PNG, JPEG, and GIF files - no impact on visual
   * quality. Basic + JPEG (Lossy): Further reduce the size of JPEG files for faster
   * image loading. Larger JPEGs are converted to progressive images, loading a
   * lower-resolution image first and ending in a higher-resolution version. Not
   * recommended for hi-res photography sites.
   */
  value: PolishUpdateParams.Value;
}

export namespace PolishUpdateParams {
  /**
   * Removes metadata and compresses your images for faster page load times. Basic
   * (Lossless): Reduce the size of PNG, JPEG, and GIF files - no impact on visual
   * quality. Basic + JPEG (Lossy): Further reduce the size of JPEG files for faster
   * image loading. Larger JPEGs are converted to progressive images, loading a
   * lower-resolution image first and ending in a higher-resolution version. Not
   * recommended for hi-res photography sites.
   */
  export interface Value {
    /**
     * ID of the zone setting.
     */
    id?: 'polish';

    /**
     * Value of the zone setting.
     */
    value?: 'off' | 'lossless' | 'lossy';
  }
}

export namespace Polishes {
  export import PolishUpdateResponse = PolishesAPI.PolishUpdateResponse;
  export import PolishListResponse = PolishesAPI.PolishListResponse;
  export import PolishUpdateParams = PolishesAPI.PolishUpdateParams;
}
