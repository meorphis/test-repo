// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as StatsAPI from 'cloudflare/resources/accounts/images/v1s/stats';

export class Stats extends APIResource {
  /**
   * Fetch usage statistics details for Cloudflare Images.
   */
  cloudflareImagesImagesUsageStatistics(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StatCloudflareImagesImagesUsageStatisticsResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/images/v1/stats`, options);
  }
}

export interface StatCloudflareImagesImagesUsageStatisticsResponse {
  errors?: Array<StatCloudflareImagesImagesUsageStatisticsResponse.Error>;

  messages?: Array<StatCloudflareImagesImagesUsageStatisticsResponse.Message>;

  result?: StatCloudflareImagesImagesUsageStatisticsResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace StatCloudflareImagesImagesUsageStatisticsResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    count?: Result.Count;
  }

  export namespace Result {
    export interface Count {
      /**
       * Cloudflare Images allowed usage.
       */
      allowed?: number;

      /**
       * Cloudflare Images current usage.
       */
      current?: number;
    }
  }
}

export namespace Stats {
  export import StatCloudflareImagesImagesUsageStatisticsResponse = StatsAPI.StatCloudflareImagesImagesUsageStatisticsResponse;
}
