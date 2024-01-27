// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as WebpsAPI from 'cloudflare/resources/zones/settings/webps';

export class Webps extends APIResource {
  /**
   * When the client requesting the image supports the WebP image codec, and WebP
   * offers a performance advantage over the original image format, Cloudflare will
   * serve a WebP version of the original image.
   */
  update(
    zoneIdentifier: string,
    body: WebpUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebpUpdateResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/settings/webp`, { body, ...options });
  }

  /**
   * When the client requesting the image supports the WebP image codec, and WebP
   * offers a performance advantage over the original image format, Cloudflare will
   * serve a WebP version of the original image.
   */
  list(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<WebpListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/settings/webp`, options);
  }
}

export interface WebpUpdateResponse {
  errors?: Array<WebpUpdateResponse.Error>;

  messages?: Array<WebpUpdateResponse.Message>;

  /**
   * When the client requesting the image supports the WebP image codec, and WebP
   * offers a performance advantage over the original image format, Cloudflare will
   * serve a WebP version of the original image.
   */
  result?: WebpUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace WebpUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * When the client requesting the image supports the WebP image codec, and WebP
   * offers a performance advantage over the original image format, Cloudflare will
   * serve a WebP version of the original image.
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'webp';

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
    value?: 'off' | 'on';
  }
}

export interface WebpListResponse {
  errors?: Array<WebpListResponse.Error>;

  messages?: Array<WebpListResponse.Message>;

  /**
   * When the client requesting the image supports the WebP image codec, and WebP
   * offers a performance advantage over the original image format, Cloudflare will
   * serve a WebP version of the original image.
   */
  result?: WebpListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace WebpListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * When the client requesting the image supports the WebP image codec, and WebP
   * offers a performance advantage over the original image format, Cloudflare will
   * serve a WebP version of the original image.
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'webp';

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
    value?: 'off' | 'on';
  }
}

export interface WebpUpdateParams {
  /**
   * Value of the zone setting.
   */
  value: 'off' | 'on';
}

export namespace Webps {
  export import WebpUpdateResponse = WebpsAPI.WebpUpdateResponse;
  export import WebpListResponse = WebpsAPI.WebpListResponse;
  export import WebpUpdateParams = WebpsAPI.WebpUpdateParams;
}
