// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as WebhooksAPI from 'cloudflare/resources/accounts/streams/webhooks';

export class Webhooks extends APIResource {
  /**
   * Deletes a webhook.
   */
  delete(accountIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<WebhookDeleteResponse> {
    return this._client.delete(`/accounts/${accountIdentifier}/stream/webhook`, options);
  }

  /**
   * Creates a webhook notification.
   */
  streamWebhookCreateWebhooks(
    accountIdentifier: string,
    body: WebhookStreamWebhookCreateWebhooksParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebhookStreamWebhookCreateWebhooksResponse> {
    return this._client.put(`/accounts/${accountIdentifier}/stream/webhook`, { body, ...options });
  }

  /**
   * Retrieves a list of webhooks.
   */
  streamWebhookViewWebhooks(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebhookStreamWebhookViewWebhooksResponse> {
    return this._client.get(`/accounts/${accountIdentifier}/stream/webhook`, options);
  }
}

export interface WebhookDeleteResponse {
  errors?: Array<WebhookDeleteResponse.Error>;

  messages?: Array<WebhookDeleteResponse.Message>;

  result?: string;

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
}

export interface WebhookStreamWebhookCreateWebhooksResponse {
  errors?: Array<WebhookStreamWebhookCreateWebhooksResponse.Error>;

  messages?: Array<WebhookStreamWebhookCreateWebhooksResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace WebhookStreamWebhookCreateWebhooksResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface WebhookStreamWebhookViewWebhooksResponse {
  errors?: Array<WebhookStreamWebhookViewWebhooksResponse.Error>;

  messages?: Array<WebhookStreamWebhookViewWebhooksResponse.Message>;

  result?: unknown;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace WebhookStreamWebhookViewWebhooksResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
}

export interface WebhookStreamWebhookCreateWebhooksParams {
  /**
   * The URL where webhooks will be sent.
   */
  notificationUrl: string;
}

export namespace Webhooks {
  export import WebhookDeleteResponse = WebhooksAPI.WebhookDeleteResponse;
  export import WebhookStreamWebhookCreateWebhooksResponse = WebhooksAPI.WebhookStreamWebhookCreateWebhooksResponse;
  export import WebhookStreamWebhookViewWebhooksResponse = WebhooksAPI.WebhookStreamWebhookViewWebhooksResponse;
  export import WebhookStreamWebhookCreateWebhooksParams = WebhooksAPI.WebhookStreamWebhookCreateWebhooksParams;
}
