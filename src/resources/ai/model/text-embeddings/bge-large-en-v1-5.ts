// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as BgeLargeEnV1_5API from 'cloudflare/resources/ai/model/text-embeddings/bge-large-en-v1-5';

export class BgeLargeEnV1_5 extends APIResource {
  /**
   * Execute @cf/baai/bge-large-en-v1.5 model.
   */
  run(
    accountIdentifier: string,
    body: BgeLargeEnV1_5RunParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BgeLargeEnV1_5RunResponse> {
    return this._client.post(`/apiv4/accounts/${accountIdentifier}/ai/run/@cf/baai/bge-large-en-v1.5`, {
      body,
      ...options,
    });
  }
}

export interface BgeLargeEnV1_5RunResponse {
  data?: Array<Array<number>>;

  shape?: Array<number>;
}

export interface BgeLargeEnV1_5RunParams {
  text: string | Array<string>;
}

export namespace BgeLargeEnV1_5 {
  export import BgeLargeEnV1_5RunResponse = BgeLargeEnV1_5API.BgeLargeEnV1_5RunResponse;
  export import BgeLargeEnV1_5RunParams = BgeLargeEnV1_5API.BgeLargeEnV1_5RunParams;
}
