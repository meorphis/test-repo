// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as Http2sAPI from 'cloudflare/resources/zones/settings/http2s';

export class Http2s extends APIResource {
  /**
   * Value of the HTTP2 setting.
   */
  update(
    zoneIdentifier: string,
    body: Http2UpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Http2UpdateResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/settings/http2`, { body, ...options });
  }

  /**
   * Value of the HTTP2 setting.
   */
  list(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<Http2ListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/settings/http2`, options);
  }
}

export interface Http2UpdateResponse {
  errors?: Array<Http2UpdateResponse.Error>;

  messages?: Array<Http2UpdateResponse.Message>;

  /**
   * HTTP2 enabled for this zone.
   */
  result?: Http2UpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace Http2UpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * HTTP2 enabled for this zone.
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'http2';

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
     * Value of the HTTP2 setting.
     */
    value?: 'on' | 'off';
  }
}

export interface Http2ListResponse {
  errors?: Array<Http2ListResponse.Error>;

  messages?: Array<Http2ListResponse.Message>;

  /**
   * HTTP2 enabled for this zone.
   */
  result?: Http2ListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace Http2ListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * HTTP2 enabled for this zone.
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'http2';

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
     * Value of the HTTP2 setting.
     */
    value?: 'on' | 'off';
  }
}

export interface Http2UpdateParams {
  /**
   * Value of the HTTP2 setting.
   */
  value: 'on' | 'off';
}

export namespace Http2s {
  export import Http2UpdateResponse = Http2sAPI.Http2UpdateResponse;
  export import Http2ListResponse = Http2sAPI.Http2ListResponse;
  export import Http2UpdateParams = Http2sAPI.Http2UpdateParams;
}
