// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ChallengeTtlsAPI from 'cloudflare/resources/zones/settings/challenge-ttls';

export class ChallengeTtls extends APIResource {
  /**
   * Specify how long a visitor is allowed access to your site after successfully
   * completing a challenge (such as a CAPTCHA). After the TTL has expired the
   * visitor will have to complete a new challenge. We recommend a 15 - 45 minute
   * setting and will attempt to honor any setting above 45 minutes.
   * (https://support.cloudflare.com/hc/en-us/articles/200170136).
   */
  update(
    zoneIdentifier: string,
    body: ChallengeTtlUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ChallengeTtlUpdateResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/settings/challenge_ttl`, { body, ...options });
  }

  /**
   * Specify how long a visitor is allowed access to your site after successfully
   * completing a challenge (such as a CAPTCHA). After the TTL has expired the
   * visitor will have to complete a new challenge. We recommend a 15 - 45 minute
   * setting and will attempt to honor any setting above 45 minutes.
   * (https://support.cloudflare.com/hc/en-us/articles/200170136).
   */
  list(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<ChallengeTtlListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/settings/challenge_ttl`, options);
  }
}

export interface ChallengeTtlUpdateResponse {
  errors?: Array<ChallengeTtlUpdateResponse.Error>;

  messages?: Array<ChallengeTtlUpdateResponse.Message>;

  /**
   * Specify how long a visitor is allowed access to your site after successfully
   * completing a challenge (such as a CAPTCHA). After the TTL has expired the
   * visitor will have to complete a new challenge. We recommend a 15 - 45 minute
   * setting and will attempt to honor any setting above 45 minutes.
   * (https://support.cloudflare.com/hc/en-us/articles/200170136).
   */
  result?: ChallengeTtlUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace ChallengeTtlUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Specify how long a visitor is allowed access to your site after successfully
   * completing a challenge (such as a CAPTCHA). After the TTL has expired the
   * visitor will have to complete a new challenge. We recommend a 15 - 45 minute
   * setting and will attempt to honor any setting above 45 minutes.
   * (https://support.cloudflare.com/hc/en-us/articles/200170136).
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'challenge_ttl';

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
    value?:
      | 300
      | 900
      | 1800
      | 2700
      | 3600
      | 7200
      | 10800
      | 14400
      | 28800
      | 57600
      | 86400
      | 604800
      | 2592000
      | 31536000;
  }
}

export interface ChallengeTtlListResponse {
  errors?: Array<ChallengeTtlListResponse.Error>;

  messages?: Array<ChallengeTtlListResponse.Message>;

  /**
   * Specify how long a visitor is allowed access to your site after successfully
   * completing a challenge (such as a CAPTCHA). After the TTL has expired the
   * visitor will have to complete a new challenge. We recommend a 15 - 45 minute
   * setting and will attempt to honor any setting above 45 minutes.
   * (https://support.cloudflare.com/hc/en-us/articles/200170136).
   */
  result?: ChallengeTtlListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace ChallengeTtlListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Specify how long a visitor is allowed access to your site after successfully
   * completing a challenge (such as a CAPTCHA). After the TTL has expired the
   * visitor will have to complete a new challenge. We recommend a 15 - 45 minute
   * setting and will attempt to honor any setting above 45 minutes.
   * (https://support.cloudflare.com/hc/en-us/articles/200170136).
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'challenge_ttl';

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
    value?:
      | 300
      | 900
      | 1800
      | 2700
      | 3600
      | 7200
      | 10800
      | 14400
      | 28800
      | 57600
      | 86400
      | 604800
      | 2592000
      | 31536000;
  }
}

export interface ChallengeTtlUpdateParams {
  /**
   * Value of the zone setting.
   */
  value:
    | 300
    | 900
    | 1800
    | 2700
    | 3600
    | 7200
    | 10800
    | 14400
    | 28800
    | 57600
    | 86400
    | 604800
    | 2592000
    | 31536000;
}

export namespace ChallengeTtls {
  export import ChallengeTtlUpdateResponse = ChallengeTtlsAPI.ChallengeTtlUpdateResponse;
  export import ChallengeTtlListResponse = ChallengeTtlsAPI.ChallengeTtlListResponse;
  export import ChallengeTtlUpdateParams = ChallengeTtlsAPI.ChallengeTtlUpdateParams;
}
