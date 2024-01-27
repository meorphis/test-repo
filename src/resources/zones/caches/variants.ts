// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as VariantsAPI from 'cloudflare/resources/zones/caches/variants';

export class Variants extends APIResource {
  /**
   * Variant support enables caching variants of images with certain file extensions
   * in addition to the original. This only applies when the origin server sends the
   * 'Vary: Accept' response header. If the origin server sends 'Vary: Accept' but
   * does not serve the variant requested, the response will not be cached. This will
   * be indicated with BYPASS cache status in the response headers.
   */
  list(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<VariantListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/cache/variants`, options);
  }

  /**
   * Variant support enables caching variants of images with certain file extensions
   * in addition to the original. This only applies when the origin server sends the
   * 'Vary: Accept' response header. If the origin server sends 'Vary: Accept' but
   * does not serve the variant requested, the response will not be cached. This will
   * be indicated with BYPASS cache status in the response headers.
   */
  delete(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<VariantDeleteResponse> {
    return this._client.delete(`/zones/${zoneIdentifier}/cache/variants`, options);
  }

  /**
   * Variant support enables caching variants of images with certain file extensions
   * in addition to the original. This only applies when the origin server sends the
   * 'Vary: Accept' response header. If the origin server sends 'Vary: Accept' but
   * does not serve the variant requested, the response will not be cached. This will
   * be indicated with BYPASS cache status in the response headers.
   */
  zoneCacheSettingsChangeVariantsSetting(
    zoneIdentifier: string,
    body: VariantZoneCacheSettingsChangeVariantsSettingParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VariantZoneCacheSettingsChangeVariantsSettingResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/cache/variants`, { body, ...options });
  }
}

export interface VariantListResponse {
  errors?: Array<VariantListResponse.Error>;

  messages?: Array<VariantListResponse.Message>;

  result?: VariantListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace VariantListResponse {
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
     * ID of the zone setting.
     */
    id?: 'variants';

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: Result.Value;
  }

  export namespace Result {
    /**
     * Value of the zone setting.
     */
    export interface Value {
      /**
       * List of strings with the MIME types of all the variants that should be served
       * for avif.
       */
      avif?: Array<unknown>;

      /**
       * List of strings with the MIME types of all the variants that should be served
       * for bmp.
       */
      bmp?: Array<unknown>;

      /**
       * List of strings with the MIME types of all the variants that should be served
       * for gif.
       */
      gif?: Array<unknown>;

      /**
       * List of strings with the MIME types of all the variants that should be served
       * for jp2.
       */
      jp2?: Array<unknown>;

      /**
       * List of strings with the MIME types of all the variants that should be served
       * for jpeg.
       */
      jpeg?: Array<unknown>;

      /**
       * List of strings with the MIME types of all the variants that should be served
       * for jpg.
       */
      jpg?: Array<unknown>;

      /**
       * List of strings with the MIME types of all the variants that should be served
       * for jpg2.
       */
      jpg2?: Array<unknown>;

      /**
       * List of strings with the MIME types of all the variants that should be served
       * for png.
       */
      png?: Array<unknown>;

      /**
       * List of strings with the MIME types of all the variants that should be served
       * for tif.
       */
      tif?: Array<unknown>;

      /**
       * List of strings with the MIME types of all the variants that should be served
       * for tiff.
       */
      tiff?: Array<unknown>;

      /**
       * List of strings with the MIME types of all the variants that should be served
       * for webp.
       */
      webp?: Array<unknown>;
    }
  }
}

export interface VariantDeleteResponse {
  errors?: Array<VariantDeleteResponse.Error>;

  messages?: Array<VariantDeleteResponse.Message>;

  /**
   * Variant support enables caching variants of images with certain file extensions
   * in addition to the original. This only applies when the origin server sends the
   * 'Vary: Accept' response header. If the origin server sends 'Vary: Accept' but
   * does not serve the variant requested, the response will not be cached. This will
   * be indicated with BYPASS cache status in the response headers.
   */
  result?: VariantDeleteResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace VariantDeleteResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Variant support enables caching variants of images with certain file extensions
   * in addition to the original. This only applies when the origin server sends the
   * 'Vary: Accept' response header. If the origin server sends 'Vary: Accept' but
   * does not serve the variant requested, the response will not be cached. This will
   * be indicated with BYPASS cache status in the response headers.
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'variants';

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }
}

export interface VariantZoneCacheSettingsChangeVariantsSettingResponse {
  errors?: Array<VariantZoneCacheSettingsChangeVariantsSettingResponse.Error>;

  messages?: Array<VariantZoneCacheSettingsChangeVariantsSettingResponse.Message>;

  result?: VariantZoneCacheSettingsChangeVariantsSettingResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace VariantZoneCacheSettingsChangeVariantsSettingResponse {
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
     * ID of the zone setting.
     */
    id?: 'variants';

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the zone setting.
     */
    value?: Result.Value;
  }

  export namespace Result {
    /**
     * Value of the zone setting.
     */
    export interface Value {
      /**
       * List of strings with the MIME types of all the variants that should be served
       * for avif.
       */
      avif?: Array<unknown>;

      /**
       * List of strings with the MIME types of all the variants that should be served
       * for bmp.
       */
      bmp?: Array<unknown>;

      /**
       * List of strings with the MIME types of all the variants that should be served
       * for gif.
       */
      gif?: Array<unknown>;

      /**
       * List of strings with the MIME types of all the variants that should be served
       * for jp2.
       */
      jp2?: Array<unknown>;

      /**
       * List of strings with the MIME types of all the variants that should be served
       * for jpeg.
       */
      jpeg?: Array<unknown>;

      /**
       * List of strings with the MIME types of all the variants that should be served
       * for jpg.
       */
      jpg?: Array<unknown>;

      /**
       * List of strings with the MIME types of all the variants that should be served
       * for jpg2.
       */
      jpg2?: Array<unknown>;

      /**
       * List of strings with the MIME types of all the variants that should be served
       * for png.
       */
      png?: Array<unknown>;

      /**
       * List of strings with the MIME types of all the variants that should be served
       * for tif.
       */
      tif?: Array<unknown>;

      /**
       * List of strings with the MIME types of all the variants that should be served
       * for tiff.
       */
      tiff?: Array<unknown>;

      /**
       * List of strings with the MIME types of all the variants that should be served
       * for webp.
       */
      webp?: Array<unknown>;
    }
  }
}

export interface VariantZoneCacheSettingsChangeVariantsSettingParams {
  /**
   * Value of the zone setting.
   */
  value: VariantZoneCacheSettingsChangeVariantsSettingParams.Value;
}

export namespace VariantZoneCacheSettingsChangeVariantsSettingParams {
  /**
   * Value of the zone setting.
   */
  export interface Value {
    /**
     * List of strings with the MIME types of all the variants that should be served
     * for avif.
     */
    avif?: Array<unknown>;

    /**
     * List of strings with the MIME types of all the variants that should be served
     * for bmp.
     */
    bmp?: Array<unknown>;

    /**
     * List of strings with the MIME types of all the variants that should be served
     * for gif.
     */
    gif?: Array<unknown>;

    /**
     * List of strings with the MIME types of all the variants that should be served
     * for jp2.
     */
    jp2?: Array<unknown>;

    /**
     * List of strings with the MIME types of all the variants that should be served
     * for jpeg.
     */
    jpeg?: Array<unknown>;

    /**
     * List of strings with the MIME types of all the variants that should be served
     * for jpg.
     */
    jpg?: Array<unknown>;

    /**
     * List of strings with the MIME types of all the variants that should be served
     * for jpg2.
     */
    jpg2?: Array<unknown>;

    /**
     * List of strings with the MIME types of all the variants that should be served
     * for png.
     */
    png?: Array<unknown>;

    /**
     * List of strings with the MIME types of all the variants that should be served
     * for tif.
     */
    tif?: Array<unknown>;

    /**
     * List of strings with the MIME types of all the variants that should be served
     * for tiff.
     */
    tiff?: Array<unknown>;

    /**
     * List of strings with the MIME types of all the variants that should be served
     * for webp.
     */
    webp?: Array<unknown>;
  }
}

export namespace Variants {
  export import VariantListResponse = VariantsAPI.VariantListResponse;
  export import VariantDeleteResponse = VariantsAPI.VariantDeleteResponse;
  export import VariantZoneCacheSettingsChangeVariantsSettingResponse = VariantsAPI.VariantZoneCacheSettingsChangeVariantsSettingResponse;
  export import VariantZoneCacheSettingsChangeVariantsSettingParams = VariantsAPI.VariantZoneCacheSettingsChangeVariantsSettingParams;
}
