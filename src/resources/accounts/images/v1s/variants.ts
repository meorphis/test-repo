// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as VariantsAPI from 'cloudflare/resources/accounts/images/v1s/variants';

export class Variants extends APIResource {
  /**
   * Fetch details for a single variant.
   */
  retrieve(
    accountIdentifier: string,
    identifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VariantRetrieveResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/images/v1/variants/${identifier}`, options);
  }

  /**
   * Updating a variant purges the cache for all images associated with the variant.
   */
  update(
    accountIdentifier: string,
    identifier: unknown,
    body: VariantUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VariantUpdateResponse> {
    return this._client.patch(`/accounts/${accountIdentifier}/images/v1/variants/${identifier}`, {
      body,
      ...options,
    });
  }

  /**
   * Deleting a variant purges the cache for all images associated with the variant.
   */
  delete(
    accountIdentifier: string,
    identifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VariantDeleteResponse> {
    return this._client.delete(`/accounts/${accountIdentifier}/images/v1/variants/${identifier}`, options);
  }

  /**
   * Specify variants that allow you to resize images for different use cases.
   */
  cloudflareImagesVariantsCreateAVariant(
    accountIdentifier: string,
    body: VariantCloudflareImagesVariantsCreateAVariantParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VariantCloudflareImagesVariantsCreateAVariantResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/images/v1/variants`, { body, ...options });
  }

  /**
   * Lists existing variants.
   */
  cloudflareImagesVariantsListVariants(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VariantCloudflareImagesVariantsListVariantsResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/images/v1/variants`, options);
  }
}

export interface VariantRetrieveResponse {
  errors?: Array<VariantRetrieveResponse.Error>;

  messages?: Array<VariantRetrieveResponse.Message>;

  result?: VariantRetrieveResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace VariantRetrieveResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    variant?: Result.Variant;
  }

  export namespace Result {
    export interface Variant {
      id: unknown;

      /**
       * Allows you to define image resizing sizes for different use cases.
       */
      options: Variant.Options;

      /**
       * Indicates whether the variant can access an image without a signature,
       * regardless of image access control.
       */
      neverRequireSignedURLs?: boolean;
    }

    export namespace Variant {
      /**
       * Allows you to define image resizing sizes for different use cases.
       */
      export interface Options {
        /**
         * The fit property describes how the width and height dimensions should be
         * interpreted.
         */
        fit: 'scale-down' | 'contain' | 'cover' | 'crop' | 'pad';

        /**
         * Maximum height in image pixels.
         */
        height: number;

        /**
         * What EXIF data should be preserved in the output image.
         */
        metadata: 'keep' | 'copyright' | 'none';

        /**
         * Maximum width in image pixels.
         */
        width: number;
      }
    }
  }
}

export interface VariantUpdateResponse {
  errors?: Array<VariantUpdateResponse.Error>;

  messages?: Array<VariantUpdateResponse.Message>;

  result?: VariantUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace VariantUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    variant?: Result.Variant;
  }

  export namespace Result {
    export interface Variant {
      id: unknown;

      /**
       * Allows you to define image resizing sizes for different use cases.
       */
      options: Variant.Options;

      /**
       * Indicates whether the variant can access an image without a signature,
       * regardless of image access control.
       */
      neverRequireSignedURLs?: boolean;
    }

    export namespace Variant {
      /**
       * Allows you to define image resizing sizes for different use cases.
       */
      export interface Options {
        /**
         * The fit property describes how the width and height dimensions should be
         * interpreted.
         */
        fit: 'scale-down' | 'contain' | 'cover' | 'crop' | 'pad';

        /**
         * Maximum height in image pixels.
         */
        height: number;

        /**
         * What EXIF data should be preserved in the output image.
         */
        metadata: 'keep' | 'copyright' | 'none';

        /**
         * Maximum width in image pixels.
         */
        width: number;
      }
    }
  }
}

export interface VariantDeleteResponse {
  errors?: Array<VariantDeleteResponse.Error>;

  messages?: Array<VariantDeleteResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace VariantDeleteResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface VariantCloudflareImagesVariantsCreateAVariantResponse {
  errors?: Array<VariantCloudflareImagesVariantsCreateAVariantResponse.Error>;

  messages?: Array<VariantCloudflareImagesVariantsCreateAVariantResponse.Message>;

  result?: VariantCloudflareImagesVariantsCreateAVariantResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace VariantCloudflareImagesVariantsCreateAVariantResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    variant?: Result.Variant;
  }

  export namespace Result {
    export interface Variant {
      id: unknown;

      /**
       * Allows you to define image resizing sizes for different use cases.
       */
      options: Variant.Options;

      /**
       * Indicates whether the variant can access an image without a signature,
       * regardless of image access control.
       */
      neverRequireSignedURLs?: boolean;
    }

    export namespace Variant {
      /**
       * Allows you to define image resizing sizes for different use cases.
       */
      export interface Options {
        /**
         * The fit property describes how the width and height dimensions should be
         * interpreted.
         */
        fit: 'scale-down' | 'contain' | 'cover' | 'crop' | 'pad';

        /**
         * Maximum height in image pixels.
         */
        height: number;

        /**
         * What EXIF data should be preserved in the output image.
         */
        metadata: 'keep' | 'copyright' | 'none';

        /**
         * Maximum width in image pixels.
         */
        width: number;
      }
    }
  }
}

export interface VariantCloudflareImagesVariantsListVariantsResponse {
  errors?: Array<VariantCloudflareImagesVariantsListVariantsResponse.Error>;

  messages?: Array<VariantCloudflareImagesVariantsListVariantsResponse.Message>;

  result?: VariantCloudflareImagesVariantsListVariantsResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace VariantCloudflareImagesVariantsListVariantsResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    variants?: Result.Variants;
  }

  export namespace Result {
    export interface Variants {
      hero?: Variants.Hero;
    }

    export namespace Variants {
      export interface Hero {
        id: unknown;

        /**
         * Allows you to define image resizing sizes for different use cases.
         */
        options: Hero.Options;

        /**
         * Indicates whether the variant can access an image without a signature,
         * regardless of image access control.
         */
        neverRequireSignedURLs?: boolean;
      }

      export namespace Hero {
        /**
         * Allows you to define image resizing sizes for different use cases.
         */
        export interface Options {
          /**
           * The fit property describes how the width and height dimensions should be
           * interpreted.
           */
          fit: 'scale-down' | 'contain' | 'cover' | 'crop' | 'pad';

          /**
           * Maximum height in image pixels.
           */
          height: number;

          /**
           * What EXIF data should be preserved in the output image.
           */
          metadata: 'keep' | 'copyright' | 'none';

          /**
           * Maximum width in image pixels.
           */
          width: number;
        }
      }
    }
  }
}

export interface VariantUpdateParams {
  /**
   * Allows you to define image resizing sizes for different use cases.
   */
  options: VariantUpdateParams.Options;

  /**
   * Indicates whether the variant can access an image without a signature,
   * regardless of image access control.
   */
  neverRequireSignedURLs?: boolean;
}

export namespace VariantUpdateParams {
  /**
   * Allows you to define image resizing sizes for different use cases.
   */
  export interface Options {
    /**
     * The fit property describes how the width and height dimensions should be
     * interpreted.
     */
    fit: 'scale-down' | 'contain' | 'cover' | 'crop' | 'pad';

    /**
     * Maximum height in image pixels.
     */
    height: number;

    /**
     * What EXIF data should be preserved in the output image.
     */
    metadata: 'keep' | 'copyright' | 'none';

    /**
     * Maximum width in image pixels.
     */
    width: number;
  }
}

export interface VariantCloudflareImagesVariantsCreateAVariantParams {
  id: unknown;

  /**
   * Allows you to define image resizing sizes for different use cases.
   */
  options: VariantCloudflareImagesVariantsCreateAVariantParams.Options;

  /**
   * Indicates whether the variant can access an image without a signature,
   * regardless of image access control.
   */
  neverRequireSignedURLs?: boolean;
}

export namespace VariantCloudflareImagesVariantsCreateAVariantParams {
  /**
   * Allows you to define image resizing sizes for different use cases.
   */
  export interface Options {
    /**
     * The fit property describes how the width and height dimensions should be
     * interpreted.
     */
    fit: 'scale-down' | 'contain' | 'cover' | 'crop' | 'pad';

    /**
     * Maximum height in image pixels.
     */
    height: number;

    /**
     * What EXIF data should be preserved in the output image.
     */
    metadata: 'keep' | 'copyright' | 'none';

    /**
     * Maximum width in image pixels.
     */
    width: number;
  }
}

export namespace Variants {
  export import VariantRetrieveResponse = VariantsAPI.VariantRetrieveResponse;
  export import VariantUpdateResponse = VariantsAPI.VariantUpdateResponse;
  export import VariantDeleteResponse = VariantsAPI.VariantDeleteResponse;
  export import VariantCloudflareImagesVariantsCreateAVariantResponse = VariantsAPI.VariantCloudflareImagesVariantsCreateAVariantResponse;
  export import VariantCloudflareImagesVariantsListVariantsResponse = VariantsAPI.VariantCloudflareImagesVariantsListVariantsResponse;
  export import VariantUpdateParams = VariantsAPI.VariantUpdateParams;
  export import VariantCloudflareImagesVariantsCreateAVariantParams = VariantsAPI.VariantCloudflareImagesVariantsCreateAVariantParams;
}
