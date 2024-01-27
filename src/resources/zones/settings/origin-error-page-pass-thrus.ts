// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as OriginErrorPagePassThrusAPI from 'cloudflare/resources/zones/settings/origin-error-page-pass-thrus';

export class OriginErrorPagePassThrus extends APIResource {
  /**
   * Cloudflare will proxy customer error pages on any 502,504 errors on origin
   * server instead of showing a default Cloudflare error page. This does not apply
   * to 522 errors and is limited to Enterprise Zones.
   */
  update(
    zoneIdentifier: string,
    body: OriginErrorPagePassThrusUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OriginErrorPagePassThrusUpdateResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/settings/origin_error_page_pass_thru`, {
      body,
      ...options,
    });
  }

  /**
   * Cloudflare will proxy customer error pages on any 502,504 errors on origin
   * server instead of showing a default Cloudflare error page. This does not apply
   * to 522 errors and is limited to Enterprise Zones.
   */
  list(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OriginErrorPagePassThrusListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/settings/origin_error_page_pass_thru`, options);
  }
}

export interface OriginErrorPagePassThrusUpdateResponse {
  errors?: Array<OriginErrorPagePassThrusUpdateResponse.Error>;

  messages?: Array<OriginErrorPagePassThrusUpdateResponse.Message>;

  /**
   * Cloudflare will proxy customer error pages on any 502,504 errors on origin
   * server instead of showing a default Cloudflare error page. This does not apply
   * to 522 errors and is limited to Enterprise Zones.
   */
  result?: OriginErrorPagePassThrusUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace OriginErrorPagePassThrusUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Cloudflare will proxy customer error pages on any 502,504 errors on origin
   * server instead of showing a default Cloudflare error page. This does not apply
   * to 522 errors and is limited to Enterprise Zones.
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'origin_error_page_pass_thru';

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

export interface OriginErrorPagePassThrusListResponse {
  errors?: Array<OriginErrorPagePassThrusListResponse.Error>;

  messages?: Array<OriginErrorPagePassThrusListResponse.Message>;

  /**
   * Cloudflare will proxy customer error pages on any 502,504 errors on origin
   * server instead of showing a default Cloudflare error page. This does not apply
   * to 522 errors and is limited to Enterprise Zones.
   */
  result?: OriginErrorPagePassThrusListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace OriginErrorPagePassThrusListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Cloudflare will proxy customer error pages on any 502,504 errors on origin
   * server instead of showing a default Cloudflare error page. This does not apply
   * to 522 errors and is limited to Enterprise Zones.
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'origin_error_page_pass_thru';

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

export interface OriginErrorPagePassThrusUpdateParams {
  /**
   * Value of the zone setting.
   */
  value: 'on' | 'off';
}

export namespace OriginErrorPagePassThrus {
  export import OriginErrorPagePassThrusUpdateResponse = OriginErrorPagePassThrusAPI.OriginErrorPagePassThrusUpdateResponse;
  export import OriginErrorPagePassThrusListResponse = OriginErrorPagePassThrusAPI.OriginErrorPagePassThrusListResponse;
  export import OriginErrorPagePassThrusUpdateParams = OriginErrorPagePassThrusAPI.OriginErrorPagePassThrusUpdateParams;
}
