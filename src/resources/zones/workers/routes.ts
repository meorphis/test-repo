// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as RoutesAPI from 'cloudflare/resources/zones/workers/routes';

export class Routes extends APIResource {
  /**
   * Returns information about a route, including URL pattern and Worker.
   */
  retrieve(
    zoneId: string,
    routeId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RouteRetrieveResponse> {
    return this._client.get(`/zones/${zoneId}/workers/routes/${routeId}`, options);
  }

  /**
   * Updates the URL pattern or Worker associated with a route.
   */
  update(
    zoneId: string,
    routeId: string,
    body: RouteUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RouteUpdateResponse> {
    return this._client.put(`/zones/${zoneId}/workers/routes/${routeId}`, { body, ...options });
  }

  /**
   * Deletes a route.
   */
  delete(
    zoneId: string,
    routeId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RouteDeleteResponse> {
    return this._client.delete(`/zones/${zoneId}/workers/routes/${routeId}`, options);
  }

  /**
   * Creates a route that maps a URL pattern to a Worker.
   */
  workerRoutesCreateRoute(
    zoneId: string,
    body: RouteWorkerRoutesCreateRouteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RouteWorkerRoutesCreateRouteResponse> {
    return this._client.post(`/zones/${zoneId}/workers/routes`, { body, ...options });
  }

  /**
   * Returns routes for a zone.
   */
  workerRoutesListRoutes(
    zoneId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RouteWorkerRoutesListRoutesResponse> {
    return this._client.get(`/zones/${zoneId}/workers/routes`, options);
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
    /**
     * Identifier
     */
    id: string;

    pattern: string;

    /**
     * Name of the script, used in URLs and route configuration.
     */
    script: string;
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
    /**
     * Identifier
     */
    id: string;

    pattern: string;

    /**
     * Name of the script, used in URLs and route configuration.
     */
    script: string;
  }
}

export interface RouteDeleteResponse {
  errors?: Array<RouteDeleteResponse.Error>;

  messages?: Array<RouteDeleteResponse.Message>;

  result?: unknown | string;

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
}

export interface RouteWorkerRoutesCreateRouteResponse {
  errors?: Array<RouteWorkerRoutesCreateRouteResponse.Error>;

  messages?: Array<RouteWorkerRoutesCreateRouteResponse.Message>;

  result?: unknown | string;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace RouteWorkerRoutesCreateRouteResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface RouteWorkerRoutesListRoutesResponse {
  errors?: Array<RouteWorkerRoutesListRoutesResponse.Error>;

  messages?: Array<RouteWorkerRoutesListRoutesResponse.Message>;

  result?: Array<RouteWorkerRoutesListRoutesResponse.Result>;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace RouteWorkerRoutesListRoutesResponse {
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
     * Identifier
     */
    id: string;

    pattern: string;

    /**
     * Name of the script, used in URLs and route configuration.
     */
    script: string;
  }
}

export interface RouteUpdateParams {
  pattern: string;

  /**
   * Name of the script, used in URLs and route configuration.
   */
  script?: string;
}

export interface RouteWorkerRoutesCreateRouteParams {
  pattern: string;

  /**
   * Name of the script, used in URLs and route configuration.
   */
  script?: string;
}

export namespace Routes {
  export import RouteRetrieveResponse = RoutesAPI.RouteRetrieveResponse;
  export import RouteUpdateResponse = RoutesAPI.RouteUpdateResponse;
  export import RouteDeleteResponse = RoutesAPI.RouteDeleteResponse;
  export import RouteWorkerRoutesCreateRouteResponse = RoutesAPI.RouteWorkerRoutesCreateRouteResponse;
  export import RouteWorkerRoutesListRoutesResponse = RoutesAPI.RouteWorkerRoutesListRoutesResponse;
  export import RouteUpdateParams = RoutesAPI.RouteUpdateParams;
  export import RouteWorkerRoutesCreateRouteParams = RoutesAPI.RouteWorkerRoutesCreateRouteParams;
}
