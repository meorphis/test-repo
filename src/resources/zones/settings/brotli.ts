// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as BrotliAPI from 'cloudflare/resources/zones/settings/brotli';

export class Brotli extends APIResource {
  /**
   * When the client requesting an asset supports the Brotli compression algorithm,
   * Cloudflare will serve a Brotli compressed version of the asset.
   */
  update(
    zoneIdentifier: string,
    body: BrotliUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BrotliUpdateResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/settings/brotli`, { body, ...options });
  }

  /**
   * When the client requesting an asset supports the Brotli compression algorithm,
   * Cloudflare will serve a Brotli compressed version of the asset.
   */
  list(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<BrotliListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/settings/brotli`, options);
  }
}

export interface BrotliUpdateResponse {
  errors?: Array<BrotliUpdateResponse.Error>;

  messages?: Array<BrotliUpdateResponse.Message>;

  /**
   * When the client requesting an asset supports the Brotli compression algorithm,
   * Cloudflare will serve a Brotli compressed version of the asset.
   */
  result?: BrotliUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace BrotliUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * When the client requesting an asset supports the Brotli compression algorithm,
   * Cloudflare will serve a Brotli compressed version of the asset.
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'brotli';

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
    value?: 'off' | 'on';
  }
}

export interface BrotliListResponse {
  errors?: Array<BrotliListResponse.Error>;

  messages?: Array<BrotliListResponse.Message>;

  /**
   * When the client requesting an asset supports the Brotli compression algorithm,
   * Cloudflare will serve a Brotli compressed version of the asset.
   */
  result?: BrotliListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace BrotliListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * When the client requesting an asset supports the Brotli compression algorithm,
   * Cloudflare will serve a Brotli compressed version of the asset.
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'brotli';

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
    value?: 'off' | 'on';
  }
}

export interface BrotliUpdateParams {
  /**
   * Value of the zone setting.
   */
  value: 'off' | 'on';
}

export namespace Brotli {
  export import BrotliUpdateResponse = BrotliAPI.BrotliUpdateResponse;
  export import BrotliListResponse = BrotliAPI.BrotliListResponse;
  export import BrotliUpdateParams = BrotliAPI.BrotliUpdateParams;
}
