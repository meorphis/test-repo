// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as AnalyticsAPI from 'cloudflare/resources/zones/spectrums/analytics/analytics';

export class Spectrums extends APIResource {
  analytics: AnalyticsAPI.Analytics = new AnalyticsAPI.Analytics(this._client);
}

export namespace Spectrums {
  export import Analytics = AnalyticsAPI.Analytics;
}
