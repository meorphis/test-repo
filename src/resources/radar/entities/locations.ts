// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as LocationsAPI from 'cloudflare/resources/radar/entities/locations';

export class Locations extends APIResource {
  /**
   * Get the requested location information. A confidence level below `5` indicates a
   * low level of confidence in the traffic data - normally this happens because
   * Cloudflare has a small amount of traffic from/to this location).
   */
  retrieve(
    location: string,
    query?: LocationRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LocationRetrieveResponse>;
  retrieve(location: string, options?: Core.RequestOptions): Core.APIPromise<LocationRetrieveResponse>;
  retrieve(
    location: string,
    query: LocationRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LocationRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(location, {}, query);
    }
    return this._client.get(`/radar/entities/locations/${location}`, { query, ...options });
  }

  /**
   * Get a list of locations.
   */
  list(query?: LocationListParams, options?: Core.RequestOptions): Core.APIPromise<LocationListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<LocationListResponse>;
  list(
    query: LocationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LocationListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/radar/entities/locations', { query, ...options });
  }
}

export interface LocationRetrieveResponse {
  result: LocationRetrieveResponse.Result;

  success: boolean;
}

export namespace LocationRetrieveResponse {
  export interface Result {
    location: Result.Location;
  }

  export namespace Result {
    export interface Location {
      alpha2: string;

      confidenceLevel: number;

      latitude: string;

      longitude: string;

      name: string;

      region: string;

      subregion: string;
    }
  }
}

export interface LocationListResponse {
  result: LocationListResponse.Result;

  success: boolean;
}

export namespace LocationListResponse {
  export interface Result {
    locations: Array<Result.Location>;
  }

  export namespace Result {
    export interface Location {
      alpha2: string;

      latitude: string;

      longitude: string;

      name: string;
    }
  }
}

export interface LocationRetrieveParams {
  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';
}

export interface LocationListParams {
  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Limit the number of objects in the response.
   */
  limit?: number;

  /**
   * Comma separated list of locations.
   */
  location?: string;

  /**
   * Number of objects to skip before grabbing results.
   */
  offset?: number;
}

export namespace Locations {
  export import LocationRetrieveResponse = LocationsAPI.LocationRetrieveResponse;
  export import LocationListResponse = LocationsAPI.LocationListResponse;
  export import LocationRetrieveParams = LocationsAPI.LocationRetrieveParams;
  export import LocationListParams = LocationsAPI.LocationListParams;
}
