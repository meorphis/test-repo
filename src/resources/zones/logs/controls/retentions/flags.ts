// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as FlagsAPI from 'cloudflare/resources/zones/logs/controls/retentions/flags';

export class Flags extends APIResource {
  /**
   * Gets log retention flag for Logpull API.
   */
  logsReceivedGetLogRetentionFlag(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FlagLogsReceivedGetLogRetentionFlagResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/logs/control/retention/flag`, options);
  }

  /**
   * Updates log retention flag for Logpull API.
   */
  logsReceivedUpdateLogRetentionFlag(
    zoneIdentifier: string,
    body: FlagLogsReceivedUpdateLogRetentionFlagParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FlagLogsReceivedUpdateLogRetentionFlagResponse> {
    return this._client.post(`/zones/${zoneIdentifier}/logs/control/retention/flag`, { body, ...options });
  }
}

export interface FlagLogsReceivedGetLogRetentionFlagResponse {
  errors?: Array<FlagLogsReceivedGetLogRetentionFlagResponse.Error>;

  messages?: Array<FlagLogsReceivedGetLogRetentionFlagResponse.Message>;

  result?: FlagLogsReceivedGetLogRetentionFlagResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace FlagLogsReceivedGetLogRetentionFlagResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    flag?: boolean;
  }
}

export interface FlagLogsReceivedUpdateLogRetentionFlagResponse {
  errors?: Array<FlagLogsReceivedUpdateLogRetentionFlagResponse.Error>;

  messages?: Array<FlagLogsReceivedUpdateLogRetentionFlagResponse.Message>;

  result?: FlagLogsReceivedUpdateLogRetentionFlagResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace FlagLogsReceivedUpdateLogRetentionFlagResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    flag?: boolean;
  }
}

export interface FlagLogsReceivedUpdateLogRetentionFlagParams {
  /**
   * The log retention flag for Logpull API.
   */
  flag: boolean;
}

export namespace Flags {
  export import FlagLogsReceivedGetLogRetentionFlagResponse = FlagsAPI.FlagLogsReceivedGetLogRetentionFlagResponse;
  export import FlagLogsReceivedUpdateLogRetentionFlagResponse = FlagsAPI.FlagLogsReceivedUpdateLogRetentionFlagResponse;
  export import FlagLogsReceivedUpdateLogRetentionFlagParams = FlagsAPI.FlagLogsReceivedUpdateLogRetentionFlagParams;
}
