// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as BulksAPI from 'cloudflare/resources/accounts/intel/domains/bulks';

export class Bulks extends APIResource {
  /**
   * Get Multiple Domain Details
   */
  domainIntelligenceGetMultipleDomainDetails(
    accountIdentifier: string,
    query?: BulkDomainIntelligenceGetMultipleDomainDetailsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BulkDomainIntelligenceGetMultipleDomainDetailsResponse>;
  domainIntelligenceGetMultipleDomainDetails(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BulkDomainIntelligenceGetMultipleDomainDetailsResponse>;
  domainIntelligenceGetMultipleDomainDetails(
    accountIdentifier: string,
    query: BulkDomainIntelligenceGetMultipleDomainDetailsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BulkDomainIntelligenceGetMultipleDomainDetailsResponse> {
    if (isRequestOptions(query)) {
      return this.domainIntelligenceGetMultipleDomainDetails(accountIdentifier, {}, query);
    }
    return this._client.get(`/accounts/${accountIdentifier}/intel/domain/bulk`, { query, ...options });
  }
}

export interface BulkDomainIntelligenceGetMultipleDomainDetailsResponse {
  errors?: Array<BulkDomainIntelligenceGetMultipleDomainDetailsResponse.Error>;

  messages?: Array<BulkDomainIntelligenceGetMultipleDomainDetailsResponse.Message>;

  result?: Array<BulkDomainIntelligenceGetMultipleDomainDetailsResponse.Result>;

  result_info?: BulkDomainIntelligenceGetMultipleDomainDetailsResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace BulkDomainIntelligenceGetMultipleDomainDetailsResponse {
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

export interface BulkDomainIntelligenceGetMultipleDomainDetailsParams {
  /**
   * Accepts multiple values, i.e. `?domain=cloudflare.com&domain=example.com`.
   */
  domain?: unknown;
}

export namespace Bulks {
  export import BulkDomainIntelligenceGetMultipleDomainDetailsResponse = BulksAPI.BulkDomainIntelligenceGetMultipleDomainDetailsResponse;
  export import BulkDomainIntelligenceGetMultipleDomainDetailsParams = BulksAPI.BulkDomainIntelligenceGetMultipleDomainDetailsParams;
}
