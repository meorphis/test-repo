// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as AppTypesAPI from 'cloudflare/resources/accounts/gateway/app-types';

export class AppTypes extends APIResource {
  /**
   * Fetches all application and application type mappings.
   */
  zeroTrustGatewayApplicationAndApplicationTypeMappingsListApplicationAndApplicationTypeMappings(
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AppTypeZeroTrustGatewayApplicationAndApplicationTypeMappingsListApplicationAndApplicationTypeMappingsResponse> {
    return this._client.get(`/accounts/${identifier}/gateway/app_types`, options);
  }
}

export interface AppTypeZeroTrustGatewayApplicationAndApplicationTypeMappingsListApplicationAndApplicationTypeMappingsResponse {
  errors?: Array<AppTypeZeroTrustGatewayApplicationAndApplicationTypeMappingsListApplicationAndApplicationTypeMappingsResponse.Error>;

  messages?: Array<AppTypeZeroTrustGatewayApplicationAndApplicationTypeMappingsListApplicationAndApplicationTypeMappingsResponse.Message>;

  result?: Array<
    | AppTypeZeroTrustGatewayApplicationAndApplicationTypeMappingsListApplicationAndApplicationTypeMappingsResponse.FE7OxcxuApplication
    | AppTypeZeroTrustGatewayApplicationAndApplicationTypeMappingsListApplicationAndApplicationTypeMappingsResponse.FE7OxcxuApplicationType
  >;

  result_info?: AppTypeZeroTrustGatewayApplicationAndApplicationTypeMappingsListApplicationAndApplicationTypeMappingsResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace AppTypeZeroTrustGatewayApplicationAndApplicationTypeMappingsListApplicationAndApplicationTypeMappingsResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface FE7OxcxuApplication {
    /**
     * The identifier for this application. There is only one application per ID.
     */
    id?: number;

    /**
     * The identifier for the type of this application. There can be many applications
     * with the same type. This refers to the `id` of a returned application type.
     */
    application_type_id?: number;

    created_at?: string;

    /**
     * The name of the application or application type.
     */
    name?: string;
  }

  export interface FE7OxcxuApplicationType {
    /**
     * The identifier for the type of this application. There can be many applications
     * with the same type. This refers to the `id` of a returned application type.
     */
    id?: number;

    created_at?: string;

    /**
     * A short summary of applications with this type.
     */
    description?: string;

    /**
     * The name of the application or application type.
     */
    name?: string;
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

export namespace AppTypes {
  export import AppTypeZeroTrustGatewayApplicationAndApplicationTypeMappingsListApplicationAndApplicationTypeMappingsResponse = AppTypesAPI.AppTypeZeroTrustGatewayApplicationAndApplicationTypeMappingsListApplicationAndApplicationTypeMappingsResponse;
}
