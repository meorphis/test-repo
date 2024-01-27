# Shared

Types:

- <code><a href="./src/resources/shared.ts">HyperdriveHyperdriveWithIdentifier</a></code>
- <code><a href="./src/resources/shared.ts">VectorizeCreateIndexResponse</a></code>
- <code><a href="./src/resources/shared.ts">WaitingRoomSettingsResponse</a></code>

# Accounts

Types:

- <code><a href="./src/resources/accounts/accounts.ts">AccountRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/accounts.ts">AccountUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/accounts.ts">AccountAccountsListAccountsResponse</a></code>

Methods:

- <code title="get /accounts/{identifier}">client.accounts.<a href="./src/resources/accounts/accounts.ts">retrieve</a>(identifier) -> AccountRetrieveResponse</code>
- <code title="put /accounts/{identifier}">client.accounts.<a href="./src/resources/accounts/accounts.ts">update</a>(identifier, { ...params }) -> AccountUpdateResponse</code>
- <code title="get /accounts">client.accounts.<a href="./src/resources/accounts/accounts.ts">accountsListAccounts</a>({ ...params }) -> AccountAccountsListAccountsResponsesPage</code>

## Addresses

### AddressMaps

Types:

- <code><a href="./src/resources/accounts/addresses/address-maps/address-maps.ts">AddressMapCreateResponse</a></code>
- <code><a href="./src/resources/accounts/addresses/address-maps/address-maps.ts">AddressMapRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/addresses/address-maps/address-maps.ts">AddressMapUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/addresses/address-maps/address-maps.ts">AddressMapListResponse</a></code>
- <code><a href="./src/resources/accounts/addresses/address-maps/address-maps.ts">AddressMapDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/addressing/address_maps">client.accounts.addresses.addressMaps.<a href="./src/resources/accounts/addresses/address-maps/address-maps.ts">create</a>(accountIdentifier, { ...params }) -> AddressMapCreateResponse</code>
- <code title="get /accounts/{account_identifier}/addressing/address_maps/{address_map_identifier}">client.accounts.addresses.addressMaps.<a href="./src/resources/accounts/addresses/address-maps/address-maps.ts">retrieve</a>(accountIdentifier, addressMapIdentifier) -> AddressMapRetrieveResponse</code>
- <code title="patch /accounts/{account_identifier}/addressing/address_maps/{address_map_identifier}">client.accounts.addresses.addressMaps.<a href="./src/resources/accounts/addresses/address-maps/address-maps.ts">update</a>(accountIdentifier, addressMapIdentifier, { ...params }) -> AddressMapUpdateResponse</code>
- <code title="get /accounts/{account_identifier}/addressing/address_maps">client.accounts.addresses.addressMaps.<a href="./src/resources/accounts/addresses/address-maps/address-maps.ts">list</a>(accountIdentifier) -> AddressMapListResponse</code>
- <code title="delete /accounts/{account_identifier}/addressing/address_maps/{address_map_identifier}">client.accounts.addresses.addressMaps.<a href="./src/resources/accounts/addresses/address-maps/address-maps.ts">delete</a>(accountIdentifier, addressMapIdentifier) -> AddressMapDeleteResponse</code>

#### Accounts

Types:

- <code><a href="./src/resources/accounts/addresses/address-maps/accounts.ts">AccountUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/addresses/address-maps/accounts.ts">AccountDeleteResponse</a></code>

Methods:

- <code title="put /accounts/{account_identifier1}/addressing/address_maps/{address_map_identifier}/accounts/{account_identifier}">client.accounts.addresses.addressMaps.accounts.<a href="./src/resources/accounts/addresses/address-maps/accounts.ts">update</a>(accountIdentifier1, addressMapIdentifier, accountIdentifier) -> AccountUpdateResponse</code>
- <code title="delete /accounts/{account_identifier1}/addressing/address_maps/{address_map_identifier}/accounts/{account_identifier}">client.accounts.addresses.addressMaps.accounts.<a href="./src/resources/accounts/addresses/address-maps/accounts.ts">delete</a>(accountIdentifier1, addressMapIdentifier, accountIdentifier) -> AccountDeleteResponse</code>

#### IPs

Types:

- <code><a href="./src/resources/accounts/addresses/address-maps/ips.ts">IPUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/addresses/address-maps/ips.ts">IPDeleteResponse</a></code>

Methods:

- <code title="put /accounts/{account_identifier}/addressing/address_maps/{address_map_identifier}/ips/{ip_address}">client.accounts.addresses.addressMaps.ips.<a href="./src/resources/accounts/addresses/address-maps/ips.ts">update</a>(accountIdentifier, addressMapIdentifier, ipAddress) -> IPUpdateResponse</code>
- <code title="delete /accounts/{account_identifier}/addressing/address_maps/{address_map_identifier}/ips/{ip_address}">client.accounts.addresses.addressMaps.ips.<a href="./src/resources/accounts/addresses/address-maps/ips.ts">delete</a>(accountIdentifier, addressMapIdentifier, ipAddress) -> IPDeleteResponse</code>

#### Zones

Types:

- <code><a href="./src/resources/accounts/addresses/address-maps/zones.ts">ZoneUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/addresses/address-maps/zones.ts">ZoneDeleteResponse</a></code>

Methods:

- <code title="put /accounts/{account_identifier}/addressing/address_maps/{address_map_identifier}/zones/{zone_identifier}">client.accounts.addresses.addressMaps.zones.<a href="./src/resources/accounts/addresses/address-maps/zones.ts">update</a>(accountIdentifier, addressMapIdentifier, zoneIdentifier) -> ZoneUpdateResponse</code>
- <code title="delete /accounts/{account_identifier}/addressing/address_maps/{address_map_identifier}/zones/{zone_identifier}">client.accounts.addresses.addressMaps.zones.<a href="./src/resources/accounts/addresses/address-maps/zones.ts">delete</a>(accountIdentifier, addressMapIdentifier, zoneIdentifier) -> ZoneDeleteResponse</code>

### LoaDocuments

Types:

- <code><a href="./src/resources/accounts/addresses/loa-documents/loa-documents.ts">LoaDocumentIPAddressManagementPrefixesUploadLoaDocumentResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/addressing/loa_documents">client.accounts.addresses.loaDocuments.<a href="./src/resources/accounts/addresses/loa-documents/loa-documents.ts">ipAddressManagementPrefixesUploadLoaDocument</a>(accountIdentifier, { ...params }) -> LoaDocumentIPAddressManagementPrefixesUploadLoaDocumentResponse</code>

#### Downloads

Types:

- <code><a href="./src/resources/accounts/addresses/loa-documents/downloads.ts">DownloadListResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/addressing/loa_documents/{loa_document_identifier}/download">client.accounts.addresses.loaDocuments.downloads.<a href="./src/resources/accounts/addresses/loa-documents/downloads.ts">list</a>(accountIdentifier, loaDocumentIdentifier) -> unknown</code>

### Prefixes

Types:

- <code><a href="./src/resources/accounts/addresses/prefixes/prefixes.ts">PrefixRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/addresses/prefixes/prefixes.ts">PrefixUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/addresses/prefixes/prefixes.ts">PrefixDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/addresses/prefixes/prefixes.ts">PrefixIPAddressManagementPrefixesAddPrefixResponse</a></code>
- <code><a href="./src/resources/accounts/addresses/prefixes/prefixes.ts">PrefixIPAddressManagementPrefixesListPrefixesResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/addressing/prefixes/{prefix_identifier}">client.accounts.addresses.prefixes.<a href="./src/resources/accounts/addresses/prefixes/prefixes.ts">retrieve</a>(accountIdentifier, prefixIdentifier) -> PrefixRetrieveResponse</code>
- <code title="patch /accounts/{account_identifier}/addressing/prefixes/{prefix_identifier}">client.accounts.addresses.prefixes.<a href="./src/resources/accounts/addresses/prefixes/prefixes.ts">update</a>(accountIdentifier, prefixIdentifier, { ...params }) -> PrefixUpdateResponse</code>
- <code title="delete /accounts/{account_identifier}/addressing/prefixes/{prefix_identifier}">client.accounts.addresses.prefixes.<a href="./src/resources/accounts/addresses/prefixes/prefixes.ts">delete</a>(accountIdentifier, prefixIdentifier) -> PrefixDeleteResponse</code>
- <code title="post /accounts/{account_identifier}/addressing/prefixes">client.accounts.addresses.prefixes.<a href="./src/resources/accounts/addresses/prefixes/prefixes.ts">ipAddressManagementPrefixesAddPrefix</a>(accountIdentifier, { ...params }) -> PrefixIPAddressManagementPrefixesAddPrefixResponse</code>
- <code title="get /accounts/{account_identifier}/addressing/prefixes">client.accounts.addresses.prefixes.<a href="./src/resources/accounts/addresses/prefixes/prefixes.ts">ipAddressManagementPrefixesListPrefixes</a>(accountIdentifier) -> PrefixIPAddressManagementPrefixesListPrefixesResponse</code>

#### Bgps

##### Statuses

Types:

- <code><a href="./src/resources/accounts/addresses/prefixes/bgps/statuses.ts">StatusIPAddressManagementDynamicAdvertisementGetAdvertisementStatusResponse</a></code>
- <code><a href="./src/resources/accounts/addresses/prefixes/bgps/statuses.ts">StatusIPAddressManagementDynamicAdvertisementUpdatePrefixDynamicAdvertisementStatusResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/addressing/prefixes/{prefix_identifier}/bgp/status">client.accounts.addresses.prefixes.bgps.statuses.<a href="./src/resources/accounts/addresses/prefixes/bgps/statuses.ts">ipAddressManagementDynamicAdvertisementGetAdvertisementStatus</a>(accountIdentifier, prefixIdentifier) -> StatusIPAddressManagementDynamicAdvertisementGetAdvertisementStatusResponse</code>
- <code title="patch /accounts/{account_identifier}/addressing/prefixes/{prefix_identifier}/bgp/status">client.accounts.addresses.prefixes.bgps.statuses.<a href="./src/resources/accounts/addresses/prefixes/bgps/statuses.ts">ipAddressManagementDynamicAdvertisementUpdatePrefixDynamicAdvertisementStatus</a>(accountIdentifier, prefixIdentifier, { ...params }) -> StatusIPAddressManagementDynamicAdvertisementUpdatePrefixDynamicAdvertisementStatusResponse</code>

#### Delegations

Types:

- <code><a href="./src/resources/accounts/addresses/prefixes/delegations.ts">DelegationDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/addresses/prefixes/delegations.ts">DelegationIPAddressManagementPrefixDelegationCreatePrefixDelegationResponse</a></code>
- <code><a href="./src/resources/accounts/addresses/prefixes/delegations.ts">DelegationIPAddressManagementPrefixDelegationListPrefixDelegationsResponse</a></code>

Methods:

- <code title="delete /accounts/{account_identifier}/addressing/prefixes/{prefix_identifier}/delegations/{delegation_identifier}">client.accounts.addresses.prefixes.delegations.<a href="./src/resources/accounts/addresses/prefixes/delegations.ts">delete</a>(accountIdentifier, prefixIdentifier, delegationIdentifier) -> DelegationDeleteResponse</code>
- <code title="post /accounts/{account_identifier}/addressing/prefixes/{prefix_identifier}/delegations">client.accounts.addresses.prefixes.delegations.<a href="./src/resources/accounts/addresses/prefixes/delegations.ts">ipAddressManagementPrefixDelegationCreatePrefixDelegation</a>(accountIdentifier, prefixIdentifier, { ...params }) -> DelegationIPAddressManagementPrefixDelegationCreatePrefixDelegationResponse</code>
- <code title="get /accounts/{account_identifier}/addressing/prefixes/{prefix_identifier}/delegations">client.accounts.addresses.prefixes.delegations.<a href="./src/resources/accounts/addresses/prefixes/delegations.ts">ipAddressManagementPrefixDelegationListPrefixDelegations</a>(accountIdentifier, prefixIdentifier) -> DelegationIPAddressManagementPrefixDelegationListPrefixDelegationsResponse</code>

## Billings

### Profiles

Types:

- <code><a href="./src/resources/accounts/billings/profiles.ts">ProfileAccountBillingProfileBillingProfileDetailsResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/billing/profile">client.accounts.billings.profiles.<a href="./src/resources/accounts/billings/profiles.ts">accountBillingProfileBillingProfileDetails</a>(accountIdentifier) -> ProfileAccountBillingProfileBillingProfileDetailsResponse</code>

## BrandProtections

### Submits

Types:

- <code><a href="./src/resources/accounts/brand-protections/submits.ts">SubmitPhishingURLScannerSubmitSuspiciousURLForScanningResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/brand-protection/submit">client.accounts.brandProtections.submits.<a href="./src/resources/accounts/brand-protections/submits.ts">phishingURLScannerSubmitSuspiciousURLForScanning</a>(accountIdentifier, { ...params }) -> SubmitPhishingURLScannerSubmitSuspiciousURLForScanningResponse</code>

### URLInfos

Types:

- <code><a href="./src/resources/accounts/brand-protections/url-infos.ts">URLInfoPhishingURLInformationGetResultsForAURLScanResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/brand-protection/url-info">client.accounts.brandProtections.urlInfos.<a href="./src/resources/accounts/brand-protections/url-infos.ts">phishingURLInformationGetResultsForAURLScan</a>(accountIdentifier, { ...params }) -> URLInfoPhishingURLInformationGetResultsForAURLScanResponse</code>

## CfdTunnels

Types:

- <code><a href="./src/resources/accounts/cfd-tunnels/cfd-tunnels.ts">CfdTunnelRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/cfd-tunnels/cfd-tunnels.ts">CfdTunnelUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/cfd-tunnels/cfd-tunnels.ts">CfdTunnelDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/cfd-tunnels/cfd-tunnels.ts">CfdTunnelCloudflareTunnelCreateACloudflareTunnelResponse</a></code>
- <code><a href="./src/resources/accounts/cfd-tunnels/cfd-tunnels.ts">CfdTunnelCloudflareTunnelListCloudflareTunnelsResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/cfd_tunnel/{tunnel_id}">client.accounts.cfdTunnels.<a href="./src/resources/accounts/cfd-tunnels/cfd-tunnels.ts">retrieve</a>(accountIdentifier, tunnelId) -> CfdTunnelRetrieveResponse</code>
- <code title="patch /accounts/{account_identifier}/cfd_tunnel/{tunnel_id}">client.accounts.cfdTunnels.<a href="./src/resources/accounts/cfd-tunnels/cfd-tunnels.ts">update</a>(accountIdentifier, tunnelId, { ...params }) -> CfdTunnelUpdateResponse</code>
- <code title="delete /accounts/{account_identifier}/cfd_tunnel/{tunnel_id}">client.accounts.cfdTunnels.<a href="./src/resources/accounts/cfd-tunnels/cfd-tunnels.ts">delete</a>(accountIdentifier, tunnelId, { ...params }) -> CfdTunnelDeleteResponse</code>
- <code title="post /accounts/{account_identifier}/cfd_tunnel">client.accounts.cfdTunnels.<a href="./src/resources/accounts/cfd-tunnels/cfd-tunnels.ts">cloudflareTunnelCreateACloudflareTunnel</a>(accountIdentifier, { ...params }) -> CfdTunnelCloudflareTunnelCreateACloudflareTunnelResponse</code>
- <code title="get /accounts/{account_identifier}/cfd_tunnel">client.accounts.cfdTunnels.<a href="./src/resources/accounts/cfd-tunnels/cfd-tunnels.ts">cloudflareTunnelListCloudflareTunnels</a>(accountIdentifier, { ...params }) -> CfdTunnelCloudflareTunnelListCloudflareTunnelsResponsesPage</code>

### Configurations

Types:

- <code><a href="./src/resources/accounts/cfd-tunnels/configurations.ts">ConfigurationCloudflareTunnelConfigurationGetConfigurationResponse</a></code>
- <code><a href="./src/resources/accounts/cfd-tunnels/configurations.ts">ConfigurationCloudflareTunnelConfigurationPutConfigurationResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/cfd_tunnel/{tunnel_id}/configurations">client.accounts.cfdTunnels.configurations.<a href="./src/resources/accounts/cfd-tunnels/configurations.ts">cloudflareTunnelConfigurationGetConfiguration</a>(accountIdentifier, tunnelId) -> ConfigurationCloudflareTunnelConfigurationGetConfigurationResponse</code>
- <code title="put /accounts/{account_identifier}/cfd_tunnel/{tunnel_id}/configurations">client.accounts.cfdTunnels.configurations.<a href="./src/resources/accounts/cfd-tunnels/configurations.ts">cloudflareTunnelConfigurationPutConfiguration</a>(accountIdentifier, tunnelId, { ...params }) -> ConfigurationCloudflareTunnelConfigurationPutConfigurationResponse</code>

### Connections

Types:

- <code><a href="./src/resources/accounts/cfd-tunnels/connections.ts">ConnectionDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/cfd-tunnels/connections.ts">ConnectionCloudflareTunnelListCloudflareTunnelConnectionsResponse</a></code>

Methods:

- <code title="delete /accounts/{account_identifier}/cfd_tunnel/{tunnel_id}/connections">client.accounts.cfdTunnels.connections.<a href="./src/resources/accounts/cfd-tunnels/connections.ts">delete</a>(accountIdentifier, tunnelId, { ...params }) -> ConnectionDeleteResponse</code>
- <code title="get /accounts/{account_identifier}/cfd_tunnel/{tunnel_id}/connections">client.accounts.cfdTunnels.connections.<a href="./src/resources/accounts/cfd-tunnels/connections.ts">cloudflareTunnelListCloudflareTunnelConnections</a>(accountIdentifier, tunnelId) -> ConnectionCloudflareTunnelListCloudflareTunnelConnectionsResponse</code>

### Connectors

Types:

- <code><a href="./src/resources/accounts/cfd-tunnels/connectors.ts">ConnectorRetrieveResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/cfd_tunnel/{tunnel_id}/connectors/{connector_id}">client.accounts.cfdTunnels.connectors.<a href="./src/resources/accounts/cfd-tunnels/connectors.ts">retrieve</a>(accountIdentifier, tunnelId, connectorId) -> ConnectorRetrieveResponse</code>

### Management

Types:

- <code><a href="./src/resources/accounts/cfd-tunnels/management.ts">ManagementListResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/cfd_tunnel/{tunnel_id}/management">client.accounts.cfdTunnels.management.<a href="./src/resources/accounts/cfd-tunnels/management.ts">list</a>(accountIdentifier, tunnelId, { ...params }) -> ManagementListResponse</code>

### Tokens

Types:

- <code><a href="./src/resources/accounts/cfd-tunnels/tokens.ts">TokenCloudflareTunnelGetACloudflareTunnelTokenResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/cfd_tunnel/{tunnel_id}/token">client.accounts.cfdTunnels.tokens.<a href="./src/resources/accounts/cfd-tunnels/tokens.ts">cloudflareTunnelGetACloudflareTunnelToken</a>(accountIdentifier, tunnelId) -> TokenCloudflareTunnelGetACloudflareTunnelTokenResponse</code>

## CustomPages

Types:

- <code><a href="./src/resources/accounts/custom-pages.ts">CustomPageRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/custom-pages.ts">CustomPageUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/custom-pages.ts">CustomPageCustomPagesForAnAccountListCustomPagesResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/custom_pages/{identifier}">client.accounts.customPages.<a href="./src/resources/accounts/custom-pages.ts">retrieve</a>(accountIdentifier, identifier) -> CustomPageRetrieveResponse</code>
- <code title="put /accounts/{account_identifier}/custom_pages/{identifier}">client.accounts.customPages.<a href="./src/resources/accounts/custom-pages.ts">update</a>(accountIdentifier, identifier, { ...params }) -> CustomPageUpdateResponse</code>
- <code title="get /accounts/{account_identifier}/custom_pages">client.accounts.customPages.<a href="./src/resources/accounts/custom-pages.ts">customPagesForAnAccountListCustomPages</a>(accountIdentifier) -> CustomPageCustomPagesForAnAccountListCustomPagesResponse</code>

## Diagnostics

### Traceroutes

Types:

- <code><a href="./src/resources/accounts/diagnostics/traceroutes.ts">TracerouteDiagnosticsTracerouteResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/diagnostics/traceroute">client.accounts.diagnostics.traceroutes.<a href="./src/resources/accounts/diagnostics/traceroutes.ts">diagnosticsTraceroute</a>(accountIdentifier, { ...params }) -> TracerouteDiagnosticsTracerouteResponse</code>

## Dlp

### Datasets

Types:

- <code><a href="./src/resources/accounts/dlp/datasets/datasets.ts">DlpDatasetArrayResponse</a></code>
- <code><a href="./src/resources/accounts/dlp/datasets/datasets.ts">DlpDatasetCreationResponse</a></code>
- <code><a href="./src/resources/accounts/dlp/datasets/datasets.ts">DlpDatasetNewVersionResponse</a></code>
- <code><a href="./src/resources/accounts/dlp/datasets/datasets.ts">DlpDatasetResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/dlp/datasets">client.accounts.dlp.datasets.<a href="./src/resources/accounts/dlp/datasets/datasets.ts">create</a>(accountIdentifier, { ...params }) -> DlpDatasetCreationResponse</code>
- <code title="get /accounts/{account_identifier}/dlp/datasets/{dataset_id}">client.accounts.dlp.datasets.<a href="./src/resources/accounts/dlp/datasets/datasets.ts">retrieve</a>(accountIdentifier, datasetId) -> DlpDatasetResponse</code>
- <code title="put /accounts/{account_identifier}/dlp/datasets/{dataset_id}">client.accounts.dlp.datasets.<a href="./src/resources/accounts/dlp/datasets/datasets.ts">update</a>(accountIdentifier, datasetId, { ...params }) -> DlpDatasetResponse</code>
- <code title="get /accounts/{account_identifier}/dlp/datasets">client.accounts.dlp.datasets.<a href="./src/resources/accounts/dlp/datasets/datasets.ts">list</a>(accountIdentifier) -> DlpDatasetArrayResponse</code>
- <code title="delete /accounts/{account_identifier}/dlp/datasets/{dataset_id}">client.accounts.dlp.datasets.<a href="./src/resources/accounts/dlp/datasets/datasets.ts">delete</a>(accountIdentifier, datasetId) -> void</code>

#### Upload

Methods:

- <code title="post /accounts/{account_identifier}/dlp/datasets/{dataset_id}/upload">client.accounts.dlp.datasets.upload.<a href="./src/resources/accounts/dlp/datasets/upload.ts">prepare</a>(accountIdentifier, datasetId) -> DlpDatasetNewVersionResponse</code>
- <code title="post /accounts/{account_identifier}/dlp/datasets/{dataset_id}/upload/{version}">client.accounts.dlp.datasets.upload.<a href="./src/resources/accounts/dlp/datasets/upload.ts">upload</a>(accountIdentifier, datasetId, version) -> DlpDatasetResponse</code>

### Patterns

#### Validates

Types:

- <code><a href="./src/resources/accounts/dlp/patterns/validates.ts">ValidateDlpPatternValidationValidatePatternResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/dlp/patterns/validate">client.accounts.dlp.patterns.validates.<a href="./src/resources/accounts/dlp/patterns/validates.ts">dlpPatternValidationValidatePattern</a>(accountIdentifier, { ...params }) -> ValidateDlpPatternValidationValidatePatternResponse</code>

### PayloadLogs

Types:

- <code><a href="./src/resources/accounts/dlp/payload-logs.ts">PayloadLogDlpPayloadLogSettingsGetSettingsResponse</a></code>
- <code><a href="./src/resources/accounts/dlp/payload-logs.ts">PayloadLogDlpPayloadLogSettingsUpdateSettingsResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/dlp/payload_log">client.accounts.dlp.payloadLogs.<a href="./src/resources/accounts/dlp/payload-logs.ts">dlpPayloadLogSettingsGetSettings</a>(accountIdentifier) -> PayloadLogDlpPayloadLogSettingsGetSettingsResponse</code>
- <code title="put /accounts/{account_identifier}/dlp/payload_log">client.accounts.dlp.payloadLogs.<a href="./src/resources/accounts/dlp/payload-logs.ts">dlpPayloadLogSettingsUpdateSettings</a>(accountIdentifier, { ...params }) -> PayloadLogDlpPayloadLogSettingsUpdateSettingsResponse</code>

### Profiles

Types:

- <code><a href="./src/resources/accounts/dlp/profiles/profiles.ts">ProfileRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/dlp/profiles/profiles.ts">ProfileListResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/dlp/profiles/{profile_id}">client.accounts.dlp.profiles.<a href="./src/resources/accounts/dlp/profiles/profiles.ts">retrieve</a>(accountIdentifier, profileId) -> ProfileRetrieveResponse</code>
- <code title="get /accounts/{account_identifier}/dlp/profiles">client.accounts.dlp.profiles.<a href="./src/resources/accounts/dlp/profiles/profiles.ts">list</a>(accountIdentifier) -> ProfileListResponse</code>

#### Customs

Types:

- <code><a href="./src/resources/accounts/dlp/profiles/customs.ts">CustomRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/dlp/profiles/customs.ts">CustomUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/dlp/profiles/customs.ts">CustomDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/dlp/profiles/customs.ts">CustomDlpProfilesCreateCustomProfilesResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/dlp/profiles/custom/{profile_id}">client.accounts.dlp.profiles.customs.<a href="./src/resources/accounts/dlp/profiles/customs.ts">retrieve</a>(accountIdentifier, profileId) -> CustomRetrieveResponse</code>
- <code title="put /accounts/{account_identifier}/dlp/profiles/custom/{profile_id}">client.accounts.dlp.profiles.customs.<a href="./src/resources/accounts/dlp/profiles/customs.ts">update</a>(accountIdentifier, profileId, { ...params }) -> CustomUpdateResponse</code>
- <code title="delete /accounts/{account_identifier}/dlp/profiles/custom/{profile_id}">client.accounts.dlp.profiles.customs.<a href="./src/resources/accounts/dlp/profiles/customs.ts">delete</a>(accountIdentifier, profileId) -> CustomDeleteResponse</code>
- <code title="post /accounts/{account_identifier}/dlp/profiles/custom">client.accounts.dlp.profiles.customs.<a href="./src/resources/accounts/dlp/profiles/customs.ts">dlpProfilesCreateCustomProfiles</a>(accountIdentifier, { ...params }) -> CustomDlpProfilesCreateCustomProfilesResponse</code>

#### Predefineds

Types:

- <code><a href="./src/resources/accounts/dlp/profiles/predefineds.ts">PredefinedRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/dlp/profiles/predefineds.ts">PredefinedUpdateResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/dlp/profiles/predefined/{profile_id}">client.accounts.dlp.profiles.predefineds.<a href="./src/resources/accounts/dlp/profiles/predefineds.ts">retrieve</a>(accountIdentifier, profileId) -> PredefinedRetrieveResponse</code>
- <code title="put /accounts/{account_identifier}/dlp/profiles/predefined/{profile_id}">client.accounts.dlp.profiles.predefineds.<a href="./src/resources/accounts/dlp/profiles/predefineds.ts">update</a>(accountIdentifier, profileId, { ...params }) -> PredefinedUpdateResponse</code>

## DNSFirewalls

Types:

- <code><a href="./src/resources/accounts/dns-firewalls/dns-firewalls.ts">DNSFirewallRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/dns-firewalls/dns-firewalls.ts">DNSFirewallUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/dns-firewalls/dns-firewalls.ts">DNSFirewallDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/dns-firewalls/dns-firewalls.ts">DNSFirewallDNSFirewallCreateDNSFirewallClusterResponse</a></code>
- <code><a href="./src/resources/accounts/dns-firewalls/dns-firewalls.ts">DNSFirewallDNSFirewallListDNSFirewallClustersResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/dns_firewall/{identifier}">client.accounts.dnsFirewalls.<a href="./src/resources/accounts/dns-firewalls/dns-firewalls.ts">retrieve</a>(accountIdentifier, identifier) -> DNSFirewallRetrieveResponse</code>
- <code title="patch /accounts/{account_identifier}/dns_firewall/{identifier}">client.accounts.dnsFirewalls.<a href="./src/resources/accounts/dns-firewalls/dns-firewalls.ts">update</a>(accountIdentifier, identifier, { ...params }) -> DNSFirewallUpdateResponse</code>
- <code title="delete /accounts/{account_identifier}/dns_firewall/{identifier}">client.accounts.dnsFirewalls.<a href="./src/resources/accounts/dns-firewalls/dns-firewalls.ts">delete</a>(accountIdentifier, identifier) -> DNSFirewallDeleteResponse</code>
- <code title="post /accounts/{account_identifier}/dns_firewall">client.accounts.dnsFirewalls.<a href="./src/resources/accounts/dns-firewalls/dns-firewalls.ts">dnsFirewallCreateDNSFirewallCluster</a>(accountIdentifier, { ...params }) -> DNSFirewallDNSFirewallCreateDNSFirewallClusterResponse</code>
- <code title="get /accounts/{account_identifier}/dns_firewall">client.accounts.dnsFirewalls.<a href="./src/resources/accounts/dns-firewalls/dns-firewalls.ts">dnsFirewallListDNSFirewallClusters</a>(accountIdentifier, { ...params }) -> DNSFirewallDNSFirewallListDNSFirewallClustersResponsesPage</code>

### DNSAnalytics

#### Reports

Types:

- <code><a href="./src/resources/accounts/dns-firewalls/dns-analytics/reports/reports.ts">ReportListResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/dns_firewall/{identifier}/dns_analytics/report">client.accounts.dnsFirewalls.dnsAnalytics.reports.<a href="./src/resources/accounts/dns-firewalls/dns-analytics/reports/reports.ts">list</a>(accountIdentifier, identifier, { ...params }) -> ReportListResponse</code>

##### Bytimes

Types:

- <code><a href="./src/resources/accounts/dns-firewalls/dns-analytics/reports/bytimes.ts">BytimeListResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/dns_firewall/{identifier}/dns_analytics/report/bytime">client.accounts.dnsFirewalls.dnsAnalytics.reports.bytimes.<a href="./src/resources/accounts/dns-firewalls/dns-analytics/reports/bytimes.ts">list</a>(accountIdentifier, identifier, { ...params }) -> BytimeListResponse</code>

## Emails

### Routings

#### Addresses

Types:

- <code><a href="./src/resources/accounts/emails/routings/addresses.ts">AddressRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/emails/routings/addresses.ts">AddressDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/emails/routings/addresses.ts">AddressEmailRoutingDestinationAddressesCreateADestinationAddressResponse</a></code>
- <code><a href="./src/resources/accounts/emails/routings/addresses.ts">AddressEmailRoutingDestinationAddressesListDestinationAddressesResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/email/routing/addresses/{destination_address_identifier}">client.accounts.emails.routings.addresses.<a href="./src/resources/accounts/emails/routings/addresses.ts">retrieve</a>(accountIdentifier, destinationAddressIdentifier) -> AddressRetrieveResponse</code>
- <code title="delete /accounts/{account_identifier}/email/routing/addresses/{destination_address_identifier}">client.accounts.emails.routings.addresses.<a href="./src/resources/accounts/emails/routings/addresses.ts">delete</a>(accountIdentifier, destinationAddressIdentifier) -> AddressDeleteResponse</code>
- <code title="post /accounts/{account_identifier}/email/routing/addresses">client.accounts.emails.routings.addresses.<a href="./src/resources/accounts/emails/routings/addresses.ts">emailRoutingDestinationAddressesCreateADestinationAddress</a>(accountIdentifier, { ...params }) -> AddressEmailRoutingDestinationAddressesCreateADestinationAddressResponse</code>
- <code title="get /accounts/{account_identifier}/email/routing/addresses">client.accounts.emails.routings.addresses.<a href="./src/resources/accounts/emails/routings/addresses.ts">emailRoutingDestinationAddressesListDestinationAddresses</a>(accountIdentifier, { ...params }) -> AddressEmailRoutingDestinationAddressesListDestinationAddressesResponsesPage</code>

## Firewalls

### AccessRules

#### Rules

Types:

- <code><a href="./src/resources/accounts/firewalls/access-rules/rules.ts">RuleRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/firewalls/access-rules/rules.ts">RuleUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/firewalls/access-rules/rules.ts">RuleDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/firewalls/access-rules/rules.ts">RuleIPAccessRulesForAnAccountCreateAnIPAccessRuleResponse</a></code>
- <code><a href="./src/resources/accounts/firewalls/access-rules/rules.ts">RuleIPAccessRulesForAnAccountListIPAccessRulesResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/firewall/access_rules/rules/{identifier}">client.accounts.firewalls.accessRules.rules.<a href="./src/resources/accounts/firewalls/access-rules/rules.ts">retrieve</a>(accountIdentifier, identifier) -> RuleRetrieveResponse</code>
- <code title="patch /accounts/{account_identifier}/firewall/access_rules/rules/{identifier}">client.accounts.firewalls.accessRules.rules.<a href="./src/resources/accounts/firewalls/access-rules/rules.ts">update</a>(accountIdentifier, identifier, { ...params }) -> RuleUpdateResponse</code>
- <code title="delete /accounts/{account_identifier}/firewall/access_rules/rules/{identifier}">client.accounts.firewalls.accessRules.rules.<a href="./src/resources/accounts/firewalls/access-rules/rules.ts">delete</a>(accountIdentifier, identifier) -> RuleDeleteResponse</code>
- <code title="post /accounts/{account_identifier}/firewall/access_rules/rules">client.accounts.firewalls.accessRules.rules.<a href="./src/resources/accounts/firewalls/access-rules/rules.ts">ipAccessRulesForAnAccountCreateAnIPAccessRule</a>(accountIdentifier, { ...params }) -> RuleIPAccessRulesForAnAccountCreateAnIPAccessRuleResponse</code>
- <code title="get /accounts/{account_identifier}/firewall/access_rules/rules">client.accounts.firewalls.accessRules.rules.<a href="./src/resources/accounts/firewalls/access-rules/rules.ts">ipAccessRulesForAnAccountListIPAccessRules</a>(accountIdentifier, { ...params }) -> RuleIPAccessRulesForAnAccountListIPAccessRulesResponsesPage</code>

## Images

### V1s

Types:

- <code><a href="./src/resources/accounts/images/v1s/v1s.ts">V1RetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/images/v1s/v1s.ts">V1UpdateResponse</a></code>
- <code><a href="./src/resources/accounts/images/v1s/v1s.ts">V1DeleteResponse</a></code>
- <code><a href="./src/resources/accounts/images/v1s/v1s.ts">V1CloudflareImagesListImagesResponse</a></code>
- <code><a href="./src/resources/accounts/images/v1s/v1s.ts">V1CloudflareImagesUploadAnImageViaURLResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/images/v1/{identifier}">client.accounts.images.v1s.<a href="./src/resources/accounts/images/v1s/v1s.ts">retrieve</a>(accountIdentifier, identifier) -> V1RetrieveResponse</code>
- <code title="patch /accounts/{account_identifier}/images/v1/{identifier}">client.accounts.images.v1s.<a href="./src/resources/accounts/images/v1s/v1s.ts">update</a>(accountIdentifier, identifier, { ...params }) -> V1UpdateResponse</code>
- <code title="delete /accounts/{account_identifier}/images/v1/{identifier}">client.accounts.images.v1s.<a href="./src/resources/accounts/images/v1s/v1s.ts">delete</a>(accountIdentifier, identifier) -> V1DeleteResponse</code>
- <code title="get /accounts/{account_identifier}/images/v1">client.accounts.images.v1s.<a href="./src/resources/accounts/images/v1s/v1s.ts">cloudflareImagesListImages</a>(accountIdentifier, { ...params }) -> V1CloudflareImagesListImagesResponse</code>
- <code title="post /accounts/{account_identifier}/images/v1">client.accounts.images.v1s.<a href="./src/resources/accounts/images/v1s/v1s.ts">cloudflareImagesUploadAnImageViaURL</a>(accountIdentifier, { ...params }) -> V1CloudflareImagesUploadAnImageViaURLResponse</code>

#### Keys

Types:

- <code><a href="./src/resources/accounts/images/v1s/keys.ts">KeyCloudflareImagesKeysListSigningKeysResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/images/v1/keys">client.accounts.images.v1s.keys.<a href="./src/resources/accounts/images/v1s/keys.ts">cloudflareImagesKeysListSigningKeys</a>(accountIdentifier) -> KeyCloudflareImagesKeysListSigningKeysResponse</code>

#### Stats

Types:

- <code><a href="./src/resources/accounts/images/v1s/stats.ts">StatCloudflareImagesImagesUsageStatisticsResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/images/v1/stats">client.accounts.images.v1s.stats.<a href="./src/resources/accounts/images/v1s/stats.ts">cloudflareImagesImagesUsageStatistics</a>(accountIdentifier) -> StatCloudflareImagesImagesUsageStatisticsResponse</code>

#### Variants

Types:

- <code><a href="./src/resources/accounts/images/v1s/variants.ts">VariantRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/images/v1s/variants.ts">VariantUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/images/v1s/variants.ts">VariantDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/images/v1s/variants.ts">VariantCloudflareImagesVariantsCreateAVariantResponse</a></code>
- <code><a href="./src/resources/accounts/images/v1s/variants.ts">VariantCloudflareImagesVariantsListVariantsResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/images/v1/variants/{identifier}">client.accounts.images.v1s.variants.<a href="./src/resources/accounts/images/v1s/variants.ts">retrieve</a>(accountIdentifier, identifier) -> VariantRetrieveResponse</code>
- <code title="patch /accounts/{account_identifier}/images/v1/variants/{identifier}">client.accounts.images.v1s.variants.<a href="./src/resources/accounts/images/v1s/variants.ts">update</a>(accountIdentifier, identifier, { ...params }) -> VariantUpdateResponse</code>
- <code title="delete /accounts/{account_identifier}/images/v1/variants/{identifier}">client.accounts.images.v1s.variants.<a href="./src/resources/accounts/images/v1s/variants.ts">delete</a>(accountIdentifier, identifier) -> VariantDeleteResponse</code>
- <code title="post /accounts/{account_identifier}/images/v1/variants">client.accounts.images.v1s.variants.<a href="./src/resources/accounts/images/v1s/variants.ts">cloudflareImagesVariantsCreateAVariant</a>(accountIdentifier, { ...params }) -> VariantCloudflareImagesVariantsCreateAVariantResponse</code>
- <code title="get /accounts/{account_identifier}/images/v1/variants">client.accounts.images.v1s.variants.<a href="./src/resources/accounts/images/v1s/variants.ts">cloudflareImagesVariantsListVariants</a>(accountIdentifier) -> VariantCloudflareImagesVariantsListVariantsResponse</code>

#### Blobs

Methods:

- <code title="get /accounts/{account_identifier}/images/v1/{identifier}/blob">client.accounts.images.v1s.blobs.<a href="./src/resources/accounts/images/v1s/blobs.ts">cloudflareImagesBaseImage</a>(accountIdentifier, identifier) -> Response</code>

### V2s

#### DirectUploads

Types:

- <code><a href="./src/resources/accounts/images/v2s/direct-uploads.ts">DirectUploadCloudflareImagesCreateAuthenticatedDirectUploadURLV2Response</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/images/v2/direct_upload">client.accounts.images.v2s.directUploads.<a href="./src/resources/accounts/images/v2s/direct-uploads.ts">cloudflareImagesCreateAuthenticatedDirectUploadURLV2</a>(accountIdentifier, { ...params }) -> DirectUploadCloudflareImagesCreateAuthenticatedDirectUploadURLV2Response</code>

## Intel

### ASNs

Types:

- <code><a href="./src/resources/accounts/intel/asns/asns.ts">ASNRetrieveResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/intel/asn/{asn}">client.accounts.intel.asns.<a href="./src/resources/accounts/intel/asns/asns.ts">retrieve</a>(accountIdentifier, asn) -> ASNRetrieveResponse</code>

#### Subnets

Types:

- <code><a href="./src/resources/accounts/intel/asns/subnets.ts">SubnetListResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/intel/asn/{asn}/subnets">client.accounts.intel.asns.subnets.<a href="./src/resources/accounts/intel/asns/subnets.ts">list</a>(accountIdentifier, asn) -> SubnetListResponse</code>

### DNS

Types:

- <code><a href="./src/resources/accounts/intel/dns.ts">DNSPassiveDNSByIPGetPassiveDNSByIPResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/intel/dns">client.accounts.intel.dns.<a href="./src/resources/accounts/intel/dns.ts">passiveDNSByIPGetPassiveDNSByIP</a>(accountIdentifier, { ...params }) -> DNSPassiveDNSByIPGetPassiveDNSByIPResponse</code>

### Domains

Types:

- <code><a href="./src/resources/accounts/intel/domains/domains.ts">DomainDomainIntelligenceGetDomainDetailsResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/intel/domain">client.accounts.intel.domains.<a href="./src/resources/accounts/intel/domains/domains.ts">domainIntelligenceGetDomainDetails</a>(accountIdentifier, { ...params }) -> DomainDomainIntelligenceGetDomainDetailsResponse</code>

#### Bulks

Types:

- <code><a href="./src/resources/accounts/intel/domains/bulks.ts">BulkDomainIntelligenceGetMultipleDomainDetailsResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/intel/domain/bulk">client.accounts.intel.domains.bulks.<a href="./src/resources/accounts/intel/domains/bulks.ts">domainIntelligenceGetMultipleDomainDetails</a>(accountIdentifier, { ...params }) -> BulkDomainIntelligenceGetMultipleDomainDetailsResponse</code>

### DomainHistories

Types:

- <code><a href="./src/resources/accounts/intel/domain-histories.ts">DomainHistoryListResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/intel/domain-history">client.accounts.intel.domainHistories.<a href="./src/resources/accounts/intel/domain-histories.ts">list</a>(accountIdentifier, { ...params }) -> DomainHistoryListResponse</code>

### IndicatorFeeds

#### Permissions

Types:

- <code><a href="./src/resources/accounts/intel/indicator-feeds/permissions.ts">PermissionRemoveResponse</a></code>
- <code><a href="./src/resources/accounts/intel/indicator-feeds/permissions.ts">PermissionViewResponse</a></code>

Methods:

- <code title="put /accounts/{account_identifier}/intel/indicator-feeds/permissions/remove">client.accounts.intel.indicatorFeeds.permissions.<a href="./src/resources/accounts/intel/indicator-feeds/permissions.ts">remove</a>(accountIdentifier, { ...params }) -> PermissionRemoveResponse</code>
- <code title="get /accounts/{account_identifier}/intel/indicator-feeds/permissions/view">client.accounts.intel.indicatorFeeds.permissions.<a href="./src/resources/accounts/intel/indicator-feeds/permissions.ts">view</a>(accountIdentifier) -> PermissionViewResponse</code>

### IPs

Types:

- <code><a href="./src/resources/accounts/intel/ips.ts">IPIPIntelligenceGetIPOverviewResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/intel/ip">client.accounts.intel.ips.<a href="./src/resources/accounts/intel/ips.ts">ipIntelligenceGetIPOverview</a>(accountIdentifier, { ...params }) -> IPIPIntelligenceGetIPOverviewResponse</code>

### Miscategorizations

Types:

- <code><a href="./src/resources/accounts/intel/miscategorizations.ts">MiscategorizationMiscategorizationCreateMiscategorizationResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/intel/miscategorization">client.accounts.intel.miscategorizations.<a href="./src/resources/accounts/intel/miscategorizations.ts">miscategorizationCreateMiscategorization</a>(accountIdentifier, { ...params }) -> MiscategorizationMiscategorizationCreateMiscategorizationResponse</code>

### Sinkholes

Types:

- <code><a href="./src/resources/accounts/intel/sinkholes.ts">SinkholeListResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/intel/sinkholes">client.accounts.intel.sinkholes.<a href="./src/resources/accounts/intel/sinkholes.ts">list</a>(accountIdentifier) -> SinkholeListResponse</code>

### Whois

Types:

- <code><a href="./src/resources/accounts/intel/whois.ts">WhoisWhoisRecordGetWhoisRecordResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/intel/whois">client.accounts.intel.whois.<a href="./src/resources/accounts/intel/whois.ts">whoisRecordGetWhoisRecord</a>(accountIdentifier, { ...params }) -> WhoisWhoisRecordGetWhoisRecordResponse</code>

## LoadBalancers

### Monitors

Types:

- <code><a href="./src/resources/accounts/load-balancers/monitors/monitors.ts">Monitor</a></code>
- <code><a href="./src/resources/accounts/load-balancers/monitors/monitors.ts">MonitorDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/load-balancers/monitors/monitors.ts">MonitorAccountLoadBalancerMonitorsListMonitorsResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/load_balancers/monitors/{identifier}">client.accounts.loadBalancers.monitors.<a href="./src/resources/accounts/load-balancers/monitors/monitors.ts">retrieve</a>(accountIdentifier, identifier) -> Monitor</code>
- <code title="put /accounts/{account_identifier}/load_balancers/monitors/{identifier}">client.accounts.loadBalancers.monitors.<a href="./src/resources/accounts/load-balancers/monitors/monitors.ts">update</a>(accountIdentifier, identifier, { ...params }) -> Monitor</code>
- <code title="delete /accounts/{account_identifier}/load_balancers/monitors/{identifier}">client.accounts.loadBalancers.monitors.<a href="./src/resources/accounts/load-balancers/monitors/monitors.ts">delete</a>(accountIdentifier, identifier) -> MonitorDeleteResponse</code>
- <code title="post /accounts/{account_identifier}/load_balancers/monitors">client.accounts.loadBalancers.monitors.<a href="./src/resources/accounts/load-balancers/monitors/monitors.ts">accountLoadBalancerMonitorsCreateMonitor</a>(accountIdentifier, { ...params }) -> Monitor</code>
- <code title="get /accounts/{account_identifier}/load_balancers/monitors">client.accounts.loadBalancers.monitors.<a href="./src/resources/accounts/load-balancers/monitors/monitors.ts">accountLoadBalancerMonitorsListMonitors</a>(accountIdentifier) -> MonitorAccountLoadBalancerMonitorsListMonitorsResponse</code>
- <code title="patch /accounts/{account_identifier}/load_balancers/monitors/{identifier}">client.accounts.loadBalancers.monitors.<a href="./src/resources/accounts/load-balancers/monitors/monitors.ts">patch</a>(accountIdentifier, identifier, { ...params }) -> Monitor</code>

#### Previews

Types:

- <code><a href="./src/resources/accounts/load-balancers/monitors/previews.ts">PreviewAccountLoadBalancerMonitorsPreviewMonitorResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/load_balancers/monitors/{identifier}/preview">client.accounts.loadBalancers.monitors.previews.<a href="./src/resources/accounts/load-balancers/monitors/previews.ts">accountLoadBalancerMonitorsPreviewMonitor</a>(accountIdentifier, identifier, { ...params }) -> PreviewAccountLoadBalancerMonitorsPreviewMonitorResponse</code>

#### References

Types:

- <code><a href="./src/resources/accounts/load-balancers/monitors/references.ts">ReferenceAccountLoadBalancerMonitorsListMonitorReferencesResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/load_balancers/monitors/{identifier}/references">client.accounts.loadBalancers.monitors.references.<a href="./src/resources/accounts/load-balancers/monitors/references.ts">accountLoadBalancerMonitorsListMonitorReferences</a>(accountIdentifier, identifier) -> ReferenceAccountLoadBalancerMonitorsListMonitorReferencesResponse</code>

### Pools

Types:

- <code><a href="./src/resources/accounts/load-balancers/pools/pools.ts">Pool</a></code>
- <code><a href="./src/resources/accounts/load-balancers/pools/pools.ts">PoolDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/load-balancers/pools/pools.ts">PoolAccountLoadBalancerPoolsListPoolsResponse</a></code>
- <code><a href="./src/resources/accounts/load-balancers/pools/pools.ts">PoolAccountLoadBalancerPoolsPatchPoolsResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/load_balancers/pools/{identifier}">client.accounts.loadBalancers.pools.<a href="./src/resources/accounts/load-balancers/pools/pools.ts">retrieve</a>(accountIdentifier, identifier) -> Pool</code>
- <code title="put /accounts/{account_identifier}/load_balancers/pools/{identifier}">client.accounts.loadBalancers.pools.<a href="./src/resources/accounts/load-balancers/pools/pools.ts">update</a>(accountIdentifier, identifier, { ...params }) -> Pool</code>
- <code title="delete /accounts/{account_identifier}/load_balancers/pools/{identifier}">client.accounts.loadBalancers.pools.<a href="./src/resources/accounts/load-balancers/pools/pools.ts">delete</a>(accountIdentifier, identifier) -> PoolDeleteResponse</code>
- <code title="post /accounts/{account_identifier}/load_balancers/pools">client.accounts.loadBalancers.pools.<a href="./src/resources/accounts/load-balancers/pools/pools.ts">accountLoadBalancerPoolsCreatePool</a>(accountIdentifier, { ...params }) -> Pool</code>
- <code title="get /accounts/{account_identifier}/load_balancers/pools">client.accounts.loadBalancers.pools.<a href="./src/resources/accounts/load-balancers/pools/pools.ts">accountLoadBalancerPoolsListPools</a>(accountIdentifier, { ...params }) -> PoolAccountLoadBalancerPoolsListPoolsResponse</code>
- <code title="patch /accounts/{account_identifier}/load_balancers/pools">client.accounts.loadBalancers.pools.<a href="./src/resources/accounts/load-balancers/pools/pools.ts">accountLoadBalancerPoolsPatchPools</a>(accountIdentifier, { ...params }) -> PoolAccountLoadBalancerPoolsPatchPoolsResponse</code>
- <code title="patch /accounts/{account_identifier}/load_balancers/pools/{identifier}">client.accounts.loadBalancers.pools.<a href="./src/resources/accounts/load-balancers/pools/pools.ts">patch</a>(accountIdentifier, identifier, { ...params }) -> Pool</code>

#### Health

Types:

- <code><a href="./src/resources/accounts/load-balancers/pools/health.ts">HealthAccountLoadBalancerPoolsPoolHealthDetailsResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/load_balancers/pools/{identifier}/health">client.accounts.loadBalancers.pools.health.<a href="./src/resources/accounts/load-balancers/pools/health.ts">accountLoadBalancerPoolsPoolHealthDetails</a>(accountIdentifier, identifier) -> HealthAccountLoadBalancerPoolsPoolHealthDetailsResponse</code>

#### Previews

Types:

- <code><a href="./src/resources/accounts/load-balancers/pools/previews.ts">PreviewAccountLoadBalancerPoolsPreviewPoolResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/load_balancers/pools/{identifier}/preview">client.accounts.loadBalancers.pools.previews.<a href="./src/resources/accounts/load-balancers/pools/previews.ts">accountLoadBalancerPoolsPreviewPool</a>(accountIdentifier, identifier, { ...params }) -> PreviewAccountLoadBalancerPoolsPreviewPoolResponse</code>

#### References

Types:

- <code><a href="./src/resources/accounts/load-balancers/pools/references.ts">ReferenceAccountLoadBalancerPoolsListPoolReferencesResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/load_balancers/pools/{identifier}/references">client.accounts.loadBalancers.pools.references.<a href="./src/resources/accounts/load-balancers/pools/references.ts">accountLoadBalancerPoolsListPoolReferences</a>(accountIdentifier, identifier) -> ReferenceAccountLoadBalancerPoolsListPoolReferencesResponse</code>

### Previews

Types:

- <code><a href="./src/resources/accounts/load-balancers/previews.ts">PreviewRetrieveResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/load_balancers/preview/{preview_id}">client.accounts.loadBalancers.previews.<a href="./src/resources/accounts/load-balancers/previews.ts">retrieve</a>(accountIdentifier, previewId) -> PreviewRetrieveResponse</code>

### Regions

Types:

- <code><a href="./src/resources/accounts/load-balancers/regions.ts">RegionRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/load-balancers/regions.ts">RegionLoadBalancerRegionsListRegionsResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/load_balancers/regions/{region_code}">client.accounts.loadBalancers.regions.<a href="./src/resources/accounts/load-balancers/regions.ts">retrieve</a>(accountIdentifier, regionCode) -> RegionRetrieveResponse</code>
- <code title="get /accounts/{account_identifier}/load_balancers/regions">client.accounts.loadBalancers.regions.<a href="./src/resources/accounts/load-balancers/regions.ts">loadBalancerRegionsListRegions</a>(accountIdentifier, { ...params }) -> RegionLoadBalancerRegionsListRegionsResponse</code>

### Searches

Types:

- <code><a href="./src/resources/accounts/load-balancers/searches.ts">SearchListResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/load_balancers/search">client.accounts.loadBalancers.searches.<a href="./src/resources/accounts/load-balancers/searches.ts">list</a>(accountIdentifier, { ...params }) -> SearchListResponse</code>

## Logpushes

### Datasets

#### Fields

Types:

- <code><a href="./src/resources/accounts/logpushes/datasets/fields.ts">FieldGetAccountsAccountIdentifierLogpushDatasetsDatasetFieldsResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/logpush/datasets/{dataset}/fields">client.accounts.logpushes.datasets.fields.<a href="./src/resources/accounts/logpushes/datasets/fields.ts">getAccountsAccountIdentifierLogpushDatasetsDatasetFields</a>(accountIdentifier, dataset) -> FieldGetAccountsAccountIdentifierLogpushDatasetsDatasetFieldsResponse</code>

#### Jobs

Types:

- <code><a href="./src/resources/accounts/logpushes/datasets/jobs.ts">JobGetAccountsAccountIdentifierLogpushDatasetsDatasetJobsResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/logpush/datasets/{dataset}/jobs">client.accounts.logpushes.datasets.jobs.<a href="./src/resources/accounts/logpushes/datasets/jobs.ts">getAccountsAccountIdentifierLogpushDatasetsDatasetJobs</a>(accountIdentifier, dataset) -> JobGetAccountsAccountIdentifierLogpushDatasetsDatasetJobsResponse</code>

### Jobs

Types:

- <code><a href="./src/resources/accounts/logpushes/jobs.ts">JobRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/logpushes/jobs.ts">JobUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/logpushes/jobs.ts">JobDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/logpushes/jobs.ts">JobGetAccountsAccountIdentifierLogpushJobsResponse</a></code>
- <code><a href="./src/resources/accounts/logpushes/jobs.ts">JobPostAccountsAccountIdentifierLogpushJobsResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/logpush/jobs/{job_identifier}">client.accounts.logpushes.jobs.<a href="./src/resources/accounts/logpushes/jobs.ts">retrieve</a>(accountIdentifier, jobIdentifier) -> JobRetrieveResponse</code>
- <code title="put /accounts/{account_identifier}/logpush/jobs/{job_identifier}">client.accounts.logpushes.jobs.<a href="./src/resources/accounts/logpushes/jobs.ts">update</a>(accountIdentifier, jobIdentifier, { ...params }) -> JobUpdateResponse</code>
- <code title="delete /accounts/{account_identifier}/logpush/jobs/{job_identifier}">client.accounts.logpushes.jobs.<a href="./src/resources/accounts/logpushes/jobs.ts">delete</a>(accountIdentifier, jobIdentifier) -> JobDeleteResponse</code>
- <code title="get /accounts/{account_identifier}/logpush/jobs">client.accounts.logpushes.jobs.<a href="./src/resources/accounts/logpushes/jobs.ts">getAccountsAccountIdentifierLogpushJobs</a>(accountIdentifier) -> JobGetAccountsAccountIdentifierLogpushJobsResponse</code>
- <code title="post /accounts/{account_identifier}/logpush/jobs">client.accounts.logpushes.jobs.<a href="./src/resources/accounts/logpushes/jobs.ts">postAccountsAccountIdentifierLogpushJobs</a>(accountIdentifier, { ...params }) -> JobPostAccountsAccountIdentifierLogpushJobsResponse</code>

### Ownerships

Types:

- <code><a href="./src/resources/accounts/logpushes/ownerships/ownerships.ts">OwnershipPostAccountsAccountIdentifierLogpushOwnershipResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/logpush/ownership">client.accounts.logpushes.ownerships.<a href="./src/resources/accounts/logpushes/ownerships/ownerships.ts">postAccountsAccountIdentifierLogpushOwnership</a>(accountIdentifier, { ...params }) -> OwnershipPostAccountsAccountIdentifierLogpushOwnershipResponse</code>

#### Validates

Types:

- <code><a href="./src/resources/accounts/logpushes/ownerships/validates.ts">ValidatePostAccountsAccountIdentifierLogpushOwnershipValidateResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/logpush/ownership/validate">client.accounts.logpushes.ownerships.validates.<a href="./src/resources/accounts/logpushes/ownerships/validates.ts">postAccountsAccountIdentifierLogpushOwnershipValidate</a>(accountIdentifier, { ...params }) -> ValidatePostAccountsAccountIdentifierLogpushOwnershipValidateResponse</code>

### Validates

#### Destinations

##### Exists

Types:

- <code><a href="./src/resources/accounts/logpushes/validates/destinations/exists.ts">ExistDeleteAccountsAccountIdentifierLogpushValidateDestinationExistsResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/logpush/validate/destination/exists">client.accounts.logpushes.validates.destinations.exists.<a href="./src/resources/accounts/logpushes/validates/destinations/exists.ts">deleteAccountsAccountIdentifierLogpushValidateDestinationExists</a>(accountIdentifier, { ...params }) -> ExistDeleteAccountsAccountIdentifierLogpushValidateDestinationExistsResponse</code>

#### Origins

Types:

- <code><a href="./src/resources/accounts/logpushes/validates/origins.ts">OriginPostAccountsAccountIdentifierLogpushValidateOriginResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/logpush/validate/origin">client.accounts.logpushes.validates.origins.<a href="./src/resources/accounts/logpushes/validates/origins.ts">postAccountsAccountIdentifierLogpushValidateOrigin</a>(accountIdentifier, { ...params }) -> OriginPostAccountsAccountIdentifierLogpushValidateOriginResponse</code>

## Logs

### Controls

#### Cmb

##### Configs

Types:

- <code><a href="./src/resources/accounts/logs/controls/cmb/configs.ts">ConfigDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/logs/controls/cmb/configs.ts">ConfigGetAccountsAccountIdentifierLogsControlCmbConfigResponse</a></code>
- <code><a href="./src/resources/accounts/logs/controls/cmb/configs.ts">ConfigPutAccountsAccountIdentifierLogsControlCmbConfigResponse</a></code>

Methods:

- <code title="delete /accounts/{account_identifier}/logs/control/cmb/config">client.accounts.logs.controls.cmb.configs.<a href="./src/resources/accounts/logs/controls/cmb/configs.ts">delete</a>(accountIdentifier) -> ConfigDeleteResponse</code>
- <code title="get /accounts/{account_identifier}/logs/control/cmb/config">client.accounts.logs.controls.cmb.configs.<a href="./src/resources/accounts/logs/controls/cmb/configs.ts">getAccountsAccountIdentifierLogsControlCmbConfig</a>(accountIdentifier) -> ConfigGetAccountsAccountIdentifierLogsControlCmbConfigResponse</code>
- <code title="post /accounts/{account_identifier}/logs/control/cmb/config">client.accounts.logs.controls.cmb.configs.<a href="./src/resources/accounts/logs/controls/cmb/configs.ts">putAccountsAccountIdentifierLogsControlCmbConfig</a>(accountIdentifier, { ...params }) -> ConfigPutAccountsAccountIdentifierLogsControlCmbConfigResponse</code>

## Magic

### CfInterconnects

Types:

- <code><a href="./src/resources/accounts/magic/cf-interconnects.ts">CfInterconnectRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/magic/cf-interconnects.ts">CfInterconnectUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/magic/cf-interconnects.ts">CfInterconnectMagicInterconnectsListInterconnectsResponse</a></code>
- <code><a href="./src/resources/accounts/magic/cf-interconnects.ts">CfInterconnectMagicInterconnectsUpdateMultipleInterconnectsResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/magic/cf_interconnects/{tunnel_identifier}">client.accounts.magic.cfInterconnects.<a href="./src/resources/accounts/magic/cf-interconnects.ts">retrieve</a>(accountIdentifier, tunnelIdentifier) -> CfInterconnectRetrieveResponse</code>
- <code title="put /accounts/{account_identifier}/magic/cf_interconnects/{tunnel_identifier}">client.accounts.magic.cfInterconnects.<a href="./src/resources/accounts/magic/cf-interconnects.ts">update</a>(accountIdentifier, tunnelIdentifier, { ...params }) -> CfInterconnectUpdateResponse</code>
- <code title="get /accounts/{account_identifier}/magic/cf_interconnects">client.accounts.magic.cfInterconnects.<a href="./src/resources/accounts/magic/cf-interconnects.ts">magicInterconnectsListInterconnects</a>(accountIdentifier) -> CfInterconnectMagicInterconnectsListInterconnectsResponse</code>
- <code title="put /accounts/{account_identifier}/magic/cf_interconnects">client.accounts.magic.cfInterconnects.<a href="./src/resources/accounts/magic/cf-interconnects.ts">magicInterconnectsUpdateMultipleInterconnects</a>(accountIdentifier, { ...params }) -> CfInterconnectMagicInterconnectsUpdateMultipleInterconnectsResponse</code>

### GreTunnels

Types:

- <code><a href="./src/resources/accounts/magic/gre-tunnels.ts">GreTunnelRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/magic/gre-tunnels.ts">GreTunnelUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/magic/gre-tunnels.ts">GreTunnelDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/magic/gre-tunnels.ts">GreTunnelMagicGreTunnelsCreateGreTunnelsResponse</a></code>
- <code><a href="./src/resources/accounts/magic/gre-tunnels.ts">GreTunnelMagicGreTunnelsListGreTunnelsResponse</a></code>
- <code><a href="./src/resources/accounts/magic/gre-tunnels.ts">GreTunnelMagicGreTunnelsUpdateMultipleGreTunnelsResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/magic/gre_tunnels/{tunnel_identifier}">client.accounts.magic.greTunnels.<a href="./src/resources/accounts/magic/gre-tunnels.ts">retrieve</a>(accountIdentifier, tunnelIdentifier) -> GreTunnelRetrieveResponse</code>
- <code title="put /accounts/{account_identifier}/magic/gre_tunnels/{tunnel_identifier}">client.accounts.magic.greTunnels.<a href="./src/resources/accounts/magic/gre-tunnels.ts">update</a>(accountIdentifier, tunnelIdentifier, { ...params }) -> GreTunnelUpdateResponse</code>
- <code title="delete /accounts/{account_identifier}/magic/gre_tunnels/{tunnel_identifier}">client.accounts.magic.greTunnels.<a href="./src/resources/accounts/magic/gre-tunnels.ts">delete</a>(accountIdentifier, tunnelIdentifier) -> GreTunnelDeleteResponse</code>
- <code title="post /accounts/{account_identifier}/magic/gre_tunnels">client.accounts.magic.greTunnels.<a href="./src/resources/accounts/magic/gre-tunnels.ts">magicGreTunnelsCreateGreTunnels</a>(accountIdentifier, { ...params }) -> GreTunnelMagicGreTunnelsCreateGreTunnelsResponse</code>
- <code title="get /accounts/{account_identifier}/magic/gre_tunnels">client.accounts.magic.greTunnels.<a href="./src/resources/accounts/magic/gre-tunnels.ts">magicGreTunnelsListGreTunnels</a>(accountIdentifier) -> GreTunnelMagicGreTunnelsListGreTunnelsResponse</code>
- <code title="put /accounts/{account_identifier}/magic/gre_tunnels">client.accounts.magic.greTunnels.<a href="./src/resources/accounts/magic/gre-tunnels.ts">magicGreTunnelsUpdateMultipleGreTunnels</a>(accountIdentifier, { ...params }) -> GreTunnelMagicGreTunnelsUpdateMultipleGreTunnelsResponse</code>

### IpsecTunnels

Types:

- <code><a href="./src/resources/accounts/magic/ipsec-tunnels/ipsec-tunnels.ts">IpsecTunnelRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/magic/ipsec-tunnels/ipsec-tunnels.ts">IpsecTunnelUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/magic/ipsec-tunnels/ipsec-tunnels.ts">IpsecTunnelDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/magic/ipsec-tunnels/ipsec-tunnels.ts">IpsecTunnelMagicIPsecTunnelsCreateIPsecTunnelsResponse</a></code>
- <code><a href="./src/resources/accounts/magic/ipsec-tunnels/ipsec-tunnels.ts">IpsecTunnelMagicIPsecTunnelsListIPsecTunnelsResponse</a></code>
- <code><a href="./src/resources/accounts/magic/ipsec-tunnels/ipsec-tunnels.ts">IpsecTunnelMagicIPsecTunnelsUpdateMultipleIPsecTunnelsResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/magic/ipsec_tunnels/{tunnel_identifier}">client.accounts.magic.ipsecTunnels.<a href="./src/resources/accounts/magic/ipsec-tunnels/ipsec-tunnels.ts">retrieve</a>(accountIdentifier, tunnelIdentifier) -> IpsecTunnelRetrieveResponse</code>
- <code title="put /accounts/{account_identifier}/magic/ipsec_tunnels/{tunnel_identifier}">client.accounts.magic.ipsecTunnels.<a href="./src/resources/accounts/magic/ipsec-tunnels/ipsec-tunnels.ts">update</a>(accountIdentifier, tunnelIdentifier, { ...params }) -> IpsecTunnelUpdateResponse</code>
- <code title="delete /accounts/{account_identifier}/magic/ipsec_tunnels/{tunnel_identifier}">client.accounts.magic.ipsecTunnels.<a href="./src/resources/accounts/magic/ipsec-tunnels/ipsec-tunnels.ts">delete</a>(accountIdentifier, tunnelIdentifier) -> IpsecTunnelDeleteResponse</code>
- <code title="post /accounts/{account_identifier}/magic/ipsec_tunnels">client.accounts.magic.ipsecTunnels.<a href="./src/resources/accounts/magic/ipsec-tunnels/ipsec-tunnels.ts">magicIPsecTunnelsCreateIPsecTunnels</a>(accountIdentifier, { ...params }) -> IpsecTunnelMagicIPsecTunnelsCreateIPsecTunnelsResponse</code>
- <code title="get /accounts/{account_identifier}/magic/ipsec_tunnels">client.accounts.magic.ipsecTunnels.<a href="./src/resources/accounts/magic/ipsec-tunnels/ipsec-tunnels.ts">magicIPsecTunnelsListIPsecTunnels</a>(accountIdentifier) -> IpsecTunnelMagicIPsecTunnelsListIPsecTunnelsResponse</code>
- <code title="put /accounts/{account_identifier}/magic/ipsec_tunnels">client.accounts.magic.ipsecTunnels.<a href="./src/resources/accounts/magic/ipsec-tunnels/ipsec-tunnels.ts">magicIPsecTunnelsUpdateMultipleIPsecTunnels</a>(accountIdentifier, { ...params }) -> IpsecTunnelMagicIPsecTunnelsUpdateMultipleIPsecTunnelsResponse</code>

#### PskGenerates

Types:

- <code><a href="./src/resources/accounts/magic/ipsec-tunnels/psk-generates.ts">PskGenerateMagicIPsecTunnelsGeneratePreSharedKeyPskForIPsecTunnelsResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/magic/ipsec_tunnels/{tunnel_identifier}/psk_generate">client.accounts.magic.ipsecTunnels.pskGenerates.<a href="./src/resources/accounts/magic/ipsec-tunnels/psk-generates.ts">magicIPsecTunnelsGeneratePreSharedKeyPskForIPsecTunnels</a>(accountIdentifier, tunnelIdentifier) -> PskGenerateMagicIPsecTunnelsGeneratePreSharedKeyPskForIPsecTunnelsResponse</code>

### Routes

Types:

- <code><a href="./src/resources/accounts/magic/routes.ts">RouteRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/magic/routes.ts">RouteUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/magic/routes.ts">RouteDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/magic/routes.ts">RouteDeleteManyResponse</a></code>
- <code><a href="./src/resources/accounts/magic/routes.ts">RouteMagicStaticRoutesCreateRoutesResponse</a></code>
- <code><a href="./src/resources/accounts/magic/routes.ts">RouteMagicStaticRoutesListRoutesResponse</a></code>
- <code><a href="./src/resources/accounts/magic/routes.ts">RouteMagicStaticRoutesUpdateManyRoutesResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/magic/routes/{route_identifier}">client.accounts.magic.routes.<a href="./src/resources/accounts/magic/routes.ts">retrieve</a>(accountIdentifier, routeIdentifier) -> RouteRetrieveResponse</code>
- <code title="put /accounts/{account_identifier}/magic/routes/{route_identifier}">client.accounts.magic.routes.<a href="./src/resources/accounts/magic/routes.ts">update</a>(accountIdentifier, routeIdentifier, { ...params }) -> RouteUpdateResponse</code>
- <code title="delete /accounts/{account_identifier}/magic/routes">client.accounts.magic.routes.<a href="./src/resources/accounts/magic/routes.ts">delete</a>(accountIdentifier, { ...params }) -> RouteDeleteResponse</code>
- <code title="delete /accounts/{account_identifier}/magic/routes/{route_identifier}">client.accounts.magic.routes.<a href="./src/resources/accounts/magic/routes.ts">deleteMany</a>(accountIdentifier, routeIdentifier) -> RouteDeleteManyResponse</code>
- <code title="post /accounts/{account_identifier}/magic/routes">client.accounts.magic.routes.<a href="./src/resources/accounts/magic/routes.ts">magicStaticRoutesCreateRoutes</a>(accountIdentifier, { ...params }) -> RouteMagicStaticRoutesCreateRoutesResponse</code>
- <code title="get /accounts/{account_identifier}/magic/routes">client.accounts.magic.routes.<a href="./src/resources/accounts/magic/routes.ts">magicStaticRoutesListRoutes</a>(accountIdentifier) -> RouteMagicStaticRoutesListRoutesResponse</code>
- <code title="put /accounts/{account_identifier}/magic/routes">client.accounts.magic.routes.<a href="./src/resources/accounts/magic/routes.ts">magicStaticRoutesUpdateManyRoutes</a>(accountIdentifier, { ...params }) -> RouteMagicStaticRoutesUpdateManyRoutesResponse</code>

## Members

Types:

- <code><a href="./src/resources/accounts/members.ts">MemberRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/members.ts">MemberUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/members.ts">MemberDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/members.ts">MemberAccountMembersAddMemberResponse</a></code>
- <code><a href="./src/resources/accounts/members.ts">MemberAccountMembersListMembersResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/members/{identifier}">client.accounts.members.<a href="./src/resources/accounts/members.ts">retrieve</a>(accountIdentifier, identifier) -> MemberRetrieveResponse</code>
- <code title="put /accounts/{account_identifier}/members/{identifier}">client.accounts.members.<a href="./src/resources/accounts/members.ts">update</a>(accountIdentifier, identifier, { ...params }) -> MemberUpdateResponse</code>
- <code title="delete /accounts/{account_identifier}/members/{identifier}">client.accounts.members.<a href="./src/resources/accounts/members.ts">delete</a>(accountIdentifier, identifier) -> MemberDeleteResponse</code>
- <code title="post /accounts/{account_identifier}/members">client.accounts.members.<a href="./src/resources/accounts/members.ts">accountMembersAddMember</a>(accountIdentifier, { ...params }) -> MemberAccountMembersAddMemberResponse</code>
- <code title="get /accounts/{account_identifier}/members">client.accounts.members.<a href="./src/resources/accounts/members.ts">accountMembersListMembers</a>(accountIdentifier, { ...params }) -> MemberAccountMembersListMembersResponsesPage</code>

## Mnms

### Configs

Types:

- <code><a href="./src/resources/accounts/mnms/configs/configs.ts">ConfigDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/mnms/configs/configs.ts">ConfigMagicNetworkMonitoringConfigurationCreateAccountConfigurationResponse</a></code>
- <code><a href="./src/resources/accounts/mnms/configs/configs.ts">ConfigMagicNetworkMonitoringConfigurationListAccountConfigurationResponse</a></code>
- <code><a href="./src/resources/accounts/mnms/configs/configs.ts">ConfigMagicNetworkMonitoringConfigurationUpdateAccountConfigurationFieldsResponse</a></code>
- <code><a href="./src/resources/accounts/mnms/configs/configs.ts">ConfigMagicNetworkMonitoringConfigurationUpdateAnEntireAccountConfigurationResponse</a></code>

Methods:

- <code title="delete /accounts/{account_identifier}/mnm/config">client.accounts.mnms.configs.<a href="./src/resources/accounts/mnms/configs/configs.ts">delete</a>(accountIdentifier) -> ConfigDeleteResponse</code>
- <code title="post /accounts/{account_identifier}/mnm/config">client.accounts.mnms.configs.<a href="./src/resources/accounts/mnms/configs/configs.ts">magicNetworkMonitoringConfigurationCreateAccountConfiguration</a>(accountIdentifier) -> ConfigMagicNetworkMonitoringConfigurationCreateAccountConfigurationResponse</code>
- <code title="get /accounts/{account_identifier}/mnm/config">client.accounts.mnms.configs.<a href="./src/resources/accounts/mnms/configs/configs.ts">magicNetworkMonitoringConfigurationListAccountConfiguration</a>(accountIdentifier) -> ConfigMagicNetworkMonitoringConfigurationListAccountConfigurationResponse</code>
- <code title="patch /accounts/{account_identifier}/mnm/config">client.accounts.mnms.configs.<a href="./src/resources/accounts/mnms/configs/configs.ts">magicNetworkMonitoringConfigurationUpdateAccountConfigurationFields</a>(accountIdentifier) -> ConfigMagicNetworkMonitoringConfigurationUpdateAccountConfigurationFieldsResponse</code>
- <code title="put /accounts/{account_identifier}/mnm/config">client.accounts.mnms.configs.<a href="./src/resources/accounts/mnms/configs/configs.ts">magicNetworkMonitoringConfigurationUpdateAnEntireAccountConfiguration</a>(accountIdentifier) -> ConfigMagicNetworkMonitoringConfigurationUpdateAnEntireAccountConfigurationResponse</code>

#### Fulls

Types:

- <code><a href="./src/resources/accounts/mnms/configs/fulls.ts">FullMagicNetworkMonitoringConfigurationListRulesAndAccountConfigurationResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/mnm/config/full">client.accounts.mnms.configs.fulls.<a href="./src/resources/accounts/mnms/configs/fulls.ts">magicNetworkMonitoringConfigurationListRulesAndAccountConfiguration</a>(accountIdentifier) -> FullMagicNetworkMonitoringConfigurationListRulesAndAccountConfigurationResponse</code>

### Rules

Types:

- <code><a href="./src/resources/accounts/mnms/rules/rules.ts">RuleRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/mnms/rules/rules.ts">RuleUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/mnms/rules/rules.ts">RuleDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/mnms/rules/rules.ts">RuleMagicNetworkMonitoringRulesCreateRulesResponse</a></code>
- <code><a href="./src/resources/accounts/mnms/rules/rules.ts">RuleMagicNetworkMonitoringRulesListRulesResponse</a></code>
- <code><a href="./src/resources/accounts/mnms/rules/rules.ts">RuleMagicNetworkMonitoringRulesUpdateRulesResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/mnm/rules/{rule_identifier}">client.accounts.mnms.rules.<a href="./src/resources/accounts/mnms/rules/rules.ts">retrieve</a>(accountIdentifier, ruleIdentifier) -> RuleRetrieveResponse</code>
- <code title="patch /accounts/{account_identifier}/mnm/rules/{rule_identifier}">client.accounts.mnms.rules.<a href="./src/resources/accounts/mnms/rules/rules.ts">update</a>(accountIdentifier, ruleIdentifier) -> RuleUpdateResponse</code>
- <code title="delete /accounts/{account_identifier}/mnm/rules/{rule_identifier}">client.accounts.mnms.rules.<a href="./src/resources/accounts/mnms/rules/rules.ts">delete</a>(accountIdentifier, ruleIdentifier) -> RuleDeleteResponse</code>
- <code title="post /accounts/{account_identifier}/mnm/rules">client.accounts.mnms.rules.<a href="./src/resources/accounts/mnms/rules/rules.ts">magicNetworkMonitoringRulesCreateRules</a>(accountIdentifier) -> RuleMagicNetworkMonitoringRulesCreateRulesResponse</code>
- <code title="get /accounts/{account_identifier}/mnm/rules">client.accounts.mnms.rules.<a href="./src/resources/accounts/mnms/rules/rules.ts">magicNetworkMonitoringRulesListRules</a>(accountIdentifier) -> RuleMagicNetworkMonitoringRulesListRulesResponse</code>
- <code title="put /accounts/{account_identifier}/mnm/rules">client.accounts.mnms.rules.<a href="./src/resources/accounts/mnms/rules/rules.ts">magicNetworkMonitoringRulesUpdateRules</a>(accountIdentifier) -> RuleMagicNetworkMonitoringRulesUpdateRulesResponse</code>

#### Advertisements

Types:

- <code><a href="./src/resources/accounts/mnms/rules/advertisements.ts">AdvertisementMagicNetworkMonitoringRulesUpdateAdvertisementForRuleResponse</a></code>

Methods:

- <code title="patch /accounts/{account_identifier}/mnm/rules/{rule_identifier}/advertisement">client.accounts.mnms.rules.advertisements.<a href="./src/resources/accounts/mnms/rules/advertisements.ts">magicNetworkMonitoringRulesUpdateAdvertisementForRule</a>(accountIdentifier, ruleIdentifier) -> AdvertisementMagicNetworkMonitoringRulesUpdateAdvertisementForRuleResponse</code>

## MtlsCertificates

Types:

- <code><a href="./src/resources/accounts/mtls-certificates/mtls-certificates.ts">MtlsCertificateRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/mtls-certificates/mtls-certificates.ts">MtlsCertificateDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/mtls-certificates/mtls-certificates.ts">MtlsCertificateMTlsCertificateManagementListMTlsCertificatesResponse</a></code>
- <code><a href="./src/resources/accounts/mtls-certificates/mtls-certificates.ts">MtlsCertificateMTlsCertificateManagementUploadMTlsCertificateResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/mtls_certificates/{identifier}">client.accounts.mtlsCertificates.<a href="./src/resources/accounts/mtls-certificates/mtls-certificates.ts">retrieve</a>(accountIdentifier, identifier) -> MtlsCertificateRetrieveResponse</code>
- <code title="delete /accounts/{account_identifier}/mtls_certificates/{identifier}">client.accounts.mtlsCertificates.<a href="./src/resources/accounts/mtls-certificates/mtls-certificates.ts">delete</a>(accountIdentifier, identifier) -> MtlsCertificateDeleteResponse</code>
- <code title="get /accounts/{account_identifier}/mtls_certificates">client.accounts.mtlsCertificates.<a href="./src/resources/accounts/mtls-certificates/mtls-certificates.ts">mTlsCertificateManagementListMTlsCertificates</a>(accountIdentifier) -> MtlsCertificateMTlsCertificateManagementListMTlsCertificatesResponse</code>
- <code title="post /accounts/{account_identifier}/mtls_certificates">client.accounts.mtlsCertificates.<a href="./src/resources/accounts/mtls-certificates/mtls-certificates.ts">mTlsCertificateManagementUploadMTlsCertificate</a>(accountIdentifier, { ...params }) -> MtlsCertificateMTlsCertificateManagementUploadMTlsCertificateResponse</code>

### Associations

Types:

- <code><a href="./src/resources/accounts/mtls-certificates/associations.ts">AssociationMTlsCertificateManagementListMTlsCertificateAssociationsResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/mtls_certificates/{identifier}/associations">client.accounts.mtlsCertificates.associations.<a href="./src/resources/accounts/mtls-certificates/associations.ts">mTlsCertificateManagementListMTlsCertificateAssociations</a>(accountIdentifier, identifier) -> AssociationMTlsCertificateManagementListMTlsCertificateAssociationsResponse</code>

## Pages

### Projects

Types:

- <code><a href="./src/resources/accounts/pages/projects/projects.ts">ProjectRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/pages/projects/projects.ts">ProjectUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/pages/projects/projects.ts">ProjectDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/pages/projects/projects.ts">ProjectPagesProjectCreateProjectResponse</a></code>
- <code><a href="./src/resources/accounts/pages/projects/projects.ts">ProjectPagesProjectGetProjectsResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/pages/projects/{project_name}">client.accounts.pages.projects.<a href="./src/resources/accounts/pages/projects/projects.ts">retrieve</a>(accountIdentifier, projectName) -> ProjectRetrieveResponse</code>
- <code title="patch /accounts/{account_identifier}/pages/projects/{project_name}">client.accounts.pages.projects.<a href="./src/resources/accounts/pages/projects/projects.ts">update</a>(accountIdentifier, projectName, { ...params }) -> ProjectUpdateResponse</code>
- <code title="delete /accounts/{account_identifier}/pages/projects/{project_name}">client.accounts.pages.projects.<a href="./src/resources/accounts/pages/projects/projects.ts">delete</a>(accountIdentifier, projectName) -> unknown</code>
- <code title="post /accounts/{account_identifier}/pages/projects">client.accounts.pages.projects.<a href="./src/resources/accounts/pages/projects/projects.ts">pagesProjectCreateProject</a>(accountIdentifier, { ...params }) -> ProjectPagesProjectCreateProjectResponse</code>
- <code title="get /accounts/{account_identifier}/pages/projects">client.accounts.pages.projects.<a href="./src/resources/accounts/pages/projects/projects.ts">pagesProjectGetProjects</a>(accountIdentifier) -> ProjectPagesProjectGetProjectsResponse</code>

#### Deployments

Types:

- <code><a href="./src/resources/accounts/pages/projects/deployments/deployments.ts">DeploymentRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/pages/projects/deployments/deployments.ts">DeploymentDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/pages/projects/deployments/deployments.ts">DeploymentPagesDeploymentCreateDeploymentResponse</a></code>
- <code><a href="./src/resources/accounts/pages/projects/deployments/deployments.ts">DeploymentPagesDeploymentGetDeploymentsResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/pages/projects/{project_name}/deployments/{deployment_identifier}">client.accounts.pages.projects.deployments.<a href="./src/resources/accounts/pages/projects/deployments/deployments.ts">retrieve</a>(accountIdentifier, projectName, deploymentIdentifier) -> DeploymentRetrieveResponse</code>
- <code title="delete /accounts/{account_identifier}/pages/projects/{project_name}/deployments/{deployment_identifier}">client.accounts.pages.projects.deployments.<a href="./src/resources/accounts/pages/projects/deployments/deployments.ts">delete</a>(accountIdentifier, projectName, deploymentIdentifier) -> unknown</code>
- <code title="post /accounts/{account_identifier}/pages/projects/{project_name}/deployments">client.accounts.pages.projects.deployments.<a href="./src/resources/accounts/pages/projects/deployments/deployments.ts">pagesDeploymentCreateDeployment</a>(accountIdentifier, projectName, { ...params }) -> DeploymentPagesDeploymentCreateDeploymentResponse</code>
- <code title="get /accounts/{account_identifier}/pages/projects/{project_name}/deployments">client.accounts.pages.projects.deployments.<a href="./src/resources/accounts/pages/projects/deployments/deployments.ts">pagesDeploymentGetDeployments</a>(accountIdentifier, projectName) -> DeploymentPagesDeploymentGetDeploymentsResponse</code>

##### Histories

###### Logs

Types:

- <code><a href="./src/resources/accounts/pages/projects/deployments/histories/logs.ts">LogPagesDeploymentGetDeploymentLogsResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/pages/projects/{project_name}/deployments/{deployment_identifier}/history/logs">client.accounts.pages.projects.deployments.histories.logs.<a href="./src/resources/accounts/pages/projects/deployments/histories/logs.ts">pagesDeploymentGetDeploymentLogs</a>(accountIdentifier, projectName, deploymentIdentifier) -> LogPagesDeploymentGetDeploymentLogsResponse</code>

##### Retries

Types:

- <code><a href="./src/resources/accounts/pages/projects/deployments/retries.ts">RetryPagesDeploymentRetryDeploymentResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/pages/projects/{project_name}/deployments/{deployment_identifier}/retry">client.accounts.pages.projects.deployments.retries.<a href="./src/resources/accounts/pages/projects/deployments/retries.ts">pagesDeploymentRetryDeployment</a>(accountIdentifier, projectName, deploymentIdentifier) -> RetryPagesDeploymentRetryDeploymentResponse</code>

##### Rollbacks

Types:

- <code><a href="./src/resources/accounts/pages/projects/deployments/rollbacks.ts">RollbackPagesDeploymentRollbackDeploymentResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/pages/projects/{project_name}/deployments/{deployment_identifier}/rollback">client.accounts.pages.projects.deployments.rollbacks.<a href="./src/resources/accounts/pages/projects/deployments/rollbacks.ts">pagesDeploymentRollbackDeployment</a>(accountIdentifier, projectName, deploymentIdentifier) -> RollbackPagesDeploymentRollbackDeploymentResponse</code>

#### Domains

Types:

- <code><a href="./src/resources/accounts/pages/projects/domains.ts">DomainRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/pages/projects/domains.ts">DomainUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/pages/projects/domains.ts">DomainDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/pages/projects/domains.ts">DomainPagesDomainsAddDomainResponse</a></code>
- <code><a href="./src/resources/accounts/pages/projects/domains.ts">DomainPagesDomainsGetDomainsResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/pages/projects/{project_name}/domains/{domain_name}">client.accounts.pages.projects.domains.<a href="./src/resources/accounts/pages/projects/domains.ts">retrieve</a>(accountIdentifier, projectName, domainName) -> DomainRetrieveResponse</code>
- <code title="patch /accounts/{account_identifier}/pages/projects/{project_name}/domains/{domain_name}">client.accounts.pages.projects.domains.<a href="./src/resources/accounts/pages/projects/domains.ts">update</a>(accountIdentifier, projectName, domainName) -> DomainUpdateResponse</code>
- <code title="delete /accounts/{account_identifier}/pages/projects/{project_name}/domains/{domain_name}">client.accounts.pages.projects.domains.<a href="./src/resources/accounts/pages/projects/domains.ts">delete</a>(accountIdentifier, projectName, domainName) -> unknown</code>
- <code title="post /accounts/{account_identifier}/pages/projects/{project_name}/domains">client.accounts.pages.projects.domains.<a href="./src/resources/accounts/pages/projects/domains.ts">pagesDomainsAddDomain</a>(accountIdentifier, projectName, { ...params }) -> DomainPagesDomainsAddDomainResponse</code>
- <code title="get /accounts/{account_identifier}/pages/projects/{project_name}/domains">client.accounts.pages.projects.domains.<a href="./src/resources/accounts/pages/projects/domains.ts">pagesDomainsGetDomains</a>(accountIdentifier, projectName) -> DomainPagesDomainsGetDomainsResponse</code>

## Pcaps

Types:

- <code><a href="./src/resources/accounts/pcaps/pcaps.ts">PcapRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/pcaps/pcaps.ts">PcapMagicPcapCollectionCreatePcapRequestResponse</a></code>
- <code><a href="./src/resources/accounts/pcaps/pcaps.ts">PcapMagicPcapCollectionListPacketCaptureRequestsResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/pcaps/{identifier}">client.accounts.pcaps.<a href="./src/resources/accounts/pcaps/pcaps.ts">retrieve</a>(accountIdentifier, identifier) -> PcapRetrieveResponse</code>
- <code title="post /accounts/{account_identifier}/pcaps">client.accounts.pcaps.<a href="./src/resources/accounts/pcaps/pcaps.ts">magicPcapCollectionCreatePcapRequest</a>(accountIdentifier, { ...params }) -> PcapMagicPcapCollectionCreatePcapRequestResponse</code>
- <code title="get /accounts/{account_identifier}/pcaps">client.accounts.pcaps.<a href="./src/resources/accounts/pcaps/pcaps.ts">magicPcapCollectionListPacketCaptureRequests</a>(accountIdentifier) -> PcapMagicPcapCollectionListPacketCaptureRequestsResponse</code>

### Ownerships

Types:

- <code><a href="./src/resources/accounts/pcaps/ownerships/ownerships.ts">OwnershipMagicPcapCollectionAddBucketsForFullPacketCapturesResponse</a></code>
- <code><a href="./src/resources/accounts/pcaps/ownerships/ownerships.ts">OwnershipMagicPcapCollectionListPcaPsBucketOwnershipResponse</a></code>

Methods:

- <code title="delete /accounts/{account_identifier}/pcaps/ownership/{identifier}">client.accounts.pcaps.ownerships.<a href="./src/resources/accounts/pcaps/ownerships/ownerships.ts">delete</a>(accountIdentifier, identifier) -> void</code>
- <code title="post /accounts/{account_identifier}/pcaps/ownership">client.accounts.pcaps.ownerships.<a href="./src/resources/accounts/pcaps/ownerships/ownerships.ts">magicPcapCollectionAddBucketsForFullPacketCaptures</a>(accountIdentifier, { ...params }) -> OwnershipMagicPcapCollectionAddBucketsForFullPacketCapturesResponse</code>
- <code title="get /accounts/{account_identifier}/pcaps/ownership">client.accounts.pcaps.ownerships.<a href="./src/resources/accounts/pcaps/ownerships/ownerships.ts">magicPcapCollectionListPcaPsBucketOwnership</a>(accountIdentifier) -> OwnershipMagicPcapCollectionListPcaPsBucketOwnershipResponse</code>

#### Validates

Types:

- <code><a href="./src/resources/accounts/pcaps/ownerships/validates.ts">ValidateMagicPcapCollectionValidateBucketsForFullPacketCapturesResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/pcaps/ownership/validate">client.accounts.pcaps.ownerships.validates.<a href="./src/resources/accounts/pcaps/ownerships/validates.ts">magicPcapCollectionValidateBucketsForFullPacketCaptures</a>(accountIdentifier, { ...params }) -> ValidateMagicPcapCollectionValidateBucketsForFullPacketCapturesResponse</code>

### Downloads

Methods:

- <code title="get /accounts/{account_identifier}/pcaps/{identifier}/download">client.accounts.pcaps.downloads.<a href="./src/resources/accounts/pcaps/downloads.ts">list</a>(accountIdentifier, identifier) -> Response</code>

## R2

### Buckets

Types:

- <code><a href="./src/resources/accounts/r2/buckets.ts">BucketRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/r2/buckets.ts">BucketDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/r2/buckets.ts">BucketR2BucketCreateBucketResponse</a></code>
- <code><a href="./src/resources/accounts/r2/buckets.ts">BucketR2BucketListBucketsResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/r2/buckets/{bucket_name}">client.accounts.r2.buckets.<a href="./src/resources/accounts/r2/buckets.ts">retrieve</a>(accountIdentifier, bucketName) -> BucketRetrieveResponse</code>
- <code title="delete /accounts/{account_identifier}/r2/buckets/{bucket_name}">client.accounts.r2.buckets.<a href="./src/resources/accounts/r2/buckets.ts">delete</a>(accountIdentifier, bucketName) -> BucketDeleteResponse</code>
- <code title="post /accounts/{account_identifier}/r2/buckets">client.accounts.r2.buckets.<a href="./src/resources/accounts/r2/buckets.ts">r2BucketCreateBucket</a>(accountIdentifier, { ...params }) -> BucketR2BucketCreateBucketResponse</code>
- <code title="get /accounts/{account_identifier}/r2/buckets">client.accounts.r2.buckets.<a href="./src/resources/accounts/r2/buckets.ts">r2BucketListBuckets</a>(accountIdentifier, { ...params }) -> BucketR2BucketListBucketsResponse</code>

## Railguns

Types:

- <code><a href="./src/resources/accounts/railguns/railguns.ts">RailgunRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/railguns/railguns.ts">RailgunUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/railguns/railguns.ts">RailgunDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/railguns/railguns.ts">RailgunAccountRailgunsCreateRailgunResponse</a></code>
- <code><a href="./src/resources/accounts/railguns/railguns.ts">RailgunAccountRailgunsListRailgunsResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/railguns/{identifier}">client.accounts.railguns.<a href="./src/resources/accounts/railguns/railguns.ts">retrieve</a>(accountIdentifier, identifier) -> RailgunRetrieveResponse</code>
- <code title="put /accounts/{account_identifier}/railguns/{identifier}">client.accounts.railguns.<a href="./src/resources/accounts/railguns/railguns.ts">update</a>(accountIdentifier, identifier, { ...params }) -> RailgunUpdateResponse</code>
- <code title="delete /accounts/{account_identifier}/railguns/{identifier}">client.accounts.railguns.<a href="./src/resources/accounts/railguns/railguns.ts">delete</a>(accountIdentifier, identifier) -> RailgunDeleteResponse</code>
- <code title="post /accounts/{account_identifier}/railguns">client.accounts.railguns.<a href="./src/resources/accounts/railguns/railguns.ts">accountRailgunsCreateRailgun</a>(accountIdentifier, { ...params }) -> RailgunAccountRailgunsCreateRailgunResponse</code>
- <code title="get /accounts/{account_identifier}/railguns">client.accounts.railguns.<a href="./src/resources/accounts/railguns/railguns.ts">accountRailgunsListRailguns</a>(accountIdentifier, { ...params }) -> RailgunAccountRailgunsListRailgunsResponsesPage</code>

### Connections

Types:

- <code><a href="./src/resources/accounts/railguns/connections.ts">ConnectionRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/railguns/connections.ts">ConnectionUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/railguns/connections.ts">ConnectionDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/railguns/connections.ts">ConnectionRailgunConnectionsCreateConnectionResponse</a></code>
- <code><a href="./src/resources/accounts/railguns/connections.ts">ConnectionRailgunConnectionsListConnectionsResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/railguns/{railgun_identifier}/connections/{identifier}">client.accounts.railguns.connections.<a href="./src/resources/accounts/railguns/connections.ts">retrieve</a>(accountIdentifier, railgunIdentifier, identifier) -> ConnectionRetrieveResponse</code>
- <code title="put /accounts/{account_identifier}/railguns/{railgun_identifier}/connections/{identifier}">client.accounts.railguns.connections.<a href="./src/resources/accounts/railguns/connections.ts">update</a>(accountIdentifier, railgunIdentifier, identifier, { ...params }) -> ConnectionUpdateResponse</code>
- <code title="delete /accounts/{account_identifier}/railguns/{railgun_identifier}/connections/{identifier}">client.accounts.railguns.connections.<a href="./src/resources/accounts/railguns/connections.ts">delete</a>(accountIdentifier, railgunIdentifier, identifier) -> ConnectionDeleteResponse</code>
- <code title="post /accounts/{account_identifier}/railguns/{railgun_identifier}/connections">client.accounts.railguns.connections.<a href="./src/resources/accounts/railguns/connections.ts">railgunConnectionsCreateConnection</a>(accountIdentifier, railgunIdentifier, { ...params }) -> ConnectionRailgunConnectionsCreateConnectionResponse</code>
- <code title="get /accounts/{account_identifier}/railguns/{railgun_identifier}/connections">client.accounts.railguns.connections.<a href="./src/resources/accounts/railguns/connections.ts">railgunConnectionsListConnections</a>(accountIdentifier, railgunIdentifier, { ...params }) -> ConnectionRailgunConnectionsListConnectionsResponsesPage</code>

## Registrar

### Domains

Types:

- <code><a href="./src/resources/accounts/registrar/domains.ts">RegistrarAPIDomainResponseCollection</a></code>
- <code><a href="./src/resources/accounts/registrar/domains.ts">DomainRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/registrar/domains.ts">DomainUpdateResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/registrar/domains/{domain_name}">client.accounts.registrar.domains.<a href="./src/resources/accounts/registrar/domains.ts">retrieve</a>(accountIdentifier, domainName) -> DomainRetrieveResponse</code>
- <code title="put /accounts/{account_identifier}/registrar/domains/{domain_name}">client.accounts.registrar.domains.<a href="./src/resources/accounts/registrar/domains.ts">update</a>(accountIdentifier, domainName, { ...params }) -> DomainUpdateResponse</code>
- <code title="get /accounts/{account_identifier}/registrar/domains">client.accounts.registrar.domains.<a href="./src/resources/accounts/registrar/domains.ts">list</a>(accountIdentifier) -> RegistrarAPIDomainResponseCollection</code>

## RequestTracers

### Traces

## Roles

Types:

- <code><a href="./src/resources/accounts/roles.ts">RoleRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/roles.ts">RoleAccountRolesListRolesResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/roles/{identifier}">client.accounts.roles.<a href="./src/resources/accounts/roles.ts">retrieve</a>(accountIdentifier, identifier) -> RoleRetrieveResponse</code>
- <code title="get /accounts/{account_identifier}/roles">client.accounts.roles.<a href="./src/resources/accounts/roles.ts">accountRolesListRoles</a>(accountIdentifier) -> RoleAccountRolesListRolesResponse</code>

## Rules

### Lists

Types:

- <code><a href="./src/resources/accounts/rules/lists/lists.ts">ListRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/rules/lists/lists.ts">ListUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/rules/lists/lists.ts">ListDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/rules/lists/lists.ts">ListListsCreateAListResponse</a></code>
- <code><a href="./src/resources/accounts/rules/lists/lists.ts">ListListsGetListsResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/rules/lists/{list_id}">client.accounts.rules.lists.<a href="./src/resources/accounts/rules/lists/lists.ts">retrieve</a>(accountIdentifier, listId) -> ListRetrieveResponse</code>
- <code title="put /accounts/{account_identifier}/rules/lists/{list_id}">client.accounts.rules.lists.<a href="./src/resources/accounts/rules/lists/lists.ts">update</a>(accountIdentifier, listId, { ...params }) -> ListUpdateResponse</code>
- <code title="delete /accounts/{account_identifier}/rules/lists/{list_id}">client.accounts.rules.lists.<a href="./src/resources/accounts/rules/lists/lists.ts">delete</a>(accountIdentifier, listId) -> ListDeleteResponse</code>
- <code title="post /accounts/{account_identifier}/rules/lists">client.accounts.rules.lists.<a href="./src/resources/accounts/rules/lists/lists.ts">listsCreateAList</a>(accountIdentifier, { ...params }) -> ListListsCreateAListResponse</code>
- <code title="get /accounts/{account_identifier}/rules/lists">client.accounts.rules.lists.<a href="./src/resources/accounts/rules/lists/lists.ts">listsGetLists</a>(accountIdentifier) -> ListListsGetListsResponse</code>

#### BulkOperations

Types:

- <code><a href="./src/resources/accounts/rules/lists/bulk-operations.ts">BulkOperationRetrieveResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/rules/lists/bulk_operations/{operation_id}">client.accounts.rules.lists.bulkOperations.<a href="./src/resources/accounts/rules/lists/bulk-operations.ts">retrieve</a>(accountIdentifier, operationId) -> BulkOperationRetrieveResponse</code>

#### Items

Types:

- <code><a href="./src/resources/accounts/rules/lists/items.ts">ItemRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/rules/lists/items.ts">ItemDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/rules/lists/items.ts">ItemListsCreateListItemsResponse</a></code>
- <code><a href="./src/resources/accounts/rules/lists/items.ts">ItemListsGetListItemsResponse</a></code>
- <code><a href="./src/resources/accounts/rules/lists/items.ts">ItemListsUpdateAllListItemsResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/rules/lists/{list_id}/items/{item_id}">client.accounts.rules.lists.items.<a href="./src/resources/accounts/rules/lists/items.ts">retrieve</a>(accountIdentifier, listId, itemId) -> ItemRetrieveResponse</code>
- <code title="delete /accounts/{account_identifier}/rules/lists/{list_id}/items">client.accounts.rules.lists.items.<a href="./src/resources/accounts/rules/lists/items.ts">delete</a>(accountIdentifier, listId, { ...params }) -> ItemDeleteResponse</code>
- <code title="post /accounts/{account_identifier}/rules/lists/{list_id}/items">client.accounts.rules.lists.items.<a href="./src/resources/accounts/rules/lists/items.ts">listsCreateListItems</a>(accountIdentifier, listId, [ ...body ]) -> ItemListsCreateListItemsResponse</code>
- <code title="get /accounts/{account_identifier}/rules/lists/{list_id}/items">client.accounts.rules.lists.items.<a href="./src/resources/accounts/rules/lists/items.ts">listsGetListItems</a>(accountIdentifier, listId, { ...params }) -> ItemListsGetListItemsResponse</code>
- <code title="put /accounts/{account_identifier}/rules/lists/{list_id}/items">client.accounts.rules.lists.items.<a href="./src/resources/accounts/rules/lists/items.ts">listsUpdateAllListItems</a>(accountIdentifier, listId, [ ...body ]) -> ItemListsUpdateAllListItemsResponse</code>

## SecondaryDNS

### ACLs

Types:

- <code><a href="./src/resources/accounts/secondary-dns/acls.ts">ACLRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/secondary-dns/acls.ts">ACLUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/secondary-dns/acls.ts">ACLDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/secondary-dns/acls.ts">ACLSecondaryDNSACLCreateACLResponse</a></code>
- <code><a href="./src/resources/accounts/secondary-dns/acls.ts">ACLSecondaryDNSACLListACLsResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/secondary_dns/acls/{identifier}">client.accounts.secondaryDNS.acls.<a href="./src/resources/accounts/secondary-dns/acls.ts">retrieve</a>(accountIdentifier, identifier) -> ACLRetrieveResponse</code>
- <code title="put /accounts/{account_identifier}/secondary_dns/acls/{identifier}">client.accounts.secondaryDNS.acls.<a href="./src/resources/accounts/secondary-dns/acls.ts">update</a>(accountIdentifier, identifier, { ...params }) -> ACLUpdateResponse</code>
- <code title="delete /accounts/{account_identifier}/secondary_dns/acls/{identifier}">client.accounts.secondaryDNS.acls.<a href="./src/resources/accounts/secondary-dns/acls.ts">delete</a>(accountIdentifier, identifier) -> ACLDeleteResponse</code>
- <code title="post /accounts/{account_identifier}/secondary_dns/acls">client.accounts.secondaryDNS.acls.<a href="./src/resources/accounts/secondary-dns/acls.ts">secondaryDNSACLCreateACL</a>(accountIdentifier, { ...params }) -> ACLSecondaryDNSACLCreateACLResponse</code>
- <code title="get /accounts/{account_identifier}/secondary_dns/acls">client.accounts.secondaryDNS.acls.<a href="./src/resources/accounts/secondary-dns/acls.ts">secondaryDNSACLListACLs</a>(accountIdentifier) -> ACLSecondaryDNSACLListACLsResponse</code>

### Peers

Types:

- <code><a href="./src/resources/accounts/secondary-dns/peers.ts">PeerRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/secondary-dns/peers.ts">PeerUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/secondary-dns/peers.ts">PeerDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/secondary-dns/peers.ts">PeerSecondaryDNSPeerCreatePeerResponse</a></code>
- <code><a href="./src/resources/accounts/secondary-dns/peers.ts">PeerSecondaryDNSPeerListPeersResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/secondary_dns/peers/{identifier}">client.accounts.secondaryDNS.peers.<a href="./src/resources/accounts/secondary-dns/peers.ts">retrieve</a>(accountIdentifier, identifier) -> PeerRetrieveResponse</code>
- <code title="put /accounts/{account_identifier}/secondary_dns/peers/{identifier}">client.accounts.secondaryDNS.peers.<a href="./src/resources/accounts/secondary-dns/peers.ts">update</a>(accountIdentifier, identifier, { ...params }) -> PeerUpdateResponse</code>
- <code title="delete /accounts/{account_identifier}/secondary_dns/peers/{identifier}">client.accounts.secondaryDNS.peers.<a href="./src/resources/accounts/secondary-dns/peers.ts">delete</a>(accountIdentifier, identifier) -> PeerDeleteResponse</code>
- <code title="post /accounts/{account_identifier}/secondary_dns/peers">client.accounts.secondaryDNS.peers.<a href="./src/resources/accounts/secondary-dns/peers.ts">secondaryDNSPeerCreatePeer</a>(accountIdentifier, { ...params }) -> PeerSecondaryDNSPeerCreatePeerResponse</code>
- <code title="get /accounts/{account_identifier}/secondary_dns/peers">client.accounts.secondaryDNS.peers.<a href="./src/resources/accounts/secondary-dns/peers.ts">secondaryDNSPeerListPeers</a>(accountIdentifier) -> PeerSecondaryDNSPeerListPeersResponse</code>

### Tsigs

Types:

- <code><a href="./src/resources/accounts/secondary-dns/tsigs.ts">TsigRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/secondary-dns/tsigs.ts">TsigUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/secondary-dns/tsigs.ts">TsigDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/secondary-dns/tsigs.ts">TsigSecondaryDNSTsigCreateTsigResponse</a></code>
- <code><a href="./src/resources/accounts/secondary-dns/tsigs.ts">TsigSecondaryDNSTsigListTsiGsResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/secondary_dns/tsigs/{identifier}">client.accounts.secondaryDNS.tsigs.<a href="./src/resources/accounts/secondary-dns/tsigs.ts">retrieve</a>(accountIdentifier, identifier) -> TsigRetrieveResponse</code>
- <code title="put /accounts/{account_identifier}/secondary_dns/tsigs/{identifier}">client.accounts.secondaryDNS.tsigs.<a href="./src/resources/accounts/secondary-dns/tsigs.ts">update</a>(accountIdentifier, identifier, { ...params }) -> TsigUpdateResponse</code>
- <code title="delete /accounts/{account_identifier}/secondary_dns/tsigs/{identifier}">client.accounts.secondaryDNS.tsigs.<a href="./src/resources/accounts/secondary-dns/tsigs.ts">delete</a>(accountIdentifier, identifier) -> TsigDeleteResponse</code>
- <code title="post /accounts/{account_identifier}/secondary_dns/tsigs">client.accounts.secondaryDNS.tsigs.<a href="./src/resources/accounts/secondary-dns/tsigs.ts">secondaryDNSTsigCreateTsig</a>(accountIdentifier, { ...params }) -> TsigSecondaryDNSTsigCreateTsigResponse</code>
- <code title="get /accounts/{account_identifier}/secondary_dns/tsigs">client.accounts.secondaryDNS.tsigs.<a href="./src/resources/accounts/secondary-dns/tsigs.ts">secondaryDNSTsigListTsiGs</a>(accountIdentifier) -> TsigSecondaryDNSTsigListTsiGsResponse</code>

## Storages

### Analytics

Types:

- <code><a href="./src/resources/accounts/storages/analytics.ts">AnalyticsListResponse</a></code>
- <code><a href="./src/resources/accounts/storages/analytics.ts">AnalyticsStoredResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/storage/analytics">client.accounts.storages.analytics.<a href="./src/resources/accounts/storages/analytics.ts">list</a>(accountIdentifier, { ...params }) -> AnalyticsListResponse</code>
- <code title="get /accounts/{account_identifier}/storage/analytics/stored">client.accounts.storages.analytics.<a href="./src/resources/accounts/storages/analytics.ts">stored</a>(accountIdentifier, { ...params }) -> AnalyticsStoredResponse</code>

### Kvs

#### Namespaces

Types:

- <code><a href="./src/resources/accounts/storages/kvs/namespaces/namespaces.ts">NamespaceUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/storages/kvs/namespaces/namespaces.ts">NamespaceListResponse</a></code>
- <code><a href="./src/resources/accounts/storages/kvs/namespaces/namespaces.ts">NamespaceDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/storages/kvs/namespaces/namespaces.ts">NamespaceWorkersKvNamespaceCreateANamespaceResponse</a></code>

Methods:

- <code title="put /accounts/{account_identifier}/storage/kv/namespaces/{namespace_identifier}">client.accounts.storages.kvs.namespaces.<a href="./src/resources/accounts/storages/kvs/namespaces/namespaces.ts">update</a>(accountIdentifier, namespaceIdentifier, { ...params }) -> NamespaceUpdateResponse</code>
- <code title="get /accounts/{account_identifier}/storage/kv/namespaces">client.accounts.storages.kvs.namespaces.<a href="./src/resources/accounts/storages/kvs/namespaces/namespaces.ts">list</a>(accountIdentifier, { ...params }) -> NamespaceListResponsesPage</code>
- <code title="delete /accounts/{account_identifier}/storage/kv/namespaces/{namespace_identifier}">client.accounts.storages.kvs.namespaces.<a href="./src/resources/accounts/storages/kvs/namespaces/namespaces.ts">delete</a>(accountIdentifier, namespaceIdentifier) -> NamespaceDeleteResponse</code>
- <code title="post /accounts/{account_identifier}/storage/kv/namespaces">client.accounts.storages.kvs.namespaces.<a href="./src/resources/accounts/storages/kvs/namespaces/namespaces.ts">workersKvNamespaceCreateANamespace</a>(accountIdentifier, { ...params }) -> NamespaceWorkersKvNamespaceCreateANamespaceResponse</code>

##### Bulks

Types:

- <code><a href="./src/resources/accounts/storages/kvs/namespaces/bulks.ts">BulkDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/storages/kvs/namespaces/bulks.ts">BulkWorkersKvNamespaceWriteMultipleKeyValuePairsResponse</a></code>

Methods:

- <code title="delete /accounts/{account_identifier}/storage/kv/namespaces/{namespace_identifier}/bulk">client.accounts.storages.kvs.namespaces.bulks.<a href="./src/resources/accounts/storages/kvs/namespaces/bulks.ts">delete</a>(accountIdentifier, namespaceIdentifier, [ ...body ]) -> BulkDeleteResponse</code>
- <code title="put /accounts/{account_identifier}/storage/kv/namespaces/{namespace_identifier}/bulk">client.accounts.storages.kvs.namespaces.bulks.<a href="./src/resources/accounts/storages/kvs/namespaces/bulks.ts">workersKvNamespaceWriteMultipleKeyValuePairs</a>(accountIdentifier, namespaceIdentifier, [ ...body ]) -> BulkWorkersKvNamespaceWriteMultipleKeyValuePairsResponse</code>

##### Keys

Types:

- <code><a href="./src/resources/accounts/storages/kvs/namespaces/keys.ts">KeyListResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/storage/kv/namespaces/{namespace_identifier}/keys">client.accounts.storages.kvs.namespaces.keys.<a href="./src/resources/accounts/storages/kvs/namespaces/keys.ts">list</a>(accountIdentifier, namespaceIdentifier, { ...params }) -> KeyListResponse</code>

##### Metadata

Types:

- <code><a href="./src/resources/accounts/storages/kvs/namespaces/metadata.ts">MetadataRetrieveResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/storage/kv/namespaces/{namespace_identifier}/metadata/{key_name}">client.accounts.storages.kvs.namespaces.metadata.<a href="./src/resources/accounts/storages/kvs/namespaces/metadata.ts">retrieve</a>(accountIdentifier, namespaceIdentifier, keyName) -> MetadataRetrieveResponse</code>

##### Values

Types:

- <code><a href="./src/resources/accounts/storages/kvs/namespaces/values.ts">ValueRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/storages/kvs/namespaces/values.ts">ValueUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/storages/kvs/namespaces/values.ts">ValueDeleteResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/storage/kv/namespaces/{namespace_identifier}/values/{key_name}">client.accounts.storages.kvs.namespaces.values.<a href="./src/resources/accounts/storages/kvs/namespaces/values.ts">retrieve</a>(accountIdentifier, namespaceIdentifier, keyName) -> string</code>
- <code title="put /accounts/{account_identifier}/storage/kv/namespaces/{namespace_identifier}/values/{key_name}">client.accounts.storages.kvs.namespaces.values.<a href="./src/resources/accounts/storages/kvs/namespaces/values.ts">update</a>(accountIdentifier, namespaceIdentifier, keyName, { ...params }) -> ValueUpdateResponse</code>
- <code title="delete /accounts/{account_identifier}/storage/kv/namespaces/{namespace_identifier}/values/{key_name}">client.accounts.storages.kvs.namespaces.values.<a href="./src/resources/accounts/storages/kvs/namespaces/values.ts">delete</a>(accountIdentifier, namespaceIdentifier, keyName) -> ValueDeleteResponse</code>

## Streams

Types:

- <code><a href="./src/resources/accounts/streams/streams.ts">StreamRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/streams/streams.ts">StreamUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/streams/streams.ts">StreamStreamVideosListVideosResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/stream/{identifier}">client.accounts.streams.<a href="./src/resources/accounts/streams/streams.ts">retrieve</a>(accountIdentifier, identifier) -> StreamRetrieveResponse</code>
- <code title="post /accounts/{account_identifier}/stream/{identifier}">client.accounts.streams.<a href="./src/resources/accounts/streams/streams.ts">update</a>(accountIdentifier, identifier, { ...params }) -> StreamUpdateResponse</code>
- <code title="delete /accounts/{account_identifier}/stream/{identifier}">client.accounts.streams.<a href="./src/resources/accounts/streams/streams.ts">delete</a>(accountIdentifier, identifier) -> void</code>
- <code title="post /accounts/{account_identifier}/stream">client.accounts.streams.<a href="./src/resources/accounts/streams/streams.ts">streamVideosInitiateVideoUploadsUsingTus</a>(accountIdentifier, { ...params }) -> void</code>
- <code title="get /accounts/{account_identifier}/stream">client.accounts.streams.<a href="./src/resources/accounts/streams/streams.ts">streamVideosListVideos</a>(accountIdentifier, { ...params }) -> StreamStreamVideosListVideosResponse</code>

### Clips

Types:

- <code><a href="./src/resources/accounts/streams/clips.ts">ClipStreamVideoClippingClipVideosGivenAStartAndEndTimeResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/stream/clip">client.accounts.streams.clips.<a href="./src/resources/accounts/streams/clips.ts">streamVideoClippingClipVideosGivenAStartAndEndTime</a>(accountIdentifier, { ...params }) -> ClipStreamVideoClippingClipVideosGivenAStartAndEndTimeResponse</code>

### Copies

Types:

- <code><a href="./src/resources/accounts/streams/copies.ts">CopyStreamVideosUploadVideosFromAURLResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/stream/copy">client.accounts.streams.copies.<a href="./src/resources/accounts/streams/copies.ts">streamVideosUploadVideosFromAURL</a>(accountIdentifier, { ...params }) -> CopyStreamVideosUploadVideosFromAURLResponse</code>

### DirectUploads

Types:

- <code><a href="./src/resources/accounts/streams/direct-uploads.ts">DirectUploadStreamVideosUploadVideosViaDirectUploadURLsResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/stream/direct_upload">client.accounts.streams.directUploads.<a href="./src/resources/accounts/streams/direct-uploads.ts">streamVideosUploadVideosViaDirectUploadURLs</a>(accountIdentifier, { ...params }) -> DirectUploadStreamVideosUploadVideosViaDirectUploadURLsResponse</code>

### Keys

Types:

- <code><a href="./src/resources/accounts/streams/keys.ts">KeyDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/streams/keys.ts">KeyStreamSigningKeysCreateSigningKeysResponse</a></code>
- <code><a href="./src/resources/accounts/streams/keys.ts">KeyStreamSigningKeysListSigningKeysResponse</a></code>

Methods:

- <code title="delete /accounts/{account_identifier}/stream/keys/{identifier}">client.accounts.streams.keys.<a href="./src/resources/accounts/streams/keys.ts">delete</a>(accountIdentifier, identifier) -> KeyDeleteResponse</code>
- <code title="post /accounts/{account_identifier}/stream/keys">client.accounts.streams.keys.<a href="./src/resources/accounts/streams/keys.ts">streamSigningKeysCreateSigningKeys</a>(accountIdentifier) -> KeyStreamSigningKeysCreateSigningKeysResponse</code>
- <code title="get /accounts/{account_identifier}/stream/keys">client.accounts.streams.keys.<a href="./src/resources/accounts/streams/keys.ts">streamSigningKeysListSigningKeys</a>(accountIdentifier) -> KeyStreamSigningKeysListSigningKeysResponse</code>

### LiveInputs

Types:

- <code><a href="./src/resources/accounts/streams/live-inputs/live-inputs.ts">LiveInputRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/streams/live-inputs/live-inputs.ts">LiveInputUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/streams/live-inputs/live-inputs.ts">LiveInputStreamLiveInputsCreateALiveInputResponse</a></code>
- <code><a href="./src/resources/accounts/streams/live-inputs/live-inputs.ts">LiveInputStreamLiveInputsListLiveInputsResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/stream/live_inputs/{live_input_identifier}">client.accounts.streams.liveInputs.<a href="./src/resources/accounts/streams/live-inputs/live-inputs.ts">retrieve</a>(accountIdentifier, liveInputIdentifier) -> LiveInputRetrieveResponse</code>
- <code title="put /accounts/{account_identifier}/stream/live_inputs/{live_input_identifier}">client.accounts.streams.liveInputs.<a href="./src/resources/accounts/streams/live-inputs/live-inputs.ts">update</a>(accountIdentifier, liveInputIdentifier, { ...params }) -> LiveInputUpdateResponse</code>
- <code title="delete /accounts/{account_identifier}/stream/live_inputs/{live_input_identifier}">client.accounts.streams.liveInputs.<a href="./src/resources/accounts/streams/live-inputs/live-inputs.ts">delete</a>(accountIdentifier, liveInputIdentifier) -> void</code>
- <code title="post /accounts/{account_identifier}/stream/live_inputs">client.accounts.streams.liveInputs.<a href="./src/resources/accounts/streams/live-inputs/live-inputs.ts">streamLiveInputsCreateALiveInput</a>(accountIdentifier, { ...params }) -> LiveInputStreamLiveInputsCreateALiveInputResponse</code>
- <code title="get /accounts/{account_identifier}/stream/live_inputs">client.accounts.streams.liveInputs.<a href="./src/resources/accounts/streams/live-inputs/live-inputs.ts">streamLiveInputsListLiveInputs</a>(accountIdentifier, { ...params }) -> LiveInputStreamLiveInputsListLiveInputsResponse</code>

#### Outputs

Types:

- <code><a href="./src/resources/accounts/streams/live-inputs/outputs.ts">OutputUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/streams/live-inputs/outputs.ts">OutputStreamLiveInputsCreateANewOutputConnectedToALiveInputResponse</a></code>
- <code><a href="./src/resources/accounts/streams/live-inputs/outputs.ts">OutputStreamLiveInputsListAllOutputsAssociatedWithASpecifiedLiveInputResponse</a></code>

Methods:

- <code title="put /accounts/{account_identifier}/stream/live_inputs/{live_input_identifier}/outputs/{output_identifier}">client.accounts.streams.liveInputs.outputs.<a href="./src/resources/accounts/streams/live-inputs/outputs.ts">update</a>(accountIdentifier, liveInputIdentifier, outputIdentifier, { ...params }) -> OutputUpdateResponse</code>
- <code title="delete /accounts/{account_identifier}/stream/live_inputs/{live_input_identifier}/outputs/{output_identifier}">client.accounts.streams.liveInputs.outputs.<a href="./src/resources/accounts/streams/live-inputs/outputs.ts">delete</a>(accountIdentifier, liveInputIdentifier, outputIdentifier) -> void</code>
- <code title="post /accounts/{account_identifier}/stream/live_inputs/{live_input_identifier}/outputs">client.accounts.streams.liveInputs.outputs.<a href="./src/resources/accounts/streams/live-inputs/outputs.ts">streamLiveInputsCreateANewOutputConnectedToALiveInput</a>(accountIdentifier, liveInputIdentifier, { ...params }) -> OutputStreamLiveInputsCreateANewOutputConnectedToALiveInputResponse</code>
- <code title="get /accounts/{account_identifier}/stream/live_inputs/{live_input_identifier}/outputs">client.accounts.streams.liveInputs.outputs.<a href="./src/resources/accounts/streams/live-inputs/outputs.ts">streamLiveInputsListAllOutputsAssociatedWithASpecifiedLiveInput</a>(accountIdentifier, liveInputIdentifier) -> OutputStreamLiveInputsListAllOutputsAssociatedWithASpecifiedLiveInputResponse</code>

### Watermarks

Types:

- <code><a href="./src/resources/accounts/streams/watermarks.ts">WatermarkRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/streams/watermarks.ts">WatermarkDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/streams/watermarks.ts">WatermarkStreamWatermarkProfileCreateWatermarkProfilesViaBasicUploadResponse</a></code>
- <code><a href="./src/resources/accounts/streams/watermarks.ts">WatermarkStreamWatermarkProfileListWatermarkProfilesResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/stream/watermarks/{identifier}">client.accounts.streams.watermarks.<a href="./src/resources/accounts/streams/watermarks.ts">retrieve</a>(accountIdentifier, identifier) -> WatermarkRetrieveResponse</code>
- <code title="delete /accounts/{account_identifier}/stream/watermarks/{identifier}">client.accounts.streams.watermarks.<a href="./src/resources/accounts/streams/watermarks.ts">delete</a>(accountIdentifier, identifier) -> WatermarkDeleteResponse</code>
- <code title="post /accounts/{account_identifier}/stream/watermarks">client.accounts.streams.watermarks.<a href="./src/resources/accounts/streams/watermarks.ts">streamWatermarkProfileCreateWatermarkProfilesViaBasicUpload</a>(accountIdentifier, { ...params }) -> WatermarkStreamWatermarkProfileCreateWatermarkProfilesViaBasicUploadResponse</code>
- <code title="get /accounts/{account_identifier}/stream/watermarks">client.accounts.streams.watermarks.<a href="./src/resources/accounts/streams/watermarks.ts">streamWatermarkProfileListWatermarkProfiles</a>(accountIdentifier) -> WatermarkStreamWatermarkProfileListWatermarkProfilesResponse</code>

### Webhooks

Types:

- <code><a href="./src/resources/accounts/streams/webhooks.ts">WebhookDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/streams/webhooks.ts">WebhookStreamWebhookCreateWebhooksResponse</a></code>
- <code><a href="./src/resources/accounts/streams/webhooks.ts">WebhookStreamWebhookViewWebhooksResponse</a></code>

Methods:

- <code title="delete /accounts/{account_identifier}/stream/webhook">client.accounts.streams.webhooks.<a href="./src/resources/accounts/streams/webhooks.ts">delete</a>(accountIdentifier) -> WebhookDeleteResponse</code>
- <code title="put /accounts/{account_identifier}/stream/webhook">client.accounts.streams.webhooks.<a href="./src/resources/accounts/streams/webhooks.ts">streamWebhookCreateWebhooks</a>(accountIdentifier, { ...params }) -> WebhookStreamWebhookCreateWebhooksResponse</code>
- <code title="get /accounts/{account_identifier}/stream/webhook">client.accounts.streams.webhooks.<a href="./src/resources/accounts/streams/webhooks.ts">streamWebhookViewWebhooks</a>(accountIdentifier) -> WebhookStreamWebhookViewWebhooksResponse</code>

### Captions

Types:

- <code><a href="./src/resources/accounts/streams/captions.ts">CaptionUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/streams/captions.ts">CaptionDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/streams/captions.ts">CaptionStreamSubtitlesCaptionsListCaptionsOrSubtitlesResponse</a></code>

Methods:

- <code title="put /accounts/{account_identifier}/stream/{identifier}/captions/{language}">client.accounts.streams.captions.<a href="./src/resources/accounts/streams/captions.ts">update</a>(accountIdentifier, identifier, language, { ...params }) -> CaptionUpdateResponse</code>
- <code title="delete /accounts/{account_identifier}/stream/{identifier}/captions/{language}">client.accounts.streams.captions.<a href="./src/resources/accounts/streams/captions.ts">delete</a>(accountIdentifier, identifier, language) -> CaptionDeleteResponse</code>
- <code title="get /accounts/{account_identifier}/stream/{identifier}/captions">client.accounts.streams.captions.<a href="./src/resources/accounts/streams/captions.ts">streamSubtitlesCaptionsListCaptionsOrSubtitles</a>(accountIdentifier, identifier) -> CaptionStreamSubtitlesCaptionsListCaptionsOrSubtitlesResponse</code>

### Downloads

Types:

- <code><a href="./src/resources/accounts/streams/downloads.ts">DownloadDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/streams/downloads.ts">DownloadStreamMP4DownloadsCreateDownloadsResponse</a></code>
- <code><a href="./src/resources/accounts/streams/downloads.ts">DownloadStreamMP4DownloadsListDownloadsResponse</a></code>

Methods:

- <code title="delete /accounts/{account_identifier}/stream/{identifier}/downloads">client.accounts.streams.downloads.<a href="./src/resources/accounts/streams/downloads.ts">delete</a>(accountIdentifier, identifier) -> DownloadDeleteResponse</code>
- <code title="post /accounts/{account_identifier}/stream/{identifier}/downloads">client.accounts.streams.downloads.<a href="./src/resources/accounts/streams/downloads.ts">streamMP4DownloadsCreateDownloads</a>(accountIdentifier, identifier) -> DownloadStreamMP4DownloadsCreateDownloadsResponse</code>
- <code title="get /accounts/{account_identifier}/stream/{identifier}/downloads">client.accounts.streams.downloads.<a href="./src/resources/accounts/streams/downloads.ts">streamMP4DownloadsListDownloads</a>(accountIdentifier, identifier) -> DownloadStreamMP4DownloadsListDownloadsResponse</code>

### Embeds

Types:

- <code><a href="./src/resources/accounts/streams/embeds.ts">EmbedListResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/stream/{identifier}/embed">client.accounts.streams.embeds.<a href="./src/resources/accounts/streams/embeds.ts">list</a>(accountIdentifier, identifier) -> unknown</code>

### Tokens

Types:

- <code><a href="./src/resources/accounts/streams/tokens.ts">TokenStreamVideosCreateSignedURLTokensForVideosResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/stream/{identifier}/token">client.accounts.streams.tokens.<a href="./src/resources/accounts/streams/tokens.ts">streamVideosCreateSignedURLTokensForVideos</a>(accountIdentifier, identifier, { ...params }) -> TokenStreamVideosCreateSignedURLTokensForVideosResponse</code>

### Audios

Types:

- <code><a href="./src/resources/accounts/streams/audios.ts">AudioUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/streams/audios.ts">AudioDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/streams/audios.ts">AudioCopyResponse</a></code>

Methods:

- <code title="patch /accounts/{account_identifier}/stream/{identifier}/audio/{audio_identifier}">client.accounts.streams.audios.<a href="./src/resources/accounts/streams/audios.ts">update</a>(accountIdentifier, identifier, audioIdentifier, { ...params }) -> AudioUpdateResponse</code>
- <code title="delete /accounts/{account_identifier}/stream/{identifier}/audio/{audio_identifier}">client.accounts.streams.audios.<a href="./src/resources/accounts/streams/audios.ts">delete</a>(accountIdentifier, identifier, audioIdentifier) -> AudioDeleteResponse</code>
- <code title="post /accounts/{account_identifier}/stream/{identifier}/audio/copy">client.accounts.streams.audios.<a href="./src/resources/accounts/streams/audios.ts">copy</a>(accountIdentifier, identifier, { ...params }) -> AudioCopyResponse</code>

### StorageUsages

Types:

- <code><a href="./src/resources/accounts/streams/storage-usages.ts">StorageUsageRetrieveResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/stream/storage-usage">client.accounts.streams.storageUsages.<a href="./src/resources/accounts/streams/storage-usages.ts">retrieve</a>(accountIdentifier, { ...params }) -> StorageUsageRetrieveResponse</code>

## Subscriptions

Types:

- <code><a href="./src/resources/accounts/subscriptions.ts">SubscriptionUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/subscriptions.ts">SubscriptionDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/subscriptions.ts">SubscriptionAccountSubscriptionsCreateSubscriptionResponse</a></code>
- <code><a href="./src/resources/accounts/subscriptions.ts">SubscriptionAccountSubscriptionsListSubscriptionsResponse</a></code>

Methods:

- <code title="put /accounts/{account_identifier}/subscriptions/{subscription_identifier}">client.accounts.subscriptions.<a href="./src/resources/accounts/subscriptions.ts">update</a>(accountIdentifier, subscriptionIdentifier, { ...params }) -> SubscriptionUpdateResponse</code>
- <code title="delete /accounts/{account_identifier}/subscriptions/{subscription_identifier}">client.accounts.subscriptions.<a href="./src/resources/accounts/subscriptions.ts">delete</a>(accountIdentifier, subscriptionIdentifier) -> SubscriptionDeleteResponse</code>
- <code title="post /accounts/{account_identifier}/subscriptions">client.accounts.subscriptions.<a href="./src/resources/accounts/subscriptions.ts">accountSubscriptionsCreateSubscription</a>(accountIdentifier, { ...params }) -> SubscriptionAccountSubscriptionsCreateSubscriptionResponse</code>
- <code title="get /accounts/{account_identifier}/subscriptions">client.accounts.subscriptions.<a href="./src/resources/accounts/subscriptions.ts">accountSubscriptionsListSubscriptions</a>(accountIdentifier) -> SubscriptionAccountSubscriptionsListSubscriptionsResponse</code>

## Teamnet

### Routes

Types:

- <code><a href="./src/resources/accounts/teamnet/routes/routes.ts">RouteCreateResponse</a></code>
- <code><a href="./src/resources/accounts/teamnet/routes/routes.ts">RouteUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/teamnet/routes/routes.ts">RouteDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/teamnet/routes/routes.ts">RouteTunnelRouteListTunnelRoutesResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/teamnet/routes">client.accounts.teamnet.routes.<a href="./src/resources/accounts/teamnet/routes/routes.ts">create</a>(accountIdentifier, { ...params }) -> RouteCreateResponse</code>
- <code title="patch /accounts/{account_identifier}/teamnet/routes/{route_id}">client.accounts.teamnet.routes.<a href="./src/resources/accounts/teamnet/routes/routes.ts">update</a>(accountIdentifier, routeId, { ...params }) -> RouteUpdateResponse</code>
- <code title="delete /accounts/{account_identifier}/teamnet/routes/{route_id}">client.accounts.teamnet.routes.<a href="./src/resources/accounts/teamnet/routes/routes.ts">delete</a>(accountIdentifier, routeId) -> RouteDeleteResponse</code>
- <code title="get /accounts/{account_identifier}/teamnet/routes">client.accounts.teamnet.routes.<a href="./src/resources/accounts/teamnet/routes/routes.ts">tunnelRouteListTunnelRoutes</a>(accountIdentifier, { ...params }) -> RouteTunnelRouteListTunnelRoutesResponsesPage</code>

#### IPs

Types:

- <code><a href="./src/resources/accounts/teamnet/routes/ips.ts">IPRetrieveResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/teamnet/routes/ip/{ip}">client.accounts.teamnet.routes.ips.<a href="./src/resources/accounts/teamnet/routes/ips.ts">retrieve</a>(accountIdentifier, ip, { ...params }) -> IPRetrieveResponse</code>

#### Networks

Types:

- <code><a href="./src/resources/accounts/teamnet/routes/networks.ts">NetworkUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/teamnet/routes/networks.ts">NetworkDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/teamnet/routes/network/{ip_network_encoded}">client.accounts.teamnet.routes.networks.<a href="./src/resources/accounts/teamnet/routes/networks.ts">update</a>(accountIdentifier, ipNetworkEncoded, { ...params }) -> NetworkUpdateResponse</code>
- <code title="delete /accounts/{account_identifier}/teamnet/routes/network/{ip_network_encoded}">client.accounts.teamnet.routes.networks.<a href="./src/resources/accounts/teamnet/routes/networks.ts">delete</a>(accountIdentifier, ipNetworkEncoded, { ...params }) -> NetworkDeleteResponse</code>

### VirtualNetworks

Types:

- <code><a href="./src/resources/accounts/teamnet/virtual-networks.ts">VirtualNetworkUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/teamnet/virtual-networks.ts">VirtualNetworkDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/teamnet/virtual-networks.ts">VirtualNetworkTunnelVirtualNetworkCreateAVirtualNetworkResponse</a></code>
- <code><a href="./src/resources/accounts/teamnet/virtual-networks.ts">VirtualNetworkTunnelVirtualNetworkListVirtualNetworksResponse</a></code>

Methods:

- <code title="patch /accounts/{account_identifier}/teamnet/virtual_networks/{vnet_id}">client.accounts.teamnet.virtualNetworks.<a href="./src/resources/accounts/teamnet/virtual-networks.ts">update</a>(accountIdentifier, vnetId, { ...params }) -> VirtualNetworkUpdateResponse</code>
- <code title="delete /accounts/{account_identifier}/teamnet/virtual_networks/{vnet_id}">client.accounts.teamnet.virtualNetworks.<a href="./src/resources/accounts/teamnet/virtual-networks.ts">delete</a>(accountIdentifier, vnetId) -> VirtualNetworkDeleteResponse</code>
- <code title="post /accounts/{account_identifier}/teamnet/virtual_networks">client.accounts.teamnet.virtualNetworks.<a href="./src/resources/accounts/teamnet/virtual-networks.ts">tunnelVirtualNetworkCreateAVirtualNetwork</a>(accountIdentifier, { ...params }) -> VirtualNetworkTunnelVirtualNetworkCreateAVirtualNetworkResponse</code>
- <code title="get /accounts/{account_identifier}/teamnet/virtual_networks">client.accounts.teamnet.virtualNetworks.<a href="./src/resources/accounts/teamnet/virtual-networks.ts">tunnelVirtualNetworkListVirtualNetworks</a>(accountIdentifier, { ...params }) -> VirtualNetworkTunnelVirtualNetworkListVirtualNetworksResponse</code>

## Tunnels

Types:

- <code><a href="./src/resources/accounts/tunnels/tunnels.ts">TunnelRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/tunnels/tunnels.ts">TunnelDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/tunnels/tunnels.ts">TunnelArgoTunnelCreateAnArgoTunnelResponse</a></code>
- <code><a href="./src/resources/accounts/tunnels/tunnels.ts">TunnelArgoTunnelListArgoTunnelsResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/tunnels/{tunnel_id}">client.accounts.tunnels.<a href="./src/resources/accounts/tunnels/tunnels.ts">retrieve</a>(accountIdentifier, tunnelId) -> TunnelRetrieveResponse</code>
- <code title="delete /accounts/{account_identifier}/tunnels/{tunnel_id}">client.accounts.tunnels.<a href="./src/resources/accounts/tunnels/tunnels.ts">delete</a>(accountIdentifier, tunnelId, { ...params }) -> TunnelDeleteResponse</code>
- <code title="post /accounts/{account_identifier}/tunnels">client.accounts.tunnels.<a href="./src/resources/accounts/tunnels/tunnels.ts">argoTunnelCreateAnArgoTunnel</a>(accountIdentifier, { ...params }) -> TunnelArgoTunnelCreateAnArgoTunnelResponse</code>
- <code title="get /accounts/{account_identifier}/tunnels">client.accounts.tunnels.<a href="./src/resources/accounts/tunnels/tunnels.ts">argoTunnelListArgoTunnels</a>(accountIdentifier, { ...params }) -> TunnelArgoTunnelListArgoTunnelsResponsesPage</code>

### Connections

Types:

- <code><a href="./src/resources/accounts/tunnels/connections.ts">ConnectionDeleteResponse</a></code>

Methods:

- <code title="delete /accounts/{account_identifier}/tunnels/{tunnel_id}/connections">client.accounts.tunnels.connections.<a href="./src/resources/accounts/tunnels/connections.ts">delete</a>(accountIdentifier, tunnelId, { ...params }) -> ConnectionDeleteResponse</code>

## Workers

### AccountSettings

Types:

- <code><a href="./src/resources/accounts/workers/account-settings.ts">AccountSettingWorkerAccountSettingsCreateWorkerAccountSettingsResponse</a></code>
- <code><a href="./src/resources/accounts/workers/account-settings.ts">AccountSettingWorkerAccountSettingsFetchWorkerAccountSettingsResponse</a></code>

Methods:

- <code title="put /accounts/{account_identifier}/workers/account-settings">client.accounts.workers.accountSettings.<a href="./src/resources/accounts/workers/account-settings.ts">workerAccountSettingsCreateWorkerAccountSettings</a>(accountIdentifier, { ...params }) -> AccountSettingWorkerAccountSettingsCreateWorkerAccountSettingsResponse</code>
- <code title="get /accounts/{account_identifier}/workers/account-settings">client.accounts.workers.accountSettings.<a href="./src/resources/accounts/workers/account-settings.ts">workerAccountSettingsFetchWorkerAccountSettings</a>(accountIdentifier) -> AccountSettingWorkerAccountSettingsFetchWorkerAccountSettingsResponse</code>

### Deployments

#### ByScripts

Types:

- <code><a href="./src/resources/accounts/workers/deployments/by-scripts/by-scripts.ts">ByScriptWorkerDeploymentsListDeploymentsResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/workers/deployments/by-script/{script_identifier}">client.accounts.workers.deployments.byScripts.<a href="./src/resources/accounts/workers/deployments/by-scripts/by-scripts.ts">workerDeploymentsListDeployments</a>(accountIdentifier, scriptIdentifier) -> ByScriptWorkerDeploymentsListDeploymentsResponse</code>

##### Details

Types:

- <code><a href="./src/resources/accounts/workers/deployments/by-scripts/details.ts">DetailRetrieveResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/workers/deployments/by-script/{script_identifier}/detail/{deployment_identifier}">client.accounts.workers.deployments.byScripts.details.<a href="./src/resources/accounts/workers/deployments/by-scripts/details.ts">retrieve</a>(accountIdentifier, scriptIdentifier, deploymentIdentifier) -> DetailRetrieveResponse</code>

### Domains

Types:

- <code><a href="./src/resources/accounts/workers/domains.ts">DomainRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/workers/domains.ts">DomainWorkerDomainAttachToDomainResponse</a></code>
- <code><a href="./src/resources/accounts/workers/domains.ts">DomainWorkerDomainListDomainsResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/workers/domains/{domain_identifier}">client.accounts.workers.domains.<a href="./src/resources/accounts/workers/domains.ts">retrieve</a>(accountIdentifier, domainIdentifier) -> DomainRetrieveResponse</code>
- <code title="delete /accounts/{account_identifier}/workers/domains/{domain_identifier}">client.accounts.workers.domains.<a href="./src/resources/accounts/workers/domains.ts">delete</a>(accountIdentifier, domainIdentifier) -> void</code>
- <code title="put /accounts/{account_identifier}/workers/domains">client.accounts.workers.domains.<a href="./src/resources/accounts/workers/domains.ts">workerDomainAttachToDomain</a>(accountIdentifier, { ...params }) -> DomainWorkerDomainAttachToDomainResponse</code>
- <code title="get /accounts/{account_identifier}/workers/domains">client.accounts.workers.domains.<a href="./src/resources/accounts/workers/domains.ts">workerDomainListDomains</a>(accountIdentifier, { ...params }) -> DomainWorkerDomainListDomainsResponse</code>

### DurableObjects

#### Namespaces

Types:

- <code><a href="./src/resources/accounts/workers/durable-objects/namespaces/namespaces.ts">NamespaceListResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/workers/durable_objects/namespaces">client.accounts.workers.durableObjects.namespaces.<a href="./src/resources/accounts/workers/durable-objects/namespaces/namespaces.ts">list</a>(accountIdentifier) -> NamespaceListResponse</code>

##### Objects

Types:

- <code><a href="./src/resources/accounts/workers/durable-objects/namespaces/objects.ts">ObjectListResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/workers/durable_objects/namespaces/{id}/objects">client.accounts.workers.durableObjects.namespaces.objects.<a href="./src/resources/accounts/workers/durable-objects/namespaces/objects.ts">list</a>(accountIdentifier, id, { ...params }) -> ObjectListResponse</code>

### Queues

Types:

- <code><a href="./src/resources/accounts/workers/queues/queues.ts">QueueRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/workers/queues/queues.ts">QueueUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/workers/queues/queues.ts">QueueListResponse</a></code>
- <code><a href="./src/resources/accounts/workers/queues/queues.ts">QueueDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/workers/queues/queues.ts">QueueQueueCreateQueueResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/workers/queues/{name}">client.accounts.workers.queues.<a href="./src/resources/accounts/workers/queues/queues.ts">retrieve</a>(accountIdentifier, name) -> QueueRetrieveResponse</code>
- <code title="put /accounts/{account_identifier}/workers/queues/{name}">client.accounts.workers.queues.<a href="./src/resources/accounts/workers/queues/queues.ts">update</a>(accountIdentifier, name, { ...params }) -> QueueUpdateResponse</code>
- <code title="get /accounts/{account_identifier}/workers/queues">client.accounts.workers.queues.<a href="./src/resources/accounts/workers/queues/queues.ts">list</a>(accountIdentifier) -> QueueListResponse</code>
- <code title="delete /accounts/{account_identifier}/workers/queues/{name}">client.accounts.workers.queues.<a href="./src/resources/accounts/workers/queues/queues.ts">delete</a>(accountIdentifier, name) -> QueueDeleteResponse</code>
- <code title="post /accounts/{account_identifier}/workers/queues">client.accounts.workers.queues.<a href="./src/resources/accounts/workers/queues/queues.ts">queueCreateQueue</a>(accountIdentifier, { ...params }) -> QueueQueueCreateQueueResponse</code>

#### Consumers

Types:

- <code><a href="./src/resources/accounts/workers/queues/consumers.ts">ConsumerUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/workers/queues/consumers.ts">ConsumerListResponse</a></code>
- <code><a href="./src/resources/accounts/workers/queues/consumers.ts">ConsumerDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/workers/queues/consumers.ts">ConsumerQueueCreateQueueConsumerResponse</a></code>

Methods:

- <code title="put /accounts/{account_identifier}/workers/queues/{name}/consumers/{consumer_name}">client.accounts.workers.queues.consumers.<a href="./src/resources/accounts/workers/queues/consumers.ts">update</a>(accountIdentifier, name, consumerName, { ...params }) -> ConsumerUpdateResponse</code>
- <code title="get /accounts/{account_identifier}/workers/queues/{name}/consumers">client.accounts.workers.queues.consumers.<a href="./src/resources/accounts/workers/queues/consumers.ts">list</a>(accountIdentifier, name) -> ConsumerListResponse</code>
- <code title="delete /accounts/{account_identifier}/workers/queues/{name}/consumers/{consumer_name}">client.accounts.workers.queues.consumers.<a href="./src/resources/accounts/workers/queues/consumers.ts">delete</a>(accountIdentifier, name, consumerName) -> ConsumerDeleteResponse</code>
- <code title="post /accounts/{account_identifier}/workers/queues/{name}/consumers">client.accounts.workers.queues.consumers.<a href="./src/resources/accounts/workers/queues/consumers.ts">queueCreateQueueConsumer</a>(accountIdentifier, name, { ...params }) -> ConsumerQueueCreateQueueConsumerResponse</code>

### Scripts

Types:

- <code><a href="./src/resources/accounts/workers/scripts/scripts.ts">ScriptUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/workers/scripts/scripts.ts">ScriptWorkerScriptListWorkersResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/workers/scripts/{script_name}">client.accounts.workers.scripts.<a href="./src/resources/accounts/workers/scripts/scripts.ts">retrieve</a>(accountIdentifier, scriptName) -> Response</code>
- <code title="put /accounts/{account_identifier}/workers/scripts/{script_name}">client.accounts.workers.scripts.<a href="./src/resources/accounts/workers/scripts/scripts.ts">update</a>(accountIdentifier, scriptName, { ...params }) -> ScriptUpdateResponse</code>
- <code title="delete /accounts/{account_identifier}/workers/scripts/{script_name}">client.accounts.workers.scripts.<a href="./src/resources/accounts/workers/scripts/scripts.ts">delete</a>(accountIdentifier, scriptName, { ...params }) -> void</code>
- <code title="get /accounts/{account_identifier}/workers/scripts">client.accounts.workers.scripts.<a href="./src/resources/accounts/workers/scripts/scripts.ts">workerScriptListWorkers</a>(accountIdentifier) -> ScriptWorkerScriptListWorkersResponse</code>

#### Schedules

Types:

- <code><a href="./src/resources/accounts/workers/scripts/schedules.ts">ScheduleWorkerCronTriggerGetCronTriggersResponse</a></code>
- <code><a href="./src/resources/accounts/workers/scripts/schedules.ts">ScheduleWorkerCronTriggerUpdateCronTriggersResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/workers/scripts/{script_name}/schedules">client.accounts.workers.scripts.schedules.<a href="./src/resources/accounts/workers/scripts/schedules.ts">workerCronTriggerGetCronTriggers</a>(accountIdentifier, scriptName) -> ScheduleWorkerCronTriggerGetCronTriggersResponse</code>
- <code title="put /accounts/{account_identifier}/workers/scripts/{script_name}/schedules">client.accounts.workers.scripts.schedules.<a href="./src/resources/accounts/workers/scripts/schedules.ts">workerCronTriggerUpdateCronTriggers</a>(accountIdentifier, scriptName, { ...params }) -> ScheduleWorkerCronTriggerUpdateCronTriggersResponse</code>

#### Tails

Types:

- <code><a href="./src/resources/accounts/workers/scripts/tails.ts">TailDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/workers/scripts/tails.ts">TailWorkerTailLogsListTailsResponse</a></code>
- <code><a href="./src/resources/accounts/workers/scripts/tails.ts">TailWorkerTailLogsStartTailResponse</a></code>

Methods:

- <code title="delete /accounts/{account_identifier}/workers/scripts/{script_name}/tails/{id}">client.accounts.workers.scripts.tails.<a href="./src/resources/accounts/workers/scripts/tails.ts">delete</a>(accountIdentifier, scriptName, id) -> TailDeleteResponse</code>
- <code title="get /accounts/{account_identifier}/workers/scripts/{script_name}/tails">client.accounts.workers.scripts.tails.<a href="./src/resources/accounts/workers/scripts/tails.ts">workerTailLogsListTails</a>(accountIdentifier, scriptName) -> TailWorkerTailLogsListTailsResponse</code>
- <code title="post /accounts/{account_identifier}/workers/scripts/{script_name}/tails">client.accounts.workers.scripts.tails.<a href="./src/resources/accounts/workers/scripts/tails.ts">workerTailLogsStartTail</a>(accountIdentifier, scriptName) -> TailWorkerTailLogsStartTailResponse</code>

#### UsageModels

Types:

- <code><a href="./src/resources/accounts/workers/scripts/usage-models.ts">UsageModelWorkerScriptFetchUsageModelResponse</a></code>
- <code><a href="./src/resources/accounts/workers/scripts/usage-models.ts">UsageModelWorkerScriptUpdateUsageModelResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/workers/scripts/{script_name}/usage-model">client.accounts.workers.scripts.usageModels.<a href="./src/resources/accounts/workers/scripts/usage-models.ts">workerScriptFetchUsageModel</a>(accountIdentifier, scriptName) -> UsageModelWorkerScriptFetchUsageModelResponse</code>
- <code title="put /accounts/{account_identifier}/workers/scripts/{script_name}/usage-model">client.accounts.workers.scripts.usageModels.<a href="./src/resources/accounts/workers/scripts/usage-models.ts">workerScriptUpdateUsageModel</a>(accountIdentifier, scriptName, { ...params }) -> UsageModelWorkerScriptUpdateUsageModelResponse</code>

#### Content

Types:

- <code><a href="./src/resources/accounts/workers/scripts/content.ts">ContentUpdateResponse</a></code>

Methods:

- <code title="put /accounts/{account_identifier}/workers/scripts/{script_name}/content">client.accounts.workers.scripts.content.<a href="./src/resources/accounts/workers/scripts/content.ts">update</a>(accountIdentifier, scriptName, { ...params }) -> ContentUpdateResponse</code>

#### ContentV2

Methods:

- <code title="get /accounts/{account_identifier}/workers/scripts/{script_name}/content/v2">client.accounts.workers.scripts.contentV2.<a href="./src/resources/accounts/workers/scripts/content-v2.ts">list</a>(accountIdentifier, scriptName) -> Response</code>

#### Settings

Types:

- <code><a href="./src/resources/accounts/workers/scripts/settings.ts">SettingRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/workers/scripts/settings.ts">SettingUpdateResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/workers/scripts/{script_name}/settings">client.accounts.workers.scripts.settings.<a href="./src/resources/accounts/workers/scripts/settings.ts">retrieve</a>(accountIdentifier, scriptName) -> SettingRetrieveResponse</code>
- <code title="patch /accounts/{account_identifier}/workers/scripts/{script_name}/settings">client.accounts.workers.scripts.settings.<a href="./src/resources/accounts/workers/scripts/settings.ts">update</a>(accountIdentifier, scriptName, { ...params }) -> SettingUpdateResponse</code>

### Subdomains

Types:

- <code><a href="./src/resources/accounts/workers/subdomains.ts">SubdomainWorkerSubdomainCreateSubdomainResponse</a></code>
- <code><a href="./src/resources/accounts/workers/subdomains.ts">SubdomainWorkerSubdomainGetSubdomainResponse</a></code>

Methods:

- <code title="put /accounts/{account_identifier}/workers/subdomain">client.accounts.workers.subdomains.<a href="./src/resources/accounts/workers/subdomains.ts">workerSubdomainCreateSubdomain</a>(accountIdentifier, { ...params }) -> SubdomainWorkerSubdomainCreateSubdomainResponse</code>
- <code title="get /accounts/{account_identifier}/workers/subdomain">client.accounts.workers.subdomains.<a href="./src/resources/accounts/workers/subdomains.ts">workerSubdomainGetSubdomain</a>(accountIdentifier) -> SubdomainWorkerSubdomainGetSubdomainResponse</code>

### Dispatch

#### Namespaces

##### Scripts

Types:

- <code><a href="./src/resources/accounts/workers/dispatch/namespaces/scripts/scripts.ts">ScriptCreateResponse</a></code>
- <code><a href="./src/resources/accounts/workers/dispatch/namespaces/scripts/scripts.ts">ScriptRetrieveResponse</a></code>

Methods:

- <code title="put /accounts/{account_identifier}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}">client.accounts.workers.dispatch.namespaces.scripts.<a href="./src/resources/accounts/workers/dispatch/namespaces/scripts/scripts.ts">create</a>(accountIdentifier, dispatchNamespace, scriptName, { ...params }) -> ScriptCreateResponse</code>
- <code title="get /accounts/{account_identifier}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}">client.accounts.workers.dispatch.namespaces.scripts.<a href="./src/resources/accounts/workers/dispatch/namespaces/scripts/scripts.ts">retrieve</a>(accountIdentifier, dispatchNamespace, scriptName) -> ScriptRetrieveResponse</code>
- <code title="delete /accounts/{account_identifier}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}">client.accounts.workers.dispatch.namespaces.scripts.<a href="./src/resources/accounts/workers/dispatch/namespaces/scripts/scripts.ts">delete</a>(accountIdentifier, dispatchNamespace, scriptName, { ...params }) -> void</code>

###### Content

Types:

- <code><a href="./src/resources/accounts/workers/dispatch/namespaces/scripts/content.ts">ContentUpdateResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/content">client.accounts.workers.dispatch.namespaces.scripts.content.<a href="./src/resources/accounts/workers/dispatch/namespaces/scripts/content.ts">retrieve</a>(accountIdentifier, dispatchNamespace, scriptName) -> Response</code>
- <code title="put /accounts/{account_identifier}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/content">client.accounts.workers.dispatch.namespaces.scripts.content.<a href="./src/resources/accounts/workers/dispatch/namespaces/scripts/content.ts">update</a>(accountIdentifier, dispatchNamespace, scriptName, { ...params }) -> ContentUpdateResponse</code>

###### Settings

Types:

- <code><a href="./src/resources/accounts/workers/dispatch/namespaces/scripts/settings.ts">SettingRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/workers/dispatch/namespaces/scripts/settings.ts">SettingUpdateResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/settings">client.accounts.workers.dispatch.namespaces.scripts.settings.<a href="./src/resources/accounts/workers/dispatch/namespaces/scripts/settings.ts">retrieve</a>(accountIdentifier, dispatchNamespace, scriptName) -> SettingRetrieveResponse</code>
- <code title="patch /accounts/{account_identifier}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/settings">client.accounts.workers.dispatch.namespaces.scripts.settings.<a href="./src/resources/accounts/workers/dispatch/namespaces/scripts/settings.ts">update</a>(accountIdentifier, dispatchNamespace, scriptName, { ...params }) -> SettingUpdateResponse</code>

### Services

#### Environments

##### Content

Types:

- <code><a href="./src/resources/accounts/workers/services/environments/content.ts">ContentUpdateResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/workers/services/{service_name}/environments/{environment_name}/content">client.accounts.workers.services.environments.content.<a href="./src/resources/accounts/workers/services/environments/content.ts">retrieve</a>(accountIdentifier, serviceName, environmentName) -> Response</code>
- <code title="put /accounts/{account_identifier}/workers/services/{service_name}/environments/{environment_name}/content">client.accounts.workers.services.environments.content.<a href="./src/resources/accounts/workers/services/environments/content.ts">update</a>(accountIdentifier, serviceName, environmentName, { ...params }) -> ContentUpdateResponse</code>

##### Settings

Types:

- <code><a href="./src/resources/accounts/workers/services/environments/settings.ts">SettingRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/workers/services/environments/settings.ts">SettingUpdateResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/workers/services/{service_name}/environments/{environment_name}/settings">client.accounts.workers.services.environments.settings.<a href="./src/resources/accounts/workers/services/environments/settings.ts">retrieve</a>(accountIdentifier, serviceName, environmentName) -> SettingRetrieveResponse</code>
- <code title="patch /accounts/{account_identifier}/workers/services/{service_name}/environments/{environment_name}/settings">client.accounts.workers.services.environments.settings.<a href="./src/resources/accounts/workers/services/environments/settings.ts">update</a>(accountIdentifier, serviceName, environmentName, { ...params }) -> SettingUpdateResponse</code>

## Gateway

Types:

- <code><a href="./src/resources/accounts/gateway/gateway.ts">GatewayZeroTrustAccountsCreateZeroTrustAccountResponse</a></code>
- <code><a href="./src/resources/accounts/gateway/gateway.ts">GatewayZeroTrustAccountsGetZeroTrustAccountInformationResponse</a></code>

Methods:

- <code title="post /accounts/{identifier}/gateway">client.accounts.gateway.<a href="./src/resources/accounts/gateway/gateway.ts">zeroTrustAccountsCreateZeroTrustAccount</a>(identifier, { ...params }) -> GatewayZeroTrustAccountsCreateZeroTrustAccountResponse</code>
- <code title="get /accounts/{identifier}/gateway">client.accounts.gateway.<a href="./src/resources/accounts/gateway/gateway.ts">zeroTrustAccountsGetZeroTrustAccountInformation</a>(identifier) -> GatewayZeroTrustAccountsGetZeroTrustAccountInformationResponse</code>

### AuditSSHSettings

Types:

- <code><a href="./src/resources/accounts/gateway/audit-ssh-settings.ts">AuditSSHSettingRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/gateway/audit-ssh-settings.ts">AuditSSHSettingUpdateResponse</a></code>

Methods:

- <code title="get /accounts/{identifier}/gateway/audit_ssh_settings">client.accounts.gateway.auditSSHSettings.<a href="./src/resources/accounts/gateway/audit-ssh-settings.ts">retrieve</a>(identifier) -> AuditSSHSettingRetrieveResponse</code>
- <code title="put /accounts/{identifier}/gateway/audit_ssh_settings">client.accounts.gateway.auditSSHSettings.<a href="./src/resources/accounts/gateway/audit-ssh-settings.ts">update</a>(identifier, { ...params }) -> AuditSSHSettingUpdateResponse</code>

### Categories

Types:

- <code><a href="./src/resources/accounts/gateway/categories.ts">CategoryZeroTrustGatewayCategoriesListCategoriesResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/gateway/categories">client.accounts.gateway.categories.<a href="./src/resources/accounts/gateway/categories.ts">zeroTrustGatewayCategoriesListCategories</a>(accountId) -> CategoryZeroTrustGatewayCategoriesListCategoriesResponse</code>

### AppTypes

Types:

- <code><a href="./src/resources/accounts/gateway/app-types.ts">AppTypeZeroTrustGatewayApplicationAndApplicationTypeMappingsListApplicationAndApplicationTypeMappingsResponse</a></code>

Methods:

- <code title="get /accounts/{identifier}/gateway/app_types">client.accounts.gateway.appTypes.<a href="./src/resources/accounts/gateway/app-types.ts">zeroTrustGatewayApplicationAndApplicationTypeMappingsListApplicationAndApplicationTypeMappings</a>(identifier) -> AppTypeZeroTrustGatewayApplicationAndApplicationTypeMappingsListApplicationAndApplicationTypeMappingsResponse</code>

### Configurations

Types:

- <code><a href="./src/resources/accounts/gateway/configurations.ts">ConfigurationZeroTrustAccountsGetZeroTrustAccountConfigurationResponse</a></code>
- <code><a href="./src/resources/accounts/gateway/configurations.ts">ConfigurationZeroTrustAccountsPatchZeroTrustAccountConfigurationResponse</a></code>
- <code><a href="./src/resources/accounts/gateway/configurations.ts">ConfigurationZeroTrustAccountsUpdateZeroTrustAccountConfigurationResponse</a></code>

Methods:

- <code title="get /accounts/{identifier}/gateway/configuration">client.accounts.gateway.configurations.<a href="./src/resources/accounts/gateway/configurations.ts">zeroTrustAccountsGetZeroTrustAccountConfiguration</a>(identifier) -> ConfigurationZeroTrustAccountsGetZeroTrustAccountConfigurationResponse</code>
- <code title="patch /accounts/{identifier}/gateway/configuration">client.accounts.gateway.configurations.<a href="./src/resources/accounts/gateway/configurations.ts">zeroTrustAccountsPatchZeroTrustAccountConfiguration</a>(identifier, { ...params }) -> ConfigurationZeroTrustAccountsPatchZeroTrustAccountConfigurationResponse</code>
- <code title="put /accounts/{identifier}/gateway/configuration">client.accounts.gateway.configurations.<a href="./src/resources/accounts/gateway/configurations.ts">zeroTrustAccountsUpdateZeroTrustAccountConfiguration</a>(identifier, { ...params }) -> ConfigurationZeroTrustAccountsUpdateZeroTrustAccountConfigurationResponse</code>

### Lists

Types:

- <code><a href="./src/resources/accounts/gateway/lists/lists.ts">ListRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/gateway/lists/lists.ts">ListUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/gateway/lists/lists.ts">ListDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/gateway/lists/lists.ts">ListPatchResponse</a></code>
- <code><a href="./src/resources/accounts/gateway/lists/lists.ts">ListZeroTrustListsCreateZeroTrustListResponse</a></code>
- <code><a href="./src/resources/accounts/gateway/lists/lists.ts">ListZeroTrustListsListZeroTrustListsResponse</a></code>

Methods:

- <code title="get /accounts/{identifier}/gateway/lists/{uuid}">client.accounts.gateway.lists.<a href="./src/resources/accounts/gateway/lists/lists.ts">retrieve</a>(identifier, uuid) -> ListRetrieveResponse</code>
- <code title="put /accounts/{identifier}/gateway/lists/{uuid}">client.accounts.gateway.lists.<a href="./src/resources/accounts/gateway/lists/lists.ts">update</a>(identifier, uuid, { ...params }) -> ListUpdateResponse</code>
- <code title="delete /accounts/{identifier}/gateway/lists/{uuid}">client.accounts.gateway.lists.<a href="./src/resources/accounts/gateway/lists/lists.ts">delete</a>(identifier, uuid) -> ListDeleteResponse</code>
- <code title="patch /accounts/{identifier}/gateway/lists/{uuid}">client.accounts.gateway.lists.<a href="./src/resources/accounts/gateway/lists/lists.ts">patch</a>(identifier, uuid, { ...params }) -> ListPatchResponse</code>
- <code title="post /accounts/{identifier}/gateway/lists">client.accounts.gateway.lists.<a href="./src/resources/accounts/gateway/lists/lists.ts">zeroTrustListsCreateZeroTrustList</a>(identifier, { ...params }) -> ListZeroTrustListsCreateZeroTrustListResponse</code>
- <code title="get /accounts/{identifier}/gateway/lists">client.accounts.gateway.lists.<a href="./src/resources/accounts/gateway/lists/lists.ts">zeroTrustListsListZeroTrustLists</a>(identifier) -> ListZeroTrustListsListZeroTrustListsResponse</code>

#### Items

Types:

- <code><a href="./src/resources/accounts/gateway/lists/items.ts">ItemZeroTrustListsZeroTrustListItemsResponse</a></code>

Methods:

- <code title="get /accounts/{identifier}/gateway/lists/{uuid}/items">client.accounts.gateway.lists.items.<a href="./src/resources/accounts/gateway/lists/items.ts">zeroTrustListsZeroTrustListItems</a>(identifier, uuid) -> ItemZeroTrustListsZeroTrustListItemsResponse</code>

### Locations

Types:

- <code><a href="./src/resources/accounts/gateway/locations.ts">LocationRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/gateway/locations.ts">LocationUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/gateway/locations.ts">LocationDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/gateway/locations.ts">LocationZeroTrustGatewayLocationsCreateZeroTrustGatewayLocationResponse</a></code>
- <code><a href="./src/resources/accounts/gateway/locations.ts">LocationZeroTrustGatewayLocationsListZeroTrustGatewayLocationsResponse</a></code>

Methods:

- <code title="get /accounts/{identifier}/gateway/locations/{uuid}">client.accounts.gateway.locations.<a href="./src/resources/accounts/gateway/locations.ts">retrieve</a>(identifier, uuid) -> LocationRetrieveResponse</code>
- <code title="put /accounts/{identifier}/gateway/locations/{uuid}">client.accounts.gateway.locations.<a href="./src/resources/accounts/gateway/locations.ts">update</a>(identifier, uuid, { ...params }) -> LocationUpdateResponse</code>
- <code title="delete /accounts/{identifier}/gateway/locations/{uuid}">client.accounts.gateway.locations.<a href="./src/resources/accounts/gateway/locations.ts">delete</a>(identifier, uuid) -> LocationDeleteResponse</code>
- <code title="post /accounts/{identifier}/gateway/locations">client.accounts.gateway.locations.<a href="./src/resources/accounts/gateway/locations.ts">zeroTrustGatewayLocationsCreateZeroTrustGatewayLocation</a>(identifier, { ...params }) -> LocationZeroTrustGatewayLocationsCreateZeroTrustGatewayLocationResponse</code>
- <code title="get /accounts/{identifier}/gateway/locations">client.accounts.gateway.locations.<a href="./src/resources/accounts/gateway/locations.ts">zeroTrustGatewayLocationsListZeroTrustGatewayLocations</a>(identifier) -> LocationZeroTrustGatewayLocationsListZeroTrustGatewayLocationsResponse</code>

### Loggings

Types:

- <code><a href="./src/resources/accounts/gateway/loggings.ts">LoggingZeroTrustAccountsGetLoggingSettingsForTheZeroTrustAccountResponse</a></code>
- <code><a href="./src/resources/accounts/gateway/loggings.ts">LoggingZeroTrustAccountsUpdateLoggingSettingsForTheZeroTrustAccountResponse</a></code>

Methods:

- <code title="get /accounts/{identifier}/gateway/logging">client.accounts.gateway.loggings.<a href="./src/resources/accounts/gateway/loggings.ts">zeroTrustAccountsGetLoggingSettingsForTheZeroTrustAccount</a>(identifier) -> LoggingZeroTrustAccountsGetLoggingSettingsForTheZeroTrustAccountResponse</code>
- <code title="put /accounts/{identifier}/gateway/logging">client.accounts.gateway.loggings.<a href="./src/resources/accounts/gateway/loggings.ts">zeroTrustAccountsUpdateLoggingSettingsForTheZeroTrustAccount</a>(identifier, { ...params }) -> LoggingZeroTrustAccountsUpdateLoggingSettingsForTheZeroTrustAccountResponse</code>

### ProxyEndpoints

Types:

- <code><a href="./src/resources/accounts/gateway/proxy-endpoints.ts">ProxyEndpointRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/gateway/proxy-endpoints.ts">ProxyEndpointUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/gateway/proxy-endpoints.ts">ProxyEndpointDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/gateway/proxy-endpoints.ts">ProxyEndpointZeroTrustGatewayProxyEndpointsCreateProxyEndpointResponse</a></code>
- <code><a href="./src/resources/accounts/gateway/proxy-endpoints.ts">ProxyEndpointZeroTrustGatewayProxyEndpointsListProxyEndpointsResponse</a></code>

Methods:

- <code title="get /accounts/{identifier}/gateway/proxy_endpoints/{uuid}">client.accounts.gateway.proxyEndpoints.<a href="./src/resources/accounts/gateway/proxy-endpoints.ts">retrieve</a>(identifier, uuid) -> ProxyEndpointRetrieveResponse</code>
- <code title="patch /accounts/{identifier}/gateway/proxy_endpoints/{uuid}">client.accounts.gateway.proxyEndpoints.<a href="./src/resources/accounts/gateway/proxy-endpoints.ts">update</a>(identifier, uuid, { ...params }) -> ProxyEndpointUpdateResponse</code>
- <code title="delete /accounts/{identifier}/gateway/proxy_endpoints/{uuid}">client.accounts.gateway.proxyEndpoints.<a href="./src/resources/accounts/gateway/proxy-endpoints.ts">delete</a>(identifier, uuid) -> ProxyEndpointDeleteResponse</code>
- <code title="post /accounts/{identifier}/gateway/proxy_endpoints">client.accounts.gateway.proxyEndpoints.<a href="./src/resources/accounts/gateway/proxy-endpoints.ts">zeroTrustGatewayProxyEndpointsCreateProxyEndpoint</a>(identifier, { ...params }) -> ProxyEndpointZeroTrustGatewayProxyEndpointsCreateProxyEndpointResponse</code>
- <code title="get /accounts/{identifier}/gateway/proxy_endpoints">client.accounts.gateway.proxyEndpoints.<a href="./src/resources/accounts/gateway/proxy-endpoints.ts">zeroTrustGatewayProxyEndpointsListProxyEndpoints</a>(identifier) -> ProxyEndpointZeroTrustGatewayProxyEndpointsListProxyEndpointsResponse</code>

### Rules

Types:

- <code><a href="./src/resources/accounts/gateway/rules.ts">RuleRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/gateway/rules.ts">RuleUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/gateway/rules.ts">RuleDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/gateway/rules.ts">RuleZeroTrustGatewayRulesCreateZeroTrustGatewayRuleResponse</a></code>
- <code><a href="./src/resources/accounts/gateway/rules.ts">RuleZeroTrustGatewayRulesListZeroTrustGatewayRulesResponse</a></code>

Methods:

- <code title="get /accounts/{identifier}/gateway/rules/{uuid}">client.accounts.gateway.rules.<a href="./src/resources/accounts/gateway/rules.ts">retrieve</a>(identifier, uuid) -> RuleRetrieveResponse</code>
- <code title="put /accounts/{identifier}/gateway/rules/{uuid}">client.accounts.gateway.rules.<a href="./src/resources/accounts/gateway/rules.ts">update</a>(identifier, uuid, { ...params }) -> RuleUpdateResponse</code>
- <code title="delete /accounts/{identifier}/gateway/rules/{uuid}">client.accounts.gateway.rules.<a href="./src/resources/accounts/gateway/rules.ts">delete</a>(identifier, uuid) -> RuleDeleteResponse</code>
- <code title="post /accounts/{identifier}/gateway/rules">client.accounts.gateway.rules.<a href="./src/resources/accounts/gateway/rules.ts">zeroTrustGatewayRulesCreateZeroTrustGatewayRule</a>(identifier, { ...params }) -> RuleZeroTrustGatewayRulesCreateZeroTrustGatewayRuleResponse</code>
- <code title="get /accounts/{identifier}/gateway/rules">client.accounts.gateway.rules.<a href="./src/resources/accounts/gateway/rules.ts">zeroTrustGatewayRulesListZeroTrustGatewayRules</a>(identifier) -> RuleZeroTrustGatewayRulesListZeroTrustGatewayRulesResponse</code>

## Rulesets

Types:

- <code><a href="./src/resources/accounts/rulesets/rulesets.ts">RulesetRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/rulesets/rulesets.ts">RulesetUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/rulesets/rulesets.ts">RulesetAccountRulesetsCreateAnAccountRulesetResponse</a></code>
- <code><a href="./src/resources/accounts/rulesets/rulesets.ts">RulesetAccountRulesetsListAccountRulesetsResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/rulesets/{ruleset_id}">client.accounts.rulesets.<a href="./src/resources/accounts/rulesets/rulesets.ts">retrieve</a>(accountId, rulesetId) -> RulesetRetrieveResponse</code>
- <code title="put /accounts/{account_id}/rulesets/{ruleset_id}">client.accounts.rulesets.<a href="./src/resources/accounts/rulesets/rulesets.ts">update</a>(accountId, rulesetId, { ...params }) -> RulesetUpdateResponse</code>
- <code title="delete /accounts/{account_id}/rulesets/{ruleset_id}">client.accounts.rulesets.<a href="./src/resources/accounts/rulesets/rulesets.ts">delete</a>(accountId, rulesetId) -> void</code>
- <code title="post /accounts/{account_id}/rulesets">client.accounts.rulesets.<a href="./src/resources/accounts/rulesets/rulesets.ts">accountRulesetsCreateAnAccountRuleset</a>(accountId, { ...params }) -> RulesetAccountRulesetsCreateAnAccountRulesetResponse</code>
- <code title="get /accounts/{account_id}/rulesets">client.accounts.rulesets.<a href="./src/resources/accounts/rulesets/rulesets.ts">accountRulesetsListAccountRulesets</a>(accountId) -> RulesetAccountRulesetsListAccountRulesetsResponse</code>

### Phases

#### Entrypoints

Types:

- <code><a href="./src/resources/accounts/rulesets/phases/entrypoints/entrypoints.ts">EntrypointAccountRulesetsGetAnAccountEntryPointRulesetResponse</a></code>
- <code><a href="./src/resources/accounts/rulesets/phases/entrypoints/entrypoints.ts">EntrypointAccountRulesetsUpdateAnAccountEntryPointRulesetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/rulesets/phases/{ruleset_phase}/entrypoint">client.accounts.rulesets.phases.entrypoints.<a href="./src/resources/accounts/rulesets/phases/entrypoints/entrypoints.ts">accountRulesetsGetAnAccountEntryPointRuleset</a>(accountId, rulesetPhase) -> EntrypointAccountRulesetsGetAnAccountEntryPointRulesetResponse</code>
- <code title="put /accounts/{account_id}/rulesets/phases/{ruleset_phase}/entrypoint">client.accounts.rulesets.phases.entrypoints.<a href="./src/resources/accounts/rulesets/phases/entrypoints/entrypoints.ts">accountRulesetsUpdateAnAccountEntryPointRuleset</a>(accountId, rulesetPhase, { ...params }) -> EntrypointAccountRulesetsUpdateAnAccountEntryPointRulesetResponse</code>

##### Versions

Types:

- <code><a href="./src/resources/accounts/rulesets/phases/entrypoints/versions.ts">VersionRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/rulesets/phases/entrypoints/versions.ts">VersionAccountRulesetsListAnAccountEntryPointRulesetSVersionsResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/rulesets/phases/{ruleset_phase}/entrypoint/versions/{ruleset_version}">client.accounts.rulesets.phases.entrypoints.versions.<a href="./src/resources/accounts/rulesets/phases/entrypoints/versions.ts">retrieve</a>(accountId, rulesetPhase, rulesetVersion) -> VersionRetrieveResponse</code>
- <code title="get /accounts/{account_id}/rulesets/phases/{ruleset_phase}/entrypoint/versions">client.accounts.rulesets.phases.entrypoints.versions.<a href="./src/resources/accounts/rulesets/phases/entrypoints/versions.ts">accountRulesetsListAnAccountEntryPointRulesetSVersions</a>(accountId, rulesetPhase) -> VersionAccountRulesetsListAnAccountEntryPointRulesetSVersionsResponse</code>

### Rules

Types:

- <code><a href="./src/resources/accounts/rulesets/rules.ts">RuleUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/rulesets/rules.ts">RuleDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/rulesets/rules.ts">RuleAccountRulesetsCreateAnAccountRulesetRuleResponse</a></code>

Methods:

- <code title="patch /accounts/{account_id}/rulesets/{ruleset_id}/rules/{rule_id}">client.accounts.rulesets.rules.<a href="./src/resources/accounts/rulesets/rules.ts">update</a>(accountId, rulesetId, ruleId, { ...params }) -> RuleUpdateResponse</code>
- <code title="delete /accounts/{account_id}/rulesets/{ruleset_id}/rules/{rule_id}">client.accounts.rulesets.rules.<a href="./src/resources/accounts/rulesets/rules.ts">delete</a>(accountId, rulesetId, ruleId) -> RuleDeleteResponse</code>
- <code title="post /accounts/{account_id}/rulesets/{ruleset_id}/rules">client.accounts.rulesets.rules.<a href="./src/resources/accounts/rulesets/rules.ts">accountRulesetsCreateAnAccountRulesetRule</a>(accountId, rulesetId, { ...params }) -> RuleAccountRulesetsCreateAnAccountRulesetRuleResponse</code>

### Versions

Types:

- <code><a href="./src/resources/accounts/rulesets/versions/versions.ts">VersionRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/rulesets/versions/versions.ts">VersionAccountRulesetsListAnAccountRulesetSVersionsResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/rulesets/{ruleset_id}/versions/{ruleset_version}">client.accounts.rulesets.versions.<a href="./src/resources/accounts/rulesets/versions/versions.ts">retrieve</a>(accountId, rulesetId, rulesetVersion) -> VersionRetrieveResponse</code>
- <code title="delete /accounts/{account_id}/rulesets/{ruleset_id}/versions/{ruleset_version}">client.accounts.rulesets.versions.<a href="./src/resources/accounts/rulesets/versions/versions.ts">delete</a>(accountId, rulesetId, rulesetVersion) -> void</code>
- <code title="get /accounts/{account_id}/rulesets/{ruleset_id}/versions">client.accounts.rulesets.versions.<a href="./src/resources/accounts/rulesets/versions/versions.ts">accountRulesetsListAnAccountRulesetSVersions</a>(accountId, rulesetId) -> VersionAccountRulesetsListAnAccountRulesetSVersionsResponse</code>

#### ByTags

Types:

- <code><a href="./src/resources/accounts/rulesets/versions/by-tags.ts">ByTagRetrieveResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/rulesets/{ruleset_id}/versions/{ruleset_version}/by_tag/{rule_tag}">client.accounts.rulesets.versions.byTags.<a href="./src/resources/accounts/rulesets/versions/by-tags.ts">retrieve</a>(accountId, rulesetId, rulesetVersion, ruleTag) -> ByTagRetrieveResponse</code>

## Access

### Bookmarks

Types:

- <code><a href="./src/resources/accounts/access/bookmarks.ts">BookmarkCreateResponse</a></code>
- <code><a href="./src/resources/accounts/access/bookmarks.ts">BookmarkRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/access/bookmarks.ts">BookmarkUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/access/bookmarks.ts">BookmarkDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/access/bookmarks.ts">BookmarkAccessBookmarkApplicationsDeprecatedListBookmarkApplicationsResponse</a></code>

Methods:

- <code title="post /accounts/{identifier}/access/bookmarks/{uuid}">client.accounts.access.bookmarks.<a href="./src/resources/accounts/access/bookmarks.ts">create</a>(identifier, uuid) -> BookmarkCreateResponse</code>
- <code title="get /accounts/{identifier}/access/bookmarks/{uuid}">client.accounts.access.bookmarks.<a href="./src/resources/accounts/access/bookmarks.ts">retrieve</a>(identifier, uuid) -> BookmarkRetrieveResponse</code>
- <code title="put /accounts/{identifier}/access/bookmarks/{uuid}">client.accounts.access.bookmarks.<a href="./src/resources/accounts/access/bookmarks.ts">update</a>(identifier, uuid) -> BookmarkUpdateResponse</code>
- <code title="delete /accounts/{identifier}/access/bookmarks/{uuid}">client.accounts.access.bookmarks.<a href="./src/resources/accounts/access/bookmarks.ts">delete</a>(identifier, uuid) -> BookmarkDeleteResponse</code>
- <code title="get /accounts/{identifier}/access/bookmarks">client.accounts.access.bookmarks.<a href="./src/resources/accounts/access/bookmarks.ts">accessBookmarkApplicationsDeprecatedListBookmarkApplications</a>(identifier) -> BookmarkAccessBookmarkApplicationsDeprecatedListBookmarkApplicationsResponse</code>

### Certificates

Types:

- <code><a href="./src/resources/accounts/access/certificates/certificates.ts">CertificateRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/access/certificates/certificates.ts">CertificateUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/access/certificates/certificates.ts">CertificateDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/access/certificates/certificates.ts">CertificateAccessMTlsAuthenticationAddAnMTlsCertificateResponse</a></code>
- <code><a href="./src/resources/accounts/access/certificates/certificates.ts">CertificateAccessMTlsAuthenticationListMTlsCertificatesResponse</a></code>

Methods:

- <code title="get /accounts/{identifier}/access/certificates/{uuid}">client.accounts.access.certificates.<a href="./src/resources/accounts/access/certificates/certificates.ts">retrieve</a>(identifier, uuid) -> CertificateRetrieveResponse</code>
- <code title="put /accounts/{identifier}/access/certificates/{uuid}">client.accounts.access.certificates.<a href="./src/resources/accounts/access/certificates/certificates.ts">update</a>(identifier, uuid, { ...params }) -> CertificateUpdateResponse</code>
- <code title="delete /accounts/{identifier}/access/certificates/{uuid}">client.accounts.access.certificates.<a href="./src/resources/accounts/access/certificates/certificates.ts">delete</a>(identifier, uuid) -> CertificateDeleteResponse</code>
- <code title="post /accounts/{identifier}/access/certificates">client.accounts.access.certificates.<a href="./src/resources/accounts/access/certificates/certificates.ts">accessMTlsAuthenticationAddAnMTlsCertificate</a>(identifier, { ...params }) -> CertificateAccessMTlsAuthenticationAddAnMTlsCertificateResponse</code>
- <code title="get /accounts/{identifier}/access/certificates">client.accounts.access.certificates.<a href="./src/resources/accounts/access/certificates/certificates.ts">accessMTlsAuthenticationListMTlsCertificates</a>(identifier) -> CertificateAccessMTlsAuthenticationListMTlsCertificatesResponse</code>

#### Settings

Types:

- <code><a href="./src/resources/accounts/access/certificates/settings.ts">SettingUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/access/certificates/settings.ts">SettingListResponse</a></code>

Methods:

- <code title="put /zones/{identifier}/access/certificates/settings">client.accounts.access.certificates.settings.<a href="./src/resources/accounts/access/certificates/settings.ts">update</a>(identifier, { ...params }) -> SettingUpdateResponse</code>
- <code title="get /accounts/{identifier}/access/certificates/settings">client.accounts.access.certificates.settings.<a href="./src/resources/accounts/access/certificates/settings.ts">list</a>(identifier) -> SettingListResponse</code>

### CustomPages

Types:

- <code><a href="./src/resources/accounts/access/custom-pages.ts">CustomPageCreateResponse</a></code>
- <code><a href="./src/resources/accounts/access/custom-pages.ts">CustomPageListResponse</a></code>
- <code><a href="./src/resources/accounts/access/custom-pages.ts">CustomPageDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/access/custom-pages.ts">CustomPageRetrieveCustomPageResponse</a></code>
- <code><a href="./src/resources/accounts/access/custom-pages.ts">CustomPageUpdateCustomPageResponse</a></code>

Methods:

- <code title="post /accounts/{identifier}/access/custom_pages">client.accounts.access.customPages.<a href="./src/resources/accounts/access/custom-pages.ts">create</a>(identifier, { ...params }) -> CustomPageCreateResponse</code>
- <code title="get /accounts/{identifier}/access/custom_pages">client.accounts.access.customPages.<a href="./src/resources/accounts/access/custom-pages.ts">list</a>(identifier) -> CustomPageListResponse</code>
- <code title="delete /accounts/{identifier}/access/custom_pages/{uuid}">client.accounts.access.customPages.<a href="./src/resources/accounts/access/custom-pages.ts">delete</a>(identifier, uuid) -> CustomPageDeleteResponse</code>
- <code title="get /accounts/{identifier}/access/custom_pages/{uuid}">client.accounts.access.customPages.<a href="./src/resources/accounts/access/custom-pages.ts">retrieveCustomPage</a>(identifier, uuid) -> CustomPageRetrieveCustomPageResponse</code>
- <code title="put /accounts/{identifier}/access/custom_pages/{uuid}">client.accounts.access.customPages.<a href="./src/resources/accounts/access/custom-pages.ts">updateCustomPage</a>(identifier, uuid, { ...params }) -> CustomPageUpdateCustomPageResponse</code>

### Groups

Types:

- <code><a href="./src/resources/accounts/access/groups.ts">GroupRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/access/groups.ts">GroupUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/access/groups.ts">GroupDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/access/groups.ts">GroupAccessGroupsCreateAnAccessGroupResponse</a></code>
- <code><a href="./src/resources/accounts/access/groups.ts">GroupAccessGroupsListAccessGroupsResponse</a></code>

Methods:

- <code title="get /accounts/{identifier}/access/groups/{uuid}">client.accounts.access.groups.<a href="./src/resources/accounts/access/groups.ts">retrieve</a>(identifier, uuid) -> GroupRetrieveResponse</code>
- <code title="put /accounts/{identifier}/access/groups/{uuid}">client.accounts.access.groups.<a href="./src/resources/accounts/access/groups.ts">update</a>(identifier, uuid, { ...params }) -> GroupUpdateResponse</code>
- <code title="delete /accounts/{identifier}/access/groups/{uuid}">client.accounts.access.groups.<a href="./src/resources/accounts/access/groups.ts">delete</a>(identifier, uuid) -> GroupDeleteResponse</code>
- <code title="post /accounts/{identifier}/access/groups">client.accounts.access.groups.<a href="./src/resources/accounts/access/groups.ts">accessGroupsCreateAnAccessGroup</a>(identifier, { ...params }) -> GroupAccessGroupsCreateAnAccessGroupResponse</code>
- <code title="get /accounts/{identifier}/access/groups">client.accounts.access.groups.<a href="./src/resources/accounts/access/groups.ts">accessGroupsListAccessGroups</a>(identifier) -> GroupAccessGroupsListAccessGroupsResponse</code>

### IdentityProviders

Types:

- <code><a href="./src/resources/accounts/access/identity-providers.ts">IdentityProviderRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/access/identity-providers.ts">IdentityProviderUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/access/identity-providers.ts">IdentityProviderDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/access/identity-providers.ts">IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderResponse</a></code>
- <code><a href="./src/resources/accounts/access/identity-providers.ts">IdentityProviderAccessIdentityProvidersListAccessIdentityProvidersResponse</a></code>

Methods:

- <code title="get /accounts/{identifier}/access/identity_providers/{uuid}">client.accounts.access.identityProviders.<a href="./src/resources/accounts/access/identity-providers.ts">retrieve</a>(identifier, uuid) -> IdentityProviderRetrieveResponse</code>
- <code title="put /accounts/{identifier}/access/identity_providers/{uuid}">client.accounts.access.identityProviders.<a href="./src/resources/accounts/access/identity-providers.ts">update</a>(identifier, uuid, { ...params }) -> IdentityProviderUpdateResponse</code>
- <code title="delete /accounts/{identifier}/access/identity_providers/{uuid}">client.accounts.access.identityProviders.<a href="./src/resources/accounts/access/identity-providers.ts">delete</a>(identifier, uuid) -> IdentityProviderDeleteResponse</code>
- <code title="post /accounts/{identifier}/access/identity_providers">client.accounts.access.identityProviders.<a href="./src/resources/accounts/access/identity-providers.ts">accessIdentityProvidersAddAnAccessIdentityProvider</a>(identifier, { ...params }) -> IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderResponse</code>
- <code title="get /accounts/{identifier}/access/identity_providers">client.accounts.access.identityProviders.<a href="./src/resources/accounts/access/identity-providers.ts">accessIdentityProvidersListAccessIdentityProviders</a>(identifier) -> IdentityProviderAccessIdentityProvidersListAccessIdentityProvidersResponse</code>

### Keys

Types:

- <code><a href="./src/resources/accounts/access/keys/keys.ts">KeyAccessKeyConfigurationGetTheAccessKeyConfigurationResponse</a></code>
- <code><a href="./src/resources/accounts/access/keys/keys.ts">KeyAccessKeyConfigurationUpdateTheAccessKeyConfigurationResponse</a></code>

Methods:

- <code title="get /accounts/{identifier}/access/keys">client.accounts.access.keys.<a href="./src/resources/accounts/access/keys/keys.ts">accessKeyConfigurationGetTheAccessKeyConfiguration</a>(identifier) -> KeyAccessKeyConfigurationGetTheAccessKeyConfigurationResponse</code>
- <code title="put /accounts/{identifier}/access/keys">client.accounts.access.keys.<a href="./src/resources/accounts/access/keys/keys.ts">accessKeyConfigurationUpdateTheAccessKeyConfiguration</a>(identifier, { ...params }) -> KeyAccessKeyConfigurationUpdateTheAccessKeyConfigurationResponse</code>

#### Rotates

Types:

- <code><a href="./src/resources/accounts/access/keys/rotates.ts">RotateAccessKeyConfigurationRotateAccessKeysResponse</a></code>

Methods:

- <code title="post /accounts/{identifier}/access/keys/rotate">client.accounts.access.keys.rotates.<a href="./src/resources/accounts/access/keys/rotates.ts">accessKeyConfigurationRotateAccessKeys</a>(identifier) -> RotateAccessKeyConfigurationRotateAccessKeysResponse</code>

### Logs

#### AccessRequests

Types:

- <code><a href="./src/resources/accounts/access/logs/access-requests.ts">AccessRequestAccessAuthenticationLogsGetAccessAuthenticationLogsResponse</a></code>

Methods:

- <code title="get /accounts/{identifier}/access/logs/access_requests">client.accounts.access.logs.accessRequests.<a href="./src/resources/accounts/access/logs/access-requests.ts">accessAuthenticationLogsGetAccessAuthenticationLogs</a>(identifier) -> AccessRequestAccessAuthenticationLogsGetAccessAuthenticationLogsResponse</code>

### Organizations

Types:

- <code><a href="./src/resources/accounts/access/organizations/organizations.ts">OrganizationZeroTrustOrganizationCreateYourZeroTrustOrganizationResponse</a></code>
- <code><a href="./src/resources/accounts/access/organizations/organizations.ts">OrganizationZeroTrustOrganizationGetYourZeroTrustOrganizationResponse</a></code>
- <code><a href="./src/resources/accounts/access/organizations/organizations.ts">OrganizationZeroTrustOrganizationUpdateYourZeroTrustOrganizationResponse</a></code>

Methods:

- <code title="post /accounts/{identifier}/access/organizations">client.accounts.access.organizations.<a href="./src/resources/accounts/access/organizations/organizations.ts">zeroTrustOrganizationCreateYourZeroTrustOrganization</a>(identifier, { ...params }) -> OrganizationZeroTrustOrganizationCreateYourZeroTrustOrganizationResponse</code>
- <code title="get /accounts/{identifier}/access/organizations">client.accounts.access.organizations.<a href="./src/resources/accounts/access/organizations/organizations.ts">zeroTrustOrganizationGetYourZeroTrustOrganization</a>(identifier) -> OrganizationZeroTrustOrganizationGetYourZeroTrustOrganizationResponse</code>
- <code title="put /accounts/{identifier}/access/organizations">client.accounts.access.organizations.<a href="./src/resources/accounts/access/organizations/organizations.ts">zeroTrustOrganizationUpdateYourZeroTrustOrganization</a>(identifier, { ...params }) -> OrganizationZeroTrustOrganizationUpdateYourZeroTrustOrganizationResponse</code>

#### RevokeUsers

Types:

- <code><a href="./src/resources/accounts/access/organizations/revoke-users.ts">RevokeUserZeroTrustOrganizationRevokeAllAccessTokensForAUserResponse</a></code>

Methods:

- <code title="post /accounts/{identifier}/access/organizations/revoke_user">client.accounts.access.organizations.revokeUsers.<a href="./src/resources/accounts/access/organizations/revoke-users.ts">zeroTrustOrganizationRevokeAllAccessTokensForAUser</a>(identifier, { ...params }) -> RevokeUserZeroTrustOrganizationRevokeAllAccessTokensForAUserResponse</code>

### Seats

Types:

- <code><a href="./src/resources/accounts/access/seats.ts">SeatZeroTrustSeatsUpdateAUserSeatResponse</a></code>

Methods:

- <code title="patch /accounts/{identifier}/access/seats">client.accounts.access.seats.<a href="./src/resources/accounts/access/seats.ts">zeroTrustSeatsUpdateAUserSeat</a>(identifier, [ ...body ]) -> SeatZeroTrustSeatsUpdateAUserSeatResponse</code>

### ServiceTokens

Types:

- <code><a href="./src/resources/accounts/access/service-tokens/service-tokens.ts">ServiceTokenUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/access/service-tokens/service-tokens.ts">ServiceTokenDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/access/service-tokens/service-tokens.ts">ServiceTokenAccessServiceTokensCreateAServiceTokenResponse</a></code>
- <code><a href="./src/resources/accounts/access/service-tokens/service-tokens.ts">ServiceTokenAccessServiceTokensListServiceTokensResponse</a></code>

Methods:

- <code title="put /accounts/{identifier}/access/service_tokens/{uuid}">client.accounts.access.serviceTokens.<a href="./src/resources/accounts/access/service-tokens/service-tokens.ts">update</a>(identifier, uuid, { ...params }) -> ServiceTokenUpdateResponse</code>
- <code title="delete /accounts/{identifier}/access/service_tokens/{uuid}">client.accounts.access.serviceTokens.<a href="./src/resources/accounts/access/service-tokens/service-tokens.ts">delete</a>(identifier, uuid) -> ServiceTokenDeleteResponse</code>
- <code title="post /accounts/{identifier}/access/service_tokens">client.accounts.access.serviceTokens.<a href="./src/resources/accounts/access/service-tokens/service-tokens.ts">accessServiceTokensCreateAServiceToken</a>(identifier, { ...params }) -> ServiceTokenAccessServiceTokensCreateAServiceTokenResponse</code>
- <code title="get /accounts/{identifier}/access/service_tokens">client.accounts.access.serviceTokens.<a href="./src/resources/accounts/access/service-tokens/service-tokens.ts">accessServiceTokensListServiceTokens</a>(identifier) -> ServiceTokenAccessServiceTokensListServiceTokensResponse</code>

#### Refreshes

Types:

- <code><a href="./src/resources/accounts/access/service-tokens/refreshes.ts">RefreshAccessServiceTokensRefreshAServiceTokenResponse</a></code>

Methods:

- <code title="post /accounts/{identifier}/access/service_tokens/{uuid}/refresh">client.accounts.access.serviceTokens.refreshes.<a href="./src/resources/accounts/access/service-tokens/refreshes.ts">accessServiceTokensRefreshAServiceToken</a>(identifier, uuid) -> RefreshAccessServiceTokensRefreshAServiceTokenResponse</code>

#### Rotates

Types:

- <code><a href="./src/resources/accounts/access/service-tokens/rotates.ts">RotateAccessServiceTokensRotateAServiceTokenResponse</a></code>

Methods:

- <code title="post /accounts/{identifier}/access/service_tokens/{uuid}/rotate">client.accounts.access.serviceTokens.rotates.<a href="./src/resources/accounts/access/service-tokens/rotates.ts">accessServiceTokensRotateAServiceToken</a>(identifier, uuid) -> RotateAccessServiceTokensRotateAServiceTokenResponse</code>

### Tags

Types:

- <code><a href="./src/resources/accounts/access/tags.ts">TagCreateTagResponse</a></code>
- <code><a href="./src/resources/accounts/access/tags.ts">TagDeleteTagResponse</a></code>
- <code><a href="./src/resources/accounts/access/tags.ts">TagGetTagResponse</a></code>
- <code><a href="./src/resources/accounts/access/tags.ts">TagListTagsResponse</a></code>
- <code><a href="./src/resources/accounts/access/tags.ts">TagUpdateTagResponse</a></code>

Methods:

- <code title="post /accounts/{identifier}/access/tags">client.accounts.access.tags.<a href="./src/resources/accounts/access/tags.ts">createTag</a>(identifier, { ...params }) -> TagCreateTagResponse</code>
- <code title="delete /accounts/{identifier}/access/tags/{name}">client.accounts.access.tags.<a href="./src/resources/accounts/access/tags.ts">deleteTag</a>(identifier, name) -> TagDeleteTagResponse</code>
- <code title="get /accounts/{identifier}/access/tags/{name}">client.accounts.access.tags.<a href="./src/resources/accounts/access/tags.ts">getTag</a>(identifier, name) -> TagGetTagResponse</code>
- <code title="get /accounts/{identifier}/access/tags">client.accounts.access.tags.<a href="./src/resources/accounts/access/tags.ts">listTags</a>(identifier) -> TagListTagsResponse</code>
- <code title="put /accounts/{identifier}/access/tags/{name}">client.accounts.access.tags.<a href="./src/resources/accounts/access/tags.ts">updateTag</a>(identifier, { ...params }) -> TagUpdateTagResponse</code>

### Users

Types:

- <code><a href="./src/resources/accounts/access/users/users.ts">UserZeroTrustUsersGetUsersResponse</a></code>

Methods:

- <code title="get /accounts/{identifier}/access/users">client.accounts.access.users.<a href="./src/resources/accounts/access/users/users.ts">zeroTrustUsersGetUsers</a>(identifier) -> UserZeroTrustUsersGetUsersResponse</code>

#### ActiveSessions

Types:

- <code><a href="./src/resources/accounts/access/users/active-sessions.ts">ActiveSessionListResponse</a></code>
- <code><a href="./src/resources/accounts/access/users/active-sessions.ts">ActiveSessionRetrieveActiveSessionResponse</a></code>

Methods:

- <code title="get /accounts/{identifier}/access/users/{id}/active_sessions">client.accounts.access.users.activeSessions.<a href="./src/resources/accounts/access/users/active-sessions.ts">list</a>(identifier, id) -> ActiveSessionListResponse</code>
- <code title="get /accounts/{identifier}/access/users/{id}/active_sessions/{nonce}">client.accounts.access.users.activeSessions.<a href="./src/resources/accounts/access/users/active-sessions.ts">retrieveActiveSession</a>(identifier, id, nonce) -> ActiveSessionRetrieveActiveSessionResponse</code>

#### LastSeenIdentity

Types:

- <code><a href="./src/resources/accounts/access/users/last-seen-identity.ts">LastSeenIdentityRetrieveResponse</a></code>

Methods:

- <code title="get /accounts/{identifier}/access/users/{id}/last_seen_identity">client.accounts.access.users.lastSeenIdentity.<a href="./src/resources/accounts/access/users/last-seen-identity.ts">retrieve</a>(identifier, id) -> LastSeenIdentityRetrieveResponse</code>

#### FailedLogins

Types:

- <code><a href="./src/resources/accounts/access/users/failed-logins.ts">FailedLoginZeroTrustUsersGetFailedLoginsResponse</a></code>

Methods:

- <code title="get /accounts/{identifier}/access/users/{id}/failed_logins">client.accounts.access.users.failedLogins.<a href="./src/resources/accounts/access/users/failed-logins.ts">zeroTrustUsersGetFailedLogins</a>(identifier, id) -> FailedLoginZeroTrustUsersGetFailedLoginsResponse</code>

## Alerting

### V3

#### AvailableAlerts

Types:

- <code><a href="./src/resources/accounts/alerting/v3/available-alerts.ts">AvailableAlertListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/alerting/v3/available_alerts">client.accounts.alerting.v3.availableAlerts.<a href="./src/resources/accounts/alerting/v3/available-alerts.ts">list</a>(accountId) -> AvailableAlertListResponse</code>

#### Destinations

##### Eligible

Types:

- <code><a href="./src/resources/accounts/alerting/v3/destinations/eligible.ts">EligibleListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/alerting/v3/destinations/eligible">client.accounts.alerting.v3.destinations.eligible.<a href="./src/resources/accounts/alerting/v3/destinations/eligible.ts">list</a>(accountId) -> EligibleListResponse</code>

##### Pagerduty

Types:

- <code><a href="./src/resources/accounts/alerting/v3/destinations/pagerduty.ts">PagerdutyListResponse</a></code>
- <code><a href="./src/resources/accounts/alerting/v3/destinations/pagerduty.ts">PagerdutyDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/alerting/v3/destinations/pagerduty.ts">PagerdutyConnectResponse</a></code>
- <code><a href="./src/resources/accounts/alerting/v3/destinations/pagerduty.ts">PagerdutyLinkResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/alerting/v3/destinations/pagerduty">client.accounts.alerting.v3.destinations.pagerduty.<a href="./src/resources/accounts/alerting/v3/destinations/pagerduty.ts">list</a>(accountId) -> PagerdutyListResponse</code>
- <code title="delete /accounts/{account_id}/alerting/v3/destinations/pagerduty">client.accounts.alerting.v3.destinations.pagerduty.<a href="./src/resources/accounts/alerting/v3/destinations/pagerduty.ts">delete</a>(accountId) -> PagerdutyDeleteResponse</code>
- <code title="post /accounts/{account_id}/alerting/v3/destinations/pagerduty/connect">client.accounts.alerting.v3.destinations.pagerduty.<a href="./src/resources/accounts/alerting/v3/destinations/pagerduty.ts">connect</a>(accountId) -> PagerdutyConnectResponse</code>
- <code title="get /accounts/{account_id}/alerting/v3/destinations/pagerduty/connect/{token_id}">client.accounts.alerting.v3.destinations.pagerduty.<a href="./src/resources/accounts/alerting/v3/destinations/pagerduty.ts">link</a>(accountId, tokenId) -> PagerdutyLinkResponse</code>

##### Webhooks

Types:

- <code><a href="./src/resources/accounts/alerting/v3/destinations/webhooks.ts">WebhookCreateResponse</a></code>
- <code><a href="./src/resources/accounts/alerting/v3/destinations/webhooks.ts">WebhookRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/alerting/v3/destinations/webhooks.ts">WebhookListResponse</a></code>
- <code><a href="./src/resources/accounts/alerting/v3/destinations/webhooks.ts">WebhookDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/alerting/v3/destinations/webhooks">client.accounts.alerting.v3.destinations.webhooks.<a href="./src/resources/accounts/alerting/v3/destinations/webhooks.ts">create</a>(accountId, { ...params }) -> WebhookCreateResponse</code>
- <code title="get /accounts/{account_id}/alerting/v3/destinations/webhooks/{webhook_id}">client.accounts.alerting.v3.destinations.webhooks.<a href="./src/resources/accounts/alerting/v3/destinations/webhooks.ts">retrieve</a>(accountId, webhookId) -> WebhookRetrieveResponse</code>
- <code title="get /accounts/{account_id}/alerting/v3/destinations/webhooks">client.accounts.alerting.v3.destinations.webhooks.<a href="./src/resources/accounts/alerting/v3/destinations/webhooks.ts">list</a>(accountId) -> WebhookListResponse</code>
- <code title="delete /accounts/{account_id}/alerting/v3/destinations/webhooks/{webhook_id}">client.accounts.alerting.v3.destinations.webhooks.<a href="./src/resources/accounts/alerting/v3/destinations/webhooks.ts">delete</a>(accountId, webhookId) -> WebhookDeleteResponse</code>

## CustomNs

Types:

- <code><a href="./src/resources/accounts/custom-ns/custom-ns.ts">CustomNDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/custom-ns/custom-ns.ts">CustomNAccountLevelCustomNameserversAddAccountCustomNameserverResponse</a></code>
- <code><a href="./src/resources/accounts/custom-ns/custom-ns.ts">CustomNAccountLevelCustomNameserversListAccountCustomNameserversResponse</a></code>

Methods:

- <code title="delete /accounts/{identifier}/custom_ns/{ns_name}">client.accounts.customNs.<a href="./src/resources/accounts/custom-ns/custom-ns.ts">delete</a>(identifier, nsName) -> CustomNDeleteResponse</code>
- <code title="post /accounts/{identifier}/custom_ns">client.accounts.customNs.<a href="./src/resources/accounts/custom-ns/custom-ns.ts">accountLevelCustomNameserversAddAccountCustomNameserver</a>(identifier, { ...params }) -> CustomNAccountLevelCustomNameserversAddAccountCustomNameserverResponse</code>
- <code title="get /accounts/{identifier}/custom_ns">client.accounts.customNs.<a href="./src/resources/accounts/custom-ns/custom-ns.ts">accountLevelCustomNameserversListAccountCustomNameservers</a>(identifier) -> CustomNAccountLevelCustomNameserversListAccountCustomNameserversResponse</code>

### Availabilities

Types:

- <code><a href="./src/resources/accounts/custom-ns/availabilities.ts">AvailabilityAccountLevelCustomNameserversGetEligibleZonesForAccountCustomNameserversResponse</a></code>

Methods:

- <code title="get /accounts/{identifier}/custom_ns/availability">client.accounts.customNs.availabilities.<a href="./src/resources/accounts/custom-ns/availabilities.ts">accountLevelCustomNameserversGetEligibleZonesForAccountCustomNameservers</a>(identifier) -> AvailabilityAccountLevelCustomNameserversGetEligibleZonesForAccountCustomNameserversResponse</code>

### Verifies

Types:

- <code><a href="./src/resources/accounts/custom-ns/verifies.ts">VerifyAccountLevelCustomNameserversVerifyAccountCustomNameserverGlueRecordsResponse</a></code>

Methods:

- <code title="post /accounts/{identifier}/custom_ns/verify">client.accounts.customNs.verifies.<a href="./src/resources/accounts/custom-ns/verifies.ts">accountLevelCustomNameserversVerifyAccountCustomNameserverGlueRecords</a>(identifier) -> VerifyAccountLevelCustomNameserversVerifyAccountCustomNameserverGlueRecordsResponse</code>

## Devices

Types:

- <code><a href="./src/resources/accounts/devices/devices.ts">DeviceRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/devices/devices.ts">DeviceDevicesListDevicesResponse</a></code>

Methods:

- <code title="get /accounts/{identifier}/devices/{uuid}">client.accounts.devices.<a href="./src/resources/accounts/devices/devices.ts">retrieve</a>(identifier, uuid) -> DeviceRetrieveResponse</code>
- <code title="get /accounts/{identifier}/devices">client.accounts.devices.<a href="./src/resources/accounts/devices/devices.ts">devicesListDevices</a>(identifier) -> DeviceDevicesListDevicesResponse</code>

### DexTests

Types:

- <code><a href="./src/resources/accounts/devices/dex-tests.ts">DexTestRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/devices/dex-tests.ts">DexTestUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/devices/dex-tests.ts">DexTestDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/devices/dex-tests.ts">DexTestDeviceDexTestCreateDeviceDexTestResponse</a></code>
- <code><a href="./src/resources/accounts/devices/dex-tests.ts">DexTestDeviceDexTestDetailsResponse</a></code>

Methods:

- <code title="get /accounts/{identifier}/devices/dex_tests/{uuid}">client.accounts.devices.dexTests.<a href="./src/resources/accounts/devices/dex-tests.ts">retrieve</a>(identifier, uuid) -> DexTestRetrieveResponse</code>
- <code title="put /accounts/{identifier}/devices/dex_tests/{uuid}">client.accounts.devices.dexTests.<a href="./src/resources/accounts/devices/dex-tests.ts">update</a>(identifier, uuid, { ...params }) -> DexTestUpdateResponse</code>
- <code title="delete /accounts/{identifier}/devices/dex_tests/{uuid}">client.accounts.devices.dexTests.<a href="./src/resources/accounts/devices/dex-tests.ts">delete</a>(identifier, uuid) -> DexTestDeleteResponse</code>
- <code title="post /accounts/{identifier}/devices/dex_tests">client.accounts.devices.dexTests.<a href="./src/resources/accounts/devices/dex-tests.ts">deviceDexTestCreateDeviceDexTest</a>(identifier, { ...params }) -> DexTestDeviceDexTestCreateDeviceDexTestResponse</code>
- <code title="get /accounts/{identifier}/devices/dex_tests">client.accounts.devices.dexTests.<a href="./src/resources/accounts/devices/dex-tests.ts">deviceDexTestDetails</a>(identifier) -> DexTestDeviceDexTestDetailsResponse</code>

### Networks

Types:

- <code><a href="./src/resources/accounts/devices/networks.ts">NetworkRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/devices/networks.ts">NetworkUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/devices/networks.ts">NetworkDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/devices/networks.ts">NetworkDeviceManagedNetworksCreateDeviceManagedNetworkResponse</a></code>
- <code><a href="./src/resources/accounts/devices/networks.ts">NetworkDeviceManagedNetworksListDeviceManagedNetworksResponse</a></code>

Methods:

- <code title="get /accounts/{identifier}/devices/networks/{uuid}">client.accounts.devices.networks.<a href="./src/resources/accounts/devices/networks.ts">retrieve</a>(identifier, uuid) -> NetworkRetrieveResponse</code>
- <code title="put /accounts/{identifier}/devices/networks/{uuid}">client.accounts.devices.networks.<a href="./src/resources/accounts/devices/networks.ts">update</a>(identifier, uuid, { ...params }) -> NetworkUpdateResponse</code>
- <code title="delete /accounts/{identifier}/devices/networks/{uuid}">client.accounts.devices.networks.<a href="./src/resources/accounts/devices/networks.ts">delete</a>(identifier, uuid) -> NetworkDeleteResponse</code>
- <code title="post /accounts/{identifier}/devices/networks">client.accounts.devices.networks.<a href="./src/resources/accounts/devices/networks.ts">deviceManagedNetworksCreateDeviceManagedNetwork</a>(identifier, { ...params }) -> NetworkDeviceManagedNetworksCreateDeviceManagedNetworkResponse</code>
- <code title="get /accounts/{identifier}/devices/networks">client.accounts.devices.networks.<a href="./src/resources/accounts/devices/networks.ts">deviceManagedNetworksListDeviceManagedNetworks</a>(identifier) -> NetworkDeviceManagedNetworksListDeviceManagedNetworksResponse</code>

### Policies

Types:

- <code><a href="./src/resources/accounts/devices/policies/policies.ts">PolicyRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/devices/policies/policies.ts">PolicyUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/devices/policies/policies.ts">PolicyDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/devices/policies/policies.ts">PolicyDevicesCreateDeviceSettingsPolicyResponse</a></code>
- <code><a href="./src/resources/accounts/devices/policies/policies.ts">PolicyDevicesGetDefaultDeviceSettingsPolicyResponse</a></code>
- <code><a href="./src/resources/accounts/devices/policies/policies.ts">PolicyDevicesListDeviceSettingsPoliciesResponse</a></code>
- <code><a href="./src/resources/accounts/devices/policies/policies.ts">PolicyDevicesUpdateDefaultDeviceSettingsPolicyResponse</a></code>

Methods:

- <code title="get /accounts/{identifier}/devices/policy/{uuid}">client.accounts.devices.policies.<a href="./src/resources/accounts/devices/policies/policies.ts">retrieve</a>(identifier, uuid) -> PolicyRetrieveResponse</code>
- <code title="patch /accounts/{identifier}/devices/policy/{uuid}">client.accounts.devices.policies.<a href="./src/resources/accounts/devices/policies/policies.ts">update</a>(identifier, uuid, { ...params }) -> PolicyUpdateResponse</code>
- <code title="delete /accounts/{identifier}/devices/policy/{uuid}">client.accounts.devices.policies.<a href="./src/resources/accounts/devices/policies/policies.ts">delete</a>(identifier, uuid) -> PolicyDeleteResponse</code>
- <code title="post /accounts/{identifier}/devices/policy">client.accounts.devices.policies.<a href="./src/resources/accounts/devices/policies/policies.ts">devicesCreateDeviceSettingsPolicy</a>(identifier, { ...params }) -> PolicyDevicesCreateDeviceSettingsPolicyResponse</code>
- <code title="get /accounts/{identifier}/devices/policy">client.accounts.devices.policies.<a href="./src/resources/accounts/devices/policies/policies.ts">devicesGetDefaultDeviceSettingsPolicy</a>(identifier) -> PolicyDevicesGetDefaultDeviceSettingsPolicyResponse</code>
- <code title="get /accounts/{identifier}/devices/policies">client.accounts.devices.policies.<a href="./src/resources/accounts/devices/policies/policies.ts">devicesListDeviceSettingsPolicies</a>(identifier) -> PolicyDevicesListDeviceSettingsPoliciesResponse</code>
- <code title="patch /accounts/{identifier}/devices/policy">client.accounts.devices.policies.<a href="./src/resources/accounts/devices/policies/policies.ts">devicesUpdateDefaultDeviceSettingsPolicy</a>(identifier, { ...params }) -> PolicyDevicesUpdateDefaultDeviceSettingsPolicyResponse</code>

#### Excludes

Types:

- <code><a href="./src/resources/accounts/devices/policies/excludes.ts">ExcludeDevicesGetSplitTunnelExcludeListResponse</a></code>
- <code><a href="./src/resources/accounts/devices/policies/excludes.ts">ExcludeDevicesGetSplitTunnelExcludeListForADeviceSettingsPolicyResponse</a></code>
- <code><a href="./src/resources/accounts/devices/policies/excludes.ts">ExcludeDevicesSetSplitTunnelExcludeListResponse</a></code>
- <code><a href="./src/resources/accounts/devices/policies/excludes.ts">ExcludeDevicesSetSplitTunnelExcludeListForADeviceSettingsPolicyResponse</a></code>

Methods:

- <code title="get /accounts/{identifier}/devices/policy/exclude">client.accounts.devices.policies.excludes.<a href="./src/resources/accounts/devices/policies/excludes.ts">devicesGetSplitTunnelExcludeList</a>(identifier) -> ExcludeDevicesGetSplitTunnelExcludeListResponse</code>
- <code title="get /accounts/{identifier}/devices/policy/{uuid}/exclude">client.accounts.devices.policies.excludes.<a href="./src/resources/accounts/devices/policies/excludes.ts">devicesGetSplitTunnelExcludeListForADeviceSettingsPolicy</a>(identifier, uuid) -> ExcludeDevicesGetSplitTunnelExcludeListForADeviceSettingsPolicyResponse</code>
- <code title="put /accounts/{identifier}/devices/policy/exclude">client.accounts.devices.policies.excludes.<a href="./src/resources/accounts/devices/policies/excludes.ts">devicesSetSplitTunnelExcludeList</a>(identifier, [ ...body ]) -> ExcludeDevicesSetSplitTunnelExcludeListResponse</code>
- <code title="put /accounts/{identifier}/devices/policy/{uuid}/exclude">client.accounts.devices.policies.excludes.<a href="./src/resources/accounts/devices/policies/excludes.ts">devicesSetSplitTunnelExcludeListForADeviceSettingsPolicy</a>(identifier, uuid, [ ...body ]) -> ExcludeDevicesSetSplitTunnelExcludeListForADeviceSettingsPolicyResponse</code>

#### FallbackDomains

Types:

- <code><a href="./src/resources/accounts/devices/policies/fallback-domains.ts">FallbackDomainDevicesGetLocalDomainFallbackListResponse</a></code>
- <code><a href="./src/resources/accounts/devices/policies/fallback-domains.ts">FallbackDomainDevicesGetLocalDomainFallbackListForADeviceSettingsPolicyResponse</a></code>
- <code><a href="./src/resources/accounts/devices/policies/fallback-domains.ts">FallbackDomainDevicesSetLocalDomainFallbackListResponse</a></code>
- <code><a href="./src/resources/accounts/devices/policies/fallback-domains.ts">FallbackDomainDevicesSetLocalDomainFallbackListForADeviceSettingsPolicyResponse</a></code>

Methods:

- <code title="get /accounts/{identifier}/devices/policy/fallback_domains">client.accounts.devices.policies.fallbackDomains.<a href="./src/resources/accounts/devices/policies/fallback-domains.ts">devicesGetLocalDomainFallbackList</a>(identifier) -> FallbackDomainDevicesGetLocalDomainFallbackListResponse</code>
- <code title="get /accounts/{identifier}/devices/policy/{uuid}/fallback_domains">client.accounts.devices.policies.fallbackDomains.<a href="./src/resources/accounts/devices/policies/fallback-domains.ts">devicesGetLocalDomainFallbackListForADeviceSettingsPolicy</a>(identifier, uuid) -> FallbackDomainDevicesGetLocalDomainFallbackListForADeviceSettingsPolicyResponse</code>
- <code title="put /accounts/{identifier}/devices/policy/fallback_domains">client.accounts.devices.policies.fallbackDomains.<a href="./src/resources/accounts/devices/policies/fallback-domains.ts">devicesSetLocalDomainFallbackList</a>(identifier, [ ...body ]) -> FallbackDomainDevicesSetLocalDomainFallbackListResponse</code>
- <code title="put /accounts/{identifier}/devices/policy/{uuid}/fallback_domains">client.accounts.devices.policies.fallbackDomains.<a href="./src/resources/accounts/devices/policies/fallback-domains.ts">devicesSetLocalDomainFallbackListForADeviceSettingsPolicy</a>(identifier, uuid, [ ...body ]) -> FallbackDomainDevicesSetLocalDomainFallbackListForADeviceSettingsPolicyResponse</code>

#### Includes

Types:

- <code><a href="./src/resources/accounts/devices/policies/includes.ts">IncludeDevicesGetSplitTunnelIncludeListResponse</a></code>
- <code><a href="./src/resources/accounts/devices/policies/includes.ts">IncludeDevicesGetSplitTunnelIncludeListForADeviceSettingsPolicyResponse</a></code>
- <code><a href="./src/resources/accounts/devices/policies/includes.ts">IncludeDevicesSetSplitTunnelIncludeListResponse</a></code>
- <code><a href="./src/resources/accounts/devices/policies/includes.ts">IncludeDevicesSetSplitTunnelIncludeListForADeviceSettingsPolicyResponse</a></code>

Methods:

- <code title="get /accounts/{identifier}/devices/policy/include">client.accounts.devices.policies.includes.<a href="./src/resources/accounts/devices/policies/includes.ts">devicesGetSplitTunnelIncludeList</a>(identifier) -> IncludeDevicesGetSplitTunnelIncludeListResponse</code>
- <code title="get /accounts/{identifier}/devices/policy/{uuid}/include">client.accounts.devices.policies.includes.<a href="./src/resources/accounts/devices/policies/includes.ts">devicesGetSplitTunnelIncludeListForADeviceSettingsPolicy</a>(identifier, uuid) -> IncludeDevicesGetSplitTunnelIncludeListForADeviceSettingsPolicyResponse</code>
- <code title="put /accounts/{identifier}/devices/policy/include">client.accounts.devices.policies.includes.<a href="./src/resources/accounts/devices/policies/includes.ts">devicesSetSplitTunnelIncludeList</a>(identifier, [ ...body ]) -> IncludeDevicesSetSplitTunnelIncludeListResponse</code>
- <code title="put /accounts/{identifier}/devices/policy/{uuid}/include">client.accounts.devices.policies.includes.<a href="./src/resources/accounts/devices/policies/includes.ts">devicesSetSplitTunnelIncludeListForADeviceSettingsPolicy</a>(identifier, uuid, [ ...body ]) -> IncludeDevicesSetSplitTunnelIncludeListForADeviceSettingsPolicyResponse</code>

### Postures

Types:

- <code><a href="./src/resources/accounts/devices/postures/postures.ts">PostureRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/devices/postures/postures.ts">PostureUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/devices/postures/postures.ts">PostureDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/devices/postures/postures.ts">PostureDevicePostureRulesCreateDevicePostureRuleResponse</a></code>
- <code><a href="./src/resources/accounts/devices/postures/postures.ts">PostureDevicePostureRulesListDevicePostureRulesResponse</a></code>

Methods:

- <code title="get /accounts/{identifier}/devices/posture/{uuid}">client.accounts.devices.postures.<a href="./src/resources/accounts/devices/postures/postures.ts">retrieve</a>(identifier, uuid) -> PostureRetrieveResponse</code>
- <code title="put /accounts/{identifier}/devices/posture/{uuid}">client.accounts.devices.postures.<a href="./src/resources/accounts/devices/postures/postures.ts">update</a>(identifier, uuid, { ...params }) -> PostureUpdateResponse</code>
- <code title="delete /accounts/{identifier}/devices/posture/{uuid}">client.accounts.devices.postures.<a href="./src/resources/accounts/devices/postures/postures.ts">delete</a>(identifier, uuid) -> PostureDeleteResponse</code>
- <code title="post /accounts/{identifier}/devices/posture">client.accounts.devices.postures.<a href="./src/resources/accounts/devices/postures/postures.ts">devicePostureRulesCreateDevicePostureRule</a>(identifier, { ...params }) -> PostureDevicePostureRulesCreateDevicePostureRuleResponse</code>
- <code title="get /accounts/{identifier}/devices/posture">client.accounts.devices.postures.<a href="./src/resources/accounts/devices/postures/postures.ts">devicePostureRulesListDevicePostureRules</a>(identifier) -> PostureDevicePostureRulesListDevicePostureRulesResponse</code>

#### Integrations

Types:

- <code><a href="./src/resources/accounts/devices/postures/integrations.ts">IntegrationRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/devices/postures/integrations.ts">IntegrationUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/devices/postures/integrations.ts">IntegrationDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/devices/postures/integrations.ts">IntegrationDevicePostureIntegrationsCreateDevicePostureIntegrationResponse</a></code>
- <code><a href="./src/resources/accounts/devices/postures/integrations.ts">IntegrationDevicePostureIntegrationsListDevicePostureIntegrationsResponse</a></code>

Methods:

- <code title="get /accounts/{identifier}/devices/posture/integration/{uuid}">client.accounts.devices.postures.integrations.<a href="./src/resources/accounts/devices/postures/integrations.ts">retrieve</a>(identifier, uuid) -> IntegrationRetrieveResponse</code>
- <code title="patch /accounts/{identifier}/devices/posture/integration/{uuid}">client.accounts.devices.postures.integrations.<a href="./src/resources/accounts/devices/postures/integrations.ts">update</a>(identifier, uuid, { ...params }) -> IntegrationUpdateResponse</code>
- <code title="delete /accounts/{identifier}/devices/posture/integration/{uuid}">client.accounts.devices.postures.integrations.<a href="./src/resources/accounts/devices/postures/integrations.ts">delete</a>(identifier, uuid) -> IntegrationDeleteResponse</code>
- <code title="post /accounts/{identifier}/devices/posture/integration">client.accounts.devices.postures.integrations.<a href="./src/resources/accounts/devices/postures/integrations.ts">devicePostureIntegrationsCreateDevicePostureIntegration</a>(identifier, { ...params }) -> IntegrationDevicePostureIntegrationsCreateDevicePostureIntegrationResponse</code>
- <code title="get /accounts/{identifier}/devices/posture/integration">client.accounts.devices.postures.integrations.<a href="./src/resources/accounts/devices/postures/integrations.ts">devicePostureIntegrationsListDevicePostureIntegrations</a>(identifier) -> IntegrationDevicePostureIntegrationsListDevicePostureIntegrationsResponse</code>

### Revokes

Types:

- <code><a href="./src/resources/accounts/devices/revokes.ts">RevokeDevicesRevokeDevicesResponse</a></code>

Methods:

- <code title="post /accounts/{identifier}/devices/revoke">client.accounts.devices.revokes.<a href="./src/resources/accounts/devices/revokes.ts">devicesRevokeDevices</a>(identifier, [ ...body ]) -> RevokeDevicesRevokeDevicesResponse</code>

### Settings

Types:

- <code><a href="./src/resources/accounts/devices/settings.ts">SettingZeroTrustAccountsGetDeviceSettingsForZeroTrustAccountResponse</a></code>
- <code><a href="./src/resources/accounts/devices/settings.ts">SettingZeroTrustAccountsUpdateDeviceSettingsForTheZeroTrustAccountResponse</a></code>

Methods:

- <code title="get /accounts/{identifier}/devices/settings">client.accounts.devices.settings.<a href="./src/resources/accounts/devices/settings.ts">zeroTrustAccountsGetDeviceSettingsForZeroTrustAccount</a>(identifier) -> SettingZeroTrustAccountsGetDeviceSettingsForZeroTrustAccountResponse</code>
- <code title="put /accounts/{identifier}/devices/settings">client.accounts.devices.settings.<a href="./src/resources/accounts/devices/settings.ts">zeroTrustAccountsUpdateDeviceSettingsForTheZeroTrustAccount</a>(identifier, { ...params }) -> SettingZeroTrustAccountsUpdateDeviceSettingsForTheZeroTrustAccountResponse</code>

### Unrevokes

Types:

- <code><a href="./src/resources/accounts/devices/unrevokes.ts">UnrevokeDevicesUnrevokeDevicesResponse</a></code>

Methods:

- <code title="post /accounts/{identifier}/devices/unrevoke">client.accounts.devices.unrevokes.<a href="./src/resources/accounts/devices/unrevokes.ts">devicesUnrevokeDevices</a>(identifier, [ ...body ]) -> UnrevokeDevicesUnrevokeDevicesResponse</code>

### OverrideCodes

Types:

- <code><a href="./src/resources/accounts/devices/override-codes.ts">OverrideCodeDevicesListAdminOverrideCodeForDeviceResponse</a></code>

Methods:

- <code title="get /accounts/{identifier}/devices/{uuid}/override_codes">client.accounts.devices.overrideCodes.<a href="./src/resources/accounts/devices/override-codes.ts">devicesListAdminOverrideCodeForDevice</a>(identifier, uuid) -> OverrideCodeDevicesListAdminOverrideCodeForDeviceResponse</code>

## Addressing

### Prefixes

#### Bindings

Types:

- <code><a href="./src/resources/accounts/addressing/prefixes/bindings.ts">BindingCreateResponse</a></code>
- <code><a href="./src/resources/accounts/addressing/prefixes/bindings.ts">BindingRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/addressing/prefixes/bindings.ts">BindingListResponse</a></code>
- <code><a href="./src/resources/accounts/addressing/prefixes/bindings.ts">BindingDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/addressing/prefixes/{prefix_identifier}/bindings">client.accounts.addressing.prefixes.bindings.<a href="./src/resources/accounts/addressing/prefixes/bindings.ts">create</a>(accountIdentifier, prefixIdentifier, { ...params }) -> BindingCreateResponse</code>
- <code title="get /accounts/{account_identifier}/addressing/prefixes/{prefix_identifier}/bindings/{binding_identifier}">client.accounts.addressing.prefixes.bindings.<a href="./src/resources/accounts/addressing/prefixes/bindings.ts">retrieve</a>(accountIdentifier, prefixIdentifier, bindingIdentifier) -> BindingRetrieveResponse</code>
- <code title="get /accounts/{account_identifier}/addressing/prefixes/{prefix_identifier}/bindings">client.accounts.addressing.prefixes.bindings.<a href="./src/resources/accounts/addressing/prefixes/bindings.ts">list</a>(accountIdentifier, prefixIdentifier) -> BindingListResponse</code>
- <code title="delete /accounts/{account_identifier}/addressing/prefixes/{prefix_identifier}/bindings/{binding_identifier}">client.accounts.addressing.prefixes.bindings.<a href="./src/resources/accounts/addressing/prefixes/bindings.ts">delete</a>(accountIdentifier, prefixIdentifier, bindingIdentifier) -> BindingDeleteResponse</code>

### Services

Types:

- <code><a href="./src/resources/accounts/addressing/services.ts">ServiceListResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/addressing/services">client.accounts.addressing.services.<a href="./src/resources/accounts/addressing/services.ts">list</a>(accountIdentifier) -> ServiceListResponse</code>

## AI

Types:

- <code><a href="./src/resources/accounts/ai.ts">AIRunResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/ai/run/{model_name}">client.accounts.ai.<a href="./src/resources/accounts/ai.ts">run</a>(accountIdentifier, modelName, { ...params }) -> AIRunResponse</code>

## Challenges

### Widgets

Types:

- <code><a href="./src/resources/accounts/challenges/widgets.ts">WidgetCreateResponse</a></code>
- <code><a href="./src/resources/accounts/challenges/widgets.ts">WidgetRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/challenges/widgets.ts">WidgetUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/challenges/widgets.ts">WidgetListResponse</a></code>
- <code><a href="./src/resources/accounts/challenges/widgets.ts">WidgetDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/challenges/widgets.ts">WidgetRotateSecretResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/challenges/widgets">client.accounts.challenges.widgets.<a href="./src/resources/accounts/challenges/widgets.ts">create</a>(accountIdentifier, { ...params }) -> WidgetCreateResponse</code>
- <code title="get /accounts/{account_identifier}/challenges/widgets/{sitekey}">client.accounts.challenges.widgets.<a href="./src/resources/accounts/challenges/widgets.ts">retrieve</a>(accountIdentifier, sitekey) -> WidgetRetrieveResponse</code>
- <code title="put /accounts/{account_identifier}/challenges/widgets/{sitekey}">client.accounts.challenges.widgets.<a href="./src/resources/accounts/challenges/widgets.ts">update</a>(accountIdentifier, sitekey, { ...params }) -> WidgetUpdateResponse</code>
- <code title="get /accounts/{account_identifier}/challenges/widgets">client.accounts.challenges.widgets.<a href="./src/resources/accounts/challenges/widgets.ts">list</a>(accountIdentifier, { ...params }) -> WidgetListResponsesPage</code>
- <code title="delete /accounts/{account_identifier}/challenges/widgets/{sitekey}">client.accounts.challenges.widgets.<a href="./src/resources/accounts/challenges/widgets.ts">delete</a>(accountIdentifier, sitekey) -> WidgetDeleteResponse</code>
- <code title="post /accounts/{account_identifier}/challenges/widgets/{sitekey}/rotate_secret">client.accounts.challenges.widgets.<a href="./src/resources/accounts/challenges/widgets.ts">rotateSecret</a>(accountIdentifier, sitekey, { ...params }) -> WidgetRotateSecretResponse</code>

## D1

### Databases

Types:

- <code><a href="./src/resources/accounts/d1/databases.ts">DatabaseCreateResponse</a></code>
- <code><a href="./src/resources/accounts/d1/databases.ts">DatabaseRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/d1/databases.ts">DatabaseListResponse</a></code>
- <code><a href="./src/resources/accounts/d1/databases.ts">DatabaseDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/d1/databases.ts">DatabaseQueryResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/d1/database">client.accounts.d1.databases.<a href="./src/resources/accounts/d1/databases.ts">create</a>(accountIdentifier, { ...params }) -> DatabaseCreateResponse</code>
- <code title="get /accounts/{account_identifier}/d1/database/{database_identifier}">client.accounts.d1.databases.<a href="./src/resources/accounts/d1/databases.ts">retrieve</a>(accountIdentifier, databaseIdentifier) -> DatabaseRetrieveResponse</code>
- <code title="get /accounts/{account_identifier}/d1/database">client.accounts.d1.databases.<a href="./src/resources/accounts/d1/databases.ts">list</a>(accountIdentifier, { ...params }) -> DatabaseListResponse</code>
- <code title="delete /accounts/{account_identifier}/d1/database/{database_identifier}">client.accounts.d1.databases.<a href="./src/resources/accounts/d1/databases.ts">delete</a>(accountIdentifier, databaseIdentifier) -> DatabaseDeleteResponse</code>
- <code title="post /accounts/{account_identifier}/d1/database/{database_identifier}/query">client.accounts.d1.databases.<a href="./src/resources/accounts/d1/databases.ts">query</a>(accountIdentifier, databaseIdentifier, { ...params }) -> DatabaseQueryResponse</code>

## Dex

### Colos

Types:

- <code><a href="./src/resources/accounts/dex/colos.ts">ColoListResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/dex/colos">client.accounts.dex.colos.<a href="./src/resources/accounts/dex/colos.ts">list</a>(accountIdentifier, { ...params }) -> ColoListResponse</code>

### FleetStatusDevices

Types:

- <code><a href="./src/resources/accounts/dex/fleet-status-devices.ts">FleetStatusDeviceListResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/dex/fleet-status/devices">client.accounts.dex.fleetStatusDevices.<a href="./src/resources/accounts/dex/fleet-status-devices.ts">list</a>(accountIdentifier, { ...params }) -> FleetStatusDeviceListResponsesPage</code>

### FleetStatusLive

Types:

- <code><a href="./src/resources/accounts/dex/fleet-status-live.ts">FleetStatusLiveListResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/dex/fleet-status/live">client.accounts.dex.fleetStatusLive.<a href="./src/resources/accounts/dex/fleet-status-live.ts">list</a>(accountIdentifier, { ...params }) -> FleetStatusLiveListResponse</code>

### FleetStatusOverTime

Methods:

- <code title="get /accounts/{account_identifier}/dex/fleet-status/over-time">client.accounts.dex.fleetStatusOverTime.<a href="./src/resources/accounts/dex/fleet-status-over-time.ts">list</a>(accountIdentifier, { ...params }) -> void</code>

### HTTPTests

Types:

- <code><a href="./src/resources/accounts/dex/http-tests/http-tests.ts">HTTPTestRetrieveResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/dex/http-tests/{test_id}">client.accounts.dex.httpTests.<a href="./src/resources/accounts/dex/http-tests/http-tests.ts">retrieve</a>(accountIdentifier, testId, { ...params }) -> HTTPTestRetrieveResponse</code>

#### Percentiles

Types:

- <code><a href="./src/resources/accounts/dex/http-tests/percentiles.ts">PercentileListResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/dex/http-tests/{test_id}/percentiles">client.accounts.dex.httpTests.percentiles.<a href="./src/resources/accounts/dex/http-tests/percentiles.ts">list</a>(accountIdentifier, testId, { ...params }) -> PercentileListResponse</code>

### Tests

Types:

- <code><a href="./src/resources/accounts/dex/tests/tests.ts">TestListResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/dex/tests">client.accounts.dex.tests.<a href="./src/resources/accounts/dex/tests/tests.ts">list</a>(accountIdentifier, { ...params }) -> TestListResponse</code>

#### UniqueDevices

Types:

- <code><a href="./src/resources/accounts/dex/tests/unique-devices.ts">UniqueDeviceListResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/dex/tests/unique-devices">client.accounts.dex.tests.uniqueDevices.<a href="./src/resources/accounts/dex/tests/unique-devices.ts">list</a>(accountIdentifier, { ...params }) -> UniqueDeviceListResponse</code>

### TracerouteTestResults

#### NetworkPath

Types:

- <code><a href="./src/resources/accounts/dex/traceroute-test-results/network-path.ts">NetworkPathListResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/dex/traceroute-test-results/{test_result_id}/network-path">client.accounts.dex.tracerouteTestResults.networkPath.<a href="./src/resources/accounts/dex/traceroute-test-results/network-path.ts">list</a>(accountIdentifier, testResultId) -> NetworkPathListResponse</code>

### TracerouteTests

Types:

- <code><a href="./src/resources/accounts/dex/traceroute-tests/traceroute-tests.ts">TracerouteTestRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/dex/traceroute-tests/traceroute-tests.ts">TracerouteTestPercentilesResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/dex/traceroute-tests/{test_id}">client.accounts.dex.tracerouteTests.<a href="./src/resources/accounts/dex/traceroute-tests/traceroute-tests.ts">retrieve</a>(accountIdentifier, testId, { ...params }) -> TracerouteTestRetrieveResponse</code>
- <code title="get /accounts/{account_identifier}/dex/traceroute-tests/{test_id}/percentiles">client.accounts.dex.tracerouteTests.<a href="./src/resources/accounts/dex/traceroute-tests/traceroute-tests.ts">percentiles</a>(accountIdentifier, testId, { ...params }) -> TracerouteTestPercentilesResponse</code>

#### NetworkPath

Types:

- <code><a href="./src/resources/accounts/dex/traceroute-tests/network-path.ts">NetworkPathListResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/dex/traceroute-tests/{test_id}/network-path">client.accounts.dex.tracerouteTests.networkPath.<a href="./src/resources/accounts/dex/traceroute-tests/network-path.ts">list</a>(accountIdentifier, testId, { ...params }) -> NetworkPathListResponse</code>

## Hyperdrive

### Configs

Types:

- <code><a href="./src/resources/accounts/hyperdrive/configs.ts">ConfigCreateResponse</a></code>
- <code><a href="./src/resources/accounts/hyperdrive/configs.ts">ConfigListResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/hyperdrive/configs">client.accounts.hyperdrive.configs.<a href="./src/resources/accounts/hyperdrive/configs.ts">create</a>(accountIdentifier, { ...params }) -> ConfigCreateResponse</code>
- <code title="get /accounts/{account_identifier}/hyperdrive/configs">client.accounts.hyperdrive.configs.<a href="./src/resources/accounts/hyperdrive/configs.ts">list</a>(accountIdentifier) -> ConfigListResponse</code>

## PagesProjects

Types:

- <code><a href="./src/resources/accounts/pages-projects.ts">PagesProjectPurgeBuildCacheResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/pages/projects/{project_name}/purge_build_cache">client.accounts.pagesProjects.<a href="./src/resources/accounts/pages-projects.ts">purgeBuildCache</a>(accountIdentifier, projectName) -> unknown</code>

## Rum

### SiteInfo

Types:

- <code><a href="./src/resources/accounts/rum/site-info.ts">SiteInfoCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/rum/site_info">client.accounts.rum.siteInfo.<a href="./src/resources/accounts/rum/site-info.ts">create</a>(accountIdentifier, { ...params }) -> SiteInfoCreateResponse</code>

### V2

#### Rule

Types:

- <code><a href="./src/resources/accounts/rum/v2/rule.ts">Rule</a></code>

Methods:

- <code title="put /accounts/{account_identifier}/rum/v2/{ruleset_identifier}/rule/{rule_identifier}">client.accounts.rum.v2.rule.<a href="./src/resources/accounts/rum/v2/rule.ts">update</a>(accountIdentifier, rulesetIdentifier, ruleIdentifier, { ...params }) -> Rule</code>

## VectorizeIndexes

Types:

- <code><a href="./src/resources/accounts/vectorize-indexes.ts">VectorizeIndexCreateResponse</a></code>
- <code><a href="./src/resources/accounts/vectorize-indexes.ts">VectorizeIndexRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/vectorize-indexes.ts">VectorizeIndexUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/vectorize-indexes.ts">VectorizeIndexListResponse</a></code>
- <code><a href="./src/resources/accounts/vectorize-indexes.ts">VectorizeIndexDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/vectorize-indexes.ts">VectorizeIndexInsertResponse</a></code>
- <code><a href="./src/resources/accounts/vectorize-indexes.ts">VectorizeIndexQueryResponse</a></code>
- <code><a href="./src/resources/accounts/vectorize-indexes.ts">VectorizeIndexUpsertResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/vectorize/indexes">client.accounts.vectorizeIndexes.<a href="./src/resources/accounts/vectorize-indexes.ts">create</a>(accountIdentifier, { ...params }) -> VectorizeIndexCreateResponse</code>
- <code title="get /accounts/{account_identifier}/vectorize/indexes/{index_name}">client.accounts.vectorizeIndexes.<a href="./src/resources/accounts/vectorize-indexes.ts">retrieve</a>(accountIdentifier, indexName) -> VectorizeIndexRetrieveResponse</code>
- <code title="put /accounts/{account_identifier}/vectorize/indexes/{index_name}">client.accounts.vectorizeIndexes.<a href="./src/resources/accounts/vectorize-indexes.ts">update</a>(accountIdentifier, indexName, { ...params }) -> VectorizeIndexUpdateResponse</code>
- <code title="get /accounts/{account_identifier}/vectorize/indexes">client.accounts.vectorizeIndexes.<a href="./src/resources/accounts/vectorize-indexes.ts">list</a>(accountIdentifier) -> VectorizeIndexListResponse</code>
- <code title="delete /accounts/{account_identifier}/vectorize/indexes/{index_name}">client.accounts.vectorizeIndexes.<a href="./src/resources/accounts/vectorize-indexes.ts">delete</a>(accountIdentifier, indexName) -> VectorizeIndexDeleteResponse</code>
- <code title="post /accounts/{account_identifier}/vectorize/indexes/{index_name}/insert">client.accounts.vectorizeIndexes.<a href="./src/resources/accounts/vectorize-indexes.ts">insert</a>(accountIdentifier, indexName) -> VectorizeIndexInsertResponse</code>
- <code title="post /accounts/{account_identifier}/vectorize/indexes/{index_name}/query">client.accounts.vectorizeIndexes.<a href="./src/resources/accounts/vectorize-indexes.ts">query</a>(accountIdentifier, indexName, { ...params }) -> VectorizeIndexQueryResponse</code>
- <code title="post /accounts/{account_identifier}/vectorize/indexes/{index_name}/upsert">client.accounts.vectorizeIndexes.<a href="./src/resources/accounts/vectorize-indexes.ts">upsert</a>(accountIdentifier, indexName) -> VectorizeIndexUpsertResponse</code>

## WarpConnector

Types:

- <code><a href="./src/resources/accounts/warp-connector.ts">WarpConnectorCreateResponse</a></code>
- <code><a href="./src/resources/accounts/warp-connector.ts">WarpConnectorRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/warp-connector.ts">WarpConnectorUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/warp-connector.ts">WarpConnectorListResponse</a></code>
- <code><a href="./src/resources/accounts/warp-connector.ts">WarpConnectorDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/warp-connector.ts">WarpConnectorTokenResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/warp_connector">client.accounts.warpConnector.<a href="./src/resources/accounts/warp-connector.ts">create</a>(accountIdentifier, { ...params }) -> WarpConnectorCreateResponse</code>
- <code title="get /accounts/{account_identifier}/warp_connector/{tunnel_id}">client.accounts.warpConnector.<a href="./src/resources/accounts/warp-connector.ts">retrieve</a>(accountIdentifier, tunnelId) -> WarpConnectorRetrieveResponse</code>
- <code title="patch /accounts/{account_identifier}/warp_connector/{tunnel_id}">client.accounts.warpConnector.<a href="./src/resources/accounts/warp-connector.ts">update</a>(accountIdentifier, tunnelId, { ...params }) -> WarpConnectorUpdateResponse</code>
- <code title="get /accounts/{account_identifier}/warp_connector">client.accounts.warpConnector.<a href="./src/resources/accounts/warp-connector.ts">list</a>(accountIdentifier, { ...params }) -> WarpConnectorListResponsesPage</code>
- <code title="delete /accounts/{account_identifier}/warp_connector/{tunnel_id}">client.accounts.warpConnector.<a href="./src/resources/accounts/warp-connector.ts">delete</a>(accountIdentifier, tunnelId, { ...params }) -> WarpConnectorDeleteResponse</code>
- <code title="get /accounts/{account_identifier}/warp_connector/{tunnel_id}/token">client.accounts.warpConnector.<a href="./src/resources/accounts/warp-connector.ts">token</a>(accountIdentifier, tunnelId) -> WarpConnectorTokenResponse</code>

## Zerotrust

### ConnectivitySettings

Types:

- <code><a href="./src/resources/accounts/zerotrust/connectivity-settings.ts">ConnectivitySettingUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/zerotrust/connectivity-settings.ts">ConnectivitySettingListResponse</a></code>

Methods:

- <code title="patch /accounts/{account_identifier}/zerotrust/connectivity_settings">client.accounts.zerotrust.connectivitySettings.<a href="./src/resources/accounts/zerotrust/connectivity-settings.ts">update</a>(accountIdentifier, { ...params }) -> ConnectivitySettingUpdateResponse</code>
- <code title="get /accounts/{account_identifier}/zerotrust/connectivity_settings">client.accounts.zerotrust.connectivitySettings.<a href="./src/resources/accounts/zerotrust/connectivity-settings.ts">list</a>(accountIdentifier) -> ConnectivitySettingListResponse</code>

## Urlscanner

### Scan

Types:

- <code><a href="./src/resources/accounts/urlscanner/scan.ts">ScanCreateResponse</a></code>
- <code><a href="./src/resources/accounts/urlscanner/scan.ts">ScanRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/urlscanner/scan.ts">ScanListResponse</a></code>

Methods:

- <code title="post /accounts/{accountId}/urlscanner/scan">client.accounts.urlscanner.scan.<a href="./src/resources/accounts/urlscanner/scan.ts">create</a>(accountId, { ...params }) -> ScanCreateResponse</code>
- <code title="get /accounts/{accountId}/urlscanner/scan/{scanId}">client.accounts.urlscanner.scan.<a href="./src/resources/accounts/urlscanner/scan.ts">retrieve</a>(accountId, scanId) -> ScanRetrieveResponse</code>
- <code title="get /accounts/{accountId}/urlscanner/scan">client.accounts.urlscanner.scan.<a href="./src/resources/accounts/urlscanner/scan.ts">list</a>(accountId, { ...params }) -> ScanListResponse</code>

### Har

Types:

- <code><a href="./src/resources/accounts/urlscanner/har.ts">HarRetrieveResponse</a></code>

Methods:

- <code title="get /accounts/{accountId}/urlscanner/scan/{scanId}/har">client.accounts.urlscanner.har.<a href="./src/resources/accounts/urlscanner/har.ts">retrieve</a>(accountId, scanId) -> HarRetrieveResponse</code>

### Screenshot

Methods:

- <code title="get /accounts/{accountId}/urlscanner/scan/{scanId}/screenshot">client.accounts.urlscanner.screenshot.<a href="./src/resources/accounts/urlscanner/screenshot.ts">retrieve</a>(accountId, scanId, { ...params }) -> Response</code>

# Certificates

Types:

- <code><a href="./src/resources/certificates.ts">CertificateCreateResponse</a></code>
- <code><a href="./src/resources/certificates.ts">CertificateRetrieveResponse</a></code>
- <code><a href="./src/resources/certificates.ts">CertificateListResponse</a></code>
- <code><a href="./src/resources/certificates.ts">CertificateDeleteResponse</a></code>

Methods:

- <code title="post /certificates">client.certificates.<a href="./src/resources/certificates.ts">create</a>({ ...params }) -> CertificateCreateResponse</code>
- <code title="get /certificates/{identifier}">client.certificates.<a href="./src/resources/certificates.ts">retrieve</a>(identifier) -> CertificateRetrieveResponse</code>
- <code title="get /certificates">client.certificates.<a href="./src/resources/certificates.ts">list</a>() -> CertificateListResponse</code>
- <code title="delete /certificates/{identifier}">client.certificates.<a href="./src/resources/certificates.ts">delete</a>(identifier) -> CertificateDeleteResponse</code>

# IPs

Types:

- <code><a href="./src/resources/ips.ts">IPListResponse</a></code>

Methods:

- <code title="get /ips">client.ips.<a href="./src/resources/ips.ts">list</a>({ ...params }) -> IPListResponse</code>

# Memberships

Types:

- <code><a href="./src/resources/memberships.ts">MembershipRetrieveResponse</a></code>
- <code><a href="./src/resources/memberships.ts">MembershipUpdateResponse</a></code>
- <code><a href="./src/resources/memberships.ts">MembershipDeleteResponse</a></code>
- <code><a href="./src/resources/memberships.ts">MembershipUserSAccountMembershipsListMembershipsResponse</a></code>

Methods:

- <code title="get /memberships/{identifier}">client.memberships.<a href="./src/resources/memberships.ts">retrieve</a>(identifier) -> MembershipRetrieveResponse</code>
- <code title="put /memberships/{identifier}">client.memberships.<a href="./src/resources/memberships.ts">update</a>(identifier, { ...params }) -> MembershipUpdateResponse</code>
- <code title="delete /memberships/{identifier}">client.memberships.<a href="./src/resources/memberships.ts">delete</a>(identifier) -> MembershipDeleteResponse</code>
- <code title="get /memberships">client.memberships.<a href="./src/resources/memberships.ts">userSAccountMembershipsListMemberships</a>({ ...params }) -> MembershipUserSAccountMembershipsListMembershipsResponsesPage</code>

# Organizations

Types:

- <code><a href="./src/resources/organizations/organizations.ts">OrganizationRetrieveResponse</a></code>
- <code><a href="./src/resources/organizations/organizations.ts">OrganizationUpdateResponse</a></code>

Methods:

- <code title="get /organizations/{identifier}">client.organizations.<a href="./src/resources/organizations/organizations.ts">retrieve</a>(identifier) -> OrganizationRetrieveResponse</code>
- <code title="patch /organizations/{identifier}">client.organizations.<a href="./src/resources/organizations/organizations.ts">update</a>(identifier, { ...params }) -> OrganizationUpdateResponse</code>

## Invites

Types:

- <code><a href="./src/resources/organizations/invites.ts">InviteRetrieveResponse</a></code>
- <code><a href="./src/resources/organizations/invites.ts">InviteUpdateResponse</a></code>
- <code><a href="./src/resources/organizations/invites.ts">InviteDeleteResponse</a></code>
- <code><a href="./src/resources/organizations/invites.ts">InviteOrganizationInvitesCreateInvitationResponse</a></code>
- <code><a href="./src/resources/organizations/invites.ts">InviteOrganizationInvitesListInvitationsResponse</a></code>

Methods:

- <code title="get /organizations/{organization_identifier}/invites/{identifier}">client.organizations.invites.<a href="./src/resources/organizations/invites.ts">retrieve</a>(organizationIdentifier, identifier) -> InviteRetrieveResponse</code>
- <code title="patch /organizations/{organization_identifier}/invites/{identifier}">client.organizations.invites.<a href="./src/resources/organizations/invites.ts">update</a>(organizationIdentifier, identifier, { ...params }) -> InviteUpdateResponse</code>
- <code title="delete /organizations/{organization_identifier}/invites/{identifier}">client.organizations.invites.<a href="./src/resources/organizations/invites.ts">delete</a>(organizationIdentifier, identifier) -> InviteDeleteResponse</code>
- <code title="post /organizations/{organization_identifier}/invites">client.organizations.invites.<a href="./src/resources/organizations/invites.ts">organizationInvitesCreateInvitation</a>(organizationIdentifier, { ...params }) -> InviteOrganizationInvitesCreateInvitationResponse</code>
- <code title="get /organizations/{organization_identifier}/invites">client.organizations.invites.<a href="./src/resources/organizations/invites.ts">organizationInvitesListInvitations</a>(organizationIdentifier) -> InviteOrganizationInvitesListInvitationsResponse</code>

## Members

Types:

- <code><a href="./src/resources/organizations/members.ts">MemberRetrieveResponse</a></code>
- <code><a href="./src/resources/organizations/members.ts">MemberUpdateResponse</a></code>
- <code><a href="./src/resources/organizations/members.ts">MemberDeleteResponse</a></code>
- <code><a href="./src/resources/organizations/members.ts">MemberOrganizationMembersListMembersResponse</a></code>

Methods:

- <code title="get /organizations/{organization_identifier}/members/{identifier}">client.organizations.members.<a href="./src/resources/organizations/members.ts">retrieve</a>(organizationIdentifier, identifier) -> MemberRetrieveResponse</code>
- <code title="patch /organizations/{organization_identifier}/members/{identifier}">client.organizations.members.<a href="./src/resources/organizations/members.ts">update</a>(organizationIdentifier, identifier, { ...params }) -> MemberUpdateResponse</code>
- <code title="delete /organizations/{organization_identifier}/members/{identifier}">client.organizations.members.<a href="./src/resources/organizations/members.ts">delete</a>(organizationIdentifier, identifier) -> MemberDeleteResponse</code>
- <code title="get /organizations/{organization_identifier}/members">client.organizations.members.<a href="./src/resources/organizations/members.ts">organizationMembersListMembers</a>(organizationIdentifier) -> MemberOrganizationMembersListMembersResponse</code>

## Railguns

Types:

- <code><a href="./src/resources/organizations/railguns/railguns.ts">RailgunRetrieveResponse</a></code>
- <code><a href="./src/resources/organizations/railguns/railguns.ts">RailgunUpdateResponse</a></code>
- <code><a href="./src/resources/organizations/railguns/railguns.ts">RailgunDeleteResponse</a></code>
- <code><a href="./src/resources/organizations/railguns/railguns.ts">RailgunOrganizationRailgunCreateRailgunResponse</a></code>
- <code><a href="./src/resources/organizations/railguns/railguns.ts">RailgunOrganizationRailgunListRailgunsResponse</a></code>

Methods:

- <code title="get /organizations/{organization_identifier}/railguns/{identifier}">client.organizations.railguns.<a href="./src/resources/organizations/railguns/railguns.ts">retrieve</a>(organizationIdentifier, identifier) -> RailgunRetrieveResponse</code>
- <code title="patch /organizations/{organization_identifier}/railguns/{identifier}">client.organizations.railguns.<a href="./src/resources/organizations/railguns/railguns.ts">update</a>(organizationIdentifier, identifier, { ...params }) -> RailgunUpdateResponse</code>
- <code title="delete /organizations/{organization_identifier}/railguns/{identifier}">client.organizations.railguns.<a href="./src/resources/organizations/railguns/railguns.ts">delete</a>(organizationIdentifier, identifier) -> RailgunDeleteResponse</code>
- <code title="post /organizations/{organization_identifier}/railguns">client.organizations.railguns.<a href="./src/resources/organizations/railguns/railguns.ts">organizationRailgunCreateRailgun</a>(organizationIdentifier, { ...params }) -> RailgunOrganizationRailgunCreateRailgunResponse</code>
- <code title="get /organizations/{organization_identifier}/railguns">client.organizations.railguns.<a href="./src/resources/organizations/railguns/railguns.ts">organizationRailgunListRailguns</a>(organizationIdentifier, { ...params }) -> RailgunOrganizationRailgunListRailgunsResponsesPage</code>

### Zones

Types:

- <code><a href="./src/resources/organizations/railguns/zones.ts">ZoneListResponse</a></code>

Methods:

- <code title="get /organizations/{organization_identifier}/railguns/{identifier}/zones">client.organizations.railguns.zones.<a href="./src/resources/organizations/railguns/zones.ts">list</a>(organizationIdentifier, identifier) -> ZoneListResponse</code>

## Roles

Types:

- <code><a href="./src/resources/organizations/roles.ts">RoleRetrieveResponse</a></code>
- <code><a href="./src/resources/organizations/roles.ts">RoleOrganizationRolesListRolesResponse</a></code>

Methods:

- <code title="get /organizations/{organization_identifier}/roles/{identifier}">client.organizations.roles.<a href="./src/resources/organizations/roles.ts">retrieve</a>(organizationIdentifier, identifier) -> RoleRetrieveResponse</code>
- <code title="get /organizations/{organization_identifier}/roles">client.organizations.roles.<a href="./src/resources/organizations/roles.ts">organizationRolesListRoles</a>(organizationIdentifier) -> RoleOrganizationRolesListRolesResponse</code>

# Radar

## As112

### Summaries

#### Dnssecs

Types:

- <code><a href="./src/resources/radar/as112/summaries/dnssecs.ts">DnssecListResponse</a></code>

Methods:

- <code title="get /radar/as112/summary/dnssec">client.radar.as112.summaries.dnssecs.<a href="./src/resources/radar/as112/summaries/dnssecs.ts">list</a>({ ...params }) -> DnssecListResponse</code>

#### Edns

Types:

- <code><a href="./src/resources/radar/as112/summaries/edns.ts">EdnListResponse</a></code>

Methods:

- <code title="get /radar/as112/summary/edns">client.radar.as112.summaries.edns.<a href="./src/resources/radar/as112/summaries/edns.ts">list</a>({ ...params }) -> EdnListResponse</code>

#### IPVersions

Types:

- <code><a href="./src/resources/radar/as112/summaries/ip-versions.ts">IPVersionListResponse</a></code>

Methods:

- <code title="get /radar/as112/summary/ip_version">client.radar.as112.summaries.ipVersions.<a href="./src/resources/radar/as112/summaries/ip-versions.ts">list</a>({ ...params }) -> IPVersionListResponse</code>

#### Protocols

Types:

- <code><a href="./src/resources/radar/as112/summaries/protocols.ts">ProtocolListResponse</a></code>

Methods:

- <code title="get /radar/as112/summary/protocol">client.radar.as112.summaries.protocols.<a href="./src/resources/radar/as112/summaries/protocols.ts">list</a>({ ...params }) -> ProtocolListResponse</code>

#### QueryTypes

Types:

- <code><a href="./src/resources/radar/as112/summaries/query-types.ts">QueryTypeListResponse</a></code>

Methods:

- <code title="get /radar/as112/summary/query_type">client.radar.as112.summaries.queryTypes.<a href="./src/resources/radar/as112/summaries/query-types.ts">list</a>({ ...params }) -> QueryTypeListResponse</code>

#### ResponseCodes

Types:

- <code><a href="./src/resources/radar/as112/summaries/response-codes.ts">ResponseCodeListResponse</a></code>

Methods:

- <code title="get /radar/as112/summary/response_codes">client.radar.as112.summaries.responseCodes.<a href="./src/resources/radar/as112/summaries/response-codes.ts">list</a>({ ...params }) -> ResponseCodeListResponse</code>

### Timeseries

Types:

- <code><a href="./src/resources/radar/as112/timeseries.ts">TimeseryListResponse</a></code>

Methods:

- <code title="get /radar/as112/timeseries">client.radar.as112.timeseries.<a href="./src/resources/radar/as112/timeseries.ts">list</a>({ ...params }) -> TimeseryListResponse</code>

### Tops

#### Locations

Types:

- <code><a href="./src/resources/radar/as112/tops/locations/locations.ts">LocationListResponse</a></code>

Methods:

- <code title="get /radar/as112/top/locations">client.radar.as112.tops.locations.<a href="./src/resources/radar/as112/tops/locations/locations.ts">list</a>({ ...params }) -> LocationListResponse</code>

##### Dnssecs

Types:

- <code><a href="./src/resources/radar/as112/tops/locations/dnssecs.ts">DnssecRetrieveResponse</a></code>

Methods:

- <code title="get /radar/as112/top/locations/dnssec/{dnssec}">client.radar.as112.tops.locations.dnssecs.<a href="./src/resources/radar/as112/tops/locations/dnssecs.ts">retrieve</a>(dnssec, { ...params }) -> DnssecRetrieveResponse</code>

##### Edns

Types:

- <code><a href="./src/resources/radar/as112/tops/locations/edns.ts">EdnRetrieveResponse</a></code>

Methods:

- <code title="get /radar/as112/top/locations/edns/{edns}">client.radar.as112.tops.locations.edns.<a href="./src/resources/radar/as112/tops/locations/edns.ts">retrieve</a>(edns, { ...params }) -> EdnRetrieveResponse</code>

##### IPVersions

Types:

- <code><a href="./src/resources/radar/as112/tops/locations/ip-versions.ts">IPVersionRetrieveResponse</a></code>

Methods:

- <code title="get /radar/as112/top/locations/ip_version/{ip_version}">client.radar.as112.tops.locations.ipVersions.<a href="./src/resources/radar/as112/tops/locations/ip-versions.ts">retrieve</a>(ipVersion, { ...params }) -> IPVersionRetrieveResponse</code>

### TimeseriesGroups

#### Dnssec

Types:

- <code><a href="./src/resources/radar/as112/timeseries-groups/dnssec.ts">DnssecRetrieveResponse</a></code>

Methods:

- <code title="get /radar/as112/timeseries_groups/dnssec">client.radar.as112.timeseriesGroups.dnssec.<a href="./src/resources/radar/as112/timeseries-groups/dnssec.ts">retrieve</a>({ ...params }) -> DnssecRetrieveResponse</code>

#### Edns

Types:

- <code><a href="./src/resources/radar/as112/timeseries-groups/edns.ts">EdnRetrieveResponse</a></code>

Methods:

- <code title="get /radar/as112/timeseries_groups/edns">client.radar.as112.timeseriesGroups.edns.<a href="./src/resources/radar/as112/timeseries-groups/edns.ts">retrieve</a>({ ...params }) -> EdnRetrieveResponse</code>

#### IPVersion

Types:

- <code><a href="./src/resources/radar/as112/timeseries-groups/ip-version.ts">IPVersionRetrieveResponse</a></code>

Methods:

- <code title="get /radar/as112/timeseries_groups/ip_version">client.radar.as112.timeseriesGroups.ipVersion.<a href="./src/resources/radar/as112/timeseries-groups/ip-version.ts">retrieve</a>({ ...params }) -> IPVersionRetrieveResponse</code>

#### Protocol

Types:

- <code><a href="./src/resources/radar/as112/timeseries-groups/protocol.ts">ProtocolRetrieveResponse</a></code>

Methods:

- <code title="get /radar/as112/timeseries_groups/protocol">client.radar.as112.timeseriesGroups.protocol.<a href="./src/resources/radar/as112/timeseries-groups/protocol.ts">retrieve</a>({ ...params }) -> ProtocolRetrieveResponse</code>

#### QueryType

Types:

- <code><a href="./src/resources/radar/as112/timeseries-groups/query-type.ts">QueryTypeRetrieveResponse</a></code>

Methods:

- <code title="get /radar/as112/timeseries_groups/query_type">client.radar.as112.timeseriesGroups.queryType.<a href="./src/resources/radar/as112/timeseries-groups/query-type.ts">retrieve</a>({ ...params }) -> QueryTypeRetrieveResponse</code>

#### ResponseCodes

Types:

- <code><a href="./src/resources/radar/as112/timeseries-groups/response-codes.ts">ResponseCodeRetrieveResponse</a></code>

Methods:

- <code title="get /radar/as112/timeseries_groups/response_codes">client.radar.as112.timeseriesGroups.responseCodes.<a href="./src/resources/radar/as112/timeseries-groups/response-codes.ts">retrieve</a>({ ...params }) -> ResponseCodeRetrieveResponse</code>

## Quality

### Iqi

#### Summary

Types:

- <code><a href="./src/resources/radar/quality/iqi/summary.ts">SummaryRetrieveResponse</a></code>

Methods:

- <code title="get /radar/quality/iqi/summary">client.radar.quality.iqi.summary.<a href="./src/resources/radar/quality/iqi/summary.ts">retrieve</a>({ ...params }) -> SummaryRetrieveResponse</code>

#### TimeseriesGroups

Types:

- <code><a href="./src/resources/radar/quality/iqi/timeseries-groups.ts">TimeseriesGroupListResponse</a></code>

Methods:

- <code title="get /radar/quality/iqi/timeseries_groups">client.radar.quality.iqi.timeseriesGroups.<a href="./src/resources/radar/quality/iqi/timeseries-groups.ts">list</a>({ ...params }) -> TimeseriesGroupListResponse</code>

### Speed

#### Histogram

Types:

- <code><a href="./src/resources/radar/quality/speed/histogram.ts">HistogramRetrieveResponse</a></code>

Methods:

- <code title="get /radar/quality/speed/histogram">client.radar.quality.speed.histogram.<a href="./src/resources/radar/quality/speed/histogram.ts">retrieve</a>({ ...params }) -> HistogramRetrieveResponse</code>

#### Summary

Types:

- <code><a href="./src/resources/radar/quality/speed/summary.ts">SummaryRetrieveResponse</a></code>

Methods:

- <code title="get /radar/quality/speed/summary">client.radar.quality.speed.summary.<a href="./src/resources/radar/quality/speed/summary.ts">retrieve</a>({ ...params }) -> SummaryRetrieveResponse</code>

#### Top

##### Ases

Types:

- <code><a href="./src/resources/radar/quality/speed/top/ases.ts">AseListResponse</a></code>

Methods:

- <code title="get /radar/quality/speed/top/ases">client.radar.quality.speed.top.ases.<a href="./src/resources/radar/quality/speed/top/ases.ts">list</a>({ ...params }) -> AseListResponse</code>

##### Locations

Types:

- <code><a href="./src/resources/radar/quality/speed/top/locations.ts">LocationListResponse</a></code>

Methods:

- <code title="get /radar/quality/speed/top/locations">client.radar.quality.speed.top.locations.<a href="./src/resources/radar/quality/speed/top/locations.ts">list</a>({ ...params }) -> LocationListResponse</code>

## TrafficAnomalies

Types:

- <code><a href="./src/resources/radar/traffic-anomalies/traffic-anomalies.ts">TrafficAnomalyListResponse</a></code>

Methods:

- <code title="get /radar/traffic_anomalies">client.radar.trafficAnomalies.<a href="./src/resources/radar/traffic-anomalies/traffic-anomalies.ts">list</a>({ ...params }) -> TrafficAnomalyListResponse</code>

### Locations

Types:

- <code><a href="./src/resources/radar/traffic-anomalies/locations.ts">LocationListResponse</a></code>

Methods:

- <code title="get /radar/traffic_anomalies/locations">client.radar.trafficAnomalies.locations.<a href="./src/resources/radar/traffic-anomalies/locations.ts">list</a>({ ...params }) -> LocationListResponse</code>

## Annotations

### Outages

Types:

- <code><a href="./src/resources/radar/annotations/outages/outages.ts">OutageListResponse</a></code>

Methods:

- <code title="get /radar/annotations/outages">client.radar.annotations.outages.<a href="./src/resources/radar/annotations/outages/outages.ts">list</a>({ ...params }) -> OutageListResponse</code>

#### Locations

Types:

- <code><a href="./src/resources/radar/annotations/outages/locations.ts">LocationListResponse</a></code>

Methods:

- <code title="get /radar/annotations/outages/locations">client.radar.annotations.outages.locations.<a href="./src/resources/radar/annotations/outages/locations.ts">list</a>({ ...params }) -> LocationListResponse</code>

## Attacks

### Layer3

#### Attacks

Types:

- <code><a href="./src/resources/radar/attacks/layer3/attacks.ts">AttackListResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer3/top/attacks">client.radar.attacks.layer3.attacks.<a href="./src/resources/radar/attacks/layer3/attacks.ts">list</a>({ ...params }) -> AttackListResponse</code>

#### Industries

Types:

- <code><a href="./src/resources/radar/attacks/layer3/industries.ts">IndustryListResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer3/top/industry">client.radar.attacks.layer3.industries.<a href="./src/resources/radar/attacks/layer3/industries.ts">list</a>({ ...params }) -> IndustryListResponse</code>

#### Locations

##### Origin

Types:

- <code><a href="./src/resources/radar/attacks/layer3/locations/origin.ts">OriginListResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer3/top/locations/origin">client.radar.attacks.layer3.locations.origin.<a href="./src/resources/radar/attacks/layer3/locations/origin.ts">list</a>({ ...params }) -> OriginListResponse</code>

##### Target

Types:

- <code><a href="./src/resources/radar/attacks/layer3/locations/target.ts">TargetListResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer3/top/locations/target">client.radar.attacks.layer3.locations.target.<a href="./src/resources/radar/attacks/layer3/locations/target.ts">list</a>({ ...params }) -> TargetListResponse</code>

#### Verticals

Types:

- <code><a href="./src/resources/radar/attacks/layer3/verticals.ts">VerticalListResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer3/top/vertical">client.radar.attacks.layer3.verticals.<a href="./src/resources/radar/attacks/layer3/verticals.ts">list</a>({ ...params }) -> VerticalListResponse</code>

#### Summaries

Types:

- <code><a href="./src/resources/radar/attacks/layer3/summaries/summaries.ts">SummaryListResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer3/summary">client.radar.attacks.layer3.summaries.<a href="./src/resources/radar/attacks/layer3/summaries/summaries.ts">list</a>({ ...params }) -> SummaryListResponse</code>

##### Bitrate

Types:

- <code><a href="./src/resources/radar/attacks/layer3/summaries/bitrate.ts">BitrateRetrieveResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer3/summary/bitrate">client.radar.attacks.layer3.summaries.bitrate.<a href="./src/resources/radar/attacks/layer3/summaries/bitrate.ts">retrieve</a>({ ...params }) -> BitrateRetrieveResponse</code>

##### Durations

Types:

- <code><a href="./src/resources/radar/attacks/layer3/summaries/durations.ts">DurationListResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer3/summary/duration">client.radar.attacks.layer3.summaries.durations.<a href="./src/resources/radar/attacks/layer3/summaries/durations.ts">list</a>({ ...params }) -> DurationListResponse</code>

##### IPVersions

Types:

- <code><a href="./src/resources/radar/attacks/layer3/summaries/ip-versions.ts">IPVersionListResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer3/summary/ip_version">client.radar.attacks.layer3.summaries.ipVersions.<a href="./src/resources/radar/attacks/layer3/summaries/ip-versions.ts">list</a>({ ...params }) -> IPVersionListResponse</code>

##### Protocols

Types:

- <code><a href="./src/resources/radar/attacks/layer3/summaries/protocols.ts">ProtocolListResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer3/summary/protocol">client.radar.attacks.layer3.summaries.protocols.<a href="./src/resources/radar/attacks/layer3/summaries/protocols.ts">list</a>({ ...params }) -> ProtocolListResponse</code>

##### Vectors

Types:

- <code><a href="./src/resources/radar/attacks/layer3/summaries/vectors.ts">VectorListResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer3/summary/vector">client.radar.attacks.layer3.summaries.vectors.<a href="./src/resources/radar/attacks/layer3/summaries/vectors.ts">list</a>({ ...params }) -> VectorListResponse</code>

#### Timeseries

Types:

- <code><a href="./src/resources/radar/attacks/layer3/timeseries.ts">TimeseryListResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer3/timeseries">client.radar.attacks.layer3.timeseries.<a href="./src/resources/radar/attacks/layer3/timeseries.ts">list</a>({ ...params }) -> TimeseryListResponse</code>

#### TimeseriesGroups

Types:

- <code><a href="./src/resources/radar/attacks/layer3/timeseries-groups/timeseries-groups.ts">TimeseriesGroupListResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer3/timeseries_groups">client.radar.attacks.layer3.timeseriesGroups.<a href="./src/resources/radar/attacks/layer3/timeseries-groups/timeseries-groups.ts">list</a>({ ...params }) -> TimeseriesGroupListResponse</code>

##### Bitrates

Types:

- <code><a href="./src/resources/radar/attacks/layer3/timeseries-groups/bitrates.ts">BitrateListResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer3/timeseries_groups/bitrate">client.radar.attacks.layer3.timeseriesGroups.bitrates.<a href="./src/resources/radar/attacks/layer3/timeseries-groups/bitrates.ts">list</a>({ ...params }) -> BitrateListResponse</code>

##### Durations

Types:

- <code><a href="./src/resources/radar/attacks/layer3/timeseries-groups/durations.ts">DurationListResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer3/timeseries_groups/duration">client.radar.attacks.layer3.timeseriesGroups.durations.<a href="./src/resources/radar/attacks/layer3/timeseries-groups/durations.ts">list</a>({ ...params }) -> DurationListResponse</code>

##### Industries

Types:

- <code><a href="./src/resources/radar/attacks/layer3/timeseries-groups/industries.ts">IndustryListResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer3/timeseries_groups/industry">client.radar.attacks.layer3.timeseriesGroups.industries.<a href="./src/resources/radar/attacks/layer3/timeseries-groups/industries.ts">list</a>({ ...params }) -> IndustryListResponse</code>

##### IPVersions

Types:

- <code><a href="./src/resources/radar/attacks/layer3/timeseries-groups/ip-versions.ts">IPVersionListResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer3/timeseries_groups/ip_version">client.radar.attacks.layer3.timeseriesGroups.ipVersions.<a href="./src/resources/radar/attacks/layer3/timeseries-groups/ip-versions.ts">list</a>({ ...params }) -> IPVersionListResponse</code>

##### Protocols

Types:

- <code><a href="./src/resources/radar/attacks/layer3/timeseries-groups/protocols.ts">ProtocolListResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer3/timeseries_groups/protocol">client.radar.attacks.layer3.timeseriesGroups.protocols.<a href="./src/resources/radar/attacks/layer3/timeseries-groups/protocols.ts">list</a>({ ...params }) -> ProtocolListResponse</code>

##### Vectors

Types:

- <code><a href="./src/resources/radar/attacks/layer3/timeseries-groups/vectors.ts">VectorListResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer3/timeseries_groups/vector">client.radar.attacks.layer3.timeseriesGroups.vectors.<a href="./src/resources/radar/attacks/layer3/timeseries-groups/vectors.ts">list</a>({ ...params }) -> VectorListResponse</code>

##### Vertical

Types:

- <code><a href="./src/resources/radar/attacks/layer3/timeseries-groups/vertical.ts">VerticalListResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer3/timeseries_groups/vertical">client.radar.attacks.layer3.timeseriesGroups.vertical.<a href="./src/resources/radar/attacks/layer3/timeseries-groups/vertical.ts">list</a>({ ...params }) -> VerticalListResponse</code>

### Layer7

#### Summaries

Types:

- <code><a href="./src/resources/radar/attacks/layer7/summaries/summaries.ts">SummaryListResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer7/summary">client.radar.attacks.layer7.summaries.<a href="./src/resources/radar/attacks/layer7/summaries/summaries.ts">list</a>({ ...params }) -> SummaryListResponse</code>

##### HTTPMethod

Types:

- <code><a href="./src/resources/radar/attacks/layer7/summaries/http-method.ts">HTTPMethodListResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer7/summary/http_method">client.radar.attacks.layer7.summaries.httpMethod.<a href="./src/resources/radar/attacks/layer7/summaries/http-method.ts">list</a>({ ...params }) -> HTTPMethodListResponse</code>

##### HTTPVersion

Types:

- <code><a href="./src/resources/radar/attacks/layer7/summaries/http-version.ts">HTTPVersionListResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer7/summary/http_version">client.radar.attacks.layer7.summaries.httpVersion.<a href="./src/resources/radar/attacks/layer7/summaries/http-version.ts">list</a>({ ...params }) -> HTTPVersionListResponse</code>

##### IPVersion

Types:

- <code><a href="./src/resources/radar/attacks/layer7/summaries/ip-version.ts">IPVersionListResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer7/summary/ip_version">client.radar.attacks.layer7.summaries.ipVersion.<a href="./src/resources/radar/attacks/layer7/summaries/ip-version.ts">list</a>({ ...params }) -> IPVersionListResponse</code>

##### ManagedRules

Types:

- <code><a href="./src/resources/radar/attacks/layer7/summaries/managed-rules.ts">ManagedRuleListResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer7/summary/managed_rules">client.radar.attacks.layer7.summaries.managedRules.<a href="./src/resources/radar/attacks/layer7/summaries/managed-rules.ts">list</a>({ ...params }) -> ManagedRuleListResponse</code>

#### MitigationProducts

Types:

- <code><a href="./src/resources/radar/attacks/layer7/mitigation-products.ts">MitigationProductListResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer7/mitigation-products.ts">MitigationProductListTimeseriesGroupsResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer7/summary/mitigation_product">client.radar.attacks.layer7.mitigationProducts.<a href="./src/resources/radar/attacks/layer7/mitigation-products.ts">list</a>({ ...params }) -> MitigationProductListResponse</code>
- <code title="get /radar/attacks/layer7/timeseries_groups/mitigation_product">client.radar.attacks.layer7.mitigationProducts.<a href="./src/resources/radar/attacks/layer7/mitigation-products.ts">listTimeseriesGroups</a>({ ...params }) -> MitigationProductListTimeseriesGroupsResponse</code>

#### HTTPMethods

Types:

- <code><a href="./src/resources/radar/attacks/layer7/http-methods.ts">HTTPMethodListTimeseriesGroupsResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer7/timeseries_groups/http_method">client.radar.attacks.layer7.httpMethods.<a href="./src/resources/radar/attacks/layer7/http-methods.ts">listTimeseriesGroups</a>({ ...params }) -> HTTPMethodListTimeseriesGroupsResponse</code>

#### HTTPVersions

Types:

- <code><a href="./src/resources/radar/attacks/layer7/http-versions.ts">HTTPVersionListTimeseriesGroupsResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer7/timeseries_groups/http_version">client.radar.attacks.layer7.httpVersions.<a href="./src/resources/radar/attacks/layer7/http-versions.ts">listTimeseriesGroups</a>({ ...params }) -> HTTPVersionListTimeseriesGroupsResponse</code>

#### Industries

Types:

- <code><a href="./src/resources/radar/attacks/layer7/industries.ts">IndustryListTimeseriesGroupsResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer7/industries.ts">IndustryListTopsResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer7/timeseries_groups/industry">client.radar.attacks.layer7.industries.<a href="./src/resources/radar/attacks/layer7/industries.ts">listTimeseriesGroups</a>({ ...params }) -> IndustryListTimeseriesGroupsResponse</code>
- <code title="get /radar/attacks/layer7/top/industry">client.radar.attacks.layer7.industries.<a href="./src/resources/radar/attacks/layer7/industries.ts">listTops</a>({ ...params }) -> IndustryListTopsResponse</code>

#### IPVersions

Types:

- <code><a href="./src/resources/radar/attacks/layer7/ip-versions.ts">IPVersionListTimeseriesGroupsResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer7/timeseries_groups/ip_version">client.radar.attacks.layer7.ipVersions.<a href="./src/resources/radar/attacks/layer7/ip-versions.ts">listTimeseriesGroups</a>({ ...params }) -> IPVersionListTimeseriesGroupsResponse</code>

#### ManagedRules

Types:

- <code><a href="./src/resources/radar/attacks/layer7/managed-rules.ts">ManagedRuleListTimeseriesGroupsResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer7/timeseries_groups/managed_rules">client.radar.attacks.layer7.managedRules.<a href="./src/resources/radar/attacks/layer7/managed-rules.ts">listTimeseriesGroups</a>({ ...params }) -> ManagedRuleListTimeseriesGroupsResponse</code>

#### Verticals

Types:

- <code><a href="./src/resources/radar/attacks/layer7/verticals.ts">VerticalListTimeseriesGroupsResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer7/verticals.ts">VerticalListTopsResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer7/timeseries_groups/vertical">client.radar.attacks.layer7.verticals.<a href="./src/resources/radar/attacks/layer7/verticals.ts">listTimeseriesGroups</a>({ ...params }) -> VerticalListTimeseriesGroupsResponse</code>
- <code title="get /radar/attacks/layer7/top/vertical">client.radar.attacks.layer7.verticals.<a href="./src/resources/radar/attacks/layer7/verticals.ts">listTops</a>({ ...params }) -> VerticalListTopsResponse</code>

#### Timeseries

Types:

- <code><a href="./src/resources/radar/attacks/layer7/timeseries.ts">TimeseryListResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer7/timeseries">client.radar.attacks.layer7.timeseries.<a href="./src/resources/radar/attacks/layer7/timeseries.ts">list</a>({ ...params }) -> TimeseryListResponse</code>

#### TimeseriesGroups

Types:

- <code><a href="./src/resources/radar/attacks/layer7/timeseries-groups.ts">TimeseriesGroupListResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer7/timeseries_groups">client.radar.attacks.layer7.timeseriesGroups.<a href="./src/resources/radar/attacks/layer7/timeseries-groups.ts">list</a>({ ...params }) -> TimeseriesGroupListResponse</code>

#### Tops

##### Ases

###### Origins

Types:

- <code><a href="./src/resources/radar/attacks/layer7/tops/ases/origins.ts">OriginListResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer7/top/ases/origin">client.radar.attacks.layer7.tops.ases.origins.<a href="./src/resources/radar/attacks/layer7/tops/ases/origins.ts">list</a>({ ...params }) -> OriginListResponse</code>

##### Attacks

Types:

- <code><a href="./src/resources/radar/attacks/layer7/tops/attacks.ts">AttackListResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer7/top/attacks">client.radar.attacks.layer7.tops.attacks.<a href="./src/resources/radar/attacks/layer7/tops/attacks.ts">list</a>({ ...params }) -> AttackListResponse</code>

##### Locations

###### Origins

Types:

- <code><a href="./src/resources/radar/attacks/layer7/tops/locations/origins.ts">OriginListResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer7/top/locations/origin">client.radar.attacks.layer7.tops.locations.origins.<a href="./src/resources/radar/attacks/layer7/tops/locations/origins.ts">list</a>({ ...params }) -> OriginListResponse</code>

###### Targets

Types:

- <code><a href="./src/resources/radar/attacks/layer7/tops/locations/targets.ts">TargetListResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer7/top/locations/target">client.radar.attacks.layer7.tops.locations.targets.<a href="./src/resources/radar/attacks/layer7/tops/locations/targets.ts">list</a>({ ...params }) -> TargetListResponse</code>

## Bgps

### Leaks

#### Events

Types:

- <code><a href="./src/resources/radar/bgps/leaks/events.ts">EventListResponse</a></code>

Methods:

- <code title="get /radar/bgp/leaks/events">client.radar.bgps.leaks.events.<a href="./src/resources/radar/bgps/leaks/events.ts">list</a>({ ...params }) -> EventListResponse</code>

### Timeseries

Types:

- <code><a href="./src/resources/radar/bgps/timeseries.ts">TimeseryListResponse</a></code>

Methods:

- <code title="get /radar/bgp/timeseries">client.radar.bgps.timeseries.<a href="./src/resources/radar/bgps/timeseries.ts">list</a>({ ...params }) -> TimeseryListResponse</code>

### Tops

#### Ases

Types:

- <code><a href="./src/resources/radar/bgps/tops/ases/ases.ts">AseListResponse</a></code>

Methods:

- <code title="get /radar/bgp/top/ases">client.radar.bgps.tops.ases.<a href="./src/resources/radar/bgps/tops/ases/ases.ts">list</a>({ ...params }) -> AseListResponse</code>

##### Prefixes

Types:

- <code><a href="./src/resources/radar/bgps/tops/ases/prefixes.ts">PrefixListResponse</a></code>

Methods:

- <code title="get /radar/bgp/top/ases/prefixes">client.radar.bgps.tops.ases.prefixes.<a href="./src/resources/radar/bgps/tops/ases/prefixes.ts">list</a>({ ...params }) -> PrefixListResponse</code>

#### Prefixes

Types:

- <code><a href="./src/resources/radar/bgps/tops/prefixes.ts">PrefixListResponse</a></code>

Methods:

- <code title="get /radar/bgp/top/prefixes">client.radar.bgps.tops.prefixes.<a href="./src/resources/radar/bgps/tops/prefixes.ts">list</a>({ ...params }) -> PrefixListResponse</code>

### HijacksEvents

Types:

- <code><a href="./src/resources/radar/bgps/hijacks-events.ts">HijacksEventListResponse</a></code>

Methods:

- <code title="get /radar/bgp/hijacks/events">client.radar.bgps.hijacksEvents.<a href="./src/resources/radar/bgps/hijacks-events.ts">list</a>({ ...params }) -> HijacksEventListResponse</code>

### Routes

#### Moas

Types:

- <code><a href="./src/resources/radar/bgps/routes/moas.ts">MoaListResponse</a></code>

Methods:

- <code title="get /radar/bgp/routes/moas">client.radar.bgps.routes.moas.<a href="./src/resources/radar/bgps/routes/moas.ts">list</a>({ ...params }) -> MoaListResponse</code>

#### Pfx2as

Types:

- <code><a href="./src/resources/radar/bgps/routes/pfx2as.ts">Pfx2aListResponse</a></code>

Methods:

- <code title="get /radar/bgp/routes/pfx2as">client.radar.bgps.routes.pfx2as.<a href="./src/resources/radar/bgps/routes/pfx2as.ts">list</a>({ ...params }) -> Pfx2aListResponse</code>

#### Stats

Types:

- <code><a href="./src/resources/radar/bgps/routes/stats.ts">StatListResponse</a></code>

Methods:

- <code title="get /radar/bgp/routes/stats">client.radar.bgps.routes.stats.<a href="./src/resources/radar/bgps/routes/stats.ts">list</a>({ ...params }) -> StatListResponse</code>

## Datasets

Types:

- <code><a href="./src/resources/radar/datasets/datasets.ts">DatasetRetrieveResponse</a></code>
- <code><a href="./src/resources/radar/datasets/datasets.ts">DatasetListResponse</a></code>

Methods:

- <code title="get /radar/datasets/{alias}">client.radar.datasets.<a href="./src/resources/radar/datasets/datasets.ts">retrieve</a>(alias, { ...params }) -> string</code>
- <code title="get /radar/datasets">client.radar.datasets.<a href="./src/resources/radar/datasets/datasets.ts">list</a>({ ...params }) -> DatasetListResponse</code>

### Downloads

Types:

- <code><a href="./src/resources/radar/datasets/downloads.ts">DownloadRadarPostDatasetDownloadResponse</a></code>

Methods:

- <code title="post /radar/datasets/download">client.radar.datasets.downloads.<a href="./src/resources/radar/datasets/downloads.ts">radarPostDatasetDownload</a>({ ...params }) -> DownloadRadarPostDatasetDownloadResponse</code>

## DNS

### Tops

#### Ases

Types:

- <code><a href="./src/resources/radar/dns/tops/ases.ts">AseListResponse</a></code>

Methods:

- <code title="get /radar/dns/top/ases">client.radar.dns.tops.ases.<a href="./src/resources/radar/dns/tops/ases.ts">list</a>({ ...params }) -> AseListResponse</code>

#### Locations

Types:

- <code><a href="./src/resources/radar/dns/tops/locations.ts">LocationListResponse</a></code>

Methods:

- <code title="get /radar/dns/top/locations">client.radar.dns.tops.locations.<a href="./src/resources/radar/dns/tops/locations.ts">list</a>({ ...params }) -> LocationListResponse</code>

## Email

### Security

#### ArcSummary

Types:

- <code><a href="./src/resources/radar/email/security/arc-summary.ts">ArcSummaryListResponse</a></code>

Methods:

- <code title="get /radar/email/security/summary/arc">client.radar.email.security.arcSummary.<a href="./src/resources/radar/email/security/arc-summary.ts">list</a>({ ...params }) -> ArcSummaryListResponse</code>

#### DkimSummary

Types:

- <code><a href="./src/resources/radar/email/security/dkim-summary.ts">DkimSummaryListResponse</a></code>

Methods:

- <code title="get /radar/email/security/summary/dkim">client.radar.email.security.dkimSummary.<a href="./src/resources/radar/email/security/dkim-summary.ts">list</a>({ ...params }) -> DkimSummaryListResponse</code>

#### DmarcSummary

Types:

- <code><a href="./src/resources/radar/email/security/dmarc-summary.ts">DmarcSummaryListResponse</a></code>

Methods:

- <code title="get /radar/email/security/summary/dmarc">client.radar.email.security.dmarcSummary.<a href="./src/resources/radar/email/security/dmarc-summary.ts">list</a>({ ...params }) -> DmarcSummaryListResponse</code>

#### MaliciousSummary

Types:

- <code><a href="./src/resources/radar/email/security/malicious-summary.ts">MaliciousSummaryListResponse</a></code>

Methods:

- <code title="get /radar/email/security/summary/malicious">client.radar.email.security.maliciousSummary.<a href="./src/resources/radar/email/security/malicious-summary.ts">list</a>({ ...params }) -> MaliciousSummaryListResponse</code>

#### SpamSummary

Types:

- <code><a href="./src/resources/radar/email/security/spam-summary.ts">SpamSummaryListResponse</a></code>

Methods:

- <code title="get /radar/email/security/summary/spam">client.radar.email.security.spamSummary.<a href="./src/resources/radar/email/security/spam-summary.ts">list</a>({ ...params }) -> SpamSummaryListResponse</code>

#### SpfSummary

Types:

- <code><a href="./src/resources/radar/email/security/spf-summary.ts">SpfSummaryListResponse</a></code>

Methods:

- <code title="get /radar/email/security/summary/spf">client.radar.email.security.spfSummary.<a href="./src/resources/radar/email/security/spf-summary.ts">list</a>({ ...params }) -> SpfSummaryListResponse</code>

#### ThreatCategorySummary

Types:

- <code><a href="./src/resources/radar/email/security/threat-category-summary.ts">ThreatCategorySummaryListResponse</a></code>

Methods:

- <code title="get /radar/email/security/summary/threat_category">client.radar.email.security.threatCategorySummary.<a href="./src/resources/radar/email/security/threat-category-summary.ts">list</a>({ ...params }) -> ThreatCategorySummaryListResponse</code>

#### ArcTimeseries

Types:

- <code><a href="./src/resources/radar/email/security/arc-timeseries.ts">ArcTimeseryListResponse</a></code>

Methods:

- <code title="get /radar/email/security/timeseries_groups/arc">client.radar.email.security.arcTimeseries.<a href="./src/resources/radar/email/security/arc-timeseries.ts">list</a>({ ...params }) -> ArcTimeseryListResponse</code>

#### DkimTimeseries

Types:

- <code><a href="./src/resources/radar/email/security/dkim-timeseries.ts">DkimTimeseryListResponse</a></code>

Methods:

- <code title="get /radar/email/security/timeseries_groups/dkim">client.radar.email.security.dkimTimeseries.<a href="./src/resources/radar/email/security/dkim-timeseries.ts">list</a>({ ...params }) -> DkimTimeseryListResponse</code>

#### DmarcTimeseries

Types:

- <code><a href="./src/resources/radar/email/security/dmarc-timeseries.ts">DmarcTimeseryListResponse</a></code>

Methods:

- <code title="get /radar/email/security/timeseries_groups/dmarc">client.radar.email.security.dmarcTimeseries.<a href="./src/resources/radar/email/security/dmarc-timeseries.ts">list</a>({ ...params }) -> DmarcTimeseryListResponse</code>

#### MaliciousTimeseries

Types:

- <code><a href="./src/resources/radar/email/security/malicious-timeseries.ts">MaliciousTimeseryListResponse</a></code>

Methods:

- <code title="get /radar/email/security/timeseries_groups/malicious">client.radar.email.security.maliciousTimeseries.<a href="./src/resources/radar/email/security/malicious-timeseries.ts">list</a>({ ...params }) -> MaliciousTimeseryListResponse</code>

#### SpamTimeseries

Types:

- <code><a href="./src/resources/radar/email/security/spam-timeseries.ts">SpamTimeseryListResponse</a></code>

Methods:

- <code title="get /radar/email/security/timeseries_groups/spam">client.radar.email.security.spamTimeseries.<a href="./src/resources/radar/email/security/spam-timeseries.ts">list</a>({ ...params }) -> SpamTimeseryListResponse</code>

#### SpfTimeseries

Types:

- <code><a href="./src/resources/radar/email/security/spf-timeseries.ts">SpfTimeseryListResponse</a></code>

Methods:

- <code title="get /radar/email/security/timeseries_groups/spf">client.radar.email.security.spfTimeseries.<a href="./src/resources/radar/email/security/spf-timeseries.ts">list</a>({ ...params }) -> SpfTimeseryListResponse</code>

#### TmeseriesGroups

##### ThreatCategories

Types:

- <code><a href="./src/resources/radar/email/security/tmeseries-groups/threat-categories.ts">ThreatCategoryListResponse</a></code>

Methods:

- <code title="get /radar/email/security/timeseries_groups/threat_category">client.radar.email.security.tmeseriesGroups.threatCategories.<a href="./src/resources/radar/email/security/tmeseries-groups/threat-categories.ts">list</a>({ ...params }) -> ThreatCategoryListResponse</code>

#### Top

##### Ases

Types:

- <code><a href="./src/resources/radar/email/security/top/ases/ases.ts">AseListResponse</a></code>

Methods:

- <code title="get /radar/email/security/top/ases">client.radar.email.security.top.ases.<a href="./src/resources/radar/email/security/top/ases/ases.ts">list</a>({ ...params }) -> AseListResponse</code>

###### Arc

Types:

- <code><a href="./src/resources/radar/email/security/top/ases/arc.ts">ArcRetrieveResponse</a></code>

Methods:

- <code title="get /radar/email/security/top/ases/arc/{arc}">client.radar.email.security.top.ases.arc.<a href="./src/resources/radar/email/security/top/ases/arc.ts">retrieve</a>(arc, { ...params }) -> ArcRetrieveResponse</code>

###### Dkim

Types:

- <code><a href="./src/resources/radar/email/security/top/ases/dkim.ts">DkimRetrieveResponse</a></code>

Methods:

- <code title="get /radar/email/security/top/ases/dkim/{dkim}">client.radar.email.security.top.ases.dkim.<a href="./src/resources/radar/email/security/top/ases/dkim.ts">retrieve</a>(dkim, { ...params }) -> DkimRetrieveResponse</code>

###### Dmarc

Types:

- <code><a href="./src/resources/radar/email/security/top/ases/dmarc.ts">DmarcRetrieveResponse</a></code>

Methods:

- <code title="get /radar/email/security/top/ases/dmarc/{dmarc}">client.radar.email.security.top.ases.dmarc.<a href="./src/resources/radar/email/security/top/ases/dmarc.ts">retrieve</a>(dmarc, { ...params }) -> DmarcRetrieveResponse</code>

###### Malicious

Types:

- <code><a href="./src/resources/radar/email/security/top/ases/malicious.ts">MaliciousRetrieveResponse</a></code>

Methods:

- <code title="get /radar/email/security/top/ases/malicious/{malicious}">client.radar.email.security.top.ases.malicious.<a href="./src/resources/radar/email/security/top/ases/malicious.ts">retrieve</a>(malicious, { ...params }) -> MaliciousRetrieveResponse</code>

###### Spam

Types:

- <code><a href="./src/resources/radar/email/security/top/ases/spam.ts">SpamRetrieveResponse</a></code>

Methods:

- <code title="get /radar/email/security/top/ases/spam/{spam}">client.radar.email.security.top.ases.spam.<a href="./src/resources/radar/email/security/top/ases/spam.ts">retrieve</a>(spam, { ...params }) -> SpamRetrieveResponse</code>

###### Spf

Types:

- <code><a href="./src/resources/radar/email/security/top/ases/spf.ts">SpfRetrieveResponse</a></code>

Methods:

- <code title="get /radar/email/security/top/ases/spf/{spf}">client.radar.email.security.top.ases.spf.<a href="./src/resources/radar/email/security/top/ases/spf.ts">retrieve</a>(spf, { ...params }) -> SpfRetrieveResponse</code>

##### Locations

Types:

- <code><a href="./src/resources/radar/email/security/top/locations/locations.ts">LocationListResponse</a></code>

Methods:

- <code title="get /radar/email/security/top/locations">client.radar.email.security.top.locations.<a href="./src/resources/radar/email/security/top/locations/locations.ts">list</a>({ ...params }) -> LocationListResponse</code>

###### Arc

Types:

- <code><a href="./src/resources/radar/email/security/top/locations/arc.ts">ArcRetrieveResponse</a></code>

Methods:

- <code title="get /radar/email/security/top/locations/arc/{arc}">client.radar.email.security.top.locations.arc.<a href="./src/resources/radar/email/security/top/locations/arc.ts">retrieve</a>(arc, { ...params }) -> ArcRetrieveResponse</code>

###### ByDkim

Types:

- <code><a href="./src/resources/radar/email/security/top/locations/by-dkim.ts">ByDkimListResponse</a></code>

Methods:

- <code title="get /radar/email/security/top/locations/dkim/{dkim}">client.radar.email.security.top.locations.byDkim.<a href="./src/resources/radar/email/security/top/locations/by-dkim.ts">list</a>(dkim, { ...params }) -> ByDkimListResponse</code>

###### ByDmarc

Types:

- <code><a href="./src/resources/radar/email/security/top/locations/by-dmarc.ts">ByDmarcListResponse</a></code>

Methods:

- <code title="get /radar/email/security/top/locations/dmarc/{dmarc}">client.radar.email.security.top.locations.byDmarc.<a href="./src/resources/radar/email/security/top/locations/by-dmarc.ts">list</a>(dmarc, { ...params }) -> ByDmarcListResponse</code>

###### ByMalicious

Types:

- <code><a href="./src/resources/radar/email/security/top/locations/by-malicious.ts">ByMaliciousListResponse</a></code>

Methods:

- <code title="get /radar/email/security/top/locations/malicious/{malicious}">client.radar.email.security.top.locations.byMalicious.<a href="./src/resources/radar/email/security/top/locations/by-malicious.ts">list</a>(malicious, { ...params }) -> ByMaliciousListResponse</code>

###### BySpam

Types:

- <code><a href="./src/resources/radar/email/security/top/locations/by-spam.ts">BySpamListResponse</a></code>

Methods:

- <code title="get /radar/email/security/top/locations/spam/{spam}">client.radar.email.security.top.locations.bySpam.<a href="./src/resources/radar/email/security/top/locations/by-spam.ts">list</a>(spam, { ...params }) -> BySpamListResponse</code>

###### BySpf

Types:

- <code><a href="./src/resources/radar/email/security/top/locations/by-spf.ts">BySpfListResponse</a></code>

Methods:

- <code title="get /radar/email/security/top/locations/spf/{spf}">client.radar.email.security.top.locations.bySpf.<a href="./src/resources/radar/email/security/top/locations/by-spf.ts">list</a>(spf, { ...params }) -> BySpfListResponse</code>

## Entities

### ASNs

Types:

- <code><a href="./src/resources/radar/entities/asns/asns.ts">ASNRetrieveResponse</a></code>
- <code><a href="./src/resources/radar/entities/asns/asns.ts">ASNListResponse</a></code>

Methods:

- <code title="get /radar/entities/asns/{asn}">client.radar.entities.asns.<a href="./src/resources/radar/entities/asns/asns.ts">retrieve</a>(asn, { ...params }) -> ASNRetrieveResponse</code>
- <code title="get /radar/entities/asns">client.radar.entities.asns.<a href="./src/resources/radar/entities/asns/asns.ts">list</a>({ ...params }) -> ASNListResponse</code>

#### IPs

Types:

- <code><a href="./src/resources/radar/entities/asns/ips.ts">IPListResponse</a></code>

Methods:

- <code title="get /radar/entities/asns/ip">client.radar.entities.asns.ips.<a href="./src/resources/radar/entities/asns/ips.ts">list</a>({ ...params }) -> IPListResponse</code>

#### Relationships

Types:

- <code><a href="./src/resources/radar/entities/asns/relationships.ts">RelationshipListResponse</a></code>

Methods:

- <code title="get /radar/entities/asns/{asn}/rel">client.radar.entities.asns.relationships.<a href="./src/resources/radar/entities/asns/relationships.ts">list</a>(asn, { ...params }) -> RelationshipListResponse</code>

### IPs

Types:

- <code><a href="./src/resources/radar/entities/ips.ts">IPListResponse</a></code>

Methods:

- <code title="get /radar/entities/ip">client.radar.entities.ips.<a href="./src/resources/radar/entities/ips.ts">list</a>({ ...params }) -> IPListResponse</code>

### Locations

Types:

- <code><a href="./src/resources/radar/entities/locations.ts">LocationRetrieveResponse</a></code>
- <code><a href="./src/resources/radar/entities/locations.ts">LocationListResponse</a></code>

Methods:

- <code title="get /radar/entities/locations/{location}">client.radar.entities.locations.<a href="./src/resources/radar/entities/locations.ts">retrieve</a>(location, { ...params }) -> LocationRetrieveResponse</code>
- <code title="get /radar/entities/locations">client.radar.entities.locations.<a href="./src/resources/radar/entities/locations.ts">list</a>({ ...params }) -> LocationListResponse</code>

## HTTP

### Summaries

#### BotClasses

Types:

- <code><a href="./src/resources/radar/http/summaries/bot-classes.ts">BotClassListResponse</a></code>

Methods:

- <code title="get /radar/http/summary/bot_class">client.radar.http.summaries.botClasses.<a href="./src/resources/radar/http/summaries/bot-classes.ts">list</a>({ ...params }) -> BotClassListResponse</code>

#### DeviceTypes

Types:

- <code><a href="./src/resources/radar/http/summaries/device-types.ts">DeviceTypeListResponse</a></code>

Methods:

- <code title="get /radar/http/summary/device_type">client.radar.http.summaries.deviceTypes.<a href="./src/resources/radar/http/summaries/device-types.ts">list</a>({ ...params }) -> DeviceTypeListResponse</code>

#### HTTPProtocols

Types:

- <code><a href="./src/resources/radar/http/summaries/http-protocols.ts">HTTPProtocolListResponse</a></code>

Methods:

- <code title="get /radar/http/summary/http_protocol">client.radar.http.summaries.httpProtocols.<a href="./src/resources/radar/http/summaries/http-protocols.ts">list</a>({ ...params }) -> HTTPProtocolListResponse</code>

#### HTTPVersions

Types:

- <code><a href="./src/resources/radar/http/summaries/http-versions.ts">HTTPVersionListResponse</a></code>

Methods:

- <code title="get /radar/http/summary/http_version">client.radar.http.summaries.httpVersions.<a href="./src/resources/radar/http/summaries/http-versions.ts">list</a>({ ...params }) -> HTTPVersionListResponse</code>

#### IPVersions

Types:

- <code><a href="./src/resources/radar/http/summaries/ip-versions.ts">IPVersionListResponse</a></code>

Methods:

- <code title="get /radar/http/summary/ip_version">client.radar.http.summaries.ipVersions.<a href="./src/resources/radar/http/summaries/ip-versions.ts">list</a>({ ...params }) -> IPVersionListResponse</code>

#### Os

Types:

- <code><a href="./src/resources/radar/http/summaries/os.ts">OListResponse</a></code>

Methods:

- <code title="get /radar/http/summary/os">client.radar.http.summaries.os.<a href="./src/resources/radar/http/summaries/os.ts">list</a>({ ...params }) -> OListResponse</code>

#### TlsVersions

Types:

- <code><a href="./src/resources/radar/http/summaries/tls-versions.ts">TlsVersionListResponse</a></code>

Methods:

- <code title="get /radar/http/summary/tls_version">client.radar.http.summaries.tlsVersions.<a href="./src/resources/radar/http/summaries/tls-versions.ts">list</a>({ ...params }) -> TlsVersionListResponse</code>

### TimeseriesGroups

#### ByBotClass

Types:

- <code><a href="./src/resources/radar/http/timeseries-groups/by-bot-class.ts">ByBotClassListResponse</a></code>

Methods:

- <code title="get /radar/http/timeseries_groups/bot_class">client.radar.http.timeseriesGroups.byBotClass.<a href="./src/resources/radar/http/timeseries-groups/by-bot-class.ts">list</a>({ ...params }) -> ByBotClassListResponse</code>

#### ByBrowser

Types:

- <code><a href="./src/resources/radar/http/timeseries-groups/by-browser.ts">ByBrowserListResponse</a></code>

Methods:

- <code title="get /radar/http/timeseries_groups/browser">client.radar.http.timeseriesGroups.byBrowser.<a href="./src/resources/radar/http/timeseries-groups/by-browser.ts">list</a>({ ...params }) -> ByBrowserListResponse</code>

#### ByBrowserFamily

Types:

- <code><a href="./src/resources/radar/http/timeseries-groups/by-browser-family.ts">ByBrowserFamilyListResponse</a></code>

Methods:

- <code title="get /radar/http/timeseries_groups/browser_family">client.radar.http.timeseriesGroups.byBrowserFamily.<a href="./src/resources/radar/http/timeseries-groups/by-browser-family.ts">list</a>({ ...params }) -> ByBrowserFamilyListResponse</code>

#### ByDeviceType

Types:

- <code><a href="./src/resources/radar/http/timeseries-groups/by-device-type.ts">ByDeviceTypeListResponse</a></code>

Methods:

- <code title="get /radar/http/timeseries_groups/device_type">client.radar.http.timeseriesGroups.byDeviceType.<a href="./src/resources/radar/http/timeseries-groups/by-device-type.ts">list</a>({ ...params }) -> ByDeviceTypeListResponse</code>

#### ByHTTPProtocol

Types:

- <code><a href="./src/resources/radar/http/timeseries-groups/by-http-protocol.ts">ByHTTPProtocolListResponse</a></code>

Methods:

- <code title="get /radar/http/timeseries_groups/http_protocol">client.radar.http.timeseriesGroups.byHTTPProtocol.<a href="./src/resources/radar/http/timeseries-groups/by-http-protocol.ts">list</a>({ ...params }) -> ByHTTPProtocolListResponse</code>

#### ByHTTPVersion

Types:

- <code><a href="./src/resources/radar/http/timeseries-groups/by-http-version.ts">ByHTTPVersionListResponse</a></code>

Methods:

- <code title="get /radar/http/timeseries_groups/http_version">client.radar.http.timeseriesGroups.byHTTPVersion.<a href="./src/resources/radar/http/timeseries-groups/by-http-version.ts">list</a>({ ...params }) -> ByHTTPVersionListResponse</code>

#### ByIPVersion

Types:

- <code><a href="./src/resources/radar/http/timeseries-groups/by-ip-version.ts">ByIPVersionListResponse</a></code>

Methods:

- <code title="get /radar/http/timeseries_groups/ip_version">client.radar.http.timeseriesGroups.byIPVersion.<a href="./src/resources/radar/http/timeseries-groups/by-ip-version.ts">list</a>({ ...params }) -> ByIPVersionListResponse</code>

#### ByOs

Types:

- <code><a href="./src/resources/radar/http/timeseries-groups/by-os.ts">ByOListResponse</a></code>

Methods:

- <code title="get /radar/http/timeseries_groups/os">client.radar.http.timeseriesGroups.byOs.<a href="./src/resources/radar/http/timeseries-groups/by-os.ts">list</a>({ ...params }) -> ByOListResponse</code>

#### ByTlsVersion

Types:

- <code><a href="./src/resources/radar/http/timeseries-groups/by-tls-version.ts">ByTlsVersionListResponse</a></code>

Methods:

- <code title="get /radar/http/timeseries_groups/tls_version">client.radar.http.timeseriesGroups.byTlsVersion.<a href="./src/resources/radar/http/timeseries-groups/by-tls-version.ts">list</a>({ ...params }) -> ByTlsVersionListResponse</code>

### Tops

#### Ases

Types:

- <code><a href="./src/resources/radar/http/tops/ases/ases.ts">AseListResponse</a></code>

Methods:

- <code title="get /radar/http/top/ases">client.radar.http.tops.ases.<a href="./src/resources/radar/http/tops/ases/ases.ts">list</a>({ ...params }) -> AseListResponse</code>

##### BotClasses

Types:

- <code><a href="./src/resources/radar/http/tops/ases/bot-classes.ts">BotClassRetrieveResponse</a></code>

Methods:

- <code title="get /radar/http/top/ases/bot_class/{bot_class}">client.radar.http.tops.ases.botClasses.<a href="./src/resources/radar/http/tops/ases/bot-classes.ts">retrieve</a>(botClass, { ...params }) -> BotClassRetrieveResponse</code>

##### DeviceTypes

Types:

- <code><a href="./src/resources/radar/http/tops/ases/device-types.ts">DeviceTypeRetrieveResponse</a></code>

Methods:

- <code title="get /radar/http/top/ases/device_type/{device_type}">client.radar.http.tops.ases.deviceTypes.<a href="./src/resources/radar/http/tops/ases/device-types.ts">retrieve</a>(deviceType, { ...params }) -> DeviceTypeRetrieveResponse</code>

##### HTTPProtocols

Types:

- <code><a href="./src/resources/radar/http/tops/ases/http-protocols.ts">HTTPProtocolRetrieveResponse</a></code>

Methods:

- <code title="get /radar/http/top/ases/http_protocol/{http_protocol}">client.radar.http.tops.ases.httpProtocols.<a href="./src/resources/radar/http/tops/ases/http-protocols.ts">retrieve</a>(httpProtocol, { ...params }) -> HTTPProtocolRetrieveResponse</code>

##### HTTPVersions

Types:

- <code><a href="./src/resources/radar/http/tops/ases/http-versions.ts">HTTPVersionRetrieveResponse</a></code>

Methods:

- <code title="get /radar/http/top/ases/http_version/{http_version}">client.radar.http.tops.ases.httpVersions.<a href="./src/resources/radar/http/tops/ases/http-versions.ts">retrieve</a>(httpVersion, { ...params }) -> HTTPVersionRetrieveResponse</code>

##### IPVersions

Types:

- <code><a href="./src/resources/radar/http/tops/ases/ip-versions.ts">IPVersionRetrieveResponse</a></code>

Methods:

- <code title="get /radar/http/top/ases/ip_version/{ip_version}">client.radar.http.tops.ases.ipVersions.<a href="./src/resources/radar/http/tops/ases/ip-versions.ts">retrieve</a>(ipVersion, { ...params }) -> IPVersionRetrieveResponse</code>

##### Os

Types:

- <code><a href="./src/resources/radar/http/tops/ases/os.ts">ORetrieveResponse</a></code>

Methods:

- <code title="get /radar/http/top/ases/os/{os}">client.radar.http.tops.ases.os.<a href="./src/resources/radar/http/tops/ases/os.ts">retrieve</a>(os, { ...params }) -> ORetrieveResponse</code>

##### TlsVersions

Types:

- <code><a href="./src/resources/radar/http/tops/ases/tls-versions.ts">TlsVersionRetrieveResponse</a></code>

Methods:

- <code title="get /radar/http/top/ases/tls_version/{tls_version}">client.radar.http.tops.ases.tlsVersions.<a href="./src/resources/radar/http/tops/ases/tls-versions.ts">retrieve</a>(tlsVersion, { ...params }) -> TlsVersionRetrieveResponse</code>

#### BrowserFamilies

Types:

- <code><a href="./src/resources/radar/http/tops/browser-families.ts">BrowserFamilyListResponse</a></code>

Methods:

- <code title="get /radar/http/top/browser_families">client.radar.http.tops.browserFamilies.<a href="./src/resources/radar/http/tops/browser-families.ts">list</a>({ ...params }) -> BrowserFamilyListResponse</code>

#### Browsers

Types:

- <code><a href="./src/resources/radar/http/tops/browsers.ts">BrowserListResponse</a></code>

Methods:

- <code title="get /radar/http/top/browsers">client.radar.http.tops.browsers.<a href="./src/resources/radar/http/tops/browsers.ts">list</a>({ ...params }) -> BrowserListResponse</code>

#### Locations

Types:

- <code><a href="./src/resources/radar/http/tops/locations/locations.ts">LocationListResponse</a></code>

Methods:

- <code title="get /radar/http/top/locations">client.radar.http.tops.locations.<a href="./src/resources/radar/http/tops/locations/locations.ts">list</a>({ ...params }) -> LocationListResponse</code>

##### BotClasses

Types:

- <code><a href="./src/resources/radar/http/tops/locations/bot-classes.ts">BotClassRetrieveResponse</a></code>

Methods:

- <code title="get /radar/http/top/locations/bot_class/{bot_class}">client.radar.http.tops.locations.botClasses.<a href="./src/resources/radar/http/tops/locations/bot-classes.ts">retrieve</a>(botClass, { ...params }) -> BotClassRetrieveResponse</code>

##### DeviceTypes

Types:

- <code><a href="./src/resources/radar/http/tops/locations/device-types.ts">DeviceTypeRetrieveResponse</a></code>

Methods:

- <code title="get /radar/http/top/locations/device_type/{device_type}">client.radar.http.tops.locations.deviceTypes.<a href="./src/resources/radar/http/tops/locations/device-types.ts">retrieve</a>(deviceType, { ...params }) -> DeviceTypeRetrieveResponse</code>

##### HTTPProtocols

Types:

- <code><a href="./src/resources/radar/http/tops/locations/http-protocols.ts">HTTPProtocolRetrieveResponse</a></code>

Methods:

- <code title="get /radar/http/top/locations/http_protocol/{http_protocol}">client.radar.http.tops.locations.httpProtocols.<a href="./src/resources/radar/http/tops/locations/http-protocols.ts">retrieve</a>(httpProtocol, { ...params }) -> HTTPProtocolRetrieveResponse</code>

##### HTTPVersions

Types:

- <code><a href="./src/resources/radar/http/tops/locations/http-versions.ts">HTTPVersionRetrieveResponse</a></code>

Methods:

- <code title="get /radar/http/top/locations/http_version/{http_version}">client.radar.http.tops.locations.httpVersions.<a href="./src/resources/radar/http/tops/locations/http-versions.ts">retrieve</a>(httpVersion, { ...params }) -> HTTPVersionRetrieveResponse</code>

##### IPVersions

Types:

- <code><a href="./src/resources/radar/http/tops/locations/ip-versions.ts">IPVersionRetrieveResponse</a></code>

Methods:

- <code title="get /radar/http/top/locations/ip_version/{ip_version}">client.radar.http.tops.locations.ipVersions.<a href="./src/resources/radar/http/tops/locations/ip-versions.ts">retrieve</a>(ipVersion, { ...params }) -> IPVersionRetrieveResponse</code>

##### Os

Types:

- <code><a href="./src/resources/radar/http/tops/locations/os.ts">ORetrieveResponse</a></code>

Methods:

- <code title="get /radar/http/top/locations/os/{os}">client.radar.http.tops.locations.os.<a href="./src/resources/radar/http/tops/locations/os.ts">retrieve</a>(os, { ...params }) -> ORetrieveResponse</code>

##### TlsVersions

Types:

- <code><a href="./src/resources/radar/http/tops/locations/tls-versions.ts">TlsVersionRetrieveResponse</a></code>

Methods:

- <code title="get /radar/http/top/locations/tls_version/{tls_version}">client.radar.http.tops.locations.tlsVersions.<a href="./src/resources/radar/http/tops/locations/tls-versions.ts">retrieve</a>(tlsVersion, { ...params }) -> TlsVersionRetrieveResponse</code>

## Netflows

### Timeseries

Types:

- <code><a href="./src/resources/radar/netflows/timeseries.ts">TimeseryListResponse</a></code>

Methods:

- <code title="get /radar/netflows/timeseries">client.radar.netflows.timeseries.<a href="./src/resources/radar/netflows/timeseries.ts">list</a>({ ...params }) -> TimeseryListResponse</code>

### Tops

#### Ases

Types:

- <code><a href="./src/resources/radar/netflows/tops/ases.ts">AseListResponse</a></code>

Methods:

- <code title="get /radar/netflows/top/ases">client.radar.netflows.tops.ases.<a href="./src/resources/radar/netflows/tops/ases.ts">list</a>({ ...params }) -> AseListResponse</code>

#### Locations

Types:

- <code><a href="./src/resources/radar/netflows/tops/locations.ts">LocationListResponse</a></code>

Methods:

- <code title="get /radar/netflows/top/locations">client.radar.netflows.tops.locations.<a href="./src/resources/radar/netflows/tops/locations.ts">list</a>({ ...params }) -> LocationListResponse</code>

## Ranking

### Domains

Types:

- <code><a href="./src/resources/radar/ranking/domains.ts">DomainRetrieveResponse</a></code>

Methods:

- <code title="get /radar/ranking/domain/{domain}">client.radar.ranking.domains.<a href="./src/resources/radar/ranking/domains.ts">retrieve</a>(domain, { ...params }) -> DomainRetrieveResponse</code>

### TimeseriesGroups

Types:

- <code><a href="./src/resources/radar/ranking/timeseries-groups.ts">TimeseriesGroupListResponse</a></code>

Methods:

- <code title="get /radar/ranking/timeseries_groups">client.radar.ranking.timeseriesGroups.<a href="./src/resources/radar/ranking/timeseries-groups.ts">list</a>({ ...params }) -> TimeseriesGroupListResponse</code>

### Tops

Types:

- <code><a href="./src/resources/radar/ranking/tops.ts">TopListResponse</a></code>

Methods:

- <code title="get /radar/ranking/top">client.radar.ranking.tops.<a href="./src/resources/radar/ranking/tops.ts">list</a>({ ...params }) -> TopListResponse</code>

## Searches

### Globals

Types:

- <code><a href="./src/resources/radar/searches/globals.ts">GlobalListResponse</a></code>

Methods:

- <code title="get /radar/search/global">client.radar.searches.globals.<a href="./src/resources/radar/searches/globals.ts">list</a>({ ...params }) -> GlobalListResponse</code>

## VerifiedBots

### Tops

#### Bots

Types:

- <code><a href="./src/resources/radar/verified-bots/tops/bots.ts">BotListResponse</a></code>

Methods:

- <code title="get /radar/verified_bots/top/bots">client.radar.verifiedBots.tops.bots.<a href="./src/resources/radar/verified-bots/tops/bots.ts">list</a>({ ...params }) -> BotListResponse</code>

#### Categories

Types:

- <code><a href="./src/resources/radar/verified-bots/tops/categories.ts">CategoryListResponse</a></code>

Methods:

- <code title="get /radar/verified_bots/top/categories">client.radar.verifiedBots.tops.categories.<a href="./src/resources/radar/verified-bots/tops/categories.ts">list</a>({ ...params }) -> CategoryListResponse</code>

## ConnectionTamperings

### Summary

Types:

- <code><a href="./src/resources/radar/connection-tamperings/summary.ts">SummaryListResponse</a></code>

Methods:

- <code title="get /radar/connection_tampering/summary">client.radar.connectionTamperings.summary.<a href="./src/resources/radar/connection-tamperings/summary.ts">list</a>({ ...params }) -> SummaryListResponse</code>

### TimeseriesGroups

Types:

- <code><a href="./src/resources/radar/connection-tamperings/timeseries-groups.ts">TimeseriesGroupListResponse</a></code>

Methods:

- <code title="get /radar/connection_tampering/timeseries_groups">client.radar.connectionTamperings.timeseriesGroups.<a href="./src/resources/radar/connection-tamperings/timeseries-groups.ts">list</a>({ ...params }) -> TimeseriesGroupListResponse</code>

# Railguns

Types:

- <code><a href="./src/resources/railguns/railguns.ts">RailgunRetrieveResponse</a></code>
- <code><a href="./src/resources/railguns/railguns.ts">RailgunUpdateResponse</a></code>
- <code><a href="./src/resources/railguns/railguns.ts">RailgunDeleteResponse</a></code>
- <code><a href="./src/resources/railguns/railguns.ts">RailgunRailgunCreateRailgunResponse</a></code>
- <code><a href="./src/resources/railguns/railguns.ts">RailgunRailgunListRailgunsResponse</a></code>

Methods:

- <code title="get /railguns/{identifier}">client.railguns.<a href="./src/resources/railguns/railguns.ts">retrieve</a>(identifier) -> RailgunRetrieveResponse</code>
- <code title="patch /railguns/{identifier}">client.railguns.<a href="./src/resources/railguns/railguns.ts">update</a>(identifier, { ...params }) -> RailgunUpdateResponse</code>
- <code title="delete /railguns/{identifier}">client.railguns.<a href="./src/resources/railguns/railguns.ts">delete</a>(identifier) -> RailgunDeleteResponse</code>
- <code title="post /railguns">client.railguns.<a href="./src/resources/railguns/railguns.ts">railgunCreateRailgun</a>({ ...params }) -> RailgunRailgunCreateRailgunResponse</code>
- <code title="get /railguns">client.railguns.<a href="./src/resources/railguns/railguns.ts">railgunListRailguns</a>({ ...params }) -> RailgunRailgunListRailgunsResponsesPage</code>

## Zones

Types:

- <code><a href="./src/resources/railguns/zones.ts">ZoneListResponse</a></code>

Methods:

- <code title="get /railguns/{identifier}/zones">client.railguns.zones.<a href="./src/resources/railguns/zones.ts">list</a>(identifier) -> ZoneListResponse</code>

# User

Types:

- <code><a href="./src/resources/user/user.ts">UserUserEditUserResponse</a></code>
- <code><a href="./src/resources/user/user.ts">UserUserUserDetailsResponse</a></code>

Methods:

- <code title="patch /user">client.user.<a href="./src/resources/user/user.ts">userEditUser</a>({ ...params }) -> UserUserEditUserResponse</code>
- <code title="get /user">client.user.<a href="./src/resources/user/user.ts">userUserDetails</a>() -> UserUserUserDetailsResponse</code>

## Billings

### Histories

Types:

- <code><a href="./src/resources/user/billings/histories.ts">HistoryUserBillingHistoryBillingHistoryDetailsResponse</a></code>

Methods:

- <code title="get /user/billing/history">client.user.billings.histories.<a href="./src/resources/user/billings/histories.ts">userBillingHistoryBillingHistoryDetails</a>({ ...params }) -> HistoryUserBillingHistoryBillingHistoryDetailsResponsesPage</code>

### Profiles

Types:

- <code><a href="./src/resources/user/billings/profiles.ts">ProfileUserBillingProfileBillingProfileDetailsResponse</a></code>

Methods:

- <code title="get /user/billing/profile">client.user.billings.profiles.<a href="./src/resources/user/billings/profiles.ts">userBillingProfileBillingProfileDetails</a>() -> ProfileUserBillingProfileBillingProfileDetailsResponse</code>

## Firewalls

### AccessRules

#### Rules

Types:

- <code><a href="./src/resources/user/firewalls/access-rules/rules.ts">RuleUpdateResponse</a></code>
- <code><a href="./src/resources/user/firewalls/access-rules/rules.ts">RuleDeleteResponse</a></code>
- <code><a href="./src/resources/user/firewalls/access-rules/rules.ts">RuleIPAccessRulesForAUserCreateAnIPAccessRuleResponse</a></code>
- <code><a href="./src/resources/user/firewalls/access-rules/rules.ts">RuleIPAccessRulesForAUserListIPAccessRulesResponse</a></code>

Methods:

- <code title="patch /user/firewall/access_rules/rules/{identifier}">client.user.firewalls.accessRules.rules.<a href="./src/resources/user/firewalls/access-rules/rules.ts">update</a>(identifier, { ...params }) -> RuleUpdateResponse</code>
- <code title="delete /user/firewall/access_rules/rules/{identifier}">client.user.firewalls.accessRules.rules.<a href="./src/resources/user/firewalls/access-rules/rules.ts">delete</a>(identifier) -> RuleDeleteResponse</code>
- <code title="post /user/firewall/access_rules/rules">client.user.firewalls.accessRules.rules.<a href="./src/resources/user/firewalls/access-rules/rules.ts">ipAccessRulesForAUserCreateAnIPAccessRule</a>({ ...params }) -> RuleIPAccessRulesForAUserCreateAnIPAccessRuleResponse</code>
- <code title="get /user/firewall/access_rules/rules">client.user.firewalls.accessRules.rules.<a href="./src/resources/user/firewalls/access-rules/rules.ts">ipAccessRulesForAUserListIPAccessRules</a>({ ...params }) -> RuleIPAccessRulesForAUserListIPAccessRulesResponsesPage</code>

## Invites

Types:

- <code><a href="./src/resources/user/invites.ts">InviteRetrieveResponse</a></code>
- <code><a href="./src/resources/user/invites.ts">InviteUpdateResponse</a></code>
- <code><a href="./src/resources/user/invites.ts">InviteUserSInvitesListInvitationsResponse</a></code>

Methods:

- <code title="get /user/invites/{identifier}">client.user.invites.<a href="./src/resources/user/invites.ts">retrieve</a>(identifier) -> InviteRetrieveResponse</code>
- <code title="patch /user/invites/{identifier}">client.user.invites.<a href="./src/resources/user/invites.ts">update</a>(identifier, { ...params }) -> InviteUpdateResponse</code>
- <code title="get /user/invites">client.user.invites.<a href="./src/resources/user/invites.ts">userSInvitesListInvitations</a>() -> InviteUserSInvitesListInvitationsResponse</code>

## LoadBalancers

### Monitors

Types:

- <code><a href="./src/resources/user/load-balancers/monitors/monitors.ts">MonitorDeleteResponse</a></code>
- <code><a href="./src/resources/user/load-balancers/monitors/monitors.ts">MonitorLoadBalancerMonitorsListMonitorsResponse</a></code>

Methods:

- <code title="get /user/load_balancers/monitors/{identifier}">client.user.loadBalancers.monitors.<a href="./src/resources/user/load-balancers/monitors/monitors.ts">retrieve</a>(identifier) -> Monitor</code>
- <code title="put /user/load_balancers/monitors/{identifier}">client.user.loadBalancers.monitors.<a href="./src/resources/user/load-balancers/monitors/monitors.ts">update</a>(identifier, { ...params }) -> Monitor</code>
- <code title="delete /user/load_balancers/monitors/{identifier}">client.user.loadBalancers.monitors.<a href="./src/resources/user/load-balancers/monitors/monitors.ts">delete</a>(identifier) -> MonitorDeleteResponse</code>
- <code title="post /user/load_balancers/monitors">client.user.loadBalancers.monitors.<a href="./src/resources/user/load-balancers/monitors/monitors.ts">loadBalancerMonitorsCreateMonitor</a>({ ...params }) -> Monitor</code>
- <code title="get /user/load_balancers/monitors">client.user.loadBalancers.monitors.<a href="./src/resources/user/load-balancers/monitors/monitors.ts">loadBalancerMonitorsListMonitors</a>() -> MonitorLoadBalancerMonitorsListMonitorsResponse</code>
- <code title="patch /user/load_balancers/monitors/{identifier}">client.user.loadBalancers.monitors.<a href="./src/resources/user/load-balancers/monitors/monitors.ts">patch</a>(identifier, { ...params }) -> Monitor</code>

#### Previews

Types:

- <code><a href="./src/resources/user/load-balancers/monitors/previews.ts">PreviewLoadBalancerMonitorsPreviewMonitorResponse</a></code>

Methods:

- <code title="post /user/load_balancers/monitors/{identifier}/preview">client.user.loadBalancers.monitors.previews.<a href="./src/resources/user/load-balancers/monitors/previews.ts">loadBalancerMonitorsPreviewMonitor</a>(identifier, { ...params }) -> PreviewLoadBalancerMonitorsPreviewMonitorResponse</code>

#### References

Types:

- <code><a href="./src/resources/user/load-balancers/monitors/references.ts">ReferenceLoadBalancerMonitorsListMonitorReferencesResponse</a></code>

Methods:

- <code title="get /user/load_balancers/monitors/{identifier}/references">client.user.loadBalancers.monitors.references.<a href="./src/resources/user/load-balancers/monitors/references.ts">loadBalancerMonitorsListMonitorReferences</a>(identifier) -> ReferenceLoadBalancerMonitorsListMonitorReferencesResponse</code>

### Pools

Types:

- <code><a href="./src/resources/user/load-balancers/pools/pools.ts">PoolDeleteResponse</a></code>
- <code><a href="./src/resources/user/load-balancers/pools/pools.ts">PoolLoadBalancerPoolsListPoolsResponse</a></code>
- <code><a href="./src/resources/user/load-balancers/pools/pools.ts">PoolLoadBalancerPoolsPatchPoolsResponse</a></code>

Methods:

- <code title="get /user/load_balancers/pools/{identifier}">client.user.loadBalancers.pools.<a href="./src/resources/user/load-balancers/pools/pools.ts">retrieve</a>(identifier) -> Pool</code>
- <code title="put /user/load_balancers/pools/{identifier}">client.user.loadBalancers.pools.<a href="./src/resources/user/load-balancers/pools/pools.ts">update</a>(identifier, { ...params }) -> Pool</code>
- <code title="delete /user/load_balancers/pools/{identifier}">client.user.loadBalancers.pools.<a href="./src/resources/user/load-balancers/pools/pools.ts">delete</a>(identifier) -> PoolDeleteResponse</code>
- <code title="post /user/load_balancers/pools">client.user.loadBalancers.pools.<a href="./src/resources/user/load-balancers/pools/pools.ts">loadBalancerPoolsCreatePool</a>({ ...params }) -> Pool</code>
- <code title="get /user/load_balancers/pools">client.user.loadBalancers.pools.<a href="./src/resources/user/load-balancers/pools/pools.ts">loadBalancerPoolsListPools</a>({ ...params }) -> PoolLoadBalancerPoolsListPoolsResponse</code>
- <code title="patch /user/load_balancers/pools">client.user.loadBalancers.pools.<a href="./src/resources/user/load-balancers/pools/pools.ts">loadBalancerPoolsPatchPools</a>({ ...params }) -> PoolLoadBalancerPoolsPatchPoolsResponse</code>
- <code title="patch /user/load_balancers/pools/{identifier}">client.user.loadBalancers.pools.<a href="./src/resources/user/load-balancers/pools/pools.ts">patch</a>(identifier, { ...params }) -> Pool</code>

#### Health

Types:

- <code><a href="./src/resources/user/load-balancers/pools/health.ts">HealthLoadBalancerPoolsPoolHealthDetailsResponse</a></code>

Methods:

- <code title="get /user/load_balancers/pools/{identifier}/health">client.user.loadBalancers.pools.health.<a href="./src/resources/user/load-balancers/pools/health.ts">loadBalancerPoolsPoolHealthDetails</a>(identifier) -> HealthLoadBalancerPoolsPoolHealthDetailsResponse</code>

#### Previews

Types:

- <code><a href="./src/resources/user/load-balancers/pools/previews.ts">PreviewLoadBalancerPoolsPreviewPoolResponse</a></code>

Methods:

- <code title="post /user/load_balancers/pools/{identifier}/preview">client.user.loadBalancers.pools.previews.<a href="./src/resources/user/load-balancers/pools/previews.ts">loadBalancerPoolsPreviewPool</a>(identifier, { ...params }) -> PreviewLoadBalancerPoolsPreviewPoolResponse</code>

#### References

Types:

- <code><a href="./src/resources/user/load-balancers/pools/references.ts">ReferenceLoadBalancerPoolsListPoolReferencesResponse</a></code>

Methods:

- <code title="get /user/load_balancers/pools/{identifier}/references">client.user.loadBalancers.pools.references.<a href="./src/resources/user/load-balancers/pools/references.ts">loadBalancerPoolsListPoolReferences</a>(identifier) -> ReferenceLoadBalancerPoolsListPoolReferencesResponse</code>

### Previews

Types:

- <code><a href="./src/resources/user/load-balancers/previews.ts">PreviewRetrieveResponse</a></code>

Methods:

- <code title="get /user/load_balancers/preview/{preview_id}">client.user.loadBalancers.previews.<a href="./src/resources/user/load-balancers/previews.ts">retrieve</a>(previewId) -> PreviewRetrieveResponse</code>

## LoadBalancingAnalytics

### Events

Types:

- <code><a href="./src/resources/user/load-balancing-analytics/events.ts">EventLoadBalancerHealthcheckEventsListHealthcheckEventsResponse</a></code>

Methods:

- <code title="get /user/load_balancing_analytics/events">client.user.loadBalancingAnalytics.events.<a href="./src/resources/user/load-balancing-analytics/events.ts">loadBalancerHealthcheckEventsListHealthcheckEvents</a>({ ...params }) -> EventLoadBalancerHealthcheckEventsListHealthcheckEventsResponse</code>

## Organizations

Types:

- <code><a href="./src/resources/user/organizations.ts">OrganizationRetrieveResponse</a></code>
- <code><a href="./src/resources/user/organizations.ts">OrganizationDeleteResponse</a></code>
- <code><a href="./src/resources/user/organizations.ts">OrganizationUserSOrganizationsListOrganizationsResponse</a></code>

Methods:

- <code title="get /user/organizations/{identifier}">client.user.organizations.<a href="./src/resources/user/organizations.ts">retrieve</a>(identifier) -> OrganizationRetrieveResponse</code>
- <code title="delete /user/organizations/{identifier}">client.user.organizations.<a href="./src/resources/user/organizations.ts">delete</a>(identifier) -> OrganizationDeleteResponse</code>
- <code title="get /user/organizations">client.user.organizations.<a href="./src/resources/user/organizations.ts">userSOrganizationsListOrganizations</a>({ ...params }) -> OrganizationUserSOrganizationsListOrganizationsResponsesPage</code>

## Subscriptions

Types:

- <code><a href="./src/resources/user/subscriptions.ts">SubscriptionUpdateResponse</a></code>
- <code><a href="./src/resources/user/subscriptions.ts">SubscriptionDeleteResponse</a></code>
- <code><a href="./src/resources/user/subscriptions.ts">SubscriptionUserSubscriptionGetUserSubscriptionsResponse</a></code>

Methods:

- <code title="put /user/subscriptions/{identifier}">client.user.subscriptions.<a href="./src/resources/user/subscriptions.ts">update</a>(identifier, { ...params }) -> SubscriptionUpdateResponse</code>
- <code title="delete /user/subscriptions/{identifier}">client.user.subscriptions.<a href="./src/resources/user/subscriptions.ts">delete</a>(identifier) -> SubscriptionDeleteResponse</code>
- <code title="get /user/subscriptions">client.user.subscriptions.<a href="./src/resources/user/subscriptions.ts">userSubscriptionGetUserSubscriptions</a>() -> SubscriptionUserSubscriptionGetUserSubscriptionsResponse</code>

## Tokens

Types:

- <code><a href="./src/resources/user/tokens/tokens.ts">TokenRetrieveResponse</a></code>
- <code><a href="./src/resources/user/tokens/tokens.ts">TokenUpdateResponse</a></code>
- <code><a href="./src/resources/user/tokens/tokens.ts">TokenDeleteResponse</a></code>
- <code><a href="./src/resources/user/tokens/tokens.ts">TokenUserAPITokensCreateTokenResponse</a></code>
- <code><a href="./src/resources/user/tokens/tokens.ts">TokenUserAPITokensListTokensResponse</a></code>

Methods:

- <code title="get /user/tokens/{identifier}">client.user.tokens.<a href="./src/resources/user/tokens/tokens.ts">retrieve</a>(identifier) -> TokenRetrieveResponse</code>
- <code title="put /user/tokens/{identifier}">client.user.tokens.<a href="./src/resources/user/tokens/tokens.ts">update</a>(identifier, { ...params }) -> TokenUpdateResponse</code>
- <code title="delete /user/tokens/{identifier}">client.user.tokens.<a href="./src/resources/user/tokens/tokens.ts">delete</a>(identifier) -> TokenDeleteResponse</code>
- <code title="post /user/tokens">client.user.tokens.<a href="./src/resources/user/tokens/tokens.ts">userAPITokensCreateToken</a>({ ...params }) -> TokenUserAPITokensCreateTokenResponse</code>
- <code title="get /user/tokens">client.user.tokens.<a href="./src/resources/user/tokens/tokens.ts">userAPITokensListTokens</a>({ ...params }) -> TokenUserAPITokensListTokensResponsesPage</code>

### PermissionGroups

Types:

- <code><a href="./src/resources/user/tokens/permission-groups.ts">PermissionGroupPermissionGroupsListPermissionGroupsResponse</a></code>

Methods:

- <code title="get /user/tokens/permission_groups">client.user.tokens.permissionGroups.<a href="./src/resources/user/tokens/permission-groups.ts">permissionGroupsListPermissionGroups</a>() -> PermissionGroupPermissionGroupsListPermissionGroupsResponse</code>

### Verifies

Types:

- <code><a href="./src/resources/user/tokens/verifies.ts">VerifyUserAPITokensVerifyTokenResponse</a></code>

Methods:

- <code title="get /user/tokens/verify">client.user.tokens.verifies.<a href="./src/resources/user/tokens/verifies.ts">userAPITokensVerifyToken</a>() -> VerifyUserAPITokensVerifyTokenResponse</code>

### Values

Types:

- <code><a href="./src/resources/user/tokens/values.ts">ValueUserAPITokensRollTokenResponse</a></code>

Methods:

- <code title="put /user/tokens/{identifier}/value">client.user.tokens.values.<a href="./src/resources/user/tokens/values.ts">userAPITokensRollToken</a>(identifier, { ...params }) -> ValueUserAPITokensRollTokenResponse</code>

# Zones

Types:

- <code><a href="./src/resources/zones/zones.ts">ZoneCreateResponse</a></code>
- <code><a href="./src/resources/zones/zones.ts">ZoneRetrieveResponse</a></code>
- <code><a href="./src/resources/zones/zones.ts">ZoneUpdateResponse</a></code>
- <code><a href="./src/resources/zones/zones.ts">ZoneListResponse</a></code>
- <code><a href="./src/resources/zones/zones.ts">ZoneDeleteResponse</a></code>

Methods:

- <code title="post /zones">client.zones.<a href="./src/resources/zones/zones.ts">create</a>({ ...params }) -> ZoneCreateResponse</code>
- <code title="get /zones/{identifier}">client.zones.<a href="./src/resources/zones/zones.ts">retrieve</a>(identifier) -> ZoneRetrieveResponse</code>
- <code title="patch /zones/{identifier}">client.zones.<a href="./src/resources/zones/zones.ts">update</a>(identifier, { ...params }) -> ZoneUpdateResponse</code>
- <code title="get /zones">client.zones.<a href="./src/resources/zones/zones.ts">list</a>({ ...params }) -> ZoneListResponsesPage</code>
- <code title="delete /zones/{identifier}">client.zones.<a href="./src/resources/zones/zones.ts">delete</a>(identifier) -> ZoneDeleteResponse</code>

## LoadBalancers

Types:

- <code><a href="./src/resources/zones/load-balancers.ts">LoadBalancer</a></code>
- <code><a href="./src/resources/zones/load-balancers.ts">LoadBalancerListResponse</a></code>
- <code><a href="./src/resources/zones/load-balancers.ts">LoadBalancerDeleteResponse</a></code>

Methods:

- <code title="post /zones/{identifier}/load_balancers">client.zones.loadBalancers.<a href="./src/resources/zones/load-balancers.ts">create</a>(identifier, { ...params }) -> LoadBalancer</code>
- <code title="get /zones/{identifier1}/load_balancers/{identifier}">client.zones.loadBalancers.<a href="./src/resources/zones/load-balancers.ts">retrieve</a>(identifier1, identifier) -> LoadBalancer</code>
- <code title="put /zones/{identifier1}/load_balancers/{identifier}">client.zones.loadBalancers.<a href="./src/resources/zones/load-balancers.ts">update</a>(identifier1, identifier, { ...params }) -> LoadBalancer</code>
- <code title="get /zones/{identifier}/load_balancers">client.zones.loadBalancers.<a href="./src/resources/zones/load-balancers.ts">list</a>(identifier) -> LoadBalancerListResponse</code>
- <code title="delete /zones/{identifier1}/load_balancers/{identifier}">client.zones.loadBalancers.<a href="./src/resources/zones/load-balancers.ts">delete</a>(identifier1, identifier) -> LoadBalancerDeleteResponse</code>
- <code title="patch /zones/{identifier1}/load_balancers/{identifier}">client.zones.loadBalancers.<a href="./src/resources/zones/load-balancers.ts">patch</a>(identifier1, identifier, { ...params }) -> LoadBalancer</code>

## Accesses

### Certificates

Types:

- <code><a href="./src/resources/zones/accesses/certificates/certificates.ts">CertificateRetrieveResponse</a></code>
- <code><a href="./src/resources/zones/accesses/certificates/certificates.ts">CertificateUpdateResponse</a></code>
- <code><a href="./src/resources/zones/accesses/certificates/certificates.ts">CertificateListResponse</a></code>
- <code><a href="./src/resources/zones/accesses/certificates/certificates.ts">CertificateDeleteResponse</a></code>
- <code><a href="./src/resources/zones/accesses/certificates/certificates.ts">CertificateAddResponse</a></code>

Methods:

- <code title="get /zones/{identifier}/access/certificates/{uuid}">client.zones.accesses.certificates.<a href="./src/resources/zones/accesses/certificates/certificates.ts">retrieve</a>(identifier, uuid) -> CertificateRetrieveResponse</code>
- <code title="put /zones/{identifier}/access/certificates/{uuid}">client.zones.accesses.certificates.<a href="./src/resources/zones/accesses/certificates/certificates.ts">update</a>(identifier, uuid, { ...params }) -> CertificateUpdateResponse</code>
- <code title="get /zones/{identifier}/access/certificates">client.zones.accesses.certificates.<a href="./src/resources/zones/accesses/certificates/certificates.ts">list</a>(identifier) -> CertificateListResponse</code>
- <code title="delete /zones/{identifier}/access/certificates/{uuid}">client.zones.accesses.certificates.<a href="./src/resources/zones/accesses/certificates/certificates.ts">delete</a>(identifier, uuid) -> CertificateDeleteResponse</code>
- <code title="post /zones/{identifier}/access/certificates">client.zones.accesses.certificates.<a href="./src/resources/zones/accesses/certificates/certificates.ts">add</a>(identifier, { ...params }) -> CertificateAddResponse</code>

#### Settings

Types:

- <code><a href="./src/resources/zones/accesses/certificates/settings.ts">SettingListResponse</a></code>

Methods:

- <code title="get /zones/{identifier}/access/certificates/settings">client.zones.accesses.certificates.settings.<a href="./src/resources/zones/accesses/certificates/settings.ts">list</a>(identifier) -> SettingListResponse</code>

### Groups

Types:

- <code><a href="./src/resources/zones/accesses/groups.ts">GroupCreateResponse</a></code>
- <code><a href="./src/resources/zones/accesses/groups.ts">GroupRetrieveResponse</a></code>
- <code><a href="./src/resources/zones/accesses/groups.ts">GroupUpdateResponse</a></code>
- <code><a href="./src/resources/zones/accesses/groups.ts">GroupListResponse</a></code>
- <code><a href="./src/resources/zones/accesses/groups.ts">GroupDeleteResponse</a></code>

Methods:

- <code title="post /zones/{identifier}/access/groups">client.zones.accesses.groups.<a href="./src/resources/zones/accesses/groups.ts">create</a>(identifier, { ...params }) -> GroupCreateResponse</code>
- <code title="get /zones/{identifier}/access/groups/{uuid}">client.zones.accesses.groups.<a href="./src/resources/zones/accesses/groups.ts">retrieve</a>(identifier, uuid) -> GroupRetrieveResponse</code>
- <code title="put /zones/{identifier}/access/groups/{uuid}">client.zones.accesses.groups.<a href="./src/resources/zones/accesses/groups.ts">update</a>(identifier, uuid, { ...params }) -> GroupUpdateResponse</code>
- <code title="get /zones/{identifier}/access/groups">client.zones.accesses.groups.<a href="./src/resources/zones/accesses/groups.ts">list</a>(identifier) -> GroupListResponse</code>
- <code title="delete /zones/{identifier}/access/groups/{uuid}">client.zones.accesses.groups.<a href="./src/resources/zones/accesses/groups.ts">delete</a>(identifier, uuid) -> GroupDeleteResponse</code>

### IdentityProviders

Types:

- <code><a href="./src/resources/zones/accesses/identity-providers.ts">IdentityProviderRetrieveResponse</a></code>
- <code><a href="./src/resources/zones/accesses/identity-providers.ts">IdentityProviderUpdateResponse</a></code>
- <code><a href="./src/resources/zones/accesses/identity-providers.ts">IdentityProviderListResponse</a></code>
- <code><a href="./src/resources/zones/accesses/identity-providers.ts">IdentityProviderDeleteResponse</a></code>
- <code><a href="./src/resources/zones/accesses/identity-providers.ts">IdentityProviderAddResponse</a></code>

Methods:

- <code title="get /zones/{identifier}/access/identity_providers/{uuid}">client.zones.accesses.identityProviders.<a href="./src/resources/zones/accesses/identity-providers.ts">retrieve</a>(identifier, uuid) -> IdentityProviderRetrieveResponse</code>
- <code title="put /zones/{identifier}/access/identity_providers/{uuid}">client.zones.accesses.identityProviders.<a href="./src/resources/zones/accesses/identity-providers.ts">update</a>(identifier, uuid, { ...params }) -> IdentityProviderUpdateResponse</code>
- <code title="get /zones/{identifier}/access/identity_providers">client.zones.accesses.identityProviders.<a href="./src/resources/zones/accesses/identity-providers.ts">list</a>(identifier) -> IdentityProviderListResponse</code>
- <code title="delete /zones/{identifier}/access/identity_providers/{uuid}">client.zones.accesses.identityProviders.<a href="./src/resources/zones/accesses/identity-providers.ts">delete</a>(identifier, uuid) -> IdentityProviderDeleteResponse</code>
- <code title="post /zones/{identifier}/access/identity_providers">client.zones.accesses.identityProviders.<a href="./src/resources/zones/accesses/identity-providers.ts">add</a>(identifier, { ...params }) -> IdentityProviderAddResponse</code>

### Organizations

Types:

- <code><a href="./src/resources/zones/accesses/organizations.ts">OrganizationRevokeUserResponse</a></code>
- <code><a href="./src/resources/zones/accesses/organizations.ts">OrganizationZoneLevelZeroTrustOrganizationCreateYourZeroTrustOrganizationResponse</a></code>
- <code><a href="./src/resources/zones/accesses/organizations.ts">OrganizationZoneLevelZeroTrustOrganizationGetYourZeroTrustOrganizationResponse</a></code>
- <code><a href="./src/resources/zones/accesses/organizations.ts">OrganizationZoneLevelZeroTrustOrganizationUpdateYourZeroTrustOrganizationResponse</a></code>

Methods:

- <code title="post /zones/{identifier}/access/organizations/revoke_user">client.zones.accesses.organizations.<a href="./src/resources/zones/accesses/organizations.ts">revokeUser</a>(identifier, { ...params }) -> OrganizationRevokeUserResponse</code>
- <code title="post /zones/{identifier}/access/organizations">client.zones.accesses.organizations.<a href="./src/resources/zones/accesses/organizations.ts">zoneLevelZeroTrustOrganizationCreateYourZeroTrustOrganization</a>(identifier, { ...params }) -> OrganizationZoneLevelZeroTrustOrganizationCreateYourZeroTrustOrganizationResponse</code>
- <code title="get /zones/{identifier}/access/organizations">client.zones.accesses.organizations.<a href="./src/resources/zones/accesses/organizations.ts">zoneLevelZeroTrustOrganizationGetYourZeroTrustOrganization</a>(identifier) -> OrganizationZoneLevelZeroTrustOrganizationGetYourZeroTrustOrganizationResponse</code>
- <code title="put /zones/{identifier}/access/organizations">client.zones.accesses.organizations.<a href="./src/resources/zones/accesses/organizations.ts">zoneLevelZeroTrustOrganizationUpdateYourZeroTrustOrganization</a>(identifier, { ...params }) -> OrganizationZoneLevelZeroTrustOrganizationUpdateYourZeroTrustOrganizationResponse</code>

### ServiceTokens

Types:

- <code><a href="./src/resources/zones/accesses/service-tokens.ts">ServiceTokenUpdateResponse</a></code>
- <code><a href="./src/resources/zones/accesses/service-tokens.ts">ServiceTokenDeleteResponse</a></code>
- <code><a href="./src/resources/zones/accesses/service-tokens.ts">ServiceTokenZoneLevelAccessServiceTokensCreateAServiceTokenResponse</a></code>
- <code><a href="./src/resources/zones/accesses/service-tokens.ts">ServiceTokenZoneLevelAccessServiceTokensListServiceTokensResponse</a></code>

Methods:

- <code title="put /zones/{identifier}/access/service_tokens/{uuid}">client.zones.accesses.serviceTokens.<a href="./src/resources/zones/accesses/service-tokens.ts">update</a>(identifier, uuid, { ...params }) -> ServiceTokenUpdateResponse</code>
- <code title="delete /zones/{identifier}/access/service_tokens/{uuid}">client.zones.accesses.serviceTokens.<a href="./src/resources/zones/accesses/service-tokens.ts">delete</a>(identifier, uuid) -> ServiceTokenDeleteResponse</code>
- <code title="post /zones/{identifier}/access/service_tokens">client.zones.accesses.serviceTokens.<a href="./src/resources/zones/accesses/service-tokens.ts">zoneLevelAccessServiceTokensCreateAServiceToken</a>(identifier, { ...params }) -> ServiceTokenZoneLevelAccessServiceTokensCreateAServiceTokenResponse</code>
- <code title="get /zones/{identifier}/access/service_tokens">client.zones.accesses.serviceTokens.<a href="./src/resources/zones/accesses/service-tokens.ts">zoneLevelAccessServiceTokensListServiceTokens</a>(identifier) -> ServiceTokenZoneLevelAccessServiceTokensListServiceTokensResponse</code>

## DNSAnalytics

### Reports

Types:

- <code><a href="./src/resources/zones/dns-analytics/reports/reports.ts">ReportListResponse</a></code>

Methods:

- <code title="get /zones/{identifier}/dns_analytics/report">client.zones.dnsAnalytics.reports.<a href="./src/resources/zones/dns-analytics/reports/reports.ts">list</a>(identifier, { ...params }) -> ReportListResponse</code>

#### Bytimes

Types:

- <code><a href="./src/resources/zones/dns-analytics/reports/bytimes.ts">BytimeListResponse</a></code>

Methods:

- <code title="get /zones/{identifier}/dns_analytics/report/bytime">client.zones.dnsAnalytics.reports.bytimes.<a href="./src/resources/zones/dns-analytics/reports/bytimes.ts">list</a>(identifier, { ...params }) -> BytimeListResponse</code>

## PurgeCaches

Types:

- <code><a href="./src/resources/zones/purge-caches.ts">PurgeCachZonePurgeResponse</a></code>

Methods:

- <code title="post /zones/{identifier}/purge_cache">client.zones.purgeCaches.<a href="./src/resources/zones/purge-caches.ts">zonePurge</a>(identifier, { ...params }) -> PurgeCachZonePurgeResponse</code>

## Ssls

### Analyzes

Types:

- <code><a href="./src/resources/zones/ssls/analyzes.ts">AnalyzeAnalyzeCertificateAnalyzeCertificateResponse</a></code>

Methods:

- <code title="post /zones/{identifier}/ssl/analyze">client.zones.ssls.analyzes.<a href="./src/resources/zones/ssls/analyzes.ts">analyzeCertificateAnalyzeCertificate</a>(identifier, { ...params }) -> AnalyzeAnalyzeCertificateAnalyzeCertificateResponse</code>

### CertificatePacks

Types:

- <code><a href="./src/resources/zones/ssls/certificate-packs/certificate-packs.ts">CertificatePackRetrieveResponse</a></code>
- <code><a href="./src/resources/zones/ssls/certificate-packs/certificate-packs.ts">CertificatePackUpdateResponse</a></code>
- <code><a href="./src/resources/zones/ssls/certificate-packs/certificate-packs.ts">CertificatePackDeleteResponse</a></code>
- <code><a href="./src/resources/zones/ssls/certificate-packs/certificate-packs.ts">CertificatePackCertificatePacksListCertificatePacksResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/ssl/certificate_packs/{identifier}">client.zones.ssls.certificatePacks.<a href="./src/resources/zones/ssls/certificate-packs/certificate-packs.ts">retrieve</a>(zoneIdentifier, identifier) -> CertificatePackRetrieveResponse</code>
- <code title="patch /zones/{zone_identifier}/ssl/certificate_packs/{identifier}">client.zones.ssls.certificatePacks.<a href="./src/resources/zones/ssls/certificate-packs/certificate-packs.ts">update</a>(zoneIdentifier, identifier) -> CertificatePackUpdateResponse</code>
- <code title="delete /zones/{zone_identifier}/ssl/certificate_packs/{identifier}">client.zones.ssls.certificatePacks.<a href="./src/resources/zones/ssls/certificate-packs/certificate-packs.ts">delete</a>(zoneIdentifier, identifier) -> CertificatePackDeleteResponse</code>
- <code title="get /zones/{zone_identifier}/ssl/certificate_packs">client.zones.ssls.certificatePacks.<a href="./src/resources/zones/ssls/certificate-packs/certificate-packs.ts">certificatePacksListCertificatePacks</a>(zoneIdentifier, { ...params }) -> CertificatePackCertificatePacksListCertificatePacksResponse</code>

#### Orders

Types:

- <code><a href="./src/resources/zones/ssls/certificate-packs/orders.ts">OrderCertificatePacksOrderAdvancedCertificateManagerCertificatePackResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/ssl/certificate_packs/order">client.zones.ssls.certificatePacks.orders.<a href="./src/resources/zones/ssls/certificate-packs/orders.ts">certificatePacksOrderAdvancedCertificateManagerCertificatePack</a>(zoneIdentifier, { ...params }) -> OrderCertificatePacksOrderAdvancedCertificateManagerCertificatePackResponse</code>

#### Quotas

Types:

- <code><a href="./src/resources/zones/ssls/certificate-packs/quotas.ts">QuotaCertificatePacksGetCertificatePackQuotasResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/ssl/certificate_packs/quota">client.zones.ssls.certificatePacks.quotas.<a href="./src/resources/zones/ssls/certificate-packs/quotas.ts">certificatePacksGetCertificatePackQuotas</a>(zoneIdentifier) -> QuotaCertificatePacksGetCertificatePackQuotasResponse</code>

### Recommendations

Types:

- <code><a href="./src/resources/zones/ssls/recommendations.ts">RecommendationListResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/ssl/recommendation">client.zones.ssls.recommendations.<a href="./src/resources/zones/ssls/recommendations.ts">list</a>(zoneIdentifier) -> RecommendationListResponse</code>

### Universals

#### Settings

Types:

- <code><a href="./src/resources/zones/ssls/universals/settings.ts">SettingUniversalSslSettingsForAZoneEditUniversalSslSettingsResponse</a></code>
- <code><a href="./src/resources/zones/ssls/universals/settings.ts">SettingUniversalSslSettingsForAZoneUniversalSslSettingsDetailsResponse</a></code>

Methods:

- <code title="patch /zones/{zone_identifier}/ssl/universal/settings">client.zones.ssls.universals.settings.<a href="./src/resources/zones/ssls/universals/settings.ts">universalSslSettingsForAZoneEditUniversalSslSettings</a>(zoneIdentifier, { ...params }) -> SettingUniversalSslSettingsForAZoneEditUniversalSslSettingsResponse</code>
- <code title="get /zones/{zone_identifier}/ssl/universal/settings">client.zones.ssls.universals.settings.<a href="./src/resources/zones/ssls/universals/settings.ts">universalSslSettingsForAZoneUniversalSslSettingsDetails</a>(zoneIdentifier) -> SettingUniversalSslSettingsForAZoneUniversalSslSettingsDetailsResponse</code>

### Verifications

Types:

- <code><a href="./src/resources/zones/ssls/verifications.ts">VerificationUpdateResponse</a></code>
- <code><a href="./src/resources/zones/ssls/verifications.ts">VerificationSslVerificationSslVerificationDetailsResponse</a></code>

Methods:

- <code title="patch /zones/{zone_identifier}/ssl/verification/{cert_pack_uuid}">client.zones.ssls.verifications.<a href="./src/resources/zones/ssls/verifications.ts">update</a>(zoneIdentifier, certPackUuid, { ...params }) -> VerificationUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/ssl/verification">client.zones.ssls.verifications.<a href="./src/resources/zones/ssls/verifications.ts">sslVerificationSslVerificationDetails</a>(zoneIdentifier, { ...params }) -> VerificationSslVerificationSslVerificationDetailsResponse</code>

## Subscriptions

Types:

- <code><a href="./src/resources/zones/subscriptions.ts">SubscriptionZoneSubscriptionCreateZoneSubscriptionResponse</a></code>
- <code><a href="./src/resources/zones/subscriptions.ts">SubscriptionZoneSubscriptionUpdateZoneSubscriptionResponse</a></code>
- <code><a href="./src/resources/zones/subscriptions.ts">SubscriptionZoneSubscriptionZoneSubscriptionDetailsResponse</a></code>

Methods:

- <code title="post /zones/{identifier}/subscription">client.zones.subscriptions.<a href="./src/resources/zones/subscriptions.ts">zoneSubscriptionCreateZoneSubscription</a>(identifier, { ...params }) -> SubscriptionZoneSubscriptionCreateZoneSubscriptionResponse</code>
- <code title="put /zones/{identifier}/subscription">client.zones.subscriptions.<a href="./src/resources/zones/subscriptions.ts">zoneSubscriptionUpdateZoneSubscription</a>(identifier, { ...params }) -> SubscriptionZoneSubscriptionUpdateZoneSubscriptionResponse</code>
- <code title="get /zones/{identifier}/subscription">client.zones.subscriptions.<a href="./src/resources/zones/subscriptions.ts">zoneSubscriptionZoneSubscriptionDetails</a>(identifier) -> SubscriptionZoneSubscriptionZoneSubscriptionDetailsResponse</code>

## Acms

### TotalTls

Types:

- <code><a href="./src/resources/zones/acms/total-tls.ts">TotalTlTotalTlsEnableOrDisableTotalTlsResponse</a></code>
- <code><a href="./src/resources/zones/acms/total-tls.ts">TotalTlTotalTlsTotalTlsSettingsDetailsResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/acm/total_tls">client.zones.acms.totalTls.<a href="./src/resources/zones/acms/total-tls.ts">totalTlsEnableOrDisableTotalTls</a>(zoneIdentifier, { ...params }) -> TotalTlTotalTlsEnableOrDisableTotalTlsResponse</code>
- <code title="get /zones/{zone_identifier}/acm/total_tls">client.zones.acms.totalTls.<a href="./src/resources/zones/acms/total-tls.ts">totalTlsTotalTlsSettingsDetails</a>(zoneIdentifier) -> TotalTlTotalTlsTotalTlsSettingsDetailsResponse</code>

## Analytics

### Colo

Types:

- <code><a href="./src/resources/zones/analytics/colo.ts">ColoZoneAnalyticsDeprecatedGetAnalyticsByCoLocationsResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/analytics/colos">client.zones.analytics.colo.<a href="./src/resources/zones/analytics/colo.ts">zoneAnalyticsDeprecatedGetAnalyticsByCoLocations</a>(zoneIdentifier, { ...params }) -> ColoZoneAnalyticsDeprecatedGetAnalyticsByCoLocationsResponse</code>

### Dashboards

Types:

- <code><a href="./src/resources/zones/analytics/dashboards.ts">DashboardZoneAnalyticsDeprecatedGetDashboardResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/analytics/dashboard">client.zones.analytics.dashboards.<a href="./src/resources/zones/analytics/dashboards.ts">zoneAnalyticsDeprecatedGetDashboard</a>(zoneIdentifier, { ...params }) -> DashboardZoneAnalyticsDeprecatedGetDashboardResponse</code>

### Latencies

Types:

- <code><a href="./src/resources/zones/analytics/latencies/latencies.ts">LatencyArgoAnalyticsForZoneArgoAnalyticsForAZoneResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/analytics/latency">client.zones.analytics.latencies.<a href="./src/resources/zones/analytics/latencies/latencies.ts">argoAnalyticsForZoneArgoAnalyticsForAZone</a>(zoneIdentifier, { ...params }) -> LatencyArgoAnalyticsForZoneArgoAnalyticsForAZoneResponse</code>

#### Colos

Types:

- <code><a href="./src/resources/zones/analytics/latencies/colos.ts">ColoArgoAnalyticsForGeolocationArgoAnalyticsForAZoneAtDifferentPoPsResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/analytics/latency/colos">client.zones.analytics.latencies.colos.<a href="./src/resources/zones/analytics/latencies/colos.ts">argoAnalyticsForGeolocationArgoAnalyticsForAZoneAtDifferentPoPs</a>(zoneIdentifier) -> ColoArgoAnalyticsForGeolocationArgoAnalyticsForAZoneAtDifferentPoPsResponse</code>

## Argos

### SmartRoutings

Types:

- <code><a href="./src/resources/zones/argos/smart-routings.ts">SmartRoutingArgoSmartRoutingGetArgoSmartRoutingSettingResponse</a></code>
- <code><a href="./src/resources/zones/argos/smart-routings.ts">SmartRoutingArgoSmartRoutingPatchArgoSmartRoutingSettingResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/argo/smart_routing">client.zones.argos.smartRoutings.<a href="./src/resources/zones/argos/smart-routings.ts">argoSmartRoutingGetArgoSmartRoutingSetting</a>(zoneIdentifier) -> SmartRoutingArgoSmartRoutingGetArgoSmartRoutingSettingResponse</code>
- <code title="patch /zones/{zone_identifier}/argo/smart_routing">client.zones.argos.smartRoutings.<a href="./src/resources/zones/argos/smart-routings.ts">argoSmartRoutingPatchArgoSmartRoutingSetting</a>(zoneIdentifier, { ...params }) -> SmartRoutingArgoSmartRoutingPatchArgoSmartRoutingSettingResponse</code>

### TieredCaching

Types:

- <code><a href="./src/resources/zones/argos/tiered-caching.ts">TieredCachingTieredCachingGetTieredCachingSettingResponse</a></code>
- <code><a href="./src/resources/zones/argos/tiered-caching.ts">TieredCachingTieredCachingPatchTieredCachingSettingResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/argo/tiered_caching">client.zones.argos.tieredCaching.<a href="./src/resources/zones/argos/tiered-caching.ts">tieredCachingGetTieredCachingSetting</a>(zoneIdentifier) -> TieredCachingTieredCachingGetTieredCachingSettingResponse</code>
- <code title="patch /zones/{zone_identifier}/argo/tiered_caching">client.zones.argos.tieredCaching.<a href="./src/resources/zones/argos/tiered-caching.ts">tieredCachingPatchTieredCachingSetting</a>(zoneIdentifier, { ...params }) -> TieredCachingTieredCachingPatchTieredCachingSettingResponse</code>

## AvailablePlans

Types:

- <code><a href="./src/resources/zones/available-plans.ts">AvailablePlanRetrieveResponse</a></code>
- <code><a href="./src/resources/zones/available-plans.ts">AvailablePlanListResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/available_plans/{plan_identifier}">client.zones.availablePlans.<a href="./src/resources/zones/available-plans.ts">retrieve</a>(zoneIdentifier, planIdentifier) -> AvailablePlanRetrieveResponse</code>
- <code title="get /zones/{zone_identifier}/available_plans">client.zones.availablePlans.<a href="./src/resources/zones/available-plans.ts">list</a>(zoneIdentifier) -> AvailablePlanListResponse</code>

## AvailableRatePlans

Types:

- <code><a href="./src/resources/zones/available-rate-plans.ts">AvailableRatePlanZoneRatePlanListAvailableRatePlansResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/available_rate_plans">client.zones.availableRatePlans.<a href="./src/resources/zones/available-rate-plans.ts">zoneRatePlanListAvailableRatePlans</a>(zoneIdentifier) -> AvailableRatePlanZoneRatePlanListAvailableRatePlansResponse</code>

## Caches

### CacheReserves

Types:

- <code><a href="./src/resources/zones/caches/cache-reserves.ts">CacheReserveListResponse</a></code>
- <code><a href="./src/resources/zones/caches/cache-reserves.ts">CacheReserveZoneCacheSettingsChangeCacheReserveSettingResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/cache/cache_reserve">client.zones.caches.cacheReserves.<a href="./src/resources/zones/caches/cache-reserves.ts">list</a>(zoneIdentifier) -> CacheReserveListResponse</code>
- <code title="patch /zones/{zone_identifier}/cache/cache_reserve">client.zones.caches.cacheReserves.<a href="./src/resources/zones/caches/cache-reserves.ts">zoneCacheSettingsChangeCacheReserveSetting</a>(zoneIdentifier, { ...params }) -> CacheReserveZoneCacheSettingsChangeCacheReserveSettingResponse</code>

### TieredCacheSmartTopologyEnables

Types:

- <code><a href="./src/resources/zones/caches/tiered-cache-smart-topology-enables.ts">TieredCacheSmartTopologyEnableDeleteResponse</a></code>
- <code><a href="./src/resources/zones/caches/tiered-cache-smart-topology-enables.ts">TieredCacheSmartTopologyEnableSmartTieredCacheGetSmartTieredCacheSettingResponse</a></code>
- <code><a href="./src/resources/zones/caches/tiered-cache-smart-topology-enables.ts">TieredCacheSmartTopologyEnableSmartTieredCachePatchSmartTieredCacheSettingResponse</a></code>

Methods:

- <code title="delete /zones/{zone_identifier}/cache/tiered_cache_smart_topology_enable">client.zones.caches.tieredCacheSmartTopologyEnables.<a href="./src/resources/zones/caches/tiered-cache-smart-topology-enables.ts">delete</a>(zoneIdentifier) -> TieredCacheSmartTopologyEnableDeleteResponse</code>
- <code title="get /zones/{zone_identifier}/cache/tiered_cache_smart_topology_enable">client.zones.caches.tieredCacheSmartTopologyEnables.<a href="./src/resources/zones/caches/tiered-cache-smart-topology-enables.ts">smartTieredCacheGetSmartTieredCacheSetting</a>(zoneIdentifier) -> TieredCacheSmartTopologyEnableSmartTieredCacheGetSmartTieredCacheSettingResponse</code>
- <code title="patch /zones/{zone_identifier}/cache/tiered_cache_smart_topology_enable">client.zones.caches.tieredCacheSmartTopologyEnables.<a href="./src/resources/zones/caches/tiered-cache-smart-topology-enables.ts">smartTieredCachePatchSmartTieredCacheSetting</a>(zoneIdentifier, { ...params }) -> TieredCacheSmartTopologyEnableSmartTieredCachePatchSmartTieredCacheSettingResponse</code>

### Variants

Types:

- <code><a href="./src/resources/zones/caches/variants.ts">VariantListResponse</a></code>
- <code><a href="./src/resources/zones/caches/variants.ts">VariantDeleteResponse</a></code>
- <code><a href="./src/resources/zones/caches/variants.ts">VariantZoneCacheSettingsChangeVariantsSettingResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/cache/variants">client.zones.caches.variants.<a href="./src/resources/zones/caches/variants.ts">list</a>(zoneIdentifier) -> VariantListResponse</code>
- <code title="delete /zones/{zone_identifier}/cache/variants">client.zones.caches.variants.<a href="./src/resources/zones/caches/variants.ts">delete</a>(zoneIdentifier) -> VariantDeleteResponse</code>
- <code title="patch /zones/{zone_identifier}/cache/variants">client.zones.caches.variants.<a href="./src/resources/zones/caches/variants.ts">zoneCacheSettingsChangeVariantsSetting</a>(zoneIdentifier, { ...params }) -> VariantZoneCacheSettingsChangeVariantsSettingResponse</code>

## CertificateAuthorities

### HostnameAssociations

Types:

- <code><a href="./src/resources/zones/certificate-authorities/hostname-associations.ts">HostnameAssociationClientCertificateForAZoneListHostnameAssociationsResponse</a></code>
- <code><a href="./src/resources/zones/certificate-authorities/hostname-associations.ts">HostnameAssociationClientCertificateForAZonePutHostnameAssociationsResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/certificate_authorities/hostname_associations">client.zones.certificateAuthorities.hostnameAssociations.<a href="./src/resources/zones/certificate-authorities/hostname-associations.ts">clientCertificateForAZoneListHostnameAssociations</a>(zoneIdentifier, { ...params }) -> HostnameAssociationClientCertificateForAZoneListHostnameAssociationsResponse</code>
- <code title="put /zones/{zone_identifier}/certificate_authorities/hostname_associations">client.zones.certificateAuthorities.hostnameAssociations.<a href="./src/resources/zones/certificate-authorities/hostname-associations.ts">clientCertificateForAZonePutHostnameAssociations</a>(zoneIdentifier, { ...params }) -> HostnameAssociationClientCertificateForAZonePutHostnameAssociationsResponse</code>

## ClientCertificates

Types:

- <code><a href="./src/resources/zones/client-certificates.ts">ClientCertificateRetrieveResponse</a></code>
- <code><a href="./src/resources/zones/client-certificates.ts">ClientCertificateUpdateResponse</a></code>
- <code><a href="./src/resources/zones/client-certificates.ts">ClientCertificateDeleteResponse</a></code>
- <code><a href="./src/resources/zones/client-certificates.ts">ClientCertificateClientCertificateForAZoneCreateClientCertificateResponse</a></code>
- <code><a href="./src/resources/zones/client-certificates.ts">ClientCertificateClientCertificateForAZoneListClientCertificatesResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/client_certificates/{client_certificate_identifier}">client.zones.clientCertificates.<a href="./src/resources/zones/client-certificates.ts">retrieve</a>(zoneIdentifier, clientCertificateIdentifier) -> ClientCertificateRetrieveResponse</code>
- <code title="patch /zones/{zone_identifier}/client_certificates/{client_certificate_identifier}">client.zones.clientCertificates.<a href="./src/resources/zones/client-certificates.ts">update</a>(zoneIdentifier, clientCertificateIdentifier) -> ClientCertificateUpdateResponse</code>
- <code title="delete /zones/{zone_identifier}/client_certificates/{client_certificate_identifier}">client.zones.clientCertificates.<a href="./src/resources/zones/client-certificates.ts">delete</a>(zoneIdentifier, clientCertificateIdentifier) -> ClientCertificateDeleteResponse</code>
- <code title="post /zones/{zone_identifier}/client_certificates">client.zones.clientCertificates.<a href="./src/resources/zones/client-certificates.ts">clientCertificateForAZoneCreateClientCertificate</a>(zoneIdentifier, { ...params }) -> ClientCertificateClientCertificateForAZoneCreateClientCertificateResponse</code>
- <code title="get /zones/{zone_identifier}/client_certificates">client.zones.clientCertificates.<a href="./src/resources/zones/client-certificates.ts">clientCertificateForAZoneListClientCertificates</a>(zoneIdentifier, { ...params }) -> ClientCertificateClientCertificateForAZoneListClientCertificatesResponsesPage</code>

## CustomCertificates

Types:

- <code><a href="./src/resources/zones/custom-certificates/custom-certificates.ts">CustomCertificateRetrieveResponse</a></code>
- <code><a href="./src/resources/zones/custom-certificates/custom-certificates.ts">CustomCertificateUpdateResponse</a></code>
- <code><a href="./src/resources/zones/custom-certificates/custom-certificates.ts">CustomCertificateDeleteResponse</a></code>
- <code><a href="./src/resources/zones/custom-certificates/custom-certificates.ts">CustomCertificateCustomSslForAZoneCreateSslConfigurationResponse</a></code>
- <code><a href="./src/resources/zones/custom-certificates/custom-certificates.ts">CustomCertificateCustomSslForAZoneListSslConfigurationsResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/custom_certificates/{identifier}">client.zones.customCertificates.<a href="./src/resources/zones/custom-certificates/custom-certificates.ts">retrieve</a>(zoneIdentifier, identifier) -> CustomCertificateRetrieveResponse</code>
- <code title="patch /zones/{zone_identifier}/custom_certificates/{identifier}">client.zones.customCertificates.<a href="./src/resources/zones/custom-certificates/custom-certificates.ts">update</a>(zoneIdentifier, identifier, { ...params }) -> CustomCertificateUpdateResponse</code>
- <code title="delete /zones/{zone_identifier}/custom_certificates/{identifier}">client.zones.customCertificates.<a href="./src/resources/zones/custom-certificates/custom-certificates.ts">delete</a>(zoneIdentifier, identifier) -> CustomCertificateDeleteResponse</code>
- <code title="post /zones/{zone_identifier}/custom_certificates">client.zones.customCertificates.<a href="./src/resources/zones/custom-certificates/custom-certificates.ts">customSslForAZoneCreateSslConfiguration</a>(zoneIdentifier, { ...params }) -> CustomCertificateCustomSslForAZoneCreateSslConfigurationResponse</code>
- <code title="get /zones/{zone_identifier}/custom_certificates">client.zones.customCertificates.<a href="./src/resources/zones/custom-certificates/custom-certificates.ts">customSslForAZoneListSslConfigurations</a>(zoneIdentifier, { ...params }) -> CustomCertificateCustomSslForAZoneListSslConfigurationsResponsesPage</code>

### Prioritizes

Types:

- <code><a href="./src/resources/zones/custom-certificates/prioritizes.ts">PrioritizeCustomSslForAZoneRePrioritizeSslCertificatesResponse</a></code>

Methods:

- <code title="put /zones/{zone_identifier}/custom_certificates/prioritize">client.zones.customCertificates.prioritizes.<a href="./src/resources/zones/custom-certificates/prioritizes.ts">customSslForAZoneRePrioritizeSslCertificates</a>(zoneIdentifier, { ...params }) -> PrioritizeCustomSslForAZoneRePrioritizeSslCertificatesResponse</code>

## CustomHostnames

Types:

- <code><a href="./src/resources/zones/custom-hostnames/custom-hostnames.ts">CustomHostnameRetrieveResponse</a></code>
- <code><a href="./src/resources/zones/custom-hostnames/custom-hostnames.ts">CustomHostnameUpdateResponse</a></code>
- <code><a href="./src/resources/zones/custom-hostnames/custom-hostnames.ts">CustomHostnameDeleteResponse</a></code>
- <code><a href="./src/resources/zones/custom-hostnames/custom-hostnames.ts">CustomHostnameCustomHostnameForAZoneCreateCustomHostnameResponse</a></code>
- <code><a href="./src/resources/zones/custom-hostnames/custom-hostnames.ts">CustomHostnameCustomHostnameForAZoneListCustomHostnamesResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/custom_hostnames/{identifier}">client.zones.customHostnames.<a href="./src/resources/zones/custom-hostnames/custom-hostnames.ts">retrieve</a>(zoneIdentifier, identifier) -> CustomHostnameRetrieveResponse</code>
- <code title="patch /zones/{zone_identifier}/custom_hostnames/{identifier}">client.zones.customHostnames.<a href="./src/resources/zones/custom-hostnames/custom-hostnames.ts">update</a>(zoneIdentifier, identifier, { ...params }) -> CustomHostnameUpdateResponse</code>
- <code title="delete /zones/{zone_identifier}/custom_hostnames/{identifier}">client.zones.customHostnames.<a href="./src/resources/zones/custom-hostnames/custom-hostnames.ts">delete</a>(zoneIdentifier, identifier) -> CustomHostnameDeleteResponse</code>
- <code title="post /zones/{zone_identifier}/custom_hostnames">client.zones.customHostnames.<a href="./src/resources/zones/custom-hostnames/custom-hostnames.ts">customHostnameForAZoneCreateCustomHostname</a>(zoneIdentifier, { ...params }) -> CustomHostnameCustomHostnameForAZoneCreateCustomHostnameResponse</code>
- <code title="get /zones/{zone_identifier}/custom_hostnames">client.zones.customHostnames.<a href="./src/resources/zones/custom-hostnames/custom-hostnames.ts">customHostnameForAZoneListCustomHostnames</a>(zoneIdentifier, { ...params }) -> CustomHostnameCustomHostnameForAZoneListCustomHostnamesResponsesPage</code>

### FallbackOrigins

Types:

- <code><a href="./src/resources/zones/custom-hostnames/fallback-origins.ts">FallbackOriginDeleteResponse</a></code>
- <code><a href="./src/resources/zones/custom-hostnames/fallback-origins.ts">FallbackOriginCustomHostnameFallbackOriginForAZoneGetFallbackOriginForCustomHostnamesResponse</a></code>
- <code><a href="./src/resources/zones/custom-hostnames/fallback-origins.ts">FallbackOriginCustomHostnameFallbackOriginForAZoneUpdateFallbackOriginForCustomHostnamesResponse</a></code>

Methods:

- <code title="delete /zones/{zone_identifier}/custom_hostnames/fallback_origin">client.zones.customHostnames.fallbackOrigins.<a href="./src/resources/zones/custom-hostnames/fallback-origins.ts">delete</a>(zoneIdentifier) -> FallbackOriginDeleteResponse</code>
- <code title="get /zones/{zone_identifier}/custom_hostnames/fallback_origin">client.zones.customHostnames.fallbackOrigins.<a href="./src/resources/zones/custom-hostnames/fallback-origins.ts">customHostnameFallbackOriginForAZoneGetFallbackOriginForCustomHostnames</a>(zoneIdentifier) -> FallbackOriginCustomHostnameFallbackOriginForAZoneGetFallbackOriginForCustomHostnamesResponse</code>
- <code title="put /zones/{zone_identifier}/custom_hostnames/fallback_origin">client.zones.customHostnames.fallbackOrigins.<a href="./src/resources/zones/custom-hostnames/fallback-origins.ts">customHostnameFallbackOriginForAZoneUpdateFallbackOriginForCustomHostnames</a>(zoneIdentifier, { ...params }) -> FallbackOriginCustomHostnameFallbackOriginForAZoneUpdateFallbackOriginForCustomHostnamesResponse</code>

## CustomNs

Types:

- <code><a href="./src/resources/zones/custom-ns.ts">CustomNAccountLevelCustomNameserversUsageForAZoneGetAccountCustomNameserverRelatedZoneMetadataResponse</a></code>
- <code><a href="./src/resources/zones/custom-ns.ts">CustomNAccountLevelCustomNameserversUsageForAZoneSetAccountCustomNameserverRelatedZoneMetadataResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/custom_ns">client.zones.customNs.<a href="./src/resources/zones/custom-ns.ts">accountLevelCustomNameserversUsageForAZoneGetAccountCustomNameserverRelatedZoneMetadata</a>(zoneIdentifier) -> CustomNAccountLevelCustomNameserversUsageForAZoneGetAccountCustomNameserverRelatedZoneMetadataResponse</code>
- <code title="put /zones/{zone_identifier}/custom_ns">client.zones.customNs.<a href="./src/resources/zones/custom-ns.ts">accountLevelCustomNameserversUsageForAZoneSetAccountCustomNameserverRelatedZoneMetadata</a>(zoneIdentifier, { ...params }) -> CustomNAccountLevelCustomNameserversUsageForAZoneSetAccountCustomNameserverRelatedZoneMetadataResponse</code>

## CustomPages

Types:

- <code><a href="./src/resources/zones/custom-pages.ts">CustomPageRetrieveResponse</a></code>
- <code><a href="./src/resources/zones/custom-pages.ts">CustomPageUpdateResponse</a></code>
- <code><a href="./src/resources/zones/custom-pages.ts">CustomPageCustomPagesForAZoneListCustomPagesResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/custom_pages/{identifier}">client.zones.customPages.<a href="./src/resources/zones/custom-pages.ts">retrieve</a>(zoneIdentifier, identifier) -> CustomPageRetrieveResponse</code>
- <code title="put /zones/{zone_identifier}/custom_pages/{identifier}">client.zones.customPages.<a href="./src/resources/zones/custom-pages.ts">update</a>(zoneIdentifier, identifier, { ...params }) -> CustomPageUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/custom_pages">client.zones.customPages.<a href="./src/resources/zones/custom-pages.ts">customPagesForAZoneListCustomPages</a>(zoneIdentifier) -> CustomPageCustomPagesForAZoneListCustomPagesResponse</code>

## DNSRecords

Types:

- <code><a href="./src/resources/zones/dns-records/dns-records.ts">DNSRecord</a></code>
- <code><a href="./src/resources/zones/dns-records/dns-records.ts">DNSRecordDeleteResponse</a></code>
- <code><a href="./src/resources/zones/dns-records/dns-records.ts">DNSRecordDNSRecordsForAZoneListDNSRecordsResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/dns_records/{identifier}">client.zones.dnsRecords.<a href="./src/resources/zones/dns-records/dns-records.ts">retrieve</a>(zoneIdentifier, identifier) -> DNSRecord</code>
- <code title="put /zones/{zone_identifier}/dns_records/{identifier}">client.zones.dnsRecords.<a href="./src/resources/zones/dns-records/dns-records.ts">update</a>(zoneIdentifier, identifier, { ...params }) -> DNSRecord</code>
- <code title="delete /zones/{zone_identifier}/dns_records/{identifier}">client.zones.dnsRecords.<a href="./src/resources/zones/dns-records/dns-records.ts">delete</a>(zoneIdentifier, identifier) -> DNSRecordDeleteResponse</code>
- <code title="post /zones/{zone_identifier}/dns_records">client.zones.dnsRecords.<a href="./src/resources/zones/dns-records/dns-records.ts">dnsRecordsForAZoneCreateDNSRecord</a>(zoneIdentifier, { ...params }) -> DNSRecord</code>
- <code title="get /zones/{zone_identifier}/dns_records">client.zones.dnsRecords.<a href="./src/resources/zones/dns-records/dns-records.ts">dnsRecordsForAZoneListDNSRecords</a>(zoneIdentifier, { ...params }) -> DNSRecordDNSRecordsForAZoneListDNSRecordsResponsesPage</code>
- <code title="patch /zones/{zone_identifier}/dns_records/{identifier}">client.zones.dnsRecords.<a href="./src/resources/zones/dns-records/dns-records.ts">patch</a>(zoneIdentifier, identifier, { ...params }) -> DNSRecord</code>

### Exports

Types:

- <code><a href="./src/resources/zones/dns-records/exports.ts">ExportListResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/dns_records/export">client.zones.dnsRecords.exports.<a href="./src/resources/zones/dns-records/exports.ts">list</a>(zoneIdentifier) -> string</code>

### Imports

Types:

- <code><a href="./src/resources/zones/dns-records/imports.ts">ImportDNSRecordsForAZoneImportDNSRecordsResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/dns_records/import">client.zones.dnsRecords.imports.<a href="./src/resources/zones/dns-records/imports.ts">dnsRecordsForAZoneImportDNSRecords</a>(zoneIdentifier, { ...params }) -> ImportDNSRecordsForAZoneImportDNSRecordsResponse</code>

### Scans

Types:

- <code><a href="./src/resources/zones/dns-records/scans.ts">ScanDNSRecordsForAZoneScanDNSRecordsResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/dns_records/scan">client.zones.dnsRecords.scans.<a href="./src/resources/zones/dns-records/scans.ts">dnsRecordsForAZoneScanDNSRecords</a>(zoneIdentifier) -> ScanDNSRecordsForAZoneScanDNSRecordsResponse</code>

## Dnssecs

Types:

- <code><a href="./src/resources/zones/dnssecs.ts">DnssecRetrieveResponse</a></code>
- <code><a href="./src/resources/zones/dnssecs.ts">DnssecUpdateResponse</a></code>
- <code><a href="./src/resources/zones/dnssecs.ts">DnssecDeleteResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/dnssec">client.zones.dnssecs.<a href="./src/resources/zones/dnssecs.ts">retrieve</a>(zoneIdentifier) -> DnssecRetrieveResponse</code>
- <code title="patch /zones/{zone_identifier}/dnssec">client.zones.dnssecs.<a href="./src/resources/zones/dnssecs.ts">update</a>(zoneIdentifier, { ...params }) -> DnssecUpdateResponse</code>
- <code title="delete /zones/{zone_identifier}/dnssec">client.zones.dnssecs.<a href="./src/resources/zones/dnssecs.ts">delete</a>(zoneIdentifier) -> DnssecDeleteResponse</code>

## Emails

### Routings

Types:

- <code><a href="./src/resources/zones/emails/routings/routings.ts">RoutingEmailRoutingSettingsGetEmailRoutingSettingsResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/email/routing">client.zones.emails.routings.<a href="./src/resources/zones/emails/routings/routings.ts">emailRoutingSettingsGetEmailRoutingSettings</a>(zoneIdentifier) -> RoutingEmailRoutingSettingsGetEmailRoutingSettingsResponse</code>

#### Disables

Types:

- <code><a href="./src/resources/zones/emails/routings/disables.ts">DisableEmailRoutingSettingsDisableEmailRoutingResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/email/routing/disable">client.zones.emails.routings.disables.<a href="./src/resources/zones/emails/routings/disables.ts">emailRoutingSettingsDisableEmailRouting</a>(zoneIdentifier) -> DisableEmailRoutingSettingsDisableEmailRoutingResponse</code>

#### DNS

Types:

- <code><a href="./src/resources/zones/emails/routings/dns.ts">DNSEmailRoutingSettingsEmailRoutingDNSSettingsResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/email/routing/dns">client.zones.emails.routings.dns.<a href="./src/resources/zones/emails/routings/dns.ts">emailRoutingSettingsEmailRoutingDNSSettings</a>(zoneIdentifier) -> DNSEmailRoutingSettingsEmailRoutingDNSSettingsResponse</code>

#### Enables

Types:

- <code><a href="./src/resources/zones/emails/routings/enables.ts">EnableEmailRoutingSettingsEnableEmailRoutingResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/email/routing/enable">client.zones.emails.routings.enables.<a href="./src/resources/zones/emails/routings/enables.ts">emailRoutingSettingsEnableEmailRouting</a>(zoneIdentifier) -> EnableEmailRoutingSettingsEnableEmailRoutingResponse</code>

#### Rules

Types:

- <code><a href="./src/resources/zones/emails/routings/rules/rules.ts">RuleRetrieveResponse</a></code>
- <code><a href="./src/resources/zones/emails/routings/rules/rules.ts">RuleUpdateResponse</a></code>
- <code><a href="./src/resources/zones/emails/routings/rules/rules.ts">RuleDeleteResponse</a></code>
- <code><a href="./src/resources/zones/emails/routings/rules/rules.ts">RuleEmailRoutingRoutingRulesCreateRoutingRuleResponse</a></code>
- <code><a href="./src/resources/zones/emails/routings/rules/rules.ts">RuleEmailRoutingRoutingRulesListRoutingRulesResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/email/routing/rules/{rule_identifier}">client.zones.emails.routings.rules.<a href="./src/resources/zones/emails/routings/rules/rules.ts">retrieve</a>(zoneIdentifier, ruleIdentifier) -> RuleRetrieveResponse</code>
- <code title="put /zones/{zone_identifier}/email/routing/rules/{rule_identifier}">client.zones.emails.routings.rules.<a href="./src/resources/zones/emails/routings/rules/rules.ts">update</a>(zoneIdentifier, ruleIdentifier, { ...params }) -> RuleUpdateResponse</code>
- <code title="delete /zones/{zone_identifier}/email/routing/rules/{rule_identifier}">client.zones.emails.routings.rules.<a href="./src/resources/zones/emails/routings/rules/rules.ts">delete</a>(zoneIdentifier, ruleIdentifier) -> RuleDeleteResponse</code>
- <code title="post /zones/{zone_identifier}/email/routing/rules">client.zones.emails.routings.rules.<a href="./src/resources/zones/emails/routings/rules/rules.ts">emailRoutingRoutingRulesCreateRoutingRule</a>(zoneIdentifier, { ...params }) -> RuleEmailRoutingRoutingRulesCreateRoutingRuleResponse</code>
- <code title="get /zones/{zone_identifier}/email/routing/rules">client.zones.emails.routings.rules.<a href="./src/resources/zones/emails/routings/rules/rules.ts">emailRoutingRoutingRulesListRoutingRules</a>(zoneIdentifier, { ...params }) -> RuleEmailRoutingRoutingRulesListRoutingRulesResponsesPage</code>

##### CatchAlls

Types:

- <code><a href="./src/resources/zones/emails/routings/rules/catch-alls.ts">CatchAllEmailRoutingRoutingRulesGetCatchAllRuleResponse</a></code>
- <code><a href="./src/resources/zones/emails/routings/rules/catch-alls.ts">CatchAllEmailRoutingRoutingRulesUpdateCatchAllRuleResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/email/routing/rules/catch_all">client.zones.emails.routings.rules.catchAlls.<a href="./src/resources/zones/emails/routings/rules/catch-alls.ts">emailRoutingRoutingRulesGetCatchAllRule</a>(zoneIdentifier) -> CatchAllEmailRoutingRoutingRulesGetCatchAllRuleResponse</code>
- <code title="put /zones/{zone_identifier}/email/routing/rules/catch_all">client.zones.emails.routings.rules.catchAlls.<a href="./src/resources/zones/emails/routings/rules/catch-alls.ts">emailRoutingRoutingRulesUpdateCatchAllRule</a>(zoneIdentifier, { ...params }) -> CatchAllEmailRoutingRoutingRulesUpdateCatchAllRuleResponse</code>

## Filters

Types:

- <code><a href="./src/resources/zones/filters.ts">FilterRetrieveResponse</a></code>
- <code><a href="./src/resources/zones/filters.ts">FilterUpdateResponse</a></code>
- <code><a href="./src/resources/zones/filters.ts">FilterDeleteResponse</a></code>
- <code><a href="./src/resources/zones/filters.ts">FilterFiltersCreateFiltersResponse</a></code>
- <code><a href="./src/resources/zones/filters.ts">FilterFiltersListFiltersResponse</a></code>
- <code><a href="./src/resources/zones/filters.ts">FilterFiltersUpdateFiltersResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/filters/{id}">client.zones.filters.<a href="./src/resources/zones/filters.ts">retrieve</a>(zoneIdentifier, id) -> FilterRetrieveResponse</code>
- <code title="put /zones/{zone_identifier}/filters/{id}">client.zones.filters.<a href="./src/resources/zones/filters.ts">update</a>(zoneIdentifier, id, { ...params }) -> FilterUpdateResponse</code>
- <code title="delete /zones/{zone_identifier}/filters/{id}">client.zones.filters.<a href="./src/resources/zones/filters.ts">delete</a>(zoneIdentifier, id) -> FilterDeleteResponse</code>
- <code title="post /zones/{zone_identifier}/filters">client.zones.filters.<a href="./src/resources/zones/filters.ts">filtersCreateFilters</a>(zoneIdentifier, { ...params }) -> FilterFiltersCreateFiltersResponse</code>
- <code title="get /zones/{zone_identifier}/filters">client.zones.filters.<a href="./src/resources/zones/filters.ts">filtersListFilters</a>(zoneIdentifier, { ...params }) -> FilterFiltersListFiltersResponsesPage</code>
- <code title="put /zones/{zone_identifier}/filters">client.zones.filters.<a href="./src/resources/zones/filters.ts">filtersUpdateFilters</a>(zoneIdentifier, { ...params }) -> FilterFiltersUpdateFiltersResponse</code>

## Firewalls

### Lockdowns

Types:

- <code><a href="./src/resources/zones/firewalls/lockdowns.ts">LockdownRetrieveResponse</a></code>
- <code><a href="./src/resources/zones/firewalls/lockdowns.ts">LockdownUpdateResponse</a></code>
- <code><a href="./src/resources/zones/firewalls/lockdowns.ts">LockdownDeleteResponse</a></code>
- <code><a href="./src/resources/zones/firewalls/lockdowns.ts">LockdownZoneLockdownCreateAZoneLockdownRuleResponse</a></code>
- <code><a href="./src/resources/zones/firewalls/lockdowns.ts">LockdownZoneLockdownListZoneLockdownRulesResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/firewall/lockdowns/{id}">client.zones.firewalls.lockdowns.<a href="./src/resources/zones/firewalls/lockdowns.ts">retrieve</a>(zoneIdentifier, id) -> LockdownRetrieveResponse</code>
- <code title="put /zones/{zone_identifier}/firewall/lockdowns/{id}">client.zones.firewalls.lockdowns.<a href="./src/resources/zones/firewalls/lockdowns.ts">update</a>(zoneIdentifier, id, { ...params }) -> LockdownUpdateResponse</code>
- <code title="delete /zones/{zone_identifier}/firewall/lockdowns/{id}">client.zones.firewalls.lockdowns.<a href="./src/resources/zones/firewalls/lockdowns.ts">delete</a>(zoneIdentifier, id) -> LockdownDeleteResponse</code>
- <code title="post /zones/{zone_identifier}/firewall/lockdowns">client.zones.firewalls.lockdowns.<a href="./src/resources/zones/firewalls/lockdowns.ts">zoneLockdownCreateAZoneLockdownRule</a>(zoneIdentifier, { ...params }) -> LockdownZoneLockdownCreateAZoneLockdownRuleResponse</code>
- <code title="get /zones/{zone_identifier}/firewall/lockdowns">client.zones.firewalls.lockdowns.<a href="./src/resources/zones/firewalls/lockdowns.ts">zoneLockdownListZoneLockdownRules</a>(zoneIdentifier, { ...params }) -> LockdownZoneLockdownListZoneLockdownRulesResponsesPage</code>

### Rules

Types:

- <code><a href="./src/resources/zones/firewalls/rules.ts">RuleRetrieveResponse</a></code>
- <code><a href="./src/resources/zones/firewalls/rules.ts">RuleUpdateResponse</a></code>
- <code><a href="./src/resources/zones/firewalls/rules.ts">RuleDeleteResponse</a></code>
- <code><a href="./src/resources/zones/firewalls/rules.ts">RuleFirewallRulesCreateFirewallRulesResponse</a></code>
- <code><a href="./src/resources/zones/firewalls/rules.ts">RuleFirewallRulesListFirewallRulesResponse</a></code>
- <code><a href="./src/resources/zones/firewalls/rules.ts">RuleFirewallRulesUpdateFirewallRulesResponse</a></code>
- <code><a href="./src/resources/zones/firewalls/rules.ts">RuleFirewallRulesUpdatePriorityOfFirewallRulesResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/firewall/rules/{id}">client.zones.firewalls.rules.<a href="./src/resources/zones/firewalls/rules.ts">retrieve</a>(zoneIdentifier, id) -> RuleRetrieveResponse</code>
- <code title="put /zones/{zone_identifier}/firewall/rules/{id}">client.zones.firewalls.rules.<a href="./src/resources/zones/firewalls/rules.ts">update</a>(zoneIdentifier, id, { ...params }) -> RuleUpdateResponse</code>
- <code title="delete /zones/{zone_identifier}/firewall/rules/{id}">client.zones.firewalls.rules.<a href="./src/resources/zones/firewalls/rules.ts">delete</a>(zoneIdentifier, id, { ...params }) -> RuleDeleteResponse</code>
- <code title="post /zones/{zone_identifier}/firewall/rules">client.zones.firewalls.rules.<a href="./src/resources/zones/firewalls/rules.ts">firewallRulesCreateFirewallRules</a>(zoneIdentifier, { ...params }) -> RuleFirewallRulesCreateFirewallRulesResponse</code>
- <code title="get /zones/{zone_identifier}/firewall/rules">client.zones.firewalls.rules.<a href="./src/resources/zones/firewalls/rules.ts">firewallRulesListFirewallRules</a>(zoneIdentifier, { ...params }) -> RuleFirewallRulesListFirewallRulesResponsesPage</code>
- <code title="put /zones/{zone_identifier}/firewall/rules">client.zones.firewalls.rules.<a href="./src/resources/zones/firewalls/rules.ts">firewallRulesUpdateFirewallRules</a>(zoneIdentifier, { ...params }) -> RuleFirewallRulesUpdateFirewallRulesResponse</code>
- <code title="patch /zones/{zone_identifier}/firewall/rules">client.zones.firewalls.rules.<a href="./src/resources/zones/firewalls/rules.ts">firewallRulesUpdatePriorityOfFirewallRules</a>(zoneIdentifier, { ...params }) -> RuleFirewallRulesUpdatePriorityOfFirewallRulesResponse</code>

### UaRules

Types:

- <code><a href="./src/resources/zones/firewalls/ua-rules.ts">UaRuleRetrieveResponse</a></code>
- <code><a href="./src/resources/zones/firewalls/ua-rules.ts">UaRuleUpdateResponse</a></code>
- <code><a href="./src/resources/zones/firewalls/ua-rules.ts">UaRuleDeleteResponse</a></code>
- <code><a href="./src/resources/zones/firewalls/ua-rules.ts">UaRuleUserAgentBlockingRulesCreateAUserAgentBlockingRuleResponse</a></code>
- <code><a href="./src/resources/zones/firewalls/ua-rules.ts">UaRuleUserAgentBlockingRulesListUserAgentBlockingRulesResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/firewall/ua_rules/{id}">client.zones.firewalls.uaRules.<a href="./src/resources/zones/firewalls/ua-rules.ts">retrieve</a>(zoneIdentifier, id) -> UaRuleRetrieveResponse</code>
- <code title="put /zones/{zone_identifier}/firewall/ua_rules/{id}">client.zones.firewalls.uaRules.<a href="./src/resources/zones/firewalls/ua-rules.ts">update</a>(zoneIdentifier, id, { ...params }) -> UaRuleUpdateResponse</code>
- <code title="delete /zones/{zone_identifier}/firewall/ua_rules/{id}">client.zones.firewalls.uaRules.<a href="./src/resources/zones/firewalls/ua-rules.ts">delete</a>(zoneIdentifier, id) -> UaRuleDeleteResponse</code>
- <code title="post /zones/{zone_identifier}/firewall/ua_rules">client.zones.firewalls.uaRules.<a href="./src/resources/zones/firewalls/ua-rules.ts">userAgentBlockingRulesCreateAUserAgentBlockingRule</a>(zoneIdentifier, { ...params }) -> UaRuleUserAgentBlockingRulesCreateAUserAgentBlockingRuleResponse</code>
- <code title="get /zones/{zone_identifier}/firewall/ua_rules">client.zones.firewalls.uaRules.<a href="./src/resources/zones/firewalls/ua-rules.ts">userAgentBlockingRulesListUserAgentBlockingRules</a>(zoneIdentifier, { ...params }) -> UaRuleUserAgentBlockingRulesListUserAgentBlockingRulesResponsesPage</code>

### Wafs

#### Overrides

Types:

- <code><a href="./src/resources/zones/firewalls/wafs/overrides.ts">OverrideRetrieveResponse</a></code>
- <code><a href="./src/resources/zones/firewalls/wafs/overrides.ts">OverrideUpdateResponse</a></code>
- <code><a href="./src/resources/zones/firewalls/wafs/overrides.ts">OverrideDeleteResponse</a></code>
- <code><a href="./src/resources/zones/firewalls/wafs/overrides.ts">OverrideWafOverridesCreateAWafOverrideResponse</a></code>
- <code><a href="./src/resources/zones/firewalls/wafs/overrides.ts">OverrideWafOverridesListWafOverridesResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/firewall/waf/overrides/{id}">client.zones.firewalls.wafs.overrides.<a href="./src/resources/zones/firewalls/wafs/overrides.ts">retrieve</a>(zoneIdentifier, id) -> OverrideRetrieveResponse</code>
- <code title="put /zones/{zone_identifier}/firewall/waf/overrides/{id}">client.zones.firewalls.wafs.overrides.<a href="./src/resources/zones/firewalls/wafs/overrides.ts">update</a>(zoneIdentifier, id, { ...params }) -> OverrideUpdateResponse</code>
- <code title="delete /zones/{zone_identifier}/firewall/waf/overrides/{id}">client.zones.firewalls.wafs.overrides.<a href="./src/resources/zones/firewalls/wafs/overrides.ts">delete</a>(zoneIdentifier, id) -> OverrideDeleteResponse</code>
- <code title="post /zones/{zone_identifier}/firewall/waf/overrides">client.zones.firewalls.wafs.overrides.<a href="./src/resources/zones/firewalls/wafs/overrides.ts">wafOverridesCreateAWafOverride</a>(zoneIdentifier, { ...params }) -> OverrideWafOverridesCreateAWafOverrideResponse</code>
- <code title="get /zones/{zone_identifier}/firewall/waf/overrides">client.zones.firewalls.wafs.overrides.<a href="./src/resources/zones/firewalls/wafs/overrides.ts">wafOverridesListWafOverrides</a>(zoneIdentifier, { ...params }) -> OverrideWafOverridesListWafOverridesResponsesPage</code>

#### Packages

Types:

- <code><a href="./src/resources/zones/firewalls/wafs/packages/packages.ts">PackageRetrieveResponse</a></code>
- <code><a href="./src/resources/zones/firewalls/wafs/packages/packages.ts">PackageUpdateResponse</a></code>
- <code><a href="./src/resources/zones/firewalls/wafs/packages/packages.ts">PackageWafPackagesListWafPackagesResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/firewall/waf/packages/{identifier}">client.zones.firewalls.wafs.packages.<a href="./src/resources/zones/firewalls/wafs/packages/packages.ts">retrieve</a>(zoneIdentifier, identifier) -> PackageRetrieveResponse</code>
- <code title="patch /zones/{zone_identifier}/firewall/waf/packages/{identifier}">client.zones.firewalls.wafs.packages.<a href="./src/resources/zones/firewalls/wafs/packages/packages.ts">update</a>(zoneIdentifier, identifier, { ...params }) -> PackageUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/firewall/waf/packages">client.zones.firewalls.wafs.packages.<a href="./src/resources/zones/firewalls/wafs/packages/packages.ts">wafPackagesListWafPackages</a>(zoneIdentifier, { ...params }) -> PackageWafPackagesListWafPackagesResponse</code>

##### Groups

Types:

- <code><a href="./src/resources/zones/firewalls/wafs/packages/groups.ts">GroupRetrieveResponse</a></code>
- <code><a href="./src/resources/zones/firewalls/wafs/packages/groups.ts">GroupUpdateResponse</a></code>
- <code><a href="./src/resources/zones/firewalls/wafs/packages/groups.ts">GroupWafRuleGroupsListWafRuleGroupsResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/firewall/waf/packages/{package_identifier}/groups/{identifier}">client.zones.firewalls.wafs.packages.groups.<a href="./src/resources/zones/firewalls/wafs/packages/groups.ts">retrieve</a>(zoneIdentifier, packageIdentifier, identifier) -> GroupRetrieveResponse</code>
- <code title="patch /zones/{zone_identifier}/firewall/waf/packages/{package_identifier}/groups/{identifier}">client.zones.firewalls.wafs.packages.groups.<a href="./src/resources/zones/firewalls/wafs/packages/groups.ts">update</a>(zoneIdentifier, packageIdentifier, identifier, { ...params }) -> GroupUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/firewall/waf/packages/{package_identifier}/groups">client.zones.firewalls.wafs.packages.groups.<a href="./src/resources/zones/firewalls/wafs/packages/groups.ts">wafRuleGroupsListWafRuleGroups</a>(zoneIdentifier, packageIdentifier, { ...params }) -> GroupWafRuleGroupsListWafRuleGroupsResponsesPage</code>

##### Rules

Types:

- <code><a href="./src/resources/zones/firewalls/wafs/packages/rules.ts">RuleRetrieveResponse</a></code>
- <code><a href="./src/resources/zones/firewalls/wafs/packages/rules.ts">RuleUpdateResponse</a></code>
- <code><a href="./src/resources/zones/firewalls/wafs/packages/rules.ts">RuleWafRulesListWafRulesResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/firewall/waf/packages/{package_id}/rules/{identifier}">client.zones.firewalls.wafs.packages.rules.<a href="./src/resources/zones/firewalls/wafs/packages/rules.ts">retrieve</a>(zoneId, packageId, identifier) -> RuleRetrieveResponse</code>
- <code title="patch /zones/{zone_id}/firewall/waf/packages/{package_id}/rules/{identifier}">client.zones.firewalls.wafs.packages.rules.<a href="./src/resources/zones/firewalls/wafs/packages/rules.ts">update</a>(zoneId, packageId, identifier, { ...params }) -> RuleUpdateResponse</code>
- <code title="get /zones/{zone_id}/firewall/waf/packages/{package_id}/rules">client.zones.firewalls.wafs.packages.rules.<a href="./src/resources/zones/firewalls/wafs/packages/rules.ts">wafRulesListWafRules</a>(zoneId, packageId, { ...params }) -> RuleWafRulesListWafRulesResponsesPage</code>

### AccessRules

#### Rules

Types:

- <code><a href="./src/resources/zones/firewalls/access-rules/rules.ts">RuleUpdateResponse</a></code>
- <code><a href="./src/resources/zones/firewalls/access-rules/rules.ts">RuleDeleteResponse</a></code>
- <code><a href="./src/resources/zones/firewalls/access-rules/rules.ts">RuleIPAccessRulesForAZoneCreateAnIPAccessRuleResponse</a></code>
- <code><a href="./src/resources/zones/firewalls/access-rules/rules.ts">RuleIPAccessRulesForAZoneListIPAccessRulesResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/firewall/access_rules/rules/{identifier}">client.zones.firewalls.accessRules.rules.<a href="./src/resources/zones/firewalls/access-rules/rules.ts">update</a>(zoneId, identifier, { ...params }) -> RuleUpdateResponse</code>
- <code title="delete /zones/{zone_id}/firewall/access_rules/rules/{identifier}">client.zones.firewalls.accessRules.rules.<a href="./src/resources/zones/firewalls/access-rules/rules.ts">delete</a>(zoneId, identifier, { ...params }) -> RuleDeleteResponse</code>
- <code title="post /zones/{zone_id}/firewall/access_rules/rules">client.zones.firewalls.accessRules.rules.<a href="./src/resources/zones/firewalls/access-rules/rules.ts">ipAccessRulesForAZoneCreateAnIPAccessRule</a>(zoneId, { ...params }) -> RuleIPAccessRulesForAZoneCreateAnIPAccessRuleResponse</code>
- <code title="get /zones/{zone_id}/firewall/access_rules/rules">client.zones.firewalls.accessRules.rules.<a href="./src/resources/zones/firewalls/access-rules/rules.ts">ipAccessRulesForAZoneListIPAccessRules</a>(zoneId, { ...params }) -> RuleIPAccessRulesForAZoneListIPAccessRulesResponsesPage</code>

## Healthchecks

Types:

- <code><a href="./src/resources/zones/healthchecks/healthchecks.ts">HealthchecksSingleResponse</a></code>
- <code><a href="./src/resources/zones/healthchecks/healthchecks.ts">HealthcheckDeleteResponse</a></code>
- <code><a href="./src/resources/zones/healthchecks/healthchecks.ts">HealthcheckHealthChecksListHealthChecksResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/healthchecks/{identifier}">client.zones.healthchecks.<a href="./src/resources/zones/healthchecks/healthchecks.ts">retrieve</a>(zoneIdentifier, identifier) -> HealthchecksSingleResponse</code>
- <code title="put /zones/{zone_identifier}/healthchecks/{identifier}">client.zones.healthchecks.<a href="./src/resources/zones/healthchecks/healthchecks.ts">update</a>(zoneIdentifier, identifier, { ...params }) -> HealthchecksSingleResponse</code>
- <code title="delete /zones/{zone_identifier}/healthchecks/{identifier}">client.zones.healthchecks.<a href="./src/resources/zones/healthchecks/healthchecks.ts">delete</a>(zoneIdentifier, identifier) -> HealthcheckDeleteResponse</code>
- <code title="post /zones/{zone_identifier}/healthchecks">client.zones.healthchecks.<a href="./src/resources/zones/healthchecks/healthchecks.ts">healthChecksCreateHealthCheck</a>(zoneIdentifier, { ...params }) -> HealthchecksSingleResponse</code>
- <code title="get /zones/{zone_identifier}/healthchecks">client.zones.healthchecks.<a href="./src/resources/zones/healthchecks/healthchecks.ts">healthChecksListHealthChecks</a>(zoneIdentifier) -> HealthcheckHealthChecksListHealthChecksResponse</code>

### Previews

Types:

- <code><a href="./src/resources/zones/healthchecks/previews.ts">PreviewDeleteResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/healthchecks/preview/{identifier}">client.zones.healthchecks.previews.<a href="./src/resources/zones/healthchecks/previews.ts">retrieve</a>(zoneIdentifier, identifier) -> HealthchecksSingleResponse</code>
- <code title="delete /zones/{zone_identifier}/healthchecks/preview/{identifier}">client.zones.healthchecks.previews.<a href="./src/resources/zones/healthchecks/previews.ts">delete</a>(zoneIdentifier, identifier) -> PreviewDeleteResponse</code>
- <code title="post /zones/{zone_identifier}/healthchecks/preview">client.zones.healthchecks.previews.<a href="./src/resources/zones/healthchecks/previews.ts">healthChecksCreatePreviewHealthCheck</a>(zoneIdentifier, { ...params }) -> HealthchecksSingleResponse</code>

## KeylessCertificates

Types:

- <code><a href="./src/resources/zones/keyless-certificates.ts">KeylessCertificateRetrieveResponse</a></code>
- <code><a href="./src/resources/zones/keyless-certificates.ts">KeylessCertificateUpdateResponse</a></code>
- <code><a href="./src/resources/zones/keyless-certificates.ts">KeylessCertificateDeleteResponse</a></code>
- <code><a href="./src/resources/zones/keyless-certificates.ts">KeylessCertificateKeylessSslForAZoneCreateKeylessSslConfigurationResponse</a></code>
- <code><a href="./src/resources/zones/keyless-certificates.ts">KeylessCertificateKeylessSslForAZoneListKeylessSslConfigurationsResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/keyless_certificates/{identifier}">client.zones.keylessCertificates.<a href="./src/resources/zones/keyless-certificates.ts">retrieve</a>(zoneIdentifier, identifier) -> KeylessCertificateRetrieveResponse</code>
- <code title="patch /zones/{zone_identifier}/keyless_certificates/{identifier}">client.zones.keylessCertificates.<a href="./src/resources/zones/keyless-certificates.ts">update</a>(zoneIdentifier, identifier, { ...params }) -> KeylessCertificateUpdateResponse</code>
- <code title="delete /zones/{zone_identifier}/keyless_certificates/{identifier}">client.zones.keylessCertificates.<a href="./src/resources/zones/keyless-certificates.ts">delete</a>(zoneIdentifier, identifier) -> KeylessCertificateDeleteResponse</code>
- <code title="post /zones/{zone_identifier}/keyless_certificates">client.zones.keylessCertificates.<a href="./src/resources/zones/keyless-certificates.ts">keylessSslForAZoneCreateKeylessSslConfiguration</a>(zoneIdentifier, { ...params }) -> KeylessCertificateKeylessSslForAZoneCreateKeylessSslConfigurationResponse</code>
- <code title="get /zones/{zone_identifier}/keyless_certificates">client.zones.keylessCertificates.<a href="./src/resources/zones/keyless-certificates.ts">keylessSslForAZoneListKeylessSslConfigurations</a>(zoneIdentifier) -> KeylessCertificateKeylessSslForAZoneListKeylessSslConfigurationsResponse</code>

## Logpushes

### Datasets

#### Fields

Types:

- <code><a href="./src/resources/zones/logpushes/datasets/fields.ts">FieldGetZonesZoneIdentifierLogpushDatasetsDatasetFieldsResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/logpush/datasets/{dataset}/fields">client.zones.logpushes.datasets.fields.<a href="./src/resources/zones/logpushes/datasets/fields.ts">getZonesZoneIdentifierLogpushDatasetsDatasetFields</a>(zoneIdentifier, dataset) -> FieldGetZonesZoneIdentifierLogpushDatasetsDatasetFieldsResponse</code>

#### Jobs

Types:

- <code><a href="./src/resources/zones/logpushes/datasets/jobs.ts">JobGetZonesZoneIdentifierLogpushDatasetsDatasetJobsResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/logpush/datasets/{dataset}/jobs">client.zones.logpushes.datasets.jobs.<a href="./src/resources/zones/logpushes/datasets/jobs.ts">getZonesZoneIdentifierLogpushDatasetsDatasetJobs</a>(zoneIdentifier, dataset) -> JobGetZonesZoneIdentifierLogpushDatasetsDatasetJobsResponse</code>

### Edges

Types:

- <code><a href="./src/resources/zones/logpushes/edges.ts">EdgeGetZonesZoneIdentifierLogpushEdgeJobsResponse</a></code>
- <code><a href="./src/resources/zones/logpushes/edges.ts">EdgePostZonesZoneIdentifierLogpushEdgeJobsResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/logpush/edge">client.zones.logpushes.edges.<a href="./src/resources/zones/logpushes/edges.ts">getZonesZoneIdentifierLogpushEdgeJobs</a>(zoneIdentifier) -> EdgeGetZonesZoneIdentifierLogpushEdgeJobsResponse</code>
- <code title="post /zones/{zone_identifier}/logpush/edge">client.zones.logpushes.edges.<a href="./src/resources/zones/logpushes/edges.ts">postZonesZoneIdentifierLogpushEdgeJobs</a>(zoneIdentifier, { ...params }) -> EdgePostZonesZoneIdentifierLogpushEdgeJobsResponse</code>

### Jobs

Types:

- <code><a href="./src/resources/zones/logpushes/jobs.ts">JobRetrieveResponse</a></code>
- <code><a href="./src/resources/zones/logpushes/jobs.ts">JobUpdateResponse</a></code>
- <code><a href="./src/resources/zones/logpushes/jobs.ts">JobDeleteResponse</a></code>
- <code><a href="./src/resources/zones/logpushes/jobs.ts">JobGetZonesZoneIdentifierLogpushJobsResponse</a></code>
- <code><a href="./src/resources/zones/logpushes/jobs.ts">JobPostZonesZoneIdentifierLogpushJobsResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/logpush/jobs/{job_identifier}">client.zones.logpushes.jobs.<a href="./src/resources/zones/logpushes/jobs.ts">retrieve</a>(zoneIdentifier, jobIdentifier) -> JobRetrieveResponse</code>
- <code title="put /zones/{zone_identifier}/logpush/jobs/{job_identifier}">client.zones.logpushes.jobs.<a href="./src/resources/zones/logpushes/jobs.ts">update</a>(zoneIdentifier, jobIdentifier, { ...params }) -> JobUpdateResponse</code>
- <code title="delete /zones/{zone_identifier}/logpush/jobs/{job_identifier}">client.zones.logpushes.jobs.<a href="./src/resources/zones/logpushes/jobs.ts">delete</a>(zoneIdentifier, jobIdentifier) -> JobDeleteResponse</code>
- <code title="get /zones/{zone_identifier}/logpush/jobs">client.zones.logpushes.jobs.<a href="./src/resources/zones/logpushes/jobs.ts">getZonesZoneIdentifierLogpushJobs</a>(zoneIdentifier) -> JobGetZonesZoneIdentifierLogpushJobsResponse</code>
- <code title="post /zones/{zone_identifier}/logpush/jobs">client.zones.logpushes.jobs.<a href="./src/resources/zones/logpushes/jobs.ts">postZonesZoneIdentifierLogpushJobs</a>(zoneIdentifier, { ...params }) -> JobPostZonesZoneIdentifierLogpushJobsResponse</code>

### Ownerships

Types:

- <code><a href="./src/resources/zones/logpushes/ownerships/ownerships.ts">OwnershipPostZonesZoneIdentifierLogpushOwnershipResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/logpush/ownership">client.zones.logpushes.ownerships.<a href="./src/resources/zones/logpushes/ownerships/ownerships.ts">postZonesZoneIdentifierLogpushOwnership</a>(zoneIdentifier, { ...params }) -> OwnershipPostZonesZoneIdentifierLogpushOwnershipResponse</code>

#### Validates

Types:

- <code><a href="./src/resources/zones/logpushes/ownerships/validates.ts">ValidatePostZonesZoneIdentifierLogpushOwnershipValidateResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/logpush/ownership/validate">client.zones.logpushes.ownerships.validates.<a href="./src/resources/zones/logpushes/ownerships/validates.ts">postZonesZoneIdentifierLogpushOwnershipValidate</a>(zoneIdentifier, { ...params }) -> ValidatePostZonesZoneIdentifierLogpushOwnershipValidateResponse</code>

### Validates

#### Destinations

##### Exists

Types:

- <code><a href="./src/resources/zones/logpushes/validates/destinations/exists.ts">ExistPostZonesZoneIdentifierLogpushValidateDestinationExistsResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/logpush/validate/destination/exists">client.zones.logpushes.validates.destinations.exists.<a href="./src/resources/zones/logpushes/validates/destinations/exists.ts">postZonesZoneIdentifierLogpushValidateDestinationExists</a>(zoneIdentifier, { ...params }) -> ExistPostZonesZoneIdentifierLogpushValidateDestinationExistsResponse</code>

#### Origins

Types:

- <code><a href="./src/resources/zones/logpushes/validates/origins.ts">OriginPostZonesZoneIdentifierLogpushValidateOriginResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/logpush/validate/origin">client.zones.logpushes.validates.origins.<a href="./src/resources/zones/logpushes/validates/origins.ts">postZonesZoneIdentifierLogpushValidateOrigin</a>(zoneIdentifier, { ...params }) -> OriginPostZonesZoneIdentifierLogpushValidateOriginResponse</code>

## Logs

### Controls

#### Retentions

##### Flags

Types:

- <code><a href="./src/resources/zones/logs/controls/retentions/flags.ts">FlagLogsReceivedGetLogRetentionFlagResponse</a></code>
- <code><a href="./src/resources/zones/logs/controls/retentions/flags.ts">FlagLogsReceivedUpdateLogRetentionFlagResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/logs/control/retention/flag">client.zones.logs.controls.retentions.flags.<a href="./src/resources/zones/logs/controls/retentions/flags.ts">logsReceivedGetLogRetentionFlag</a>(zoneIdentifier) -> FlagLogsReceivedGetLogRetentionFlagResponse</code>
- <code title="post /zones/{zone_identifier}/logs/control/retention/flag">client.zones.logs.controls.retentions.flags.<a href="./src/resources/zones/logs/controls/retentions/flags.ts">logsReceivedUpdateLogRetentionFlag</a>(zoneIdentifier, { ...params }) -> FlagLogsReceivedUpdateLogRetentionFlagResponse</code>

### Rayids

Types:

- <code><a href="./src/resources/zones/logs/rayids.ts">RayidRetrieveResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/logs/rayids/{ray_identifier}">client.zones.logs.rayids.<a href="./src/resources/zones/logs/rayids.ts">retrieve</a>(zoneIdentifier, rayIdentifier, { ...params }) -> RayidRetrieveResponse</code>

### Receiveds

Types:

- <code><a href="./src/resources/zones/logs/receiveds/receiveds.ts">ReceivedReceivedGetLogsReceivedResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/logs/received">client.zones.logs.receiveds.<a href="./src/resources/zones/logs/receiveds/receiveds.ts">receivedGetLogsReceived</a>(zoneIdentifier, { ...params }) -> ReceivedReceivedGetLogsReceivedResponse</code>

#### Fields

Types:

- <code><a href="./src/resources/zones/logs/receiveds/fields.ts">FieldLogsReceivedListFieldsResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/logs/received/fields">client.zones.logs.receiveds.fields.<a href="./src/resources/zones/logs/receiveds/fields.ts">logsReceivedListFields</a>(zoneIdentifier) -> FieldLogsReceivedListFieldsResponse</code>

## OriginTlsClientAuths

Types:

- <code><a href="./src/resources/zones/origin-tls-client-auths/origin-tls-client-auths.ts">OriginTlsClientAuthRetrieveResponse</a></code>
- <code><a href="./src/resources/zones/origin-tls-client-auths/origin-tls-client-auths.ts">OriginTlsClientAuthDeleteResponse</a></code>
- <code><a href="./src/resources/zones/origin-tls-client-auths/origin-tls-client-auths.ts">OriginTlsClientAuthZoneLevelAuthenticatedOriginPullsListCertificatesResponse</a></code>
- <code><a href="./src/resources/zones/origin-tls-client-auths/origin-tls-client-auths.ts">OriginTlsClientAuthZoneLevelAuthenticatedOriginPullsUploadCertificateResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/origin_tls_client_auth/{identifier}">client.zones.originTlsClientAuths.<a href="./src/resources/zones/origin-tls-client-auths/origin-tls-client-auths.ts">retrieve</a>(zoneIdentifier, identifier) -> OriginTlsClientAuthRetrieveResponse</code>
- <code title="delete /zones/{zone_identifier}/origin_tls_client_auth/{identifier}">client.zones.originTlsClientAuths.<a href="./src/resources/zones/origin-tls-client-auths/origin-tls-client-auths.ts">delete</a>(zoneIdentifier, identifier) -> OriginTlsClientAuthDeleteResponse</code>
- <code title="get /zones/{zone_identifier}/origin_tls_client_auth">client.zones.originTlsClientAuths.<a href="./src/resources/zones/origin-tls-client-auths/origin-tls-client-auths.ts">zoneLevelAuthenticatedOriginPullsListCertificates</a>(zoneIdentifier) -> OriginTlsClientAuthZoneLevelAuthenticatedOriginPullsListCertificatesResponse</code>
- <code title="post /zones/{zone_identifier}/origin_tls_client_auth">client.zones.originTlsClientAuths.<a href="./src/resources/zones/origin-tls-client-auths/origin-tls-client-auths.ts">zoneLevelAuthenticatedOriginPullsUploadCertificate</a>(zoneIdentifier, { ...params }) -> OriginTlsClientAuthZoneLevelAuthenticatedOriginPullsUploadCertificateResponse</code>

### Hostnames

Types:

- <code><a href="./src/resources/zones/origin-tls-client-auths/hostnames/hostnames.ts">HostnameRetrieveResponse</a></code>
- <code><a href="./src/resources/zones/origin-tls-client-auths/hostnames/hostnames.ts">HostnamePerHostnameAuthenticatedOriginPullEnableOrDisableAHostnameForClientAuthenticationResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/origin_tls_client_auth/hostnames/{hostname}">client.zones.originTlsClientAuths.hostnames.<a href="./src/resources/zones/origin-tls-client-auths/hostnames/hostnames.ts">retrieve</a>(zoneIdentifier, hostname) -> HostnameRetrieveResponse</code>
- <code title="put /zones/{zone_identifier}/origin_tls_client_auth/hostnames">client.zones.originTlsClientAuths.hostnames.<a href="./src/resources/zones/origin-tls-client-auths/hostnames/hostnames.ts">perHostnameAuthenticatedOriginPullEnableOrDisableAHostnameForClientAuthentication</a>(zoneIdentifier, { ...params }) -> HostnamePerHostnameAuthenticatedOriginPullEnableOrDisableAHostnameForClientAuthenticationResponse</code>

#### Certificates

Types:

- <code><a href="./src/resources/zones/origin-tls-client-auths/hostnames/certificates.ts">CertificateRetrieveResponse</a></code>
- <code><a href="./src/resources/zones/origin-tls-client-auths/hostnames/certificates.ts">CertificateDeleteResponse</a></code>
- <code><a href="./src/resources/zones/origin-tls-client-auths/hostnames/certificates.ts">CertificatePerHostnameAuthenticatedOriginPullListCertificatesResponse</a></code>
- <code><a href="./src/resources/zones/origin-tls-client-auths/hostnames/certificates.ts">CertificatePerHostnameAuthenticatedOriginPullUploadAHostnameClientCertificateResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/origin_tls_client_auth/hostnames/certificates/{identifier}">client.zones.originTlsClientAuths.hostnames.certificates.<a href="./src/resources/zones/origin-tls-client-auths/hostnames/certificates.ts">retrieve</a>(zoneIdentifier, identifier) -> CertificateRetrieveResponse</code>
- <code title="delete /zones/{zone_identifier}/origin_tls_client_auth/hostnames/certificates/{identifier}">client.zones.originTlsClientAuths.hostnames.certificates.<a href="./src/resources/zones/origin-tls-client-auths/hostnames/certificates.ts">delete</a>(zoneIdentifier, identifier) -> CertificateDeleteResponse</code>
- <code title="get /zones/{zone_identifier}/origin_tls_client_auth/hostnames/certificates">client.zones.originTlsClientAuths.hostnames.certificates.<a href="./src/resources/zones/origin-tls-client-auths/hostnames/certificates.ts">perHostnameAuthenticatedOriginPullListCertificates</a>(zoneIdentifier) -> CertificatePerHostnameAuthenticatedOriginPullListCertificatesResponse</code>
- <code title="post /zones/{zone_identifier}/origin_tls_client_auth/hostnames/certificates">client.zones.originTlsClientAuths.hostnames.certificates.<a href="./src/resources/zones/origin-tls-client-auths/hostnames/certificates.ts">perHostnameAuthenticatedOriginPullUploadAHostnameClientCertificate</a>(zoneIdentifier, { ...params }) -> CertificatePerHostnameAuthenticatedOriginPullUploadAHostnameClientCertificateResponse</code>

### Settings

Types:

- <code><a href="./src/resources/zones/origin-tls-client-auths/settings.ts">SettingZoneLevelAuthenticatedOriginPullsGetEnablementSettingForZoneResponse</a></code>
- <code><a href="./src/resources/zones/origin-tls-client-auths/settings.ts">SettingZoneLevelAuthenticatedOriginPullsSetEnablementForZoneResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/origin_tls_client_auth/settings">client.zones.originTlsClientAuths.settings.<a href="./src/resources/zones/origin-tls-client-auths/settings.ts">zoneLevelAuthenticatedOriginPullsGetEnablementSettingForZone</a>(zoneIdentifier) -> SettingZoneLevelAuthenticatedOriginPullsGetEnablementSettingForZoneResponse</code>
- <code title="put /zones/{zone_identifier}/origin_tls_client_auth/settings">client.zones.originTlsClientAuths.settings.<a href="./src/resources/zones/origin-tls-client-auths/settings.ts">zoneLevelAuthenticatedOriginPullsSetEnablementForZone</a>(zoneIdentifier, { ...params }) -> SettingZoneLevelAuthenticatedOriginPullsSetEnablementForZoneResponse</code>

## Pagerules

Types:

- <code><a href="./src/resources/zones/pagerules/pagerules.ts">PageruleResponseSingle</a></code>
- <code><a href="./src/resources/zones/pagerules/pagerules.ts">PageruleDeleteResponse</a></code>
- <code><a href="./src/resources/zones/pagerules/pagerules.ts">PagerulePageRulesListPageRulesResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/pagerules/{identifier}">client.zones.pagerules.<a href="./src/resources/zones/pagerules/pagerules.ts">retrieve</a>(zoneIdentifier, identifier) -> PageruleResponseSingle</code>
- <code title="put /zones/{zone_identifier}/pagerules/{identifier}">client.zones.pagerules.<a href="./src/resources/zones/pagerules/pagerules.ts">update</a>(zoneIdentifier, identifier, { ...params }) -> PageruleResponseSingle</code>
- <code title="delete /zones/{zone_identifier}/pagerules/{identifier}">client.zones.pagerules.<a href="./src/resources/zones/pagerules/pagerules.ts">delete</a>(zoneIdentifier, identifier) -> PageruleDeleteResponse</code>
- <code title="post /zones/{zone_identifier}/pagerules">client.zones.pagerules.<a href="./src/resources/zones/pagerules/pagerules.ts">pageRulesCreateAPageRule</a>(zoneIdentifier, { ...params }) -> PageruleResponseSingle</code>
- <code title="get /zones/{zone_identifier}/pagerules">client.zones.pagerules.<a href="./src/resources/zones/pagerules/pagerules.ts">pageRulesListPageRules</a>(zoneIdentifier, { ...params }) -> PagerulePageRulesListPageRulesResponse</code>

### Settings

Types:

- <code><a href="./src/resources/zones/pagerules/settings.ts">SettingAvailablePageRulesSettingsListAvailablePageRulesSettingsResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/pagerules/settings">client.zones.pagerules.settings.<a href="./src/resources/zones/pagerules/settings.ts">availablePageRulesSettingsListAvailablePageRulesSettings</a>(zoneIdentifier) -> SettingAvailablePageRulesSettingsListAvailablePageRulesSettingsResponse</code>

## Railguns

Types:

- <code><a href="./src/resources/zones/railguns/railguns.ts">RailgunRetrieveResponse</a></code>
- <code><a href="./src/resources/zones/railguns/railguns.ts">RailgunUpdateResponse</a></code>
- <code><a href="./src/resources/zones/railguns/railguns.ts">RailgunRailgunConnectionsForAZoneListAvailableRailgunsResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/railguns/{identifier}">client.zones.railguns.<a href="./src/resources/zones/railguns/railguns.ts">retrieve</a>(zoneIdentifier, identifier) -> RailgunRetrieveResponse</code>
- <code title="patch /zones/{zone_identifier}/railguns/{identifier}">client.zones.railguns.<a href="./src/resources/zones/railguns/railguns.ts">update</a>(zoneIdentifier, identifier, { ...params }) -> RailgunUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/railguns">client.zones.railguns.<a href="./src/resources/zones/railguns/railguns.ts">railgunConnectionsForAZoneListAvailableRailguns</a>(zoneIdentifier) -> RailgunRailgunConnectionsForAZoneListAvailableRailgunsResponse</code>

### Diagnoses

Types:

- <code><a href="./src/resources/zones/railguns/diagnoses.ts">DiagnosisRailgunConnectionsForAZoneTestRailgunConnectionResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/railguns/{identifier}/diagnose">client.zones.railguns.diagnoses.<a href="./src/resources/zones/railguns/diagnoses.ts">railgunConnectionsForAZoneTestRailgunConnection</a>(zoneIdentifier, identifier) -> DiagnosisRailgunConnectionsForAZoneTestRailgunConnectionResponse</code>

## RateLimits

Types:

- <code><a href="./src/resources/zones/rate-limits.ts">RateLimitCreateResponse</a></code>
- <code><a href="./src/resources/zones/rate-limits.ts">RateLimitRetrieveResponse</a></code>
- <code><a href="./src/resources/zones/rate-limits.ts">RateLimitUpdateResponse</a></code>
- <code><a href="./src/resources/zones/rate-limits.ts">RateLimitListResponse</a></code>
- <code><a href="./src/resources/zones/rate-limits.ts">RateLimitDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/rate_limits">client.zones.rateLimits.<a href="./src/resources/zones/rate-limits.ts">create</a>(zoneIdentifier, { ...params }) -> RateLimitCreateResponse</code>
- <code title="get /zones/{zone_identifier}/rate_limits/{id}">client.zones.rateLimits.<a href="./src/resources/zones/rate-limits.ts">retrieve</a>(zoneIdentifier, id) -> RateLimitRetrieveResponse</code>
- <code title="put /zones/{zone_identifier}/rate_limits/{id}">client.zones.rateLimits.<a href="./src/resources/zones/rate-limits.ts">update</a>(zoneIdentifier, id, { ...params }) -> RateLimitUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/rate_limits">client.zones.rateLimits.<a href="./src/resources/zones/rate-limits.ts">list</a>(zoneIdentifier, { ...params }) -> RateLimitListResponsesPage</code>
- <code title="delete /zones/{zone_identifier}/rate_limits/{id}">client.zones.rateLimits.<a href="./src/resources/zones/rate-limits.ts">delete</a>(zoneIdentifier, id) -> RateLimitDeleteResponse</code>

## SecondaryDNS

### ForceAxfrs

Types:

- <code><a href="./src/resources/zones/secondary-dns/force-axfrs.ts">ForceAxfrSecondaryDNSSecondaryZoneForceAxfrResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/secondary_dns/force_axfr">client.zones.secondaryDNS.forceAxfrs.<a href="./src/resources/zones/secondary-dns/force-axfrs.ts">secondaryDNSSecondaryZoneForceAxfr</a>(zoneIdentifier) -> ForceAxfrSecondaryDNSSecondaryZoneForceAxfrResponse</code>

### Incomings

Types:

- <code><a href="./src/resources/zones/secondary-dns/incomings.ts">IncomingDeleteResponse</a></code>
- <code><a href="./src/resources/zones/secondary-dns/incomings.ts">IncomingSecondaryDNSSecondaryZoneCreateSecondaryZoneConfigurationResponse</a></code>
- <code><a href="./src/resources/zones/secondary-dns/incomings.ts">IncomingSecondaryDNSSecondaryZoneSecondaryZoneConfigurationDetailsResponse</a></code>
- <code><a href="./src/resources/zones/secondary-dns/incomings.ts">IncomingSecondaryDNSSecondaryZoneUpdateSecondaryZoneConfigurationResponse</a></code>

Methods:

- <code title="delete /zones/{zone_identifier}/secondary_dns/incoming">client.zones.secondaryDNS.incomings.<a href="./src/resources/zones/secondary-dns/incomings.ts">delete</a>(zoneIdentifier) -> IncomingDeleteResponse</code>
- <code title="post /zones/{zone_identifier}/secondary_dns/incoming">client.zones.secondaryDNS.incomings.<a href="./src/resources/zones/secondary-dns/incomings.ts">secondaryDNSSecondaryZoneCreateSecondaryZoneConfiguration</a>(zoneIdentifier, { ...params }) -> IncomingSecondaryDNSSecondaryZoneCreateSecondaryZoneConfigurationResponse</code>
- <code title="get /zones/{zone_identifier}/secondary_dns/incoming">client.zones.secondaryDNS.incomings.<a href="./src/resources/zones/secondary-dns/incomings.ts">secondaryDNSSecondaryZoneSecondaryZoneConfigurationDetails</a>(zoneIdentifier) -> IncomingSecondaryDNSSecondaryZoneSecondaryZoneConfigurationDetailsResponse</code>
- <code title="put /zones/{zone_identifier}/secondary_dns/incoming">client.zones.secondaryDNS.incomings.<a href="./src/resources/zones/secondary-dns/incomings.ts">secondaryDNSSecondaryZoneUpdateSecondaryZoneConfiguration</a>(zoneIdentifier, { ...params }) -> IncomingSecondaryDNSSecondaryZoneUpdateSecondaryZoneConfigurationResponse</code>

### Outgoings

Types:

- <code><a href="./src/resources/zones/secondary-dns/outgoings/outgoings.ts">OutgoingDeleteResponse</a></code>
- <code><a href="./src/resources/zones/secondary-dns/outgoings/outgoings.ts">OutgoingSecondaryDNSPrimaryZoneCreatePrimaryZoneConfigurationResponse</a></code>
- <code><a href="./src/resources/zones/secondary-dns/outgoings/outgoings.ts">OutgoingSecondaryDNSPrimaryZonePrimaryZoneConfigurationDetailsResponse</a></code>
- <code><a href="./src/resources/zones/secondary-dns/outgoings/outgoings.ts">OutgoingSecondaryDNSPrimaryZoneUpdatePrimaryZoneConfigurationResponse</a></code>

Methods:

- <code title="delete /zones/{zone_identifier}/secondary_dns/outgoing">client.zones.secondaryDNS.outgoings.<a href="./src/resources/zones/secondary-dns/outgoings/outgoings.ts">delete</a>(zoneIdentifier) -> OutgoingDeleteResponse</code>
- <code title="post /zones/{zone_identifier}/secondary_dns/outgoing">client.zones.secondaryDNS.outgoings.<a href="./src/resources/zones/secondary-dns/outgoings/outgoings.ts">secondaryDNSPrimaryZoneCreatePrimaryZoneConfiguration</a>(zoneIdentifier, { ...params }) -> OutgoingSecondaryDNSPrimaryZoneCreatePrimaryZoneConfigurationResponse</code>
- <code title="get /zones/{zone_identifier}/secondary_dns/outgoing">client.zones.secondaryDNS.outgoings.<a href="./src/resources/zones/secondary-dns/outgoings/outgoings.ts">secondaryDNSPrimaryZonePrimaryZoneConfigurationDetails</a>(zoneIdentifier) -> OutgoingSecondaryDNSPrimaryZonePrimaryZoneConfigurationDetailsResponse</code>
- <code title="put /zones/{zone_identifier}/secondary_dns/outgoing">client.zones.secondaryDNS.outgoings.<a href="./src/resources/zones/secondary-dns/outgoings/outgoings.ts">secondaryDNSPrimaryZoneUpdatePrimaryZoneConfiguration</a>(zoneIdentifier, { ...params }) -> OutgoingSecondaryDNSPrimaryZoneUpdatePrimaryZoneConfigurationResponse</code>

#### Disables

Types:

- <code><a href="./src/resources/zones/secondary-dns/outgoings/disables.ts">DisableSecondaryDNSPrimaryZoneDisableOutgoingZoneTransfersResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/secondary_dns/outgoing/disable">client.zones.secondaryDNS.outgoings.disables.<a href="./src/resources/zones/secondary-dns/outgoings/disables.ts">secondaryDNSPrimaryZoneDisableOutgoingZoneTransfers</a>(zoneIdentifier) -> DisableSecondaryDNSPrimaryZoneDisableOutgoingZoneTransfersResponse</code>

#### Enables

Types:

- <code><a href="./src/resources/zones/secondary-dns/outgoings/enables.ts">EnableSecondaryDNSPrimaryZoneEnableOutgoingZoneTransfersResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/secondary_dns/outgoing/enable">client.zones.secondaryDNS.outgoings.enables.<a href="./src/resources/zones/secondary-dns/outgoings/enables.ts">secondaryDNSPrimaryZoneEnableOutgoingZoneTransfers</a>(zoneIdentifier) -> EnableSecondaryDNSPrimaryZoneEnableOutgoingZoneTransfersResponse</code>

#### ForceNotifies

Types:

- <code><a href="./src/resources/zones/secondary-dns/outgoings/force-notifies.ts">ForceNotifySecondaryDNSPrimaryZoneForceDNSNotifyResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/secondary_dns/outgoing/force_notify">client.zones.secondaryDNS.outgoings.forceNotifies.<a href="./src/resources/zones/secondary-dns/outgoings/force-notifies.ts">secondaryDNSPrimaryZoneForceDNSNotify</a>(zoneIdentifier) -> ForceNotifySecondaryDNSPrimaryZoneForceDNSNotifyResponse</code>

#### Statuses

Types:

- <code><a href="./src/resources/zones/secondary-dns/outgoings/statuses.ts">StatusSecondaryDNSPrimaryZoneGetOutgoingZoneTransferStatusResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/secondary_dns/outgoing/status">client.zones.secondaryDNS.outgoings.statuses.<a href="./src/resources/zones/secondary-dns/outgoings/statuses.ts">secondaryDNSPrimaryZoneGetOutgoingZoneTransferStatus</a>(zoneIdentifier) -> StatusSecondaryDNSPrimaryZoneGetOutgoingZoneTransferStatusResponse</code>

## Settings

Types:

- <code><a href="./src/resources/zones/settings/settings.ts">SettingListResponse</a></code>
- <code><a href="./src/resources/zones/settings/settings.ts">SettingEditResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/settings">client.zones.settings.<a href="./src/resources/zones/settings/settings.ts">list</a>(zoneIdentifier) -> SettingListResponse</code>
- <code title="patch /zones/{zone_identifier}/settings">client.zones.settings.<a href="./src/resources/zones/settings/settings.ts">edit</a>(zoneIdentifier, { ...params }) -> SettingEditResponse</code>

### ZeroRtts

Types:

- <code><a href="./src/resources/zones/settings/zero-rtts.ts">ZeroRttListResponse</a></code>
- <code><a href="./src/resources/zones/settings/zero-rtts.ts">ZeroRttZoneSettingsChange0RttSessionResumptionSettingResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/settings/0rtt">client.zones.settings.zeroRtts.<a href="./src/resources/zones/settings/zero-rtts.ts">list</a>(zoneIdentifier) -> ZeroRttListResponse</code>
- <code title="patch /zones/{zone_identifier}/settings/0rtt">client.zones.settings.zeroRtts.<a href="./src/resources/zones/settings/zero-rtts.ts">zoneSettingsChange0RttSessionResumptionSetting</a>(zoneIdentifier, { ...params }) -> ZeroRttZoneSettingsChange0RttSessionResumptionSettingResponse</code>

### AdvancedDdos

Types:

- <code><a href="./src/resources/zones/settings/advanced-ddos.ts">AdvancedDdoListResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/settings/advanced_ddos">client.zones.settings.advancedDdos.<a href="./src/resources/zones/settings/advanced-ddos.ts">list</a>(zoneIdentifier) -> AdvancedDdoListResponse</code>

### AlwaysOnlines

Types:

- <code><a href="./src/resources/zones/settings/always-onlines.ts">AlwaysOnlineUpdateResponse</a></code>
- <code><a href="./src/resources/zones/settings/always-onlines.ts">AlwaysOnlineListResponse</a></code>

Methods:

- <code title="patch /zones/{zone_identifier}/settings/always_online">client.zones.settings.alwaysOnlines.<a href="./src/resources/zones/settings/always-onlines.ts">update</a>(zoneIdentifier, { ...params }) -> AlwaysOnlineUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/settings/always_online">client.zones.settings.alwaysOnlines.<a href="./src/resources/zones/settings/always-onlines.ts">list</a>(zoneIdentifier) -> AlwaysOnlineListResponse</code>

### AlwaysUseHTTPs

Types:

- <code><a href="./src/resources/zones/settings/always-use-https.ts">AlwaysUseHTTPUpdateResponse</a></code>
- <code><a href="./src/resources/zones/settings/always-use-https.ts">AlwaysUseHTTPListResponse</a></code>

Methods:

- <code title="patch /zones/{zone_identifier}/settings/always_use_https">client.zones.settings.alwaysUseHTTPs.<a href="./src/resources/zones/settings/always-use-https.ts">update</a>(zoneIdentifier, { ...params }) -> AlwaysUseHTTPUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/settings/always_use_https">client.zones.settings.alwaysUseHTTPs.<a href="./src/resources/zones/settings/always-use-https.ts">list</a>(zoneIdentifier) -> AlwaysUseHTTPListResponse</code>

### AutomaticHTTPsRewrites

Types:

- <code><a href="./src/resources/zones/settings/automatic-https-rewrites.ts">AutomaticHTTPsRewriteUpdateResponse</a></code>
- <code><a href="./src/resources/zones/settings/automatic-https-rewrites.ts">AutomaticHTTPsRewriteListResponse</a></code>

Methods:

- <code title="patch /zones/{zone_identifier}/settings/automatic_https_rewrites">client.zones.settings.automaticHTTPsRewrites.<a href="./src/resources/zones/settings/automatic-https-rewrites.ts">update</a>(zoneIdentifier, { ...params }) -> AutomaticHTTPsRewriteUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/settings/automatic_https_rewrites">client.zones.settings.automaticHTTPsRewrites.<a href="./src/resources/zones/settings/automatic-https-rewrites.ts">list</a>(zoneIdentifier) -> AutomaticHTTPsRewriteListResponse</code>

### AutomaticPlatformOptimizations

Types:

- <code><a href="./src/resources/zones/settings/automatic-platform-optimizations.ts">AutomaticPlatformOptimizationUpdateResponse</a></code>
- <code><a href="./src/resources/zones/settings/automatic-platform-optimizations.ts">AutomaticPlatformOptimizationListResponse</a></code>

Methods:

- <code title="patch /zones/{zone_identifier}/settings/automatic_platform_optimization">client.zones.settings.automaticPlatformOptimizations.<a href="./src/resources/zones/settings/automatic-platform-optimizations.ts">update</a>(zoneIdentifier, { ...params }) -> AutomaticPlatformOptimizationUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/settings/automatic_platform_optimization">client.zones.settings.automaticPlatformOptimizations.<a href="./src/resources/zones/settings/automatic-platform-optimizations.ts">list</a>(zoneIdentifier) -> AutomaticPlatformOptimizationListResponse</code>

### Brotli

Types:

- <code><a href="./src/resources/zones/settings/brotli.ts">BrotliUpdateResponse</a></code>
- <code><a href="./src/resources/zones/settings/brotli.ts">BrotliListResponse</a></code>

Methods:

- <code title="patch /zones/{zone_identifier}/settings/brotli">client.zones.settings.brotli.<a href="./src/resources/zones/settings/brotli.ts">update</a>(zoneIdentifier, { ...params }) -> BrotliUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/settings/brotli">client.zones.settings.brotli.<a href="./src/resources/zones/settings/brotli.ts">list</a>(zoneIdentifier) -> BrotliListResponse</code>

### BrowserCacheTtls

Types:

- <code><a href="./src/resources/zones/settings/browser-cache-ttls.ts">BrowserCacheTtlUpdateResponse</a></code>
- <code><a href="./src/resources/zones/settings/browser-cache-ttls.ts">BrowserCacheTtlListResponse</a></code>

Methods:

- <code title="patch /zones/{zone_identifier}/settings/browser_cache_ttl">client.zones.settings.browserCacheTtls.<a href="./src/resources/zones/settings/browser-cache-ttls.ts">update</a>(zoneIdentifier, { ...params }) -> BrowserCacheTtlUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/settings/browser_cache_ttl">client.zones.settings.browserCacheTtls.<a href="./src/resources/zones/settings/browser-cache-ttls.ts">list</a>(zoneIdentifier) -> BrowserCacheTtlListResponse</code>

### BrowserChecks

Types:

- <code><a href="./src/resources/zones/settings/browser-checks.ts">BrowserCheckUpdateResponse</a></code>
- <code><a href="./src/resources/zones/settings/browser-checks.ts">BrowserCheckListResponse</a></code>

Methods:

- <code title="patch /zones/{zone_identifier}/settings/browser_check">client.zones.settings.browserChecks.<a href="./src/resources/zones/settings/browser-checks.ts">update</a>(zoneIdentifier, { ...params }) -> BrowserCheckUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/settings/browser_check">client.zones.settings.browserChecks.<a href="./src/resources/zones/settings/browser-checks.ts">list</a>(zoneIdentifier) -> BrowserCheckListResponse</code>

### CacheLevels

Types:

- <code><a href="./src/resources/zones/settings/cache-levels.ts">CacheLevelUpdateResponse</a></code>
- <code><a href="./src/resources/zones/settings/cache-levels.ts">CacheLevelListResponse</a></code>

Methods:

- <code title="patch /zones/{zone_identifier}/settings/cache_level">client.zones.settings.cacheLevels.<a href="./src/resources/zones/settings/cache-levels.ts">update</a>(zoneIdentifier, { ...params }) -> CacheLevelUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/settings/cache_level">client.zones.settings.cacheLevels.<a href="./src/resources/zones/settings/cache-levels.ts">list</a>(zoneIdentifier) -> CacheLevelListResponse</code>

### ChallengeTtls

Types:

- <code><a href="./src/resources/zones/settings/challenge-ttls.ts">ChallengeTtlUpdateResponse</a></code>
- <code><a href="./src/resources/zones/settings/challenge-ttls.ts">ChallengeTtlListResponse</a></code>

Methods:

- <code title="patch /zones/{zone_identifier}/settings/challenge_ttl">client.zones.settings.challengeTtls.<a href="./src/resources/zones/settings/challenge-ttls.ts">update</a>(zoneIdentifier, { ...params }) -> ChallengeTtlUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/settings/challenge_ttl">client.zones.settings.challengeTtls.<a href="./src/resources/zones/settings/challenge-ttls.ts">list</a>(zoneIdentifier) -> ChallengeTtlListResponse</code>

### Ciphers

Types:

- <code><a href="./src/resources/zones/settings/ciphers.ts">CipherUpdateResponse</a></code>
- <code><a href="./src/resources/zones/settings/ciphers.ts">CipherListResponse</a></code>

Methods:

- <code title="patch /zones/{zone_identifier}/settings/ciphers">client.zones.settings.ciphers.<a href="./src/resources/zones/settings/ciphers.ts">update</a>(zoneIdentifier, { ...params }) -> CipherUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/settings/ciphers">client.zones.settings.ciphers.<a href="./src/resources/zones/settings/ciphers.ts">list</a>(zoneIdentifier) -> CipherListResponse</code>

### DevelopmentModes

Types:

- <code><a href="./src/resources/zones/settings/development-modes.ts">DevelopmentModeUpdateResponse</a></code>
- <code><a href="./src/resources/zones/settings/development-modes.ts">DevelopmentModeListResponse</a></code>

Methods:

- <code title="patch /zones/{zone_identifier}/settings/development_mode">client.zones.settings.developmentModes.<a href="./src/resources/zones/settings/development-modes.ts">update</a>(zoneIdentifier, { ...params }) -> DevelopmentModeUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/settings/development_mode">client.zones.settings.developmentModes.<a href="./src/resources/zones/settings/development-modes.ts">list</a>(zoneIdentifier) -> DevelopmentModeListResponse</code>

### EarlyHints

Types:

- <code><a href="./src/resources/zones/settings/early-hints.ts">EarlyHintUpdateResponse</a></code>
- <code><a href="./src/resources/zones/settings/early-hints.ts">EarlyHintListResponse</a></code>

Methods:

- <code title="patch /zones/{zone_identifier}/settings/early_hints">client.zones.settings.earlyHints.<a href="./src/resources/zones/settings/early-hints.ts">update</a>(zoneIdentifier, { ...params }) -> EarlyHintUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/settings/early_hints">client.zones.settings.earlyHints.<a href="./src/resources/zones/settings/early-hints.ts">list</a>(zoneIdentifier) -> EarlyHintListResponse</code>

### EmailObfuscations

Types:

- <code><a href="./src/resources/zones/settings/email-obfuscations.ts">EmailObfuscationUpdateResponse</a></code>
- <code><a href="./src/resources/zones/settings/email-obfuscations.ts">EmailObfuscationListResponse</a></code>

Methods:

- <code title="patch /zones/{zone_identifier}/settings/email_obfuscation">client.zones.settings.emailObfuscations.<a href="./src/resources/zones/settings/email-obfuscations.ts">update</a>(zoneIdentifier, { ...params }) -> EmailObfuscationUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/settings/email_obfuscation">client.zones.settings.emailObfuscations.<a href="./src/resources/zones/settings/email-obfuscations.ts">list</a>(zoneIdentifier) -> EmailObfuscationListResponse</code>

### H2Prioritizations

Types:

- <code><a href="./src/resources/zones/settings/h2-prioritizations.ts">H2PrioritizationUpdateResponse</a></code>
- <code><a href="./src/resources/zones/settings/h2-prioritizations.ts">H2PrioritizationListResponse</a></code>

Methods:

- <code title="patch /zones/{zone_identifier}/settings/h2_prioritization">client.zones.settings.h2Prioritizations.<a href="./src/resources/zones/settings/h2-prioritizations.ts">update</a>(zoneIdentifier, { ...params }) -> H2PrioritizationUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/settings/h2_prioritization">client.zones.settings.h2Prioritizations.<a href="./src/resources/zones/settings/h2-prioritizations.ts">list</a>(zoneIdentifier) -> H2PrioritizationListResponse</code>

### HotlinkProtections

Types:

- <code><a href="./src/resources/zones/settings/hotlink-protections.ts">HotlinkProtectionUpdateResponse</a></code>
- <code><a href="./src/resources/zones/settings/hotlink-protections.ts">HotlinkProtectionListResponse</a></code>

Methods:

- <code title="patch /zones/{zone_identifier}/settings/hotlink_protection">client.zones.settings.hotlinkProtections.<a href="./src/resources/zones/settings/hotlink-protections.ts">update</a>(zoneIdentifier, { ...params }) -> HotlinkProtectionUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/settings/hotlink_protection">client.zones.settings.hotlinkProtections.<a href="./src/resources/zones/settings/hotlink-protections.ts">list</a>(zoneIdentifier) -> HotlinkProtectionListResponse</code>

### Http2s

Types:

- <code><a href="./src/resources/zones/settings/http2s.ts">Http2UpdateResponse</a></code>
- <code><a href="./src/resources/zones/settings/http2s.ts">Http2ListResponse</a></code>

Methods:

- <code title="patch /zones/{zone_identifier}/settings/http2">client.zones.settings.http2s.<a href="./src/resources/zones/settings/http2s.ts">update</a>(zoneIdentifier, { ...params }) -> Http2UpdateResponse</code>
- <code title="get /zones/{zone_identifier}/settings/http2">client.zones.settings.http2s.<a href="./src/resources/zones/settings/http2s.ts">list</a>(zoneIdentifier) -> Http2ListResponse</code>

### Http3s

Types:

- <code><a href="./src/resources/zones/settings/http3s.ts">Http3UpdateResponse</a></code>
- <code><a href="./src/resources/zones/settings/http3s.ts">Http3ListResponse</a></code>

Methods:

- <code title="patch /zones/{zone_identifier}/settings/http3">client.zones.settings.http3s.<a href="./src/resources/zones/settings/http3s.ts">update</a>(zoneIdentifier, { ...params }) -> Http3UpdateResponse</code>
- <code title="get /zones/{zone_identifier}/settings/http3">client.zones.settings.http3s.<a href="./src/resources/zones/settings/http3s.ts">list</a>(zoneIdentifier) -> Http3ListResponse</code>

### ImageResizings

Types:

- <code><a href="./src/resources/zones/settings/image-resizings.ts">ImageResizingUpdateResponse</a></code>
- <code><a href="./src/resources/zones/settings/image-resizings.ts">ImageResizingListResponse</a></code>

Methods:

- <code title="patch /zones/{zone_identifier}/settings/image_resizing">client.zones.settings.imageResizings.<a href="./src/resources/zones/settings/image-resizings.ts">update</a>(zoneIdentifier, { ...params }) -> ImageResizingUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/settings/image_resizing">client.zones.settings.imageResizings.<a href="./src/resources/zones/settings/image-resizings.ts">list</a>(zoneIdentifier) -> ImageResizingListResponse</code>

### IPGeolocations

Types:

- <code><a href="./src/resources/zones/settings/ip-geolocations.ts">IPGeolocationUpdateResponse</a></code>
- <code><a href="./src/resources/zones/settings/ip-geolocations.ts">IPGeolocationListResponse</a></code>

Methods:

- <code title="patch /zones/{zone_identifier}/settings/ip_geolocation">client.zones.settings.ipGeolocations.<a href="./src/resources/zones/settings/ip-geolocations.ts">update</a>(zoneIdentifier, { ...params }) -> IPGeolocationUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/settings/ip_geolocation">client.zones.settings.ipGeolocations.<a href="./src/resources/zones/settings/ip-geolocations.ts">list</a>(zoneIdentifier) -> IPGeolocationListResponse</code>

### Ipv6s

Types:

- <code><a href="./src/resources/zones/settings/ipv6s.ts">Ipv6UpdateResponse</a></code>
- <code><a href="./src/resources/zones/settings/ipv6s.ts">Ipv6ListResponse</a></code>

Methods:

- <code title="patch /zones/{zone_identifier}/settings/ipv6">client.zones.settings.ipv6s.<a href="./src/resources/zones/settings/ipv6s.ts">update</a>(zoneIdentifier, { ...params }) -> Ipv6UpdateResponse</code>
- <code title="get /zones/{zone_identifier}/settings/ipv6">client.zones.settings.ipv6s.<a href="./src/resources/zones/settings/ipv6s.ts">list</a>(zoneIdentifier) -> Ipv6ListResponse</code>

### MinTlsVersions

Types:

- <code><a href="./src/resources/zones/settings/min-tls-versions.ts">MinTlsVersionUpdateResponse</a></code>
- <code><a href="./src/resources/zones/settings/min-tls-versions.ts">MinTlsVersionListResponse</a></code>

Methods:

- <code title="patch /zones/{zone_identifier}/settings/min_tls_version">client.zones.settings.minTlsVersions.<a href="./src/resources/zones/settings/min-tls-versions.ts">update</a>(zoneIdentifier, { ...params }) -> MinTlsVersionUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/settings/min_tls_version">client.zones.settings.minTlsVersions.<a href="./src/resources/zones/settings/min-tls-versions.ts">list</a>(zoneIdentifier) -> MinTlsVersionListResponse</code>

### Minifies

Types:

- <code><a href="./src/resources/zones/settings/minifies.ts">MinifyUpdateResponse</a></code>
- <code><a href="./src/resources/zones/settings/minifies.ts">MinifyListResponse</a></code>

Methods:

- <code title="patch /zones/{zone_identifier}/settings/minify">client.zones.settings.minifies.<a href="./src/resources/zones/settings/minifies.ts">update</a>(zoneIdentifier, { ...params }) -> MinifyUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/settings/minify">client.zones.settings.minifies.<a href="./src/resources/zones/settings/minifies.ts">list</a>(zoneIdentifier) -> MinifyListResponse</code>

### Mirages

Types:

- <code><a href="./src/resources/zones/settings/mirages.ts">MirageUpdateResponse</a></code>
- <code><a href="./src/resources/zones/settings/mirages.ts">MirageListResponse</a></code>

Methods:

- <code title="patch /zones/{zone_identifier}/settings/mirage">client.zones.settings.mirages.<a href="./src/resources/zones/settings/mirages.ts">update</a>(zoneIdentifier, { ...params }) -> MirageUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/settings/mirage">client.zones.settings.mirages.<a href="./src/resources/zones/settings/mirages.ts">list</a>(zoneIdentifier) -> MirageListResponse</code>

### MobileRedirects

Types:

- <code><a href="./src/resources/zones/settings/mobile-redirects.ts">MobileRedirectUpdateResponse</a></code>
- <code><a href="./src/resources/zones/settings/mobile-redirects.ts">MobileRedirectListResponse</a></code>

Methods:

- <code title="patch /zones/{zone_identifier}/settings/mobile_redirect">client.zones.settings.mobileRedirects.<a href="./src/resources/zones/settings/mobile-redirects.ts">update</a>(zoneIdentifier, { ...params }) -> MobileRedirectUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/settings/mobile_redirect">client.zones.settings.mobileRedirects.<a href="./src/resources/zones/settings/mobile-redirects.ts">list</a>(zoneIdentifier) -> MobileRedirectListResponse</code>

### Nels

Types:

- <code><a href="./src/resources/zones/settings/nels.ts">NelUpdateResponse</a></code>
- <code><a href="./src/resources/zones/settings/nels.ts">NelListResponse</a></code>

Methods:

- <code title="patch /zones/{zone_identifier}/settings/nel">client.zones.settings.nels.<a href="./src/resources/zones/settings/nels.ts">update</a>(zoneIdentifier, { ...params }) -> NelUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/settings/nel">client.zones.settings.nels.<a href="./src/resources/zones/settings/nels.ts">list</a>(zoneIdentifier) -> NelListResponse</code>

### OpportunisticEncryptions

Types:

- <code><a href="./src/resources/zones/settings/opportunistic-encryptions.ts">OpportunisticEncryptionUpdateResponse</a></code>
- <code><a href="./src/resources/zones/settings/opportunistic-encryptions.ts">OpportunisticEncryptionListResponse</a></code>

Methods:

- <code title="patch /zones/{zone_identifier}/settings/opportunistic_encryption">client.zones.settings.opportunisticEncryptions.<a href="./src/resources/zones/settings/opportunistic-encryptions.ts">update</a>(zoneIdentifier, { ...params }) -> OpportunisticEncryptionUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/settings/opportunistic_encryption">client.zones.settings.opportunisticEncryptions.<a href="./src/resources/zones/settings/opportunistic-encryptions.ts">list</a>(zoneIdentifier) -> OpportunisticEncryptionListResponse</code>

### OpportunisticOnions

Types:

- <code><a href="./src/resources/zones/settings/opportunistic-onions.ts">OpportunisticOnionUpdateResponse</a></code>
- <code><a href="./src/resources/zones/settings/opportunistic-onions.ts">OpportunisticOnionListResponse</a></code>

Methods:

- <code title="patch /zones/{zone_identifier}/settings/opportunistic_onion">client.zones.settings.opportunisticOnions.<a href="./src/resources/zones/settings/opportunistic-onions.ts">update</a>(zoneIdentifier, { ...params }) -> OpportunisticOnionUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/settings/opportunistic_onion">client.zones.settings.opportunisticOnions.<a href="./src/resources/zones/settings/opportunistic-onions.ts">list</a>(zoneIdentifier) -> OpportunisticOnionListResponse</code>

### OrangeToOranges

Types:

- <code><a href="./src/resources/zones/settings/orange-to-oranges.ts">OrangeToOrangeUpdateResponse</a></code>
- <code><a href="./src/resources/zones/settings/orange-to-oranges.ts">OrangeToOrangeListResponse</a></code>

Methods:

- <code title="patch /zones/{zone_identifier}/settings/orange_to_orange">client.zones.settings.orangeToOranges.<a href="./src/resources/zones/settings/orange-to-oranges.ts">update</a>(zoneIdentifier, { ...params }) -> OrangeToOrangeUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/settings/orange_to_orange">client.zones.settings.orangeToOranges.<a href="./src/resources/zones/settings/orange-to-oranges.ts">list</a>(zoneIdentifier) -> OrangeToOrangeListResponse</code>

### OriginErrorPagePassThrus

Types:

- <code><a href="./src/resources/zones/settings/origin-error-page-pass-thrus.ts">OriginErrorPagePassThrusUpdateResponse</a></code>
- <code><a href="./src/resources/zones/settings/origin-error-page-pass-thrus.ts">OriginErrorPagePassThrusListResponse</a></code>

Methods:

- <code title="patch /zones/{zone_identifier}/settings/origin_error_page_pass_thru">client.zones.settings.originErrorPagePassThrus.<a href="./src/resources/zones/settings/origin-error-page-pass-thrus.ts">update</a>(zoneIdentifier, { ...params }) -> OriginErrorPagePassThrusUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/settings/origin_error_page_pass_thru">client.zones.settings.originErrorPagePassThrus.<a href="./src/resources/zones/settings/origin-error-page-pass-thrus.ts">list</a>(zoneIdentifier) -> OriginErrorPagePassThrusListResponse</code>

### OriginMaxHTTPVersions

Types:

- <code><a href="./src/resources/zones/settings/origin-max-http-versions.ts">OriginMaxHTTPVersionUpdateResponse</a></code>
- <code><a href="./src/resources/zones/settings/origin-max-http-versions.ts">OriginMaxHTTPVersionListResponse</a></code>

Methods:

- <code title="patch /zones/{zone_identifier}/settings/origin_max_http_version">client.zones.settings.originMaxHTTPVersions.<a href="./src/resources/zones/settings/origin-max-http-versions.ts">update</a>(zoneIdentifier, { ...params }) -> OriginMaxHTTPVersionUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/settings/origin_max_http_version">client.zones.settings.originMaxHTTPVersions.<a href="./src/resources/zones/settings/origin-max-http-versions.ts">list</a>(zoneIdentifier) -> OriginMaxHTTPVersionListResponse</code>

### Polishes

Types:

- <code><a href="./src/resources/zones/settings/polishes.ts">PolishUpdateResponse</a></code>
- <code><a href="./src/resources/zones/settings/polishes.ts">PolishListResponse</a></code>

Methods:

- <code title="patch /zones/{zone_identifier}/settings/polish">client.zones.settings.polishes.<a href="./src/resources/zones/settings/polishes.ts">update</a>(zoneIdentifier, { ...params }) -> PolishUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/settings/polish">client.zones.settings.polishes.<a href="./src/resources/zones/settings/polishes.ts">list</a>(zoneIdentifier) -> PolishListResponse</code>

### PrefetchPreloads

Types:

- <code><a href="./src/resources/zones/settings/prefetch-preloads.ts">PrefetchPreloadUpdateResponse</a></code>
- <code><a href="./src/resources/zones/settings/prefetch-preloads.ts">PrefetchPreloadListResponse</a></code>

Methods:

- <code title="patch /zones/{zone_identifier}/settings/prefetch_preload">client.zones.settings.prefetchPreloads.<a href="./src/resources/zones/settings/prefetch-preloads.ts">update</a>(zoneIdentifier, { ...params }) -> PrefetchPreloadUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/settings/prefetch_preload">client.zones.settings.prefetchPreloads.<a href="./src/resources/zones/settings/prefetch-preloads.ts">list</a>(zoneIdentifier) -> PrefetchPreloadListResponse</code>

### ProxyReadTimeouts

Types:

- <code><a href="./src/resources/zones/settings/proxy-read-timeouts.ts">ProxyReadTimeoutUpdateResponse</a></code>
- <code><a href="./src/resources/zones/settings/proxy-read-timeouts.ts">ProxyReadTimeoutListResponse</a></code>

Methods:

- <code title="patch /zones/{zone_identifier}/settings/proxy_read_timeout">client.zones.settings.proxyReadTimeouts.<a href="./src/resources/zones/settings/proxy-read-timeouts.ts">update</a>(zoneIdentifier, { ...params }) -> ProxyReadTimeoutUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/settings/proxy_read_timeout">client.zones.settings.proxyReadTimeouts.<a href="./src/resources/zones/settings/proxy-read-timeouts.ts">list</a>(zoneIdentifier) -> ProxyReadTimeoutListResponse</code>

### PseudoIpv4s

Types:

- <code><a href="./src/resources/zones/settings/pseudo-ipv4s.ts">PseudoIpv4UpdateResponse</a></code>
- <code><a href="./src/resources/zones/settings/pseudo-ipv4s.ts">PseudoIpv4ListResponse</a></code>

Methods:

- <code title="patch /zones/{zone_identifier}/settings/pseudo_ipv4">client.zones.settings.pseudoIpv4s.<a href="./src/resources/zones/settings/pseudo-ipv4s.ts">update</a>(zoneIdentifier, { ...params }) -> PseudoIpv4UpdateResponse</code>
- <code title="get /zones/{zone_identifier}/settings/pseudo_ipv4">client.zones.settings.pseudoIpv4s.<a href="./src/resources/zones/settings/pseudo-ipv4s.ts">list</a>(zoneIdentifier) -> PseudoIpv4ListResponse</code>

### ResponseBufferings

Types:

- <code><a href="./src/resources/zones/settings/response-bufferings.ts">ResponseBufferingUpdateResponse</a></code>
- <code><a href="./src/resources/zones/settings/response-bufferings.ts">ResponseBufferingListResponse</a></code>

Methods:

- <code title="patch /zones/{zone_identifier}/settings/response_buffering">client.zones.settings.responseBufferings.<a href="./src/resources/zones/settings/response-bufferings.ts">update</a>(zoneIdentifier, { ...params }) -> ResponseBufferingUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/settings/response_buffering">client.zones.settings.responseBufferings.<a href="./src/resources/zones/settings/response-bufferings.ts">list</a>(zoneIdentifier) -> ResponseBufferingListResponse</code>

### RocketLoaders

Types:

- <code><a href="./src/resources/zones/settings/rocket-loaders.ts">RocketLoaderUpdateResponse</a></code>
- <code><a href="./src/resources/zones/settings/rocket-loaders.ts">RocketLoaderListResponse</a></code>

Methods:

- <code title="patch /zones/{zone_identifier}/settings/rocket_loader">client.zones.settings.rocketLoaders.<a href="./src/resources/zones/settings/rocket-loaders.ts">update</a>(zoneIdentifier, { ...params }) -> RocketLoaderUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/settings/rocket_loader">client.zones.settings.rocketLoaders.<a href="./src/resources/zones/settings/rocket-loaders.ts">list</a>(zoneIdentifier) -> RocketLoaderListResponse</code>

### SecurityHeaders

Types:

- <code><a href="./src/resources/zones/settings/security-headers.ts">SecurityHeaderUpdateResponse</a></code>
- <code><a href="./src/resources/zones/settings/security-headers.ts">SecurityHeaderListResponse</a></code>

Methods:

- <code title="patch /zones/{zone_identifier}/settings/security_header">client.zones.settings.securityHeaders.<a href="./src/resources/zones/settings/security-headers.ts">update</a>(zoneIdentifier, { ...params }) -> SecurityHeaderUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/settings/security_header">client.zones.settings.securityHeaders.<a href="./src/resources/zones/settings/security-headers.ts">list</a>(zoneIdentifier) -> SecurityHeaderListResponse</code>

### SecurityLevels

Types:

- <code><a href="./src/resources/zones/settings/security-levels.ts">SecurityLevelUpdateResponse</a></code>
- <code><a href="./src/resources/zones/settings/security-levels.ts">SecurityLevelListResponse</a></code>

Methods:

- <code title="patch /zones/{zone_identifier}/settings/security_level">client.zones.settings.securityLevels.<a href="./src/resources/zones/settings/security-levels.ts">update</a>(zoneIdentifier, { ...params }) -> SecurityLevelUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/settings/security_level">client.zones.settings.securityLevels.<a href="./src/resources/zones/settings/security-levels.ts">list</a>(zoneIdentifier) -> SecurityLevelListResponse</code>

### ServerSideExcludes

Types:

- <code><a href="./src/resources/zones/settings/server-side-excludes.ts">ServerSideExcludeUpdateResponse</a></code>
- <code><a href="./src/resources/zones/settings/server-side-excludes.ts">ServerSideExcludeListResponse</a></code>

Methods:

- <code title="patch /zones/{zone_identifier}/settings/server_side_exclude">client.zones.settings.serverSideExcludes.<a href="./src/resources/zones/settings/server-side-excludes.ts">update</a>(zoneIdentifier, { ...params }) -> ServerSideExcludeUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/settings/server_side_exclude">client.zones.settings.serverSideExcludes.<a href="./src/resources/zones/settings/server-side-excludes.ts">list</a>(zoneIdentifier) -> ServerSideExcludeListResponse</code>

### SortQueryStringForCaches

Types:

- <code><a href="./src/resources/zones/settings/sort-query-string-for-caches.ts">SortQueryStringForCachUpdateResponse</a></code>
- <code><a href="./src/resources/zones/settings/sort-query-string-for-caches.ts">SortQueryStringForCachListResponse</a></code>

Methods:

- <code title="patch /zones/{zone_identifier}/settings/sort_query_string_for_cache">client.zones.settings.sortQueryStringForCaches.<a href="./src/resources/zones/settings/sort-query-string-for-caches.ts">update</a>(zoneIdentifier, { ...params }) -> SortQueryStringForCachUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/settings/sort_query_string_for_cache">client.zones.settings.sortQueryStringForCaches.<a href="./src/resources/zones/settings/sort-query-string-for-caches.ts">list</a>(zoneIdentifier) -> SortQueryStringForCachListResponse</code>

### Ssls

Types:

- <code><a href="./src/resources/zones/settings/ssls.ts">SslUpdateResponse</a></code>
- <code><a href="./src/resources/zones/settings/ssls.ts">SslListResponse</a></code>

Methods:

- <code title="patch /zones/{zone_identifier}/settings/ssl">client.zones.settings.ssls.<a href="./src/resources/zones/settings/ssls.ts">update</a>(zoneIdentifier, { ...params }) -> SslUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/settings/ssl">client.zones.settings.ssls.<a href="./src/resources/zones/settings/ssls.ts">list</a>(zoneIdentifier) -> SslListResponse</code>

### SslRecommenders

Types:

- <code><a href="./src/resources/zones/settings/ssl-recommenders.ts">SslRecommenderUpdateResponse</a></code>
- <code><a href="./src/resources/zones/settings/ssl-recommenders.ts">SslRecommenderListResponse</a></code>

Methods:

- <code title="patch /zones/{zone_identifier}/settings/ssl_recommender">client.zones.settings.sslRecommenders.<a href="./src/resources/zones/settings/ssl-recommenders.ts">update</a>(zoneIdentifier, { ...params }) -> SslRecommenderUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/settings/ssl_recommender">client.zones.settings.sslRecommenders.<a href="./src/resources/zones/settings/ssl-recommenders.ts">list</a>(zoneIdentifier) -> SslRecommenderListResponse</code>

### Tls1_3s

Types:

- <code><a href="./src/resources/zones/settings/tls-1-3s.ts">Tls1_3UpdateResponse</a></code>
- <code><a href="./src/resources/zones/settings/tls-1-3s.ts">Tls1_3ListResponse</a></code>

Methods:

- <code title="patch /zones/{zone_identifier}/settings/tls_1_3">client.zones.settings.tls1_3s.<a href="./src/resources/zones/settings/tls-1-3s.ts">update</a>(zoneIdentifier, { ...params }) -> Tls1_3UpdateResponse</code>
- <code title="get /zones/{zone_identifier}/settings/tls_1_3">client.zones.settings.tls1_3s.<a href="./src/resources/zones/settings/tls-1-3s.ts">list</a>(zoneIdentifier) -> Tls1_3ListResponse</code>

### TlsClientAuths

Types:

- <code><a href="./src/resources/zones/settings/tls-client-auths.ts">TlsClientAuthUpdateResponse</a></code>
- <code><a href="./src/resources/zones/settings/tls-client-auths.ts">TlsClientAuthListResponse</a></code>

Methods:

- <code title="patch /zones/{zone_identifier}/settings/tls_client_auth">client.zones.settings.tlsClientAuths.<a href="./src/resources/zones/settings/tls-client-auths.ts">update</a>(zoneIdentifier, { ...params }) -> TlsClientAuthUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/settings/tls_client_auth">client.zones.settings.tlsClientAuths.<a href="./src/resources/zones/settings/tls-client-auths.ts">list</a>(zoneIdentifier) -> TlsClientAuthListResponse</code>

### TrueClientIPHeaders

Types:

- <code><a href="./src/resources/zones/settings/true-client-ip-headers.ts">TrueClientIPHeaderUpdateResponse</a></code>
- <code><a href="./src/resources/zones/settings/true-client-ip-headers.ts">TrueClientIPHeaderListResponse</a></code>

Methods:

- <code title="patch /zones/{zone_identifier}/settings/true_client_ip_header">client.zones.settings.trueClientIPHeaders.<a href="./src/resources/zones/settings/true-client-ip-headers.ts">update</a>(zoneIdentifier, { ...params }) -> TrueClientIPHeaderUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/settings/true_client_ip_header">client.zones.settings.trueClientIPHeaders.<a href="./src/resources/zones/settings/true-client-ip-headers.ts">list</a>(zoneIdentifier) -> TrueClientIPHeaderListResponse</code>

### Wafs

Types:

- <code><a href="./src/resources/zones/settings/wafs.ts">WafUpdateResponse</a></code>
- <code><a href="./src/resources/zones/settings/wafs.ts">WafListResponse</a></code>

Methods:

- <code title="patch /zones/{zone_identifier}/settings/waf">client.zones.settings.wafs.<a href="./src/resources/zones/settings/wafs.ts">update</a>(zoneIdentifier, { ...params }) -> WafUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/settings/waf">client.zones.settings.wafs.<a href="./src/resources/zones/settings/wafs.ts">list</a>(zoneIdentifier) -> WafListResponse</code>

### Webps

Types:

- <code><a href="./src/resources/zones/settings/webps.ts">WebpUpdateResponse</a></code>
- <code><a href="./src/resources/zones/settings/webps.ts">WebpListResponse</a></code>

Methods:

- <code title="patch /zones/{zone_identifier}/settings/webp">client.zones.settings.webps.<a href="./src/resources/zones/settings/webps.ts">update</a>(zoneIdentifier, { ...params }) -> WebpUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/settings/webp">client.zones.settings.webps.<a href="./src/resources/zones/settings/webps.ts">list</a>(zoneIdentifier) -> WebpListResponse</code>

### Websockets

Types:

- <code><a href="./src/resources/zones/settings/websockets.ts">WebsocketUpdateResponse</a></code>
- <code><a href="./src/resources/zones/settings/websockets.ts">WebsocketListResponse</a></code>

Methods:

- <code title="patch /zones/{zone_identifier}/settings/websockets">client.zones.settings.websockets.<a href="./src/resources/zones/settings/websockets.ts">update</a>(zoneIdentifier, { ...params }) -> WebsocketUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/settings/websockets">client.zones.settings.websockets.<a href="./src/resources/zones/settings/websockets.ts">list</a>(zoneIdentifier) -> WebsocketListResponse</code>

### Fonts

Types:

- <code><a href="./src/resources/zones/settings/fonts.ts">CloudflareFonts</a></code>
- <code><a href="./src/resources/zones/settings/fonts.ts">FontRetrieveResponse</a></code>
- <code><a href="./src/resources/zones/settings/fonts.ts">FontUpdateResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/settings/fonts">client.zones.settings.fonts.<a href="./src/resources/zones/settings/fonts.ts">retrieve</a>(zoneIdentifier) -> FontRetrieveResponse</code>
- <code title="patch /zones/{zone_identifier}/settings/fonts">client.zones.settings.fonts.<a href="./src/resources/zones/settings/fonts.ts">update</a>(zoneIdentifier, { ...params }) -> FontUpdateResponse</code>

### Zaraz

#### Config

Types:

- <code><a href="./src/resources/zones/settings/zaraz/config.ts">ZarazConfigResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/settings/zaraz/v2/config">client.zones.settings.zaraz.config.<a href="./src/resources/zones/settings/zaraz/config.ts">retrieve</a>(zoneIdentifier) -> ZarazConfigResponse</code>
- <code title="put /zones/{zone_identifier}/settings/zaraz/v2/config">client.zones.settings.zaraz.config.<a href="./src/resources/zones/settings/zaraz/config.ts">update</a>(zoneIdentifier, { ...params }) -> ZarazConfigResponse</code>

#### Default

Methods:

- <code title="get /zones/{zone_identifier}/settings/zaraz/v2/default">client.zones.settings.zaraz.default.<a href="./src/resources/zones/settings/zaraz/default.ts">retrieve</a>(zoneIdentifier) -> ZarazConfigResponse</code>

#### Export

Types:

- <code><a href="./src/resources/zones/settings/zaraz/export.ts">ExportRetrieveResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/settings/zaraz/v2/export">client.zones.settings.zaraz.export.<a href="./src/resources/zones/settings/zaraz/export.ts">retrieve</a>(zoneIdentifier) -> ExportRetrieveResponse</code>

#### History

Types:

- <code><a href="./src/resources/zones/settings/zaraz/history.ts">HistoryListResponse</a></code>

Methods:

- <code title="put /zones/{zone_identifier}/settings/zaraz/v2/history">client.zones.settings.zaraz.history.<a href="./src/resources/zones/settings/zaraz/history.ts">update</a>(zoneIdentifier, { ...params }) -> ZarazConfigResponse</code>
- <code title="get /zones/{zone_identifier}/settings/zaraz/v2/history">client.zones.settings.zaraz.history.<a href="./src/resources/zones/settings/zaraz/history.ts">list</a>(zoneIdentifier, { ...params }) -> HistoryListResponse</code>

#### ConfigHistory

Types:

- <code><a href="./src/resources/zones/settings/zaraz/config-history.ts">ConfigHistoryRetrieveResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/settings/zaraz/v2/history/configs">client.zones.settings.zaraz.configHistory.<a href="./src/resources/zones/settings/zaraz/config-history.ts">retrieve</a>(zoneIdentifier, { ...params }) -> ConfigHistoryRetrieveResponse</code>

#### Publish

Types:

- <code><a href="./src/resources/zones/settings/zaraz/publish.ts">PublishCreateResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/settings/zaraz/v2/publish">client.zones.settings.zaraz.publish.<a href="./src/resources/zones/settings/zaraz/publish.ts">create</a>(zoneIdentifier, { ...params }) -> PublishCreateResponse</code>

## WaitingRooms

Types:

- <code><a href="./src/resources/zones/waiting-rooms/waiting-rooms.ts">SingleWaitingRoomResponse</a></code>
- <code><a href="./src/resources/zones/waiting-rooms/waiting-rooms.ts">WaitingRoomDeleteResponse</a></code>
- <code><a href="./src/resources/zones/waiting-rooms/waiting-rooms.ts">WaitingRoomWaitingRoomListWaitingRoomsResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}">client.zones.waitingRooms.<a href="./src/resources/zones/waiting-rooms/waiting-rooms.ts">retrieve</a>(zoneIdentifier, waitingRoomId) -> SingleWaitingRoomResponse</code>
- <code title="put /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}">client.zones.waitingRooms.<a href="./src/resources/zones/waiting-rooms/waiting-rooms.ts">update</a>(zoneIdentifier, waitingRoomId, { ...params }) -> SingleWaitingRoomResponse</code>
- <code title="delete /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}">client.zones.waitingRooms.<a href="./src/resources/zones/waiting-rooms/waiting-rooms.ts">delete</a>(zoneIdentifier, waitingRoomId) -> WaitingRoomDeleteResponse</code>
- <code title="patch /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}">client.zones.waitingRooms.<a href="./src/resources/zones/waiting-rooms/waiting-rooms.ts">patch</a>(zoneIdentifier, waitingRoomId, { ...params }) -> SingleWaitingRoomResponse</code>
- <code title="post /zones/{zone_identifier}/waiting_rooms">client.zones.waitingRooms.<a href="./src/resources/zones/waiting-rooms/waiting-rooms.ts">waitingRoomCreateWaitingRoom</a>(zoneIdentifier, { ...params }) -> SingleWaitingRoomResponse</code>
- <code title="get /zones/{zone_identifier}/waiting_rooms">client.zones.waitingRooms.<a href="./src/resources/zones/waiting-rooms/waiting-rooms.ts">waitingRoomListWaitingRooms</a>(zoneIdentifier) -> WaitingRoomWaitingRoomListWaitingRoomsResponse</code>

### Previews

Types:

- <code><a href="./src/resources/zones/waiting-rooms/previews.ts">PreviewWaitingRoomCreateACustomWaitingRoomPagePreviewResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/waiting_rooms/preview">client.zones.waitingRooms.previews.<a href="./src/resources/zones/waiting-rooms/previews.ts">waitingRoomCreateACustomWaitingRoomPagePreview</a>(zoneIdentifier, { ...params }) -> PreviewWaitingRoomCreateACustomWaitingRoomPagePreviewResponse</code>

### Events

Types:

- <code><a href="./src/resources/zones/waiting-rooms/events/events.ts">EventResponse</a></code>
- <code><a href="./src/resources/zones/waiting-rooms/events/events.ts">EventDeleteResponse</a></code>
- <code><a href="./src/resources/zones/waiting-rooms/events/events.ts">EventWaitingRoomListEventsResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}/events/{event_id}">client.zones.waitingRooms.events.<a href="./src/resources/zones/waiting-rooms/events/events.ts">retrieve</a>(zoneIdentifier, waitingRoomId, eventId) -> EventResponse</code>
- <code title="put /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}/events/{event_id}">client.zones.waitingRooms.events.<a href="./src/resources/zones/waiting-rooms/events/events.ts">update</a>(zoneIdentifier, waitingRoomId, eventId, { ...params }) -> EventResponse</code>
- <code title="delete /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}/events/{event_id}">client.zones.waitingRooms.events.<a href="./src/resources/zones/waiting-rooms/events/events.ts">delete</a>(zoneIdentifier, waitingRoomId, eventId) -> EventDeleteResponse</code>
- <code title="patch /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}/events/{event_id}">client.zones.waitingRooms.events.<a href="./src/resources/zones/waiting-rooms/events/events.ts">patch</a>(zoneIdentifier, waitingRoomId, eventId, { ...params }) -> EventResponse</code>
- <code title="post /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}/events">client.zones.waitingRooms.events.<a href="./src/resources/zones/waiting-rooms/events/events.ts">waitingRoomCreateEvent</a>(zoneIdentifier, waitingRoomId, { ...params }) -> EventResponse</code>
- <code title="get /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}/events">client.zones.waitingRooms.events.<a href="./src/resources/zones/waiting-rooms/events/events.ts">waitingRoomListEvents</a>(zoneIdentifier, waitingRoomId) -> EventWaitingRoomListEventsResponse</code>

#### Details

Types:

- <code><a href="./src/resources/zones/waiting-rooms/events/details.ts">DetailWaitingRoomPreviewActiveEventDetailsResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}/events/{event_id}/details">client.zones.waitingRooms.events.details.<a href="./src/resources/zones/waiting-rooms/events/details.ts">waitingRoomPreviewActiveEventDetails</a>(zoneIdentifier, waitingRoomId, eventId) -> DetailWaitingRoomPreviewActiveEventDetailsResponse</code>

### Rules

Types:

- <code><a href="./src/resources/zones/waiting-rooms/rules.ts">RuleUpdateResponse</a></code>
- <code><a href="./src/resources/zones/waiting-rooms/rules.ts">RuleDeleteResponse</a></code>
- <code><a href="./src/resources/zones/waiting-rooms/rules.ts">RuleWaitingRoomCreateWaitingRoomRuleResponse</a></code>
- <code><a href="./src/resources/zones/waiting-rooms/rules.ts">RuleWaitingRoomListWaitingRoomRulesResponse</a></code>
- <code><a href="./src/resources/zones/waiting-rooms/rules.ts">RuleWaitingRoomReplaceWaitingRoomRulesResponse</a></code>

Methods:

- <code title="patch /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}/rules/{rule_id}">client.zones.waitingRooms.rules.<a href="./src/resources/zones/waiting-rooms/rules.ts">update</a>(zoneIdentifier, waitingRoomId, ruleId, { ...params }) -> RuleUpdateResponse</code>
- <code title="delete /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}/rules/{rule_id}">client.zones.waitingRooms.rules.<a href="./src/resources/zones/waiting-rooms/rules.ts">delete</a>(zoneIdentifier, waitingRoomId, ruleId) -> RuleDeleteResponse</code>
- <code title="post /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}/rules">client.zones.waitingRooms.rules.<a href="./src/resources/zones/waiting-rooms/rules.ts">waitingRoomCreateWaitingRoomRule</a>(zoneIdentifier, waitingRoomId, { ...params }) -> RuleWaitingRoomCreateWaitingRoomRuleResponse</code>
- <code title="get /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}/rules">client.zones.waitingRooms.rules.<a href="./src/resources/zones/waiting-rooms/rules.ts">waitingRoomListWaitingRoomRules</a>(zoneIdentifier, waitingRoomId) -> RuleWaitingRoomListWaitingRoomRulesResponse</code>
- <code title="put /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}/rules">client.zones.waitingRooms.rules.<a href="./src/resources/zones/waiting-rooms/rules.ts">waitingRoomReplaceWaitingRoomRules</a>(zoneIdentifier, waitingRoomId, [ ...body ]) -> RuleWaitingRoomReplaceWaitingRoomRulesResponse</code>

### Statuses

Types:

- <code><a href="./src/resources/zones/waiting-rooms/statuses.ts">StatusWaitingRoomGetWaitingRoomStatusResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}/status">client.zones.waitingRooms.statuses.<a href="./src/resources/zones/waiting-rooms/statuses.ts">waitingRoomGetWaitingRoomStatus</a>(zoneIdentifier, waitingRoomId) -> StatusWaitingRoomGetWaitingRoomStatusResponse</code>

### Settings

Methods:

- <code title="put /zones/{zone_identifier}/waiting_rooms/settings">client.zones.waitingRooms.settings.<a href="./src/resources/zones/waiting-rooms/settings.ts">update</a>(zoneIdentifier, { ...params }) -> WaitingRoomSettingsResponse</code>
- <code title="get /zones/{zone_identifier}/waiting_rooms/settings">client.zones.waitingRooms.settings.<a href="./src/resources/zones/waiting-rooms/settings.ts">list</a>(zoneIdentifier) -> WaitingRoomSettingsResponse</code>
- <code title="patch /zones/{zone_identifier}/waiting_rooms/settings">client.zones.waitingRooms.settings.<a href="./src/resources/zones/waiting-rooms/settings.ts">patch</a>(zoneIdentifier, { ...params }) -> WaitingRoomSettingsResponse</code>

## Web3s

### Hostnames

Types:

- <code><a href="./src/resources/zones/web3s/hostnames/hostnames.ts">HostnameRetrieveResponse</a></code>
- <code><a href="./src/resources/zones/web3s/hostnames/hostnames.ts">HostnameUpdateResponse</a></code>
- <code><a href="./src/resources/zones/web3s/hostnames/hostnames.ts">HostnameDeleteResponse</a></code>
- <code><a href="./src/resources/zones/web3s/hostnames/hostnames.ts">HostnameWeb3HostnameCreateWeb3HostnameResponse</a></code>
- <code><a href="./src/resources/zones/web3s/hostnames/hostnames.ts">HostnameWeb3HostnameListWeb3HostnamesResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/web3/hostnames/{identifier}">client.zones.web3s.hostnames.<a href="./src/resources/zones/web3s/hostnames/hostnames.ts">retrieve</a>(zoneIdentifier, identifier) -> HostnameRetrieveResponse</code>
- <code title="patch /zones/{zone_identifier}/web3/hostnames/{identifier}">client.zones.web3s.hostnames.<a href="./src/resources/zones/web3s/hostnames/hostnames.ts">update</a>(zoneIdentifier, identifier, { ...params }) -> HostnameUpdateResponse</code>
- <code title="delete /zones/{zone_identifier}/web3/hostnames/{identifier}">client.zones.web3s.hostnames.<a href="./src/resources/zones/web3s/hostnames/hostnames.ts">delete</a>(zoneIdentifier, identifier) -> HostnameDeleteResponse</code>
- <code title="post /zones/{zone_identifier}/web3/hostnames">client.zones.web3s.hostnames.<a href="./src/resources/zones/web3s/hostnames/hostnames.ts">web3HostnameCreateWeb3Hostname</a>(zoneIdentifier, { ...params }) -> HostnameWeb3HostnameCreateWeb3HostnameResponse</code>
- <code title="get /zones/{zone_identifier}/web3/hostnames">client.zones.web3s.hostnames.<a href="./src/resources/zones/web3s/hostnames/hostnames.ts">web3HostnameListWeb3Hostnames</a>(zoneIdentifier) -> HostnameWeb3HostnameListWeb3HostnamesResponse</code>

#### IpfsUniversalPaths

##### ContentLists

Types:

- <code><a href="./src/resources/zones/web3s/hostnames/ipfs-universal-paths/content-lists/content-lists.ts">ContentListWeb3HostnameIpfsUniversalPathGatewayContentListDetailsResponse</a></code>
- <code><a href="./src/resources/zones/web3s/hostnames/ipfs-universal-paths/content-lists/content-lists.ts">ContentListWeb3HostnameUpdateIpfsUniversalPathGatewayContentListResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/web3/hostnames/{identifier}/ipfs_universal_path/content_list">client.zones.web3s.hostnames.ipfsUniversalPaths.contentLists.<a href="./src/resources/zones/web3s/hostnames/ipfs-universal-paths/content-lists/content-lists.ts">web3HostnameIpfsUniversalPathGatewayContentListDetails</a>(zoneIdentifier, identifier) -> ContentListWeb3HostnameIpfsUniversalPathGatewayContentListDetailsResponse</code>
- <code title="put /zones/{zone_identifier}/web3/hostnames/{identifier}/ipfs_universal_path/content_list">client.zones.web3s.hostnames.ipfsUniversalPaths.contentLists.<a href="./src/resources/zones/web3s/hostnames/ipfs-universal-paths/content-lists/content-lists.ts">web3HostnameUpdateIpfsUniversalPathGatewayContentList</a>(zoneIdentifier, identifier, { ...params }) -> ContentListWeb3HostnameUpdateIpfsUniversalPathGatewayContentListResponse</code>

###### Entries

Types:

- <code><a href="./src/resources/zones/web3s/hostnames/ipfs-universal-paths/content-lists/entries.ts">EntryRetrieveResponse</a></code>
- <code><a href="./src/resources/zones/web3s/hostnames/ipfs-universal-paths/content-lists/entries.ts">EntryUpdateResponse</a></code>
- <code><a href="./src/resources/zones/web3s/hostnames/ipfs-universal-paths/content-lists/entries.ts">EntryDeleteResponse</a></code>
- <code><a href="./src/resources/zones/web3s/hostnames/ipfs-universal-paths/content-lists/entries.ts">EntryWeb3HostnameCreateIpfsUniversalPathGatewayContentListEntryResponse</a></code>
- <code><a href="./src/resources/zones/web3s/hostnames/ipfs-universal-paths/content-lists/entries.ts">EntryWeb3HostnameListIpfsUniversalPathGatewayContentListEntriesResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/web3/hostnames/{identifier}/ipfs_universal_path/content_list/entries/{content_list_entry_identifier}">client.zones.web3s.hostnames.ipfsUniversalPaths.contentLists.entries.<a href="./src/resources/zones/web3s/hostnames/ipfs-universal-paths/content-lists/entries.ts">retrieve</a>(zoneIdentifier, identifier, contentListEntryIdentifier) -> EntryRetrieveResponse</code>
- <code title="put /zones/{zone_identifier}/web3/hostnames/{identifier}/ipfs_universal_path/content_list/entries/{content_list_entry_identifier}">client.zones.web3s.hostnames.ipfsUniversalPaths.contentLists.entries.<a href="./src/resources/zones/web3s/hostnames/ipfs-universal-paths/content-lists/entries.ts">update</a>(zoneIdentifier, identifier, contentListEntryIdentifier, { ...params }) -> EntryUpdateResponse</code>
- <code title="delete /zones/{zone_identifier}/web3/hostnames/{identifier}/ipfs_universal_path/content_list/entries/{content_list_entry_identifier}">client.zones.web3s.hostnames.ipfsUniversalPaths.contentLists.entries.<a href="./src/resources/zones/web3s/hostnames/ipfs-universal-paths/content-lists/entries.ts">delete</a>(zoneIdentifier, identifier, contentListEntryIdentifier) -> EntryDeleteResponse</code>
- <code title="post /zones/{zone_identifier}/web3/hostnames/{identifier}/ipfs_universal_path/content_list/entries">client.zones.web3s.hostnames.ipfsUniversalPaths.contentLists.entries.<a href="./src/resources/zones/web3s/hostnames/ipfs-universal-paths/content-lists/entries.ts">web3HostnameCreateIpfsUniversalPathGatewayContentListEntry</a>(zoneIdentifier, identifier, { ...params }) -> EntryWeb3HostnameCreateIpfsUniversalPathGatewayContentListEntryResponse</code>
- <code title="get /zones/{zone_identifier}/web3/hostnames/{identifier}/ipfs_universal_path/content_list/entries">client.zones.web3s.hostnames.ipfsUniversalPaths.contentLists.entries.<a href="./src/resources/zones/web3s/hostnames/ipfs-universal-paths/content-lists/entries.ts">web3HostnameListIpfsUniversalPathGatewayContentListEntries</a>(zoneIdentifier, identifier) -> EntryWeb3HostnameListIpfsUniversalPathGatewayContentListEntriesResponse</code>

## Workers

### Scripts

Types:

- <code><a href="./src/resources/zones/workers/scripts/scripts.ts">ScriptWorkerScriptDeprecatedUploadWorkerResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/workers/script">client.zones.workers.scripts.<a href="./src/resources/zones/workers/scripts/scripts.ts">list</a>(zoneIdentifier) -> Response</code>
- <code title="delete /zones/{zone_identifier}/workers/script">client.zones.workers.scripts.<a href="./src/resources/zones/workers/scripts/scripts.ts">delete</a>(zoneIdentifier) -> void</code>
- <code title="put /zones/{zone_identifier}/workers/script">client.zones.workers.scripts.<a href="./src/resources/zones/workers/scripts/scripts.ts">workerScriptDeprecatedUploadWorker</a>(zoneIdentifier) -> ScriptWorkerScriptDeprecatedUploadWorkerResponse</code>

#### Bindings

Types:

- <code><a href="./src/resources/zones/workers/scripts/bindings.ts">BindingListResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/workers/script/bindings">client.zones.workers.scripts.bindings.<a href="./src/resources/zones/workers/scripts/bindings.ts">list</a>(zoneIdentifier) -> BindingListResponse</code>

### Filters

Types:

- <code><a href="./src/resources/zones/workers/filters.ts">FilterUpdateResponse</a></code>
- <code><a href="./src/resources/zones/workers/filters.ts">FilterDeleteResponse</a></code>
- <code><a href="./src/resources/zones/workers/filters.ts">FilterWorkerFiltersDeprecatedCreateFilterResponse</a></code>
- <code><a href="./src/resources/zones/workers/filters.ts">FilterWorkerFiltersDeprecatedListFiltersResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/workers/filters/{filter_id}">client.zones.workers.filters.<a href="./src/resources/zones/workers/filters.ts">update</a>(zoneId, filterId, { ...params }) -> FilterUpdateResponse</code>
- <code title="delete /zones/{zone_id}/workers/filters/{filter_id}">client.zones.workers.filters.<a href="./src/resources/zones/workers/filters.ts">delete</a>(zoneId, filterId) -> FilterDeleteResponse</code>
- <code title="post /zones/{zone_id}/workers/filters">client.zones.workers.filters.<a href="./src/resources/zones/workers/filters.ts">workerFiltersDeprecatedCreateFilter</a>(zoneId, { ...params }) -> FilterWorkerFiltersDeprecatedCreateFilterResponse</code>
- <code title="get /zones/{zone_id}/workers/filters">client.zones.workers.filters.<a href="./src/resources/zones/workers/filters.ts">workerFiltersDeprecatedListFilters</a>(zoneId) -> FilterWorkerFiltersDeprecatedListFiltersResponse</code>

### Routes

Types:

- <code><a href="./src/resources/zones/workers/routes.ts">RouteRetrieveResponse</a></code>
- <code><a href="./src/resources/zones/workers/routes.ts">RouteUpdateResponse</a></code>
- <code><a href="./src/resources/zones/workers/routes.ts">RouteDeleteResponse</a></code>
- <code><a href="./src/resources/zones/workers/routes.ts">RouteWorkerRoutesCreateRouteResponse</a></code>
- <code><a href="./src/resources/zones/workers/routes.ts">RouteWorkerRoutesListRoutesResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/workers/routes/{route_id}">client.zones.workers.routes.<a href="./src/resources/zones/workers/routes.ts">retrieve</a>(zoneId, routeId) -> RouteRetrieveResponse</code>
- <code title="put /zones/{zone_id}/workers/routes/{route_id}">client.zones.workers.routes.<a href="./src/resources/zones/workers/routes.ts">update</a>(zoneId, routeId, { ...params }) -> RouteUpdateResponse</code>
- <code title="delete /zones/{zone_id}/workers/routes/{route_id}">client.zones.workers.routes.<a href="./src/resources/zones/workers/routes.ts">delete</a>(zoneId, routeId) -> RouteDeleteResponse</code>
- <code title="post /zones/{zone_id}/workers/routes">client.zones.workers.routes.<a href="./src/resources/zones/workers/routes.ts">workerRoutesCreateRoute</a>(zoneId, { ...params }) -> RouteWorkerRoutesCreateRouteResponse</code>
- <code title="get /zones/{zone_id}/workers/routes">client.zones.workers.routes.<a href="./src/resources/zones/workers/routes.ts">workerRoutesListRoutes</a>(zoneId) -> RouteWorkerRoutesListRoutesResponse</code>

## ActivationChecks

Types:

- <code><a href="./src/resources/zones/activation-checks.ts">ActivationCheckPutZonesZoneIDActivationCheckResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/activation_check">client.zones.activationChecks.<a href="./src/resources/zones/activation-checks.ts">putZonesZoneIdActivationCheck</a>(zoneId) -> ActivationCheckPutZonesZoneIDActivationCheckResponse</code>

## APIGateway

### Discovery

Types:

- <code><a href="./src/resources/zones/api-gateway/discovery.ts">DiscoveryAPIShieldEndpointManagementRetrieveAPIDiscoveryResultsForAZoneResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/api_gateway/discovery">client.zones.apiGateway.discovery.<a href="./src/resources/zones/api-gateway/discovery.ts">apiShieldEndpointManagementRetrieveAPIDiscoveryResultsForAZone</a>(zoneId) -> DiscoveryAPIShieldEndpointManagementRetrieveAPIDiscoveryResultsForAZoneResponse</code>

### Schemas

Types:

- <code><a href="./src/resources/zones/api-gateway/schemas.ts">SchemaAPIShieldEndpointManagementRetrieveOperationsAndFeaturesAsOpenAPISchemasResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/api_gateway/schemas">client.zones.apiGateway.schemas.<a href="./src/resources/zones/api-gateway/schemas.ts">apiShieldEndpointManagementRetrieveOperationsAndFeaturesAsOpenAPISchemas</a>(zoneId, { ...params }) -> SchemaAPIShieldEndpointManagementRetrieveOperationsAndFeaturesAsOpenAPISchemasResponse</code>

### Settings

#### SchemaValidations

Types:

- <code><a href="./src/resources/zones/api-gateway/settings/schema-validations.ts">SchemaValidationRetrieveResponse</a></code>
- <code><a href="./src/resources/zones/api-gateway/settings/schema-validations.ts">SchemaValidationUpdateResponse</a></code>
- <code><a href="./src/resources/zones/api-gateway/settings/schema-validations.ts">SchemaValidationPatchResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/api_gateway/settings/schema_validation">client.zones.apiGateway.settings.schemaValidations.<a href="./src/resources/zones/api-gateway/settings/schema-validations.ts">retrieve</a>(zoneId) -> SchemaValidationRetrieveResponse</code>
- <code title="put /zones/{zone_id}/api_gateway/settings/schema_validation">client.zones.apiGateway.settings.schemaValidations.<a href="./src/resources/zones/api-gateway/settings/schema-validations.ts">update</a>(zoneId, { ...params }) -> SchemaValidationUpdateResponse</code>
- <code title="patch /zones/{zone_id}/api_gateway/settings/schema_validation">client.zones.apiGateway.settings.schemaValidations.<a href="./src/resources/zones/api-gateway/settings/schema-validations.ts">patch</a>(zoneId, { ...params }) -> SchemaValidationPatchResponse</code>

### UserSchemas

Types:

- <code><a href="./src/resources/zones/api-gateway/user-schemas/user-schemas.ts">UserSchemaCreateResponse</a></code>
- <code><a href="./src/resources/zones/api-gateway/user-schemas/user-schemas.ts">UserSchemaRetrieveResponse</a></code>
- <code><a href="./src/resources/zones/api-gateway/user-schemas/user-schemas.ts">UserSchemaUpdateResponse</a></code>
- <code><a href="./src/resources/zones/api-gateway/user-schemas/user-schemas.ts">UserSchemaListResponse</a></code>
- <code><a href="./src/resources/zones/api-gateway/user-schemas/user-schemas.ts">UserSchemaDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/api_gateway/user_schemas">client.zones.apiGateway.userSchemas.<a href="./src/resources/zones/api-gateway/user-schemas/user-schemas.ts">create</a>(zoneId, { ...params }) -> UserSchemaCreateResponse</code>
- <code title="get /zones/{zone_id}/api_gateway/user_schemas/{schema_id}">client.zones.apiGateway.userSchemas.<a href="./src/resources/zones/api-gateway/user-schemas/user-schemas.ts">retrieve</a>(zoneId, schemaId, { ...params }) -> UserSchemaRetrieveResponse</code>
- <code title="patch /zones/{zone_id}/api_gateway/user_schemas/{schema_id}">client.zones.apiGateway.userSchemas.<a href="./src/resources/zones/api-gateway/user-schemas/user-schemas.ts">update</a>(zoneId, schemaId, { ...params }) -> UserSchemaUpdateResponse</code>
- <code title="get /zones/{zone_id}/api_gateway/user_schemas">client.zones.apiGateway.userSchemas.<a href="./src/resources/zones/api-gateway/user-schemas/user-schemas.ts">list</a>(zoneId, { ...params }) -> UserSchemaListResponse</code>
- <code title="delete /zones/{zone_id}/api_gateway/user_schemas/{schema_id}">client.zones.apiGateway.userSchemas.<a href="./src/resources/zones/api-gateway/user-schemas/user-schemas.ts">delete</a>(zoneId, schemaId) -> UserSchemaDeleteResponse</code>

#### Operations

Types:

- <code><a href="./src/resources/zones/api-gateway/user-schemas/operations.ts">OperationListResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/api_gateway/user_schemas/{schema_id}/operations">client.zones.apiGateway.userSchemas.operations.<a href="./src/resources/zones/api-gateway/user-schemas/operations.ts">list</a>(zoneId, schemaId, { ...params }) -> OperationListResponse</code>

## ManagedHeaders

Types:

- <code><a href="./src/resources/zones/managed-headers.ts">ManagedHeaderListResponse</a></code>
- <code><a href="./src/resources/zones/managed-headers.ts">ManagedHeaderManagedTransformsUpdateStatusOfManagedTransformsResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/managed_headers">client.zones.managedHeaders.<a href="./src/resources/zones/managed-headers.ts">list</a>(zoneId) -> ManagedHeaderListResponse</code>
- <code title="patch /zones/{zone_id}/managed_headers">client.zones.managedHeaders.<a href="./src/resources/zones/managed-headers.ts">managedTransformsUpdateStatusOfManagedTransforms</a>(zoneId, { ...params }) -> ManagedHeaderManagedTransformsUpdateStatusOfManagedTransformsResponse</code>

## Rulesets

Types:

- <code><a href="./src/resources/zones/rulesets/rulesets.ts">RulesetRetrieveResponse</a></code>
- <code><a href="./src/resources/zones/rulesets/rulesets.ts">RulesetUpdateResponse</a></code>
- <code><a href="./src/resources/zones/rulesets/rulesets.ts">RulesetZoneRulesetsCreateAZoneRulesetResponse</a></code>
- <code><a href="./src/resources/zones/rulesets/rulesets.ts">RulesetZoneRulesetsListZoneRulesetsResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/rulesets/{ruleset_id}">client.zones.rulesets.<a href="./src/resources/zones/rulesets/rulesets.ts">retrieve</a>(zoneId, rulesetId) -> RulesetRetrieveResponse</code>
- <code title="put /zones/{zone_id}/rulesets/{ruleset_id}">client.zones.rulesets.<a href="./src/resources/zones/rulesets/rulesets.ts">update</a>(zoneId, rulesetId, { ...params }) -> RulesetUpdateResponse</code>
- <code title="delete /zones/{zone_id}/rulesets/{ruleset_id}">client.zones.rulesets.<a href="./src/resources/zones/rulesets/rulesets.ts">delete</a>(zoneId, rulesetId) -> void</code>
- <code title="post /zones/{zone_id}/rulesets">client.zones.rulesets.<a href="./src/resources/zones/rulesets/rulesets.ts">zoneRulesetsCreateAZoneRuleset</a>(zoneId, { ...params }) -> RulesetZoneRulesetsCreateAZoneRulesetResponse</code>
- <code title="get /zones/{zone_id}/rulesets">client.zones.rulesets.<a href="./src/resources/zones/rulesets/rulesets.ts">zoneRulesetsListZoneRulesets</a>(zoneId) -> RulesetZoneRulesetsListZoneRulesetsResponse</code>

### Phases

#### Entrypoints

Types:

- <code><a href="./src/resources/zones/rulesets/phases/entrypoints/entrypoints.ts">EntrypointTransformRulesListTransformRulesResponse</a></code>
- <code><a href="./src/resources/zones/rulesets/phases/entrypoints/entrypoints.ts">EntrypointTransformRulesUpdateTransformRulesResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/rulesets/phases/{ruleset_phase}/entrypoint">client.zones.rulesets.phases.entrypoints.<a href="./src/resources/zones/rulesets/phases/entrypoints/entrypoints.ts">transformRulesListTransformRules</a>(zoneId, rulesetPhase) -> EntrypointTransformRulesListTransformRulesResponse</code>
- <code title="put /zones/{zone_id}/rulesets/phases/{ruleset_phase}/entrypoint">client.zones.rulesets.phases.entrypoints.<a href="./src/resources/zones/rulesets/phases/entrypoints/entrypoints.ts">transformRulesUpdateTransformRules</a>(zoneId, rulesetPhase, { ...params }) -> EntrypointTransformRulesUpdateTransformRulesResponse</code>

##### Versions

Types:

- <code><a href="./src/resources/zones/rulesets/phases/entrypoints/versions.ts">VersionRetrieveResponse</a></code>
- <code><a href="./src/resources/zones/rulesets/phases/entrypoints/versions.ts">VersionZoneRulesetsListAZoneEntryPointRulesetSVersionsResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/rulesets/phases/{ruleset_phase}/entrypoint/versions/{ruleset_version}">client.zones.rulesets.phases.entrypoints.versions.<a href="./src/resources/zones/rulesets/phases/entrypoints/versions.ts">retrieve</a>(zoneId, rulesetPhase, rulesetVersion) -> VersionRetrieveResponse</code>
- <code title="get /zones/{zone_id}/rulesets/phases/{ruleset_phase}/entrypoint/versions">client.zones.rulesets.phases.entrypoints.versions.<a href="./src/resources/zones/rulesets/phases/entrypoints/versions.ts">zoneRulesetsListAZoneEntryPointRulesetSVersions</a>(zoneId, rulesetPhase) -> VersionZoneRulesetsListAZoneEntryPointRulesetSVersionsResponse</code>

### Rules

Types:

- <code><a href="./src/resources/zones/rulesets/rules.ts">RuleUpdateResponse</a></code>
- <code><a href="./src/resources/zones/rulesets/rules.ts">RuleDeleteResponse</a></code>
- <code><a href="./src/resources/zones/rulesets/rules.ts">RuleZoneRulesetsCreateAZoneRulesetRuleResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/rulesets/{ruleset_id}/rules/{rule_id}">client.zones.rulesets.rules.<a href="./src/resources/zones/rulesets/rules.ts">update</a>(zoneId, rulesetId, ruleId, { ...params }) -> RuleUpdateResponse</code>
- <code title="delete /zones/{zone_id}/rulesets/{ruleset_id}/rules/{rule_id}">client.zones.rulesets.rules.<a href="./src/resources/zones/rulesets/rules.ts">delete</a>(zoneId, rulesetId, ruleId) -> RuleDeleteResponse</code>
- <code title="post /zones/{zone_id}/rulesets/{ruleset_id}/rules">client.zones.rulesets.rules.<a href="./src/resources/zones/rulesets/rules.ts">zoneRulesetsCreateAZoneRulesetRule</a>(zoneId, rulesetId, { ...params }) -> RuleZoneRulesetsCreateAZoneRulesetRuleResponse</code>

### Versions

Types:

- <code><a href="./src/resources/zones/rulesets/versions.ts">VersionRetrieveResponse</a></code>
- <code><a href="./src/resources/zones/rulesets/versions.ts">VersionZoneRulesetsListAZoneRulesetSVersionsResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/rulesets/{ruleset_id}/versions/{ruleset_version}">client.zones.rulesets.versions.<a href="./src/resources/zones/rulesets/versions.ts">retrieve</a>(zoneId, rulesetId, rulesetVersion) -> VersionRetrieveResponse</code>
- <code title="delete /zones/{zone_id}/rulesets/{ruleset_id}/versions/{ruleset_version}">client.zones.rulesets.versions.<a href="./src/resources/zones/rulesets/versions.ts">delete</a>(zoneId, rulesetId, rulesetVersion) -> void</code>
- <code title="get /zones/{zone_id}/rulesets/{ruleset_id}/versions">client.zones.rulesets.versions.<a href="./src/resources/zones/rulesets/versions.ts">zoneRulesetsListAZoneRulesetSVersions</a>(zoneId, rulesetId) -> VersionZoneRulesetsListAZoneRulesetSVersionsResponse</code>

## URLNormalizations

Types:

- <code><a href="./src/resources/zones/url-normalizations.ts">URLNormalizationURLNormalizationGetURLNormalizationSettingsResponse</a></code>
- <code><a href="./src/resources/zones/url-normalizations.ts">URLNormalizationURLNormalizationUpdateURLNormalizationSettingsResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/url_normalization">client.zones.urlNormalizations.<a href="./src/resources/zones/url-normalizations.ts">urlNormalizationGetURLNormalizationSettings</a>(zoneId) -> URLNormalizationURLNormalizationGetURLNormalizationSettingsResponse</code>
- <code title="put /zones/{zone_id}/url_normalization">client.zones.urlNormalizations.<a href="./src/resources/zones/url-normalizations.ts">urlNormalizationUpdateURLNormalizationSettings</a>(zoneId, { ...params }) -> URLNormalizationURLNormalizationUpdateURLNormalizationSettingsResponse</code>

## Spectrums

### Analytics

#### Aggregates

##### Currents

Types:

- <code><a href="./src/resources/zones/spectrums/analytics/aggregates/currents.ts">CurrentSpectrumAggregateAnalyticsGetCurrentAggregatedAnalyticsResponse</a></code>

Methods:

- <code title="get /zones/{zone}/spectrum/analytics/aggregate/current">client.zones.spectrums.analytics.aggregates.currents.<a href="./src/resources/zones/spectrums/analytics/aggregates/currents.ts">spectrumAggregateAnalyticsGetCurrentAggregatedAnalytics</a>(zone, { ...params }) -> CurrentSpectrumAggregateAnalyticsGetCurrentAggregatedAnalyticsResponse</code>

#### Events

##### Bytimes

Types:

- <code><a href="./src/resources/zones/spectrums/analytics/events/bytimes.ts">BytimeSpectrumAnalyticsByTimeGetAnalyticsByTimeResponse</a></code>

Methods:

- <code title="get /zones/{zone}/spectrum/analytics/events/bytime">client.zones.spectrums.analytics.events.bytimes.<a href="./src/resources/zones/spectrums/analytics/events/bytimes.ts">spectrumAnalyticsByTimeGetAnalyticsByTime</a>(zone, { ...params }) -> BytimeSpectrumAnalyticsByTimeGetAnalyticsByTimeResponse</code>

##### Summaries

Types:

- <code><a href="./src/resources/zones/spectrums/analytics/events/summaries.ts">SummarySpectrumAnalyticsSummaryGetAnalyticsSummaryResponse</a></code>

Methods:

- <code title="get /zones/{zone}/spectrum/analytics/events/summary">client.zones.spectrums.analytics.events.summaries.<a href="./src/resources/zones/spectrums/analytics/events/summaries.ts">spectrumAnalyticsSummaryGetAnalyticsSummary</a>(zone, { ...params }) -> SummarySpectrumAnalyticsSummaryGetAnalyticsSummaryResponse</code>

## Holds

Types:

- <code><a href="./src/resources/zones/holds.ts">HoldCreateResponse</a></code>
- <code><a href="./src/resources/zones/holds.ts">HoldRetrieveResponse</a></code>
- <code><a href="./src/resources/zones/holds.ts">HoldDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/hold">client.zones.holds.<a href="./src/resources/zones/holds.ts">create</a>(zoneId, { ...params }) -> HoldCreateResponse</code>
- <code title="get /zones/{zone_id}/hold">client.zones.holds.<a href="./src/resources/zones/holds.ts">retrieve</a>(zoneId) -> HoldRetrieveResponse</code>
- <code title="delete /zones/{zone_id}/hold">client.zones.holds.<a href="./src/resources/zones/holds.ts">delete</a>(zoneId, { ...params }) -> HoldDeleteResponse</code>

## PageShield

Types:

- <code><a href="./src/resources/zones/page-shield/page-shield.ts">PageShieldListResponse</a></code>
- <code><a href="./src/resources/zones/page-shield/page-shield.ts">PageShieldPageShieldUpdatePageShieldSettingsResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/page_shield">client.zones.pageShield.<a href="./src/resources/zones/page-shield/page-shield.ts">list</a>(zoneId) -> PageShieldListResponse</code>
- <code title="put /zones/{zone_id}/page_shield">client.zones.pageShield.<a href="./src/resources/zones/page-shield/page-shield.ts">pageShieldUpdatePageShieldSettings</a>(zoneId, { ...params }) -> PageShieldPageShieldUpdatePageShieldSettingsResponse</code>

### Connections

Types:

- <code><a href="./src/resources/zones/page-shield/connections.ts">ConnectionRetrieveResponse</a></code>
- <code><a href="./src/resources/zones/page-shield/connections.ts">ConnectionPageShieldListPageShieldConnectionsResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/page_shield/connections/{connection_id}">client.zones.pageShield.connections.<a href="./src/resources/zones/page-shield/connections.ts">retrieve</a>(zoneId, connectionId) -> ConnectionRetrieveResponse</code>
- <code title="get /zones/{zone_id}/page_shield/connections">client.zones.pageShield.connections.<a href="./src/resources/zones/page-shield/connections.ts">pageShieldListPageShieldConnections</a>(zoneId, { ...params }) -> ConnectionPageShieldListPageShieldConnectionsResponse</code>

### Scripts

Types:

- <code><a href="./src/resources/zones/page-shield/scripts.ts">ScriptRetrieveResponse</a></code>
- <code><a href="./src/resources/zones/page-shield/scripts.ts">ScriptPageShieldListPageShieldScriptsResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/page_shield/scripts/{script_id}">client.zones.pageShield.scripts.<a href="./src/resources/zones/page-shield/scripts.ts">retrieve</a>(zoneId, scriptId) -> ScriptRetrieveResponse</code>
- <code title="get /zones/{zone_id}/page_shield/scripts">client.zones.pageShield.scripts.<a href="./src/resources/zones/page-shield/scripts.ts">pageShieldListPageShieldScripts</a>(zoneId, { ...params }) -> ScriptPageShieldListPageShieldScriptsResponse</code>

### Policies

Types:

- <code><a href="./src/resources/zones/page-shield/policies.ts">PolicyCreateResponse</a></code>
- <code><a href="./src/resources/zones/page-shield/policies.ts">PolicyRetrieveResponse</a></code>
- <code><a href="./src/resources/zones/page-shield/policies.ts">PolicyUpdateResponse</a></code>
- <code><a href="./src/resources/zones/page-shield/policies.ts">PolicyListResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/page_shield/policies">client.zones.pageShield.policies.<a href="./src/resources/zones/page-shield/policies.ts">create</a>(zoneId, { ...params }) -> PolicyCreateResponse</code>
- <code title="get /zones/{zone_id}/page_shield/policies/{policy_id}">client.zones.pageShield.policies.<a href="./src/resources/zones/page-shield/policies.ts">retrieve</a>(zoneId, policyId) -> PolicyRetrieveResponse</code>
- <code title="put /zones/{zone_id}/page_shield/policies/{policy_id}">client.zones.pageShield.policies.<a href="./src/resources/zones/page-shield/policies.ts">update</a>(zoneId, policyId, { ...params }) -> PolicyUpdateResponse</code>
- <code title="get /zones/{zone_id}/page_shield/policies">client.zones.pageShield.policies.<a href="./src/resources/zones/page-shield/policies.ts">list</a>(zoneId) -> PolicyListResponse</code>
- <code title="delete /zones/{zone_id}/page_shield/policies/{policy_id}">client.zones.pageShield.policies.<a href="./src/resources/zones/page-shield/policies.ts">delete</a>(zoneId, policyId) -> void</code>

## BotManagement

Types:

- <code><a href="./src/resources/zones/bot-management.ts">BotManagementRetrieveResponse</a></code>
- <code><a href="./src/resources/zones/bot-management.ts">BotManagementUpdateResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/bot_management">client.zones.botManagement.<a href="./src/resources/zones/bot-management.ts">retrieve</a>(zoneIdentifier, { ...params }) -> BotManagementRetrieveResponse</code>
- <code title="put /zones/{zone_identifier}/bot_management">client.zones.botManagement.<a href="./src/resources/zones/bot-management.ts">update</a>(zoneIdentifier, { ...params }) -> BotManagementUpdateResponse</code>

## Cache

Types:

- <code><a href="./src/resources/zones/cache.ts">CacheGetCacheReserveClearResponse</a></code>
- <code><a href="./src/resources/zones/cache.ts">CacheGetOriginPostQuantumEncryptionResponse</a></code>
- <code><a href="./src/resources/zones/cache.ts">CacheGetRegionalTieredCacheResponse</a></code>
- <code><a href="./src/resources/zones/cache.ts">CachePatchRegionalTieredCacheResponse</a></code>
- <code><a href="./src/resources/zones/cache.ts">CachePostCacheReserveClearResponse</a></code>
- <code><a href="./src/resources/zones/cache.ts">CachePutOriginPostQuantumEncryptionResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/cache/cache_reserve_clear">client.zones.cache.<a href="./src/resources/zones/cache.ts">getCacheReserveClear</a>(zoneIdentifier) -> CacheGetCacheReserveClearResponse</code>
- <code title="get /zones/{zone_identifier}/cache/origin_post_quantum_encryption">client.zones.cache.<a href="./src/resources/zones/cache.ts">getOriginPostQuantumEncryption</a>(zoneIdentifier) -> CacheGetOriginPostQuantumEncryptionResponse</code>
- <code title="get /zones/{zone_identifier}/cache/regional_tiered_cache">client.zones.cache.<a href="./src/resources/zones/cache.ts">getRegionalTieredCache</a>(zoneIdentifier) -> CacheGetRegionalTieredCacheResponse</code>
- <code title="patch /zones/{zone_identifier}/cache/regional_tiered_cache">client.zones.cache.<a href="./src/resources/zones/cache.ts">patchRegionalTieredCache</a>(zoneIdentifier, { ...params }) -> CachePatchRegionalTieredCacheResponse</code>
- <code title="post /zones/{zone_identifier}/cache/cache_reserve_clear">client.zones.cache.<a href="./src/resources/zones/cache.ts">postCacheReserveClear</a>(zoneIdentifier) -> CachePostCacheReserveClearResponse</code>
- <code title="put /zones/{zone_identifier}/cache/origin_post_quantum_encryption">client.zones.cache.<a href="./src/resources/zones/cache.ts">putOriginPostQuantumEncryption</a>(zoneIdentifier, { ...params }) -> CachePutOriginPostQuantumEncryptionResponse</code>

## DcvDelegations

Types:

- <code><a href="./src/resources/zones/dcv-delegations.ts">DcvDelegationUuidResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/dcv_delegation/uuid">client.zones.dcvDelegations.<a href="./src/resources/zones/dcv-delegations.ts">uuid</a>(zoneIdentifier) -> DcvDelegationUuidResponse</code>

## Zarazs

### Workflow

Types:

- <code><a href="./src/resources/zones/zarazs/workflow.ts">ZarazWorkflow</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/settings/zaraz/v2/workflow">client.zones.zarazs.workflow.<a href="./src/resources/zones/zarazs/workflow.ts">retrieve</a>(zoneIdentifier) -> ZarazWorkflow</code>
- <code title="put /zones/{zone_identifier}/settings/zaraz/v2/workflow">client.zones.zarazs.workflow.<a href="./src/resources/zones/zarazs/workflow.ts">update</a>(zoneIdentifier, { ...params }) -> ZarazWorkflow</code>

## Snippets

Types:

- <code><a href="./src/resources/zones/snippets.ts">SnippetRetrieveResponse</a></code>
- <code><a href="./src/resources/zones/snippets.ts">SnippetUpdateResponse</a></code>
- <code><a href="./src/resources/zones/snippets.ts">SnippetListResponse</a></code>
- <code><a href="./src/resources/zones/snippets.ts">SnippetDeleteResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/snippets/{snippet_name}">client.zones.snippets.<a href="./src/resources/zones/snippets.ts">retrieve</a>(zoneIdentifier, snippetName) -> SnippetRetrieveResponse</code>
- <code title="put /zones/{zone_identifier}/snippets/{snippet_name}">client.zones.snippets.<a href="./src/resources/zones/snippets.ts">update</a>(zoneIdentifier, snippetName, { ...params }) -> SnippetUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/snippets">client.zones.snippets.<a href="./src/resources/zones/snippets.ts">list</a>(zoneIdentifier) -> SnippetListResponse</code>
- <code title="delete /zones/{zone_identifier}/snippets/{snippet_name}">client.zones.snippets.<a href="./src/resources/zones/snippets.ts">delete</a>(zoneIdentifier, snippetName) -> SnippetDeleteResponse</code>
- <code title="get /zones/{zone_identifier}/snippets/{snippet_name}/content">client.zones.snippets.<a href="./src/resources/zones/snippets.ts">content</a>(zoneIdentifier, snippetName) -> Response</code>

## SnippetsRules

Types:

- <code><a href="./src/resources/zones/snippets-rules.ts">SnippetsRuleUpdateResponse</a></code>
- <code><a href="./src/resources/zones/snippets-rules.ts">SnippetsRuleListResponse</a></code>

Methods:

- <code title="put /zones/{zone_identifier}/snippets/snippet_rules">client.zones.snippetsRules.<a href="./src/resources/zones/snippets-rules.ts">update</a>(zoneIdentifier, { ...params }) -> SnippetsRuleUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/snippets/snippet_rules">client.zones.snippetsRules.<a href="./src/resources/zones/snippets-rules.ts">list</a>(zoneIdentifier) -> SnippetsRuleListResponse</code>

## SpeedAPI

Types:

- <code><a href="./src/resources/zones/speed-api/speed-api.ts">SpeedAPIAvailabilitiesResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/speed_api/availabilities">client.zones.speedAPI.<a href="./src/resources/zones/speed-api/speed-api.ts">availabilities</a>(zoneIdentifier) -> SpeedAPIAvailabilitiesResponse</code>

### Pages

Types:

- <code><a href="./src/resources/zones/speed-api/pages/pages.ts">PageListResponse</a></code>
- <code><a href="./src/resources/zones/speed-api/pages/pages.ts">PageTrendResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/speed_api/pages">client.zones.speedAPI.pages.<a href="./src/resources/zones/speed-api/pages/pages.ts">list</a>(zoneIdentifier) -> PageListResponse</code>
- <code title="get /zones/{zone_identifier}/speed_api/pages/{url}/trend">client.zones.speedAPI.pages.<a href="./src/resources/zones/speed-api/pages/pages.ts">trend</a>(zoneIdentifier, url, { ...params }) -> PageTrendResponse</code>

#### Tests

Types:

- <code><a href="./src/resources/zones/speed-api/pages/tests.ts">TestCreateResponse</a></code>
- <code><a href="./src/resources/zones/speed-api/pages/tests.ts">TestRetrieveResponse</a></code>
- <code><a href="./src/resources/zones/speed-api/pages/tests.ts">TestListResponse</a></code>
- <code><a href="./src/resources/zones/speed-api/pages/tests.ts">TestDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/speed_api/pages/{url}/tests">client.zones.speedAPI.pages.tests.<a href="./src/resources/zones/speed-api/pages/tests.ts">create</a>(zoneIdentifier, url, { ...params }) -> TestCreateResponse</code>
- <code title="get /zones/{zone_identifier}/speed_api/pages/{url}/tests/{test_identifier}">client.zones.speedAPI.pages.tests.<a href="./src/resources/zones/speed-api/pages/tests.ts">retrieve</a>(zoneIdentifier, url, testIdentifier) -> TestRetrieveResponse</code>
- <code title="get /zones/{zone_identifier}/speed_api/pages/{url}/tests">client.zones.speedAPI.pages.tests.<a href="./src/resources/zones/speed-api/pages/tests.ts">list</a>(zoneIdentifier, url, { ...params }) -> TestListResponse</code>
- <code title="delete /zones/{zone_identifier}/speed_api/pages/{url}/tests">client.zones.speedAPI.pages.tests.<a href="./src/resources/zones/speed-api/pages/tests.ts">delete</a>(zoneIdentifier, url, { ...params }) -> TestDeleteResponse</code>

### Schedule

Types:

- <code><a href="./src/resources/zones/speed-api/schedule.ts">ScheduleCreateResponse</a></code>
- <code><a href="./src/resources/zones/speed-api/schedule.ts">ScheduleRetrieveResponse</a></code>
- <code><a href="./src/resources/zones/speed-api/schedule.ts">ScheduleDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/speed_api/schedule/{url}">client.zones.speedAPI.schedule.<a href="./src/resources/zones/speed-api/schedule.ts">create</a>(zoneIdentifier, url, { ...params }) -> ScheduleCreateResponse</code>
- <code title="get /zones/{zone_identifier}/speed_api/schedule/{url}">client.zones.speedAPI.schedule.<a href="./src/resources/zones/speed-api/schedule.ts">retrieve</a>(zoneIdentifier, url, { ...params }) -> ScheduleRetrieveResponse</code>
- <code title="delete /zones/{zone_identifier}/speed_api/schedule/{url}">client.zones.speedAPI.schedule.<a href="./src/resources/zones/speed-api/schedule.ts">delete</a>(zoneIdentifier, url, { ...params }) -> ScheduleDeleteResponse</code>

# AI

Types:

- <code><a href="./src/resources/ai/ai.ts">AIRunResponse</a></code>

Methods:

- <code title="post /apiv4/accounts/{account_identifier}/ai/run/{model_name}">client.ai.<a href="./src/resources/ai/ai.ts">run</a>(accountIdentifier, modelName) -> AIRunResponse</code>

## Model

### ImageClassification

#### Resnet50

Types:

- <code><a href="./src/resources/ai/model/image-classification/resnet-50.ts">Resnet50RunResponse</a></code>

Methods:

- <code title="post /apiv4/accounts/{account_identifier}/ai/run/@cf/microsoft/resnet-50">client.ai.model.imageClassification.resnet50.<a href="./src/resources/ai/model/image-classification/resnet-50.ts">run</a>(accountIdentifier) -> Resnet50RunResponse</code>

### SpeechRecognition

#### Whisper

Types:

- <code><a href="./src/resources/ai/model/speech-recognition/whisper.ts">WhisperRunResponse</a></code>

Methods:

- <code title="post /apiv4/accounts/{account_identifier}/ai/run/@cf/openai/whisper">client.ai.model.speechRecognition.whisper.<a href="./src/resources/ai/model/speech-recognition/whisper.ts">run</a>(accountIdentifier) -> WhisperRunResponse</code>

### TextClassification

#### DistilbertSst2Int8

Types:

- <code><a href="./src/resources/ai/model/text-classification/distilbert-sst-2-int8.ts">DistilbertSst2Int8RunResponse</a></code>

Methods:

- <code title="post /apiv4/accounts/{account_identifier}/ai/run/@cf/huggingface/distilbert-sst-2-int8">client.ai.model.textClassification.distilbertSst2Int8.<a href="./src/resources/ai/model/text-classification/distilbert-sst-2-int8.ts">run</a>(accountIdentifier, { ...params }) -> DistilbertSst2Int8RunResponse</code>

### TextEmbeddings

#### BgeSmallEnV1_5

Types:

- <code><a href="./src/resources/ai/model/text-embeddings/bge-small-en-v1-5.ts">BgeSmallEnV1_5RunResponse</a></code>

Methods:

- <code title="post /apiv4/accounts/{account_identifier}/ai/run/@cf/baai/bge-small-en-v1.5">client.ai.model.textEmbeddings.bgeSmallEnV1_5.<a href="./src/resources/ai/model/text-embeddings/bge-small-en-v1-5.ts">run</a>(accountIdentifier, { ...params }) -> BgeSmallEnV1_5RunResponse</code>

#### BgeBaseEnV1_5

Types:

- <code><a href="./src/resources/ai/model/text-embeddings/bge-base-en-v1-5.ts">BgeBaseEnV1_5RunResponse</a></code>

Methods:

- <code title="post /apiv4/accounts/{account_identifier}/ai/run/@cf/baai/bge-base-en-v1.5">client.ai.model.textEmbeddings.bgeBaseEnV1_5.<a href="./src/resources/ai/model/text-embeddings/bge-base-en-v1-5.ts">run</a>(accountIdentifier, { ...params }) -> BgeBaseEnV1_5RunResponse</code>

#### BgeLargeEnV1_5

Types:

- <code><a href="./src/resources/ai/model/text-embeddings/bge-large-en-v1-5.ts">BgeLargeEnV1_5RunResponse</a></code>

Methods:

- <code title="post /apiv4/accounts/{account_identifier}/ai/run/@cf/baai/bge-large-en-v1.5">client.ai.model.textEmbeddings.bgeLargeEnV1_5.<a href="./src/resources/ai/model/text-embeddings/bge-large-en-v1-5.ts">run</a>(accountIdentifier, { ...params }) -> BgeLargeEnV1_5RunResponse</code>

### TextGeneration

#### Llama2_7bChatInt8

Types:

- <code><a href="./src/resources/ai/model/text-generation/llama-2-7b-chat-int8.ts">Llama2_7bChatInt8RunResponse</a></code>

Methods:

- <code title="post /apiv4/accounts/{account_identifier}/ai/run/@cf/meta/llama-2-7b-chat-int8">client.ai.model.textGeneration.llama2_7bChatInt8.<a href="./src/resources/ai/model/text-generation/llama-2-7b-chat-int8.ts">run</a>(accountIdentifier, { ...params }) -> Llama2_7bChatInt8RunResponse</code>

#### Llama2_7bChatFp16

Types:

- <code><a href="./src/resources/ai/model/text-generation/llama-2-7b-chat-fp16.ts">Llama2_7bChatFp16RunResponse</a></code>

Methods:

- <code title="post /apiv4/accounts/{account_identifier}/ai/run/@cf/meta/llama-2-7b-chat-fp16">client.ai.model.textGeneration.llama2_7bChatFp16.<a href="./src/resources/ai/model/text-generation/llama-2-7b-chat-fp16.ts">run</a>(accountIdentifier, { ...params }) -> Llama2_7bChatFp16RunResponse</code>

#### Mistral7bInstructV0_1

Types:

- <code><a href="./src/resources/ai/model/text-generation/mistral-7b-instruct-v0-1.ts">Mistral7bInstructV0_1RunResponse</a></code>

Methods:

- <code title="post /apiv4/accounts/{account_identifier}/ai/run/@cf/mistral/mistral-7b-instruct-v0.1">client.ai.model.textGeneration.mistral7bInstructV0_1.<a href="./src/resources/ai/model/text-generation/mistral-7b-instruct-v0-1.ts">run</a>(accountIdentifier, { ...params }) -> Mistral7bInstructV0_1RunResponse</code>

### Translation

#### M2m100_1_2b

Types:

- <code><a href="./src/resources/ai/model/translation/m2m100-1-2b.ts">M2m100_1_2bRunResponse</a></code>

Methods:

- <code title="post /apiv4/accounts/{account_identifier}/ai/run/@cf/meta/m2m100-1.2b">client.ai.model.translation.m2m100_1_2b.<a href="./src/resources/ai/model/translation/m2m100-1-2b.ts">run</a>(accountIdentifier, { ...params }) -> M2m100_1_2bRunResponse</code>

# Alerting

## V3

### Destinations

#### Webhooks

Types:

- <code><a href="./src/resources/alerting/v3/destinations/webhooks.ts">WebhookUpdateResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/alerting/v3/destinations/webhooks/{webhook_id}">client.alerting.v3.destinations.webhooks.<a href="./src/resources/alerting/v3/destinations/webhooks.ts">update</a>(accountId, webhookId, { ...params }) -> WebhookUpdateResponse</code>

### History

Types:

- <code><a href="./src/resources/alerting/v3/history.ts">HistoryListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/alerting/v3/history">client.alerting.v3.history.<a href="./src/resources/alerting/v3/history.ts">list</a>(accountId, { ...params }) -> HistoryListResponsesPage</code>

### Policies

Types:

- <code><a href="./src/resources/alerting/v3/policies.ts">PolicyCreateResponse</a></code>
- <code><a href="./src/resources/alerting/v3/policies.ts">PolicyRetrieveResponse</a></code>
- <code><a href="./src/resources/alerting/v3/policies.ts">PolicyUpdateResponse</a></code>
- <code><a href="./src/resources/alerting/v3/policies.ts">PolicyListResponse</a></code>
- <code><a href="./src/resources/alerting/v3/policies.ts">PolicyDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/alerting/v3/policies">client.alerting.v3.policies.<a href="./src/resources/alerting/v3/policies.ts">create</a>(accountId, { ...params }) -> PolicyCreateResponse</code>
- <code title="get /accounts/{account_id}/alerting/v3/policies/{policy_id}">client.alerting.v3.policies.<a href="./src/resources/alerting/v3/policies.ts">retrieve</a>(accountId, policyId) -> PolicyRetrieveResponse</code>
- <code title="put /accounts/{account_id}/alerting/v3/policies/{policy_id}">client.alerting.v3.policies.<a href="./src/resources/alerting/v3/policies.ts">update</a>(accountId, policyId, { ...params }) -> PolicyUpdateResponse</code>
- <code title="get /accounts/{account_id}/alerting/v3/policies">client.alerting.v3.policies.<a href="./src/resources/alerting/v3/policies.ts">list</a>(accountId) -> PolicyListResponse</code>
- <code title="delete /accounts/{account_id}/alerting/v3/policies/{policy_id}">client.alerting.v3.policies.<a href="./src/resources/alerting/v3/policies.ts">delete</a>(accountId, policyId) -> PolicyDeleteResponse</code>

# Addressing

## Prefixes

### Bgp

#### Prefixes

Types:

- <code><a href="./src/resources/addressing/prefixes/bgp/prefixes.ts">PrefixRetrieveResponse</a></code>
- <code><a href="./src/resources/addressing/prefixes/bgp/prefixes.ts">PrefixUpdateResponse</a></code>
- <code><a href="./src/resources/addressing/prefixes/bgp/prefixes.ts">PrefixListResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/addressing/prefixes/{prefix_identifier}/bgp/prefixes/{bgp_prefix_identifier}">client.addressing.prefixes.bgp.prefixes.<a href="./src/resources/addressing/prefixes/bgp/prefixes.ts">retrieve</a>(accountIdentifier, prefixIdentifier, bgpPrefixIdentifier) -> PrefixRetrieveResponse</code>
- <code title="patch /accounts/{account_identifier}/addressing/prefixes/{prefix_identifier}/bgp/prefixes/{bgp_prefix_identifier}">client.addressing.prefixes.bgp.prefixes.<a href="./src/resources/addressing/prefixes/bgp/prefixes.ts">update</a>(accountIdentifier, prefixIdentifier, bgpPrefixIdentifier, { ...params }) -> PrefixUpdateResponse</code>
- <code title="get /accounts/{account_identifier}/addressing/prefixes/{prefix_identifier}/bgp/prefixes">client.addressing.prefixes.bgp.prefixes.<a href="./src/resources/addressing/prefixes/bgp/prefixes.ts">list</a>(accountIdentifier, prefixIdentifier) -> PrefixListResponse</code>

# HyperdriveConfigs

Types:

- <code><a href="./src/resources/hyperdrive-configs.ts">HyperdriveConfigRetrieveResponse</a></code>
- <code><a href="./src/resources/hyperdrive-configs.ts">HyperdriveConfigUpdateResponse</a></code>
- <code><a href="./src/resources/hyperdrive-configs.ts">HyperdriveConfigDeleteResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/hyperdrive/configs/{hyperdrive_identifier}">client.hyperdriveConfigs.<a href="./src/resources/hyperdrive-configs.ts">retrieve</a>(accountIdentifier, hyperdriveIdentifier) -> HyperdriveConfigRetrieveResponse</code>
- <code title="put /accounts/{account_identifier}/hyperdrive/configs/{hyperdrive_identifier}">client.hyperdriveConfigs.<a href="./src/resources/hyperdrive-configs.ts">update</a>(accountIdentifier, hyperdriveIdentifier, { ...params }) -> HyperdriveConfigUpdateResponse</code>
- <code title="delete /accounts/{account_identifier}/hyperdrive/configs/{hyperdrive_identifier}">client.hyperdriveConfigs.<a href="./src/resources/hyperdrive-configs.ts">delete</a>(accountIdentifier, hyperdriveIdentifier) -> HyperdriveConfigDeleteResponse</code>

# ImagesV2s

Types:

- <code><a href="./src/resources/images-v2s.ts">ImagesImagesListResponseV2</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/images/v2">client.imagesV2s.<a href="./src/resources/images-v2s.ts">list</a>(accountIdentifier, { ...params }) -> ImagesImagesListResponseV2</code>

# Intel

## IndicatorFeeds

Types:

- <code><a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">IndicatorFeedCreateResponse</a></code>
- <code><a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">IndicatorFeedRetrieveResponse</a></code>
- <code><a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">IndicatorFeedListResponse</a></code>
- <code><a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">IndicatorFeedDataResponse</a></code>
- <code><a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">IndicatorFeedSnapshotResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/intel/indicator-feeds">client.intel.indicatorFeeds.<a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">create</a>(accountIdentifier, { ...params }) -> IndicatorFeedCreateResponse</code>
- <code title="get /accounts/{account_identifier}/intel/indicator-feeds/{feed_id}">client.intel.indicatorFeeds.<a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">retrieve</a>(accountIdentifier, feedId) -> IndicatorFeedRetrieveResponse</code>
- <code title="get /accounts/{account_identifier}/intel/indicator-feeds">client.intel.indicatorFeeds.<a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">list</a>(accountIdentifier) -> IndicatorFeedListResponse</code>
- <code title="get /accounts/{account_identifier}/intel/indicator-feeds/{feed_id}/data">client.intel.indicatorFeeds.<a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">data</a>(accountIdentifier, feedId) -> string</code>
- <code title="put /accounts/{account_identifier}/intel/indicator-feeds/{feed_id}/snapshot">client.intel.indicatorFeeds.<a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">snapshot</a>(accountIdentifier, feedId, { ...params }) -> IndicatorFeedSnapshotResponse</code>

### Permissions

Types:

- <code><a href="./src/resources/intel/indicator-feeds/permissions.ts">PermissionAddResponse</a></code>

Methods:

- <code title="put /accounts/{account_identifier}/intel/indicator-feeds/permissions/add">client.intel.indicatorFeeds.permissions.<a href="./src/resources/intel/indicator-feeds/permissions.ts">add</a>(accountIdentifier, { ...params }) -> PermissionAddResponse</code>

# WebAnalytics

## SiteInfo

Types:

- <code><a href="./src/resources/web-analytics/site-info.ts">SiteInfoRetrieveResponse</a></code>
- <code><a href="./src/resources/web-analytics/site-info.ts">SiteInfoUpdateResponse</a></code>
- <code><a href="./src/resources/web-analytics/site-info.ts">SiteInfoListResponse</a></code>
- <code><a href="./src/resources/web-analytics/site-info.ts">SiteInfoDeleteResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/rum/site_info/{site_identifier}">client.webAnalytics.siteInfo.<a href="./src/resources/web-analytics/site-info.ts">retrieve</a>(accountIdentifier, siteIdentifier) -> SiteInfoRetrieveResponse</code>
- <code title="put /accounts/{account_identifier}/rum/site_info/{site_identifier}">client.webAnalytics.siteInfo.<a href="./src/resources/web-analytics/site-info.ts">update</a>(accountIdentifier, siteIdentifier, { ...params }) -> SiteInfoUpdateResponse</code>
- <code title="get /accounts/{account_identifier}/rum/site_info/list">client.webAnalytics.siteInfo.<a href="./src/resources/web-analytics/site-info.ts">list</a>(accountIdentifier, { ...params }) -> SiteInfoListResponsesPage</code>
- <code title="delete /accounts/{account_identifier}/rum/site_info/{site_identifier}">client.webAnalytics.siteInfo.<a href="./src/resources/web-analytics/site-info.ts">delete</a>(accountIdentifier, siteIdentifier) -> SiteInfoDeleteResponse</code>

## Rules

Types:

- <code><a href="./src/resources/web-analytics/rules.ts">RuleUpdateResponse</a></code>
- <code><a href="./src/resources/web-analytics/rules.ts">RuleListResponse</a></code>
- <code><a href="./src/resources/web-analytics/rules.ts">RuleDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/rum/v2/{ruleset_identifier}/rule">client.webAnalytics.rules.<a href="./src/resources/web-analytics/rules.ts">create</a>(accountIdentifier, rulesetIdentifier, { ...params }) -> Rule</code>
- <code title="post /accounts/{account_identifier}/rum/v2/{ruleset_identifier}/rules">client.webAnalytics.rules.<a href="./src/resources/web-analytics/rules.ts">update</a>(accountIdentifier, rulesetIdentifier, { ...params }) -> RuleUpdateResponse</code>
- <code title="get /accounts/{account_identifier}/rum/v2/{ruleset_identifier}/rules">client.webAnalytics.rules.<a href="./src/resources/web-analytics/rules.ts">list</a>(accountIdentifier, rulesetIdentifier) -> RuleListResponse</code>
- <code title="delete /accounts/{account_identifier}/rum/v2/{ruleset_identifier}/rule/{rule_identifier}">client.webAnalytics.rules.<a href="./src/resources/web-analytics/rules.ts">delete</a>(accountIdentifier, rulesetIdentifier, ruleIdentifier) -> RuleDeleteResponse</code>

# Stream

## AudioTracks

Types:

- <code><a href="./src/resources/stream/audio-tracks.ts">AudioTrackListResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/stream/{identifier}/audio">client.stream.audioTracks.<a href="./src/resources/stream/audio-tracks.ts">list</a>(accountIdentifier, identifier) -> AudioTrackListResponse</code>

# Filters

Types:

- <code><a href="./src/resources/filters.ts">FilterDeleteResponse</a></code>

Methods:

- <code title="delete /zones/{zone_identifier}/filters">client.filters.<a href="./src/resources/filters.ts">delete</a>(zoneIdentifier) -> FilterDeleteResponse</code>

# FirewallRules

Types:

- <code><a href="./src/resources/firewall-rules.ts">FirewallRuleUpdateResponse</a></code>
- <code><a href="./src/resources/firewall-rules.ts">FirewallRuleDeleteResponse</a></code>

Methods:

- <code title="patch /zones/{zone_identifier}/firewall/rules/{id}">client.firewallRules.<a href="./src/resources/firewall-rules.ts">update</a>(zoneIdentifier, id, { ...params }) -> FirewallRuleUpdateResponse</code>
- <code title="delete /zones/{zone_identifier}/firewall/rules">client.firewallRules.<a href="./src/resources/firewall-rules.ts">delete</a>(zoneIdentifier) -> FirewallRuleDeleteResponse</code>

# Healthchecks

Methods:

- <code title="patch /zones/{zone_identifier}/healthchecks/{identifier}">client.healthchecks.<a href="./src/resources/healthchecks.ts">update</a>(zoneIdentifier, identifier, { ...params }) -> HealthchecksSingleResponse</code>

# Hostnames

## Settings

Types:

- <code><a href="./src/resources/hostnames/settings.ts">SettingListResponse</a></code>
- <code><a href="./src/resources/hostnames/settings.ts">SettingDeleteResponse</a></code>
- <code><a href="./src/resources/hostnames/settings.ts">SettingAddResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/hostnames/settings/{tls_setting}">client.hostnames.settings.<a href="./src/resources/hostnames/settings.ts">list</a>(zoneIdentifier, tlsSetting) -> SettingListResponse</code>
- <code title="delete /zones/{zone_identifier}/hostnames/settings/{tls_setting}/{hostname}">client.hostnames.settings.<a href="./src/resources/hostnames/settings.ts">delete</a>(zoneIdentifier, tlsSetting, hostname) -> SettingDeleteResponse</code>
- <code title="put /zones/{zone_identifier}/hostnames/settings/{tls_setting}/{hostname}">client.hostnames.settings.<a href="./src/resources/hostnames/settings.ts">add</a>(zoneIdentifier, tlsSetting, hostname, { ...params }) -> SettingAddResponse</code>

# Pagerules

Methods:

- <code title="patch /zones/{zone_identifier}/pagerules/{identifier}">client.pagerules.<a href="./src/resources/pagerules.ts">update</a>(zoneIdentifier, identifier, { ...params }) -> PageruleResponseSingle</code>
