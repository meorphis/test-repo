// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as WhisperAPI from 'cloudflare/resources/ai/model/speech-recognition/whisper';

export class Whisper extends APIResource {
  /**
   * Execute @cf/openai/whisper model.
   */
  run(
    accountIdentifier: string,
    body?: WhisperRunParams | null | undefined,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WhisperRunResponse> {
    return this._client.post(`/apiv4/accounts/${accountIdentifier}/ai/run/@cf/openai/whisper`, options);
  }
}

export interface WhisperRunResponse {
  text?: string;
}

export interface WhisperRunParams {}

export namespace Whisper {
  export import WhisperRunResponse = WhisperAPI.WhisperRunResponse;
  export import WhisperRunParams = WhisperAPI.WhisperRunParams;
}
