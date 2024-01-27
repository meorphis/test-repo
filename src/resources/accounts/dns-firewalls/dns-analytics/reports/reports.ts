// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as ReportsAPI from 'cloudflare/resources/accounts/dns-firewalls/dns-analytics/reports/reports';
import * as BytimesAPI from 'cloudflare/resources/accounts/dns-firewalls/dns-analytics/reports/bytimes';

export class Reports extends APIResource {
  bytimes: BytimesAPI.Bytimes = new BytimesAPI.Bytimes(this._client);

  /**
   * Retrieves a list of summarised aggregate metrics over a given time period.
   *
   * See
   * [Analytics API properties](https://developers.cloudflare.com/dns/reference/analytics-api-properties/)
   * for detailed information about the available query parameters.
   */
  list(
    accountIdentifier: string,
    identifier: string,
    query?: ReportListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ReportListResponse>;
  list(
    accountIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ReportListResponse>;
  list(
    accountIdentifier: string,
    identifier: string,
    query: ReportListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ReportListResponse> {
    if (isRequestOptions(query)) {
      return this.list(accountIdentifier, identifier, {}, query);
    }
    return this._client.get(
      `/accounts/${accountIdentifier}/dns_firewall/${identifier}/dns_analytics/report`,
      { query, ...options },
    );
  }
}

export interface ReportListResponse {
  errors?: Array<ReportListResponse.Error>;

  messages?: Array<ReportListResponse.Message>;

  result?: ReportListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ReportListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    data?: Array<Result.Data>;

    /**
     * Number of seconds between current time and last processed event, in another
     * words how many seconds of data could be missing.
     */
    data_lag?: number;

    /**
     * Maximum results for each metric (object mapping metric names to values).
     * Currently always an empty object.
     */
    max?: unknown;

    /**
     * Minimum results for each metric (object mapping metric names to values).
     * Currently always an empty object.
     */
    min?: unknown;

    query?: Result.Query;

    /**
     * Total number of rows in the result.
     */
    rows?: number;

    /**
     * Total results for metrics across all data (object mapping metric names to
     * values).
     */
    totals?: unknown;
  }

  export namespace Result {
    export interface Data {
      /**
       * Array with one item per requested metric. Each item is a single value.
       */
      metrics: Array<number>;
    }

    export interface Query {
      /**
       * Array of dimension names.
       */
      dimensions: Array<string>;

      /**
       * Limit number of returned metrics.
       */
      limit: number;

      /**
       * Array of metric names.
       */
      metrics: Array<string>;

      /**
       * Start date and time of requesting data period in ISO 8601 format.
       */
      since: string;

      /**
       * End date and time of requesting data period in ISO 8601 format.
       */
      until: string;

      /**
       * Segmentation filter in 'attribute operator value' format.
       */
      filters?: string;

      /**
       * Array of dimensions to sort by, where each dimension may be prefixed by -
       * (descending) or + (ascending).
       */
      sort?: Array<string>;
    }
  }
}

export interface ReportListParams {
  /**
   * A comma-separated list of dimensions to group results by.
   */
  dimensions?: string;

  /**
   * Segmentation filter in 'attribute operator value' format.
   */
  filters?: string;

  /**
   * Limit number of returned metrics.
   */
  limit?: number;

  /**
   * A comma-separated list of metrics to query.
   */
  metrics?: string;

  /**
   * Start date and time of requesting data period in ISO 8601 format.
   */
  since?: string;

  /**
   * A comma-separated list of dimensions to sort by, where each dimension may be
   * prefixed by - (descending) or + (ascending).
   */
  sort?: string;

  /**
   * End date and time of requesting data period in ISO 8601 format.
   */
  until?: string;
}

export namespace Reports {
  export import ReportListResponse = ReportsAPI.ReportListResponse;
  export import ReportListParams = ReportsAPI.ReportListParams;
  export import Bytimes = BytimesAPI.Bytimes;
  export import BytimeListResponse = BytimesAPI.BytimeListResponse;
  export import BytimeListParams = BytimesAPI.BytimeListParams;
}
