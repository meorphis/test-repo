// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as MetadataAPI from 'cloudflare/resources/accounts/storages/kvs/namespaces/metadata';

export class Metadata extends APIResource {
  /**
   * Returns the metadata associated with the given key in the given namespace. Use
   * URL-encoding to use special characters (for example, `:`, `!`, `%`) in the key
   * name.
   */
  retrieve(
    accountIdentifier: string,
    namespaceIdentifier: string,
    keyName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MetadataRetrieveResponse> {
    return this._client.get(
      `/accounts/${accountIdentifier}/storage/kv/namespaces/${namespaceIdentifier}/metadata/${keyName}`,
      options,
    );
  }
}

export interface MetadataRetrieveResponse {
  errors?: Array<MetadataRetrieveResponse.Error>;

  messages?: Array<MetadataRetrieveResponse.Message>;

  /**
   * Arbitrary JSON that is associated with a key.
   */
  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace MetadataRetrieveResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export namespace Metadata {
  export import MetadataRetrieveResponse = MetadataAPI.MetadataRetrieveResponse;
}
