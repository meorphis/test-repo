// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DownloadsAPI from 'cloudflare/resources/accounts/streams/downloads';

export class Downloads extends APIResource {
  /**
   * Delete the downloads for a video.
   */
  delete(
    accountIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DownloadDeleteResponse> {
    return this._client.delete(`/accounts/${accountIdentifier}/stream/${identifier}/downloads`, options);
  }

  /**
   * Creates a download for a video when a video is ready to view.
   */
  streamMP4DownloadsCreateDownloads(
    accountIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DownloadStreamMP4DownloadsCreateDownloadsResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/stream/${identifier}/downloads`, options);
  }

  /**
   * Lists the downloads created for a video.
   */
  streamMP4DownloadsListDownloads(
    accountIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DownloadStreamMP4DownloadsListDownloadsResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/stream/${identifier}/downloads`, options);
  }
}

export interface DownloadDeleteResponse {
  errors?: Array<DownloadDeleteResponse.Error>;

  messages?: Array<DownloadDeleteResponse.Message>;

  result?: string;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace DownloadDeleteResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface DownloadStreamMP4DownloadsCreateDownloadsResponse {
  errors?: Array<DownloadStreamMP4DownloadsCreateDownloadsResponse.Error>;

  messages?: Array<DownloadStreamMP4DownloadsCreateDownloadsResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace DownloadStreamMP4DownloadsCreateDownloadsResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface DownloadStreamMP4DownloadsListDownloadsResponse {
  errors?: Array<DownloadStreamMP4DownloadsListDownloadsResponse.Error>;

  messages?: Array<DownloadStreamMP4DownloadsListDownloadsResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace DownloadStreamMP4DownloadsListDownloadsResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export namespace Downloads {
  export import DownloadDeleteResponse = DownloadsAPI.DownloadDeleteResponse;
  export import DownloadStreamMP4DownloadsCreateDownloadsResponse = DownloadsAPI.DownloadStreamMP4DownloadsCreateDownloadsResponse;
  export import DownloadStreamMP4DownloadsListDownloadsResponse = DownloadsAPI.DownloadStreamMP4DownloadsListDownloadsResponse;
}
