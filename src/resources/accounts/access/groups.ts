// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as GroupsAPI from 'cloudflare/resources/accounts/access/groups';

export class Groups extends APIResource {
  /**
   * Fetches a single Access group.
   */
  retrieve(
    identifier: string,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GroupRetrieveResponse> {
    return this._client.get(`/accounts/${identifier}/access/groups/${uuid}`, options);
  }

  /**
   * Updates a configured Access group.
   */
  update(
    identifier: string,
    uuid: string,
    body: GroupUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GroupUpdateResponse> {
    return this._client.put(`/accounts/${identifier}/access/groups/${uuid}`, { body, ...options });
  }

  /**
   * Deletes an Access group.
   */
  delete(
    identifier: string,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GroupDeleteResponse> {
    return this._client.delete(`/accounts/${identifier}/access/groups/${uuid}`, options);
  }

  /**
   * Creates a new Access group.
   */
  accessGroupsCreateAnAccessGroup(
    identifier: string,
    body: GroupAccessGroupsCreateAnAccessGroupParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GroupAccessGroupsCreateAnAccessGroupResponse> {
    return this._client.post(`/accounts/${identifier}/access/groups`, { body, ...options });
  }

  /**
   * Lists all Access groups.
   */
  accessGroupsListAccessGroups(
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GroupAccessGroupsListAccessGroupsResponse> {
    return this._client.get(`/accounts/${identifier}/access/groups`, options);
  }
}

export interface GroupRetrieveResponse {
  errors?: Array<GroupRetrieveResponse.Error>;

  messages?: Array<GroupRetrieveResponse.Message>;

  result?: GroupRetrieveResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace GroupRetrieveResponse {
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

    created_at?: string;

    /**
     * Rules evaluated with a NOT logical operator. To match a policy, a user cannot
     * meet any of the Exclude rules.
     */
    exclude?: Array<
      | Result.PajwohLqEmailRule
      | Result.PajwohLqEmailListRule
      | Result.PajwohLqDomainRule
      | Result.PajwohLqEveryoneRule
      | Result.PajwohLqIPRule
      | Result.PajwohLqIPListRule
      | Result.PajwohLqCertificateRule
      | Result.PajwohLqAccessGroupRule
      | Result.PajwohLqAzureGroupRule
      | Result.PajwohLqGitHubOrganizationRule
      | Result.PajwohLqGsuiteGroupRule
      | Result.PajwohLqOktaGroupRule
      | Result.PajwohLqSamlGroupRule
      | Result.PajwohLqServiceTokenRule
      | Result.PajwohLqAnyValidServiceTokenRule
      | Result.PajwohLqExternalEvaluationRule
      | Result.PajwohLqCountryRule
      | Result.PajwohLqAuthenticationMethodRule
      | Result.PajwohLqDevicePostureRule
    >;

    /**
     * Rules evaluated with an OR logical operator. A user needs to meet only one of
     * the Include rules.
     */
    include?: Array<
      | Result.PajwohLqEmailRule
      | Result.PajwohLqEmailListRule
      | Result.PajwohLqDomainRule
      | Result.PajwohLqEveryoneRule
      | Result.PajwohLqIPRule
      | Result.PajwohLqIPListRule
      | Result.PajwohLqCertificateRule
      | Result.PajwohLqAccessGroupRule
      | Result.PajwohLqAzureGroupRule
      | Result.PajwohLqGitHubOrganizationRule
      | Result.PajwohLqGsuiteGroupRule
      | Result.PajwohLqOktaGroupRule
      | Result.PajwohLqSamlGroupRule
      | Result.PajwohLqServiceTokenRule
      | Result.PajwohLqAnyValidServiceTokenRule
      | Result.PajwohLqExternalEvaluationRule
      | Result.PajwohLqCountryRule
      | Result.PajwohLqAuthenticationMethodRule
      | Result.PajwohLqDevicePostureRule
    >;

    /**
     * Rules evaluated with an AND logical operator. To match a policy, a user must
     * meet all of the Require rules.
     */
    is_default?: Array<
      | Result.PajwohLqEmailRule
      | Result.PajwohLqEmailListRule
      | Result.PajwohLqDomainRule
      | Result.PajwohLqEveryoneRule
      | Result.PajwohLqIPRule
      | Result.PajwohLqIPListRule
      | Result.PajwohLqCertificateRule
      | Result.PajwohLqAccessGroupRule
      | Result.PajwohLqAzureGroupRule
      | Result.PajwohLqGitHubOrganizationRule
      | Result.PajwohLqGsuiteGroupRule
      | Result.PajwohLqOktaGroupRule
      | Result.PajwohLqSamlGroupRule
      | Result.PajwohLqServiceTokenRule
      | Result.PajwohLqAnyValidServiceTokenRule
      | Result.PajwohLqExternalEvaluationRule
      | Result.PajwohLqCountryRule
      | Result.PajwohLqAuthenticationMethodRule
      | Result.PajwohLqDevicePostureRule
    >;

    /**
     * The name of the Access group.
     */
    name?: string;

    /**
     * Rules evaluated with an AND logical operator. To match a policy, a user must
     * meet all of the Require rules.
     */
    require?: Array<
      | Result.PajwohLqEmailRule
      | Result.PajwohLqEmailListRule
      | Result.PajwohLqDomainRule
      | Result.PajwohLqEveryoneRule
      | Result.PajwohLqIPRule
      | Result.PajwohLqIPListRule
      | Result.PajwohLqCertificateRule
      | Result.PajwohLqAccessGroupRule
      | Result.PajwohLqAzureGroupRule
      | Result.PajwohLqGitHubOrganizationRule
      | Result.PajwohLqGsuiteGroupRule
      | Result.PajwohLqOktaGroupRule
      | Result.PajwohLqSamlGroupRule
      | Result.PajwohLqServiceTokenRule
      | Result.PajwohLqAnyValidServiceTokenRule
      | Result.PajwohLqExternalEvaluationRule
      | Result.PajwohLqCountryRule
      | Result.PajwohLqAuthenticationMethodRule
      | Result.PajwohLqDevicePostureRule
    >;

    updated_at?: string;
  }

  export namespace Result {
    /**
     * Matches a specific email.
     */
    export interface PajwohLqEmailRule {
      email: PajwohLqEmailRule.Email;
    }

    export namespace PajwohLqEmailRule {
      export interface Email {
        /**
         * The email of the user.
         */
        email: string;
      }
    }

    /**
     * Matches an email address from a list.
     */
    export interface PajwohLqEmailListRule {
      email_list: PajwohLqEmailListRule.EmailList;
    }

    export namespace PajwohLqEmailListRule {
      export interface EmailList {
        /**
         * The ID of a previously created email list.
         */
        id: string;
      }
    }

    /**
     * Match an entire email domain.
     */
    export interface PajwohLqDomainRule {
      email_domain: PajwohLqDomainRule.EmailDomain;
    }

    export namespace PajwohLqDomainRule {
      export interface EmailDomain {
        /**
         * The email domain to match.
         */
        domain: string;
      }
    }

    /**
     * Matches everyone.
     */
    export interface PajwohLqEveryoneRule {
      /**
       * An empty object which matches on all users.
       */
      everyone: unknown;
    }

    /**
     * Matches an IP address block.
     */
    export interface PajwohLqIPRule {
      ip: PajwohLqIPRule.IP;
    }

    export namespace PajwohLqIPRule {
      export interface IP {
        /**
         * An IPv4 or IPv6 CIDR block.
         */
        ip: string;
      }
    }

    /**
     * Matches an IP address from a list.
     */
    export interface PajwohLqIPListRule {
      ip_list: PajwohLqIPListRule.IPList;
    }

    export namespace PajwohLqIPListRule {
      export interface IPList {
        /**
         * The ID of a previously created IP list.
         */
        id: string;
      }
    }

    /**
     * Matches any valid client certificate.
     */
    export interface PajwohLqCertificateRule {
      certificate: unknown;
    }

    /**
     * Matches an Access group.
     */
    export interface PajwohLqAccessGroupRule {
      group: PajwohLqAccessGroupRule.Group;
    }

    export namespace PajwohLqAccessGroupRule {
      export interface Group {
        /**
         * The ID of a previously created Access group.
         */
        id: string;
      }
    }

    /**
     * Matches an Azure group. Requires an Azure identity provider.
     */
    export interface PajwohLqAzureGroupRule {
      azureAD: PajwohLqAzureGroupRule.AzureAd;
    }

    export namespace PajwohLqAzureGroupRule {
      export interface AzureAd {
        /**
         * The ID of an Azure group.
         */
        id: string;

        /**
         * The ID of your Azure identity provider.
         */
        connection_id: string;
      }
    }

    /**
     * Matches a Github organization. Requires a Github identity provider.
     */
    export interface PajwohLqGitHubOrganizationRule {
      'github-organization': PajwohLqGitHubOrganizationRule.GitHubOrganization;
    }

    export namespace PajwohLqGitHubOrganizationRule {
      export interface GitHubOrganization {
        /**
         * The ID of your Github identity provider.
         */
        connection_id: string;

        /**
         * The name of the organization.
         */
        name: string;
      }
    }

    /**
     * Matches a group in Google Workspace. Requires a Google Workspace identity
     * provider.
     */
    export interface PajwohLqGsuiteGroupRule {
      gsuite: PajwohLqGsuiteGroupRule.Gsuite;
    }

    export namespace PajwohLqGsuiteGroupRule {
      export interface Gsuite {
        /**
         * The ID of your Google Workspace identity provider.
         */
        connection_id: string;

        /**
         * The email of the Google Workspace group.
         */
        email: string;
      }
    }

    /**
     * Matches an Okta group. Requires an Okta identity provider.
     */
    export interface PajwohLqOktaGroupRule {
      okta: PajwohLqOktaGroupRule.Okta;
    }

    export namespace PajwohLqOktaGroupRule {
      export interface Okta {
        /**
         * The ID of your Okta identity provider.
         */
        connection_id: string;

        /**
         * The email of the Okta group.
         */
        email: string;
      }
    }

    /**
     * Matches a SAML group. Requires a SAML identity provider.
     */
    export interface PajwohLqSamlGroupRule {
      saml: PajwohLqSamlGroupRule.Saml;
    }

    export namespace PajwohLqSamlGroupRule {
      export interface Saml {
        /**
         * The name of the SAML attribute.
         */
        attribute_name: string;

        /**
         * The SAML attribute value to look for.
         */
        attribute_value: string;
      }
    }

    /**
     * Matches a specific Access Service Token
     */
    export interface PajwohLqServiceTokenRule {
      service_token: PajwohLqServiceTokenRule.ServiceToken;
    }

    export namespace PajwohLqServiceTokenRule {
      export interface ServiceToken {
        /**
         * The ID of a Service Token.
         */
        token_id: string;
      }
    }

    /**
     * Matches any valid Access Service Token
     */
    export interface PajwohLqAnyValidServiceTokenRule {
      /**
       * An empty object which matches on all service tokens.
       */
      any_valid_service_token: unknown;
    }

    /**
     * Create Allow or Block policies which evaluate the user based on custom criteria.
     */
    export interface PajwohLqExternalEvaluationRule {
      external_evaluation: PajwohLqExternalEvaluationRule.ExternalEvaluation;
    }

    export namespace PajwohLqExternalEvaluationRule {
      export interface ExternalEvaluation {
        /**
         * The API endpoint containing your business logic.
         */
        evaluate_url: string;

        /**
         * The API endpoint containing the key that Access uses to verify that the response
         * came from your API.
         */
        keys_url: string;
      }
    }

    /**
     * Matches a specific country
     */
    export interface PajwohLqCountryRule {
      geo: PajwohLqCountryRule.Geo;
    }

    export namespace PajwohLqCountryRule {
      export interface Geo {
        /**
         * The country code that should be matched.
         */
        country_code: string;
      }
    }

    /**
     * Enforce different MFA options
     */
    export interface PajwohLqAuthenticationMethodRule {
      auth_method: PajwohLqAuthenticationMethodRule.AuthMethod;
    }

    export namespace PajwohLqAuthenticationMethodRule {
      export interface AuthMethod {
        /**
         * The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176.
         */
        auth_method: string;
      }
    }

    /**
     * Enforces a device posture rule has run successfully
     */
    export interface PajwohLqDevicePostureRule {
      device_posture: PajwohLqDevicePostureRule.DevicePosture;
    }

    export namespace PajwohLqDevicePostureRule {
      export interface DevicePosture {
        /**
         * The ID of a device posture integration.
         */
        integration_uid: string;
      }
    }

    /**
     * Matches a specific email.
     */
    export interface PajwohLqEmailRule {
      email: PajwohLqEmailRule.Email;
    }

    export namespace PajwohLqEmailRule {
      export interface Email {
        /**
         * The email of the user.
         */
        email: string;
      }
    }

    /**
     * Matches an email address from a list.
     */
    export interface PajwohLqEmailListRule {
      email_list: PajwohLqEmailListRule.EmailList;
    }

    export namespace PajwohLqEmailListRule {
      export interface EmailList {
        /**
         * The ID of a previously created email list.
         */
        id: string;
      }
    }

    /**
     * Match an entire email domain.
     */
    export interface PajwohLqDomainRule {
      email_domain: PajwohLqDomainRule.EmailDomain;
    }

    export namespace PajwohLqDomainRule {
      export interface EmailDomain {
        /**
         * The email domain to match.
         */
        domain: string;
      }
    }

    /**
     * Matches everyone.
     */
    export interface PajwohLqEveryoneRule {
      /**
       * An empty object which matches on all users.
       */
      everyone: unknown;
    }

    /**
     * Matches an IP address block.
     */
    export interface PajwohLqIPRule {
      ip: PajwohLqIPRule.IP;
    }

    export namespace PajwohLqIPRule {
      export interface IP {
        /**
         * An IPv4 or IPv6 CIDR block.
         */
        ip: string;
      }
    }

    /**
     * Matches an IP address from a list.
     */
    export interface PajwohLqIPListRule {
      ip_list: PajwohLqIPListRule.IPList;
    }

    export namespace PajwohLqIPListRule {
      export interface IPList {
        /**
         * The ID of a previously created IP list.
         */
        id: string;
      }
    }

    /**
     * Matches any valid client certificate.
     */
    export interface PajwohLqCertificateRule {
      certificate: unknown;
    }

    /**
     * Matches an Access group.
     */
    export interface PajwohLqAccessGroupRule {
      group: PajwohLqAccessGroupRule.Group;
    }

    export namespace PajwohLqAccessGroupRule {
      export interface Group {
        /**
         * The ID of a previously created Access group.
         */
        id: string;
      }
    }

    /**
     * Matches an Azure group. Requires an Azure identity provider.
     */
    export interface PajwohLqAzureGroupRule {
      azureAD: PajwohLqAzureGroupRule.AzureAd;
    }

    export namespace PajwohLqAzureGroupRule {
      export interface AzureAd {
        /**
         * The ID of an Azure group.
         */
        id: string;

        /**
         * The ID of your Azure identity provider.
         */
        connection_id: string;
      }
    }

    /**
     * Matches a Github organization. Requires a Github identity provider.
     */
    export interface PajwohLqGitHubOrganizationRule {
      'github-organization': PajwohLqGitHubOrganizationRule.GitHubOrganization;
    }

    export namespace PajwohLqGitHubOrganizationRule {
      export interface GitHubOrganization {
        /**
         * The ID of your Github identity provider.
         */
        connection_id: string;

        /**
         * The name of the organization.
         */
        name: string;
      }
    }

    /**
     * Matches a group in Google Workspace. Requires a Google Workspace identity
     * provider.
     */
    export interface PajwohLqGsuiteGroupRule {
      gsuite: PajwohLqGsuiteGroupRule.Gsuite;
    }

    export namespace PajwohLqGsuiteGroupRule {
      export interface Gsuite {
        /**
         * The ID of your Google Workspace identity provider.
         */
        connection_id: string;

        /**
         * The email of the Google Workspace group.
         */
        email: string;
      }
    }

    /**
     * Matches an Okta group. Requires an Okta identity provider.
     */
    export interface PajwohLqOktaGroupRule {
      okta: PajwohLqOktaGroupRule.Okta;
    }

    export namespace PajwohLqOktaGroupRule {
      export interface Okta {
        /**
         * The ID of your Okta identity provider.
         */
        connection_id: string;

        /**
         * The email of the Okta group.
         */
        email: string;
      }
    }

    /**
     * Matches a SAML group. Requires a SAML identity provider.
     */
    export interface PajwohLqSamlGroupRule {
      saml: PajwohLqSamlGroupRule.Saml;
    }

    export namespace PajwohLqSamlGroupRule {
      export interface Saml {
        /**
         * The name of the SAML attribute.
         */
        attribute_name: string;

        /**
         * The SAML attribute value to look for.
         */
        attribute_value: string;
      }
    }

    /**
     * Matches a specific Access Service Token
     */
    export interface PajwohLqServiceTokenRule {
      service_token: PajwohLqServiceTokenRule.ServiceToken;
    }

    export namespace PajwohLqServiceTokenRule {
      export interface ServiceToken {
        /**
         * The ID of a Service Token.
         */
        token_id: string;
      }
    }

    /**
     * Matches any valid Access Service Token
     */
    export interface PajwohLqAnyValidServiceTokenRule {
      /**
       * An empty object which matches on all service tokens.
       */
      any_valid_service_token: unknown;
    }

    /**
     * Create Allow or Block policies which evaluate the user based on custom criteria.
     */
    export interface PajwohLqExternalEvaluationRule {
      external_evaluation: PajwohLqExternalEvaluationRule.ExternalEvaluation;
    }

    export namespace PajwohLqExternalEvaluationRule {
      export interface ExternalEvaluation {
        /**
         * The API endpoint containing your business logic.
         */
        evaluate_url: string;

        /**
         * The API endpoint containing the key that Access uses to verify that the response
         * came from your API.
         */
        keys_url: string;
      }
    }

    /**
     * Matches a specific country
     */
    export interface PajwohLqCountryRule {
      geo: PajwohLqCountryRule.Geo;
    }

    export namespace PajwohLqCountryRule {
      export interface Geo {
        /**
         * The country code that should be matched.
         */
        country_code: string;
      }
    }

    /**
     * Enforce different MFA options
     */
    export interface PajwohLqAuthenticationMethodRule {
      auth_method: PajwohLqAuthenticationMethodRule.AuthMethod;
    }

    export namespace PajwohLqAuthenticationMethodRule {
      export interface AuthMethod {
        /**
         * The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176.
         */
        auth_method: string;
      }
    }

    /**
     * Enforces a device posture rule has run successfully
     */
    export interface PajwohLqDevicePostureRule {
      device_posture: PajwohLqDevicePostureRule.DevicePosture;
    }

    export namespace PajwohLqDevicePostureRule {
      export interface DevicePosture {
        /**
         * The ID of a device posture integration.
         */
        integration_uid: string;
      }
    }

    /**
     * Matches a specific email.
     */
    export interface PajwohLqEmailRule {
      email: PajwohLqEmailRule.Email;
    }

    export namespace PajwohLqEmailRule {
      export interface Email {
        /**
         * The email of the user.
         */
        email: string;
      }
    }

    /**
     * Matches an email address from a list.
     */
    export interface PajwohLqEmailListRule {
      email_list: PajwohLqEmailListRule.EmailList;
    }

    export namespace PajwohLqEmailListRule {
      export interface EmailList {
        /**
         * The ID of a previously created email list.
         */
        id: string;
      }
    }

    /**
     * Match an entire email domain.
     */
    export interface PajwohLqDomainRule {
      email_domain: PajwohLqDomainRule.EmailDomain;
    }

    export namespace PajwohLqDomainRule {
      export interface EmailDomain {
        /**
         * The email domain to match.
         */
        domain: string;
      }
    }

    /**
     * Matches everyone.
     */
    export interface PajwohLqEveryoneRule {
      /**
       * An empty object which matches on all users.
       */
      everyone: unknown;
    }

    /**
     * Matches an IP address block.
     */
    export interface PajwohLqIPRule {
      ip: PajwohLqIPRule.IP;
    }

    export namespace PajwohLqIPRule {
      export interface IP {
        /**
         * An IPv4 or IPv6 CIDR block.
         */
        ip: string;
      }
    }

    /**
     * Matches an IP address from a list.
     */
    export interface PajwohLqIPListRule {
      ip_list: PajwohLqIPListRule.IPList;
    }

    export namespace PajwohLqIPListRule {
      export interface IPList {
        /**
         * The ID of a previously created IP list.
         */
        id: string;
      }
    }

    /**
     * Matches any valid client certificate.
     */
    export interface PajwohLqCertificateRule {
      certificate: unknown;
    }

    /**
     * Matches an Access group.
     */
    export interface PajwohLqAccessGroupRule {
      group: PajwohLqAccessGroupRule.Group;
    }

    export namespace PajwohLqAccessGroupRule {
      export interface Group {
        /**
         * The ID of a previously created Access group.
         */
        id: string;
      }
    }

    /**
     * Matches an Azure group. Requires an Azure identity provider.
     */
    export interface PajwohLqAzureGroupRule {
      azureAD: PajwohLqAzureGroupRule.AzureAd;
    }

    export namespace PajwohLqAzureGroupRule {
      export interface AzureAd {
        /**
         * The ID of an Azure group.
         */
        id: string;

        /**
         * The ID of your Azure identity provider.
         */
        connection_id: string;
      }
    }

    /**
     * Matches a Github organization. Requires a Github identity provider.
     */
    export interface PajwohLqGitHubOrganizationRule {
      'github-organization': PajwohLqGitHubOrganizationRule.GitHubOrganization;
    }

    export namespace PajwohLqGitHubOrganizationRule {
      export interface GitHubOrganization {
        /**
         * The ID of your Github identity provider.
         */
        connection_id: string;

        /**
         * The name of the organization.
         */
        name: string;
      }
    }

    /**
     * Matches a group in Google Workspace. Requires a Google Workspace identity
     * provider.
     */
    export interface PajwohLqGsuiteGroupRule {
      gsuite: PajwohLqGsuiteGroupRule.Gsuite;
    }

    export namespace PajwohLqGsuiteGroupRule {
      export interface Gsuite {
        /**
         * The ID of your Google Workspace identity provider.
         */
        connection_id: string;

        /**
         * The email of the Google Workspace group.
         */
        email: string;
      }
    }

    /**
     * Matches an Okta group. Requires an Okta identity provider.
     */
    export interface PajwohLqOktaGroupRule {
      okta: PajwohLqOktaGroupRule.Okta;
    }

    export namespace PajwohLqOktaGroupRule {
      export interface Okta {
        /**
         * The ID of your Okta identity provider.
         */
        connection_id: string;

        /**
         * The email of the Okta group.
         */
        email: string;
      }
    }

    /**
     * Matches a SAML group. Requires a SAML identity provider.
     */
    export interface PajwohLqSamlGroupRule {
      saml: PajwohLqSamlGroupRule.Saml;
    }

    export namespace PajwohLqSamlGroupRule {
      export interface Saml {
        /**
         * The name of the SAML attribute.
         */
        attribute_name: string;

        /**
         * The SAML attribute value to look for.
         */
        attribute_value: string;
      }
    }

    /**
     * Matches a specific Access Service Token
     */
    export interface PajwohLqServiceTokenRule {
      service_token: PajwohLqServiceTokenRule.ServiceToken;
    }

    export namespace PajwohLqServiceTokenRule {
      export interface ServiceToken {
        /**
         * The ID of a Service Token.
         */
        token_id: string;
      }
    }

    /**
     * Matches any valid Access Service Token
     */
    export interface PajwohLqAnyValidServiceTokenRule {
      /**
       * An empty object which matches on all service tokens.
       */
      any_valid_service_token: unknown;
    }

    /**
     * Create Allow or Block policies which evaluate the user based on custom criteria.
     */
    export interface PajwohLqExternalEvaluationRule {
      external_evaluation: PajwohLqExternalEvaluationRule.ExternalEvaluation;
    }

    export namespace PajwohLqExternalEvaluationRule {
      export interface ExternalEvaluation {
        /**
         * The API endpoint containing your business logic.
         */
        evaluate_url: string;

        /**
         * The API endpoint containing the key that Access uses to verify that the response
         * came from your API.
         */
        keys_url: string;
      }
    }

    /**
     * Matches a specific country
     */
    export interface PajwohLqCountryRule {
      geo: PajwohLqCountryRule.Geo;
    }

    export namespace PajwohLqCountryRule {
      export interface Geo {
        /**
         * The country code that should be matched.
         */
        country_code: string;
      }
    }

    /**
     * Enforce different MFA options
     */
    export interface PajwohLqAuthenticationMethodRule {
      auth_method: PajwohLqAuthenticationMethodRule.AuthMethod;
    }

    export namespace PajwohLqAuthenticationMethodRule {
      export interface AuthMethod {
        /**
         * The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176.
         */
        auth_method: string;
      }
    }

    /**
     * Enforces a device posture rule has run successfully
     */
    export interface PajwohLqDevicePostureRule {
      device_posture: PajwohLqDevicePostureRule.DevicePosture;
    }

    export namespace PajwohLqDevicePostureRule {
      export interface DevicePosture {
        /**
         * The ID of a device posture integration.
         */
        integration_uid: string;
      }
    }

    /**
     * Matches a specific email.
     */
    export interface PajwohLqEmailRule {
      email: PajwohLqEmailRule.Email;
    }

    export namespace PajwohLqEmailRule {
      export interface Email {
        /**
         * The email of the user.
         */
        email: string;
      }
    }

    /**
     * Matches an email address from a list.
     */
    export interface PajwohLqEmailListRule {
      email_list: PajwohLqEmailListRule.EmailList;
    }

    export namespace PajwohLqEmailListRule {
      export interface EmailList {
        /**
         * The ID of a previously created email list.
         */
        id: string;
      }
    }

    /**
     * Match an entire email domain.
     */
    export interface PajwohLqDomainRule {
      email_domain: PajwohLqDomainRule.EmailDomain;
    }

    export namespace PajwohLqDomainRule {
      export interface EmailDomain {
        /**
         * The email domain to match.
         */
        domain: string;
      }
    }

    /**
     * Matches everyone.
     */
    export interface PajwohLqEveryoneRule {
      /**
       * An empty object which matches on all users.
       */
      everyone: unknown;
    }

    /**
     * Matches an IP address block.
     */
    export interface PajwohLqIPRule {
      ip: PajwohLqIPRule.IP;
    }

    export namespace PajwohLqIPRule {
      export interface IP {
        /**
         * An IPv4 or IPv6 CIDR block.
         */
        ip: string;
      }
    }

    /**
     * Matches an IP address from a list.
     */
    export interface PajwohLqIPListRule {
      ip_list: PajwohLqIPListRule.IPList;
    }

    export namespace PajwohLqIPListRule {
      export interface IPList {
        /**
         * The ID of a previously created IP list.
         */
        id: string;
      }
    }

    /**
     * Matches any valid client certificate.
     */
    export interface PajwohLqCertificateRule {
      certificate: unknown;
    }

    /**
     * Matches an Access group.
     */
    export interface PajwohLqAccessGroupRule {
      group: PajwohLqAccessGroupRule.Group;
    }

    export namespace PajwohLqAccessGroupRule {
      export interface Group {
        /**
         * The ID of a previously created Access group.
         */
        id: string;
      }
    }

    /**
     * Matches an Azure group. Requires an Azure identity provider.
     */
    export interface PajwohLqAzureGroupRule {
      azureAD: PajwohLqAzureGroupRule.AzureAd;
    }

    export namespace PajwohLqAzureGroupRule {
      export interface AzureAd {
        /**
         * The ID of an Azure group.
         */
        id: string;

        /**
         * The ID of your Azure identity provider.
         */
        connection_id: string;
      }
    }

    /**
     * Matches a Github organization. Requires a Github identity provider.
     */
    export interface PajwohLqGitHubOrganizationRule {
      'github-organization': PajwohLqGitHubOrganizationRule.GitHubOrganization;
    }

    export namespace PajwohLqGitHubOrganizationRule {
      export interface GitHubOrganization {
        /**
         * The ID of your Github identity provider.
         */
        connection_id: string;

        /**
         * The name of the organization.
         */
        name: string;
      }
    }

    /**
     * Matches a group in Google Workspace. Requires a Google Workspace identity
     * provider.
     */
    export interface PajwohLqGsuiteGroupRule {
      gsuite: PajwohLqGsuiteGroupRule.Gsuite;
    }

    export namespace PajwohLqGsuiteGroupRule {
      export interface Gsuite {
        /**
         * The ID of your Google Workspace identity provider.
         */
        connection_id: string;

        /**
         * The email of the Google Workspace group.
         */
        email: string;
      }
    }

    /**
     * Matches an Okta group. Requires an Okta identity provider.
     */
    export interface PajwohLqOktaGroupRule {
      okta: PajwohLqOktaGroupRule.Okta;
    }

    export namespace PajwohLqOktaGroupRule {
      export interface Okta {
        /**
         * The ID of your Okta identity provider.
         */
        connection_id: string;

        /**
         * The email of the Okta group.
         */
        email: string;
      }
    }

    /**
     * Matches a SAML group. Requires a SAML identity provider.
     */
    export interface PajwohLqSamlGroupRule {
      saml: PajwohLqSamlGroupRule.Saml;
    }

    export namespace PajwohLqSamlGroupRule {
      export interface Saml {
        /**
         * The name of the SAML attribute.
         */
        attribute_name: string;

        /**
         * The SAML attribute value to look for.
         */
        attribute_value: string;
      }
    }

    /**
     * Matches a specific Access Service Token
     */
    export interface PajwohLqServiceTokenRule {
      service_token: PajwohLqServiceTokenRule.ServiceToken;
    }

    export namespace PajwohLqServiceTokenRule {
      export interface ServiceToken {
        /**
         * The ID of a Service Token.
         */
        token_id: string;
      }
    }

    /**
     * Matches any valid Access Service Token
     */
    export interface PajwohLqAnyValidServiceTokenRule {
      /**
       * An empty object which matches on all service tokens.
       */
      any_valid_service_token: unknown;
    }

    /**
     * Create Allow or Block policies which evaluate the user based on custom criteria.
     */
    export interface PajwohLqExternalEvaluationRule {
      external_evaluation: PajwohLqExternalEvaluationRule.ExternalEvaluation;
    }

    export namespace PajwohLqExternalEvaluationRule {
      export interface ExternalEvaluation {
        /**
         * The API endpoint containing your business logic.
         */
        evaluate_url: string;

        /**
         * The API endpoint containing the key that Access uses to verify that the response
         * came from your API.
         */
        keys_url: string;
      }
    }

    /**
     * Matches a specific country
     */
    export interface PajwohLqCountryRule {
      geo: PajwohLqCountryRule.Geo;
    }

    export namespace PajwohLqCountryRule {
      export interface Geo {
        /**
         * The country code that should be matched.
         */
        country_code: string;
      }
    }

    /**
     * Enforce different MFA options
     */
    export interface PajwohLqAuthenticationMethodRule {
      auth_method: PajwohLqAuthenticationMethodRule.AuthMethod;
    }

    export namespace PajwohLqAuthenticationMethodRule {
      export interface AuthMethod {
        /**
         * The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176.
         */
        auth_method: string;
      }
    }

    /**
     * Enforces a device posture rule has run successfully
     */
    export interface PajwohLqDevicePostureRule {
      device_posture: PajwohLqDevicePostureRule.DevicePosture;
    }

    export namespace PajwohLqDevicePostureRule {
      export interface DevicePosture {
        /**
         * The ID of a device posture integration.
         */
        integration_uid: string;
      }
    }
  }
}

export interface GroupUpdateResponse {
  errors?: Array<GroupUpdateResponse.Error>;

  messages?: Array<GroupUpdateResponse.Message>;

  result?: GroupUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace GroupUpdateResponse {
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

    created_at?: string;

    /**
     * Rules evaluated with a NOT logical operator. To match a policy, a user cannot
     * meet any of the Exclude rules.
     */
    exclude?: Array<
      | Result.PajwohLqEmailRule
      | Result.PajwohLqEmailListRule
      | Result.PajwohLqDomainRule
      | Result.PajwohLqEveryoneRule
      | Result.PajwohLqIPRule
      | Result.PajwohLqIPListRule
      | Result.PajwohLqCertificateRule
      | Result.PajwohLqAccessGroupRule
      | Result.PajwohLqAzureGroupRule
      | Result.PajwohLqGitHubOrganizationRule
      | Result.PajwohLqGsuiteGroupRule
      | Result.PajwohLqOktaGroupRule
      | Result.PajwohLqSamlGroupRule
      | Result.PajwohLqServiceTokenRule
      | Result.PajwohLqAnyValidServiceTokenRule
      | Result.PajwohLqExternalEvaluationRule
      | Result.PajwohLqCountryRule
      | Result.PajwohLqAuthenticationMethodRule
      | Result.PajwohLqDevicePostureRule
    >;

    /**
     * Rules evaluated with an OR logical operator. A user needs to meet only one of
     * the Include rules.
     */
    include?: Array<
      | Result.PajwohLqEmailRule
      | Result.PajwohLqEmailListRule
      | Result.PajwohLqDomainRule
      | Result.PajwohLqEveryoneRule
      | Result.PajwohLqIPRule
      | Result.PajwohLqIPListRule
      | Result.PajwohLqCertificateRule
      | Result.PajwohLqAccessGroupRule
      | Result.PajwohLqAzureGroupRule
      | Result.PajwohLqGitHubOrganizationRule
      | Result.PajwohLqGsuiteGroupRule
      | Result.PajwohLqOktaGroupRule
      | Result.PajwohLqSamlGroupRule
      | Result.PajwohLqServiceTokenRule
      | Result.PajwohLqAnyValidServiceTokenRule
      | Result.PajwohLqExternalEvaluationRule
      | Result.PajwohLqCountryRule
      | Result.PajwohLqAuthenticationMethodRule
      | Result.PajwohLqDevicePostureRule
    >;

    /**
     * Rules evaluated with an AND logical operator. To match a policy, a user must
     * meet all of the Require rules.
     */
    is_default?: Array<
      | Result.PajwohLqEmailRule
      | Result.PajwohLqEmailListRule
      | Result.PajwohLqDomainRule
      | Result.PajwohLqEveryoneRule
      | Result.PajwohLqIPRule
      | Result.PajwohLqIPListRule
      | Result.PajwohLqCertificateRule
      | Result.PajwohLqAccessGroupRule
      | Result.PajwohLqAzureGroupRule
      | Result.PajwohLqGitHubOrganizationRule
      | Result.PajwohLqGsuiteGroupRule
      | Result.PajwohLqOktaGroupRule
      | Result.PajwohLqSamlGroupRule
      | Result.PajwohLqServiceTokenRule
      | Result.PajwohLqAnyValidServiceTokenRule
      | Result.PajwohLqExternalEvaluationRule
      | Result.PajwohLqCountryRule
      | Result.PajwohLqAuthenticationMethodRule
      | Result.PajwohLqDevicePostureRule
    >;

    /**
     * The name of the Access group.
     */
    name?: string;

    /**
     * Rules evaluated with an AND logical operator. To match a policy, a user must
     * meet all of the Require rules.
     */
    require?: Array<
      | Result.PajwohLqEmailRule
      | Result.PajwohLqEmailListRule
      | Result.PajwohLqDomainRule
      | Result.PajwohLqEveryoneRule
      | Result.PajwohLqIPRule
      | Result.PajwohLqIPListRule
      | Result.PajwohLqCertificateRule
      | Result.PajwohLqAccessGroupRule
      | Result.PajwohLqAzureGroupRule
      | Result.PajwohLqGitHubOrganizationRule
      | Result.PajwohLqGsuiteGroupRule
      | Result.PajwohLqOktaGroupRule
      | Result.PajwohLqSamlGroupRule
      | Result.PajwohLqServiceTokenRule
      | Result.PajwohLqAnyValidServiceTokenRule
      | Result.PajwohLqExternalEvaluationRule
      | Result.PajwohLqCountryRule
      | Result.PajwohLqAuthenticationMethodRule
      | Result.PajwohLqDevicePostureRule
    >;

    updated_at?: string;
  }

  export namespace Result {
    /**
     * Matches a specific email.
     */
    export interface PajwohLqEmailRule {
      email: PajwohLqEmailRule.Email;
    }

    export namespace PajwohLqEmailRule {
      export interface Email {
        /**
         * The email of the user.
         */
        email: string;
      }
    }

    /**
     * Matches an email address from a list.
     */
    export interface PajwohLqEmailListRule {
      email_list: PajwohLqEmailListRule.EmailList;
    }

    export namespace PajwohLqEmailListRule {
      export interface EmailList {
        /**
         * The ID of a previously created email list.
         */
        id: string;
      }
    }

    /**
     * Match an entire email domain.
     */
    export interface PajwohLqDomainRule {
      email_domain: PajwohLqDomainRule.EmailDomain;
    }

    export namespace PajwohLqDomainRule {
      export interface EmailDomain {
        /**
         * The email domain to match.
         */
        domain: string;
      }
    }

    /**
     * Matches everyone.
     */
    export interface PajwohLqEveryoneRule {
      /**
       * An empty object which matches on all users.
       */
      everyone: unknown;
    }

    /**
     * Matches an IP address block.
     */
    export interface PajwohLqIPRule {
      ip: PajwohLqIPRule.IP;
    }

    export namespace PajwohLqIPRule {
      export interface IP {
        /**
         * An IPv4 or IPv6 CIDR block.
         */
        ip: string;
      }
    }

    /**
     * Matches an IP address from a list.
     */
    export interface PajwohLqIPListRule {
      ip_list: PajwohLqIPListRule.IPList;
    }

    export namespace PajwohLqIPListRule {
      export interface IPList {
        /**
         * The ID of a previously created IP list.
         */
        id: string;
      }
    }

    /**
     * Matches any valid client certificate.
     */
    export interface PajwohLqCertificateRule {
      certificate: unknown;
    }

    /**
     * Matches an Access group.
     */
    export interface PajwohLqAccessGroupRule {
      group: PajwohLqAccessGroupRule.Group;
    }

    export namespace PajwohLqAccessGroupRule {
      export interface Group {
        /**
         * The ID of a previously created Access group.
         */
        id: string;
      }
    }

    /**
     * Matches an Azure group. Requires an Azure identity provider.
     */
    export interface PajwohLqAzureGroupRule {
      azureAD: PajwohLqAzureGroupRule.AzureAd;
    }

    export namespace PajwohLqAzureGroupRule {
      export interface AzureAd {
        /**
         * The ID of an Azure group.
         */
        id: string;

        /**
         * The ID of your Azure identity provider.
         */
        connection_id: string;
      }
    }

    /**
     * Matches a Github organization. Requires a Github identity provider.
     */
    export interface PajwohLqGitHubOrganizationRule {
      'github-organization': PajwohLqGitHubOrganizationRule.GitHubOrganization;
    }

    export namespace PajwohLqGitHubOrganizationRule {
      export interface GitHubOrganization {
        /**
         * The ID of your Github identity provider.
         */
        connection_id: string;

        /**
         * The name of the organization.
         */
        name: string;
      }
    }

    /**
     * Matches a group in Google Workspace. Requires a Google Workspace identity
     * provider.
     */
    export interface PajwohLqGsuiteGroupRule {
      gsuite: PajwohLqGsuiteGroupRule.Gsuite;
    }

    export namespace PajwohLqGsuiteGroupRule {
      export interface Gsuite {
        /**
         * The ID of your Google Workspace identity provider.
         */
        connection_id: string;

        /**
         * The email of the Google Workspace group.
         */
        email: string;
      }
    }

    /**
     * Matches an Okta group. Requires an Okta identity provider.
     */
    export interface PajwohLqOktaGroupRule {
      okta: PajwohLqOktaGroupRule.Okta;
    }

    export namespace PajwohLqOktaGroupRule {
      export interface Okta {
        /**
         * The ID of your Okta identity provider.
         */
        connection_id: string;

        /**
         * The email of the Okta group.
         */
        email: string;
      }
    }

    /**
     * Matches a SAML group. Requires a SAML identity provider.
     */
    export interface PajwohLqSamlGroupRule {
      saml: PajwohLqSamlGroupRule.Saml;
    }

    export namespace PajwohLqSamlGroupRule {
      export interface Saml {
        /**
         * The name of the SAML attribute.
         */
        attribute_name: string;

        /**
         * The SAML attribute value to look for.
         */
        attribute_value: string;
      }
    }

    /**
     * Matches a specific Access Service Token
     */
    export interface PajwohLqServiceTokenRule {
      service_token: PajwohLqServiceTokenRule.ServiceToken;
    }

    export namespace PajwohLqServiceTokenRule {
      export interface ServiceToken {
        /**
         * The ID of a Service Token.
         */
        token_id: string;
      }
    }

    /**
     * Matches any valid Access Service Token
     */
    export interface PajwohLqAnyValidServiceTokenRule {
      /**
       * An empty object which matches on all service tokens.
       */
      any_valid_service_token: unknown;
    }

    /**
     * Create Allow or Block policies which evaluate the user based on custom criteria.
     */
    export interface PajwohLqExternalEvaluationRule {
      external_evaluation: PajwohLqExternalEvaluationRule.ExternalEvaluation;
    }

    export namespace PajwohLqExternalEvaluationRule {
      export interface ExternalEvaluation {
        /**
         * The API endpoint containing your business logic.
         */
        evaluate_url: string;

        /**
         * The API endpoint containing the key that Access uses to verify that the response
         * came from your API.
         */
        keys_url: string;
      }
    }

    /**
     * Matches a specific country
     */
    export interface PajwohLqCountryRule {
      geo: PajwohLqCountryRule.Geo;
    }

    export namespace PajwohLqCountryRule {
      export interface Geo {
        /**
         * The country code that should be matched.
         */
        country_code: string;
      }
    }

    /**
     * Enforce different MFA options
     */
    export interface PajwohLqAuthenticationMethodRule {
      auth_method: PajwohLqAuthenticationMethodRule.AuthMethod;
    }

    export namespace PajwohLqAuthenticationMethodRule {
      export interface AuthMethod {
        /**
         * The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176.
         */
        auth_method: string;
      }
    }

    /**
     * Enforces a device posture rule has run successfully
     */
    export interface PajwohLqDevicePostureRule {
      device_posture: PajwohLqDevicePostureRule.DevicePosture;
    }

    export namespace PajwohLqDevicePostureRule {
      export interface DevicePosture {
        /**
         * The ID of a device posture integration.
         */
        integration_uid: string;
      }
    }

    /**
     * Matches a specific email.
     */
    export interface PajwohLqEmailRule {
      email: PajwohLqEmailRule.Email;
    }

    export namespace PajwohLqEmailRule {
      export interface Email {
        /**
         * The email of the user.
         */
        email: string;
      }
    }

    /**
     * Matches an email address from a list.
     */
    export interface PajwohLqEmailListRule {
      email_list: PajwohLqEmailListRule.EmailList;
    }

    export namespace PajwohLqEmailListRule {
      export interface EmailList {
        /**
         * The ID of a previously created email list.
         */
        id: string;
      }
    }

    /**
     * Match an entire email domain.
     */
    export interface PajwohLqDomainRule {
      email_domain: PajwohLqDomainRule.EmailDomain;
    }

    export namespace PajwohLqDomainRule {
      export interface EmailDomain {
        /**
         * The email domain to match.
         */
        domain: string;
      }
    }

    /**
     * Matches everyone.
     */
    export interface PajwohLqEveryoneRule {
      /**
       * An empty object which matches on all users.
       */
      everyone: unknown;
    }

    /**
     * Matches an IP address block.
     */
    export interface PajwohLqIPRule {
      ip: PajwohLqIPRule.IP;
    }

    export namespace PajwohLqIPRule {
      export interface IP {
        /**
         * An IPv4 or IPv6 CIDR block.
         */
        ip: string;
      }
    }

    /**
     * Matches an IP address from a list.
     */
    export interface PajwohLqIPListRule {
      ip_list: PajwohLqIPListRule.IPList;
    }

    export namespace PajwohLqIPListRule {
      export interface IPList {
        /**
         * The ID of a previously created IP list.
         */
        id: string;
      }
    }

    /**
     * Matches any valid client certificate.
     */
    export interface PajwohLqCertificateRule {
      certificate: unknown;
    }

    /**
     * Matches an Access group.
     */
    export interface PajwohLqAccessGroupRule {
      group: PajwohLqAccessGroupRule.Group;
    }

    export namespace PajwohLqAccessGroupRule {
      export interface Group {
        /**
         * The ID of a previously created Access group.
         */
        id: string;
      }
    }

    /**
     * Matches an Azure group. Requires an Azure identity provider.
     */
    export interface PajwohLqAzureGroupRule {
      azureAD: PajwohLqAzureGroupRule.AzureAd;
    }

    export namespace PajwohLqAzureGroupRule {
      export interface AzureAd {
        /**
         * The ID of an Azure group.
         */
        id: string;

        /**
         * The ID of your Azure identity provider.
         */
        connection_id: string;
      }
    }

    /**
     * Matches a Github organization. Requires a Github identity provider.
     */
    export interface PajwohLqGitHubOrganizationRule {
      'github-organization': PajwohLqGitHubOrganizationRule.GitHubOrganization;
    }

    export namespace PajwohLqGitHubOrganizationRule {
      export interface GitHubOrganization {
        /**
         * The ID of your Github identity provider.
         */
        connection_id: string;

        /**
         * The name of the organization.
         */
        name: string;
      }
    }

    /**
     * Matches a group in Google Workspace. Requires a Google Workspace identity
     * provider.
     */
    export interface PajwohLqGsuiteGroupRule {
      gsuite: PajwohLqGsuiteGroupRule.Gsuite;
    }

    export namespace PajwohLqGsuiteGroupRule {
      export interface Gsuite {
        /**
         * The ID of your Google Workspace identity provider.
         */
        connection_id: string;

        /**
         * The email of the Google Workspace group.
         */
        email: string;
      }
    }

    /**
     * Matches an Okta group. Requires an Okta identity provider.
     */
    export interface PajwohLqOktaGroupRule {
      okta: PajwohLqOktaGroupRule.Okta;
    }

    export namespace PajwohLqOktaGroupRule {
      export interface Okta {
        /**
         * The ID of your Okta identity provider.
         */
        connection_id: string;

        /**
         * The email of the Okta group.
         */
        email: string;
      }
    }

    /**
     * Matches a SAML group. Requires a SAML identity provider.
     */
    export interface PajwohLqSamlGroupRule {
      saml: PajwohLqSamlGroupRule.Saml;
    }

    export namespace PajwohLqSamlGroupRule {
      export interface Saml {
        /**
         * The name of the SAML attribute.
         */
        attribute_name: string;

        /**
         * The SAML attribute value to look for.
         */
        attribute_value: string;
      }
    }

    /**
     * Matches a specific Access Service Token
     */
    export interface PajwohLqServiceTokenRule {
      service_token: PajwohLqServiceTokenRule.ServiceToken;
    }

    export namespace PajwohLqServiceTokenRule {
      export interface ServiceToken {
        /**
         * The ID of a Service Token.
         */
        token_id: string;
      }
    }

    /**
     * Matches any valid Access Service Token
     */
    export interface PajwohLqAnyValidServiceTokenRule {
      /**
       * An empty object which matches on all service tokens.
       */
      any_valid_service_token: unknown;
    }

    /**
     * Create Allow or Block policies which evaluate the user based on custom criteria.
     */
    export interface PajwohLqExternalEvaluationRule {
      external_evaluation: PajwohLqExternalEvaluationRule.ExternalEvaluation;
    }

    export namespace PajwohLqExternalEvaluationRule {
      export interface ExternalEvaluation {
        /**
         * The API endpoint containing your business logic.
         */
        evaluate_url: string;

        /**
         * The API endpoint containing the key that Access uses to verify that the response
         * came from your API.
         */
        keys_url: string;
      }
    }

    /**
     * Matches a specific country
     */
    export interface PajwohLqCountryRule {
      geo: PajwohLqCountryRule.Geo;
    }

    export namespace PajwohLqCountryRule {
      export interface Geo {
        /**
         * The country code that should be matched.
         */
        country_code: string;
      }
    }

    /**
     * Enforce different MFA options
     */
    export interface PajwohLqAuthenticationMethodRule {
      auth_method: PajwohLqAuthenticationMethodRule.AuthMethod;
    }

    export namespace PajwohLqAuthenticationMethodRule {
      export interface AuthMethod {
        /**
         * The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176.
         */
        auth_method: string;
      }
    }

    /**
     * Enforces a device posture rule has run successfully
     */
    export interface PajwohLqDevicePostureRule {
      device_posture: PajwohLqDevicePostureRule.DevicePosture;
    }

    export namespace PajwohLqDevicePostureRule {
      export interface DevicePosture {
        /**
         * The ID of a device posture integration.
         */
        integration_uid: string;
      }
    }

    /**
     * Matches a specific email.
     */
    export interface PajwohLqEmailRule {
      email: PajwohLqEmailRule.Email;
    }

    export namespace PajwohLqEmailRule {
      export interface Email {
        /**
         * The email of the user.
         */
        email: string;
      }
    }

    /**
     * Matches an email address from a list.
     */
    export interface PajwohLqEmailListRule {
      email_list: PajwohLqEmailListRule.EmailList;
    }

    export namespace PajwohLqEmailListRule {
      export interface EmailList {
        /**
         * The ID of a previously created email list.
         */
        id: string;
      }
    }

    /**
     * Match an entire email domain.
     */
    export interface PajwohLqDomainRule {
      email_domain: PajwohLqDomainRule.EmailDomain;
    }

    export namespace PajwohLqDomainRule {
      export interface EmailDomain {
        /**
         * The email domain to match.
         */
        domain: string;
      }
    }

    /**
     * Matches everyone.
     */
    export interface PajwohLqEveryoneRule {
      /**
       * An empty object which matches on all users.
       */
      everyone: unknown;
    }

    /**
     * Matches an IP address block.
     */
    export interface PajwohLqIPRule {
      ip: PajwohLqIPRule.IP;
    }

    export namespace PajwohLqIPRule {
      export interface IP {
        /**
         * An IPv4 or IPv6 CIDR block.
         */
        ip: string;
      }
    }

    /**
     * Matches an IP address from a list.
     */
    export interface PajwohLqIPListRule {
      ip_list: PajwohLqIPListRule.IPList;
    }

    export namespace PajwohLqIPListRule {
      export interface IPList {
        /**
         * The ID of a previously created IP list.
         */
        id: string;
      }
    }

    /**
     * Matches any valid client certificate.
     */
    export interface PajwohLqCertificateRule {
      certificate: unknown;
    }

    /**
     * Matches an Access group.
     */
    export interface PajwohLqAccessGroupRule {
      group: PajwohLqAccessGroupRule.Group;
    }

    export namespace PajwohLqAccessGroupRule {
      export interface Group {
        /**
         * The ID of a previously created Access group.
         */
        id: string;
      }
    }

    /**
     * Matches an Azure group. Requires an Azure identity provider.
     */
    export interface PajwohLqAzureGroupRule {
      azureAD: PajwohLqAzureGroupRule.AzureAd;
    }

    export namespace PajwohLqAzureGroupRule {
      export interface AzureAd {
        /**
         * The ID of an Azure group.
         */
        id: string;

        /**
         * The ID of your Azure identity provider.
         */
        connection_id: string;
      }
    }

    /**
     * Matches a Github organization. Requires a Github identity provider.
     */
    export interface PajwohLqGitHubOrganizationRule {
      'github-organization': PajwohLqGitHubOrganizationRule.GitHubOrganization;
    }

    export namespace PajwohLqGitHubOrganizationRule {
      export interface GitHubOrganization {
        /**
         * The ID of your Github identity provider.
         */
        connection_id: string;

        /**
         * The name of the organization.
         */
        name: string;
      }
    }

    /**
     * Matches a group in Google Workspace. Requires a Google Workspace identity
     * provider.
     */
    export interface PajwohLqGsuiteGroupRule {
      gsuite: PajwohLqGsuiteGroupRule.Gsuite;
    }

    export namespace PajwohLqGsuiteGroupRule {
      export interface Gsuite {
        /**
         * The ID of your Google Workspace identity provider.
         */
        connection_id: string;

        /**
         * The email of the Google Workspace group.
         */
        email: string;
      }
    }

    /**
     * Matches an Okta group. Requires an Okta identity provider.
     */
    export interface PajwohLqOktaGroupRule {
      okta: PajwohLqOktaGroupRule.Okta;
    }

    export namespace PajwohLqOktaGroupRule {
      export interface Okta {
        /**
         * The ID of your Okta identity provider.
         */
        connection_id: string;

        /**
         * The email of the Okta group.
         */
        email: string;
      }
    }

    /**
     * Matches a SAML group. Requires a SAML identity provider.
     */
    export interface PajwohLqSamlGroupRule {
      saml: PajwohLqSamlGroupRule.Saml;
    }

    export namespace PajwohLqSamlGroupRule {
      export interface Saml {
        /**
         * The name of the SAML attribute.
         */
        attribute_name: string;

        /**
         * The SAML attribute value to look for.
         */
        attribute_value: string;
      }
    }

    /**
     * Matches a specific Access Service Token
     */
    export interface PajwohLqServiceTokenRule {
      service_token: PajwohLqServiceTokenRule.ServiceToken;
    }

    export namespace PajwohLqServiceTokenRule {
      export interface ServiceToken {
        /**
         * The ID of a Service Token.
         */
        token_id: string;
      }
    }

    /**
     * Matches any valid Access Service Token
     */
    export interface PajwohLqAnyValidServiceTokenRule {
      /**
       * An empty object which matches on all service tokens.
       */
      any_valid_service_token: unknown;
    }

    /**
     * Create Allow or Block policies which evaluate the user based on custom criteria.
     */
    export interface PajwohLqExternalEvaluationRule {
      external_evaluation: PajwohLqExternalEvaluationRule.ExternalEvaluation;
    }

    export namespace PajwohLqExternalEvaluationRule {
      export interface ExternalEvaluation {
        /**
         * The API endpoint containing your business logic.
         */
        evaluate_url: string;

        /**
         * The API endpoint containing the key that Access uses to verify that the response
         * came from your API.
         */
        keys_url: string;
      }
    }

    /**
     * Matches a specific country
     */
    export interface PajwohLqCountryRule {
      geo: PajwohLqCountryRule.Geo;
    }

    export namespace PajwohLqCountryRule {
      export interface Geo {
        /**
         * The country code that should be matched.
         */
        country_code: string;
      }
    }

    /**
     * Enforce different MFA options
     */
    export interface PajwohLqAuthenticationMethodRule {
      auth_method: PajwohLqAuthenticationMethodRule.AuthMethod;
    }

    export namespace PajwohLqAuthenticationMethodRule {
      export interface AuthMethod {
        /**
         * The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176.
         */
        auth_method: string;
      }
    }

    /**
     * Enforces a device posture rule has run successfully
     */
    export interface PajwohLqDevicePostureRule {
      device_posture: PajwohLqDevicePostureRule.DevicePosture;
    }

    export namespace PajwohLqDevicePostureRule {
      export interface DevicePosture {
        /**
         * The ID of a device posture integration.
         */
        integration_uid: string;
      }
    }

    /**
     * Matches a specific email.
     */
    export interface PajwohLqEmailRule {
      email: PajwohLqEmailRule.Email;
    }

    export namespace PajwohLqEmailRule {
      export interface Email {
        /**
         * The email of the user.
         */
        email: string;
      }
    }

    /**
     * Matches an email address from a list.
     */
    export interface PajwohLqEmailListRule {
      email_list: PajwohLqEmailListRule.EmailList;
    }

    export namespace PajwohLqEmailListRule {
      export interface EmailList {
        /**
         * The ID of a previously created email list.
         */
        id: string;
      }
    }

    /**
     * Match an entire email domain.
     */
    export interface PajwohLqDomainRule {
      email_domain: PajwohLqDomainRule.EmailDomain;
    }

    export namespace PajwohLqDomainRule {
      export interface EmailDomain {
        /**
         * The email domain to match.
         */
        domain: string;
      }
    }

    /**
     * Matches everyone.
     */
    export interface PajwohLqEveryoneRule {
      /**
       * An empty object which matches on all users.
       */
      everyone: unknown;
    }

    /**
     * Matches an IP address block.
     */
    export interface PajwohLqIPRule {
      ip: PajwohLqIPRule.IP;
    }

    export namespace PajwohLqIPRule {
      export interface IP {
        /**
         * An IPv4 or IPv6 CIDR block.
         */
        ip: string;
      }
    }

    /**
     * Matches an IP address from a list.
     */
    export interface PajwohLqIPListRule {
      ip_list: PajwohLqIPListRule.IPList;
    }

    export namespace PajwohLqIPListRule {
      export interface IPList {
        /**
         * The ID of a previously created IP list.
         */
        id: string;
      }
    }

    /**
     * Matches any valid client certificate.
     */
    export interface PajwohLqCertificateRule {
      certificate: unknown;
    }

    /**
     * Matches an Access group.
     */
    export interface PajwohLqAccessGroupRule {
      group: PajwohLqAccessGroupRule.Group;
    }

    export namespace PajwohLqAccessGroupRule {
      export interface Group {
        /**
         * The ID of a previously created Access group.
         */
        id: string;
      }
    }

    /**
     * Matches an Azure group. Requires an Azure identity provider.
     */
    export interface PajwohLqAzureGroupRule {
      azureAD: PajwohLqAzureGroupRule.AzureAd;
    }

    export namespace PajwohLqAzureGroupRule {
      export interface AzureAd {
        /**
         * The ID of an Azure group.
         */
        id: string;

        /**
         * The ID of your Azure identity provider.
         */
        connection_id: string;
      }
    }

    /**
     * Matches a Github organization. Requires a Github identity provider.
     */
    export interface PajwohLqGitHubOrganizationRule {
      'github-organization': PajwohLqGitHubOrganizationRule.GitHubOrganization;
    }

    export namespace PajwohLqGitHubOrganizationRule {
      export interface GitHubOrganization {
        /**
         * The ID of your Github identity provider.
         */
        connection_id: string;

        /**
         * The name of the organization.
         */
        name: string;
      }
    }

    /**
     * Matches a group in Google Workspace. Requires a Google Workspace identity
     * provider.
     */
    export interface PajwohLqGsuiteGroupRule {
      gsuite: PajwohLqGsuiteGroupRule.Gsuite;
    }

    export namespace PajwohLqGsuiteGroupRule {
      export interface Gsuite {
        /**
         * The ID of your Google Workspace identity provider.
         */
        connection_id: string;

        /**
         * The email of the Google Workspace group.
         */
        email: string;
      }
    }

    /**
     * Matches an Okta group. Requires an Okta identity provider.
     */
    export interface PajwohLqOktaGroupRule {
      okta: PajwohLqOktaGroupRule.Okta;
    }

    export namespace PajwohLqOktaGroupRule {
      export interface Okta {
        /**
         * The ID of your Okta identity provider.
         */
        connection_id: string;

        /**
         * The email of the Okta group.
         */
        email: string;
      }
    }

    /**
     * Matches a SAML group. Requires a SAML identity provider.
     */
    export interface PajwohLqSamlGroupRule {
      saml: PajwohLqSamlGroupRule.Saml;
    }

    export namespace PajwohLqSamlGroupRule {
      export interface Saml {
        /**
         * The name of the SAML attribute.
         */
        attribute_name: string;

        /**
         * The SAML attribute value to look for.
         */
        attribute_value: string;
      }
    }

    /**
     * Matches a specific Access Service Token
     */
    export interface PajwohLqServiceTokenRule {
      service_token: PajwohLqServiceTokenRule.ServiceToken;
    }

    export namespace PajwohLqServiceTokenRule {
      export interface ServiceToken {
        /**
         * The ID of a Service Token.
         */
        token_id: string;
      }
    }

    /**
     * Matches any valid Access Service Token
     */
    export interface PajwohLqAnyValidServiceTokenRule {
      /**
       * An empty object which matches on all service tokens.
       */
      any_valid_service_token: unknown;
    }

    /**
     * Create Allow or Block policies which evaluate the user based on custom criteria.
     */
    export interface PajwohLqExternalEvaluationRule {
      external_evaluation: PajwohLqExternalEvaluationRule.ExternalEvaluation;
    }

    export namespace PajwohLqExternalEvaluationRule {
      export interface ExternalEvaluation {
        /**
         * The API endpoint containing your business logic.
         */
        evaluate_url: string;

        /**
         * The API endpoint containing the key that Access uses to verify that the response
         * came from your API.
         */
        keys_url: string;
      }
    }

    /**
     * Matches a specific country
     */
    export interface PajwohLqCountryRule {
      geo: PajwohLqCountryRule.Geo;
    }

    export namespace PajwohLqCountryRule {
      export interface Geo {
        /**
         * The country code that should be matched.
         */
        country_code: string;
      }
    }

    /**
     * Enforce different MFA options
     */
    export interface PajwohLqAuthenticationMethodRule {
      auth_method: PajwohLqAuthenticationMethodRule.AuthMethod;
    }

    export namespace PajwohLqAuthenticationMethodRule {
      export interface AuthMethod {
        /**
         * The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176.
         */
        auth_method: string;
      }
    }

    /**
     * Enforces a device posture rule has run successfully
     */
    export interface PajwohLqDevicePostureRule {
      device_posture: PajwohLqDevicePostureRule.DevicePosture;
    }

    export namespace PajwohLqDevicePostureRule {
      export interface DevicePosture {
        /**
         * The ID of a device posture integration.
         */
        integration_uid: string;
      }
    }
  }
}

export interface GroupDeleteResponse {
  errors?: Array<GroupDeleteResponse.Error>;

  messages?: Array<GroupDeleteResponse.Message>;

  result?: GroupDeleteResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace GroupDeleteResponse {
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

export interface GroupAccessGroupsCreateAnAccessGroupResponse {
  errors?: Array<GroupAccessGroupsCreateAnAccessGroupResponse.Error>;

  messages?: Array<GroupAccessGroupsCreateAnAccessGroupResponse.Message>;

  result?: GroupAccessGroupsCreateAnAccessGroupResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace GroupAccessGroupsCreateAnAccessGroupResponse {
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

    created_at?: string;

    /**
     * Rules evaluated with a NOT logical operator. To match a policy, a user cannot
     * meet any of the Exclude rules.
     */
    exclude?: Array<
      | Result.PajwohLqEmailRule
      | Result.PajwohLqEmailListRule
      | Result.PajwohLqDomainRule
      | Result.PajwohLqEveryoneRule
      | Result.PajwohLqIPRule
      | Result.PajwohLqIPListRule
      | Result.PajwohLqCertificateRule
      | Result.PajwohLqAccessGroupRule
      | Result.PajwohLqAzureGroupRule
      | Result.PajwohLqGitHubOrganizationRule
      | Result.PajwohLqGsuiteGroupRule
      | Result.PajwohLqOktaGroupRule
      | Result.PajwohLqSamlGroupRule
      | Result.PajwohLqServiceTokenRule
      | Result.PajwohLqAnyValidServiceTokenRule
      | Result.PajwohLqExternalEvaluationRule
      | Result.PajwohLqCountryRule
      | Result.PajwohLqAuthenticationMethodRule
      | Result.PajwohLqDevicePostureRule
    >;

    /**
     * Rules evaluated with an OR logical operator. A user needs to meet only one of
     * the Include rules.
     */
    include?: Array<
      | Result.PajwohLqEmailRule
      | Result.PajwohLqEmailListRule
      | Result.PajwohLqDomainRule
      | Result.PajwohLqEveryoneRule
      | Result.PajwohLqIPRule
      | Result.PajwohLqIPListRule
      | Result.PajwohLqCertificateRule
      | Result.PajwohLqAccessGroupRule
      | Result.PajwohLqAzureGroupRule
      | Result.PajwohLqGitHubOrganizationRule
      | Result.PajwohLqGsuiteGroupRule
      | Result.PajwohLqOktaGroupRule
      | Result.PajwohLqSamlGroupRule
      | Result.PajwohLqServiceTokenRule
      | Result.PajwohLqAnyValidServiceTokenRule
      | Result.PajwohLqExternalEvaluationRule
      | Result.PajwohLqCountryRule
      | Result.PajwohLqAuthenticationMethodRule
      | Result.PajwohLqDevicePostureRule
    >;

    /**
     * Rules evaluated with an AND logical operator. To match a policy, a user must
     * meet all of the Require rules.
     */
    is_default?: Array<
      | Result.PajwohLqEmailRule
      | Result.PajwohLqEmailListRule
      | Result.PajwohLqDomainRule
      | Result.PajwohLqEveryoneRule
      | Result.PajwohLqIPRule
      | Result.PajwohLqIPListRule
      | Result.PajwohLqCertificateRule
      | Result.PajwohLqAccessGroupRule
      | Result.PajwohLqAzureGroupRule
      | Result.PajwohLqGitHubOrganizationRule
      | Result.PajwohLqGsuiteGroupRule
      | Result.PajwohLqOktaGroupRule
      | Result.PajwohLqSamlGroupRule
      | Result.PajwohLqServiceTokenRule
      | Result.PajwohLqAnyValidServiceTokenRule
      | Result.PajwohLqExternalEvaluationRule
      | Result.PajwohLqCountryRule
      | Result.PajwohLqAuthenticationMethodRule
      | Result.PajwohLqDevicePostureRule
    >;

    /**
     * The name of the Access group.
     */
    name?: string;

    /**
     * Rules evaluated with an AND logical operator. To match a policy, a user must
     * meet all of the Require rules.
     */
    require?: Array<
      | Result.PajwohLqEmailRule
      | Result.PajwohLqEmailListRule
      | Result.PajwohLqDomainRule
      | Result.PajwohLqEveryoneRule
      | Result.PajwohLqIPRule
      | Result.PajwohLqIPListRule
      | Result.PajwohLqCertificateRule
      | Result.PajwohLqAccessGroupRule
      | Result.PajwohLqAzureGroupRule
      | Result.PajwohLqGitHubOrganizationRule
      | Result.PajwohLqGsuiteGroupRule
      | Result.PajwohLqOktaGroupRule
      | Result.PajwohLqSamlGroupRule
      | Result.PajwohLqServiceTokenRule
      | Result.PajwohLqAnyValidServiceTokenRule
      | Result.PajwohLqExternalEvaluationRule
      | Result.PajwohLqCountryRule
      | Result.PajwohLqAuthenticationMethodRule
      | Result.PajwohLqDevicePostureRule
    >;

    updated_at?: string;
  }

  export namespace Result {
    /**
     * Matches a specific email.
     */
    export interface PajwohLqEmailRule {
      email: PajwohLqEmailRule.Email;
    }

    export namespace PajwohLqEmailRule {
      export interface Email {
        /**
         * The email of the user.
         */
        email: string;
      }
    }

    /**
     * Matches an email address from a list.
     */
    export interface PajwohLqEmailListRule {
      email_list: PajwohLqEmailListRule.EmailList;
    }

    export namespace PajwohLqEmailListRule {
      export interface EmailList {
        /**
         * The ID of a previously created email list.
         */
        id: string;
      }
    }

    /**
     * Match an entire email domain.
     */
    export interface PajwohLqDomainRule {
      email_domain: PajwohLqDomainRule.EmailDomain;
    }

    export namespace PajwohLqDomainRule {
      export interface EmailDomain {
        /**
         * The email domain to match.
         */
        domain: string;
      }
    }

    /**
     * Matches everyone.
     */
    export interface PajwohLqEveryoneRule {
      /**
       * An empty object which matches on all users.
       */
      everyone: unknown;
    }

    /**
     * Matches an IP address block.
     */
    export interface PajwohLqIPRule {
      ip: PajwohLqIPRule.IP;
    }

    export namespace PajwohLqIPRule {
      export interface IP {
        /**
         * An IPv4 or IPv6 CIDR block.
         */
        ip: string;
      }
    }

    /**
     * Matches an IP address from a list.
     */
    export interface PajwohLqIPListRule {
      ip_list: PajwohLqIPListRule.IPList;
    }

    export namespace PajwohLqIPListRule {
      export interface IPList {
        /**
         * The ID of a previously created IP list.
         */
        id: string;
      }
    }

    /**
     * Matches any valid client certificate.
     */
    export interface PajwohLqCertificateRule {
      certificate: unknown;
    }

    /**
     * Matches an Access group.
     */
    export interface PajwohLqAccessGroupRule {
      group: PajwohLqAccessGroupRule.Group;
    }

    export namespace PajwohLqAccessGroupRule {
      export interface Group {
        /**
         * The ID of a previously created Access group.
         */
        id: string;
      }
    }

    /**
     * Matches an Azure group. Requires an Azure identity provider.
     */
    export interface PajwohLqAzureGroupRule {
      azureAD: PajwohLqAzureGroupRule.AzureAd;
    }

    export namespace PajwohLqAzureGroupRule {
      export interface AzureAd {
        /**
         * The ID of an Azure group.
         */
        id: string;

        /**
         * The ID of your Azure identity provider.
         */
        connection_id: string;
      }
    }

    /**
     * Matches a Github organization. Requires a Github identity provider.
     */
    export interface PajwohLqGitHubOrganizationRule {
      'github-organization': PajwohLqGitHubOrganizationRule.GitHubOrganization;
    }

    export namespace PajwohLqGitHubOrganizationRule {
      export interface GitHubOrganization {
        /**
         * The ID of your Github identity provider.
         */
        connection_id: string;

        /**
         * The name of the organization.
         */
        name: string;
      }
    }

    /**
     * Matches a group in Google Workspace. Requires a Google Workspace identity
     * provider.
     */
    export interface PajwohLqGsuiteGroupRule {
      gsuite: PajwohLqGsuiteGroupRule.Gsuite;
    }

    export namespace PajwohLqGsuiteGroupRule {
      export interface Gsuite {
        /**
         * The ID of your Google Workspace identity provider.
         */
        connection_id: string;

        /**
         * The email of the Google Workspace group.
         */
        email: string;
      }
    }

    /**
     * Matches an Okta group. Requires an Okta identity provider.
     */
    export interface PajwohLqOktaGroupRule {
      okta: PajwohLqOktaGroupRule.Okta;
    }

    export namespace PajwohLqOktaGroupRule {
      export interface Okta {
        /**
         * The ID of your Okta identity provider.
         */
        connection_id: string;

        /**
         * The email of the Okta group.
         */
        email: string;
      }
    }

    /**
     * Matches a SAML group. Requires a SAML identity provider.
     */
    export interface PajwohLqSamlGroupRule {
      saml: PajwohLqSamlGroupRule.Saml;
    }

    export namespace PajwohLqSamlGroupRule {
      export interface Saml {
        /**
         * The name of the SAML attribute.
         */
        attribute_name: string;

        /**
         * The SAML attribute value to look for.
         */
        attribute_value: string;
      }
    }

    /**
     * Matches a specific Access Service Token
     */
    export interface PajwohLqServiceTokenRule {
      service_token: PajwohLqServiceTokenRule.ServiceToken;
    }

    export namespace PajwohLqServiceTokenRule {
      export interface ServiceToken {
        /**
         * The ID of a Service Token.
         */
        token_id: string;
      }
    }

    /**
     * Matches any valid Access Service Token
     */
    export interface PajwohLqAnyValidServiceTokenRule {
      /**
       * An empty object which matches on all service tokens.
       */
      any_valid_service_token: unknown;
    }

    /**
     * Create Allow or Block policies which evaluate the user based on custom criteria.
     */
    export interface PajwohLqExternalEvaluationRule {
      external_evaluation: PajwohLqExternalEvaluationRule.ExternalEvaluation;
    }

    export namespace PajwohLqExternalEvaluationRule {
      export interface ExternalEvaluation {
        /**
         * The API endpoint containing your business logic.
         */
        evaluate_url: string;

        /**
         * The API endpoint containing the key that Access uses to verify that the response
         * came from your API.
         */
        keys_url: string;
      }
    }

    /**
     * Matches a specific country
     */
    export interface PajwohLqCountryRule {
      geo: PajwohLqCountryRule.Geo;
    }

    export namespace PajwohLqCountryRule {
      export interface Geo {
        /**
         * The country code that should be matched.
         */
        country_code: string;
      }
    }

    /**
     * Enforce different MFA options
     */
    export interface PajwohLqAuthenticationMethodRule {
      auth_method: PajwohLqAuthenticationMethodRule.AuthMethod;
    }

    export namespace PajwohLqAuthenticationMethodRule {
      export interface AuthMethod {
        /**
         * The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176.
         */
        auth_method: string;
      }
    }

    /**
     * Enforces a device posture rule has run successfully
     */
    export interface PajwohLqDevicePostureRule {
      device_posture: PajwohLqDevicePostureRule.DevicePosture;
    }

    export namespace PajwohLqDevicePostureRule {
      export interface DevicePosture {
        /**
         * The ID of a device posture integration.
         */
        integration_uid: string;
      }
    }

    /**
     * Matches a specific email.
     */
    export interface PajwohLqEmailRule {
      email: PajwohLqEmailRule.Email;
    }

    export namespace PajwohLqEmailRule {
      export interface Email {
        /**
         * The email of the user.
         */
        email: string;
      }
    }

    /**
     * Matches an email address from a list.
     */
    export interface PajwohLqEmailListRule {
      email_list: PajwohLqEmailListRule.EmailList;
    }

    export namespace PajwohLqEmailListRule {
      export interface EmailList {
        /**
         * The ID of a previously created email list.
         */
        id: string;
      }
    }

    /**
     * Match an entire email domain.
     */
    export interface PajwohLqDomainRule {
      email_domain: PajwohLqDomainRule.EmailDomain;
    }

    export namespace PajwohLqDomainRule {
      export interface EmailDomain {
        /**
         * The email domain to match.
         */
        domain: string;
      }
    }

    /**
     * Matches everyone.
     */
    export interface PajwohLqEveryoneRule {
      /**
       * An empty object which matches on all users.
       */
      everyone: unknown;
    }

    /**
     * Matches an IP address block.
     */
    export interface PajwohLqIPRule {
      ip: PajwohLqIPRule.IP;
    }

    export namespace PajwohLqIPRule {
      export interface IP {
        /**
         * An IPv4 or IPv6 CIDR block.
         */
        ip: string;
      }
    }

    /**
     * Matches an IP address from a list.
     */
    export interface PajwohLqIPListRule {
      ip_list: PajwohLqIPListRule.IPList;
    }

    export namespace PajwohLqIPListRule {
      export interface IPList {
        /**
         * The ID of a previously created IP list.
         */
        id: string;
      }
    }

    /**
     * Matches any valid client certificate.
     */
    export interface PajwohLqCertificateRule {
      certificate: unknown;
    }

    /**
     * Matches an Access group.
     */
    export interface PajwohLqAccessGroupRule {
      group: PajwohLqAccessGroupRule.Group;
    }

    export namespace PajwohLqAccessGroupRule {
      export interface Group {
        /**
         * The ID of a previously created Access group.
         */
        id: string;
      }
    }

    /**
     * Matches an Azure group. Requires an Azure identity provider.
     */
    export interface PajwohLqAzureGroupRule {
      azureAD: PajwohLqAzureGroupRule.AzureAd;
    }

    export namespace PajwohLqAzureGroupRule {
      export interface AzureAd {
        /**
         * The ID of an Azure group.
         */
        id: string;

        /**
         * The ID of your Azure identity provider.
         */
        connection_id: string;
      }
    }

    /**
     * Matches a Github organization. Requires a Github identity provider.
     */
    export interface PajwohLqGitHubOrganizationRule {
      'github-organization': PajwohLqGitHubOrganizationRule.GitHubOrganization;
    }

    export namespace PajwohLqGitHubOrganizationRule {
      export interface GitHubOrganization {
        /**
         * The ID of your Github identity provider.
         */
        connection_id: string;

        /**
         * The name of the organization.
         */
        name: string;
      }
    }

    /**
     * Matches a group in Google Workspace. Requires a Google Workspace identity
     * provider.
     */
    export interface PajwohLqGsuiteGroupRule {
      gsuite: PajwohLqGsuiteGroupRule.Gsuite;
    }

    export namespace PajwohLqGsuiteGroupRule {
      export interface Gsuite {
        /**
         * The ID of your Google Workspace identity provider.
         */
        connection_id: string;

        /**
         * The email of the Google Workspace group.
         */
        email: string;
      }
    }

    /**
     * Matches an Okta group. Requires an Okta identity provider.
     */
    export interface PajwohLqOktaGroupRule {
      okta: PajwohLqOktaGroupRule.Okta;
    }

    export namespace PajwohLqOktaGroupRule {
      export interface Okta {
        /**
         * The ID of your Okta identity provider.
         */
        connection_id: string;

        /**
         * The email of the Okta group.
         */
        email: string;
      }
    }

    /**
     * Matches a SAML group. Requires a SAML identity provider.
     */
    export interface PajwohLqSamlGroupRule {
      saml: PajwohLqSamlGroupRule.Saml;
    }

    export namespace PajwohLqSamlGroupRule {
      export interface Saml {
        /**
         * The name of the SAML attribute.
         */
        attribute_name: string;

        /**
         * The SAML attribute value to look for.
         */
        attribute_value: string;
      }
    }

    /**
     * Matches a specific Access Service Token
     */
    export interface PajwohLqServiceTokenRule {
      service_token: PajwohLqServiceTokenRule.ServiceToken;
    }

    export namespace PajwohLqServiceTokenRule {
      export interface ServiceToken {
        /**
         * The ID of a Service Token.
         */
        token_id: string;
      }
    }

    /**
     * Matches any valid Access Service Token
     */
    export interface PajwohLqAnyValidServiceTokenRule {
      /**
       * An empty object which matches on all service tokens.
       */
      any_valid_service_token: unknown;
    }

    /**
     * Create Allow or Block policies which evaluate the user based on custom criteria.
     */
    export interface PajwohLqExternalEvaluationRule {
      external_evaluation: PajwohLqExternalEvaluationRule.ExternalEvaluation;
    }

    export namespace PajwohLqExternalEvaluationRule {
      export interface ExternalEvaluation {
        /**
         * The API endpoint containing your business logic.
         */
        evaluate_url: string;

        /**
         * The API endpoint containing the key that Access uses to verify that the response
         * came from your API.
         */
        keys_url: string;
      }
    }

    /**
     * Matches a specific country
     */
    export interface PajwohLqCountryRule {
      geo: PajwohLqCountryRule.Geo;
    }

    export namespace PajwohLqCountryRule {
      export interface Geo {
        /**
         * The country code that should be matched.
         */
        country_code: string;
      }
    }

    /**
     * Enforce different MFA options
     */
    export interface PajwohLqAuthenticationMethodRule {
      auth_method: PajwohLqAuthenticationMethodRule.AuthMethod;
    }

    export namespace PajwohLqAuthenticationMethodRule {
      export interface AuthMethod {
        /**
         * The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176.
         */
        auth_method: string;
      }
    }

    /**
     * Enforces a device posture rule has run successfully
     */
    export interface PajwohLqDevicePostureRule {
      device_posture: PajwohLqDevicePostureRule.DevicePosture;
    }

    export namespace PajwohLqDevicePostureRule {
      export interface DevicePosture {
        /**
         * The ID of a device posture integration.
         */
        integration_uid: string;
      }
    }

    /**
     * Matches a specific email.
     */
    export interface PajwohLqEmailRule {
      email: PajwohLqEmailRule.Email;
    }

    export namespace PajwohLqEmailRule {
      export interface Email {
        /**
         * The email of the user.
         */
        email: string;
      }
    }

    /**
     * Matches an email address from a list.
     */
    export interface PajwohLqEmailListRule {
      email_list: PajwohLqEmailListRule.EmailList;
    }

    export namespace PajwohLqEmailListRule {
      export interface EmailList {
        /**
         * The ID of a previously created email list.
         */
        id: string;
      }
    }

    /**
     * Match an entire email domain.
     */
    export interface PajwohLqDomainRule {
      email_domain: PajwohLqDomainRule.EmailDomain;
    }

    export namespace PajwohLqDomainRule {
      export interface EmailDomain {
        /**
         * The email domain to match.
         */
        domain: string;
      }
    }

    /**
     * Matches everyone.
     */
    export interface PajwohLqEveryoneRule {
      /**
       * An empty object which matches on all users.
       */
      everyone: unknown;
    }

    /**
     * Matches an IP address block.
     */
    export interface PajwohLqIPRule {
      ip: PajwohLqIPRule.IP;
    }

    export namespace PajwohLqIPRule {
      export interface IP {
        /**
         * An IPv4 or IPv6 CIDR block.
         */
        ip: string;
      }
    }

    /**
     * Matches an IP address from a list.
     */
    export interface PajwohLqIPListRule {
      ip_list: PajwohLqIPListRule.IPList;
    }

    export namespace PajwohLqIPListRule {
      export interface IPList {
        /**
         * The ID of a previously created IP list.
         */
        id: string;
      }
    }

    /**
     * Matches any valid client certificate.
     */
    export interface PajwohLqCertificateRule {
      certificate: unknown;
    }

    /**
     * Matches an Access group.
     */
    export interface PajwohLqAccessGroupRule {
      group: PajwohLqAccessGroupRule.Group;
    }

    export namespace PajwohLqAccessGroupRule {
      export interface Group {
        /**
         * The ID of a previously created Access group.
         */
        id: string;
      }
    }

    /**
     * Matches an Azure group. Requires an Azure identity provider.
     */
    export interface PajwohLqAzureGroupRule {
      azureAD: PajwohLqAzureGroupRule.AzureAd;
    }

    export namespace PajwohLqAzureGroupRule {
      export interface AzureAd {
        /**
         * The ID of an Azure group.
         */
        id: string;

        /**
         * The ID of your Azure identity provider.
         */
        connection_id: string;
      }
    }

    /**
     * Matches a Github organization. Requires a Github identity provider.
     */
    export interface PajwohLqGitHubOrganizationRule {
      'github-organization': PajwohLqGitHubOrganizationRule.GitHubOrganization;
    }

    export namespace PajwohLqGitHubOrganizationRule {
      export interface GitHubOrganization {
        /**
         * The ID of your Github identity provider.
         */
        connection_id: string;

        /**
         * The name of the organization.
         */
        name: string;
      }
    }

    /**
     * Matches a group in Google Workspace. Requires a Google Workspace identity
     * provider.
     */
    export interface PajwohLqGsuiteGroupRule {
      gsuite: PajwohLqGsuiteGroupRule.Gsuite;
    }

    export namespace PajwohLqGsuiteGroupRule {
      export interface Gsuite {
        /**
         * The ID of your Google Workspace identity provider.
         */
        connection_id: string;

        /**
         * The email of the Google Workspace group.
         */
        email: string;
      }
    }

    /**
     * Matches an Okta group. Requires an Okta identity provider.
     */
    export interface PajwohLqOktaGroupRule {
      okta: PajwohLqOktaGroupRule.Okta;
    }

    export namespace PajwohLqOktaGroupRule {
      export interface Okta {
        /**
         * The ID of your Okta identity provider.
         */
        connection_id: string;

        /**
         * The email of the Okta group.
         */
        email: string;
      }
    }

    /**
     * Matches a SAML group. Requires a SAML identity provider.
     */
    export interface PajwohLqSamlGroupRule {
      saml: PajwohLqSamlGroupRule.Saml;
    }

    export namespace PajwohLqSamlGroupRule {
      export interface Saml {
        /**
         * The name of the SAML attribute.
         */
        attribute_name: string;

        /**
         * The SAML attribute value to look for.
         */
        attribute_value: string;
      }
    }

    /**
     * Matches a specific Access Service Token
     */
    export interface PajwohLqServiceTokenRule {
      service_token: PajwohLqServiceTokenRule.ServiceToken;
    }

    export namespace PajwohLqServiceTokenRule {
      export interface ServiceToken {
        /**
         * The ID of a Service Token.
         */
        token_id: string;
      }
    }

    /**
     * Matches any valid Access Service Token
     */
    export interface PajwohLqAnyValidServiceTokenRule {
      /**
       * An empty object which matches on all service tokens.
       */
      any_valid_service_token: unknown;
    }

    /**
     * Create Allow or Block policies which evaluate the user based on custom criteria.
     */
    export interface PajwohLqExternalEvaluationRule {
      external_evaluation: PajwohLqExternalEvaluationRule.ExternalEvaluation;
    }

    export namespace PajwohLqExternalEvaluationRule {
      export interface ExternalEvaluation {
        /**
         * The API endpoint containing your business logic.
         */
        evaluate_url: string;

        /**
         * The API endpoint containing the key that Access uses to verify that the response
         * came from your API.
         */
        keys_url: string;
      }
    }

    /**
     * Matches a specific country
     */
    export interface PajwohLqCountryRule {
      geo: PajwohLqCountryRule.Geo;
    }

    export namespace PajwohLqCountryRule {
      export interface Geo {
        /**
         * The country code that should be matched.
         */
        country_code: string;
      }
    }

    /**
     * Enforce different MFA options
     */
    export interface PajwohLqAuthenticationMethodRule {
      auth_method: PajwohLqAuthenticationMethodRule.AuthMethod;
    }

    export namespace PajwohLqAuthenticationMethodRule {
      export interface AuthMethod {
        /**
         * The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176.
         */
        auth_method: string;
      }
    }

    /**
     * Enforces a device posture rule has run successfully
     */
    export interface PajwohLqDevicePostureRule {
      device_posture: PajwohLqDevicePostureRule.DevicePosture;
    }

    export namespace PajwohLqDevicePostureRule {
      export interface DevicePosture {
        /**
         * The ID of a device posture integration.
         */
        integration_uid: string;
      }
    }

    /**
     * Matches a specific email.
     */
    export interface PajwohLqEmailRule {
      email: PajwohLqEmailRule.Email;
    }

    export namespace PajwohLqEmailRule {
      export interface Email {
        /**
         * The email of the user.
         */
        email: string;
      }
    }

    /**
     * Matches an email address from a list.
     */
    export interface PajwohLqEmailListRule {
      email_list: PajwohLqEmailListRule.EmailList;
    }

    export namespace PajwohLqEmailListRule {
      export interface EmailList {
        /**
         * The ID of a previously created email list.
         */
        id: string;
      }
    }

    /**
     * Match an entire email domain.
     */
    export interface PajwohLqDomainRule {
      email_domain: PajwohLqDomainRule.EmailDomain;
    }

    export namespace PajwohLqDomainRule {
      export interface EmailDomain {
        /**
         * The email domain to match.
         */
        domain: string;
      }
    }

    /**
     * Matches everyone.
     */
    export interface PajwohLqEveryoneRule {
      /**
       * An empty object which matches on all users.
       */
      everyone: unknown;
    }

    /**
     * Matches an IP address block.
     */
    export interface PajwohLqIPRule {
      ip: PajwohLqIPRule.IP;
    }

    export namespace PajwohLqIPRule {
      export interface IP {
        /**
         * An IPv4 or IPv6 CIDR block.
         */
        ip: string;
      }
    }

    /**
     * Matches an IP address from a list.
     */
    export interface PajwohLqIPListRule {
      ip_list: PajwohLqIPListRule.IPList;
    }

    export namespace PajwohLqIPListRule {
      export interface IPList {
        /**
         * The ID of a previously created IP list.
         */
        id: string;
      }
    }

    /**
     * Matches any valid client certificate.
     */
    export interface PajwohLqCertificateRule {
      certificate: unknown;
    }

    /**
     * Matches an Access group.
     */
    export interface PajwohLqAccessGroupRule {
      group: PajwohLqAccessGroupRule.Group;
    }

    export namespace PajwohLqAccessGroupRule {
      export interface Group {
        /**
         * The ID of a previously created Access group.
         */
        id: string;
      }
    }

    /**
     * Matches an Azure group. Requires an Azure identity provider.
     */
    export interface PajwohLqAzureGroupRule {
      azureAD: PajwohLqAzureGroupRule.AzureAd;
    }

    export namespace PajwohLqAzureGroupRule {
      export interface AzureAd {
        /**
         * The ID of an Azure group.
         */
        id: string;

        /**
         * The ID of your Azure identity provider.
         */
        connection_id: string;
      }
    }

    /**
     * Matches a Github organization. Requires a Github identity provider.
     */
    export interface PajwohLqGitHubOrganizationRule {
      'github-organization': PajwohLqGitHubOrganizationRule.GitHubOrganization;
    }

    export namespace PajwohLqGitHubOrganizationRule {
      export interface GitHubOrganization {
        /**
         * The ID of your Github identity provider.
         */
        connection_id: string;

        /**
         * The name of the organization.
         */
        name: string;
      }
    }

    /**
     * Matches a group in Google Workspace. Requires a Google Workspace identity
     * provider.
     */
    export interface PajwohLqGsuiteGroupRule {
      gsuite: PajwohLqGsuiteGroupRule.Gsuite;
    }

    export namespace PajwohLqGsuiteGroupRule {
      export interface Gsuite {
        /**
         * The ID of your Google Workspace identity provider.
         */
        connection_id: string;

        /**
         * The email of the Google Workspace group.
         */
        email: string;
      }
    }

    /**
     * Matches an Okta group. Requires an Okta identity provider.
     */
    export interface PajwohLqOktaGroupRule {
      okta: PajwohLqOktaGroupRule.Okta;
    }

    export namespace PajwohLqOktaGroupRule {
      export interface Okta {
        /**
         * The ID of your Okta identity provider.
         */
        connection_id: string;

        /**
         * The email of the Okta group.
         */
        email: string;
      }
    }

    /**
     * Matches a SAML group. Requires a SAML identity provider.
     */
    export interface PajwohLqSamlGroupRule {
      saml: PajwohLqSamlGroupRule.Saml;
    }

    export namespace PajwohLqSamlGroupRule {
      export interface Saml {
        /**
         * The name of the SAML attribute.
         */
        attribute_name: string;

        /**
         * The SAML attribute value to look for.
         */
        attribute_value: string;
      }
    }

    /**
     * Matches a specific Access Service Token
     */
    export interface PajwohLqServiceTokenRule {
      service_token: PajwohLqServiceTokenRule.ServiceToken;
    }

    export namespace PajwohLqServiceTokenRule {
      export interface ServiceToken {
        /**
         * The ID of a Service Token.
         */
        token_id: string;
      }
    }

    /**
     * Matches any valid Access Service Token
     */
    export interface PajwohLqAnyValidServiceTokenRule {
      /**
       * An empty object which matches on all service tokens.
       */
      any_valid_service_token: unknown;
    }

    /**
     * Create Allow or Block policies which evaluate the user based on custom criteria.
     */
    export interface PajwohLqExternalEvaluationRule {
      external_evaluation: PajwohLqExternalEvaluationRule.ExternalEvaluation;
    }

    export namespace PajwohLqExternalEvaluationRule {
      export interface ExternalEvaluation {
        /**
         * The API endpoint containing your business logic.
         */
        evaluate_url: string;

        /**
         * The API endpoint containing the key that Access uses to verify that the response
         * came from your API.
         */
        keys_url: string;
      }
    }

    /**
     * Matches a specific country
     */
    export interface PajwohLqCountryRule {
      geo: PajwohLqCountryRule.Geo;
    }

    export namespace PajwohLqCountryRule {
      export interface Geo {
        /**
         * The country code that should be matched.
         */
        country_code: string;
      }
    }

    /**
     * Enforce different MFA options
     */
    export interface PajwohLqAuthenticationMethodRule {
      auth_method: PajwohLqAuthenticationMethodRule.AuthMethod;
    }

    export namespace PajwohLqAuthenticationMethodRule {
      export interface AuthMethod {
        /**
         * The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176.
         */
        auth_method: string;
      }
    }

    /**
     * Enforces a device posture rule has run successfully
     */
    export interface PajwohLqDevicePostureRule {
      device_posture: PajwohLqDevicePostureRule.DevicePosture;
    }

    export namespace PajwohLqDevicePostureRule {
      export interface DevicePosture {
        /**
         * The ID of a device posture integration.
         */
        integration_uid: string;
      }
    }
  }
}

export interface GroupAccessGroupsListAccessGroupsResponse {
  errors?: Array<GroupAccessGroupsListAccessGroupsResponse.Error>;

  messages?: Array<GroupAccessGroupsListAccessGroupsResponse.Message>;

  result?: Array<GroupAccessGroupsListAccessGroupsResponse.Result>;

  result_info?: GroupAccessGroupsListAccessGroupsResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace GroupAccessGroupsListAccessGroupsResponse {
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

    created_at?: string;

    /**
     * Rules evaluated with a NOT logical operator. To match a policy, a user cannot
     * meet any of the Exclude rules.
     */
    exclude?: Array<
      | Result.PajwohLqEmailRule
      | Result.PajwohLqEmailListRule
      | Result.PajwohLqDomainRule
      | Result.PajwohLqEveryoneRule
      | Result.PajwohLqIPRule
      | Result.PajwohLqIPListRule
      | Result.PajwohLqCertificateRule
      | Result.PajwohLqAccessGroupRule
      | Result.PajwohLqAzureGroupRule
      | Result.PajwohLqGitHubOrganizationRule
      | Result.PajwohLqGsuiteGroupRule
      | Result.PajwohLqOktaGroupRule
      | Result.PajwohLqSamlGroupRule
      | Result.PajwohLqServiceTokenRule
      | Result.PajwohLqAnyValidServiceTokenRule
      | Result.PajwohLqExternalEvaluationRule
      | Result.PajwohLqCountryRule
      | Result.PajwohLqAuthenticationMethodRule
      | Result.PajwohLqDevicePostureRule
    >;

    /**
     * Rules evaluated with an OR logical operator. A user needs to meet only one of
     * the Include rules.
     */
    include?: Array<
      | Result.PajwohLqEmailRule
      | Result.PajwohLqEmailListRule
      | Result.PajwohLqDomainRule
      | Result.PajwohLqEveryoneRule
      | Result.PajwohLqIPRule
      | Result.PajwohLqIPListRule
      | Result.PajwohLqCertificateRule
      | Result.PajwohLqAccessGroupRule
      | Result.PajwohLqAzureGroupRule
      | Result.PajwohLqGitHubOrganizationRule
      | Result.PajwohLqGsuiteGroupRule
      | Result.PajwohLqOktaGroupRule
      | Result.PajwohLqSamlGroupRule
      | Result.PajwohLqServiceTokenRule
      | Result.PajwohLqAnyValidServiceTokenRule
      | Result.PajwohLqExternalEvaluationRule
      | Result.PajwohLqCountryRule
      | Result.PajwohLqAuthenticationMethodRule
      | Result.PajwohLqDevicePostureRule
    >;

    /**
     * Rules evaluated with an AND logical operator. To match a policy, a user must
     * meet all of the Require rules.
     */
    is_default?: Array<
      | Result.PajwohLqEmailRule
      | Result.PajwohLqEmailListRule
      | Result.PajwohLqDomainRule
      | Result.PajwohLqEveryoneRule
      | Result.PajwohLqIPRule
      | Result.PajwohLqIPListRule
      | Result.PajwohLqCertificateRule
      | Result.PajwohLqAccessGroupRule
      | Result.PajwohLqAzureGroupRule
      | Result.PajwohLqGitHubOrganizationRule
      | Result.PajwohLqGsuiteGroupRule
      | Result.PajwohLqOktaGroupRule
      | Result.PajwohLqSamlGroupRule
      | Result.PajwohLqServiceTokenRule
      | Result.PajwohLqAnyValidServiceTokenRule
      | Result.PajwohLqExternalEvaluationRule
      | Result.PajwohLqCountryRule
      | Result.PajwohLqAuthenticationMethodRule
      | Result.PajwohLqDevicePostureRule
    >;

    /**
     * The name of the Access group.
     */
    name?: string;

    /**
     * Rules evaluated with an AND logical operator. To match a policy, a user must
     * meet all of the Require rules.
     */
    require?: Array<
      | Result.PajwohLqEmailRule
      | Result.PajwohLqEmailListRule
      | Result.PajwohLqDomainRule
      | Result.PajwohLqEveryoneRule
      | Result.PajwohLqIPRule
      | Result.PajwohLqIPListRule
      | Result.PajwohLqCertificateRule
      | Result.PajwohLqAccessGroupRule
      | Result.PajwohLqAzureGroupRule
      | Result.PajwohLqGitHubOrganizationRule
      | Result.PajwohLqGsuiteGroupRule
      | Result.PajwohLqOktaGroupRule
      | Result.PajwohLqSamlGroupRule
      | Result.PajwohLqServiceTokenRule
      | Result.PajwohLqAnyValidServiceTokenRule
      | Result.PajwohLqExternalEvaluationRule
      | Result.PajwohLqCountryRule
      | Result.PajwohLqAuthenticationMethodRule
      | Result.PajwohLqDevicePostureRule
    >;

    updated_at?: string;
  }

  export namespace Result {
    /**
     * Matches a specific email.
     */
    export interface PajwohLqEmailRule {
      email: PajwohLqEmailRule.Email;
    }

    export namespace PajwohLqEmailRule {
      export interface Email {
        /**
         * The email of the user.
         */
        email: string;
      }
    }

    /**
     * Matches an email address from a list.
     */
    export interface PajwohLqEmailListRule {
      email_list: PajwohLqEmailListRule.EmailList;
    }

    export namespace PajwohLqEmailListRule {
      export interface EmailList {
        /**
         * The ID of a previously created email list.
         */
        id: string;
      }
    }

    /**
     * Match an entire email domain.
     */
    export interface PajwohLqDomainRule {
      email_domain: PajwohLqDomainRule.EmailDomain;
    }

    export namespace PajwohLqDomainRule {
      export interface EmailDomain {
        /**
         * The email domain to match.
         */
        domain: string;
      }
    }

    /**
     * Matches everyone.
     */
    export interface PajwohLqEveryoneRule {
      /**
       * An empty object which matches on all users.
       */
      everyone: unknown;
    }

    /**
     * Matches an IP address block.
     */
    export interface PajwohLqIPRule {
      ip: PajwohLqIPRule.IP;
    }

    export namespace PajwohLqIPRule {
      export interface IP {
        /**
         * An IPv4 or IPv6 CIDR block.
         */
        ip: string;
      }
    }

    /**
     * Matches an IP address from a list.
     */
    export interface PajwohLqIPListRule {
      ip_list: PajwohLqIPListRule.IPList;
    }

    export namespace PajwohLqIPListRule {
      export interface IPList {
        /**
         * The ID of a previously created IP list.
         */
        id: string;
      }
    }

    /**
     * Matches any valid client certificate.
     */
    export interface PajwohLqCertificateRule {
      certificate: unknown;
    }

    /**
     * Matches an Access group.
     */
    export interface PajwohLqAccessGroupRule {
      group: PajwohLqAccessGroupRule.Group;
    }

    export namespace PajwohLqAccessGroupRule {
      export interface Group {
        /**
         * The ID of a previously created Access group.
         */
        id: string;
      }
    }

    /**
     * Matches an Azure group. Requires an Azure identity provider.
     */
    export interface PajwohLqAzureGroupRule {
      azureAD: PajwohLqAzureGroupRule.AzureAd;
    }

    export namespace PajwohLqAzureGroupRule {
      export interface AzureAd {
        /**
         * The ID of an Azure group.
         */
        id: string;

        /**
         * The ID of your Azure identity provider.
         */
        connection_id: string;
      }
    }

    /**
     * Matches a Github organization. Requires a Github identity provider.
     */
    export interface PajwohLqGitHubOrganizationRule {
      'github-organization': PajwohLqGitHubOrganizationRule.GitHubOrganization;
    }

    export namespace PajwohLqGitHubOrganizationRule {
      export interface GitHubOrganization {
        /**
         * The ID of your Github identity provider.
         */
        connection_id: string;

        /**
         * The name of the organization.
         */
        name: string;
      }
    }

    /**
     * Matches a group in Google Workspace. Requires a Google Workspace identity
     * provider.
     */
    export interface PajwohLqGsuiteGroupRule {
      gsuite: PajwohLqGsuiteGroupRule.Gsuite;
    }

    export namespace PajwohLqGsuiteGroupRule {
      export interface Gsuite {
        /**
         * The ID of your Google Workspace identity provider.
         */
        connection_id: string;

        /**
         * The email of the Google Workspace group.
         */
        email: string;
      }
    }

    /**
     * Matches an Okta group. Requires an Okta identity provider.
     */
    export interface PajwohLqOktaGroupRule {
      okta: PajwohLqOktaGroupRule.Okta;
    }

    export namespace PajwohLqOktaGroupRule {
      export interface Okta {
        /**
         * The ID of your Okta identity provider.
         */
        connection_id: string;

        /**
         * The email of the Okta group.
         */
        email: string;
      }
    }

    /**
     * Matches a SAML group. Requires a SAML identity provider.
     */
    export interface PajwohLqSamlGroupRule {
      saml: PajwohLqSamlGroupRule.Saml;
    }

    export namespace PajwohLqSamlGroupRule {
      export interface Saml {
        /**
         * The name of the SAML attribute.
         */
        attribute_name: string;

        /**
         * The SAML attribute value to look for.
         */
        attribute_value: string;
      }
    }

    /**
     * Matches a specific Access Service Token
     */
    export interface PajwohLqServiceTokenRule {
      service_token: PajwohLqServiceTokenRule.ServiceToken;
    }

    export namespace PajwohLqServiceTokenRule {
      export interface ServiceToken {
        /**
         * The ID of a Service Token.
         */
        token_id: string;
      }
    }

    /**
     * Matches any valid Access Service Token
     */
    export interface PajwohLqAnyValidServiceTokenRule {
      /**
       * An empty object which matches on all service tokens.
       */
      any_valid_service_token: unknown;
    }

    /**
     * Create Allow or Block policies which evaluate the user based on custom criteria.
     */
    export interface PajwohLqExternalEvaluationRule {
      external_evaluation: PajwohLqExternalEvaluationRule.ExternalEvaluation;
    }

    export namespace PajwohLqExternalEvaluationRule {
      export interface ExternalEvaluation {
        /**
         * The API endpoint containing your business logic.
         */
        evaluate_url: string;

        /**
         * The API endpoint containing the key that Access uses to verify that the response
         * came from your API.
         */
        keys_url: string;
      }
    }

    /**
     * Matches a specific country
     */
    export interface PajwohLqCountryRule {
      geo: PajwohLqCountryRule.Geo;
    }

    export namespace PajwohLqCountryRule {
      export interface Geo {
        /**
         * The country code that should be matched.
         */
        country_code: string;
      }
    }

    /**
     * Enforce different MFA options
     */
    export interface PajwohLqAuthenticationMethodRule {
      auth_method: PajwohLqAuthenticationMethodRule.AuthMethod;
    }

    export namespace PajwohLqAuthenticationMethodRule {
      export interface AuthMethod {
        /**
         * The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176.
         */
        auth_method: string;
      }
    }

    /**
     * Enforces a device posture rule has run successfully
     */
    export interface PajwohLqDevicePostureRule {
      device_posture: PajwohLqDevicePostureRule.DevicePosture;
    }

    export namespace PajwohLqDevicePostureRule {
      export interface DevicePosture {
        /**
         * The ID of a device posture integration.
         */
        integration_uid: string;
      }
    }

    /**
     * Matches a specific email.
     */
    export interface PajwohLqEmailRule {
      email: PajwohLqEmailRule.Email;
    }

    export namespace PajwohLqEmailRule {
      export interface Email {
        /**
         * The email of the user.
         */
        email: string;
      }
    }

    /**
     * Matches an email address from a list.
     */
    export interface PajwohLqEmailListRule {
      email_list: PajwohLqEmailListRule.EmailList;
    }

    export namespace PajwohLqEmailListRule {
      export interface EmailList {
        /**
         * The ID of a previously created email list.
         */
        id: string;
      }
    }

    /**
     * Match an entire email domain.
     */
    export interface PajwohLqDomainRule {
      email_domain: PajwohLqDomainRule.EmailDomain;
    }

    export namespace PajwohLqDomainRule {
      export interface EmailDomain {
        /**
         * The email domain to match.
         */
        domain: string;
      }
    }

    /**
     * Matches everyone.
     */
    export interface PajwohLqEveryoneRule {
      /**
       * An empty object which matches on all users.
       */
      everyone: unknown;
    }

    /**
     * Matches an IP address block.
     */
    export interface PajwohLqIPRule {
      ip: PajwohLqIPRule.IP;
    }

    export namespace PajwohLqIPRule {
      export interface IP {
        /**
         * An IPv4 or IPv6 CIDR block.
         */
        ip: string;
      }
    }

    /**
     * Matches an IP address from a list.
     */
    export interface PajwohLqIPListRule {
      ip_list: PajwohLqIPListRule.IPList;
    }

    export namespace PajwohLqIPListRule {
      export interface IPList {
        /**
         * The ID of a previously created IP list.
         */
        id: string;
      }
    }

    /**
     * Matches any valid client certificate.
     */
    export interface PajwohLqCertificateRule {
      certificate: unknown;
    }

    /**
     * Matches an Access group.
     */
    export interface PajwohLqAccessGroupRule {
      group: PajwohLqAccessGroupRule.Group;
    }

    export namespace PajwohLqAccessGroupRule {
      export interface Group {
        /**
         * The ID of a previously created Access group.
         */
        id: string;
      }
    }

    /**
     * Matches an Azure group. Requires an Azure identity provider.
     */
    export interface PajwohLqAzureGroupRule {
      azureAD: PajwohLqAzureGroupRule.AzureAd;
    }

    export namespace PajwohLqAzureGroupRule {
      export interface AzureAd {
        /**
         * The ID of an Azure group.
         */
        id: string;

        /**
         * The ID of your Azure identity provider.
         */
        connection_id: string;
      }
    }

    /**
     * Matches a Github organization. Requires a Github identity provider.
     */
    export interface PajwohLqGitHubOrganizationRule {
      'github-organization': PajwohLqGitHubOrganizationRule.GitHubOrganization;
    }

    export namespace PajwohLqGitHubOrganizationRule {
      export interface GitHubOrganization {
        /**
         * The ID of your Github identity provider.
         */
        connection_id: string;

        /**
         * The name of the organization.
         */
        name: string;
      }
    }

    /**
     * Matches a group in Google Workspace. Requires a Google Workspace identity
     * provider.
     */
    export interface PajwohLqGsuiteGroupRule {
      gsuite: PajwohLqGsuiteGroupRule.Gsuite;
    }

    export namespace PajwohLqGsuiteGroupRule {
      export interface Gsuite {
        /**
         * The ID of your Google Workspace identity provider.
         */
        connection_id: string;

        /**
         * The email of the Google Workspace group.
         */
        email: string;
      }
    }

    /**
     * Matches an Okta group. Requires an Okta identity provider.
     */
    export interface PajwohLqOktaGroupRule {
      okta: PajwohLqOktaGroupRule.Okta;
    }

    export namespace PajwohLqOktaGroupRule {
      export interface Okta {
        /**
         * The ID of your Okta identity provider.
         */
        connection_id: string;

        /**
         * The email of the Okta group.
         */
        email: string;
      }
    }

    /**
     * Matches a SAML group. Requires a SAML identity provider.
     */
    export interface PajwohLqSamlGroupRule {
      saml: PajwohLqSamlGroupRule.Saml;
    }

    export namespace PajwohLqSamlGroupRule {
      export interface Saml {
        /**
         * The name of the SAML attribute.
         */
        attribute_name: string;

        /**
         * The SAML attribute value to look for.
         */
        attribute_value: string;
      }
    }

    /**
     * Matches a specific Access Service Token
     */
    export interface PajwohLqServiceTokenRule {
      service_token: PajwohLqServiceTokenRule.ServiceToken;
    }

    export namespace PajwohLqServiceTokenRule {
      export interface ServiceToken {
        /**
         * The ID of a Service Token.
         */
        token_id: string;
      }
    }

    /**
     * Matches any valid Access Service Token
     */
    export interface PajwohLqAnyValidServiceTokenRule {
      /**
       * An empty object which matches on all service tokens.
       */
      any_valid_service_token: unknown;
    }

    /**
     * Create Allow or Block policies which evaluate the user based on custom criteria.
     */
    export interface PajwohLqExternalEvaluationRule {
      external_evaluation: PajwohLqExternalEvaluationRule.ExternalEvaluation;
    }

    export namespace PajwohLqExternalEvaluationRule {
      export interface ExternalEvaluation {
        /**
         * The API endpoint containing your business logic.
         */
        evaluate_url: string;

        /**
         * The API endpoint containing the key that Access uses to verify that the response
         * came from your API.
         */
        keys_url: string;
      }
    }

    /**
     * Matches a specific country
     */
    export interface PajwohLqCountryRule {
      geo: PajwohLqCountryRule.Geo;
    }

    export namespace PajwohLqCountryRule {
      export interface Geo {
        /**
         * The country code that should be matched.
         */
        country_code: string;
      }
    }

    /**
     * Enforce different MFA options
     */
    export interface PajwohLqAuthenticationMethodRule {
      auth_method: PajwohLqAuthenticationMethodRule.AuthMethod;
    }

    export namespace PajwohLqAuthenticationMethodRule {
      export interface AuthMethod {
        /**
         * The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176.
         */
        auth_method: string;
      }
    }

    /**
     * Enforces a device posture rule has run successfully
     */
    export interface PajwohLqDevicePostureRule {
      device_posture: PajwohLqDevicePostureRule.DevicePosture;
    }

    export namespace PajwohLqDevicePostureRule {
      export interface DevicePosture {
        /**
         * The ID of a device posture integration.
         */
        integration_uid: string;
      }
    }

    /**
     * Matches a specific email.
     */
    export interface PajwohLqEmailRule {
      email: PajwohLqEmailRule.Email;
    }

    export namespace PajwohLqEmailRule {
      export interface Email {
        /**
         * The email of the user.
         */
        email: string;
      }
    }

    /**
     * Matches an email address from a list.
     */
    export interface PajwohLqEmailListRule {
      email_list: PajwohLqEmailListRule.EmailList;
    }

    export namespace PajwohLqEmailListRule {
      export interface EmailList {
        /**
         * The ID of a previously created email list.
         */
        id: string;
      }
    }

    /**
     * Match an entire email domain.
     */
    export interface PajwohLqDomainRule {
      email_domain: PajwohLqDomainRule.EmailDomain;
    }

    export namespace PajwohLqDomainRule {
      export interface EmailDomain {
        /**
         * The email domain to match.
         */
        domain: string;
      }
    }

    /**
     * Matches everyone.
     */
    export interface PajwohLqEveryoneRule {
      /**
       * An empty object which matches on all users.
       */
      everyone: unknown;
    }

    /**
     * Matches an IP address block.
     */
    export interface PajwohLqIPRule {
      ip: PajwohLqIPRule.IP;
    }

    export namespace PajwohLqIPRule {
      export interface IP {
        /**
         * An IPv4 or IPv6 CIDR block.
         */
        ip: string;
      }
    }

    /**
     * Matches an IP address from a list.
     */
    export interface PajwohLqIPListRule {
      ip_list: PajwohLqIPListRule.IPList;
    }

    export namespace PajwohLqIPListRule {
      export interface IPList {
        /**
         * The ID of a previously created IP list.
         */
        id: string;
      }
    }

    /**
     * Matches any valid client certificate.
     */
    export interface PajwohLqCertificateRule {
      certificate: unknown;
    }

    /**
     * Matches an Access group.
     */
    export interface PajwohLqAccessGroupRule {
      group: PajwohLqAccessGroupRule.Group;
    }

    export namespace PajwohLqAccessGroupRule {
      export interface Group {
        /**
         * The ID of a previously created Access group.
         */
        id: string;
      }
    }

    /**
     * Matches an Azure group. Requires an Azure identity provider.
     */
    export interface PajwohLqAzureGroupRule {
      azureAD: PajwohLqAzureGroupRule.AzureAd;
    }

    export namespace PajwohLqAzureGroupRule {
      export interface AzureAd {
        /**
         * The ID of an Azure group.
         */
        id: string;

        /**
         * The ID of your Azure identity provider.
         */
        connection_id: string;
      }
    }

    /**
     * Matches a Github organization. Requires a Github identity provider.
     */
    export interface PajwohLqGitHubOrganizationRule {
      'github-organization': PajwohLqGitHubOrganizationRule.GitHubOrganization;
    }

    export namespace PajwohLqGitHubOrganizationRule {
      export interface GitHubOrganization {
        /**
         * The ID of your Github identity provider.
         */
        connection_id: string;

        /**
         * The name of the organization.
         */
        name: string;
      }
    }

    /**
     * Matches a group in Google Workspace. Requires a Google Workspace identity
     * provider.
     */
    export interface PajwohLqGsuiteGroupRule {
      gsuite: PajwohLqGsuiteGroupRule.Gsuite;
    }

    export namespace PajwohLqGsuiteGroupRule {
      export interface Gsuite {
        /**
         * The ID of your Google Workspace identity provider.
         */
        connection_id: string;

        /**
         * The email of the Google Workspace group.
         */
        email: string;
      }
    }

    /**
     * Matches an Okta group. Requires an Okta identity provider.
     */
    export interface PajwohLqOktaGroupRule {
      okta: PajwohLqOktaGroupRule.Okta;
    }

    export namespace PajwohLqOktaGroupRule {
      export interface Okta {
        /**
         * The ID of your Okta identity provider.
         */
        connection_id: string;

        /**
         * The email of the Okta group.
         */
        email: string;
      }
    }

    /**
     * Matches a SAML group. Requires a SAML identity provider.
     */
    export interface PajwohLqSamlGroupRule {
      saml: PajwohLqSamlGroupRule.Saml;
    }

    export namespace PajwohLqSamlGroupRule {
      export interface Saml {
        /**
         * The name of the SAML attribute.
         */
        attribute_name: string;

        /**
         * The SAML attribute value to look for.
         */
        attribute_value: string;
      }
    }

    /**
     * Matches a specific Access Service Token
     */
    export interface PajwohLqServiceTokenRule {
      service_token: PajwohLqServiceTokenRule.ServiceToken;
    }

    export namespace PajwohLqServiceTokenRule {
      export interface ServiceToken {
        /**
         * The ID of a Service Token.
         */
        token_id: string;
      }
    }

    /**
     * Matches any valid Access Service Token
     */
    export interface PajwohLqAnyValidServiceTokenRule {
      /**
       * An empty object which matches on all service tokens.
       */
      any_valid_service_token: unknown;
    }

    /**
     * Create Allow or Block policies which evaluate the user based on custom criteria.
     */
    export interface PajwohLqExternalEvaluationRule {
      external_evaluation: PajwohLqExternalEvaluationRule.ExternalEvaluation;
    }

    export namespace PajwohLqExternalEvaluationRule {
      export interface ExternalEvaluation {
        /**
         * The API endpoint containing your business logic.
         */
        evaluate_url: string;

        /**
         * The API endpoint containing the key that Access uses to verify that the response
         * came from your API.
         */
        keys_url: string;
      }
    }

    /**
     * Matches a specific country
     */
    export interface PajwohLqCountryRule {
      geo: PajwohLqCountryRule.Geo;
    }

    export namespace PajwohLqCountryRule {
      export interface Geo {
        /**
         * The country code that should be matched.
         */
        country_code: string;
      }
    }

    /**
     * Enforce different MFA options
     */
    export interface PajwohLqAuthenticationMethodRule {
      auth_method: PajwohLqAuthenticationMethodRule.AuthMethod;
    }

    export namespace PajwohLqAuthenticationMethodRule {
      export interface AuthMethod {
        /**
         * The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176.
         */
        auth_method: string;
      }
    }

    /**
     * Enforces a device posture rule has run successfully
     */
    export interface PajwohLqDevicePostureRule {
      device_posture: PajwohLqDevicePostureRule.DevicePosture;
    }

    export namespace PajwohLqDevicePostureRule {
      export interface DevicePosture {
        /**
         * The ID of a device posture integration.
         */
        integration_uid: string;
      }
    }

    /**
     * Matches a specific email.
     */
    export interface PajwohLqEmailRule {
      email: PajwohLqEmailRule.Email;
    }

    export namespace PajwohLqEmailRule {
      export interface Email {
        /**
         * The email of the user.
         */
        email: string;
      }
    }

    /**
     * Matches an email address from a list.
     */
    export interface PajwohLqEmailListRule {
      email_list: PajwohLqEmailListRule.EmailList;
    }

    export namespace PajwohLqEmailListRule {
      export interface EmailList {
        /**
         * The ID of a previously created email list.
         */
        id: string;
      }
    }

    /**
     * Match an entire email domain.
     */
    export interface PajwohLqDomainRule {
      email_domain: PajwohLqDomainRule.EmailDomain;
    }

    export namespace PajwohLqDomainRule {
      export interface EmailDomain {
        /**
         * The email domain to match.
         */
        domain: string;
      }
    }

    /**
     * Matches everyone.
     */
    export interface PajwohLqEveryoneRule {
      /**
       * An empty object which matches on all users.
       */
      everyone: unknown;
    }

    /**
     * Matches an IP address block.
     */
    export interface PajwohLqIPRule {
      ip: PajwohLqIPRule.IP;
    }

    export namespace PajwohLqIPRule {
      export interface IP {
        /**
         * An IPv4 or IPv6 CIDR block.
         */
        ip: string;
      }
    }

    /**
     * Matches an IP address from a list.
     */
    export interface PajwohLqIPListRule {
      ip_list: PajwohLqIPListRule.IPList;
    }

    export namespace PajwohLqIPListRule {
      export interface IPList {
        /**
         * The ID of a previously created IP list.
         */
        id: string;
      }
    }

    /**
     * Matches any valid client certificate.
     */
    export interface PajwohLqCertificateRule {
      certificate: unknown;
    }

    /**
     * Matches an Access group.
     */
    export interface PajwohLqAccessGroupRule {
      group: PajwohLqAccessGroupRule.Group;
    }

    export namespace PajwohLqAccessGroupRule {
      export interface Group {
        /**
         * The ID of a previously created Access group.
         */
        id: string;
      }
    }

    /**
     * Matches an Azure group. Requires an Azure identity provider.
     */
    export interface PajwohLqAzureGroupRule {
      azureAD: PajwohLqAzureGroupRule.AzureAd;
    }

    export namespace PajwohLqAzureGroupRule {
      export interface AzureAd {
        /**
         * The ID of an Azure group.
         */
        id: string;

        /**
         * The ID of your Azure identity provider.
         */
        connection_id: string;
      }
    }

    /**
     * Matches a Github organization. Requires a Github identity provider.
     */
    export interface PajwohLqGitHubOrganizationRule {
      'github-organization': PajwohLqGitHubOrganizationRule.GitHubOrganization;
    }

    export namespace PajwohLqGitHubOrganizationRule {
      export interface GitHubOrganization {
        /**
         * The ID of your Github identity provider.
         */
        connection_id: string;

        /**
         * The name of the organization.
         */
        name: string;
      }
    }

    /**
     * Matches a group in Google Workspace. Requires a Google Workspace identity
     * provider.
     */
    export interface PajwohLqGsuiteGroupRule {
      gsuite: PajwohLqGsuiteGroupRule.Gsuite;
    }

    export namespace PajwohLqGsuiteGroupRule {
      export interface Gsuite {
        /**
         * The ID of your Google Workspace identity provider.
         */
        connection_id: string;

        /**
         * The email of the Google Workspace group.
         */
        email: string;
      }
    }

    /**
     * Matches an Okta group. Requires an Okta identity provider.
     */
    export interface PajwohLqOktaGroupRule {
      okta: PajwohLqOktaGroupRule.Okta;
    }

    export namespace PajwohLqOktaGroupRule {
      export interface Okta {
        /**
         * The ID of your Okta identity provider.
         */
        connection_id: string;

        /**
         * The email of the Okta group.
         */
        email: string;
      }
    }

    /**
     * Matches a SAML group. Requires a SAML identity provider.
     */
    export interface PajwohLqSamlGroupRule {
      saml: PajwohLqSamlGroupRule.Saml;
    }

    export namespace PajwohLqSamlGroupRule {
      export interface Saml {
        /**
         * The name of the SAML attribute.
         */
        attribute_name: string;

        /**
         * The SAML attribute value to look for.
         */
        attribute_value: string;
      }
    }

    /**
     * Matches a specific Access Service Token
     */
    export interface PajwohLqServiceTokenRule {
      service_token: PajwohLqServiceTokenRule.ServiceToken;
    }

    export namespace PajwohLqServiceTokenRule {
      export interface ServiceToken {
        /**
         * The ID of a Service Token.
         */
        token_id: string;
      }
    }

    /**
     * Matches any valid Access Service Token
     */
    export interface PajwohLqAnyValidServiceTokenRule {
      /**
       * An empty object which matches on all service tokens.
       */
      any_valid_service_token: unknown;
    }

    /**
     * Create Allow or Block policies which evaluate the user based on custom criteria.
     */
    export interface PajwohLqExternalEvaluationRule {
      external_evaluation: PajwohLqExternalEvaluationRule.ExternalEvaluation;
    }

    export namespace PajwohLqExternalEvaluationRule {
      export interface ExternalEvaluation {
        /**
         * The API endpoint containing your business logic.
         */
        evaluate_url: string;

        /**
         * The API endpoint containing the key that Access uses to verify that the response
         * came from your API.
         */
        keys_url: string;
      }
    }

    /**
     * Matches a specific country
     */
    export interface PajwohLqCountryRule {
      geo: PajwohLqCountryRule.Geo;
    }

    export namespace PajwohLqCountryRule {
      export interface Geo {
        /**
         * The country code that should be matched.
         */
        country_code: string;
      }
    }

    /**
     * Enforce different MFA options
     */
    export interface PajwohLqAuthenticationMethodRule {
      auth_method: PajwohLqAuthenticationMethodRule.AuthMethod;
    }

    export namespace PajwohLqAuthenticationMethodRule {
      export interface AuthMethod {
        /**
         * The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176.
         */
        auth_method: string;
      }
    }

    /**
     * Enforces a device posture rule has run successfully
     */
    export interface PajwohLqDevicePostureRule {
      device_posture: PajwohLqDevicePostureRule.DevicePosture;
    }

    export namespace PajwohLqDevicePostureRule {
      export interface DevicePosture {
        /**
         * The ID of a device posture integration.
         */
        integration_uid: string;
      }
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

export interface GroupUpdateParams {
  /**
   * Rules evaluated with an OR logical operator. A user needs to meet only one of
   * the Include rules.
   */
  include: Array<
    | GroupUpdateParams.PajwohLqEmailRule
    | GroupUpdateParams.PajwohLqEmailListRule
    | GroupUpdateParams.PajwohLqDomainRule
    | GroupUpdateParams.PajwohLqEveryoneRule
    | GroupUpdateParams.PajwohLqIPRule
    | GroupUpdateParams.PajwohLqIPListRule
    | GroupUpdateParams.PajwohLqCertificateRule
    | GroupUpdateParams.PajwohLqAccessGroupRule
    | GroupUpdateParams.PajwohLqAzureGroupRule
    | GroupUpdateParams.PajwohLqGitHubOrganizationRule
    | GroupUpdateParams.PajwohLqGsuiteGroupRule
    | GroupUpdateParams.PajwohLqOktaGroupRule
    | GroupUpdateParams.PajwohLqSamlGroupRule
    | GroupUpdateParams.PajwohLqServiceTokenRule
    | GroupUpdateParams.PajwohLqAnyValidServiceTokenRule
    | GroupUpdateParams.PajwohLqExternalEvaluationRule
    | GroupUpdateParams.PajwohLqCountryRule
    | GroupUpdateParams.PajwohLqAuthenticationMethodRule
    | GroupUpdateParams.PajwohLqDevicePostureRule
  >;

  /**
   * The name of the Access group.
   */
  name: string;

  /**
   * Rules evaluated with a NOT logical operator. To match a policy, a user cannot
   * meet any of the Exclude rules.
   */
  exclude?: Array<
    | GroupUpdateParams.PajwohLqEmailRule
    | GroupUpdateParams.PajwohLqEmailListRule
    | GroupUpdateParams.PajwohLqDomainRule
    | GroupUpdateParams.PajwohLqEveryoneRule
    | GroupUpdateParams.PajwohLqIPRule
    | GroupUpdateParams.PajwohLqIPListRule
    | GroupUpdateParams.PajwohLqCertificateRule
    | GroupUpdateParams.PajwohLqAccessGroupRule
    | GroupUpdateParams.PajwohLqAzureGroupRule
    | GroupUpdateParams.PajwohLqGitHubOrganizationRule
    | GroupUpdateParams.PajwohLqGsuiteGroupRule
    | GroupUpdateParams.PajwohLqOktaGroupRule
    | GroupUpdateParams.PajwohLqSamlGroupRule
    | GroupUpdateParams.PajwohLqServiceTokenRule
    | GroupUpdateParams.PajwohLqAnyValidServiceTokenRule
    | GroupUpdateParams.PajwohLqExternalEvaluationRule
    | GroupUpdateParams.PajwohLqCountryRule
    | GroupUpdateParams.PajwohLqAuthenticationMethodRule
    | GroupUpdateParams.PajwohLqDevicePostureRule
  >;

  /**
   * Whether this is the default group
   */
  is_default?: boolean;

  /**
   * Rules evaluated with an AND logical operator. To match a policy, a user must
   * meet all of the Require rules.
   */
  require?: Array<
    | GroupUpdateParams.PajwohLqEmailRule
    | GroupUpdateParams.PajwohLqEmailListRule
    | GroupUpdateParams.PajwohLqDomainRule
    | GroupUpdateParams.PajwohLqEveryoneRule
    | GroupUpdateParams.PajwohLqIPRule
    | GroupUpdateParams.PajwohLqIPListRule
    | GroupUpdateParams.PajwohLqCertificateRule
    | GroupUpdateParams.PajwohLqAccessGroupRule
    | GroupUpdateParams.PajwohLqAzureGroupRule
    | GroupUpdateParams.PajwohLqGitHubOrganizationRule
    | GroupUpdateParams.PajwohLqGsuiteGroupRule
    | GroupUpdateParams.PajwohLqOktaGroupRule
    | GroupUpdateParams.PajwohLqSamlGroupRule
    | GroupUpdateParams.PajwohLqServiceTokenRule
    | GroupUpdateParams.PajwohLqAnyValidServiceTokenRule
    | GroupUpdateParams.PajwohLqExternalEvaluationRule
    | GroupUpdateParams.PajwohLqCountryRule
    | GroupUpdateParams.PajwohLqAuthenticationMethodRule
    | GroupUpdateParams.PajwohLqDevicePostureRule
  >;
}

export namespace GroupUpdateParams {
  /**
   * Matches a specific email.
   */
  export interface PajwohLqEmailRule {
    email: PajwohLqEmailRule.Email;
  }

  export namespace PajwohLqEmailRule {
    export interface Email {
      /**
       * The email of the user.
       */
      email: string;
    }
  }

  /**
   * Matches an email address from a list.
   */
  export interface PajwohLqEmailListRule {
    email_list: PajwohLqEmailListRule.EmailList;
  }

  export namespace PajwohLqEmailListRule {
    export interface EmailList {
      /**
       * The ID of a previously created email list.
       */
      id: string;
    }
  }

  /**
   * Match an entire email domain.
   */
  export interface PajwohLqDomainRule {
    email_domain: PajwohLqDomainRule.EmailDomain;
  }

  export namespace PajwohLqDomainRule {
    export interface EmailDomain {
      /**
       * The email domain to match.
       */
      domain: string;
    }
  }

  /**
   * Matches everyone.
   */
  export interface PajwohLqEveryoneRule {
    /**
     * An empty object which matches on all users.
     */
    everyone: unknown;
  }

  /**
   * Matches an IP address block.
   */
  export interface PajwohLqIPRule {
    ip: PajwohLqIPRule.IP;
  }

  export namespace PajwohLqIPRule {
    export interface IP {
      /**
       * An IPv4 or IPv6 CIDR block.
       */
      ip: string;
    }
  }

  /**
   * Matches an IP address from a list.
   */
  export interface PajwohLqIPListRule {
    ip_list: PajwohLqIPListRule.IPList;
  }

  export namespace PajwohLqIPListRule {
    export interface IPList {
      /**
       * The ID of a previously created IP list.
       */
      id: string;
    }
  }

  /**
   * Matches any valid client certificate.
   */
  export interface PajwohLqCertificateRule {
    certificate: unknown;
  }

  /**
   * Matches an Access group.
   */
  export interface PajwohLqAccessGroupRule {
    group: PajwohLqAccessGroupRule.Group;
  }

  export namespace PajwohLqAccessGroupRule {
    export interface Group {
      /**
       * The ID of a previously created Access group.
       */
      id: string;
    }
  }

  /**
   * Matches an Azure group. Requires an Azure identity provider.
   */
  export interface PajwohLqAzureGroupRule {
    azureAD: PajwohLqAzureGroupRule.AzureAd;
  }

  export namespace PajwohLqAzureGroupRule {
    export interface AzureAd {
      /**
       * The ID of an Azure group.
       */
      id: string;

      /**
       * The ID of your Azure identity provider.
       */
      connection_id: string;
    }
  }

  /**
   * Matches a Github organization. Requires a Github identity provider.
   */
  export interface PajwohLqGitHubOrganizationRule {
    'github-organization': PajwohLqGitHubOrganizationRule.GitHubOrganization;
  }

  export namespace PajwohLqGitHubOrganizationRule {
    export interface GitHubOrganization {
      /**
       * The ID of your Github identity provider.
       */
      connection_id: string;

      /**
       * The name of the organization.
       */
      name: string;
    }
  }

  /**
   * Matches a group in Google Workspace. Requires a Google Workspace identity
   * provider.
   */
  export interface PajwohLqGsuiteGroupRule {
    gsuite: PajwohLqGsuiteGroupRule.Gsuite;
  }

  export namespace PajwohLqGsuiteGroupRule {
    export interface Gsuite {
      /**
       * The ID of your Google Workspace identity provider.
       */
      connection_id: string;

      /**
       * The email of the Google Workspace group.
       */
      email: string;
    }
  }

  /**
   * Matches an Okta group. Requires an Okta identity provider.
   */
  export interface PajwohLqOktaGroupRule {
    okta: PajwohLqOktaGroupRule.Okta;
  }

  export namespace PajwohLqOktaGroupRule {
    export interface Okta {
      /**
       * The ID of your Okta identity provider.
       */
      connection_id: string;

      /**
       * The email of the Okta group.
       */
      email: string;
    }
  }

  /**
   * Matches a SAML group. Requires a SAML identity provider.
   */
  export interface PajwohLqSamlGroupRule {
    saml: PajwohLqSamlGroupRule.Saml;
  }

  export namespace PajwohLqSamlGroupRule {
    export interface Saml {
      /**
       * The name of the SAML attribute.
       */
      attribute_name: string;

      /**
       * The SAML attribute value to look for.
       */
      attribute_value: string;
    }
  }

  /**
   * Matches a specific Access Service Token
   */
  export interface PajwohLqServiceTokenRule {
    service_token: PajwohLqServiceTokenRule.ServiceToken;
  }

  export namespace PajwohLqServiceTokenRule {
    export interface ServiceToken {
      /**
       * The ID of a Service Token.
       */
      token_id: string;
    }
  }

  /**
   * Matches any valid Access Service Token
   */
  export interface PajwohLqAnyValidServiceTokenRule {
    /**
     * An empty object which matches on all service tokens.
     */
    any_valid_service_token: unknown;
  }

  /**
   * Create Allow or Block policies which evaluate the user based on custom criteria.
   */
  export interface PajwohLqExternalEvaluationRule {
    external_evaluation: PajwohLqExternalEvaluationRule.ExternalEvaluation;
  }

  export namespace PajwohLqExternalEvaluationRule {
    export interface ExternalEvaluation {
      /**
       * The API endpoint containing your business logic.
       */
      evaluate_url: string;

      /**
       * The API endpoint containing the key that Access uses to verify that the response
       * came from your API.
       */
      keys_url: string;
    }
  }

  /**
   * Matches a specific country
   */
  export interface PajwohLqCountryRule {
    geo: PajwohLqCountryRule.Geo;
  }

  export namespace PajwohLqCountryRule {
    export interface Geo {
      /**
       * The country code that should be matched.
       */
      country_code: string;
    }
  }

  /**
   * Enforce different MFA options
   */
  export interface PajwohLqAuthenticationMethodRule {
    auth_method: PajwohLqAuthenticationMethodRule.AuthMethod;
  }

  export namespace PajwohLqAuthenticationMethodRule {
    export interface AuthMethod {
      /**
       * The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176.
       */
      auth_method: string;
    }
  }

  /**
   * Enforces a device posture rule has run successfully
   */
  export interface PajwohLqDevicePostureRule {
    device_posture: PajwohLqDevicePostureRule.DevicePosture;
  }

  export namespace PajwohLqDevicePostureRule {
    export interface DevicePosture {
      /**
       * The ID of a device posture integration.
       */
      integration_uid: string;
    }
  }

  /**
   * Matches a specific email.
   */
  export interface PajwohLqEmailRule {
    email: PajwohLqEmailRule.Email;
  }

  export namespace PajwohLqEmailRule {
    export interface Email {
      /**
       * The email of the user.
       */
      email: string;
    }
  }

  /**
   * Matches an email address from a list.
   */
  export interface PajwohLqEmailListRule {
    email_list: PajwohLqEmailListRule.EmailList;
  }

  export namespace PajwohLqEmailListRule {
    export interface EmailList {
      /**
       * The ID of a previously created email list.
       */
      id: string;
    }
  }

  /**
   * Match an entire email domain.
   */
  export interface PajwohLqDomainRule {
    email_domain: PajwohLqDomainRule.EmailDomain;
  }

  export namespace PajwohLqDomainRule {
    export interface EmailDomain {
      /**
       * The email domain to match.
       */
      domain: string;
    }
  }

  /**
   * Matches everyone.
   */
  export interface PajwohLqEveryoneRule {
    /**
     * An empty object which matches on all users.
     */
    everyone: unknown;
  }

  /**
   * Matches an IP address block.
   */
  export interface PajwohLqIPRule {
    ip: PajwohLqIPRule.IP;
  }

  export namespace PajwohLqIPRule {
    export interface IP {
      /**
       * An IPv4 or IPv6 CIDR block.
       */
      ip: string;
    }
  }

  /**
   * Matches an IP address from a list.
   */
  export interface PajwohLqIPListRule {
    ip_list: PajwohLqIPListRule.IPList;
  }

  export namespace PajwohLqIPListRule {
    export interface IPList {
      /**
       * The ID of a previously created IP list.
       */
      id: string;
    }
  }

  /**
   * Matches any valid client certificate.
   */
  export interface PajwohLqCertificateRule {
    certificate: unknown;
  }

  /**
   * Matches an Access group.
   */
  export interface PajwohLqAccessGroupRule {
    group: PajwohLqAccessGroupRule.Group;
  }

  export namespace PajwohLqAccessGroupRule {
    export interface Group {
      /**
       * The ID of a previously created Access group.
       */
      id: string;
    }
  }

  /**
   * Matches an Azure group. Requires an Azure identity provider.
   */
  export interface PajwohLqAzureGroupRule {
    azureAD: PajwohLqAzureGroupRule.AzureAd;
  }

  export namespace PajwohLqAzureGroupRule {
    export interface AzureAd {
      /**
       * The ID of an Azure group.
       */
      id: string;

      /**
       * The ID of your Azure identity provider.
       */
      connection_id: string;
    }
  }

  /**
   * Matches a Github organization. Requires a Github identity provider.
   */
  export interface PajwohLqGitHubOrganizationRule {
    'github-organization': PajwohLqGitHubOrganizationRule.GitHubOrganization;
  }

  export namespace PajwohLqGitHubOrganizationRule {
    export interface GitHubOrganization {
      /**
       * The ID of your Github identity provider.
       */
      connection_id: string;

      /**
       * The name of the organization.
       */
      name: string;
    }
  }

  /**
   * Matches a group in Google Workspace. Requires a Google Workspace identity
   * provider.
   */
  export interface PajwohLqGsuiteGroupRule {
    gsuite: PajwohLqGsuiteGroupRule.Gsuite;
  }

  export namespace PajwohLqGsuiteGroupRule {
    export interface Gsuite {
      /**
       * The ID of your Google Workspace identity provider.
       */
      connection_id: string;

      /**
       * The email of the Google Workspace group.
       */
      email: string;
    }
  }

  /**
   * Matches an Okta group. Requires an Okta identity provider.
   */
  export interface PajwohLqOktaGroupRule {
    okta: PajwohLqOktaGroupRule.Okta;
  }

  export namespace PajwohLqOktaGroupRule {
    export interface Okta {
      /**
       * The ID of your Okta identity provider.
       */
      connection_id: string;

      /**
       * The email of the Okta group.
       */
      email: string;
    }
  }

  /**
   * Matches a SAML group. Requires a SAML identity provider.
   */
  export interface PajwohLqSamlGroupRule {
    saml: PajwohLqSamlGroupRule.Saml;
  }

  export namespace PajwohLqSamlGroupRule {
    export interface Saml {
      /**
       * The name of the SAML attribute.
       */
      attribute_name: string;

      /**
       * The SAML attribute value to look for.
       */
      attribute_value: string;
    }
  }

  /**
   * Matches a specific Access Service Token
   */
  export interface PajwohLqServiceTokenRule {
    service_token: PajwohLqServiceTokenRule.ServiceToken;
  }

  export namespace PajwohLqServiceTokenRule {
    export interface ServiceToken {
      /**
       * The ID of a Service Token.
       */
      token_id: string;
    }
  }

  /**
   * Matches any valid Access Service Token
   */
  export interface PajwohLqAnyValidServiceTokenRule {
    /**
     * An empty object which matches on all service tokens.
     */
    any_valid_service_token: unknown;
  }

  /**
   * Create Allow or Block policies which evaluate the user based on custom criteria.
   */
  export interface PajwohLqExternalEvaluationRule {
    external_evaluation: PajwohLqExternalEvaluationRule.ExternalEvaluation;
  }

  export namespace PajwohLqExternalEvaluationRule {
    export interface ExternalEvaluation {
      /**
       * The API endpoint containing your business logic.
       */
      evaluate_url: string;

      /**
       * The API endpoint containing the key that Access uses to verify that the response
       * came from your API.
       */
      keys_url: string;
    }
  }

  /**
   * Matches a specific country
   */
  export interface PajwohLqCountryRule {
    geo: PajwohLqCountryRule.Geo;
  }

  export namespace PajwohLqCountryRule {
    export interface Geo {
      /**
       * The country code that should be matched.
       */
      country_code: string;
    }
  }

  /**
   * Enforce different MFA options
   */
  export interface PajwohLqAuthenticationMethodRule {
    auth_method: PajwohLqAuthenticationMethodRule.AuthMethod;
  }

  export namespace PajwohLqAuthenticationMethodRule {
    export interface AuthMethod {
      /**
       * The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176.
       */
      auth_method: string;
    }
  }

  /**
   * Enforces a device posture rule has run successfully
   */
  export interface PajwohLqDevicePostureRule {
    device_posture: PajwohLqDevicePostureRule.DevicePosture;
  }

  export namespace PajwohLqDevicePostureRule {
    export interface DevicePosture {
      /**
       * The ID of a device posture integration.
       */
      integration_uid: string;
    }
  }

  /**
   * Matches a specific email.
   */
  export interface PajwohLqEmailRule {
    email: PajwohLqEmailRule.Email;
  }

  export namespace PajwohLqEmailRule {
    export interface Email {
      /**
       * The email of the user.
       */
      email: string;
    }
  }

  /**
   * Matches an email address from a list.
   */
  export interface PajwohLqEmailListRule {
    email_list: PajwohLqEmailListRule.EmailList;
  }

  export namespace PajwohLqEmailListRule {
    export interface EmailList {
      /**
       * The ID of a previously created email list.
       */
      id: string;
    }
  }

  /**
   * Match an entire email domain.
   */
  export interface PajwohLqDomainRule {
    email_domain: PajwohLqDomainRule.EmailDomain;
  }

  export namespace PajwohLqDomainRule {
    export interface EmailDomain {
      /**
       * The email domain to match.
       */
      domain: string;
    }
  }

  /**
   * Matches everyone.
   */
  export interface PajwohLqEveryoneRule {
    /**
     * An empty object which matches on all users.
     */
    everyone: unknown;
  }

  /**
   * Matches an IP address block.
   */
  export interface PajwohLqIPRule {
    ip: PajwohLqIPRule.IP;
  }

  export namespace PajwohLqIPRule {
    export interface IP {
      /**
       * An IPv4 or IPv6 CIDR block.
       */
      ip: string;
    }
  }

  /**
   * Matches an IP address from a list.
   */
  export interface PajwohLqIPListRule {
    ip_list: PajwohLqIPListRule.IPList;
  }

  export namespace PajwohLqIPListRule {
    export interface IPList {
      /**
       * The ID of a previously created IP list.
       */
      id: string;
    }
  }

  /**
   * Matches any valid client certificate.
   */
  export interface PajwohLqCertificateRule {
    certificate: unknown;
  }

  /**
   * Matches an Access group.
   */
  export interface PajwohLqAccessGroupRule {
    group: PajwohLqAccessGroupRule.Group;
  }

  export namespace PajwohLqAccessGroupRule {
    export interface Group {
      /**
       * The ID of a previously created Access group.
       */
      id: string;
    }
  }

  /**
   * Matches an Azure group. Requires an Azure identity provider.
   */
  export interface PajwohLqAzureGroupRule {
    azureAD: PajwohLqAzureGroupRule.AzureAd;
  }

  export namespace PajwohLqAzureGroupRule {
    export interface AzureAd {
      /**
       * The ID of an Azure group.
       */
      id: string;

      /**
       * The ID of your Azure identity provider.
       */
      connection_id: string;
    }
  }

  /**
   * Matches a Github organization. Requires a Github identity provider.
   */
  export interface PajwohLqGitHubOrganizationRule {
    'github-organization': PajwohLqGitHubOrganizationRule.GitHubOrganization;
  }

  export namespace PajwohLqGitHubOrganizationRule {
    export interface GitHubOrganization {
      /**
       * The ID of your Github identity provider.
       */
      connection_id: string;

      /**
       * The name of the organization.
       */
      name: string;
    }
  }

  /**
   * Matches a group in Google Workspace. Requires a Google Workspace identity
   * provider.
   */
  export interface PajwohLqGsuiteGroupRule {
    gsuite: PajwohLqGsuiteGroupRule.Gsuite;
  }

  export namespace PajwohLqGsuiteGroupRule {
    export interface Gsuite {
      /**
       * The ID of your Google Workspace identity provider.
       */
      connection_id: string;

      /**
       * The email of the Google Workspace group.
       */
      email: string;
    }
  }

  /**
   * Matches an Okta group. Requires an Okta identity provider.
   */
  export interface PajwohLqOktaGroupRule {
    okta: PajwohLqOktaGroupRule.Okta;
  }

  export namespace PajwohLqOktaGroupRule {
    export interface Okta {
      /**
       * The ID of your Okta identity provider.
       */
      connection_id: string;

      /**
       * The email of the Okta group.
       */
      email: string;
    }
  }

  /**
   * Matches a SAML group. Requires a SAML identity provider.
   */
  export interface PajwohLqSamlGroupRule {
    saml: PajwohLqSamlGroupRule.Saml;
  }

  export namespace PajwohLqSamlGroupRule {
    export interface Saml {
      /**
       * The name of the SAML attribute.
       */
      attribute_name: string;

      /**
       * The SAML attribute value to look for.
       */
      attribute_value: string;
    }
  }

  /**
   * Matches a specific Access Service Token
   */
  export interface PajwohLqServiceTokenRule {
    service_token: PajwohLqServiceTokenRule.ServiceToken;
  }

  export namespace PajwohLqServiceTokenRule {
    export interface ServiceToken {
      /**
       * The ID of a Service Token.
       */
      token_id: string;
    }
  }

  /**
   * Matches any valid Access Service Token
   */
  export interface PajwohLqAnyValidServiceTokenRule {
    /**
     * An empty object which matches on all service tokens.
     */
    any_valid_service_token: unknown;
  }

  /**
   * Create Allow or Block policies which evaluate the user based on custom criteria.
   */
  export interface PajwohLqExternalEvaluationRule {
    external_evaluation: PajwohLqExternalEvaluationRule.ExternalEvaluation;
  }

  export namespace PajwohLqExternalEvaluationRule {
    export interface ExternalEvaluation {
      /**
       * The API endpoint containing your business logic.
       */
      evaluate_url: string;

      /**
       * The API endpoint containing the key that Access uses to verify that the response
       * came from your API.
       */
      keys_url: string;
    }
  }

  /**
   * Matches a specific country
   */
  export interface PajwohLqCountryRule {
    geo: PajwohLqCountryRule.Geo;
  }

  export namespace PajwohLqCountryRule {
    export interface Geo {
      /**
       * The country code that should be matched.
       */
      country_code: string;
    }
  }

  /**
   * Enforce different MFA options
   */
  export interface PajwohLqAuthenticationMethodRule {
    auth_method: PajwohLqAuthenticationMethodRule.AuthMethod;
  }

  export namespace PajwohLqAuthenticationMethodRule {
    export interface AuthMethod {
      /**
       * The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176.
       */
      auth_method: string;
    }
  }

  /**
   * Enforces a device posture rule has run successfully
   */
  export interface PajwohLqDevicePostureRule {
    device_posture: PajwohLqDevicePostureRule.DevicePosture;
  }

  export namespace PajwohLqDevicePostureRule {
    export interface DevicePosture {
      /**
       * The ID of a device posture integration.
       */
      integration_uid: string;
    }
  }
}

export interface GroupAccessGroupsCreateAnAccessGroupParams {
  /**
   * Rules evaluated with an OR logical operator. A user needs to meet only one of
   * the Include rules.
   */
  include: Array<
    | GroupAccessGroupsCreateAnAccessGroupParams.PajwohLqEmailRule
    | GroupAccessGroupsCreateAnAccessGroupParams.PajwohLqEmailListRule
    | GroupAccessGroupsCreateAnAccessGroupParams.PajwohLqDomainRule
    | GroupAccessGroupsCreateAnAccessGroupParams.PajwohLqEveryoneRule
    | GroupAccessGroupsCreateAnAccessGroupParams.PajwohLqIPRule
    | GroupAccessGroupsCreateAnAccessGroupParams.PajwohLqIPListRule
    | GroupAccessGroupsCreateAnAccessGroupParams.PajwohLqCertificateRule
    | GroupAccessGroupsCreateAnAccessGroupParams.PajwohLqAccessGroupRule
    | GroupAccessGroupsCreateAnAccessGroupParams.PajwohLqAzureGroupRule
    | GroupAccessGroupsCreateAnAccessGroupParams.PajwohLqGitHubOrganizationRule
    | GroupAccessGroupsCreateAnAccessGroupParams.PajwohLqGsuiteGroupRule
    | GroupAccessGroupsCreateAnAccessGroupParams.PajwohLqOktaGroupRule
    | GroupAccessGroupsCreateAnAccessGroupParams.PajwohLqSamlGroupRule
    | GroupAccessGroupsCreateAnAccessGroupParams.PajwohLqServiceTokenRule
    | GroupAccessGroupsCreateAnAccessGroupParams.PajwohLqAnyValidServiceTokenRule
    | GroupAccessGroupsCreateAnAccessGroupParams.PajwohLqExternalEvaluationRule
    | GroupAccessGroupsCreateAnAccessGroupParams.PajwohLqCountryRule
    | GroupAccessGroupsCreateAnAccessGroupParams.PajwohLqAuthenticationMethodRule
    | GroupAccessGroupsCreateAnAccessGroupParams.PajwohLqDevicePostureRule
  >;

  /**
   * The name of the Access group.
   */
  name: string;

  /**
   * Rules evaluated with a NOT logical operator. To match a policy, a user cannot
   * meet any of the Exclude rules.
   */
  exclude?: Array<
    | GroupAccessGroupsCreateAnAccessGroupParams.PajwohLqEmailRule
    | GroupAccessGroupsCreateAnAccessGroupParams.PajwohLqEmailListRule
    | GroupAccessGroupsCreateAnAccessGroupParams.PajwohLqDomainRule
    | GroupAccessGroupsCreateAnAccessGroupParams.PajwohLqEveryoneRule
    | GroupAccessGroupsCreateAnAccessGroupParams.PajwohLqIPRule
    | GroupAccessGroupsCreateAnAccessGroupParams.PajwohLqIPListRule
    | GroupAccessGroupsCreateAnAccessGroupParams.PajwohLqCertificateRule
    | GroupAccessGroupsCreateAnAccessGroupParams.PajwohLqAccessGroupRule
    | GroupAccessGroupsCreateAnAccessGroupParams.PajwohLqAzureGroupRule
    | GroupAccessGroupsCreateAnAccessGroupParams.PajwohLqGitHubOrganizationRule
    | GroupAccessGroupsCreateAnAccessGroupParams.PajwohLqGsuiteGroupRule
    | GroupAccessGroupsCreateAnAccessGroupParams.PajwohLqOktaGroupRule
    | GroupAccessGroupsCreateAnAccessGroupParams.PajwohLqSamlGroupRule
    | GroupAccessGroupsCreateAnAccessGroupParams.PajwohLqServiceTokenRule
    | GroupAccessGroupsCreateAnAccessGroupParams.PajwohLqAnyValidServiceTokenRule
    | GroupAccessGroupsCreateAnAccessGroupParams.PajwohLqExternalEvaluationRule
    | GroupAccessGroupsCreateAnAccessGroupParams.PajwohLqCountryRule
    | GroupAccessGroupsCreateAnAccessGroupParams.PajwohLqAuthenticationMethodRule
    | GroupAccessGroupsCreateAnAccessGroupParams.PajwohLqDevicePostureRule
  >;

  /**
   * Whether this is the default group
   */
  is_default?: boolean;

  /**
   * Rules evaluated with an AND logical operator. To match a policy, a user must
   * meet all of the Require rules.
   */
  require?: Array<
    | GroupAccessGroupsCreateAnAccessGroupParams.PajwohLqEmailRule
    | GroupAccessGroupsCreateAnAccessGroupParams.PajwohLqEmailListRule
    | GroupAccessGroupsCreateAnAccessGroupParams.PajwohLqDomainRule
    | GroupAccessGroupsCreateAnAccessGroupParams.PajwohLqEveryoneRule
    | GroupAccessGroupsCreateAnAccessGroupParams.PajwohLqIPRule
    | GroupAccessGroupsCreateAnAccessGroupParams.PajwohLqIPListRule
    | GroupAccessGroupsCreateAnAccessGroupParams.PajwohLqCertificateRule
    | GroupAccessGroupsCreateAnAccessGroupParams.PajwohLqAccessGroupRule
    | GroupAccessGroupsCreateAnAccessGroupParams.PajwohLqAzureGroupRule
    | GroupAccessGroupsCreateAnAccessGroupParams.PajwohLqGitHubOrganizationRule
    | GroupAccessGroupsCreateAnAccessGroupParams.PajwohLqGsuiteGroupRule
    | GroupAccessGroupsCreateAnAccessGroupParams.PajwohLqOktaGroupRule
    | GroupAccessGroupsCreateAnAccessGroupParams.PajwohLqSamlGroupRule
    | GroupAccessGroupsCreateAnAccessGroupParams.PajwohLqServiceTokenRule
    | GroupAccessGroupsCreateAnAccessGroupParams.PajwohLqAnyValidServiceTokenRule
    | GroupAccessGroupsCreateAnAccessGroupParams.PajwohLqExternalEvaluationRule
    | GroupAccessGroupsCreateAnAccessGroupParams.PajwohLqCountryRule
    | GroupAccessGroupsCreateAnAccessGroupParams.PajwohLqAuthenticationMethodRule
    | GroupAccessGroupsCreateAnAccessGroupParams.PajwohLqDevicePostureRule
  >;
}

export namespace GroupAccessGroupsCreateAnAccessGroupParams {
  /**
   * Matches a specific email.
   */
  export interface PajwohLqEmailRule {
    email: PajwohLqEmailRule.Email;
  }

  export namespace PajwohLqEmailRule {
    export interface Email {
      /**
       * The email of the user.
       */
      email: string;
    }
  }

  /**
   * Matches an email address from a list.
   */
  export interface PajwohLqEmailListRule {
    email_list: PajwohLqEmailListRule.EmailList;
  }

  export namespace PajwohLqEmailListRule {
    export interface EmailList {
      /**
       * The ID of a previously created email list.
       */
      id: string;
    }
  }

  /**
   * Match an entire email domain.
   */
  export interface PajwohLqDomainRule {
    email_domain: PajwohLqDomainRule.EmailDomain;
  }

  export namespace PajwohLqDomainRule {
    export interface EmailDomain {
      /**
       * The email domain to match.
       */
      domain: string;
    }
  }

  /**
   * Matches everyone.
   */
  export interface PajwohLqEveryoneRule {
    /**
     * An empty object which matches on all users.
     */
    everyone: unknown;
  }

  /**
   * Matches an IP address block.
   */
  export interface PajwohLqIPRule {
    ip: PajwohLqIPRule.IP;
  }

  export namespace PajwohLqIPRule {
    export interface IP {
      /**
       * An IPv4 or IPv6 CIDR block.
       */
      ip: string;
    }
  }

  /**
   * Matches an IP address from a list.
   */
  export interface PajwohLqIPListRule {
    ip_list: PajwohLqIPListRule.IPList;
  }

  export namespace PajwohLqIPListRule {
    export interface IPList {
      /**
       * The ID of a previously created IP list.
       */
      id: string;
    }
  }

  /**
   * Matches any valid client certificate.
   */
  export interface PajwohLqCertificateRule {
    certificate: unknown;
  }

  /**
   * Matches an Access group.
   */
  export interface PajwohLqAccessGroupRule {
    group: PajwohLqAccessGroupRule.Group;
  }

  export namespace PajwohLqAccessGroupRule {
    export interface Group {
      /**
       * The ID of a previously created Access group.
       */
      id: string;
    }
  }

  /**
   * Matches an Azure group. Requires an Azure identity provider.
   */
  export interface PajwohLqAzureGroupRule {
    azureAD: PajwohLqAzureGroupRule.AzureAd;
  }

  export namespace PajwohLqAzureGroupRule {
    export interface AzureAd {
      /**
       * The ID of an Azure group.
       */
      id: string;

      /**
       * The ID of your Azure identity provider.
       */
      connection_id: string;
    }
  }

  /**
   * Matches a Github organization. Requires a Github identity provider.
   */
  export interface PajwohLqGitHubOrganizationRule {
    'github-organization': PajwohLqGitHubOrganizationRule.GitHubOrganization;
  }

  export namespace PajwohLqGitHubOrganizationRule {
    export interface GitHubOrganization {
      /**
       * The ID of your Github identity provider.
       */
      connection_id: string;

      /**
       * The name of the organization.
       */
      name: string;
    }
  }

  /**
   * Matches a group in Google Workspace. Requires a Google Workspace identity
   * provider.
   */
  export interface PajwohLqGsuiteGroupRule {
    gsuite: PajwohLqGsuiteGroupRule.Gsuite;
  }

  export namespace PajwohLqGsuiteGroupRule {
    export interface Gsuite {
      /**
       * The ID of your Google Workspace identity provider.
       */
      connection_id: string;

      /**
       * The email of the Google Workspace group.
       */
      email: string;
    }
  }

  /**
   * Matches an Okta group. Requires an Okta identity provider.
   */
  export interface PajwohLqOktaGroupRule {
    okta: PajwohLqOktaGroupRule.Okta;
  }

  export namespace PajwohLqOktaGroupRule {
    export interface Okta {
      /**
       * The ID of your Okta identity provider.
       */
      connection_id: string;

      /**
       * The email of the Okta group.
       */
      email: string;
    }
  }

  /**
   * Matches a SAML group. Requires a SAML identity provider.
   */
  export interface PajwohLqSamlGroupRule {
    saml: PajwohLqSamlGroupRule.Saml;
  }

  export namespace PajwohLqSamlGroupRule {
    export interface Saml {
      /**
       * The name of the SAML attribute.
       */
      attribute_name: string;

      /**
       * The SAML attribute value to look for.
       */
      attribute_value: string;
    }
  }

  /**
   * Matches a specific Access Service Token
   */
  export interface PajwohLqServiceTokenRule {
    service_token: PajwohLqServiceTokenRule.ServiceToken;
  }

  export namespace PajwohLqServiceTokenRule {
    export interface ServiceToken {
      /**
       * The ID of a Service Token.
       */
      token_id: string;
    }
  }

  /**
   * Matches any valid Access Service Token
   */
  export interface PajwohLqAnyValidServiceTokenRule {
    /**
     * An empty object which matches on all service tokens.
     */
    any_valid_service_token: unknown;
  }

  /**
   * Create Allow or Block policies which evaluate the user based on custom criteria.
   */
  export interface PajwohLqExternalEvaluationRule {
    external_evaluation: PajwohLqExternalEvaluationRule.ExternalEvaluation;
  }

  export namespace PajwohLqExternalEvaluationRule {
    export interface ExternalEvaluation {
      /**
       * The API endpoint containing your business logic.
       */
      evaluate_url: string;

      /**
       * The API endpoint containing the key that Access uses to verify that the response
       * came from your API.
       */
      keys_url: string;
    }
  }

  /**
   * Matches a specific country
   */
  export interface PajwohLqCountryRule {
    geo: PajwohLqCountryRule.Geo;
  }

  export namespace PajwohLqCountryRule {
    export interface Geo {
      /**
       * The country code that should be matched.
       */
      country_code: string;
    }
  }

  /**
   * Enforce different MFA options
   */
  export interface PajwohLqAuthenticationMethodRule {
    auth_method: PajwohLqAuthenticationMethodRule.AuthMethod;
  }

  export namespace PajwohLqAuthenticationMethodRule {
    export interface AuthMethod {
      /**
       * The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176.
       */
      auth_method: string;
    }
  }

  /**
   * Enforces a device posture rule has run successfully
   */
  export interface PajwohLqDevicePostureRule {
    device_posture: PajwohLqDevicePostureRule.DevicePosture;
  }

  export namespace PajwohLqDevicePostureRule {
    export interface DevicePosture {
      /**
       * The ID of a device posture integration.
       */
      integration_uid: string;
    }
  }

  /**
   * Matches a specific email.
   */
  export interface PajwohLqEmailRule {
    email: PajwohLqEmailRule.Email;
  }

  export namespace PajwohLqEmailRule {
    export interface Email {
      /**
       * The email of the user.
       */
      email: string;
    }
  }

  /**
   * Matches an email address from a list.
   */
  export interface PajwohLqEmailListRule {
    email_list: PajwohLqEmailListRule.EmailList;
  }

  export namespace PajwohLqEmailListRule {
    export interface EmailList {
      /**
       * The ID of a previously created email list.
       */
      id: string;
    }
  }

  /**
   * Match an entire email domain.
   */
  export interface PajwohLqDomainRule {
    email_domain: PajwohLqDomainRule.EmailDomain;
  }

  export namespace PajwohLqDomainRule {
    export interface EmailDomain {
      /**
       * The email domain to match.
       */
      domain: string;
    }
  }

  /**
   * Matches everyone.
   */
  export interface PajwohLqEveryoneRule {
    /**
     * An empty object which matches on all users.
     */
    everyone: unknown;
  }

  /**
   * Matches an IP address block.
   */
  export interface PajwohLqIPRule {
    ip: PajwohLqIPRule.IP;
  }

  export namespace PajwohLqIPRule {
    export interface IP {
      /**
       * An IPv4 or IPv6 CIDR block.
       */
      ip: string;
    }
  }

  /**
   * Matches an IP address from a list.
   */
  export interface PajwohLqIPListRule {
    ip_list: PajwohLqIPListRule.IPList;
  }

  export namespace PajwohLqIPListRule {
    export interface IPList {
      /**
       * The ID of a previously created IP list.
       */
      id: string;
    }
  }

  /**
   * Matches any valid client certificate.
   */
  export interface PajwohLqCertificateRule {
    certificate: unknown;
  }

  /**
   * Matches an Access group.
   */
  export interface PajwohLqAccessGroupRule {
    group: PajwohLqAccessGroupRule.Group;
  }

  export namespace PajwohLqAccessGroupRule {
    export interface Group {
      /**
       * The ID of a previously created Access group.
       */
      id: string;
    }
  }

  /**
   * Matches an Azure group. Requires an Azure identity provider.
   */
  export interface PajwohLqAzureGroupRule {
    azureAD: PajwohLqAzureGroupRule.AzureAd;
  }

  export namespace PajwohLqAzureGroupRule {
    export interface AzureAd {
      /**
       * The ID of an Azure group.
       */
      id: string;

      /**
       * The ID of your Azure identity provider.
       */
      connection_id: string;
    }
  }

  /**
   * Matches a Github organization. Requires a Github identity provider.
   */
  export interface PajwohLqGitHubOrganizationRule {
    'github-organization': PajwohLqGitHubOrganizationRule.GitHubOrganization;
  }

  export namespace PajwohLqGitHubOrganizationRule {
    export interface GitHubOrganization {
      /**
       * The ID of your Github identity provider.
       */
      connection_id: string;

      /**
       * The name of the organization.
       */
      name: string;
    }
  }

  /**
   * Matches a group in Google Workspace. Requires a Google Workspace identity
   * provider.
   */
  export interface PajwohLqGsuiteGroupRule {
    gsuite: PajwohLqGsuiteGroupRule.Gsuite;
  }

  export namespace PajwohLqGsuiteGroupRule {
    export interface Gsuite {
      /**
       * The ID of your Google Workspace identity provider.
       */
      connection_id: string;

      /**
       * The email of the Google Workspace group.
       */
      email: string;
    }
  }

  /**
   * Matches an Okta group. Requires an Okta identity provider.
   */
  export interface PajwohLqOktaGroupRule {
    okta: PajwohLqOktaGroupRule.Okta;
  }

  export namespace PajwohLqOktaGroupRule {
    export interface Okta {
      /**
       * The ID of your Okta identity provider.
       */
      connection_id: string;

      /**
       * The email of the Okta group.
       */
      email: string;
    }
  }

  /**
   * Matches a SAML group. Requires a SAML identity provider.
   */
  export interface PajwohLqSamlGroupRule {
    saml: PajwohLqSamlGroupRule.Saml;
  }

  export namespace PajwohLqSamlGroupRule {
    export interface Saml {
      /**
       * The name of the SAML attribute.
       */
      attribute_name: string;

      /**
       * The SAML attribute value to look for.
       */
      attribute_value: string;
    }
  }

  /**
   * Matches a specific Access Service Token
   */
  export interface PajwohLqServiceTokenRule {
    service_token: PajwohLqServiceTokenRule.ServiceToken;
  }

  export namespace PajwohLqServiceTokenRule {
    export interface ServiceToken {
      /**
       * The ID of a Service Token.
       */
      token_id: string;
    }
  }

  /**
   * Matches any valid Access Service Token
   */
  export interface PajwohLqAnyValidServiceTokenRule {
    /**
     * An empty object which matches on all service tokens.
     */
    any_valid_service_token: unknown;
  }

  /**
   * Create Allow or Block policies which evaluate the user based on custom criteria.
   */
  export interface PajwohLqExternalEvaluationRule {
    external_evaluation: PajwohLqExternalEvaluationRule.ExternalEvaluation;
  }

  export namespace PajwohLqExternalEvaluationRule {
    export interface ExternalEvaluation {
      /**
       * The API endpoint containing your business logic.
       */
      evaluate_url: string;

      /**
       * The API endpoint containing the key that Access uses to verify that the response
       * came from your API.
       */
      keys_url: string;
    }
  }

  /**
   * Matches a specific country
   */
  export interface PajwohLqCountryRule {
    geo: PajwohLqCountryRule.Geo;
  }

  export namespace PajwohLqCountryRule {
    export interface Geo {
      /**
       * The country code that should be matched.
       */
      country_code: string;
    }
  }

  /**
   * Enforce different MFA options
   */
  export interface PajwohLqAuthenticationMethodRule {
    auth_method: PajwohLqAuthenticationMethodRule.AuthMethod;
  }

  export namespace PajwohLqAuthenticationMethodRule {
    export interface AuthMethod {
      /**
       * The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176.
       */
      auth_method: string;
    }
  }

  /**
   * Enforces a device posture rule has run successfully
   */
  export interface PajwohLqDevicePostureRule {
    device_posture: PajwohLqDevicePostureRule.DevicePosture;
  }

  export namespace PajwohLqDevicePostureRule {
    export interface DevicePosture {
      /**
       * The ID of a device posture integration.
       */
      integration_uid: string;
    }
  }

  /**
   * Matches a specific email.
   */
  export interface PajwohLqEmailRule {
    email: PajwohLqEmailRule.Email;
  }

  export namespace PajwohLqEmailRule {
    export interface Email {
      /**
       * The email of the user.
       */
      email: string;
    }
  }

  /**
   * Matches an email address from a list.
   */
  export interface PajwohLqEmailListRule {
    email_list: PajwohLqEmailListRule.EmailList;
  }

  export namespace PajwohLqEmailListRule {
    export interface EmailList {
      /**
       * The ID of a previously created email list.
       */
      id: string;
    }
  }

  /**
   * Match an entire email domain.
   */
  export interface PajwohLqDomainRule {
    email_domain: PajwohLqDomainRule.EmailDomain;
  }

  export namespace PajwohLqDomainRule {
    export interface EmailDomain {
      /**
       * The email domain to match.
       */
      domain: string;
    }
  }

  /**
   * Matches everyone.
   */
  export interface PajwohLqEveryoneRule {
    /**
     * An empty object which matches on all users.
     */
    everyone: unknown;
  }

  /**
   * Matches an IP address block.
   */
  export interface PajwohLqIPRule {
    ip: PajwohLqIPRule.IP;
  }

  export namespace PajwohLqIPRule {
    export interface IP {
      /**
       * An IPv4 or IPv6 CIDR block.
       */
      ip: string;
    }
  }

  /**
   * Matches an IP address from a list.
   */
  export interface PajwohLqIPListRule {
    ip_list: PajwohLqIPListRule.IPList;
  }

  export namespace PajwohLqIPListRule {
    export interface IPList {
      /**
       * The ID of a previously created IP list.
       */
      id: string;
    }
  }

  /**
   * Matches any valid client certificate.
   */
  export interface PajwohLqCertificateRule {
    certificate: unknown;
  }

  /**
   * Matches an Access group.
   */
  export interface PajwohLqAccessGroupRule {
    group: PajwohLqAccessGroupRule.Group;
  }

  export namespace PajwohLqAccessGroupRule {
    export interface Group {
      /**
       * The ID of a previously created Access group.
       */
      id: string;
    }
  }

  /**
   * Matches an Azure group. Requires an Azure identity provider.
   */
  export interface PajwohLqAzureGroupRule {
    azureAD: PajwohLqAzureGroupRule.AzureAd;
  }

  export namespace PajwohLqAzureGroupRule {
    export interface AzureAd {
      /**
       * The ID of an Azure group.
       */
      id: string;

      /**
       * The ID of your Azure identity provider.
       */
      connection_id: string;
    }
  }

  /**
   * Matches a Github organization. Requires a Github identity provider.
   */
  export interface PajwohLqGitHubOrganizationRule {
    'github-organization': PajwohLqGitHubOrganizationRule.GitHubOrganization;
  }

  export namespace PajwohLqGitHubOrganizationRule {
    export interface GitHubOrganization {
      /**
       * The ID of your Github identity provider.
       */
      connection_id: string;

      /**
       * The name of the organization.
       */
      name: string;
    }
  }

  /**
   * Matches a group in Google Workspace. Requires a Google Workspace identity
   * provider.
   */
  export interface PajwohLqGsuiteGroupRule {
    gsuite: PajwohLqGsuiteGroupRule.Gsuite;
  }

  export namespace PajwohLqGsuiteGroupRule {
    export interface Gsuite {
      /**
       * The ID of your Google Workspace identity provider.
       */
      connection_id: string;

      /**
       * The email of the Google Workspace group.
       */
      email: string;
    }
  }

  /**
   * Matches an Okta group. Requires an Okta identity provider.
   */
  export interface PajwohLqOktaGroupRule {
    okta: PajwohLqOktaGroupRule.Okta;
  }

  export namespace PajwohLqOktaGroupRule {
    export interface Okta {
      /**
       * The ID of your Okta identity provider.
       */
      connection_id: string;

      /**
       * The email of the Okta group.
       */
      email: string;
    }
  }

  /**
   * Matches a SAML group. Requires a SAML identity provider.
   */
  export interface PajwohLqSamlGroupRule {
    saml: PajwohLqSamlGroupRule.Saml;
  }

  export namespace PajwohLqSamlGroupRule {
    export interface Saml {
      /**
       * The name of the SAML attribute.
       */
      attribute_name: string;

      /**
       * The SAML attribute value to look for.
       */
      attribute_value: string;
    }
  }

  /**
   * Matches a specific Access Service Token
   */
  export interface PajwohLqServiceTokenRule {
    service_token: PajwohLqServiceTokenRule.ServiceToken;
  }

  export namespace PajwohLqServiceTokenRule {
    export interface ServiceToken {
      /**
       * The ID of a Service Token.
       */
      token_id: string;
    }
  }

  /**
   * Matches any valid Access Service Token
   */
  export interface PajwohLqAnyValidServiceTokenRule {
    /**
     * An empty object which matches on all service tokens.
     */
    any_valid_service_token: unknown;
  }

  /**
   * Create Allow or Block policies which evaluate the user based on custom criteria.
   */
  export interface PajwohLqExternalEvaluationRule {
    external_evaluation: PajwohLqExternalEvaluationRule.ExternalEvaluation;
  }

  export namespace PajwohLqExternalEvaluationRule {
    export interface ExternalEvaluation {
      /**
       * The API endpoint containing your business logic.
       */
      evaluate_url: string;

      /**
       * The API endpoint containing the key that Access uses to verify that the response
       * came from your API.
       */
      keys_url: string;
    }
  }

  /**
   * Matches a specific country
   */
  export interface PajwohLqCountryRule {
    geo: PajwohLqCountryRule.Geo;
  }

  export namespace PajwohLqCountryRule {
    export interface Geo {
      /**
       * The country code that should be matched.
       */
      country_code: string;
    }
  }

  /**
   * Enforce different MFA options
   */
  export interface PajwohLqAuthenticationMethodRule {
    auth_method: PajwohLqAuthenticationMethodRule.AuthMethod;
  }

  export namespace PajwohLqAuthenticationMethodRule {
    export interface AuthMethod {
      /**
       * The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176.
       */
      auth_method: string;
    }
  }

  /**
   * Enforces a device posture rule has run successfully
   */
  export interface PajwohLqDevicePostureRule {
    device_posture: PajwohLqDevicePostureRule.DevicePosture;
  }

  export namespace PajwohLqDevicePostureRule {
    export interface DevicePosture {
      /**
       * The ID of a device posture integration.
       */
      integration_uid: string;
    }
  }
}

export namespace Groups {
  export import GroupRetrieveResponse = GroupsAPI.GroupRetrieveResponse;
  export import GroupUpdateResponse = GroupsAPI.GroupUpdateResponse;
  export import GroupDeleteResponse = GroupsAPI.GroupDeleteResponse;
  export import GroupAccessGroupsCreateAnAccessGroupResponse = GroupsAPI.GroupAccessGroupsCreateAnAccessGroupResponse;
  export import GroupAccessGroupsListAccessGroupsResponse = GroupsAPI.GroupAccessGroupsListAccessGroupsResponse;
  export import GroupUpdateParams = GroupsAPI.GroupUpdateParams;
  export import GroupAccessGroupsCreateAnAccessGroupParams = GroupsAPI.GroupAccessGroupsCreateAnAccessGroupParams;
}
