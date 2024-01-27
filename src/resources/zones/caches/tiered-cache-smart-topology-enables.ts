// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as TieredCacheSmartTopologyEnablesAPI from 'cloudflare/resources/zones/caches/tiered-cache-smart-topology-enables';

export class TieredCacheSmartTopologyEnables extends APIResource {
  /**
   * Remvoves enablement of Smart Tiered Cache
   */
  delete(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TieredCacheSmartTopologyEnableDeleteResponse> {
    return this._client.delete(`/zones/${zoneIdentifier}/cache/tiered_cache_smart_topology_enable`, options);
  }

  /**
   * Get Smart Tiered Cache setting
   */
  smartTieredCacheGetSmartTieredCacheSetting(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TieredCacheSmartTopologyEnableSmartTieredCacheGetSmartTieredCacheSettingResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/cache/tiered_cache_smart_topology_enable`, options);
  }

  /**
   * Updates enablement of Tiered Cache
   */
  smartTieredCachePatchSmartTieredCacheSetting(
    zoneIdentifier: string,
    body: TieredCacheSmartTopologyEnableSmartTieredCachePatchSmartTieredCacheSettingParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TieredCacheSmartTopologyEnableSmartTieredCachePatchSmartTieredCacheSettingResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/cache/tiered_cache_smart_topology_enable`, {
      body,
      ...options,
    });
  }
}

export interface TieredCacheSmartTopologyEnableDeleteResponse {
  errors?: Array<TieredCacheSmartTopologyEnableDeleteResponse.Error>;

  messages?: Array<TieredCacheSmartTopologyEnableDeleteResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace TieredCacheSmartTopologyEnableDeleteResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface TieredCacheSmartTopologyEnableSmartTieredCacheGetSmartTieredCacheSettingResponse {
  errors?: Array<TieredCacheSmartTopologyEnableSmartTieredCacheGetSmartTieredCacheSettingResponse.Error>;

  messages?: Array<TieredCacheSmartTopologyEnableSmartTieredCacheGetSmartTieredCacheSettingResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace TieredCacheSmartTopologyEnableSmartTieredCacheGetSmartTieredCacheSettingResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface TieredCacheSmartTopologyEnableSmartTieredCachePatchSmartTieredCacheSettingResponse {
  errors?: Array<TieredCacheSmartTopologyEnableSmartTieredCachePatchSmartTieredCacheSettingResponse.Error>;

  messages?: Array<TieredCacheSmartTopologyEnableSmartTieredCachePatchSmartTieredCacheSettingResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace TieredCacheSmartTopologyEnableSmartTieredCachePatchSmartTieredCacheSettingResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface TieredCacheSmartTopologyEnableSmartTieredCachePatchSmartTieredCacheSettingParams {
  /**
   * Enables Tiered Cache.
   */
  value: 'on' | 'off';
}

export namespace TieredCacheSmartTopologyEnables {
  export import TieredCacheSmartTopologyEnableDeleteResponse = TieredCacheSmartTopologyEnablesAPI.TieredCacheSmartTopologyEnableDeleteResponse;
  export import TieredCacheSmartTopologyEnableSmartTieredCacheGetSmartTieredCacheSettingResponse = TieredCacheSmartTopologyEnablesAPI.TieredCacheSmartTopologyEnableSmartTieredCacheGetSmartTieredCacheSettingResponse;
  export import TieredCacheSmartTopologyEnableSmartTieredCachePatchSmartTieredCacheSettingResponse = TieredCacheSmartTopologyEnablesAPI.TieredCacheSmartTopologyEnableSmartTieredCachePatchSmartTieredCacheSettingResponse;
  export import TieredCacheSmartTopologyEnableSmartTieredCachePatchSmartTieredCacheSettingParams = TieredCacheSmartTopologyEnablesAPI.TieredCacheSmartTopologyEnableSmartTieredCachePatchSmartTieredCacheSettingParams;
}
