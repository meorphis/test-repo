// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ASNsAPI from 'cloudflare/resources/accounts/intel/asns/asns';
import * as SubnetsAPI from 'cloudflare/resources/accounts/intel/asns/subnets';

export class ASNs extends APIResource {
  subnets: SubnetsAPI.Subnets = new SubnetsAPI.Subnets(this._client);

  /**
   * Get ASN Overview
   */
  retrieve(
    accountIdentifier: string,
    asn: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ASNRetrieveResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/intel/asn/${asn}`, options);
  }
}

export interface ASNRetrieveResponse {
  errors?: Array<ASNRetrieveResponse.Error>;

  messages?: Array<ASNRetrieveResponse.Message>;

  result?: number;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ASNRetrieveResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export namespace ASNs {
  export import ASNRetrieveResponse = ASNsAPI.ASNRetrieveResponse;
  export import Subnets = SubnetsAPI.Subnets;
  export import SubnetListResponse = SubnetsAPI.SubnetListResponse;
}
