// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as SchemasAPI from 'cloudflare/resources/zones/api-gateway/schemas';

export class Schemas extends APIResource {
  /**
   * Retrieve operations and features as OpenAPI schemas
   */
  apiShieldEndpointManagementRetrieveOperationsAndFeaturesAsOpenAPISchemas(
    zoneId: string,
    query?: SchemaAPIShieldEndpointManagementRetrieveOperationsAndFeaturesAsOpenAPISchemasParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SchemaAPIShieldEndpointManagementRetrieveOperationsAndFeaturesAsOpenAPISchemasResponse>;
  apiShieldEndpointManagementRetrieveOperationsAndFeaturesAsOpenAPISchemas(
    zoneId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SchemaAPIShieldEndpointManagementRetrieveOperationsAndFeaturesAsOpenAPISchemasResponse>;
  apiShieldEndpointManagementRetrieveOperationsAndFeaturesAsOpenAPISchemas(
    zoneId: string,
    query:
      | SchemaAPIShieldEndpointManagementRetrieveOperationsAndFeaturesAsOpenAPISchemasParams
      | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SchemaAPIShieldEndpointManagementRetrieveOperationsAndFeaturesAsOpenAPISchemasResponse> {
    if (isRequestOptions(query)) {
      return this.apiShieldEndpointManagementRetrieveOperationsAndFeaturesAsOpenAPISchemas(zoneId, {}, query);
    }
    return this._client.get(`/zones/${zoneId}/api_gateway/schemas`, { query, ...options });
  }
}

export interface SchemaAPIShieldEndpointManagementRetrieveOperationsAndFeaturesAsOpenAPISchemasResponse {
  errors?: Array<SchemaAPIShieldEndpointManagementRetrieveOperationsAndFeaturesAsOpenAPISchemasResponse.Error>;

  messages?: Array<SchemaAPIShieldEndpointManagementRetrieveOperationsAndFeaturesAsOpenAPISchemasResponse.Message>;

  result?: SchemaAPIShieldEndpointManagementRetrieveOperationsAndFeaturesAsOpenAPISchemasResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace SchemaAPIShieldEndpointManagementRetrieveOperationsAndFeaturesAsOpenAPISchemasResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    schemas?: Array<unknown>;

    timestamp?: string;
  }
}

export interface SchemaAPIShieldEndpointManagementRetrieveOperationsAndFeaturesAsOpenAPISchemasParams {
  /**
   * Add feature(s) to the results. The feature name that is given here corresponds
   * to the resulting feature object. Have a look at the top-level object description
   * for more details on the specific meaning.
   */
  feature?: Array<'thresholds' | 'parameter_schemas' | 'schema_info'>;

  /**
   * Receive schema only for the given host(s).
   */
  host?: Array<string>;
}

export namespace Schemas {
  export import SchemaAPIShieldEndpointManagementRetrieveOperationsAndFeaturesAsOpenAPISchemasResponse = SchemasAPI.SchemaAPIShieldEndpointManagementRetrieveOperationsAndFeaturesAsOpenAPISchemasResponse;
  export import SchemaAPIShieldEndpointManagementRetrieveOperationsAndFeaturesAsOpenAPISchemasParams = SchemasAPI.SchemaAPIShieldEndpointManagementRetrieveOperationsAndFeaturesAsOpenAPISchemasParams;
}
