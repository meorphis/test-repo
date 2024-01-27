// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as FontsAPI from 'cloudflare/resources/zones/settings/fonts';

export class Fonts extends APIResource {
  /**
   * Enhance your website's font delivery with Cloudflare Fonts. Deliver Google
   * Hosted fonts from your own domain, boost performance, and enhance user privacy.
   * Refer to the Cloudflare Fonts documentation for more information.
   */
  retrieve(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<FontRetrieveResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/settings/fonts`, options);
  }

  /**
   * Enhance your website's font delivery with Cloudflare Fonts. Deliver Google
   * Hosted fonts from your own domain, boost performance, and enhance user privacy.
   * Refer to the Cloudflare Fonts documentation for more information.
   */
  update(
    zoneIdentifier: string,
    body: FontUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FontUpdateResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/settings/fonts`, { body, ...options });
  }
}

/**
 * Enhance your website's font delivery with Cloudflare Fonts. Deliver Google
 * Hosted fonts from your own domain, boost performance, and enhance user privacy.
 * Refer to the Cloudflare Fonts documentation for more information.
 */
export interface CloudflareFonts {
  /**
   * ID of the zone setting.
   */
  id?: 'fonts';

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
   * Whether the feature is enabled or disabled.
   */
  value?: 'on' | 'off';
}

export interface FontRetrieveResponse {
  errors?: Array<FontRetrieveResponse.Error>;

  messages?: Array<FontRetrieveResponse.Message>;

  /**
   * Enhance your website's font delivery with Cloudflare Fonts. Deliver Google
   * Hosted fonts from your own domain, boost performance, and enhance user privacy.
   * Refer to the Cloudflare Fonts documentation for more information.
   */
  result?: CloudflareFonts;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace FontRetrieveResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface FontUpdateResponse {
  errors?: Array<FontUpdateResponse.Error>;

  messages?: Array<FontUpdateResponse.Message>;

  /**
   * Enhance your website's font delivery with Cloudflare Fonts. Deliver Google
   * Hosted fonts from your own domain, boost performance, and enhance user privacy.
   * Refer to the Cloudflare Fonts documentation for more information.
   */
  result?: CloudflareFonts;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace FontUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface FontUpdateParams {
  /**
   * Whether the feature is enabled or disabled.
   */
  value: 'on' | 'off';
}

export namespace Fonts {
  export import CloudflareFonts = FontsAPI.CloudflareFonts;
  export import FontRetrieveResponse = FontsAPI.FontRetrieveResponse;
  export import FontUpdateResponse = FontsAPI.FontUpdateResponse;
  export import FontUpdateParams = FontsAPI.FontUpdateParams;
}
