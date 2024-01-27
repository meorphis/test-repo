// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as TrueClientIPHeadersAPI from 'cloudflare/resources/zones/settings/true-client-ip-headers';

export class TrueClientIPHeaders extends APIResource {
  /**
   * Allows customer to continue to use True Client IP (Akamai feature) in the
   * headers we send to the origin. This is limited to Enterprise Zones.
   */
  update(
    zoneIdentifier: string,
    body: TrueClientIPHeaderUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TrueClientIPHeaderUpdateResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/settings/true_client_ip_header`, {
      body,
      ...options,
    });
  }

  /**
   * Allows customer to continue to use True Client IP (Akamai feature) in the
   * headers we send to the origin. This is limited to Enterprise Zones.
   */
  list(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TrueClientIPHeaderListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/settings/true_client_ip_header`, options);
  }
}

export interface TrueClientIPHeaderUpdateResponse {
  errors?: Array<TrueClientIPHeaderUpdateResponse.Error>;

  messages?: Array<TrueClientIPHeaderUpdateResponse.Message>;

  /**
   * Allows customer to continue to use True Client IP (Akamai feature) in the
   * headers we send to the origin. This is limited to Enterprise Zones.
   */
  result?: TrueClientIPHeaderUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace TrueClientIPHeaderUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Allows customer to continue to use True Client IP (Akamai feature) in the
   * headers we send to the origin. This is limited to Enterprise Zones.
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'true_client_ip_header';

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

export interface TrueClientIPHeaderListResponse {
  errors?: Array<TrueClientIPHeaderListResponse.Error>;

  messages?: Array<TrueClientIPHeaderListResponse.Message>;

  /**
   * Allows customer to continue to use True Client IP (Akamai feature) in the
   * headers we send to the origin. This is limited to Enterprise Zones.
   */
  result?: TrueClientIPHeaderListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace TrueClientIPHeaderListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Allows customer to continue to use True Client IP (Akamai feature) in the
   * headers we send to the origin. This is limited to Enterprise Zones.
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'true_client_ip_header';

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

export interface TrueClientIPHeaderUpdateParams {
  /**
   * Value of the zone setting.
   */
  value: 'on' | 'off';
}

export namespace TrueClientIPHeaders {
  export import TrueClientIPHeaderUpdateResponse = TrueClientIPHeadersAPI.TrueClientIPHeaderUpdateResponse;
  export import TrueClientIPHeaderListResponse = TrueClientIPHeadersAPI.TrueClientIPHeaderListResponse;
  export import TrueClientIPHeaderUpdateParams = TrueClientIPHeadersAPI.TrueClientIPHeaderUpdateParams;
}
