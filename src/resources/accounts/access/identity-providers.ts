// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as IdentityProvidersAPI from 'cloudflare/resources/accounts/access/identity-providers';

export class IdentityProviders extends APIResource {
  /**
   * Fetches a configured identity provider.
   */
  retrieve(
    identifier: string,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IdentityProviderRetrieveResponse> {
    return this._client.get(`/accounts/${identifier}/access/identity_providers/${uuid}`, options);
  }

  /**
   * Updates a configured identity provider.
   */
  update(
    identifier: string,
    uuid: string,
    body: IdentityProviderUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IdentityProviderUpdateResponse> {
    return this._client.put(`/accounts/${identifier}/access/identity_providers/${uuid}`, {
      body,
      ...options,
    });
  }

  /**
   * Deletes an identity provider from Access.
   */
  delete(
    identifier: string,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IdentityProviderDeleteResponse> {
    return this._client.delete(`/accounts/${identifier}/access/identity_providers/${uuid}`, options);
  }

  /**
   * Adds a new identity provider to Access.
   */
  accessIdentityProvidersAddAnAccessIdentityProvider(
    identifier: string,
    body: IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderResponse> {
    return this._client.post(`/accounts/${identifier}/access/identity_providers`, { body, ...options });
  }

  /**
   * Lists all configured identity providers.
   */
  accessIdentityProvidersListAccessIdentityProviders(
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IdentityProviderAccessIdentityProvidersListAccessIdentityProvidersResponse> {
    return this._client.get(`/accounts/${identifier}/access/identity_providers`, options);
  }
}

export interface IdentityProviderRetrieveResponse {
  errors?: Array<IdentityProviderRetrieveResponse.Error>;

  messages?: Array<IdentityProviderRetrieveResponse.Message>;

  result?:
    | IdentityProviderRetrieveResponse.PajwohLqAzureAd
    | IdentityProviderRetrieveResponse.PajwohLqCentrify
    | IdentityProviderRetrieveResponse.PajwohLqFacebook
    | IdentityProviderRetrieveResponse.PajwohLqGitHub
    | IdentityProviderRetrieveResponse.PajwohLqGoogle
    | IdentityProviderRetrieveResponse.PajwohLqGoogleApps
    | IdentityProviderRetrieveResponse.PajwohLqLinkedin
    | IdentityProviderRetrieveResponse.PajwohLqOidc
    | IdentityProviderRetrieveResponse.PajwohLqOkta
    | IdentityProviderRetrieveResponse.PajwohLqOnelogin
    | IdentityProviderRetrieveResponse.PajwohLqPingone
    | IdentityProviderRetrieveResponse.PajwohLqSaml
    | IdentityProviderRetrieveResponse.PajwohLqYandex
    | IdentityProviderRetrieveResponse.PajwohLqOnetimepin;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace IdentityProviderRetrieveResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface PajwohLqAzureAd {
    /**
     * UUID
     */
    id?: string;

    config?: PajwohLqAzureAd.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: PajwohLqAzureAd.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqAzureAd {
    export interface Config {
      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * Should Cloudflare try to load authentication contexts from your account
       */
      conditional_access_enabled?: boolean;

      /**
       * Your Azure directory uuid
       */
      directory_id?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;

      /**
       * Should Cloudflare try to load groups from your account
       */
      support_groups?: boolean;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqCentrify {
    /**
     * UUID
     */
    id?: string;

    config?: PajwohLqCentrify.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: PajwohLqCentrify.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqCentrify {
    export interface Config {
      /**
       * Your centrify account url
       */
      centrify_account?: string;

      /**
       * Your centrify app id
       */
      centrify_app_id?: string;

      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqFacebook {
    /**
     * UUID
     */
    id?: string;

    config?: PajwohLqFacebook.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: PajwohLqFacebook.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqFacebook {
    export interface Config {
      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqGitHub {
    /**
     * UUID
     */
    id?: string;

    config?: PajwohLqGitHub.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: PajwohLqGitHub.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqGitHub {
    export interface Config {
      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqGoogle {
    /**
     * UUID
     */
    id?: string;

    config?: PajwohLqGoogle.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: PajwohLqGoogle.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqGoogle {
    export interface Config {
      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqGoogleApps {
    /**
     * UUID
     */
    id?: string;

    config?: PajwohLqGoogleApps.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: PajwohLqGoogleApps.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqGoogleApps {
    export interface Config {
      /**
       * Your companies TLD
       */
      apps_domain?: string;

      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqLinkedin {
    /**
     * UUID
     */
    id?: string;

    config?: PajwohLqLinkedin.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: PajwohLqLinkedin.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqLinkedin {
    export interface Config {
      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqOidc {
    /**
     * UUID
     */
    id?: string;

    config?: PajwohLqOidc.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: PajwohLqOidc.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqOidc {
    export interface Config {
      /**
       * The authorization_endpoint URL of your IdP
       */
      auth_url?: string;

      /**
       * The jwks_uri endpoint of your IdP to allow the IdP keys to sign the tokens
       */
      certs_url?: string;

      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;

      /**
       * OAuth scopes
       */
      scopes?: Array<string>;

      /**
       * The token_endpoint URL of your IdP
       */
      token_url?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqOkta {
    /**
     * UUID
     */
    id?: string;

    config?: PajwohLqOkta.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: PajwohLqOkta.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqOkta {
    export interface Config {
      /**
       * Your okta authorization server id
       */
      authorization_server_id?: string;

      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;

      /**
       * Your okta account url
       */
      okta_account?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqOnelogin {
    /**
     * UUID
     */
    id?: string;

    config?: PajwohLqOnelogin.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: PajwohLqOnelogin.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqOnelogin {
    export interface Config {
      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;

      /**
       * Your OneLogin account url
       */
      onelogin_account?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqPingone {
    /**
     * UUID
     */
    id?: string;

    config?: PajwohLqPingone.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: PajwohLqPingone.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqPingone {
    export interface Config {
      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;

      /**
       * Your PingOne environment identifier
       */
      ping_env_id?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqSaml {
    /**
     * UUID
     */
    id?: string;

    config?: PajwohLqSaml.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: PajwohLqSaml.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqSaml {
    export interface Config {
      /**
       * A list of SAML attribute names that will be added to your signed JWT token and
       * can be used in SAML policy rules.
       */
      attributes?: Array<string>;

      /**
       * The attribute name for email in the SAML response.
       */
      email_attribute_name?: string;

      /**
       * Add a list of attribute names that will be returned in the response header from
       * the Access callback.
       */
      header_attributes?: Array<Config.HeaderAttribute>;

      /**
       * X509 certificate to verify the signature in the SAML authentication response
       */
      idp_public_certs?: Array<string>;

      /**
       * IdP Entity ID or Issuer URL
       */
      issuer_url?: string;

      /**
       * Sign the SAML authentication request with Access credentials. To verify the
       * signature, use the public key from the Access certs endpoints.
       */
      sign_request?: boolean;

      /**
       * URL to send the SAML authentication requests to
       */
      sso_target_url?: string;
    }

    export namespace Config {
      export interface HeaderAttribute {
        /**
         * attribute name from the IDP
         */
        attribute_name?: string;

        /**
         * header that will be added on the request to the origin
         */
        header_name?: string;
      }
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqYandex {
    /**
     * UUID
     */
    id?: string;

    config?: PajwohLqYandex.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: PajwohLqYandex.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqYandex {
    export interface Config {
      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqOnetimepin {
    /**
     * UUID
     */
    id?: string;

    config?: unknown;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: PajwohLqOnetimepin.ScimConfig;

    type?: 'onetimepin';
  }

  export namespace PajwohLqOnetimepin {
    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }
}

export interface IdentityProviderUpdateResponse {
  errors?: Array<IdentityProviderUpdateResponse.Error>;

  messages?: Array<IdentityProviderUpdateResponse.Message>;

  result?:
    | IdentityProviderUpdateResponse.PajwohLqAzureAd
    | IdentityProviderUpdateResponse.PajwohLqCentrify
    | IdentityProviderUpdateResponse.PajwohLqFacebook
    | IdentityProviderUpdateResponse.PajwohLqGitHub
    | IdentityProviderUpdateResponse.PajwohLqGoogle
    | IdentityProviderUpdateResponse.PajwohLqGoogleApps
    | IdentityProviderUpdateResponse.PajwohLqLinkedin
    | IdentityProviderUpdateResponse.PajwohLqOidc
    | IdentityProviderUpdateResponse.PajwohLqOkta
    | IdentityProviderUpdateResponse.PajwohLqOnelogin
    | IdentityProviderUpdateResponse.PajwohLqPingone
    | IdentityProviderUpdateResponse.PajwohLqSaml
    | IdentityProviderUpdateResponse.PajwohLqYandex
    | IdentityProviderUpdateResponse.PajwohLqOnetimepin;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace IdentityProviderUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface PajwohLqAzureAd {
    /**
     * UUID
     */
    id?: string;

    config?: PajwohLqAzureAd.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: PajwohLqAzureAd.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqAzureAd {
    export interface Config {
      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * Should Cloudflare try to load authentication contexts from your account
       */
      conditional_access_enabled?: boolean;

      /**
       * Your Azure directory uuid
       */
      directory_id?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;

      /**
       * Should Cloudflare try to load groups from your account
       */
      support_groups?: boolean;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqCentrify {
    /**
     * UUID
     */
    id?: string;

    config?: PajwohLqCentrify.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: PajwohLqCentrify.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqCentrify {
    export interface Config {
      /**
       * Your centrify account url
       */
      centrify_account?: string;

      /**
       * Your centrify app id
       */
      centrify_app_id?: string;

      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqFacebook {
    /**
     * UUID
     */
    id?: string;

    config?: PajwohLqFacebook.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: PajwohLqFacebook.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqFacebook {
    export interface Config {
      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqGitHub {
    /**
     * UUID
     */
    id?: string;

    config?: PajwohLqGitHub.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: PajwohLqGitHub.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqGitHub {
    export interface Config {
      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqGoogle {
    /**
     * UUID
     */
    id?: string;

    config?: PajwohLqGoogle.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: PajwohLqGoogle.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqGoogle {
    export interface Config {
      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqGoogleApps {
    /**
     * UUID
     */
    id?: string;

    config?: PajwohLqGoogleApps.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: PajwohLqGoogleApps.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqGoogleApps {
    export interface Config {
      /**
       * Your companies TLD
       */
      apps_domain?: string;

      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqLinkedin {
    /**
     * UUID
     */
    id?: string;

    config?: PajwohLqLinkedin.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: PajwohLqLinkedin.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqLinkedin {
    export interface Config {
      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqOidc {
    /**
     * UUID
     */
    id?: string;

    config?: PajwohLqOidc.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: PajwohLqOidc.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqOidc {
    export interface Config {
      /**
       * The authorization_endpoint URL of your IdP
       */
      auth_url?: string;

      /**
       * The jwks_uri endpoint of your IdP to allow the IdP keys to sign the tokens
       */
      certs_url?: string;

      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;

      /**
       * OAuth scopes
       */
      scopes?: Array<string>;

      /**
       * The token_endpoint URL of your IdP
       */
      token_url?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqOkta {
    /**
     * UUID
     */
    id?: string;

    config?: PajwohLqOkta.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: PajwohLqOkta.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqOkta {
    export interface Config {
      /**
       * Your okta authorization server id
       */
      authorization_server_id?: string;

      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;

      /**
       * Your okta account url
       */
      okta_account?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqOnelogin {
    /**
     * UUID
     */
    id?: string;

    config?: PajwohLqOnelogin.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: PajwohLqOnelogin.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqOnelogin {
    export interface Config {
      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;

      /**
       * Your OneLogin account url
       */
      onelogin_account?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqPingone {
    /**
     * UUID
     */
    id?: string;

    config?: PajwohLqPingone.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: PajwohLqPingone.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqPingone {
    export interface Config {
      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;

      /**
       * Your PingOne environment identifier
       */
      ping_env_id?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqSaml {
    /**
     * UUID
     */
    id?: string;

    config?: PajwohLqSaml.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: PajwohLqSaml.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqSaml {
    export interface Config {
      /**
       * A list of SAML attribute names that will be added to your signed JWT token and
       * can be used in SAML policy rules.
       */
      attributes?: Array<string>;

      /**
       * The attribute name for email in the SAML response.
       */
      email_attribute_name?: string;

      /**
       * Add a list of attribute names that will be returned in the response header from
       * the Access callback.
       */
      header_attributes?: Array<Config.HeaderAttribute>;

      /**
       * X509 certificate to verify the signature in the SAML authentication response
       */
      idp_public_certs?: Array<string>;

      /**
       * IdP Entity ID or Issuer URL
       */
      issuer_url?: string;

      /**
       * Sign the SAML authentication request with Access credentials. To verify the
       * signature, use the public key from the Access certs endpoints.
       */
      sign_request?: boolean;

      /**
       * URL to send the SAML authentication requests to
       */
      sso_target_url?: string;
    }

    export namespace Config {
      export interface HeaderAttribute {
        /**
         * attribute name from the IDP
         */
        attribute_name?: string;

        /**
         * header that will be added on the request to the origin
         */
        header_name?: string;
      }
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqYandex {
    /**
     * UUID
     */
    id?: string;

    config?: PajwohLqYandex.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: PajwohLqYandex.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqYandex {
    export interface Config {
      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqOnetimepin {
    /**
     * UUID
     */
    id?: string;

    config?: unknown;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: PajwohLqOnetimepin.ScimConfig;

    type?: 'onetimepin';
  }

  export namespace PajwohLqOnetimepin {
    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }
}

export interface IdentityProviderDeleteResponse {
  errors?: Array<IdentityProviderDeleteResponse.Error>;

  messages?: Array<IdentityProviderDeleteResponse.Message>;

  result?: IdentityProviderDeleteResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace IdentityProviderDeleteResponse {
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
     * UUID
     */
    id?: string;
  }
}

export interface IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderResponse {
  errors?: Array<IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderResponse.Error>;

  messages?: Array<IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderResponse.Message>;

  result?:
    | IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderResponse.PajwohLqAzureAd
    | IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderResponse.PajwohLqCentrify
    | IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderResponse.PajwohLqFacebook
    | IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderResponse.PajwohLqGitHub
    | IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderResponse.PajwohLqGoogle
    | IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderResponse.PajwohLqGoogleApps
    | IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderResponse.PajwohLqLinkedin
    | IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderResponse.PajwohLqOidc
    | IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderResponse.PajwohLqOkta
    | IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderResponse.PajwohLqOnelogin
    | IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderResponse.PajwohLqPingone
    | IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderResponse.PajwohLqSaml
    | IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderResponse.PajwohLqYandex
    | IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderResponse.PajwohLqOnetimepin;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface PajwohLqAzureAd {
    /**
     * UUID
     */
    id?: string;

    config?: PajwohLqAzureAd.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: PajwohLqAzureAd.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqAzureAd {
    export interface Config {
      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * Should Cloudflare try to load authentication contexts from your account
       */
      conditional_access_enabled?: boolean;

      /**
       * Your Azure directory uuid
       */
      directory_id?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;

      /**
       * Should Cloudflare try to load groups from your account
       */
      support_groups?: boolean;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqCentrify {
    /**
     * UUID
     */
    id?: string;

    config?: PajwohLqCentrify.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: PajwohLqCentrify.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqCentrify {
    export interface Config {
      /**
       * Your centrify account url
       */
      centrify_account?: string;

      /**
       * Your centrify app id
       */
      centrify_app_id?: string;

      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqFacebook {
    /**
     * UUID
     */
    id?: string;

    config?: PajwohLqFacebook.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: PajwohLqFacebook.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqFacebook {
    export interface Config {
      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqGitHub {
    /**
     * UUID
     */
    id?: string;

    config?: PajwohLqGitHub.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: PajwohLqGitHub.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqGitHub {
    export interface Config {
      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqGoogle {
    /**
     * UUID
     */
    id?: string;

    config?: PajwohLqGoogle.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: PajwohLqGoogle.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqGoogle {
    export interface Config {
      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqGoogleApps {
    /**
     * UUID
     */
    id?: string;

    config?: PajwohLqGoogleApps.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: PajwohLqGoogleApps.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqGoogleApps {
    export interface Config {
      /**
       * Your companies TLD
       */
      apps_domain?: string;

      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqLinkedin {
    /**
     * UUID
     */
    id?: string;

    config?: PajwohLqLinkedin.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: PajwohLqLinkedin.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqLinkedin {
    export interface Config {
      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqOidc {
    /**
     * UUID
     */
    id?: string;

    config?: PajwohLqOidc.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: PajwohLqOidc.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqOidc {
    export interface Config {
      /**
       * The authorization_endpoint URL of your IdP
       */
      auth_url?: string;

      /**
       * The jwks_uri endpoint of your IdP to allow the IdP keys to sign the tokens
       */
      certs_url?: string;

      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;

      /**
       * OAuth scopes
       */
      scopes?: Array<string>;

      /**
       * The token_endpoint URL of your IdP
       */
      token_url?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqOkta {
    /**
     * UUID
     */
    id?: string;

    config?: PajwohLqOkta.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: PajwohLqOkta.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqOkta {
    export interface Config {
      /**
       * Your okta authorization server id
       */
      authorization_server_id?: string;

      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;

      /**
       * Your okta account url
       */
      okta_account?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqOnelogin {
    /**
     * UUID
     */
    id?: string;

    config?: PajwohLqOnelogin.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: PajwohLqOnelogin.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqOnelogin {
    export interface Config {
      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;

      /**
       * Your OneLogin account url
       */
      onelogin_account?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqPingone {
    /**
     * UUID
     */
    id?: string;

    config?: PajwohLqPingone.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: PajwohLqPingone.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqPingone {
    export interface Config {
      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;

      /**
       * Your PingOne environment identifier
       */
      ping_env_id?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqSaml {
    /**
     * UUID
     */
    id?: string;

    config?: PajwohLqSaml.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: PajwohLqSaml.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqSaml {
    export interface Config {
      /**
       * A list of SAML attribute names that will be added to your signed JWT token and
       * can be used in SAML policy rules.
       */
      attributes?: Array<string>;

      /**
       * The attribute name for email in the SAML response.
       */
      email_attribute_name?: string;

      /**
       * Add a list of attribute names that will be returned in the response header from
       * the Access callback.
       */
      header_attributes?: Array<Config.HeaderAttribute>;

      /**
       * X509 certificate to verify the signature in the SAML authentication response
       */
      idp_public_certs?: Array<string>;

      /**
       * IdP Entity ID or Issuer URL
       */
      issuer_url?: string;

      /**
       * Sign the SAML authentication request with Access credentials. To verify the
       * signature, use the public key from the Access certs endpoints.
       */
      sign_request?: boolean;

      /**
       * URL to send the SAML authentication requests to
       */
      sso_target_url?: string;
    }

    export namespace Config {
      export interface HeaderAttribute {
        /**
         * attribute name from the IDP
         */
        attribute_name?: string;

        /**
         * header that will be added on the request to the origin
         */
        header_name?: string;
      }
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqYandex {
    /**
     * UUID
     */
    id?: string;

    config?: PajwohLqYandex.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: PajwohLqYandex.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqYandex {
    export interface Config {
      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqOnetimepin {
    /**
     * UUID
     */
    id?: string;

    config?: unknown;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: PajwohLqOnetimepin.ScimConfig;

    type?: 'onetimepin';
  }

  export namespace PajwohLqOnetimepin {
    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }
}

export interface IdentityProviderAccessIdentityProvidersListAccessIdentityProvidersResponse {
  errors?: Array<IdentityProviderAccessIdentityProvidersListAccessIdentityProvidersResponse.Error>;

  messages?: Array<IdentityProviderAccessIdentityProvidersListAccessIdentityProvidersResponse.Message>;

  result?: Array<
    | IdentityProviderAccessIdentityProvidersListAccessIdentityProvidersResponse.PajwohLqAzureAd
    | IdentityProviderAccessIdentityProvidersListAccessIdentityProvidersResponse.PajwohLqCentrify
    | IdentityProviderAccessIdentityProvidersListAccessIdentityProvidersResponse.PajwohLqFacebook
    | IdentityProviderAccessIdentityProvidersListAccessIdentityProvidersResponse.PajwohLqGitHub
    | IdentityProviderAccessIdentityProvidersListAccessIdentityProvidersResponse.PajwohLqGoogle
    | IdentityProviderAccessIdentityProvidersListAccessIdentityProvidersResponse.PajwohLqGoogleApps
    | IdentityProviderAccessIdentityProvidersListAccessIdentityProvidersResponse.PajwohLqLinkedin
    | IdentityProviderAccessIdentityProvidersListAccessIdentityProvidersResponse.PajwohLqOidc
    | IdentityProviderAccessIdentityProvidersListAccessIdentityProvidersResponse.PajwohLqOkta
    | IdentityProviderAccessIdentityProvidersListAccessIdentityProvidersResponse.PajwohLqOnelogin
    | IdentityProviderAccessIdentityProvidersListAccessIdentityProvidersResponse.PajwohLqPingone
    | IdentityProviderAccessIdentityProvidersListAccessIdentityProvidersResponse.PajwohLqSaml
    | IdentityProviderAccessIdentityProvidersListAccessIdentityProvidersResponse.PajwohLqYandex
  >;

  result_info?: IdentityProviderAccessIdentityProvidersListAccessIdentityProvidersResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace IdentityProviderAccessIdentityProvidersListAccessIdentityProvidersResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface PajwohLqAzureAd {
    /**
     * UUID
     */
    id?: string;

    config?: PajwohLqAzureAd.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: PajwohLqAzureAd.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqAzureAd {
    export interface Config {
      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * Should Cloudflare try to load authentication contexts from your account
       */
      conditional_access_enabled?: boolean;

      /**
       * Your Azure directory uuid
       */
      directory_id?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;

      /**
       * Should Cloudflare try to load groups from your account
       */
      support_groups?: boolean;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqCentrify {
    /**
     * UUID
     */
    id?: string;

    config?: PajwohLqCentrify.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: PajwohLqCentrify.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqCentrify {
    export interface Config {
      /**
       * Your centrify account url
       */
      centrify_account?: string;

      /**
       * Your centrify app id
       */
      centrify_app_id?: string;

      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqFacebook {
    /**
     * UUID
     */
    id?: string;

    config?: PajwohLqFacebook.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: PajwohLqFacebook.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqFacebook {
    export interface Config {
      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqGitHub {
    /**
     * UUID
     */
    id?: string;

    config?: PajwohLqGitHub.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: PajwohLqGitHub.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqGitHub {
    export interface Config {
      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqGoogle {
    /**
     * UUID
     */
    id?: string;

    config?: PajwohLqGoogle.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: PajwohLqGoogle.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqGoogle {
    export interface Config {
      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqGoogleApps {
    /**
     * UUID
     */
    id?: string;

    config?: PajwohLqGoogleApps.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: PajwohLqGoogleApps.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqGoogleApps {
    export interface Config {
      /**
       * Your companies TLD
       */
      apps_domain?: string;

      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqLinkedin {
    /**
     * UUID
     */
    id?: string;

    config?: PajwohLqLinkedin.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: PajwohLqLinkedin.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqLinkedin {
    export interface Config {
      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqOidc {
    /**
     * UUID
     */
    id?: string;

    config?: PajwohLqOidc.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: PajwohLqOidc.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqOidc {
    export interface Config {
      /**
       * The authorization_endpoint URL of your IdP
       */
      auth_url?: string;

      /**
       * The jwks_uri endpoint of your IdP to allow the IdP keys to sign the tokens
       */
      certs_url?: string;

      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;

      /**
       * OAuth scopes
       */
      scopes?: Array<string>;

      /**
       * The token_endpoint URL of your IdP
       */
      token_url?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqOkta {
    /**
     * UUID
     */
    id?: string;

    config?: PajwohLqOkta.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: PajwohLqOkta.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqOkta {
    export interface Config {
      /**
       * Your okta authorization server id
       */
      authorization_server_id?: string;

      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;

      /**
       * Your okta account url
       */
      okta_account?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqOnelogin {
    /**
     * UUID
     */
    id?: string;

    config?: PajwohLqOnelogin.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: PajwohLqOnelogin.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqOnelogin {
    export interface Config {
      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;

      /**
       * Your OneLogin account url
       */
      onelogin_account?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqPingone {
    /**
     * UUID
     */
    id?: string;

    config?: PajwohLqPingone.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: PajwohLqPingone.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqPingone {
    export interface Config {
      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;

      /**
       * Your PingOne environment identifier
       */
      ping_env_id?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqSaml {
    /**
     * UUID
     */
    id?: string;

    config?: PajwohLqSaml.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: PajwohLqSaml.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqSaml {
    export interface Config {
      /**
       * A list of SAML attribute names that will be added to your signed JWT token and
       * can be used in SAML policy rules.
       */
      attributes?: Array<string>;

      /**
       * The attribute name for email in the SAML response.
       */
      email_attribute_name?: string;

      /**
       * Add a list of attribute names that will be returned in the response header from
       * the Access callback.
       */
      header_attributes?: Array<Config.HeaderAttribute>;

      /**
       * X509 certificate to verify the signature in the SAML authentication response
       */
      idp_public_certs?: Array<string>;

      /**
       * IdP Entity ID or Issuer URL
       */
      issuer_url?: string;

      /**
       * Sign the SAML authentication request with Access credentials. To verify the
       * signature, use the public key from the Access certs endpoints.
       */
      sign_request?: boolean;

      /**
       * URL to send the SAML authentication requests to
       */
      sso_target_url?: string;
    }

    export namespace Config {
      export interface HeaderAttribute {
        /**
         * attribute name from the IDP
         */
        attribute_name?: string;

        /**
         * header that will be added on the request to the origin
         */
        header_name?: string;
      }
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqYandex {
    /**
     * UUID
     */
    id?: string;

    config?: PajwohLqYandex.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: PajwohLqYandex.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqYandex {
    export interface Config {
      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface ResultInfo {
    /**
     * Total number of results for the requested service
     */
    count?: number;

    /**
     * Current page within paginated list of results
     */
    page?: number;

    /**
     * Number of results per page of results
     */
    per_page?: number;

    /**
     * Total results available without any search parameters
     */
    total_count?: number;
  }
}

export type IdentityProviderUpdateParams =
  | IdentityProviderUpdateParams.PajwohLqAzureAd
  | IdentityProviderUpdateParams.PajwohLqCentrify
  | IdentityProviderUpdateParams.PajwohLqFacebook
  | IdentityProviderUpdateParams.PajwohLqGitHub
  | IdentityProviderUpdateParams.PajwohLqGoogle
  | IdentityProviderUpdateParams.PajwohLqGoogleApps
  | IdentityProviderUpdateParams.PajwohLqLinkedin
  | IdentityProviderUpdateParams.PajwohLqOidc
  | IdentityProviderUpdateParams.PajwohLqOkta
  | IdentityProviderUpdateParams.PajwohLqOnelogin
  | IdentityProviderUpdateParams.PajwohLqPingone
  | IdentityProviderUpdateParams.PajwohLqSaml
  | IdentityProviderUpdateParams.PajwohLqYandex
  | IdentityProviderUpdateParams.PajwohLqOnetimepin;

export namespace IdentityProviderUpdateParams {
  export interface PajwohLqAzureAd {
    config?: IdentityProviderUpdateParams.PajwohLqAzureAd.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderUpdateParams.PajwohLqAzureAd.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqAzureAd {
    export interface Config {
      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * Should Cloudflare try to load authentication contexts from your account
       */
      conditional_access_enabled?: boolean;

      /**
       * Your Azure directory uuid
       */
      directory_id?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;

      /**
       * Should Cloudflare try to load groups from your account
       */
      support_groups?: boolean;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqCentrify {
    config?: IdentityProviderUpdateParams.PajwohLqCentrify.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderUpdateParams.PajwohLqCentrify.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqCentrify {
    export interface Config {
      /**
       * Your centrify account url
       */
      centrify_account?: string;

      /**
       * Your centrify app id
       */
      centrify_app_id?: string;

      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqFacebook {
    config?: IdentityProviderUpdateParams.PajwohLqFacebook.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderUpdateParams.PajwohLqFacebook.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqFacebook {
    export interface Config {
      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqGitHub {
    config?: IdentityProviderUpdateParams.PajwohLqGitHub.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderUpdateParams.PajwohLqGitHub.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqGitHub {
    export interface Config {
      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqGoogle {
    config?: IdentityProviderUpdateParams.PajwohLqGoogle.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderUpdateParams.PajwohLqGoogle.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqGoogle {
    export interface Config {
      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqGoogleApps {
    config?: IdentityProviderUpdateParams.PajwohLqGoogleApps.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderUpdateParams.PajwohLqGoogleApps.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqGoogleApps {
    export interface Config {
      /**
       * Your companies TLD
       */
      apps_domain?: string;

      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqLinkedin {
    config?: IdentityProviderUpdateParams.PajwohLqLinkedin.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderUpdateParams.PajwohLqLinkedin.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqLinkedin {
    export interface Config {
      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqOidc {
    config?: IdentityProviderUpdateParams.PajwohLqOidc.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderUpdateParams.PajwohLqOidc.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqOidc {
    export interface Config {
      /**
       * The authorization_endpoint URL of your IdP
       */
      auth_url?: string;

      /**
       * The jwks_uri endpoint of your IdP to allow the IdP keys to sign the tokens
       */
      certs_url?: string;

      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;

      /**
       * OAuth scopes
       */
      scopes?: Array<string>;

      /**
       * The token_endpoint URL of your IdP
       */
      token_url?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqOkta {
    config?: IdentityProviderUpdateParams.PajwohLqOkta.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderUpdateParams.PajwohLqOkta.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqOkta {
    export interface Config {
      /**
       * Your okta authorization server id
       */
      authorization_server_id?: string;

      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;

      /**
       * Your okta account url
       */
      okta_account?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqOnelogin {
    config?: IdentityProviderUpdateParams.PajwohLqOnelogin.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderUpdateParams.PajwohLqOnelogin.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqOnelogin {
    export interface Config {
      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;

      /**
       * Your OneLogin account url
       */
      onelogin_account?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqPingone {
    config?: IdentityProviderUpdateParams.PajwohLqPingone.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderUpdateParams.PajwohLqPingone.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqPingone {
    export interface Config {
      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;

      /**
       * Your PingOne environment identifier
       */
      ping_env_id?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqSaml {
    config?: IdentityProviderUpdateParams.PajwohLqSaml.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderUpdateParams.PajwohLqSaml.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqSaml {
    export interface Config {
      /**
       * A list of SAML attribute names that will be added to your signed JWT token and
       * can be used in SAML policy rules.
       */
      attributes?: Array<string>;

      /**
       * The attribute name for email in the SAML response.
       */
      email_attribute_name?: string;

      /**
       * Add a list of attribute names that will be returned in the response header from
       * the Access callback.
       */
      header_attributes?: Array<Config.HeaderAttribute>;

      /**
       * X509 certificate to verify the signature in the SAML authentication response
       */
      idp_public_certs?: Array<string>;

      /**
       * IdP Entity ID or Issuer URL
       */
      issuer_url?: string;

      /**
       * Sign the SAML authentication request with Access credentials. To verify the
       * signature, use the public key from the Access certs endpoints.
       */
      sign_request?: boolean;

      /**
       * URL to send the SAML authentication requests to
       */
      sso_target_url?: string;
    }

    export namespace Config {
      export interface HeaderAttribute {
        /**
         * attribute name from the IDP
         */
        attribute_name?: string;

        /**
         * header that will be added on the request to the origin
         */
        header_name?: string;
      }
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqYandex {
    config?: IdentityProviderUpdateParams.PajwohLqYandex.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderUpdateParams.PajwohLqYandex.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqYandex {
    export interface Config {
      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqOnetimepin {
    config?: unknown;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderUpdateParams.PajwohLqOnetimepin.ScimConfig;

    type?: 'onetimepin';
  }

  export namespace PajwohLqOnetimepin {
    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }
}

export type IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderParams =
  | IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderParams.PajwohLqAzureAd
  | IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderParams.PajwohLqCentrify
  | IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderParams.PajwohLqFacebook
  | IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderParams.PajwohLqGitHub
  | IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderParams.PajwohLqGoogle
  | IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderParams.PajwohLqGoogleApps
  | IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderParams.PajwohLqLinkedin
  | IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderParams.PajwohLqOidc
  | IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderParams.PajwohLqOkta
  | IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderParams.PajwohLqOnelogin
  | IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderParams.PajwohLqPingone
  | IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderParams.PajwohLqSaml
  | IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderParams.PajwohLqYandex
  | IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderParams.PajwohLqOnetimepin;

export namespace IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderParams {
  export interface PajwohLqAzureAd {
    config?: IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderParams.PajwohLqAzureAd.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderParams.PajwohLqAzureAd.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqAzureAd {
    export interface Config {
      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * Should Cloudflare try to load authentication contexts from your account
       */
      conditional_access_enabled?: boolean;

      /**
       * Your Azure directory uuid
       */
      directory_id?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;

      /**
       * Should Cloudflare try to load groups from your account
       */
      support_groups?: boolean;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqCentrify {
    config?: IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderParams.PajwohLqCentrify.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderParams.PajwohLqCentrify.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqCentrify {
    export interface Config {
      /**
       * Your centrify account url
       */
      centrify_account?: string;

      /**
       * Your centrify app id
       */
      centrify_app_id?: string;

      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqFacebook {
    config?: IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderParams.PajwohLqFacebook.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderParams.PajwohLqFacebook.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqFacebook {
    export interface Config {
      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqGitHub {
    config?: IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderParams.PajwohLqGitHub.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderParams.PajwohLqGitHub.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqGitHub {
    export interface Config {
      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqGoogle {
    config?: IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderParams.PajwohLqGoogle.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderParams.PajwohLqGoogle.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqGoogle {
    export interface Config {
      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqGoogleApps {
    config?: IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderParams.PajwohLqGoogleApps.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderParams.PajwohLqGoogleApps.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqGoogleApps {
    export interface Config {
      /**
       * Your companies TLD
       */
      apps_domain?: string;

      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqLinkedin {
    config?: IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderParams.PajwohLqLinkedin.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderParams.PajwohLqLinkedin.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqLinkedin {
    export interface Config {
      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqOidc {
    config?: IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderParams.PajwohLqOidc.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderParams.PajwohLqOidc.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqOidc {
    export interface Config {
      /**
       * The authorization_endpoint URL of your IdP
       */
      auth_url?: string;

      /**
       * The jwks_uri endpoint of your IdP to allow the IdP keys to sign the tokens
       */
      certs_url?: string;

      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;

      /**
       * OAuth scopes
       */
      scopes?: Array<string>;

      /**
       * The token_endpoint URL of your IdP
       */
      token_url?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqOkta {
    config?: IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderParams.PajwohLqOkta.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderParams.PajwohLqOkta.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqOkta {
    export interface Config {
      /**
       * Your okta authorization server id
       */
      authorization_server_id?: string;

      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;

      /**
       * Your okta account url
       */
      okta_account?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqOnelogin {
    config?: IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderParams.PajwohLqOnelogin.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderParams.PajwohLqOnelogin.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqOnelogin {
    export interface Config {
      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;

      /**
       * Your OneLogin account url
       */
      onelogin_account?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqPingone {
    config?: IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderParams.PajwohLqPingone.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderParams.PajwohLqPingone.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqPingone {
    export interface Config {
      /**
       * Custom claims
       */
      claims?: Array<string>;

      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;

      /**
       * The claim name for email in the id_token response.
       */
      email_claim_name?: string;

      /**
       * Your PingOne environment identifier
       */
      ping_env_id?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqSaml {
    config?: IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderParams.PajwohLqSaml.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderParams.PajwohLqSaml.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqSaml {
    export interface Config {
      /**
       * A list of SAML attribute names that will be added to your signed JWT token and
       * can be used in SAML policy rules.
       */
      attributes?: Array<string>;

      /**
       * The attribute name for email in the SAML response.
       */
      email_attribute_name?: string;

      /**
       * Add a list of attribute names that will be returned in the response header from
       * the Access callback.
       */
      header_attributes?: Array<Config.HeaderAttribute>;

      /**
       * X509 certificate to verify the signature in the SAML authentication response
       */
      idp_public_certs?: Array<string>;

      /**
       * IdP Entity ID or Issuer URL
       */
      issuer_url?: string;

      /**
       * Sign the SAML authentication request with Access credentials. To verify the
       * signature, use the public key from the Access certs endpoints.
       */
      sign_request?: boolean;

      /**
       * URL to send the SAML authentication requests to
       */
      sso_target_url?: string;
    }

    export namespace Config {
      export interface HeaderAttribute {
        /**
         * attribute name from the IDP
         */
        attribute_name?: string;

        /**
         * header that will be added on the request to the origin
         */
        header_name?: string;
      }
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqYandex {
    config?: IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderParams.PajwohLqYandex.Config;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderParams.PajwohLqYandex.ScimConfig;

    /**
     * The type of identity provider. To determine the value for a specific provider,
     * refer to our
     * [developer documentation](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/).
     */
    type?:
      | 'onetimepin'
      | 'azureAD'
      | 'saml'
      | 'centrify'
      | 'facebook'
      | 'github'
      | 'google-apps'
      | 'google'
      | 'linkedin'
      | 'oidc'
      | 'okta'
      | 'onelogin'
      | 'pingone'
      | 'yandex';
  }

  export namespace PajwohLqYandex {
    export interface Config {
      /**
       * Your OAuth Client ID
       */
      client_id?: string;

      /**
       * Your OAuth Client Secret
       */
      client_secret?: string;
    }

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }

  export interface PajwohLqOnetimepin {
    config?: unknown;

    /**
     * The name of the identity provider, shown to users on the login page.
     */
    name?: string;

    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    scim_config?: IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderParams.PajwohLqOnetimepin.ScimConfig;

    type?: 'onetimepin';
  }

  export namespace PajwohLqOnetimepin {
    /**
     * The configuration settings for enabling a System for Cross-Domain Identity
     * Management (SCIM) with the identity provider.
     */
    export interface ScimConfig {
      /**
       * A flag to enable or disable SCIM for the identity provider.
       */
      enabled?: boolean;

      /**
       * A flag to revoke a user's session in Access and force a reauthentication on the
       * user's Gateway session when they have been added or removed from a group in the
       * Identity Provider.
       */
      group_member_deprovision?: boolean;

      /**
       * A flag to remove a user's seat in Zero Trust when they have been deprovisioned
       * in the Identity Provider. This cannot be enabled unless user_deprovision is also
       * enabled.
       */
      seat_deprovision?: boolean;

      /**
       * A read-only token generated when the SCIM integration is enabled for the first
       * time. It is redacted on subsequent requests. If you lose this you will need to
       * refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.
       */
      secret?: string;

      /**
       * A flag to enable revoking a user's session in Access and Gateway when they have
       * been deprovisioned in the Identity Provider.
       */
      user_deprovision?: boolean;
    }
  }
}

export namespace IdentityProviders {
  export import IdentityProviderRetrieveResponse = IdentityProvidersAPI.IdentityProviderRetrieveResponse;
  export import IdentityProviderUpdateResponse = IdentityProvidersAPI.IdentityProviderUpdateResponse;
  export import IdentityProviderDeleteResponse = IdentityProvidersAPI.IdentityProviderDeleteResponse;
  export import IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderResponse = IdentityProvidersAPI.IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderResponse;
  export import IdentityProviderAccessIdentityProvidersListAccessIdentityProvidersResponse = IdentityProvidersAPI.IdentityProviderAccessIdentityProvidersListAccessIdentityProvidersResponse;
  export import IdentityProviderUpdateParams = IdentityProvidersAPI.IdentityProviderUpdateParams;
  export import IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderParams = IdentityProvidersAPI.IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderParams;
}
