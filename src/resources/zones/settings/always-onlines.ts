// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as AlwaysOnlinesAPI from 'cloudflare/resources/zones/settings/always-onlines';

export class AlwaysOnlines extends APIResource {
  /**
   * When enabled, Cloudflare serves limited copies of web pages available from the
   * [Internet Archive's Wayback Machine](https://archive.org/web/) if your server is
   * offline. Refer to
   * [Always Online](https://developers.cloudflare.com/cache/about/always-online) for
   * more information.
   */
  update(
    zoneIdentifier: string,
    body: AlwaysOnlineUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AlwaysOnlineUpdateResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/settings/always_online`, { body, ...options });
  }

  /**
   * When enabled, Cloudflare serves limited copies of web pages available from the
   * [Internet Archive's Wayback Machine](https://archive.org/web/) if your server is
   * offline. Refer to
   * [Always Online](https://developers.cloudflare.com/cache/about/always-online) for
   * more information.
   */
  list(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<AlwaysOnlineListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/settings/always_online`, options);
  }
}

export interface AlwaysOnlineUpdateResponse {
  errors?: Array<AlwaysOnlineUpdateResponse.Error>;

  messages?: Array<AlwaysOnlineUpdateResponse.Message>;

  /**
   * When enabled, Cloudflare serves limited copies of web pages available from the
   * [Internet Archive's Wayback Machine](https://archive.org/web/) if your server is
   * offline. Refer to
   * [Always Online](https://developers.cloudflare.com/cache/about/always-online) for
   * more information.
   */
  result?: AlwaysOnlineUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace AlwaysOnlineUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * When enabled, Cloudflare serves limited copies of web pages available from the
   * [Internet Archive's Wayback Machine](https://archive.org/web/) if your server is
   * offline. Refer to
   * [Always Online](https://developers.cloudflare.com/cache/about/always-online) for
   * more information.
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'always_online';

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

export interface AlwaysOnlineListResponse {
  errors?: Array<AlwaysOnlineListResponse.Error>;

  messages?: Array<AlwaysOnlineListResponse.Message>;

  /**
   * When enabled, Cloudflare serves limited copies of web pages available from the
   * [Internet Archive's Wayback Machine](https://archive.org/web/) if your server is
   * offline. Refer to
   * [Always Online](https://developers.cloudflare.com/cache/about/always-online) for
   * more information.
   */
  result?: AlwaysOnlineListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace AlwaysOnlineListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * When enabled, Cloudflare serves limited copies of web pages available from the
   * [Internet Archive's Wayback Machine](https://archive.org/web/) if your server is
   * offline. Refer to
   * [Always Online](https://developers.cloudflare.com/cache/about/always-online) for
   * more information.
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'always_online';

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

export interface AlwaysOnlineUpdateParams {
  /**
   * Value of the zone setting.
   */
  value: 'on' | 'off';
}

export namespace AlwaysOnlines {
  export import AlwaysOnlineUpdateResponse = AlwaysOnlinesAPI.AlwaysOnlineUpdateResponse;
  export import AlwaysOnlineListResponse = AlwaysOnlinesAPI.AlwaysOnlineListResponse;
  export import AlwaysOnlineUpdateParams = AlwaysOnlinesAPI.AlwaysOnlineUpdateParams;
}
