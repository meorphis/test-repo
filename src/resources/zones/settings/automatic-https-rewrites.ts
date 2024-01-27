// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as AutomaticHTTPsRewritesAPI from 'cloudflare/resources/zones/settings/automatic-https-rewrites';

export class AutomaticHTTPsRewrites extends APIResource {
  /**
   * Enable the Automatic HTTPS Rewrites feature for this zone.
   */
  update(
    zoneIdentifier: string,
    body: AutomaticHTTPsRewriteUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AutomaticHTTPsRewriteUpdateResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/settings/automatic_https_rewrites`, {
      body,
      ...options,
    });
  }

  /**
   * Enable the Automatic HTTPS Rewrites feature for this zone.
   */
  list(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AutomaticHTTPsRewriteListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/settings/automatic_https_rewrites`, options);
  }
}

export interface AutomaticHTTPsRewriteUpdateResponse {
  errors?: Array<AutomaticHTTPsRewriteUpdateResponse.Error>;

  messages?: Array<AutomaticHTTPsRewriteUpdateResponse.Message>;

  /**
   * Enable the Automatic HTTPS Rewrites feature for this zone.
   */
  result?: AutomaticHTTPsRewriteUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace AutomaticHTTPsRewriteUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Enable the Automatic HTTPS Rewrites feature for this zone.
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'automatic_https_rewrites';

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
     * Value of the zone setting. Notes: Default value depends on the zone's plan
     * level.
     */
    value?: 'on' | 'off';
  }
}

export interface AutomaticHTTPsRewriteListResponse {
  errors?: Array<AutomaticHTTPsRewriteListResponse.Error>;

  messages?: Array<AutomaticHTTPsRewriteListResponse.Message>;

  /**
   * Enable the Automatic HTTPS Rewrites feature for this zone.
   */
  result?: AutomaticHTTPsRewriteListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace AutomaticHTTPsRewriteListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Enable the Automatic HTTPS Rewrites feature for this zone.
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'automatic_https_rewrites';

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
     * Value of the zone setting. Notes: Default value depends on the zone's plan
     * level.
     */
    value?: 'on' | 'off';
  }
}

export interface AutomaticHTTPsRewriteUpdateParams {
  /**
   * Value of the zone setting. Notes: Default value depends on the zone's plan
   * level.
   */
  value: 'on' | 'off';
}

export namespace AutomaticHTTPsRewrites {
  export import AutomaticHTTPsRewriteUpdateResponse = AutomaticHTTPsRewritesAPI.AutomaticHTTPsRewriteUpdateResponse;
  export import AutomaticHTTPsRewriteListResponse = AutomaticHTTPsRewritesAPI.AutomaticHTTPsRewriteListResponse;
  export import AutomaticHTTPsRewriteUpdateParams = AutomaticHTTPsRewritesAPI.AutomaticHTTPsRewriteUpdateParams;
}
