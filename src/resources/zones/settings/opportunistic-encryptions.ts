// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as OpportunisticEncryptionsAPI from 'cloudflare/resources/zones/settings/opportunistic-encryptions';

export class OpportunisticEncryptions extends APIResource {
  /**
   * Changes Opportunistic Encryption setting.
   */
  update(
    zoneIdentifier: string,
    body: OpportunisticEncryptionUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OpportunisticEncryptionUpdateResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/settings/opportunistic_encryption`, {
      body,
      ...options,
    });
  }

  /**
   * Gets Opportunistic Encryption setting.
   */
  list(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OpportunisticEncryptionListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/settings/opportunistic_encryption`, options);
  }
}

export interface OpportunisticEncryptionUpdateResponse {
  errors?: Array<OpportunisticEncryptionUpdateResponse.Error>;

  messages?: Array<OpportunisticEncryptionUpdateResponse.Message>;

  /**
   * Enables the Opportunistic Encryption feature for a zone.
   */
  result?: OpportunisticEncryptionUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace OpportunisticEncryptionUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Enables the Opportunistic Encryption feature for a zone.
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'opportunistic_encryption';

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

export interface OpportunisticEncryptionListResponse {
  errors?: Array<OpportunisticEncryptionListResponse.Error>;

  messages?: Array<OpportunisticEncryptionListResponse.Message>;

  /**
   * Enables the Opportunistic Encryption feature for a zone.
   */
  result?: OpportunisticEncryptionListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace OpportunisticEncryptionListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * Enables the Opportunistic Encryption feature for a zone.
   */
  export interface Result {
    /**
     * ID of the zone setting.
     */
    id?: 'opportunistic_encryption';

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

export interface OpportunisticEncryptionUpdateParams {
  /**
   * Value of the zone setting. Notes: Default value depends on the zone's plan
   * level.
   */
  value: 'on' | 'off';
}

export namespace OpportunisticEncryptions {
  export import OpportunisticEncryptionUpdateResponse = OpportunisticEncryptionsAPI.OpportunisticEncryptionUpdateResponse;
  export import OpportunisticEncryptionListResponse = OpportunisticEncryptionsAPI.OpportunisticEncryptionListResponse;
  export import OpportunisticEncryptionUpdateParams = OpportunisticEncryptionsAPI.OpportunisticEncryptionUpdateParams;
}
