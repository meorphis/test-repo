// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as UserSchemasAPI from 'cloudflare/resources/zones/api-gateway/user-schemas/user-schemas';
import * as OperationsAPI from 'cloudflare/resources/zones/api-gateway/user-schemas/operations';
import { type Uploadable, multipartFormRequestOptions } from 'cloudflare/core';

export class UserSchemas extends APIResource {
  operations: OperationsAPI.Operations = new OperationsAPI.Operations(this._client);

  /**
   * Upload a schema to a zone
   */
  create(
    zoneId: string,
    body: UserSchemaCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserSchemaCreateResponse> {
    return this._client.post(
      `/zones/${zoneId}/api_gateway/user_schemas`,
      multipartFormRequestOptions({ body, ...options }),
    );
  }

  /**
   * Retrieve information about a specific schema on a zone
   */
  retrieve(
    zoneId: string,
    schemaId: string,
    query?: UserSchemaRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserSchemaRetrieveResponse>;
  retrieve(
    zoneId: string,
    schemaId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserSchemaRetrieveResponse>;
  retrieve(
    zoneId: string,
    schemaId: string,
    query: UserSchemaRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserSchemaRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(zoneId, schemaId, {}, query);
    }
    return this._client.get(`/zones/${zoneId}/api_gateway/user_schemas/${schemaId}`, { query, ...options });
  }

  /**
   * Enable validation for a schema
   */
  update(
    zoneId: string,
    schemaId: string,
    body: UserSchemaUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserSchemaUpdateResponse> {
    return this._client.patch(`/zones/${zoneId}/api_gateway/user_schemas/${schemaId}`, { body, ...options });
  }

  /**
   * Retrieve information about all schemas on a zone
   */
  list(
    zoneId: string,
    query?: UserSchemaListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserSchemaListResponse>;
  list(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<UserSchemaListResponse>;
  list(
    zoneId: string,
    query: UserSchemaListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserSchemaListResponse> {
    if (isRequestOptions(query)) {
      return this.list(zoneId, {}, query);
    }
    return this._client.get(`/zones/${zoneId}/api_gateway/user_schemas`, { query, ...options });
  }

  /**
   * Delete a schema
   */
  delete(
    zoneId: string,
    schemaId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserSchemaDeleteResponse> {
    return this._client.delete(`/zones/${zoneId}/api_gateway/user_schemas/${schemaId}`, options);
  }
}

export interface UserSchemaCreateResponse {
  errors?: Array<UserSchemaCreateResponse.Error>;

  messages?: Array<UserSchemaCreateResponse.Message>;

  result?: UserSchemaCreateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace UserSchemaCreateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    schema: Result.Schema;

    upload_details?: Result.UploadDetails;
  }

  export namespace Result {
    export interface Schema {
      created_at: string;

      /**
       * Kind of schema
       */
      kind: 'openapi_v3';

      /**
       * Name of the schema
       */
      name: string;

      /**
       * UUID identifier
       */
      schema_id: string;

      /**
       * Source of the schema
       */
      source?: string;

      /**
       * Flag whether schema is enabled for validation.
       */
      validation_enabled?: boolean;
    }

    export interface UploadDetails {
      /**
       * Diagnostic warning events that occurred during processing. These events are
       * non-critical errors found within the schema.
       */
      warnings?: Array<UploadDetails.Warning>;
    }

    export namespace UploadDetails {
      export interface Warning {
        /**
         * Code that identifies the event that occurred.
         */
        code: number;

        /**
         * JSONPath location(s) in the schema where these events were encountered. See
         * [https://goessner.net/articles/JsonPath/](https://goessner.net/articles/JsonPath/)
         * for JSONPath specification.
         */
        locations?: Array<string>;

        /**
         * Diagnostic message that describes the event.
         */
        message?: string;
      }
    }
  }
}

export interface UserSchemaRetrieveResponse {
  errors?: Array<UserSchemaRetrieveResponse.Error>;

  messages?: Array<UserSchemaRetrieveResponse.Message>;

  result?: UserSchemaRetrieveResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace UserSchemaRetrieveResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    created_at: string;

    /**
     * Kind of schema
     */
    kind: 'openapi_v3';

    /**
     * Name of the schema
     */
    name: string;

    /**
     * UUID identifier
     */
    schema_id: string;

    /**
     * Source of the schema
     */
    source?: string;

    /**
     * Flag whether schema is enabled for validation.
     */
    validation_enabled?: boolean;
  }
}

export interface UserSchemaUpdateResponse {
  errors?: Array<UserSchemaUpdateResponse.Error>;

  messages?: Array<UserSchemaUpdateResponse.Message>;

  result?: UserSchemaUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace UserSchemaUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    created_at: string;

    /**
     * Kind of schema
     */
    kind: 'openapi_v3';

    /**
     * Name of the schema
     */
    name: string;

    /**
     * UUID identifier
     */
    schema_id: string;

    /**
     * Source of the schema
     */
    source?: string;

    /**
     * Flag whether schema is enabled for validation.
     */
    validation_enabled?: boolean;
  }
}

export interface UserSchemaListResponse {
  errors?: Array<UserSchemaListResponse.Error>;

  messages?: Array<UserSchemaListResponse.Message>;

  result?: Array<UserSchemaListResponse.Result>;

  result_info?: UserSchemaListResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace UserSchemaListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    created_at: string;

    /**
     * Kind of schema
     */
    kind: 'openapi_v3';

    /**
     * Name of the schema
     */
    name: string;

    /**
     * UUID identifier
     */
    schema_id: string;

    /**
     * Source of the schema
     */
    source?: string;

    /**
     * Flag whether schema is enabled for validation.
     */
    validation_enabled?: boolean;
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

export interface UserSchemaDeleteResponse {
  errors?: Array<UserSchemaDeleteResponse.Error>;

  messages?: Array<UserSchemaDeleteResponse.Message>;

  result?: unknown | string | null;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace UserSchemaDeleteResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface UserSchemaCreateParams {
  /**
   * Schema file bytes
   */
  file: Uploadable;

  /**
   * Kind of schema
   */
  kind: 'openapi_v3';

  /**
   * Name of the schema
   */
  name?: string;

  /**
   * Flag whether schema is enabled for validation.
   */
  validation_enabled?: 'true' | 'false';
}

export interface UserSchemaRetrieveParams {
  /**
   * Omit the source-files of schemas and only retrieve their meta-data.
   */
  omit_source?: boolean;
}

export interface UserSchemaUpdateParams {
  validation_enabled?: unknown;
}

export interface UserSchemaListParams {
  /**
   * Omit the source-files of schemas and only retrieve their meta-data.
   */
  omit_source?: boolean;

  /**
   * Page number of paginated results.
   */
  page?: unknown;

  /**
   * Maximum number of results per page.
   */
  per_page?: unknown;

  /**
   * Flag whether schema is enabled for validation.
   */
  validation_enabled?: boolean;
}

export namespace UserSchemas {
  export import UserSchemaCreateResponse = UserSchemasAPI.UserSchemaCreateResponse;
  export import UserSchemaRetrieveResponse = UserSchemasAPI.UserSchemaRetrieveResponse;
  export import UserSchemaUpdateResponse = UserSchemasAPI.UserSchemaUpdateResponse;
  export import UserSchemaListResponse = UserSchemasAPI.UserSchemaListResponse;
  export import UserSchemaDeleteResponse = UserSchemasAPI.UserSchemaDeleteResponse;
  export import UserSchemaCreateParams = UserSchemasAPI.UserSchemaCreateParams;
  export import UserSchemaRetrieveParams = UserSchemasAPI.UserSchemaRetrieveParams;
  export import UserSchemaUpdateParams = UserSchemasAPI.UserSchemaUpdateParams;
  export import UserSchemaListParams = UserSchemasAPI.UserSchemaListParams;
  export import Operations = OperationsAPI.Operations;
  export import OperationListResponse = OperationsAPI.OperationListResponse;
  export import OperationListParams = OperationsAPI.OperationListParams;
}
