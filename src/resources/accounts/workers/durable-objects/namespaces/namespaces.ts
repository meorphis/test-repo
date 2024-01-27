// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as NamespacesAPI from 'cloudflare/resources/accounts/workers/durable-objects/namespaces/namespaces';
import * as ObjectsAPI from 'cloudflare/resources/accounts/workers/durable-objects/namespaces/objects';

export class Namespaces extends APIResource {
  objects: ObjectsAPI.Objects = new ObjectsAPI.Objects(this._client);

  /**
   * Returns the Durable Object namespaces owned by an account.
   */
  list(accountIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<NamespaceListResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/workers/durable_objects/namespaces`, options);
  }
}

export interface NamespaceListResponse {
  errors?: Array<NamespaceListResponse.Error>;

  messages?: Array<NamespaceListResponse.Message>;

  result?: Array<NamespaceListResponse.Result>;

  result_info?: NamespaceListResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace NamespaceListResponse {
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

    class?: unknown;

    name?: unknown;

    script?: unknown;
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

export namespace Namespaces {
  export import NamespaceListResponse = NamespacesAPI.NamespaceListResponse;
  export import Objects = ObjectsAPI.Objects;
  export import ObjectListResponse = ObjectsAPI.ObjectListResponse;
  export import ObjectListParams = ObjectsAPI.ObjectListParams;
}
