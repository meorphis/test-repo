// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as DiscoveryAPI from 'cloudflare/resources/zones/api-gateway/discovery';
import * as SchemasAPI from 'cloudflare/resources/zones/api-gateway/schemas';
import * as SettingsAPI from 'cloudflare/resources/zones/api-gateway/settings/settings';
import * as UserSchemasAPI from 'cloudflare/resources/zones/api-gateway/user-schemas/user-schemas';

export class APIGateway extends APIResource {
  discovery: DiscoveryAPI.Discovery = new DiscoveryAPI.Discovery(this._client);
  schemas: SchemasAPI.Schemas = new SchemasAPI.Schemas(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
  userSchemas: UserSchemasAPI.UserSchemas = new UserSchemasAPI.UserSchemas(this._client);
}

export namespace APIGateway {
  export import Discovery = DiscoveryAPI.Discovery;
  export import DiscoveryAPIShieldEndpointManagementRetrieveAPIDiscoveryResultsForAZoneResponse = DiscoveryAPI.DiscoveryAPIShieldEndpointManagementRetrieveAPIDiscoveryResultsForAZoneResponse;
  export import Schemas = SchemasAPI.Schemas;
  export import SchemaAPIShieldEndpointManagementRetrieveOperationsAndFeaturesAsOpenAPISchemasResponse = SchemasAPI.SchemaAPIShieldEndpointManagementRetrieveOperationsAndFeaturesAsOpenAPISchemasResponse;
  export import SchemaAPIShieldEndpointManagementRetrieveOperationsAndFeaturesAsOpenAPISchemasParams = SchemasAPI.SchemaAPIShieldEndpointManagementRetrieveOperationsAndFeaturesAsOpenAPISchemasParams;
  export import Settings = SettingsAPI.Settings;
  export import UserSchemas = UserSchemasAPI.UserSchemas;
  export import UserSchemaCreateResponse = UserSchemasAPI.UserSchemaCreateResponse;
  export import UserSchemaRetrieveResponse = UserSchemasAPI.UserSchemaRetrieveResponse;
  export import UserSchemaUpdateResponse = UserSchemasAPI.UserSchemaUpdateResponse;
  export import UserSchemaListResponse = UserSchemasAPI.UserSchemaListResponse;
  export import UserSchemaDeleteResponse = UserSchemasAPI.UserSchemaDeleteResponse;
  export import UserSchemaCreateParams = UserSchemasAPI.UserSchemaCreateParams;
  export import UserSchemaRetrieveParams = UserSchemasAPI.UserSchemaRetrieveParams;
  export import UserSchemaUpdateParams = UserSchemasAPI.UserSchemaUpdateParams;
  export import UserSchemaListParams = UserSchemasAPI.UserSchemaListParams;
}
