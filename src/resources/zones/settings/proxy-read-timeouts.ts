// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ProxyReadTimeoutsAPI from 'cloudflare/resources/zones/settings/proxy-read-timeouts';

export class ProxyReadTimeouts extends APIResource {
  /**
   * Maximum time between two read operations from origin.
   */
  update(
    zoneIdentifier: string,
    body: ProxyReadTimeoutUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProxyReadTimeoutUpdateResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/settings/proxy_read_timeout`, { body, ...options });
  }

  /**
   * Maximum time between two read operations from origin.
   */
  list(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<ProxyReadTimeoutListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/settings/proxy_read_timeout`, options);
  }
}

export interface ProxyReadTimeoutUpdateResponse {
  errors?: Array<ProxyReadTimeoutUpdateResponse.Error>;

  messages?: Array<ProxyReadTimeoutUpdateResponse.Message>;

  /**
   * Maximum time between two read operations from origin.
   */
  result?: ProxyReadTimeoutUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace ProxyReadTimeoutUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Maximum time between two read operations from origin.
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'proxy_read_timeout';

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
     * Value of the zone setting. Notes: Value must be between 1 and 6000
     */
    value?: number;
  }
}

export interface ProxyReadTimeoutListResponse {
  errors?: Array<ProxyReadTimeoutListResponse.Error>;

  messages?: Array<ProxyReadTimeoutListResponse.Message>;

  /**
   * Maximum time between two read operations from origin.
   */
  result?: ProxyReadTimeoutListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace ProxyReadTimeoutListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Maximum time between two read operations from origin.
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'proxy_read_timeout';

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
     * Value of the zone setting. Notes: Value must be between 1 and 6000
     */
    value?: number;
  }
}

export interface ProxyReadTimeoutUpdateParams {
  /**
   * Maximum time between two read operations from origin.
   */
  value: ProxyReadTimeoutUpdateParams.Value;
}

export namespace ProxyReadTimeoutUpdateParams {
  /**
   * Maximum time between two read operations from origin.
   */
  export interface Value {
    /**
     * ID of the zone setting.
     */
    id?: 'proxy_read_timeout';

    /**
     * Value of the zone setting. Notes: Value must be between 1 and 6000
     */
    value?: number;
  }
}

export namespace ProxyReadTimeouts {
  export import ProxyReadTimeoutUpdateResponse = ProxyReadTimeoutsAPI.ProxyReadTimeoutUpdateResponse;
  export import ProxyReadTimeoutListResponse = ProxyReadTimeoutsAPI.ProxyReadTimeoutListResponse;
  export import ProxyReadTimeoutUpdateParams = ProxyReadTimeoutsAPI.ProxyReadTimeoutUpdateParams;
}
