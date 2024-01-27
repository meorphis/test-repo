// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ImageResizingsAPI from 'cloudflare/resources/zones/settings/image-resizings';

export class ImageResizings extends APIResource {
  /**
   * Image Resizing provides on-demand resizing, conversion and optimisation for
   * images served through Cloudflare's network. Refer to the
   * [Image Resizing documentation](https://developers.cloudflare.com/images/) for
   * more information.
   */
  update(
    zoneIdentifier: string,
    body: ImageResizingUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ImageResizingUpdateResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/settings/image_resizing`, { body, ...options });
  }

  /**
   * Image Resizing provides on-demand resizing, conversion and optimisation for
   * images served through Cloudflare's network. Refer to the
   * [Image Resizing documentation](https://developers.cloudflare.com/images/) for
   * more information.
   */
  list(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<ImageResizingListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/settings/image_resizing`, options);
  }
}

export interface ImageResizingUpdateResponse {
  errors?: Array<ImageResizingUpdateResponse.Error>;

  messages?: Array<ImageResizingUpdateResponse.Message>;

  /**
   * Image Resizing provides on-demand resizing, conversion and optimisation for
   * images served through Cloudflare's network. Refer to the
   * [Image Resizing documentation](https://developers.cloudflare.com/images/) for
   * more information.
   */
  result?: ImageResizingUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace ImageResizingUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Image Resizing provides on-demand resizing, conversion and optimisation for
   * images served through Cloudflare's network. Refer to the
   * [Image Resizing documentation](https://developers.cloudflare.com/images/) for
   * more information.
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'image_resizing';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Whether the feature is enabled, disabled, or enabled in `open proxy` mode.
     */
    value?: 'on' | 'off' | 'open';
  }
}

export interface ImageResizingListResponse {
  errors?: Array<ImageResizingListResponse.Error>;

  messages?: Array<ImageResizingListResponse.Message>;

  /**
   * Image Resizing provides on-demand resizing, conversion and optimisation for
   * images served through Cloudflare's network. Refer to the
   * [Image Resizing documentation](https://developers.cloudflare.com/images/) for
   * more information.
   */
  result?: ImageResizingListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace ImageResizingListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Image Resizing provides on-demand resizing, conversion and optimisation for
   * images served through Cloudflare's network. Refer to the
   * [Image Resizing documentation](https://developers.cloudflare.com/images/) for
   * more information.
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'image_resizing';

    /**
     * Whether or not this setting can be modified for this zone (based on your
     * Cloudflare plan level).
     */
    editable?: true | false;

    /**
     * last time this setting was modified.
     */
    modified_on?: string | null;

    /**
     * Whether the feature is enabled, disabled, or enabled in `open proxy` mode.
     */
    value?: 'on' | 'off' | 'open';
  }
}

export interface ImageResizingUpdateParams {
  /**
   * Image Resizing provides on-demand resizing, conversion and optimisation for
   * images served through Cloudflare's network. Refer to the
   * [Image Resizing documentation](https://developers.cloudflare.com/images/) for
   * more information.
   */
  value: ImageResizingUpdateParams.Value;
}

export namespace ImageResizingUpdateParams {
  /**
   * Image Resizing provides on-demand resizing, conversion and optimisation for
   * images served through Cloudflare's network. Refer to the
   * [Image Resizing documentation](https://developers.cloudflare.com/images/) for
   * more information.
   */
  export interface Value {
    /**
     * ID of the zone setting.
     */
    id?: 'image_resizing';

    /**
     * Whether the feature is enabled, disabled, or enabled in `open proxy` mode.
     */
    value?: 'on' | 'off' | 'open';
  }
}

export namespace ImageResizings {
  export import ImageResizingUpdateResponse = ImageResizingsAPI.ImageResizingUpdateResponse;
  export import ImageResizingListResponse = ImageResizingsAPI.ImageResizingListResponse;
  export import ImageResizingUpdateParams = ImageResizingsAPI.ImageResizingUpdateParams;
}
