// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as AudiosAPI from 'cloudflare/resources/accounts/streams/audios';

export class Audios extends APIResource {
  /**
   * Edits additional audio tracks on a video. Editing the default status of an audio
   * track to `true` will mark all other audio tracks on the video default status to
   * `false`.
   */
  update(
    accountIdentifier: string,
    identifier: string,
    audioIdentifier: string,
    body: AudioUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AudioUpdateResponse> {
    return this._client.patch(
      `/accounts/${accountIdentifier}/stream/${identifier}/audio/${audioIdentifier}`,
      { body, ...options },
    );
  }

  /**
   * Deletes additional audio tracks on a video. Deleting a default audio track is
   * not allowed. You must assign another audio track as default prior to deletion.
   */
  delete(
    accountIdentifier: string,
    identifier: string,
    audioIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AudioDeleteResponse> {
    return this._client.delete(
      `/accounts/${accountIdentifier}/stream/${identifier}/audio/${audioIdentifier}`,
      options,
    );
  }

  /**
   * Adds an additional audio track to a video using the provided audio track URL.
   */
  copy(
    accountIdentifier: string,
    identifier: string,
    body: AudioCopyParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AudioCopyResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/stream/${identifier}/audio/copy`, {
      body,
      ...options,
    });
  }
}

export interface AudioUpdateResponse {
  errors?: Array<AudioUpdateResponse.Error>;

  messages?: Array<AudioUpdateResponse.Message>;

  result?: AudioUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace AudioUpdateResponse {
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
     * Denotes whether the audio track will be played by default in a player.
     */
    default?: boolean;

    /**
     * A string to uniquely identify the track amongst other audio track labels for the
     * specified video.
     */
    label?: string;

    /**
     * Specifies the processing status of the video.
     */
    status?: 'queued' | 'ready' | 'error';

    /**
     * A Cloudflare-generated unique identifier for a media item.
     */
    uid?: string;
  }
}

export interface AudioDeleteResponse {
  errors?: Array<AudioDeleteResponse.Error>;

  messages?: Array<AudioDeleteResponse.Message>;

  result?: string;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace AudioDeleteResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface AudioCopyResponse {
  errors?: Array<AudioCopyResponse.Error>;

  messages?: Array<AudioCopyResponse.Message>;

  result?: AudioCopyResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace AudioCopyResponse {
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
     * Denotes whether the audio track will be played by default in a player.
     */
    default?: boolean;

    /**
     * A string to uniquely identify the track amongst other audio track labels for the
     * specified video.
     */
    label?: string;

    /**
     * Specifies the processing status of the video.
     */
    status?: 'queued' | 'ready' | 'error';

    /**
     * A Cloudflare-generated unique identifier for a media item.
     */
    uid?: string;
  }
}

export interface AudioUpdateParams {
  /**
   * Denotes whether the audio track will be played by default in a player.
   */
  default?: boolean;

  /**
   * A string to uniquely identify the track amongst other audio track labels for the
   * specified video.
   */
  label?: string;
}

export interface AudioCopyParams {
  /**
   * A string to uniquely identify the track amongst other audio track labels for the
   * specified video.
   */
  label: string;

  /**
   * An audio track URL. The server must be publicly routable and support `HTTP HEAD`
   * requests and `HTTP GET` range requests. The server should respond to `HTTP HEAD`
   * requests with a `content-range` header that includes the size of the file.
   */
  url?: string;
}

export namespace Audios {
  export import AudioUpdateResponse = AudiosAPI.AudioUpdateResponse;
  export import AudioDeleteResponse = AudiosAPI.AudioDeleteResponse;
  export import AudioCopyResponse = AudiosAPI.AudioCopyResponse;
  export import AudioUpdateParams = AudiosAPI.AudioUpdateParams;
  export import AudioCopyParams = AudiosAPI.AudioCopyParams;
}
