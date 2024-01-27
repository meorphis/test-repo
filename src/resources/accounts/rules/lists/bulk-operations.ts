// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as BulkOperationsAPI from 'cloudflare/resources/accounts/rules/lists/bulk-operations';

export class BulkOperations extends APIResource {
  /**
   * Gets the current status of an asynchronous operation on a list.
   *
   * The `status` property can have one of the following values: `pending`,
   * `running`, `completed`, or `failed`. If the status is `failed`, the `error`
   * property will contain a message describing the error.
   */
  retrieve(
    accountIdentifier: string,
    operationId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BulkOperationRetrieveResponse> {
    return this._client.get(
      `/accounts/${accountIdentifier}/rules/lists/bulk_operations/${operationId}`,
      options,
    );
  }
}

export interface BulkOperationRetrieveResponse {
  errors?: Array<BulkOperationRetrieveResponse.Error>;

  messages?: Array<BulkOperationRetrieveResponse.Message>;

  result?: BulkOperationRetrieveResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace BulkOperationRetrieveResponse {
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
     * The unique operation ID of the asynchronous action.
     */
    id: string;

    /**
     * The current status of the asynchronous operation.
     */
    status: 'pending' | 'running' | 'completed' | 'failed';

    /**
     * The RFC 3339 timestamp of when the operation was completed.
     */
    completed?: string;

    /**
     * A message describing the error when the status is `failed`.
     */
    error?: string;
  }
}

export namespace BulkOperations {
  export import BulkOperationRetrieveResponse = BulkOperationsAPI.BulkOperationRetrieveResponse;
}
