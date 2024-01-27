// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as ScriptsAPI from 'cloudflare/resources/zones/page-shield/scripts';

export class Scripts extends APIResource {
  /**
   * Fetches a script detected by Page Shield by script ID.
   */
  retrieve(
    zoneId: string,
    scriptId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScriptRetrieveResponse> {
    return this._client.get(`/zones/${zoneId}/page_shield/scripts/${scriptId}`, options);
  }

  /**
   * Lists all scripts detected by Page Shield.
   */
  pageShieldListPageShieldScripts(
    zoneId: string,
    query?: ScriptPageShieldListPageShieldScriptsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScriptPageShieldListPageShieldScriptsResponse>;
  pageShieldListPageShieldScripts(
    zoneId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScriptPageShieldListPageShieldScriptsResponse>;
  pageShieldListPageShieldScripts(
    zoneId: string,
    query: ScriptPageShieldListPageShieldScriptsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScriptPageShieldListPageShieldScriptsResponse> {
    if (isRequestOptions(query)) {
      return this.pageShieldListPageShieldScripts(zoneId, {}, query);
    }
    return this._client.get(`/zones/${zoneId}/page_shield/scripts`, { query, ...options });
  }
}

export interface ScriptRetrieveResponse {
  id?: unknown;

  added_at?: unknown;

  domain_reported_malicious?: unknown;

  fetched_at?: unknown;

  first_page_url?: unknown;

  first_seen_at?: unknown;

  hash?: unknown;

  host?: unknown;

  js_integrity_score?: unknown;

  last_seen_at?: unknown;

  page_urls?: unknown;

  url?: unknown;

  url_contains_cdn_cgi_path?: unknown;

  versions?: Array<ScriptRetrieveResponse.Version> | null;
}

export namespace ScriptRetrieveResponse {
  /**
   * The version of the analyzed script.
   */
  export interface Version {
    /**
     * The timestamp of when the script was last fetched.
     */
    fetched_at?: string | null;

    /**
     * The computed hash of the analyzed script.
     */
    hash?: string | null;

    /**
     * The integrity score of the JavaScript content.
     */
    js_integrity_score?: number | null;
  }
}

export interface ScriptPageShieldListPageShieldScriptsResponse {
  errors?: Array<ScriptPageShieldListPageShieldScriptsResponse.Error>;

  messages?: Array<ScriptPageShieldListPageShieldScriptsResponse.Message>;

  result?: Array<ScriptPageShieldListPageShieldScriptsResponse.Result>;

  result_info?: ScriptPageShieldListPageShieldScriptsResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ScriptPageShieldListPageShieldScriptsResponse {
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

    fetched_at?: unknown;

    first_page_url?: unknown;

    first_seen_at?: unknown;

    hash?: unknown;

    host?: unknown;

    js_integrity_score?: unknown;

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

export interface ScriptPageShieldListPageShieldScriptsParams {
  /**
   * The direction used to sort returned scripts.
   */
  direction?: 'asc' | 'desc';

  /**
   * When true, excludes scripts seen in a `/cdn-cgi` path from the returned scripts.
   * The default value is true.
   */
  exclude_cdn_cgi?: boolean;

  /**
   * When true, excludes duplicate scripts. We consider a script duplicate of another
   * if their javascript content matches and they share the same url host and zone
   * hostname. In such case, we return the most recent script for the URL host and
   * zone hostname combination.
   */
  exclude_duplicates?: boolean;

  /**
   * Excludes scripts whose URL contains one of the URL-encoded URLs separated by
   * commas.
   */
  exclude_urls?: string;

  /**
   * Export the list of scripts as a file. Cannot be used with per_page or page
   * options.
   */
  export?: 'csv';

  /**
   * Includes scripts that match one or more URL-encoded hostnames separated by
   * commas.
   *
   * Wildcards are supported at the start and end of each hostname to support starts
   * with, ends with and contains. If no wildcards are used, results will be filtered
   * by exact match
   */
  hosts?: string;

  /**
   * The field used to sort returned scripts.
   */
  order_by?: 'first_seen_at' | 'last_seen_at';

  /**
   * The current page number of the paginated results.
   *
   * We additionally support a special value "all". When "all" is used, the API will
   * return all the scripts with the applied filters in a single page. Additionally,
   * when using this value, the API will not return the script versions or
   * categorisation data for the URL and domain of the scripts. This feature is
   * best-effort and it may only work for zones with a low number of scripts
   */
  page?: string;

  /**
   * Includes scripts that match one or more page URLs (separated by commas) where
   * they were last seen
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
   * When true, malicious scripts appear first in the returned scripts.
   */
  prioritize_malicious?: boolean;

  /**
   * Filters the returned scripts using a comma-separated list of scripts statuses.
   * Accepted values: `active`, `infrequent`, and `inactive`. The default value is
   * `active`.
   */
  status?: string;

  /**
   * Includes scripts whose URL contain one or more URL-encoded URLs separated by
   * commas.
   */
  urls?: string;
}

export namespace Scripts {
  export import ScriptRetrieveResponse = ScriptsAPI.ScriptRetrieveResponse;
  export import ScriptPageShieldListPageShieldScriptsResponse = ScriptsAPI.ScriptPageShieldListPageShieldScriptsResponse;
  export import ScriptPageShieldListPageShieldScriptsParams = ScriptsAPI.ScriptPageShieldListPageShieldScriptsParams;
}
