// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DiscoveryAPI from 'cloudflare/resources/zones/api-gateway/discovery';

export class Discovery extends APIResource {
  /**
   * Retrieve the most up to date view of discovered operations, rendered as OpenAPI
   * schemas
   */
  apiShieldEndpointManagementRetrieveAPIDiscoveryResultsForAZone(
    zoneId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DiscoveryAPIShieldEndpointManagementRetrieveAPIDiscoveryResultsForAZoneResponse> {
    return this._client.get(`/zones/${zoneId}/api_gateway/discovery`, options);
  }
}

export interface DiscoveryAPIShieldEndpointManagementRetrieveAPIDiscoveryResultsForAZoneResponse {
  errors?: Array<DiscoveryAPIShieldEndpointManagementRetrieveAPIDiscoveryResultsForAZoneResponse.Error>;

  messages?: Array<DiscoveryAPIShieldEndpointManagementRetrieveAPIDiscoveryResultsForAZoneResponse.Message>;

  result?: DiscoveryAPIShieldEndpointManagementRetrieveAPIDiscoveryResultsForAZoneResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: boolean;
}

export namespace DiscoveryAPIShieldEndpointManagementRetrieveAPIDiscoveryResultsForAZoneResponse {
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

export namespace Discovery {
  export import DiscoveryAPIShieldEndpointManagementRetrieveAPIDiscoveryResultsForAZoneResponse = DiscoveryAPI.DiscoveryAPIShieldEndpointManagementRetrieveAPIDiscoveryResultsForAZoneResponse;
}
