// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as MobileRedirectsAPI from 'cloudflare/resources/zones/settings/mobile-redirects';

export class MobileRedirects extends APIResource {
  /**
   * Automatically redirect visitors on mobile devices to a mobile-optimized
   * subdomain. Refer to
   * [Understanding Cloudflare Mobile Redirect](https://support.cloudflare.com/hc/articles/200168336)
   * for more information.
   */
  update(
    zoneIdentifier: string,
    body: MobileRedirectUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MobileRedirectUpdateResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/settings/mobile_redirect`, { body, ...options });
  }

  /**
   * Automatically redirect visitors on mobile devices to a mobile-optimized
   * subdomain. Refer to
   * [Understanding Cloudflare Mobile Redirect](https://support.cloudflare.com/hc/articles/200168336)
   * for more information.
   */
  list(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<MobileRedirectListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/settings/mobile_redirect`, options);
  }
}

export interface MobileRedirectUpdateResponse {
  errors?: Array<MobileRedirectUpdateResponse.Error>;

  messages?: Array<MobileRedirectUpdateResponse.Message>;

  /**
   * Automatically redirect visitors on mobile devices to a mobile-optimized
   * subdomain. Refer to
   * [Understanding Cloudflare Mobile Redirect](https://support.cloudflare.com/hc/articles/200168336)
   * for more information.
   */
  result?: MobileRedirectUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace MobileRedirectUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Automatically redirect visitors on mobile devices to a mobile-optimized
   * subdomain. Refer to
   * [Understanding Cloudflare Mobile Redirect](https://support.cloudflare.com/hc/articles/200168336)
   * for more information.
   */
  export interface Result {
    /**
     * Identifier of the zone setting.
     */
    id?: 'mobile_redirect';

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
       * Which subdomain prefix you wish to redirect visitors on mobile devices to
       * (subdomain must already exist).
       */
      mobile_subdomain?: string | null;

      /**
       * Whether or not mobile redirect is enabled.
       */
      status?: 'on' | 'off';

      /**
       * Whether to drop the current page path and redirect to the mobile subdomain URL
       * root, or keep the path and redirect to the same page on the mobile subdomain.
       */
      strip_uri?: boolean;
    }
  }
}

export interface MobileRedirectListResponse {
  errors?: Array<MobileRedirectListResponse.Error>;

  messages?: Array<MobileRedirectListResponse.Message>;

  /**
   * Automatically redirect visitors on mobile devices to a mobile-optimized
   * subdomain. Refer to
   * [Understanding Cloudflare Mobile Redirect](https://support.cloudflare.com/hc/articles/200168336)
   * for more information.
   */
  result?: MobileRedirectListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace MobileRedirectListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Automatically redirect visitors on mobile devices to a mobile-optimized
   * subdomain. Refer to
   * [Understanding Cloudflare Mobile Redirect](https://support.cloudflare.com/hc/articles/200168336)
   * for more information.
   */
  export interface Result {
    /**
     * Identifier of the zone setting.
     */
    id?: 'mobile_redirect';

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
       * Which subdomain prefix you wish to redirect visitors on mobile devices to
       * (subdomain must already exist).
       */
      mobile_subdomain?: string | null;

      /**
       * Whether or not mobile redirect is enabled.
       */
      status?: 'on' | 'off';

      /**
       * Whether to drop the current page path and redirect to the mobile subdomain URL
       * root, or keep the path and redirect to the same page on the mobile subdomain.
       */
      strip_uri?: boolean;
    }
  }
}

export interface MobileRedirectUpdateParams {
  /**
   * Value of the zone setting.
   */
  value: MobileRedirectUpdateParams.Value;
}

export namespace MobileRedirectUpdateParams {
  /**
   * Value of the zone setting.
   */
  export interface Value {
    /**
     * Which subdomain prefix you wish to redirect visitors on mobile devices to
     * (subdomain must already exist).
     */
    mobile_subdomain?: string | null;

    /**
     * Whether or not mobile redirect is enabled.
     */
    status?: 'on' | 'off';

    /**
     * Whether to drop the current page path and redirect to the mobile subdomain URL
     * root, or keep the path and redirect to the same page on the mobile subdomain.
     */
    strip_uri?: boolean;
  }
}

export namespace MobileRedirects {
  export import MobileRedirectUpdateResponse = MobileRedirectsAPI.MobileRedirectUpdateResponse;
  export import MobileRedirectListResponse = MobileRedirectsAPI.MobileRedirectListResponse;
  export import MobileRedirectUpdateParams = MobileRedirectsAPI.MobileRedirectUpdateParams;
}
