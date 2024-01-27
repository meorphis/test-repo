// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DiagnosesAPI from 'cloudflare/resources/zones/railguns/diagnoses';

export class Diagnoses extends APIResource {
  /**
   * Tests the Railgun connection to the zone.
   */
  railgunConnectionsForAZoneTestRailgunConnection(
    zoneIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DiagnosisRailgunConnectionsForAZoneTestRailgunConnectionResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/railguns/${identifier}/diagnose`, options);
  }
}

export interface DiagnosisRailgunConnectionsForAZoneTestRailgunConnectionResponse {
  errors?: Array<DiagnosisRailgunConnectionsForAZoneTestRailgunConnectionResponse.Error>;

  messages?: Array<DiagnosisRailgunConnectionsForAZoneTestRailgunConnectionResponse.Message>;

  result?: DiagnosisRailgunConnectionsForAZoneTestRailgunConnectionResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace DiagnosisRailgunConnectionsForAZoneTestRailgunConnectionResponse {
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
     * Hash version of body.
     */
    body_hash?: string;

    /**
     * Size of the body in bytes.
     */
    body_size?: string;

    /**
     * Lists any `cf-cache-status` present.
     */
    'cf-cache-status'?: string;

    /**
     * Lists any `cf-ray` present.
     */
    'cf-ray'?: string;

    /**
     * Lists any `cf-wan-error` present.
     */
    'cf-wan-error'?: string;

    /**
     * Whether Cloudflare is enabled on the host.
     */
    cloudflare?: string;

    /**
     * Connection closed or open.
     */
    connection_close?: boolean;

    /**
     * Amount of seconds that the test lasted.
     */
    elapsed_time?: string;

    /**
     * The hostname queried.
     */
    host_name?: string;

    /**
     * The HTTP status response code.
     */
    http_status?: number;

    /**
     * HTTP Method used to test the connection.
     */
    method?: 'GET' | 'POST';

    /**
     * What headers are missing.
     */
    missing_headers?: string;

    /**
     * Protocol used to test the connection.
     */
    protocol?: string;

    /**
     * Indicates if Railgun is enabled on the queried hostname.
     */
    railgun?: string;

    /**
     * HTTP Status code.
     */
    response_status?: string;

    /**
     * Url of the domain you can compare the connection to.
     */
    url?: string;
  }
}

export namespace Diagnoses {
  export import DiagnosisRailgunConnectionsForAZoneTestRailgunConnectionResponse = DiagnosesAPI.DiagnosisRailgunConnectionsForAZoneTestRailgunConnectionResponse;
}
