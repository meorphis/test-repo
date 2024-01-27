// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as OriginMaxHTTPVersionsAPI from 'cloudflare/resources/zones/settings/origin-max-http-versions';

export class OriginMaxHTTPVersions extends APIResource {
  /**
   * The highest HTTP version Cloudflare will attempt to use with your origin. This
   * setting allows Cloudflare to make HTTP/2 requests to your origin. (Refer to
   * [Enable HTTP/2 to Origin](https://developers.cloudflare.com/cache/how-to/enable-http2-to-origin/),
   * for more information.).
   */
  update(
    zoneIdentifier: string,
    body: OriginMaxHTTPVersionUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OriginMaxHTTPVersionUpdateResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/settings/origin_max_http_version`, {
      body,
      ...options,
    });
  }

  /**
   * The highest HTTP version Cloudflare will attempt to use with your origin. This
   * setting allows Cloudflare to make HTTP/2 requests to your origin. (Refer to
   * [Enable HTTP/2 to Origin](https://developers.cloudflare.com/cache/how-to/enable-http2-to-origin/),
   * for more information.).
   */
  list(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OriginMaxHTTPVersionListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/settings/origin_max_http_version`, options);
  }
}

export interface OriginMaxHTTPVersionUpdateResponse {
  errors?: Array<OriginMaxHTTPVersionUpdateResponse.Error>;

  messages?: Array<OriginMaxHTTPVersionUpdateResponse.Message>;

  result?: OriginMaxHTTPVersionUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace OriginMaxHTTPVersionUpdateResponse {
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
     * Identifier of the zone setting.
     */
    id: 'origin_max_http_version';

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }
}

export interface OriginMaxHTTPVersionListResponse {
  errors?: Array<OriginMaxHTTPVersionListResponse.Error>;

  messages?: Array<OriginMaxHTTPVersionListResponse.Message>;

  result?: OriginMaxHTTPVersionListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace OriginMaxHTTPVersionListResponse {
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
     * Identifier of the zone setting.
     */
    id: 'origin_max_http_version';

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;
  }
}

export interface OriginMaxHTTPVersionUpdateParams {
  value: OriginMaxHTTPVersionUpdateParams.Value;
}

export namespace OriginMaxHTTPVersionUpdateParams {
  export interface Value {
    /**
     * Identifier of the zone setting.
     */
    id: 'origin_max_http_version';
  }
}

export namespace OriginMaxHTTPVersions {
  export import OriginMaxHTTPVersionUpdateResponse = OriginMaxHTTPVersionsAPI.OriginMaxHTTPVersionUpdateResponse;
  export import OriginMaxHTTPVersionListResponse = OriginMaxHTTPVersionsAPI.OriginMaxHTTPVersionListResponse;
  export import OriginMaxHTTPVersionUpdateParams = OriginMaxHTTPVersionsAPI.OriginMaxHTTPVersionUpdateParams;
}
