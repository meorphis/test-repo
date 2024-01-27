// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PayloadLogsAPI from 'cloudflare/resources/accounts/dlp/payload-logs';

export class PayloadLogs extends APIResource {
  /**
   * Gets the current DLP payload log settings for this account.
   */
  dlpPayloadLogSettingsGetSettings(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PayloadLogDlpPayloadLogSettingsGetSettingsResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/dlp/payload_log`, options);
  }

  /**
   * Updates the DLP payload log settings for this account.
   */
  dlpPayloadLogSettingsUpdateSettings(
    accountIdentifier: string,
    body: PayloadLogDlpPayloadLogSettingsUpdateSettingsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PayloadLogDlpPayloadLogSettingsUpdateSettingsResponse> {
    return this._client.put(`/accounts/${accountIdentifier}/dlp/payload_log`, { body, ...options });
  }
}

export interface PayloadLogDlpPayloadLogSettingsGetSettingsResponse {
  errors?: Array<PayloadLogDlpPayloadLogSettingsGetSettingsResponse.Error>;

  messages?: Array<PayloadLogDlpPayloadLogSettingsGetSettingsResponse.Message>;

  result?: PayloadLogDlpPayloadLogSettingsGetSettingsResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace PayloadLogDlpPayloadLogSettingsGetSettingsResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    public_key: string | null;
  }
}

export interface PayloadLogDlpPayloadLogSettingsUpdateSettingsResponse {
  errors?: Array<PayloadLogDlpPayloadLogSettingsUpdateSettingsResponse.Error>;

  messages?: Array<PayloadLogDlpPayloadLogSettingsUpdateSettingsResponse.Message>;

  result?: PayloadLogDlpPayloadLogSettingsUpdateSettingsResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace PayloadLogDlpPayloadLogSettingsUpdateSettingsResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    public_key: string | null;
  }
}

export interface PayloadLogDlpPayloadLogSettingsUpdateSettingsParams {
  /**
   * The public key to use when encrypting extracted payloads, as a base64 string
   */
  public_key: string | null;
}

export namespace PayloadLogs {
  export import PayloadLogDlpPayloadLogSettingsGetSettingsResponse = PayloadLogsAPI.PayloadLogDlpPayloadLogSettingsGetSettingsResponse;
  export import PayloadLogDlpPayloadLogSettingsUpdateSettingsResponse = PayloadLogsAPI.PayloadLogDlpPayloadLogSettingsUpdateSettingsResponse;
  export import PayloadLogDlpPayloadLogSettingsUpdateSettingsParams = PayloadLogsAPI.PayloadLogDlpPayloadLogSettingsUpdateSettingsParams;
}
