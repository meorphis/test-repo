// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as VectorizeIndexesAPI from 'cloudflare/resources/accounts/vectorize-indexes';
import * as Shared from 'cloudflare/resources/shared';

export class VectorizeIndexes extends APIResource {
  /**
   * Creates and returns a new Vectorize Index.
   */
  create(
    accountIdentifier: string,
    body: VectorizeIndexCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VectorizeIndexCreateResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/vectorize/indexes`, { body, ...options });
  }

  /**
   * Returns the specified Vectorize Index.
   */
  retrieve(
    accountIdentifier: string,
    indexName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VectorizeIndexRetrieveResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/vectorize/indexes/${indexName}`, options);
  }

  /**
   * Updates and returns the specified Vectorize Index.
   */
  update(
    accountIdentifier: string,
    indexName: string,
    body: VectorizeIndexUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VectorizeIndexUpdateResponse> {
    return this._client.put(`/accounts/${accountIdentifier}/vectorize/indexes/${indexName}`, {
      body,
      ...options,
    });
  }

  /**
   * Returns a list of Vectorize Indexes
   */
  list(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VectorizeIndexListResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/vectorize/indexes`, options);
  }

  /**
   * Deletes the specified Vectorize Index.
   */
  delete(
    accountIdentifier: string,
    indexName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VectorizeIndexDeleteResponse> {
    return this._client.delete(`/accounts/${accountIdentifier}/vectorize/indexes/${indexName}`, options);
  }

  /**
   * Inserts vectors into the specified index and returns the count of the vectors
   * successfully inserted.
   */
  insert(
    accountIdentifier: string,
    indexName: string,
    body: VectorizeIndexInsertParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VectorizeIndexInsertResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/vectorize/indexes/${indexName}/insert`, options);
  }

  /**
   * Finds vectors closest to a given vector in an index.
   */
  query(
    accountIdentifier: string,
    indexName: string,
    body: VectorizeIndexQueryParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VectorizeIndexQueryResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/vectorize/indexes/${indexName}/query`, {
      body,
      ...options,
    });
  }

  /**
   * Upserts vectors into the specified index, creating them if they do not exist and
   * returns the count of values and ids successfully inserted.
   */
  upsert(
    accountIdentifier: string,
    indexName: string,
    body: VectorizeIndexUpsertParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VectorizeIndexUpsertResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/vectorize/indexes/${indexName}/upsert`, options);
  }
}

export interface VectorizeIndexCreateResponse {
  errors?: Array<VectorizeIndexCreateResponse.Error>;

  messages?: Array<VectorizeIndexCreateResponse.Message>;

  result?: Shared.VectorizeCreateIndexResponse;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace VectorizeIndexCreateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface VectorizeIndexRetrieveResponse {
  errors?: Array<VectorizeIndexRetrieveResponse.Error>;

  messages?: Array<VectorizeIndexRetrieveResponse.Message>;

  result?: Shared.VectorizeCreateIndexResponse;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace VectorizeIndexRetrieveResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface VectorizeIndexUpdateResponse {
  errors?: Array<VectorizeIndexUpdateResponse.Error>;

  messages?: Array<VectorizeIndexUpdateResponse.Message>;

  result?: Shared.VectorizeCreateIndexResponse;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace VectorizeIndexUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface VectorizeIndexListResponse {
  errors?: Array<VectorizeIndexListResponse.Error>;

  messages?: Array<VectorizeIndexListResponse.Message>;

  result?: Array<Shared.VectorizeCreateIndexResponse>;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace VectorizeIndexListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface VectorizeIndexDeleteResponse {
  errors?: Array<VectorizeIndexDeleteResponse.Error>;

  messages?: Array<VectorizeIndexDeleteResponse.Message>;

  result?: unknown | null;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace VectorizeIndexDeleteResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface VectorizeIndexInsertResponse {
  errors?: Array<VectorizeIndexInsertResponse.Error>;

  messages?: Array<VectorizeIndexInsertResponse.Message>;

  result?: VectorizeIndexInsertResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace VectorizeIndexInsertResponse {
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
     * Specifies the count of the vectors successfully inserted.
     */
    count?: number;

    /**
     * Array of vector identifiers of the vectors successfully inserted.
     */
    ids?: Array<string>;
  }
}

export interface VectorizeIndexQueryResponse {
  errors?: Array<VectorizeIndexQueryResponse.Error>;

  messages?: Array<VectorizeIndexQueryResponse.Message>;

  result?: VectorizeIndexQueryResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace VectorizeIndexQueryResponse {
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
     * Specifies the count of vectors returned by the search
     */
    count?: number;

    /**
     * Array of vectors matched by the search
     */
    matches?: Array<Result.Match>;
  }

  export namespace Result {
    export interface Match {
      /**
       * The score of the vector according to the index's distance metric
       */
      score?: number;

      /**
       * If the returnVectors option is set, the vector itself
       */
      vector?: Match.Vector | null;

      /**
       * Identifier
       */
      vectorId?: string;
    }

    export namespace Match {
      /**
       * If the returnVectors option is set, the vector itself
       */
      export interface Vector {
        /**
         * Identifier
         */
        id?: string;

        metadata?: unknown;

        values?: Array<number>;
      }
    }
  }
}

export interface VectorizeIndexUpsertResponse {
  errors?: Array<VectorizeIndexUpsertResponse.Error>;

  messages?: Array<VectorizeIndexUpsertResponse.Message>;

  result?: VectorizeIndexUpsertResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace VectorizeIndexUpsertResponse {
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
     * Specifies the count of the vectors successfully inserted.
     */
    count?: number;

    /**
     * Array of vector identifiers of the vectors successfully inserted.
     */
    ids?: Array<string>;
  }
}

export interface VectorizeIndexCreateParams {
  config: unknown;

  name: string;

  /**
   * Specifies the description of the index.
   */
  description?: string;
}

export interface VectorizeIndexUpdateParams {
  /**
   * Specifies the description of the index.
   */
  description: string;
}

export interface VectorizeIndexInsertParams {}

export interface VectorizeIndexQueryParams {
  /**
   * Whether to return the values of the closest vectors, or just their identifiers.
   */
  returnVectors?: boolean;

  /**
   * The number of results to return
   */
  topK?: number;

  /**
   * The vector to find neighbors of
   */
  vector?: Array<number>;
}

export interface VectorizeIndexUpsertParams {}

export namespace VectorizeIndexes {
  export import VectorizeIndexCreateResponse = VectorizeIndexesAPI.VectorizeIndexCreateResponse;
  export import VectorizeIndexRetrieveResponse = VectorizeIndexesAPI.VectorizeIndexRetrieveResponse;
  export import VectorizeIndexUpdateResponse = VectorizeIndexesAPI.VectorizeIndexUpdateResponse;
  export import VectorizeIndexListResponse = VectorizeIndexesAPI.VectorizeIndexListResponse;
  export import VectorizeIndexDeleteResponse = VectorizeIndexesAPI.VectorizeIndexDeleteResponse;
  export import VectorizeIndexInsertResponse = VectorizeIndexesAPI.VectorizeIndexInsertResponse;
  export import VectorizeIndexQueryResponse = VectorizeIndexesAPI.VectorizeIndexQueryResponse;
  export import VectorizeIndexUpsertResponse = VectorizeIndexesAPI.VectorizeIndexUpsertResponse;
  export import VectorizeIndexCreateParams = VectorizeIndexesAPI.VectorizeIndexCreateParams;
  export import VectorizeIndexUpdateParams = VectorizeIndexesAPI.VectorizeIndexUpdateParams;
  export import VectorizeIndexInsertParams = VectorizeIndexesAPI.VectorizeIndexInsertParams;
  export import VectorizeIndexQueryParams = VectorizeIndexesAPI.VectorizeIndexQueryParams;
  export import VectorizeIndexUpsertParams = VectorizeIndexesAPI.VectorizeIndexUpsertParams;
}
