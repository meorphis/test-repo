// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as CustomNsAPI from 'cloudflare/resources/accounts/custom-ns/custom-ns';
import * as AvailabilitiesAPI from 'cloudflare/resources/accounts/custom-ns/availabilities';
import * as VerifiesAPI from 'cloudflare/resources/accounts/custom-ns/verifies';

export class CustomNs extends APIResource {
  availabilities: AvailabilitiesAPI.Availabilities = new AvailabilitiesAPI.Availabilities(this._client);
  verifies: VerifiesAPI.Verifies = new VerifiesAPI.Verifies(this._client);

  /**
   * Delete Account Custom Nameserver
   */
  delete(
    identifier: string,
    nsName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomNDeleteResponse> {
    return this._client.delete(`/accounts/${identifier}/custom_ns/${nsName}`, options);
  }

  /**
   * Add Account Custom Nameserver
   */
  accountLevelCustomNameserversAddAccountCustomNameserver(
    identifier: string,
    body: CustomNAccountLevelCustomNameserversAddAccountCustomNameserverParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomNAccountLevelCustomNameserversAddAccountCustomNameserverResponse> {
    return this._client.post(`/accounts/${identifier}/custom_ns`, { body, ...options });
  }

  /**
   * List an account's custom nameservers.
   */
  accountLevelCustomNameserversListAccountCustomNameservers(
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomNAccountLevelCustomNameserversListAccountCustomNameserversResponse> {
    return this._client.get(`/accounts/${identifier}/custom_ns`, options);
  }
}

export interface CustomNDeleteResponse {
  errors?: Array<CustomNDeleteResponse.Error>;

  messages?: Array<CustomNDeleteResponse.Message>;

  result?: Array<unknown>;

  result_info?: CustomNDeleteResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace CustomNDeleteResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
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

export interface CustomNAccountLevelCustomNameserversAddAccountCustomNameserverResponse {
  errors?: Array<CustomNAccountLevelCustomNameserversAddAccountCustomNameserverResponse.Error>;

  messages?: Array<CustomNAccountLevelCustomNameserversAddAccountCustomNameserverResponse.Message>;

  /**
   * A single account custom nameserver.
   */
  result?: CustomNAccountLevelCustomNameserversAddAccountCustomNameserverResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace CustomNAccountLevelCustomNameserversAddAccountCustomNameserverResponse {
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
}

export interface CustomNAccountLevelCustomNameserversListAccountCustomNameserversResponse {
  errors?: Array<CustomNAccountLevelCustomNameserversListAccountCustomNameserversResponse.Error>;

  messages?: Array<CustomNAccountLevelCustomNameserversListAccountCustomNameserversResponse.Message>;

  result?: Array<CustomNAccountLevelCustomNameserversListAccountCustomNameserversResponse.Result>;

  result_info?: CustomNAccountLevelCustomNameserversListAccountCustomNameserversResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace CustomNAccountLevelCustomNameserversListAccountCustomNameserversResponse {
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

export interface CustomNAccountLevelCustomNameserversAddAccountCustomNameserverParams {
  /**
   * The FQDN of the name server.
   */
  ns_name: string;

  /**
   * The number of the set that this name server belongs to.
   */
  ns_set?: number;
}

export namespace CustomNs {
  export import CustomNDeleteResponse = CustomNsAPI.CustomNDeleteResponse;
  export import CustomNAccountLevelCustomNameserversAddAccountCustomNameserverResponse = CustomNsAPI.CustomNAccountLevelCustomNameserversAddAccountCustomNameserverResponse;
  export import CustomNAccountLevelCustomNameserversListAccountCustomNameserversResponse = CustomNsAPI.CustomNAccountLevelCustomNameserversListAccountCustomNameserversResponse;
  export import CustomNAccountLevelCustomNameserversAddAccountCustomNameserverParams = CustomNsAPI.CustomNAccountLevelCustomNameserversAddAccountCustomNameserverParams;
  export import Availabilities = AvailabilitiesAPI.Availabilities;
  export import AvailabilityAccountLevelCustomNameserversGetEligibleZonesForAccountCustomNameserversResponse = AvailabilitiesAPI.AvailabilityAccountLevelCustomNameserversGetEligibleZonesForAccountCustomNameserversResponse;
  export import Verifies = VerifiesAPI.Verifies;
  export import VerifyAccountLevelCustomNameserversVerifyAccountCustomNameserverGlueRecordsResponse = VerifiesAPI.VerifyAccountLevelCustomNameserversVerifyAccountCustomNameserverGlueRecordsResponse;
}
