// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as V1sAPI from 'cloudflare/resources/accounts/images/v1s/v1s';
import * as BlobsAPI from 'cloudflare/resources/accounts/images/v1s/blobs';
import * as KeysAPI from 'cloudflare/resources/accounts/images/v1s/keys';
import * as StatsAPI from 'cloudflare/resources/accounts/images/v1s/stats';
import * as VariantsAPI from 'cloudflare/resources/accounts/images/v1s/variants';
import { multipartFormRequestOptions } from 'cloudflare/core';

export class V1s extends APIResource {
  keys: KeysAPI.Keys = new KeysAPI.Keys(this._client);
  stats: StatsAPI.Stats = new StatsAPI.Stats(this._client);
  variants: VariantsAPI.Variants = new VariantsAPI.Variants(this._client);
  blobs: BlobsAPI.Blobs = new BlobsAPI.Blobs(this._client);

  /**
   * Fetch details for a single image.
   */
  retrieve(
    accountIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<V1RetrieveResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/images/v1/${identifier}`, options);
  }

  /**
   * Update image access control. On access control change, all copies of the image
   * are purged from cache.
   */
  update(
    accountIdentifier: string,
    identifier: string,
    body: V1UpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<V1UpdateResponse> {
    return this._client.patch(`/accounts/${accountIdentifier}/images/v1/${identifier}`, { body, ...options });
  }

  /**
   * Delete an image on Cloudflare Images. On success, all copies of the image are
   * deleted and purged from cache.
   */
  delete(
    accountIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<V1DeleteResponse> {
    return this._client.delete(`/accounts/${accountIdentifier}/images/v1/${identifier}`, options);
  }

  /**
   * List up to 100 images with one request. Use the optional parameters below to get
   * a specific range of images.
   */
  cloudflareImagesListImages(
    accountIdentifier: string,
    query?: V1CloudflareImagesListImagesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<V1CloudflareImagesListImagesResponse>;
  cloudflareImagesListImages(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<V1CloudflareImagesListImagesResponse>;
  cloudflareImagesListImages(
    accountIdentifier: string,
    query: V1CloudflareImagesListImagesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<V1CloudflareImagesListImagesResponse> {
    if (isRequestOptions(query)) {
      return this.cloudflareImagesListImages(accountIdentifier, {}, query);
    }
    return this._client.get(`/accounts/${accountIdentifier}/images/v1`, { query, ...options });
  }

  /**
   * Upload an image with up to 10 Megabytes using a single HTTP POST
   * (multipart/form-data) request. An image can be uploaded by sending an image file
   * or passing an accessible to an API url.
   */
  cloudflareImagesUploadAnImageViaURL(
    accountIdentifier: string,
    body: V1CloudflareImagesUploadAnImageViaURLParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<V1CloudflareImagesUploadAnImageViaURLResponse> {
    return this._client.post(
      `/accounts/${accountIdentifier}/images/v1`,
      multipartFormRequestOptions({ body, ...options }),
    );
  }
}

export interface V1RetrieveResponse {
  errors?: Array<V1RetrieveResponse.Error>;

  messages?: Array<V1RetrieveResponse.Message>;

  result?: V1RetrieveResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace V1RetrieveResponse {
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

export interface V1UpdateResponse {
  errors?: Array<V1UpdateResponse.Error>;

  messages?: Array<V1UpdateResponse.Message>;

  result?: V1UpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace V1UpdateResponse {
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

export interface V1DeleteResponse {
  errors?: Array<V1DeleteResponse.Error>;

  messages?: Array<V1DeleteResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace V1DeleteResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface V1CloudflareImagesListImagesResponse {
  errors?: Array<V1CloudflareImagesListImagesResponse.Error>;

  messages?: Array<V1CloudflareImagesListImagesResponse.Message>;

  result?: V1CloudflareImagesListImagesResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace V1CloudflareImagesListImagesResponse {
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

export interface V1CloudflareImagesUploadAnImageViaURLResponse {
  errors?: Array<V1CloudflareImagesUploadAnImageViaURLResponse.Error>;

  messages?: Array<V1CloudflareImagesUploadAnImageViaURLResponse.Message>;

  result?: V1CloudflareImagesUploadAnImageViaURLResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace V1CloudflareImagesUploadAnImageViaURLResponse {
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

export interface V1UpdateParams {
  /**
   * User modifiable key-value store. Can be used for keeping references to another
   * system of record for managing images. No change if not specified.
   */
  metadata?: unknown;

  /**
   * Indicates whether the image can be accessed using only its UID. If set to
   * `true`, a signed token needs to be generated with a signing key to view the
   * image. Returns a new UID on a change. No change if not specified.
   */
  requireSignedURLs?: boolean;
}

export interface V1CloudflareImagesListImagesParams {
  /**
   * Page number of paginated results.
   */
  page?: number;

  /**
   * Number of items per page.
   */
  per_page?: number;
}

export type V1CloudflareImagesUploadAnImageViaURLParams =
  | V1CloudflareImagesUploadAnImageViaURLParams.ImagesImageUploadViaFile
  | V1CloudflareImagesUploadAnImageViaURLParams.ImagesImageUploadViaURL;

export namespace V1CloudflareImagesUploadAnImageViaURLParams {
  export interface ImagesImageUploadViaFile {
    /**
     * An image binary data.
     */
    file: unknown;
  }

  export interface ImagesImageUploadViaURL {
    /**
     * A URL to fetch an image from origin.
     */
    url: string;
  }
}

export namespace V1s {
  export import V1RetrieveResponse = V1sAPI.V1RetrieveResponse;
  export import V1UpdateResponse = V1sAPI.V1UpdateResponse;
  export import V1DeleteResponse = V1sAPI.V1DeleteResponse;
  export import V1CloudflareImagesListImagesResponse = V1sAPI.V1CloudflareImagesListImagesResponse;
  export import V1CloudflareImagesUploadAnImageViaURLResponse = V1sAPI.V1CloudflareImagesUploadAnImageViaURLResponse;
  export import V1UpdateParams = V1sAPI.V1UpdateParams;
  export import V1CloudflareImagesListImagesParams = V1sAPI.V1CloudflareImagesListImagesParams;
  export import V1CloudflareImagesUploadAnImageViaURLParams = V1sAPI.V1CloudflareImagesUploadAnImageViaURLParams;
  export import Keys = KeysAPI.Keys;
  export import KeyCloudflareImagesKeysListSigningKeysResponse = KeysAPI.KeyCloudflareImagesKeysListSigningKeysResponse;
  export import Stats = StatsAPI.Stats;
  export import StatCloudflareImagesImagesUsageStatisticsResponse = StatsAPI.StatCloudflareImagesImagesUsageStatisticsResponse;
  export import Variants = VariantsAPI.Variants;
  export import VariantRetrieveResponse = VariantsAPI.VariantRetrieveResponse;
  export import VariantUpdateResponse = VariantsAPI.VariantUpdateResponse;
  export import VariantDeleteResponse = VariantsAPI.VariantDeleteResponse;
  export import VariantCloudflareImagesVariantsCreateAVariantResponse = VariantsAPI.VariantCloudflareImagesVariantsCreateAVariantResponse;
  export import VariantCloudflareImagesVariantsListVariantsResponse = VariantsAPI.VariantCloudflareImagesVariantsListVariantsResponse;
  export import VariantUpdateParams = VariantsAPI.VariantUpdateParams;
  export import VariantCloudflareImagesVariantsCreateAVariantParams = VariantsAPI.VariantCloudflareImagesVariantsCreateAVariantParams;
  export import Blobs = BlobsAPI.Blobs;
}
