// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as Ipv6sAPI from 'cloudflare/resources/zones/settings/ipv6s';

export class Ipv6s extends APIResource {
  /**
   * Enable IPv6 on all subdomains that are Cloudflare enabled.
   * (https://support.cloudflare.com/hc/en-us/articles/200168586).
   */
  update(
    zoneIdentifier: string,
    body: Ipv6UpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Ipv6UpdateResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/settings/ipv6`, { body, ...options });
  }

  /**
   * Enable IPv6 on all subdomains that are Cloudflare enabled.
   * (https://support.cloudflare.com/hc/en-us/articles/200168586).
   */
  list(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<Ipv6ListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/settings/ipv6`, options);
  }
}

export interface Ipv6UpdateResponse {
  errors?: Array<Ipv6UpdateResponse.Error>;

  messages?: Array<Ipv6UpdateResponse.Message>;

  /**
   * Enable IPv6 on all subdomains that are Cloudflare enabled.
   * (https://support.cloudflare.com/hc/en-us/articles/200168586).
   */
  result?: Ipv6UpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace Ipv6UpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Enable IPv6 on all subdomains that are Cloudflare enabled.
   * (https://support.cloudflare.com/hc/en-us/articles/200168586).
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'ipv6';

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

export interface Ipv6ListResponse {
  errors?: Array<Ipv6ListResponse.Error>;

  messages?: Array<Ipv6ListResponse.Message>;

  /**
   * Enable IPv6 on all subdomains that are Cloudflare enabled.
   * (https://support.cloudflare.com/hc/en-us/articles/200168586).
   */
  result?: Ipv6ListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace Ipv6ListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Enable IPv6 on all subdomains that are Cloudflare enabled.
   * (https://support.cloudflare.com/hc/en-us/articles/200168586).
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'ipv6';

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

export interface Ipv6UpdateParams {
  /**
   * Value of the zone setting.
   */
  value: 'off' | 'on';
}

export namespace Ipv6s {
  export import Ipv6UpdateResponse = Ipv6sAPI.Ipv6UpdateResponse;
  export import Ipv6ListResponse = Ipv6sAPI.Ipv6ListResponse;
  export import Ipv6UpdateParams = Ipv6sAPI.Ipv6UpdateParams;
}
