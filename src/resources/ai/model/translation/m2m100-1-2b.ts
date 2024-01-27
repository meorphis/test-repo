// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as M2m100_1_2bAPI from 'cloudflare/resources/ai/model/translation/m2m100-1-2b';

export class M2m100_1_2b extends APIResource {
  /**
   * Execute @cf/meta/m2m100-1.2b model.
   */
  run(
    accountIdentifier: string,
    body: M2m100_1_2bRunParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<M2m100_1_2bRunResponse> {
    return this._client.post(`/apiv4/accounts/${accountIdentifier}/ai/run/@cf/meta/m2m100-1.2b`, {
      body,
      ...options,
    });
  }
}

export interface M2m100_1_2bRunResponse {
  translated_text?: string;
}

export interface M2m100_1_2bRunParams {
  target_lang: string;

  text: string;

  source_lang?: string;
}

export namespace M2m100_1_2b {
  export import M2m100_1_2bRunResponse = M2m100_1_2bAPI.M2m100_1_2bRunResponse;
  export import M2m100_1_2bRunParams = M2m100_1_2bAPI.M2m100_1_2bRunParams;
}
