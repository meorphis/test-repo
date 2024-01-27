// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as HoldsAPI from 'cloudflare/resources/zones/holds';

export class Holds extends APIResource {
  /**
   * Enforce a zone hold on the zone, blocking the creation and activation of zones
   * with this zone's hostname.
   */
  create(
    zoneId: string,
    params?: HoldCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HoldCreateResponse>;
  create(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<HoldCreateResponse>;
  create(
    zoneId: string,
    params: HoldCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<HoldCreateResponse> {
    if (isRequestOptions(params)) {
      return this.create(zoneId, {}, params);
    }
    const { include_subdomains } = params;
    return this._client.post(`/zones/${zoneId}/hold`, { query: { include_subdomains }, ...options });
  }

  /**
   * Retrieve whether the zone is subject to a zone hold, and metadata about the
   * hold.
   */
  retrieve(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<HoldRetrieveResponse> {
    return this._client.get(`/zones/${zoneId}/hold`, options);
  }

  /**
   * Stop enforcement of a zone hold on the zone, permanently or temporarily,
   * allowing the creation and activation of zones with this zone's hostname.
   */
  delete(
    zoneId: string,
    params?: HoldDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HoldDeleteResponse>;
  delete(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<HoldDeleteResponse>;
  delete(
    zoneId: string,
    params: HoldDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<HoldDeleteResponse> {
    if (isRequestOptions(params)) {
      return this.delete(zoneId, {}, params);
    }
    const { hold_after } = params;
    return this._client.delete(`/zones/${zoneId}/hold`, { query: { hold_after }, ...options });
  }
}

export interface HoldCreateResponse {
  errors?: Array<HoldCreateResponse.Error>;

  messages?: Array<HoldCreateResponse.Message>;

  result?: HoldCreateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace HoldCreateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    hold?: boolean;

    hold_after?: string;

    include_subdomains?: string;
  }
}

export interface HoldRetrieveResponse {
  errors?: Array<HoldRetrieveResponse.Error>;

  messages?: Array<HoldRetrieveResponse.Message>;

  result?: HoldRetrieveResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace HoldRetrieveResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    hold?: boolean;

    hold_after?: string;

    include_subdomains?: string;
  }
}

export interface HoldDeleteResponse {
  result?: HoldDeleteResponse.Result;
}

export namespace HoldDeleteResponse {
  export interface Result {
    hold?: boolean;

    hold_after?: string;

    include_subdomains?: string;
  }
}

export interface HoldCreateParams {
  /**
   * If provided, the zone hold will extend to block any subdomain of the given zone,
   * as well as SSL4SaaS Custom Hostnames. For example, a zone hold on a zone with
   * the hostname 'example.com' and include_subdomains=true will block 'example.com',
   * 'staging.example.com', 'api.staging.example.com', etc.
   */
  include_subdomains?: boolean;
}

export interface HoldDeleteParams {
  /**
   * If `hold_after` is provided, the hold will be temporarily disabled, then
   * automatically re-enabled by the system at the time specified in this
   * RFC3339-formatted timestamp. Otherwise, the hold will be disabled indefinitely.
   */
  hold_after?: string;
}

export namespace Holds {
  export import HoldCreateResponse = HoldsAPI.HoldCreateResponse;
  export import HoldRetrieveResponse = HoldsAPI.HoldRetrieveResponse;
  export import HoldDeleteResponse = HoldsAPI.HoldDeleteResponse;
  export import HoldCreateParams = HoldsAPI.HoldCreateParams;
  export import HoldDeleteParams = HoldsAPI.HoldDeleteParams;
}
