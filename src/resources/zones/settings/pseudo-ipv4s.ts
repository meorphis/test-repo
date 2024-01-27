// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PseudoIpv4sAPI from 'cloudflare/resources/zones/settings/pseudo-ipv4s';

export class PseudoIpv4s extends APIResource {
  /**
   * Value of the Pseudo IPv4 setting.
   */
  update(
    zoneIdentifier: string,
    body: PseudoIpv4UpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PseudoIpv4UpdateResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/settings/pseudo_ipv4`, { body, ...options });
  }

  /**
   * Value of the Pseudo IPv4 setting.
   */
  list(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<PseudoIpv4ListResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/settings/pseudo_ipv4`, options);
  }
}

export interface PseudoIpv4UpdateResponse {
  errors?: Array<PseudoIpv4UpdateResponse.Error>;

  messages?: Array<PseudoIpv4UpdateResponse.Message>;

  /**
   * The value set for the Pseudo IPv4 setting.
   */
  result?: PseudoIpv4UpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace PseudoIpv4UpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * The value set for the Pseudo IPv4 setting.
   */
  export interface Result {
    /**
     * Value of the Pseudo IPv4 setting.
     */
    id?: 'pseudo_ipv4';

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
     * Value of the Pseudo IPv4 setting.
     */
    value?: 'off' | 'add_header' | 'overwrite_header';
  }
}

export interface PseudoIpv4ListResponse {
  errors?: Array<PseudoIpv4ListResponse.Error>;

  messages?: Array<PseudoIpv4ListResponse.Message>;

  /**
   * The value set for the Pseudo IPv4 setting.
   */
  result?: PseudoIpv4ListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace PseudoIpv4ListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  /**
   * The value set for the Pseudo IPv4 setting.
   */
  export interface Result {
    /**
     * Value of the Pseudo IPv4 setting.
     */
    id?: 'pseudo_ipv4';

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
     * Value of the Pseudo IPv4 setting.
     */
    value?: 'off' | 'add_header' | 'overwrite_header';
  }
}

export interface PseudoIpv4UpdateParams {
  /**
   * Value of the Pseudo IPv4 setting.
   */
  value: 'off' | 'add_header' | 'overwrite_header';
}

export namespace PseudoIpv4s {
  export import PseudoIpv4UpdateResponse = PseudoIpv4sAPI.PseudoIpv4UpdateResponse;
  export import PseudoIpv4ListResponse = PseudoIpv4sAPI.PseudoIpv4ListResponse;
  export import PseudoIpv4UpdateParams = PseudoIpv4sAPI.PseudoIpv4UpdateParams;
}
