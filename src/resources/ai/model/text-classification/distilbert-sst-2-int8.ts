// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DistilbertSst2Int8API from 'cloudflare/resources/ai/model/text-classification/distilbert-sst-2-int8';

export class DistilbertSst2Int8 extends APIResource {
  /**
   * Execute @cf/huggingface/distilbert-sst-2-int8 model.
   */
  run(
    accountIdentifier: string,
    body: DistilbertSst2Int8RunParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DistilbertSst2Int8RunResponse> {
    return this._client.post(
      `/apiv4/accounts/${accountIdentifier}/ai/run/@cf/huggingface/distilbert-sst-2-int8`,
      { body, ...options },
    );
  }
}

export type DistilbertSst2Int8RunResponse =
  Array<DistilbertSst2Int8RunResponse.DistilbertSst2Int8RunResponseItem>;

export namespace DistilbertSst2Int8RunResponse {
  export interface DistilbertSst2Int8RunResponseItem {
    label?: string;

    score?: number;
  }
}

export interface DistilbertSst2Int8RunParams {
  text: string;
}

export namespace DistilbertSst2Int8 {
  export import DistilbertSst2Int8RunResponse = DistilbertSst2Int8API.DistilbertSst2Int8RunResponse;
  export import DistilbertSst2Int8RunParams = DistilbertSst2Int8API.DistilbertSst2Int8RunParams;
}
