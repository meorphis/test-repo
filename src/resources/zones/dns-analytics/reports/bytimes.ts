// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as BytimesAPI from 'cloudflare/resources/zones/dns-analytics/reports/bytimes';

export class Bytimes extends APIResource {
  /**
   * Retrieves a list of aggregate metrics grouped by time interval.
   *
   * See
   * [Analytics API properties](https://developers.cloudflare.com/dns/reference/analytics-api-properties/)
   * for detailed information about the available query parameters.
   */
  list(
    identifier: string,
    query?: BytimeListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BytimeListResponse>;
  list(identifier: string, options?: Core.RequestOptions): Core.APIPromise<BytimeListResponse>;
  list(
    identifier: string,
    query: BytimeListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BytimeListResponse> {
    if (isRequestOptions(query)) {
      return this.list(identifier, {}, query);
    }
    return this._client.get(`/zones/${identifier}/dns_analytics/report/bytime`, { query, ...options });
  }
}

export interface BytimeListResponse {
  errors?: Array<BytimeListResponse.Error>;

  messages?: Array<BytimeListResponse.Message>;

  result?: BytimeListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace BytimeListResponse {
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
     * Array of time intervals in the response data. Each interval is represented as an
     * array containing two values: the start time, and the end time.
     */
    time_intervals?: Array<Array<string>>;

    /**
     * Total results for metrics across all data (object mapping metric names to
     * values).
     */
    totals?: unknown;
  }

  export namespace Result {
    export interface Data {
      /**
       * Array with one item per requested metric. Each item is an array of values,
       * broken down by time interval.
       */
      metrics: Array<Array<unknown>>;
    }

    export interface Query {
      /**
       * Unit of time to group data by.
       */
      time_delta:
        | 'all'
        | 'auto'
        | 'year'
        | 'quarter'
        | 'month'
        | 'week'
        | 'day'
        | 'hour'
        | 'dekaminute'
        | 'minute';
    }
  }
}

export interface BytimeListParams {
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
   * Unit of time to group data by.
   */
  time_delta?:
    | 'all'
    | 'auto'
    | 'year'
    | 'quarter'
    | 'month'
    | 'week'
    | 'day'
    | 'hour'
    | 'dekaminute'
    | 'minute';

  /**
   * End date and time of requesting data period in ISO 8601 format.
   */
  until?: string;
}

export namespace Bytimes {
  export import BytimeListResponse = BytimesAPI.BytimeListResponse;
  export import BytimeListParams = BytimesAPI.BytimeListParams;
}
