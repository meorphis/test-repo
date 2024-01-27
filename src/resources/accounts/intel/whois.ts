// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as WhoisAPI from 'cloudflare/resources/accounts/intel/whois';

export class Whois extends APIResource {
  /**
   * Get WHOIS Record
   */
  whoisRecordGetWhoisRecord(
    accountIdentifier: string,
    query?: WhoisWhoisRecordGetWhoisRecordParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WhoisWhoisRecordGetWhoisRecordResponse>;
  whoisRecordGetWhoisRecord(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WhoisWhoisRecordGetWhoisRecordResponse>;
  whoisRecordGetWhoisRecord(
    accountIdentifier: string,
    query: WhoisWhoisRecordGetWhoisRecordParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<WhoisWhoisRecordGetWhoisRecordResponse> {
    if (isRequestOptions(query)) {
      return this.whoisRecordGetWhoisRecord(accountIdentifier, {}, query);
    }
    return this._client.get(`/accounts/${accountIdentifier}/intel/whois`, { query, ...options });
  }
}

export interface WhoisWhoisRecordGetWhoisRecordResponse {
  errors?: Array<WhoisWhoisRecordGetWhoisRecordResponse.Error>;

  messages?: Array<WhoisWhoisRecordGetWhoisRecordResponse.Message>;

  result?: WhoisWhoisRecordGetWhoisRecordResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace WhoisWhoisRecordGetWhoisRecordResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    created_date?: string;

    domain?: string;

    nameservers?: Array<string>;

    registrant?: string;

    registrant_country?: string;

    registrant_email?: string;

    registrant_org?: string;

    registrar?: string;

    updated_date?: string;
  }
}

export interface WhoisWhoisRecordGetWhoisRecordParams {
  domain?: string;
}

export namespace Whois {
  export import WhoisWhoisRecordGetWhoisRecordResponse = WhoisAPI.WhoisWhoisRecordGetWhoisRecordResponse;
  export import WhoisWhoisRecordGetWhoisRecordParams = WhoisAPI.WhoisWhoisRecordGetWhoisRecordParams;
}
