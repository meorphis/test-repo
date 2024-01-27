// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as StreamsAPI from 'cloudflare/resources/accounts/streams/streams';
import * as AudiosAPI from 'cloudflare/resources/accounts/streams/audios';
import * as CaptionsAPI from 'cloudflare/resources/accounts/streams/captions';
import * as ClipsAPI from 'cloudflare/resources/accounts/streams/clips';
import * as CopiesAPI from 'cloudflare/resources/accounts/streams/copies';
import * as DirectUploadsAPI from 'cloudflare/resources/accounts/streams/direct-uploads';
import * as DownloadsAPI from 'cloudflare/resources/accounts/streams/downloads';
import * as EmbedsAPI from 'cloudflare/resources/accounts/streams/embeds';
import * as KeysAPI from 'cloudflare/resources/accounts/streams/keys';
import * as StorageUsagesAPI from 'cloudflare/resources/accounts/streams/storage-usages';
import * as TokensAPI from 'cloudflare/resources/accounts/streams/tokens';
import * as WatermarksAPI from 'cloudflare/resources/accounts/streams/watermarks';
import * as WebhooksAPI from 'cloudflare/resources/accounts/streams/webhooks';
import * as LiveInputsAPI from 'cloudflare/resources/accounts/streams/live-inputs/live-inputs';

export class Streams extends APIResource {
  clips: ClipsAPI.Clips = new ClipsAPI.Clips(this._client);
  copies: CopiesAPI.Copies = new CopiesAPI.Copies(this._client);
  directUploads: DirectUploadsAPI.DirectUploads = new DirectUploadsAPI.DirectUploads(this._client);
  keys: KeysAPI.Keys = new KeysAPI.Keys(this._client);
  liveInputs: LiveInputsAPI.LiveInputs = new LiveInputsAPI.LiveInputs(this._client);
  watermarks: WatermarksAPI.Watermarks = new WatermarksAPI.Watermarks(this._client);
  webhooks: WebhooksAPI.Webhooks = new WebhooksAPI.Webhooks(this._client);
  captions: CaptionsAPI.Captions = new CaptionsAPI.Captions(this._client);
  downloads: DownloadsAPI.Downloads = new DownloadsAPI.Downloads(this._client);
  embeds: EmbedsAPI.Embeds = new EmbedsAPI.Embeds(this._client);
  tokens: TokensAPI.Tokens = new TokensAPI.Tokens(this._client);
  audios: AudiosAPI.Audios = new AudiosAPI.Audios(this._client);
  storageUsages: StorageUsagesAPI.StorageUsages = new StorageUsagesAPI.StorageUsages(this._client);

  /**
   * Fetches details for a single video.
   */
  retrieve(
    accountIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StreamRetrieveResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/stream/${identifier}`, options);
  }

  /**
   * Edit details for a single video.
   */
  update(
    accountIdentifier: string,
    identifier: string,
    body: StreamUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StreamUpdateResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/stream/${identifier}`, { body, ...options });
  }

  /**
   * Deletes a video and its copies from Cloudflare Stream.
   */
  delete(
    accountIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.delete(`/accounts/${accountIdentifier}/stream/${identifier}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Initiates a video upload using the TUS protocol. On success, the server responds
   * with a status code 201 (created) and includes a `location` header to indicate
   * where the content should be uploaded. Refer to https://tus.io for protocol
   * details.
   */
  streamVideosInitiateVideoUploadsUsingTus(
    accountIdentifier: string,
    params: StreamStreamVideosInitiateVideoUploadsUsingTusParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    const {
      'Tus-Resumable': tusResumable,
      'Upload-Length': uploadLength,
      'Upload-Creator': uploadCreator,
      'Upload-Metadata': uploadMetadata,
    } = params;
    return this._client.post(`/accounts/${accountIdentifier}/stream`, {
      ...options,
      headers: {
        Accept: '*/*',
        'Tus-Resumable': tusResumable.toString(),
        'Upload-Length': uploadLength.toString(),
        'Upload-Creator': uploadCreator || '',
        'Upload-Metadata': uploadMetadata || '',
        ...options?.headers,
      },
    });
  }

  /**
   * Lists up to 1000 videos from a single request. For a specific range, refer to
   * the optional parameters.
   */
  streamVideosListVideos(
    accountIdentifier: string,
    query?: StreamStreamVideosListVideosParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StreamStreamVideosListVideosResponse>;
  streamVideosListVideos(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StreamStreamVideosListVideosResponse>;
  streamVideosListVideos(
    accountIdentifier: string,
    query: StreamStreamVideosListVideosParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<StreamStreamVideosListVideosResponse> {
    if (isRequestOptions(query)) {
      return this.streamVideosListVideos(accountIdentifier, {}, query);
    }
    return this._client.get(`/accounts/${accountIdentifier}/stream`, { query, ...options });
  }
}

export interface StreamRetrieveResponse {
  errors?: Array<StreamRetrieveResponse.Error>;

  messages?: Array<StreamRetrieveResponse.Message>;

  result?: StreamRetrieveResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace StreamRetrieveResponse {
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
     * Lists the origins allowed to display the video. Enter allowed origin domains in
     * an array and use `*` for wildcard subdomains. Empty arrays allow the video to be
     * viewed on any origin.
     */
    allowedOrigins?: Array<string>;

    /**
     * The date and time the media item was created.
     */
    created?: string;

    /**
     * A user-defined identifier for the media creator.
     */
    creator?: string;

    /**
     * The duration of the video in seconds. A value of `-1` means the duration is
     * unknown. The duration becomes available after the upload and before the video is
     * ready.
     */
    duration?: number;

    input?: Result.Input;

    /**
     * The live input ID used to upload a video with Stream Live.
     */
    liveInput?: string;

    /**
     * The maximum duration in seconds for a video upload. Can be set for a video that
     * is not yet uploaded to limit its duration. Uploads that exceed the specified
     * duration will fail during processing. A value of `-1` means the value is
     * unknown.
     */
    maxDurationSeconds?: number;

    /**
     * A user modifiable key-value store used to reference other systems of record for
     * managing videos.
     */
    meta?: unknown;

    /**
     * The date and time the media item was last modified.
     */
    modified?: string;

    playback?: Result.Playback;

    /**
     * The video's preview page URI. This field is omitted until encoding is complete.
     */
    preview?: string;

    /**
     * Indicates whether the video is playable. The field is empty if the video is not
     * ready for viewing or the live stream is still in progress.
     */
    readyToStream?: boolean;

    /**
     * Indicates the time at which the video became playable. The field is empty if the
     * video is not ready for viewing or the live stream is still in progress.
     */
    readyToStreamAt?: string;

    /**
     * Indicates whether the video can be a accessed using the UID. When set to `true`,
     * a signed token must be generated with a signing key to view the video.
     */
    requireSignedURLs?: boolean;

    /**
     * Indicates the date and time at which the video will be deleted. Omit the field
     * to indicate no change, or include with a `null` value to remove an existing
     * scheduled deletion. If specified, must be at least 30 days from upload time.
     */
    scheduledDeletion?: string;

    /**
     * The size of the media item in bytes.
     */
    size?: number;

    /**
     * Specifies a detailed status for a video. If the `state` is `inprogress` or
     * `error`, the `step` field returns `encoding` or `manifest`. If the `state` is
     * `inprogress`, `pctComplete` returns a number between 0 and 100 to indicate the
     * approximate percent of completion. If the `state` is `error`, `errorReasonCode`
     * and `errorReasonText` provide additional details.
     */
    status?: Result.Status;

    /**
     * The media item's thumbnail URI. This field is omitted until encoding is
     * complete.
     */
    thumbnail?: string;

    /**
     * The timestamp for a thumbnail image calculated as a percentage value of the
     * video's duration. To convert from a second-wise timestamp to a percentage,
     * divide the desired timestamp by the total duration of the video. If this value
     * is not set, the default thumbnail image is taken from 0s of the video.
     */
    thumbnailTimestampPct?: number;

    /**
     * A Cloudflare-generated unique identifier for a media item.
     */
    uid?: string;

    /**
     * The date and time the media item was uploaded.
     */
    uploaded?: string;

    /**
     * The date and time when the video upload URL is no longer valid for direct user
     * uploads.
     */
    uploadExpiry?: string;

    watermark?: Result.Watermark;
  }

  export namespace Result {
    export interface Input {
      /**
       * The video height in pixels. A value of `-1` means the height is unknown. The
       * value becomes available after the upload and before the video is ready.
       */
      height?: number;

      /**
       * The video width in pixels. A value of `-1` means the width is unknown. The value
       * becomes available after the upload and before the video is ready.
       */
      width?: number;
    }

    export interface Playback {
      /**
       * DASH Media Presentation Description for the video.
       */
      dash?: string;

      /**
       * The HLS manifest for the video.
       */
      hls?: string;
    }

    /**
     * Specifies a detailed status for a video. If the `state` is `inprogress` or
     * `error`, the `step` field returns `encoding` or `manifest`. If the `state` is
     * `inprogress`, `pctComplete` returns a number between 0 and 100 to indicate the
     * approximate percent of completion. If the `state` is `error`, `errorReasonCode`
     * and `errorReasonText` provide additional details.
     */
    export interface Status {
      /**
       * Specifies why the video failed to encode. This field is empty if the video is
       * not in an `error` state. Preferred for programmatic use.
       */
      errorReasonCode?: string;

      /**
       * Specifies why the video failed to encode using a human readable error message in
       * English. This field is empty if the video is not in an `error` state.
       */
      errorReasonText?: string;

      /**
       * Indicates the size of the entire upload in bytes. The value must be a
       * non-negative integer.
       */
      pctComplete?: string;

      /**
       * Specifies the processing status for all quality levels for a video.
       */
      state?: 'pendingupload' | 'downloading' | 'queued' | 'inprogress' | 'ready' | 'error';
    }

    export interface Watermark {
      /**
       * The date and a time a watermark profile was created.
       */
      created?: string;

      /**
       * The source URL for a downloaded image. If the watermark profile was created via
       * direct upload, this field is null.
       */
      downloadedFrom?: string;

      /**
       * The height of the image in pixels.
       */
      height?: number;

      /**
       * A short description of the watermark profile.
       */
      name?: string;

      /**
       * The translucency of the image. A value of `0.0` makes the image completely
       * transparent, and `1.0` makes the image completely opaque. Note that if the image
       * is already semi-transparent, setting this to `1.0` will not make the image
       * completely opaque.
       */
      opacity?: number;

      /**
       * The whitespace between the adjacent edges (determined by position) of the video
       * and the image. `0.0` indicates no padding, and `1.0` indicates a fully padded
       * video width or length, as determined by the algorithm.
       */
      padding?: number;

      /**
       * The location of the image. Valid positions are: `upperRight`, `upperLeft`,
       * `lowerLeft`, `lowerRight`, and `center`. Note that `center` ignores the
       * `padding` parameter.
       */
      position?: string;

      /**
       * The size of the image relative to the overall size of the video. This parameter
       * will adapt to horizontal and vertical videos automatically. `0.0` indicates no
       * scaling (use the size of the image as-is), and `1.0 `fills the entire video.
       */
      scale?: number;

      /**
       * The size of the image in bytes.
       */
      size?: number;

      /**
       * The unique identifier for a watermark profile.
       */
      uid?: string;

      /**
       * The width of the image in pixels.
       */
      width?: number;
    }
  }
}

export interface StreamUpdateResponse {
  errors?: Array<StreamUpdateResponse.Error>;

  messages?: Array<StreamUpdateResponse.Message>;

  result?: StreamUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace StreamUpdateResponse {
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
     * Lists the origins allowed to display the video. Enter allowed origin domains in
     * an array and use `*` for wildcard subdomains. Empty arrays allow the video to be
     * viewed on any origin.
     */
    allowedOrigins?: Array<string>;

    /**
     * The date and time the media item was created.
     */
    created?: string;

    /**
     * A user-defined identifier for the media creator.
     */
    creator?: string;

    /**
     * The duration of the video in seconds. A value of `-1` means the duration is
     * unknown. The duration becomes available after the upload and before the video is
     * ready.
     */
    duration?: number;

    input?: Result.Input;

    /**
     * The live input ID used to upload a video with Stream Live.
     */
    liveInput?: string;

    /**
     * The maximum duration in seconds for a video upload. Can be set for a video that
     * is not yet uploaded to limit its duration. Uploads that exceed the specified
     * duration will fail during processing. A value of `-1` means the value is
     * unknown.
     */
    maxDurationSeconds?: number;

    /**
     * A user modifiable key-value store used to reference other systems of record for
     * managing videos.
     */
    meta?: unknown;

    /**
     * The date and time the media item was last modified.
     */
    modified?: string;

    playback?: Result.Playback;

    /**
     * The video's preview page URI. This field is omitted until encoding is complete.
     */
    preview?: string;

    /**
     * Indicates whether the video is playable. The field is empty if the video is not
     * ready for viewing or the live stream is still in progress.
     */
    readyToStream?: boolean;

    /**
     * Indicates the time at which the video became playable. The field is empty if the
     * video is not ready for viewing or the live stream is still in progress.
     */
    readyToStreamAt?: string;

    /**
     * Indicates whether the video can be a accessed using the UID. When set to `true`,
     * a signed token must be generated with a signing key to view the video.
     */
    requireSignedURLs?: boolean;

    /**
     * Indicates the date and time at which the video will be deleted. Omit the field
     * to indicate no change, or include with a `null` value to remove an existing
     * scheduled deletion. If specified, must be at least 30 days from upload time.
     */
    scheduledDeletion?: string;

    /**
     * The size of the media item in bytes.
     */
    size?: number;

    /**
     * Specifies a detailed status for a video. If the `state` is `inprogress` or
     * `error`, the `step` field returns `encoding` or `manifest`. If the `state` is
     * `inprogress`, `pctComplete` returns a number between 0 and 100 to indicate the
     * approximate percent of completion. If the `state` is `error`, `errorReasonCode`
     * and `errorReasonText` provide additional details.
     */
    status?: Result.Status;

    /**
     * The media item's thumbnail URI. This field is omitted until encoding is
     * complete.
     */
    thumbnail?: string;

    /**
     * The timestamp for a thumbnail image calculated as a percentage value of the
     * video's duration. To convert from a second-wise timestamp to a percentage,
     * divide the desired timestamp by the total duration of the video. If this value
     * is not set, the default thumbnail image is taken from 0s of the video.
     */
    thumbnailTimestampPct?: number;

    /**
     * A Cloudflare-generated unique identifier for a media item.
     */
    uid?: string;

    /**
     * The date and time the media item was uploaded.
     */
    uploaded?: string;

    /**
     * The date and time when the video upload URL is no longer valid for direct user
     * uploads.
     */
    uploadExpiry?: string;

    watermark?: Result.Watermark;
  }

  export namespace Result {
    export interface Input {
      /**
       * The video height in pixels. A value of `-1` means the height is unknown. The
       * value becomes available after the upload and before the video is ready.
       */
      height?: number;

      /**
       * The video width in pixels. A value of `-1` means the width is unknown. The value
       * becomes available after the upload and before the video is ready.
       */
      width?: number;
    }

    export interface Playback {
      /**
       * DASH Media Presentation Description for the video.
       */
      dash?: string;

      /**
       * The HLS manifest for the video.
       */
      hls?: string;
    }

    /**
     * Specifies a detailed status for a video. If the `state` is `inprogress` or
     * `error`, the `step` field returns `encoding` or `manifest`. If the `state` is
     * `inprogress`, `pctComplete` returns a number between 0 and 100 to indicate the
     * approximate percent of completion. If the `state` is `error`, `errorReasonCode`
     * and `errorReasonText` provide additional details.
     */
    export interface Status {
      /**
       * Specifies why the video failed to encode. This field is empty if the video is
       * not in an `error` state. Preferred for programmatic use.
       */
      errorReasonCode?: string;

      /**
       * Specifies why the video failed to encode using a human readable error message in
       * English. This field is empty if the video is not in an `error` state.
       */
      errorReasonText?: string;

      /**
       * Indicates the size of the entire upload in bytes. The value must be a
       * non-negative integer.
       */
      pctComplete?: string;

      /**
       * Specifies the processing status for all quality levels for a video.
       */
      state?: 'pendingupload' | 'downloading' | 'queued' | 'inprogress' | 'ready' | 'error';
    }

    export interface Watermark {
      /**
       * The date and a time a watermark profile was created.
       */
      created?: string;

      /**
       * The source URL for a downloaded image. If the watermark profile was created via
       * direct upload, this field is null.
       */
      downloadedFrom?: string;

      /**
       * The height of the image in pixels.
       */
      height?: number;

      /**
       * A short description of the watermark profile.
       */
      name?: string;

      /**
       * The translucency of the image. A value of `0.0` makes the image completely
       * transparent, and `1.0` makes the image completely opaque. Note that if the image
       * is already semi-transparent, setting this to `1.0` will not make the image
       * completely opaque.
       */
      opacity?: number;

      /**
       * The whitespace between the adjacent edges (determined by position) of the video
       * and the image. `0.0` indicates no padding, and `1.0` indicates a fully padded
       * video width or length, as determined by the algorithm.
       */
      padding?: number;

      /**
       * The location of the image. Valid positions are: `upperRight`, `upperLeft`,
       * `lowerLeft`, `lowerRight`, and `center`. Note that `center` ignores the
       * `padding` parameter.
       */
      position?: string;

      /**
       * The size of the image relative to the overall size of the video. This parameter
       * will adapt to horizontal and vertical videos automatically. `0.0` indicates no
       * scaling (use the size of the image as-is), and `1.0 `fills the entire video.
       */
      scale?: number;

      /**
       * The size of the image in bytes.
       */
      size?: number;

      /**
       * The unique identifier for a watermark profile.
       */
      uid?: string;

      /**
       * The width of the image in pixels.
       */
      width?: number;
    }
  }
}

export interface StreamStreamVideosListVideosResponse {
  errors?: Array<StreamStreamVideosListVideosResponse.Error>;

  messages?: Array<StreamStreamVideosListVideosResponse.Message>;

  /**
   * The total number of remaining videos based on cursor position.
   */
  range?: number;

  result?: Array<StreamStreamVideosListVideosResponse.Result>;

  /**
   * Whether the API call was successful
   */
  success?: true;

  /**
   * The total number of videos that match the provided filters.
   */
  total?: number;
}

export namespace StreamStreamVideosListVideosResponse {
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
     * Lists the origins allowed to display the video. Enter allowed origin domains in
     * an array and use `*` for wildcard subdomains. Empty arrays allow the video to be
     * viewed on any origin.
     */
    allowedOrigins?: Array<string>;

    /**
     * The date and time the media item was created.
     */
    created?: string;

    /**
     * A user-defined identifier for the media creator.
     */
    creator?: string;

    /**
     * The duration of the video in seconds. A value of `-1` means the duration is
     * unknown. The duration becomes available after the upload and before the video is
     * ready.
     */
    duration?: number;

    input?: Result.Input;

    /**
     * The live input ID used to upload a video with Stream Live.
     */
    liveInput?: string;

    /**
     * The maximum duration in seconds for a video upload. Can be set for a video that
     * is not yet uploaded to limit its duration. Uploads that exceed the specified
     * duration will fail during processing. A value of `-1` means the value is
     * unknown.
     */
    maxDurationSeconds?: number;

    /**
     * A user modifiable key-value store used to reference other systems of record for
     * managing videos.
     */
    meta?: unknown;

    /**
     * The date and time the media item was last modified.
     */
    modified?: string;

    playback?: Result.Playback;

    /**
     * The video's preview page URI. This field is omitted until encoding is complete.
     */
    preview?: string;

    /**
     * Indicates whether the video is playable. The field is empty if the video is not
     * ready for viewing or the live stream is still in progress.
     */
    readyToStream?: boolean;

    /**
     * Indicates the time at which the video became playable. The field is empty if the
     * video is not ready for viewing or the live stream is still in progress.
     */
    readyToStreamAt?: string;

    /**
     * Indicates whether the video can be a accessed using the UID. When set to `true`,
     * a signed token must be generated with a signing key to view the video.
     */
    requireSignedURLs?: boolean;

    /**
     * Indicates the date and time at which the video will be deleted. Omit the field
     * to indicate no change, or include with a `null` value to remove an existing
     * scheduled deletion. If specified, must be at least 30 days from upload time.
     */
    scheduledDeletion?: string;

    /**
     * The size of the media item in bytes.
     */
    size?: number;

    /**
     * Specifies a detailed status for a video. If the `state` is `inprogress` or
     * `error`, the `step` field returns `encoding` or `manifest`. If the `state` is
     * `inprogress`, `pctComplete` returns a number between 0 and 100 to indicate the
     * approximate percent of completion. If the `state` is `error`, `errorReasonCode`
     * and `errorReasonText` provide additional details.
     */
    status?: Result.Status;

    /**
     * The media item's thumbnail URI. This field is omitted until encoding is
     * complete.
     */
    thumbnail?: string;

    /**
     * The timestamp for a thumbnail image calculated as a percentage value of the
     * video's duration. To convert from a second-wise timestamp to a percentage,
     * divide the desired timestamp by the total duration of the video. If this value
     * is not set, the default thumbnail image is taken from 0s of the video.
     */
    thumbnailTimestampPct?: number;

    /**
     * A Cloudflare-generated unique identifier for a media item.
     */
    uid?: string;

    /**
     * The date and time the media item was uploaded.
     */
    uploaded?: string;

    /**
     * The date and time when the video upload URL is no longer valid for direct user
     * uploads.
     */
    uploadExpiry?: string;

    watermark?: Result.Watermark;
  }

  export namespace Result {
    export interface Input {
      /**
       * The video height in pixels. A value of `-1` means the height is unknown. The
       * value becomes available after the upload and before the video is ready.
       */
      height?: number;

      /**
       * The video width in pixels. A value of `-1` means the width is unknown. The value
       * becomes available after the upload and before the video is ready.
       */
      width?: number;
    }

    export interface Playback {
      /**
       * DASH Media Presentation Description for the video.
       */
      dash?: string;

      /**
       * The HLS manifest for the video.
       */
      hls?: string;
    }

    /**
     * Specifies a detailed status for a video. If the `state` is `inprogress` or
     * `error`, the `step` field returns `encoding` or `manifest`. If the `state` is
     * `inprogress`, `pctComplete` returns a number between 0 and 100 to indicate the
     * approximate percent of completion. If the `state` is `error`, `errorReasonCode`
     * and `errorReasonText` provide additional details.
     */
    export interface Status {
      /**
       * Specifies why the video failed to encode. This field is empty if the video is
       * not in an `error` state. Preferred for programmatic use.
       */
      errorReasonCode?: string;

      /**
       * Specifies why the video failed to encode using a human readable error message in
       * English. This field is empty if the video is not in an `error` state.
       */
      errorReasonText?: string;

      /**
       * Indicates the size of the entire upload in bytes. The value must be a
       * non-negative integer.
       */
      pctComplete?: string;

      /**
       * Specifies the processing status for all quality levels for a video.
       */
      state?: 'pendingupload' | 'downloading' | 'queued' | 'inprogress' | 'ready' | 'error';
    }

    export interface Watermark {
      /**
       * The date and a time a watermark profile was created.
       */
      created?: string;

      /**
       * The source URL for a downloaded image. If the watermark profile was created via
       * direct upload, this field is null.
       */
      downloadedFrom?: string;

      /**
       * The height of the image in pixels.
       */
      height?: number;

      /**
       * A short description of the watermark profile.
       */
      name?: string;

      /**
       * The translucency of the image. A value of `0.0` makes the image completely
       * transparent, and `1.0` makes the image completely opaque. Note that if the image
       * is already semi-transparent, setting this to `1.0` will not make the image
       * completely opaque.
       */
      opacity?: number;

      /**
       * The whitespace between the adjacent edges (determined by position) of the video
       * and the image. `0.0` indicates no padding, and `1.0` indicates a fully padded
       * video width or length, as determined by the algorithm.
       */
      padding?: number;

      /**
       * The location of the image. Valid positions are: `upperRight`, `upperLeft`,
       * `lowerLeft`, `lowerRight`, and `center`. Note that `center` ignores the
       * `padding` parameter.
       */
      position?: string;

      /**
       * The size of the image relative to the overall size of the video. This parameter
       * will adapt to horizontal and vertical videos automatically. `0.0` indicates no
       * scaling (use the size of the image as-is), and `1.0 `fills the entire video.
       */
      scale?: number;

      /**
       * The size of the image in bytes.
       */
      size?: number;

      /**
       * The unique identifier for a watermark profile.
       */
      uid?: string;

      /**
       * The width of the image in pixels.
       */
      width?: number;
    }
  }
}

export interface StreamUpdateParams {
  /**
   * Lists the origins allowed to display the video. Enter allowed origin domains in
   * an array and use `*` for wildcard subdomains. Empty arrays allow the video to be
   * viewed on any origin.
   */
  allowedOrigins?: Array<string>;

  /**
   * A user-defined identifier for the media creator.
   */
  creator?: string;

  /**
   * The maximum duration in seconds for a video upload. Can be set for a video that
   * is not yet uploaded to limit its duration. Uploads that exceed the specified
   * duration will fail during processing. A value of `-1` means the value is
   * unknown.
   */
  maxDurationSeconds?: number;

  /**
   * A user modifiable key-value store used to reference other systems of record for
   * managing videos.
   */
  meta?: unknown;

  /**
   * Indicates whether the video can be a accessed using the UID. When set to `true`,
   * a signed token must be generated with a signing key to view the video.
   */
  requireSignedURLs?: boolean;

  /**
   * Indicates the date and time at which the video will be deleted. Omit the field
   * to indicate no change, or include with a `null` value to remove an existing
   * scheduled deletion. If specified, must be at least 30 days from upload time.
   */
  scheduledDeletion?: string;

  /**
   * The timestamp for a thumbnail image calculated as a percentage value of the
   * video's duration. To convert from a second-wise timestamp to a percentage,
   * divide the desired timestamp by the total duration of the video. If this value
   * is not set, the default thumbnail image is taken from 0s of the video.
   */
  thumbnailTimestampPct?: number;

  /**
   * The date and time when the video upload URL is no longer valid for direct user
   * uploads.
   */
  uploadExpiry?: string;
}

export interface StreamStreamVideosInitiateVideoUploadsUsingTusParams {
  /**
   * Specifies the TUS protocol version. This value must be included in every upload
   * request. Notes: The only supported version of TUS protocol is 1.0.0.
   */
  'Tus-Resumable': '1.0.0';

  /**
   * Indicates the size of the entire upload in bytes. The value must be a
   * non-negative integer.
   */
  'Upload-Length': number;

  /**
   * A user-defined identifier for the media creator.
   */
  'Upload-Creator'?: string;

  /**
   * Comma-separated key-value pairs following the TUS protocol specification. Values
   * are Base-64 encoded. Supported keys: `name`, `requiresignedurls`,
   * `allowedorigins`, `thumbnailtimestamppct`, `watermark`, `scheduleddeletion`.
   */
  'Upload-Metadata'?: string;
}

export interface StreamStreamVideosListVideosParams {
  /**
   * Lists videos in ascending order of creation.
   */
  asc?: boolean;

  /**
   * A user-defined identifier for the media creator.
   */
  creator?: string;

  /**
   * Lists videos created before the specified date.
   */
  end?: string;

  /**
   * Includes the total number of videos associated with the submitted query
   * parameters.
   */
  include_counts?: boolean;

  /**
   * Searches over the `name` key in the `meta` field. This field can be set with or
   * after the upload request.
   */
  search?: string;

  /**
   * Lists videos created after the specified date.
   */
  start?: string;

  /**
   * Specifies the processing status for all quality levels for a video.
   */
  status?: 'pendingupload' | 'downloading' | 'queued' | 'inprogress' | 'ready' | 'error';

  /**
   * Specifies whether the video is `vod` or `live`.
   */
  type?: string;
}

export namespace Streams {
  export import StreamRetrieveResponse = StreamsAPI.StreamRetrieveResponse;
  export import StreamUpdateResponse = StreamsAPI.StreamUpdateResponse;
  export import StreamStreamVideosListVideosResponse = StreamsAPI.StreamStreamVideosListVideosResponse;
  export import StreamUpdateParams = StreamsAPI.StreamUpdateParams;
  export import StreamStreamVideosInitiateVideoUploadsUsingTusParams = StreamsAPI.StreamStreamVideosInitiateVideoUploadsUsingTusParams;
  export import StreamStreamVideosListVideosParams = StreamsAPI.StreamStreamVideosListVideosParams;
  export import Clips = ClipsAPI.Clips;
  export import ClipStreamVideoClippingClipVideosGivenAStartAndEndTimeResponse = ClipsAPI.ClipStreamVideoClippingClipVideosGivenAStartAndEndTimeResponse;
  export import ClipStreamVideoClippingClipVideosGivenAStartAndEndTimeParams = ClipsAPI.ClipStreamVideoClippingClipVideosGivenAStartAndEndTimeParams;
  export import Copies = CopiesAPI.Copies;
  export import CopyStreamVideosUploadVideosFromAURLResponse = CopiesAPI.CopyStreamVideosUploadVideosFromAURLResponse;
  export import CopyStreamVideosUploadVideosFromAURLParams = CopiesAPI.CopyStreamVideosUploadVideosFromAURLParams;
  export import DirectUploads = DirectUploadsAPI.DirectUploads;
  export import DirectUploadStreamVideosUploadVideosViaDirectUploadURLsResponse = DirectUploadsAPI.DirectUploadStreamVideosUploadVideosViaDirectUploadURLsResponse;
  export import DirectUploadStreamVideosUploadVideosViaDirectUploadURLsParams = DirectUploadsAPI.DirectUploadStreamVideosUploadVideosViaDirectUploadURLsParams;
  export import Keys = KeysAPI.Keys;
  export import KeyDeleteResponse = KeysAPI.KeyDeleteResponse;
  export import KeyStreamSigningKeysCreateSigningKeysResponse = KeysAPI.KeyStreamSigningKeysCreateSigningKeysResponse;
  export import KeyStreamSigningKeysListSigningKeysResponse = KeysAPI.KeyStreamSigningKeysListSigningKeysResponse;
  export import LiveInputs = LiveInputsAPI.LiveInputs;
  export import LiveInputRetrieveResponse = LiveInputsAPI.LiveInputRetrieveResponse;
  export import LiveInputUpdateResponse = LiveInputsAPI.LiveInputUpdateResponse;
  export import LiveInputStreamLiveInputsCreateALiveInputResponse = LiveInputsAPI.LiveInputStreamLiveInputsCreateALiveInputResponse;
  export import LiveInputStreamLiveInputsListLiveInputsResponse = LiveInputsAPI.LiveInputStreamLiveInputsListLiveInputsResponse;
  export import LiveInputUpdateParams = LiveInputsAPI.LiveInputUpdateParams;
  export import LiveInputStreamLiveInputsCreateALiveInputParams = LiveInputsAPI.LiveInputStreamLiveInputsCreateALiveInputParams;
  export import LiveInputStreamLiveInputsListLiveInputsParams = LiveInputsAPI.LiveInputStreamLiveInputsListLiveInputsParams;
  export import Watermarks = WatermarksAPI.Watermarks;
  export import WatermarkRetrieveResponse = WatermarksAPI.WatermarkRetrieveResponse;
  export import WatermarkDeleteResponse = WatermarksAPI.WatermarkDeleteResponse;
  export import WatermarkStreamWatermarkProfileCreateWatermarkProfilesViaBasicUploadResponse = WatermarksAPI.WatermarkStreamWatermarkProfileCreateWatermarkProfilesViaBasicUploadResponse;
  export import WatermarkStreamWatermarkProfileListWatermarkProfilesResponse = WatermarksAPI.WatermarkStreamWatermarkProfileListWatermarkProfilesResponse;
  export import WatermarkStreamWatermarkProfileCreateWatermarkProfilesViaBasicUploadParams = WatermarksAPI.WatermarkStreamWatermarkProfileCreateWatermarkProfilesViaBasicUploadParams;
  export import Webhooks = WebhooksAPI.Webhooks;
  export import WebhookDeleteResponse = WebhooksAPI.WebhookDeleteResponse;
  export import WebhookStreamWebhookCreateWebhooksResponse = WebhooksAPI.WebhookStreamWebhookCreateWebhooksResponse;
  export import WebhookStreamWebhookViewWebhooksResponse = WebhooksAPI.WebhookStreamWebhookViewWebhooksResponse;
  export import WebhookStreamWebhookCreateWebhooksParams = WebhooksAPI.WebhookStreamWebhookCreateWebhooksParams;
  export import Captions = CaptionsAPI.Captions;
  export import CaptionUpdateResponse = CaptionsAPI.CaptionUpdateResponse;
  export import CaptionDeleteResponse = CaptionsAPI.CaptionDeleteResponse;
  export import CaptionStreamSubtitlesCaptionsListCaptionsOrSubtitlesResponse = CaptionsAPI.CaptionStreamSubtitlesCaptionsListCaptionsOrSubtitlesResponse;
  export import CaptionUpdateParams = CaptionsAPI.CaptionUpdateParams;
  export import Downloads = DownloadsAPI.Downloads;
  export import DownloadDeleteResponse = DownloadsAPI.DownloadDeleteResponse;
  export import DownloadStreamMP4DownloadsCreateDownloadsResponse = DownloadsAPI.DownloadStreamMP4DownloadsCreateDownloadsResponse;
  export import DownloadStreamMP4DownloadsListDownloadsResponse = DownloadsAPI.DownloadStreamMP4DownloadsListDownloadsResponse;
  export import Embeds = EmbedsAPI.Embeds;
  export import EmbedListResponse = EmbedsAPI.EmbedListResponse;
  export import Tokens = TokensAPI.Tokens;
  export import TokenStreamVideosCreateSignedURLTokensForVideosResponse = TokensAPI.TokenStreamVideosCreateSignedURLTokensForVideosResponse;
  export import TokenStreamVideosCreateSignedURLTokensForVideosParams = TokensAPI.TokenStreamVideosCreateSignedURLTokensForVideosParams;
  export import Audios = AudiosAPI.Audios;
  export import AudioUpdateResponse = AudiosAPI.AudioUpdateResponse;
  export import AudioDeleteResponse = AudiosAPI.AudioDeleteResponse;
  export import AudioCopyResponse = AudiosAPI.AudioCopyResponse;
  export import AudioUpdateParams = AudiosAPI.AudioUpdateParams;
  export import AudioCopyParams = AudiosAPI.AudioCopyParams;
  export import StorageUsages = StorageUsagesAPI.StorageUsages;
  export import StorageUsageRetrieveResponse = StorageUsagesAPI.StorageUsageRetrieveResponse;
  export import StorageUsageRetrieveParams = StorageUsagesAPI.StorageUsageRetrieveParams;
}
