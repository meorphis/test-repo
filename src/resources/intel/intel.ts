// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as IndicatorFeedsAPI from 'cloudflare/resources/intel/indicator-feeds/indicator-feeds';

export class Intel extends APIResource {
  indicatorFeeds: IndicatorFeedsAPI.IndicatorFeeds = new IndicatorFeedsAPI.IndicatorFeeds(this._client);
}

export namespace Intel {
  export import IndicatorFeeds = IndicatorFeedsAPI.IndicatorFeeds;
  export import IndicatorFeedCreateResponse = IndicatorFeedsAPI.IndicatorFeedCreateResponse;
  export import IndicatorFeedRetrieveResponse = IndicatorFeedsAPI.IndicatorFeedRetrieveResponse;
  export import IndicatorFeedListResponse = IndicatorFeedsAPI.IndicatorFeedListResponse;
  export import IndicatorFeedDataResponse = IndicatorFeedsAPI.IndicatorFeedDataResponse;
  export import IndicatorFeedSnapshotResponse = IndicatorFeedsAPI.IndicatorFeedSnapshotResponse;
  export import IndicatorFeedCreateParams = IndicatorFeedsAPI.IndicatorFeedCreateParams;
  export import IndicatorFeedSnapshotParams = IndicatorFeedsAPI.IndicatorFeedSnapshotParams;
}
