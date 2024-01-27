// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as DNSAPI from 'cloudflare/resources/accounts/intel/dns';

export class DNS extends APIResource {
  /**
   * Get Passive DNS by IP
   */
  passiveDNSByIPGetPassiveDNSByIP(
    accountIdentifier: string,
    query?: DNSPassiveDNSByIPGetPassiveDNSByIPParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DNSPassiveDNSByIPGetPassiveDNSByIPResponse>;
  passiveDNSByIPGetPassiveDNSByIP(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DNSPassiveDNSByIPGetPassiveDNSByIPResponse>;
  passiveDNSByIPGetPassiveDNSByIP(
    accountIdentifier: string,
    query: DNSPassiveDNSByIPGetPassiveDNSByIPParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DNSPassiveDNSByIPGetPassiveDNSByIPResponse> {
    if (isRequestOptions(query)) {
      return this.passiveDNSByIPGetPassiveDNSByIP(accountIdentifier, {}, query);
    }
    return this._client.get(`/accounts/${accountIdentifier}/intel/dns`, { query, ...options });
  }
}

export interface DNSPassiveDNSByIPGetPassiveDNSByIPResponse {
  errors?: Array<DNSPassiveDNSByIPGetPassiveDNSByIPResponse.Error>;

  messages?: Array<DNSPassiveDNSByIPGetPassiveDNSByIPResponse.Message>;

  result?: DNSPassiveDNSByIPGetPassiveDNSByIPResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace DNSPassiveDNSByIPGetPassiveDNSByIPResponse {
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
     * Total results returned based on your search parameters.
     */
    count?: number;

    /**
     * Current page within paginated list of results.
     */
    page?: number;

    /**
     * Number of results per page of results.
     */
    per_page?: number;

    /**
     * Reverse DNS look-ups observed during the time period.
     */
    reverse_records?: Array<Result.ReverseRecord>;
  }

  export namespace Result {
    export interface ReverseRecord {
      /**
       * First seen date of the DNS record during the time period.
       */
      first_seen?: string;

      /**
       * Hostname that the IP was observed resolving to.
       */
      hostname?: unknown;

      /**
       * Last seen date of the DNS record during the time period.
       */
      last_seen?: string;
    }
  }
}

export interface DNSPassiveDNSByIPGetPassiveDNSByIPParams {
  ipv4?: string;

  /**
   * Requested page within paginated list of results.
   */
  page?: number;

  /**
   * Maximum number of results requested.
   */
  per_page?: number;

  start_end_params?: DNSPassiveDNSByIPGetPassiveDNSByIPParams.StartEndParams;
}

export namespace DNSPassiveDNSByIPGetPassiveDNSByIPParams {
  export interface StartEndParams {
    /**
     * Defaults to the current date.
     */
    end?: string;

    /**
     * Defaults to 30 days before the end parameter value.
     */
    start?: string;
  }
}

export namespace DNS {
  export import DNSPassiveDNSByIPGetPassiveDNSByIPResponse = DNSAPI.DNSPassiveDNSByIPGetPassiveDNSByIPResponse;
  export import DNSPassiveDNSByIPGetPassiveDNSByIPParams = DNSAPI.DNSPassiveDNSByIPGetPassiveDNSByIPParams;
}
