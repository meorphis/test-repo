// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as JobsAPI from 'cloudflare/resources/zones/logpushes/datasets/jobs';

export class Jobs extends APIResource {
  /**
   * Lists Logpush jobs for a zone for a dataset.
   */
  getZonesZoneIdentifierLogpushDatasetsDatasetJobs(
    zoneIdentifier: string,
    dataset: string | null,
    options?: Core.RequestOptions,
  ): Core.APIPromise<JobGetZonesZoneIdentifierLogpushDatasetsDatasetJobsResponse> {
    return this._client.get(`/zones/${zoneIdentifier}/logpush/datasets/${dataset}/jobs`, options);
  }
}

export interface JobGetZonesZoneIdentifierLogpushDatasetsDatasetJobsResponse {
  errors?: Array<JobGetZonesZoneIdentifierLogpushDatasetsDatasetJobsResponse.Error>;

  messages?: Array<JobGetZonesZoneIdentifierLogpushDatasetsDatasetJobsResponse.Message>;

  result?: Array<JobGetZonesZoneIdentifierLogpushDatasetsDatasetJobsResponse.Result | null>;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace JobGetZonesZoneIdentifierLogpushDatasetsDatasetJobsResponse {
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
     * Unique id of the job.
     */
    id?: number;

    /**
     * Name of the dataset.
     */
    dataset?: string | null;

    /**
     * Uniquely identifies a resource (such as an s3 bucket) where data will be pushed.
     * Additional configuration parameters supported by the destination may be
     * included.
     */
    destination_conf?: string;

    /**
     * Flag that indicates if the job is enabled.
     */
    enabled?: boolean;

    /**
     * If not null, the job is currently failing. Failures are usually repetitive
     * (example: no permissions to write to destination bucket). Only the last failure
     * is recorded. On successful execution of a job the error_message and last_error
     * are set to null.
     */
    error_message?: string | null;

    /**
     * The frequency at which Cloudflare sends batches of logs to your destination.
     * Setting frequency to high sends your logs in larger quantities of smaller files.
     * Setting frequency to low sends logs in smaller quantities of larger files.
     */
    frequency?: 'high' | 'low' | null;

    /**
     * Records the last time for which logs have been successfully pushed. If the last
     * successful push was for logs range 2018-07-23T10:00:00Z to 2018-07-23T10:01:00Z
     * then the value of this field will be 2018-07-23T10:01:00Z. If the job has never
     * run or has just been enabled and hasn't run yet then the field will be empty.
     */
    last_complete?: string | null;

    /**
     * Records the last time the job failed. If not null, the job is currently failing.
     * If null, the job has either never failed or has run successfully at least once
     * since last failure. See also the error_message field.
     */
    last_error?: string | null;

    /**
     * Configuration string. It specifies things like requested fields and timestamp
     * formats. If migrating from the logpull api, copy the url (full url or just the
     * query string) of your call here, and logpush will keep on making this call for
     * you, setting start and end times appropriately.
     */
    logpull_options?: string | null;

    /**
     * Optional human readable job name. Not unique. Cloudflare suggests that you set
     * this to a meaningful string, like the domain name, to make it easier to identify
     * your job.
     */
    name?: string | null;
  }
}

export namespace Jobs {
  export import JobGetZonesZoneIdentifierLogpushDatasetsDatasetJobsResponse = JobsAPI.JobGetZonesZoneIdentifierLogpushDatasetsDatasetJobsResponse;
}
