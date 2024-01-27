// File generated from our OpenAPI spec by Stainless.

export interface HyperdriveHyperdriveWithIdentifier {
  name: string;

  origin: HyperdriveHyperdriveWithIdentifier.Origin;

  caching?: HyperdriveHyperdriveWithIdentifier.Caching;
}

export namespace HyperdriveHyperdriveWithIdentifier {
  export interface Origin {
    /**
     * The name of your origin database.
     */
    database?: string;

    /**
     * The host (hostname or IP) of your origin database.
     */
    host?: string;

    /**
     * The port (default: 5432 for Postgres) of your origin database.
     */
    port?: number;

    /**
     * Specifies the URL scheme used to connect to your origin database.
     */
    scheme?: 'postgres' | 'postgresql';

    /**
     * The user of your origin database.
     */
    user?: string;
  }

  export interface Caching {
    /**
     * When set to true, disables the caching of SQL responses. (Default: false)
     */
    disabled?: boolean;

    /**
     * When present, specifies max duration for which items should persist in the
     * cache. (Default: 60)
     */
    max_age?: number;

    /**
     * When present, indicates the number of seconds cache may serve the response after
     * it becomes stale. (Default: 15)
     */
    stale_while_revalidate?: number;
  }
}

export interface VectorizeCreateIndexResponse {
  config?: VectorizeCreateIndexResponse.Config;

  /**
   * Specifies the timestamp the resource was created as an ISO8601 string.
   */
  created_on?: unknown;

  /**
   * Specifies the description of the index.
   */
  description?: string;

  /**
   * Specifies the timestamp the resource was modified as an ISO8601 string.
   */
  modified_on?: unknown;

  name?: string;
}

export namespace VectorizeCreateIndexResponse {
  export interface Config {
    /**
     * Specifies the number of dimensions for the index
     */
    dimensions: number;

    /**
     * Specifies the type of metric to use calculating distance.
     */
    metric: 'cosine' | 'euclidean' | 'dot-product';
  }
}

export interface WaitingRoomSettingsResponse {
  result?: WaitingRoomSettingsResponse.Result;
}

export namespace WaitingRoomSettingsResponse {
  export interface Result {
    /**
     * Whether to allow verified search engine crawlers to bypass all waiting rooms on
     * this zone. Verified search engine crawlers will not be tracked or counted by the
     * waiting room system, and will not appear in waiting room analytics.
     */
    search_engine_crawler_bypass: boolean;
  }
}
