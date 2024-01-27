// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as ImagesV2sAPI from 'cloudflare/resources/images-v2s';

export class ImagesV2s extends APIResource {
  /**
   * List up to 10000 images with one request. Use the optional parameters below to
   * get a specific range of images. Endpoint returns continuation_token if more
   * images are present.
   */
  list(
    accountIdentifier: string,
    query?: ImagesV2ListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ImagesImagesListResponseV2>;
  list(accountIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<ImagesImagesListResponseV2>;
  list(
    accountIdentifier: string,
    query: ImagesV2ListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ImagesImagesListResponseV2> {
    if (isRequestOptions(query)) {
      return this.list(accountIdentifier, {}, query);
    }
    return this._client.get(`/accounts/${accountIdentifier}/images/v2`, { query, ...options });
  }
}

export interface ImagesImagesListResponseV2 {
  errors?: Array<ImagesImagesListResponseV2.Error>;

  messages?: Array<ImagesImagesListResponseV2.Message>;

  result?: ImagesImagesListResponseV2.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ImagesImagesListResponseV2 {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    images?: Array<Result.Image>;
  }

  export namespace Result {
    export interface Image {
      /**
       * Image unique identifier.
       */
      id?: string;

      /**
       * Image file name.
       */
      filename?: string;

      /**
       * User modifiable key-value store. Can be used for keeping references to another
       * system of record for managing images. Metadata must not exceed 1024 bytes.
       */
      meta?: unknown;

      /**
       * Indicates whether the image can be a accessed only using it's UID. If set to
       * true, a signed token needs to be generated with a signing key to view the image.
       */
      requireSignedURLs?: boolean;

      /**
       * When the media item was uploaded.
       */
      uploaded?: string;

      /**
       * Object specifying available variants for an image.
       */
      variants?: Array<string | string | string>;
    }
  }
}

export interface ImagesV2ListParams {
  /**
   * Continuation token for a next page. List images V2 returns continuation_token
   */
  continuation_token?: string | null;

  /**
   * Number of items per page.
   */
  per_page?: number;

  /**
   * Sorting order by upload time.
   */
  sort_order?: 'asc' | 'desc';
}

export namespace ImagesV2s {
  export import ImagesImagesListResponseV2 = ImagesV2sAPI.ImagesImagesListResponseV2;
  export import ImagesV2ListParams = ImagesV2sAPI.ImagesV2ListParams;
}
