// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as H2PrioritizationsAPI from 'cloudflare/resources/zones/settings/h2-prioritizations';

export class H2Prioritizations extends APIResource {
  /**
   * Gets HTTP/2 Edge Prioritization setting.
   */
  update(
    zoneIdentifier: string,
    body: H2PrioritizationUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<H2PrioritizationUpdateResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/settings/h2_prioritization`, { body, ...options });
  }

  /**
   * Gets HTTP/2 Edge Prioritization setting.
   */
  list(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<H2PrioritizationListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/settings/h2_prioritization`, options);
  }
}

export interface H2PrioritizationUpdateResponse {
  errors?: Array<H2PrioritizationUpdateResponse.Error>;

  messages?: Array<H2PrioritizationUpdateResponse.Message>;

  /**
   * HTTP/2 Edge Prioritization optimises the delivery of resources served through
   * HTTP/2 to improve page load performance. It also supports fine control of
   * content delivery when used in conjunction with Workers.
   */
  result?: H2PrioritizationUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace H2PrioritizationUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * HTTP/2 Edge Prioritization optimises the delivery of resources served through
   * HTTP/2 to improve page load performance. It also supports fine control of
   * content delivery when used in conjunction with Workers.
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'h2_prioritization';

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
    value?: 'on' | 'off' | 'custom';
  }
}

export interface H2PrioritizationListResponse {
  errors?: Array<H2PrioritizationListResponse.Error>;

  messages?: Array<H2PrioritizationListResponse.Message>;

  /**
   * HTTP/2 Edge Prioritization optimises the delivery of resources served through
   * HTTP/2 to improve page load performance. It also supports fine control of
   * content delivery when used in conjunction with Workers.
   */
  result?: H2PrioritizationListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace H2PrioritizationListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * HTTP/2 Edge Prioritization optimises the delivery of resources served through
   * HTTP/2 to improve page load performance. It also supports fine control of
   * content delivery when used in conjunction with Workers.
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'h2_prioritization';

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
    value?: 'on' | 'off' | 'custom';
  }
}

export interface H2PrioritizationUpdateParams {
  /**
   * HTTP/2 Edge Prioritization optimises the delivery of resources served through
   * HTTP/2 to improve page load performance. It also supports fine control of
   * content delivery when used in conjunction with Workers.
   */
  value: H2PrioritizationUpdateParams.Value;
}

export namespace H2PrioritizationUpdateParams {
  /**
   * HTTP/2 Edge Prioritization optimises the delivery of resources served through
   * HTTP/2 to improve page load performance. It also supports fine control of
   * content delivery when used in conjunction with Workers.
   */
  export interface Value {
    /**
     * ID of the zone setting.
     */
    id?: 'h2_prioritization';

    /**
     * Value of the zone setting.
     */
    value?: 'on' | 'off' | 'custom';
  }
}

export namespace H2Prioritizations {
  export import H2PrioritizationUpdateResponse = H2PrioritizationsAPI.H2PrioritizationUpdateResponse;
  export import H2PrioritizationListResponse = H2PrioritizationsAPI.H2PrioritizationListResponse;
  export import H2PrioritizationUpdateParams = H2PrioritizationsAPI.H2PrioritizationUpdateParams;
}
