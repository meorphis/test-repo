// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PurgeCachesAPI from 'cloudflare/resources/zones/purge-caches';

export class PurgeCaches extends APIResource {
  /**
   * ### Purge All Cached Content
   *
   * Removes ALL files from Cloudflare's cache. All tiers can purge everything.
   *
   * ### Purge Cached Content by URL
   *
   * Granularly removes one or more files from Cloudflare's cache by specifying URLs.
   * All tiers can purge by URL.
   *
   * To purge files with custom cache keys, include the headers used to compute the
   * cache key as in the example. If you have a device type or geo in your cache key,
   * you will need to include the CF-Device-Type or CF-IPCountry headers. If you have
   * lang in your cache key, you will need to include the Accept-Language header.
   *
   * **NB:** When including the Origin header, be sure to include the **scheme** and
   * **hostname**. The port number can be omitted if it is the default port (80 for
   * http, 443 for https), but must be included otherwise.
   *
   * ### Purge Cached Content by Tag, Host or Prefix
   *
   * Granularly removes one or more files from Cloudflare's cache either by
   * specifying the host, the associated Cache-Tag, or a Prefix. Only Enterprise
   * customers are permitted to purge by Tag, Host or Prefix.
   *
   * **NB:** Cache-Tag, host, and prefix purging each have a rate limit of 30,000
   * purge API calls in every 24 hour period. You may purge up to 30 tags, hosts, or
   * prefixes in one API call. This rate limit can be raised for customers who need
   * to purge at higher volume.
   */
  zonePurge(
    identifier: string,
    body: PurgeCachZonePurgeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PurgeCachZonePurgeResponse> {
    return this._client.post(`/zones/${identifier}/purge_cache`, { body, ...options });
  }
}

export interface PurgeCachZonePurgeResponse {
  errors?: Array<PurgeCachZonePurgeResponse.Error>;

  messages?: Array<PurgeCachZonePurgeResponse.Message>;

  result?: PurgeCachZonePurgeResponse.Result | null;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace PurgeCachZonePurgeResponse {
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
     * Identifier
     */
    id: string;
  }
}

export type PurgeCachZonePurgeParams =
  | PurgeCachZonePurgeParams.BSSIfzalFlex
  | PurgeCachZonePurgeParams.BSSIfzalEverything
  | PurgeCachZonePurgeParams.BSSIfzalFiles;

export namespace PurgeCachZonePurgeParams {
  export interface BSSIfzalFlex {
    hosts?: Array<string>;

    prefixes?: Array<string>;

    tags?: Array<string>;
  }

  export interface BSSIfzalEverything {
    purge_everything?: boolean;
  }

  export interface BSSIfzalFiles {
    files?: Array<string | PurgeCachZonePurgeParams.BSSIfzalFiles.BSSIfzalURLAndHeaders>;
  }

  export namespace BSSIfzalFiles {
    export interface BSSIfzalURLAndHeaders {
      headers?: unknown;

      url?: string;
    }
  }
}

export namespace PurgeCaches {
  export import PurgeCachZonePurgeResponse = PurgeCachesAPI.PurgeCachZonePurgeResponse;
  export import PurgeCachZonePurgeParams = PurgeCachesAPI.PurgeCachZonePurgeParams;
}
