// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ConfigsAPI from 'cloudflare/resources/accounts/logs/controls/cmb/configs';

export class Configs extends APIResource {
  /**
   * Deletes CMB config.
   */
  delete(accountIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<ConfigDeleteResponse> {
    return this._client.delete(`/accounts/${accountIdentifier}/logs/control/cmb/config`, options);
  }

  /**
   * Gets CMB config.
   */
  getAccountsAccountIdentifierLogsControlCmbConfig(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConfigGetAccountsAccountIdentifierLogsControlCmbConfigResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/logs/control/cmb/config`, options);
  }

  /**
   * Updates CMB config.
   */
  putAccountsAccountIdentifierLogsControlCmbConfig(
    accountIdentifier: string,
    body: ConfigPutAccountsAccountIdentifierLogsControlCmbConfigParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConfigPutAccountsAccountIdentifierLogsControlCmbConfigResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/logs/control/cmb/config`, { body, ...options });
  }
}

export interface ConfigDeleteResponse {
  errors?: Array<ConfigDeleteResponse.Error>;

  messages?: Array<ConfigDeleteResponse.Message>;

  result?: unknown | null;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ConfigDeleteResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface ConfigGetAccountsAccountIdentifierLogsControlCmbConfigResponse {
  errors?: Array<ConfigGetAccountsAccountIdentifierLogsControlCmbConfigResponse.Error>;

  messages?: Array<ConfigGetAccountsAccountIdentifierLogsControlCmbConfigResponse.Message>;

  result?: ConfigGetAccountsAccountIdentifierLogsControlCmbConfigResponse.Result | null;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ConfigGetAccountsAccountIdentifierLogsControlCmbConfigResponse {
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
     * Comma-separated list of regions.
     */
    regions?: string;
  }
}

export interface ConfigPutAccountsAccountIdentifierLogsControlCmbConfigResponse {
  errors?: Array<ConfigPutAccountsAccountIdentifierLogsControlCmbConfigResponse.Error>;

  messages?: Array<ConfigPutAccountsAccountIdentifierLogsControlCmbConfigResponse.Message>;

  result?: ConfigPutAccountsAccountIdentifierLogsControlCmbConfigResponse.Result | null;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ConfigPutAccountsAccountIdentifierLogsControlCmbConfigResponse {
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
     * Comma-separated list of regions.
     */
    regions?: string;
  }
}

export interface ConfigPutAccountsAccountIdentifierLogsControlCmbConfigParams {
  /**
   * Comma-separated list of regions.
   */
  regions?: string;
}

export namespace Configs {
  export import ConfigDeleteResponse = ConfigsAPI.ConfigDeleteResponse;
  export import ConfigGetAccountsAccountIdentifierLogsControlCmbConfigResponse = ConfigsAPI.ConfigGetAccountsAccountIdentifierLogsControlCmbConfigResponse;
  export import ConfigPutAccountsAccountIdentifierLogsControlCmbConfigResponse = ConfigsAPI.ConfigPutAccountsAccountIdentifierLogsControlCmbConfigResponse;
  export import ConfigPutAccountsAccountIdentifierLogsControlCmbConfigParams = ConfigsAPI.ConfigPutAccountsAccountIdentifierLogsControlCmbConfigParams;
}
