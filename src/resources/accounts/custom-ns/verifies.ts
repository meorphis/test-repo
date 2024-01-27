// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as VerifiesAPI from 'cloudflare/resources/accounts/custom-ns/verifies';

export class Verifies extends APIResource {
  /**
   * Verify Account Custom Nameserver Glue Records
   */
  accountLevelCustomNameserversVerifyAccountCustomNameserverGlueRecords(
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VerifyAccountLevelCustomNameserversVerifyAccountCustomNameserverGlueRecordsResponse> {
    return this._client.post(`/accounts/${identifier}/custom_ns/verify`, options);
  }
}

export interface VerifyAccountLevelCustomNameserversVerifyAccountCustomNameserverGlueRecordsResponse {
  errors?: Array<VerifyAccountLevelCustomNameserversVerifyAccountCustomNameserverGlueRecordsResponse.Error>;

  messages?: Array<VerifyAccountLevelCustomNameserversVerifyAccountCustomNameserverGlueRecordsResponse.Message>;

  result?: Array<VerifyAccountLevelCustomNameserversVerifyAccountCustomNameserverGlueRecordsResponse.Result>;

  result_info?: VerifyAccountLevelCustomNameserversVerifyAccountCustomNameserverGlueRecordsResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace VerifyAccountLevelCustomNameserversVerifyAccountCustomNameserverGlueRecordsResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * A single account custom nameserver.
   */
  export interface Result {
    /**
     * A and AAAA records associated with the nameserver.
     */
    dns_records: Array<Result.DNSRecord>;

    /**
     * The FQDN of the name server.
     */
    ns_name: string;

    /**
     * Verification status of the nameserver.
     */
    status: 'moved' | 'pending' | 'verified';

    /**
     * Identifier
     */
    zone_tag: string;

    /**
     * The number of the set that this name server belongs to.
     */
    ns_set?: number;
  }

  export namespace Result {
    export interface DNSRecord {
      /**
       * DNS record type.
       */
      type?: 'A' | 'AAAA';

      /**
       * DNS record contents (an IPv4 or IPv6 address).
       */
      value?: string;
    }
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

export namespace Verifies {
  export import VerifyAccountLevelCustomNameserversVerifyAccountCustomNameserverGlueRecordsResponse = VerifiesAPI.VerifyAccountLevelCustomNameserversVerifyAccountCustomNameserverGlueRecordsResponse;
}
