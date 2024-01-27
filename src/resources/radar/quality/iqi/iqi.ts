// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as SummaryAPI from 'cloudflare/resources/radar/quality/iqi/summary';
import * as TimeseriesGroupsAPI from 'cloudflare/resources/radar/quality/iqi/timeseries-groups';

export class Iqi extends APIResource {
  summary: SummaryAPI.Summary = new SummaryAPI.Summary(this._client);
  timeseriesGroups: TimeseriesGroupsAPI.TimeseriesGroups = new TimeseriesGroupsAPI.TimeseriesGroups(
    this._client,
  );
}

export namespace Iqi {
  export import Summary = SummaryAPI.Summary;
  export import SummaryRetrieveResponse = SummaryAPI.SummaryRetrieveResponse;
  export import SummaryRetrieveParams = SummaryAPI.SummaryRetrieveParams;
  export import TimeseriesGroups = TimeseriesGroupsAPI.TimeseriesGroups;
  export import TimeseriesGroupListResponse = TimeseriesGroupsAPI.TimeseriesGroupListResponse;
  export import TimeseriesGroupListParams = TimeseriesGroupsAPI.TimeseriesGroupListParams;
}
