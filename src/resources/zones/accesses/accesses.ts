// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as GroupsAPI from 'cloudflare/resources/zones/accesses/groups';
import * as IdentityProvidersAPI from 'cloudflare/resources/zones/accesses/identity-providers';
import * as OrganizationsAPI from 'cloudflare/resources/zones/accesses/organizations';
import * as ServiceTokensAPI from 'cloudflare/resources/zones/accesses/service-tokens';
import * as CertificatesAPI from 'cloudflare/resources/zones/accesses/certificates/certificates';

export class Accesses extends APIResource {
  certificates: CertificatesAPI.Certificates = new CertificatesAPI.Certificates(this._client);
  groups: GroupsAPI.Groups = new GroupsAPI.Groups(this._client);
  identityProviders: IdentityProvidersAPI.IdentityProviders = new IdentityProvidersAPI.IdentityProviders(
    this._client,
  );
  organizations: OrganizationsAPI.Organizations = new OrganizationsAPI.Organizations(this._client);
  serviceTokens: ServiceTokensAPI.ServiceTokens = new ServiceTokensAPI.ServiceTokens(this._client);
}

export namespace Accesses {
  export import Certificates = CertificatesAPI.Certificates;
  export import CertificateRetrieveResponse = CertificatesAPI.CertificateRetrieveResponse;
  export import CertificateUpdateResponse = CertificatesAPI.CertificateUpdateResponse;
  export import CertificateListResponse = CertificatesAPI.CertificateListResponse;
  export import CertificateDeleteResponse = CertificatesAPI.CertificateDeleteResponse;
  export import CertificateAddResponse = CertificatesAPI.CertificateAddResponse;
  export import CertificateUpdateParams = CertificatesAPI.CertificateUpdateParams;
  export import CertificateAddParams = CertificatesAPI.CertificateAddParams;
  export import Groups = GroupsAPI.Groups;
  export import GroupCreateResponse = GroupsAPI.GroupCreateResponse;
  export import GroupRetrieveResponse = GroupsAPI.GroupRetrieveResponse;
  export import GroupUpdateResponse = GroupsAPI.GroupUpdateResponse;
  export import GroupListResponse = GroupsAPI.GroupListResponse;
  export import GroupDeleteResponse = GroupsAPI.GroupDeleteResponse;
  export import GroupCreateParams = GroupsAPI.GroupCreateParams;
  export import GroupUpdateParams = GroupsAPI.GroupUpdateParams;
  export import IdentityProviders = IdentityProvidersAPI.IdentityProviders;
  export import IdentityProviderRetrieveResponse = IdentityProvidersAPI.IdentityProviderRetrieveResponse;
  export import IdentityProviderUpdateResponse = IdentityProvidersAPI.IdentityProviderUpdateResponse;
  export import IdentityProviderListResponse = IdentityProvidersAPI.IdentityProviderListResponse;
  export import IdentityProviderDeleteResponse = IdentityProvidersAPI.IdentityProviderDeleteResponse;
  export import IdentityProviderAddResponse = IdentityProvidersAPI.IdentityProviderAddResponse;
  export import IdentityProviderUpdateParams = IdentityProvidersAPI.IdentityProviderUpdateParams;
  export import IdentityProviderAddParams = IdentityProvidersAPI.IdentityProviderAddParams;
  export import Organizations = OrganizationsAPI.Organizations;
  export import OrganizationRevokeUserResponse = OrganizationsAPI.OrganizationRevokeUserResponse;
  export import OrganizationZoneLevelZeroTrustOrganizationCreateYourZeroTrustOrganizationResponse = OrganizationsAPI.OrganizationZoneLevelZeroTrustOrganizationCreateYourZeroTrustOrganizationResponse;
  export import OrganizationZoneLevelZeroTrustOrganizationGetYourZeroTrustOrganizationResponse = OrganizationsAPI.OrganizationZoneLevelZeroTrustOrganizationGetYourZeroTrustOrganizationResponse;
  export import OrganizationZoneLevelZeroTrustOrganizationUpdateYourZeroTrustOrganizationResponse = OrganizationsAPI.OrganizationZoneLevelZeroTrustOrganizationUpdateYourZeroTrustOrganizationResponse;
  export import OrganizationRevokeUserParams = OrganizationsAPI.OrganizationRevokeUserParams;
  export import OrganizationZoneLevelZeroTrustOrganizationCreateYourZeroTrustOrganizationParams = OrganizationsAPI.OrganizationZoneLevelZeroTrustOrganizationCreateYourZeroTrustOrganizationParams;
  export import OrganizationZoneLevelZeroTrustOrganizationUpdateYourZeroTrustOrganizationParams = OrganizationsAPI.OrganizationZoneLevelZeroTrustOrganizationUpdateYourZeroTrustOrganizationParams;
  export import ServiceTokens = ServiceTokensAPI.ServiceTokens;
  export import ServiceTokenUpdateResponse = ServiceTokensAPI.ServiceTokenUpdateResponse;
  export import ServiceTokenDeleteResponse = ServiceTokensAPI.ServiceTokenDeleteResponse;
  export import ServiceTokenZoneLevelAccessServiceTokensCreateAServiceTokenResponse = ServiceTokensAPI.ServiceTokenZoneLevelAccessServiceTokensCreateAServiceTokenResponse;
  export import ServiceTokenZoneLevelAccessServiceTokensListServiceTokensResponse = ServiceTokensAPI.ServiceTokenZoneLevelAccessServiceTokensListServiceTokensResponse;
  export import ServiceTokenUpdateParams = ServiceTokensAPI.ServiceTokenUpdateParams;
  export import ServiceTokenZoneLevelAccessServiceTokensCreateAServiceTokenParams = ServiceTokensAPI.ServiceTokenZoneLevelAccessServiceTokensCreateAServiceTokenParams;
}
