// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as AnalyticsAPI from 'cloudflare/resources/accounts/storages/analytics';
import * as KvsAPI from 'cloudflare/resources/accounts/storages/kvs/kvs';

export class Storages extends APIResource {
  analytics: AnalyticsAPI.Analytics = new AnalyticsAPI.Analytics(this._client);
  kvs: KvsAPI.Kvs = new KvsAPI.Kvs(this._client);
}

export namespace Storages {
  export import Analytics = AnalyticsAPI.Analytics;
  export import AnalyticsListResponse = AnalyticsAPI.AnalyticsListResponse;
  export import AnalyticsStoredResponse = AnalyticsAPI.AnalyticsStoredResponse;
  export import AnalyticsListParams = AnalyticsAPI.AnalyticsListParams;
  export import AnalyticsStoredParams = AnalyticsAPI.AnalyticsStoredParams;
  export import Kvs = KvsAPI.Kvs;
}
