// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ConfigHistoryAPI from 'cloudflare/resources/zones/settings/zaraz/config-history';

export class ConfigHistory extends APIResource {
  /**
   * Gets a history of published Zaraz configurations by ID(s) for a zone.
   */
  retrieve(
    zoneIdentifier: string,
    query: ConfigHistoryRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConfigHistoryRetrieveResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/settings/zaraz/v2/history/configs`, {
      query,
      ...options,
    });
  }
}

export interface ConfigHistoryRetrieveResponse {
  errors?: Array<ConfigHistoryRetrieveResponse.Error>;

  messages?: Array<ConfigHistoryRetrieveResponse.Message>;

  /**
   * Object where keys are numericc onfiguration IDs
   */
  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace ConfigHistoryRetrieveResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface ConfigHistoryRetrieveParams {
  /**
   * Comma separated list of Zaraz configuration IDs
   */
  ids: Array<number>;
}

export namespace ConfigHistory {
  export import ConfigHistoryRetrieveResponse = ConfigHistoryAPI.ConfigHistoryRetrieveResponse;
  export import ConfigHistoryRetrieveParams = ConfigHistoryAPI.ConfigHistoryRetrieveParams;
}
