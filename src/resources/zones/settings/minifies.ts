// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as MinifiesAPI from 'cloudflare/resources/zones/settings/minifies';

export class Minifies extends APIResource {
  /**
   * Automatically minify certain assets for your website. Refer to
   * [Using Cloudflare Auto Minify](https://support.cloudflare.com/hc/en-us/articles/200168196)
   * for more information.
   */
  update(
    zoneIdentifier: string,
    body: MinifyUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MinifyUpdateResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/settings/minify`, { body, ...options });
  }

  /**
   * Automatically minify certain assets for your website. Refer to
   * [Using Cloudflare Auto Minify](https://support.cloudflare.com/hc/en-us/articles/200168196)
   * for more information.
   */
  list(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<MinifyListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/settings/minify`, options);
  }
}

export interface MinifyUpdateResponse {
  errors?: Array<MinifyUpdateResponse.Error>;

  messages?: Array<MinifyUpdateResponse.Message>;

  /**
   * Automatically minify certain assets for your website. Refer to
   * [Using Cloudflare Auto Minify](https://support.cloudflare.com/hc/en-us/articles/200168196)
   * for more information.
   */
  result?: MinifyUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace MinifyUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Automatically minify certain assets for your website. Refer to
   * [Using Cloudflare Auto Minify](https://support.cloudflare.com/hc/en-us/articles/200168196)
   * for more information.
   */
  export interface Result {
    /**
     * Zone setting identifier.
     */
    id?: 'minify';

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
    value?: Result.Value;
  }

  export namespace Result {
    /**
     * Value of the zone setting.
     */
    export interface Value {
      /**
       * Automatically minify all CSS files for your website.
       */
      css?: 'on' | 'off';

      /**
       * Automatically minify all HTML files for your website.
       */
      html?: 'on' | 'off';

      /**
       * Automatically minify all JavaScript files for your website.
       */
      js?: 'on' | 'off';
    }
  }
}

export interface MinifyListResponse {
  errors?: Array<MinifyListResponse.Error>;

  messages?: Array<MinifyListResponse.Message>;

  /**
   * Automatically minify certain assets for your website. Refer to
   * [Using Cloudflare Auto Minify](https://support.cloudflare.com/hc/en-us/articles/200168196)
   * for more information.
   */
  result?: MinifyListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace MinifyListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Automatically minify certain assets for your website. Refer to
   * [Using Cloudflare Auto Minify](https://support.cloudflare.com/hc/en-us/articles/200168196)
   * for more information.
   */
  export interface Result {
    /**
     * Zone setting identifier.
     */
    id?: 'minify';

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
    value?: Result.Value;
  }

  export namespace Result {
    /**
     * Value of the zone setting.
     */
    export interface Value {
      /**
       * Automatically minify all CSS files for your website.
       */
      css?: 'on' | 'off';

      /**
       * Automatically minify all HTML files for your website.
       */
      html?: 'on' | 'off';

      /**
       * Automatically minify all JavaScript files for your website.
       */
      js?: 'on' | 'off';
    }
  }
}

export interface MinifyUpdateParams {
  /**
   * Value of the zone setting.
   */
  value: MinifyUpdateParams.Value;
}

export namespace MinifyUpdateParams {
  /**
   * Value of the zone setting.
   */
  export interface Value {
    /**
     * Automatically minify all CSS files for your website.
     */
    css?: 'on' | 'off';

    /**
     * Automatically minify all HTML files for your website.
     */
    html?: 'on' | 'off';

    /**
     * Automatically minify all JavaScript files for your website.
     */
    js?: 'on' | 'off';
  }
}

export namespace Minifies {
  export import MinifyUpdateResponse = MinifiesAPI.MinifyUpdateResponse;
  export import MinifyListResponse = MinifiesAPI.MinifyListResponse;
  export import MinifyUpdateParams = MinifiesAPI.MinifyUpdateParams;
}
