// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DirectUploadsAPI from 'cloudflare/resources/accounts/images/v2s/direct-uploads';
import { multipartFormRequestOptions } from 'cloudflare/core';

export class DirectUploads extends APIResource {
  /**
   * Direct uploads allow users to upload images without API keys. A common use case
   * are web apps, client-side applications, or mobile devices where users upload
   * content directly to Cloudflare Images. This method creates a draft record for a
   * future image. It returns an upload URL and an image identifier. To verify if the
   * image itself has been uploaded, send an image details request
   * (accounts/:account_identifier/images/v1/:identifier), and check that the
   * `draft: true` property is not present.
   */
  cloudflareImagesCreateAuthenticatedDirectUploadURLV2(
    accountIdentifier: string,
    body: DirectUploadCloudflareImagesCreateAuthenticatedDirectUploadURLV2Params,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DirectUploadCloudflareImagesCreateAuthenticatedDirectUploadURLV2Response> {
    return this._client.post(
      `/accounts/${accountIdentifier}/images/v2/direct_upload`,
      multipartFormRequestOptions({ body, ...options }),
    );
  }
}

export interface DirectUploadCloudflareImagesCreateAuthenticatedDirectUploadURLV2Response {
  errors?: Array<DirectUploadCloudflareImagesCreateAuthenticatedDirectUploadURLV2Response.Error>;

  messages?: Array<DirectUploadCloudflareImagesCreateAuthenticatedDirectUploadURLV2Response.Message>;

  result?: DirectUploadCloudflareImagesCreateAuthenticatedDirectUploadURLV2Response.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace DirectUploadCloudflareImagesCreateAuthenticatedDirectUploadURLV2Response {
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
     * The URL the unauthenticated upload can be performed to using a single HTTP POST
     * (multipart/form-data) request.
     */
    uploadURL?: string;
  }
}

export interface DirectUploadCloudflareImagesCreateAuthenticatedDirectUploadURLV2Params {
  /**
   * The date after which the upload will not be accepted. Minimum: Now + 2 minutes.
   * Maximum: Now + 6 hours.
   */
  expiry?: string;

  /**
   * User modifiable key-value store. Can be used for keeping references to another
   * system of record, for managing images.
   */
  metadata?: unknown;

  /**
   * Indicates whether the image requires a signature token to be accessed.
   */
  requireSignedURLs?: boolean;
}

export namespace DirectUploads {
  export import DirectUploadCloudflareImagesCreateAuthenticatedDirectUploadURLV2Response = DirectUploadsAPI.DirectUploadCloudflareImagesCreateAuthenticatedDirectUploadURLV2Response;
  export import DirectUploadCloudflareImagesCreateAuthenticatedDirectUploadURLV2Params = DirectUploadsAPI.DirectUploadCloudflareImagesCreateAuthenticatedDirectUploadURLV2Params;
}
