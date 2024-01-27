// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as AlwaysUseHTTPsAPI from 'cloudflare/resources/zones/settings/always-use-https';

export class AlwaysUseHTTPs extends APIResource {
  /**
   * Reply to all requests for URLs that use "http" with a 301 redirect to the
   * equivalent "https" URL. If you only want to redirect for a subset of requests,
   * consider creating an "Always use HTTPS" page rule.
   */
  update(
    zoneIdentifier: string,
    body: AlwaysUseHTTPUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AlwaysUseHTTPUpdateResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/settings/always_use_https`, { body, ...options });
  }

  /**
   * Reply to all requests for URLs that use "http" with a 301 redirect to the
   * equivalent "https" URL. If you only want to redirect for a subset of requests,
   * consider creating an "Always use HTTPS" page rule.
   */
  list(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<AlwaysUseHTTPListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/settings/always_use_https`, options);
  }
}

export interface AlwaysUseHTTPUpdateResponse {
  errors?: Array<AlwaysUseHTTPUpdateResponse.Error>;

  messages?: Array<AlwaysUseHTTPUpdateResponse.Message>;

  /**
   * Reply to all requests for URLs that use "http" with a 301 redirect to the
   * equivalent "https" URL. If you only want to redirect for a subset of requests,
   * consider creating an "Always use HTTPS" page rule.
   */
  result?: AlwaysUseHTTPUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace AlwaysUseHTTPUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Reply to all requests for URLs that use "http" with a 301 redirect to the
   * equivalent "https" URL. If you only want to redirect for a subset of requests,
   * consider creating an "Always use HTTPS" page rule.
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'always_use_https';

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

export interface AlwaysUseHTTPListResponse {
  errors?: Array<AlwaysUseHTTPListResponse.Error>;

  messages?: Array<AlwaysUseHTTPListResponse.Message>;

  /**
   * Reply to all requests for URLs that use "http" with a 301 redirect to the
   * equivalent "https" URL. If you only want to redirect for a subset of requests,
   * consider creating an "Always use HTTPS" page rule.
   */
  result?: AlwaysUseHTTPListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace AlwaysUseHTTPListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Reply to all requests for URLs that use "http" with a 301 redirect to the
   * equivalent "https" URL. If you only want to redirect for a subset of requests,
   * consider creating an "Always use HTTPS" page rule.
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'always_use_https';

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

export interface AlwaysUseHTTPUpdateParams {
  /**
   * Value of the zone setting.
   */
  value: 'on' | 'off';
}

export namespace AlwaysUseHTTPs {
  export import AlwaysUseHTTPUpdateResponse = AlwaysUseHTTPsAPI.AlwaysUseHTTPUpdateResponse;
  export import AlwaysUseHTTPListResponse = AlwaysUseHTTPsAPI.AlwaysUseHTTPListResponse;
  export import AlwaysUseHTTPUpdateParams = AlwaysUseHTTPsAPI.AlwaysUseHTTPUpdateParams;
}
