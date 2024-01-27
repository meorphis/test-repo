// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as CustomNsAPI from 'cloudflare/resources/zones/custom-ns';

export class CustomNs extends APIResource {
  /**
   * Get metadata for account-level custom nameservers on a zone.
   */
  accountLevelCustomNameserversUsageForAZoneGetAccountCustomNameserverRelatedZoneMetadata(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomNAccountLevelCustomNameserversUsageForAZoneGetAccountCustomNameserverRelatedZoneMetadataResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/custom_ns`, options);
  }

  /**
   * Set metadata for account-level custom nameservers on a zone.
   *
   * If you would like new zones in the account to use account custom nameservers by
   * default, use PUT /accounts/:identifier to set the account setting
   * use_account_custom_ns_by_default to true.
   */
  accountLevelCustomNameserversUsageForAZoneSetAccountCustomNameserverRelatedZoneMetadata(
    zoneIdentifier: string,
    body: CustomNAccountLevelCustomNameserversUsageForAZoneSetAccountCustomNameserverRelatedZoneMetadataParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomNAccountLevelCustomNameserversUsageForAZoneSetAccountCustomNameserverRelatedZoneMetadataResponse> {
    return this._client.put(`/zones/${zoneIdentifier}/custom_ns`, { body, ...options });
  }
}

export interface CustomNAccountLevelCustomNameserversUsageForAZoneGetAccountCustomNameserverRelatedZoneMetadataResponse {
  /**
   * Whether zone uses account-level custom nameservers.
   */
  enabled?: boolean;

  errors?: Array<CustomNAccountLevelCustomNameserversUsageForAZoneGetAccountCustomNameserverRelatedZoneMetadataResponse.Error>;

  messages?: Array<CustomNAccountLevelCustomNameserversUsageForAZoneGetAccountCustomNameserverRelatedZoneMetadataResponse.Message>;

  /**
   * The number of the name server set to assign to the zone.
   */
  ns_set?: number;

  result?: Array<unknown> | null;

  result_info?: CustomNAccountLevelCustomNameserversUsageForAZoneGetAccountCustomNameserverRelatedZoneMetadataResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace CustomNAccountLevelCustomNameserversUsageForAZoneGetAccountCustomNameserverRelatedZoneMetadataResponse {
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

export interface CustomNAccountLevelCustomNameserversUsageForAZoneSetAccountCustomNameserverRelatedZoneMetadataResponse {
  errors?: Array<CustomNAccountLevelCustomNameserversUsageForAZoneSetAccountCustomNameserverRelatedZoneMetadataResponse.Error>;

  messages?: Array<CustomNAccountLevelCustomNameserversUsageForAZoneSetAccountCustomNameserverRelatedZoneMetadataResponse.Message>;

  result?: Array<unknown>;

  result_info?: CustomNAccountLevelCustomNameserversUsageForAZoneSetAccountCustomNameserverRelatedZoneMetadataResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace CustomNAccountLevelCustomNameserversUsageForAZoneSetAccountCustomNameserverRelatedZoneMetadataResponse {
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

export interface CustomNAccountLevelCustomNameserversUsageForAZoneSetAccountCustomNameserverRelatedZoneMetadataParams {
  /**
   * Whether zone uses account-level custom nameservers.
   */
  enabled?: boolean;

  /**
   * The number of the name server set to assign to the zone.
   */
  ns_set?: number;
}

export namespace CustomNs {
  export import CustomNAccountLevelCustomNameserversUsageForAZoneGetAccountCustomNameserverRelatedZoneMetadataResponse = CustomNsAPI.CustomNAccountLevelCustomNameserversUsageForAZoneGetAccountCustomNameserverRelatedZoneMetadataResponse;
  export import CustomNAccountLevelCustomNameserversUsageForAZoneSetAccountCustomNameserverRelatedZoneMetadataResponse = CustomNsAPI.CustomNAccountLevelCustomNameserversUsageForAZoneSetAccountCustomNameserverRelatedZoneMetadataResponse;
  export import CustomNAccountLevelCustomNameserversUsageForAZoneSetAccountCustomNameserverRelatedZoneMetadataParams = CustomNsAPI.CustomNAccountLevelCustomNameserversUsageForAZoneSetAccountCustomNameserverRelatedZoneMetadataParams;
}
