// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as JobsAPI from 'cloudflare/resources/accounts/logpushes/jobs';

export class Jobs extends APIResource {
  /**
   * Gets the details of a Logpush job.
   */
  retrieve(
    accountIdentifier: string,
    jobIdentifier: number,
    options?: Core.RequestOptions,
  ): Core.APIPromise<JobRetrieveResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/logpush/jobs/${jobIdentifier}`, options);
  }

  /**
   * Updates a Logpush job.
   */
  update(
    accountIdentifier: string,
    jobIdentifier: number,
    body: JobUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<JobUpdateResponse> {
    return this._client.put(`/accounts/${accountIdentifier}/logpush/jobs/${jobIdentifier}`, {
      body,
      ...options,
    });
  }

  /**
   * Deletes a Logpush job.
   */
  delete(
    accountIdentifier: string,
    jobIdentifier: number,
    options?: Core.RequestOptions,
  ): Core.APIPromise<JobDeleteResponse> {
    return this._client.delete(`/accounts/${accountIdentifier}/logpush/jobs/${jobIdentifier}`, options);
  }

  /**
   * Lists Logpush jobs for an account.
   */
  getAccountsAccountIdentifierLogpushJobs(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<JobGetAccountsAccountIdentifierLogpushJobsResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/logpush/jobs`, options);
  }

  /**
   * Creates a new Logpush job for an account.
   */
  postAccountsAccountIdentifierLogpushJobs(
    accountIdentifier: string,
    body: JobPostAccountsAccountIdentifierLogpushJobsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<JobPostAccountsAccountIdentifierLogpushJobsResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/logpush/jobs`, { body, ...options });
  }
}

export interface JobRetrieveResponse {
  errors?: Array<JobRetrieveResponse.Error>;

  messages?: Array<JobRetrieveResponse.Message>;

  result?: JobRetrieveResponse.Result | null;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace JobRetrieveResponse {
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

export interface JobUpdateResponse {
  errors?: Array<JobUpdateResponse.Error>;

  messages?: Array<JobUpdateResponse.Message>;

  result?: JobUpdateResponse.Result | null;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace JobUpdateResponse {
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

export interface JobDeleteResponse {
  errors?: Array<JobDeleteResponse.Error>;

  messages?: Array<JobDeleteResponse.Message>;

  result?: unknown | null;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace JobDeleteResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface JobGetAccountsAccountIdentifierLogpushJobsResponse {
  errors?: Array<JobGetAccountsAccountIdentifierLogpushJobsResponse.Error>;

  messages?: Array<JobGetAccountsAccountIdentifierLogpushJobsResponse.Message>;

  result?: Array<JobGetAccountsAccountIdentifierLogpushJobsResponse.Result | null>;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace JobGetAccountsAccountIdentifierLogpushJobsResponse {
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

export interface JobPostAccountsAccountIdentifierLogpushJobsResponse {
  errors?: Array<JobPostAccountsAccountIdentifierLogpushJobsResponse.Error>;

  messages?: Array<JobPostAccountsAccountIdentifierLogpushJobsResponse.Message>;

  result?: JobPostAccountsAccountIdentifierLogpushJobsResponse.Result | null;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace JobPostAccountsAccountIdentifierLogpushJobsResponse {
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

export interface JobUpdateParams {
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
   * The frequency at which Cloudflare sends batches of logs to your destination.
   * Setting frequency to high sends your logs in larger quantities of smaller files.
   * Setting frequency to low sends logs in smaller quantities of larger files.
   */
  frequency?: 'high' | 'low' | null;

  /**
   * Configuration string. It specifies things like requested fields and timestamp
   * formats. If migrating from the logpull api, copy the url (full url or just the
   * query string) of your call here, and logpush will keep on making this call for
   * you, setting start and end times appropriately.
   */
  logpull_options?: string | null;

  /**
   * Ownership challenge token to prove destination ownership.
   */
  ownership_challenge?: string;
}

export interface JobPostAccountsAccountIdentifierLogpushJobsParams {
  /**
   * Uniquely identifies a resource (such as an s3 bucket) where data will be pushed.
   * Additional configuration parameters supported by the destination may be
   * included.
   */
  destination_conf: string;

  /**
   * Name of the dataset.
   */
  dataset?: string | null;

  /**
   * Flag that indicates if the job is enabled.
   */
  enabled?: boolean;

  /**
   * The frequency at which Cloudflare sends batches of logs to your destination.
   * Setting frequency to high sends your logs in larger quantities of smaller files.
   * Setting frequency to low sends logs in smaller quantities of larger files.
   */
  frequency?: 'high' | 'low' | null;

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

  /**
   * Ownership challenge token to prove destination ownership.
   */
  ownership_challenge?: string;
}

export namespace Jobs {
  export import JobRetrieveResponse = JobsAPI.JobRetrieveResponse;
  export import JobUpdateResponse = JobsAPI.JobUpdateResponse;
  export import JobDeleteResponse = JobsAPI.JobDeleteResponse;
  export import JobGetAccountsAccountIdentifierLogpushJobsResponse = JobsAPI.JobGetAccountsAccountIdentifierLogpushJobsResponse;
  export import JobPostAccountsAccountIdentifierLogpushJobsResponse = JobsAPI.JobPostAccountsAccountIdentifierLogpushJobsResponse;
  export import JobUpdateParams = JobsAPI.JobUpdateParams;
  export import JobPostAccountsAccountIdentifierLogpushJobsParams = JobsAPI.JobPostAccountsAccountIdentifierLogpushJobsParams;
}
