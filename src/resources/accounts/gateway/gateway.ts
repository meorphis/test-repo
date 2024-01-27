// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as GatewayAPI from 'cloudflare/resources/accounts/gateway/gateway';
import * as AppTypesAPI from 'cloudflare/resources/accounts/gateway/app-types';
import * as AuditSSHSettingsAPI from 'cloudflare/resources/accounts/gateway/audit-ssh-settings';
import * as CategoriesAPI from 'cloudflare/resources/accounts/gateway/categories';
import * as ConfigurationsAPI from 'cloudflare/resources/accounts/gateway/configurations';
import * as LocationsAPI from 'cloudflare/resources/accounts/gateway/locations';
import * as LoggingsAPI from 'cloudflare/resources/accounts/gateway/loggings';
import * as ProxyEndpointsAPI from 'cloudflare/resources/accounts/gateway/proxy-endpoints';
import * as RulesAPI from 'cloudflare/resources/accounts/gateway/rules';
import * as ListsAPI from 'cloudflare/resources/accounts/gateway/lists/lists';

export class Gateway extends APIResource {
  auditSSHSettings: AuditSSHSettingsAPI.AuditSSHSettings = new AuditSSHSettingsAPI.AuditSSHSettings(
    this._client,
  );
  categories: CategoriesAPI.Categories = new CategoriesAPI.Categories(this._client);
  appTypes: AppTypesAPI.AppTypes = new AppTypesAPI.AppTypes(this._client);
  configurations: ConfigurationsAPI.Configurations = new ConfigurationsAPI.Configurations(this._client);
  lists: ListsAPI.Lists = new ListsAPI.Lists(this._client);
  locations: LocationsAPI.Locations = new LocationsAPI.Locations(this._client);
  loggings: LoggingsAPI.Loggings = new LoggingsAPI.Loggings(this._client);
  proxyEndpoints: ProxyEndpointsAPI.ProxyEndpoints = new ProxyEndpointsAPI.ProxyEndpoints(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);

  /**
   * Creates a Zero Trust account with an existing Cloudflare account.
   */
  zeroTrustAccountsCreateZeroTrustAccount(
    identifier: unknown,
    body: GatewayZeroTrustAccountsCreateZeroTrustAccountParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GatewayZeroTrustAccountsCreateZeroTrustAccountResponse> {
    return this._client.post(`/accounts/${identifier}/gateway`, { body, ...options });
  }

  /**
   * Gets information about the current Zero Trust account.
   */
  zeroTrustAccountsGetZeroTrustAccountInformation(
    identifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GatewayZeroTrustAccountsGetZeroTrustAccountInformationResponse> {
    return this._client.get(`/accounts/${identifier}/gateway`, options);
  }
}

export interface GatewayZeroTrustAccountsCreateZeroTrustAccountResponse {
  errors?: Array<GatewayZeroTrustAccountsCreateZeroTrustAccountResponse.Error>;

  messages?: Array<GatewayZeroTrustAccountsCreateZeroTrustAccountResponse.Message>;

  result?: GatewayZeroTrustAccountsCreateZeroTrustAccountResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace GatewayZeroTrustAccountsCreateZeroTrustAccountResponse {
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
     * Cloudflare account ID.
     */
    id?: string;

    /**
     * Gateway internal ID.
     */
    gateway_tag?: string;

    /**
     * The name of the provider. Usually Cloudflare.
     */
    provider_name?: string;
  }
}

export interface GatewayZeroTrustAccountsGetZeroTrustAccountInformationResponse {
  errors?: Array<GatewayZeroTrustAccountsGetZeroTrustAccountInformationResponse.Error>;

  messages?: Array<GatewayZeroTrustAccountsGetZeroTrustAccountInformationResponse.Message>;

  result?: GatewayZeroTrustAccountsGetZeroTrustAccountInformationResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace GatewayZeroTrustAccountsGetZeroTrustAccountInformationResponse {
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
     * Cloudflare account ID.
     */
    id?: string;

    /**
     * Gateway internal ID.
     */
    gateway_tag?: string;

    /**
     * The name of the provider. Usually Cloudflare.
     */
    provider_name?: string;
  }
}

export interface GatewayZeroTrustAccountsCreateZeroTrustAccountParams {
  /**
   * Cloudflare account ID.
   */
  account_id: string;
}

export namespace Gateway {
  export import GatewayZeroTrustAccountsCreateZeroTrustAccountResponse = GatewayAPI.GatewayZeroTrustAccountsCreateZeroTrustAccountResponse;
  export import GatewayZeroTrustAccountsGetZeroTrustAccountInformationResponse = GatewayAPI.GatewayZeroTrustAccountsGetZeroTrustAccountInformationResponse;
  export import GatewayZeroTrustAccountsCreateZeroTrustAccountParams = GatewayAPI.GatewayZeroTrustAccountsCreateZeroTrustAccountParams;
  export import AuditSSHSettings = AuditSSHSettingsAPI.AuditSSHSettings;
  export import AuditSSHSettingRetrieveResponse = AuditSSHSettingsAPI.AuditSSHSettingRetrieveResponse;
  export import AuditSSHSettingUpdateResponse = AuditSSHSettingsAPI.AuditSSHSettingUpdateResponse;
  export import AuditSSHSettingUpdateParams = AuditSSHSettingsAPI.AuditSSHSettingUpdateParams;
  export import Categories = CategoriesAPI.Categories;
  export import CategoryZeroTrustGatewayCategoriesListCategoriesResponse = CategoriesAPI.CategoryZeroTrustGatewayCategoriesListCategoriesResponse;
  export import AppTypes = AppTypesAPI.AppTypes;
  export import AppTypeZeroTrustGatewayApplicationAndApplicationTypeMappingsListApplicationAndApplicationTypeMappingsResponse = AppTypesAPI.AppTypeZeroTrustGatewayApplicationAndApplicationTypeMappingsListApplicationAndApplicationTypeMappingsResponse;
  export import Configurations = ConfigurationsAPI.Configurations;
  export import ConfigurationZeroTrustAccountsGetZeroTrustAccountConfigurationResponse = ConfigurationsAPI.ConfigurationZeroTrustAccountsGetZeroTrustAccountConfigurationResponse;
  export import ConfigurationZeroTrustAccountsPatchZeroTrustAccountConfigurationResponse = ConfigurationsAPI.ConfigurationZeroTrustAccountsPatchZeroTrustAccountConfigurationResponse;
  export import ConfigurationZeroTrustAccountsUpdateZeroTrustAccountConfigurationResponse = ConfigurationsAPI.ConfigurationZeroTrustAccountsUpdateZeroTrustAccountConfigurationResponse;
  export import ConfigurationZeroTrustAccountsPatchZeroTrustAccountConfigurationParams = ConfigurationsAPI.ConfigurationZeroTrustAccountsPatchZeroTrustAccountConfigurationParams;
  export import ConfigurationZeroTrustAccountsUpdateZeroTrustAccountConfigurationParams = ConfigurationsAPI.ConfigurationZeroTrustAccountsUpdateZeroTrustAccountConfigurationParams;
  export import Lists = ListsAPI.Lists;
  export import ListRetrieveResponse = ListsAPI.ListRetrieveResponse;
  export import ListUpdateResponse = ListsAPI.ListUpdateResponse;
  export import ListDeleteResponse = ListsAPI.ListDeleteResponse;
  export import ListPatchResponse = ListsAPI.ListPatchResponse;
  export import ListZeroTrustListsCreateZeroTrustListResponse = ListsAPI.ListZeroTrustListsCreateZeroTrustListResponse;
  export import ListZeroTrustListsListZeroTrustListsResponse = ListsAPI.ListZeroTrustListsListZeroTrustListsResponse;
  export import ListUpdateParams = ListsAPI.ListUpdateParams;
  export import ListPatchParams = ListsAPI.ListPatchParams;
  export import ListZeroTrustListsCreateZeroTrustListParams = ListsAPI.ListZeroTrustListsCreateZeroTrustListParams;
  export import Locations = LocationsAPI.Locations;
  export import LocationRetrieveResponse = LocationsAPI.LocationRetrieveResponse;
  export import LocationUpdateResponse = LocationsAPI.LocationUpdateResponse;
  export import LocationDeleteResponse = LocationsAPI.LocationDeleteResponse;
  export import LocationZeroTrustGatewayLocationsCreateZeroTrustGatewayLocationResponse = LocationsAPI.LocationZeroTrustGatewayLocationsCreateZeroTrustGatewayLocationResponse;
  export import LocationZeroTrustGatewayLocationsListZeroTrustGatewayLocationsResponse = LocationsAPI.LocationZeroTrustGatewayLocationsListZeroTrustGatewayLocationsResponse;
  export import LocationUpdateParams = LocationsAPI.LocationUpdateParams;
  export import LocationZeroTrustGatewayLocationsCreateZeroTrustGatewayLocationParams = LocationsAPI.LocationZeroTrustGatewayLocationsCreateZeroTrustGatewayLocationParams;
  export import Loggings = LoggingsAPI.Loggings;
  export import LoggingZeroTrustAccountsGetLoggingSettingsForTheZeroTrustAccountResponse = LoggingsAPI.LoggingZeroTrustAccountsGetLoggingSettingsForTheZeroTrustAccountResponse;
  export import LoggingZeroTrustAccountsUpdateLoggingSettingsForTheZeroTrustAccountResponse = LoggingsAPI.LoggingZeroTrustAccountsUpdateLoggingSettingsForTheZeroTrustAccountResponse;
  export import LoggingZeroTrustAccountsUpdateLoggingSettingsForTheZeroTrustAccountParams = LoggingsAPI.LoggingZeroTrustAccountsUpdateLoggingSettingsForTheZeroTrustAccountParams;
  export import ProxyEndpoints = ProxyEndpointsAPI.ProxyEndpoints;
  export import ProxyEndpointRetrieveResponse = ProxyEndpointsAPI.ProxyEndpointRetrieveResponse;
  export import ProxyEndpointUpdateResponse = ProxyEndpointsAPI.ProxyEndpointUpdateResponse;
  export import ProxyEndpointDeleteResponse = ProxyEndpointsAPI.ProxyEndpointDeleteResponse;
  export import ProxyEndpointZeroTrustGatewayProxyEndpointsCreateProxyEndpointResponse = ProxyEndpointsAPI.ProxyEndpointZeroTrustGatewayProxyEndpointsCreateProxyEndpointResponse;
  export import ProxyEndpointZeroTrustGatewayProxyEndpointsListProxyEndpointsResponse = ProxyEndpointsAPI.ProxyEndpointZeroTrustGatewayProxyEndpointsListProxyEndpointsResponse;
  export import ProxyEndpointUpdateParams = ProxyEndpointsAPI.ProxyEndpointUpdateParams;
  export import ProxyEndpointZeroTrustGatewayProxyEndpointsCreateProxyEndpointParams = ProxyEndpointsAPI.ProxyEndpointZeroTrustGatewayProxyEndpointsCreateProxyEndpointParams;
  export import Rules = RulesAPI.Rules;
  export import RuleRetrieveResponse = RulesAPI.RuleRetrieveResponse;
  export import RuleUpdateResponse = RulesAPI.RuleUpdateResponse;
  export import RuleDeleteResponse = RulesAPI.RuleDeleteResponse;
  export import RuleZeroTrustGatewayRulesCreateZeroTrustGatewayRuleResponse = RulesAPI.RuleZeroTrustGatewayRulesCreateZeroTrustGatewayRuleResponse;
  export import RuleZeroTrustGatewayRulesListZeroTrustGatewayRulesResponse = RulesAPI.RuleZeroTrustGatewayRulesListZeroTrustGatewayRulesResponse;
  export import RuleUpdateParams = RulesAPI.RuleUpdateParams;
  export import RuleZeroTrustGatewayRulesCreateZeroTrustGatewayRuleParams = RulesAPI.RuleZeroTrustGatewayRulesCreateZeroTrustGatewayRuleParams;
}
