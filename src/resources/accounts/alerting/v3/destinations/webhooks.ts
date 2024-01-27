// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as WebhooksAPI from 'cloudflare/resources/accounts/alerting/v3/destinations/webhooks';

export class Webhooks extends APIResource {
  /**
   * Creates a new webhook destination.
   */
  create(
    accountId: string,
    body: WebhookCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebhookCreateResponse> {
    return this._client.post(`/accounts/${accountId}/alerting/v3/destinations/webhooks`, {
      body,
      ...options,
    });
  }

  /**
   * Get details for a single webhooks destination.
   */
  retrieve(
    accountId: string,
    webhookId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebhookRetrieveResponse> {
    return this._client.get(`/accounts/${accountId}/alerting/v3/destinations/webhooks/${webhookId}`, options);
  }

  /**
   * Gets a list of all configured webhook destinations.
   */
  list(accountId: string, options?: Core.RequestOptions): Core.APIPromise<WebhookListResponse> {
    return this._client.get(`/accounts/${accountId}/alerting/v3/destinations/webhooks`, options);
  }

  /**
   * Delete a configured webhook destination.
   */
  delete(
    accountId: string,
    webhookId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebhookDeleteResponse> {
    return this._client.delete(
      `/accounts/${accountId}/alerting/v3/destinations/webhooks/${webhookId}`,
      options,
    );
  }
}

export interface WebhookCreateResponse {
  errors?: Array<WebhookCreateResponse.Error>;

  messages?: Array<WebhookCreateResponse.Message>;

  result?: WebhookCreateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace WebhookCreateResponse {
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
     * UUID
     */
    id?: string;
  }
}

export interface WebhookRetrieveResponse {
  errors?: Array<WebhookRetrieveResponse.Error>;

  messages?: Array<WebhookRetrieveResponse.Message>;

  result?: WebhookRetrieveResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace WebhookRetrieveResponse {
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
     * The unique identifier of a webhook
     */
    id?: string;

    /**
     * Timestamp of when the webhook destination was created.
     */
    created_at?: string;

    /**
     * Timestamp of the last time an attempt to dispatch a notification to this webhook
     * failed.
     */
    last_failure?: string;

    /**
     * Timestamp of the last time Cloudflare was able to successfully dispatch a
     * notification using this webhook.
     */
    last_success?: string;

    /**
     * The name of the webhook destination. This will be included in the request body
     * when you receive a webhook notification.
     */
    name?: string;

    /**
     * Optional secret that will be passed in the `cf-webhook-auth` header when
     * dispatching generic webhook notifications or formatted for supported
     * destinations. Secrets are not returned in any API response body.
     */
    secret?: string;

    /**
     * Type of webhook endpoint.
     */
    type?: 'slack' | 'generic' | 'gchat';

    /**
     * The POST endpoint to call when dispatching a notification.
     */
    url?: string;
  }
}

export interface WebhookListResponse {
  errors?: Array<WebhookListResponse.Error>;

  messages?: Array<WebhookListResponse.Message>;

  result?: Array<WebhookListResponse.Result>;

  result_info?: WebhookListResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace WebhookListResponse {
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
     * The unique identifier of a webhook
     */
    id?: string;

    /**
     * Timestamp of when the webhook destination was created.
     */
    created_at?: string;

    /**
     * Timestamp of the last time an attempt to dispatch a notification to this webhook
     * failed.
     */
    last_failure?: string;

    /**
     * Timestamp of the last time Cloudflare was able to successfully dispatch a
     * notification using this webhook.
     */
    last_success?: string;

    /**
     * The name of the webhook destination. This will be included in the request body
     * when you receive a webhook notification.
     */
    name?: string;

    /**
     * Optional secret that will be passed in the `cf-webhook-auth` header when
     * dispatching generic webhook notifications or formatted for supported
     * destinations. Secrets are not returned in any API response body.
     */
    secret?: string;

    /**
     * Type of webhook endpoint.
     */
    type?: 'slack' | 'generic' | 'gchat';

    /**
     * The POST endpoint to call when dispatching a notification.
     */
    url?: string;
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

export interface WebhookDeleteResponse {
  errors?: Array<WebhookDeleteResponse.Error>;

  messages?: Array<WebhookDeleteResponse.Message>;

  result?: Array<unknown> | null;

  result_info?: WebhookDeleteResponse.ResultInfo;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace WebhookDeleteResponse {
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

export interface WebhookCreateParams {
  /**
   * The name of the webhook destination. This will be included in the request body
   * when you receive a webhook notification.
   */
  name: string;

  /**
   * The POST endpoint to call when dispatching a notification.
   */
  url: string;

  /**
   * Optional secret that will be passed in the `cf-webhook-auth` header when
   * dispatching generic webhook notifications or formatted for supported
   * destinations. Secrets are not returned in any API response body.
   */
  secret?: string;
}

export namespace Webhooks {
  export import WebhookCreateResponse = WebhooksAPI.WebhookCreateResponse;
  export import WebhookRetrieveResponse = WebhooksAPI.WebhookRetrieveResponse;
  export import WebhookListResponse = WebhooksAPI.WebhookListResponse;
  export import WebhookDeleteResponse = WebhooksAPI.WebhookDeleteResponse;
  export import WebhookCreateParams = WebhooksAPI.WebhookCreateParams;
}
