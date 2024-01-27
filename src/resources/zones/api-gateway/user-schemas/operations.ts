// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as OperationsAPI from 'cloudflare/resources/zones/api-gateway/user-schemas/operations';

export class Operations extends APIResource {
  /**
   * Retrieves all operations from the schema. Operations that already exist in API
   * Shield Endpoint Management will be returned as full operations.
   */
  list(
    zoneId: string,
    schemaId: string,
    query?: OperationListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OperationListResponse>;
  list(
    zoneId: string,
    schemaId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OperationListResponse>;
  list(
    zoneId: string,
    schemaId: string,
    query: OperationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<OperationListResponse> {
    if (isRequestOptions(query)) {
      return this.list(zoneId, schemaId, {}, query);
    }
    return this._client.get(`/zones/${zoneId}/api_gateway/user_schemas/${schemaId}/operations`, {
      query,
      ...options,
    });
  }
}

export interface OperationListResponse {
  errors?: Array<OperationListResponse.Error>;

  messages?: Array<OperationListResponse.Message>;

  result?: Array<OperationListResponse.AvFlf4mpOperation | OperationListResponse.AvFlf4mpBasicOperation>;

  result_info?: OperationListResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace OperationListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface AvFlf4mpOperation {
    /**
     * The endpoint which can contain path parameter templates in curly braces, each
     * will be replaced from left to right with {varN}, starting with {var1}, during
     * insertion. This will further be Cloudflare-normalized upon insertion. See:
     * https://developers.cloudflare.com/rules/normalization/how-it-works/.
     */
    endpoint?: string;

    features?:
      | AvFlf4mpOperation.AvFlf4mpOperationFeatureThresholds
      | AvFlf4mpOperation.AvFlf4mpOperationFeatureParameterSchemas;

    /**
     * RFC3986-compliant host.
     */
    host?: string;

    last_updated?: string;

    /**
     * The HTTP method used to access the endpoint.
     */
    method?: 'GET' | 'POST' | 'HEAD' | 'OPTIONS' | 'PUT' | 'DELETE' | 'CONNECT' | 'PATCH' | 'TRACE';

    /**
     * UUID identifier
     */
    operation_id?: string;
  }

  export namespace AvFlf4mpOperation {
    export interface AvFlf4mpOperationFeatureThresholds {
      thresholds?: AvFlf4mpOperationFeatureThresholds.Thresholds;
    }

    export namespace AvFlf4mpOperationFeatureThresholds {
      export interface Thresholds {
        /**
         * The total number of auth-ids seen across this calculation.
         */
        auth_id_tokens?: number;

        /**
         * The number of data points used for the threshold suggestion calculation.
         */
        data_points?: number;

        last_updated?: string;

        /**
         * The p50 quantile of requests (in period_seconds).
         */
        p50?: number;

        /**
         * The p90 quantile of requests (in period_seconds).
         */
        p90?: number;

        /**
         * The p99 quantile of requests (in period_seconds).
         */
        p99?: number;

        /**
         * The period over which this threshold is suggested.
         */
        period_seconds?: number;

        /**
         * The estimated number of requests covered by these calculations.
         */
        requests?: number;

        /**
         * The suggested threshold in requests done by the same auth_id or period_seconds.
         */
        suggested_threshold?: number;
      }
    }

    export interface AvFlf4mpOperationFeatureParameterSchemas {
      parameter_schemas: AvFlf4mpOperationFeatureParameterSchemas.ParameterSchemas;
    }

    export namespace AvFlf4mpOperationFeatureParameterSchemas {
      export interface ParameterSchemas {
        last_updated?: string;

        /**
         * An operation schema object containing a response.
         */
        parameter_schemas?: ParameterSchemas.ParameterSchemas;
      }

      export namespace ParameterSchemas {
        /**
         * An operation schema object containing a response.
         */
        export interface ParameterSchemas {
          /**
           * An array containing the learned parameter schemas.
           */
          parameters?: Array<unknown>;

          /**
           * An empty response object. This field is required to yield a valid operation
           * schema.
           */
          responses?: unknown | null;
        }
      }
    }
  }

  export interface AvFlf4mpBasicOperation {
    /**
     * The endpoint which can contain path parameter templates in curly braces, each
     * will be replaced from left to right with {varN}, starting with {var1}, during
     * insertion. This will further be Cloudflare-normalized upon insertion. See:
     * https://developers.cloudflare.com/rules/normalization/how-it-works/.
     */
    endpoint: string;

    /**
     * RFC3986-compliant host.
     */
    host: string;

    /**
     * The HTTP method used to access the endpoint.
     */
    method: 'GET' | 'POST' | 'HEAD' | 'OPTIONS' | 'PUT' | 'DELETE' | 'CONNECT' | 'PATCH' | 'TRACE';
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

export interface OperationListParams {
  /**
   * Filter results to only include endpoints containing this pattern.
   */
  endpoint?: string;

  /**
   * Add feature(s) to the results. The feature name that is given here corresponds
   * to the resulting feature object. Have a look at the top-level object description
   * for more details on the specific meaning.
   */
  feature?: Array<'thresholds' | 'parameter_schemas' | 'schema_info'>;

  /**
   * Filter results to only include the specified hosts.
   */
  host?: Array<string>;

  /**
   * Filter results to only include the specified HTTP methods.
   */
  method?: Array<string>;

  /**
   * Filter results by whether operations exist in API Shield Endpoint Management or
   * not. `new` will just return operations from the schema that do not exist in API
   * Shield Endpoint Management. `existing` will just return operations from the
   * schema that already exist in API Shield Endpoint Management.
   */
  operation_status?: 'new' | 'existing';

  /**
   * Page number of paginated results.
   */
  page?: unknown;

  /**
   * Maximum number of results per page.
   */
  per_page?: unknown;
}

export namespace Operations {
  export import OperationListResponse = OperationsAPI.OperationListResponse;
  export import OperationListParams = OperationsAPI.OperationListParams;
}
