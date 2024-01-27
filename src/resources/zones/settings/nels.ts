// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as NelsAPI from 'cloudflare/resources/zones/settings/nels';

export class Nels extends APIResource {
  /**
   * Automatically optimize image loading for website visitors on mobile devices.
   * Refer to our [blog post](http://blog.cloudflare.com/nel-solving-mobile-speed)
   * for more information.
   */
  update(
    zoneIdentifier: string,
    body: NelUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NelUpdateResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/settings/nel`, { body, ...options });
  }

  /**
   * Enable Network Error Logging reporting on your zone. (Beta)
   */
  list(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<NelListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/settings/nel`, options);
  }
}

export interface NelUpdateResponse {
  errors?: Array<NelUpdateResponse.Error>;

  messages?: Array<NelUpdateResponse.Message>;

  /**
   * Enable Network Error Logging reporting on your zone. (Beta)
   */
  result?: NelUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace NelUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Enable Network Error Logging reporting on your zone. (Beta)
   */
  export interface Result {
    /**
     * Zone setting identifier.
     */
    id?: 'nel';

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
    value?: Result.Value;
  }

  export namespace Result {
    /**
     * Value of the zone setting.
     */
    export interface Value {
      enabled?: boolean;
    }
  }
}

export interface NelListResponse {
  errors?: Array<NelListResponse.Error>;

  messages?: Array<NelListResponse.Message>;

  /**
   * Enable Network Error Logging reporting on your zone. (Beta)
   */
  result?: NelListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace NelListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Enable Network Error Logging reporting on your zone. (Beta)
   */
  export interface Result {
    /**
     * Zone setting identifier.
     */
    id?: 'nel';

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
    value?: Result.Value;
  }

  export namespace Result {
    /**
     * Value of the zone setting.
     */
    export interface Value {
      enabled?: boolean;
    }
  }
}

export interface NelUpdateParams {
  /**
   * Enable Network Error Logging reporting on your zone. (Beta)
   */
  value: NelUpdateParams.Value;
}

export namespace NelUpdateParams {
  /**
   * Enable Network Error Logging reporting on your zone. (Beta)
   */
  export interface Value {
    /**
     * Zone setting identifier.
     */
    id?: 'nel';

    /**
     * Value of the zone setting.
     */
    value?: Value.Value;
  }

  export namespace Value {
    /**
     * Value of the zone setting.
     */
    export interface Value {
      enabled?: boolean;
    }
  }
}

export namespace Nels {
  export import NelUpdateResponse = NelsAPI.NelUpdateResponse;
  export import NelListResponse = NelsAPI.NelListResponse;
  export import NelUpdateParams = NelsAPI.NelUpdateParams;
}
