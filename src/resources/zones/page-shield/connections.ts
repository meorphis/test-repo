// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as ConnectionsAPI from 'cloudflare/resources/zones/page-shield/connections';

export class Connections extends APIResource {
  /**
   * Fetches a connection detected by Page Shield by connection ID.
   */
  retrieve(
    zoneId: string,
    connectionId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectionRetrieveResponse> {
    return this._client.get(`/zones/${zoneId}/page_shield/connections/${connectionId}`, options);
  }

  /**
   * Lists all connections detected by Page Shield.
   */
  pageShieldListPageShieldConnections(
    zoneId: string,
    query?: ConnectionPageShieldListPageShieldConnectionsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectionPageShieldListPageShieldConnectionsResponse>;
  pageShieldListPageShieldConnections(
    zoneId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectionPageShieldListPageShieldConnectionsResponse>;
  pageShieldListPageShieldConnections(
    zoneId: string,
    query: ConnectionPageShieldListPageShieldConnectionsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectionPageShieldListPageShieldConnectionsResponse> {
    if (isRequestOptions(query)) {
      return this.pageShieldListPageShieldConnections(zoneId, {}, query);
    }
    return this._client.get(`/zones/${zoneId}/page_shield/connections`, { query, ...options });
  }
}

export interface ConnectionRetrieveResponse {
  id?: unknown;

  added_at?: unknown;

  domain_reported_malicious?: unknown;

  first_page_url?: unknown;

  first_seen_at?: unknown;

  host?: unknown;

  last_seen_at?: unknown;

  page_urls?: unknown;

  url?: unknown;

  url_contains_cdn_cgi_path?: unknown;
}

export interface ConnectionPageShieldListPageShieldConnectionsResponse {
  errors?: Array<ConnectionPageShieldListPageShieldConnectionsResponse.Error>;

  messages?: Array<ConnectionPageShieldListPageShieldConnectionsResponse.Message>;

  result?: Array<ConnectionPageShieldListPageShieldConnectionsResponse.Result>;

  result_info?: ConnectionPageShieldListPageShieldConnectionsResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ConnectionPageShieldListPageShieldConnectionsResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    id?: unknown;

    added_at?: unknown;

    domain_reported_malicious?: unknown;

    first_page_url?: unknown;

    first_seen_at?: unknown;

    host?: unknown;

    last_seen_at?: unknown;

    page_urls?: unknown;

    url?: unknown;

    url_contains_cdn_cgi_path?: unknown;
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

export interface ConnectionPageShieldListPageShieldConnectionsParams {
  /**
   * The direction used to sort returned connections.
   */
  direction?: 'asc' | 'desc';

  /**
   * When true, excludes connections seen in a `/cdn-cgi` path from the returned
   * connections. The default value is true.
   */
  exclude_cdn_cgi?: boolean;

  /**
   * Excludes connections whose URL contains one of the URL-encoded URLs separated by
   * commas.
   */
  exclude_urls?: string;

  /**
   * Export the list of connections as a file. Cannot be used with per_page or page
   * options.
   */
  export?: 'csv';

  /**
   * Includes connections that match one or more URL-encoded hostnames separated by
   * commas.
   *
   * Wildcards are supported at the start and end of each hostname to support starts
   * with, ends with and contains. If no wildcards are used, results will be filtered
   * by exact match
   */
  hosts?: string;

  /**
   * The field used to sort returned connections.
   */
  order_by?: 'first_seen_at' | 'last_seen_at';

  /**
   * The current page number of the paginated results.
   *
   * We additionally support a special value "all". When "all" is used, the API will
   * return all the connections with the applied filters in a single page.
   * Additionally, when using this value, the API will not return the categorisation
   * data for the URL and domain of the connections. This feature is best-effort and
   * it may only work for zones with a low number of connections
   */
  page?: string;

  /**
   * Includes connections that match one or more page URLs (separated by commas)
   * where they were last seen
   *
   * Wildcards are supported at the start and end of each page URL to support starts
   * with, ends with and contains. If no wildcards are used, results will be filtered
   * by exact match
   */
  page_url?: string;

  /**
   * The number of results per page.
   */
  per_page?: number;

  /**
   * When true, malicious connections appear first in the returned connections.
   */
  prioritize_malicious?: boolean;

  /**
   * Filters the returned connections using a comma-separated list of connection
   * statuses. Accepted values: `active`, `infrequent`, and `inactive`. The default
   * value is `active`.
   */
  status?: string;

  /**
   * Includes connections whose URL contain one or more URL-encoded URLs separated by
   * commas.
   */
  urls?: string;
}

export namespace Connections {
  export import ConnectionRetrieveResponse = ConnectionsAPI.ConnectionRetrieveResponse;
  export import ConnectionPageShieldListPageShieldConnectionsResponse = ConnectionsAPI.ConnectionPageShieldListPageShieldConnectionsResponse;
  export import ConnectionPageShieldListPageShieldConnectionsParams = ConnectionsAPI.ConnectionPageShieldListPageShieldConnectionsParams;
}
