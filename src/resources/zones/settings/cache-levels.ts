// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as CacheLevelsAPI from 'cloudflare/resources/zones/settings/cache-levels';

export class CacheLevels extends APIResource {
  /**
   * Cache Level functions based off the setting level. The basic setting will cache
   * most static resources (i.e., css, images, and JavaScript). The simplified
   * setting will ignore the query string when delivering a cached resource. The
   * aggressive setting will cache all static resources, including ones with a query
   * string. (https://support.cloudflare.com/hc/en-us/articles/200168256).
   */
  update(
    zoneIdentifier: string,
    body: CacheLevelUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CacheLevelUpdateResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/settings/cache_level`, { body, ...options });
  }

  /**
   * Cache Level functions based off the setting level. The basic setting will cache
   * most static resources (i.e., css, images, and JavaScript). The simplified
   * setting will ignore the query string when delivering a cached resource. The
   * aggressive setting will cache all static resources, including ones with a query
   * string. (https://support.cloudflare.com/hc/en-us/articles/200168256).
   */
  list(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<CacheLevelListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/settings/cache_level`, options);
  }
}

export interface CacheLevelUpdateResponse {
  errors?: Array<CacheLevelUpdateResponse.Error>;

  messages?: Array<CacheLevelUpdateResponse.Message>;

  /**
   * Cache Level functions based off the setting level. The basic setting will cache
   * most static resources (i.e., css, images, and JavaScript). The simplified
   * setting will ignore the query string when delivering a cached resource. The
   * aggressive setting will cache all static resources, including ones with a query
   * string. (https://support.cloudflare.com/hc/en-us/articles/200168256).
   */
  result?: CacheLevelUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace CacheLevelUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Cache Level functions based off the setting level. The basic setting will cache
   * most static resources (i.e., css, images, and JavaScript). The simplified
   * setting will ignore the query string when delivering a cached resource. The
   * aggressive setting will cache all static resources, including ones with a query
   * string. (https://support.cloudflare.com/hc/en-us/articles/200168256).
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'cache_level';

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
    value?: 'aggressive' | 'basic' | 'simplified';
  }
}

export interface CacheLevelListResponse {
  errors?: Array<CacheLevelListResponse.Error>;

  messages?: Array<CacheLevelListResponse.Message>;

  /**
   * Cache Level functions based off the setting level. The basic setting will cache
   * most static resources (i.e., css, images, and JavaScript). The simplified
   * setting will ignore the query string when delivering a cached resource. The
   * aggressive setting will cache all static resources, including ones with a query
   * string. (https://support.cloudflare.com/hc/en-us/articles/200168256).
   */
  result?: CacheLevelListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace CacheLevelListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Cache Level functions based off the setting level. The basic setting will cache
   * most static resources (i.e., css, images, and JavaScript). The simplified
   * setting will ignore the query string when delivering a cached resource. The
   * aggressive setting will cache all static resources, including ones with a query
   * string. (https://support.cloudflare.com/hc/en-us/articles/200168256).
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'cache_level';

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
    value?: 'aggressive' | 'basic' | 'simplified';
  }
}

export interface CacheLevelUpdateParams {
  /**
   * Value of the zone setting.
   */
  value: 'aggressive' | 'basic' | 'simplified';
}

export namespace CacheLevels {
  export import CacheLevelUpdateResponse = CacheLevelsAPI.CacheLevelUpdateResponse;
  export import CacheLevelListResponse = CacheLevelsAPI.CacheLevelListResponse;
  export import CacheLevelUpdateParams = CacheLevelsAPI.CacheLevelUpdateParams;
}
