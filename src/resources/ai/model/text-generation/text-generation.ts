// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as Llama2_7bChatFp16API from 'cloudflare/resources/ai/model/text-generation/llama-2-7b-chat-fp16';
import * as Llama2_7bChatInt8API from 'cloudflare/resources/ai/model/text-generation/llama-2-7b-chat-int8';
import * as Mistral7bInstructV0_1API from 'cloudflare/resources/ai/model/text-generation/mistral-7b-instruct-v0-1';

export class TextGeneration extends APIResource {
  llama2_7bChatInt8: Llama2_7bChatInt8API.Llama2_7bChatInt8 = new Llama2_7bChatInt8API.Llama2_7bChatInt8(
    this._client,
  );
  llama2_7bChatFp16: Llama2_7bChatFp16API.Llama2_7bChatFp16 = new Llama2_7bChatFp16API.Llama2_7bChatFp16(
    this._client,
  );
  mistral7bInstructV0_1: Mistral7bInstructV0_1API.Mistral7bInstructV0_1 =
    new Mistral7bInstructV0_1API.Mistral7bInstructV0_1(this._client);
}

export namespace TextGeneration {
  export import Llama2_7bChatInt8 = Llama2_7bChatInt8API.Llama2_7bChatInt8;
  export import Llama2_7bChatInt8RunResponse = Llama2_7bChatInt8API.Llama2_7bChatInt8RunResponse;
  export import Llama2_7bChatInt8RunParams = Llama2_7bChatInt8API.Llama2_7bChatInt8RunParams;
  export import Llama2_7bChatFp16 = Llama2_7bChatFp16API.Llama2_7bChatFp16;
  export import Llama2_7bChatFp16RunResponse = Llama2_7bChatFp16API.Llama2_7bChatFp16RunResponse;
  export import Llama2_7bChatFp16RunParams = Llama2_7bChatFp16API.Llama2_7bChatFp16RunParams;
  export import Mistral7bInstructV0_1 = Mistral7bInstructV0_1API.Mistral7bInstructV0_1;
  export import Mistral7bInstructV0_1RunResponse = Mistral7bInstructV0_1API.Mistral7bInstructV0_1RunResponse;
  export import Mistral7bInstructV0_1RunParams = Mistral7bInstructV0_1API.Mistral7bInstructV0_1RunParams;
}
