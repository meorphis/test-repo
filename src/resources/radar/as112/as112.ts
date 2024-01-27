// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as TimeseriesAPI from 'cloudflare/resources/radar/as112/timeseries';
import * as SummariesAPI from 'cloudflare/resources/radar/as112/summaries/summaries';
import * as TimeseriesGroupsAPI from 'cloudflare/resources/radar/as112/timeseries-groups/timeseries-groups';
import * as TopsAPI from 'cloudflare/resources/radar/as112/tops/tops';

export class As112 extends APIResource {
  summaries: SummariesAPI.Summaries = new SummariesAPI.Summaries(this._client);
  timeseries: TimeseriesAPI.Timeseries = new TimeseriesAPI.Timeseries(this._client);
  tops: TopsAPI.Tops = new TopsAPI.Tops(this._client);
  timeseriesGroups: TimeseriesGroupsAPI.TimeseriesGroups = new TimeseriesGroupsAPI.TimeseriesGroups(
    this._client,
  );
}

export namespace As112 {
  export import Summaries = SummariesAPI.Summaries;
  export import Timeseries = TimeseriesAPI.Timeseries;
  export import TimeseryListResponse = TimeseriesAPI.TimeseryListResponse;
  export import TimeseryListParams = TimeseriesAPI.TimeseryListParams;
  export import Tops = TopsAPI.Tops;
  export import TimeseriesGroups = TimeseriesGroupsAPI.TimeseriesGroups;
}
