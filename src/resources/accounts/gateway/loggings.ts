// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as LoggingsAPI from 'cloudflare/resources/accounts/gateway/loggings';

export class Loggings extends APIResource {
  /**
   * Fetches the current logging settings for Zero Trust account.
   */
  zeroTrustAccountsGetLoggingSettingsForTheZeroTrustAccount(
    identifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LoggingZeroTrustAccountsGetLoggingSettingsForTheZeroTrustAccountResponse> {
    return this._client.get(`/accounts/${identifier}/gateway/logging`, options);
  }

  /**
   * Updates logging settings for the current Zero Trust account.
   */
  zeroTrustAccountsUpdateLoggingSettingsForTheZeroTrustAccount(
    identifier: unknown,
    body: LoggingZeroTrustAccountsUpdateLoggingSettingsForTheZeroTrustAccountParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LoggingZeroTrustAccountsUpdateLoggingSettingsForTheZeroTrustAccountResponse> {
    return this._client.put(`/accounts/${identifier}/gateway/logging`, { body, ...options });
  }
}

export interface LoggingZeroTrustAccountsGetLoggingSettingsForTheZeroTrustAccountResponse {
  errors?: Array<LoggingZeroTrustAccountsGetLoggingSettingsForTheZeroTrustAccountResponse.Error>;

  messages?: Array<LoggingZeroTrustAccountsGetLoggingSettingsForTheZeroTrustAccountResponse.Message>;

  result?: LoggingZeroTrustAccountsGetLoggingSettingsForTheZeroTrustAccountResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace LoggingZeroTrustAccountsGetLoggingSettingsForTheZeroTrustAccountResponse {
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
     * Redact personally identifiable information from activity logging (PII fields
     * are: source IP, user email, user ID, device ID, URL, referrer, user agent).
     */
    redact_pii?: boolean;

    /**
     * Logging settings by rule type.
     */
    settings_by_rule_type?: Result.SettingsByRuleType;
  }

  export namespace Result {
    /**
     * Logging settings by rule type.
     */
    export interface SettingsByRuleType {
      /**
       * Logging settings for DNS firewall.
       */
      dns?: unknown;

      /**
       * Logging settings for HTTP/HTTPS firewall.
       */
      http?: unknown;

      /**
       * Logging settings for Network firewall.
       */
      l4?: unknown;
    }
  }
}

export interface LoggingZeroTrustAccountsUpdateLoggingSettingsForTheZeroTrustAccountResponse {
  errors?: Array<LoggingZeroTrustAccountsUpdateLoggingSettingsForTheZeroTrustAccountResponse.Error>;

  messages?: Array<LoggingZeroTrustAccountsUpdateLoggingSettingsForTheZeroTrustAccountResponse.Message>;

  result?: LoggingZeroTrustAccountsUpdateLoggingSettingsForTheZeroTrustAccountResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace LoggingZeroTrustAccountsUpdateLoggingSettingsForTheZeroTrustAccountResponse {
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
     * Redact personally identifiable information from activity logging (PII fields
     * are: source IP, user email, user ID, device ID, URL, referrer, user agent).
     */
    redact_pii?: boolean;

    /**
     * Logging settings by rule type.
     */
    settings_by_rule_type?: Result.SettingsByRuleType;
  }

  export namespace Result {
    /**
     * Logging settings by rule type.
     */
    export interface SettingsByRuleType {
      /**
       * Logging settings for DNS firewall.
       */
      dns?: unknown;

      /**
       * Logging settings for HTTP/HTTPS firewall.
       */
      http?: unknown;

      /**
       * Logging settings for Network firewall.
       */
      l4?: unknown;
    }
  }
}

export interface LoggingZeroTrustAccountsUpdateLoggingSettingsForTheZeroTrustAccountParams {
  /**
   * Redact personally identifiable information from activity logging (PII fields
   * are: source IP, user email, user ID, device ID, URL, referrer, user agent).
   */
  redact_pii?: boolean;

  /**
   * Logging settings by rule type.
   */
  settings_by_rule_type?: LoggingZeroTrustAccountsUpdateLoggingSettingsForTheZeroTrustAccountParams.SettingsByRuleType;
}

export namespace LoggingZeroTrustAccountsUpdateLoggingSettingsForTheZeroTrustAccountParams {
  /**
   * Logging settings by rule type.
   */
  export interface SettingsByRuleType {
    /**
     * Logging settings for DNS firewall.
     */
    dns?: unknown;

    /**
     * Logging settings for HTTP/HTTPS firewall.
     */
    http?: unknown;

    /**
     * Logging settings for Network firewall.
     */
    l4?: unknown;
  }
}

export namespace Loggings {
  export import LoggingZeroTrustAccountsGetLoggingSettingsForTheZeroTrustAccountResponse = LoggingsAPI.LoggingZeroTrustAccountsGetLoggingSettingsForTheZeroTrustAccountResponse;
  export import LoggingZeroTrustAccountsUpdateLoggingSettingsForTheZeroTrustAccountResponse = LoggingsAPI.LoggingZeroTrustAccountsUpdateLoggingSettingsForTheZeroTrustAccountResponse;
  export import LoggingZeroTrustAccountsUpdateLoggingSettingsForTheZeroTrustAccountParams = LoggingsAPI.LoggingZeroTrustAccountsUpdateLoggingSettingsForTheZeroTrustAccountParams;
}
