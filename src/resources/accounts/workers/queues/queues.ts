// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as QueuesAPI from 'cloudflare/resources/accounts/workers/queues/queues';
import * as ConsumersAPI from 'cloudflare/resources/accounts/workers/queues/consumers';

export class Queues extends APIResource {
  consumers: ConsumersAPI.Consumers = new ConsumersAPI.Consumers(this._client);

  /**
   * Get information about a specific queue.
   */
  retrieve(
    accountIdentifier: string,
    name: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<QueueRetrieveResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/workers/queues/${name}`, options);
  }

  /**
   * Updates a queue.
   */
  update(
    accountIdentifier: string,
    name: string,
    body: QueueUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<QueueUpdateResponse> {
    return this._client.put(`/accounts/${accountIdentifier}/workers/queues/${name}`, { body, ...options });
  }

  /**
   * Returns the queues owned by an account.
   */
  list(accountIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<QueueListResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/workers/queues`, options);
  }

  /**
   * Deletes a queue.
   */
  delete(
    accountIdentifier: string,
    name: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<QueueDeleteResponse> {
    return this._client.delete(`/accounts/${accountIdentifier}/workers/queues/${name}`, options);
  }

  /**
   * Creates a new queue.
   */
  queueCreateQueue(
    accountIdentifier: string,
    body: QueueQueueCreateQueueParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<QueueQueueCreateQueueResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/workers/queues`, { body, ...options });
  }
}

export interface QueueRetrieveResponse {
  errors?: Array<QueueRetrieveResponse.Error>;

  messages?: Array<QueueRetrieveResponse.Message>;

  result?: QueueRetrieveResponse.Result;

  result_info?: QueueRetrieveResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace QueueRetrieveResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    consumers?: unknown;

    consumers_total_count?: unknown;

    created_on?: unknown;

    modified_on?: unknown;

    producers?: unknown;

    producers_total_count?: unknown;

    queue_id?: unknown;

    queue_name?: string;
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

export interface QueueUpdateResponse {
  errors?: Array<QueueUpdateResponse.Error>;

  messages?: Array<QueueUpdateResponse.Message>;

  result?: QueueUpdateResponse.Result;

  result_info?: QueueUpdateResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace QueueUpdateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    created_on?: unknown;

    modified_on?: unknown;

    queue_id?: unknown;

    queue_name?: string;
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

export interface QueueListResponse {
  errors?: Array<unknown> | null;

  messages?: Array<unknown> | null;

  result?: Array<QueueListResponse.Result>;

  result_info?: QueueListResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace QueueListResponse {
  export interface Result {
    consumers?: unknown;

    consumers_total_count?: unknown;

    created_on?: unknown;

    modified_on?: unknown;

    producers?: unknown;

    producers_total_count?: unknown;

    queue_id?: unknown;

    queue_name?: string;
  }

  export interface ResultInfo {
    count?: unknown;

    page?: unknown;

    per_page?: unknown;

    total_count?: unknown;

    total_pages?: unknown;
  }
}

export interface QueueDeleteResponse {
  errors?: Array<QueueDeleteResponse.Error>;

  messages?: Array<QueueDeleteResponse.Message>;

  result?: Array<unknown> | null;

  result_info?: QueueDeleteResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace QueueDeleteResponse {
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

export interface QueueQueueCreateQueueResponse {
  errors?: Array<QueueQueueCreateQueueResponse.Error>;

  messages?: Array<QueueQueueCreateQueueResponse.Message>;

  result?: QueueQueueCreateQueueResponse.Result;

  result_info?: QueueQueueCreateQueueResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace QueueQueueCreateQueueResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    created_on?: unknown;

    modified_on?: unknown;

    queue_id?: unknown;

    queue_name?: string;
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

export type QueueUpdateParams = unknown;

export type QueueQueueCreateQueueParams = unknown;

export namespace Queues {
  export import QueueRetrieveResponse = QueuesAPI.QueueRetrieveResponse;
  export import QueueUpdateResponse = QueuesAPI.QueueUpdateResponse;
  export import QueueListResponse = QueuesAPI.QueueListResponse;
  export import QueueDeleteResponse = QueuesAPI.QueueDeleteResponse;
  export import QueueQueueCreateQueueResponse = QueuesAPI.QueueQueueCreateQueueResponse;
  export import QueueUpdateParams = QueuesAPI.QueueUpdateParams;
  export import QueueQueueCreateQueueParams = QueuesAPI.QueueQueueCreateQueueParams;
  export import Consumers = ConsumersAPI.Consumers;
  export import ConsumerUpdateResponse = ConsumersAPI.ConsumerUpdateResponse;
  export import ConsumerListResponse = ConsumersAPI.ConsumerListResponse;
  export import ConsumerDeleteResponse = ConsumersAPI.ConsumerDeleteResponse;
  export import ConsumerQueueCreateQueueConsumerResponse = ConsumersAPI.ConsumerQueueCreateQueueConsumerResponse;
  export import ConsumerUpdateParams = ConsumersAPI.ConsumerUpdateParams;
  export import ConsumerQueueCreateQueueConsumerParams = ConsumersAPI.ConsumerQueueCreateQueueConsumerParams;
}
