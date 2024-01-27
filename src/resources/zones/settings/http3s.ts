// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as Http3sAPI from 'cloudflare/resources/zones/settings/http3s';

export class Http3s extends APIResource {
  /**
   * Value of the HTTP3 setting.
   */
  update(
    zoneIdentifier: string,
    body: Http3UpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Http3UpdateResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/settings/http3`, { body, ...options });
  }

  /**
   * Value of the HTTP3 setting.
   */
  list(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<Http3ListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/settings/http3`, options);
  }
}

export interface Http3UpdateResponse {
  errors?: Array<Http3UpdateResponse.Error>;

  messages?: Array<Http3UpdateResponse.Message>;

  /**
   * HTTP3 enabled for this zone.
   */
  result?: Http3UpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace Http3UpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * HTTP3 enabled for this zone.
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'http3';

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
     * Value of the HTTP3 setting.
     */
    value?: 'on' | 'off';
  }
}

export interface Http3ListResponse {
  errors?: Array<Http3ListResponse.Error>;

  messages?: Array<Http3ListResponse.Message>;

  /**
   * HTTP3 enabled for this zone.
   */
  result?: Http3ListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace Http3ListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * HTTP3 enabled for this zone.
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'http3';

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
     * Value of the HTTP3 setting.
     */
    value?: 'on' | 'off';
  }
}

export interface Http3UpdateParams {
  /**
   * Value of the HTTP3 setting.
   */
  value: 'on' | 'off';
}

export namespace Http3s {
  export import Http3UpdateResponse = Http3sAPI.Http3UpdateResponse;
  export import Http3ListResponse = Http3sAPI.Http3ListResponse;
  export import Http3UpdateParams = Http3sAPI.Http3UpdateParams;
}
