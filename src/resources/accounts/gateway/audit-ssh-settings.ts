// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as AuditSSHSettingsAPI from 'cloudflare/resources/accounts/gateway/audit-ssh-settings';

export class AuditSSHSettings extends APIResource {
  /**
   * Get all Zero Trust Audit SSH settings for an account.
   */
  retrieve(
    identifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AuditSSHSettingRetrieveResponse> {
    return this._client.get(`/accounts/${identifier}/gateway/audit_ssh_settings`, options);
  }

  /**
   * Updates Zero Trust Audit SSH settings.
   */
  update(
    identifier: unknown,
    body: AuditSSHSettingUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AuditSSHSettingUpdateResponse> {
    return this._client.put(`/accounts/${identifier}/gateway/audit_ssh_settings`, { body, ...options });
  }
}

export interface AuditSSHSettingRetrieveResponse {
  errors?: Array<AuditSSHSettingRetrieveResponse.Error>;

  messages?: Array<AuditSSHSettingRetrieveResponse.Message>;

  result?: AuditSSHSettingRetrieveResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace AuditSSHSettingRetrieveResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    created_at?: string;

    /**
     * SSH encryption public key
     */
    public_key?: string;

    /**
     * Seed ID
     */
    seed_id?: string;

    updated_at?: string;
  }
}

export interface AuditSSHSettingUpdateResponse {
  errors?: Array<AuditSSHSettingUpdateResponse.Error>;

  messages?: Array<AuditSSHSettingUpdateResponse.Message>;

  result?: AuditSSHSettingUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace AuditSSHSettingUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    created_at?: string;

    /**
     * SSH encryption public key
     */
    public_key?: string;

    /**
     * Seed ID
     */
    seed_id?: string;

    updated_at?: string;
  }
}

export interface AuditSSHSettingUpdateParams {
  /**
   * SSH encryption public key
   */
  public_key: string;

  /**
   * Seed ID
   */
  seed_id?: string;
}

export namespace AuditSSHSettings {
  export import AuditSSHSettingRetrieveResponse = AuditSSHSettingsAPI.AuditSSHSettingRetrieveResponse;
  export import AuditSSHSettingUpdateResponse = AuditSSHSettingsAPI.AuditSSHSettingUpdateResponse;
  export import AuditSSHSettingUpdateParams = AuditSSHSettingsAPI.AuditSSHSettingUpdateParams;
}
