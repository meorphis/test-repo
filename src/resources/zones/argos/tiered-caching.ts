// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as TieredCachingAPI from 'cloudflare/resources/zones/argos/tiered-caching';

export class TieredCaching extends APIResource {
  /**
   * Get Tiered Caching setting
   */
  tieredCachingGetTieredCachingSetting(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TieredCachingTieredCachingGetTieredCachingSettingResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/argo/tiered_caching`, options);
  }

  /**
   * Updates enablement of Tiered Caching
   */
  tieredCachingPatchTieredCachingSetting(
    zoneIdentifier: string,
    body: TieredCachingTieredCachingPatchTieredCachingSettingParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TieredCachingTieredCachingPatchTieredCachingSettingResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/argo/tiered_caching`, { body, ...options });
  }
}

export interface TieredCachingTieredCachingGetTieredCachingSettingResponse {
  errors?: Array<TieredCachingTieredCachingGetTieredCachingSettingResponse.Error>;

  messages?: Array<TieredCachingTieredCachingGetTieredCachingSettingResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace TieredCachingTieredCachingGetTieredCachingSettingResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface TieredCachingTieredCachingPatchTieredCachingSettingResponse {
  errors?: Array<TieredCachingTieredCachingPatchTieredCachingSettingResponse.Error>;

  messages?: Array<TieredCachingTieredCachingPatchTieredCachingSettingResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace TieredCachingTieredCachingPatchTieredCachingSettingResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface TieredCachingTieredCachingPatchTieredCachingSettingParams {
  /**
   * Enables Tiered Caching.
   */
  value: 'on' | 'off';
}

export namespace TieredCaching {
  export import TieredCachingTieredCachingGetTieredCachingSettingResponse = TieredCachingAPI.TieredCachingTieredCachingGetTieredCachingSettingResponse;
  export import TieredCachingTieredCachingPatchTieredCachingSettingResponse = TieredCachingAPI.TieredCachingTieredCachingPatchTieredCachingSettingResponse;
  export import TieredCachingTieredCachingPatchTieredCachingSettingParams = TieredCachingAPI.TieredCachingTieredCachingPatchTieredCachingSettingParams;
}
