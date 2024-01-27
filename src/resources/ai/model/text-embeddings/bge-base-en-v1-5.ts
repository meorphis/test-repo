// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as BgeBaseEnV1_5API from 'cloudflare/resources/ai/model/text-embeddings/bge-base-en-v1-5';

export class BgeBaseEnV1_5 extends APIResource {
  /**
   * Execute @cf/baai/bge-base-en-v1.5 model.
   */
  run(
    accountIdentifier: string,
    body: BgeBaseEnV1_5RunParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BgeBaseEnV1_5RunResponse> {
    return this._client.post(`/apiv4/accounts/${accountIdentifier}/ai/run/@cf/baai/bge-base-en-v1.5`, {
      body,
      ...options,
    });
  }
}

export interface BgeBaseEnV1_5RunResponse {
  data?: Array<Array<number>>;

  shape?: Array<number>;
}

export interface BgeBaseEnV1_5RunParams {
  text: string | Array<string>;
}

export namespace BgeBaseEnV1_5 {
  export import BgeBaseEnV1_5RunResponse = BgeBaseEnV1_5API.BgeBaseEnV1_5RunResponse;
  export import BgeBaseEnV1_5RunParams = BgeBaseEnV1_5API.BgeBaseEnV1_5RunParams;
}
