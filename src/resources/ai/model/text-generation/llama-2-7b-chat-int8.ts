// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as Llama2_7bChatInt8API from 'cloudflare/resources/ai/model/text-generation/llama-2-7b-chat-int8';
import { type Uploadable } from 'cloudflare/core';

export class Llama2_7bChatInt8 extends APIResource {
  /**
   * Execute @cf/meta/llama-2-7b-chat-int8 model.
   */
  run(
    accountIdentifier: string,
    body: Llama2_7bChatInt8RunParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Llama2_7bChatInt8RunResponse> {
    return this._client.post(`/apiv4/accounts/${accountIdentifier}/ai/run/@cf/meta/llama-2-7b-chat-int8`, {
      body,
      ...options,
    });
  }
}

export type Llama2_7bChatInt8RunResponse = Llama2_7bChatInt8RunResponse.Response | Uploadable;

export namespace Llama2_7bChatInt8RunResponse {
  export interface Response {
    response?: string;
  }
}

export type Llama2_7bChatInt8RunParams =
  | Llama2_7bChatInt8RunParams.Variant0
  | Llama2_7bChatInt8RunParams.Variant1;

export namespace Llama2_7bChatInt8RunParams {
  export interface Variant0 {
    prompt: string;

    stream?: boolean;
  }

  export interface Variant1 {
    messages: Array<Llama2_7bChatInt8RunParams.Variant1.Message>;
  }

  export namespace Variant1 {
    export interface Message {
      content: string;

      role: string;
    }
  }
}

export namespace Llama2_7bChatInt8 {
  export import Llama2_7bChatInt8RunResponse = Llama2_7bChatInt8API.Llama2_7bChatInt8RunResponse;
  export import Llama2_7bChatInt8RunParams = Llama2_7bChatInt8API.Llama2_7bChatInt8RunParams;
}
