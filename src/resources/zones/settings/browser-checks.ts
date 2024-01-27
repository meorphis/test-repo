// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as BrowserChecksAPI from 'cloudflare/resources/zones/settings/browser-checks';

export class BrowserChecks extends APIResource {
  /**
   * Browser Integrity Check is similar to Bad Behavior and looks for common HTTP
   * headers abused most commonly by spammers and denies access to your page. It will
   * also challenge visitors that do not have a user agent or a non standard user
   * agent (also commonly used by abuse bots, crawlers or visitors).
   * (https://support.cloudflare.com/hc/en-us/articles/200170086).
   */
  update(
    zoneIdentifier: string,
    body: BrowserCheckUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BrowserCheckUpdateResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/settings/browser_check`, { body, ...options });
  }

  /**
   * Browser Integrity Check is similar to Bad Behavior and looks for common HTTP
   * headers abused most commonly by spammers and denies access to your page. It will
   * also challenge visitors that do not have a user agent or a non standard user
   * agent (also commonly used by abuse bots, crawlers or visitors).
   * (https://support.cloudflare.com/hc/en-us/articles/200170086).
   */
  list(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<BrowserCheckListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/settings/browser_check`, options);
  }
}

export interface BrowserCheckUpdateResponse {
  errors?: Array<BrowserCheckUpdateResponse.Error>;

  messages?: Array<BrowserCheckUpdateResponse.Message>;

  /**
   * Browser Integrity Check is similar to Bad Behavior and looks for common HTTP
   * headers abused most commonly by spammers and denies access to your page. It will
   * also challenge visitors that do not have a user agent or a non standard user
   * agent (also commonly used by abuse bots, crawlers or visitors).
   * (https://support.cloudflare.com/hc/en-us/articles/200170086).
   */
  result?: BrowserCheckUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace BrowserCheckUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Browser Integrity Check is similar to Bad Behavior and looks for common HTTP
   * headers abused most commonly by spammers and denies access to your page. It will
   * also challenge visitors that do not have a user agent or a non standard user
   * agent (also commonly used by abuse bots, crawlers or visitors).
   * (https://support.cloudflare.com/hc/en-us/articles/200170086).
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'browser_check';

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

export interface BrowserCheckListResponse {
  errors?: Array<BrowserCheckListResponse.Error>;

  messages?: Array<BrowserCheckListResponse.Message>;

  /**
   * Browser Integrity Check is similar to Bad Behavior and looks for common HTTP
   * headers abused most commonly by spammers and denies access to your page. It will
   * also challenge visitors that do not have a user agent or a non standard user
   * agent (also commonly used by abuse bots, crawlers or visitors).
   * (https://support.cloudflare.com/hc/en-us/articles/200170086).
   */
  result?: BrowserCheckListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace BrowserCheckListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Browser Integrity Check is similar to Bad Behavior and looks for common HTTP
   * headers abused most commonly by spammers and denies access to your page. It will
   * also challenge visitors that do not have a user agent or a non standard user
   * agent (also commonly used by abuse bots, crawlers or visitors).
   * (https://support.cloudflare.com/hc/en-us/articles/200170086).
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'browser_check';

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

export interface BrowserCheckUpdateParams {
  /**
   * Value of the zone setting.
   */
  value: 'on' | 'off';
}

export namespace BrowserChecks {
  export import BrowserCheckUpdateResponse = BrowserChecksAPI.BrowserCheckUpdateResponse;
  export import BrowserCheckListResponse = BrowserChecksAPI.BrowserCheckListResponse;
  export import BrowserCheckUpdateParams = BrowserChecksAPI.BrowserCheckUpdateParams;
}
