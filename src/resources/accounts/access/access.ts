// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as BookmarksAPI from 'cloudflare/resources/accounts/access/bookmarks';
import * as CustomPagesAPI from 'cloudflare/resources/accounts/access/custom-pages';
import * as GroupsAPI from 'cloudflare/resources/accounts/access/groups';
import * as IdentityProvidersAPI from 'cloudflare/resources/accounts/access/identity-providers';
import * as SeatsAPI from 'cloudflare/resources/accounts/access/seats';
import * as TagsAPI from 'cloudflare/resources/accounts/access/tags';
import * as CertificatesAPI from 'cloudflare/resources/accounts/access/certificates/certificates';
import * as KeysAPI from 'cloudflare/resources/accounts/access/keys/keys';
import * as LogsAPI from 'cloudflare/resources/accounts/access/logs/logs';
import * as OrganizationsAPI from 'cloudflare/resources/accounts/access/organizations/organizations';
import * as ServiceTokensAPI from 'cloudflare/resources/accounts/access/service-tokens/service-tokens';
import * as UsersAPI from 'cloudflare/resources/accounts/access/users/users';

export class Access extends APIResource {
  bookmarks: BookmarksAPI.Bookmarks = new BookmarksAPI.Bookmarks(this._client);
  certificates: CertificatesAPI.Certificates = new CertificatesAPI.Certificates(this._client);
  customPages: CustomPagesAPI.CustomPages = new CustomPagesAPI.CustomPages(this._client);
  groups: GroupsAPI.Groups = new GroupsAPI.Groups(this._client);
  identityProviders: IdentityProvidersAPI.IdentityProviders = new IdentityProvidersAPI.IdentityProviders(
    this._client,
  );
  keys: KeysAPI.Keys = new KeysAPI.Keys(this._client);
  logs: LogsAPI.Logs = new LogsAPI.Logs(this._client);
  organizations: OrganizationsAPI.Organizations = new OrganizationsAPI.Organizations(this._client);
  seats: SeatsAPI.Seats = new SeatsAPI.Seats(this._client);
  serviceTokens: ServiceTokensAPI.ServiceTokens = new ServiceTokensAPI.ServiceTokens(this._client);
  tags: TagsAPI.Tags = new TagsAPI.Tags(this._client);
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
}

export namespace Access {
  export import Bookmarks = BookmarksAPI.Bookmarks;
  export import BookmarkCreateResponse = BookmarksAPI.BookmarkCreateResponse;
  export import BookmarkRetrieveResponse = BookmarksAPI.BookmarkRetrieveResponse;
  export import BookmarkUpdateResponse = BookmarksAPI.BookmarkUpdateResponse;
  export import BookmarkDeleteResponse = BookmarksAPI.BookmarkDeleteResponse;
  export import BookmarkAccessBookmarkApplicationsDeprecatedListBookmarkApplicationsResponse = BookmarksAPI.BookmarkAccessBookmarkApplicationsDeprecatedListBookmarkApplicationsResponse;
  export import Certificates = CertificatesAPI.Certificates;
  export import CertificateRetrieveResponse = CertificatesAPI.CertificateRetrieveResponse;
  export import CertificateUpdateResponse = CertificatesAPI.CertificateUpdateResponse;
  export import CertificateDeleteResponse = CertificatesAPI.CertificateDeleteResponse;
  export import CertificateAccessMTlsAuthenticationAddAnMTlsCertificateResponse = CertificatesAPI.CertificateAccessMTlsAuthenticationAddAnMTlsCertificateResponse;
  export import CertificateAccessMTlsAuthenticationListMTlsCertificatesResponse = CertificatesAPI.CertificateAccessMTlsAuthenticationListMTlsCertificatesResponse;
  export import CertificateUpdateParams = CertificatesAPI.CertificateUpdateParams;
  export import CertificateAccessMTlsAuthenticationAddAnMTlsCertificateParams = CertificatesAPI.CertificateAccessMTlsAuthenticationAddAnMTlsCertificateParams;
  export import CustomPages = CustomPagesAPI.CustomPages;
  export import CustomPageCreateResponse = CustomPagesAPI.CustomPageCreateResponse;
  export import CustomPageListResponse = CustomPagesAPI.CustomPageListResponse;
  export import CustomPageDeleteResponse = CustomPagesAPI.CustomPageDeleteResponse;
  export import CustomPageRetrieveCustomPageResponse = CustomPagesAPI.CustomPageRetrieveCustomPageResponse;
  export import CustomPageUpdateCustomPageResponse = CustomPagesAPI.CustomPageUpdateCustomPageResponse;
  export import CustomPageCreateParams = CustomPagesAPI.CustomPageCreateParams;
  export import CustomPageUpdateCustomPageParams = CustomPagesAPI.CustomPageUpdateCustomPageParams;
  export import Groups = GroupsAPI.Groups;
  export import GroupRetrieveResponse = GroupsAPI.GroupRetrieveResponse;
  export import GroupUpdateResponse = GroupsAPI.GroupUpdateResponse;
  export import GroupDeleteResponse = GroupsAPI.GroupDeleteResponse;
  export import GroupAccessGroupsCreateAnAccessGroupResponse = GroupsAPI.GroupAccessGroupsCreateAnAccessGroupResponse;
  export import GroupAccessGroupsListAccessGroupsResponse = GroupsAPI.GroupAccessGroupsListAccessGroupsResponse;
  export import GroupUpdateParams = GroupsAPI.GroupUpdateParams;
  export import GroupAccessGroupsCreateAnAccessGroupParams = GroupsAPI.GroupAccessGroupsCreateAnAccessGroupParams;
  export import IdentityProviders = IdentityProvidersAPI.IdentityProviders;
  export import IdentityProviderRetrieveResponse = IdentityProvidersAPI.IdentityProviderRetrieveResponse;
  export import IdentityProviderUpdateResponse = IdentityProvidersAPI.IdentityProviderUpdateResponse;
  export import IdentityProviderDeleteResponse = IdentityProvidersAPI.IdentityProviderDeleteResponse;
  export import IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderResponse = IdentityProvidersAPI.IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderResponse;
  export import IdentityProviderAccessIdentityProvidersListAccessIdentityProvidersResponse = IdentityProvidersAPI.IdentityProviderAccessIdentityProvidersListAccessIdentityProvidersResponse;
  export import IdentityProviderUpdateParams = IdentityProvidersAPI.IdentityProviderUpdateParams;
  export import IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderParams = IdentityProvidersAPI.IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderParams;
  export import Keys = KeysAPI.Keys;
  export import KeyAccessKeyConfigurationGetTheAccessKeyConfigurationResponse = KeysAPI.KeyAccessKeyConfigurationGetTheAccessKeyConfigurationResponse;
  export import KeyAccessKeyConfigurationUpdateTheAccessKeyConfigurationResponse = KeysAPI.KeyAccessKeyConfigurationUpdateTheAccessKeyConfigurationResponse;
  export import KeyAccessKeyConfigurationUpdateTheAccessKeyConfigurationParams = KeysAPI.KeyAccessKeyConfigurationUpdateTheAccessKeyConfigurationParams;
  export import Logs = LogsAPI.Logs;
  export import Organizations = OrganizationsAPI.Organizations;
  export import OrganizationZeroTrustOrganizationCreateYourZeroTrustOrganizationResponse = OrganizationsAPI.OrganizationZeroTrustOrganizationCreateYourZeroTrustOrganizationResponse;
  export import OrganizationZeroTrustOrganizationGetYourZeroTrustOrganizationResponse = OrganizationsAPI.OrganizationZeroTrustOrganizationGetYourZeroTrustOrganizationResponse;
  export import OrganizationZeroTrustOrganizationUpdateYourZeroTrustOrganizationResponse = OrganizationsAPI.OrganizationZeroTrustOrganizationUpdateYourZeroTrustOrganizationResponse;
  export import OrganizationZeroTrustOrganizationCreateYourZeroTrustOrganizationParams = OrganizationsAPI.OrganizationZeroTrustOrganizationCreateYourZeroTrustOrganizationParams;
  export import OrganizationZeroTrustOrganizationUpdateYourZeroTrustOrganizationParams = OrganizationsAPI.OrganizationZeroTrustOrganizationUpdateYourZeroTrustOrganizationParams;
  export import Seats = SeatsAPI.Seats;
  export import SeatZeroTrustSeatsUpdateAUserSeatResponse = SeatsAPI.SeatZeroTrustSeatsUpdateAUserSeatResponse;
  export import SeatZeroTrustSeatsUpdateAUserSeatParams = SeatsAPI.SeatZeroTrustSeatsUpdateAUserSeatParams;
  export import ServiceTokens = ServiceTokensAPI.ServiceTokens;
  export import ServiceTokenUpdateResponse = ServiceTokensAPI.ServiceTokenUpdateResponse;
  export import ServiceTokenDeleteResponse = ServiceTokensAPI.ServiceTokenDeleteResponse;
  export import ServiceTokenAccessServiceTokensCreateAServiceTokenResponse = ServiceTokensAPI.ServiceTokenAccessServiceTokensCreateAServiceTokenResponse;
  export import ServiceTokenAccessServiceTokensListServiceTokensResponse = ServiceTokensAPI.ServiceTokenAccessServiceTokensListServiceTokensResponse;
  export import ServiceTokenUpdateParams = ServiceTokensAPI.ServiceTokenUpdateParams;
  export import ServiceTokenAccessServiceTokensCreateAServiceTokenParams = ServiceTokensAPI.ServiceTokenAccessServiceTokensCreateAServiceTokenParams;
  export import Tags = TagsAPI.Tags;
  export import TagCreateTagResponse = TagsAPI.TagCreateTagResponse;
  export import TagDeleteTagResponse = TagsAPI.TagDeleteTagResponse;
  export import TagGetTagResponse = TagsAPI.TagGetTagResponse;
  export import TagListTagsResponse = TagsAPI.TagListTagsResponse;
  export import TagUpdateTagResponse = TagsAPI.TagUpdateTagResponse;
  export import TagCreateTagParams = TagsAPI.TagCreateTagParams;
  export import TagUpdateTagParams = TagsAPI.TagUpdateTagParams;
  export import Users = UsersAPI.Users;
  export import UserZeroTrustUsersGetUsersResponse = UsersAPI.UserZeroTrustUsersGetUsersResponse;
}
