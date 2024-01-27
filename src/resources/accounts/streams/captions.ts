// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as CaptionsAPI from 'cloudflare/resources/accounts/streams/captions';
import { multipartFormRequestOptions } from 'cloudflare/core';

export class Captions extends APIResource {
  /**
   * Uploads the caption or subtitle file to the endpoint for a specific BCP47
   * language. One caption or subtitle file per language is allowed.
   */
  update(
    accountIdentifier: string,
    identifier: string,
    language: string,
    body: CaptionUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CaptionUpdateResponse> {
    return this._client.put(
      `/accounts/${accountIdentifier}/stream/${identifier}/captions/${language}`,
      multipartFormRequestOptions({ body, ...options }),
    );
  }

  /**
   * Removes the captions or subtitles from a video.
   */
  delete(
    accountIdentifier: string,
    identifier: string,
    language: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CaptionDeleteResponse> {
    return this._client.delete(
      `/accounts/${accountIdentifier}/stream/${identifier}/captions/${language}`,
      options,
    );
  }

  /**
   * Lists the available captions or subtitles for a specific video.
   */
  streamSubtitlesCaptionsListCaptionsOrSubtitles(
    accountIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CaptionStreamSubtitlesCaptionsListCaptionsOrSubtitlesResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/stream/${identifier}/captions`, options);
  }
}

export interface CaptionUpdateResponse {
  errors?: Array<CaptionUpdateResponse.Error>;

  messages?: Array<CaptionUpdateResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace CaptionUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface CaptionDeleteResponse {
  errors?: Array<CaptionDeleteResponse.Error>;

  messages?: Array<CaptionDeleteResponse.Message>;

  result?: string;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace CaptionDeleteResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface CaptionStreamSubtitlesCaptionsListCaptionsOrSubtitlesResponse {
  errors?: Array<CaptionStreamSubtitlesCaptionsListCaptionsOrSubtitlesResponse.Error>;

  messages?: Array<CaptionStreamSubtitlesCaptionsListCaptionsOrSubtitlesResponse.Message>;

  result?: Array<CaptionStreamSubtitlesCaptionsListCaptionsOrSubtitlesResponse.Result>;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace CaptionStreamSubtitlesCaptionsListCaptionsOrSubtitlesResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    /**
     * The language label displayed in the native language to users.
     */
    label?: string;

    /**
     * The language tag in BCP 47 format.
     */
    language?: string;
  }
}

export interface CaptionUpdateParams {
  /**
   * The WebVTT file containing the caption or subtitle content.
   */
  file: string;
}

export namespace Captions {
  export import CaptionUpdateResponse = CaptionsAPI.CaptionUpdateResponse;
  export import CaptionDeleteResponse = CaptionsAPI.CaptionDeleteResponse;
  export import CaptionStreamSubtitlesCaptionsListCaptionsOrSubtitlesResponse = CaptionsAPI.CaptionStreamSubtitlesCaptionsListCaptionsOrSubtitlesResponse;
  export import CaptionUpdateParams = CaptionsAPI.CaptionUpdateParams;
}
