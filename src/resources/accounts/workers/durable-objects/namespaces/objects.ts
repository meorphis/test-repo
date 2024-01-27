// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as ObjectsAPI from 'cloudflare/resources/accounts/workers/durable-objects/namespaces/objects';

export class Objects extends APIResource {
  /**
   * Returns the Durable Objects in a given namespace.
   */
  list(
    accountIdentifier: string,
    id: string,
    query?: ObjectListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ObjectListResponse>;
  list(
    accountIdentifier: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ObjectListResponse>;
  list(
    accountIdentifier: string,
    id: string,
    query: ObjectListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ObjectListResponse> {
    if (isRequestOptions(query)) {
      return this.list(accountIdentifier, id, {}, query);
    }
    return this._client.get(
      `/accounts/${accountIdentifier}/workers/durable_objects/namespaces/${id}/objects`,
      { query, ...options },
    );
  }
}

export interface ObjectListResponse {
  errors?: Array<ObjectListResponse.Error>;

  messages?: Array<ObjectListResponse.Message>;

  result?: Array<ObjectListResponse.Result>;

  result_info?: ObjectListResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ObjectListResponse {
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
     * ID of the Durable Object.
     */
    id?: string;

    /**
     * Whether the Durable Object has stored data.
     */
    hasStoredData?: boolean;
  }

  export interface ResultInfo {
    /**
     * Total results returned based on your list parameters.
     */
    count?: number;

    /**
     * Opaque token indicating the position from which to continue when requesting the
     * next set of records. A valid value for the cursor can be obtained from the
     * cursors object in the result_info structure.
     */
    cursor?: string;
  }
}

export interface ObjectListParams {
  /**
   * Opaque token indicating the position from which to continue when requesting the
   * next set of records. A valid value for the cursor can be obtained from the
   * cursors object in the result_info structure.
   */
  cursor?: string;

  /**
   * The number of objects to return. The cursor attribute may be used to iterate
   * over the next batch of objects if there are more than the limit.
   */
  limit?: number;
}

export namespace Objects {
  export import ObjectListResponse = ObjectsAPI.ObjectListResponse;
  export import ObjectListParams = ObjectsAPI.ObjectListParams;
}
