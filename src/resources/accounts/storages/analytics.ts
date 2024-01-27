// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as AnalyticsAPI from 'cloudflare/resources/accounts/storages/analytics';

export class Analytics extends APIResource {
  /**
   * Retrieves Workers KV request metrics for the given account.
   */
  list(
    accountIdentifier: string,
    query?: AnalyticsListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AnalyticsListResponse>;
  list(accountIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<AnalyticsListResponse>;
  list(
    accountIdentifier: string,
    query: AnalyticsListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AnalyticsListResponse> {
    if (isRequestOptions(query)) {
      return this.list(accountIdentifier, {}, query);
    }
    return this._client.get(`/accounts/${accountIdentifier}/storage/analytics`, { query, ...options });
  }

  /**
   * Retrieves Workers KV stored data metrics for the given account.
   */
  stored(
    accountIdentifier: string,
    query?: AnalyticsStoredParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AnalyticsStoredResponse>;
  stored(accountIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<AnalyticsStoredResponse>;
  stored(
    accountIdentifier: string,
    query: AnalyticsStoredParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AnalyticsStoredResponse> {
    if (isRequestOptions(query)) {
      return this.stored(accountIdentifier, {}, query);
    }
    return this._client.get(`/accounts/${accountIdentifier}/storage/analytics/stored`, { query, ...options });
  }
}

export interface AnalyticsListResponse {
  errors?: Array<AnalyticsListResponse.Error>;

  messages?: Array<AnalyticsListResponse.Message>;

  result?: AnalyticsListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace AnalyticsListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    data?: unknown;

    /**
     * Number of seconds between current time and last processed event, i.e. how many
     * seconds of data could be missing.
     */
    data_lag?: number;

    max?: unknown;

    min?: unknown;

    /**
     * For specifying result metrics.
     */
    query?: Result.Query;

    /**
     * Total number of rows in the result.
     */
    rows?: number;

    totals?: unknown;
  }

  export namespace Result {
    /**
     * For specifying result metrics.
     */
    export interface Query {
      /**
       * Can be used to break down the data by given attributes.
       */
      dimensions?: Array<string>;

      /**
       * Used to filter rows by one or more dimensions. Filters can be combined using OR
       * and AND boolean logic. AND takes precedence over OR in all the expressions. The
       * OR operator is defined using a comma (,) or OR keyword surrounded by whitespace.
       * The AND operator is defined using a semicolon (;) or AND keyword surrounded by
       * whitespace. Note that the semicolon is a reserved character in URLs (rfc1738)
       * and needs to be percent-encoded as %3B. Comparison options are:
       *
       * | Operator | Name                     | URL Encoded |
       * | -------- | ------------------------ | ----------- |
       * | ==       | Equals                   | %3D%3D      |
       * | !=       | Does not equals          | !%3D        |
       * | >        | Greater Than             | %3E         |
       * | <        | Less Than                | %3C         |
       * | >=       | Greater than or equal to | %3E%3D      |
       * | <=       | Less than or equal to    | %3C%3D .    |
       */
      filters?: string;

      /**
       * Limit number of returned metrics.
       */
      limit?: number;

      /**
       * One or more metrics to compute.
       */
      metrics?: Array<string>;

      /**
       * Start of time interval to query, defaults to 6 hours before request received.
       */
      since?: string;

      /**
       * Array of dimensions or metrics to sort by, each dimension/metric may be prefixed
       * by - (descending) or + (ascending).
       */
      sort?: Array<unknown>;

      /**
       * End of time interval to query, defaults to current time.
       */
      until?: string;
    }
  }
}

export interface AnalyticsStoredResponse {
  errors?: Array<AnalyticsStoredResponse.Error>;

  messages?: Array<AnalyticsStoredResponse.Message>;

  result?: AnalyticsStoredResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace AnalyticsStoredResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    data?: unknown;

    /**
     * Number of seconds between current time and last processed event, i.e. how many
     * seconds of data could be missing.
     */
    data_lag?: number;

    max?: unknown;

    min?: unknown;

    /**
     * For specifying result metrics.
     */
    query?: Result.Query;

    /**
     * Total number of rows in the result.
     */
    rows?: number;

    totals?: unknown;
  }

  export namespace Result {
    /**
     * For specifying result metrics.
     */
    export interface Query {
      /**
       * Can be used to break down the data by given attributes.
       */
      dimensions?: Array<string>;

      /**
       * Used to filter rows by one or more dimensions. Filters can be combined using OR
       * and AND boolean logic. AND takes precedence over OR in all the expressions. The
       * OR operator is defined using a comma (,) or OR keyword surrounded by whitespace.
       * The AND operator is defined using a semicolon (;) or AND keyword surrounded by
       * whitespace. Note that the semicolon is a reserved character in URLs (rfc1738)
       * and needs to be percent-encoded as %3B. Comparison options are:
       *
       * | Operator | Name                     | URL Encoded |
       * | -------- | ------------------------ | ----------- |
       * | ==       | Equals                   | %3D%3D      |
       * | !=       | Does not equals          | !%3D        |
       * | >        | Greater Than             | %3E         |
       * | <        | Less Than                | %3C         |
       * | >=       | Greater than or equal to | %3E%3D      |
       * | <=       | Less than or equal to    | %3C%3D .    |
       */
      filters?: string;

      /**
       * Limit number of returned metrics.
       */
      limit?: number;

      /**
       * One or more metrics to compute.
       */
      metrics?: Array<string>;

      /**
       * Start of time interval to query, defaults to 6 hours before request received.
       */
      since?: string;

      /**
       * Array of dimensions or metrics to sort by, each dimension/metric may be prefixed
       * by - (descending) or + (ascending).
       */
      sort?: Array<unknown>;

      /**
       * End of time interval to query, defaults to current time.
       */
      until?: string;
    }
  }
}

export interface AnalyticsListParams {
  query?: AnalyticsListParams.Query;
}

export namespace AnalyticsListParams {
  export interface Query {
    dimensions?: Array<'accountId' | 'responseCode' | 'requestType'>;

    filters?: unknown;

    /**
     * Limit number of returned metrics.
     */
    limit?: number;

    metrics?: Array<'requests' | 'writeKiB' | 'readKiB'>;

    /**
     * Start of time interval to query, defaults to 6 hours before request received.
     */
    since?: string;

    sort?: unknown;

    /**
     * End of time interval to query, defaults to current time.
     */
    until?: string;
  }
}

export interface AnalyticsStoredParams {
  query?: AnalyticsStoredParams.Query;
}

export namespace AnalyticsStoredParams {
  export interface Query {
    dimensions?: Array<'namespaceId'>;

    filters?: unknown;

    /**
     * Limit number of returned metrics.
     */
    limit?: number;

    metrics?: Array<'storedBytes' | 'storedKeys'>;

    /**
     * Start of time interval to query, defaults to 6 hours before request received.
     */
    since?: string;

    sort?: unknown;

    /**
     * End of time interval to query, defaults to current time.
     */
    until?: string;
  }
}

export namespace Analytics {
  export import AnalyticsListResponse = AnalyticsAPI.AnalyticsListResponse;
  export import AnalyticsStoredResponse = AnalyticsAPI.AnalyticsStoredResponse;
  export import AnalyticsListParams = AnalyticsAPI.AnalyticsListParams;
  export import AnalyticsStoredParams = AnalyticsAPI.AnalyticsStoredParams;
}
