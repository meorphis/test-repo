// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PreviewsAPI from 'cloudflare/resources/accounts/load-balancers/previews';

export class Previews extends APIResource {
  /**
   * Get the result of a previous preview operation using the provided preview_id.
   */
  retrieve(
    accountIdentifier: string,
    previewId: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PreviewRetrieveResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/load_balancers/preview/${previewId}`, options);
  }
}

export interface PreviewRetrieveResponse {
  errors?: Array<PreviewRetrieveResponse.Error>;

  messages?: Array<PreviewRetrieveResponse.Message>;

  /**
   * Resulting health data from a preview operation.
   */
  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace PreviewRetrieveResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export namespace Previews {
  export import PreviewRetrieveResponse = PreviewsAPI.PreviewRetrieveResponse;
}
