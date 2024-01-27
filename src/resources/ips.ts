// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as IPsAPI from 'cloudflare/resources/ips';

export class IPs extends APIResource {
  /**
   * Get IPs used on the Cloudflare/JD Cloud network, see
   * https://www.cloudflare.com/ips for Cloudflare IPs or
   * https://developers.cloudflare.com/china-network/reference/infrastructure/ for JD
   * Cloud IPs.
   */
  list(query?: IPListParams, options?: Core.RequestOptions): Core.APIPromise<IPListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<IPListResponse>;
  list(
    query: IPListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<IPListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/ips', { query, ...options });
  }
}

export interface IPListResponse {
  errors?: Array<IPListResponse.Error>;

  messages?: Array<IPListResponse.Message>;

  result?: IPListResponse.Ih4mwLmwIPs | IPListResponse.Ih4mwLmwIPsJdcloud;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace IPListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Ih4mwLmwIPs {
    /**
     * A digest of the IP data. Useful for determining if the data has changed.
     */
    etag?: string;

    /**
     * List of Cloudflare IPv4 CIDR addresses.
     */
    ipv4_cidrs?: Array<string>;

    /**
     * List of Cloudflare IPv6 CIDR addresses.
     */
    ipv6_cidrs?: Array<string>;
  }

  export interface Ih4mwLmwIPsJdcloud {
    /**
     * A digest of the IP data. Useful for determining if the data has changed.
     */
    etag?: string;

    /**
     * List of Cloudflare IPv4 CIDR addresses.
     */
    ipv4_cidrs?: Array<string>;

    /**
     * List of Cloudflare IPv6 CIDR addresses.
     */
    ipv6_cidrs?: Array<string>;

    /**
     * List IPv4 and IPv6 CIDRs, only populated if `?networks=jdcloud` is used.
     */
    jdcloud_cidrs?: Array<string>;
  }
}

export interface IPListParams {
  /**
   * Specified as `jdcloud` to list IPs used by JD Cloud data centers.
   */
  networks?: string;
}

export namespace IPs {
  export import IPListResponse = IPsAPI.IPListResponse;
  export import IPListParams = IPsAPI.IPListParams;
}
