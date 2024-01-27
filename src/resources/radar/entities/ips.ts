// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as IPsAPI from 'cloudflare/resources/radar/entities/ips';

export class IPs extends APIResource {
  /**
   * Get IP address information.
   */
  list(query: IPListParams, options?: Core.RequestOptions): Core.APIPromise<IPListResponse> {
    return this._client.get('/radar/entities/ip', { query, ...options });
  }
}

export interface IPListResponse {
  result: IPListResponse.Result;

  success: boolean;
}

export namespace IPListResponse {
  export interface Result {
    ip: Result.IP;
  }

  export namespace Result {
    export interface IP {
      asn: string;

      asnLocation: string;

      asnName: string;

      asnOrgName: string;

      ip: string;

      ipVersion: string;

      location: string;

      locationName: string;
    }
  }
}

export interface IPListParams {
  /**
   * IP address.
   */
  ip: string;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';
}

export namespace IPs {
  export import IPListResponse = IPsAPI.IPListResponse;
  export import IPListParams = IPsAPI.IPListParams;
}
