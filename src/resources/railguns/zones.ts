// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ZonesAPI from 'cloudflare/resources/railguns/zones';

export class Zones extends APIResource {
  /**
   * List the zones that are currently using this Railgun.
   */
  list(identifier: string, options?: Core.RequestOptions): Core.APIPromise<ZoneListResponse> {
    return this._client.get(`/railguns/${identifier}/zones`, options);
  }
}

export interface ZoneListResponse {
  errors?: Array<ZoneListResponse.Error>;

  messages?: Array<ZoneListResponse.Message>;

  result?: Array<ZoneListResponse.Result>;

  result_info?: ZoneListResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ZoneListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    /**
     * Identifier
     */
    id: string;

    /**
     * The last time proof of ownership was detected and the zone was made active
     */
    activated_on: string | null;

    /**
     * When the zone was created
     */
    created_on: string;

    /**
     * The interval (in seconds) from when development mode expires (positive integer)
     * or last expired (negative integer) for the domain. If development mode has never
     * been enabled, this value is 0.
     */
    development_mode: number;

    /**
     * When the zone was last modified
     */
    modified_on: string;

    /**
     * The domain name
     */
    name: string;

    /**
     * DNS host at the time of switching to Cloudflare
     */
    original_dnshost: string | null;

    /**
     * Original name servers before moving to Cloudflare Notes: Is this only available
     * for full zones?
     */
    original_name_servers: Array<string> | null;

    /**
     * Registrar for the domain at the time of switching to Cloudflare
     */
    original_registrar: string | null;
  }

  export interface ResultInfo {
    /**
     * Total number of results for the requested service
     */
    count?: number;

    /**
     * Current page within paginated list of results
     */
    page?: number;

    /**
     * Number of results per page of results
     */
    per_page?: number;

    /**
     * Total results available without any search parameters
     */
    total_count?: number;
  }
}

export namespace Zones {
  export import ZoneListResponse = ZonesAPI.ZoneListResponse;
}
