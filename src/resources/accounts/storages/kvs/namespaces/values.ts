// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ValuesAPI from 'cloudflare/resources/accounts/storages/kvs/namespaces/values';
import { multipartFormRequestOptions } from 'cloudflare/core';

export class Values extends APIResource {
  /**
   * Returns the value associated with the given key in the given namespace. Use
   * URL-encoding to use special characters (for example, `:`, `!`, `%`) in the key
   * name. If the KV-pair is set to expire at some point, the expiration time as
   * measured in seconds since the UNIX epoch will be returned in the `expiration`
   * response header.
   */
  retrieve(
    accountIdentifier: string,
    namespaceIdentifier: string,
    keyName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<string> {
    return this._client.get(
      `/accounts/${accountIdentifier}/storage/kv/namespaces/${namespaceIdentifier}/values/${keyName}`,
      { ...options, headers: { Accept: 'application/json', ...options?.headers } },
    );
  }

  /**
   * Write a value identified by a key. Use URL-encoding to use special characters
   * (for example, `:`, `!`, `%`) in the key name. Body should be the value to be
   * stored along with JSON metadata to be associated with the key/value pair.
   * Existing values, expirations, and metadata will be overwritten. If neither
   * `expiration` nor `expiration_ttl` is specified, the key-value pair will never
   * expire. If both are set, `expiration_ttl` is used and `expiration` is ignored.
   */
  update(
    accountIdentifier: string,
    namespaceIdentifier: string,
    keyName: string,
    body: ValueUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ValueUpdateResponse> {
    return this._client.put(
      `/accounts/${accountIdentifier}/storage/kv/namespaces/${namespaceIdentifier}/values/${keyName}`,
      multipartFormRequestOptions({ body, ...options }),
    );
  }

  /**
   * Remove a KV pair from the namespace. Use URL-encoding to use special characters
   * (for example, `:`, `!`, `%`) in the key name.
   */
  delete(
    accountIdentifier: string,
    namespaceIdentifier: string,
    keyName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ValueDeleteResponse> {
    return this._client.delete(
      `/accounts/${accountIdentifier}/storage/kv/namespaces/${namespaceIdentifier}/values/${keyName}`,
      options,
    );
  }
}

/**
 * A byte sequence to be stored, up to 25 MiB in length.
 */
export type ValueRetrieveResponse = string;

export interface ValueUpdateResponse {
  errors?: Array<ValueUpdateResponse.Error>;

  messages?: Array<ValueUpdateResponse.Message>;

  result?: unknown | string;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ValueUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface ValueDeleteResponse {
  errors?: Array<ValueDeleteResponse.Error>;

  messages?: Array<ValueDeleteResponse.Message>;

  result?: unknown | string;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ValueDeleteResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface ValueUpdateParams {
  /**
   * Arbitrary JSON to be associated with a key/value pair.
   */
  metadata: string;

  /**
   * A byte sequence to be stored, up to 25 MiB in length.
   */
  value: string;
}

export namespace Values {
  export import ValueRetrieveResponse = ValuesAPI.ValueRetrieveResponse;
  export import ValueUpdateResponse = ValuesAPI.ValueUpdateResponse;
  export import ValueDeleteResponse = ValuesAPI.ValueDeleteResponse;
  export import ValueUpdateParams = ValuesAPI.ValueUpdateParams;
}
