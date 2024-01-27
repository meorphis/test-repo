// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as AudioTracksAPI from 'cloudflare/resources/stream/audio-tracks';

export class AudioTracks extends APIResource {
  /**
   * Lists additional audio tracks on a video. Note this API will not return
   * information for audio attached to the video upload.
   */
  list(
    accountIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AudioTrackListResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/stream/${identifier}/audio`, options);
  }
}

export interface AudioTrackListResponse {
  errors?: Array<AudioTrackListResponse.Error>;

  messages?: Array<AudioTrackListResponse.Message>;

  result?: Array<AudioTrackListResponse.Result>;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace AudioTrackListResponse {
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

export namespace AudioTracks {
  export import AudioTrackListResponse = AudioTracksAPI.AudioTrackListResponse;
}
