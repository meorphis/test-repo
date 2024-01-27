// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as DatabasesAPI from 'cloudflare/resources/accounts/d1/databases';

export class Databases extends APIResource {
  /**
   * Returns the created D1 database.
   */
  create(
    accountIdentifier: string,
    body: DatabaseCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatabaseCreateResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/d1/database`, { body, ...options });
  }

  /**
   * Returns the specified D1 database.
   */
  retrieve(
    accountIdentifier: string,
    databaseIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatabaseRetrieveResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/d1/database/${databaseIdentifier}`, options);
  }

  /**
   * Returns a list of D1 databases.
   */
  list(
    accountIdentifier: string,
    query?: DatabaseListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatabaseListResponse>;
  list(accountIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<DatabaseListResponse>;
  list(
    accountIdentifier: string,
    query: DatabaseListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatabaseListResponse> {
    if (isRequestOptions(query)) {
      return this.list(accountIdentifier, {}, query);
    }
    return this._client.get(`/accounts/${accountIdentifier}/d1/database`, { query, ...options });
  }

  /**
   * Deletes the specified D1 database.
   */
  delete(
    accountIdentifier: string,
    databaseIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatabaseDeleteResponse> {
    return this._client.delete(`/accounts/${accountIdentifier}/d1/database/${databaseIdentifier}`, options);
  }

  /**
   * Returns the query result.
   */
  query(
    accountIdentifier: string,
    databaseIdentifier: string,
    body: DatabaseQueryParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatabaseQueryResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/d1/database/${databaseIdentifier}/query`, {
      body,
      ...options,
    });
  }
}

export interface DatabaseCreateResponse {
  errors?: Array<DatabaseCreateResponse.Error>;

  messages?: Array<DatabaseCreateResponse.Message>;

  result?: DatabaseCreateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace DatabaseCreateResponse {
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
     * Specifies the timestamp the resource was created as an ISO8601 string.
     */
    created_at?: unknown;

    name?: string;

    uuid?: string;

    version?: string;
  }
}

export interface DatabaseRetrieveResponse {
  errors?: Array<DatabaseRetrieveResponse.Error>;

  messages?: Array<DatabaseRetrieveResponse.Message>;

  result?: DatabaseRetrieveResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace DatabaseRetrieveResponse {
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
     * Specifies the timestamp the resource was created as an ISO8601 string.
     */
    created_at?: unknown;

    /**
     * The D1 database's size, in bytes.
     */
    file_size?: number;

    name?: string;

    num_tables?: number;

    uuid?: string;

    version?: string;
  }
}

export interface DatabaseListResponse {
  errors?: Array<DatabaseListResponse.Error>;

  messages?: Array<DatabaseListResponse.Message>;

  result?: Array<DatabaseListResponse.Result>;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace DatabaseListResponse {
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
     * Specifies the timestamp the resource was created as an ISO8601 string.
     */
    created_at?: unknown;

    name?: string;

    uuid?: string;

    version?: string;
  }
}

export interface DatabaseDeleteResponse {
  errors?: Array<DatabaseDeleteResponse.Error>;

  messages?: Array<DatabaseDeleteResponse.Message>;

  result?: unknown | null;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace DatabaseDeleteResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface DatabaseQueryResponse {
  errors?: Array<DatabaseQueryResponse.Error>;

  messages?: Array<DatabaseQueryResponse.Message>;

  result?: Array<DatabaseQueryResponse.Result>;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace DatabaseQueryResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    meta?: Result.Meta;

    results?: Array<unknown>;

    success?: boolean;
  }

  export namespace Result {
    export interface Meta {
      changed_db?: boolean;

      changes?: number;

      duration?: number;

      last_row_id?: number;

      rows_read?: number;

      rows_written?: number;

      size_after?: number;
    }
  }
}

export interface DatabaseCreateParams {
  name: string;
}

export interface DatabaseListParams {
  /**
   * a database name to search for.
   */
  name?: string;

  /**
   * Page number of paginated results.
   */
  page?: number;

  /**
   * Number of items per page.
   */
  per_page?: number;
}

export interface DatabaseQueryParams {
  sql: string;

  params?: Array<string>;
}

export namespace Databases {
  export import DatabaseCreateResponse = DatabasesAPI.DatabaseCreateResponse;
  export import DatabaseRetrieveResponse = DatabasesAPI.DatabaseRetrieveResponse;
  export import DatabaseListResponse = DatabasesAPI.DatabaseListResponse;
  export import DatabaseDeleteResponse = DatabasesAPI.DatabaseDeleteResponse;
  export import DatabaseQueryResponse = DatabasesAPI.DatabaseQueryResponse;
  export import DatabaseCreateParams = DatabasesAPI.DatabaseCreateParams;
  export import DatabaseListParams = DatabasesAPI.DatabaseListParams;
  export import DatabaseQueryParams = DatabasesAPI.DatabaseQueryParams;
}
