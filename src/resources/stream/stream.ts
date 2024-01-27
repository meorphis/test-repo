// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as AudioTracksAPI from 'cloudflare/resources/stream/audio-tracks';

export class Stream extends APIResource {
  audioTracks: AudioTracksAPI.AudioTracks = new AudioTracksAPI.AudioTracks(this._client);
}

export namespace Stream {
  export import AudioTracks = AudioTracksAPI.AudioTracks;
  export import AudioTrackListResponse = AudioTracksAPI.AudioTrackListResponse;
}
