// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as FallbackOriginsAPI from 'cloudflare/resources/zones/custom-hostnames/fallback-origins';

export class FallbackOrigins extends APIResource {
  /**
   * Delete Fallback Origin for Custom Hostnames
   */
  delete(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FallbackOriginDeleteResponse> {
    return this._client.delete(`/zones/${zoneIdentifier}/custom_hostnames/fallback_origin`, options);
  }

  /**
   * Get Fallback Origin for Custom Hostnames
   */
  customHostnameFallbackOriginForAZoneGetFallbackOriginForCustomHostnames(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FallbackOriginCustomHostnameFallbackOriginForAZoneGetFallbackOriginForCustomHostnamesResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/custom_hostnames/fallback_origin`, options);
  }

  /**
   * Update Fallback Origin for Custom Hostnames
   */
  customHostnameFallbackOriginForAZoneUpdateFallbackOriginForCustomHostnames(
    zoneIdentifier: string,
    body: FallbackOriginCustomHostnameFallbackOriginForAZoneUpdateFallbackOriginForCustomHostnamesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FallbackOriginCustomHostnameFallbackOriginForAZoneUpdateFallbackOriginForCustomHostnamesResponse> {
    return this._client.put(`/zones/${zoneIdentifier}/custom_hostnames/fallback_origin`, {
      body,
      ...options,
    });
  }
}

export interface FallbackOriginDeleteResponse {
  errors?: Array<FallbackOriginDeleteResponse.Error>;

  messages?: Array<FallbackOriginDeleteResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace FallbackOriginDeleteResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface FallbackOriginCustomHostnameFallbackOriginForAZoneGetFallbackOriginForCustomHostnamesResponse {
  errors?: Array<FallbackOriginCustomHostnameFallbackOriginForAZoneGetFallbackOriginForCustomHostnamesResponse.Error>;

  messages?: Array<FallbackOriginCustomHostnameFallbackOriginForAZoneGetFallbackOriginForCustomHostnamesResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace FallbackOriginCustomHostnameFallbackOriginForAZoneGetFallbackOriginForCustomHostnamesResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface FallbackOriginCustomHostnameFallbackOriginForAZoneUpdateFallbackOriginForCustomHostnamesResponse {
  errors?: Array<FallbackOriginCustomHostnameFallbackOriginForAZoneUpdateFallbackOriginForCustomHostnamesResponse.Error>;

  messages?: Array<FallbackOriginCustomHostnameFallbackOriginForAZoneUpdateFallbackOriginForCustomHostnamesResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace FallbackOriginCustomHostnameFallbackOriginForAZoneUpdateFallbackOriginForCustomHostnamesResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface FallbackOriginCustomHostnameFallbackOriginForAZoneUpdateFallbackOriginForCustomHostnamesParams {
  /**
   * Your origin hostname that requests to your custom hostnames will be sent to.
   */
  origin: string;
}

export namespace FallbackOrigins {
  export import FallbackOriginDeleteResponse = FallbackOriginsAPI.FallbackOriginDeleteResponse;
  export import FallbackOriginCustomHostnameFallbackOriginForAZoneGetFallbackOriginForCustomHostnamesResponse = FallbackOriginsAPI.FallbackOriginCustomHostnameFallbackOriginForAZoneGetFallbackOriginForCustomHostnamesResponse;
  export import FallbackOriginCustomHostnameFallbackOriginForAZoneUpdateFallbackOriginForCustomHostnamesResponse = FallbackOriginsAPI.FallbackOriginCustomHostnameFallbackOriginForAZoneUpdateFallbackOriginForCustomHostnamesResponse;
  export import FallbackOriginCustomHostnameFallbackOriginForAZoneUpdateFallbackOriginForCustomHostnamesParams = FallbackOriginsAPI.FallbackOriginCustomHostnameFallbackOriginForAZoneUpdateFallbackOriginForCustomHostnamesParams;
}
