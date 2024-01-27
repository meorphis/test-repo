// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as CacheAPI from 'cloudflare/resources/zones/cache';

export class Cache extends APIResource {
  /**
   * You can use Cache Reserve Clear to clear your Cache Reserve, but you must first
   * disable Cache Reserve. In most cases, this will be accomplished within 24 hours.
   * You cannot re-enable Cache Reserve while this process is ongoing. Keep in mind
   * that you cannot undo or cancel this operation.
   */
  getCacheReserveClear(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CacheGetCacheReserveClearResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/cache/cache_reserve_clear`, options);
  }

  /**
   * Instructs Cloudflare to use Post-Quantum (PQ) key agreement algorithms when
   * connecting to your origin. Preferred instructs Cloudflare to opportunistically
   * send a Post-Quantum keyshare in the first message to the origin (for fastest
   * connections when the origin supports and prefers PQ), supported means that PQ
   * algorithms are advertised but only used when requested by the origin, and off
   * means that PQ algorithms are not advertised
   */
  getOriginPostQuantumEncryption(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CacheGetOriginPostQuantumEncryptionResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/cache/origin_post_quantum_encryption`, options);
  }

  /**
   * Instructs Cloudflare to check a regional hub data center on the way to your
   * upper tier. This can help improve performance for smart and custom tiered cache
   * topologies.
   */
  getRegionalTieredCache(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CacheGetRegionalTieredCacheResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/cache/regional_tiered_cache`, options);
  }

  /**
   * Instructs Cloudflare to check a regional hub data center on the way to your
   * upper tier. This can help improve performance for smart and custom tiered cache
   * topologies.
   */
  patchRegionalTieredCache(
    zoneIdentifier: string,
    body: CachePatchRegionalTieredCacheParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CachePatchRegionalTieredCacheResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/cache/regional_tiered_cache`, { body, ...options });
  }

  /**
   * You can use Cache Reserve Clear to clear your Cache Reserve, but you must first
   * disable Cache Reserve. In most cases, this will be accomplished within 24 hours.
   * You cannot re-enable Cache Reserve while this process is ongoing. Keep in mind
   * that you cannot undo or cancel this operation.
   */
  postCacheReserveClear(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CachePostCacheReserveClearResponse> {
    return this._client.post(`/zones/${zoneIdentifier}/cache/cache_reserve_clear`, options);
  }

  /**
   * Instructs Cloudflare to use Post-Quantum (PQ) key agreement algorithms when
   * connecting to your origin. Preferred instructs Cloudflare to opportunistically
   * send a Post-Quantum keyshare in the first message to the origin (for fastest
   * connections when the origin supports and prefers PQ), supported means that PQ
   * algorithms are advertised but only used when requested by the origin, and off
   * means that PQ algorithms are not advertised
   */
  putOriginPostQuantumEncryption(
    zoneIdentifier: string,
    body: CachePutOriginPostQuantumEncryptionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CachePutOriginPostQuantumEncryptionResponse> {
    return this._client.put(`/zones/${zoneIdentifier}/cache/origin_post_quantum_encryption`, {
      body,
      ...options,
    });
  }
}

export interface CacheGetCacheReserveClearResponse {
  errors?: Array<CacheGetCacheReserveClearResponse.Error>;

  messages?: Array<CacheGetCacheReserveClearResponse.Message>;

  result?: CacheGetCacheReserveClearResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace CacheGetCacheReserveClearResponse {
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
     * ID of the zone setting.
     */
    id?: 'cache_reserve_clear';

    /**
     * The time that the latest Cache Reserve Clear operation completed.
     */
    end_ts?: string;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * The time that the latest Cache Reserve Clear operation started.
     */
    start_ts?: string;

    /**
     * The current state of the Cache Reserve Clear operation.
     */
    state?: 'In-progress' | 'Completed';
  }
}

export interface CacheGetOriginPostQuantumEncryptionResponse {
  errors?: Array<CacheGetOriginPostQuantumEncryptionResponse.Error>;

  messages?: Array<CacheGetOriginPostQuantumEncryptionResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace CacheGetOriginPostQuantumEncryptionResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface CacheGetRegionalTieredCacheResponse {
  errors?: Array<CacheGetRegionalTieredCacheResponse.Error>;

  messages?: Array<CacheGetRegionalTieredCacheResponse.Message>;

  result?: CacheGetRegionalTieredCacheResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace CacheGetRegionalTieredCacheResponse {
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
     * ID of the zone setting.
     */
    id?: 'tc_regional';

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Instructs Cloudflare to check a regional hub data center on the way to your
     * upper tier. This can help improve performance for smart and custom tiered cache
     * topologies.
     */
    value?: Result.Value;
  }

  export namespace Result {
    /**
     * Instructs Cloudflare to check a regional hub data center on the way to your
     * upper tier. This can help improve performance for smart and custom tiered cache
     * topologies.
     */
    export interface Value {
      /**
       * ID of the zone setting.
       */
      id?: 'tc_regional';

      /**
       * last time this setting was modified.
       */
      modified_on?: string | null;
    }
  }
}

export interface CachePatchRegionalTieredCacheResponse {
  errors?: Array<CachePatchRegionalTieredCacheResponse.Error>;

  messages?: Array<CachePatchRegionalTieredCacheResponse.Message>;

  result?: CachePatchRegionalTieredCacheResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace CachePatchRegionalTieredCacheResponse {
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
     * ID of the zone setting.
     */
    id?: 'tc_regional';

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Instructs Cloudflare to check a regional hub data center on the way to your
     * upper tier. This can help improve performance for smart and custom tiered cache
     * topologies.
     */
    value?: Result.Value;
  }

  export namespace Result {
    /**
     * Instructs Cloudflare to check a regional hub data center on the way to your
     * upper tier. This can help improve performance for smart and custom tiered cache
     * topologies.
     */
    export interface Value {
      /**
       * ID of the zone setting.
       */
      id?: 'tc_regional';

      /**
       * last time this setting was modified.
       */
      modified_on?: string | null;
    }
  }
}

export interface CachePostCacheReserveClearResponse {
  errors?: Array<CachePostCacheReserveClearResponse.Error>;

  messages?: Array<CachePostCacheReserveClearResponse.Message>;

  result?: CachePostCacheReserveClearResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace CachePostCacheReserveClearResponse {
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
     * ID of the zone setting.
     */
    id?: 'cache_reserve_clear';

    /**
     * The time that the latest Cache Reserve Clear operation completed.
     */
    end_ts?: string;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * The time that the latest Cache Reserve Clear operation started.
     */
    start_ts?: string;

    /**
     * The current state of the Cache Reserve Clear operation.
     */
    state?: 'In-progress' | 'Completed';
  }
}

export interface CachePutOriginPostQuantumEncryptionResponse {
  errors?: Array<CachePutOriginPostQuantumEncryptionResponse.Error>;

  messages?: Array<CachePutOriginPostQuantumEncryptionResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace CachePutOriginPostQuantumEncryptionResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface CachePatchRegionalTieredCacheParams {
  /**
   * Value of the Regional Tiered Cache zone setting.
   */
  value: 'on' | 'off';
}

export interface CachePutOriginPostQuantumEncryptionParams {
  /**
   * Value of the Origin Post Quantum Encryption Setting.
   */
  value: 'preferred' | 'supported' | 'off';
}

export namespace Cache {
  export import CacheGetCacheReserveClearResponse = CacheAPI.CacheGetCacheReserveClearResponse;
  export import CacheGetOriginPostQuantumEncryptionResponse = CacheAPI.CacheGetOriginPostQuantumEncryptionResponse;
  export import CacheGetRegionalTieredCacheResponse = CacheAPI.CacheGetRegionalTieredCacheResponse;
  export import CachePatchRegionalTieredCacheResponse = CacheAPI.CachePatchRegionalTieredCacheResponse;
  export import CachePostCacheReserveClearResponse = CacheAPI.CachePostCacheReserveClearResponse;
  export import CachePutOriginPostQuantumEncryptionResponse = CacheAPI.CachePutOriginPostQuantumEncryptionResponse;
  export import CachePatchRegionalTieredCacheParams = CacheAPI.CachePatchRegionalTieredCacheParams;
  export import CachePutOriginPostQuantumEncryptionParams = CacheAPI.CachePutOriginPostQuantumEncryptionParams;
}
