// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as HyperdriveConfigsAPI from 'cloudflare/resources/hyperdrive-configs';

export class HyperdriveConfigs extends APIResource {
  /**
   * Returns the specified Hyperdrive configuration.
   */
  retrieve(
    accountIdentifier: string,
    hyperdriveIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HyperdriveConfigRetrieveResponse> {
    return this._client.get(
      `/accounts/${accountIdentifier}/hyperdrive/configs/${hyperdriveIdentifier}`,
      options,
    );
  }

  /**
   * Updates and returns the specified Hyperdrive configuration.
   */
  update(
    accountIdentifier: string,
    hyperdriveIdentifier: string,
    body: HyperdriveConfigUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HyperdriveConfigUpdateResponse> {
    return this._client.put(`/accounts/${accountIdentifier}/hyperdrive/configs/${hyperdriveIdentifier}`, {
      body,
      ...options,
    });
  }

  /**
   * Deletes the specified Hyperdrive.
   */
  delete(
    accountIdentifier: string,
    hyperdriveIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HyperdriveConfigDeleteResponse> {
    return this._client.delete(
      `/accounts/${accountIdentifier}/hyperdrive/configs/${hyperdriveIdentifier}`,
      options,
    );
  }
}

export interface HyperdriveConfigRetrieveResponse {
  errors?: Array<HyperdriveConfigRetrieveResponse.Error>;

  messages?: Array<HyperdriveConfigRetrieveResponse.Message>;

  result?: HyperdriveConfigRetrieveResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace HyperdriveConfigRetrieveResponse {
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

export interface HyperdriveConfigUpdateResponse {
  errors?: Array<HyperdriveConfigUpdateResponse.Error>;

  messages?: Array<HyperdriveConfigUpdateResponse.Message>;

  result?: HyperdriveConfigUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace HyperdriveConfigUpdateResponse {
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

export interface HyperdriveConfigDeleteResponse {
  errors?: Array<HyperdriveConfigDeleteResponse.Error>;

  messages?: Array<HyperdriveConfigDeleteResponse.Message>;

  result?: unknown | null;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace HyperdriveConfigDeleteResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface HyperdriveConfigUpdateParams {
  name: string;

  origin: HyperdriveConfigUpdateParams.Origin;

  caching?: HyperdriveConfigUpdateParams.Caching;
}

export namespace HyperdriveConfigUpdateParams {
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

export namespace HyperdriveConfigs {
  export import HyperdriveConfigRetrieveResponse = HyperdriveConfigsAPI.HyperdriveConfigRetrieveResponse;
  export import HyperdriveConfigUpdateResponse = HyperdriveConfigsAPI.HyperdriveConfigUpdateResponse;
  export import HyperdriveConfigDeleteResponse = HyperdriveConfigsAPI.HyperdriveConfigDeleteResponse;
  export import HyperdriveConfigUpdateParams = HyperdriveConfigsAPI.HyperdriveConfigUpdateParams;
}
