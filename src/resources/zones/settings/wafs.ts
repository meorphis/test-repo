// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as WafsAPI from 'cloudflare/resources/zones/settings/wafs';

export class Wafs extends APIResource {
  /**
   * The WAF examines HTTP requests to your website. It inspects both GET and POST
   * requests and applies rules to help filter out illegitimate traffic from
   * legitimate website visitors. The Cloudflare WAF inspects website addresses or
   * URLs to detect anything out of the ordinary. If the Cloudflare WAF determines
   * suspicious user behavior, then the WAF will 'challenge' the web visitor with a
   * page that asks them to submit a CAPTCHA successfully to continue their action.
   * If the challenge is failed, the action will be stopped. What this means is that
   * Cloudflare's WAF will block any traffic identified as illegitimate before it
   * reaches your origin web server.
   * (https://support.cloudflare.com/hc/en-us/articles/200172016).
   */
  update(
    zoneIdentifier: string,
    body: WafUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WafUpdateResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/settings/waf`, { body, ...options });
  }

  /**
   * The WAF examines HTTP requests to your website. It inspects both GET and POST
   * requests and applies rules to help filter out illegitimate traffic from
   * legitimate website visitors. The Cloudflare WAF inspects website addresses or
   * URLs to detect anything out of the ordinary. If the Cloudflare WAF determines
   * suspicious user behavior, then the WAF will 'challenge' the web visitor with a
   * page that asks them to submit a CAPTCHA successfully to continue their action.
   * If the challenge is failed, the action will be stopped. What this means is that
   * Cloudflare's WAF will block any traffic identified as illegitimate before it
   * reaches your origin web server.
   * (https://support.cloudflare.com/hc/en-us/articles/200172016).
   */
  list(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<WafListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/settings/waf`, options);
  }
}

export interface WafUpdateResponse {
  errors?: Array<WafUpdateResponse.Error>;

  messages?: Array<WafUpdateResponse.Message>;

  /**
   * The WAF examines HTTP requests to your website. It inspects both GET and POST
   * requests and applies rules to help filter out illegitimate traffic from
   * legitimate website visitors. The Cloudflare WAF inspects website addresses or
   * URLs to detect anything out of the ordinary. If the Cloudflare WAF determines
   * suspicious user behavior, then the WAF will 'challenge' the web visitor with a
   * page that asks them to submit a CAPTCHA successfully to continue their action.
   * If the challenge is failed, the action will be stopped. What this means is that
   * Cloudflare's WAF will block any traffic identified as illegitimate before it
   * reaches your origin web server.
   * (https://support.cloudflare.com/hc/en-us/articles/200172016).
   */
  result?: WafUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace WafUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * The WAF examines HTTP requests to your website. It inspects both GET and POST
   * requests and applies rules to help filter out illegitimate traffic from
   * legitimate website visitors. The Cloudflare WAF inspects website addresses or
   * URLs to detect anything out of the ordinary. If the Cloudflare WAF determines
   * suspicious user behavior, then the WAF will 'challenge' the web visitor with a
   * page that asks them to submit a CAPTCHA successfully to continue their action.
   * If the challenge is failed, the action will be stopped. What this means is that
   * Cloudflare's WAF will block any traffic identified as illegitimate before it
   * reaches your origin web server.
   * (https://support.cloudflare.com/hc/en-us/articles/200172016).
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'waf';

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

export interface WafListResponse {
  errors?: Array<WafListResponse.Error>;

  messages?: Array<WafListResponse.Message>;

  /**
   * The WAF examines HTTP requests to your website. It inspects both GET and POST
   * requests and applies rules to help filter out illegitimate traffic from
   * legitimate website visitors. The Cloudflare WAF inspects website addresses or
   * URLs to detect anything out of the ordinary. If the Cloudflare WAF determines
   * suspicious user behavior, then the WAF will 'challenge' the web visitor with a
   * page that asks them to submit a CAPTCHA successfully to continue their action.
   * If the challenge is failed, the action will be stopped. What this means is that
   * Cloudflare's WAF will block any traffic identified as illegitimate before it
   * reaches your origin web server.
   * (https://support.cloudflare.com/hc/en-us/articles/200172016).
   */
  result?: WafListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace WafListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * The WAF examines HTTP requests to your website. It inspects both GET and POST
   * requests and applies rules to help filter out illegitimate traffic from
   * legitimate website visitors. The Cloudflare WAF inspects website addresses or
   * URLs to detect anything out of the ordinary. If the Cloudflare WAF determines
   * suspicious user behavior, then the WAF will 'challenge' the web visitor with a
   * page that asks them to submit a CAPTCHA successfully to continue their action.
   * If the challenge is failed, the action will be stopped. What this means is that
   * Cloudflare's WAF will block any traffic identified as illegitimate before it
   * reaches your origin web server.
   * (https://support.cloudflare.com/hc/en-us/articles/200172016).
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'waf';

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

export interface WafUpdateParams {
  /**
   * Value of the zone setting.
   */
  value: 'on' | 'off';
}

export namespace Wafs {
  export import WafUpdateResponse = WafsAPI.WafUpdateResponse;
  export import WafListResponse = WafsAPI.WafListResponse;
  export import WafUpdateParams = WafsAPI.WafUpdateParams;
}
