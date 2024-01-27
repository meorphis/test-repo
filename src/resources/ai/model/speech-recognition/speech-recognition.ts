// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as WhisperAPI from 'cloudflare/resources/ai/model/speech-recognition/whisper';

export class SpeechRecognition extends APIResource {
  whisper: WhisperAPI.Whisper = new WhisperAPI.Whisper(this._client);
}

export namespace SpeechRecognition {
  export import Whisper = WhisperAPI.Whisper;
  export import WhisperRunResponse = WhisperAPI.WhisperRunResponse;
  export import WhisperRunParams = WhisperAPI.WhisperRunParams;
}
