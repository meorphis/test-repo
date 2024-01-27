// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ConsumersAPI from 'cloudflare/resources/accounts/workers/queues/consumers';

export class Consumers extends APIResource {
  /**
   * Updates the consumer for a queue, or creates one if it does not exist.
   */
  update(
    accountIdentifier: string,
    name: string,
    consumerName: string,
    body: ConsumerUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConsumerUpdateResponse> {
    return this._client.put(
      `/accounts/${accountIdentifier}/workers/queues/${name}/consumers/${consumerName}`,
      { body, ...options },
    );
  }

  /**
   * Returns the consumers for a queue.
   */
  list(
    accountIdentifier: string,
    name: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConsumerListResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/workers/queues/${name}/consumers`, options);
  }

  /**
   * Deletes the consumer for a queue.
   */
  delete(
    accountIdentifier: string,
    name: string,
    consumerName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConsumerDeleteResponse> {
    return this._client.delete(
      `/accounts/${accountIdentifier}/workers/queues/${name}/consumers/${consumerName}`,
      options,
    );
  }

  /**
   * Creates a new consumer for a queue.
   */
  queueCreateQueueConsumer(
    accountIdentifier: string,
    name: string,
    body: ConsumerQueueCreateQueueConsumerParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConsumerQueueCreateQueueConsumerResponse> {
    return this._client.post(`/accounts/${accountIdentifier}/workers/queues/${name}/consumers`, {
      body,
      ...options,
    });
  }
}

export interface ConsumerUpdateResponse {
  errors?: Array<ConsumerUpdateResponse.Error>;

  messages?: Array<ConsumerUpdateResponse.Message>;

  result?: ConsumerUpdateResponse.Result;

  result_info?: ConsumerUpdateResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ConsumerUpdateResponse {
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

    dead_letter_queue?: unknown;

    environment?: unknown;

    queue_name?: unknown;

    script_name?: unknown;

    settings?: Result.Settings;
  }

  export namespace Result {
    export interface Settings {
      batch_size?: number;

      max_retries?: number;

      max_wait_time_ms?: number;
    }
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

export interface ConsumerListResponse {
  errors?: Array<unknown> | null;

  messages?: Array<unknown> | null;

  result?: Array<ConsumerListResponse.Result>;

  result_info?: ConsumerListResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ConsumerListResponse {
  export interface Result {
    created_on?: unknown;

    environment?: unknown;

    queue_name?: unknown;

    service?: unknown;

    settings?: Result.Settings;
  }

  export namespace Result {
    export interface Settings {
      batch_size?: number;

      max_retries?: number;

      max_wait_time_ms?: number;
    }
  }

  export interface ResultInfo {
    count?: unknown;

    page?: unknown;

    per_page?: unknown;

    total_count?: unknown;

    total_pages?: unknown;
  }
}

export interface ConsumerDeleteResponse {
  errors?: Array<ConsumerDeleteResponse.Error>;

  messages?: Array<ConsumerDeleteResponse.Message>;

  result?: Array<unknown> | null;

  result_info?: ConsumerDeleteResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ConsumerDeleteResponse {
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

export interface ConsumerQueueCreateQueueConsumerResponse {
  errors?: Array<ConsumerQueueCreateQueueConsumerResponse.Error>;

  messages?: Array<ConsumerQueueCreateQueueConsumerResponse.Message>;

  result?: ConsumerQueueCreateQueueConsumerResponse.Result;

  result_info?: ConsumerQueueCreateQueueConsumerResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace ConsumerQueueCreateQueueConsumerResponse {
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

    dead_letter_queue?: string;

    environment?: unknown;

    queue_name?: unknown;

    script_name?: unknown;

    settings?: Result.Settings;
  }

  export namespace Result {
    export interface Settings {
      batch_size?: number;

      max_retries?: number;

      max_wait_time_ms?: number;
    }
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

export type ConsumerUpdateParams = unknown;

export type ConsumerQueueCreateQueueConsumerParams = unknown;

export namespace Consumers {
  export import ConsumerUpdateResponse = ConsumersAPI.ConsumerUpdateResponse;
  export import ConsumerListResponse = ConsumersAPI.ConsumerListResponse;
  export import ConsumerDeleteResponse = ConsumersAPI.ConsumerDeleteResponse;
  export import ConsumerQueueCreateQueueConsumerResponse = ConsumersAPI.ConsumerQueueCreateQueueConsumerResponse;
  export import ConsumerUpdateParams = ConsumersAPI.ConsumerUpdateParams;
  export import ConsumerQueueCreateQueueConsumerParams = ConsumersAPI.ConsumerQueueCreateQueueConsumerParams;
}
