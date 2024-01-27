// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as Mistral7bInstructV0_1API from 'cloudflare/resources/ai/model/text-generation/mistral-7b-instruct-v0-1';
import { type Uploadable } from 'cloudflare/core';

export class Mistral7bInstructV0_1 extends APIResource {
  /**
   * Execute @cf/mistral/mistral-7b-instruct-v0.1 model.
   */
  run(
    accountIdentifier: string,
    body: Mistral7bInstructV0_1RunParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Mistral7bInstructV0_1RunResponse> {
    return this._client.post(
      `/apiv4/accounts/${accountIdentifier}/ai/run/@cf/mistral/mistral-7b-instruct-v0.1`,
      { body, ...options },
    );
  }
}

export type Mistral7bInstructV0_1RunResponse = Mistral7bInstructV0_1RunResponse.Response | Uploadable;

export namespace Mistral7bInstructV0_1RunResponse {
  export interface Response {
    response?: string;
  }
}

export type Mistral7bInstructV0_1RunParams =
  | Mistral7bInstructV0_1RunParams.Variant0
  | Mistral7bInstructV0_1RunParams.Variant1;

export namespace Mistral7bInstructV0_1RunParams {
  export interface Variant0 {
    prompt: string;

    stream?: boolean;
  }

  export interface Variant1 {
    messages: Array<Mistral7bInstructV0_1RunParams.Variant1.Message>;
  }

  export namespace Variant1 {
    export interface Message {
      content: string;

      role: string;
    }
  }
}

export namespace Mistral7bInstructV0_1 {
  export import Mistral7bInstructV0_1RunResponse = Mistral7bInstructV0_1API.Mistral7bInstructV0_1RunResponse;
  export import Mistral7bInstructV0_1RunParams = Mistral7bInstructV0_1API.Mistral7bInstructV0_1RunParams;
}
