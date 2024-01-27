// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as OrganizationsAPI from 'cloudflare/resources/accounts/access/organizations/organizations';
import * as RevokeUsersAPI from 'cloudflare/resources/accounts/access/organizations/revoke-users';

export class Organizations extends APIResource {
  revokeUsers: RevokeUsersAPI.RevokeUsers = new RevokeUsersAPI.RevokeUsers(this._client);

  /**
   * Sets up a Zero Trust organization for your account.
   */
  zeroTrustOrganizationCreateYourZeroTrustOrganization(
    identifier: string,
    body: OrganizationZeroTrustOrganizationCreateYourZeroTrustOrganizationParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrganizationZeroTrustOrganizationCreateYourZeroTrustOrganizationResponse> {
    return this._client.post(`/accounts/${identifier}/access/organizations`, { body, ...options });
  }

  /**
   * Returns the configuration for your Zero Trust organization.
   */
  zeroTrustOrganizationGetYourZeroTrustOrganization(
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrganizationZeroTrustOrganizationGetYourZeroTrustOrganizationResponse> {
    return this._client.get(`/accounts/${identifier}/access/organizations`, options);
  }

  /**
   * Updates the configuration for your Zero Trust organization.
   */
  zeroTrustOrganizationUpdateYourZeroTrustOrganization(
    identifier: string,
    body: OrganizationZeroTrustOrganizationUpdateYourZeroTrustOrganizationParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrganizationZeroTrustOrganizationUpdateYourZeroTrustOrganizationResponse> {
    return this._client.put(`/accounts/${identifier}/access/organizations`, { body, ...options });
  }
}

export interface OrganizationZeroTrustOrganizationCreateYourZeroTrustOrganizationResponse {
  errors?: Array<OrganizationZeroTrustOrganizationCreateYourZeroTrustOrganizationResponse.Error>;

  messages?: Array<OrganizationZeroTrustOrganizationCreateYourZeroTrustOrganizationResponse.Message>;

  result?: OrganizationZeroTrustOrganizationCreateYourZeroTrustOrganizationResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace OrganizationZeroTrustOrganizationCreateYourZeroTrustOrganizationResponse {
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

    /**
     * When set to `true`, users skip the identity provider selection step during
     * login.
     */
    auto_redirect_to_identity?: boolean;

    created_at?: string;

    custom_pages?: Result.CustomPages;

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
     * The amount of time that tokens issued for applications will be valid. Must be in
     * the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m,
     * h.
     */
    session_duration?: string;

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
    export interface CustomPages {
      /**
       * The uid of the custom page to use when a user is denied access after failing a
       * non-identity rule.
       */
      forbidden?: string;

      /**
       * The uid of the custom page to use when a user is denied access.
       */
      identity_denied?: string;
    }

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

export interface OrganizationZeroTrustOrganizationGetYourZeroTrustOrganizationResponse {
  errors?: Array<OrganizationZeroTrustOrganizationGetYourZeroTrustOrganizationResponse.Error>;

  messages?: Array<OrganizationZeroTrustOrganizationGetYourZeroTrustOrganizationResponse.Message>;

  result?: OrganizationZeroTrustOrganizationGetYourZeroTrustOrganizationResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace OrganizationZeroTrustOrganizationGetYourZeroTrustOrganizationResponse {
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

    /**
     * When set to `true`, users skip the identity provider selection step during
     * login.
     */
    auto_redirect_to_identity?: boolean;

    created_at?: string;

    custom_pages?: Result.CustomPages;

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
     * The amount of time that tokens issued for applications will be valid. Must be in
     * the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m,
     * h.
     */
    session_duration?: string;

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
    export interface CustomPages {
      /**
       * The uid of the custom page to use when a user is denied access after failing a
       * non-identity rule.
       */
      forbidden?: string;

      /**
       * The uid of the custom page to use when a user is denied access.
       */
      identity_denied?: string;
    }

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

export interface OrganizationZeroTrustOrganizationUpdateYourZeroTrustOrganizationResponse {
  errors?: Array<OrganizationZeroTrustOrganizationUpdateYourZeroTrustOrganizationResponse.Error>;

  messages?: Array<OrganizationZeroTrustOrganizationUpdateYourZeroTrustOrganizationResponse.Message>;

  result?: OrganizationZeroTrustOrganizationUpdateYourZeroTrustOrganizationResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace OrganizationZeroTrustOrganizationUpdateYourZeroTrustOrganizationResponse {
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

    /**
     * When set to `true`, users skip the identity provider selection step during
     * login.
     */
    auto_redirect_to_identity?: boolean;

    created_at?: string;

    custom_pages?: Result.CustomPages;

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
     * The amount of time that tokens issued for applications will be valid. Must be in
     * the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m,
     * h.
     */
    session_duration?: string;

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
    export interface CustomPages {
      /**
       * The uid of the custom page to use when a user is denied access after failing a
       * non-identity rule.
       */
      forbidden?: string;

      /**
       * The uid of the custom page to use when a user is denied access.
       */
      identity_denied?: string;
    }

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

export interface OrganizationZeroTrustOrganizationCreateYourZeroTrustOrganizationParams {
  /**
   * The unique subdomain assigned to your Zero Trust organization.
   */
  auth_domain: string;

  /**
   * The name of your Zero Trust organization.
   */
  name: string;

  /**
   * When set to `true`, users skip the identity provider selection step during
   * login.
   */
  auto_redirect_to_identity?: boolean;

  /**
   * Lock all settings as Read-Only in the Dashboard, regardless of user permission.
   * Updates may only be made via the API or Terraform for this account when enabled.
   */
  is_ui_read_only?: boolean;

  login_design?: OrganizationZeroTrustOrganizationCreateYourZeroTrustOrganizationParams.LoginDesign;

  /**
   * The amount of time that tokens issued for applications will be valid. Must be in
   * the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m,
   * h.
   */
  session_duration?: string;

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

export namespace OrganizationZeroTrustOrganizationCreateYourZeroTrustOrganizationParams {
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

export interface OrganizationZeroTrustOrganizationUpdateYourZeroTrustOrganizationParams {
  /**
   * The unique subdomain assigned to your Zero Trust organization.
   */
  auth_domain?: string;

  /**
   * When set to `true`, users skip the identity provider selection step during
   * login.
   */
  auto_redirect_to_identity?: boolean;

  custom_pages?: OrganizationZeroTrustOrganizationUpdateYourZeroTrustOrganizationParams.CustomPages;

  /**
   * Lock all settings as Read-Only in the Dashboard, regardless of user permission.
   * Updates may only be made via the API or Terraform for this account when enabled.
   */
  is_ui_read_only?: boolean;

  login_design?: OrganizationZeroTrustOrganizationUpdateYourZeroTrustOrganizationParams.LoginDesign;

  /**
   * The name of your Zero Trust organization.
   */
  name?: string;

  /**
   * The amount of time that tokens issued for applications will be valid. Must be in
   * the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m,
   * h.
   */
  session_duration?: string;

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

export namespace OrganizationZeroTrustOrganizationUpdateYourZeroTrustOrganizationParams {
  export interface CustomPages {
    /**
     * The uid of the custom page to use when a user is denied access after failing a
     * non-identity rule.
     */
    forbidden?: string;

    /**
     * The uid of the custom page to use when a user is denied access.
     */
    identity_denied?: string;
  }

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
  export import OrganizationZeroTrustOrganizationCreateYourZeroTrustOrganizationResponse = OrganizationsAPI.OrganizationZeroTrustOrganizationCreateYourZeroTrustOrganizationResponse;
  export import OrganizationZeroTrustOrganizationGetYourZeroTrustOrganizationResponse = OrganizationsAPI.OrganizationZeroTrustOrganizationGetYourZeroTrustOrganizationResponse;
  export import OrganizationZeroTrustOrganizationUpdateYourZeroTrustOrganizationResponse = OrganizationsAPI.OrganizationZeroTrustOrganizationUpdateYourZeroTrustOrganizationResponse;
  export import OrganizationZeroTrustOrganizationCreateYourZeroTrustOrganizationParams = OrganizationsAPI.OrganizationZeroTrustOrganizationCreateYourZeroTrustOrganizationParams;
  export import OrganizationZeroTrustOrganizationUpdateYourZeroTrustOrganizationParams = OrganizationsAPI.OrganizationZeroTrustOrganizationUpdateYourZeroTrustOrganizationParams;
  export import RevokeUsers = RevokeUsersAPI.RevokeUsers;
  export import RevokeUserZeroTrustOrganizationRevokeAllAccessTokensForAUserResponse = RevokeUsersAPI.RevokeUserZeroTrustOrganizationRevokeAllAccessTokensForAUserResponse;
  export import RevokeUserZeroTrustOrganizationRevokeAllAccessTokensForAUserParams = RevokeUsersAPI.RevokeUserZeroTrustOrganizationRevokeAllAccessTokensForAUserParams;
}
