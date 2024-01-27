// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as RailgunsAPI from 'cloudflare/resources/zones/railguns/railguns';
import * as DiagnosesAPI from 'cloudflare/resources/zones/railguns/diagnoses';

export class Railguns extends APIResource {
  diagnoses: DiagnosesAPI.Diagnoses = new DiagnosesAPI.Diagnoses(this._client);

  /**
   * Lists details about a specific Railgun.
   */
  retrieve(
    zoneIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RailgunRetrieveResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/railguns/${identifier}`, options);
  }

  /**
   * Connect or disconnect a Railgun.
   */
  update(
    zoneIdentifier: string,
    identifier: string,
    body: RailgunUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RailgunUpdateResponse> {
    return this._client.patch(`/zones/${zoneIdentifier}/railguns/${identifier}`, { body, ...options });
  }

  /**
   * A list of available Railguns the zone can use.
   */
  railgunConnectionsForAZoneListAvailableRailguns(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RailgunRailgunConnectionsForAZoneListAvailableRailgunsResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/railguns`, options);
  }
}

export interface RailgunRetrieveResponse {
  errors?: Array<RailgunRetrieveResponse.Error>;

  messages?: Array<RailgunRetrieveResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace RailgunRetrieveResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface RailgunUpdateResponse {
  errors?: Array<RailgunUpdateResponse.Error>;

  messages?: Array<RailgunUpdateResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace RailgunUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface RailgunRailgunConnectionsForAZoneListAvailableRailgunsResponse {
  errors?: Array<RailgunRailgunConnectionsForAZoneListAvailableRailgunsResponse.Error>;

  messages?: Array<RailgunRailgunConnectionsForAZoneListAvailableRailgunsResponse.Message>;

  result?: Array<unknown>;

  result_info?: RailgunRailgunConnectionsForAZoneListAvailableRailgunsResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace RailgunRailgunConnectionsForAZoneListAvailableRailgunsResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
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

export interface RailgunUpdateParams {
  /**
   * A flag indicating whether the given zone is connected to the Railgun.
   */
  connected: boolean;
}

export namespace Railguns {
  export import RailgunRetrieveResponse = RailgunsAPI.RailgunRetrieveResponse;
  export import RailgunUpdateResponse = RailgunsAPI.RailgunUpdateResponse;
  export import RailgunRailgunConnectionsForAZoneListAvailableRailgunsResponse = RailgunsAPI.RailgunRailgunConnectionsForAZoneListAvailableRailgunsResponse;
  export import RailgunUpdateParams = RailgunsAPI.RailgunUpdateParams;
  export import Diagnoses = DiagnosesAPI.Diagnoses;
  export import DiagnosisRailgunConnectionsForAZoneTestRailgunConnectionResponse = DiagnosesAPI.DiagnosisRailgunConnectionsForAZoneTestRailgunConnectionResponse;
}
