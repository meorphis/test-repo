// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as SummaryAPI from 'cloudflare/resources/radar/connection-tamperings/summary';
import * as TimeseriesGroupsAPI from 'cloudflare/resources/radar/connection-tamperings/timeseries-groups';

export class ConnectionTamperings extends APIResource {
  summary: SummaryAPI.Summary = new SummaryAPI.Summary(this._client);
  timeseriesGroups: TimeseriesGroupsAPI.TimeseriesGroups = new TimeseriesGroupsAPI.TimeseriesGroups(
    this._client,
  );
}

export namespace ConnectionTamperings {
  export import Summary = SummaryAPI.Summary;
  export import SummaryListResponse = SummaryAPI.SummaryListResponse;
  export import SummaryListParams = SummaryAPI.SummaryListParams;
  export import TimeseriesGroups = TimeseriesGroupsAPI.TimeseriesGroups;
  export import TimeseriesGroupListResponse = TimeseriesGroupsAPI.TimeseriesGroupListResponse;
  export import TimeseriesGroupListParams = TimeseriesGroupsAPI.TimeseriesGroupListParams;
}
