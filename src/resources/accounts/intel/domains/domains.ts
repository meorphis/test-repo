// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as DomainsAPI from 'cloudflare/resources/accounts/intel/domains/domains';
import * as BulksAPI from 'cloudflare/resources/accounts/intel/domains/bulks';

export class Domains extends APIResource {
  bulks: BulksAPI.Bulks = new BulksAPI.Bulks(this._client);

  /**
   * Get Domain Details
   */
  domainIntelligenceGetDomainDetails(
    accountIdentifier: string,
    query?: DomainDomainIntelligenceGetDomainDetailsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainDomainIntelligenceGetDomainDetailsResponse>;
  domainIntelligenceGetDomainDetails(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainDomainIntelligenceGetDomainDetailsResponse>;
  domainIntelligenceGetDomainDetails(
    accountIdentifier: string,
    query: DomainDomainIntelligenceGetDomainDetailsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainDomainIntelligenceGetDomainDetailsResponse> {
    if (isRequestOptions(query)) {
      return this.domainIntelligenceGetDomainDetails(accountIdentifier, {}, query);
    }
    return this._client.get(`/accounts/${accountIdentifier}/intel/domain`, { query, ...options });
  }
}

export interface DomainDomainIntelligenceGetDomainDetailsResponse {
  errors?: Array<DomainDomainIntelligenceGetDomainDetailsResponse.Error>;

  messages?: Array<DomainDomainIntelligenceGetDomainDetailsResponse.Message>;

  result?: DomainDomainIntelligenceGetDomainDetailsResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace DomainDomainIntelligenceGetDomainDetailsResponse {
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
     * Additional information related to the host name.
     */
    additional_information?: Result.AdditionalInformation;

    /**
     * Application that the hostname belongs to.
     */
    application?: Result.Application;

    /**
     * Current content categories.
     */
    content_categories?: unknown;

    domain?: string;

    inherited_content_categories?: Array<Result.InheritedContentCategory>;

    /**
     * Domain from which `inherited_content_categories` and `inherited_risk_types` are
     * inherited, if applicable.
     */
    inherited_from?: string;

    inherited_risk_types?: Array<Result.InheritedRiskType>;

    /**
     * Global Cloudflare 100k ranking for the last 30 days, if available for the
     * hostname. The top ranked domain is 1, the lowest ranked domain is 100,000.
     */
    popularity_rank?: number;

    /**
     * Specifies a list of references to one or more IP addresses or domain names that
     * the domain name currently resolves to.
     */
    resolves_to_refs?: Array<Result.ResolvesToRef>;

    /**
     * Hostname risk score, which is a value between 0 (lowest risk) to 1 (highest
     * risk).
     */
    risk_score?: number;

    risk_types?: unknown;
  }

  export namespace Result {
    /**
     * Additional information related to the host name.
     */
    export interface AdditionalInformation {
      /**
       * Suspected DGA malware family.
       */
      suspected_malware_family?: string;
    }

    /**
     * Application that the hostname belongs to.
     */
    export interface Application {
      id?: number;

      name?: string;
    }

    export interface InheritedContentCategory {
      id?: number;

      name?: string;

      super_category_id?: number;
    }

    export interface InheritedRiskType {
      id?: number;

      name?: string;

      super_category_id?: number;
    }

    export interface ResolvesToRef {
      /**
       * STIX 2.1 identifier:
       * https://docs.oasis-open.org/cti/stix/v2.1/cs02/stix-v2.1-cs02.html#_64yvzeku5a5c
       */
      id?: string;

      /**
       * IP address or domain name.
       */
      value?: string;
    }
  }
}

export interface DomainDomainIntelligenceGetDomainDetailsParams {
  domain?: string;
}

export namespace Domains {
  export import DomainDomainIntelligenceGetDomainDetailsResponse = DomainsAPI.DomainDomainIntelligenceGetDomainDetailsResponse;
  export import DomainDomainIntelligenceGetDomainDetailsParams = DomainsAPI.DomainDomainIntelligenceGetDomainDetailsParams;
  export import Bulks = BulksAPI.Bulks;
  export import BulkDomainIntelligenceGetMultipleDomainDetailsResponse = BulksAPI.BulkDomainIntelligenceGetMultipleDomainDetailsResponse;
  export import BulkDomainIntelligenceGetMultipleDomainDetailsParams = BulksAPI.BulkDomainIntelligenceGetMultipleDomainDetailsParams;
}
