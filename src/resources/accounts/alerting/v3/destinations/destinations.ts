// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as EligibleAPI from 'cloudflare/resources/accounts/alerting/v3/destinations/eligible';
import * as PagerdutyAPI from 'cloudflare/resources/accounts/alerting/v3/destinations/pagerduty';
import * as WebhooksAPI from 'cloudflare/resources/accounts/alerting/v3/destinations/webhooks';

export class Destinations extends APIResource {
  eligible: EligibleAPI.Eligible = new EligibleAPI.Eligible(this._client);
  pagerduty: PagerdutyAPI.Pagerduty = new PagerdutyAPI.Pagerduty(this._client);
  webhooks: WebhooksAPI.Webhooks = new WebhooksAPI.Webhooks(this._client);
}

export namespace Destinations {
  export import Eligible = EligibleAPI.Eligible;
  export import EligibleListResponse = EligibleAPI.EligibleListResponse;
  export import Pagerduty = PagerdutyAPI.Pagerduty;
  export import PagerdutyListResponse = PagerdutyAPI.PagerdutyListResponse;
  export import PagerdutyDeleteResponse = PagerdutyAPI.PagerdutyDeleteResponse;
  export import PagerdutyConnectResponse = PagerdutyAPI.PagerdutyConnectResponse;
  export import PagerdutyLinkResponse = PagerdutyAPI.PagerdutyLinkResponse;
  export import Webhooks = WebhooksAPI.Webhooks;
  export import WebhookCreateResponse = WebhooksAPI.WebhookCreateResponse;
  export import WebhookRetrieveResponse = WebhooksAPI.WebhookRetrieveResponse;
  export import WebhookListResponse = WebhooksAPI.WebhookListResponse;
  export import WebhookDeleteResponse = WebhooksAPI.WebhookDeleteResponse;
  export import WebhookCreateParams = WebhooksAPI.WebhookCreateParams;
}
