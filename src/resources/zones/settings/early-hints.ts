// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as EarlyHintsAPI from 'cloudflare/resources/zones/settings/early-hints';

export class EarlyHints extends APIResource {
  /**
   * When enabled, Cloudflare will attempt to speed up overall page loads by serving
   * `103` responses with `Link` headers from the final response. Refer to
   * [Early Hints](https://developers.cloudflare.com/cache/about/early-hints) for
   * more information.
   */
  update(
    zoneIdentifier: string,
    body: EarlyHintUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EarlyHintUpdateResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/settings/early_hints`, { body, ...options });
  }

  /**
   * When enabled, Cloudflare will attempt to speed up overall page loads by serving
   * `103` responses with `Link` headers from the final response. Refer to
   * [Early Hints](https://developers.cloudflare.com/cache/about/early-hints) for
   * more information.
   */
  list(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<EarlyHintListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/settings/early_hints`, options);
  }
}

export interface EarlyHintUpdateResponse {
  errors?: Array<EarlyHintUpdateResponse.Error>;

  messages?: Array<EarlyHintUpdateResponse.Message>;

  /**
   * When enabled, Cloudflare will attempt to speed up overall page loads by serving
   * `103` responses with `Link` headers from the final response. Refer to
   * [Early Hints](https://developers.cloudflare.com/cache/about/early-hints) for
   * more information.
   */
  result?: EarlyHintUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace EarlyHintUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * When enabled, Cloudflare will attempt to speed up overall page loads by serving
   * `103` responses with `Link` headers from the final response. Refer to
   * [Early Hints](https://developers.cloudflare.com/cache/about/early-hints) for
   * more information.
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'early_hints';

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
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }
}

export interface EarlyHintListResponse {
  errors?: Array<EarlyHintListResponse.Error>;

  messages?: Array<EarlyHintListResponse.Message>;

  /**
   * When enabled, Cloudflare will attempt to speed up overall page loads by serving
   * `103` responses with `Link` headers from the final response. Refer to
   * [Early Hints](https://developers.cloudflare.com/cache/about/early-hints) for
   * more information.
   */
  result?: EarlyHintListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace EarlyHintListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * When enabled, Cloudflare will attempt to speed up overall page loads by serving
   * `103` responses with `Link` headers from the final response. Refer to
   * [Early Hints](https://developers.cloudflare.com/cache/about/early-hints) for
   * more information.
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'early_hints';

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
     * Value of the zone setting.
     */
    value?: 'on' | 'off';
  }
}

export interface EarlyHintUpdateParams {
  /**
   * Value of the zone setting.
   */
  value: 'on' | 'off';
}

export namespace EarlyHints {
  export import EarlyHintUpdateResponse = EarlyHintsAPI.EarlyHintUpdateResponse;
  export import EarlyHintListResponse = EarlyHintsAPI.EarlyHintListResponse;
  export import EarlyHintUpdateParams = EarlyHintsAPI.EarlyHintUpdateParams;
}
