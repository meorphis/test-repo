// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as UserAPI from 'cloudflare/resources/user/user';
import * as InvitesAPI from 'cloudflare/resources/user/invites';
import * as OrganizationsAPI from 'cloudflare/resources/user/organizations';
import * as SubscriptionsAPI from 'cloudflare/resources/user/subscriptions';
import * as BillingsAPI from 'cloudflare/resources/user/billings/billings';
import * as FirewallsAPI from 'cloudflare/resources/user/firewalls/firewalls';
import * as LoadBalancersAPI from 'cloudflare/resources/user/load-balancers/load-balancers';
import * as LoadBalancingAnalyticsAPI from 'cloudflare/resources/user/load-balancing-analytics/load-balancing-analytics';
import * as TokensAPI from 'cloudflare/resources/user/tokens/tokens';

export class User extends APIResource {
  billings: BillingsAPI.Billings = new BillingsAPI.Billings(this._client);
  firewalls: FirewallsAPI.Firewalls = new FirewallsAPI.Firewalls(this._client);
  invites: InvitesAPI.Invites = new InvitesAPI.Invites(this._client);
  loadBalancers: LoadBalancersAPI.LoadBalancers = new LoadBalancersAPI.LoadBalancers(this._client);
  loadBalancingAnalytics: LoadBalancingAnalyticsAPI.LoadBalancingAnalytics =
    new LoadBalancingAnalyticsAPI.LoadBalancingAnalytics(this._client);
  organizations: OrganizationsAPI.Organizations = new OrganizationsAPI.Organizations(this._client);
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);
  tokens: TokensAPI.Tokens = new TokensAPI.Tokens(this._client);

  /**
   * Edit part of your user details.
   */
  userEditUser(
    body: UserUserEditUserParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserUserEditUserResponse> {
    return this._client.patch('/user', { body, ...options });
  }

  /**
   * User Details
   */
  userUserDetails(options?: Core.RequestOptions): Core.APIPromise<UserUserUserDetailsResponse> {
    return this._client.get('/user', options);
  }
}

export interface UserUserEditUserResponse {
  errors?: Array<UserUserEditUserResponse.Error>;

  messages?: Array<UserUserEditUserResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace UserUserEditUserResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface UserUserUserDetailsResponse {
  errors?: Array<UserUserUserDetailsResponse.Error>;

  messages?: Array<UserUserUserDetailsResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace UserUserUserDetailsResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface UserUserEditUserParams {
  /**
   * The country in which the user lives.
   */
  country?: string | null;

  /**
   * User's first name
   */
  first_name?: string | null;

  /**
   * User's last name
   */
  last_name?: string | null;

  /**
   * User's telephone number
   */
  telephone?: string | null;

  /**
   * The zipcode or postal code where the user lives.
   */
  zipcode?: string | null;
}

export namespace User {
  export import UserUserEditUserResponse = UserAPI.UserUserEditUserResponse;
  export import UserUserUserDetailsResponse = UserAPI.UserUserUserDetailsResponse;
  export import UserUserEditUserParams = UserAPI.UserUserEditUserParams;
  export import Billings = BillingsAPI.Billings;
  export import Firewalls = FirewallsAPI.Firewalls;
  export import Invites = InvitesAPI.Invites;
  export import InviteRetrieveResponse = InvitesAPI.InviteRetrieveResponse;
  export import InviteUpdateResponse = InvitesAPI.InviteUpdateResponse;
  export import InviteUserSInvitesListInvitationsResponse = InvitesAPI.InviteUserSInvitesListInvitationsResponse;
  export import InviteUpdateParams = InvitesAPI.InviteUpdateParams;
  export import LoadBalancers = LoadBalancersAPI.LoadBalancers;
  export import LoadBalancingAnalytics = LoadBalancingAnalyticsAPI.LoadBalancingAnalytics;
  export import Organizations = OrganizationsAPI.Organizations;
  export import OrganizationRetrieveResponse = OrganizationsAPI.OrganizationRetrieveResponse;
  export import OrganizationDeleteResponse = OrganizationsAPI.OrganizationDeleteResponse;
  export import OrganizationUserSOrganizationsListOrganizationsResponse = OrganizationsAPI.OrganizationUserSOrganizationsListOrganizationsResponse;
  export import OrganizationUserSOrganizationsListOrganizationsResponsesPage = OrganizationsAPI.OrganizationUserSOrganizationsListOrganizationsResponsesPage;
  export import OrganizationUserSOrganizationsListOrganizationsParams = OrganizationsAPI.OrganizationUserSOrganizationsListOrganizationsParams;
  export import Subscriptions = SubscriptionsAPI.Subscriptions;
  export import SubscriptionUpdateResponse = SubscriptionsAPI.SubscriptionUpdateResponse;
  export import SubscriptionDeleteResponse = SubscriptionsAPI.SubscriptionDeleteResponse;
  export import SubscriptionUserSubscriptionGetUserSubscriptionsResponse = SubscriptionsAPI.SubscriptionUserSubscriptionGetUserSubscriptionsResponse;
  export import SubscriptionUpdateParams = SubscriptionsAPI.SubscriptionUpdateParams;
  export import Tokens = TokensAPI.Tokens;
  export import TokenRetrieveResponse = TokensAPI.TokenRetrieveResponse;
  export import TokenUpdateResponse = TokensAPI.TokenUpdateResponse;
  export import TokenDeleteResponse = TokensAPI.TokenDeleteResponse;
  export import TokenUserAPITokensCreateTokenResponse = TokensAPI.TokenUserAPITokensCreateTokenResponse;
  export import TokenUserAPITokensListTokensResponse = TokensAPI.TokenUserAPITokensListTokensResponse;
  export import TokenUserAPITokensListTokensResponsesPage = TokensAPI.TokenUserAPITokensListTokensResponsesPage;
  export import TokenUpdateParams = TokensAPI.TokenUpdateParams;
  export import TokenUserAPITokensCreateTokenParams = TokensAPI.TokenUserAPITokensCreateTokenParams;
  export import TokenUserAPITokensListTokensParams = TokensAPI.TokenUserAPITokensListTokensParams;
}
