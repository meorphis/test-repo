// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PrefetchPreloadsAPI from 'cloudflare/resources/zones/settings/prefetch-preloads';

export class PrefetchPreloads extends APIResource {
  /**
   * Cloudflare will prefetch any URLs that are included in the response headers.
   * This is limited to Enterprise Zones.
   */
  update(
    zoneIdentifier: string,
    body: PrefetchPreloadUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PrefetchPreloadUpdateResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/settings/prefetch_preload`, { body, ...options });
  }

  /**
   * Cloudflare will prefetch any URLs that are included in the response headers.
   * This is limited to Enterprise Zones.
   */
  list(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<PrefetchPreloadListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/settings/prefetch_preload`, options);
  }
}

export interface PrefetchPreloadUpdateResponse {
  errors?: Array<PrefetchPreloadUpdateResponse.Error>;

  messages?: Array<PrefetchPreloadUpdateResponse.Message>;

  /**
   * Cloudflare will prefetch any URLs that are included in the response headers.
   * This is limited to Enterprise Zones.
   */
  result?: PrefetchPreloadUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace PrefetchPreloadUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Cloudflare will prefetch any URLs that are included in the response headers.
   * This is limited to Enterprise Zones.
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'prefetch_preload';

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

export interface PrefetchPreloadListResponse {
  errors?: Array<PrefetchPreloadListResponse.Error>;

  messages?: Array<PrefetchPreloadListResponse.Message>;

  /**
   * Cloudflare will prefetch any URLs that are included in the response headers.
   * This is limited to Enterprise Zones.
   */
  result?: PrefetchPreloadListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace PrefetchPreloadListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Cloudflare will prefetch any URLs that are included in the response headers.
   * This is limited to Enterprise Zones.
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'prefetch_preload';

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

export interface PrefetchPreloadUpdateParams {
  /**
   * Value of the zone setting.
   */
  value: 'on' | 'off';
}

export namespace PrefetchPreloads {
  export import PrefetchPreloadUpdateResponse = PrefetchPreloadsAPI.PrefetchPreloadUpdateResponse;
  export import PrefetchPreloadListResponse = PrefetchPreloadsAPI.PrefetchPreloadListResponse;
  export import PrefetchPreloadUpdateParams = PrefetchPreloadsAPI.PrefetchPreloadUpdateParams;
}
