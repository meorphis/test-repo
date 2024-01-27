// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as RoutesAPI from 'cloudflare/resources/accounts/magic/routes';

export class Routes extends APIResource {
  /**
   * Get a specific Magic static route.
   */
  retrieve(
    accountIdentifier: string,
    routeIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RouteRetrieveResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/magic/routes/${routeIdentifier}`, options);
  }

  /**
   * Update a specific Magic static route. Use `?validate_only=true` as an optional
   * query parameter to run validation only without persisting changes.
   */
  update(
    accountIdentifier: string,
    routeIdentifier: string,
    body: RouteUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RouteUpdateResponse> {
    return this._client.put(`/accounts/${accountIdentifier}/magic/routes/${routeIdentifier}`, {
      body,
      ...options,
    });
  }

  /**
   * Delete multiple Magic static routes.
   */
  delete(
    accountIdentifier: string,
    body: RouteDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RouteDeleteResponse> {
    return this._client.delete(`/accounts/${accountIdentifier}/magic/routes`, { body, ...options });
  }

  /**
   * Disable and remove a specific Magic static route.
   */
  deleteMany(
    accountIdentifier: string,
    routeIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RouteDeleteManyResponse> {
    return this._client.delete(`/accounts/${accountIdentifier}/magic/routes/${routeIdentifier}`, options);
  }

  /**
   * Creates a new Magic static route. Use `?validate_only=true` as an optional query
   * parameter to run validation only without persisting changes.
   */
  magicStaticRoutesCreateRoutes(
    accountIdentifier: string,
    body: RouteMagicStaticRoutesCreateRoutesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RouteMagicStaticRoutesCreateRoutesResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/magic/routes`, { body, ...options });
  }

  /**
   * List all Magic static routes.
   */
  magicStaticRoutesListRoutes(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RouteMagicStaticRoutesListRoutesResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/magic/routes`, options);
  }

  /**
   * Update multiple Magic static routes. Use `?validate_only=true` as an optional
   * query parameter to run validation only without persisting changes. Only fields
   * for a route that need to be changed need be provided.
   */
  magicStaticRoutesUpdateManyRoutes(
    accountIdentifier: string,
    body: RouteMagicStaticRoutesUpdateManyRoutesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RouteMagicStaticRoutesUpdateManyRoutesResponse> {
    return this._client.put(`/accounts/${accountIdentifier}/magic/routes`, { body, ...options });
  }
}

export interface RouteRetrieveResponse {
  errors?: Array<RouteRetrieveResponse.Error>;

  messages?: Array<RouteRetrieveResponse.Message>;

  result?: RouteRetrieveResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace RouteRetrieveResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    route?: unknown;
  }
}

export interface RouteUpdateResponse {
  errors?: Array<RouteUpdateResponse.Error>;

  messages?: Array<RouteUpdateResponse.Message>;

  result?: RouteUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace RouteUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    modified?: boolean;

    modified_route?: unknown;
  }
}

export interface RouteDeleteResponse {
  errors?: Array<RouteDeleteResponse.Error>;

  messages?: Array<RouteDeleteResponse.Message>;

  result?: RouteDeleteResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace RouteDeleteResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    deleted?: boolean;

    deleted_routes?: unknown;
  }
}

export interface RouteDeleteManyResponse {
  errors?: Array<RouteDeleteManyResponse.Error>;

  messages?: Array<RouteDeleteManyResponse.Message>;

  result?: RouteDeleteManyResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace RouteDeleteManyResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    deleted?: boolean;

    deleted_route?: unknown;
  }
}

export interface RouteMagicStaticRoutesCreateRoutesResponse {
  errors?: Array<RouteMagicStaticRoutesCreateRoutesResponse.Error>;

  messages?: Array<RouteMagicStaticRoutesCreateRoutesResponse.Message>;

  result?: RouteMagicStaticRoutesCreateRoutesResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace RouteMagicStaticRoutesCreateRoutesResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    routes?: Array<Result.Route>;
  }

  export namespace Result {
    export interface Route {
      /**
       * The next-hop IP Address for the static route.
       */
      nexthop: string;

      /**
       * IP Prefix in Classless Inter-Domain Routing format.
       */
      prefix: string;

      /**
       * Priority of the static route.
       */
      priority: number;

      /**
       * Identifier
       */
      id?: string;

      /**
       * When the route was created.
       */
      created_on?: string;

      /**
       * An optional human provided description of the static route.
       */
      description?: string;

      /**
       * When the route was last modified.
       */
      modified_on?: string;

      /**
       * Used only for ECMP routes.
       */
      scope?: Route.Scope;

      /**
       * Optional weight of the ECMP scope - if provided.
       */
      weight?: number;
    }

    export namespace Route {
      /**
       * Used only for ECMP routes.
       */
      export interface Scope {
        /**
         * List of colo names for the ECMP scope.
         */
        colo_names?: Array<string>;

        /**
         * List of colo regions for the ECMP scope.
         */
        colo_regions?: Array<string>;
      }
    }
  }
}

export interface RouteMagicStaticRoutesListRoutesResponse {
  errors?: Array<RouteMagicStaticRoutesListRoutesResponse.Error>;

  messages?: Array<RouteMagicStaticRoutesListRoutesResponse.Message>;

  result?: RouteMagicStaticRoutesListRoutesResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace RouteMagicStaticRoutesListRoutesResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    routes?: Array<Result.Route>;
  }

  export namespace Result {
    export interface Route {
      /**
       * The next-hop IP Address for the static route.
       */
      nexthop: string;

      /**
       * IP Prefix in Classless Inter-Domain Routing format.
       */
      prefix: string;

      /**
       * Priority of the static route.
       */
      priority: number;

      /**
       * Identifier
       */
      id?: string;

      /**
       * When the route was created.
       */
      created_on?: string;

      /**
       * An optional human provided description of the static route.
       */
      description?: string;

      /**
       * When the route was last modified.
       */
      modified_on?: string;

      /**
       * Used only for ECMP routes.
       */
      scope?: Route.Scope;

      /**
       * Optional weight of the ECMP scope - if provided.
       */
      weight?: number;
    }

    export namespace Route {
      /**
       * Used only for ECMP routes.
       */
      export interface Scope {
        /**
         * List of colo names for the ECMP scope.
         */
        colo_names?: Array<string>;

        /**
         * List of colo regions for the ECMP scope.
         */
        colo_regions?: Array<string>;
      }
    }
  }
}

export interface RouteMagicStaticRoutesUpdateManyRoutesResponse {
  errors?: Array<RouteMagicStaticRoutesUpdateManyRoutesResponse.Error>;

  messages?: Array<RouteMagicStaticRoutesUpdateManyRoutesResponse.Message>;

  result?: RouteMagicStaticRoutesUpdateManyRoutesResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace RouteMagicStaticRoutesUpdateManyRoutesResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    modified?: boolean;

    modified_routes?: Array<Result.ModifiedRoute>;
  }

  export namespace Result {
    export interface ModifiedRoute {
      /**
       * The next-hop IP Address for the static route.
       */
      nexthop: string;

      /**
       * IP Prefix in Classless Inter-Domain Routing format.
       */
      prefix: string;

      /**
       * Priority of the static route.
       */
      priority: number;

      /**
       * Identifier
       */
      id?: string;

      /**
       * When the route was created.
       */
      created_on?: string;

      /**
       * An optional human provided description of the static route.
       */
      description?: string;

      /**
       * When the route was last modified.
       */
      modified_on?: string;

      /**
       * Used only for ECMP routes.
       */
      scope?: ModifiedRoute.Scope;

      /**
       * Optional weight of the ECMP scope - if provided.
       */
      weight?: number;
    }

    export namespace ModifiedRoute {
      /**
       * Used only for ECMP routes.
       */
      export interface Scope {
        /**
         * List of colo names for the ECMP scope.
         */
        colo_names?: Array<string>;

        /**
         * List of colo regions for the ECMP scope.
         */
        colo_regions?: Array<string>;
      }
    }
  }
}

export interface RouteUpdateParams {
  /**
   * The next-hop IP Address for the static route.
   */
  nexthop: string;

  /**
   * IP Prefix in Classless Inter-Domain Routing format.
   */
  prefix: string;

  /**
   * Priority of the static route.
   */
  priority: number;

  /**
   * An optional human provided description of the static route.
   */
  description?: string;

  /**
   * Used only for ECMP routes.
   */
  scope?: RouteUpdateParams.Scope;

  /**
   * Optional weight of the ECMP scope - if provided.
   */
  weight?: number;
}

export namespace RouteUpdateParams {
  /**
   * Used only for ECMP routes.
   */
  export interface Scope {
    /**
     * List of colo names for the ECMP scope.
     */
    colo_names?: Array<string>;

    /**
     * List of colo regions for the ECMP scope.
     */
    colo_regions?: Array<string>;
  }
}

export interface RouteDeleteParams {
  routes: Array<RouteDeleteParams.Route>;
}

export namespace RouteDeleteParams {
  export interface Route {}
}

export type RouteMagicStaticRoutesCreateRoutesParams = unknown;

export interface RouteMagicStaticRoutesUpdateManyRoutesParams {
  routes: Array<RouteMagicStaticRoutesUpdateManyRoutesParams.Route>;
}

export namespace RouteMagicStaticRoutesUpdateManyRoutesParams {
  export interface Route {
    /**
     * An optional human provided description of the static route.
     */
    description?: string;

    /**
     * The next-hop IP Address for the static route.
     */
    nexthop?: string;

    /**
     * IP Prefix in Classless Inter-Domain Routing format.
     */
    prefix?: string;

    /**
     * Priority of the static route.
     */
    priority?: number;

    /**
     * Used only for ECMP routes.
     */
    scope?: Route.Scope;

    /**
     * Optional weight of the ECMP scope - if provided.
     */
    weight?: number;
  }

  export namespace Route {
    /**
     * Used only for ECMP routes.
     */
    export interface Scope {
      /**
       * List of colo names for the ECMP scope.
       */
      colo_names?: Array<string>;

      /**
       * List of colo regions for the ECMP scope.
       */
      colo_regions?: Array<string>;
    }
  }
}

export namespace Routes {
  export import RouteRetrieveResponse = RoutesAPI.RouteRetrieveResponse;
  export import RouteUpdateResponse = RoutesAPI.RouteUpdateResponse;
  export import RouteDeleteResponse = RoutesAPI.RouteDeleteResponse;
  export import RouteDeleteManyResponse = RoutesAPI.RouteDeleteManyResponse;
  export import RouteMagicStaticRoutesCreateRoutesResponse = RoutesAPI.RouteMagicStaticRoutesCreateRoutesResponse;
  export import RouteMagicStaticRoutesListRoutesResponse = RoutesAPI.RouteMagicStaticRoutesListRoutesResponse;
  export import RouteMagicStaticRoutesUpdateManyRoutesResponse = RoutesAPI.RouteMagicStaticRoutesUpdateManyRoutesResponse;
  export import RouteUpdateParams = RoutesAPI.RouteUpdateParams;
  export import RouteDeleteParams = RoutesAPI.RouteDeleteParams;
  export import RouteMagicStaticRoutesCreateRoutesParams = RoutesAPI.RouteMagicStaticRoutesCreateRoutesParams;
  export import RouteMagicStaticRoutesUpdateManyRoutesParams = RoutesAPI.RouteMagicStaticRoutesUpdateManyRoutesParams;
}
