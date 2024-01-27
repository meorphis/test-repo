// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as WatermarksAPI from 'cloudflare/resources/accounts/streams/watermarks';
import { multipartFormRequestOptions } from 'cloudflare/core';

export class Watermarks extends APIResource {
  /**
   * Retrieves details for a single watermark profile.
   */
  retrieve(
    accountIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WatermarkRetrieveResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/stream/watermarks/${identifier}`, options);
  }

  /**
   * Deletes a watermark profile.
   */
  delete(
    accountIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WatermarkDeleteResponse> {
    return this._client.delete(`/accounts/${accountIdentifier}/stream/watermarks/${identifier}`, options);
  }

  /**
   * Creates watermark profiles using a single `HTTP POST multipart/form-data`
   * request.
   */
  streamWatermarkProfileCreateWatermarkProfilesViaBasicUpload(
    accountIdentifier: string,
    body: WatermarkStreamWatermarkProfileCreateWatermarkProfilesViaBasicUploadParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WatermarkStreamWatermarkProfileCreateWatermarkProfilesViaBasicUploadResponse> {
    return this._client.post(
      `/accounts/${accountIdentifier}/stream/watermarks`,
      multipartFormRequestOptions({ body, ...options }),
    );
  }

  /**
   * Lists all watermark profiles for an account.
   */
  streamWatermarkProfileListWatermarkProfiles(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WatermarkStreamWatermarkProfileListWatermarkProfilesResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/stream/watermarks`, options);
  }
}

export interface WatermarkRetrieveResponse {
  errors?: Array<WatermarkRetrieveResponse.Error>;

  messages?: Array<WatermarkRetrieveResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace WatermarkRetrieveResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface WatermarkDeleteResponse {
  errors?: Array<WatermarkDeleteResponse.Error>;

  messages?: Array<WatermarkDeleteResponse.Message>;

  result?: string;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace WatermarkDeleteResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface WatermarkStreamWatermarkProfileCreateWatermarkProfilesViaBasicUploadResponse {
  errors?: Array<WatermarkStreamWatermarkProfileCreateWatermarkProfilesViaBasicUploadResponse.Error>;

  messages?: Array<WatermarkStreamWatermarkProfileCreateWatermarkProfilesViaBasicUploadResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace WatermarkStreamWatermarkProfileCreateWatermarkProfilesViaBasicUploadResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface WatermarkStreamWatermarkProfileListWatermarkProfilesResponse {
  errors?: Array<WatermarkStreamWatermarkProfileListWatermarkProfilesResponse.Error>;

  messages?: Array<WatermarkStreamWatermarkProfileListWatermarkProfilesResponse.Message>;

  result?: Array<WatermarkStreamWatermarkProfileListWatermarkProfilesResponse.Result>;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace WatermarkStreamWatermarkProfileListWatermarkProfilesResponse {
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

export interface WatermarkStreamWatermarkProfileCreateWatermarkProfilesViaBasicUploadParams {
  /**
   * The image file to upload.
   */
  file: string;

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
}

export namespace Watermarks {
  export import WatermarkRetrieveResponse = WatermarksAPI.WatermarkRetrieveResponse;
  export import WatermarkDeleteResponse = WatermarksAPI.WatermarkDeleteResponse;
  export import WatermarkStreamWatermarkProfileCreateWatermarkProfilesViaBasicUploadResponse = WatermarksAPI.WatermarkStreamWatermarkProfileCreateWatermarkProfilesViaBasicUploadResponse;
  export import WatermarkStreamWatermarkProfileListWatermarkProfilesResponse = WatermarksAPI.WatermarkStreamWatermarkProfileListWatermarkProfilesResponse;
  export import WatermarkStreamWatermarkProfileCreateWatermarkProfilesViaBasicUploadParams = WatermarksAPI.WatermarkStreamWatermarkProfileCreateWatermarkProfilesViaBasicUploadParams;
}
