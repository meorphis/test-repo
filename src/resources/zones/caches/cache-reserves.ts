// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as CacheReservesAPI from 'cloudflare/resources/zones/caches/cache-reserves';

export class CacheReserves extends APIResource {
  /**
   * Increase cache lifetimes by automatically storing all cacheable files into
   * Cloudflare's persistent object storage buckets. Requires Cache Reserve
   * subscription. Note: using Tiered Cache with Cache Reserve is highly recommended
   * to reduce Reserve operations costs. See the
   * [developer docs](https://developers.cloudflare.com/cache/about/cache-reserve)
   * for more information.
   */
  list(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<CacheReserveListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/cache/cache_reserve`, options);
  }

  /**
   * Increase cache lifetimes by automatically storing all cacheable files into
   * Cloudflare's persistent object storage buckets. Requires Cache Reserve
   * subscription. Note: using Tiered Cache with Cache Reserve is highly recommended
   * to reduce Reserve operations costs. See the
   * [developer docs](https://developers.cloudflare.com/cache/about/cache-reserve)
   * for more information.
   */
  zoneCacheSettingsChangeCacheReserveSetting(
    zoneIdentifier: string,
    body: CacheReserveZoneCacheSettingsChangeCacheReserveSettingParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CacheReserveZoneCacheSettingsChangeCacheReserveSettingResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/cache/cache_reserve`, { body, ...options });
  }
}

export interface CacheReserveListResponse {
  errors?: Array<CacheReserveListResponse.Error>;

  messages?: Array<CacheReserveListResponse.Message>;

  result?: CacheReserveListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace CacheReserveListResponse {
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
    id?: 'cache_reserve';

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the Cache Reserve zone setting.
     */
    value?: 'on' | 'off';
  }
}

export interface CacheReserveZoneCacheSettingsChangeCacheReserveSettingResponse {
  errors?: Array<CacheReserveZoneCacheSettingsChangeCacheReserveSettingResponse.Error>;

  messages?: Array<CacheReserveZoneCacheSettingsChangeCacheReserveSettingResponse.Message>;

  result?: CacheReserveZoneCacheSettingsChangeCacheReserveSettingResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace CacheReserveZoneCacheSettingsChangeCacheReserveSettingResponse {
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
    id?: 'cache_reserve';

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Value of the Cache Reserve zone setting.
     */
    value?: 'on' | 'off';
  }
}

export interface CacheReserveZoneCacheSettingsChangeCacheReserveSettingParams {
  /**
   * Value of the Cache Reserve zone setting.
   */
  value: 'on' | 'off';
}

export namespace CacheReserves {
  export import CacheReserveListResponse = CacheReservesAPI.CacheReserveListResponse;
  export import CacheReserveZoneCacheSettingsChangeCacheReserveSettingResponse = CacheReservesAPI.CacheReserveZoneCacheSettingsChangeCacheReserveSettingResponse;
  export import CacheReserveZoneCacheSettingsChangeCacheReserveSettingParams = CacheReservesAPI.CacheReserveZoneCacheSettingsChangeCacheReserveSettingParams;
}
