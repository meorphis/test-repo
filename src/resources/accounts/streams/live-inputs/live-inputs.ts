// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as LiveInputsAPI from 'cloudflare/resources/accounts/streams/live-inputs/live-inputs';
import * as OutputsAPI from 'cloudflare/resources/accounts/streams/live-inputs/outputs';

export class LiveInputs extends APIResource {
  outputs: OutputsAPI.Outputs = new OutputsAPI.Outputs(this._client);

  /**
   * Retrieves details of an existing live input.
   */
  retrieve(
    accountIdentifier: string,
    liveInputIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LiveInputRetrieveResponse> {
    return this._client.get(
      `/accounts/${accountIdentifier}/stream/live_inputs/${liveInputIdentifier}`,
      options,
    );
  }

  /**
   * Updates a specified live input.
   */
  update(
    accountIdentifier: string,
    liveInputIdentifier: string,
    body: LiveInputUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LiveInputUpdateResponse> {
    return this._client.put(`/accounts/${accountIdentifier}/stream/live_inputs/${liveInputIdentifier}`, {
      body,
      ...options,
    });
  }

  /**
   * Prevents a live input from being streamed to and makes the live input
   * inaccessible to any future API calls.
   */
  delete(
    accountIdentifier: string,
    liveInputIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.delete(`/accounts/${accountIdentifier}/stream/live_inputs/${liveInputIdentifier}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Creates a live input, and returns credentials that you or your users can use to
   * stream live video to Cloudflare Stream.
   */
  streamLiveInputsCreateALiveInput(
    accountIdentifier: string,
    body: LiveInputStreamLiveInputsCreateALiveInputParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LiveInputStreamLiveInputsCreateALiveInputResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/stream/live_inputs`, { body, ...options });
  }

  /**
   * Lists the live inputs created for an account. To get the credentials needed to
   * stream to a specific live input, request a single live input.
   */
  streamLiveInputsListLiveInputs(
    accountIdentifier: string,
    query?: LiveInputStreamLiveInputsListLiveInputsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LiveInputStreamLiveInputsListLiveInputsResponse>;
  streamLiveInputsListLiveInputs(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LiveInputStreamLiveInputsListLiveInputsResponse>;
  streamLiveInputsListLiveInputs(
    accountIdentifier: string,
    query: LiveInputStreamLiveInputsListLiveInputsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LiveInputStreamLiveInputsListLiveInputsResponse> {
    if (isRequestOptions(query)) {
      return this.streamLiveInputsListLiveInputs(accountIdentifier, {}, query);
    }
    return this._client.get(`/accounts/${accountIdentifier}/stream/live_inputs`, { query, ...options });
  }
}

export interface LiveInputRetrieveResponse {
  errors?: Array<LiveInputRetrieveResponse.Error>;

  messages?: Array<LiveInputRetrieveResponse.Message>;

  /**
   * Details about a live input.
   */
  result?: LiveInputRetrieveResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace LiveInputRetrieveResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Details about a live input.
   */
  export interface Result {
    /**
     * The date and time the live input was created.
     */
    created?: string;

    /**
     * Indicates the number of days after which the live inputs recordings will be
     * deleted. When a stream completes and the recording is ready, the value is used
     * to calculate a scheduled deletion date for that recording. Omit the field to
     * indicate no change, or include with a `null` value to remove an existing
     * scheduled deletion.
     */
    deleteRecordingAfterDays?: number;

    /**
     * A user modifiable key-value store used to reference other systems of record for
     * managing live inputs.
     */
    meta?: unknown;

    /**
     * The date and time the live input was last modified.
     */
    modified?: string;

    /**
     * Records the input to a Cloudflare Stream video. Behavior depends on the mode. In
     * most cases, the video will initially be viewable as a live video and transition
     * to on-demand after a condition is satisfied.
     */
    recording?: Result.Recording;

    /**
     * Details for streaming to an live input using RTMPS.
     */
    rtmps?: Result.Rtmps;

    /**
     * Details for playback from an live input using RTMPS.
     */
    rtmpsPlayback?: Result.RtmpsPlayback;

    /**
     * Details for streaming to a live input using SRT.
     */
    srt?: Result.Srt;

    /**
     * Details for playback from an live input using SRT.
     */
    srtPlayback?: Result.SrtPlayback;

    /**
     * The connection status of a live input.
     */
    status?:
      | 'connected'
      | 'reconnected'
      | 'reconnecting'
      | 'client_disconnect'
      | 'ttl_exceeded'
      | 'failed_to_connect'
      | 'failed_to_reconnect'
      | 'new_configuration_accepted'
      | null;

    /**
     * A unique identifier for a live input.
     */
    uid?: string;

    /**
     * Details for streaming to a live input using WebRTC.
     */
    webRTC?: Result.WebRtc;

    /**
     * Details for playback from a live input using WebRTC.
     */
    webRTCPlayback?: Result.WebRtcPlayback;
  }

  export namespace Result {
    /**
     * Records the input to a Cloudflare Stream video. Behavior depends on the mode. In
     * most cases, the video will initially be viewable as a live video and transition
     * to on-demand after a condition is satisfied.
     */
    export interface Recording {
      /**
       * Lists the origins allowed to display videos created with this input. Enter
       * allowed origin domains in an array and use `*` for wildcard subdomains. An empty
       * array allows videos to be viewed on any origin.
       */
      allowedOrigins?: Array<string>;

      /**
       * Specifies the recording behavior for the live input. Set this value to `off` to
       * prevent a recording. Set the value to `automatic` to begin a recording and
       * transition to on-demand after Stream Live stops receiving input.
       */
      mode?: 'off' | 'automatic';

      /**
       * Indicates if a video using the live input has the `requireSignedURLs` property
       * set. Also enforces access controls on any video recording of the livestream with
       * the live input.
       */
      requireSignedURLs?: boolean;

      /**
       * Determines the amount of time a live input configured in `automatic` mode should
       * wait before a recording transitions from live to on-demand. `0` is recommended
       * for most use cases and indicates the platform default should be used.
       */
      timeoutSeconds?: number;
    }

    /**
     * Details for streaming to an live input using RTMPS.
     */
    export interface Rtmps {
      /**
       * The secret key to use when streaming via RTMPS to a live input.
       */
      streamKey?: string;

      /**
       * The RTMPS URL you provide to the broadcaster, which they stream live video to.
       */
      url?: string;
    }

    /**
     * Details for playback from an live input using RTMPS.
     */
    export interface RtmpsPlayback {
      /**
       * The secret key to use for playback via RTMPS.
       */
      streamKey?: string;

      /**
       * The URL used to play live video over RTMPS.
       */
      url?: string;
    }

    /**
     * Details for streaming to a live input using SRT.
     */
    export interface Srt {
      /**
       * The secret key to use when streaming via SRT to a live input.
       */
      passphrase?: string;

      /**
       * The identifier of the live input to use when streaming via SRT.
       */
      streamId?: string;

      /**
       * The SRT URL you provide to the broadcaster, which they stream live video to.
       */
      url?: string;
    }

    /**
     * Details for playback from an live input using SRT.
     */
    export interface SrtPlayback {
      /**
       * The secret key to use for playback via SRT.
       */
      passphrase?: string;

      /**
       * The identifier of the live input to use for playback via SRT.
       */
      streamId?: string;

      /**
       * The URL used to play live video over SRT.
       */
      url?: string;
    }

    /**
     * Details for streaming to a live input using WebRTC.
     */
    export interface WebRtc {
      /**
       * The WebRTC URL you provide to the broadcaster, which they stream live video to.
       */
      url?: string;
    }

    /**
     * Details for playback from a live input using WebRTC.
     */
    export interface WebRtcPlayback {
      /**
       * The URL used to play live video over WebRTC.
       */
      url?: string;
    }
  }
}

export interface LiveInputUpdateResponse {
  errors?: Array<LiveInputUpdateResponse.Error>;

  messages?: Array<LiveInputUpdateResponse.Message>;

  /**
   * Details about a live input.
   */
  result?: LiveInputUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace LiveInputUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Details about a live input.
   */
  export interface Result {
    /**
     * The date and time the live input was created.
     */
    created?: string;

    /**
     * Indicates the number of days after which the live inputs recordings will be
     * deleted. When a stream completes and the recording is ready, the value is used
     * to calculate a scheduled deletion date for that recording. Omit the field to
     * indicate no change, or include with a `null` value to remove an existing
     * scheduled deletion.
     */
    deleteRecordingAfterDays?: number;

    /**
     * A user modifiable key-value store used to reference other systems of record for
     * managing live inputs.
     */
    meta?: unknown;

    /**
     * The date and time the live input was last modified.
     */
    modified?: string;

    /**
     * Records the input to a Cloudflare Stream video. Behavior depends on the mode. In
     * most cases, the video will initially be viewable as a live video and transition
     * to on-demand after a condition is satisfied.
     */
    recording?: Result.Recording;

    /**
     * Details for streaming to an live input using RTMPS.
     */
    rtmps?: Result.Rtmps;

    /**
     * Details for playback from an live input using RTMPS.
     */
    rtmpsPlayback?: Result.RtmpsPlayback;

    /**
     * Details for streaming to a live input using SRT.
     */
    srt?: Result.Srt;

    /**
     * Details for playback from an live input using SRT.
     */
    srtPlayback?: Result.SrtPlayback;

    /**
     * The connection status of a live input.
     */
    status?:
      | 'connected'
      | 'reconnected'
      | 'reconnecting'
      | 'client_disconnect'
      | 'ttl_exceeded'
      | 'failed_to_connect'
      | 'failed_to_reconnect'
      | 'new_configuration_accepted'
      | null;

    /**
     * A unique identifier for a live input.
     */
    uid?: string;

    /**
     * Details for streaming to a live input using WebRTC.
     */
    webRTC?: Result.WebRtc;

    /**
     * Details for playback from a live input using WebRTC.
     */
    webRTCPlayback?: Result.WebRtcPlayback;
  }

  export namespace Result {
    /**
     * Records the input to a Cloudflare Stream video. Behavior depends on the mode. In
     * most cases, the video will initially be viewable as a live video and transition
     * to on-demand after a condition is satisfied.
     */
    export interface Recording {
      /**
       * Lists the origins allowed to display videos created with this input. Enter
       * allowed origin domains in an array and use `*` for wildcard subdomains. An empty
       * array allows videos to be viewed on any origin.
       */
      allowedOrigins?: Array<string>;

      /**
       * Specifies the recording behavior for the live input. Set this value to `off` to
       * prevent a recording. Set the value to `automatic` to begin a recording and
       * transition to on-demand after Stream Live stops receiving input.
       */
      mode?: 'off' | 'automatic';

      /**
       * Indicates if a video using the live input has the `requireSignedURLs` property
       * set. Also enforces access controls on any video recording of the livestream with
       * the live input.
       */
      requireSignedURLs?: boolean;

      /**
       * Determines the amount of time a live input configured in `automatic` mode should
       * wait before a recording transitions from live to on-demand. `0` is recommended
       * for most use cases and indicates the platform default should be used.
       */
      timeoutSeconds?: number;
    }

    /**
     * Details for streaming to an live input using RTMPS.
     */
    export interface Rtmps {
      /**
       * The secret key to use when streaming via RTMPS to a live input.
       */
      streamKey?: string;

      /**
       * The RTMPS URL you provide to the broadcaster, which they stream live video to.
       */
      url?: string;
    }

    /**
     * Details for playback from an live input using RTMPS.
     */
    export interface RtmpsPlayback {
      /**
       * The secret key to use for playback via RTMPS.
       */
      streamKey?: string;

      /**
       * The URL used to play live video over RTMPS.
       */
      url?: string;
    }

    /**
     * Details for streaming to a live input using SRT.
     */
    export interface Srt {
      /**
       * The secret key to use when streaming via SRT to a live input.
       */
      passphrase?: string;

      /**
       * The identifier of the live input to use when streaming via SRT.
       */
      streamId?: string;

      /**
       * The SRT URL you provide to the broadcaster, which they stream live video to.
       */
      url?: string;
    }

    /**
     * Details for playback from an live input using SRT.
     */
    export interface SrtPlayback {
      /**
       * The secret key to use for playback via SRT.
       */
      passphrase?: string;

      /**
       * The identifier of the live input to use for playback via SRT.
       */
      streamId?: string;

      /**
       * The URL used to play live video over SRT.
       */
      url?: string;
    }

    /**
     * Details for streaming to a live input using WebRTC.
     */
    export interface WebRtc {
      /**
       * The WebRTC URL you provide to the broadcaster, which they stream live video to.
       */
      url?: string;
    }

    /**
     * Details for playback from a live input using WebRTC.
     */
    export interface WebRtcPlayback {
      /**
       * The URL used to play live video over WebRTC.
       */
      url?: string;
    }
  }
}

export interface LiveInputStreamLiveInputsCreateALiveInputResponse {
  errors?: Array<LiveInputStreamLiveInputsCreateALiveInputResponse.Error>;

  messages?: Array<LiveInputStreamLiveInputsCreateALiveInputResponse.Message>;

  /**
   * Details about a live input.
   */
  result?: LiveInputStreamLiveInputsCreateALiveInputResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace LiveInputStreamLiveInputsCreateALiveInputResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Details about a live input.
   */
  export interface Result {
    /**
     * The date and time the live input was created.
     */
    created?: string;

    /**
     * Indicates the number of days after which the live inputs recordings will be
     * deleted. When a stream completes and the recording is ready, the value is used
     * to calculate a scheduled deletion date for that recording. Omit the field to
     * indicate no change, or include with a `null` value to remove an existing
     * scheduled deletion.
     */
    deleteRecordingAfterDays?: number;

    /**
     * A user modifiable key-value store used to reference other systems of record for
     * managing live inputs.
     */
    meta?: unknown;

    /**
     * The date and time the live input was last modified.
     */
    modified?: string;

    /**
     * Records the input to a Cloudflare Stream video. Behavior depends on the mode. In
     * most cases, the video will initially be viewable as a live video and transition
     * to on-demand after a condition is satisfied.
     */
    recording?: Result.Recording;

    /**
     * Details for streaming to an live input using RTMPS.
     */
    rtmps?: Result.Rtmps;

    /**
     * Details for playback from an live input using RTMPS.
     */
    rtmpsPlayback?: Result.RtmpsPlayback;

    /**
     * Details for streaming to a live input using SRT.
     */
    srt?: Result.Srt;

    /**
     * Details for playback from an live input using SRT.
     */
    srtPlayback?: Result.SrtPlayback;

    /**
     * The connection status of a live input.
     */
    status?:
      | 'connected'
      | 'reconnected'
      | 'reconnecting'
      | 'client_disconnect'
      | 'ttl_exceeded'
      | 'failed_to_connect'
      | 'failed_to_reconnect'
      | 'new_configuration_accepted'
      | null;

    /**
     * A unique identifier for a live input.
     */
    uid?: string;

    /**
     * Details for streaming to a live input using WebRTC.
     */
    webRTC?: Result.WebRtc;

    /**
     * Details for playback from a live input using WebRTC.
     */
    webRTCPlayback?: Result.WebRtcPlayback;
  }

  export namespace Result {
    /**
     * Records the input to a Cloudflare Stream video. Behavior depends on the mode. In
     * most cases, the video will initially be viewable as a live video and transition
     * to on-demand after a condition is satisfied.
     */
    export interface Recording {
      /**
       * Lists the origins allowed to display videos created with this input. Enter
       * allowed origin domains in an array and use `*` for wildcard subdomains. An empty
       * array allows videos to be viewed on any origin.
       */
      allowedOrigins?: Array<string>;

      /**
       * Specifies the recording behavior for the live input. Set this value to `off` to
       * prevent a recording. Set the value to `automatic` to begin a recording and
       * transition to on-demand after Stream Live stops receiving input.
       */
      mode?: 'off' | 'automatic';

      /**
       * Indicates if a video using the live input has the `requireSignedURLs` property
       * set. Also enforces access controls on any video recording of the livestream with
       * the live input.
       */
      requireSignedURLs?: boolean;

      /**
       * Determines the amount of time a live input configured in `automatic` mode should
       * wait before a recording transitions from live to on-demand. `0` is recommended
       * for most use cases and indicates the platform default should be used.
       */
      timeoutSeconds?: number;
    }

    /**
     * Details for streaming to an live input using RTMPS.
     */
    export interface Rtmps {
      /**
       * The secret key to use when streaming via RTMPS to a live input.
       */
      streamKey?: string;

      /**
       * The RTMPS URL you provide to the broadcaster, which they stream live video to.
       */
      url?: string;
    }

    /**
     * Details for playback from an live input using RTMPS.
     */
    export interface RtmpsPlayback {
      /**
       * The secret key to use for playback via RTMPS.
       */
      streamKey?: string;

      /**
       * The URL used to play live video over RTMPS.
       */
      url?: string;
    }

    /**
     * Details for streaming to a live input using SRT.
     */
    export interface Srt {
      /**
       * The secret key to use when streaming via SRT to a live input.
       */
      passphrase?: string;

      /**
       * The identifier of the live input to use when streaming via SRT.
       */
      streamId?: string;

      /**
       * The SRT URL you provide to the broadcaster, which they stream live video to.
       */
      url?: string;
    }

    /**
     * Details for playback from an live input using SRT.
     */
    export interface SrtPlayback {
      /**
       * The secret key to use for playback via SRT.
       */
      passphrase?: string;

      /**
       * The identifier of the live input to use for playback via SRT.
       */
      streamId?: string;

      /**
       * The URL used to play live video over SRT.
       */
      url?: string;
    }

    /**
     * Details for streaming to a live input using WebRTC.
     */
    export interface WebRtc {
      /**
       * The WebRTC URL you provide to the broadcaster, which they stream live video to.
       */
      url?: string;
    }

    /**
     * Details for playback from a live input using WebRTC.
     */
    export interface WebRtcPlayback {
      /**
       * The URL used to play live video over WebRTC.
       */
      url?: string;
    }
  }
}

export interface LiveInputStreamLiveInputsListLiveInputsResponse {
  errors?: Array<LiveInputStreamLiveInputsListLiveInputsResponse.Error>;

  messages?: Array<LiveInputStreamLiveInputsListLiveInputsResponse.Message>;

  result?: LiveInputStreamLiveInputsListLiveInputsResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace LiveInputStreamLiveInputsListLiveInputsResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    liveInputs?: Array<Result.LiveInput>;

    /**
     * The total number of remaining live inputs based on cursor position.
     */
    range?: number;

    /**
     * The total number of live inputs that match the provided filters.
     */
    total?: number;
  }

  export namespace Result {
    export interface LiveInput {
      /**
       * The date and time the live input was created.
       */
      created?: string;

      /**
       * Indicates the number of days after which the live inputs recordings will be
       * deleted. When a stream completes and the recording is ready, the value is used
       * to calculate a scheduled deletion date for that recording. Omit the field to
       * indicate no change, or include with a `null` value to remove an existing
       * scheduled deletion.
       */
      deleteRecordingAfterDays?: number;

      /**
       * A user modifiable key-value store used to reference other systems of record for
       * managing live inputs.
       */
      meta?: unknown;

      /**
       * The date and time the live input was last modified.
       */
      modified?: string;

      /**
       * A unique identifier for a live input.
       */
      uid?: string;
    }
  }
}

export interface LiveInputUpdateParams {
  /**
   * Sets the creator ID asssociated with this live input.
   */
  defaultCreator?: string;

  /**
   * Indicates the number of days after which the live inputs recordings will be
   * deleted. When a stream completes and the recording is ready, the value is used
   * to calculate a scheduled deletion date for that recording. Omit the field to
   * indicate no change, or include with a `null` value to remove an existing
   * scheduled deletion.
   */
  deleteRecordingAfterDays?: number;

  /**
   * A user modifiable key-value store used to reference other systems of record for
   * managing live inputs.
   */
  meta?: unknown;

  /**
   * Records the input to a Cloudflare Stream video. Behavior depends on the mode. In
   * most cases, the video will initially be viewable as a live video and transition
   * to on-demand after a condition is satisfied.
   */
  recording?: LiveInputUpdateParams.Recording;
}

export namespace LiveInputUpdateParams {
  /**
   * Records the input to a Cloudflare Stream video. Behavior depends on the mode. In
   * most cases, the video will initially be viewable as a live video and transition
   * to on-demand after a condition is satisfied.
   */
  export interface Recording {
    /**
     * Lists the origins allowed to display videos created with this input. Enter
     * allowed origin domains in an array and use `*` for wildcard subdomains. An empty
     * array allows videos to be viewed on any origin.
     */
    allowedOrigins?: Array<string>;

    /**
     * Specifies the recording behavior for the live input. Set this value to `off` to
     * prevent a recording. Set the value to `automatic` to begin a recording and
     * transition to on-demand after Stream Live stops receiving input.
     */
    mode?: 'off' | 'automatic';

    /**
     * Indicates if a video using the live input has the `requireSignedURLs` property
     * set. Also enforces access controls on any video recording of the livestream with
     * the live input.
     */
    requireSignedURLs?: boolean;

    /**
     * Determines the amount of time a live input configured in `automatic` mode should
     * wait before a recording transitions from live to on-demand. `0` is recommended
     * for most use cases and indicates the platform default should be used.
     */
    timeoutSeconds?: number;
  }
}

export interface LiveInputStreamLiveInputsCreateALiveInputParams {
  /**
   * Sets the creator ID asssociated with this live input.
   */
  defaultCreator?: string;

  /**
   * Indicates the number of days after which the live inputs recordings will be
   * deleted. When a stream completes and the recording is ready, the value is used
   * to calculate a scheduled deletion date for that recording. Omit the field to
   * indicate no change, or include with a `null` value to remove an existing
   * scheduled deletion.
   */
  deleteRecordingAfterDays?: number;

  /**
   * A user modifiable key-value store used to reference other systems of record for
   * managing live inputs.
   */
  meta?: unknown;

  /**
   * Records the input to a Cloudflare Stream video. Behavior depends on the mode. In
   * most cases, the video will initially be viewable as a live video and transition
   * to on-demand after a condition is satisfied.
   */
  recording?: LiveInputStreamLiveInputsCreateALiveInputParams.Recording;
}

export namespace LiveInputStreamLiveInputsCreateALiveInputParams {
  /**
   * Records the input to a Cloudflare Stream video. Behavior depends on the mode. In
   * most cases, the video will initially be viewable as a live video and transition
   * to on-demand after a condition is satisfied.
   */
  export interface Recording {
    /**
     * Lists the origins allowed to display videos created with this input. Enter
     * allowed origin domains in an array and use `*` for wildcard subdomains. An empty
     * array allows videos to be viewed on any origin.
     */
    allowedOrigins?: Array<string>;

    /**
     * Specifies the recording behavior for the live input. Set this value to `off` to
     * prevent a recording. Set the value to `automatic` to begin a recording and
     * transition to on-demand after Stream Live stops receiving input.
     */
    mode?: 'off' | 'automatic';

    /**
     * Indicates if a video using the live input has the `requireSignedURLs` property
     * set. Also enforces access controls on any video recording of the livestream with
     * the live input.
     */
    requireSignedURLs?: boolean;

    /**
     * Determines the amount of time a live input configured in `automatic` mode should
     * wait before a recording transitions from live to on-demand. `0` is recommended
     * for most use cases and indicates the platform default should be used.
     */
    timeoutSeconds?: number;
  }
}

export interface LiveInputStreamLiveInputsListLiveInputsParams {
  /**
   * Includes the total number of videos associated with the submitted query
   * parameters.
   */
  include_counts?: boolean;
}

export namespace LiveInputs {
  export import LiveInputRetrieveResponse = LiveInputsAPI.LiveInputRetrieveResponse;
  export import LiveInputUpdateResponse = LiveInputsAPI.LiveInputUpdateResponse;
  export import LiveInputStreamLiveInputsCreateALiveInputResponse = LiveInputsAPI.LiveInputStreamLiveInputsCreateALiveInputResponse;
  export import LiveInputStreamLiveInputsListLiveInputsResponse = LiveInputsAPI.LiveInputStreamLiveInputsListLiveInputsResponse;
  export import LiveInputUpdateParams = LiveInputsAPI.LiveInputUpdateParams;
  export import LiveInputStreamLiveInputsCreateALiveInputParams = LiveInputsAPI.LiveInputStreamLiveInputsCreateALiveInputParams;
  export import LiveInputStreamLiveInputsListLiveInputsParams = LiveInputsAPI.LiveInputStreamLiveInputsListLiveInputsParams;
  export import Outputs = OutputsAPI.Outputs;
  export import OutputUpdateResponse = OutputsAPI.OutputUpdateResponse;
  export import OutputStreamLiveInputsCreateANewOutputConnectedToALiveInputResponse = OutputsAPI.OutputStreamLiveInputsCreateANewOutputConnectedToALiveInputResponse;
  export import OutputStreamLiveInputsListAllOutputsAssociatedWithASpecifiedLiveInputResponse = OutputsAPI.OutputStreamLiveInputsListAllOutputsAssociatedWithASpecifiedLiveInputResponse;
  export import OutputUpdateParams = OutputsAPI.OutputUpdateParams;
  export import OutputStreamLiveInputsCreateANewOutputConnectedToALiveInputParams = OutputsAPI.OutputStreamLiveInputsCreateANewOutputConnectedToALiveInputParams;
}
