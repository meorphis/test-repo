// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as BgeSmallEnV1_5API from 'cloudflare/resources/ai/model/text-embeddings/bge-small-en-v1-5';

export class BgeSmallEnV1_5 extends APIResource {
  /**
   * Execute @cf/baai/bge-small-en-v1.5 model.
   */
  run(
    accountIdentifier: string,
    body: BgeSmallEnV1_5RunParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BgeSmallEnV1_5RunResponse> {
    return this._client.post(`/apiv4/accounts/${accountIdentifier}/ai/run/@cf/baai/bge-small-en-v1.5`, {
      body,
      ...options,
    });
  }
}

export interface BgeSmallEnV1_5RunResponse {
  data?: Array<Array<number>>;

  shape?: Array<number>;
}

export interface BgeSmallEnV1_5RunParams {
  text: string | Array<string>;
}

export namespace BgeSmallEnV1_5 {
  export import BgeSmallEnV1_5RunResponse = BgeSmallEnV1_5API.BgeSmallEnV1_5RunResponse;
  export import BgeSmallEnV1_5RunParams = BgeSmallEnV1_5API.BgeSmallEnV1_5RunParams;
}
