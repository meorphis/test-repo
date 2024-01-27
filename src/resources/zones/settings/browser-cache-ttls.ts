// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as BrowserCacheTtlsAPI from 'cloudflare/resources/zones/settings/browser-cache-ttls';

export class BrowserCacheTtls extends APIResource {
  /**
   * Browser Cache TTL (in seconds) specifies how long Cloudflare-cached resources
   * will remain on your visitors' computers. Cloudflare will honor any larger times
   * specified by your server.
   * (https://support.cloudflare.com/hc/en-us/articles/200168276).
   */
  update(
    zoneIdentifier: string,
    body: BrowserCacheTtlUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BrowserCacheTtlUpdateResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/settings/browser_cache_ttl`, { body, ...options });
  }

  /**
   * Browser Cache TTL (in seconds) specifies how long Cloudflare-cached resources
   * will remain on your visitors' computers. Cloudflare will honor any larger times
   * specified by your server.
   * (https://support.cloudflare.com/hc/en-us/articles/200168276).
   */
  list(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<BrowserCacheTtlListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/settings/browser_cache_ttl`, options);
  }
}

export interface BrowserCacheTtlUpdateResponse {
  errors?: Array<BrowserCacheTtlUpdateResponse.Error>;

  messages?: Array<BrowserCacheTtlUpdateResponse.Message>;

  /**
   * Browser Cache TTL (in seconds) specifies how long Cloudflare-cached resources
   * will remain on your visitors' computers. Cloudflare will honor any larger times
   * specified by your server.
   * (https://support.cloudflare.com/hc/en-us/articles/200168276).
   */
  result?: BrowserCacheTtlUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace BrowserCacheTtlUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Browser Cache TTL (in seconds) specifies how long Cloudflare-cached resources
   * will remain on your visitors' computers. Cloudflare will honor any larger times
   * specified by your server.
   * (https://support.cloudflare.com/hc/en-us/articles/200168276).
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'browser_cache_ttl';

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
     * Value of the zone setting. Notes: Setting a TTL of 0 is equivalent to selecting
     * `Respect Existing Headers`
     */
    value?:
      | 0
      | 30
      | 60
      | 120
      | 300
      | 1200
      | 1800
      | 3600
      | 7200
      | 10800
      | 14400
      | 18000
      | 28800
      | 43200
      | 57600
      | 72000
      | 86400
      | 172800
      | 259200
      | 345600
      | 432000
      | 691200
      | 1382400
      | 2073600
      | 2678400
      | 5356800
      | 16070400
      | 31536000;
  }
}

export interface BrowserCacheTtlListResponse {
  errors?: Array<BrowserCacheTtlListResponse.Error>;

  messages?: Array<BrowserCacheTtlListResponse.Message>;

  /**
   * Browser Cache TTL (in seconds) specifies how long Cloudflare-cached resources
   * will remain on your visitors' computers. Cloudflare will honor any larger times
   * specified by your server.
   * (https://support.cloudflare.com/hc/en-us/articles/200168276).
   */
  result?: BrowserCacheTtlListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace BrowserCacheTtlListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Browser Cache TTL (in seconds) specifies how long Cloudflare-cached resources
   * will remain on your visitors' computers. Cloudflare will honor any larger times
   * specified by your server.
   * (https://support.cloudflare.com/hc/en-us/articles/200168276).
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'browser_cache_ttl';

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
     * Value of the zone setting. Notes: Setting a TTL of 0 is equivalent to selecting
     * `Respect Existing Headers`
     */
    value?:
      | 0
      | 30
      | 60
      | 120
      | 300
      | 1200
      | 1800
      | 3600
      | 7200
      | 10800
      | 14400
      | 18000
      | 28800
      | 43200
      | 57600
      | 72000
      | 86400
      | 172800
      | 259200
      | 345600
      | 432000
      | 691200
      | 1382400
      | 2073600
      | 2678400
      | 5356800
      | 16070400
      | 31536000;
  }
}

export interface BrowserCacheTtlUpdateParams {
  /**
   * Value of the zone setting. Notes: Setting a TTL of 0 is equivalent to selecting
   * `Respect Existing Headers`
   */
  value:
    | 0
    | 30
    | 60
    | 120
    | 300
    | 1200
    | 1800
    | 3600
    | 7200
    | 10800
    | 14400
    | 18000
    | 28800
    | 43200
    | 57600
    | 72000
    | 86400
    | 172800
    | 259200
    | 345600
    | 432000
    | 691200
    | 1382400
    | 2073600
    | 2678400
    | 5356800
    | 16070400
    | 31536000;
}

export namespace BrowserCacheTtls {
  export import BrowserCacheTtlUpdateResponse = BrowserCacheTtlsAPI.BrowserCacheTtlUpdateResponse;
  export import BrowserCacheTtlListResponse = BrowserCacheTtlsAPI.BrowserCacheTtlListResponse;
  export import BrowserCacheTtlUpdateParams = BrowserCacheTtlsAPI.BrowserCacheTtlUpdateParams;
}
