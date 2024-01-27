// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as SummariesAPI from 'cloudflare/resources/radar/http/summaries/summaries';
import * as TimeseriesGroupsAPI from 'cloudflare/resources/radar/http/timeseries-groups/timeseries-groups';
import * as TopsAPI from 'cloudflare/resources/radar/http/tops/tops';

export class HTTP extends APIResource {
  summaries: SummariesAPI.Summaries = new SummariesAPI.Summaries(this._client);
  timeseriesGroups: TimeseriesGroupsAPI.TimeseriesGroups = new TimeseriesGroupsAPI.TimeseriesGroups(
    this._client,
  );
  tops: TopsAPI.Tops = new TopsAPI.Tops(this._client);
}

export namespace HTTP {
  export import Summaries = SummariesAPI.Summaries;
  export import TimeseriesGroups = TimeseriesGroupsAPI.TimeseriesGroups;
  export import Tops = TopsAPI.Tops;
}
