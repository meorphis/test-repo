// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ConfigsAPI from 'cloudflare/resources/accounts/hyperdrive/configs';

export class Configs extends APIResource {
  /**
   * Creates and returns a new Hyperdrive configuration.
   */
  create(
    accountIdentifier: string,
    body: ConfigCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConfigCreateResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/hyperdrive/configs`, { body, ...options });
  }

  /**
   * Returns a list of Hyperdrives
   */
  list(accountIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<ConfigListResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/hyperdrive/configs`, options);
  }
}

export interface ConfigCreateResponse {
  errors?: Array<ConfigCreateResponse.Error>;

  messages?: Array<ConfigCreateResponse.Message>;

  result?: ConfigCreateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ConfigCreateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    name: string;

    origin: Result.Origin;

    caching?: Result.Caching;
  }

  export namespace Result {
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
}

export interface ConfigListResponse {
  errors?: Array<ConfigListResponse.Error>;

  messages?: Array<ConfigListResponse.Message>;

  result?: Array<ConfigListResponse.Result>;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ConfigListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    name: string;

    origin: Result.Origin;

    caching?: Result.Caching;
  }

  export namespace Result {
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
}

export interface ConfigCreateParams {
  name: string;

  origin: ConfigCreateParams.Origin;

  caching?: ConfigCreateParams.Caching;
}

export namespace ConfigCreateParams {
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

export namespace Configs {
  export import ConfigCreateResponse = ConfigsAPI.ConfigCreateResponse;
  export import ConfigListResponse = ConfigsAPI.ConfigListResponse;
  export import ConfigCreateParams = ConfigsAPI.ConfigCreateParams;
}
