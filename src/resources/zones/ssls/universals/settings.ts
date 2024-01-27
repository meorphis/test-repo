// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SettingsAPI from 'cloudflare/resources/zones/ssls/universals/settings';

export class Settings extends APIResource {
  /**
   * Patch Universal SSL Settings for a Zone.
   */
  universalSslSettingsForAZoneEditUniversalSslSettings(
    zoneIdentifier: string,
    body: SettingUniversalSslSettingsForAZoneEditUniversalSslSettingsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SettingUniversalSslSettingsForAZoneEditUniversalSslSettingsResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/ssl/universal/settings`, { body, ...options });
  }

  /**
   * Get Universal SSL Settings for a Zone.
   */
  universalSslSettingsForAZoneUniversalSslSettingsDetails(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SettingUniversalSslSettingsForAZoneUniversalSslSettingsDetailsResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/ssl/universal/settings`, options);
  }
}

export interface SettingUniversalSslSettingsForAZoneEditUniversalSslSettingsResponse {
  errors?: Array<SettingUniversalSslSettingsForAZoneEditUniversalSslSettingsResponse.Error>;

  messages?: Array<SettingUniversalSslSettingsForAZoneEditUniversalSslSettingsResponse.Message>;

  result?: SettingUniversalSslSettingsForAZoneEditUniversalSslSettingsResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace SettingUniversalSslSettingsForAZoneEditUniversalSslSettingsResponse {
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
     * Disabling Universal SSL removes any currently active Universal SSL certificates
     * for your zone from the edge and prevents any future Universal SSL certificates
     * from being ordered. If there are no advanced certificates or custom certificates
     * uploaded for the domain, visitors will be unable to access the domain over
     * HTTPS.
     *
     * By disabling Universal SSL, you understand that the following Cloudflare
     * settings and preferences will result in visitors being unable to visit your
     * domain unless you have uploaded a custom certificate or purchased an advanced
     * certificate.
     *
     * - HSTS
     * - Always Use HTTPS
     * - Opportunistic Encryption
     * - Onion Routing
     * - Any Page Rules redirecting traffic to HTTPS
     *
     * Similarly, any HTTP redirect to HTTPS at the origin while the Cloudflare proxy
     * is enabled will result in users being unable to visit your site without a valid
     * certificate at Cloudflare's edge.
     *
     * If you do not have a valid custom or advanced certificate at Cloudflare's edge
     * and are unsure if any of the above Cloudflare settings are enabled, or if any
     * HTTP redirects exist at your origin, we advise leaving Universal SSL enabled for
     * your domain.
     */
    enabled?: boolean;
  }
}

export interface SettingUniversalSslSettingsForAZoneUniversalSslSettingsDetailsResponse {
  errors?: Array<SettingUniversalSslSettingsForAZoneUniversalSslSettingsDetailsResponse.Error>;

  messages?: Array<SettingUniversalSslSettingsForAZoneUniversalSslSettingsDetailsResponse.Message>;

  result?: SettingUniversalSslSettingsForAZoneUniversalSslSettingsDetailsResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace SettingUniversalSslSettingsForAZoneUniversalSslSettingsDetailsResponse {
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
     * Disabling Universal SSL removes any currently active Universal SSL certificates
     * for your zone from the edge and prevents any future Universal SSL certificates
     * from being ordered. If there are no advanced certificates or custom certificates
     * uploaded for the domain, visitors will be unable to access the domain over
     * HTTPS.
     *
     * By disabling Universal SSL, you understand that the following Cloudflare
     * settings and preferences will result in visitors being unable to visit your
     * domain unless you have uploaded a custom certificate or purchased an advanced
     * certificate.
     *
     * - HSTS
     * - Always Use HTTPS
     * - Opportunistic Encryption
     * - Onion Routing
     * - Any Page Rules redirecting traffic to HTTPS
     *
     * Similarly, any HTTP redirect to HTTPS at the origin while the Cloudflare proxy
     * is enabled will result in users being unable to visit your site without a valid
     * certificate at Cloudflare's edge.
     *
     * If you do not have a valid custom or advanced certificate at Cloudflare's edge
     * and are unsure if any of the above Cloudflare settings are enabled, or if any
     * HTTP redirects exist at your origin, we advise leaving Universal SSL enabled for
     * your domain.
     */
    enabled?: boolean;
  }
}

export interface SettingUniversalSslSettingsForAZoneEditUniversalSslSettingsParams {
  /**
   * Disabling Universal SSL removes any currently active Universal SSL certificates
   * for your zone from the edge and prevents any future Universal SSL certificates
   * from being ordered. If there are no advanced certificates or custom certificates
   * uploaded for the domain, visitors will be unable to access the domain over
   * HTTPS.
   *
   * By disabling Universal SSL, you understand that the following Cloudflare
   * settings and preferences will result in visitors being unable to visit your
   * domain unless you have uploaded a custom certificate or purchased an advanced
   * certificate.
   *
   * - HSTS
   * - Always Use HTTPS
   * - Opportunistic Encryption
   * - Onion Routing
   * - Any Page Rules redirecting traffic to HTTPS
   *
   * Similarly, any HTTP redirect to HTTPS at the origin while the Cloudflare proxy
   * is enabled will result in users being unable to visit your site without a valid
   * certificate at Cloudflare's edge.
   *
   * If you do not have a valid custom or advanced certificate at Cloudflare's edge
   * and are unsure if any of the above Cloudflare settings are enabled, or if any
   * HTTP redirects exist at your origin, we advise leaving Universal SSL enabled for
   * your domain.
   */
  enabled?: boolean;
}

export namespace Settings {
  export import SettingUniversalSslSettingsForAZoneEditUniversalSslSettingsResponse = SettingsAPI.SettingUniversalSslSettingsForAZoneEditUniversalSslSettingsResponse;
  export import SettingUniversalSslSettingsForAZoneUniversalSslSettingsDetailsResponse = SettingsAPI.SettingUniversalSslSettingsForAZoneUniversalSslSettingsDetailsResponse;
  export import SettingUniversalSslSettingsForAZoneEditUniversalSslSettingsParams = SettingsAPI.SettingUniversalSslSettingsForAZoneEditUniversalSslSettingsParams;
}
