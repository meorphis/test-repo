// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as OpportunisticOnionsAPI from 'cloudflare/resources/zones/settings/opportunistic-onions';

export class OpportunisticOnions extends APIResource {
  /**
   * Add an Alt-Svc header to all legitimate requests from Tor, allowing the
   * connection to use our onion services instead of exit nodes.
   */
  update(
    zoneIdentifier: string,
    body: OpportunisticOnionUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OpportunisticOnionUpdateResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/settings/opportunistic_onion`, { body, ...options });
  }

  /**
   * Add an Alt-Svc header to all legitimate requests from Tor, allowing the
   * connection to use our onion services instead of exit nodes.
   */
  list(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OpportunisticOnionListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/settings/opportunistic_onion`, options);
  }
}

export interface OpportunisticOnionUpdateResponse {
  errors?: Array<OpportunisticOnionUpdateResponse.Error>;

  messages?: Array<OpportunisticOnionUpdateResponse.Message>;

  /**
   * Add an Alt-Svc header to all legitimate requests from Tor, allowing the
   * connection to use our onion services instead of exit nodes.
   */
  result?: OpportunisticOnionUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace OpportunisticOnionUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Add an Alt-Svc header to all legitimate requests from Tor, allowing the
   * connection to use our onion services instead of exit nodes.
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'opportunistic_onion';

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

export interface OpportunisticOnionListResponse {
  errors?: Array<OpportunisticOnionListResponse.Error>;

  messages?: Array<OpportunisticOnionListResponse.Message>;

  /**
   * Add an Alt-Svc header to all legitimate requests from Tor, allowing the
   * connection to use our onion services instead of exit nodes.
   */
  result?: OpportunisticOnionListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace OpportunisticOnionListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Add an Alt-Svc header to all legitimate requests from Tor, allowing the
   * connection to use our onion services instead of exit nodes.
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'opportunistic_onion';

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

export interface OpportunisticOnionUpdateParams {
  /**
   * Value of the zone setting. Notes: Default value depends on the zone's plan
   * level.
   */
  value: 'on' | 'off';
}

export namespace OpportunisticOnions {
  export import OpportunisticOnionUpdateResponse = OpportunisticOnionsAPI.OpportunisticOnionUpdateResponse;
  export import OpportunisticOnionListResponse = OpportunisticOnionsAPI.OpportunisticOnionListResponse;
  export import OpportunisticOnionUpdateParams = OpportunisticOnionsAPI.OpportunisticOnionUpdateParams;
}
