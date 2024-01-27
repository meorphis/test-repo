// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as WebhooksAPI from 'cloudflare/resources/alerting/v3/destinations/webhooks';

export class Webhooks extends APIResource {
  /**
   * Update a webhook destination.
   */
  update(
    accountId: string,
    webhookId: string,
    body: WebhookUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebhookUpdateResponse> {
    return this._client.put(`/accounts/${accountId}/alerting/v3/destinations/webhooks/${webhookId}`, {
      body,
      ...options,
    });
  }
}

export interface WebhookUpdateResponse {
  errors?: Array<WebhookUpdateResponse.Error>;

  messages?: Array<WebhookUpdateResponse.Message>;

  result?: WebhookUpdateResponse.Result;

  /**
   * Whether the API call was successful
   */
  success?: true;
}

export namespace WebhookUpdateResponse {
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

export interface WebhookUpdateParams {
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
  export import WebhookUpdateResponse = WebhooksAPI.WebhookUpdateResponse;
  export import WebhookUpdateParams = WebhooksAPI.WebhookUpdateParams;
}
