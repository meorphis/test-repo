// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ResponseBufferingsAPI from 'cloudflare/resources/zones/settings/response-bufferings';

export class ResponseBufferings extends APIResource {
  /**
   * Enables or disables buffering of responses from the proxied server. Cloudflare
   * may buffer the whole payload to deliver it at once to the client versus allowing
   * it to be delivered in chunks. By default, the proxied server streams directly
   * and is not buffered by Cloudflare. This is limited to Enterprise Zones.
   */
  update(
    zoneIdentifier: string,
    body: ResponseBufferingUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ResponseBufferingUpdateResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/settings/response_buffering`, { body, ...options });
  }

  /**
   * Enables or disables buffering of responses from the proxied server. Cloudflare
   * may buffer the whole payload to deliver it at once to the client versus allowing
   * it to be delivered in chunks. By default, the proxied server streams directly
   * and is not buffered by Cloudflare. This is limited to Enterprise Zones.
   */
  list(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ResponseBufferingListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/settings/response_buffering`, options);
  }
}

export interface ResponseBufferingUpdateResponse {
  errors?: Array<ResponseBufferingUpdateResponse.Error>;

  messages?: Array<ResponseBufferingUpdateResponse.Message>;

  /**
   * Enables or disables buffering of responses from the proxied server. Cloudflare
   * may buffer the whole payload to deliver it at once to the client versus allowing
   * it to be delivered in chunks. By default, the proxied server streams directly
   * and is not buffered by Cloudflare. This is limited to Enterprise Zones.
   */
  result?: ResponseBufferingUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace ResponseBufferingUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Enables or disables buffering of responses from the proxied server. Cloudflare
   * may buffer the whole payload to deliver it at once to the client versus allowing
   * it to be delivered in chunks. By default, the proxied server streams directly
   * and is not buffered by Cloudflare. This is limited to Enterprise Zones.
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'response_buffering';

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

export interface ResponseBufferingListResponse {
  errors?: Array<ResponseBufferingListResponse.Error>;

  messages?: Array<ResponseBufferingListResponse.Message>;

  /**
   * Enables or disables buffering of responses from the proxied server. Cloudflare
   * may buffer the whole payload to deliver it at once to the client versus allowing
   * it to be delivered in chunks. By default, the proxied server streams directly
   * and is not buffered by Cloudflare. This is limited to Enterprise Zones.
   */
  result?: ResponseBufferingListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace ResponseBufferingListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Enables or disables buffering of responses from the proxied server. Cloudflare
   * may buffer the whole payload to deliver it at once to the client versus allowing
   * it to be delivered in chunks. By default, the proxied server streams directly
   * and is not buffered by Cloudflare. This is limited to Enterprise Zones.
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'response_buffering';

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

export interface ResponseBufferingUpdateParams {
  /**
   * Value of the zone setting.
   */
  value: 'on' | 'off';
}

export namespace ResponseBufferings {
  export import ResponseBufferingUpdateResponse = ResponseBufferingsAPI.ResponseBufferingUpdateResponse;
  export import ResponseBufferingListResponse = ResponseBufferingsAPI.ResponseBufferingListResponse;
  export import ResponseBufferingUpdateParams = ResponseBufferingsAPI.ResponseBufferingUpdateParams;
}
