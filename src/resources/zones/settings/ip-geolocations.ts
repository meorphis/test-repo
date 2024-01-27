// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as IPGeolocationsAPI from 'cloudflare/resources/zones/settings/ip-geolocations';

export class IPGeolocations extends APIResource {
  /**
   * Enable IP Geolocation to have Cloudflare geolocate visitors to your website and
   * pass the country code to you.
   * (https://support.cloudflare.com/hc/en-us/articles/200168236).
   */
  update(
    zoneIdentifier: string,
    body: IPGeolocationUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IPGeolocationUpdateResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/settings/ip_geolocation`, { body, ...options });
  }

  /**
   * Enable IP Geolocation to have Cloudflare geolocate visitors to your website and
   * pass the country code to you.
   * (https://support.cloudflare.com/hc/en-us/articles/200168236).
   */
  list(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<IPGeolocationListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/settings/ip_geolocation`, options);
  }
}

export interface IPGeolocationUpdateResponse {
  errors?: Array<IPGeolocationUpdateResponse.Error>;

  messages?: Array<IPGeolocationUpdateResponse.Message>;

  /**
   * Enable IP Geolocation to have Cloudflare geolocate visitors to your website and
   * pass the country code to you.
   * (https://support.cloudflare.com/hc/en-us/articles/200168236).
   */
  result?: IPGeolocationUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace IPGeolocationUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Enable IP Geolocation to have Cloudflare geolocate visitors to your website and
   * pass the country code to you.
   * (https://support.cloudflare.com/hc/en-us/articles/200168236).
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'ip_geolocation';

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

export interface IPGeolocationListResponse {
  errors?: Array<IPGeolocationListResponse.Error>;

  messages?: Array<IPGeolocationListResponse.Message>;

  /**
   * Enable IP Geolocation to have Cloudflare geolocate visitors to your website and
   * pass the country code to you.
   * (https://support.cloudflare.com/hc/en-us/articles/200168236).
   */
  result?: IPGeolocationListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace IPGeolocationListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Enable IP Geolocation to have Cloudflare geolocate visitors to your website and
   * pass the country code to you.
   * (https://support.cloudflare.com/hc/en-us/articles/200168236).
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'ip_geolocation';

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

export interface IPGeolocationUpdateParams {
  /**
   * Value of the zone setting.
   */
  value: 'on' | 'off';
}

export namespace IPGeolocations {
  export import IPGeolocationUpdateResponse = IPGeolocationsAPI.IPGeolocationUpdateResponse;
  export import IPGeolocationListResponse = IPGeolocationsAPI.IPGeolocationListResponse;
  export import IPGeolocationUpdateParams = IPGeolocationsAPI.IPGeolocationUpdateParams;
}
