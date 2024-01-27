// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as EmailObfuscationsAPI from 'cloudflare/resources/zones/settings/email-obfuscations';

export class EmailObfuscations extends APIResource {
  /**
   * Encrypt email adresses on your web page from bots, while keeping them visible to
   * humans. (https://support.cloudflare.com/hc/en-us/articles/200170016).
   */
  update(
    zoneIdentifier: string,
    body: EmailObfuscationUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EmailObfuscationUpdateResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/settings/email_obfuscation`, { body, ...options });
  }

  /**
   * Encrypt email adresses on your web page from bots, while keeping them visible to
   * humans. (https://support.cloudflare.com/hc/en-us/articles/200170016).
   */
  list(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<EmailObfuscationListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/settings/email_obfuscation`, options);
  }
}

export interface EmailObfuscationUpdateResponse {
  errors?: Array<EmailObfuscationUpdateResponse.Error>;

  messages?: Array<EmailObfuscationUpdateResponse.Message>;

  /**
   * Encrypt email adresses on your web page from bots, while keeping them visible to
   * humans. (https://support.cloudflare.com/hc/en-us/articles/200170016).
   */
  result?: EmailObfuscationUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace EmailObfuscationUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Encrypt email adresses on your web page from bots, while keeping them visible to
   * humans. (https://support.cloudflare.com/hc/en-us/articles/200170016).
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'email_obfuscation';

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

export interface EmailObfuscationListResponse {
  errors?: Array<EmailObfuscationListResponse.Error>;

  messages?: Array<EmailObfuscationListResponse.Message>;

  /**
   * Encrypt email adresses on your web page from bots, while keeping them visible to
   * humans. (https://support.cloudflare.com/hc/en-us/articles/200170016).
   */
  result?: EmailObfuscationListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace EmailObfuscationListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Encrypt email adresses on your web page from bots, while keeping them visible to
   * humans. (https://support.cloudflare.com/hc/en-us/articles/200170016).
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'email_obfuscation';

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

export interface EmailObfuscationUpdateParams {
  /**
   * Value of the zone setting.
   */
  value: 'on' | 'off';
}

export namespace EmailObfuscations {
  export import EmailObfuscationUpdateResponse = EmailObfuscationsAPI.EmailObfuscationUpdateResponse;
  export import EmailObfuscationListResponse = EmailObfuscationsAPI.EmailObfuscationListResponse;
  export import EmailObfuscationUpdateParams = EmailObfuscationsAPI.EmailObfuscationUpdateParams;
}
