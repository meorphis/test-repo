// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as EdgesAPI from 'cloudflare/resources/zones/logpushes/edges';

export class Edges extends APIResource {
  /**
   * Lists Instant Logs jobs for a zone.
   */
  getZonesZoneIdentifierLogpushEdgeJobs(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EdgeGetZonesZoneIdentifierLogpushEdgeJobsResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/logpush/edge`, options);
  }

  /**
   * Creates a new Instant Logs job for a zone.
   */
  postZonesZoneIdentifierLogpushEdgeJobs(
    zoneIdentifier: string,
    body: EdgePostZonesZoneIdentifierLogpushEdgeJobsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EdgePostZonesZoneIdentifierLogpushEdgeJobsResponse> {
    return this._client.post(`/zones/${zoneIdentifier}/logpush/edge`, { body, ...options });
  }
}

export interface EdgeGetZonesZoneIdentifierLogpushEdgeJobsResponse {
  errors?: Array<EdgeGetZonesZoneIdentifierLogpushEdgeJobsResponse.Error>;

  messages?: Array<EdgeGetZonesZoneIdentifierLogpushEdgeJobsResponse.Message>;

  result?: Array<EdgeGetZonesZoneIdentifierLogpushEdgeJobsResponse.Result | null>;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace EdgeGetZonesZoneIdentifierLogpushEdgeJobsResponse {
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
     * Unique WebSocket address that will receive messages from Cloudflare’s edge.
     */
    destination_conf?: string;

    /**
     * Comma-separated list of fields.
     */
    fields?: string;

    /**
     * Filters to drill down into specific events.
     */
    filter?: string;

    /**
     * The sample parameter is the sample rate of the records set by the client:
     * "sample": 1 is 100% of records "sample": 10 is 10% and so on.
     */
    sample?: number;

    /**
     * Unique session id of the job.
     */
    session_id?: string;
  }
}

export interface EdgePostZonesZoneIdentifierLogpushEdgeJobsResponse {
  errors?: Array<EdgePostZonesZoneIdentifierLogpushEdgeJobsResponse.Error>;

  messages?: Array<EdgePostZonesZoneIdentifierLogpushEdgeJobsResponse.Message>;

  result?: EdgePostZonesZoneIdentifierLogpushEdgeJobsResponse.Result | null;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace EdgePostZonesZoneIdentifierLogpushEdgeJobsResponse {
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
     * Unique WebSocket address that will receive messages from Cloudflare’s edge.
     */
    destination_conf?: string;

    /**
     * Comma-separated list of fields.
     */
    fields?: string;

    /**
     * Filters to drill down into specific events.
     */
    filter?: string;

    /**
     * The sample parameter is the sample rate of the records set by the client:
     * "sample": 1 is 100% of records "sample": 10 is 10% and so on.
     */
    sample?: number;

    /**
     * Unique session id of the job.
     */
    session_id?: string;
  }
}

export interface EdgePostZonesZoneIdentifierLogpushEdgeJobsParams {
  /**
   * Comma-separated list of fields.
   */
  fields?: string;

  /**
   * Filters to drill down into specific events.
   */
  filter?: string;

  /**
   * The sample parameter is the sample rate of the records set by the client:
   * "sample": 1 is 100% of records "sample": 10 is 10% and so on.
   */
  sample?: number;
}

export namespace Edges {
  export import EdgeGetZonesZoneIdentifierLogpushEdgeJobsResponse = EdgesAPI.EdgeGetZonesZoneIdentifierLogpushEdgeJobsResponse;
  export import EdgePostZonesZoneIdentifierLogpushEdgeJobsResponse = EdgesAPI.EdgePostZonesZoneIdentifierLogpushEdgeJobsResponse;
  export import EdgePostZonesZoneIdentifierLogpushEdgeJobsParams = EdgesAPI.EdgePostZonesZoneIdentifierLogpushEdgeJobsParams;
}
