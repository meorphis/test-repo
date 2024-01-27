// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as NamespacesAPI from 'cloudflare/resources/accounts/storages/kvs/namespaces/namespaces';
import * as BulksAPI from 'cloudflare/resources/accounts/storages/kvs/namespaces/bulks';
import * as KeysAPI from 'cloudflare/resources/accounts/storages/kvs/namespaces/keys';
import * as MetadataAPI from 'cloudflare/resources/accounts/storages/kvs/namespaces/metadata';
import * as ValuesAPI from 'cloudflare/resources/accounts/storages/kvs/namespaces/values';
import { Page } from 'cloudflare/pagination';

export class Namespaces extends APIResource {
  bulks: BulksAPI.Bulks = new BulksAPI.Bulks(this._client);
  keys: KeysAPI.Keys = new KeysAPI.Keys(this._client);
  metadata: MetadataAPI.Metadata = new MetadataAPI.Metadata(this._client);
  values: ValuesAPI.Values = new ValuesAPI.Values(this._client);

  /**
   * Modifies a namespace's title.
   */
  update(
    accountIdentifier: string,
    namespaceIdentifier: string,
    body: NamespaceUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NamespaceUpdateResponse> {
    return this._client.put(`/accounts/${accountIdentifier}/storage/kv/namespaces/${namespaceIdentifier}`, {
      body,
      ...options,
    });
  }

  /**
   * Returns the namespaces owned by an account.
   */
  list(
    accountIdentifier: string,
    query?: NamespaceListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<NamespaceListResponsesPage, NamespaceListResponse>;
  list(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<NamespaceListResponsesPage, NamespaceListResponse>;
  list(
    accountIdentifier: string,
    query: NamespaceListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<NamespaceListResponsesPage, NamespaceListResponse> {
    if (isRequestOptions(query)) {
      return this.list(accountIdentifier, {}, query);
    }
    return this._client.getAPIList(
      `/accounts/${accountIdentifier}/storage/kv/namespaces`,
      NamespaceListResponsesPage,
      { query, ...options },
    );
  }

  /**
   * Deletes the namespace corresponding to the given ID.
   */
  delete(
    accountIdentifier: string,
    namespaceIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NamespaceDeleteResponse> {
    return this._client.delete(
      `/accounts/${accountIdentifier}/storage/kv/namespaces/${namespaceIdentifier}`,
      options,
    );
  }

  /**
   * Creates a namespace under the given title. A `400` is returned if the account
   * already owns a namespace with this title. A namespace must be explicitly deleted
   * to be replaced.
   */
  workersKvNamespaceCreateANamespace(
    accountIdentifier: string,
    body: NamespaceWorkersKvNamespaceCreateANamespaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NamespaceWorkersKvNamespaceCreateANamespaceResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/storage/kv/namespaces`, { body, ...options });
  }
}

export class NamespaceListResponsesPage extends Page<NamespaceListResponse> {}

export interface NamespaceUpdateResponse {
  errors?: Array<NamespaceUpdateResponse.Error>;

  messages?: Array<NamespaceUpdateResponse.Message>;

  result?: unknown | string;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace NamespaceUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface NamespaceListResponse {
  /**
   * Namespace identifier tag.
   */
  id: string;

  /**
   * A human-readable string name for a Namespace.
   */
  title: string;

  /**
   * True if keys written on the URL will be URL-decoded before storing. For example,
   * if set to "true", a key written on the URL as "%3F" will be stored as "?".
   */
  supports_url_encoding?: boolean;
}

export interface NamespaceDeleteResponse {
  errors?: Array<NamespaceDeleteResponse.Error>;

  messages?: Array<NamespaceDeleteResponse.Message>;

  result?: unknown | string;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace NamespaceDeleteResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface NamespaceWorkersKvNamespaceCreateANamespaceResponse {
  errors?: Array<NamespaceWorkersKvNamespaceCreateANamespaceResponse.Error>;

  messages?: Array<NamespaceWorkersKvNamespaceCreateANamespaceResponse.Message>;

  result?: NamespaceWorkersKvNamespaceCreateANamespaceResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace NamespaceWorkersKvNamespaceCreateANamespaceResponse {
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
     * Namespace identifier tag.
     */
    id: string;

    /**
     * A human-readable string name for a Namespace.
     */
    title: string;

    /**
     * True if keys written on the URL will be URL-decoded before storing. For example,
     * if set to "true", a key written on the URL as "%3F" will be stored as "?".
     */
    supports_url_encoding?: boolean;
  }
}

export interface NamespaceUpdateParams {
  /**
   * A human-readable string name for a Namespace.
   */
  title: string;
}

export interface NamespaceListParams {
  /**
   * Direction to order namespaces.
   */
  direction?: 'asc' | 'desc';

  /**
   * Field to order results by.
   */
  order?: 'id' | 'title';

  /**
   * Page number of paginated results.
   */
  page?: number;

  /**
   * Maximum number of results per page.
   */
  per_page?: number;
}

export interface NamespaceWorkersKvNamespaceCreateANamespaceParams {
  /**
   * A human-readable string name for a Namespace.
   */
  title: string;
}

export namespace Namespaces {
  export import NamespaceUpdateResponse = NamespacesAPI.NamespaceUpdateResponse;
  export import NamespaceListResponse = NamespacesAPI.NamespaceListResponse;
  export import NamespaceDeleteResponse = NamespacesAPI.NamespaceDeleteResponse;
  export import NamespaceWorkersKvNamespaceCreateANamespaceResponse = NamespacesAPI.NamespaceWorkersKvNamespaceCreateANamespaceResponse;
  export import NamespaceListResponsesPage = NamespacesAPI.NamespaceListResponsesPage;
  export import NamespaceUpdateParams = NamespacesAPI.NamespaceUpdateParams;
  export import NamespaceListParams = NamespacesAPI.NamespaceListParams;
  export import NamespaceWorkersKvNamespaceCreateANamespaceParams = NamespacesAPI.NamespaceWorkersKvNamespaceCreateANamespaceParams;
  export import Bulks = BulksAPI.Bulks;
  export import BulkDeleteResponse = BulksAPI.BulkDeleteResponse;
  export import BulkWorkersKvNamespaceWriteMultipleKeyValuePairsResponse = BulksAPI.BulkWorkersKvNamespaceWriteMultipleKeyValuePairsResponse;
  export import BulkDeleteParams = BulksAPI.BulkDeleteParams;
  export import BulkWorkersKvNamespaceWriteMultipleKeyValuePairsParams = BulksAPI.BulkWorkersKvNamespaceWriteMultipleKeyValuePairsParams;
  export import Keys = KeysAPI.Keys;
  export import KeyListResponse = KeysAPI.KeyListResponse;
  export import KeyListParams = KeysAPI.KeyListParams;
  export import Metadata = MetadataAPI.Metadata;
  export import MetadataRetrieveResponse = MetadataAPI.MetadataRetrieveResponse;
  export import Values = ValuesAPI.Values;
  export import ValueRetrieveResponse = ValuesAPI.ValueRetrieveResponse;
  export import ValueUpdateResponse = ValuesAPI.ValueUpdateResponse;
  export import ValueDeleteResponse = ValuesAPI.ValueDeleteResponse;
  export import ValueUpdateParams = ValuesAPI.ValueUpdateParams;
}
