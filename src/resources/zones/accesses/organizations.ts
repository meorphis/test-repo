// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as OrganizationsAPI from 'cloudflare/resources/zones/accesses/organizations';

export class Organizations extends APIResource {
  /**
   * Revokes a user's access across all applications.
   */
  revokeUser(
    identifier: unknown,
    body: OrganizationRevokeUserParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrganizationRevokeUserResponse> {
    return this._client.post(`/zones/${identifier}/access/organizations/revoke_user`, { body, ...options });
  }

  /**
   * Sets up a Zero Trust organization for your account.
   */
  zoneLevelZeroTrustOrganizationCreateYourZeroTrustOrganization(
    identifier: unknown,
    body: OrganizationZoneLevelZeroTrustOrganizationCreateYourZeroTrustOrganizationParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrganizationZoneLevelZeroTrustOrganizationCreateYourZeroTrustOrganizationResponse> {
    return this._client.post(`/zones/${identifier}/access/organizations`, { body, ...options });
  }

  /**
   * Returns the configuration for your Zero Trust organization.
   */
  zoneLevelZeroTrustOrganizationGetYourZeroTrustOrganization(
    identifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrganizationZoneLevelZeroTrustOrganizationGetYourZeroTrustOrganizationResponse> {
    return this._client.get(`/zones/${identifier}/access/organizations`, options);
  }

  /**
   * Updates the configuration for your Zero Trust organization.
   */
  zoneLevelZeroTrustOrganizationUpdateYourZeroTrustOrganization(
    identifier: unknown,
    body: OrganizationZoneLevelZeroTrustOrganizationUpdateYourZeroTrustOrganizationParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrganizationZoneLevelZeroTrustOrganizationUpdateYourZeroTrustOrganizationResponse> {
    return this._client.put(`/zones/${identifier}/access/organizations`, { body, ...options });
  }
}

export interface OrganizationRevokeUserResponse {
  result?: true | false;

  success?: true | false;
}

export interface OrganizationZoneLevelZeroTrustOrganizationCreateYourZeroTrustOrganizationResponse {
  errors?: Array<OrganizationZoneLevelZeroTrustOrganizationCreateYourZeroTrustOrganizationResponse.Error>;

  messages?: Array<OrganizationZoneLevelZeroTrustOrganizationCreateYourZeroTrustOrganizationResponse.Message>;

  result?: OrganizationZoneLevelZeroTrustOrganizationCreateYourZeroTrustOrganizationResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace OrganizationZoneLevelZeroTrustOrganizationCreateYourZeroTrustOrganizationResponse {
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
     * The unique subdomain assigned to your Zero Trust organization.
     */
    auth_domain?: string;

    created_at?: string;

    /**
     * Lock all settings as Read-Only in the Dashboard, regardless of user permission.
     * Updates may only be made via the API or Terraform for this account when enabled.
     */
    is_ui_read_only?: boolean;

    login_design?: Result.LoginDesign;

    /**
     * The name of your Zero Trust organization.
     */
    name?: string;

    /**
     * A description of the reason why the UI read only field is being toggled.
     */
    ui_read_only_toggle_reason?: string;

    updated_at?: string;

    /**
     * The amount of time a user seat is inactive before it expires. When the user seat
     * exceeds the set time of inactivity, the user is removed as an active seat and no
     * longer counts against your Teams seat count. Must be in the format `300ms` or
     * `2h45m`. Valid time units are: `ns`, `us` (or `µs`), `ms`, `s`, `m`, `h`.
     */
    user_seat_expiration_inactive_time?: string;
  }

  export namespace Result {
    export interface LoginDesign {
      /**
       * The background color on your login page.
       */
      background_color?: string;

      /**
       * The text at the bottom of your login page.
       */
      footer_text?: string;

      /**
       * The text at the top of your login page.
       */
      header_text?: string;

      /**
       * The URL of the logo on your login page.
       */
      logo_path?: string;

      /**
       * The text color on your login page.
       */
      text_color?: string;
    }
  }
}

export interface OrganizationZoneLevelZeroTrustOrganizationGetYourZeroTrustOrganizationResponse {
  errors?: Array<OrganizationZoneLevelZeroTrustOrganizationGetYourZeroTrustOrganizationResponse.Error>;

  messages?: Array<OrganizationZoneLevelZeroTrustOrganizationGetYourZeroTrustOrganizationResponse.Message>;

  result?: OrganizationZoneLevelZeroTrustOrganizationGetYourZeroTrustOrganizationResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace OrganizationZoneLevelZeroTrustOrganizationGetYourZeroTrustOrganizationResponse {
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
     * The unique subdomain assigned to your Zero Trust organization.
     */
    auth_domain?: string;

    created_at?: string;

    /**
     * Lock all settings as Read-Only in the Dashboard, regardless of user permission.
     * Updates may only be made via the API or Terraform for this account when enabled.
     */
    is_ui_read_only?: boolean;

    login_design?: Result.LoginDesign;

    /**
     * The name of your Zero Trust organization.
     */
    name?: string;

    /**
     * A description of the reason why the UI read only field is being toggled.
     */
    ui_read_only_toggle_reason?: string;

    updated_at?: string;

    /**
     * The amount of time a user seat is inactive before it expires. When the user seat
     * exceeds the set time of inactivity, the user is removed as an active seat and no
     * longer counts against your Teams seat count. Must be in the format `300ms` or
     * `2h45m`. Valid time units are: `ns`, `us` (or `µs`), `ms`, `s`, `m`, `h`.
     */
    user_seat_expiration_inactive_time?: string;
  }

  export namespace Result {
    export interface LoginDesign {
      /**
       * The background color on your login page.
       */
      background_color?: string;

      /**
       * The text at the bottom of your login page.
       */
      footer_text?: string;

      /**
       * The text at the top of your login page.
       */
      header_text?: string;

      /**
       * The URL of the logo on your login page.
       */
      logo_path?: string;

      /**
       * The text color on your login page.
       */
      text_color?: string;
    }
  }
}

export interface OrganizationZoneLevelZeroTrustOrganizationUpdateYourZeroTrustOrganizationResponse {
  errors?: Array<OrganizationZoneLevelZeroTrustOrganizationUpdateYourZeroTrustOrganizationResponse.Error>;

  messages?: Array<OrganizationZoneLevelZeroTrustOrganizationUpdateYourZeroTrustOrganizationResponse.Message>;

  result?: OrganizationZoneLevelZeroTrustOrganizationUpdateYourZeroTrustOrganizationResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace OrganizationZoneLevelZeroTrustOrganizationUpdateYourZeroTrustOrganizationResponse {
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
     * The unique subdomain assigned to your Zero Trust organization.
     */
    auth_domain?: string;

    created_at?: string;

    /**
     * Lock all settings as Read-Only in the Dashboard, regardless of user permission.
     * Updates may only be made via the API or Terraform for this account when enabled.
     */
    is_ui_read_only?: boolean;

    login_design?: Result.LoginDesign;

    /**
     * The name of your Zero Trust organization.
     */
    name?: string;

    /**
     * A description of the reason why the UI read only field is being toggled.
     */
    ui_read_only_toggle_reason?: string;

    updated_at?: string;

    /**
     * The amount of time a user seat is inactive before it expires. When the user seat
     * exceeds the set time of inactivity, the user is removed as an active seat and no
     * longer counts against your Teams seat count. Must be in the format `300ms` or
     * `2h45m`. Valid time units are: `ns`, `us` (or `µs`), `ms`, `s`, `m`, `h`.
     */
    user_seat_expiration_inactive_time?: string;
  }

  export namespace Result {
    export interface LoginDesign {
      /**
       * The background color on your login page.
       */
      background_color?: string;

      /**
       * The text at the bottom of your login page.
       */
      footer_text?: string;

      /**
       * The text at the top of your login page.
       */
      header_text?: string;

      /**
       * The URL of the logo on your login page.
       */
      logo_path?: string;

      /**
       * The text color on your login page.
       */
      text_color?: string;
    }
  }
}

export interface OrganizationRevokeUserParams {
  /**
   * The email of the user to revoke.
   */
  email: string;
}

export interface OrganizationZoneLevelZeroTrustOrganizationCreateYourZeroTrustOrganizationParams {
  /**
   * The unique subdomain assigned to your Zero Trust organization.
   */
  auth_domain: string;

  /**
   * The name of your Zero Trust organization.
   */
  name: string;

  /**
   * Lock all settings as Read-Only in the Dashboard, regardless of user permission.
   * Updates may only be made via the API or Terraform for this account when enabled.
   */
  is_ui_read_only?: boolean;

  login_design?: OrganizationZoneLevelZeroTrustOrganizationCreateYourZeroTrustOrganizationParams.LoginDesign;

  /**
   * A description of the reason why the UI read only field is being toggled.
   */
  ui_read_only_toggle_reason?: string;

  /**
   * The amount of time a user seat is inactive before it expires. When the user seat
   * exceeds the set time of inactivity, the user is removed as an active seat and no
   * longer counts against your Teams seat count. Must be in the format `300ms` or
   * `2h45m`. Valid time units are: `ns`, `us` (or `µs`), `ms`, `s`, `m`, `h`.
   */
  user_seat_expiration_inactive_time?: string;
}

export namespace OrganizationZoneLevelZeroTrustOrganizationCreateYourZeroTrustOrganizationParams {
  export interface LoginDesign {
    /**
     * The background color on your login page.
     */
    background_color?: string;

    /**
     * The text at the bottom of your login page.
     */
    footer_text?: string;

    /**
     * The text at the top of your login page.
     */
    header_text?: string;

    /**
     * The URL of the logo on your login page.
     */
    logo_path?: string;

    /**
     * The text color on your login page.
     */
    text_color?: string;
  }
}

export interface OrganizationZoneLevelZeroTrustOrganizationUpdateYourZeroTrustOrganizationParams {
  /**
   * The unique subdomain assigned to your Zero Trust organization.
   */
  auth_domain?: string;

  /**
   * Lock all settings as Read-Only in the Dashboard, regardless of user permission.
   * Updates may only be made via the API or Terraform for this account when enabled.
   */
  is_ui_read_only?: boolean;

  login_design?: OrganizationZoneLevelZeroTrustOrganizationUpdateYourZeroTrustOrganizationParams.LoginDesign;

  /**
   * The name of your Zero Trust organization.
   */
  name?: string;

  /**
   * A description of the reason why the UI read only field is being toggled.
   */
  ui_read_only_toggle_reason?: string;

  /**
   * The amount of time a user seat is inactive before it expires. When the user seat
   * exceeds the set time of inactivity, the user is removed as an active seat and no
   * longer counts against your Teams seat count. Must be in the format `300ms` or
   * `2h45m`. Valid time units are: `ns`, `us` (or `µs`), `ms`, `s`, `m`, `h`.
   */
  user_seat_expiration_inactive_time?: string;
}

export namespace OrganizationZoneLevelZeroTrustOrganizationUpdateYourZeroTrustOrganizationParams {
  export interface LoginDesign {
    /**
     * The background color on your login page.
     */
    background_color?: string;

    /**
     * The text at the bottom of your login page.
     */
    footer_text?: string;

    /**
     * The text at the top of your login page.
     */
    header_text?: string;

    /**
     * The URL of the logo on your login page.
     */
    logo_path?: string;

    /**
     * The text color on your login page.
     */
    text_color?: string;
  }
}

export namespace Organizations {
  export import OrganizationRevokeUserResponse = OrganizationsAPI.OrganizationRevokeUserResponse;
  export import OrganizationZoneLevelZeroTrustOrganizationCreateYourZeroTrustOrganizationResponse = OrganizationsAPI.OrganizationZoneLevelZeroTrustOrganizationCreateYourZeroTrustOrganizationResponse;
  export import OrganizationZoneLevelZeroTrustOrganizationGetYourZeroTrustOrganizationResponse = OrganizationsAPI.OrganizationZoneLevelZeroTrustOrganizationGetYourZeroTrustOrganizationResponse;
  export import OrganizationZoneLevelZeroTrustOrganizationUpdateYourZeroTrustOrganizationResponse = OrganizationsAPI.OrganizationZoneLevelZeroTrustOrganizationUpdateYourZeroTrustOrganizationResponse;
  export import OrganizationRevokeUserParams = OrganizationsAPI.OrganizationRevokeUserParams;
  export import OrganizationZoneLevelZeroTrustOrganizationCreateYourZeroTrustOrganizationParams = OrganizationsAPI.OrganizationZoneLevelZeroTrustOrganizationCreateYourZeroTrustOrganizationParams;
  export import OrganizationZoneLevelZeroTrustOrganizationUpdateYourZeroTrustOrganizationParams = OrganizationsAPI.OrganizationZoneLevelZeroTrustOrganizationUpdateYourZeroTrustOrganizationParams;
}
