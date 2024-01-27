// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as HotlinkProtectionsAPI from 'cloudflare/resources/zones/settings/hotlink-protections';

export class HotlinkProtections extends APIResource {
  /**
   * When enabled, the Hotlink Protection option ensures that other sites cannot suck
   * up your bandwidth by building pages that use images hosted on your site. Anytime
   * a request for an image on your site hits Cloudflare, we check to ensure that
   * it's not another site requesting them. People will still be able to download and
   * view images from your page, but other sites won't be able to steal them for use
   * on their own pages.
   * (https://support.cloudflare.com/hc/en-us/articles/200170026).
   */
  update(
    zoneIdentifier: string,
    body: HotlinkProtectionUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HotlinkProtectionUpdateResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/settings/hotlink_protection`, { body, ...options });
  }

  /**
   * When enabled, the Hotlink Protection option ensures that other sites cannot suck
   * up your bandwidth by building pages that use images hosted on your site. Anytime
   * a request for an image on your site hits Cloudflare, we check to ensure that
   * it's not another site requesting them. People will still be able to download and
   * view images from your page, but other sites won't be able to steal them for use
   * on their own pages.
   * (https://support.cloudflare.com/hc/en-us/articles/200170026).
   */
  list(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HotlinkProtectionListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/settings/hotlink_protection`, options);
  }
}

export interface HotlinkProtectionUpdateResponse {
  errors?: Array<HotlinkProtectionUpdateResponse.Error>;

  messages?: Array<HotlinkProtectionUpdateResponse.Message>;

  /**
   * When enabled, the Hotlink Protection option ensures that other sites cannot suck
   * up your bandwidth by building pages that use images hosted on your site. Anytime
   * a request for an image on your site hits Cloudflare, we check to ensure that
   * it's not another site requesting them. People will still be able to download and
   * view images from your page, but other sites won't be able to steal them for use
   * on their own pages.
   * (https://support.cloudflare.com/hc/en-us/articles/200170026).
   */
  result?: HotlinkProtectionUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace HotlinkProtectionUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * When enabled, the Hotlink Protection option ensures that other sites cannot suck
   * up your bandwidth by building pages that use images hosted on your site. Anytime
   * a request for an image on your site hits Cloudflare, we check to ensure that
   * it's not another site requesting them. People will still be able to download and
   * view images from your page, but other sites won't be able to steal them for use
   * on their own pages.
   * (https://support.cloudflare.com/hc/en-us/articles/200170026).
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'hotlink_protection';

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

export interface HotlinkProtectionListResponse {
  errors?: Array<HotlinkProtectionListResponse.Error>;

  messages?: Array<HotlinkProtectionListResponse.Message>;

  /**
   * When enabled, the Hotlink Protection option ensures that other sites cannot suck
   * up your bandwidth by building pages that use images hosted on your site. Anytime
   * a request for an image on your site hits Cloudflare, we check to ensure that
   * it's not another site requesting them. People will still be able to download and
   * view images from your page, but other sites won't be able to steal them for use
   * on their own pages.
   * (https://support.cloudflare.com/hc/en-us/articles/200170026).
   */
  result?: HotlinkProtectionListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace HotlinkProtectionListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * When enabled, the Hotlink Protection option ensures that other sites cannot suck
   * up your bandwidth by building pages that use images hosted on your site. Anytime
   * a request for an image on your site hits Cloudflare, we check to ensure that
   * it's not another site requesting them. People will still be able to download and
   * view images from your page, but other sites won't be able to steal them for use
   * on their own pages.
   * (https://support.cloudflare.com/hc/en-us/articles/200170026).
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'hotlink_protection';

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

export interface HotlinkProtectionUpdateParams {
  /**
   * Value of the zone setting.
   */
  value: 'on' | 'off';
}

export namespace HotlinkProtections {
  export import HotlinkProtectionUpdateResponse = HotlinkProtectionsAPI.HotlinkProtectionUpdateResponse;
  export import HotlinkProtectionListResponse = HotlinkProtectionsAPI.HotlinkProtectionListResponse;
  export import HotlinkProtectionUpdateParams = HotlinkProtectionsAPI.HotlinkProtectionUpdateParams;
}
