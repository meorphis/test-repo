// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as WebhooksAPI from 'cloudflare/resources/alerting/v3/destinations/webhooks';

export class Destinations extends APIResource {
  webhooks: WebhooksAPI.Webhooks = new WebhooksAPI.Webhooks(this._client);
}

export namespace Destinations {
  export import Webhooks = WebhooksAPI.Webhooks;
  export import WebhookUpdateResponse = WebhooksAPI.WebhookUpdateResponse;
  export import WebhookUpdateParams = WebhooksAPI.WebhookUpdateParams;
}
