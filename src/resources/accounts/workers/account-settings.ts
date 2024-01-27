// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as AccountSettingsAPI from 'cloudflare/resources/accounts/workers/account-settings';

export class AccountSettings extends APIResource {
  /**
   * Creates Worker account settings for an account.
   */
  workerAccountSettingsCreateWorkerAccountSettings(
    accountIdentifier: string,
    body: AccountSettingWorkerAccountSettingsCreateWorkerAccountSettingsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountSettingWorkerAccountSettingsCreateWorkerAccountSettingsResponse> {
    return this._client.put(`/accounts/${accountIdentifier}/workers/account-settings`, { body, ...options });
  }

  /**
   * Fetches Worker account settings for an account.
   */
  workerAccountSettingsFetchWorkerAccountSettings(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountSettingWorkerAccountSettingsFetchWorkerAccountSettingsResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/workers/account-settings`, options);
  }
}

export interface AccountSettingWorkerAccountSettingsCreateWorkerAccountSettingsResponse {
  errors?: Array<AccountSettingWorkerAccountSettingsCreateWorkerAccountSettingsResponse.Error>;

  messages?: Array<AccountSettingWorkerAccountSettingsCreateWorkerAccountSettingsResponse.Message>;

  result?: AccountSettingWorkerAccountSettingsCreateWorkerAccountSettingsResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace AccountSettingWorkerAccountSettingsCreateWorkerAccountSettingsResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    default_usage_model?: unknown;

    green_compute?: unknown;
  }
}

export interface AccountSettingWorkerAccountSettingsFetchWorkerAccountSettingsResponse {
  errors?: Array<AccountSettingWorkerAccountSettingsFetchWorkerAccountSettingsResponse.Error>;

  messages?: Array<AccountSettingWorkerAccountSettingsFetchWorkerAccountSettingsResponse.Message>;

  result?: AccountSettingWorkerAccountSettingsFetchWorkerAccountSettingsResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace AccountSettingWorkerAccountSettingsFetchWorkerAccountSettingsResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    default_usage_model?: unknown;

    green_compute?: unknown;
  }
}

export type AccountSettingWorkerAccountSettingsCreateWorkerAccountSettingsParams = unknown;

export namespace AccountSettings {
  export import AccountSettingWorkerAccountSettingsCreateWorkerAccountSettingsResponse = AccountSettingsAPI.AccountSettingWorkerAccountSettingsCreateWorkerAccountSettingsResponse;
  export import AccountSettingWorkerAccountSettingsFetchWorkerAccountSettingsResponse = AccountSettingsAPI.AccountSettingWorkerAccountSettingsFetchWorkerAccountSettingsResponse;
  export import AccountSettingWorkerAccountSettingsCreateWorkerAccountSettingsParams = AccountSettingsAPI.AccountSettingWorkerAccountSettingsCreateWorkerAccountSettingsParams;
}
